'use client'


import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Clock, ChevronDown, ChevronUp, ChevronLeftIcon, ChevronRightIcon, BookOpen, Users,  MapPin, Star, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Image from "next/image";
import Marquee from 'react-fast-marquee';
import Head from 'next/head'
import AOS from 'aos';

export default function LandingPage() {
    useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    })
  }, [])
  const courses = [
    { 
      id: 1, 
      title: "Web Development Fundamentals", 
      description: "Learn the basics of HTML, CSS, and JavaScript.",
      instructor: "Sarah Johnson",
      rating: 4.8,
      duration: "8 weeks",
      students: 1234
    },
    { 
      id: 2, 
      title: "React Mastery", 
      description: "Build powerful web applications with React.",
      instructor: "Michael Chen",
      rating: 4.9,
      duration: "10 weeks",
      students: 2345
    },
    { 
      id: 3, 
      title: "Node.js Backend Development", 
      description: "Create scalable server-side applications with Node.js.",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      duration: "12 weeks",
      students: 1876
    },
    { 
      id: 4, 
      title: "Python for Data Science", 
      description: "Explore data analysis and machine learning with Python.",
      instructor: "David Kim",
      rating: 4.9,
      duration: "14 weeks",
      students: 3210
    },
    { 
      id: 5, 
      title: "UI/UX Design Principles", 
      description: "Master the art of creating intuitive user interfaces.",
      instructor: "Lisa Patel",
      rating: 4.8,
      duration: "8 weeks",
      students: 1543
    },
    { 
      id: 6, 
      title: "Mobile App Development", 
      description: "Build cross-platform mobile apps with React Native.",
      instructor: "Alex Thompson",
      rating: 4.6,
      duration: "12 weeks",
      students: 2109
    },
  ];
  const [showButton, setShowButton] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const companies = [
      { name: "slice", logo: "/cognizant.png" },
      { name: "leadsquared", logo: "/tcs.png" },
      { name: "LUMINOUS", logo: "/accenture.png" },
      { name: "Chaayos", logo: "/247.png" },
      { name: "RheinBrücke", logo: "/wipro.png" },
      { name: "CARATLANE", logo: "/gitam.png" },
      { name: "Kickdrum", logo: "/kpit.png" },
      { name: "Danfoss", logo: "/infosys.png" },
      { name: "Josh Technology", logo: "/deloitte.png" },
      // { name: "Bluestone", logo: "/logos/bluestone.png" },
      // { name: "FNP", logo: "/logos/fnp.png" },
      // { name: "agshealth", logo: "/logos/agshealth.png" },
      // { name: "SELEC", logo: "/logos/selec.png" },
      // { name: "FLATIR", logo: "/logos/flatir.png" },
    ];
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const faqs = [
      {
        question: "What is Nyeras?",
        answer: "Nyeras is an innovative EdTech platform designed to revolutionize online learning through interactive courses, personalized learning paths, and cutting-edge educational tools."
      },
      {
        question: "How does Nyeras work?",
        answer: "Nyeras uses advanced algorithms to tailor learning experiences to each student's needs. Users can access a wide range of courses, track their progress, and engage with instructors and peers through our interactive platform."
      },
      {
        question: "What subjects does Nyeras cover?",
        answer: "Nyeras offers a diverse range of subjects including STEM fields, humanities, languages, and professional development courses. Our catalog is constantly expanding to meet the evolving needs of learners."
      },
      {
        question: "Is Nyeras suitable for all age groups?",
        answer: "Yes, Nyeras caters to learners of all ages. We have specially designed courses for K-12 students, university-level courses, and professional development programs for adults."
      },
      {
        question: "How much does Nyeras cost?",
        answer: "Nyeras offers various pricing tiers to suit different needs. We have a free tier with limited access, and premium subscriptions that unlock full features. Please check our pricing page for detailed information."
      }
    ]
  
    const toggleQuestion = (index: number) => {
      setOpenIndex(openIndex === index ? null : index)
    }
  
    const testimonials = [
      {
        quote: "The classes here are exceptionally conducive to learning, with instructors who elucidate complex concepts with remarkable clarity and precision.",
        author: "Alex Johnson",
        role: "CTO, TechInnovate",
        avatar: "data:image/jpeg;base64,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",
        rating: 5
      },
      {
        quote: "The data analytics course I took, was an excellent investment in my skillset. The curriculum was comprehensive, covering both theoretical concepts and practical applications. The instructors were knowledgeable and supportive, guiding us through complex topics with clarity and patience.",
        author: "Samantha Lee",
        role: "Operations Manager, GlobalCorp",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvWnQrIy-gtfL307LBfa8W9HisA2CT-dGxw&s",
        rating: 5
      },
      {
        quote: "We've seen a 40% increase in productivity since implementing this solution. It's been a game-changer for our team.",
        author: "Michael Chen",
        role: "Product Lead, FutureTech",
        avatar: "data:image/jpeg;base64,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",
        rating: 5
      }
    ]
  
    const [currentIndex, setCurrentIndex] = useState(0)
  
    const nextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  
    const prevTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }
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
    <div className="min-h-screen flex flex-col">
    {/* Fixed Alert Marquee */}
    <div className="bg-orange-500 fixed top-0 left-0 right-0 z-50">
      <div className="py-1 animate-marquee whitespace-nowrap flex">
        <span className="text-sm mx-4 text-white">
          🎓 New course alert: Advanced Machine Learning - Enroll now!
        </span>
        <span className="text-sm mx-4 text-white">
          📚 Summer sale: 30% off on all courses - Limited time offer!
        </span>
        <span className="text-sm mx-4 text-white">
          🌟 Join our webinar on &quot;Future of AI in Education&quot; - Register today!
        </span>
      </div>
    </div>
  
    {/* Navigation Header */}
    <header className="fixed top-8 left-0 right-0 bg-white shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <img
              className="h-8 w-8"
              src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png"
              alt="Nyeras Logo"
            />
            <span className="text-2xl font-bold text-black">Nyeras</span>
          </Link>
  
          {/* Navigation Links */}
          <nav className="hidden md:flex space-x-10">
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Courses
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              About
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing
            </Link>
            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
  
          {/* Action Buttons */}
          <div className="flex items-center">
          <a
        href="/courses/enroll"
        className="hidden md:flex px-4 py-2 bg-orange-100 text-orange-600 rounded font-medium items-center space-x-1 shadow hover:bg-orange-200 transition"
      >
        <span>Enroll Now</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 19L19 5M5 5h14v14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
          </div>
  
          {/* Mobile Menu Button */}
          <button onClick={toggleSidebar} className="md:hidden text-gray-500 hover:text-gray-900">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>


    <div
    className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white z-50 transform ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } transition-transform duration-300`}
  >
    <div className="p-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Image
          src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png"
          alt="Nyeras Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold text-black">Nyeras</h1>
      </div>
      <button onClick={toggleSidebar} className="text-black">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <nav className="mt-4">
      <a href="#" className="block py-2 px-4 text-black hover:bg-orange-500">Courses</a>
      <a href="#" className="block py-2 px-4 text-black hover:bg-orange-500">About</a>
      <a href="#" className="block py-2 px-4 text-black hover:bg-orange-500">Team</a>
      <a href="#" className="block py-2 px-4 text-black hover:bg-orange-500">Contact</a>
    </nav>
  </div>
  

      {/* Main Content */}
      <main className="flex-grow pt-16">
      {/* Hero Section */}
<section className="bg-gradient-to-b from-orange-100 to-white py-20 min-h-screen flex items-center">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col items-center text-center">
      {/* Welcome Banner */}
      <div className="inline-flex rounded-full border-2 border-black px-6 py-2 mb-6">
        <span className="text-lg font-semibold text-black">WELCOME TO NYERAS</span>
      </div>

      {/* Main Heading and Description */}
      <div className="max-w-4xl mx-auto mb-12">
      <h1 className="text-5xl sm:text-6xl md:text-7xl tracking-tight font-black text-gray-900">
  <span className="block">Unlock Your Potential with</span>
  <span className="block text-orange-500">Nyeras</span>
</h1>

        <p className="mt-3 text-xl sm:text-2xl text-gray-500 sm:mt-5">
          Empower your learning journey with our cutting-edge online courses. Gain skills, knowledge, and confidence to excel in today&apos;s digital world.
        </p>
        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition duration-300">
            Explore Courses
          </button>
          <button className="inline-flex items-center justify-center px-5 py-3 border border-orange-500 text-base font-medium rounded-md text-orange-500 bg-white hover:bg-orange-50 transition duration-300">
          <span>Enroll Now</span>
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5 19L19 5M5 5h14v14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
          </button>
        </div>
      </div>

      {/* Student Profiles and Ratings */}
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0 lg:space-x-10 mt-10">
  {/* Left Section: Student Avatars */}
  <div className="flex items-center justify-center">
    <div className="flex -space-x-4">
      <img
        src="data:image/jpeg;base64,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"
        alt="Student profile"
        className="w-12 h-12 rounded-full border-2 border-white"
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVvWnQrIy-gtfL307LBfa8W9HisA2CT-dGxw&s"
        alt="Student profile"
        className="w-12 h-12 rounded-full border-2 border-white"
      />
      <img
        src="data:image/jpeg;base64,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"
        alt="Student profile"
        className="w-12 h-12 rounded-full border-2 border-white"
      />
      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 border-2 border-black text-white font-semibold text-sm">
        2K+
      </div>
    </div>
  </div>

  {/* Right Section: Star Ratings and Join Message */}
  <div className="text-center lg:text-left">
    {/* Star Ratings */}
    <div className="flex justify-center lg:justify-start text-yellow-400 mb-2">
      {[...Array(5)].map((_, index) => (
        <Star key={index} className="w-6 h-6 fill-current" />
      ))}
    </div>
    {/* Join Message */}
    <p className="text-2xl font-semibold text-black">Join 2000+ students</p>
  </div>
</div>

    </div>
  </div>
</section>




<div className="trusted-section bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400">
      <h2 className="trusted-title">
      <span className="highlight text-black border border-black rounded-md px-2 py-1">Trusted</span> By Industry

      </h2>
      <div className="trusted-marquee">
        <Marquee gradient={false} speed={100}>
          {companies.map((company, index) => (
            <div key={index} className="company-logo">
              <Image
                src={company.logo}
                alt={company.name}
                width={150}
                height={50}
              />
            </div>
          ))}
        </Marquee>
        <Marquee gradient={false} speed={100} direction="right">
          {companies.map((company, index) => (
            <div key={index} className="company-logo">
              <Image
                src={company.logo}
                alt={company.name}
                width={150}
                height={50}
              />
            </div>
          ))}
        </Marquee>
      </div>

      <style jsx>{`
        .trusted-section {
          text-align: center;
          padding: 20px 10px;
          // background-color: #e7d3f8; /* Light purple */
        }
        .trusted-title {
          font-size: 2rem;
          margin-bottom: 20px;
          color: #fff;
          font-weight: 700;
        }
        .highlight {
          // color: #ffdf00;
          font-weight: 700;
        }
        .trusted-marquee {
          overflow: hidden;
          position: relative;
          width: 100%;
        }
        .company-logo {
          max-width: 150px;
          flex-shrink: 0;
          margin: 0 15px;
        }
      `}</style>
    </div>
    
<section className="w-full bg-gradient-to-b from-orange-100 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
      <div className="flex justify-center items-center mb-6">
  <div className="inline-flex rounded-full border-2 border-black  px-6 py-2">
    <span className="text-lg font-semibold text-black">TESTIMONIALS</span>
  </div>
</div>
        <div className="relative mx-auto max-w-4xl">
          <div className="overflow-hidden rounded-lg bg-white p-8 shadow-lg">
            <div className="relative h-[300px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`absolute left-0 top-0 w-full transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-6 w-6 ${
                          i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <blockquote className="mb-4 text-center text-lg italic text-gray-700">
                  &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="mr-4 h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md transition-all hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="mt-6 flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-orange-500 w-4' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>




    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 rounded-full bg-orange-100 text-orange-500 text-sm font-semibold tracking-wide uppercase mb-4">
            Featured Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expand Your Skills</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of courses designed to help you grow professionally and personally.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="relative h-48 bg-gradient-to-br from-orange-400 to-orange-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">{course.id}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center mb-4">
                  <img src={`https://api.dicebear.com/6.x/initials/svg?seed=${course.instructor}`} alt={course.instructor} className="w-8 h-8 rounded-full mr-2" />
                  <span className="text-sm text-gray-700">{course.instructor}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold text-gray-700">{course.rating.toFixed(1)}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600">{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-600">{course.students.toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                  Enroll Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* Why Choose Us Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center mb-6">
  <div className="inline-flex rounded-full border-2 border-black  px-6 py-2">
    <span className="text-lg font-semibold text-black">WHY CHOOSE US</span>
  </div>
</div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: BookOpen, title: "Extensive Course Library", description: "Access a wide range of courses covering various subjects and skill levels." },
                { icon: Users, title: "Expert Instructors", description: "Learn from industry professionals and experienced educators." },
                { icon: Star, title: "Personalized Learning", description: "Adaptive learning paths tailored to your individual needs and goals." }
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 text-orange-500 mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Impact Section */}
        {/* <section className="py-20 bg-orange-400 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-center mb-12">OUR IMPACT</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              {[
                { number: "100k+", label: "Students Enrolled" },
                { number: "1000+", label: "Courses Available" },
                { number: "50+", label: "Countries Reached" },
                { number: "95%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold mb-2">{stat.number}</p>
                  <p className="text-xl">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Meet Our Team Section */}
        <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="flex justify-center items-center mb-6">
  <div className="inline-flex rounded-full border-2 border-black  px-6 py-2">
    <span className="text-lg font-semibold text-black">MEET OUR TEAM</span>
  </div>
</div>
    {/* Team Members Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          name: 'K Sekhar',
          role: 'President',
          image: 'https://nyeras.com/assets/SEKHARWEBPAGE-WbYKgERj.png',
        },
        {
          name: 'K S Pavan Sai',
          role: 'Founder and Director',
          image: 'https://nyeras.com/assets/PAVANWEBPAGE-Iwi4rpwT.png',
        },
        {
          name: 'K S Yeswanth Sai',
          role: 'Co-Founder & Managing Director',
          image: 'https://nyeras.com/assets/YESWANTHWEBPAGE-DQCzR2b8.png',
        },
        {
          name: 'E Naveen Kumar',
          role: 'Chief Manager - Technical',
          image: 'https://nyeras.com/assets/naveen-GLV0WuOk.jpeg',
        },
      ].map((member, index) => (
        <div
          key={index}
          className="text-center"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          {/* Member Image */}
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          {/* Member Name */}
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
          {/* Member Role */}
          <p className="text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
</section>
<div className="bg-gray-100 min-h-screen pt-12 pb-6 px-4 sm:px-6 lg:px-8 bg-opacity-70 backdrop-filter backdrop-blur-lg">
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-full border-2 border-black px-6 py-2 bg-white shadow-md">
            <span className="text-xl font-bold text-black">FAQ</span>
          </div>
        </div>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
              <button
                className="w-full text-left p-6 focus:outline-none transition-colors duration-300 ease-in-out hover:bg-indigo-50"
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700  rounded-b-xl">
                  <p className="mt-2 text-base leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

        {/* Download Our App Section */}

        {/* Our Location Section */}
        <section className="py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div className="flex justify-center items-center mb-6">
  <div className="inline-flex rounded-full border-2 border-black px-6 py-2">
    <span className="text-lg font-semibold text-black">OUR LOCATION</span>
  </div>
</div>
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
      {/* Google Maps Embed */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.982316230066!2d77.64066557518507!3d12.908858016250493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae158ac2a58ebb%3A0x8aeef3a21b734303!2sNyeras%20Corporate%20Office!5e0!3m2!1sen!2sin!4v1732007632082!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          aria-hidden="false"
        ></iframe>
      </div>

      {/* Location Details */}
      <div className="mt-10 lg:mt-0">
      <h3 className="text-3xl lg:text-5xl font-semibold text-gray-900 mb-4">Nyeras Institutions</h3>

        <p className="text-xl text-gray-600 mb-6">
          We&apos;re located in the heart of the city, easily accessible by public transportation.
        </p>
        <div className="flex items-start mb-4">
          <MapPin className="h-6 w-6 text-orange-500 mr-2 mt-1" />
          <p className="text-gray-600">
          CLUB HOUSE, Floor No.2 ,L.K Pride,Opp. HSR, Bengaluru, Karnataka 560102
          </p>
        </div>
        <button
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition duration-300"
        >
          Get Directions
        </button>
      </div>
    </div>
  </div>
</section>
<section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex rounded-full border-2 border-black px-6 py-2 mb-6">
            <span className="text-lg font-semibold text-black">DOWNLOAD OUR APP</span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mt-4">
            Get Our App Now
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Enjoy our services on the go with our mobile app!
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link href="/" className="w-48 h-auto">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1200px-Google_Play_Store_badge_EN.svg.png"
              alt="Get it on Google Play"
              width={168}
              height={50}
              className="w-full h-auto"
            />
          </Link>
          <Link href="https://www.apple.com/app-store/" className="w-48 h-auto">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Download_on_the_App_Store_RGB_blk.svg/1200px-Download_on_the_App_Store_RGB_blk.svg.png"
              alt="Download on the App Store"
              width={168}
              height={50}
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>
    </section>

      </main>
      <button
        className={`back-to-top ${showButton ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        ↑ Top
      </button>

      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="flex items-center space-x-2">
              <img
              className="h-8 w-8"
              src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png"
              alt="Nyeras Logo"
            />
                <span className="text-2xl font-bold text-white">Nyeras</span>
              </Link>
              <p className="mt-2 text-sm text-gray-300">Empowering learners worldwide through innovative online education.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#" className="text-base text-gray-300 hover:text-white">About</Link></li>
                <li><Link href="#"className="text-base text-gray-300 hover:text-white">Careers</Link></li>
                <li><Link href="#"className="text-base text-gray-300 hover:text-white">Partners</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#"className="text-base text-gray-300 hover:text-white">Blog</Link></li>
                <li><Link href="#"className="text-base text-gray-300 hover:text-white">Help Center</Link></li>
                <li><Link href="#"className="text-base text-gray-300 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Legal</h3>
              <ul className="mt-4 space-y-4">
                <li><Link href="#"className="text-base text-gray-300 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#"className="text-base text-gray-300 hover:text-white">Terms of Service</Link></li>
                <li><Link href="#"className="text-base text-gray-300 hover:text-white">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex items-center justify-between">
            <p className="text-base text-gray-400">&copy; 2024 Nyeras, Inc. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}















// import { useEffect,useState } from 'react'
// import { BookOpen, Menu, Book, GraduationCap, LightbulbIcon, Users, Instagram, Mail, Youtube, Phone, MapPin, Facebook, Linkedin } from 'lucide-react'
// import Image from 'next/image'
// import AOS from 'aos'
// import 'aos/dist/aos.css'
// import PlayStoreBadge from './assets/gpstore.png'
// import Head from 'next/head';

// export default function Homepage() {
  
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//     })
//   }, [])
//   const [studentsCount, setStudentsCount] = useState(0);
//   const [educatorsCount, setEducatorsCount] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     // Counter function to animate student count
//     const studentsTarget = 2000;
//     const educatorsTarget = 20;

//     // Increment rates
//     const studentsIncrement = Math.ceil(studentsTarget / 100); // Adjust speed
//     const educatorsIncrement = Math.ceil(educatorsTarget / 100);

//     const countStudents = setInterval(() => {
//       setStudentsCount((prevCount) => {
//         if (prevCount >= studentsTarget) {
//           clearInterval(countStudents);
//           return studentsTarget;
//         }
//         return prevCount + studentsIncrement;
//       });
//     }, 20); // Adjust interval speed for effect

//     const countEducators = setInterval(() => {
//       setEducatorsCount((prevCount) => {
//         if (prevCount >= educatorsTarget) {
//           clearInterval(countEducators);
//           return educatorsTarget;
//         }
//         return prevCount + educatorsIncrement;
//       });
//     }, 100); // Adjust interval speed for effect

//     return () => {
//       clearInterval(countStudents);
//       clearInterval(countEducators);
//     };
//   }, []);
//   const [showButton, setShowButton] = useState(false);

//   // Show button when scrolled 300px down
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 300) {
//         setShowButton(true);
//       } else {
//         setShowButton(false);
//       }
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Smooth scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };
//   const FloatingSidebar = () => (
//     <div className="fixed right-0 top-1/3 flex flex-col items-center space-y-4 bg-white p-2 rounded-l-2xl shadow-lg">
//       <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//         <Instagram className="w-6 h-6 text-black hover:text-orange-500" />
//       </a>
//       <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//         <Facebook className="w-6 h-6 text-black hover:text-orange-500" />
//       </a>
//       <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//         <Linkedin className="w-6 h-6 text-black hover:text-orange-500" />
//       </a>
//       <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
//         <Youtube className="w-6 h-6 text-black hover:text-orange-500" />
//       </a>
//       <a href="tel:+1234567890" className="text-black hover:text-orange-500">
//         <Phone className="w-6 h-6" />
//       </a>
//     </div>
//   );
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//     <Head>
//     <title>Nyeras - Affordable E-learning with Certification & Job Placement</title>
//     <meta name="description" content="Nyeras is an affordable online learning platform by Nyera Educational Trust, offering specialized training for government and MNC jobs with certification, internship, and industry-ready skills. 100% placement assistance and LinkedIn profile optimization included. Trusted by 2000+ students with high placement success." />
//     <meta property="og:url" content="https://www.nyeras.com/" />
//     <meta property="og:title" content="Nyeras - Affordable E-learning with Certification & Job Placement" />
//     <meta property="og:description" content="Specialized training for public and private sector jobs with certification, internship, and industry-ready skills." />
//     <meta property="og:image" content="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" />
//     <meta property="og:image:width" content="800" />
//     <meta property="og:image:height" content="600" />
//     <meta property="og:site_name" content="Nyeras" />
//     <meta name="twitter:card" content="summary_large_image" />
//     <meta name="twitter:site" content="@nyeras" />
//     <meta name="twitter:creator" content="@nyeras" />
//     <meta name="twitter:title" content="Nyeras - Affordable E-learning with Certification & Job Placement" />
//     <meta name="twitter:description" content="Specialized training for public and private sector jobs with certification, internship, and industry-ready skills." />
//     <meta name="twitter:image" content="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" />
// </Head>
// <div className="min-h-screen bg-black text-white pt-[72px]">
//   {/* Announcement Bar */}
//   <div className="bg-orange-700 overflow-hidden fixed top-0 left-0 right-0 z-50">
//     <div className="py-1 animate-marquee whitespace-nowrap flex">
//       <span className="text-sm mx-4">🎓 New course alert: Advanced Machine Learning - Enroll now!</span>
//       <span className="text-sm mx-4">📚 Summer sale: 30% off on all courses - Limited time offer!</span>
//       <span className="text-sm mx-4">🌟 Join our webinar on "Future of AI in Education" - Register today!</span>
//     </div>
//   </div>

//   {/* Header */}
//   <header className="bg-white text-black p-3 fixed top-8 left-0 right-0 z-40 shadow-md">
//     <div className="container mx-auto flex justify-between items-center">
//       {/* Logo Section */}
//       <div className="flex items-center space-x-2">
//         <Image
//           src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png"
//           alt="Nyeras Logo"
//           width={40}
//           height={40}
//           className="rounded-full"
//         />
//         <h1 className="text-2xl md:text-3xl font-bold">Nyeras</h1>
//       </div>

//       {/* Navigation Menu */}
//       <nav className="hidden md:flex space-x-4">
//         <a href="#" className="hover:text-orange-500">Courses</a>
//         <a href="#" className="hover:text-orange-500">About</a>
//         <a href="#" className="hover:text-orange-500">Team</a>
//         <a href="#" className="hover:text-orange-500">Contact</a>
//       </nav>

//       {/* Enroll Now Button */}
//       <a
//         href="tel:+1234567890"
//         className="hidden md:flex px-4 py-2 bg-orange-100 text-orange-600 rounded font-medium items-center space-x-1 shadow hover:bg-orange-200 transition"
//       >
//         <span>Enroll Now</span>
//         <svg
//           className="w-4 h-4"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M5 19L19 5M5 5h14v14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
//         </svg>
//       </a>

//       {/* Mobile Menu Toggle */}
//       <button onClick={toggleSidebar} className="md:hidden">
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </button>
//     </div>
//   </header>

//   {/* Sidebar */}
//   <div
//     className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-gray-800 z-50 transform ${
//       isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//     } transition-transform duration-300`}
//   >
//     <div className="p-4 flex items-center justify-between">
//       <div className="flex items-center space-x-2">
//         <Image
//           src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png"
//           alt="Nyeras Logo"
//           width={40}
//           height={40}
//           className="rounded-full"
//         />
//         <h1 className="text-2xl font-bold text-white">Nyeras</h1>
//       </div>
//       <button onClick={toggleSidebar} className="text-white">
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//         </svg>
//       </button>
//     </div>
//     <nav className="mt-4">
//       <a href="#" className="block py-2 px-4 text-white hover:bg-orange-500">Courses</a>
//       <a href="#" className="block py-2 px-4 text-white hover:bg-orange-500">About</a>
//       <a href="#" className="block py-2 px-4 text-white hover:bg-orange-500">Team</a>
//       <a href="#" className="block py-2 px-4 text-white hover:bg-orange-500">Contact</a>
//     </nav>
//   </div>

//   {/* Main Section */}
//   <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8">
//     <div className="max-w-7xl mx-auto">
//       <div className="lg:grid lg:grid-cols-12 lg:gap-8">
//         {/* Text Content */}
//         <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
//           <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
//             <span className="block xl:inline">Unlock Your Potential with</span>{' '}
//             <span className="block text-blue-600 xl:inline">Nyeras</span>
//           </h1>
//           <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
//             Empower your learning journey with our cutting-edge online courses. Gain skills, knowledge, and confidence to excel in today's digital world.
//           </p>
//           <div className="mt-8 sm:max-w-lg sm:mx-auto lg:text-left">
//             <button className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition duration-300 mr-4">
//               Explore Courses
//             </button>
//             <button className="inline-flex items-center px-5 py-3 border border-blue-600 text-blue-600 bg-white rounded-md hover:bg-blue-50 transition duration-300">
//               Free Trial
//             </button>
//           </div>
//         </div>

//         {/* Image/Video Section */}
//         <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
//           <div className="relative w-full rounded-lg shadow-lg lg:max-w-md">
//             <div className="relative block w-full bg-white rounded-lg overflow-hidden">
//               <img
//                 className="w-full"
//                 src="/placeholder.svg?height=400&width=600"
//                 alt="Online learning illustration"
//               />
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <svg className="h-20 w-20 text-blue-600" fill="currentColor" viewBox="0 0 84 84">
//                   <circle opacity="0.9" cx="42" cy="42" r="42" fill="white" />
//                   <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </main>


//   {/* Hero Section */}
//   <section className="bg-gradient-to-b from-orange-500 to-black text-center py-20 px-4">
//     <h2
//       className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-wide"
//       data-aos="fade-up"
//     >
//       Empower Your Future with Nyeras
//     </h2>
//     <p
//       className="text-2xl text-gray-200 mb-8 max-w-2xl mx-auto"
//       data-aos="fade-up"
//       data-aos-delay="200"
//     >
//       Discover a world of knowledge with our cutting-edge online courses
//     </p>
//     <button
//       className="bg-white text-orange-600 font-semibold py-3 px-8 rounded-full hover:bg-orange-100 transition duration-300 transform hover:scale-105"
//       data-aos="fade-up"
//       data-aos-delay="400"
//     >
//       Explore Courses
//     </button>
//   </section>


//       {/* Impact Section */}
//       <section className="py-16 px-4 bg-white text-white">
//         <div className="container mx-auto text-center">
//           <h3 className="text-4xl font-bold mb-10 text-black" data-aos="fade-up">
//             Our Impact
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Students Counter */}
//             <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="fade-right" data-aos-delay="200">
//               <h4 className="text-5xl font-bold text-orange-500 mb-2">{studentsCount}+</h4>
//               <p className="text-lg mt-2">Students</p>
//             </div>

//             {/* Educators Counter */}
//             <div className="p-8 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300" data-aos="fade-left" data-aos-delay="400">
//               <h4 className="text-5xl font-bold text-orange-500 mb-2">{educatorsCount}+</h4>
//               <p className="text-lg mt-2">Educators</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section className="py-20 px-4 bg-white text-gray-300">
//         <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
//           {/* Text Content */}
//           <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0 text-center lg:text-left" data-aos="fade-up">
//             <h3 className="text-4xl font-bold mb-6 text-black">About Nyeras</h3>
//             <p className="text-lg mb-6 text-black" data-aos="fade-up" data-aos-delay="200">
//               Nyeras is a cutting-edge EdTech platform dedicated to empowering learners worldwide. Our mission is to make high-quality education accessible to everyone, regardless of their background or location.
//             </p>
//             <p className="text-lg mb-6 text-black" data-aos="fade-up" data-aos-delay="400">
//               With a team of expert educators and industry professionals, we offer a diverse range of courses designed to equip you with the skills needed in today&apos;s rapidly evolving job market.
//             </p>
//             <button
//               className="bg-orange-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-orange-700 transition duration-300 transform hover:scale-105"
//               data-aos="fade-up"
//               data-aos-delay="600"
//             >
//               Learn More About Us
//             </button>
//           </div>

//           {/* Image Section */}
//           <div className="lg:w-1/2 flex justify-center lg:justify-end" data-aos="fade-up" data-aos-delay="100">
//             <Image
//               src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" // Replace with your actual image URL
//               alt="About Nyeras"
//               width={350} // Adjusted width for better visuals
//               height={350} // Adjusted height for better visuals
//               className="rounded-lg  transition duration-300"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Featured Courses */}

// <section className="py-16 px-4 bg-white">
//   <h3 className="text-3xl font-bold text-center mb-10 text-black" data-aos="fade-up">Featured Courses</h3>
//   <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//     {[
//       { title: 'Web Development', imageUrl: 'https://nyeras.com/assets/kubernetes-GroH8BNI.jpeg' },
//       { title: 'Data Science', imageUrl: 'https://nyeras.com/assets/kubernetes-GroH8BNI.jpeg' },
//       { title: 'Digital Marketing', imageUrl: 'https://nyeras.com/assets/kubernetes-GroH8BNI.jpeg' },
//       { title: 'UX Design', imageUrl: 'https://nyeras.com/assets/testing-GHbQc5Tb.jpeg' },
//       { title: 'Machine Learning', imageUrl: 'https://nyeras.com/assets/testing-GHbQc5Tb.jpeg' },
//       { title: 'Mobile App Development', imageUrl: 'https://nyeras.com/assets/testing-GHbQc5Tb.jpeg' }
//     ].map((course, index) => (
//       <div
//         key={index}
//         className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
//         data-aos="fade-up"
//         data-aos-delay={index * 100}
//       >
//         {/* Image Section */}
//         <div className="relative w-full h-48">
//           <Image
//             src={course.imageUrl}
//             alt={course.title}
//             layout="fill"
//             objectFit="cover"
//             className="rounded-t-lg"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="p-6">
//           <h4 className="text-xl font-semibold mb-2">{course.title}</h4>
//           <p className="text-gray-400 mb-4">
//             Learn the essentials of {course.title.toLowerCase()} and boost your career.
//           </p>
//           <a href="#" className="text-orange-500 hover:text-orange-400">Learn more →</a>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>


//       {/* Key Features */}
//       <section className="bg-gray-900 py-16 px-4">
//   <div className="container mx-auto">
//     <h3 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Why Choose Nyeras?</h3>
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//       {[
//         { icon: <Book className="w-12 h-12 text-orange-500 mx-auto mb-4" />, title: 'Expert-Led Courses' },
//         { icon: <GraduationCap className="w-12 h-12 text-orange-500 mx-auto mb-4" />, title: 'Recognized Certifications' },
//         { icon: <Users className="w-12 h-12 text-orange-500 mx-auto mb-4" />, title: 'Community Support' },
//         { icon: <LightbulbIcon className="w-12 h-12 text-orange-500 mx-auto mb-4" />, title: 'Innovative Learning' },
//       ].map((feature, index) => (
//         <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
//           {feature.icon}
//           <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
//           <p className="text-gray-400">Experience the best in online education with our unique features.</p>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>


//       {/* Team Section */}
//       <section className="py-16 px-4">
//         <div className="container mx-auto">
//           <h3 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Meet Our Team</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { name: 'K Sekhar', role: 'President', image: 'https://nyeras.com/assets/SEKHARWEBPAGE-WbYKgERj.png' },
//               { name: 'K S Pavan Sai', role: 'Founder and Director', image: 'https://nyeras.com/assets/PAVANWEBPAGE-Iwi4rpwT.png' },
//               { name: 'K S Yeswanth Sai', role: 'Co-Founder & Managing director', image: 'https://nyeras.com/assets/YESWANTHWEBPAGE-DQCzR2b8.png' },
//               { name: 'E Naveen Kumar', role: 'Chief Manager - Technical', image: 'https://nyeras.com/assets/naveen-GLV0WuOk.jpeg' },
//             ].map((member, index) => (
//               <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={index * 100}>
//                 <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full mx-auto mb-4" />
//                 <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
//                 <p className="text-gray-400">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Find Us Section */}
//       <section className="py-16 px-4 bg-gray-900">
//         <div className="container mx-auto">
//           <h3 className="text-3xl font-bold text-center mb-10" data-aos="fade-up">Find Us</h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <div data-aos="fade-right">
//               <div className="flex items-center mb-4">
//                 <MapPin className="w-6 h-6 text-orange-500 mr-2" />
//                 <h4 className="text-xl font-semibold">Our Location</h4>
//               </div>

//               <p className="text-gray-400 mb-4">Adarsh nagar, anantapur, Andhra Pradesh 515001</p>
//               <p className="text-gray-400 mb-4">Open Monday to Friday, 9:00 AM - 5:00 PM</p>
//               <button className="bg-orange-600 text-white font-bold py-2 px-6 rounded-full hover:bg-orange-700 transition duration-300">
//                 Get Directions
//               </button>
//             </div>
//             <div data-aos="fade-left">
//               <div className="aspect-w-16 aspect-h-9">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3677833503657!2d77.57369427520908!3d14.691781674837532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb14b86a9219e8f%3A0x76dd87e33455c246!2sNYERAS%20INSTITUTIONS!5e0!3m2!1sen!2sin!4v1730561922650!5m2!1sen!2sin"
//                   width="600"
//                   height="450"
//                   style={{ border: 0 }}
//                   allowFullScreen
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                   title="Nyeras Location Map"
//                   className="w-full h-full rounded-lg shadow-lg"
//                 ></iframe>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       <FloatingSidebar />
//       <button
//         className={`back-to-top ${showButton ? 'show' : ''}`}
//         onClick={scrollToTop}
//         aria-label="Back to top"
//       >
//         ↑ Top
//       </button>
//       <section className="py-16 px-4 bg-gradient-to-b from-gray-800 to-black text-center">
//         <h3 className="text-3xl md:text-4xl font-bold text-white mb-6" data-aos="fade-up">
//           Download Our App
//         </h3>
//         <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="200">
//           Get access to our courses and stay connected on the go. Download the Nyeras app on the Google Play Store now!
//         </p>
//         <div data-aos="fade-up" data-aos-delay="400">
//           <a href="https://play.google.com/store/apps/details?id=co.lily.lfjjz&hl=en_IN" target="_blank" rel="noopener noreferrer">
//             <Image src={PlayStoreBadge} alt="Get it on Google Play" width={160} height={60} className="mx-auto" />
//           </a>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="bg-gray-800 py-12 px-4">
//         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div data-aos="fade-up">
//             <div className="flex items-center space-x-2 mb-4">
//               <Image src="https://nyeras.com/assets/nyera_logo-VjIEE-cq.png" alt="Nyeras Logo" width={40} height={40} className="rounded-full" />
//               <h4 className="text-xl font-bold">Nyeras</h4>
//             </div>
//             <p className="text-gray-400">Empowering learners worldwide through innovative online education.</p>
//           </div>
//           <div data-aos="fade-up" data-aos-delay="200">
//             <h4 className="text-xl font-bold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               <li><a href="#" className="text-gray-400 hover:text-orange-500">Courses</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-orange-500">About Us</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-orange-500">Team</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-orange-500">Contact</a></li>
//             </ul>
//           </div>
//           <div data-aos="fade-up" data-aos-delay="400">
//             <h4 className="text-xl font-bold mb-4">Contact Us</h4>
//             <ul className="space-y-2">
//               <li className="flex items-center">
//                 <Mail className="w-5 h-5 mr-2 text-orange-500" />
//                 <a href="mailto:info@nyeras.com" className="text-gray-400 hover:text-orange-500">thenyera@gmail.com</a>
//               </li>
//               <li className="flex items-center">
//                 <Phone className="w-5 h-5 mr-2 text-orange-500" />
//                 <a href="tel:+1234567890" className="text-gray-400 hover:text-orange-500">+91 7013586357</a>
//               </li>
//             </ul>
//             <div className="flex space-x-4 mt-4">
//               <a href="#" className="text-gray-400 hover:text-orange-500">
//                 <Instagram className="w-6 h-6" />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-orange-500">
//                 <Youtube className="w-6 h-6" />
//               </a>
//             </div>
//           </div>
//         </div>
//         <div className="border-t border-gray-700 mt-8 pt-8 text-center">
//           <p className="text-gray-400">&copy; 2024 Nyeras. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//     </>
//   )
// }
