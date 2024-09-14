import webImg1 from "../assets/ecommerce-websites.jpg"
import webImg2 from "../assets/food-ecommerce.jpg";
import webImg3 from "../assets/website-blog.jpg"

export default function Projects(){

    return (
        <section className="flex flex-col py-20 px-5 bg-blue-900 text-white" id="projects">
            <div className="w-1/2">
                <div className="flex justify-center">
                    <h1 className='text-3xl border-b-2 font-bold w-[120px]'>Projects</h1>
                </div>
                
            </div>
            <div className="p-5 w-full">
                <div className="flex flex-col md:flex-row px-10 gap-5">
                    <div className="relative">
                        <img className="h-[200px] w-[500px]" src={webImg1}></img>
                        <div className="absolute left-0 right-0 bottom-0 top-0 bg-blue-500 opacity-0 duration-500 hover:opacity-100">
                            <p className="text-center p-5">Explanation of the project</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="h-[200px] w-[500px]" src={webImg2}></img>
                        <div className="absolute left-0 right-0 bottom-0 top-0 bg-blue-500 opacity-0 duration-500 hover:opacity-100">
                            <p className="text-center p-5">Explanation of the project</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img className="h-[200px] w-[500px]" src={webImg3}></img>
                        <div className="absolute left-0 right-0 bottom-0 top-0 bg-blue-500 opacity-0 duration-500 hover:opacity-100">
                                <p className="text-center p-5">Explanation of the project</p>
                            </div>
                        </div>
                </div>
              
            </div>
        </section>
    )
}