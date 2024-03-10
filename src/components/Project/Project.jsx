import LeftImg from "../../assets/images/rooftop-waterfall-designed-by-optimal-in-Greenroad-Dhanmondi.jpg";
import RightImg from "../../assets/images/service-1.jpg";

const Project = () => {
    return (
        <section className="py-16 bg-blue-600">
            <h4 className="text-xl font-semibold text-center text-white mb-2">Quality Works</h4>
            <h2 className="text-3xl font-bold text-center text-white mb-6">Our Completed Projects</h2>
          <div className="container mx-auto flex flex-col items-center justify-center">
            <div className="flex items-center justify-between mb-8">
              <div>
              <img src={LeftImg} alt="Left Image" className="w-[550px] h-[350px] mr-4" />
              <p className="bg-orange-600 text-white py-2 pl-3 mr-4">A Beautiful Waterfall & Rooftop Gardening [@] Dhanmondi</p>
              </div>
              <div>
              <img src={RightImg} alt="Right Image" className="w-[550px] h-[350px] ml-4" />
              <p className="bg-orange-600 text-white py-2 pl-3 ml-4">Rooftop Duplex House Design [@] Mohakhali DOHS</p>
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