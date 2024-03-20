import LeftImg from "../../assets/images/rooftop-waterfall-designed-by-optimal-in-Greenroad-Dhanmondi.jpg";
import RightImg from "../../assets/images/service-1.jpg";

const Project = () => {
    return (
      <section className="py-16 bg-blue-600">
            <h4 className="text-xl font-semibold text-center text-white mb-2">Quality Works</h4>
            <h2 className="text-3xl font-bold text-center text-white mb-6">Our Completed Projects</h2>
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="md:flex items-center md:justify-between mb-8">
              <div>
              <img src={LeftImg} alt="Left Image" className="w-full p-2 md:p-0 md:w-[550px] md:h-[350px] mr-4" />
              <p className="bg-orange-600 py-2 text-white ml-2 md:ml-0 md:py-2 md:pl-3 mr-2 md:mr-4 text-center md:text-start">A Beautiful Waterfall & Rooftop Gardening [@] Dhanmondi</p>
              </div>
              <div>
              <img src={RightImg} alt="Right Image" className="w-full p-2 md:p-0 md:w-[550px] md:h-[350px] md:ml-4" />
              <p className="bg-orange-600 text-white py-2 pl-3 ml-2 mr-2 md:mr-0 md:ml-4">Rooftop Duplex House Design [@] Mohakhali DOHS</p>
              </div>
            </div>
            <button className="bg-transparent text-white hover:bg-green-500  font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded outline-none">
              More Design Ideas & Decorating Inspiration ⤏
            </button>
          </div>
        </section>
    
      );
};

export default Project;