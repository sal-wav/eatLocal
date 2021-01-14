import React, { useState, useEffect } from "react";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { postItem } from "../services/biz";
import "./styles/form.css"

const FoodForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [redirect, setRedirect] = useState("");

    const [error, setError] = useState(null);

    const {bizId} = useParams();

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const newItem = await postItem(name, description, imageUrl, bizId);
            console.log(`newItem: ${newItem}`)
            setName("");
            setDescription("");
            setImageUrl("");
        } catch (submissionError) {
            setError(submissionError);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newItem = await postItem(name, description, imageUrl, bizId);
            setRedirect(`/biz/${bizId}`);
        } catch (submissionError) {
            setError(submissionError);
        }
    };

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input className="input" type="text" name="name" placeholder="Item Name" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div>
                        <input className="input" type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                    <div>
                        <input className="input" type="text" name="imageUrl" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
                    </div>
                    <NavLink to={`/biz/${bizId}`}>Cancel</NavLink>
                    <button type="button" onClick={handleAdd}>Add another item</button>
                    <button type="submit">Finished</button>
                </form>
            </div>
        </div>
    );

}

export default FoodForm;
