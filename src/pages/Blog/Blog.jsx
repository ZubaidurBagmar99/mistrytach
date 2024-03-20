import SideNavHome from "../Residential/SideNavHome";

const Blog = () => {
  return (
    <div className="flex">
      <SideNavHome></SideNavHome>
      <div className="ml-3">
        <div className="bg-white shadow-lg mb-4 mt-2 rounded-md w-[870px]">
          <h3 className="text-xl py-1 ml-4  text-blue-600">Blog</h3>
        </div>
        <div>
          <h2 className="text-3xl font-bold mt-4 mb-4 tracking-wider">
          Latest Interior Design Trends, Decorating Ideas <br /> & Blog by Optimal Interior
          </h2>
        </div>
        <a href="#" className="text-blue-500 mb-2">How Technology is Making an Impact on Modern Interior</a>
        <p className="mb-3">If you are wondering how technology is making an impact on modern interior design then check this article for adequate information on this topic. Click and go!...</p>
        <a href="#" className="text-blue-500 mb-2">Read More</a>

        <a href="#" className="text-blue-500 mb-2">How Technology is Making an Impact on Modern Interior</a>
        <p className="mb-3">If you are wondering how technology is making an impact on modern interior design then check this article for adequate information on this topic. Click and go!...</p>
        <a href="#" className="text-blue-500 mb-2">Read More</a>

        <a href="#" className="text-blue-500 mb-2">How Technology is Making an Impact on Modern Interior</a>
        <p className="mb-3">If you are wondering how technology is making an impact on modern interior design then check this article for adequate information on this topic. Click and go!...</p>
        <a href="#" className="text-blue-500 mb-2">Read More</a>
        
        <a href="#" className="text-blue-500 mb-2">How Technology is Making an Impact on Modern Interior</a>
        <p className="mb-3">If you are wondering how technology is making an impact on modern interior design then check this article for adequate information on this topic. Click and go!...</p>
        <a href="#" className="text-blue-500 mb-2">Read More</a>
      </div>
    </div>
  );
};

export default Blog;
