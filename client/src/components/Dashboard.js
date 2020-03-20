import React, { useEffect } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'

const Dashboard = ({state, setPetList, petList}) => {

    

    useEffect(()=>{
        axios.get("http://localhost:8000/api/pets/")
            .then(res=>{
                setPetList(res.data)
                console.log(petList)
            })  
            .catch(err=>console.log(err))     
    }, [state]);

   

    return(
        <div>
            <div className="d-flex justify-content-between mb-3">
                <h1 >Pet Shelter</h1>
                <Link to="/pets/new">Add a pet to the shelter!</Link>
            </div>
            <h2>These pets are looking for a good home</h2>
            <table className="table table-bordered table-striped border border-dark mt-5">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Name:</th>
                        <th scope="col">Type:</th>
                        <th scope="col">Actions:</th>
                    </tr>
                </thead>
                <tbody>
                    {petList.sort((a, b) => a.petType.localeCompare(b.petType)),
                    petList.map((pet, i) => 
                    <tr key={i}>
                        <td scope="row" className="m-2">{pet.petName}</td>
                        <td scope="row" className="m-2">{pet.petType}</td>
                        <td>
                            <Link className="mr-3" to={`/pets/${pet._id}`}>Details</Link>
                            |
                            <Link className="ml-3" to={`/pets/${pet._id}/edit`}>Edit</Link>
                        </td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default Dashboard