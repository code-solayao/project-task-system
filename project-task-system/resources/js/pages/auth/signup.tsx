import React, { use, useState } from "react";
import axios from "axios";

export default function Signup() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    }

    const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            // API call logic
            const res = await axios.post(
                "http://192.168.18.17:8000/signup",
                form
            );
            setMessage(res.data.message);
        } catch (error) {
            console.error(error);
            setMessage("Registration failed.");
        }
    }

    return (
        <div>
            <h2>Create an account</h2>
            {message && <p>{message}</p>}
            
            <form onSubmit={handleSubmit} method="POST">
                <div>
                    <input type="text" name="name" placeholder="Name" onChange={handleChange} />
                </div>
                <div>
                    <input type="email" name="email" placeholder="E-mail" onChange={handleChange} />
                </div>
                <div>
                    <input type="text" name="password" id="password" placeholder="Password" onChange={handleChange} />
                </div>
                <div>
                    <input type="submit" name="signup" value="Sign Up" 
                    className="w-full px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-500" />
                </div>
            </form>
        </div>
    );
}