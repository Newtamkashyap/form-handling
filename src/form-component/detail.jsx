import { useState } from "react";

export const FormDetails = () => {

    const [data, setData] = useState({
        firstName: "",
        lastName: '',
        numbers: "",
        id: '',
        empDeg: '',
        email: ""

    });


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        alert('form submitted successfully');

    }


    return (
        <div className="conatiner mt-4 d-flex justify-content-center align-items-center ">
            <form onSubmit={handleSubmit} className="form-control w-25  bg-secondary p-4 ">
                <div className="mb-3 ">
                    <label className="form-label ">First Name :</label>
                    <input type="text" placeholder="Enter your first name" className="form-control" required="name" value={data.firstName} id="FirstName" onChange={(e) => setData({ ...data, firstName: e.target.value })} /><br />
                    <label className="form-label">Last Name :</label>
                    <input type="text" placeholder="Enter your last name" className="form-control" id="LastName" value={data.lastName} onChange={(e) => setData({ ...data, lastName: e.target.value })} /><br />
                    <label className="form-label">Email :</label>
                    <input type="email" placeholder="Enter your email address" className="form-control" id="email" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} /><br />
                    <label className="form-label">Phone number :</label>
                    <input type="number" placeholder="Enter your phone number" className="form-control" id="number" value={data.numbers} onChange={(e) => setData({ ...data, numbers: e.target.value })} /><br />
                    <label className="form-label"> Employee Degisnation :</label>
                    <input type="text" placeholder="designation" className="form-control" id="designation" value={data.empDeg} onChange={(e) => setData({ ...data, empDeg: e.target.value })} /><br />
                    <label className="form-label">Employee Id :</label>
                    <input type="text" placeholder="Enter your employee id" className="form-control" id="empId" value={data.id} onChange={(e) => setData({ ...data, id: e.target.value })} /><br />
                    <button type="submit" className="bg bg-primary btn btn-lg " onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
            </form>
        </div>
    )
}