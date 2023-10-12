import Logo from "../../../public/assets/867_group.png";
import Button from "../Button";
import { Link } from "react-router-dom";

import { navItems } from "./../../utils/constants";
const Navbar = () => {
  return (
    <nav className='h-[80px] w-full z-[10] absolute'>
      <div>
        <img
          src={Logo}
          alt='logo'
          height={50}
          width={50}
          className='absolute px-2 top-[15px]  ml-[50px] '
        />
      </div>
      <div className="flex">
      <div className='w-full inline-flex ml-[150px] px-2  '>
        {navItems.map((item) => {
          return <p className=" text-[14px] font-[400] text-brand-white mt-[20px] mx-[20px]" key={item.name}>{item.name}</p>;
        })}
      </div>
      <div className='w-[40%] inline-flex mt-[15px] ml-[450px]'>
       
     <Link to={'/signin'}>
     <Button text={"LOGIN"} className="bg-transparent text-[14px] px-[14px] py-2" />
     </Link> 

     <Link to={'/signup'}>
     <Button text={"SIGN UP"} className={"ml-1 px-[14px] text-[14px] py-2 bg-brand-white text-brand-coal"} textColor="text-brand-coal" />
     </Link>
      
      </div>
      </div>
     
    </nav>
  );
};

export default Navbar;
