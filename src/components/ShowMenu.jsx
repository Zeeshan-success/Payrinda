import Navbtn from "./Navbtn";

const ShowMenu = () => {
  return (
    <>
      <div className=" relative   ">
        <div className="flex justify-center bg-black w-3/4 md:w-1/3 py-5 rounded-lg  absolute  right-3  text-white">
          <ul className="  text-center space-y-4 ">
            <li>
              <button className="font-semibold">Home</button>
            </li>
            <li>
              <button className="font-semibold">Our Solutions</button>
            </li>
            <li>
              <button className="font-semibold">How it works</button>
            </li>
            <li>
              <button className="font-semibold">About Us</button>
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
