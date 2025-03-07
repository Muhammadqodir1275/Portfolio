import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            const response = await fetch('http://localhost:5000/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Xabaringiz yuborildi! ✅");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Xabar yuborishda xatolik yuz berdi.");
            }
        } catch (error) {
            console.error("Xatolik:", error);
            alert("Xabar yuborishda xatolik yuz berdi.");
        }
    };

    return (
        <div className="contact">
            <h2>Menga bog‘laning 📩</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Ismingiz"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Emailingiz"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder="Xabaringizni yozing..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button type="submit">Yuborish</button>
            </form>
        </div>
    );
};

export default Contact;
