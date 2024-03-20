import Img from "../../../assets/images/reviews.jpg";
import SideNavHome from "../../Residential/SideNavHome";

const Reviews = () => {
    return (
        <div className="flex">
          <SideNavHome></SideNavHome>
          <div className="ml-3">
            <div className="bg-white shadow-lg mb-4 mt-2 rounded-md w-[870px]">
              <h3 className="text-xl py-1 ml-4  text-blue-600">Home</h3>
            </div>
            <header>
              <img src={Img} alt="" />
            </header>
            <div>
              <h2 className="text-3xl font-bold mt-4 mb-4 tracking-wider">
              Client Satisfaction Survey
              </h2>
            </div>
          </div>
        </div>
      );
};

export default Reviews;