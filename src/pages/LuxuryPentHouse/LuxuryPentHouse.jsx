import Img from "../../assets/images/penthouse-design.jpg";
import SideNavHome from "../Residential/SideNavHome";

const LuxuryPentHouse = () => {
    return (
        <div className="flex">
      <SideNavHome></SideNavHome>
      <div className="ml-3">
        <div className="bg-white shadow-lg mb-4 mt-2 rounded-md w-[870px]">
          <h3 className="text-xl py-1 ml-4  text-blue-600">Luxury Penthouse</h3>
        </div>
        <header>
          <img src={Img} alt="" />
        </header>
        <div>
          <h2 className="text-3xl font-bold mt-4 mb-4 tracking-wider">
          Luxurious Penthouse Interior Design, Decoration & Architecture Firm in Dhaka Bangladesh
          </h2>
        </div>
        <div className="flex">
          <div className="w-3/5">
            <h3 className="text-2xl tracking-wider	font-semibold mb-4">
              Turn your home into your dream luxury design space.
            </h3>
            <p>
              Interior design and beautification is the soul of any home. Home
              interior word is not used only for decoration of any building or
              houses. It also defines your living style, luxury in your bedroom
              & art in your kitchen. Interior designing also contains the
              decoration of rooms, styling of furniture and how to manage your
              miscellaneous home decor. It is introduced to people to beauty and
              relaxation.
            </p>
          </div>
          <div className="w-2/5">
            <form action="" className="ml-2 w-4/5 bg-slate-50 py-1 rounded-sm">
              <h3 className="text-xl font-semibold text-center mb-1">
                Need A Quotation?
              </h3>
              <p className="text-center mb-1">
                Looking for home, office, apartment interior ideas? or even
                steel building project?
              </p>
              <p className="text-lg ml-1">
                Please fill out the form below and we will get back to you as
                soon as possible.
              </p>

              <label className="input input-bordered flex items-center gap-2 mt-2 mb-2 px-2">
                <input type="text" className="grow" placeholder="Full Name" />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2 px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                </svg>
                <input
                  type="Number"
                  className="grow"
                  placeholder="Phone Number"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-2  px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input type="text" className="grow" placeholder="Email" />
              </label>

              <label className="form-control px-1">
                <div className="label">
                  <span className="label-text">Your bio</span>
                </div>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder=""
                ></textarea>
                <div className="label"></div>
              </label>
              <div className="px-1">
                <button className="uppercase w-full py-2 rounded-sm bg-gradient-to-r from-green-600 to-lime-500  text-white">
                  {" "}
                  submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default LuxuryPentHouse;