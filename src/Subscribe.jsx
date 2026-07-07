import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
//import { useMediaQuery } from 'react-responsive';

const Subscribe = () => {
    const { register, handleSubmit, reset } = useForm();
  // const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

    const onSubmit = async (data) => {
      try {
        const response = await axios.post('http://localhost:5000/subscribers', data);
  
        if (response.status === 201) {
          console.log('Form submitted successfully!', response.data);
          reset();
        } else {
          console.error('Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    };

  return (
    <>
      <div className="bg-zinc-100 text-center py-8 px-4 md:px-0">
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-8">Subscribe to our emails</h1> 
        <p className="mb-6 md:mb-8 text-sm md:text-base">Be the first to know about new collections and exclusive offers.</p>

        <div className="flex justify-center py-4">
          <form onSubmit={handleSubmit(onSubmit)} className="text-gray-500 md:space-x-3 space-y-3 md:space-y-0 w-full md:w-auto">
            {/* Mobile: Stacked vertically, Desktop: Inline */}
            <div className="flex flex-col md:flex-row items-center md:space-x-3 space-y-3 md:space-y-0 w-full md:w-auto">
              <input 
                type="text" 
                name="Name" 
                placeholder="First Name" 
                className="rounded border-gray-400 border-1 text-gray-900 w-80 md:w-60 h-13 p-2 focus:border-2 caret-current"
                {...register("Name", { 
                  required: "This Field is required", 
                })} 
              />

              <input 
                type="email" 
                name="Email" 
                placeholder="Enter Your Email" 
                className="rounded border-gray-400 border-1 text-gray-900 w-80 md:w-60 h-13 p-2 focus:border-2 caret-current"
                {...register("Email", {
                  required: "This Field is required",
                })} 
              />
              
              <button 
                type="submit" 
                className="bg-[#586A4D] rounded-full text-white text-center w-80 md:w-60 h-13 p-2"
              >
                SIGN UP
              </button>
            </div>

            <p className="my-3 text-gray-500 text-xs md:text-sm">
              By clicking 'Sign up' you agree that you have read and understood Koala's &nbsp;   
              <Link to="/policies/privacypolicy" className="text-sky-600 underline">Privacy Policy</Link>.
            </p>

            <div className="flex items-start justify-center md:space-x-2 cursor-pointer">
              <input 
                type="checkbox" 
                name="right" 
                value="false" 
                className="w-5 h-5 accent-white" 
                required
              />
              <span className="text-gray-500 text-xs md:text-sm ml-2 md:ml-0">
                I agree to receive marketing communications and product updates from Koala.
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Subscribe;