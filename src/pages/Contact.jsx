import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header';
import Head from '../Head';
import Subscribe from '../Subscribe';
import Footer from '../Footer';
import { useForm } from 'react-hook-form';

const Contact = () => {

  const {location} = useLocation();

  useEffect( () => {
    window.scrollTo(0,0);
  },[location])

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/registrations', data);
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
      <div className="scroll-smooth max-w-screen overflow-x-hidden">
        <Header />
        <Head />

        <div className="py-6 md:py-12 w-full px-4 md:px-0 md:w-[700px] mx-auto">
          <div className="rounded">
            <div className="border-1 px-3 py-4 md:py-6">
              <h1 className="text-2xl md:text-3xl font-semibold">Register Here</h1>
            </div>

            <div className="border-1 border-t-0 p-4 md:p-5 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4 text-gray-900">
                {/* Name Field */}
                <div>
                  <label className="text-lg md:text-xl">Full Name <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    className="border rounded w-full h-10 md:h-12 p-2 md:p-3 mt-1"
                    placeholder="Full Name"
                    {...register("Name", {
                      required: "Name is required",
                      pattern: {
                        value: /^[A-Za-z\s]+$/i,
                        message: "Name must only contain letters",
                      },
                      maxLength: {
                        value: 50,
                        message: "Name cannot exceed 50 characters",
                      },
                      minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters long",
                      },
                    })}
                  />
                  {errors.Name && <span className="text-red-500 text-sm">{errors.Name.message}</span>}
                </div>

                {/* Email Field */}
                <div>
                  <label className="text-lg md:text-xl">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    className="border rounded w-full h-10 md:h-12 p-2 md:p-3 mt-1"
                    placeholder="your@email.com"
                    {...register("Email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.Email && <span className="text-red-500 text-sm">{errors.Email.message}</span>}
                </div>

                {/* Password Field */}
                <div>
                  <label className="text-lg md:text-xl">Password <span className="text-red-500">*</span></label>
                  <input
                    type="password"
                    className="border rounded w-full h-10 md:h-12 p-2 md:p-3 mt-1"
                    placeholder="Password"
                    {...register("Password", {
                      required: "Password is required",
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{6,20}$/,
                        message: "Password must be 6-20 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.",
                      },
                    })}
                  />
                  {errors.Password && <span className="text-red-500 text-sm">{errors.Password.message}</span>}
                </div>

                {/* Subject Field */}
                <div>
                  <label className="text-lg md:text-xl">Subject <span className="text-red-500">*</span></label>
                  <select
                    className="border rounded w-full h-10 md:h-12 p-2 md:p-3 mt-1"
                    {...register("Subject", {
                      required: "Subject is required",
                    })}
                  >
                    <option value="">Select a Subject</option>
                    <option value="Koala Product Information">Koala Product Information</option>
                    <option value="Help Placing a New Order">Help Placing a New Order</option>
                    <option value="Change or Update an Existing Order">Change or Update an Existing Order</option>
                    <option value="Shipping, Delivery and Tracking">Shipping, Delivery and Tracking</option>
                    <option value="Product Assistance and Warranty">Product Assistance and Warranty</option>
                    <option value="120 Night Returns">120 Night Returns</option>
                  </select>
                  {errors.Subject && <span className="text-red-500 text-sm">{errors.Subject.message}</span>}
                </div>

                {/* Message Field */}
                <div>
                  <label className="text-lg md:text-xl">Message <span className="text-red-500">*</span></label>
                  <textarea
                    className="border rounded w-full h-24 md:h-28 p-2 md:p-3 mt-1"
                    placeholder="Write your message here"
                    {...register("Message", {
                      required: "Message is required",
                    })}
                  />
                  {errors.Message && <span className="text-red-500 text-sm">{errors.Message.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#586A4D] rounded cursor-pointer h-10 md:h-12 font-semibold text-white text-md md:text-lg hover:bg-zinc-600"
                >
                  Send
                </button>

                {/* Privacy Links */}
                <div className="text-xs md:text-sm mt-2 md:mt-0">
                  This site is protected by reCAPTCHA Enterprise and the Google{" "}
                  <a target="_blank" href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a target="_blank" href="https://policies.google.com/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>{" "}
                  apply.
                </div>
              </form>
            </div>
          </div>
        </div>

        <Subscribe />
        <Footer />
      </div>
    </>
  );
};

export default Contact;