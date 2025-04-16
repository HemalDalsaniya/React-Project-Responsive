import { useState, useEffect, useRef } from 'react';
import axios from 'axios'; 

const WhyKoalaHome = () => {
    const [whyKoala, setWhyKoala] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        axios.get('http://localhost:5000/whyKoala')
          .then(response => {
            setWhyKoala(response.data); 
          })
          .catch(error => {
            console.error('Error fetching about us data:', error);
          });
    }, []);  

    // Touch event handlers for mobile swipe
    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setIsDragging(true);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX;
        const diff = startX - x;
        
        if (diff > 5) {
            // Swipe left
            goToNext();
            setIsDragging(false);
        } else if (diff < -5) {
            // Swipe right
            goToPrev();
            setIsDragging(false);
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === whyKoala.length - 1 ? 0 : prevIndex + 1
        );
    };

    const goToPrev = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? whyKoala.length - 1 : prevIndex - 1
        );
    };

    // Progress bar calculation
    const progress = ((currentIndex + 1) / whyKoala.length) * 100;

    // Desktop view (unchanged)
    if (windowWidth > 768) {
        return (
            <div className="bg-white px-40 pt-14 mb-10">
                <div className="text-center mb-8 space-y-3">
                    <p className="text-gray-500 font-semibold">Why Koala?</p>
                    <h1 className="text-4xl font-bold">We're in the business of making things good</h1>  
                </div>
                <div className="flex justify-between mt-4">
                    {whyKoala.map((koala) => (
                        <div key={koala.id} className="space-y-3">
                            <div className="rounded-xl">
                                <img src={koala.image} alt="about us" className="rounded-lg w-125 h-80" />
                            </div>
                            <p className="font-bold text-lg w-125">{koala.title}</p>
                            <p className="text-lg w-125">{koala.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    // Mobile view with slider
    return (
        <div className="bg-white px-4 pt-14 pb-10">
            <div className="text-left md:text-center mb-8 space-y-3 px-2">
                <p className="text-gray-500 font-semibold">Why Koala?</p>
                <h1 className="text-3xl font-bold">We're in the business of making things good</h1>  
            </div>
            <div className="relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                ref={sliderRef}>
                <div className="flex w-full" 
                      style={{ transform: `translateX(-${currentIndex * 100}%)` }}> 
                    {whyKoala.map((koala) => (
                        <div key={koala.id} className="w-full px-2 space-y-3 flex-shrink-0">
                            <div className="rounded-xl">
                                <img src={koala.image}  alt="about us" className="rounded-lg w-full h-80 object-cover" />
                            </div>
                            <p className="font-bold text-lg">{koala.title}</p>
                            <p className="text-lg">{koala.description}</p>
                        </div>
                    ))}
                </div>
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mt-6">
                    <div 
                        className="bg-[#586A4D] h-2.5 rounded-full" 
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>  
            </div>
        </div>
    );
};

export default WhyKoalaHome;