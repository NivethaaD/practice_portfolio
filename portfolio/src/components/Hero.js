import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter ,AiOutlineFacebook,AiOutlineLinkedin} from "react-icons/ai";

export default function Hero (){

    return(
        <section className='bg-blue-900 py-32 flex flex-col md:flex-row'>
            <div className='md:w-1/2 flex flex-col px-5'>
                <h1 className='text-6xl p-8 text-white'>Hi ,Im <span className='text-yellow-700'>Nivethaa D</span> 
                     <p className='mt-3 text-4xl'><i>Im a Developer</i></p>
                </h1>
                <div className='flex p-8 mt-1'>
                    <a className='pr-5 hover:text-white' href='#'><AiOutlineTwitter size={40}/></a>
                    <a  className='pr-5  hover:text-white' href='#'><AiOutlineFacebook size={40}/></a>
                    <a className=' hover:text-white' href='#'><AiOutlineLinkedin size={40}/></a>
                </div>
            </div>
            <img className=" md:w-1/3 " src={HeroImg}></img>
        </section>
    )

}