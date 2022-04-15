import { useEffect, useState } from "react";
import {savePersonName, getPersons, deletePerson, updatePerson} from "./query"

function DashBoard(){
    const [personName , setPersonName] = useState(null);
    const[persons, setPersons] = useState(null);
    const [personId, setPersonId] = useState(null);

    const savePerson = async () => {
        await savePersonName(personName);
        getPersonsData()
    }

    const removePerson = async () => {
       await deletePerson(personId);
       getPersonsData();
    }

    const updatePersonData = async () => {
        await updatePerson(personId, personName);
        getPersonsData();
     }

    const getPersonsData = async ()=>  {
        const p = await getPersons();
        setPersons(p.docs);
    }

    useEffect(() => {
        getPersonsData();
    }, [])

    return (
        <div className="dashboard">
            <input type="text" onChange={e=>setPersonName(e.target.value)} placeholder="Person Name"/>
            <input type="text" onChange={e=>setPersonId(e.target.value)} placeholder="Person ID"/>

            <button onClick={savePerson}>Save</button>
            <button onClick={removePerson}> Delete</button>
            <button onClick={updatePersonData}> Update</button>

            {
                persons && persons.map(p=><p>{p.data().name }----{p.id}</p>)
            }
        </div>
    )
}

export default DashBoard;
