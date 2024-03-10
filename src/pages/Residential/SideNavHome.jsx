
const SideNavHome = () => {

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-slate-50 text-base-content">
            {/* Sidebar content here */}


            <li className="bg-red-600 rounded-lg text-white mb-1">
              <a>Home Interior</a>
            </li>
            <li className="bg-red-600 rounded-lg text-white">
              <a>Home Renovation</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNavHome;
