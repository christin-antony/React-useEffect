import React, { useState, useEffect } from 'react';

const Task3 = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://randomuser.me/api/");
                const data = await response.json();
                setData(data.results); 
                console.log(data)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    });

    return (

        <div>
            <h1 style={{fontSize:"50px",color:"blue",fontWeight:"bold",textAlign:"center",backgroundColor:"green",margin:"0px"}}>Fetches data of random users in https://randomuser.me/</h1>
             {data.map((user) => (
                <div>
                    <div style={{display:'grid',placeItems:"center",backgroundColor:"yellow",height:"700px"}}>
                    <p style={{fontSize:"30px",color:"red",margin:"5px"}}>Name:{user.name.first}</p>
                    <p style={{fontSize:"15px",color:"green",margin:"5px"}}>Age:{user.dob.age}</p>
                    <p style={{fontSize:"15px",color:"green",margin:"5px"}}>DOB:{user.dob.date}</p>
                    <p style={{fontSize:"15px",color:"green",margin:"5px"}}>Email:{user.email}</p>                
                    <img src={user.picture.large} alt=""  style={{width:"300px",height:"300px",borderRadius:"30px",margin:"5px"}}/>
                    </div>
                </div>
            ))}
        </div>
    );
};


export default Task3;
