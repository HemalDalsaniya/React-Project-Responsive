const Categories = () => {
  const categoriesData = [
    {
      id: 1,
      image: "/images/mattresses/mattress.png",
      title: "Mattresses"
    },
    {
      id: 2,
      image: "/images/sofabeds/sofa-bed.png",
      title: "Sofa Beds"
    },
    {
      id: 3,
      image: "/images/beds/bed.png",
      title: "Bed Bases"
    },
    {
      id: 4,
      image: "/images/sofas/sofa.png",
      title: "Sofas"
    }
  ];

  return (
    <>
      <div className="bg-white px-4 sm:px-40 pt-8 sm:pt-14">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8">Categories</h1> 

        <div className="grid grid-cols-2 gap-4 sm:flex sm:justify-between sm:gap-8">          
          {categoriesData.map((cat) => (
            <div key={cat.id} className="text-center sm:text-left">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="rounded-lg w-full h-auto sm:w-90 sm:h-70 object-cover"
                />
              </div>
              <h2 className="font-bold text-base sm:text-lg mt-2 sm:mt-2">{cat.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Categories;