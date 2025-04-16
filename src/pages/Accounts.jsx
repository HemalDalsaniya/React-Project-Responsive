import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../Header';
import Head from '../Head';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import Chat from '../Chat';

const Accounts = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const {location} = useLocation();

  useEffect( () => {
    window.scrollTo(0,0);
  },[location])

  const handleCloseClick = () => {
    setIsChatOpen(false); 
  }; 

  const contactData = [
    {
      id: 1,
      image: "/images/contact/contact1.png",  
      url: "/pages/contact"
    },
    {
      id: 2,
      image: "/images/contact/contact2.png",
      url: "/pages/accounts"
    },
    {
      id: 3,
      image: "/images/contact/contact3.png",
      onClick: () => setIsChatOpen(!isChatOpen) 
    }  
  ];

  return (
    <>
      <div className="scroll-smooth max-w-screen overflow-x-hidden">
        <Header />
        <Head />
        
        <div className="bg-white px-4 md:px-40 pt-8 md:pt-14 mb-8 md:mb-12 cursor-pointer">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">          
            {contactData.map((con) => (
              <div key={con.id} className="w-full md:w-auto">
                <div className="rounded-xl overflow-hidden">
                  {con.url ? (
                    <Link to={con.url} className="block">
                      <img 
                        src={con.image} 
                        alt="contact option" 
                        className="rounded-lg w-full h-auto md:w-150 md:h-80"
                      />
                    </Link>
                  ) : (
                    <img 
                      src={con.image} 
                      alt="chat option" 
                      className="rounded-lg w-full h-auto md:w-150 md:h-80"
                      onClick={con.onClick} 
                    />
                  )}
                </div> 
              </div>
            ))}
          </div>
        </div>

        {isChatOpen && (
          <Chat 
            onClose={handleCloseClick} 
            isChatOpen={isChatOpen} 
            setIsChatOpen={setIsChatOpen} 
          />
        )}

        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Accounts;