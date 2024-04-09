import AboutImg from '../assets/about img.png'


export default function About() {
    return (
        <section id='about' className='flex flex-col md:flex-row  bg-primary  py-10 px-5'>
            <div className='md:w-1/2 px-10'>
                <img className='' alt='About' src={AboutImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white font-hero-font'>
                    <h1 className='text-3xl  w-[130px] text-yellow-50  border-b-4 border-[orange] mb-2'>About Me</h1>
                    <p className='text-2xl pb-5'>Hi My name is vasanthakumar Iam a Full Stack developer  </p>
                    <p className='text-2xl pb-5'><b className='text-black'>Front-end Development:</b> Frontend developement are skilled in HTML, CSS, and JavaScript,
                        front-end frameworks like React.js They ensure that the website is visually
                        appealing, interactive, and responsive across different devices and browsers. </p>
                    <p className='text-2xl pb-5'><b className='text-black'>Back-end Development: </b>  Full stack developers are proficient in server-side languages such as Node.js,
                        They handle tasks like database management,and API integrations to ensure the smooth functioning of the application. </p>
                    <p className='text-2xl'><b className='text-black'>Database Management:</b>Full stack developers work with databases to store, retrieve, and
                        manipulate data.databases like as NoSQL databases like MongoDB or </p>


                </div>

            </div>
        </section>

    )
}