import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">

        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://ai-voice-interview-prep.vercel.app"><img src="/images/project1.png" alt="AI Interview Prep Interface" /></a>
            </div>
            <div className="text-content">
              <h2>
                On-Demand Mock Interviews Made Simple with a Powerful, User-Friendly App
                called Prepwise
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with Next.Js, Vapi AI, & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#060521]">
                <a href="https://codeflex-ai-afras-project13.vercel.app"><img src="/images/project2.png" alt="AI Fitness Coach"/></a>
              </div>
              <h2>Codeflex - An AI Fitness Trainer</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://ai-voice-lms-platform-afras-project16.vercel.app"><img src="/images/project3.png" alt="AI LMS Platform" /></a>
              </div>
              <h2>AI powered Learning Management System Platform</h2>
            </div>
          </div>
        </div>
        <br/>
        <br/>


        <div className="showcaselayout">
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={rydeRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <a href="https://storage-management-driverr-afras-project15.vercel.app"><img src="/images/project4.png" alt="Storage Management Driver"/></a>
              </div>
              <h2>StoreIt - A Storage Management Driver</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#ccf4d4]">
                <a href="https://ai-finance-split-tracker-afras-proj.vercel.app"><img src="/images/project5.png" alt="AI Finance Split Tracker" /></a>
              </div>
              <h2>AI powered Finance Split Platform</h2>
            </div>
          </div>
          <div ref={libraryRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://banking-management-system-afras-project14.vercel.app"><img src="/images/project6.png" alt="Banking Management System" /></a>
            </div>
            <div className="text-content">
              <h2>
                End-to-End Banking, Tansfering, Monitoring Fund Made with a Powerful, User-Friendly App
                called Horizon
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with Next.Js, Plaid, Dwolla & TailwindCSS for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
        </div>
        <br/>
        <br/>


        <div className="showcaselayout">
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={rydeRef}>
              <div className="image-wrapper bg-[#ccf4d4]">
                <a href="https://greencart-afras-project9.vercel.app"><img src="/images/project8.png" alt="Ecommerce"/></a>
              </div>
              <h2>Greencart - Online Grocery Store</h2>
            </div>
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#020510]">
                <a href="https://mern-chat-app-86wl.onrender.com"><img src="/images/project7.png" alt="Chat App" /></a>
              </div>
              <h2>MERN Stack Real-Time Chat App</h2>
            </div>
          </div>
          <div ref={libraryRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://carepulse-afras-project8.vercel.app"><img src="/images/project9.png" alt="Patient Management System" /></a>
            </div>
            <div className="text-content">
              <h2>
                Healthcare platform that streamlines patient registration, appointment
                and medical records
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with Next.Js, Twilio, & TypeScript for a fast,
                user-friendly experience.
              </p>
            </div>
          </div>
        </div>
        <br/>
        <br/>

        
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <a href="https://zentry-gaming-afras-project5.vercel.app"><img src="/images/project10.png" alt="Zentry Website" /></a>
            </div>
            <div className="text-content">
              <h2>
                Zentry Gaming Landing Page
              </h2>
            </div>
          </div>
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#000000]">
                <a href="https://apple-website-afras-project1.vercel.app"><img src="/images/project11.png" alt="Apple Website"/></a>
              </div>
              <h2>Apple - Iphone 15 Pro & Pro Max</h2>
            </div>
            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#140121]">
                <a href="https://brainwave-afras-project2.vercel.app"><img src="/images/project12.png" alt="AI Chat App" /></a>
              </div>
              <h2>Brainwave - An AI Chat Landing Page</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
