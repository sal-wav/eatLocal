import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import "./styles/form.css"

const FoodForm = () => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    return (
        <div>
            <div>
                <form>
                    <div>
                        <input className="input" type="text" name="name" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} required></input>
                    </div>
                    <div>
                        <input className="input" type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                    <div>
                        <input className="input" type="number" step="0.01" pattern="^\d+(?:\.\d{1,2})?$" name="price" placeholder="00.00" value={price} onChange={(e) => setPrice(e.target.value)} required></input>
                    </div>
                    <button type="button">Add another item</button>
                    <button type="button">Finished</button>
                </form>
            </div>
        </div>
    )

}

export default FoodForm;
