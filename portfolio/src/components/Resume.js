
import ResumeImg from '../assets/resume.jpg'
export default function Resume(){
    return (
        <section className=' p-3 flex flex-col md:flex-row bg-blue-500' id="resume">
            <div className='md:w-1/2 py-5 flex justify-end'>
                <img className='w-[300px]' src={ResumeImg}></img>
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-3xl border-b-2 font-bold w-[120px]'>Resume</h1>
                    <p className='mt-4 text-xl'>View my resume <a className='bg-blue-900 rounded-xl p-3' href='#'>Download</a></p>
                </div>
            </div>
        </section>
    )

}