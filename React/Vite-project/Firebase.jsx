import { addDoc, collection, onSnapshot, query, deleteDoc, doc, updateDoc, getDoc } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { db } from '../firebase'
import React from 'react'

const FirebaseRevision = () => {
    const [data, setData]= useState({
        name:"",
        age:"",
        salary:"",
        g1:""
    })
    const [allData, setAllData] = useState([])
    const [id, setId] = useState('')
    const handleChange = (e) => {
        const {name, value} = e.target;
        setData({
            ...data,
            [name] : value
        })
    }
    useEffect(() => {
        const q = query(collection(db, "empinfo"))
        const unsub = onSnapshot(q, (i) => {
            let todosArray = [];
            i.forEach((doc) => {
                todosArray.push({...doc.data(), id: doc.id});
            });
            setAllData(todosArray);
        });
        return () => unsub();
    }, []);
    const delData = async(id) => {
        await deleteDoc(doc(db, "empinfo", id))
    }
    const editData = async(id) => {
        let result = await getDoc(doc(db, "empinfo", id));
        setData(result.data())
        setId(id);
    }

    const saveData = async(e) => {
        e.preventDefault();
        if(id !== ''){
            await updateDoc(doc(db, "empinfo", id), data );
        }else{
            await addDoc(collection(db, "empinfo"), data);
        }
        
        setData({
            name:"",
            age:"",
            salary:"",
            g1:""
        })
        setId('');
    }
  return (
    <div>
        <form action="#" method='post' id='frm' onSubmit={saveData} >
            <label htmlFor="">Name:</label>
            <input type="text" name='name' id='name' value={data.name} onChange={handleChange} /><br /><br />
            <label htmlFor="">Age:</label>
            <input type="number" name='age' id='age' value={data.age} onChange={handleChange} /><br /><br />
            <label htmlFor="">Salary:</label>
            <input type="number" name='salary' id='salary' value={data.salary} onChange={handleChange} /><br /><br />
            <label htmlFor="">Gender :</label>
            <input type="radio" name='g1' id='male' value="male" onChange={handleChange} checked = {(data.g1 == 'male')? 'checked' : ''} />
            <label htmlFor="male">Male</label>
            <input type="radio" name='g1' id='female' value="female" onChange={handleChange} checked={(data.g1 == 'female')? 'checked' : ''} />
            <label htmlFor="female">Female</label>
            <br /><br />
            <input type="submit" value={"Register"}/>
        </form>
        <br />
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Salary</th>
                    <th>Gender</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allData.map((i, index) => {
                        return(
                            <tr>
                                <td>{i.id} </td>
                                <td>{i.name} </td>
                                <td>{i.age} </td>
                                <td>{i.salary} </td>
                                <td>{i.g1} </td>
                                <td>
                                    <button onClick={() => editData(i.id)}>Edit</button>
                                    <button onClick={() => delData(i.id)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default FirebaseRevision;