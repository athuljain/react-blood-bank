import React, { useState } from "react";

export default function Donate() {
    const [donation, setDonation] = useState({
        name: "", email: "", bloodGroup: "", quantity: "", diseases: "", 
        dateofbirth: "", weight: "", height: "", dateofdonation: ""
    });

    const handleChange = (e) => {
        setDonation({ ...donation, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const donations = JSON.parse(localStorage.getItem("donations")) || [];
        donations.push(donation);
        localStorage.setItem("donations", JSON.stringify(donations));

        alert("Donation details saved successfully!");
    };

    return (
        <div>
            <h2>Donate Blood</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br />
                <input type="text" name="bloodGroup" placeholder="Blood Group" onChange={handleChange} required /><br />
                <input type="number" name="quantity" placeholder="Quantity (ml)" onChange={handleChange} required /><br />
                <input type="text" name="diseases" placeholder="Any Diseases" onChange={handleChange} required /><br />
                <label>DOB:</label>  <input type="date" name="dateofbirth" onChange={handleChange} required /><br />
                <input type="number" name="weight" placeholder="Weight (kg)" onChange={handleChange} required /><br />
                <input type="number" name="height" placeholder="Height (cm)" onChange={handleChange} required /><br />
                <label>DOD:</label> <input type="date" name="dateofdonation" onChange={handleChange} required /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
