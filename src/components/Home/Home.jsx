import Img from '../../assets/images/banner.jpg'
import ChooseUs from '../ChooseUs/ChooseUs';
import Comments from '../Comment/Comments'
import Consultant from '../Consultant/Consultant';
import Dream from '../Dream/Dream';
import InteriorDesign from '../InteriorDesign/InteriorDesign';
import Project from '../Project/Project';

const Home = () => {
    return (
        <>
        <div className="banner-section relative w-full h-96 shadow-xl">
          <img src={Img} alt="Banner" className="object-cover w-full h-full" />
          <div className="absolute inset-0 flex justify-center items-center text-white text-4xl font-bold">
            {/* <span>Welcome to Our Website</span> */}
          </div>
        </div>
        <Comments></Comments>
        <InteriorDesign></InteriorDesign>
        <Project></Project>
        <ChooseUs></ChooseUs>
        <Dream></Dream>
        <Consultant></Consultant>
        </>
      );
};

export default Home;