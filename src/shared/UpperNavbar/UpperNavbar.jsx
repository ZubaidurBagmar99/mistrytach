import Img from "../../assets/images/logo.png";
const UpperNavbar = () => {
  return (
    <div className="container">
      <div className="container sm:ms-8 flex flex-col md:flex-row justify-between bg-white p-5 w-full ">
        <div className="flex items-center border-b md:border-r-2 border-green-500 md:pb-0 pb-5">
          <img src={Img} alt="Logo" className="h-[150px] w-[150px] mr-2" />
        </div>
        <div className="flex flex-col md:flex-row items-center ">
          <div className="mr-4 md:mr-0 md:pr-4">
            <span className="text-red-600">Business Hours & Location</span>{" "}
            <br />
            Everyday: 10:00am - 9:30pm
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mt-5 md:mt-0 md:pl-4 md:border-l-2 border-green-500">
          <div className="mr-4">
            <span className="text-green-500">Talk to an Expert! </span> <br />
            <span className="font-semibold">+880 1838-988493</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
