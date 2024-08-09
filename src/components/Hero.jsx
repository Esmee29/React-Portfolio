import { useState, useEffect } from 'react';
import { CiPen } from 'react-icons/ci';
import { VscCode } from 'react-icons/vsc';
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
        <div className="hero-container flex flex-col justify-center items-center text-center bg-gradient-to-b from-blue-900 to-blue-600 text-white h-screen lg:h-[90vh] relative">
            <div className="absolute inset-0 flex items-center justify-between px-6">
                <CiPen className="text-5xl md:text-6xl lg:text-7xl opacity-50 transform rotate-[-15deg]" />
                <VscCode className="text-5xl md:text-6xl lg:text-7xl opacity-50 transform rotate-[15deg]" />
            </div>
            <div className="relative z-10 flex flex-col items-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-text">Esmee Fulcher</h1>
                <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-6">
                    I&#39;m a <span className="fade-text font-bold">{words[index]}</span>
                </p>
                <a href="#projects" className="px-6 py-3 bg-white text-blue-900 font-bold rounded-full shadow-lg hover:bg-gray-200 transition duration-300">
                    Explore My Work
                </a>
            </div>
        </div>
    );
};

export default Hero;
