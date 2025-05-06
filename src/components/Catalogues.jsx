import React, { useEffect, useState } from 'react';

const Catalogues = () => {
    const [catalogues, setCatalogues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCatalogues = async () => {
            try {
                const response = await fetch('https://api.sampleapis.com/beers/ale'); 
                if (!response.ok) {
                    throw new Error('Failed to fetch catalogues');
                }
                const data = await response.json();
                setCatalogues(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCatalogues();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Beer Catalogue</h1>
            <ul>
                {catalogues.map((catalogue) => (
                    <li key={catalogue.id}>{catalogue.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default Catalogues;