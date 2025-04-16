import { useEffect, useState } from 'react';
import axios from 'axios';

const SofasHeader = () => {
  const [sofasheader, setSofasheader] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [initialIndex, setInitialIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(6); // Default for desktop

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { 
        setItemsToShow(2);
      } else { 
        setItemsToShow(6);
      }
    };

    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    axios.get('http://localhost:5000/sofasheader') 
      .then(response => {
        setSofasheader(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setInitialIndex(currentIndex); 
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return; 
    const deltaX = e.clientX - startX;
    const indexChange = Math.round(deltaX); // Adjust sensitivity by changing the divisor
    const newIndex = initialIndex - indexChange;
    setCurrentIndex(Math.max(0, Math.min(sofasheader.length - itemsToShow, newIndex))); 
  };

  const handleMouseUp = () => {
    setIsDragging(false); 
  };

  const handleMouseLeave = () => {
    setIsDragging(false); 
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setInitialIndex(currentIndex);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startX;
    const indexChange = Math.round(deltaX / 50); // More sensitive for touch
    const newIndex = initialIndex - indexChange;
    setCurrentIndex(Math.max(0, Math.min(sofasheader.length - itemsToShow, newIndex)));
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const progress = sofasheader.length > itemsToShow 
    ? (currentIndex / (sofasheader.length - itemsToShow)) * 100 
    : 0;

  return (
    <div className="relative w-full md:px-40 px-4 my-8 cursor-pointer overflow-hidden">
      <div
        className="flex"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className={`flex ${itemsToShow === 6 ? 'justify-between gap-x-15' : 'gap-x-4'}`}>
          {sofasheader.slice(currentIndex, currentIndex + itemsToShow).map((sofa) => (
            <div key={sofa.id} className="flex-shrink-0" style={{ width: itemsToShow === 2 ? 'calc(50% - 0.5rem)' : 'auto' }}>
              <a className="rounded-xl" href={`${sofa.url}`}>
                <img
                  src={sofa.image}
                  alt={sofa.title}
                  className="rounded-lg w-full md:h-40 h-36 hover:border-1 hover:border-gray-400"
                />
              </a>
              <p className="font-bold text-md mt-2">{sofa.title}</p>
            </div>
          ))}
        </div>
      </div>

      {sofasheader.length > itemsToShow && (
        <div className="w-full h-2 bg-gray-300 mt-7 rounded-full">
          <div
            className="h-full bg-[#586A4D] rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default SofasHeader;