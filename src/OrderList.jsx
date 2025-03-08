import { useState } from "react";

function OrderList({ orders, removeOrder }) {
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    function toggleDetails(id) {
        setExpandedOrderId(expandedOrderId === id ? null : id);
    }

    return (
        <ul>
            {orders.map((order) => (
                <li key={order.id} onClick={() => toggleDetails(order.id)}>
                    <div>
                        {order.date} – {order.price} грн
                        <button onClick={(e) => {
                            e.stopPropagation();
                            removeOrder(order.id);
                        }}>
                            Видалити
                        </button>
                    </div>
                    {expandedOrderId === order.id && (
                        <div>
                            <p>{order.details}</p>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

export default OrderList;