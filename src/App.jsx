import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newContact, setNewContact] = useState({ name: '', phone: '', email: '' });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setContacts(data.map((u) => ({ name: u.name, phone: u.phone, email: u.email }))));
    }, []);

    function handleDelete(index) {
        setContacts(contacts.filter((_, i) => i !== index));
    }

    function handleInputChange(e) {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    }

    function handleSave() {
        if (newContact.name && newContact.phone && newContact.email) {
            setContacts([...contacts, newContact]);
            setNewContact({ name: '', phone: '', email: '' });
            setShowForm(false);
        }
    }

    return (
        <div>
            <h2>Contacts</h2>
            <table border="1" cellPadding="5">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((c, index) => (
                    <tr key={index}>
                        <td>{c.name}</td>
                        <td>{c.phone}</td>
                        <td>{c.email}</td>
                        <td>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button onClick={() => setShowForm(true)}>Add Contact</button>

            {showForm && (
                <div>
                    <input
                        name="name"
                        placeholder="Name"
                        value={newContact.name}
                        onChange={handleInputChange}
                    />
                    <input
                        name="phone"
                        placeholder="Phone"
                        value={newContact.phone}
                        onChange={handleInputChange}
                    />
                    <input
                        name="email"
                        placeholder="Email"
                        value={newContact.email}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSave}>Save</button>
                    <button onClick={() => setShowForm(false)}>Cancel</button>
                </div>
            )}
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);