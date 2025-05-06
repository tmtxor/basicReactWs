import React, { useEffect, useState } from 'react';

export default function Chatroom1() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://api.sampleapis.com/jokes/goodJokes');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setData(result);
            }
            catch (err) {
                console.error(err);
            }
        };
        getData();
    }, []);

    return (
        <div>
            {data.map((item, index) => (
                <div key={index}>
                    <p><strong>{item.setup}</strong></p>
                    <p>{item.punchline}</p>
                    <p>_____________________________________________________________________________________</p>
                </div>
            ))}
        </div>
    );
}