
import AboutImg from '../assets/about.png'
export default function About(){
    return (
        <section className=' p-3 flex flex-col md:flex-row bg-blue-500' id="about">
            <div className='md:w-1/2 py-5'>
                <img src={AboutImg}></img>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-3xl border-b-2 font-bold'>About me</h1>
                    <p className='mt-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, culpa?</p>
                </div>
            </div>
        </section>
    )

}