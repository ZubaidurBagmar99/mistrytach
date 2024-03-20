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
  // const [blogDropDown, setBlogDropDown] = useState(false);
  const [aboutUsDropDown, setAboutUsDropDown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex flex-col lg:flex-row items-center justify-center bg-blue-500 ">
      <div className="flex items-center justify-between px-4 py-2 lg:p-0">
        <button className="block lg:hidden  items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6H20V7H4V6ZM4 11H20V12H4V11ZM4 16H20V17H4V16Z"
              />
            )}
          </svg>
        </button>
      </div>
      <div className={`lg:flex lg:flex-row lg:items-center lg:justify-between ${menuOpen ? "block" : "hidden"}`}>
        <div className="text-sm lg:flex-growflex flex-col lg:flex-row">
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
                      to="/villa-interior"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Villa Interior
                    </NavLink>
                    <NavLink
                      to="/duplex-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Duplex House
                    </NavLink>
                    <NavLink
                      to="/luxury-pent-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Luxury House
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/home-renovation"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Home Renovation
                    </NavLink>
                    <NavLink
                      to="/apartments"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Apartment
                    </NavLink>
                    <NavLink
                      to="/loft-interior"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Loft Interior
                    </NavLink>
                    <NavLink
                      to="/islamic-interior"
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
              className="absolute z-10 bg-white shadow-md py-2 rounded-sm text-sm w-96 left-0 top-full mt-3"
            >
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/office-design"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Office Design
                    </NavLink>
                    <NavLink
                      to="/corporate"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Corporate
                    </NavLink>
                    <NavLink
                      to="/retail-shop"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Retail Shop - store
                    </NavLink>
                    <NavLink
                      to="/news-room"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      News Room
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/modeling-rendering"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      3D Modeling & Rendering
                    </NavLink>
                    <NavLink
                      to="/baying-house"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Buying House
                    </NavLink>
                    <NavLink
                      to="/auditorium-design"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Auditorium Interior Design
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
              className="absolute z-10 bg-white shadow-md py-2 rounded-sm text-sm w-[450px] left-0 top-full mt-3"
            >
               <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/indoor-swimming-pool"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Indoor Swimming Pool
                    </NavLink>
                    <NavLink
                      to="/outdoor-swimming-pool"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Outdoor Swimming Pool
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/modern-pool"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                     Modern Houses With Pools
                    </NavLink>
                    <NavLink
                      to="/rooftop-swimming-pool"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Rooftop Swimming Pool
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
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-96 left-0 top-full mt-3"
            >
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/hospital-space-interior"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Hospital Space Interior
                    </NavLink>
                    <NavLink
                      to="/dental-clinic"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Dental Clinic Interior
                    </NavLink>
                    <NavLink
                      to="/rehabilitation-clinic"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Rehabilitation Center
                    </NavLink>
                    <NavLink
                      to="/healthcare-center"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Healthcare Center
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/medical-clinic"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Medical Clinic
                    </NavLink>
                    <NavLink
                      to="/diagnostic-center"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Diagnostics Center
                    </NavLink>
                    <NavLink
                      to="/spa-beauty-parlour"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Spa & Beauty Parlour
                    </NavLink>
                    <NavLink
                      to="/bath-house-design"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Bath House Design
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
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-96 left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/Coffee-shop"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Coffee Shop
                    </NavLink>
                    <NavLink
                      to="/cafeteria"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Cafeteria
                    </NavLink>
                    <NavLink
                      to="/restaurant"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Restaurant
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/fast-food"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Fast Food
                    </NavLink>
                    <NavLink
                      to="/resort"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Resort / Eco-Resort
                    </NavLink>
                    <NavLink
                      to="/lodge-cabin"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Lodge Cabin
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
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-[450px] left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/interior-landscape-design"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Interior Landscape Design
                    </NavLink>
                    <NavLink
                      to="/exterior-landscape-design"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Exterior Landscape Design
                    </NavLink>
                    <NavLink
                      to="/fountain-rooftop-design"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Fountain, Rooftop Garden
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/garden-pond-design"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Garden Pond Design
                    </NavLink>
                    <NavLink
                      to="/rooftop-garden-design"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Rooftop Garden Design
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
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-[450px] left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/school-college-university"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      School, Collage, University
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/recreation-training"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Recreation & Training
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
            to="/steel-structures"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Steel Structure
          </NavLink>
          {steelStructuresDropDown && (
            <div
            onMouseEnter={()=> setSteelStructuresDropDown(true)}
              onMouseLeave={()=> setSteelStructuresDropDown(false)}
              className="absolute z-10 bg-white shadow-md py-2 rounded-lg text-sm w-96 left-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/steel-frame"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Steel Frame
                    </NavLink>
                    <NavLink
                      to="/steel-building"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Steel Building
                    </NavLink>
                    <NavLink
                      to="/container-homes"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                     Container Homes
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/steel-fabrication"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Steel Fabrication
                    </NavLink>
                    <NavLink
                      to="/metal-frame-staircase"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Metal frame staircase
                    </NavLink>
                  </div>
                </div>
              </div>
                )}
            </div>
            <div className="relative inline">
            <NavLink
            // onMouseEnter={()=> setBlogDropDown(true)}
            // onMouseLeave={()=> setBlogDropDown(false)}
            to="/blog"
            className="block mt-4 lg:inline-block lg:mt-0 text-white    p-2      text-base hover:bg-white hover:text-gray-900 mr-4"
          >
            Blog
          </NavLink>
          
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
              className="absolute z-10 bg-white shadow-md py-2 rounded-sm text-sm w-96 right-0 top-full mt-3">
                <div className="flex">
                  <div className="w-1/2">
                    <NavLink
                      to="/jobs"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Completed Jobs
                    </NavLink>
                    <NavLink
                      to="/reviews"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Reviews
                    </NavLink>
                    <NavLink
                      to="/awards-affiliations"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Awards & Affiliations
                    </NavLink>
                  </div>
                  <div className="w-1/2">
                    <NavLink
                      to="/careers"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Careers
                    </NavLink>
                    <NavLink
                      to="/hours-location"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Hours & Location
                    </NavLink>
                    <NavLink
                      to="/contact-us"
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                    >
                      Contact Us
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
