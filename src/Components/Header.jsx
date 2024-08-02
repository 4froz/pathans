import React, { useEffect, useState } from "react";
import MenuModal from "./Modals/Menu";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "./Modals/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../Redux/modalSlice";
import { useLocation } from "react-router-dom";
import { COMPANY } from "../consts";

const Header = () => {
  const location = useLocation();
  const [offset, setOffset] = useState(0);
  const [menuModal, setMenuModal] = useState(false);
  const [loginModal, setloginModal] = useState(false);
  const isOpen = useSelector((state) => state.modal.loginModal);
  const dispatch = useDispatch();
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);

    // Add the event listener
    window.addEventListener("scroll", onScroll, { passive: true });

    // Clean up code
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const navigate = useNavigate();

  console.log(userInfo);
  return (
    <>
      <div
        className={`bg-black ${
          location.pathname === "/buynow" && "hidden"
        } py-2 flex flex-row justify-center`}
      >
        <p className="text-white text-sm">
          New Arrivals Festive Collection 2024
        </p>
      </div>
      <div
        className={`flex bg-[#EFEFED] ${
          location.pathname === "/buynow" && "hidden"
        } border-b-[1.5px] p-4 py-4 sm:px-6  flex-row z-50  sticky top-0 w-full  items-center justify-between`}
      >
        <div className="flex flex-row space-x-5 md:space-x-6 items-center">
          <img
            onClick={() => setMenuModal(true)}
            src="data:image/svg+xml,%3Csvg%20class%3D%22icon%20icon-menu%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20role%3D%22presentation%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%3E%0A%09%3Cpath%20d%3D%22M1%2023H47%22%20stroke%3D%22currentColor%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%3E%3C%2Fpath%3E%0A%09%3Cline%20x1%3D%221%22%20y1%3D%2236%22%20x2%3D%2247%22%20y2%3D%2236%22%20stroke%3D%22currentColor%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%3E%3C%2Fline%3E%0A%09%3Cline%20x1%3D%221%22%20y1%3D%2210%22%20x2%3D%2247%22%20y2%3D%2210%22%20stroke%3D%22currentColor%22%20stroke-width%3D%224%22%20stroke-linecap%3D%22round%22%3E%3C%2Fline%3E%0A%3C%2Fsvg%3E"
            alt=""
            className="w-[20px] cursor-pointer object-fill h-[20px]"
          />
          {/* <img
          src="data:image/svg+xml,%3Csvg%20class%3D%22icon%20icon-search%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20role%3D%22presentation%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%3E%0A%09%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M29.3137%2010.2365C35.5621%2016.4849%2035.5621%2026.6155%2029.3137%2032.8639C23.0653%2039.1123%2012.9347%2039.1123%206.68629%2032.8639C0.437903%2026.6155%200.437903%2016.4849%206.68629%2010.2365C12.9347%203.98807%2023.0653%203.98807%2029.3137%2010.2365ZM30.7279%208.82225C37.7574%2015.8517%2037.7574%2027.2487%2030.7279%2034.2781C23.6985%2041.3075%2012.3015%2041.3075%205.27208%2034.2781C-1.75736%2027.2487%20-1.75736%2015.8517%205.27208%208.82225C12.3015%201.79281%2023.6985%201.79281%2030.7279%208.82225ZM34.5779%2034.9792C34.1873%2034.5886%2033.5542%2034.5886%2033.1636%2034.9792C32.7731%2035.3697%2032.7731%2036.0029%2033.1636%2036.3934L44.4774%2047.7071C44.8679%2048.0976%2045.501%2048.0976%2045.8916%2047.7071C46.2821%2047.3166%2046.2821%2046.6834%2045.8916%2046.2929L34.5779%2034.9792Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
          alt=""
          className="w-[20px] cursor-pointer object-fill h-[20px]"
        /> */}
        </div>
        {/* Logo */}
        {/* <img
        className="w-[165px] object-fill h-[12px] sm:h-auto sm:w-[180px] sm:object-contain"
        src={
          "https://www.thecoutureclub.com/cdn/shop/files/TCC_New.png?height=30&v=1671722688"
        }
        alt=""
        srcset=""
      /> */}
        <Link to={"/"}>
          <h1 className="md:text-xl cursor-pointer text-md uppercase font-bold font-[MyFont] text-[#000]">
            {COMPANY}
          </h1>
        </Link>
        <div className="flex flex-row space-x-5 md:space-x-6 items-center">
          <img
            onClick={() =>
              userInfo ? navigate("/profile") : dispatch(openLoginModal())
            }
            src="data:image/svg+xml,%3Csvg%20class%3D%22icon%20icon-user%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20role%3D%22presentation%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%3E%0A%09%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M24%2021.8694C28.9706%2021.8694%2033%2017.8399%2033%2012.8694C33%207.89882%2028.9706%203.86938%2024%203.86938C19.0294%203.86938%2015%207.89882%2015%2012.8694C15%2017.8399%2019.0294%2021.8694%2024%2021.8694ZM24%2023.8694C30.0751%2023.8694%2035%2018.9445%2035%2012.8694C35%206.79425%2030.0751%201.86938%2024%201.86938C17.9249%201.86938%2013%206.79425%2013%2012.8694C13%2018.9445%2017.9249%2023.8694%2024%2023.8694Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%09%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M42%2045.9117V45.9117C42%2045.9605%2041.9603%2046%2041.9114%2046H6.0886C6.03972%2046%206%2045.9605%206%2045.9117V45.9117C6%2036.0277%2014.0505%2028%2024%2028C33.9495%2028%2042%2036.0277%2042%2045.9117ZM42.8956%2048V48C43.4615%2048%2043.9394%2047.5727%2043.9702%2047.0076C43.99%2046.6448%2044%2046.2794%2044%2045.9117C44%2034.9148%2035.0457%2026%2024%2026C12.9543%2026%204%2034.9148%204%2045.9117C4%2046.2794%204.01001%2046.6447%204.02978%2047.0075C4.06057%2047.5727%204.53848%2048%205.10443%2048V48H6.1211H41.8789H42.8956Z%22%20fill%3D%22currentColor%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
            alt=""
            className="w-[20px] cursor-pointer object-fill h-[20px]"
          />
          {/* <div className="relative w-[20px] cursor-pointer Fh-[20px]">
          <img
            src="data:image/svg+xml,%3Csvg%20class%3D%22icon%20icon-cart%22%20aria-hidden%3D%22true%22%20focusable%3D%22false%22%20role%3D%22presentation%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%20fill%3D%22none%22%3E%0A%09%3Cpath%20d%3D%22M41%2017H7C5.89543%2017%205%2017.8954%205%2019V45C5%2046.1046%205.89543%2047%207%2047H41C42.1046%2047%2043%2046.1046%2043%2045V19C43%2017.8954%2042.1046%2017%2041%2017Z%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%09%3Cpath%20d%3D%22M15%2013V10C15%207.61305%2015.9482%205.32387%2017.636%203.63604C19.3239%201.94821%2021.6131%201%2024%201C26.3869%201%2028.6761%201.94821%2030.364%203.63604C32.0518%205.32387%2033%207.61305%2033%2010V13%22%20stroke%3D%22currentColor%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E"
            alt=""
            className=" w-full h-full object-fill "
          />
          <div className="absolute flex bg-stone-800 -top-1 -right-2 w-4 h-4 justify-center items-center rounded-full">
            <span className="text-white text-xs">2</span>
          </div>
        </div> */}
        </div>
      </div>
      <MenuModal loginModal={menuModal} setLoginModal={setMenuModal} />
      <LoginModal loginModal={isOpen} setLoginModal={setloginModal} />
    </>
  );
};

export default Header;
