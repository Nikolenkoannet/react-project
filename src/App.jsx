import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";

function App() {
    const [showOrders, setShowOrders] = useState(false);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(savedOrders);
    }, []);

    useEffect(() => {
        localStorage.setItem("orders", JSON.stringify(orders));
    }, [orders]);

    function toggleOrders() {
        setShowOrders(!showOrders);
    }

    function addOrder(order) {
        setOrders([...orders, order]);
    }

    function removeOrder(id) {
        setOrders(orders.filter(order => order.id !== id));
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Інтернет-магазин</h1>
            <button style={styles.button} onClick={toggleOrders}>
                {showOrders ? "Повернутись до категорій" : "Мої замовлення"}
            </button>

            {!showOrders ? (
                <div>
                    <h2 style={styles.subtitle}>Категорії:</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}>👕 Одяг</li>
                        <li style={styles.listItem}>👟 Взуття</li>
                        <li style={styles.listItem}>👜 Аксесуари</li>
                    </ul>
                    <OrderForm addOrder={addOrder} />
                </div>
            ) : (
                <div>
                    <h2 style={styles.subtitle}>Мої замовлення:</h2>
                    <OrderList orders={orders} removeOrder={removeOrder} />
                </div>
            )}
        </div>
    );
}

const styles = {
    container: {
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    },
    title: {
        textAlign: "center",
        color: "#333"
    },
    subtitle: {
        marginTop: "20px",
        color: "#555"
    },
    button: {
        backgroundColor: "#4CAF50",
        color: "white",
        padding: "10px 20px",
        margin: "10px 0",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s"
    },
    list: {
        listStyle: "none",
        padding: 0
    },
    listItem: {
        padding: "10px",
        borderBottom: "1px solid #ddd",
        cursor: "pointer",
        transition: "background-color 0.3s"
    },
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
