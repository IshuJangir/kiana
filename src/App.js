import './App.css';
import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import logo from './components/img/logo.png';
import heroimg from './components/img/heroimg.jpg';
import SerCard from './components/ui/SerCard';
import space from './components/img/space.jpg';
import color from './components/img/color.jpg';
import lighting from './components/img/lightning.jpg';
import furniture from './components/img/furniture.jpg';
import Carousel from './components/ui/Carousel';
import Footer from './components/ui/Footer';


export default function App() {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const [text] = useTypewriter({
        words: ['Interior Design Services', 'Team'],
        loop: {},
    });

    return (
        <div className='w-[100vw]'>
            <nav className='flex border items-center py-2 navglass sticky top-0 z-50'>
                <header className='px-4 lg:px-6 h-14 flex items-center bg-background'>
                    <a className='flex items-center justify-center cursor-pointer' href='/'>
                        <img className='w-28 h-28 scale-125' src={logo} alt='logo' />
                    </a>
                </header>
                <div className='ml-auto flex gap-4 sm:gap-6 mr-5'>
                    <ScrollLink
                        to='services'
                        smooth={true}
                        duration={500}
                        className='text-sm font-medium hover:underline cursor-pointer underline-offset-4'
                    >
                        Services
                    </ScrollLink>
                    <ScrollLink
                        to='featured-products'
                        smooth={true}
                        duration={500}
                        className='text-sm font-medium hover:underline cursor-pointer underline-offset-4'
                    >
                        Products
                    </ScrollLink>
                    <a
                        className='text-sm font-medium hover:underline cursor-pointer underline-offset-4'
                        href='/team'
                    >
                        Team
                    </a>
                    <a
                        className='text-sm font-medium hover:underline cursor-pointer underline-offset-4'
                        href='/contact'
                    >
                        Contact
                    </a>
                </div>
            </nav>

            <main className='p-5 flex justify-center'>
                <div className=' flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-5'>
                    <div className='sm:w-[50%] sm:h-[400px] md:mr-5 flex flex-col justify-center'>
                        <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none mb-5'>
                            Transform Your Space with Our <span>{text}</span> <Cursor />
                        </h1>
                        <p className='max-w-[600px] text-muted-foreground md:text-xl mb-4'>
                            Our team of experienced designers will work with you to create a beautiful and functional
                            living space that reflects your personal style.
                        </p>
                        <a className='bg-[#ED7D31] w-fit text-white px-10 py-2 rounded-md cursor-pointer' href='contact'>
                            Get a Free Consultation
                        </a>
                    </div>
                    <div className='  sm:w-[50%] md:ml-5 flex justify-center'>
                        <img src={heroimg} alt='Hero' className='w-full h-auto max-w-[400px]' />
                    </div>
                </div>
            </main>

            <div className='services w-[100%] flex flex-col justify-center items-center mt-8 bg-gray-50 py-10'>
                <p className='flex text-2xl font-semibold'>Our Services</p>
                <div className='mt-1 h-1 w-16 rounded-lg bg-[#ED7D31]'></div>
                <p className='max-w-[700px] text-center text-base text-muted-foreground mt-2'>
                    We offer a wide range of interior design services to help you transform your space.
                </p>
                <div className='flex flex-col md:flex-row md:w-[85%] md:justify-between mt-10 space-y-5 md:space-y-0 sm:items-center sm:justify-center '>
                    <SerCard
                        image={space}
                        heading='Space Planning'
                        description='We will help you optimize the layout and flow of your space.'
                    />
                    <SerCard
                        image={color}
                        heading='Color Consultation'
                        description='We will help you choose the perfect color palette for your space.'
                    />
                    <SerCard
                        image={furniture}
                        heading='Furniture Selection'
                        description='We will help you choose the perfect furniture for your space.'
                    />
                    <SerCard
                        image={lighting}
                        heading='Lighting Design'
                        description='We will help you create the perfect lighting scheme for your space.'
                    />
                </div>
            </div>

            <div className='featured-products w-[100%] flex flex-col justify-center items-center mt-8'>
                <p className='flex text-2xl font-semibold mb-10'>Featured Products</p>
                <p className='max-w-[700px] text-base text-muted-foreground mt-2 mb-5'>
                    Check out some of our recent interior design projects.
                </p>
                <Carousel />
            </div>

            <div className='services w-[100%] flex flex-col justify-center items-center mt-8'>
                <p className='flex text-2xl font-semibold'>What Our Clients Say</p>
                <p className='max-w-[700px] text-base text-muted-foreground mt-2 mb-10'>
                    Check out some of our recent interior design projects.
                </p>
                <div className='w-[90%] flex flex-col space-y-5'>
                    <div className='review max-w-[90%] md:max-w-[40%] p-12' data-aos='fade-up' data-aos-delay='0'>
                        <p>
                            Absolutely thrilled with the transformation! The team at KIANA INTERIORS turned my
                            outdated living room into a modern oasis. From initial concept to final touches, they
                            were professional and attentive to every detail. I couldn't be happier!"
                        </p>
                    </div>
                    <div className='review max-w-[90%] md:max-w-[40%] p-12 self-end' data-aos='fade-up' data-aos-delay='500'>
                        <p>
                            "Working with KIANA INTERIORS was a breeze! They understood my vision for a cozy yet
                            stylish bedroom and brought it to life beyond my expectations. Their expertise and
                            creativity made the entire process enjoyable and stress-free."
                        </p>
                    </div>
                    <div className='review max-w-[90%] md:max-w-[40%] p-12' data-aos='fade-up' data-aos-delay='1000'>
                        <p>
                            "Highly recommend KIANA INTERIORS for anyone looking to refresh their space! The team's
                            dedication to quality and design excellence shines through in every corner of my newly
                            redesigned kitchen. Thank you for creating a space I love coming home to!"
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
