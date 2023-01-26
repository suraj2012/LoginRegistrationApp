import React from "react";
import {useNavigate} from 'react-router-dom';

const Homepage=(props)=>{
    const navigate = useNavigate();
    return(
        <>
        <div className="container" style={{display: 'block', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Hello, {props.user.firstName}</h1>
        <button className="btn btn-primary" onClick={()=>navigate('/login')}>Logout</button>
        </div>
        </>
    )

}

export default Homepage;