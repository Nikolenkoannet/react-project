import { useState } from "react";

function OrderForm({ addOrder }) {
    const [price, setPrice] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (price) {
            const newOrder = {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                price: parseFloat(price),
                details: `Замовлення на суму ${price} грн`
            };
            addOrder(newOrder);
            setPrice("");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Сума замовлення"
            />
            <button type="submit">Додати замовлення</button>
        </form>
    );
}

export default OrderForm;