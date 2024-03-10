import { Link } from 'react-router-dom';
import Home from '../../assets/images/home-interior.jpg'
import Office from'../../assets/images/office-interior-design.jpg';
import Hospitality from'../../assets/images/fast-food-interior-design.jpg';
import Public from'../../assets/images/public-administration-buildings.jpg';

const InteriorDesign = () => {
  return (
    <div className="interior-design-section flex items-center justify-between p-24">
      <div className="interior-design-category">
        <h3 className="text-xl font-bold mb-2 text-[#212f69]">Interior Design <br/> <span className='text-3xl'>Category by Services</span> </h3>
        <div className="flex items-center mb-3">
          <img src={Home} alt="Interior Design Category" className="w-36 h-36 mr-4" />
          <div>
          <Link to={'/'} className='text-2xl text-blue-500 underline'>Home Interior ⤏</Link>
          <p className="text-base mr-6">We have some of the best home interior design plans for your dream house. You can check and choose any of the trendy styles based on your liking. However, if you have an out of the box concept, our experts will come up with a way to put life into it!.</p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img src={Office} alt="Interior Design Category" className="w-36 h-36 mr-4" />
          <div>
          <Link to={'/'} className='text-2xl text-blue-500 underline'>Office Interior ⤏</Link>
          <p className="text-base mr-6">We have some of the best home interior design plans for your dream house. You can check and choose any of the trendy styles based on your liking. However, if you have an out of the box concept, our experts will come up with a way to put life into it!.</p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img src={Hospitality} alt="Interior Design Category" className="w-36 h-36 mr-4" />
          <div>
          <Link to={'/'} className='text-2xl text-blue-500 underline'>Hospitality Interior ⤏</Link>
          <p className="text-base mr-6">We have some of the best home interior design plans for your dream house. You can check and choose any of the trendy styles based on your liking. However, if you have an out of the box concept, our experts will come up with a way to put life into it!.</p>
          </div>
        </div>
        <div className="flex items-center mb-3">
          <img src={Public} alt="Interior Design Category" className="w-36 h-36 mr-4" />
          <div>
          <Link to={'/'} className='text-2xl text-blue-500 underline'>Public Space Interior ⤏</Link>
          <p className="text-base mr-6">We have some of the best home interior design plans for your dream house. You can check and choose any of the trendy styles based on your liking. However, if you have an out of the box concept, our experts will come up with a way to put life into it!.</p>
          </div>
        </div>
      </div>
      <div className="interior-projects mt-[-100px]">
        <h3 className="text-xl font-bold mb-8 text-[#212f69] ">Interior Projects <br/> <span className='text-3xl'> Idea to Implementation Process</span></h3>
        <p className="text-base mb-6">In this modern era, interior design is not limited only to the dwelling or an office area. We must pay attention to all types of establishments to ensure the most practical use along with the visual appeal.</p>
        <p className='text-base mb-6'>Arranging a home in a spacious manner is important because we would feel suffocation if it is crammed. We should manage our office space to give the employees a proper sense of responsibility without pressuring them. Similarly, each specific venture requires a different set of interior design plans.</p>
        <p className='text-base mb-6'>From idea development to implementation, we provide an end-to-end interior design experience across residential design, office design, commercial design, retail design, healthcare design, hospitality design, etc. Our service is tailored to your style and budget preferences.</p>
        <div className='flex items-center mt-6'>
            <img src={Home} alt="Interior Design Category" className="w-36 h-36 mr-4" />
            <img src={Office} alt="Interior Design Category" className="w-36 h-36 mr-4" />
            <img src={Hospitality} alt="Interior Design Category" className="w-36 h-36 mr-4" />
            <img src={Public} alt="Interior Design Category" className="w-36 h-36 mr-4" />
        </div>
      </div>
    </div>
  );
};

export default InteriorDesign;
