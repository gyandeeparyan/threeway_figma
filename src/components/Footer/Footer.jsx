import LogoWhite from '../../../public/assets/853_rectangle.svg'
import { footerItems } from '../../utils/constants'
const Footer = () => {
  return (
  <footer className="bg-brand-coal px-20 w-screen  z-[20] absolute top-[2200px] h-[400px] flex ">
<div className='flex ml-5'>
<div className='my-5 mx-5 ml-10 mt-14'>
<h2 className='text-brand-yellow-muted text-xl'>  COMPANY</h2>
{footerItems?.company.map((item) => {return(
<p key={item} className='text-brand-white text-lg my-2'>{item}</p>
)})}
</div>
<div className='my-5 mx-5 mt-14 '>
<h2 className='text-brand-yellow-muted text-xl'>  DEATOX +</h2>
{footerItems?.detox.map((item) => {return(
<p key={item} className='text-brand-white text-lg my-2'>{item}</p>
)})}
</div>

<div className='my-5 mx-5 mt-14'>
<h2 className='text-brand-yellow-muted text-xl'>  CONTACT US</h2>
{footerItems?.contact.map((item) => {return(
<p key={item} className='text-brand-white text-lg my-2'>{item}</p>
)})}
</div>
</div>


<div className=''>
<img src={LogoWhite} alt="logo" width={300} className='mt-2 ml-[350px]' />
</div>
  </footer>
  )
}

export default Footer