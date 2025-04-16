import Logo from '/icons/Logo.png';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.get('http://localhost:5000/registrations');
      const registrations = response.data;

      const user = registrations.find(
        (user) => user.Email === data.Email && user.Password === data.Password
      );

      if (user) {
        alert('Login successful!');
        navigate('/'); 
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error checking credentials:', error);
      alert('There was an error with the login process. Please try again.');
    }
  };

  return (
    <>
      <div className="scroll-smooth max-w-screen overflow-x-hidden">
        <div className="bg-zinc-100 w-screen min-h-screen flex justify-center items-center p-4">
          <div className="w-full max-w-[500px] bg-white rounded-lg shadow-md p-4 md:p-0 md:h-[400px]">
            <div id="logo" className="flex items-center justify-center w-full h-24 md:h-32">
              <img src={Logo} alt="Logo" className="w-40 md:w-48" />
            </div>

            <div className="flex px-4 md:px-8 w-full">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-gray-900 w-full">
                <label className="text-xl font-bold text-center block">Log In</label>

                <div>
                  <input
                    type="email"
                    name="Email"
                    defaultValue=""
                    className="border rounded w-full h-12 p-3 mt-3"
                    placeholder="your@email.com"
                    {...register("Email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.Email && <span className="text-red-500 text-sm">{errors.Email.message}</span>}
                </div>

                <div>
                  <input
                    type="password"
                    name="Password"
                    defaultValue=""
                    className="border rounded w-full h-12 p-3"
                    placeholder="Password"
                    {...register("Password", {
                      required: "Password is required",
                    })}
                  />
                  {errors.Password && <span className="text-red-500 text-sm">{errors.Password.message}</span>}
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#586A4D] rounded cursor-pointer h-12 font-semibold text-white p-2 text-lg hover:bg-zinc-600"
                  >
                    Continue
                  </button>
                </div>

                <div className="text-sm text-center">
                  <a
                    target="_blank"
                    href="https://au.koala.com/64361365640/policies/27680014472.html?locale=en"
                    className="hover:underline hover:text-[#586A4D]"
                    rel="noreferrer"
                  >
                    Privacy
                  </a>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;