import React from 'react'
import { Link } from '@reach/router'

const AddPet = ({errors, submitHandler, changeHandler, petList}) => {
    return(
        <div>
            <div className="d-flex justify-content-between mb-3">
                <h1>Pet Shelter</h1>
                <Link to="/">back to home</Link>
            </div>
            <div >
                <h2 className="mb-4">Know a pet needing a home?</h2>
                <form onSubmit={submitHandler}>
                    <div className="jumbotron d-flex justify-content-between m-0 p-3" style={{backgroundColor:"white"}}>
                        <div className="card" style={{width:"40rem", border:"0"}}>
                            <div className="card-body">
                                <h3>Pet Name:</h3>
                                {(errors.petName) ? <p className="text-danger">{errors.petName.message}</p> : null}
                                {/* {(name.value in petList) ? <p className="text-danger">Pet Name already exists!</p> : null} */}
                                <input type="text" name="petName" className="form-control checkField mb-5" onChange={changeHandler} />
                                <h3>Pet Type:</h3>
                                {(errors.petType) ? <p className="text-danger">{errors.petType.message}</p> : null}
                                <input type="text" name="petType" className="form-control checkField mb-5" onChange={changeHandler} />
                                <h3>Pet Description:</h3>
                                {(errors.petDescription) ? <p className="text-danger">{errors.petDescription.message}</p> : null}
                                <input type="text" name="petDescription" className="form-control checkField mb-5" onChange={changeHandler} />
                                <button type="submit" className="btn btn-primary col-8"><h5>Add Pet</h5></button>
                            </div>
                        </div>

                        <div className="card" style={{width:"40rem", border:"0"}}>
                        <div className="card-body">
                                <h3>Skills (optional):</h3>
                                <h3 className="mt-3">Skill 1:</h3>
                                <input type="text" name="petSkill_1" className="form-control checkField mb-5" onChange={changeHandler} />
                                <h3>Skill 2:</h3>
                                <input type="text" name="petSkill_2" className="form-control checkField mb-5" onChange={changeHandler} />
                                <h3>Skill 3:</h3>
                                <input type="text" name="petSkill_3" className="form-control checkField mb-5" onChange={changeHandler} />
                            </div>
                        </div>
                    
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddPet