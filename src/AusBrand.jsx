import { useState } from 'react';
import { Link } from 'react-router-dom';

const AusBrand = () => {
  const [LinkId, setLinkId] = useState(1); 

  const links = [
    { id: 1, name: "All", 
      images: ["/images/mattresses/AllMat/allmat1.png", "/images/mattresses/AllMat/allmat2.png",
              "/images/mattresses/AllMat/allmat3.png","/images/mattresses/AllMat/allmat4.png"],
      rate:["4.9(341)","4.8(643)","4.8(2059)","4.8(463)"], 
      title:["Koala Luxe Mattress", "Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
      size:["Queen, 4 Size","Queen, 6 Size","Queen,64 Size","Queen, 5 Size",], 
      price:["From $2,000","From $990","From $850", "From $650"] },
    { id: 2, name: "Single", 
      images: ["/images/mattresses/SingleMat/singlemat1.png", "/images/mattresses/SingleMat/singlemat2.png",
              "/images/mattresses/SingleMat/singlemat3.png"],
      rate:["4.8(643)","4.8(2059)","4.8(463)"], 
      title:["Koala Plus Mattress", "Koala Mattress", "Koala SE Mattress"], 
      size:["Queen, 6 Size","Queen,64 Size","Queen, 5 Size",], 
      price:["From $990","From $850", "From $650"] },
    { id: 3, name: "King Single", images: [] },
    { id: 4, name: "Double", images: [] },
    { id: 5, name: "Queen", images: [] },
    { id: 6, name: "King", images: [] },
    { id: 7, name: "Super King", images: [] },
  ];

  const handleLinkClick = (id) => {
    setLinkId(id === LinkId ? null : id);
  };

  return (
    <div className="bg-white px-4 md:px-40 pt-14 mb-10">
      {/* Header Section */}
      <div className="flex flex-row justify-between mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-0">Australia's most awarded mattress brand</h1>
        <Link className="underline underline-offset-5 text-gray-700 hover:text-gray-500  text-sm md:text-lg mt-2" to="/collections/mattresses">See All</Link>
      </div>

      {/* Navigation Buttons - Scrollable on mobile */}
      <div className="cursor-pointer overflow-x-auto whitespace-nowrap pb-2 md:pb-0 md:whitespace-normal">
        <div className="inline-flex space-x-2 md:space-x-4 mb-4 md:mb-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`px-3 py-1 md:px-4 md:py-2 rounded-full cursor-pointer font-semibold text-sm md:text-base ${
                LinkId === link.id ? 'bg-[#586A4D] text-white' : 'bg-zinc-100 text-[#586A4D]'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid - 2 columns on mobile, 4 on desktop */}
      <div className="mt-4">
        {LinkId === 1 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {links[0].images.map((image, index) => (
              <div key={index} className="space-y-2">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg w-full h-48 md:h-80 hover:opacity-85 transition-opacity"
                />
                <div className="flex text-gray-900 justify-start gap-1">
                  <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/>
                  {links[0].rate[index]}
                </div>
                <h3 className="text-gray-900 font-bold text-sm md:text-base">{links[0].title[index]}</h3>
                <p className="text-gray-900 text-sm md:text-base">{links[0].size[index]}</p>
                <p className="text-gray-900 text-sm md:text-base">{links[0].price[index]}</p>
              </div>        
            ))}
          </div>
        )}

        {LinkId === 2 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {links[1].images.map((image, index) => (
              <div key={index} className="space-y-2">
                <img
                  src={image}
                  alt={`Image ${index + 1}`}
                  className="rounded-lg w-full h-48 md:h-80 hover:opacity-85 transition-opacity"
                />
                <div className="flex text-gray-900 justify-start gap-1">
                  <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png"/>
                  {links[1].rate[index]}
                </div>
                <h3 className="text-gray-900 font-bold text-sm md:text-base">{links[1].title[index]}</h3>
                <p className="text-gray-900 text-sm md:text-base">{links[1].size[index]}</p>
                <p className="text-gray-900 text-sm md:text-base">{links[1].price[index]}</p>
              </div> 
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AusBrand;