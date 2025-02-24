import React, { useState, useEffect } from "react";

export default function Receive() {
    const [request, setRequest] = useState({ email: "", requiredbloodgroup: "", Age: "", reason: "" });
    const [bloodStock, setBloodStock] = useState({});

    // Get available blood groups from localStorage
    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem("donations")) || [];
        const bloodCounts = donations.reduce((acc, donation) => {
            acc[donation.bloodGroup] = (acc[donation.bloodGroup] || 0) + 1;
            return acc;
        }, {});
        setBloodStock(bloodCounts);
    }, []);

    const handleChange = (e) => {
        setRequest({ ...request, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!bloodStock[request.requiredbloodgroup]) {
            alert("Requested blood group is not available.");
            return;
        }

        alert("Blood request submitted successfully!");
        localStorage.setItem("bloodRequests", JSON.stringify(request));
    };

    return (
        <div>
            <h2>Request Blood</h2>
            <h3>Available Blood Stock:</h3>
            <ul>
                {Object.keys(bloodStock).length > 0 ? (
                    Object.entries(bloodStock).map(([group, count]) => (
                        <li key={group}>{group}: {count} available</li>
                    ))
                ) : (
                    <p>No blood available</p>
                )}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
                <select name="requiredbloodgroup" onChange={handleChange} required>
                    <option value="">Select Blood Group</option>
                    {Object.keys(bloodStock).map(group => (
                        <option key={group} value={group}>{group}</option>
                    ))}
                </select><br />
                <input type="number" name="Age" placeholder="Age" onChange={handleChange} required /><br />
                <input type="text" name="reason" placeholder="Reason" onChange={handleChange} required /><br />
                <button type="submit">Request Blood</button>
            </form>
        </div>
    );
}
