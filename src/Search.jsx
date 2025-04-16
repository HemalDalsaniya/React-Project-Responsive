import { useState } from 'react';
import Closeicon from '/icons/Closeicon.png';
import { useNavigate } from 'react-router-dom';

const Search = ({ onClick, searchOpen }) => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const navigate = useNavigate();

  const SuggestionData = [
    { id: 1, text: 'sofa', link: '/collections/sofas' },
    { id: 2, text: 'koala', link: '/pages/whykoala' },
    { id: 3, text: 'sofabed', link: '/collections/sofabeds' },
    { id: 4, text: 'bedroom', link: '/collections/bedroom' },
    { id: 5, text: 'mattresses', link: '/collections/bedroom' },
    { id: 6, text: 'login', link: '/login' },
    { id: 7, text: 'contact', link: '/pages/contact' },
    { id: 9, text: 'orders', link: '/pages/accounts' },
    { id: 10, text: 'cart', link: '/cart'},
    { id: 11, text: 'why Koala', link: '/pages/whykoala'},
    { id: 12, text: 'koala sofa beds', link: '/collections/sofabeds'},
    { id: 13, text: 'koala mattresses', link: '/collections/mattresses'},
    { id: 14, text: 'faqs', link: '/pages/contact'},
    { id: 15, text: 'koala sofa', link: '/collections/sofas'},
    { id: 16, text: 'pillow', link: '/collections/bedroom'},
    { id: 17, text: 'koala pillow', link: '/collections/bedroom'},
    { id: 18, text: 'bed bases', link: '/collections/bedroom'},
    { id: 19, text: 'bed covers & sheets', link: '/collections/bedroom'},
    { id: 20, text: 'rugs', link: '/collections/bedroom'},
    { id: 21, text: 'mattress protector', link: 'collections/bedroom'}
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = SuggestionData.filter(item =>
      item.text.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSuggestionClick = (link) => {
    navigate(link);
    setInputValue('');
    setSuggestions([]);
    onClick(); // Close search after navigation on mobile
  };

  return (
    <>
    <div className="flex items-center w-full relative">
    <div className={`flex w-full ${searchOpen ? 'py-2.5 justify-center' : 'w-0'} items-center relative`}>
      <input
        type="text"
        placeholder="Search"
        className="w-[400px] md:w-[600px] p-2 pl-4 pr-10 border-2 border-black rounded-full focus:outline-none"
        value={inputValue}
        onChange={handleInputChange}
        autoFocus={searchOpen}
      />
      
      <button 
        className=" p-2"
        onClick={onClick}
      >
        <img
          src={Closeicon}
          alt="Close"
          width="30px"
          height="30px"
        />
      </button>
    </div>

    {/* Display suggestions */}
    {suggestions.length > 0 && (
      <div className={`absolute w-[400px] md:w-[600px] mx-0 md:mx-122 top-full flex-col justify-center items-center bg-white rounded-md shadow-lg z-50 visible ${
          inputValue ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="p-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSuggestionClick(suggestion.link)}
          >
            {suggestion.text}
          </div>
        ))}
      </div>
    )}
  </div>
  </>
  );
};

export default Search;