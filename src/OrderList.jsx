import { useState } from "react";

function OrderList({ orders, removeOrder }) {
    const [expandedOrderId, setExpandedOrderId] = useState(null);

    function toggleDetails(id) {
        setExpandedOrderId(expandedOrderId === id ? null : id);
    }

    if (!orders || orders.length === 0) {
        return <p style={styles.emptyMessage}>Немає замовлень</p>;
    }

    return (
        <ul style={styles.list}>
            {orders.map((order) => (
                <li key={order.id} onClick={() => toggleDetails(order.id)} style={styles.listItem}>
                    <div style={styles.orderHeader}>
                        {order.date} – {order.price} грн
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // щоб не спрацьовував клік на розгортання
                                removeOrder(order.id);
                            }}
                            style={styles.button}
                        >
                            ❌
                        </button>
                    </div>
                    {expandedOrderId === order.id && (
                        <div style={styles.details}>
                            <p>{order.details}</p>
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );
}

const styles = {
    list: {
        listStyle: "none",
        padding: 0
    },
    listItem: {
        padding: "10px",
        borderBottom: "1px solid #ddd",
        cursor: "pointer",
        transition: "background-color 0.3s",
        backgroundColor: "#fafafa"
    },
    orderHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    details: {
        marginTop: "5px",
        backgroundColor: "#e7f3fe",
        padding: "10px",
        borderRadius: "4px"
    },
    button: {
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        padding: "5px 10px",
        borderRadius: "4px",
        cursor: "pointer",
        transition: "background-color 0.3s"
    },
    emptyMessage: {
        textAlign: "center",
        color: "#777"
    }
};

export default OrderList;