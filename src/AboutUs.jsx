import { useState} from 'react';
//import axios from 'axios'; 
import { Link } from 'react-router-dom';
import { aboutUs } from './data/koala'
//import { useMediaQuery } from 'react-responsive';

const AboutUs = () => {
    //const [aboutUs, setAboutUs] = useState([]); 
    const [currentSlide, setCurrentSlide] = useState(0);
   // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    // useEffect(() => {
    //     axios.get('http://localhost:5000/aboutUs')
    //       .then(response => {
    //         setAboutUs(response.data); 
    //       })
    //       .catch(error => {
    //         console.error('Error fetching about us data:', error);
    //       });
    // }, []);  

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === aboutUs.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? aboutUs.length - 1 : prev - 1));
    };

    return (
        <div className="bg-white px-4 md:px-40 pt-14 mb-16">
            <div className="flex flex-row justify-between mb-5">
                <h1 className="text-3xl md:text-4xl font-bold justify-start mb-4 md:mb-0">A little about us</h1>
                <Link className="border-1 font-bold rounded-full h-14 w-44 p-4 text-center" to="/pages/whykoala">LEARN MORE</Link>
            </div>
            
            <div className="flex relative">
                <img 
                    src="//au.koala.com/cdn/shop/files/Forest_image_1.png?v=1732492791&width=1680" 
                    alt="about us" 
                    className="rounded-xl w-full h-80 md:h-48 object-cover" 
                />
        
                <div className="text-overlay absolute top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row items-center text-white justify-between p-4 md:p-0">
                    <div className="w-full md:w-[450px] mb-4 md:mb-0 md:p-8">
                        <h2 className="text-2xl md:text-3xl font-bold">Our mission is to help plant and protect 2 billion trees in 10 years</h2>
                    </div>
                    <div className="w-full md:w-[750px] md:p-6">
                        <p className="text-base md:text-xl">
                            We love creating habitats for all Aussies, including those of the furry persuasion. 
                            Shockingly, 95% of koalas perished during the horrific 2019-20 bushfires, so we have partnered with not-for-profit organisation WWF-Australia with the aim 
                            of regenerating the homes of this devastated population.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop View (unchanged) */}
            <div className="hidden md:flex justify-between mt-4">
                {aboutUs.map((about) => (
                    <div key={about.id}>
                        <div className="rounded-xl">
                            <img src={about.image} alt="about us" className="rounded-lg w-95 h-80" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View - Sliding Carousel */}
            <div className="md:hidden mt-4 relative">
                <div className="overflow-hidden relative">
                    <div 
                        className="flex transition-transform duration-300 ease-in-out"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {aboutUs.map((about) => (
                            <div key={about.id} className="w-full flex-shrink-0 px-2">
                                <div className="rounded-xl">
                                    <img src={about.image} alt="about us" className="rounded-lg w-full h-80 object-cover" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Navigation Arrows */}
                {aboutUs.length > 1 && (
                    <>
                        <button onClick={prevSlide}
                          className="absolute left-2 bottom-2 bg-[#586A4D] bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center ml-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" 
                               strokeLinejoin="round" className="w-6 h-6"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>
                        <button onClick={nextSlide}
                           className="absolute right-2 bottom-2 bg-[#586A4D] bg-opacity-50 w-10 h-10 rounded-full flex items-center justify-center mr-2">
                           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"
                                strokeLinejoin="round" className="w-6 h-6"><polyline points="9 18 15 12 9 6" /></svg> 
                        </button>
                    </>
                )}
                
                {/* Indicators */}
                {/* <div className="flex justify-center mt-2 space-x-2">
                    {aboutUs.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-black' : 'bg-gray-300'}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div> */}
            </div>
        </div>
    );
};

export default AboutUs;
