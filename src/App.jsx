import { useState, useEffect } from "react";
import OrderForm from "./OrderForm";
import OrderList from "./OrderList";

function App() {
    const [showOrders, setShowOrders] = useState(false);
    const [orders, setOrders] = useState([]);

    const categories = ["Одяг", "Взуття", "Аксесуари"];

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
        <div>
            <h1>Інтернет-магазин</h1>
            <button onClick={toggleOrders}>
                {showOrders ? "Повернутись до категорій" : "Мої замовлення"}
            </button>

            {!showOrders ? (
                <div>
                    <h2>Категорії:</h2>
                    <ul>
                        {categories.map((category) => (
                            <li key={category}>{category}</li>
                        ))}
                    </ul>
                    <OrderForm addOrder={addOrder} />
                </div>
            ) : (
                <div>
                    <h2>Мої замовлення:</h2>
                    <OrderList orders={orders} removeOrder={removeOrder} />
                </div>
            )}
        </div>
    );
}

export default App;