import { useState, useEffect } from 'react';
import { VscCode } from "react-icons/vsc";
import { CiPen } from "react-icons/ci";
import './Hero.css';

const words = ['Designer', 'Developer', 'Creative'];

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-container bg-gradient-to-b from-blue-900 to-blue-600 text-white h-64 flex justify-center items-center">
            <VscCode className="text-3xl md:text-5xl mr-4" />
            <div className="text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-shadow">Esmee Fulcher</h1>
                <p className="text-lg md:text-2xl text-shadow">
                    I&#39;m a <span className="fade-text font-bold">{words[index]}</span>
                </p>
            </div>
            <CiPen className="text-3xl md:text-5xl ml-4" />
        </div>
    );
};

export default Hero;
