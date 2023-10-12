import { features } from "../../utils/constants";
import Button from "../Button";

const Features = () => {
  return (
    <div className='container absolute left-[175px] z-[20] top-[800px]'>
      <h1 className='text-brand-yellow-primary text-5xl '>FEATURES</h1>

      <div className='bg-brand-white mt-4 w-[80%] h-[480px] flex'>
        <div className='w-1/2 ml-4 px-12 mt-[10px]'>
          {features?.featuresFirst.map((feature) => {
            return (
              <div
                key={feature.title}
                className='border-l-[4px] my-10 border-brand-yellow-primary px-2 py-1'>
                <h1 className='text-brand-coal font-bold text-2xl'>{feature.title}</h1>
                <p className='text-brand-coal text-sm'>{feature.description}</p>
              </div>
            );
          })}
        </div>
        <div className='w-1/2  ml-4 px-12 mt-[10px]'>
        {features?.featuresSecond.map((feature) => {
            return (
              <div
                key={feature.title}
                className='border-l-[4px] mt-10 border-brand-yellow-primary px-2 py-1'>
                <h1 className='text-brand-coal font-bold text-2xl'>{feature.title}</h1>
                <p className='text-brand-coal text-sm'>{feature.description}</p>
              </div>
            );
          })}
           <div
               
                className='-ml-2 mt-2 px-2 py-1'>
                <h1 className='text-brand-yellow-primary font-bold text-2xl'>{features?.title}</h1>
                <p className='text-brand-coal text-sm'>{features?.description}</p>
              </div>
              <Button text={"TRY NOW"} className="bg-brand-yellow-primary text-brand-coal px-3 py-1 mt-4"/>
        </div>
      </div>
    </div>
  );
};

export default Features;
