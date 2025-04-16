import { Link } from 'react-router-dom';

const QuizBanner = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mx-4 md:mx-40 h-auto md:h-32 bg-zinc-100 rounded p-4 md:p-8">
      <h2 className="flex justify-center text-3xl text-black font-bold items-center mb-4 md:mb-0 text-center md:text-left">
        Not sure which mattress is right for you?
      </h2>
      <div className="flex flex-col md:flex-row justify-end items-center gap-3 md:gap-6">
        <Link 
          className="w-56 md:w-auto border-1 border-gray-500 hover:border-black bg-white text-gray-700 font-bold py-3 md:py-4 px-4 md:px-6 rounded-full cursor-pointer text-center"
          to="/pages/mattressQuiz"
        >
          TAKE THE QUIZ
        </Link>
        <Link 
          className="w-56 md:w-auto border-1 border-gray-500 hover:border-black bg-white text-gray-700 font-bold py-3 md:py-4 px-4 md:px-6 rounded-full cursor-pointer text-center"
          to="/collections/mattresses#compare"
        >
          COMPARE MATTRESSES
        </Link>  
      </div>
    </div>
  );
};

export default QuizBanner;