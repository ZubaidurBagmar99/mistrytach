import Img from "../../assets/images/our-specialties.jpg";

const ChooseUs = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-slate-50 p-10 lg:p-20">
      <div className="lg:mr-10">
        <h1 className="text-3xl font-bold mb-4">Why Choose Us?</h1>
        <div className="mb-6">
          <h4 className="text-xl mb-3 text-blue-500">
            1. Creative Interior Designer ›
          </h4>
          <p className="ml-4">
            The foremost specialty of the Optimal Interior is that it has
            talented designers. We are a team of interior design experts who can
            transform your home, office or any other entity into an outstanding
            place.
          </p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl mb-3 text-blue-500">
            2. Modern Design Ideas ›
          </h4>
          <p className="ml-4">
            Keeping up to date with world trends and providing you with modern
            design solutions is one of our specialties. We are aligned with
            what’s happening in the interior design world and work accordingly.
          </p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl mb-3 text-blue-500">3. Turnkey Project ›</h4>
          <p className="ml-4">
            Turnkey (or turn-key) is a term typically used with reference to
            construction projects for which the developer undertakes the whole.
            Our modes of carrying any design project is a turnkey project.
          </p>
        </div>
        <div className="mb-6">
          <h4 className="text-xl mb-3 text-blue-500">
            4. Latest Technologies ›
          </h4>
          <p className="ml-4">
            Keeping updated with the latest technologies is very important in
            the interior design industry. We are endowed with the latest
            technologies and equipment that help us make innovative designs.
          </p>
        </div>
        <div>
          <h4 className="text-xl mb-3 text-blue-500">5. Affordable Cost ›</h4>
          <p className="ml-4">
            We offer our service at an affordable price. Our optimized process,
            experiences, and expertise enable us to provide you with quality
            services at an affordable price. Spend less and get the most here.
          </p>
        </div>
      </div>
      <div className="lg:ml-10 flex justify-center">
        <img src={Img} alt="" className="w-full lg:w-[900px] h-auto" />
      </div>
    </section>
  );
};

export default ChooseUs;
