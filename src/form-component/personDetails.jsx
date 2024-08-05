import { useState } from "react"


export const PersonalDetails = () => {

    const [firstName, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [numbers, setNumbers] = useState('');
    const [empDeg, setEmpDeg] = useState('');
    const [id, setId] = useState('');

    const personFirstName = (e) => {
        setFirstname(e.target.value);
        console.log(e.target.value);


    }
    const personLastName = (e) => {
        setLastName(e.target.value);
        console.log(e.target.value);

    }
    const personEmail=(e)=>{
        setEmail(e.target.value);
        console.log(e.target.value);

    }
    const personNumber=(e)=>{
        setNumbers(e.target.value);
        console.log(e.target.value);

    }
    const personEmpDeg=(e)=>{
        setEmpDeg(e.target.value);
        console.log(e.target.value);

    }
    const personId=(e)=>{
        setId(e.target.value);
        console.log(e.target.value);

    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const submitForm=()=>{
        alert('form submitted successfully')

    }
    return (
        <div className="conatiner mt-4 d-flex justify-content-center align-items-center ">
            <form onSubmit={handleSubmit} className="form-control w-25  bg-secondary p-4 ">
                <div className="mb-3 ">
                    <label className="form-label ">First Name :</label>
                    <input type="text" placeholder="Enter your first name" className="form-control" required="name" value={firstName} id="FirstName" onChange={personFirstName} /><br />
                    <label className="form-label">Last Name :</label>
                    <input type="text" placeholder="Enter your last name" className="form-control" id="LastName" value={lastName} onChange={personLastName}/><br />
                    <label className="form-label">Email :</label>
                    <input type="email" placeholder="Enter your email address" className="form-control" id="email" value={email} onChange={personEmail}/><br />
                    <label className="form-label">Phone number :</label>
                    <input type="number" placeholder="Enter your phone number" className="form-control" id="number" value={numbers} onChange={personNumber}/><br />
                    <label className="form-label"> Employee Degisnation :</label>
                    <input type="text" placeholder="designation" className="form-control" id="designation" value={empDeg} onChange={personEmpDeg}/><br />
                    <label className="form-label">Employee Id :</label>
                    <input type="text" placeholder="Enter your employee id" className="form-control" id="empId" value={id} onChange={personId} /><br />
                    <button type="submit" className="bg bg-primary btn btn-lg " onClick={submitForm}>Submit</button>
                </div>
            </form>
        </div>
    )
}