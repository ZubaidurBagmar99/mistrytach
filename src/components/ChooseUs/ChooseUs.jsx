import Img from "../../assets/images/our-specialties.jpg";

const ChooseUs = () => {
    return (
        <section>
            <div className="flex items-center  bg-slate-50 p-20">
                <div className="mr-6">
                    <h1 className="text-3xl font-bold mb-4">Why Choose Us?</h1>
                    <h4>1. <span className="text-xl mb-3 text-blue-500">Creative Interior Designer ›</span> </h4>
                    <p className="mb-3 ml-4">The foremost specialty of the Optimal Interior is that it has talented designers. We are a team of interior design experts who can transform your home, office or any other entity into an outstanding place.</p>
                    <h4>2. <span className="text-xl mb-3 text-blue-500">Modern Design Ideas ›</span> </h4>
                    <p className="mb-3 ml-4">Keeping up to date with world trends and providing you with modern design solutions is one of our specialties. We are aligned with what’s happening in the interior design world and work accordingly.</p>
                    <h4>3. <span className="text-xl mb-3 text-blue-500">Turnkey Project ›</span> </h4>
                    <p className="mb-3 ml-4">Turnkey (or turn-key) is a term typically used with reference to construction projects for which the developer undertakes the whole. Our modes of carrying any design project is a turnkey project.</p>
                    <h4>4. <span className="text-xl mb-3 text-blue-500">Latest Technologies ›</span> </h4>
                    <p className="mb-3 ml-4">Keeping updated with the latest technologies is very important in the interior design industry. We are endowed with the latest technologies and equipment that help us make innovative designs.</p>
                    <h4>5. <span className="text-xl mb-3 text-blue-500">Affordable Cost  ›</span> </h4>
                    <p className="mb-3 ml-4">We offer our service at an affordable price. Our optimized process, experiences, and expertise enable us to provide you with quality services at an affordable price. Spend less and get the most here.</p>
                </div>
                <div>
                    <img src={Img} alt=""className="w-[900px] h-[570px] " />
                </div>
            </div>
        </section>
    );
};

export default ChooseUs;