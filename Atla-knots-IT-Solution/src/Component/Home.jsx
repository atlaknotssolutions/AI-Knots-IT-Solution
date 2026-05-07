import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  ArrowRight,
  X,
  Code,
  ShieldCheck,
  Users,
  Server,
  Headphones,
  BarChart3,
  CheckCircle,
  Briefcase,
  HardDrive,
  ChevronDown,
} from "lucide-react";
import heroVideo from "../assets/herosectionvideo.mp4";

// ReCAPTCHA & Toast
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  updateField,
  setCaptcha,
  clearMessages,
  submitContactForm,
} from "./Redux/contact/contactSlice.js";

import background from "../assets/Images/backgroundimage1.jpeg";
import background2 from "../assets/Images/backgroundimage2.jpeg";

import background3 from "../assets/Images/backgroundimage3.jpeg";

// React Router for navigation
import { useNavigate } from "react-router-dom";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// Hero Slider Data
const HERO_SLIDES = [
  {
    image: background,
    title: "Global IT Services",
    subtitle:
      "End-to-end digital transformation, product engineering, and cloud delivery for growing brands",
    cta: "Discover ATLA",
  },
  {
    image: background2,
    title: "Marketing & Growth",
    subtitle:
      "Performance marketing, SEO, and brand campaigns designed to convert and scale",
    cta: "Grow with ATLA",
  },
  {
    image: background3,
    title: "Creative Product Design",
    subtitle:
      "UX-driven web and mobile experiences that engage users and accelerate adoption",
    cta: "See Solutions",
  },
];

export default function Home() {
  const { isDark } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate(); // For navigation to Portfolio

  const { formData, captchaValue, loading, successMessage, errorMessage } =
    useSelector((state) => state.contact);

  const [showPopup, setShowPopup] = useState(false);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Auto slide for hero slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Popup appears after 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => setShowPopup(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Toast Notifications
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage, { position: "top-right", autoClose: 5000 });
      dispatch(clearMessages());
      setShowPopup(false);
    }
  }, [successMessage, dispatch]);

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, { position: "top-right", autoClose: 7000 });
      dispatch(clearMessages());
    }
  }, [errorMessage, dispatch]);

  const handleChange = (e) => {
    dispatch(updateField({ name: e.target.name, value: e.target.value }));
  };

  const handleCaptchaChange = (value) => {
    dispatch(setCaptcha(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValue) {
      toast.error("Please verify that you are not a robot.");
      return;
    }
    dispatch(submitContactForm({ ...formData, captcha: captchaValue }));
  };

  // Navigate to Portfolio Page
  const goToPortfolio = () => {
    navigate("/portfolio");
  };

  // Reusable Classes with Red Theme
  const cardClass = isDark
    ? "bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:border-red-500/50 transition-colors"
    : "bg-white border border-gray-200 shadow-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center h-full hover:shadow-xl transition-shadow";

  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
  const accentClass = "text-red-500";
  const sectionHeadingAccent = "text-red-500";

  // FAQ Accordion Item Component
  const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div
        className={`border rounded-3xl overflow-hidden transition-all duration-300 ${
          isDark
            ? "border-gray-800 bg-gray-900 hover:border-red-500/40"
            : "border-gray-200 bg-white hover:border-red-200 shadow-sm"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full px-8 py-7 flex justify-between items-center text-left transition-all duration-300 hover:bg-red-50 dark:hover:bg-gray-800 ${
            isOpen ? (isDark ? "bg-gray-800" : "bg-red-50") : ""
          }`}
        >
          <span className={`font-semibold text-lg ${headingClass} pr-6`}>
            {question}
          </span>

          <div className={`transition-transform duration-300 ${accentClass}`}>
            <ChevronDown
              size={28}
              className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-400 ease-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`px-8 pb-9 pt-2 ${bodyClass} leading-relaxed`}>
            {answer}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-700
      ${isDark ? "bg-black text-white" : "bg-white text-gray-900"}`}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        theme={isDark ? "dark" : "light"}
      />

      {/* ====================== HERO SLIDER SECTION ====================== */}
      <section className="relative">
        <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentHeroSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-[0.85]"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent/30"
                w-
              />
              <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10 ">
                <div className="text-center max-w-4/5xl ">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
                    Your AI Knots Growth Journey
                    <br />
                    <span className="text-red-500">{slide.title}</span>
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <button className="bg-gradient-to-r from-red-600 via-red-500 to-rose-600 text-white font-bold uppercase tracking-wider px-10 py-5 mb-3 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
                    {slide.cta} →
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Dots - Red Theme */}
          <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentHeroSlide(i)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${
                  i === currentHeroSlide
                    ? "bg-red-500 scale-125 ring-2 ring-red-500/60"
                    : "bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Bar - Red Theme */}
        <div className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10">
          <div className="bg-white/95 backdrop-blur-lg border border-red-500/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
            {[
              { n: "10+", l: "Years of Experience" },
              { n: "5x", l: "Average return on Investment" },
              { n: "100+", l: "Businesses Transformation" },
              { n: "50+", l: "Industry we serve" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-red-500 text-4xl md:text-5xl font-extrabold">
                  {s.n}
                </div>
                <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== HERO SECTION WITH VIDEO ====================== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className={`absolute inset-0 z-10 transition-colors duration-700
              ${
                isDark
                  ? "bg-gradient-to-br from-black/90 via-black/80 to-black/90"
                  : "bg-gradient-to-br from-slate-950/95 via-slate-950/90 to-black/70"
              }`}
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-white"
            >
              AI Knots
              <br />
              <span
                className={
                  isDark
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-white via-red-400 to-white"
                    : "text-red-600"
                }
              >
                IT SOLUTIONS
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className={`text-xl md:text-2xl max-w-4xl mx-auto mb-10 leading-relaxed
                ${isDark ? "text-gray-300" : "text-white"}`}
            >
              Making technology impactful, dependable, and easy to use — for
              businesses of all sizes.
            </motion.p>
            <motion.p
              variants={fadeInUp}
              className={`text-lg md:text-xl max-w-3xl mx-auto mb-12
                ${isDark ? "text-gray-400" : "text-white/90"}`}
            >
              We build secure, future-ready software that drives efficiency and
              digital transformation.
            </motion.p>
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <button
                onClick={() => setShowPopup(true)}
                className="group px-10 py-5 rounded-full text-lg font-semibold flex items-center gap-3 transition-all
                  bg-red-600 hover:bg-red-700 active:bg-red-800 text-white"
              >
                GET STARTED
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                className={`group px-10 py-5 border-2 rounded-full text-lg font-semibold transition-all
                  ${
                    isDark
                      ? "border-red-600/60 text-red-400 hover:border-red-500 hover:text-red-300"
                      : "border-white/80 text-white hover:bg-white/10"
                  }`}
              >
                VIEW OUR WORK
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ====================== SERVICES SECTION ====================== */}
      <section
        className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
        ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`text-5xl md:text-6xl font-bold text-center mb-6 ${headingClass}`}
          >
            OUR <span className={accentClass}>SERVICES</span>
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`text-xl text-center mb-16 max-w-3xl mx-auto ${bodyClass}`}
          >
            Comprehensive IT &amp; BPO solutions — from development to support
            and infrastructure
          </motion.p>

          <div className="space-y-20">
            {/* IT Services */}
            <div>
              <h3
                className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
              >
                1. Information Technology Services
              </h3>
              <p
                className={`text-lg md:text-xl mb-12 text-center max-w-4xl mx-auto leading-relaxed ${bodyClass}`}
              >
                Supporting companies at every stage of the product lifecycle.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                {[Code, ShieldCheck, Users, Server].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={cardClass}
                  >
                    <Icon
                      className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                    />
                    <h4
                      className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                    >
                      {
                        [
                          "Development",
                          "Testing",
                          "L2 Support",
                          "Product Assistance",
                        ][index]
                      }
                    </h4>
                    <ul
                      className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                    >
                      {index === 0 && (
                        <>
                          <li>• Web application development</li>
                          <li>• Mobile application development</li>
                          <li>
                            • Secure, scalable &amp; user-friendly solutions
                          </li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>• Web application testing</li>
                          <li>• Mobile application testing</li>
                          <li>
                            • Quality, performance &amp; security assurance
                          </li>
                        </>
                      )}
                      {index === 2 && (
                        <li>
                          • Advanced troubleshooting, in-depth diagnosis &amp;
                          root cause resolution.
                        </li>
                      )}
                      {index === 3 && (
                        <>
                          <li>• Continuous support &amp; maintenance</li>
                          <li>• Ticket &amp; incident management</li>
                          <li>• Change management &amp; SLA tracking</li>
                        </>
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* BPO Services */}
            <div>
              <h3
                className={`text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight ${sectionHeadingAccent}`}
              >
                2. Business Process Outsourcing (BPO) Services
              </h3>
              <p
                className={`text-lg md:text-xl mb-12 text-center max-w-3xl mx-auto leading-relaxed ${bodyClass}`}
              >
                Streamline operations and enhance customer engagement with
                reliable support.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[Headphones, BarChart3, CheckCircle].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={cardClass}
                  >
                    <Icon
                      className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                    />
                    <h4
                      className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                    >
                      {
                        [
                          "Voice, Chat &amp; Email",
                          "Cataloguing &amp; Enrichment",
                          "Quality Assurance",
                        ][index]
                      }
                    </h4>
                    <ul
                      className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                    >
                      {index === 0 && (
                        <>
                          <li>• Inbound &amp; outbound voice support</li>
                          <li>• Real-time chat assistance</li>
                          <li>• Structured email &amp; ticketing</li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>• Product descriptions, tags &amp; keywords</li>
                          <li>• Data validation &amp; cleaning</li>
                          <li>• Category &amp; attribute enrichment</li>
                        </>
                      )}
                      {index === 2 && (
                        <p
                          className={`text-sm md:text-base leading-relaxed max-w-xs ${bodyClass}`}
                        >
                          Call/chat audits, SOP/SLA compliance, feedback &amp;
                          continuous improvement.
                        </p>
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Digital Marketing Services */}
            <div className="text-center max-w-5xl mx-auto">
              <h3
                className={`text-4xl md:text-5xl font-bold mb-8 tracking-tight ${sectionHeadingAccent}`}
              >
                3. Digital &amp; Marketing Services
              </h3>
              <p
                className={`text-lg md:text-xl leading-relaxed ${bodyClass} mb-12`}
              >
                In today’s digital-first world, building a strong online
                presence is essential for businesses to grow and stay ahead.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[Headphones, BarChart3, CheckCircle].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className={cardClass}
                  >
                    <Icon
                      className={`w-12 h-12 md:w-14 md:h-14 mb-6 ${accentClass}`}
                    />
                    <h4
                      className={`text-xl md:text-2xl font-bold mb-5 ${headingClass}`}
                    >
                      {
                        [
                          "Search Engine Optimization",
                          "Social Media Marketing",
                          "Google &amp; Meta Ads",
                        ][index]
                      }
                    </h4>
                    <ul
                      className={`text-sm md:text-base w-full max-w-xs space-y-3 ${bodyClass}`}
                    >
                      {index === 0 && (
                        <>
                          <li>• Boost your website ranking</li>
                          <li>• Increase organic traffic</li>
                          <li>• Attract the right audience</li>
                          <li>• Gain competitive edge</li>
                        </>
                      )}
                      {index === 1 && (
                        <>
                          <li>• Reach the right audience</li>
                          <li>• Build trust and brand awareness</li>
                          <li>• Increase engagement</li>
                          <li>• Convert followers into customers</li>
                        </>
                      )}
                      {index === 2 && (
                        <>
                          <li>• Targeted ad campaigns</li>
                          <li>• Improve brand visibility</li>
                          <li>• Generate quality leads</li>
                          <li>• Effective PPC strategies</li>
                        </>
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== TESTIMONIALS SECTION ====================== */}
      <section
        className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-gray-50"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2
              className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}
            >
              TESTIMONIALS
            </h2>
            <p className={`text-2xl font-medium ${accentClass}`}>
              Real Results, Real Client Experiences.
            </p>
            <p className={`mt-6 text-lg max-w-3xl mx-auto ${bodyClass}`}>
              We focus on performance, transparency, and long-term partnerships.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Swadesh Jyoti",
                text: "A reliable digital marketing partner. AI Knots understands business needs and works with clear communication.",
              },
              {
                name: "Amina",
                text: "Working with AI Knots has been a great decision. Their team understands our brand and consistently helps us reach more customers.",
              },
              {
                name: "Bharat e-Filing",
                text: "AI Knots has helped us improve our digital visibility and attract more clients. Practical and result-focused.",
              },
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`p-8 rounded-3xl h-full flex flex-col ${isDark ? "bg-gray-900 border border-gray-800" : "bg-white shadow-lg border border-gray-100"}`}
              >
                <div className="flex gap-1 text-2xl text-yellow-400 mb-6">
                  ★★★★★
                </div>
                <p className={`flex-1 leading-relaxed mb-8 ${bodyClass}`}>
                  "{testimonial.text}"
                </p>
                <p className={`font-semibold text-lg ${headingClass}`}>
                  {testimonial.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== WHY CHOOSE US ====================== */}
      <section
        className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`text-5xl md:text-6xl font-bold text-center mb-16 ${headingClass}`}
          >
            WHY <span className={accentClass}>CHOOSE US</span>
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 text-center">
            {[
              {
                icon: Users,
                title: "True Partnership",
                desc: "We become an extension of your team — understanding your business deeply.",
              },
              {
                icon: Briefcase,
                title: "Enterprise Expertise",
                desc: "Proven experience in BFSI, retail, government & PSU projects.",
              },
              {
                icon: HardDrive,
                title: "Long-term Support",
                desc: "24×7 production support, SLA-based maintenance & AMS.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className={`p-10 rounded-3xl border transition-all ${isDark ? "bg-gray-900 border-gray-800 hover:border-red-500/30" : "bg-white border-gray-200 shadow-md hover:shadow-lg"}`}
              >
                <div
                  className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 mx-auto ${isDark ? "bg-gray-800" : "bg-red-50"}`}
                >
                  <item.icon className={`w-10 h-10 ${accentClass}`} />
                </div>
                <h3 className={`text-3xl font-bold mb-5 ${headingClass}`}>
                  {item.title}
                </h3>
                <p
                  className={`leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== LET'S DISCUSS YOUR PROJECT ====================== */}
      <section
        className={`py-24 px-6 md:px-12 lg:px-24 ${isDark ? "bg-black" : "bg-white"}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2
                className={`text-5xl md:text-6xl font-bold mb-3 ${headingClass}`}
              >
                Let's Discuss Your Project
              </h2>
              <p className={`text-xl mb-10 ${bodyClass}`}>
                Tell us about your requirements. Our team will get back to you
                shortly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="usernamee"
                    value={formData.usernamee}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    disabled={loading}
                    className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    disabled={loading}
                    className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Mobile Number"
                  required
                  disabled={loading}
                  className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject (Optional)"
                  disabled={loading}
                  className={`w-full px-6 py-4 rounded-2xl border focus:outline-none focus:border-red-500 transition-colors ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us about your project..."
                  required
                  disabled={loading}
                  className={`w-full px-6 py-4 rounded-3xl border focus:outline-none focus:border-red-500 transition-colors resize-y ${isDark ? "bg-gray-900 border-gray-700 text-white" : "bg-gray-50 border-gray-300 text-gray-900"}`}
                />
                <ReCAPTCHA
                  sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
                  onChange={handleCaptchaChange}
                  theme={isDark ? "dark" : "light"}
                />
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
                  >
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      window.open("https://wa.me/917869636070", "_blank")
                    }
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-5 rounded-2xl transition-all text-lg flex items-center justify-center gap-3"
                  >
                    Chat on WhatsApp
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200 h-[420px]">
                <iframe
                  title="AI Knots - MP Nagar, Bhopal"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.8!2d77.432!3d23.198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39631f8a00000001%3A0x0!2sM.P.+Nagar+Zone+2%2C+Bhopal%2C+Madhya+Pradesh+462011!5e0!3m2!1sen!2sin!4v1738000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div
                className={`p-8 rounded-3xl ${isDark ? "bg-gray-900" : "bg-gray-50"}`}
              >
                <h3 className={`text-2xl font-semibold mb-4 ${headingClass}`}>
                  AI Knots Solutions
                </h3>
                <p className={`leading-relaxed ${bodyClass}`}>
                  103, Goyal Vihar,
                  <br />
                  Plot No 31-C, Zone 2,
                  <br />
                  M.P. Nagar, Bhopal - 462011
                  <br />
                  Madhya Pradesh, India
                </p>
                <div className="mt-6 space-y-2">
                  <a
                    href="tel:+917869636070"
                    className="block text-red-500 hover:underline"
                  >
                    +91 78696 36070
                  </a>
                  <a
                    href="mailto:admin@atlaknots.com"
                    className="block text-red-500 hover:underline"
                  >
                    admin@atlaknots.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ====================== FAQ SECTION ====================== */}
      <section
        className={`py-24 px-6 md:px-12 lg:px-24 transition-colors
        ${isDark ? "bg-gradient-to-b from-gray-950 to-black" : "bg-gray-50"}`}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h2
              className={`text-5xl md:text-6xl font-bold mb-4 ${headingClass}`}
            >
              FREQUENTLY ASKED <span className={accentClass}>QUESTIONS</span>
            </h2>
            <p className={`text-xl ${bodyClass}`}>
              Find quick answers to common questions about our services
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What services does your IT company provide?",
                a: "We offer comprehensive end-to-end IT services including Web & Mobile App Development, Custom Software Development, QA Testing, L2/L3 Support, BPO (Voice, Chat, Email), Digital Marketing (SEO, SMM, PPC, Content), Cloud Solutions, and Professional IT Training programs.",
              },
              {
                q: "Do you work with startups or only large enterprises?",
                a: "We work with businesses of all sizes — from startups and SMEs to large enterprises, government projects, and PSUs.",
              },
              {
                q: "How long does it take to complete a project?",
                a: "Project timelines depend on scope and complexity. A simple static website takes 3–6 weeks, while a full-scale web/mobile application or complex ERP/CRM project can take 3–8 months.",
              },
              {
                q: "Do you provide ongoing support and maintenance?",
                a: "Yes. We provide 24×7 production support, SLA-based Annual Maintenance Contracts (AMC), Application Management Services (AMS), and dedicated support teams.",
              },
              {
                q: "What is the process for starting a project with you?",
                a: "It starts with a free consultation call → detailed requirement gathering → proposal with timeline & cost estimate → NDA & agreement → project kickoff with regular sprint reviews and updates.",
              },
              {
                q: "Do you offer free demos or consultations?",
                a: "Absolutely! We offer free initial consultations, requirement analysis sessions, and live demos of similar projects we have delivered.",
              },
              {
                q: "Where is your IT company located?",
                a: "We are based in Bhopal, Madhya Pradesh (M.P. Nagar Zone 2). We serve clients across India and globally through remote and on-site models.",
              },
              {
                q: "What makes your IT company different from others?",
                a: "We focus on long-term partnerships, complete transparency, result-oriented delivery, quality-first approach, and post-delivery support rather than just project completion.",
              },
              {
                q: "Do you sign NDAs and ensure data security?",
                a: "Yes. We sign NDAs with every client and follow strict data security protocols, ISO standards, and secure development practices.",
              },
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ====================== PORTFOLIO CTA SECTION (NEW) ====================== */}
      <section
        className={`py-20 px-6 md:px-12 lg:px-24 ${isDark ? "bg-gray-950" : "bg-white"}`}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2
              className={`text-5xl md:text-6xl font-bold mb-6 ${headingClass}`}
            >
              Explore Our <span className="text-red-500">Portfolio</span>
            </h2>
            <p className={`text-xl max-w-2xl mx-auto mb-10 ${bodyClass}`}>
              Discover our latest projects in web development, digital
              marketing, and IT solutions that have delivered real results for
              our clients.
            </p>

            <button
              onClick={goToPortfolio}
              className="group inline-flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-semibold text-lg px-12 py-5 rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              View Complete Portfolio
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ====================== EXCLUSIVE OFFER POPUP ====================== */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
            onClick={() => setShowPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 40, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl max-w-4xl w-full overflow-hidden flex flex-col lg:flex-row max-h-[92vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Left Side - Offer Content */}
              <div className="lg:w-1/2 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 p-8 lg:p-10 pb-16 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div className="bg-red-600 text-white font-bold px-6 py-2 rounded-full text-sm tracking-wider">
                    LIMITED TIME OFFER
                  </div>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <X size={28} />
                  </button>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white mb-3">
                  Get up to <span className="text-red-600">50% OFF</span>
                  <br />
                  on IT Projects & Services
                </h2>
                <p className="text-lg text-red-600 font-medium mb-8">
                  Trusted IT Partner for Startups & Enterprises
                </p>

                <div className="relative flex justify-center my-8">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070"
                    alt="AI Knots IT Services"
                    className="w-56 lg:w-72 rounded-3xl shadow-2xl object-cover"
                  />

                  <div className="absolute -top-5 -left-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
                    <p className="text-red-600 font-semibold text-sm">
                      ★ Top Rated
                    </p>
                    <p className="font-bold text-gray-900 dark:text-white text-xs mt-1">
                      AI Knots
                    </p>
                  </div>

                  <div className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 text-center">
                    <p className="text-red-600 font-bold text-sm">
                      Bhopal Based
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white text-xs mt-1">
                      Pan India Delivery
                    </p>
                  </div>
                </div>

                <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> Web &
                    Mobile App
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> Digital
                    Marketing
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> 24×7
                    Support
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" /> 100+
                    Projects Delivered
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="lg:w-1/2 bg-white dark:bg-gray-900 p-8 lg:p-10 pb-16 flex flex-col">
                <div className="text-center mb-8">
                  <h3 className="text-red-600 text-2xl font-bold">
                    Book Free Consultation
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1 text-sm">
                    Get expert advice • No obligation • Quick Response
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 flex-1">
                  <input
                    type="text"
                    name="usernamee"
                    value={formData.usernamee}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    required
                    disabled={loading}
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email ID *"
                    required
                    disabled={loading}
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Mobile Number *"
                    required
                    disabled={loading}
                    className="w-full px-5 py-3.5 rounded-2xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 focus:border-red-500 outline-none"
                  />

                  <ReCAPTCHA
                    sitekey="6LfP7nEsAAAAAOLxpk34nW3cU3uYXON85c8n4D2H"
                    onChange={handleCaptchaChange}
                    theme={isDark ? "dark" : "light"}
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-2xl text-lg transition-all shadow-md mt-4"
                  >
                    {loading ? "Submitting..." : "Get Free Consultation"}
                  </button>

                  <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
                    ✅ No spam • 100% Free Consultation • Confidential
                  </p>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
