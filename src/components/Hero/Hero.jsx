import HeroImg from "../../../public/assets/853_rectangle.svg";
import Coffee from "../../../public/assets/857_ellipse.svg";
import Food from "../../../public/assets/855_ellipse.svg";
import Girl from "../../../public/assets/856_ellipse.svg";
import Yoga from "../../../public/assets/858_ellipse.svg";
import Shoe from "../../../public/assets/859_ellipse.svg";
import Check from "../../../public/assets/Check.svg";
import { hero } from "../../utils/constants";
import Button from "../Button";

const Hero = () => {
  return (
    <div className='container'>
      {/* IMAGES */}

      <div>
        <div className='w-[300px] h-[300px] absolute rounded-full mt-[180px] ml-[135px] border-[5px] z-10 border-brand-yellow-primary  '></div>

        <div className='w-[350px] h-[350px] absolute rounded-full mt-[155px] ml-[110px] border-[5px] z-10 border-brand-yellow-primary border-opacity-80'></div>
        <div className='w-[400px] h-[400px] absolute rounded-full mt-[125px] ml-[85px] border-[5px] z-10 border-brand-yellow-primary border-opacity-60 '></div>
        <div className='w-[450px] h-[450px] absolute rounded-full mt-[100px] ml-[60px] border-[5px] z-10 border-brand-yellow-primary border-opacity-40 '></div>
        <div className='w-[500px] h-[500px] absolute rounded-full mt-[75px] ml-[35px] border-[5px] z-10 border-brand-yellow-primary border-opacity-20'></div>
<img src={Coffee} className="absolute z-[20] -left-[10px] top-[244px] " width={80} alt="" />
<img src={Food} className="absolute z-[20] right-[850px] top-[424px] " width={100} alt="" />
<img src={Girl} className="absolute z-[20] left-[170px] top-[464px] " width={100} alt="" />
<img src={Yoga} className="absolute z-[20] left-[350px] top-[144px] " width={100} alt="" />
<img src={Shoe} className="absolute  z-[20] left-[170px] top-[64px] " width={140} alt="" />
 
        
        
        
        
        <img
          src={HeroImg}
          alt='hero-img'
          width={250}
          className='absolute mt-[200px] z-[10] ml-[160px]'
        />
      </div>
      {/* TEXT CONTENT */}
      <div className="absolute z-[20] mt-[180px] right-[120px] ">
       <h1 className="text-6xl font-bold font-sans text-brand-coal">{hero?.title}</h1>
       
       <h1 className=" text-6xl font-bold font-sans text-brand-coal inline mr-2">{hero?.titleSecond}</h1><span className="text-3xl text-brand-white">{hero?.subtitle}</span>
      <br />
       
      </div>
      <div className="absolute z-[20] w-[50%] mt-[320px] right-[120px] ">
      <p className="text-brand-coal text-lg z-[20]">{hero?.description}</p>
       
      </div>
      <div className="absolute z-[20] w-[50%] mt-[430px] right-[120px] flex ">
      {hero?.features.map((feature)=>{return(
        <>
        <div>
        <img src={Check} alt="check" className="inline mr-2"/>
        <p className="text-brand-coal text-lg z-[20] mr-2 inline">{feature}</p>
        </div>
       
        </>
      )})}

      
       
      </div>
      <Button text={"TRY NOW"} className="absolute z-[20] px-4 py-1 mt-[500px] right-[700px] bg-brand-coal"/>

    </div>
  );
};

export default Hero;
