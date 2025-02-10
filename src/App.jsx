import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header.jsx';
import Sidebar from './components/Sidebar.jsx';
import MainContent from './components/MainContent.jsx';

function App() {
    return (
        <div>
            <Header />
            <div style={{ display: 'flex' }}>
                <Sidebar />
                <MainContent />
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
);