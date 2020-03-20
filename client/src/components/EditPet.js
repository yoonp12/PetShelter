import React, { useEffect } from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios'

const EditPet = ({id, setPet, pet, errors, setErrors, changeHandler}) => {

    const updateHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/pets/edit/${id}`, pet)
            .then(res=> {
                navigate("/")
            })
            .catch(err=> {
                const errorResponse = err.response.data.errors;
                const errorObj = {};
                for (const key of Object.keys(errorResponse)) { 
                    errorObj[key] = errorResponse[key]
                }
                setErrors(errorObj);
            })
    }

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                setPet(res.data)
            })  
            .catch(err=>console.log(err))     
    }, []);

    return(
        <div>
            <div className="d-flex justify-content-between mb-3">
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>
            <div >
                <h2 className="mb-4">{pet.petName}</h2>
                <form onSubmit={updateHandler}>
                    <div className="jumbotron d-flex justify-content-between m-0 p-3" style={{backgroundColor:"white"}}>
                        <div className="card" style={{width:"40rem", border:"0"}}>
                            <div className="card-body">
                                <h3>Pet Name:</h3>
                                {(errors.petName) ? <p className="text-danger">{errors.petName.message}</p> : null}
                                <input type="text" name="petName" value={pet.petName} className="form-control checkField mb-5" onChange={changeHandler} />
                                <h3>Pet Type:</h3>
                                {(errors.petType) ? <p className="text-danger">{errors.petType.message}</p> : null}
                                <input type="text" name="petType" value={pet.petType} className="form-control checkField mb-5" onChange={changeHandler} />
                                <h3>Pet Description:</h3>
                                {(errors.petDescription) ? <p className="text-danger">{errors.petDescription.message}</p> : null}
                                <input type="text" name="petDescription" value={pet.petDescription} className="form-control checkField mb-5" onChange={changeHandler} />
                                <button type="submit" className="btn btn-primary col-8"><h5>Edit Pet</h5></button>
                            </div>
                        </div>

                        <div className="card" style={{width:"40rem", border:"0"}}>
                        <div className="card-body">
                                <h3>Skills (optional):</h3>
                                <h3 className="mt-3">Skill 1:</h3>
                                <input type="text" name="petSkills" className="form-control checkField mb-5" onChange={changeHandler} />
                                <h3>Skill 2:</h3>
                                <input type="text" name="petSkills" className="form-control checkField mb-5" onChange={changeHandler} />
                                <h3>Skill 3:</h3>
                                <input type="text" name="petSkills" className="form-control checkField mb-5" onChange={changeHandler} />
                            </div>
                        </div>
                    
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditPet