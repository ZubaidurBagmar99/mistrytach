// import HomeInterior from "./HomeInterior";
import { Outlet } from "react-router-dom";
// import SideNavHome from "./SideNavHome";
import HomeInterior from "../HomeIniterior/HomeInterior";


const Residential = () => {
  return (
    <>
      <div className="flex ">
        {/* <SideNavHome></SideNavHome> */}
        
          
            <HomeInterior></HomeInterior>
          {/* Adjust the width as per your requirement */}
          {/* <HomeInterior></HomeInterior> */}
          <Outlet></Outlet>
        
      </div>
    </>
  );
};

export default Residential;
