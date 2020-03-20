import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'

const PetDetail = ({ id, pet, setPet, state, setState}) => {

    // const moreLikes = (e) => {
    //     e.preventDefault()
    //     axios.put(`http://localhost:8000/api/pets/edit/${id}`, pet)
    //         .then(res=>console.log(res))
    //         .catch(err=>console.log(err))
    // }
    // const [ likes, setLikes ] = useState(0)
    // const moreLikes = (e) => {
    //     e.preventDefault()
    //     setLikes(likes + 1)
    //     setState(!state)
    // }
    

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                console.log(res)
                setPet(res.data)
            })  
            .catch(err=>console.log(err))     
    }, [state]);

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/pets/delete/${id}`)
            .then(res=> {
                setState(!state)
                navigate("/")
            })
            .catch(err=> console.log("Error: ", err))
    }

    return(
        <div>
            <div className="d-flex justify-content-between mb-3">
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>
            <div >
                <div className="d-flex justify-content-between mb-4">
                    <h2>Details about: {pet.petName}</h2>
                    <button className="btn btn-danger col-3" onClick={()=>deleteHandler(pet._id)}><h5>Adopt {pet.petName}</h5></button>
                </div>
                <div className="d-flex justify-content-between m-0 p-3" style={{backgroundColor:"white"}}>
                    <div className="card" style={{width:"20rem", border:"0"}}>
                        <div className="card-body">
                            <h3 className="mb-5">Pet Type:</h3>
                            <h3 className="mb-5">Description:</h3>
                            <h3 className="mb-5">Skills:</h3>
                        </div>
                    </div>
                    <div className="card" style={{width:"55rem", border:"0"}}>
                        <div className="card-body">
                            <h3 className="mb-5">{pet.petType}</h3>
                            <h3 className="mb-5">{pet.petDescription}</h3>
                            <h3 className="mb-2">{pet.petSkill_1}</h3>
                            <h3 className="mb-2">{pet.petSkill_2}</h3>
                            <h3 className="mb-2">{pet.petSkill_3}</h3>
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex justify-content-center m-3">
                    <button type="submit" className="btn btn-primary col-3" onClick={moreLikes}><h5>Like {pet.petName}</h5></button>
                    <h5>{likes}</h5>
                </div> */}
            </div>
        </div>
    )
}
export default PetDetail