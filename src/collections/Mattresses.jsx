import {useState, useRef, useEffect} from 'react'
import Header from '../Header'
import Head from '../Head'
import Subscribe from '../Subscribe'
import Footer from '../Footer'
import { Link, useLocation } from 'react-router-dom'
import Van from '/icons/Van.png';
import Calender from '/icons/Calender.png';
import Warrenty from '/icons/Warrenty.png';
import compare from '/images/comparision/compare.png';

const Mattresses = () => {

const [LinkId, setLinkId] = useState(4); 
const compareRef = useRef(null);

const {location} = useLocation();

useEffect( () => {
  window.scrollTo(0,0);
},[location])

const handleClick = () => {
  if (compareRef.current) {
    compareRef.current.scrollIntoView({ behavior: 'smooth' });
  }
};

useEffect(() => { 
  if (window.location.hash === '#compare' && compareRef.current) {
    compareRef.current.scrollIntoView({ behavior: 'smooth' });
  }
}, []);


  const links = [
        { id: 1, name: "Single", 
           images: ["/images/mattresses/SingleMat/singlemat1.png", "/images/mattresses/SingleMat/singlemat2.png",
              "/images/mattresses/SingleMat/singlemat3.png"],
           rate:["4.8(643)","4.8(2059)","4.8(463)"], 
           title:["Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
           description:["Advanced support & cooling with seasonal and firmness adjustment.",
                       "Australia's top-rated mattress, enhanced support and comfort.",
                       "Cloud-like comfort at a price that will have you smiling in your sleep.",], 
           price:[" $990"," $850", " $650"] },

        { id: 2, name: "King Single", 
          images: ["/images/mattresses/SingleMat/singlemat1.png", "/images/mattresses/SingleMat/singlemat2.png",
                  "/images/mattresses/SingleMat/singlemat3.png"],
          rate:["4.8(643)","4.8(2059)","4.8(463)"], 
          title:["Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
          description:["Advanced support & cooling with seasonal and firmness adjustment.",
            "Australia's top-rated mattress, enhanced support and comfort.",
            "Cloud-like comfort at a price that will have you smiling in your sleep.",], 
          price:[" $990"," $850", " $650"] },

          { id: 3, name: "Double", 
            images: ["/images/mattresses/AllMat/allmat1.png", "/images/mattresses/AllMat/allmat2.png",
                    "/images/mattresses/AllMat/allmat3.png","/images/mattresses/AllMat/allmat4.png"],
            rate:["4.9(341)","4.8(643)","4.8(2059)","4.8(463)"], 
            title:["Koala Luxe Mattress", "Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
            description:["Redefining luxury sleep, with cashmere & copper Kloudcell®.",
              "Advanced support & cooling with seasonal and firmness adjustment.",
              "Australia's top-rated mattress, enhanced support and comfort.",
              "Cloud-like comfort at a price that will have you smiling in your sleep.",], 
            price:[" $2,000"," $990"," $850", " $650"] },

         { id: 4, name: "Queen", 
          images: ["/images/mattresses/AllMat/allmat1.png", "/images/mattresses/AllMat/allmat2.png",
                  "/images/mattresses/AllMat/allmat3.png","/images/mattresses/AllMat/allmat4.png"],
          rate:["4.9(341)","4.8(643)","4.8(2059)","4.8(463)"], 
          title:["Koala Luxe Mattress", "Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
          description:["Redefining luxury sleep, with cashmere & copper Kloudcell®.",
            "Advanced support & cooling with seasonal and firmness adjustment.",
            "Australia's top-rated mattress, enhanced support and comfort.",
            "Cloud-like comfort at a price that will have you smiling in your sleep.",], 
          price:[" $2,000"," $990"," $850", " $650"] },

        { id: 5, name: "King", images: [] },
        { id: 6, name: "Super King", images: [] },
      ];

    const handleLinkClick = (id) => {
    setLinkId(id === LinkId ? null : id);
    };


  return (
    <>
    <div className="scroll-smooth max-w-screen overflow-x-hidden">
      <Header/>
      <Head/>
      <div>
      <div className="bg-white px-4 md:px-40 pt-8 md:pt-14 mb-8 md:mb-18">
        
      <div className="flex flex-col md:flex-row justify-center items-center mb-3 gap-2">
        <img alt="star" src="/images/rate/stars.png" className="h-5 w-24 md:h-6 md:w-30" />
        <h1 className="text-lg md:text-xl font-bold text-gray-500 text-center md:text-left">Over 500,000 happy customers</h1>
      </div>
      <div className="flex text-2xl md:text-4xl font-bold justify-center items-center mb-6 md:mb-8 text-center">
        <h1>Australia's most awarded mattress brand</h1>
      </div>

     <div className="cursor-pointer">
      <div className="flex gap-2 md:gap-4 mb-6 md:mb-8 md:justify-center items-center overflow-x-auto md:overflow-x-visible" 
           style={{ "scrollbarWidth" : "none"}}>
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => handleLinkClick(link.id)}
            className={`px-3 py-1 md:px-4 md:py-2 rounded-full cursor-pointer font-semibold text-sm md:text-base flex-shrink-0 ${
              LinkId === link.id ? 'bg-[#586A4D] text-white' : 'bg-zinc-100 text-[#586A4D]'
            }`}
          >
            {link.name}
          </button>
        ))}
      </div>

      <div className="mt-4">
        {LinkId === 1 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {links[0].images.map((image, index) => (
              <div key={index} className="space-y-2 p-2 md:p-0">
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg w-full h-36 md:h-80 hover:opacity-85 transition-opacity"
              />
              <div className="flex text-gray-900 justify-start gap-1">
                <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/>
                <span>{links[0].rate[index]}</span>
              </div>
              <h3 className="text-gray-900 font-bold">{links[0].title[index]}</h3>
              <p className="text-gray-900 w-full h-24 md:h-14">{links[0].description[index]}</p>
              <p className="text-gray-900 font-bold">{links[0].price[index]}</p>
              <Link to="/collections/bedroom" className="inline-block bg-[#586A4D] w-full rounded-full text-white text-center font-bold py-2 px-6 md:py-4 md:px-8 text-sm md:text-base">SHOP NOW</Link>
              </div>    
              ))}
          </div>
        )}

       {LinkId === 2 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {links[1].images.map((image, index) => (
              <div key={index} className="space-y-2 p-2 md:p-0">
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg w-full h-36 md:h-80 hover:opacity-85 transition-opacity"
              />
              <div className="flex text-gray-900 justify-start gap-1">
                <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/>
                <span>{links[1].rate[index]}</span>
              </div>
              <h3 className="text-gray-900 font-bold">{links[1].title[index]}</h3>
              <p className="text-gray-900 w-full h-24 md:h-14">{links[1].description[index]}</p>
              <p className="text-gray-900 font-bold">{links[1].price[index]}</p>
              <Link to="/collections/bedroom" className="inline-block bg-[#586A4D] w-full rounded-full text-white text-center font-bold py-2 px-6 md:py-4 md:px-8 text-sm md:text-base">SHOP NOW</Link>
              </div>        
            ))}
          </div>
        )}

        {LinkId === 3 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {links[2].images.map((image, index) => (
              <div key={index} className="space-y-2 p-2 md:p-0">
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg w-full h-36 md:h-80 hover:opacity-85 transition-opacity"
              />
              <div className="flex text-gray-900 justify-start gap-1">
                <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/>
                <span>{links[2].rate[index]}</span>
              </div>
              <h3 className="text-gray-900 font-bold">{links[2].title[index]}</h3>
              <p className="text-gray-900 w-full h-24 md:h-14">{links[2].description[index]}</p>
              <p className="text-gray-900 font-bold">{links[2].price[index]}</p>
              <Link to="/collections/bedroom" className="inline-block bg-[#586A4D] w-full rounded-full text-white text-center font-bold py-2 px-6 md:py-4 md:px-8 text-sm md:text-base">SHOP NOW</Link>
              </div> 
            ))}
          </div>
        )}

       {LinkId === 4 && (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-1 md:gap-8">
            {links[3].images.map((image, index) => (
              <div key={index} className="space-y-2 p-2 md:p-0">
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="rounded-lg w-full h-36 md:h-80 hover:opacity-85 transition-opacity"
              />
              <div className="flex text-gray-900 justify-start gap-1">
                <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/>
                <span>{links[3].rate[index]}</span>
              </div>
              <h3 className="text-gray-900 font-bold">{links[3].title[index]}</h3>
              <p className="text-gray-900 w-full h-24 md:h-14">{links[3].description[index]}</p>
              <p className="text-gray-900 font-bold">{links[3].price[index]}</p>
              <Link to="/collections/bedroom" className="inline-block bg-[#586A4D] rounded-full text-white text-center font-bold py-2 px-6 md:py-4 md:px-8 text-sm md:text-base w-full">SHOP NOW</Link>
              </div> 
            ))}
          </div>
        )}
      </div>
    </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-center py-3 mb-6 md:mb-8 gap-2 md:gap-3 text-black text-sm md:text-md w-full bg-zinc-100">
      <div className="flex items-center gap-1">
        <img src={Van} alt="Van" width="20px" height="20px" />
        <span>Fast delivery</span>
      </div>
      <div className="flex items-center gap-1">
        <img src={Calender} alt="Calendar" width="20px" height="20px" />
        <span>120-night free trial</span>
      </div>
      <div className="flex items-center gap-1">
        <img src={Warrenty} alt="Warranty" width="20px" height="20px" />
        <span>World-class warranty</span>
      </div>
    </div>

      <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-40 h-auto md:h-32 bg-zinc-100 rounded-lg p-4 md:p-8 mb-8 md:mb-14 gap-4">
        <h2 className="text-xl md:text-3xl text-black font-bold text-center md:text-left">Not sure which mattress is right for you?</h2>
        <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center gap-3 md:gap-6">
          <Link className="border border-gray-500 hover:border-black bg-white text-gray-700 font-bold py-2 px-4 md:py-4 md:px-6 rounded-full cursor-pointer text-sm md:text-base" to="/pages/mattressQuiz">TAKE THE QUIZ</Link>
          <button className="border border-gray-500 hover:border-black bg-white text-gray-700 font-bold py-2 px-4 md:py-4 md:px-6 rounded-full cursor-pointer text-sm md:text-base" onClick={handleClick}>COMPARE MATTRESSES</button> 
        </div>
      </div>

      <div className="flex text-2xl md:text-3xl font-bold justify-center items-center mb-6 md:mb-8" id="compare" ref={compareRef}>
        <h1 className="text-center">Find Your Perfect Mattress</h1>
      </div>

      <div className="flex justify-center items-center mb-8 px-4 md:px-40">
        <img className="border border-gray-200 rounded-lg"
              src={compare}  
              alt="Comparision Table" 
              width="100%"
              height="auto" 
          />
      </div>
  

    </div>

      <Subscribe/>
      <Footer/>
    </div>
    </>
  )
}

export default Mattresses