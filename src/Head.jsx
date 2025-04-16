import { useState } from 'react'
import { Link } from 'react-router-dom';
import Logo from '/icons/Logo.png';
import Searchicon from '/icons/Searchicon.png';
import Usericon from '/icons/Usericon.png';
import Carticon from '/icons/Carticon.png'; 
import { useNavigate } from 'react-router-dom';
import Search from './Search';

const Head = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSofasHovered, setIsSofasHovered] = useState(false);
  const [isBedroomHovered, setIsBedroomHovered] = useState(false); 
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
 
  const sofas = [
    { id: 1, images: ["/images/sofas/sofa.png","/images/sofas/sofa1.png","/images/sofas/sofa2.png",
                      "/images/sofas/sofa3.png","/images/sofas/sofa4.png","/images/sofas/sofa5.png",
                    "/images/sofas/sofa6.png","/images/sofas/sofa7.png","/images/sofas/sofa8.png"], 
      title:["Sofas", "Sofa Beds", "Modular Sofas", "Chaise Sofas","Corner Sofas","Armchairs","Ottomans",
                    "Sofa Modules","Sofa Covers"],
    }
  ];
  
  const bedroom = [
    { id: 2, images: ["/images/bedroom/bedroom1.png", "/images/bedroom/bedroom2.png","/images/bedroom/bedroom3.png",
                     "/images/bedroom/bedroom4.png","/images/bedroom/bedroom5.png","/images/bedroom/bedroom6.png",
                     "/images/bedroom/bedroom7.png","/images/bedroom/bedroom8.png","/images/bedroom/bedroom9.png",
                    "/images/bedroom/bedroom10.png","/images/bedroom/bedroom11.png"],
    title:["Mattresses", "Bed Bases", "Bundles","Pillow","Kids","Bedside Tables","Chest of Drawers","Bed Covers & Sheets",
          "Rugs","Mattress Protector","Duvets"],
    } 
  ];
  
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); 
  };

  const handleCloseClick = () => {
    setIsSearchOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 
  return (
    <>
      {/* Desktop Header */}
      <div className="hidden md:flex px-4 md:px-40 bg-white justify-center sticky top-0 z-50">
        {!isSearchOpen && (
          <nav className="w-full"> 
            <ul className="flex justify-between">
              <div className="flex items-center w-96 justify-start cursor-pointer">
                <li className="relative z-40">
                  <div id="logo">
                    <img
                      src={Logo}  
                      alt="Logo" 
                      width="auto"
                      height="auto" 
                    />
                  </div>
                </li>
              </div>

              <div className="flex w-200 bg-white items-center justify-center font-bold">
                {!isSearchOpen && ( 
                  <ul className="flex gap-x-5">
                    <li className="relative group">
                      <a href="/collections/mattresses" className="text-gray-700 py-4 px-1 cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-8">Mattresses</a>
                    </li>

                    <li className="relative group">
                      <a href="/collections/sofabeds" className="text-gray-700 py-4 px-1 cursor-pointer hover:underline hover:decoration-2 hover:underline-offset-8">Sofa Beds</a>
                    </li>

                    <li
                      className="relative"
                      onMouseEnter={() => setIsSofasHovered(true)}
                      onMouseLeave={() => setIsSofasHovered(false)}
                    >
                      <Link
                        to="/collections/sofas"
                        className="text-gray-700 hover:underline hover:decoration-2 hover:underline-offset-8"
                      >
                        Sofas
                        <svg
                          className="size-5 text-gray-900 float-end m-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          data-slot="icon"
                        >
                          <path
                            d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                          />
                        </svg>
                      </Link>

                      <div
                        className={`fixed inset-x-0 top-24.5 transform transition-all duration-300 ease-in-out bg-white shadow-lg ${
                          isSofasHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                      >
                        {isSofasHovered && (
                          <div className="ps-40 pe-32 pt-12 pb-8">
                            <div className="flex justify-between mb-5">
                              <h1 className="text-3xl font-bold text-black justify-start">Sofas</h1>
                              <Link
                                className="font-bold rounded-full h-14 w-56 p-4 text-center text-white bg-[#586A4D]"
                                to="/collections/sofas"
                              >
                                SHOP FOR SOFAS
                              </Link>
                            </div>

                            <div className="grid grid-cols-7 justify-start gap-x-4 gap-y-8">
                              {sofas[0].images.map((image, index) => (
                                <div key={index}>
                                  <Link to="/collections/sofas">
                                    <img
                                      key={index}
                                      src={image}
                                      alt="images"
                                      className="rounded-lg w-55 h-40 hover:opacity-85 transition-opacity"
                                    />
                                  </Link>
                                  <h3 className="text-gray-900 font-semibold mt-2">
                                    {sofas[0].title[index]}
                                  </h3>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </li>

                    <li className="relative"
                      onMouseOver={() => setIsBedroomHovered(true)}
                      onMouseLeave={() => setIsBedroomHovered(false)}>
                      <Link
                        to="/collections/bedroom"
                        className="text-gray-700 hover:underline hover:decoration-2 hover:underline-offset-8"
                      >
                        Bedroom
                        <svg className="size-5 text-gray-900 float-end m-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                      </Link> 
                      
                      <div
                        className={`fixed top-24.5 inset-x-0 transform transition-all duration-300 ease-in-out bg-white shadow-lg ${
                          isBedroomHovered ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}>
                        {isBedroomHovered && (
                          <div className="ps-40 pe-32 pt-12 pb-8" >
                            <div className="flex justify-between mb-5">
                              <h1 className="text-3xl font-bold text-black justify-start">Bedroom</h1>
                              <Link className="font-bold rounded-full h-14 w-60 p-4 text-center text-white bg-[#586A4D]" to="/collections/bedroom">SHOP FOR BEDROOM</Link> 
                            </div>
                            
                            <div className="grid grid-cols-7 justify-start gap-x-4 gap-y-8">
                              {bedroom[0].images.map((image, index) => (
                                <div key={index}>
                                  <Link to="/collections/bedroom">
                                    <img
                                      key={index}
                                      src={image}
                                      alt="images"
                                      className="rounded-lg w-55 h-40 hover:opacity-85 transition-opacity "
                                    /> 
                                  </Link>
                                  <h3 className=" text-gray-900 font-semibold mt-2">{bedroom[0].title[index]}</h3>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </li>

                    <li>
                      <Link
                        to=""
                        className="text-gray-700 hover:underline hover:decoration-2 hover:underline-offset-8"
                      >
                        Living Room
                        <svg className="size-5 text-gray-900 float-end m-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to=""
                        className="text-gray-700 hover:underline hover:decoration-2 hover:underline-offset-8"
                      >
                        Outdoor
                        <svg className="size-5 text-gray-900 float-end m-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                          <path d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                )}
              </div>

              <div className="flex justify-end items-center w-96">
                <div className="flex items-center">
                  <button onClick={toggleSearch}>
                    <img className="float-end cursor-pointer gap-0"
                         src={Searchicon}  
                         alt="Search Icon" 
                         width="40%" height="40%" />
                  </button>
                </div> 
             
                <div className="flex items-center float-end">
                  <button onClick={() => window.open('/login','_blank')} >
                    <img className="float-end cursor-pointer gap-0"
                         src={Usericon}  
                         alt="User Icon" 
                         width="40%"
                         height="40%" 
                    />
                  </button>
                  <button onClick={() => navigate('/cart')} >
                    <img className="float-end cursor-pointer gap-0"
                         src={Carticon}  
                         alt="Cart Icon" 
                         width="40%"
                         height="40%" 
                    />
                  </button>
                </div>
              </div>
            </ul>
          </nav>
        )}

        {isSearchOpen && ( <Search searchOpen={isSearchOpen} onClick={handleCloseClick} />)}
      </div>

    {/* Mobile Header */}
{!isSearchOpen ? (
  <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white sticky top-0 z-50">
    {/* Left side - Menu */}
    <div>
      <button onClick={toggleMobileMenu} className="p-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <button onClick={toggleSearch} className="p-2">
        <img src={Searchicon} alt="Search" className="w-6 h-6" />
      </button>

    </div>

    {/* Center - Logo */}
    <div className="flex-1 flex justify-center">
      <Link to="/">
        <img src={Logo} alt="Logo" className="h-10" />
      </Link>
    </div>

    {/* Right side - Search, User and Cart */}
    <div className="flex items-center space-x-4">
      
      <button onClick={() => window.open('/login','_blank')} className="p-2">
        <img src={Usericon} alt="User" className="w-6 h-6" />
      </button>
      <button onClick={() => navigate('/cart')} className="p-2">
        <img src={Carticon} alt="Cart" className="w-6 h-6" />
      </button>
    </div>
  </div>
) : (
  <div className="md:hidden flex items-center px-4 bg-white sticky top-0 z-50 w-full">
    <Search searchOpen={isSearchOpen} onClick={handleCloseClick} />
  </div>
)}


      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full z-40">
          <div className="px-4 py-3 border-t border-gray-200">
            <Link to="/collections/mattresses" className="block py-2 text-gray-700 font-medium">Mattresses</Link>
            <Link to="/collections/sofabeds" className="block py-2 text-gray-700 font-medium">Sofa Beds</Link>
            <Link to="/collections/sofas" className="block py-2 text-gray-700 font-medium">Sofas</Link>
            <Link to="/collections/bedroom" className="block py-2 text-gray-700 font-medium">Bedroom</Link>
            <Link to="/collections/living-room" className="block py-2 text-gray-700 font-medium">Living Room</Link>
            <Link to="/collections/outdoor" className="block py-2 text-gray-700 font-medium">Outdoor</Link>
          </div>
        </div>
      )}

    </>
  );
}

export default Head;

