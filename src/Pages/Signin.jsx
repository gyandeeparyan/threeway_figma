
import { Button } from "../../src/components/index";
import { signupContent } from "../utils/constants";
import Check from '../../public/assets/Check.svg'
import LogoBlack from '../../public/assets/760_rectangle.svg'
const Signin = () => {
  return (
    <div className='container flex h-screen'>
      <div className='w-1/2 bg-brand-yellow-muted  h-[800px]'>
       <h1 className="text-brand-dark-gray text-4xl mt-7 mb-8 font-bold text-center">{signupContent?.heading}</h1>
     
      <p className="text-brand-coal mb-2 px-10 text-sm">{signupContent?.description}</p>
      <p className="text-brand-coal  mb-6 px-10 text-sm">{signupContent?.descriptionSecond}</p>
   
     {signupContent?.features.map((feature)=>{return(
      <>
      <div className="px-14 ">
        <div className="inline-block">
        <img src={Check} alt="check" className="inline mr-2" />
        </div>

<p className="text-brand-dark-gray px-4 text-left inline text-md font-bold">{feature}</p>
      </div>

      

      </>
     )})}
     <div>
        <img src={LogoBlack}className="mt-10 ml-[200px]" alt={"logo-black"} />
      </div>
      </div>
      <div className='w-1/2 h-screen  '>
        <h1 className='text-brand-coal mt-8 ml-[200px] text-2xl'>Enterprise Plan Request</h1>
        <br />
        <label
          htmlFor='name'
          className='mt-8 ml-[200px] text-brand-gray-muted '>
          Full Name
        </label>
        <input
          type='text'
          
          className='w-[400px] px-4 placeholder:px-4 h-[50px] mt-2 ml-[200px] border-2 mb-5 border-brand-gray-muted rounded-md'
        />

        <label
          htmlFor='text'
          className='mt-8 ml-[200px] text-brand-gray-muted '>
          Company Name
        </label>
        <input
          type='text'
          

          className='w-[400px] px-4 placeholder:px-4 h-[50px] mt-2 ml-[200px] border-2 mb-2 border-brand-gray-muted rounded-md'
        />
       
        <label
          htmlFor='email'
          className='mt-8 ml-[200px] text-brand-gray-muted '>
          Email Adress
        </label>
        <input
          type='email'
        
          className='w-[400px] px-4 placeholder:px-4 h-[50px] mt-2 ml-[200px] border-2 mb-5 border-brand-gray-muted rounded-md'
        />

<label
          htmlFor='phone'
          className='mt-8 ml-[200px] text-brand-gray-muted '>
          Phone Number
        </label>
        <input
          type='number'
        
          className='w-[400px] px-4 placeholder:px-4 h-[50px] mt-2 ml-[200px] border-2 mb-5 border-brand-gray-muted rounded-md'
        />
        
        <label
          htmlFor='remarks'
          className='mt-8 ml-[200px] px-4 text-brand-gray-muted '>
          Remarks
        </label>
        <input
          type='text'
        
          className='w-[400px] px-4 placeholder:px-4 h-[150px] mt-2 ml-[200px] border-2 mb-5 border-brand-gray-muted rounded-md'
        />

        <Button
          className={
            "px-4 py-2 px-4 w-[60%] bg-brand-yellow-muted mt-2 mb-2 ml-[210px] text-brand-coal"
          }
          text='SUBMIT'
          textColor='text-brand-coal'
        />

      </div>
    </div>
  );
};

export default Signin;
