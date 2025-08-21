"use client";

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

// Add to your global CSS or in a style tag
const styles = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
    25% { transform: translateY(-20px) translateX(10px) rotate(2deg); }
    50% { transform: translateY(0) translateX(20px) rotate(0deg); }
    75% { transform: translateY(20px) translateX(10px) rotate(-2deg); }
  }
  
  .animate-float {
    animation: float 15s ease-in-out infinite;
  }
  
  .animation-delay-2000 {
    animation-delay: 2s;
  }
  
  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;
import { 
  FaArrowLeft, 
  FaBolt, 
  FaShieldAlt, 
  FaUserShield,  
  FaCookieBite, 
  FaAd, 
  FaUserFriends, 
  FaChild, 
  FaSync,
  FaServer,
  FaHeadset
} from 'react-icons/fa';
import { 
  BsFillShieldLockFill, 
  BsGlobe2, 
  BsShieldLock,
  BsListCheck
} from 'react-icons/bs';
import { MdOutlinePrivacyTip, MdOutlinePolicy } from 'react-icons/md';
import HeaderBar from "@/components/HeaderBar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  const router = useRouter();

  const handleContactSupport = () => {
    router.push('/support');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-emerald-900 text-gray-100">
      <style jsx global>{styles}</style>
      <HeaderBar />
      
      {/* Modern Glassmorphism Banner */}
      <section className="relative w-full rounded-b-3xl min-h-[280px] md:min-h-[280px] overflow-hidden bg-gradient-to-r from-emerald-900 via-green-800 to-teal-900 mt-10 flex items-center justify-center">
        {/* Dynamic Grid Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 70%)',
        }}></div>

        {/* Animated Gradient Mesh */}
        

        {/* Floating Elements */}
        

        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-8 text-center">
          {/* Animated Icon Container */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg rounded-2xl transform rotate-6"></div>
            <div className="relative w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg">
              <BsFillShieldLockFill className="text-white text-4xl" />
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-5xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-emerald-100"
          >
            Privacy Policy
          </motion.h1>
          
          {/* Animated Subtitle */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-emerald-100/90 max-w-2xl leading-relaxed"
          >
            Your data security is our top priority
          </motion.p>

          {/* Decorative Elements */}
          <div className="absolute -bottom-10 left-1/4 w-32 h-32 bg-emerald-400/10 rounded-full filter blur-xl"></div>
          <div className="absolute -top-10 right-1/4 w-24 h-24 bg-teal-400/10 rounded-full filter blur-xl"></div>
        </div>

        {/* Animated Border Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent">
          <div className="w-full h-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse"></div>
        </div>
      </section>

      <main className="relative z-10 -mt-8 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 flex-1">
        {/* Main Content */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-700 shadow-2xl rounded-2xl p-8 md:p-10">

          <div className="prose prose-invert max-w-none">
            <section className="mb-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaBolt className="mr-3 text-green-400" />
                Welcome to GameBoost!
              </h2>
              <p className="mb-4">
                At GameBoost, accessible from <a href=" "className="text-blue-400 hover:underline"></a>, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by GameBoost and how we use it.
              </p>
              <p className="mb-6">
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
              </p>
              <p>
                This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in GameBoost. This policy is not applicable to any information collected offline or via channels other than this website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaShieldAlt className="mr-3 text-green-400" />
                Consent
              </h2>
              <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaUserShield className="mr-3 text-green-400" />
                Information we collect
              </h2>
              <p className="mb-4">
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p className="mb-4">
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>
              <p>
                When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FaShieldAlt className="mr-3 text-green-400" />
                How we use your information
              </h2>
              <p className="mb-4">
                We use the information we collect in various ways, including to:
              </p>
              <ol className="list-decimal pl-6 space-y-2 mb-6">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Send you emails</li>
                <li>Find and prevent fraud</li>
              </ol>

              <h3 className="text-xl font-bold text-white mt-8 mb-3 flex items-center">
                <FaServer className="mr-3 text-green-400" />
                Log Files
              </h3>
              <p className="mb-4">
                GameBoost follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3 flex items-center">
                <FaCookieBite className="mr-3 text-green-400" />
                Cookies and Web Beacons
              </h3>
              <p className="mb-4">
                Like any other website, GameBoost
                uses "cookies". These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3 flex items-center">
                <FaAd className="mr-3 text-green-400" />
                Advertising Partners Privacy Policies
              </h3>
              <p className="mb-4">
                You may consult this list to find the Privacy Policy for each of the advertising partners of GameBoost.
              </p>
              <p className="mb-4">
                Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on GameBoost, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
              </p>
              <p className="mb-4">
                Note that GameBoost has no access to or control over these cookies that are used by third-party advertisers.
              </p>

              <h3 className="text-xl font-bold text-white mt-8 mb-3 flex items-center">
                <FaUserFriends className="mr-3 text-green-400" />
                Third Party Privacy Policies
              </h3>
              <p className="mb-4">
               GameBoost's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
              </p>
              <p className="mb-6">
                You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-3 flex items-center">
                <MdOutlinePrivacyTip className="mr-2 text-green-400 text-2xl" />
                CCPA Privacy Rights (Do Not Sell My Personal Information)
              </h3>
              <p className="mb-4">
                Under the CCPA, among other rights, California consumers have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
                <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
                <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
              </ul>
              <p className="mb-6">
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-3 flex items-center">
                <BsShieldLock className="mr-2 text-green-400 text-2xl" />
                GDPR Data Protection Rights
              </h3>
              <p className="mb-4">
                We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li><strong>The right to access</strong> – You have the right to request copies of your personal data. We may charge you a small fee for this service.</li>
                <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.</li>
                <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
                <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
                <li><strong>The right to object to processing</strong> – You have the right to object to our processing of your personal data, under certain conditions.</li>
                <li><strong>The right to data portability</strong> – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
              </ul>
              <p className="mb-6">
                If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-3 flex items-center">
                <FaChild className="mr-2 text-green-400 text-2xl" />
                Children's Information
              </h3>
              <p className="mb-4">
                Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
              </p>
              <p className="mb-6">
                GameBoost does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
              </p>

              <h3 className="text-2xl font-bold text-white mt-8 mb-3 flex items-center">
                <FaSync className="mr-2 text-green-400 text-2xl" />
                Changes to This Privacy Policy
              </h3>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
              <p className="mb-6">
                If you have any questions or suggestions about our Privacy Policy, please don't hesitate to contact our support team.
              </p>
              <div className="mt-12 text-center">
              <button
                onClick={handleContactSupport}
                className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white font-medium py-3 px-8 rounded-xl shadow-lg hover:shadow-green-500/20 transition-all duration-300 flex items-center mx-auto"
              >
                <FaHeadset className="mr-2" />
                Contact Support
              </button>
            </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}