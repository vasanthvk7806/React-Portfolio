import ResumeImg from '../assets/resume img.png';
import ResumePdf from '../assets/resume.pdf';

export default function Resume(){
    
    return (
        <section id='resume' className='flex flex-col md:flex-row  bg-primary px-5 py-5'>
            <div className='md:w-1/2 px-10'>
                <img className='w-[200]' alt='About' src={ResumeImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white font-hero-font'>
                    <h1 className='text-4xl  w-[120px] text-yellow-50  border-b-4 border-[orange] mb-2'>Resume</h1>
                    <p className='text-2xl '> You can view my Resume <a className='btn' href={ResumePdf} download='resume.pdf'>Download</a></p>
                    


                </div>

            </div>
        </section>

    )
}