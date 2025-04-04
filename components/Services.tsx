import React from 'react'

const services = [
    { 
        id: '01', 
        title: 'Modern Web Development', 
        description: 'Building fast, scalable, and responsive websites using the latest frontend technologies like React, Next.js, and Tailwind CSS.'
    },
    { 
        id: '02', 
        title: 'Performance Optimization', 
        description: 'Optimizing web applications for faster load times, better SEO, and improved user experience using best practices in caching, lazy loading, and code splitting.'
    },
    { 
        id: '03', 
        title: 'Responsive UI/UX Design', 
        description: 'Designing visually appealing, mobile-friendly, and user-centric interfaces that enhance engagement and usability.'
    },
    { 
        id: '04', 
        title: 'API Integration & State Management', 
        description: 'Connecting frontend applications with RESTful APIs, GraphQL, and managing state efficiently with React Context, Redux, or Zustand.'
    },
    { 
        id: '05', 
        title: 'Component-Based Architecture', 
        description: 'Developing reusable and maintainable UI components using best practices in component-driven development with React and Storybook.'
    },
    { 
        id: '06', 
        title: 'Web Animations & Interactions', 
        description: 'Enhancing user experience with smooth animations and transitions using Framer Motion, GSAP, and CSS animations.'
    },
    { 
        id: '07', 
        title: 'Firebase Integration', 
        description: 'Implementing Firebase Authentication, Firestore, Cloud Functions, and Realtime Database for secure and scalable web applications.'
    },
    { 
        id: '08', 
        title: 'Headless CMS with Sanity', 
        description: 'Developing dynamic and easily manageable websites using Sanity CMS, ensuring seamless content management and structured data handling.'
    }
];


const Services = () => {
   
    
  return (
    <section className="text-white py-20">
    <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
            <h2 className="text-5xl text-purple-300 font-extrabold sticky top-20">SERVICES</h2>
        </div>
            <div className='md:w-3/4'>
             {services.map(service => (
                <div key={service.id} className='mb-16 flex items-start'>
                     <div className='text-gray-300 font-bold text-5xl mr-6'>{service.id}
                     </div>
                <div>
                         <h3 className='text-2xl font-bold mb-2'>{service.title}</h3>
                         <p>{service.description}</p>
                     </div>
                     </div>
             ))}
                </div>
            </div>

       
      
    </section>
  )
}

export default Services
