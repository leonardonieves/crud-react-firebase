import firebase, {db} from './firebase'
import {collection, getDocs, getDoc, query, doc, addDoc, deleteDoc, updateDoc} from 'firebase/firestore'

export const savePersonName = (name) =>{
    addDoc(collection(db,'persons'),{name})
}

export const getPersons = async () =>{
    const result = await getDocs(query(collection(db,'persons')));
    return result;
}

export const deletePerson = async (id) => {
    await deleteDoc(doc(db,'persons', id))
}

export const updatePerson = async (id, name) => {
    await updateDoc(doc(db,'persons', id), {name})
}