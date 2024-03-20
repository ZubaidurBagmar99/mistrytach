import Img from "../../../assets/images/hours-location.jpg";
import SideNavHome from "../../Residential/SideNavHome";

const HoursLocation = () => {
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
            Optimal Interior Decoration & Steel Fabrication <br /> Hours &
            Location Fabrication
          </h2>
          <h4 className="text-2xl font-bold mb-6">Business Hours</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="table mb-5">
            <thead>
              <tr className="bg-green-500 text-white font-bold">
                <th>Day</th>
                <th>Open Time</th>
                <th> Close Time</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Monday</td>
                  <td>08:00 AM - 10:00 AM</td>
                  <td>10:00 AM - 12:00 PM</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>08:00 AM - 10:00 AM</td>
                  <td>10:00 AM - 12:00 PM</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>08:00 AM - 10:00 AM</td>
                  <td>10:00 AM - 12:00 PM</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>08:00 AM - 10:00 AM</td>
                  <td>10:00 AM - 12:00 PM</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>08:00 AM - 10:00 AM</td>
                  <td>10:00 AM - 12:00 PM</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>08:00 AM - 10:00 AM</td>
                  <td>10:00 AM - 12:00 PM</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>08:00 AM - 10:00 AM</td>
                  <td>10:00 AM - 12:00 PM</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HoursLocation;
