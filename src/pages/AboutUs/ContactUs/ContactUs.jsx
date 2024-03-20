import Img from "../../../assets/images/contact-us.jpg";
import SideNavHome from "../../Residential/SideNavHome";

const ContactUs = () => {
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
                <p className="mt-4 mb-2">Looking for a creative interior designer, decorators & consultancy support for your modern home or stylish office space at Dhaka, Chittagong, Sylhet, Khulna, Barisal, Rajshahi in Bangladesh?</p>
                <p className="mt-2 mb-4">For detailed information just call +880 1838-988493 or fill out the form below.</p>
              <h2 className="text-3xl font-bold mt-4 mb-4 tracking-wider">
              Contact Optimal Interior Decoration & <br /> Consultancy
              </h2>
            </div>
          </div>
        </div>
      );
};

export default ContactUs;