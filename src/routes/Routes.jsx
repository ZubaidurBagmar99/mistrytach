import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import Residential from "../pages/Residential/Residential";
import HomeInterior from "../pages/HomeIniterior/HomeInterior";
import HomeRenovation from "../pages/HomeRenovation/HomeRenovation";
import VillaInterior from "../pages/VillaInterior/VillaInterior";
import Apartments from "../pages/Apartments/Apartments";
import DuplexHouse from "../pages/DuplexHouse/DuplexHouse";
import LoftInterior from "../pages/LoftInterior/LoftInterior";
import LuxuryPentHouse from "../pages/LuxuryPentHouse/LuxuryPentHouse";
import IslamicInterior from "../pages/IslamicInterior/IslamicInterior";
import Commercial from "../pages/Commercials/Commercial/Commercial";
import OfficeDesign from "../pages/Commercials/OfficeDesign/OfficeDesign";
import Corporate from "../pages/Commercials/Corporate/Corporate";
import RetailShop from "../pages/Commercials/RetailShop/RetailShop";
import NewsRoom from "../pages/Commercials/NewsRoom/NewsRoom";
import ModelingRendering from "../pages/Commercials/ModelingRendering/ModelingRendering";
import BayingHouse from "../pages/Commercials/BayingHouse/BayingHouse";
import AuditoriomDesign from "../pages/Commercials/AuditoriumDesign/AuditoriomDesign";
import SwimmingPool from "../pages/SwimmingPool/SwimmingPool/SwimmingPool";
import IndoorSwimmingPool from "../pages/SwimmingPool/IndoorSwimmingPool/IndoorSwimmingPool";
import OutdoorSwimmingPool from "../pages/SwimmingPool/OutdoorSwimmingPool/OutdoorSwimmingPool";
import ModernPool from "../pages/SwimmingPool/ModernPool/ModernPool";
import RooftopPool from "../pages/SwimmingPool/RooftopPool/RooftopPool";
import HealthCare from "../pages/HealtlCare/HealthCare/HealthCare";
import HospitalSpaceInterior from "../pages/HealtlCare/HospitalSpaceInterior/HospitalSpaceInterior";
import DentalClinic from "../pages/HealtlCare/DentalClinic/DentalClinic";
import Rehabilitation from "../pages/HealtlCare/Rehabilitation/Rehabilitation";
import HealthcareCenter from "../pages/HealtlCare/HealthcareCenter/HealthcareCenter";
import MedicalClinic from "../pages/HealtlCare/MedicalClinic/MedicalClinic";
import DiagnosticsCenter from "../pages/HealtlCare/DiagnosticsCenter/DiagnosticsCenter";
import SpaBeautyParlor from "../pages/HealtlCare/SpaBeautyParlour/SpaBeautyParlor";
import BathHouseDesign from "../pages/HealtlCare/BathHouseDesign/BathHouseDesign";
import Hospitality from "../pages/Hospitality/Hospitality/Hospitality";
import CoffeeShop from "../pages/Hospitality/CoffeeShop/CoffeeShop";
import Cafeteria from "../pages/Hospitality/Cafeteria/Cafeteria";
import Restaurant from "../pages/Hospitality/Restaurant/Restaurant";
import FastFood from "../pages/Hospitality/FastFood/FastFood";
import Resort from "../pages/Hospitality/Resort/Resort";
import LodgeCabin from "../pages/Hospitality/LodgeCabin/LodgeCabin";
import Landscape from "../pages/Landscape/Landscape/Landscape";
import InteriorLandscapeDesign from "../pages/Landscape/InteriorLandscapeDesign/InteriorLandscapeDesign";
import ExteriorLandscapeDesign from "../pages/Landscape/ExteriorLandscapeDesign/ExteriorLandscapeDesign";
import FountainRooftopGarden from "../pages/Landscape/FountainRooftopGarden/FountainRooftopGarden";
import GardenPondDesign from "../pages/Landscape/GardenPondDesign/GardenPondDesign";
import RooftopGardenDesign from "../pages/Landscape/RooftopGardenDesign/RooftopGardenDesign";
import Education from "../pages/Education/Education/Education";
import SchoolCollageUniversity from "../pages/Education/SchoolCollageUniversity/SchoolCollageUniversity";
import RecreationTraining from "../pages/Education/RecreationTraining/RecreationTraining";
import SteelStructure from "../pages/SteelStructure/SteelStructure/SteelStructure";
import SteelFrame from "../pages/SteelStructure/SteelFrame/SteelFrame";
import SteelBuilding from "../pages/SteelStructure/SteelBuilding/SteelBuilding";
import ContainerHomes from "../pages/SteelStructure/ContainerHomes/ContainerHomes";
import SteelFabrication from "../pages/SteelStructure/SteelFabrication/SteelFabrication";
import MetalFrameStaircase from "../pages/SteelStructure/MetalFrameStaircase/MetalFrameStaircase";
import Blog from "../pages/Blog/Blog";
import AboutUS from "../pages/AboutUs/AboutUS/AboutUS";
import CompletedJobs from "../pages/AboutUs/CompletedJobs/CompletedJobs";
import Reviews from "../pages/AboutUs/Reviews/Reviews";
import AwardsAffiliations from "../pages/AboutUs/AwardsAffiliations/AwardsAffiliations";
import Careers from "../pages/AboutUs/Careers/Careers";
import HoursLocation from "../pages/AboutUs/HoursLocation/HoursLocation";
import ContactUs from "../pages/AboutUs/ContactUs/ContactUs";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      // Residential
      {
        path: "/residential",
        element: <Residential></Residential>,
      },
      {
        path: "/home-interior",
        element: <HomeInterior />,
      },
      {
        path:"/home-renovation",
        element:<HomeRenovation></HomeRenovation>
      },
      {
        path:"/villa-interior",
        element:<VillaInterior></VillaInterior>
      },
      {
        path:"/apartments",
        element:<Apartments></Apartments>
      },
      {
        path:"/duplex-house",
        element:<DuplexHouse></DuplexHouse>
      },
      {
        path:"/loft-interior",
        element:<LoftInterior></LoftInterior>
      },
      {
        path:"/luxury-pent-house",
        element:<LuxuryPentHouse></LuxuryPentHouse>
      },
      {
        path:"/islamic-interior",
        element:<IslamicInterior></IslamicInterior>
      },
      // Commercial
      {
        path:"/commercial",
        element:<Commercial></Commercial>
      },
      {
        path:"/office-design",
        element:<OfficeDesign></OfficeDesign>
      },
      {
        path:"/corporate",
        element:<Corporate></Corporate>
      },
      {
        path:"/retail-shop",
        element:<RetailShop></RetailShop>
      },
      {
        path:"/news-room",
        element:<NewsRoom></NewsRoom>
      },
      {
        path:"/modeling-rendering",
        element:<ModelingRendering></ModelingRendering>
      },
      {
        path:"/baying-house",
        element:<BayingHouse></BayingHouse>
      },
      {
        path:"/auditorium-design",
        element:<AuditoriomDesign></AuditoriomDesign>
      },

      // Swimming pool
      {
        path:"/swimming-pool",
        element:<SwimmingPool></SwimmingPool>
      },
      {
        path:"indoor-swimming-pool",
        element:<IndoorSwimmingPool></IndoorSwimmingPool>
      },
      {
        path:"/outdoor-swimming-pool",
        element:<OutdoorSwimmingPool></OutdoorSwimmingPool>
      },
      {
        path:"/modern-pool",
        element:<ModernPool></ModernPool>
      },
      {
        path:"/rooftop-swimming-pool",
        element:<RooftopPool></RooftopPool>
      },
      // Healthcare
      {
        path:"/healthcare",
        element:<HealthCare></HealthCare>
      },
      {
        path:"/hospital-space-interior",
        element:<HospitalSpaceInterior></HospitalSpaceInterior>
      },
      {
        path:"/dental-clinic",
        element:<DentalClinic></DentalClinic>
      },
      {
        path:"/rehabilitation-clinic",
        element:<Rehabilitation></Rehabilitation>
      },
      {
        path:"/healthcare-center",
        element:<HealthcareCenter></HealthcareCenter>
      },
      {
        path:"/medical-clinic",
        element:<MedicalClinic></MedicalClinic>
      },
      {
        path:"/diagnostic-center",
        element:<DiagnosticsCenter></DiagnosticsCenter>
      },
      {
        path:"/spa-beauty-parlour",
        element:<SpaBeautyParlor></SpaBeautyParlor>
      },
      {
        path:"/bath-house-design",
        element:<BathHouseDesign></BathHouseDesign>
      },
      // Hospitality
      {
        path:"/hospitality",
        element:<Hospitality></Hospitality>
      },
      {
        path:"/Coffee-shop",
        element:<CoffeeShop></CoffeeShop>
      },
      {
        path:"/cafeteria",
        element:<Cafeteria></Cafeteria>
      },
      {
        path: "/restaurant",
        element:<Restaurant></Restaurant>
      },
      {
        path: "/fast-food",
        element: <FastFood></FastFood>
      },
      {
        path: "/resort",
        element: <Resort></Resort>
      },
      {
        path: "/lodge-cabin",
        element: <LodgeCabin></LodgeCabin>
      },
      // Landscape
      {
        path:"/landscape",
        element:<Landscape></Landscape>
      },
      {
        path: "/interior-landscape-design",
        element: <InteriorLandscapeDesign></InteriorLandscapeDesign>
      },
      {
        path: "/exterior-landscape-design",
        element: <ExteriorLandscapeDesign></ExteriorLandscapeDesign>
      },
      {
        path: "/fountain-rooftop-design",
        element: <FountainRooftopGarden></FountainRooftopGarden>
      },
      {
        path: "/garden-pond-design",
        element: <GardenPondDesign></GardenPondDesign>,
      },
      {
        path: "/rooftop-garden-design",
        element: <RooftopGardenDesign></RooftopGardenDesign>
      },
      // Educational
      {
        path:"/educational",
        element:<Education></Education>
      },
      {
        path:"/school-college-university",
        element:<SchoolCollageUniversity></SchoolCollageUniversity>
      },
      {
        path:"/recreation-training",
        element:<RecreationTraining></RecreationTraining>
      },
      // Steel Structures
      {
        path:"/steel-structures",
        element:<SteelStructure></SteelStructure>
      },
      {
        path:"/steel-frame",
        element:<SteelFrame></SteelFrame>
      },
      {
        path: "/steel-building",
        element: <SteelBuilding></SteelBuilding>
      },
      {
        path: "/container-homes",
        element: <ContainerHomes></ContainerHomes>
      },
      {
        path: "/steel-fabrication",
        element: <SteelFabrication></SteelFabrication>
      },
      {
        path: "/metal-frame-staircase",
        element: <MetalFrameStaircase></MetalFrameStaircase>
      },
      // Blog
      {
        path:"/blog",
        element:<Blog></Blog>
      },
      // About Us
      {
        path:"/about-us",
        element:<AboutUS></AboutUS>
      },
      {
        path: "/jobs",
        element: <CompletedJobs></CompletedJobs>
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>
      },
      {
        path: "/awards-affiliations",
        element: <AwardsAffiliations></AwardsAffiliations>
      },
      {
        path: "/careers",
        element: <Careers></Careers>
      },
      {
        path: "/hours-location",
        element: <HoursLocation></HoursLocation>
      },
      {
        path: "/contact-us",
        element: <ContactUs></ContactUs>
      },
    ],
  },
]);

export default router;
