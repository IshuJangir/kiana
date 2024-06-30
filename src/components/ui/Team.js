import logo from '../img/logo.png';
import { Link } from 'react-router-dom';
import rohit1 from '../img/rohit1.jpg'
import ajay1 from '../img/ajay1.jpg'

export default function Component() {






    return (

      
      <div>

<nav className="flex border items-center py-2 navglass sticky top-0 z-50">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
          <a className="flex items-center justify-center cursor-pointer" href='/'>
            <img className='w-28 h-28 scale-125' src={logo} alt="logo" />
          </a>
        </header>
        <div className="ml-auto flex gap-4 sm:gap-6 mr-5">
          <a className="text-sm font-medium hover:underline cursor-pointer underline-offset-4" href='/contact'>Contact</a>
        </div>
      </nav>




        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are a diverse group of passionate individuals dedicated to building innovative solutions and
                  delivering exceptional results.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                  src={ajay1}
                  alt="John Doe"
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Ajay Sharma</h3>
                  <p className="text-muted-foreground">Founder</p>
                  <p className="text-sm text-muted-foreground">
                    Ajay Sharma is the visionary behind our company, leading the team with his strategic insights and unwavering
                    commitment to excellence.
                  </p>
                </div>
              </div>
              <div className="bg-background rounded-lg shadow-lg overflow-hidden">
                <img
                  src={rohit1}
                  alt="Jane Smith"
                  className="w-full h-80 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Rohit Sharma</h3>
                  <p className="text-muted-foreground">Co-Founder</p>
                  <p className="text-sm text-muted-foreground">
                    Rohit Sharma is our innovative mastermind, driving innovation and ensuring our products are built with the
                    latest innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }