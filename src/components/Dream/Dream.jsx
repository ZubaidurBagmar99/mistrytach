import Img from "../../assets/images/process.png";

const Dream = () => {
    return (
        <section>
            <div className="flex items-center p-16">
                <div className="flex-initial w-[500px] gap-4 mt-[-300px]">
                    <img src={Img} alt="" className="w-[550px] h-[500px]" />
                </div>
                <div className="ml-8 flex-initial w-[700px]">
                    <h3 className="text-xl mb-6">How We Create <br /><span className="text-3xl font-bold">Your Dream Living Space</span></h3>
                    <p className="mb-4">Designing your home or office in a way that creates a symphony inside takes organized efforts. We have a defined process of how to create and deliver the right design to you. First of all, we listen to your requirements carefully, that guide us in making a design of your choice.</p>
                    <h4>1. <span className="text-xl mb-3 text-blue-500">Meeting with Client ›</span></h4>
                    <p className="mb-3 ml-4">In this stage, we get detailed requirements for the work. Interior designers including the project manager attend this meeting to get to know the requirements well. The client shares whatever he/she needs.</p>
                    <h4>2. <span className="text-xl mb-3 text-blue-500">Project Visit ›</span></h4>
                    <p className="mb-3 ml-4">We visit your project to think about how we can make it an awesome place to live or work at. It gives us a better understanding of the project and it helps us come up with some unique ideas for designing it.</p>
                    <h4>3. <span className="text-xl mb-3 text-blue-500">Space Planning ›</span></h4>
                    <p className="mb-3 ml-4">Planning and setting goals take place in this stage. We prepare a plan and share it with the clients to make sure they are updated about what he/she is going to have. We also set milestones.</p>
                    <h4>4. <span className="text-xl mb-3 text-blue-500">Understanding & Meeting Client Expectations ›</span></h4>
                    <p className="mb-3 ml-4">This is one of the core stages of the entire process. Our designers engage and create designs that meet your requirements. The core designers collaborate with others in the team to make sure everything is on track.</p>
                    <h4>5. <span className="text-xl mb-3 text-blue-500">Get Client Approval ›</span></h4>
                    <p className="mb-3 ml-4">We submit the design to you so you can have a look at the design before we install it and give your feedback on it. We take your feedback to modify the design and work on it again accordingly.</p>
                    <h4>6. <span className="text-xl mb-3 text-blue-500">Project Installation ›</span></h4>
                    <p className="mb-3 ml-4">We implement the design in the spot with a proper setup. The operations team does this job while the project manager visits it to see if it’s going on in the right way. Thus, you get an impressive design.</p>
                </div>
            </div>
        </section>
    );
};

export default Dream;