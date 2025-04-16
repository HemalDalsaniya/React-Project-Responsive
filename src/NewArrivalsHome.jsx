import { useState, useRef} from 'react';
import { Link } from 'react-router-dom';

const NewArrivalsHome = () => {
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
        "/images/featured/featured10.png", "/images/featured/featured11.png","/images/featured/featured12.png",
        "/images/featured/featured13.png","/images/featured/featured14.png","/images/featured/featured15.png",
        "/images/featured/featured16.png","/images/featured/featured17.png"
      ],
      rate:["4.7(527)","","4.7(66)","4.7(515)","4.6(63)","4.9(15)","5.0(15))","4.6(14)",""], 
      title:["Byron sofa Bed", "Byron Sofa Bed Ottaman", "Bungalow Modular Sofa", "Wanda Sofa Bed","Torakina Outdoor Lounge Set", 
             "Torakina Outdoor Dining Set", "Balmain Beside Table", "Byron Sofa bed Covers"], 
      size:["3.5 Seater, 1 Size","","3 Seater, 10 Size","3.5 Seater, 1 Size","6 Seater Square Coffee Table, 4 Size","4 Seater, 2 Size",
            "","3.5 seater, 1 size"], 
      price:["From $1194","From $382","From $1404", "From $2499","From $1310","From $1550","From $450", "From $1000"]
    },
    { 
      id: 2, 
      name: "Bedroom", 
      images: [
        "/images/bedroom/bedroom6.png", "/images/bedroom/bedroom7.png","/images/bedroom/bedroom40.png"
      ],
      rate:["4.9(15)","4.6(14)","4.9(15)"], 
      title:["Balmian Chest of Drawers", "Balmain Beside Table", "Balmain Chest of Drawers"], 
      size:["3 Drawers, 2 Size","","5 Drawers, 2 Size"], 
      price:["From $890","From $450","From $1100"]
    },
    { id: 3, name: "Living Room", images: [] },
    { id: 4, name: "Outdoor", images: [] }
  ];

  const currentLink = links.find((link) => link.id === LinkId);

  const handleLinkClick = (id) => {
    setLinkId(id === LinkId ? null : id);
    setCurrentIndex(0); 
  };

  const nextImage = () => {
    if (currentLink && currentIndex < currentLink.images.length - (isMobile ? 1 : 4)) {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };
}

  const prevImage = () => {
    if (currentIndex > 0) {
    setCurrentIndex((prevIndex) => prevIndex - 1);
  };
}

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
    <div className="bg-white px-4 md:px-40 pt-8 md:pt-14 pb-8">
      {/* Header */}
      <div className="flex justify-between mb-6 md:mb-8">
        <h1 className="text-2xl md:text-4xl font-bold justify-start">New Arrivals</h1>
        <Link 
          className="underline underline-offset-5 text-gray-700 hover:text-gray-500 text-sm md:text-lg mt-2" 
          to={LinkId === 1 ? "/collections/sofas" : "/collections/bedroom"}
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

export default NewArrivalsHome;