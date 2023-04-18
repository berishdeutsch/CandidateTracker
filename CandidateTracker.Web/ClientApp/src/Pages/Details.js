import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const Details = () => {

    const { id } = useParams();

    const [Candidate, setCandidate] = useState({ firstName: '', lastName: '', phoneNumber: '', email: '', notes: '' });


    useEffect(() => {
        const getCandidateById = async () => {
            const { data } = await axios.get(`/api/candidatetracker/getcandidatebyid?id=${id}`);
            setCandidate(data);
        }
        getCandidateById();
    }, []);


    const { firstName, lastName, email, phoneNumber, notes, RegistrationStatus } = Candidate;
    return (
        <div className="col-md-6 offset-md-3">
            <div className="card card-body bg-light">
                <h4>Name: {firstName} {lastName}</h4>
                <h4>Email: {email}</h4>
                <h4>Phone: {phoneNumber}</h4>
                <h4>Status: {RegistrationStatus}</h4>
                <h4>Notes:</h4>
                <p>{notes}</p>
                < div >
                    <button className="btn btn-primary"  >Confirm</button>
                    <button className="btn btn-danger" >Refuse</button>
                </div>
            </div>
        </div>
    )

}
export default Details;