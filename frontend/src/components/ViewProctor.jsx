import React, { useState, useEffect } from 'react';
import './ViewProctor.scss'; // Import your SCSS file
import axios from 'axios';

const ViewProctor = () => {
    const [proctors, setProctors] = useState([]);

    useEffect(() => {
        fetchProctors();
    }, []);

    const fetchProctors = async () => {
        try {
            const response = await fetch('/viewProctor');
            const data = await response.json();
            setProctors(data);
        } catch (error) {
            console.error('Error fetching proctors:', error);
        }
    };

    const handleClick = async (id) => {
        await axios.get(`/deleteUser/${id}`)
        alert("deleted sucessfully")
        window.location.href = "/viewProctor"
    }

    return (
        <div className="view-proctor">
            <h2>View Proctor</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Proof</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {proctors.map((proctor, index) => (
                        <tr key={proctor.id}>
                            <td>{index + 1}</td>
                            <td>{proctor.first_name}</td>
                            <td>{proctor.last_name}</td>
                            <td>{proctor.email}</td>
                            <td><img src={"http://localhost:3005/" + proctor.proof} alt="proof" /></td>
                            <td><button onClick={() => { handleClick(proctor.id) }}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewProctor;
