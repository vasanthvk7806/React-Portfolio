import ProjectImg from '../assets/mern.jpeg';
import ProjectImg2 from '../assets/portfolio.png';
import ProjectImg3 from '../assets/ecomm project.png';



export default function Project() {
    const config = {
        projects: [
            {
                image: ProjectImg,
                description: 'Simple CURD Operation project.',
                link: 'https://github.com/vasanthvk7806/React-CURD'
            },
            {
                image: ProjectImg2,
                description: 'Potrfolio Website using react,TailwindCSS.',
                link: 'https://github.com/vasanthvk7806/React-Portfolio'
            },
            {
                image: ProjectImg3,
                description: 'React Ecommerce website using MEARN.',
                link: 'https://github.com/vasanthvk7806/React-Ecommerce'
            }

        ]
    }


    return (
        <section id='project' className=" flex flex-col px-5 py-10 justify-center bg-secondary">
            <div className="w-full  text-white">
                <div className='flex flex-col px-10 py-5'>
                    <h1 className='text-4xl  w-[130px]  border-b-4 border-[orange] mb-5'>Projects</h1>
                    <p className='text-2xl'>There are some of my best project</p>
                </div>

            </div>

            <div className='w-full  text-white text-2xl'>
                <div className='flex flex-col md:flex-row px-10 py-5 gap-5'>
                    {config.projects.map((project) => (
                        <a href={project.link}>
                          <div className='relative'>
                            <img className='h-[300px] w-[500px]' alt='ecomm' src={project.image} />
                            <div className='project-image'>
                                <p className='text-center px-5 py-5 '>{project.description}</p>
                                <div className='text-center py-10'><a className='btn' target='blank' href={project.link}>viwe code </a></div>
                                
                            </div>
                           </div>
                        </a>
                        
                                ))}
                 </div>
                
             
             </div>          
                   
        
    </section>

    )
}