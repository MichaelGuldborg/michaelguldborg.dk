import {firestore} from './firebase';


const collectionName = "website"


export const setWebsite = (projectName, url, imageUrl) => {
    firestore.collection(collectionName).doc(projectName).set({
        url: url,
        imageUrl: imageUrl,
    }).catch((error) => console.log(error));
}

export const deleteWebsite = (id) => {
    firestore.collection(collectionName).doc(id).delete().catch((error) => console.log(error));
}

export const getAllWebsites = (callback) => {
    firestore.collection(collectionName).onSnapshot( (querySnapshot) => {
        callback(querySnapshot)
    });
}
