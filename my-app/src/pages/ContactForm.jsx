import { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:8087/api/contact', formData, {
                headers: { 'Content-Type': 'application/json' }
            });

            if (response.status === 200) {
                alert('Message Sent Successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message.');
        }
    };

    return (
        <form onSubmit={handleSubmit} method="POST">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
