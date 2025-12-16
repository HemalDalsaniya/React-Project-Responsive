import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header'
import Head from '../Head'
import Subscribe from '../Subscribe'
import Footer from '../Footer'
import Van from '/icons/Van.png';
import Calender from '/icons/Calender.png';
import Warrenty from '/icons/Warrenty.png';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import sofas from '../data/sofas';
import bedroom from '../data/bedroom';
import sofabeds from '../data/sofabeds';

const Product = () => {
    const { id } = useParams(); 
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
    const [isMaterialOpen, setIsMaterialOpen] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const quantities = useSelector((state) => state.cart.quantities);

    const navigate = useNavigate();

    const handleAddToCart = async () => {
        // Check if the product is already in the cart
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
            // If the item already exists, increase its quantity
            const updatedQuantities = {
                ...quantities,
                [product.id]: quantities[product.id] + 1, // Increase the quantity
            };

            // Update the Redux state
            dispatch(addItem({ id: product.id, quantities: updatedQuantities[product.id] }));

            // Update the cart in db.json
            await updateCartInDB(cartItems, updatedQuantities);
        } else {
            // If the item is new, add it to the cart
            const productWithQuantity = {
              ...product,
              quantities: 1, // Default quantity set to 1
          };
            dispatch(addItem(productWithQuantity));

            // Update the cart in db.json
            await axios.post('http://localhost:5000/cart', productWithQuantity, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }
        // Navigate to the cart page
        navigate('/cart');
    };

    const updateCartInDB = async (cartItems, quantities) => {
        try {
          // Loop through the cart items and update each item's quantity in the database
          for (const item of cartItems) {
            const updatedItem = {
              ...item,
              quantities: quantities[item.id], // Use the updated quantity
            };
      
            // Send a PATCH request to update the item in the database
            const response = await fetch(`http://localhost:5000/cart/${item.id}`, {
              method: 'PATCH',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(updatedItem),
            });
      
            if (!response.ok) {
              const errorText = await response.text();
              console.error('Failed to update item in cart:', errorText);
              throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
            }
      
            console.log('Item updated successfully:', await response.json());
          }
        } catch (error) {
          console.error('Error updating cart in DB:', error);
        }
    };

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //       try {
    //         // Fetch from both endpoints concurrently using axios
    //         const [sofaResponse, bedroomResponse] = await Promise.allSettled([
    //           axios.get(`http://localhost:5000/sofas/${id}`),
    //           axios.get(`http://localhost:5000/bedroom/${id}`),
    //         ]);

    //         if (sofaResponse.status === 'fulfilled' && sofaResponse.value.status === 200) {
    //           setProduct(sofaResponse.value.data);
    //         }
    //         else if (bedroomResponse.status === 'fulfilled' && bedroomResponse.value.status === 200) {
    //           setProduct(bedroomResponse.value.data);
    //         }
    //         else {
    //           throw new Error('Product not found in sofas or bedroom');
    //         }
    //       } 
    //       catch (error) {
    //         setError(error);
    //       } 
    //       finally {
    //         setLoading(false);
    //       }
    //     };

    //     fetchProduct();
    // }, [id]);

    // useEffect(() => {
    //     const fetchProduct = async () => {
    //       try {
    //         // Fetch all products from both endpoints
    //         const [sofasResponse, bedroomResponse, sofabedsResponse] = await Promise.all([
    //           axios.get('http://localhost:3000/sofas'),
    //           axios.get('http://localhost:3000/bedroom'),
    //           axios.get('http://localhost:3000/sofabeds')
    //         ]);
      
    //         // Combine both arrays and find the product with matching ID
    //         const allProducts = [...sofasResponse.data, ...bedroomResponse.data, ...sofabedsResponse.data];
    //         const foundProduct = allProducts.find(product => product.id === id);
      
    //         if (foundProduct) {
    //           setProduct(foundProduct);
    //         } else {
    //           throw new Error('Product not found');
    //         }
    //       } catch (error) {
    //         setError(error);
    //       } finally {
    //         setLoading(false);
    //       }
    //     };
    //     fetchProduct();
    // },[id])

useEffect(() => {
  const allProducts = [...sofas, ...bedroom, ...sofabeds];

  const foundProduct = allProducts.find(
    product => product.id === id
  );

  if (foundProduct) {
    setProduct(foundProduct);
  } else {
    setError('Product not found');
  }

  setLoading(false);
}, [id]);
    

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <>
        <div className="scroll-smooth max-w-screen overflow-x-hidden">
          <Header/>
          <Head/>
          <div>
            <div className="py-12 px-4 md:px-40 w-full justify-start grid grid-cols-1 md:grid-cols-2 mb-12 cursor-pointer">
                <div className="mb-8 md:mb-0">
                    <img src={product.image} alt={product.title} className="w-full rounded-lg" />
                </div>
                
                <div className="px-0 md:px-10 py-3 space-y-3">
                    <div className="flex gap-1">
                        <span><img className="h-4 w-22 mt-1" alt="star" src="/images/rate/stars.png" /></span>
                        {product.review}
                    </div>
                    <div className="flex text-2xl font-bold">{product.title}</div>
                    <div className="flex text-xl font-semibold">${product.price}</div>
                    <div className="flex text-lg font-semibold">Size : {product.size}</div>
                    <div className="flex text-lg font-semibold">Colour : {product.color}</div>
                    <button 
                        className="bg-[#586A4D] w-full py-3 rounded-full my-5 font-bold text-white cursor-pointer hover:bg-[#475a3d] transition-colors" 
                        onClick={handleAddToCart}
                    >
                        ADD TO CART ${product.price}
                    </button>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center py-3 my-5 gap-3 text-black text-sm md:text-md bg-zinc-100">
                        <div className="flex items-center gap-2">
                            <img src={Van} alt="Van" width="25px" height="25px" />
                            <span>Fast delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Calender} alt="Calender" width="25px" height="25px" />
                            <span>120-night free trial</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={Warrenty} alt="Warrenty" width="25px" height="25px" />
                            <span>World-class warranty</span>
                        </div>
                    </div>
                
                    <div className="w-full my-5 md:my-10">
                        <button 
                            onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                            className="w-full text-left font-semibold bg-zinc-100 rounded flex justify-between p-3 cursor-pointer"
                        >
                            Product Description
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <path d="M13.2292 8.12559L9.99583 11.3589L6.7625 8.12559C6.4375 7.80059 5.9125 7.80059 5.5875 8.12559C5.2625 8.45059 5.2625 8.97559 5.5875 9.30059L9.4125 13.1256C9.7375 13.4506 10.2625 13.4506 10.5875 13.1256L14.4125 9.30059C14.7375 8.97559 14.7375 8.45059 14.4125 8.12559C14.0875 7.80892 13.5542 7.80059 13.2292 8.12559Z" fill="#60607F"></path>
                            </svg>
                        </button>
                        
                        {isDescriptionOpen && (
                            <div className="bg-zinc-100 p-3">
                                {product.description}
                            </div>
                        )}
                    </div>

                    <div className="w-full cursor-pointer">
                        <button 
                            onClick={() => setIsMaterialOpen(!isMaterialOpen)}
                            className="w-full text-left font-semibold bg-zinc-100 rounded flex justify-between p-3 cursor-pointer"
                        >
                            Material, Sustainability & Care
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                                <path d="M13.2292 8.12559L9.99583 11.3589L6.7625 8.12559C6.4375 7.80059 5.9125 7.80059 5.5875 8.12559C5.2625 8.45059 5.2625 8.97559 5.5875 9.30059L9.4125 13.1256C9.7375 13.4506 10.2625 13.4506 10.5875 13.1256L14.4125 9.30059C14.7375 8.97559 14.7375 8.45059 14.4125 8.12559C14.0875 7.80892 13.5542 7.80059 13.2292 8.12559Z" fill="#60607F"></path>
                            </svg>
                        </button>
                        
                        {isMaterialOpen && (
                            <div className="bg-zinc-100 p-3 space-y-4">
                                <div className="space-y-3">
                                    <p className="text-lg md:text-xl font-semibold">Fabrics</p>
                                    <p className="text-sm md:text-base">Sunset Rust & Green Wattle: 70% Polyester 30% Recycled Polyester.</p>
                                    <p className="text-sm md:text-base">Limestone & Sand Dune: 14% Polyester, 86% Recycled Polyester</p>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-lg md:text-xl font-semibold">Protect & Care</p>
                                    <ol className="list-disc px-5 text-sm md:text-base space-y-2">
                                        <li>Remove cover to wash.</li>
                                        <li>Cold machine wash separately.</li>
                                        <li>Spot clean as required.</li>
                                        <li>Do not bleach or use chlorine.</li>
                                        <li>Do not soak, rub or wring.</li>
                                        <li>Do not tumble dry.</li>
                                        <li>Line dry in shade.</li>
                                        <li>Do not iron.</li>
                                        <li>Dryclean ℗</li>
                                        <li>Ensure removable covers are completely dry before fitting covers back on.</li>
                                    </ol>
                                    <p className="text-sm md:text-base">Green Wattle & Sunset Rust Covers: Pilling can occur occasionally as a result of normal daily wear and should not be considered a fault. Fiber pills can be carefully removed with a battery operated pilling tool, available from most haberdashery stores.</p>
                                    <p className="text-sm md:text-base">Limestone & Sand Dune Covers: Due to the nature of the fabric, do not use a pilling machine otherwise this may cause damage.</p>
                                    <p className="text-sm md:text-base font-bold">WARNING: CARELESS USE OF CIGARETTES AND MATCHES COULD SET FIRE TO THIS PRODUCT</p>
                                    <p className="text-sm md:text-base">Please keep this care label attached for warranty.</p>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-lg md:text-xl font-semibold">Country of Origin</p>
                                    <p className="text-sm md:text-base">Designed by Koala in Sydney, Manufactured in China.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div> 
          </div>
          <Subscribe/>
          <Footer/>
        </div>
        </>
    );
};

export default Product;