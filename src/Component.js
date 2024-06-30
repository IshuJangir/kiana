import logo from './logo.svg';
import './App.css';
import Link from 'next/link';

function App() {
  return (
    <div className="App">
      <div className="flex flex-col min-h-[100dvh]">
        <header className="px-4 lg:px-6 h-14 flex items-center bg-background shadow">
          <Link href="#">
            <a className="flex items-center justify-center">
              <HomeIcon className="h-6 w-6" />
              <span className="text-xl font-bold">Interior Design</span>
            </a>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link href="#">
              <a className="text-sm font-medium hover:underline underline-offset-4">Services</a>
            </Link>
            <Link href="#">
              <a className="text-sm font-medium hover:underline underline-offset-4">Projects</a>
            </Link>
            <Link href="#">
              <a className="text-sm font-medium hover:underline underline-offset-4">Team</a>
            </Link>
            <Link href="#">
              <a className="text-sm font-medium hover:underline underline-offset-4">Contact</a>
            </Link>
          </nav>
        </header>
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                <img
                  src="/placeholder.svg"
                  width="550"
                  height="550"
                  alt="Hero"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                />
                <div className="flex flex-col justify-center space-y-4">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Transform Your Space with Our Interior Design Services
                    </h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl">
                      Our team of experienced designers will work with you to create a beautiful and functional living
                      space that reflects your personal style.
                    </p>
                  </div>
                  <Link href="#">
                    <a className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                      Get a Free Consultation
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We offer a wide range of interior design services to help you transform your space.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                  <img src="/placeholder.svg" width="150" height="150" alt="Service 1" className="rounded-full" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Space Planning</h3>
                    <p className="text-muted-foreground">We'll help you optimize the layout and flow of your space.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                  <img src="/placeholder.svg" width="150" height="150" alt="Service 2" className="rounded-full" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Color Consultation</h3>
                    <p className="text-muted-foreground">
                      We'll help you choose the perfect color palette for your space.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                  <img src="/placeholder.svg" width="150" height="150" alt="Service 3" className="rounded-full" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Furniture Selection</h3>
                    <p className="text-muted-foreground">We'll help you choose the perfect furniture for your space.</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                  <img src="/placeholder.svg" width="150" height="150" alt="Service 4" className="rounded-full" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Lighting Design</h3>
                    <p className="text-muted-foreground">
                      We'll help you create the perfect lighting scheme for your space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Check out some of our recent interior design projects.
                  </p>
                </div>
              </div>
              {/* <div className="mx-auto grid max-w-md mt-12 gap-4 sm:grid-cols-2 md:max-w-none md:grid-cols-3 lg:gap-6">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-6">
                      <img
                        src="/placeholder.svg"
                        width="400"
                        height="300"
                        alt="Project 1"
                        className="rounded-lg object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-4 py-2 rounded-b-lg">
                        <h4 className="text-lg font-bold">Living Room</h4>
                        <p className="text-muted-foreground">A cozy and modern living room design.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-6">
                      <img
                        src="/placeholder.svg"
                        width="400"
                        height="300"
                        alt="Project 2"
                        className="rounded-lg object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-4 py-2 rounded-b-lg">
                        <h4 className="text-lg font-bold">Kitchen</h4>
                        <p className="text-muted-foreground">A sleek and functional kitchen design.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-[4/3] items-center justify-center p-6">
                      <img
                        src="/placeholder.svg"
                        width="400"
                        height="300"
                        alt="Project 3"
                        className="rounded-lg object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-4 py-2 rounded-b-lg">
                        <h4 className="text-lg font-bold">Bedroom</h4>
                        <p className="text-muted-foreground">A cozy and relaxing bedroom design.</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div> */}
            </div>
          </section>
          <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
            <div className="container px-4 md:px-6">
              <div className="space-y-4 text-center">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Our team of experienced designers is here to help you transform your space.
                  </p>
                </div>
              </div>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                  <img src="/placeholder.svg" width="150" height="150" alt="Team Member 1" className="rounded-full" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Jane Doe</h3>
                    <p className="text-muted-foreground">Lead Designer</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                  <img src="/placeholder.svg" width="150" height="150" alt="Team Member 2" className="rounded-full" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">John Smith</h3>
                    <p className="text-muted-foreground">Senior Designer</p>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center space-y-4 rounded-lg bg-background p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md">
                  <img src="/placeholder.svg" width="150" height="150" alt="Team Member 3" className="rounded-full" />
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold">Sarah Lee</h3>
                    <p className="text-muted-foreground">Junior Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-muted">
          <p className="text-xs text-muted-foreground">&copy; 2024 Interior Design. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link href="#">
              <a className="text-xs hover:underline underline-offset-4">Terms of Service</a>
            </Link>
            <Link href="#">
              <a className="text-xs hover:underline underline-offset-4">Privacy Policy</a>
            </Link>
            <Link href="#">
              <a className="text-xs hover:underline underline-offset-4">Contact Us</a>
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  );
}

export default App;

function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}
