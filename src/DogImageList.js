
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



function DogImageList() {
    const [image, setImage] = useState('');


    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                setImage(data.message);
            } catch (error) {
                console.error('Nepodařilo se načíst obrázek', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="card" style={{ width: "30rem", height: "45rem" }}>
            <div className="text-center">
                <h1 className="display-6">Random dog breed</h1>
                <img className="card-img-top" src={image} alt="You can see random dogs" />
                <button className="btn btn-success">Click for another dog!</button>
            </div>

        </div>
    );
};

export default DogImageList; 