
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DogImageList.css";


function DogImageList() {
    const [image, setImage] = useState(null);



    useEffect(() => {
        fetchImage();
    }, []);

    const fetchImage = async () => {
        try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setImage(data.message);
        } catch (error) {
            console.error('Nepodařilo se načíst obrázek', error);
        }

    };

    const handleRefreshButton = () => {
        fetchImage();
    };

    return (
        <div className="card" style={{ width: "30rem", height: "45rem" }}>
            <div className="text-center">
                <h1 className="display-6">Random dog breed</h1>
                <div>
                    {image && <img className="card-img-top" src={image} alt="You can see random dogs" />}
                    <button className="btn btn-success" onClick={handleRefreshButton}>Click for another dog!</button>
                </div>

            </div>

        </div>
    );
};

export default DogImageList; 