import { useState, useRef} from 'react';
import { Link } from 'react-router-dom';

const BestSellersHome = () => {
    const [LinkId, setLinkId] = useState(1);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const linksContainerRef = useRef(null);
    const sliderRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
  
    const links = [
      { 
        id: 1, 
        name: "Featured", 
        images: [
          "/images/featured/featured1.png", "/images/featured/featured2.png","/images/featured/featured3.png",
          "/images/featured/featured4.png","/images/featured/featured5.png","/images/featured/featured6.png",
          "/images/featured/featured7.png","/images/featured/featured8.png","/images/featured/featured9.png"
        ],
        rate:["4.8(2056)","4.7(1685)","4.8(645)","4.7(515)","4.9(343)","4.6(572)","4.8(469)","4.8(216)","4.7(58)"], 
        title:["Koala Mattress", "Cushy Sofa Bed", "Koala Plus Mattress", "Byron Sofa Bed","Koala Luxe Mattress", 
               "Modern Sofa", "Koala SE Mattress", "Kirribilli Bed Base","Bungalow Modular Sofa"], 
        size:["Queen, 6 Size","2.5 Seater, 3 Size","Queen, 6 Size","3.5 Seater, 1 Size","Queen, 4 Size","3 Seater, 5 Size",
              "Queen, 5 Size","Queen, 5 size","3 Seater, 10 Size"], 
        price:["From $890","From $1,390","From $1,050", "From $2,290","From $2,090","From $1,690","From $650", "From $1,150","From $1800"]
      },
      { 
        id: 2, 
        name: "Sofa Beds", 
        images: [
          "/images/sofabeds/sofabed1.png", "/images/sofabeds/sofabed2.png","/images/sofabeds/sofabed3.png",
          "/images/sofabeds/sofabed4.png","/images/sofabeds/sofabed5.png","/images/sofabeds/sofabed6.png",
          "/images/sofabeds/sofabed7.png","/images/sofabeds/sofabed8.png"
        ],
        rate:["4.7(1685)","4.8(645)","4.6(51)","4.9(343)","4.7(1685)","4.6(3258)","4.3(135)","4.7(1685)"], 
        title:["Cushy Sofa Bed", "Byron Sofa Bed", "Wanda Sofa Bed","Cushy Sofa Bed", 
               "Sofa Bed", "Stunner Sofa Bed", "Cushy Sofa Bed"], 
        size:["3 Seater, 3 Size","3.5 Seater, 1 Size","3.5 Seater, 1 Size","3 Seater, 3 Size","3 Seater, 3 Size",
              "3 Seater, 1 Size","2.5 Seater, 3 size","3.5 Seatre, 1 Size"], 
        price:["From $1,990","From $2,290","From $3,150", "From $2,090","From $1,790","From $2,190","From $1,790", "From $2,290"]
      },
      { id: 3, name: "Mattresses", images: [] },
      { id: 4, name: "Sofas", images: [] },
      { id: 5, name: "Bed Bases", images: [] },
      { id: 6, name: "Pillows", images: [] },
      { id: 7, name: "Bookshelves", images: [] }
    ];
  
    const currentLink = links.find((link) => link.id === LinkId);
  
    const handleLinkClick = (id) => {
      setLinkId(id);
      setCurrentIndex(0);
    };
  
    const nextImage = () => {
      if (currentLink && currentIndex < currentLink.images.length - (isMobile ? 1 : 4)) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };
  
    const prevImage = () => {
      if (currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      }
    };
  
    // Touch event handlers for links navigation
    const handleTouchStartLinks = (e) => {
      setIsDragging(true);
      setStartX(e.touches[0].pageX - linksContainerRef.current.offsetLeft);
      setScrollLeft(linksContainerRef.current.scrollLeft);
    };
  
    const handleTouchMoveLinks = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].pageX - linksContainerRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      linksContainerRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleTouchEndLinks = () => {
      setIsDragging(false);
    };

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
          prevIndex === currentLink.images.length - 1 ? 0 : prevIndex + 1
      );
  };

  const goToPrev = () => {
      setCurrentIndex((prevIndex) => 
          prevIndex === 0 ? currentLink.images.length - 1 : prevIndex - 1
      );
  };
  
  // Progress bar calculation
  const progress = (currentIndex / (currentLink ? currentLink.images.length - 1 : 1)) * 100;
  //const progress = ((currentIndex + 1 ) / currentLink.images.length) * 100;

  return (
    <div className="bg-white px-4 md:px-40 pt-14 mb-12">
     <div className="flex justify-between mb-8">
         <h1 className="text-2xl md:text-4xl font-bold">Best Seller</h1>
         <Link 
          className="underline underline-offset-5 text-gray-700 hover:text-gray-500  text-sm md:text-lg mt-2" 
          to={LinkId === 2 || LinkId === 4 ? "/collections/sofas" : "/collections/bedroom"}
        >
          See All
        </Link>
      </div>

      <div className="relative">
        <div 
          ref={linksContainerRef}
          onTouchStart={handleTouchStartLinks}
          onTouchMove={handleTouchMoveLinks}
          onTouchEnd={handleTouchEndLinks}
          className="flex space-x-4 mb-8 overflow-x-hidden md:overflow-x-visible"
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`px-4 py-2 rounded-full cursor-pointer font-semibold whitespace-nowrap flex-shrink-0 ${
                LinkId === link.id ? 'bg-[#586A4D] text-white' : 'bg-zinc-100 text-[#586A4D]'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Navigation buttons - now hidden on mobile */}

       <div className="hidden md:flex absolute right-0 top-0 space-x-2">
          <button
            onClick={prevImage}
            className="text-gray-700 text-2xl w-14 h-14 bg-zinc-100 bg-opacity-50 p-2 rounded-full"
          >
            &#11164;
          </button>
          <button
            onClick={nextImage}
            className="text-gray-700 text-2xl w-14 h-14 bg-zinc-100 bg-opacity-50 p-2 rounded-full"
          >
            &#11166;
          </button>
        </div>

      </div>

      {/* Keep carousel section exactly the same */}
      {LinkId && currentLink && currentLink.images.length > 0 && (

           <div>        
             <div className="relative overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                ref={sliderRef}>
                <div className="flex w-full" >
                        {/* style={{ transform: `translateX(-${currentIndex * 100}%)` }}>   */}
                    {currentLink.images.map((image, index) => (
                        <div key={index} className="w-full md:w-1/4 px-2 space-y-3 flex-shrink-0"
                        style={{ transform: `translateX(-${currentIndex * 100}%)`}}>
                            <div className="rounded-xl">
                                <img src={image}  alt="about us" className="rounded-lg w-full h-80 md:w-95 md:hover:opacity-85" />
                            </div>
                            <div className="flex text-gray-900 justify-start gap-1">
                              <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png" />
                              {currentLink.rate[index]} 
                            </div>
                           <h3 className="text-gray-900 font-bold">{currentLink.title[index]}</h3> 
                           <p className="text-gray-900">{currentLink.size[index]}</p>
                           <p className="text-gray-900">{currentLink.price[index]}</p> 
                            
                        </div>
                    ))}
                </div>
            </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-300 mt-7 rounded-full">
            <div
              className="h-full bg-[#586A4D] rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

      )}
    </div>
  );
};

export default BestSellersHome;