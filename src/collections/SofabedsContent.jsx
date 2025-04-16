import { useState, useEffect, useRef } from 'react';

const SofabedsContent = () => {
    const [sortOrder, setSortOrder] = useState('');
    const [isColorOpen, setIsColorOpen] = useState(true);
    const [sofacolors, setSofacolors] = useState([]);
    const [isSizeOpen, setIsSizeOpen] = useState(true);
    const [sofabedsizes, setSofabedsizes] = useState([]);
    const [isPriceOpen, setIsPriceOpen] = useState(false);
    const [sofabeds, setSofabeds] = useState([]);
    const [colorFilter, setColorFilter] = useState([]);
    const [sizeFilter, setSizeFilter] = useState([]);
    const [priceFilter, setPriceFilter] = useState('');
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/sofacolors')
            .then((response) => response.json())
            .then((data) => setSofacolors(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/sofabedsizes')
            .then((response) => response.json())
            .then((data) => setSofabedsizes(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/sofabeds')
            .then((response) => response.json())
            .then((data) => setSofabeds(data));
    }, []);

    const filteredProducts = sofabeds.filter((product) => {
        return (
            (colorFilter.length > 0 ? colorFilter.includes(product.color) : true) &&
            (sizeFilter.length > 0 ? sizeFilter.includes(product.size) : true) &&
            (priceFilter ? (product.price) <= (priceFilter) : true)
        );
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortOrder === 'low-to-high') {
            return (a.price) - (b.price);
        } else if (sortOrder === 'high-to-low') {
            return (b.price) - (a.price);
        }
        return 0;
    });

    const handleColorChange = (color) => {
        setColorFilter((prev) => {
            if (prev.includes(color)) {
                return prev.filter((c) => c !== color);
            } else {
                return [...prev, color];
            }
        });
    };

    const handleSizeChange = (size) => {
        setSizeFilter((prev) => {
            if (prev.includes(size)) {
                return prev.filter((s) => s !== size);
            } else {
                return [...prev, size];
            }
        });
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOrderOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);
    
      const options = [
        { value: '', label: 'Sort By' },
        { value: 'low-to-high', label: 'Price: Low to High' },
        { value: 'high-to-low', label: 'Price: High to Low' }
      ];
    
      const handleSelect = (value) => {
        setSortOrder(value);
        setIsOrderOpen(false);
      };
    
      const selectedOption = options.find(opt => opt.value === sortOrder) || options[0];
 

    return (
        <>
            <div className="md:px-40 px-4 my-12">
                <div className="space-y-2 my-7">
                    <h1 className="text-4xl text-[#586A4D] font-bold">Sofa Beds</h1>
                    <div className="flex justify-between">
                        <p className="text-gray-800 text-lg">Australia's #1 rated sofa bed range.</p>
                        {!isMobile && (
                            <label className="text-gray-800">Price : &nbsp; &nbsp;
                                <select onChange={(e) => setSortOrder(e.target.value)} className="bg-zinc-100 border-zinc-200 border-2 p-3 rounded">
                                    <option value="" className="hover:bg-zinc-100">Choose Order</option>
                                    <option value="low-to-high" className="hover:bg-zinc-100">Low to High</option>
                                    <option value="high-to-low" className="hover:bg-zinc-100">High to Low</option>
                                </select>
                            </label>
                        )}
                    </div>
                </div>

                {/* Mobile Filters - Dropdown Style */}
                {isMobile && (
                    <div className="mb-6 space-y-3">
                        {/* Color Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={() => setIsColorOpen(!isColorOpen)}
                                className='w-full text-left px-4 py-3 rounded-md font-bold flex justify-between items-center bg-zinc-100
                              text-gray-600 border-zinc-200 border-2'>
                                <span>Color {colorFilter.length > 0 ? `(${colorFilter.length})` : ''}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform ${!isColorOpen ? 'transform rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {!isColorOpen && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg py-3 px-0 grid grid-cols-4 gap-2">
                                    {sofacolors.map((col, index) => (
                                        <div 
                                            key={index} 
                                            onClick={() => handleColorChange(col.color)} 
                                            className="flex flex-col items-center"
                                        >
                                            <button 
                                                style={{ backgroundColor: col.colorcode }}
                                                className={`rounded-full w-8 h-8 mb-1 ${
                                                    colorFilter.includes(col.color) ? 'ring-2 ring-offset-1 ring-black' : ''
                                                }`}
                                            />
                                            <span className="text-xs">{col.color}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Size Dropdown */}
                        <div className="relative">
                            <button 
                                onClick={() => setIsSizeOpen(!isSizeOpen)}
                                className='w-full text-left px-4 py-3 rounded-md font-bold flex justify-between items-center bg-zinc-100 
                                text-gray-600 border-zinc-200 border-2'>
                                <span>Size {sizeFilter.length > 0 ? `(${sizeFilter.length})` : ''}</span>
                                <svg
                                    className={`w-5 h-5 transition-transform ${!isSizeOpen ? 'transform rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {!isSizeOpen && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-3 grid grid-cols-2 gap-2">
                                    {sofabedsizes.map((option) => (
                                        <label key={option.id} className="flex items-center gap-2">
                                            <input
                                                type="checkbox"
                                                className="accent-[#586A4D]"
                                                checked={sizeFilter.includes(option.size)}
                                                onChange={() => handleSizeChange(option.size)}
                                            />
                                            <span>{option.size}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Price Dropdown */}
                        <div className="relative">
                            <button onClick={() => setIsPriceOpen(!isPriceOpen)}
                                className='w-full text-left px-4 py-3 rounded-md font-bold flex justify-between items-center bg-zinc-100 
                                text-gray-600 border-zinc-200 border-2'>
                                <span>Price {priceFilter ? '(1)' : ''}</span>
                                <svg className={`w-5 h-5 transition-transform ${isPriceOpen ? 'transform rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {isPriceOpen && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg p-4">
                                    <div className="space-y-3">
                                        <p className="text-sm">Highest: $3,150</p>
                                        <p className="text-sm">Lowest: $1,290</p>
                                        <input type="number" 
                                            min="0"
                                            className="w-full p-2 border rounded"
                                            placeholder="Enter max price"
                                            value={priceFilter}
                                            onChange={(e) => setPriceFilter(e.target.value)} />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sort Dropdown */}
                        

    <div className="relative w-full" ref={dropdownRef}>
      {/* Custom dropdown button */}
      <button
        onClick={() => setIsOrderOpen(!isOrderOpen)}
        className="w-full px-4 py-3 rounded-md font-bold bg-zinc-100 text-gray-600 border-zinc-200 border-2 flex justify-between items-center"
      >
        <span>{selectedOption.label}</span>
        <svg
          className={`w-5 h-5 text-gray-600 transition-transform ${isOrderOpen ? 'transform rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown options */}
      {isOrderOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-zinc-200 rounded-md shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={`px-4 py-3 cursor-pointer hover:bg-zinc-50 ${
                sortOrder === option.value ? 'bg-zinc-100' : ''
              }`}
              onClick={() => handleSelect(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>

                    </div>
                )}

                <div className={`${isMobile ? 'block' : 'flex mt-3 gap-x-14'}`}>
                    {/* Desktop Filters - Left Sidebar */}
                    {!isMobile && (
                        <div className="w-80 space-y-5 sticky top-0">
                            {/* Color section */}
                            <div className="w-80 cursor-pointer">
                                <button onClick={() => setIsColorOpen(!isColorOpen)}
                                    className="w-80 text-left font-semibold border-2 border-zinc-300 bg-zinc-100 rounded flex justify-between p-3">
                                    Color
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2292 8.12559L9.99583 11.3589L6.7625 8.12559C6.4375 7.80059 5.9125 7.80059 5.5875 8.12559C5.2625 8.45059 5.2625 8.97559 5.5875 9.30059L9.4125 13.1256C9.7375 13.4506 10.2625 13.4506 10.5875 13.1256L14.4125 9.30059C14.7375 8.97559 14.7375 8.45059 14.4125 8.12559C14.0875 7.80892 13.5542 7.80059 13.2292 8.12559Z" fill="#60607F"></path>
                                    </svg>
                                </button>

                                {isColorOpen && (
                                    <div className="pt-6 px-3 grid grid-cols-4 grid-rows-2 gap-x-4 space-y-5">
                                        {sofacolors.map((col, index) => (
                                            <div key={index} onClick={() => handleColorChange(col.color)}>
                                                <button style={{ backgroundColor: col.colorcode }}
                                                    className={`rounded-full w-12 h-11 ${
                                                        colorFilter.includes(col.color) ? 'border-black ring-2 ring-offset-3' : ''
                                                    }`}
                                                ></button>
                                                <br />
                                                <span className="ps-1">{col.color}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Size section */}
                            <div className="w-80">
                                <button onClick={() => setIsSizeOpen(!isSizeOpen)}
                                    className="w-80 text-left font-semibold border-2 border-zinc-300 bg-zinc-100 rounded flex justify-between p-3">
                                    Size
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2292 8.12559L9.99583 11.3589L6.7625 8.12559C6.4375 7.80059 5.9125 7.80059 5.5875 8.12559C5.2625 8.45059 5.2625 8.97559 5.5875 9.30059L9.4125 13.1256C9.7375 13.4506 10.2625 13.4506 10.5875 13.1256L14.4125 9.30059C14.7375 8.97559 14.7375 8.45059 14.4125 8.12559C14.0875 7.80892 13.5542 7.80059 13.2292 8.12559Z" fill="#60607F"></path>
                                    </svg>
                                </button>

                                {isSizeOpen && (
                                    <div className="pt-6 px-3 space-y-5">
                                        {sofabedsizes.map((option) => (
                                            <label key={option.id} className="flex items-center gap-x-3">
                                                <input
                                                    type="checkbox"
                                                    className="accent-[#586A4D] w-5 h-5"
                                                    checked={sizeFilter.includes(option.size)}
                                                    onChange={() => handleSizeChange(option.size)}
                                                />
                                                <p className="text-md">{option.size}</p>
                                            </label>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {/* Max Price section */}
                            <div className="w-80 cursor-pointer">
                                <button onClick={() => setIsPriceOpen(!isPriceOpen)}
                                    className="w-80 text-left font-semibold border-2 border-zinc-300 bg-zinc-100 rounded flex justify-between p-3">
                                    Price
                                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.2292 8.12559L9.99583 11.3589L6.7625 8.12559C6.4375 7.80059 5.9125 7.80059 5.5875 8.12559C5.2625 8.45059 5.2625 8.97559 5.5875 9.30059L9.4125 13.1256C9.7375 13.4506 10.2625 13.4506 10.5875 13.1256L14.4125 9.30059C14.7375 8.97559 14.7375 8.45059 14.4125 8.12559C14.0875 7.80892 13.5542 7.80059 13.2292 8.12559Z" fill="#60607F"></path>
                                    </svg>
                                </button>

                                {isPriceOpen && (
                                    <div className="pt-6 px-3 space-y-5">
                                        <div className="items-center gap-x-3">
                                            <p className="text-md"> Highest Price : $3,150</p><br/>
                                            <p className="text-md"> Lowest Price : $1,290</p><br/>
                                            <input
                                                type="number" min="0"
                                                className="w-40 h-10 bg-zinc-100 border-zinc-200 border-2 rounded p-3" placeholder="Max Price"
                                                onChange={(e) => setPriceFilter(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )}

                    {/* Product Grid */}
                    <div className={`${isMobile ? 'grid grid-cols-2' : 'grid grid-cols-3'} w-full justify-start gap-x-5 gap-y-8 cursor-pointer`}>
                        {sortedProducts.map((sofabed) => (
                            <div key={sofabed.id} className="space-y-1.5">
                                <div className="rounded-xl">
                                    <img src={sofabed.image} alt="image" className="rounded-lg w-full md:h-70 h-36 aspect-square" />
                                </div>
                                <div className="flex text-gray-900 justify-start gap-1">
                                    <span>
                                        <img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png" />
                                    </span>
                                    {sofabed.review}
                                </div>
                                <h3 className="text-gray-900 font-bold">{sofabed.title}</h3>
                                <p className="text-gray-900">{sofabed.size}</p>
                                <p className="text-gray-900">From ${sofabed.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SofabedsContent;