import Img from '../../assets/images/logo.png';
const UpperNavbar = () => {
  return (
    <div className="flex justify-between bg-white p-5">
      <div className="flex items-center">
        <img src={Img} alt="Logo" className="h-[150px] w-[150px] mr-2" />
      </div>
      <div className="border-l border-gray-400 mx-4 h-10"></div>
      <div className="flex items-center">
        <div className="mr-4">
          <span className="text-red-600">Business Hours & Location</span> <br />
          Everyday: 10:00am - 9:30pm
        </div>
      </div>
      {/* <div className="border-l border-gray-400 mx-4 h-10"></div> */}
      <div className='border-l-2 border-green-500'>
        <div className="mr-4 pl-4">Talk to an Expert! <br /> <span className="font-semibold">+880 1838-988493</span> </div>
      </div>
    </div>
  );
};

export default UpperNavbar;
