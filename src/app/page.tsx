'use client'

import { useEffect } from 'react'
import { Book, GraduationCap, LightbulbIcon, Users, Instagram, Mail, Youtube, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Homepage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])

  return (
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
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-orange-600 to-black text-center py-20 px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4" data-aos="fade-up">Empower Your Future with Nyeras</h2>
        <p className="text-xl mb-8" data-aos="fade-up" data-aos-delay="200">Discover a world of knowledge with our cutting-edge online courses</p>
        <button className="bg-white text-orange-600 font-bold py-2 px-6 rounded-full hover:bg-orange-100 transition duration-300" data-aos="fade-up" data-aos-delay="400">
          Explore Courses
        </button>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gray-900">
  <div className="container mx-auto flex flex-col lg:flex-row items-center">
    {/* Text Content */}
    <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left" data-aos="fade-up">
      <h3 className="text-3xl font-bold mb-6">About Nyeras</h3>
      <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="200">
        Nyeras is a cutting-edge EdTech platform dedicated to empowering learners worldwide. Our mission is to make high-quality education accessible to everyone, regardless of their background or location.
      </p>
      <p className="text-lg mb-6" data-aos="fade-up" data-aos-delay="400">
        With a team of expert educators and industry professionals, we offer a diverse range of courses designed to equip you with the skills needed in today&apos;s rapidly evolving job market.
      </p>
      <button
        className="bg-orange-600 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300"
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
        width={300} // Adjust the width based on your layout
        height={300} // Adjust the height based on your layout
        className="rounded-lg"
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
  )
}