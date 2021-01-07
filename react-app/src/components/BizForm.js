import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { useDropzone } from "react-dropzone";
import { postBiz } from "../services/biz";
import "./styles/form.css"

const BizForm = () => {
    const [redirect, setRedirect] = useState(null);
    const [name, setName] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [phoneNum, setPhoneNum] = useState(null);
    const [description, setDescription] = useState(null);
    const [categoryIds, setCategoryIds] = useState([]);

    const categories =[{name: 'takeout','id': 1}, {name: 'delivery', 'id': 2}]
//   const [isImageUploading, setIsImageUploading] = useState(false);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     const biz = await postBiz(name, description, imageUrl, phoneNum, categoryIds);
        //     setRedirect(`/biz/${biz.id}`);
        // } catch (submissionError) {
        //     setError(submissionError);
        // }
    };

    const handleCategories = async (e) => {
        const id = parseInt(e.target.value);
        const position = categoryIds.indexOf(id);
        if (position === -1) {
            setCategoryIds([...categoryIds, id]);
        } else {
            const categoryCopy = [...categoryIds];
            categoryCopy.splice(position, 1);
            setCategoryIds(categoryCopy)
        };
    };


    return (
        <form className="form">
            <div>
                <input className="input" type="text" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required></input>
            </div>
            <div>
                <input className="input" type="text" name="imageUrl" placeholder="Image Url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
            </div>
            <div>
                <input className="input" type="text" name="phoneNum" placeholder="Phone Number" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} required></input>
            </div>
            <div>
                <textarea className="input" type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>

            {categories.map((category) => (
                <div key={category.id}>
                    <input type="checkbox" name="categories" value={category.id} onChange={handleCategories}/>
                    <label className="label">{category.name}</label>
                </div>
            ))}

            <div className="formSubmit">
                <button className="submitBtn" type="submit">Post</button>
            </div>
        </form>
    );
};

export default BizForm;
