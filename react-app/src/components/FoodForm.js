import React, { useState, useEffect } from "react";
import { Redirect, useParams } from "react-router-dom";
import "./styles/form.css"

const FoodForm = () => {
    const [itemName, setItemName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [redirect, setRedirect] = useState("");
    const [error, setError] = useState(null);

    const bizId = useParams();

    const handleAdd = async (e) => {
        e.preventDefault();
        try {
            const newItem = await postItem(itemName, description, imageUrl);
            setRedirect(`foodform/biz/${bizId}`)
        } catch (submissionError) {
            setError(submissionError);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newItem = await postItem(itemName, description, imageUrl);
            setRedirect(`/songs/${song.id}`);
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
                <form>
                    <div>
                        <input className="input" type="text" name="name" placeholder="Item Name" value={itemName} onChange={(e) => setItemName(e.target.value)} required></input>
                    </div>
                    <div>
                        <input className="input" type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div>
                    <div>
                        <input className="input" type="text" name="imageUrl" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
                    </div>
                    <button type="submit" onSubmit={handleAdd}>Add another item</button>
                    <button type="submit" onSubmit={handleSubmit}>Finished</button>
                </form>
            </div>
        </div>
    );

}

export default FoodForm;
