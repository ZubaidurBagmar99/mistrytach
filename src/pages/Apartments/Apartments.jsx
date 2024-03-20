import Img from "../../assets/images/apartments.jpg";
import SideNavHome from "../Residential/SideNavHome";

const Apartments = () => {
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
          Beautiful Apartment Interior Design Idea Decoration & Consultancy Firm in Bangladesh
          </h2>
        </div>
        <div className="flex">
          <div className="w-3/5">
            <h3 className="text-2xl tracking-wider	font-semibold mb-4">
              Renovate your old home into your dream luxury design space.
            </h3>
            <p className="mb-4">
              Are you renovating or sprucing up your home? Looking for top
              interior designers or decorators to give an idea on your home
              renovation works, budget & layout planing? No doubt optimal can be
              the best home renovation company of your dream house or apartment
              decoration of any building or villas. Interior designer defines
              your living style, luxury in your bedroom & art in your kitchen.
              Interior designing also contains the decoration of rooms, styling
              of furniture and how to manage your miscellaneous home decor. It
              is introduced to people to beauty and relaxation.
            </p>
            <h4 className="text-xl tracking-wider	font-semibold mb-4">
              Getting the following benefits you need home renovation:
            </h4>
            <div>
              <ul className="list-decimal ml-4">
                <li>Remaining security</li>
                <li>Having healthy</li>
                <li>Getting contented</li>
                <li>Bearing aristocracy</li>
                <li>Banking money</li>
                <li>Saving time</li>
                <li>Long Lasting</li>
                <li>Protecting damage</li>
                <li>Living happy</li>
                <li>Showing luxury</li>
                <li>Trouble-free moving</li>
              </ul>
            </div>
            <h4 className="text-xl tracking-wider	font-semibold mb-4">
            Does your home really need interior design touch?
            </h4>
            <p>Interior design plays the vital role in its functionality because even the largest house can lack space if having a poor interior design, while a tiny apartment can be transformed into a comfy residence with enough space for just about everything with the right design and the use of a contemporary staircase. Yes, interior design is much more important than it may seem at a first glance and can be easily compared with the importance of architecture, at least when it comes to interior.</p>
            <p className="mb-6">It is often difficult to decide which interior design meets your needs and lifestyle the most because most designs usually do not show the need for improvements or alterations until you are actually using them. However, Optimal interior design firm will help you to choose the right decor, lightning, paint color, etc. depending on what you want to leave over to an expert and how much you can afford to spend on the project.</p>
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

export default Apartments;