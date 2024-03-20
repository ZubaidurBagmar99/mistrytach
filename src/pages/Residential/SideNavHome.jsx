import { NavLink } from "react-router-dom";

const SideNavHome = () => {
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full ml-12 mr-6 bg-slate-50 text-base-content">
            {/* Sidebar content here */}

            <div className="join join-vertical w-full">
              <NavLink to={"/"} activeClassName="bg-orange-600">
                <div className=" mb-2">
                  <div className="collapse-title btn btn-error">Home</div>
                </div>
              </NavLink>

              <div className="collapse collapse-arrow join-item mb-2">
                <input type="checkbox" name="my-accordion-4" />
                <div className="collapse-title rounded-lg text-black text-center font-semibold bg-orange-600">Residential</div>
                <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
                  <NavLink
                    to={"/home-interior"}
                    className="btn btn-sm mt-1 w-full"
                    activeClassName="bg-orange-600"
                  >
                    Home Interior
                  </NavLink>
                  <NavLink
                    to={"/home-renovation"}
                    className="btn btn-sm mt-1 w-full"
                    activeClassName="bg-orange-600"
                  >
                    Home renovation
                  </NavLink>
                  <NavLink
                    to={"/villa-interior"}
                    className="btn btn-sm mt-1 w-full"
                  >
                    Villa Interior
                  </NavLink>
                  <NavLink
                    to={"/apartments"}
                    className="btn btn-sm mt-1 w-full"
                  >
                    Apartments
                  </NavLink>
                  <NavLink
                    to={"/duplex-house"}
                    className="btn btn-sm mt-1 w-full"
                  >
                    Duplex House
                  </NavLink>
                  <NavLink
                    to={"/loft-interior"}
                    className="btn btn-sm mt-1 w-full"
                  >
                    Loft Interior
                  </NavLink>
                  <NavLink
                    to={"/luxury-pent-house"}
                    className="btn btn-sm mt-1 w-full"
                  >
                    Luxury Penthouse
                  </NavLink>
                  <NavLink
                    to={"/islamic-interior"}
                    className="btn btn-sm mt-1 w-full"
                  >
                    Islamic Interior
                  </NavLink>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item mb-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title rounded-lg text-black text-center font-semibold bg-orange-600">Commercial</div>
                <div className="collapse-content">
                  <NavLink to={"/office-design"} className="btn btn-sm mt-1 w-full">
                    Office Design
                  </NavLink>
                  <NavLink to={"/corporate"} className="btn btn-sm mt-1 w-full">
                  Corporate
                  </NavLink>
                  <NavLink to={"/retail-shop"} className="btn btn-sm mt-1 w-full">
                  Retail Shop - store
                  </NavLink>
                  <NavLink to={"/news-room"} className="btn btn-sm mt-1 w-full">
                  News Room
                  </NavLink>
                  <NavLink to={"/modeling-rendering"} className="btn btn-sm mt-1 w-full">
                  3D Modeling & Rendering
                  </NavLink>
                  <NavLink to={"/baying-house"} className="btn btn-sm mt-1 w-full">
                  Baying House
                  </NavLink>
                  <NavLink to={"/auditorium-design"} className="btn btn-sm mt-1 w-full">
                  Auditorium Interior Design
                  </NavLink>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item mb-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title btn btn-error">Swimming Pool</div>
                <div className="collapse-content">
                  <NavLink to={"/indoor-swimming-pool"} className="btn btn-sm mt-1 w-full">
                  Indoor Swimming Pool
                  </NavLink>
                  <NavLink to={"/outdoor-swimming-pool"} className="btn btn-sm mt-1 w-full">
                  Outdoor Swimming Pool
                  </NavLink>
                  <NavLink to={"/modern-pool"} className="btn btn-sm mt-1 w-full">
                  Modern House with Pools
                  </NavLink>
                  <NavLink to={"/rooftop-swimming-pool"} className="btn btn-sm mt-1 w-full">
                  Rooftop Swimming Pool
                  </NavLink>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item mb-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title btn btn-error">Healthcare</div>
                <div className="collapse-content">
                <NavLink to={"/hospital-space-interior"} className="btn btn-sm mt-1 w-full">
                Hospital Space Interior
                  </NavLink>
                <NavLink to={"/dental-clinic"} className="btn btn-sm mt-1 w-full">
                Dental Clinic Interior
                  </NavLink>
                <NavLink to={"/rehabilitation-clinic"} className="btn btn-sm mt-1 w-full">
                Rehabilitation Center
                  </NavLink>
                <NavLink to={"/healthcare-center"} className="btn btn-sm mt-1 w-full">
                Healthcare Center
                  </NavLink>
                <NavLink to={"/medical-clinic"} className="btn btn-sm mt-1 w-full">
                Medical Clinic
                  </NavLink>
                <NavLink to={"/diagnostic-center"} className="btn btn-sm mt-1 w-full">
                Diagnostics Center
                  </NavLink>
                <NavLink to={"/spa-beauty-parlour"} className="btn btn-sm mt-1 w-full">
                Spa & Beauty Parlour
                  </NavLink>
                <NavLink to={"/bath-house-design"} className="btn btn-sm mt-1 w-full">
                Bath House Design
                  </NavLink>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item mb-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title btn btn-error">Hospitality</div>
                <div className="collapse-content">
                <NavLink to={"/Coffee-shop"} className="btn btn-sm mt-1 w-full">
                 Coffee Shop
                  </NavLink>
                <NavLink to={"/cafeteria"} className="btn btn-sm mt-1 w-full">
                Cafeteria
                  </NavLink>
                <NavLink to={"/restaurant"} className="btn btn-sm mt-1 w-full">
                Restaurant
                  </NavLink>
                <NavLink to={"/fast-food"} className="btn btn-sm mt-1 w-full">
                Fast Food
                  </NavLink>
                <NavLink to={"/resort"} className="btn btn-sm mt-1 w-full">
                Resort / Eco-Resort
                  </NavLink>
                <NavLink to={"/lodge-cabin"} className="btn btn-sm mt-1 w-full">
                Lodge Cabin
                  </NavLink>
                </div>
              </div>
              
              <div className="collapse collapse-arrow join-item mb-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title btn btn-error">Landscape</div>
                <div className="collapse-content">
                <NavLink to={"/interior-landscape-design"} className="btn btn-sm mt-1 w-full">
                Interior Landscape Design
                </NavLink>
                <NavLink to={"/exterior-landscape-design"} className="btn btn-sm mt-1 w-full">
                Exterior Landscape Design
                </NavLink>
                <NavLink to={"/fountain-rooftop-design"} className="btn btn-sm mt-1 w-full">
                Fountain, Rooftop Garden
                </NavLink>
                <NavLink to={"/garden-pond-design"} className="btn btn-sm mt-1 w-full">
                Garden Pond Design
                </NavLink>
                <NavLink to={"/rooftop-garden-design"} className="btn btn-sm mt-1 w-full">
                Rooftop Garden Design
                </NavLink>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item mb-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title btn btn-error">Educational</div>
                <div className="collapse-content">
                <NavLink to={"/school-college-university"} className="btn btn-sm mt-1 w-full">
                  School, Collage, University
                </NavLink>
                <NavLink to={"/recreation-training"} className="btn btn-sm mt-1 w-full">
                  Recreation & Training
                </NavLink>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item mb-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title btn btn-error">Steel Structure</div>
                <div className="collapse-content">
                <NavLink to={"/steel-frame"} className="btn btn-sm mt-1 w-full">
                Steel Frame
                </NavLink>
                <NavLink to={"/steel-building"} className="btn btn-sm mt-1 w-full">
                Steel Building
                </NavLink>
                <NavLink to={"/container-homes"} className="btn btn-sm mt-1 w-full">
                Container Homes
                </NavLink>
                <NavLink to={"/steel-fabrication"} className="btn btn-sm mt-1 w-full">
                Steel Fabrication
                </NavLink>
                <NavLink to={"/metal-frame-staircase"} className="btn btn-sm mt-1 w-full">
                Metal frame staircase
                </NavLink>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item mb-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title btn btn-error">Blog</div>
                <div className="collapse-content">
                <NavLink to={""} className="btn btn-sm mt-1 w-full">
                
                </NavLink>
                </div>
              </div>

              <div className="collapse collapse-arrow join-item mb-2">
                <input type="radio" name="my-accordion-4" />
                <div className="collapse-title btn btn-error">About Us</div>
                <div className="collapse-content">
                <NavLink to={"/jobs"} className="btn btn-sm mt-1 w-full">
                Completed Jobs
                </NavLink>
                <NavLink to={"/reviews"} className="btn btn-sm mt-1 w-full">
                Reviews
                </NavLink>
                <NavLink to={"/awards-affiliations"} className="btn btn-sm mt-1 w-full">
                Awards & Affiliations
                </NavLink>
                <NavLink to={"/careers"} className="btn btn-sm mt-1 w-full">
                Careers
                </NavLink>
                <NavLink to={"/hours-location"} className="btn btn-sm mt-1 w-full">
                Hours & Location
                </NavLink>
                <NavLink to={"/contact-us"} className="btn btn-sm mt-1 w-full">
                Contact Us
                </NavLink>
                </div>
              </div>

            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavHome;
