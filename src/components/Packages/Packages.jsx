import Logo from '../../../public/assets/867_group.png'
import { packages } from '../../utils/constants';
import Button from '../Button';
const Packages = () => {
  return <div className='container absolute left-[175px] z-[20] top-[1500px]'>
<h1 className="font-bold ml-1 font-Oswald text-brand-white text-5xl">DEATOX</h1>
<h1 className=" text-brand-yellow-primary font-oswa text-5xl">PACKAGE</h1>

<div className='flex '>
<div className="bg-brand-yellow-primary w-[260px] mt-8 -left-[25px] h-[420px] absolute z-[20]">
<img src={Logo} alt="logo" width={60} className='px-4 py-2 mt-4 ml-2' />

<div className='border-b-[2px] ml-5 py-3 border-brand-coal w-[80%] '>
<p className='font-bold text-xl text-brand-white'>{packages?.monthly?.type}</p>
<p className='text-brand-coal text-3xl'>{packages?.monthly?.price}</p>
</div>
<div className='px-6 py-2'>
{packages?.monthly?.features.map((feature) => {return(
  <ul key={feature}>
    <li className='text-sm my-3 text-brand-coal'>• {feature}</li>
  </ul>
)})}
</div>
<Button text={"GET NOW"} className='bg-brand-coal ml-12 py-1 px-8'/>
</div>

<div className="bg-brand-yellow-primary w-[260px] mt-8 left-[280px] h-[420px] absolute z-[20]">
<img src={Logo} alt="logo" width={60} className='px-4 py-2 mt-4 ml-2' />

<div className='border-b-[2px] ml-5 py-3 border-brand-coal w-[80%] '>
<p className='font-bold text-xl text-brand-white'>{packages?.yearly?.type}</p>
<p className='text-brand-white line-through inline  text-3xl'>{packages?.yearly?.price} </p><span className='text-brand-coal  text-2xl'>{packages?.yearly?.price}</span>
</div>
<div className='px-6 py-2'>
{packages?.monthly?.features.map((feature) => {return(
  <ul key={feature}>
    <li className='text-sm my-3 text-brand-coal'>• {feature}</li>
  </ul>
)})}
</div>
<Button text={"GET NOW"} className='bg-brand-coal ml-12 py-1 px-8'/>
</div>

<div className="bg-brand-white w-[260px] mt-8 left-[580px] h-[420px] absolute z-[20]">
<img src={Logo} alt="logo" width={60} className='px-4 py-2 mt-4 ml-2' />

<div className='border-b-[2px] ml-5 py-3 border-brand-yellow-primary w-[80%] '>
<p className='font-bold text-xl mb-9 text-brand-coal'>{packages?.enterprise?.type}</p>

</div>
<div className='px-6 py-2'>
<p className='text-brand-coal text-sm'>{packages?.enterprise?.description}</p>
<p className='text-brand-coal text-sm'>{packages?.enterprise?.descriptionSecond}</p>
</div>
<Button text={"CONTACT US"} className='bg-brand-yellow-primary mt-24 ml-12 py-1 px-8'/>
</div>
</div>


  </div>;
};

export default Packages;
