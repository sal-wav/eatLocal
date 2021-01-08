import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { bizFeatures } from '../services/categoryFeature';

const BizPage = () => {
    const { bizId } = useParams();
    const [features, setFeatures] = useState([]);
    const [biz, setBiz] = useState(null);

    const menu = ['taco', 'torta', 'flautas', 'burrito', 'chips', 'salsa', 'guac', 'huevos rancheros',]

    useEffect(() => {
        (async () => {
            const response = await bizFeatures(bizId);
            setBiz(response.biz);
            console.log(`biz: ${JSON.stringify(response.biz)}`)
            setFeatures(response.features);
        })();
    }, [bizId]);

    if (!biz || !features) return 'loading';

    return (
        <div>
            <h2>{biz.name}</h2>
            <h3>{biz.phone_num}</h3>
            <img className='coverImg' src={biz.image_url}></img>
            <p>{biz.description}</p>
            {features.map((feature) => (
                <div key={feature.id}>
                    <p>{feature.name}</p>
                </div>
            ))}
        </div>
    );
}

export default BizPage;
