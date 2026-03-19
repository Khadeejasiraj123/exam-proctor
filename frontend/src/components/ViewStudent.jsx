import React, { useState, useEffect } from 'react';
import './ViewProctor.scss'; // Import your SCSS file
import axios from 'axios';

const ViewStudent = () => {
    const [student, setStudent] = useState([]);

    useEffect(() => {
        fetchStudent();
    }, []);

    const fetchStudent = async () => {
        try {
            const response = await fetch('/viewStudent');
            const data = await response.json();
            setStudent(data);
        } catch (error) {
            console.error('Error fetching proctors:', error);
        }
    };

    const handleClick = async (id) => {
        await axios.get(`/deleteUser/${id}`)
        alert("deleted sucessfully")
        window.location.href = "/viewStudent"
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
                    {student.map((item, index) => (
                        <tr key={item.id}>
                            <td>{index + 1}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td><img src={"http://localhost:3005/" + item.proof} alt="proof" /></td>
                            <td><button onClick={() => { handleClick(item.id) }}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewStudent;