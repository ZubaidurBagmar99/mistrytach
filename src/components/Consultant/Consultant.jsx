import { Link } from "react-router-dom";


const Consultant = () => {
    return (
        <section className="bg-slate-50 p-20">
            
                <h2 className="text-2xl font-semibold mb-4">Why Interior Design Firm / Consultant?</h2>
                <p className="w-28 font-bold divider divider-success mb-4"></p>
                <p>Most of the people think, that hiring an interior designer or interior firm will be too expensive, or that they’d lose control over the expectation. This is not true. Sometimes, you might need for someone to come in for a couple of hours and give you some really professional advice and ideas. Optimal offers consultations during which we can select new colors, discuss furniture placements, and a lot more. You will be amazed!</p>
            
            <div className="flex ">
                <div className="flex-1 ">
                    <p className="mb-2 mt-6">When you work with a designer:</p>
                    <ul >
                        <li>You are more likely to meet your budget.</li>
                        <li>You are much less likely to make expensive mistakes.</li>
                        <li>You have an expert working with you, someone who will make sure the end result is exactly what you were hoping for.</li>
                        <li>You will save time, headaches, and money.</li>
                    </ul>
                </div>
                <div className="flex-1">
                    <Link to={'/'} className="text-3xl text-blue-700 mb-4" >Service Areas ⤏</Link>
                    <div className="bg-gradient-to-b from-[#20016A] via-[#450C72] to-[#600575]  w-[550px] h-80 mt-4">
                    <div className="m-2 mt-2 pt-2">
                        <button className=" btn btn-outline btn-primary px-4">dhaka</button>
                        <button className=" btn btn-outline-none ml-2">Gazipur</button>
                        <button className=" btn btn-outline-none ml-2">Narsingdi</button>
                    </div>
                    <div className="m-2">
                        <button className=" btn btn-outline-none">Barisal</button>
                        <button className=" btn btn-outline-none ml-2">dhaka</button>
                        <button className=" btn btn-outline-none ml-2">dhaka</button>
                    </div>
                    <div className="m-2">
                        <button className=" btn btn-outline-none">Barisal</button>
                        <button className=" btn btn-outline-none ml-2">dhaka</button>
                        <button className=" btn btn-outline-none ml-2">dhaka</button>
                    </div>
                    <div className="m-2">
                        <button className=" btn btn-outline-none">Barisal</button>
                        <button className=" btn btn-outline-none ml-2">dhaka</button>
                        <button className=" btn btn-outline-none ml-2">dhaka</button>
                    </div>
                    <div className="m-2">
                        <button className=" btn btn-outline-none">Barisal</button>
                        <button className=" btn btn-outline-none ml-2">dhaka</button>
                        <button className=" btn btn-outline-none ml-2">dhaka</button>
                    </div>
                    
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default Consultant;