import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [orientation, setOrientation] = useState({
        alpha: 0,
        beta: 0,
        gamma: 0
    });
    
    useEffect(() => {
        const handleOrientation = (event: DeviceOrientationEvent) => {
            console.log(event.absolute)
            setOrientation({
                alpha: event.alpha || 0,
                beta: event.beta || 0,
                gamma: event.gamma || 0
            });
        }
        window.addEventListener("deviceorientation", handleOrientation);
        
        return () => {
            window.removeEventListener("deviceorientation", handleOrientation);
        }
    }, []);
    return (
        <>
            {/*<header><h1>Header</h1></header>*/}
            <main>
                <h1>Device Orientations</h1>
                <p>Alpha: {orientation.alpha}</p>
                <p>Beta: {orientation.beta}</p>
                <p>Gamma: {orientation.gamma}</p>
            </main>
            {/*<footer><h1>Footer</h1></footer>*/}
        </>
    );
}

export default App;
