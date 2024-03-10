import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
//   const [homeDropdown, setHomeDropDown] = useState(false);
  const [residentialDropdown, setResidentDropDown] = useState(false);
  const [commercialDropdown, setCommercialDropDown] = useState(false);
  const [swimmingPoolDropDown, setSwimmingPoolDropDown] = useState(false);
  const [healthcareDropDown, setHealthcareDropDown] = useState(false);
  const [hospitalityDropDown, setHospitalsDropDown] = useState(false);
  const [landscapeDropDown, setLandscapeDropDown] = useState(false);
  const [educationalDropDown, setEducationalDropDown] = useState(false);
  const [steelStructuresDropDown, setSteelStructuresDropDown] = useState(false);
  const [blogDropDown, setBlogDropDown] = useState(false);
  const [aboutUsDropDown, setAboutUsDropDown] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-500 ">
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto text-center">
        <div className="text-sm lg:flex-grow">
            <NavLink
            //   onMouseEnter={() => setHomeDropDown(true)}
            //   onMouseLeave={() => setHomeDropDown(false)}
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 p-2 text-white  text-base hover:bg-white hover:text-gray-900 mr-4 relative"
            >
              Home
            </NavLink>
            
             <div className="relative inline">
             <NavLink
             onMouseEnter={()=> setResidentDropDown(true)} 
             onMouseLeave={() => setResidentDropDown(false)}
            to="/residential"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Residential
          </NavLink>
          {residentialDropdown &&(
            <div
            onMouseEnter={()=> setResidentDropDown(true)}
              onMouseLeave={() => setResidentDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-sm text-sm w-96 left-0 top-full mt-3"
            >
                <div className="flex ">
                  <div className="w-1/2 justify-start">
                    <NavLink
                      to="/home-interior"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Home Interior
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Villa Interior
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Duplex House
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Luxury House
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Home Renovation
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Apartment
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Loft Interior
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Islamic Interior
                    </NavLink>
                  </div>
                </div>
              </div>
          )}
            </div>  
            <div className="relative inline">
            <NavLink
            onMouseEnter={()=> setCommercialDropDown(true)}
            onMouseLeave={() => setCommercialDropDown(false)}
            to="/commercial"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Commercial
          </NavLink>
          {
            commercialDropdown &&(
              <div
              onMouseEnter={()=> setCommercialDropDown(true)}
              onMouseLeave={() => setCommercialDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-64 left-0 top-full mt-3"
            >
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 1
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 2
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 3
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 4
                    </NavLink>
                  </div>
                </div>
              </div>
          )}
            </div> 
            <div className="relative inline">
            <NavLink
            onMouseEnter={()=> setSwimmingPoolDropDown(true)}
            onMouseLeave={() => setSwimmingPoolDropDown(false)}
            to="/swimming-pool"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Swimming Pool
          </NavLink>
          {swimmingPoolDropDown &&(
            <div
            onMouseEnter={()=> setSwimmingPoolDropDown(true)}
              onMouseLeave={() => setSwimmingPoolDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-64 left-0 top-full mt-3"
            >
               <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 1
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 2
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 3
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 4
                    </NavLink>
                  </div>
                </div>
              </div> 
          )}
            </div>
            <div className="relative inline">
            <NavLink
            onMouseEnter={()=> setHealthcareDropDown(true)}
            onMouseLeave={() => setHealthcareDropDown(false)}
            to="/healthcare"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Healthcare
          </NavLink>
          {healthcareDropDown && (
            <div
            onMouseEnter={()=> setHealthcareDropDown(true)}
              onMouseLeave={() => setHealthcareDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-64 left-0 top-full mt-3"
            >
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 1
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 2
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 3
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 4
                    </NavLink>
                  </div>
                </div>
              </div>
          )}
            </div>
            <div className="relative inline">
            <NavLink
            onMouseEnter={()=> setHospitalsDropDown(true)}
            onMouseLeave={()=> setHospitalsDropDown(false)}
            to="/hospitality"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Hospitality
          </NavLink>
          {hospitalityDropDown && (
            <div
            onMouseEnter={()=> setHospitalsDropDown(true)}
              onMouseLeave={()=> setHospitalsDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-64 left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 1
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 2
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 3
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 4
                    </NavLink>
                  </div>
                </div>
              </div>
)}
            </div>
            <div className="relative inline">
            <NavLink
            onMouseEnter={()=> setLandscapeDropDown(true)}
            onMouseLeave={()=> setLandscapeDropDown(false)}
            to="/landscape"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Landscape
          </NavLink>
          {landscapeDropDown && (
            <div
            onMouseEnter={()=> setLandscapeDropDown(true)}
              onMouseLeave={()=> setLandscapeDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-64 left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 1
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 2
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 3
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 4
                    </NavLink>
                  </div>
                </div>
              </div>
                )}
            </div>
            <div className="relative inline">
            <NavLink
            onMouseEnter={()=> setEducationalDropDown(true)}
            onMouseLeave={()=> setEducationalDropDown(false)}
            to="/educational"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Educational
          </NavLink>
          {educationalDropDown && (
            <div
            onMouseEnter={()=> setEducationalDropDown(true)}
              onMouseLeave={()=> setEducationalDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-64 left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 1
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 2
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 3
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 4
                    </NavLink>
                  </div>
                </div>
              </div>
                )}
            </div>
            <div className="relative inline">
            <NavLink
            onMouseEnter={()=> setSteelStructuresDropDown(true)}
            onMouseLeave={()=> setSteelStructuresDropDown(false)}
            to="/steel-structure"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Steel Structure
          </NavLink>
          {steelStructuresDropDown && (
            <div
            onMouseEnter={()=> setSteelStructuresDropDown(true)}
              onMouseLeave={()=> setSteelStructuresDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-64 left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 1
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 2
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 3
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 4
                    </NavLink>
                  </div>
                </div>
              </div>
                )}
            </div>
            <div className="relative inline">
            <NavLink
            onMouseEnter={()=> setBlogDropDown(true)}
            onMouseLeave={()=> setBlogDropDown(false)}
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Blog
          </NavLink>
          {blogDropDown && (
            <div
            onMouseEnter={()=> setBlogDropDown(true)}
              onMouseLeave={()=> setBlogDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-64 left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 1
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 2
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 3
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 4
                    </NavLink>
                  </div>
                </div>
              </div>
                )}
            </div>
            <div className="relative inline">
            <NavLink
            onMouseEnter={()=> setAboutUsDropDown(true)}
            onMouseLeave={()=> setAboutUsDropDown(false)}
            to="/about-us"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            About Us
          </NavLink>
          {aboutUsDropDown && (
            <div
            onMouseEnter={()=> setAboutUsDropDown(true)}
              onMouseLeave={()=> setAboutUsDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-64 left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu1"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 1
                    </NavLink>
                    <NavLink
                      to="/submenu2"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 2
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/submenu3"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 3
                    </NavLink>
                    <NavLink
                      to="/submenu4"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Subcategory 4
                    </NavLink>
                  </div>
                </div>
              </div>
                )}
            </div>
          
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
