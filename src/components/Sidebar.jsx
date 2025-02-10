import React from 'react';

export default function Sidebar() {
    return (
        <aside style={{ backgroundColor: '#33a02c', padding: '15px', color: '#ffffff' }}>
            <nav>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Home</a></li>
                    <li style={{ marginBottom: '10px' }}><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>About</a></li>
                    <li><a href="#" style={{ color: '#ffffff', textDecoration: 'none' }}>Contact</a></li>
                </ul>
            </nav>
        </aside>
    );
}