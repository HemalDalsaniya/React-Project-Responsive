// import {useState} from 'react'
// import Header from '../Header'
// import Head from '../Head'
// import Subscribe from '../Subscribe'
// import Footer from '../Footer'

// const WhyKoala = () => {

// const [LinkId, setLinkId] = useState(1); 
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const links = [
//     { 
//       id: 1, 
//       images: ["/images/whyKoala/whyKoala6.png", "/images/whyKoala/whyKoala7.png","/images/whyKoala/whyKoala8.png",
//               "/images/whyKoala/whyKoala9.png","/images/whyKoala/whyKoala10.png",],
//       description: [
//         "1% for the Planet members contribute at least 1% of their revenue to environmental causes.",
//         "B Corps make decisions that have a positive impact across their workers, customers, suppliers, community and the environment.",
//         "For most product sales, we make a donation to support koalas! So far, we have donated more than $3M to WWF in support of this partnership.",
//         "At Koala Second Home we take back the returns from our 120 night trial period and refurbish the goods to near new condition. We then sell these at a huge saving off the every-day retail prices!",
//         "FSC timber is cut from forests managed in a way that preserves biological diversity and benefits the lives of local people and workers.",], 
//       title: ["1% for the Planet", "B Corp Certified", "WWF Partnership", "Koala Second Home", "100% FSC Timber"], 
//     },
//   ];

//   const currentLink = links.find((link) => link.id === LinkId);

//   const nextImage = () => {
//     if (currentLink && currentIndex < currentLink.images.length - 4) {
//       setCurrentIndex((prevIndex) => prevIndex + 1);  
//     }
//   };

//   const prevImage = () => {
//     if (currentLink && currentIndex > 0) {
//       setCurrentIndex((prevIndex) => prevIndex - 1);
//     }
//   };

//   // Calculate the progress as a percentage
//   const progress = (currentIndex / (currentLink ? currentLink.images.length - 4 : 1)) * 100;
// //  const progress = (currentIndex / Math.max(currentLink.images.length - 4, 1)) * 100;

//   return (
//     <>
//     <div>
//       <Header/>
//       <Head/>
     
//      <div className="w-full bg-white ">
//            <div>
//            <div className=" w-full flex relative cursor-pointer">
//            <img
//              width="100%" 
//              height="auto"
//              src="//au.koala.com/cdn/shop/files/Desktop_HP_Hero_Banner_-_8_3_1920x720px.jpg?v=1727768967&width=3840"            
//            ></img>
     
//             <div className="text-overlay absolute left-0 right-0 bottom-0 flex items-center text-white px-40">
//                <div className="py-16 justify-left">
//                <h1 className="text-7xl font-bold">Furniture made good</h1>
//                <div className="text-2xl font-bold py-6"><p>We make it easy to get beautiful furniture designed in Australia at down to earth prices.</p></div> 
//                </div>
//             </div>

//             </div>

//             <div className=" text-black py-12 text-center w-full">
//                <h1 className="text-4xl font-bold mx-auto w-3xl">We make it easy to get beautiful furniture designed in Australia at down to earth prices.</h1>
//                <div className="text-md py-6 mx-auto w-3xl"><p>Good value delivered direct to your door, so you can enjoy your best life.</p></div> 
//             </div>

//           <div className="w-full flex relative mb-16">
//            <img
//              width="100%" 
//              height="auto"
//              src="/images/whyKoala/whyKoala4.png"              
//            ></img>
//             </div>

//             <div className="w-full flex mb-24 px-40">
//               <div className="flex-1 justify-start px-20 py-30 space-y-2">
//               <h1 className="text-5xl font-bold ">You can’t </h1>
//               <h1 className="text-5xl font-bold ">afford dodgy furniture.</h1>
//               <div className="text-md py-6 pe-12 text-xl w-full"><p>Don’t pay extra for inefficient production and supply chains caused by having too many products. Let alone the middlemen upcharges, warehousing and showroom expenses of traditional retail. We cut out all hidden costs and inefficiencies, 
//                                              so your money just pays for the best products in the market at the best possible price.</p></div> 
//               </div>
//               <div className="flex-1">
//               <img
//                width="100%" 
//                height="100%"
//                src="/images/whyKoala/whyKoala5.png"   
//                className="rounded-lg"           
//               ></img></div> 
//             </div>

//             <div className="w-full flex mb-24 px-40">
//             <div className="video-container flex-1">
//               <video
//               width="100%" 
//               height="100%"
//               autoPlay={true} 
//               loop 
//               muted={true}
//               playsInline={true}
//               className="rounded-lg"
//               >
//              <source src="//au.koala.com/cdn/shop/videos/c/vp/a01247e643c340f883a21e645c78f0c3/a01247e643c340f883a21e645c78f0c3.HD-720p-2.1Mbps-41793038.mp4?v=0" type="video/mp4" />
//             </video>
//             </div>
//               <div className="flex-1 justify-start px-20 py-30 space-y-2">
//               <h1 className="text-5xl font-bold ">Buy furniture worth </h1>
//               <h1 className="text-5xl font-bold ">keeping.</h1>
//               <div className="text-md py-6 pe-12 text-xl w-full"><p>Fast furniture creates more of lesser products, leading to issues with design and quality standards, while maximising wastage throughout the supply chain. In turn this means you are paying more for products that will soon be on their way to landfill. Our Sydney based design team only make winners. 
//                                                                 Making thoughtfully designed products efficiently, so you can get them for the best price.</p></div> 
//               </div>
               
//             </div>

//             <div className="w-full flex mb-24 px-40">
            
//               <div className="flex-1 justify-start px-20 py-30 space-y-2">
//               <h1 className="text-5xl font-bold ">Down with Allen keys!</h1>
              
//               <div className="text-md py-6 pe-12 text-xl w-full"><p>We believe furniture should be stress free, the Allen key stands for everything but. So along with 100% tool-free assembly we offer fast and flexible delivery and a risk free 120 night trial with hassle free returns.</p></div> 
//               </div>
//               <div className="video-container flex-1">
//               <video
//               width="100%" 
//               height="100%"
//               autoPlay={true} 
//               loop 
//               muted={true}
//               playsInline={true}
//               className="rounded-lg w-full"
//               >
//              <source src="//au.koala.com/cdn/shop/videos/c/vp/c0d048a2bdbe4be3a9c48fb95d66e00d/c0d048a2bdbe4be3a9c48fb95d66e00d.HD-1080p-3.3Mbps-35399727.mp4?v=0" type="video/mp4" />
//             </video>
//             </div>
               
//             </div>
//             </div>

//      {/* why-Koala Review  */}

//       <div className="bg-white px-40 mb-14">
//       <div className="flex justify-between relative">
//         <div className="space-y-2 justify-start"> 
//           <p className="text-gray-500 font-semibold">Why Koala?</p>
//           <h1 className="text-4xl font-bold">We’re in the business of making Furniture.</h1> 
//         </div>

//         {/* Right-aligned buttons */}
//         <div className="absolute right-0 space-x-2 mt-6">
//           <button
//             onClick={prevImage}
//             className="text-gray-700 text-2xl w-14 h-14 bg-zinc-100 bg-opacity-50 p-2 rounded-full"
//           >
//             &#11164;
//           </button>
//           <button
//             onClick={nextImage}
//             className="text-gray-700 text-2xl w-14 h-14 bg-zinc-100 bg-opacity-50 p-2 rounded-full"
//           >
//             &#11166;
//           </button>
//         </div>
//       </div>

//       {/* Carousel Images and Content */}
//       <div>
//       <div className="flex gap-8 w-full cursor-pointer mt-10">
//         {currentLink && currentLink.images.slice(currentIndex, currentIndex + 4).map((image, index) => (
//           <div key={index} className="space-y-4">
//             <div>
//             {/* Image */}
//             <img 
//               src={image} 
//               alt={`Carousel Image ${currentIndex + index + 1}`} 
//               className="rounded-lg w-95 h-65 hover:opacity-85 transition-opacity" 
//             />
//           </div>
//             {/* Review Details */}
//             <div className="text-gray-900 space-y-2 w-95">
//               <p className="text-gray-900 font-bold">{currentLink.title[currentIndex + index]}</p>
//               <p className="text-gray-900 w-95 h-30">{currentLink.description[currentIndex + index]}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Progress Bar */}
//       <div className="w-full h-2 bg-gray-300 mt-7 rounded-full">
//         <div 
//           className="h-full bg-[#586A4D] rounded-full"
//           style={{ width: `${progress}%` }}
//         ></div>
//       </div>
      
//     </div>

//     </div>     
   
//     </div>

//       <Subscribe/>
//       <Footer/>
//     </div>
//     </>
//   )
// }

// export default WhyKoala


import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Header';
import Head from '../Head';
import Subscribe from '../Subscribe';
import Footer from '../Footer';

const WhyKoala = () => {
  const [LinkId, setLinkId] = useState(1); 
  const [currentIndex, setCurrentIndex] = useState(0);
  //const [isMobile, setIsMobile] = useState(false);

  const {location} = useLocation();

  useEffect( () => {
    window.scrollTo(0,0);
  },[location])

  const links = [
    { 
      id: 1, 
      images: ["/images/whyKoala/whyKoala6.png", "/images/whyKoala/whyKoala7.png","/images/whyKoala/whyKoala8.png",
              "/images/whyKoala/whyKoala9.png","/images/whyKoala/whyKoala10.png",],
      description: [
        "1% for the Planet members contribute at least 1% of their revenue to environmental causes.",
        "B Corps make decisions that have a positive impact across their workers, customers, suppliers, community and the environment.",
        "For most product sales, we make a donation to support koalas! So far, we have donated more than $3M to WWF in support of this partnership.",
        "At Koala Second Home we take back the returns from our 120 night trial period and refurbish the goods to near new condition. We then sell these at a huge saving off the every-day retail prices!",
        "FSC timber is cut from forests managed in a way that preserves biological diversity and benefits the lives of local people and workers.",], 
      title: ["1% for the Planet", "B Corp Certified", "WWF Partnership", "Koala Second Home", "100% FSC Timber"], 
    },
  ];

  const currentLink = links.find((link) => link.id === LinkId);

  const nextImage = () => {
    if (currentLink) {
      const maxIndex = window.innerWidth < 768 ? currentLink.images.length - 1 : currentLink.images.length - 4;
      if (currentIndex < maxIndex) {
        setCurrentIndex((prevIndex) => prevIndex + 1);  
      }
    }
  };

  const prevImage = () => {
    if (currentLink && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Calculate the progress as a percentage
  const getProgress = () => {
    if (!currentLink) return 0;
    const totalItems = window.innerWidth < 768 ? currentLink.images.length : currentLink.images.length - 3;
    return (currentIndex / (totalItems - 1)) * 100;
  };

  const progress = getProgress();

  return (
    <>
    <div className="scroll-smooth max-w-screen overflow-x-hidden">
      <Header/>
      <Head/>
     
     <div className="w-full bg-white">
           <div>
           <div className="w-full flex relative cursor-pointer">
           <img
             width="100%" 
             height="auto"
             src="//au.koala.com/cdn/shop/files/Desktop_HP_Hero_Banner_-_8_3_1920x720px.jpg?v=1727768967&width=3840"
             className="object-cover"
             alt="Hero banner"            
           ></img>
     
            <div className="text-overlay absolute left-0 right-0 bottom-0 flex items-center px-4 md:px-40">
               <div className="py-8 md:py-16 justify-left">
                 <h1 className="text-3xl md:text-7xl font-bold text-white">Furniture made good</h1>
                 <div className="text-base md:text-2xl font-bold py-3 md:py-6 text-white">
                   <p>We make it easy to get beautiful furniture designed in Australia at down to earth prices.</p>
                 </div> 
               </div>
            </div>
            </div>

            <div className="text-black py-8 md:py-12 text-center w-full px-4 md:px-0">
               <h1 className="text-2xl md:text-4xl font-bold mx-auto max-w-3xl">
                 We make it easy to get beautiful furniture designed in Australia at down to earth prices.
               </h1>
               <div className="text-sm md:text-md py-4 md:py-6 mx-auto max-w-3xl">
                 <p>Good value delivered direct to your door, so you can enjoy your best life.</p>
               </div> 
            </div>

          <div className="w-full flex relative mb-8 md:mb-16">
           <img
             width="100%" 
             height="auto"
             src="/images/whyKoala/whyKoala4.png"
             alt="Why Koala"              
           ></img>
            </div>

            <div className="w-full flex flex-col md:flex-row mb-12 md:mb-24 px-4 md:px-40">
              <div className="flex-1 justify-start md:px-20 py-8 md:py-30 space-y-2 order-2 md:order-1">
                <h1 className="text-3xl md:text-5xl font-bold">You can't afford dodgy furniture.</h1>
                <div className="text-lg md:text-md py-4 md:py-6 pe-0 md:pe-12 md:text-xl w-full">
                  <p>Don't pay extra for inefficient production and supply chains caused by having too many products. Let alone the middlemen upcharges, warehousing and showroom expenses of traditional retail. We cut out all hidden costs and inefficiencies, so your money just pays for the best products in the market at the best possible price.</p>
                </div> 
              </div>
              <div className="flex-1 order-1 md:order-2 mb-6 md:mb-0">
                <img
                 width="100%" 
                 height="100%"
                 src="/images/whyKoala/whyKoala5.png"   
                 className="rounded-lg"
                 alt="Quality furniture"           
                ></img>
              </div> 
            </div>

            <div className="w-full flex flex-col md:flex-row mb-12 md:mb-24 px-4 md:px-40">
              <div className="video-container flex-1 mb-6 md:mb-0">
                <video
                  width="100%" 
                  height="100%"
                  autoPlay={true} 
                  loop 
                  muted={true}
                  playsInline={true}
                  className="rounded-lg"
                >
                  <source src="//au.koala.com/cdn/shop/videos/c/vp/a01247e643c340f883a21e645c78f0c3/a01247e643c340f883a21e645c78f0c3.HD-720p-2.1Mbps-41793038.mp4?v=0" type="video/mp4" />
                </video>
              </div>
              <div className="flex-1 justify-start md:px-20 py-8 md:py-30 space-y-2">
                <h1 className="text-3xl md:text-5xl font-bold">Buy furniture worth keeping.</h1>
                <div className="text-lg md:text-md py-4 md:py-6 pe-0 md:pe-12 md:text-xl w-full">
                  <p>Fast furniture creates more of lesser products, leading to issues with design and quality standards, while maximising wastage throughout the supply chain. In turn this means you are paying more for products that will soon be on their way to landfill. Our Sydney based design team only make winners. Making thoughtfully designed products efficiently, so you can get them for the best price.</p>
                </div> 
              </div>
            </div>

            <div className="w-full flex flex-col md:flex-row mb-12 md:mb-24 px-4 md:px-40">
              <div className="flex-1 justify-start md:px-20 py-8 md:py-30 space-y-2 order-2 md:order-1">
                <h1 className="text-3xl md:text-5xl font-bold">Down with Allen keys!</h1>
                <div className="text-lg md:text-md py-4 md:py-6 pe-0 md:pe-12 md:text-xl w-full">
                  <p>We believe furniture should be stress free, the Allen key stands for everything but. So along with 100% tool-free assembly we offer fast and flexible delivery and a risk free 120 night trial with hassle free returns.</p>
                </div> 
              </div>
              <div className="video-container flex-1 order-1 md:order-2 mb-6 md:mb-0">
                <video
                  width="100%" 
                  height="100%"
                  autoPlay={true} 
                  loop 
                  muted={true}
                  playsInline={true}
                  className="rounded-lg w-full"
                >
                  <source src="//au.koala.com/cdn/shop/videos/c/vp/c0d048a2bdbe4be3a9c48fb95d66e00d/c0d048a2bdbe4be3a9c48fb95d66e00d.HD-1080p-3.3Mbps-35399727.mp4?v=0" type="video/mp4" />
                </video>
              </div>
            </div>
            </div>

     {/* why-Koala Review  */}
      <div className="bg-white px-4 md:px-40 mb-8 md:mb-14">
        <div className="flex flex-col md:flex-row justify-between relative">
          <div className="space-y-2 justify-start mb-4 md:mb-0"> 
            <p className="text-gray-500 font-semibold">Why Koala?</p>
            <h1 className="text-2xl md:text-4xl font-bold">We're in the business of making Furniture.</h1> 
          </div>

          {/* Right-aligned buttons */}
          <div className="md:flex md:absolute hidden right-0 space-x-2 mt-0 md:mt-6 justify-end md:justify-start">
            <button
              onClick={prevImage}
              className="text-gray-700 text-xl md:text-2xl w-10 h-10 md:w-14 md:h-14 bg-zinc-100 bg-opacity-50 p-2 rounded-full"
            >
              &#11164;
            </button>
            <button
              onClick={nextImage}
              className="text-gray-700 text-xl md:text-2xl w-10 h-10 md:w-14 md:h-14 bg-zinc-100 bg-opacity-50 p-2 rounded-full"
            >
              &#11166;
            </button>
          </div>
        </div>

        {/* Carousel Images and Content */}
        <div>
          <div className="flex gap-4 md:gap-8 w-full cursor-pointer mt-6 md:mt-10 pb-4 overflow-x-auto">
            {currentLink && 
              (window.innerWidth < 768 
                ? currentLink.images.map((image, index) => (
                    <div key={index} className="flex-shrink-0 w-full space-y-4">
                      <div>
                        <img 
                          src={image} 
                          alt={`Carousel Image ${index + 1}`} 
                          className="rounded-lg w-full h-auto md:h-65 hover:opacity-85 transition-opacity" 
                        />
                      </div>
                      <div className="text-gray-900 space-y-2 w-full">
                        <p className="text-gray-900 font-bold">{currentLink.title[index]}</p>
                        <p className="text-gray-900 w-full">{currentLink.description[index]}</p>
                      </div>
                    </div>
                  ))
                : currentLink.images.slice(currentIndex, currentIndex + 4).map((image, index) => (
                    <div key={index} className="w-1/4 space-y-4">
                      <div>
                        <img 
                          src={image} 
                          alt={`Carousel Image ${currentIndex + index + 1}`} 
                          className="rounded-lg w-full h-auto md:h-65 hover:opacity-85 transition-opacity" 
                        />
                      </div>
                      <div className="text-gray-900 space-y-2 w-full">
                        <p className="text-gray-900 font-bold">{currentLink.title[currentIndex + index]}</p>
                        <p className="text-gray-900 w-full">{currentLink.description[currentIndex + index]}</p>
                      </div>
                    </div>
                  ))
              )
            }
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-300 mt-4 md:mt-7 rounded-full">
            <div 
              className="h-full bg-[#586A4D] rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>     
   
    </div>

      <Subscribe/>
      <Footer/>
    </div>
    </>
  )
}
export default WhyKoala