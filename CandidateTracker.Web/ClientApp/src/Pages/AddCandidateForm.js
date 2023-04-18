import React from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import useForm from "../Hooks/UseForm";

const AddCandidateForm = () => {

    const [formData, setFormData] = useForm({ firstName: '', lastName: '', email: '', phoneNumber: '', notes: '' });
    const history = useHistory();

    const onSubmitClick = async () => {
        await axios.post('/api/candidatetracker/addcandidate', formData);
        history.push('/');
    }

    return (
        <div className="contailner col-md-6 offset-md-3">
            <div className="row">
                <div className="card card-body bg-light">
                    <h4>Add Candidate</h4>
                        <input type="text" name="firstName" placeholder="First Name" className="form-control" onChange={setFormData} />
                        <br />
                        <input type="text" name="lastName" placeholder="Last Name" className="form-control" onChange={setFormData} />
                        <br />
                        <input type="text" name="email" placeholder="Email" className="form-control" onChange={setFormData} />
                        <br />
                        <input type="text" name="phoneNumber" placeholder="Phone Number" className="form-control" onChange={setFormData} />
                        <br />
                        <textarea rows="5" name="notes" className="form-control" onChange={setFormData} />
                        <br />
                        <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                </div>
            </div>
        </div>
    )
}
export default AddCandidateForm;