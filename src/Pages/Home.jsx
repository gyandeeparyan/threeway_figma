import { Features, Footer, Hero, Navbar ,Packages} from "../components/index";


const Home = () => {
  return <div className="bg-gradient-to-t from-brand-coal to-brand-yellow-primary w-screen h-[2300px] ">
<div className="bg-brand-coal w-[270px] left-[150px] absolute z-[1] h-[2048px]">

</div>
<Navbar/>
<Hero/>
<Features/>
<Packages/>
<Footer/>

  </div>;
};

export default Home;
