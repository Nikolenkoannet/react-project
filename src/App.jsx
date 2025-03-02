import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!formData.email.includes('@')) newErrors.email = 'Invalid email format';
        if (!/^[0-9]{12}$/.test(formData.phone)) newErrors.phone = 'Phone must be 12 digits';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            setMessage('Form submitted successfully!');
            setErrors({});
        } else {
            setMessage('');
        }
    };

    return (
        <div style={{ maxWidth: '300px', margin: '20px auto', textAlign: 'center' }}>
            <h2>Contact Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} /><br />
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}<br />

                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br />
                {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}<br />

                <input type="text" name="phone" placeholder="Phone (12 digits)" value={formData.phone} onChange={handleChange} /><br />
                {errors.phone && <span style={{ color: 'red' }}>{errors.phone}</span>}<br />

                <button type="submit">Submit</button>
            </form>
            {message && <p style={{ color: 'green' }}>{message}</p>}
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);