import HomeInterior from "./HomeInterior";
import SideNavHome from "./SideNavHome";

const Residential = () => {
  return (
    <>
      <div className="flex justify-center">
        <SideNavHome></SideNavHome>
        <div className="w-4/5">
          {" "}
          {/* Adjust the width as per your requirement */}
          <HomeInterior></HomeInterior>
        </div>
      </div>
    </>
  );
};

export default Residential;
