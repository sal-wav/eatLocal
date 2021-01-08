import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
// import { useDropzone } from "react-dropzone";
import { postBiz } from "../services/biz";
import { getCategories, getFeatures } from "../services/categoryFeature";
import "./styles/form.css"

const BizForm = () => {
    const [redirect, setRedirect] = useState(null);
    const [categories, setCategories] = useState([]);
    const [features, setFeatures] = useState([]);
    const [name, setName] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [phoneNum, setPhoneNum] = useState(null);
    const [description, setDescription] = useState(null);
    const [categoryIds, setCategoryIds] = useState([]);
    const [featureIds, setFeatureIds] = useState([]);
//   const [isImageUploading, setIsImageUploading] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await getCategories();
            const res2 = await getFeatures();

            setCategories(response.categories);
            setFeatures(res2.features);
        })();
    }, []);

    const handleSubmit = async (e) => {
        // e.preventDefault();
        // try {
        //     const biz = await postBiz(name, description, imageUrl, phoneNum, categoryIds, featureIds);
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

    const handleFeatures = async (e) => {
        const id = parseInt(e.target.value);
        const position = categoryIds.indexOf(id);
        if (position === -1) {
            setFeatureIds([...featureIds, id]);
        } else {
            const featureCopy = [...featureIds];
            featureCopy.splice(position, 1);
            setFeatureIds(featureCopy)
        };
    };

    if (!categories || !features) return "loading";

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

            <div>
            {categories.map((category) => (
                <div key={category.id}>
                    <input type="checkbox" name="categories" value={category.id} onChange={handleCategories}/>
                    <label className="label">{category.name}</label>
                </div>
            ))}
            </div>
            <div>
            {features.map((feature) => (
                <div key={feature.id}>
                    <input type="checkbox" name="features" value={feature.id} onChange={handleFeatures}/>
                    <label className="label">{feature.name}</label>
                </div>
            ))}
            </div>
            <div className="formSubmit">
                <button className="submitBtn" type="submit">Post</button>
            </div>
        </form>
    );
};

export default BizForm;
