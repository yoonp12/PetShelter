import React, { useState, Component } from 'react'
import axios from 'axios'
import { Router, navigate } from '@reach/router' 
import Dashboard from './Dashboard'
import AddPet from './AddPet'
import EditPet from './EditPet'
import PetDetail from './PetDetail'


const MainHub = () => {
    

    const [ pet, setPet ] = useState({
        petName: "",
        petType: "",
        petDescription: "",
        petSkill_1: "",
        petSkill_2: "",
        petSkill_3: "",
        likes: 0
    })

    const [ petList, setPetList ] = useState([]) 

    const [ errors, setErrors ] = useState([])

    const [ state, setState ] = useState(false)

    const changeHandler = event => {
        setPet ({
            ...pet,
            [event.target.name] : event.target.value
        })
    }    

    const submitHandler = (event) => {
        event.preventDefault()
        axios.post('http://localhost:8000/api/pets/new', pet)
            .then(res=> { 
                setState(!state)
                navigate("/")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorObj = {};
                for (const key of Object.keys(errorResponse)) { 
                    errorObj[key] = errorResponse[key]
                }
                setErrors(errorObj);
            })
    }

    return(
        <div className="container jumbotron">
            <Router>
                <Dashboard path="/" petList={petList} setPetList={setPetList} state={state} />
                <AddPet path="/pets/new" errors={errors} petList={petList} submitHandler={submitHandler} changeHandler={changeHandler} />
                <PetDetail path="/pets/:id" pet={pet} setPet={setPet} state={state} setState={setState} />
                <EditPet path="/pets/:id/edit" setPet={setPet} pet={pet} errors={errors} setErrors={setErrors} changeHandler={changeHandler} />
            </Router>
        </div>
    )
}
export default MainHub