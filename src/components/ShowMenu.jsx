import Navbtn from "./Navbtn";

const ShowMenu = ({ showmenu, scrollonclick }) => {
  return (
    <>
      <div className=" relative   ">
        <div className="flex justify-center bg-black z-50 w-60 md:w-1/3 py-5 rounded-lg  absolute  right-3  text-white">
          <ul className="  text-center space-y-4 ">
            <li>
              <button
                onClick={() => {
                  scrollonclick("home");
                  showmenu();
                }}
                className="font-semibold"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollonclick("our_solution");
                  showmenu();
                }}
                className="font-semibold"
              >
                Our Solutions
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollonclick("how_it_work");
                  showmenu();
                }}
                className="font-semibold"
              >
                How it works
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollonclick(about_us);
                  showmenu();
                }}
                className="font-semibold"
              >
                About Us
              </button>
            </li>
            <li>
              <Navbtn />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowMenu;
