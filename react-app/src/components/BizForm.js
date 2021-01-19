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
    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [phoneNum, setPhoneNum] = useState("");
    const [description, setDescription] = useState("");
    const [openingHour, setOpeningHour] = useState("");
    const [openingMin, setOpeningMin] = useState("");
    const [closingHour, setClosingHour] = useState("");
    const [closingMin, setClosingMin] = useState("");
    const [categoryIds, setCategoryIds] = useState([]);
    const [featureIds, setFeatureIds] = useState([]);

    const [error, setError] = useState(null);
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
        e.preventDefault();
        const biz = await postBiz(name, imageUrl, phoneNum, description, openingHour, openingMin, closingHour, closingMin, categoryIds, featureIds);
        if (biz.errors) {
            setError(Object.values(biz.errors))
        }
        setRedirect(`/biz/${biz.id}`);
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
        const position = featureIds.indexOf(id);
        if (position === -1) {
            setFeatureIds([...featureIds, id]);
        } else {
            const featureCopy = [...featureIds];
            featureCopy.splice(position, 1);
            setFeatureIds(featureCopy)
        };
    };

    if (!categories || !features) return "loading";

    // console.log(`open: ${open}`)

    return (
        <div id="formpageContainer" className="pageContainer">
            <div className="formContainer">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Tell us about your business</h1>
                    <p className="error">{error}</p>
                    <div>
                        <input className="input" type="text" name="name" placeholder="Business name" value={name} onChange={(e) => setName(e.target.value)} required></input>
                    </div>
                    <div>
                        <input className="input" type="text" name="imageUrl" placeholder="Image url" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}></input>
                    </div>
                    {/* <input className="input" type="text" name="phoneNum" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="000-000-0000" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}
                        required></input> */}
                    <input className="input" type="text" name="phoneNum" pattern="[0-9]{10}" placeholder="Phone 8003210000" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)}
                        required></input>
                    <div>
                        <textarea id="textArea" className="input" type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="time">
                        <h3 className="timeHead">Open</h3>
                        <div className="clock container">
                            <input className="timeInput input" type="number" min="1" max="12" step="1" placeholder="5" value={openingHour} onChange={(e) => setOpeningHour(e.target.value)} required></input>
                            <h1 className="timeHead">:</h1>
                            <input className="timeInput input" type="number" min="0" max="30" step="30" placeholder="00" value={openingMin} onChange={(e) => setOpeningMin(e.target.value)} required></input>
                            {/* <select className="timeSelect input" onChange={handleOpenHr}>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select> */}
                        </div>
                        <h3 className="timeHead">til</h3>
                        <div className="clock container">
                            <input className="timeInput input" type="number" min="1" max="12" step="1" placeholder="5" value={closingHour} onChange={(e) => setClosingHour(e.target.value)} required></input>
                            <h1 className="timeHead">:</h1>
                            <input className="timeInput input" type="number" min="0" max="30" step="30" placeholder="00" value={closingMin} onChange={(e) => setClosingMin(e.target.value)} required></input>
                            {/* <select className="timeSelect input" onChange={handleCloseHr}>
                                <option value="AM">AM</option>
                                <option value="PM">PM</option>
                            </select> */}
                        </div>
                    </div>

                    <h3>Categories</h3>
                    <div className="optionContainer">
                    {categories.map((category) => (
                        <div className="checkContainer" key={category.id}>
                            <input type="checkbox" name="categories" value={category.id} onChange={handleCategories}/>
                            <label className="label">{category.name}</label>
                        </div>
                    ))}
                    </div>
                    <h3>Features</h3>
                    <div className="optionContainer">
                    {features.map((feature) => (
                        <div key={feature.id}>
                            <input type="checkbox" name="features" value={feature.id} onChange={handleFeatures}/>
                            <label className="label">{feature.name}</label>
                        </div>
                    ))}
                    </div>
                    <p className="error">{error}</p>
                    <div className="formSubmit">
                        <button id="submitBtn" className="btn"type="submit">Share Your Listing</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BizForm;
