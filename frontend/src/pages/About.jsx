import React from "react"

import FoundingStory from "../assets/Images/FoundingStory.png"
import BannerImage1 from "../assets/Images/aboutus1.webp"
import BannerImage2 from "../assets/Images/aboutus2.webp"
import BannerImage3 from "../assets/Images/aboutus3.webp"
import Footer from "../components/Common/Footer"
import ReviewSlider from "../components/Common/ReviewSlider"
import ContactFormSection from "../components/core/AboutPage/ContactFormSection"
import LearningGrid from "../components/core/AboutPage/LearningGrid"
import Quote from "../components/core/AboutPage/Quote"
import StatsComponenet from "../components/core/AboutPage/Stats"
import HighlightText from "../components/core/HomePage/HighlightText"

const About = () => {
  return (
    <div>
      

      
      <section className="bg-richblack-700">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-center text-white">
          <header className="mx-auto py-20 text-4xl font-semibold lg:w-[70%]">
            Driving Innovation in Online Education for a
            <HighlightText text={"Brighter Future"} />
            <p className="mx-auto mt-3 text-center text-base font-medium text-richblack-300 lg:w-[95%]">
              Studynotion is at the forefront of driving innovation in online
              education. We're passionate about creating a brighter future by
              offering cutting-edge courses, leveraging emerging technologies,
              and nurturing a vibrant learning community.
            </p>
          </header>
          <div className="sm:h-[70px] lg:h-[150px]"></div>
          <div className="absolute bottom-0 left-[50%] grid w-[100%] translate-x-[-50%] translate-y-[30%] grid-cols-3 gap-3 lg:gap-5">
            <img src={BannerImage1} alt="" />
            <img src={BannerImage2} alt="" />
            <img src={BannerImage3} alt="" />
          </div>
        </div>
      </section>

      

      <section className="border-b border-richblack-700">
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="h-[100px] "></div>
          <Quote />
        </div>
      </section>

      <section>
        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Founding Story
              </h1>
              <p className=" font-medium text-richblack-100 lg:w-[95%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>

            <div>
              <img
                src={FoundingStory}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
              Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      <StatsComponenet />
      <section className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <LearningGrid />
        <ContactFormSection />
      </section>

      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
    {/* Reviews from Other Learner */}
    <h1 className="text-center text-4xl font-semibold mt-8">
      TERMS AND CONDITIONS
    </h1>
    <p className="font-medium text-richblack-100 lg:w-[95%]">
      Welcome to StudyNotion. By accessing or using our platform, you agree to comply with and be bound by these Terms and Conditions.
      <br />
      <br />
      Use of the Platform
      <br />
      - Users must be at least 18 years old or have parental consent to use the platform.
      <br />
      - All content provided on the platform is for educational purposes only.
      <br />
      <br />
      User Accounts
      <br />
      - Users must provide accurate and complete information when creating an account.
      <br />
      - Users are responsible for maintaining the confidentiality of their account information.
      <br />
      <br />
      Intellectual Property
      <br />
      - All content on the platform, including courses, videos, and text, is the intellectual property of StudyNotion or its licensors.
      <br />
      <br />
      Limitation of Liability
      <br />
      - StudyNotion is not liable for any damages arising from the use or inability to use the platform.
      <br />
      <br />
      Changes to Terms
      <br />
      - StudyNotion reserves the right to modify these terms at any time. Changes will be posted on the website.
      <br />
      <br />
      <h1 className="text-left text-2xl font-semibold mt-8">
      Privacy Policy
    </h1>
      <br />
      
      We value your privacy and are committed to protecting your personal information.
      <br />
      <br />
      Information Collection
      <br />
      - We collect information you provide when you create an account, such as name, email, and payment information.
      <br />
      <br />
      Use of Information
      <br />
      - We use your information to provide and improve our services, process transactions, and communicate with you.
      <br />
      <br />
      Data Security
      <br />
      - We implement security measures to protect your information from unauthorized access.
      <br />
      <br />
      Changes to Policy
      <br />
      - We may update this policy from time to time. Changes will be posted on the website.
      <br />
      <br />
      <h1 className="text-left text-2xl font-semibold mt-8">
      Refunds/Cancellations Policy
    </h1>
      
    
      
      <br />
      We aim to provide the best educational experience. If you are not satisfied, we offer a refund policy.
      <br />
      <br />
      Refund Eligibility
      <br />
      - Refunds are available for courses purchased within 30 days.
      <br />
      - Courses must not have been completed or accessed significantly.
      <br />
      <br />
      Refund Process
      <br />
      - To request a refund, contact us via our support email.
      <br />
      - Refunds will be processed within 5-7 working days and credited to the original payment method.
      <br />
      <br />
      <h1 className="text-left text-2xl font-semibold mt-8">
      Pricing Policy
    </h1>
       
      <br />
      Our pricing is designed to provide value for our educational content.
      <br />
      <br />
      Pricing Changes
      <br />
      - Prices for courses may change. Current prices will be reflected on the website at the time of purchase.
      <br />
      <br />
      Discounts and Promotions
      <br />
      - We may offer discounts and promotions. These are subject to terms specific to each offer.
      <br />
      <br />
      <h1 className="text-left text-2xl font-semibold mt-8">
      Shipping Policy
    </h1>  
      <br />
      We deliver our services digitally; however, if physical materials are provided, the following applies.
      <br />
      <br />
      Shipping Timeline
      <br />
      - Minimum shipping time: 5 working days.
      <br />
      - Maximum shipping time: 15 working days.
      <br />
      <br />
      </p>













    <p className="font-medium text-richblack-100 lg:w-[95%]">
    <h1 className="text-center text-4xl font-semibold mt-8">
      CONTACT US
    
    </h1>
      <br />
     
      <h1 className="text-center text-3xl font-semibold mt-8">
      Contact Details
    </h1>
      <br />
      - Email: bansalkushagra96@gmail.com
      <br />
      - Phone: +91-9718550901
      <br />
      - Address: B-14/52 STUDYNOTION SECTOR 34 GAUTAM BUDH NAGAR DISCTRICT, UTTAR PRADESH, INDIA
      <br />
      
      </p>

      


      
              
      </div>

     
      <Footer />
    </div>
  )
}

export default About
