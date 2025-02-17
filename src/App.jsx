
import React, { useState, useEffect } from 'react';

function ContactsApp() {
    const [contacts, setContacts] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [newContact, setNewContact] = useState({ name: '', surname: '', phone: '' });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                const initialContacts = data.map((user) => ({
                    name: user.name,
                    surname: user.username,
                    phone: user.phone
                }));
                setContacts(initialContacts);
            });
    }, []);

    const deleteContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    };

    const addContact = () => {
        if (newContact.name && newContact.surname && newContact.phone) {
            setContacts([...contacts, newContact]);
            setNewContact({ name: '', surname: '', phone: '' });
            setShowForm(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewContact({ ...newContact, [name]: value });
    };

    return (
        <div>
            <h2>Список контактів</h2>
            <table border="1" cellPadding="5" cellSpacing="0">
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Прізвище</th>
                    <th>Телефон</th>
                    <th>Дія</th>
                </tr>
                </thead>
                <tbody>
                {contacts.map((contact, index) => (
                    <tr key={index}>
                        <td>{contact.name}</td>
                        <td>{contact.surname}</td>
                        <td>{contact.phone}</td>
                        <td>
                            <button onClick={() => deleteContact(index)}>Видалити</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>

            <button onClick={() => setShowForm(true)}>Додати контакт</button>

            {showForm && (
                <div>
                    <h3>Новий контакт</h3>
                    <input
                        type="text"
                        name="name"
                        placeholder="Ім'я"
                        value={newContact.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="surname"
                        placeholder="Прізвище"
                        value={newContact.surname}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Телефон"
                        value={newContact.phone}
                        onChange={handleInputChange}
                    />
                    <br />
                    <button onClick={addContact}>Зберегти</button>
                    <button onClick={() => setShowForm(false)}>Скасувати</button>
                </div>
            )}
        </div>
    );
}

export default ContactsApp;

