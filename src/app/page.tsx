'use client'

import { useEffect,useState } from 'react'
import { Book, GraduationCap, LightbulbIcon, Users, Instagram, Mail, Youtube, Phone, MapPin, Facebook, Linkedin } from 'lucide-react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PlayStoreBadge from './assets/gpstore.png'
import Head from 'next/head';

export default function Homepage() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  const [studentsCount, setStudentsCount] = useState(0);
  const [educatorsCount, setEducatorsCount] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    // Counter function to animate student count
    const studentsTarget = 2000;
    const educatorsTarget = 20;

    // Increment rates
    const studentsIncrement = Math.ceil(studentsTarget / 100); // Adjust speed
    const educatorsIncrement = Math.ceil(educatorsTarget / 100);

    const countStudents = setInterval(() => {
      setStudentsCount((prevCount) => {
        if (prevCount >= studentsTarget) {
          clearInterval(countStudents);
          return studentsTarget;
        }
        return prevCount + studentsIncrement;
      });
    }, 20); // Adjust interval speed for effect

    const countEducators = setInterval(() => {
      setEducatorsCount((prevCount) => {
        if (prevCount >= educatorsTarget) {
          clearInterval(countEducators);
          return educatorsTarget;
        }
        return prevCount + educatorsIncrement;
      });
    }, 100); // Adjust interval speed for effect

    return () => {
      clearInterval(countStudents);
      clearInterval(countEducators);
    };
  }, []);
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolled 300px down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const FloatingSidebar = () => (
    <div className="fixed right-0 top-1/3 flex flex-col items-center space-y-4 bg-white p-2 rounded-l-2xl shadow-lg">
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <Instagram className="w-6 h-6 text-black hover:text-orange-500" />
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <Facebook className="w-6 h-6 text-black hover:text-orange-500" />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
        <Linkedin className="w-6 h-6 text-black hover:text-orange-500" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <Youtube className="w-6 h-6 text-black hover:text-orange-500" />
      </a>
      <a href="tel:+1234567890" className="text-black hover:text-orange-500">
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
    <Head>
    <title>Nyeras - Affordable E-learning with Certification & Job Placement</title>
    <meta name="description" content="Nyeras is an affordable online learning platform by Nyera Educational Trust, offering specialized training for government and MNC jobs with certification, internship, and industry-ready skills. 100% placement assistance and LinkedIn profile optimization included. Trusted by 2000+ students with high placement success." />
    <meta property="og:url" content="https://www.nyeras.com/" />
    <meta property="og:title" content="Nyeras - Affordable E-learning with Certification & Job Placement" />
    <meta property="og:description" content="Specialized training for public and private sector jobs with certification, internship, and industry-ready skills." />
    <meta property="og:image" content="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" />
    <meta property="og:image:width" content="800" />
    <meta property="og:image:height" content="600" />
    <meta property="og:site_name" content="Nyeras" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@nyeras" />
    <meta name="twitter:creator" content="@nyeras" />
    <meta name="twitter:title" content="Nyeras - Affordable E-learning with Certification & Job Placement" />
    <meta name="twitter:description" content="Specialized training for public and private sector jobs with certification, internship, and industry-ready skills." />
    <meta name="twitter:image" content="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" />
</Head>
    <div className="min-h-screen bg-black text-white pt-[72px]">
     
      {/* Marquee */}
      <div className="bg-orange-700 overflow-hidden fixed top-0 left-0 right-0 z-50">
        <div className="py-1 animate-marquee whitespace-nowrap">
          <span className="text-sm mx-4">🎓 New course alert: Advanced Machine Learning - Enroll now!</span>
          <span className="text-sm mx-4">📚 Summer sale: 30% off on all courses - Limited time offer!</span>
          <span className="text-sm mx-4">🌟 Join our webinar on &quot;Future of AI in Education&quot; - Register today!</span>
        </div>
      </div>

      {/* Header */}
      <header className="bg-orange-600 p-4 md:p-4 fixed top-8 left-0 right-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Image src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" alt="Nyeras Logo" width={40} height={40} className="rounded-full" />
            <h1 className="text-2xl md:text-3xl font-bold">Nyeras</h1>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="hover:text-orange-200">Courses</a>
            <a href="#" className="hover:text-orange-200">About</a>
            <a href="#" className="hover:text-orange-200">Team</a>
            <a href="#" className="hover:text-orange-200">Contact</a>
          </nav>
          <button onClick={toggleSidebar} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>
      <div className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-gray-800 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <div className="p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" alt="Nyeras Logo" width={40} height={40} className="rounded-full" />
            <h1 className="text-2xl font-bold text-white">Nyeras</h1>
          </div>
          <button onClick={toggleSidebar} className="text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          <a href="#" className="block py-2 px-4 text-white hover:bg-orange-600">Courses</a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-orange-600">About</a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-orange-600">Team</a>
          <a href="#" className="block py-2 px-4 text-white hover:bg-orange-600">Contact</a>
        </nav>
      </div>

      {/* Overlay for Sidebar */}
      {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleSidebar}></div>}

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-600 to-black text-center py-20 px-4">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide" data-aos="fade-up">
          Empower Your Future with Nyeras
        </h2>
        <p className="text-2xl text-gray-200 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Discover a world of knowledge with our cutting-edge online courses
        </p>
        <button className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-full hover:bg-orange-100 transition duration-300 transform hover:scale-105" data-aos="fade-up" data-aos-delay="400">
          Explore Courses
        </button>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-4xl font-bold mb-10" data-aos="fade-up">
            Our Impact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Students Counter */}
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="fade-right" data-aos-delay="200">
              <h4 className="text-5xl font-bold text-orange-500 mb-2">{studentsCount}+</h4>
              <p className="text-lg mt-2">Students</p>
            </div>

            {/* Educators Counter */}
            <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="fade-left" data-aos-delay="400">
              <h4 className="text-5xl font-bold text-orange-500 mb-2">{educatorsCount}+</h4>
              <p className="text-lg mt-2">Educators</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-900 text-gray-300">
        <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left" data-aos="fade-up">
            <h3 className="text-4xl font-bold mb-6 text-white">About Nyeras</h3>
            <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
              Nyeras is a cutting-edge EdTech platform dedicated to empowering learners worldwide. Our mission is to make high-quality education accessible to everyone, regardless of their background or location.
            </p>
            <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="400">
              With a team of expert educators and industry professionals, we offer a diverse range of courses designed to equip you with the skills needed in today&apos;s rapidly evolving job market.
            </p>
            <button
              className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-700 transition duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              Learn More About Us
            </button>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="100">
            <Image
              src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" // Replace with your actual image URL
              alt="About Nyeras"
              width={350} // Adjusted width for better visuals
              height={350} // Adjusted height for better visuals
              className="rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* Featured Courses */}

<section className="py-16 px-4">
  <h3 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Featured Courses</h3>
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {[
      { title: 'Web Development', imageUrl: 'https://nyeras.com/assets/kubernetes-GroH8BNI.jpeg' },
      { title: 'Data Science', imageUrl: 'https://nyeras.com/assets/kubernetes-GroH8BNI.jpeg' },
      { title: 'Digital Marketing', imageUrl: 'https://nyeras.com/assets/kubernetes-GroH8BNI.jpeg' },
      { title: 'UX Design', imageUrl: 'https://nyeras.com/assets/testing-GHbQc5Tb.jpeg' },
      { title: 'Machine Learning', imageUrl: 'https://nyeras.com/assets/testing-GHbQc5Tb.jpeg' },
      { title: 'Mobile App Development', imageUrl: 'https://nyeras.com/assets/testing-GHbQc5Tb.jpeg' }
    ].map((course, index) => (
      <div
        key={index}
        className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        {/* Image Section */}
        <div className="relative w-full h-48">
          <Image
            src={course.imageUrl}
            alt={course.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Text Content */}
        <div className="p-6">
          <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
          <p className="text-gray-400 mb-4">
            Learn the essentials of {course.title.toLowerCase()} and boost your career.
          </p>
          <a href="#" className="text-orange-500 hover:text-orange-400">Learn more →</a>
        </div>
      </div>
    ))}
  </div>
</section>


      {/* Key Features */}
      <section className="bg-gray-900 py-16 px-4">
  <div className="container mx-auto">
    <h3 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Why Choose Nyeras?</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { icon: <Book className="w-12 h-12 text-orange-500 mx-auto mb-4" />, title: 'Expert-Led Courses' },
        { icon: <GraduationCap className="w-12 h-12 text-orange-500 mx-auto mb-4" />, title: 'Recognized Certifications' },
        { icon: <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />, title: 'Community Support' },
        { icon: <LightbulbIcon className="w-12 h-12 text-orange-500 mx-auto mb-4" />, title: 'Innovative Learning' },
      ].map((feature, index) => (
        <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
          {feature.icon}
          <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
          <p className="text-gray-400">Experience the best in online education with our unique features.</p>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'K Sekhar', role: 'President', image: 'https://nyeras.com/assets/SEKHARWEBPAGE-WbYKgERj.png' },
              { name: 'K S Pavan Sai', role: 'Founder and Director', image: 'https://nyeras.com/assets/PAVANWEBPAGE-Iwi4rpwT.png' },
              { name: 'K S Yeswanth Sai', role: 'Co-Founder & Managing director', image: 'https://nyeras.com/assets/YESWANTHWEBPAGE-DQCzR2b8.png' },
              { name: 'E Naveen Kumar', role: 'Chief Manager - Technical', image: 'https://nyeras.com/assets/naveen-GLV0WuOk.jpeg' },
            ].map((member, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
                <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full mx-auto mb-4" />
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Us Section */}
      <section className="py-16 px-4 bg-gray-900">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Find Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div data-aos="fade-right">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-orange-500 mr-2" />
                <h4 className="text-xl font-semibold">Our Location</h4>
              </div>

              <p className="text-gray-400 mb-4">Adarsh nagar, anantapur, Andhra Pradesh 515001</p>
              <p className="text-gray-400 mb-4">Open Monday to Friday, 9:00 AM - 5:00 PM</p>
              <button className="bg-orange-600 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300">
                Get Directions
              </button>
            </div>
            <div data-aos="fade-left">
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3677833503657!2d77.57369427520908!3d14.691781674837532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b86a9219e8f%3A0x76dd87e33455c246!2sNYERAS%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1730561922650!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Nyeras Location Map"
                  className="w-full h-full rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FloatingSidebar />
      <button
        className={`back-to-top ${showButton ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑ Top
      </button>
      <section className="py-16 px-4 bg-gradient-to-b from-gray-800 to-black text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">
          Download Our App
        </h3>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
          Get access to our courses and stay connected on the go. Download the Nyeras app on the Google Play Store now!
        </p>
        <div data-aos="fade-up" data-aos-delay="400">
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <Image src={PlayStoreBadge} alt="Get it on Google Play" width={160} height={60} className="mx-auto" />
          </a>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div data-aos="fade-up">
            <div className="flex items-center space-x-2 mb-4">
              <Image src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" alt="Nyeras Logo" width={40} height={40} className="rounded-full" />
              <h4 className="text-xl font-bold">Nyeras</h4>
            </div>
            <p className="text-gray-400">Empowering learners worldwide through innovative online education.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact</a></li>
            </ul>
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-orange-500" />
                <a href="mailto:info@nyeras.com" className="text-gray-400 hover:text-orange-500">thenyera@gmail.com</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-orange-500" />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500">+91 7013586357</a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Nyeras. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  )
}