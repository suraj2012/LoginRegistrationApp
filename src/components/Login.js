import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const history = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        let response;
        if (user.email && user.password) {
            fetch("http://localhost:9002/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            })
                .then(res => res.json())
                .then(res =>{
                    props.setLoginUser(res.user);
                    history('/');
                })

                history("/");

        } else {
            alert("Invalid")
        }

    }

    return (
        <>
            <section className="h-100 h-100" style={{ backgroundColor: 'rgb(241 28 87)' }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-8 col-xl-6">
                            <div className="card rounded-3">

                                <div className="card-body p-4 p-md-5">
                                    <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Login</h3>

                                    <form className="px-md-2">

                                        <div className="form-outline mb-4 ">

                                            <input type="text" placeholder='Email'
                                                name="email" value={user.email} onChange={handleChange}
                                                className="form-control" />

                                        </div>
                                        <div className="form-outline mb-4">
                                            <input type="password" placeholder='Password'
                                                name="password" value={user.password} onChange={handleChange}
                                                className="form-control" />

                                        </div>
                                        <div className="text-center pt-1 mb-3 pb-1">
                                            <a className="small text-muted" href="#!">Forgot password?</a>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <button type="button" onClick={login}
                                                className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body form-control">
                                                Login</button>
                                        </div>

                                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="#!"
                                          onClick={()=> history("/registration")}  style={{ color: '#393f81' }}>Register here</a></p>
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

export default Login;