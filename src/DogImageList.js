
import React, { useState, useEffect } from "react";



function DogImageList() {
    const [breed, setBreed] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://dog.ceo/api/breeds/image/random');
                const data = await response.json();
                setBreed(data.message);
            } catch (error) {
                console.error('Nepodařilo se načíst obrázek', error);
            }
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>Random dog breed</h1>
            <img src={breed} alt="You can see random dogs" />
        </div>
    );
};

export default DogImageList; 