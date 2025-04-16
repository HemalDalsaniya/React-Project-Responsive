import Van from '/icons/Van.png';
import Calender from '/icons/Calender.png';
import Warrenty from '/icons/Warrenty.png';
import { useNavigate } from 'react-router-dom';

const Content = () => {
  const navigate = useNavigate();

  return (
    <div className="py-1 bg-zinc-100">
      {/* Reviews - centered on all screens */}
      <div className="flex items-center justify-center text-gray-700 pr-1 hover:text-gray-500">
        <span className="text-xl pr-1">★ ★ ★ ★ ★</span>
        <span className="text-sm md:text-base">100,000+ five star reviews</span>
      </div>

      {/* Video Container - responsive adjustments */}
      <div className="video-container w-full flex pt-1 relative cursor-pointer">
        <video
          width="100%"
          height="auto"
          autoPlay={true}
          loop
          muted={true}
          playsInline={true}
          className="object-cover h-[300px] md:h-auto"
        >
          <source src="//au.koala.com/cdn/shop/videos/c/vp/61ed8c57d173414d8bc5dd6671e83ee5/61ed8c57d173414d8bc5dd6671e83ee5.HD-720p-2.1Mbps-41243426.mp4?v=0" type="video/mp4" />
        </video>

        {/* Text Overlay - responsive adjustments */}
        <div className="text-overlay absolute top-0 left-0 right-0 bottom-0 flex items-center px-4 md:px-10 lg:px-40">
          <div className="py-4 md:py-10 lg:py-16 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white">
              The cool change has arrived
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl font-bold py-3 md:py-6 text-white">
              <p>Koala Polar + Mattress. Keep your cool all year long.</p>
            </div>
            <div 
              className="flex text-black bg-white rounded-full w-48 sm:w-56 md:w-64 lg:w-72 h-10 sm:h-12 md:h-14 font-semibold text-sm md:text-lg items-center justify-center hover:bg-gray-100 transition-colors cursor-pointer "
              onClick={() => navigate('/collections/bedroom')}
            >
              SHOP NOW
            </div>
          </div>
        </div>
      </div>

      {/* Features - responsive adjustments */}
      <div className="flex flex-col sm:flex-row items-center justify-center py-3 gap-2 sm:gap-3 text-black text-sm md:text-md">
        <div className="flex items-center px-2 sm:px-0 md:text-base gap-1">
          <img src={Van} alt="Van" width="25px" height="25px" />
          Fast delivery
        </div>
        <div className="flex items-center px-2 sm:px-0 md:text-base gap-1">
          <img src={Calender} alt="Calendar" width="25px" height="25px" />
          120-night free trial
        </div>
        <div className="flex items-center px-2 sm:px-0 md:text-base gap-1">
          <img src={Warrenty} alt="Warranty" width="25px" height="25px" />
          World-class warranty
        </div>
      </div>
    </div>
  );
};

export default Content;