import React, { useState, useEffect } from "react";
import { Redirect, useParams, NavLink } from "react-router-dom";
import { postItem } from "../services/biz";
import "./styles/form.css"

const FoodForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [redirect, setRedirect] = useState("");

    const [errors, setErrors] = useState([]);

    const {bizId} = useParams();

    const handleAdd = async (e) => {
        e.preventDefault();
        if (name === "") {
            alert("Item name is required");
            return
        }
        try {
            const newItem = await postItem(name, description, imageUrl, bizId);
            console.log(`newItem: ${newItem}`)
            setName("");
            setDescription("");
            setImageUrl("");
        } catch (submissionError) {
            setErrors(submissionError);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newItem = await postItem(name, description, imageUrl, bizId);
            setRedirect(`/biz/${bizId}`);
        } catch (submissionError) {
            setErrors(submissionError);
        }
    };

    if (redirect) {
        return <Redirect to={redirect} />;
    }

    return (
        <div className="authPage container">
            <div className="authFormContainer container">
                <form className="authForm container" onSubmit={handleSubmit}>
                    <h1>Add menu item</h1>
                    <div>
                        <input className="input foodInput" type="text" name="name" placeholder="Item name" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    {/* <div>
                        <input className="input foodInput" type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></input>
                    </div> */}
                    {/* <div>
                        <input className="input foodInput" type="text" name="imageUrl" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
                    </div> */}
                    <div id="foodFormBtns">
                        <NavLink className="navLink navbarLink" to={`/biz/${bizId}`}>Cancel</NavLink>
                        <button id="addAnother" className="btn" type="submit" value="Add" onClick={handleAdd}>Add another item</button>
                        <button className="btn" type="submit" value="Finish">Finished</button>
                    </div>
                </form>
                <div className="authRight">
                    <img src="https://s3-media0.fl.yelpcdn.com/assets/2/www/img/7922e77f338d/signup/signup_illustration.png"></img>
                </div>
            </div>
        </div>
    );
}

export default FoodForm;
