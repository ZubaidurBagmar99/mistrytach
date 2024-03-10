import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import UpperNavbar from "../shared/UpperNavbar/UpperNavbar";
import Footer from "../shared/footer/footer";


const Main = () => {
    return (
        <div>
            <UpperNavbar></UpperNavbar>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;