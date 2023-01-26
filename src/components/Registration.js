import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'



const Registration = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
        rePassword: "",
        firstName: "",
        lastName: "",
        gender: "",
        country: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const register=()=>{
        // const {email, password, rePassword, firstName, lastName, gender, country} = user;
        if(user.email && user.password && (user.password===user.rePassword) && 
        user.firstName && user.lastName && user.gender && user.country){
           
            fetch("http://localhost:9002/register",{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(res=> alert(res.message));
        setUser("");
        navigate("/login");

        }else{
            alert("Invalid")
        }
        
    }

    return (
        <>
            <section className="h-100 h-auto" style={{ backgroundColor: '#8fc4b7' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">

                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                                    <form className="px-md-2">

                                        <div className="form-outline mb-4 ">

                                            <input type="mail" id="form3Example1q" placeholder='Email'
                                                name="email" value={user.email} onChange={handleChange}
                                                 className="form-control" required />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" placeholder='Password'
                                                name="password" value={user.password} onChange={handleChange}
                                                 className="form-control" required/>

                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" placeholder='Re-Password'
                                                name='rePassword' value={user.rePassword} onChange={handleChange}
                                                 className="form-control" required/>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline datepicker">
                                                    <input type="text" placeholder='First Name'
                                                        name='firstName' value={user.firstName} onChange={handleChange}
                                                         className="form-control" required />

                                                </div>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <div className="form-outline datepicker">
                                                    <input type="text" placeholder='Last Name'
                                                        name='lastName' value={user.lastName} onChange={handleChange}
                                                         className="form-control" required />

                                                </div>

                                            </div>
                                        </div>

                                        <div className="mb-4">

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="maleGender"
                                                    value="male" onChange={handleChange} required />
                                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                                            </div>

                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input" type="radio" name="gender" id="femaleGender"
                                                    value="female" onChange={handleChange} required />
                                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                            </div>

                                        </div>

                                        <div className="form-outline mb-4">
                                            <select className="select form-control" name='country' value={user.country} onChange={handleChange} required>
                                                <option value="1">Select a Country</option>
                                                <option value="India">India</option>
                                                <option value="USA">USA</option>
                                                <option value="UK">Uk</option>
                                            </select>
                                        </div>

                                        <div className="form-check d-flex justify-content-start mb-4 pb-3">
                                            <input className="form-check-input me-3" type="checkbox"  />
                                            <label className="form-check-label text-dark" htmlFor="form2Example3">
                                                I do accept with Terms and Condition </label>
                                        </div>

                                        <div className="form-check d-flex justify-content-start mb-4 pb-3">
                                            <input className="form-check-input me-3" type="checkbox"  />
                                            <label className="form-check-label text-dark" htmlFor="form2Example3">
                                                I want to receive the newsletter </label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <button type="button" onClick={register}
                                                className="btn btn-warning btn-block btn-lg gradient-custom-4 text-body form-control">Register</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Registration;