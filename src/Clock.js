import React, { useEffect, useState } from 'react';
import './Clock.css';

const Clock = () => {

    const [currenttime, setCurrenttime] = useState(new Date().toLocaleTimeString());


    const Update = () => {
        setCurrenttime(new Date().toLocaleTimeString());
    };

    useEffect(() => {
        const timer = setInterval(Update, 1000);
        

        return () => clearInterval(timer);
    }, []);

    return (
        <div id="timer">
            <h1>{currenttime}</h1>
        </div>
    );
};

export default Clock;