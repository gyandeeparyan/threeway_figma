import animatedImage from "../../public/assets/helix.svg";
import { Button } from "../components";
import icons from "../../public/assets/382_group.svg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className='container flex h-screen'>
      <div className='w-1/2 bg-brand-yellow-muted  h-[800px]'>
        <img
          src={animatedImage}
          alt='animated image'
          className='absolute -left-[80px]'
        />
      </div>
      <div className='w-1/2 h-screen  '>
        <h1 className='text-brand-coal mt-8 ml-[200px] text-2xl'>Welcome !</h1>
        <br />
        <label
          htmlFor='email'
          className='mt-8 ml-[200px] text-brand-gray-muted '>
          Email Adress
        </label>
        <input
          type='email'
          placeholder='umartinez@gmail.com'
          className='w-[400px] px-4 placeholder:px-4 h-[50px] mt-2 ml-[200px] border-2 mb-5 border-brand-gray-muted rounded-md'
        />

        <label
          htmlFor='password'
          className='mt-8 ml-[200px] text-brand-gray-muted '>
          Password
        </label>
        <input
          type='password'
          placeholder='••••••••••'

          className='w-[400px] px-4 placeholder:px-4 h-[50px] mt-2 ml-[200px] border-2 mb-2 border-brand-gray-muted rounded-md'
        />
        <p className='w-[400px]  h-[50px] mt-2 ml-[200px] text-brand-gray-muted  '>
          Password must be at least 8 characters long.
        </p>

        <label
          htmlFor='password'
          className='mt-8 ml-[200px] text-brand-gray-muted '>
          Confirm your password
        </label>
        <input
          type='password'
          placeholder='••••••••••'
          className='w-[400px] px-4 placeholder:px-4 h-[50px] mt-2 ml-[200px] border-2 mb-5 border-brand-gray-muted rounded-md'
        />

        <p className='w-[400px]  h-[50px] mt-2 ml-[220px] text-brand-gray-muted  '>
          By signing up you agree with{" "}
          <span className='text-brand-blue'>terms and conditions</span>{" "}
        </p>

        <Button
          className={
            "px-4 py-2 w-[60%] bg-brand-yellow-muted mt-2 mb-2 ml-[210px] text-brand-coal"
          }
          text='Sign up'
          textColor='text-brand-coal'
        />

        <p className='w-[400px]  h-[50px] mt-2 ml-[370px] text-brand-gray-muted  '>
          Or Sign with{" "}
        </p>

        <div>
          <img src={icons} className='mt-2 ml-[280px] mb-2' alt='icons' />
        </div>

        <p className='text-brand-coal text-lg inline mt-3 ml-[280px]'>
          Already have an account?
        </p>
       <Link to={'/signin'}><span className='text-brand-blue text-xl'>Log in</span></Link> 
      </div>
    </div>
  );
};

export default Signup;
