import { getFirestore } from "redux-firestore";
import { firestore } from "firebase";
import { notification } 

export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to db
        const firestore = getFirestore()
        console.log(post)
        firestore.collection('posts').add({ 
            ...post,
            author: getFirebase().auth().currentUser.displayName,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post})
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err })
        })
        notification.open({
            message: 'Prompt Posted!',
            description: 'I bet its really great man...',
            duration: 2
        })
    } 
}