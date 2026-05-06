

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  Suspense,
} from "react";
import axios from "axios";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Code,
  Headphones,
  ShieldCheck,
  Users,
  X,
  Building2,
  Cloud,
  Database,
  Smartphone,
  Zap,
  Search,
  CheckCircle2,
  Rocket,
  Shield,
  ShoppingCart,
  MessageCircle,
  Star,
  Clock,
  Wrench,
  Landmark,
  Building,
  User,
  Code2
} from "lucide-react";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Environment,
  PerspectiveCamera,
  Sphere,
} from "@react-three/drei";

import img4 from "../Component/Mobile/img/Atlaimage.jpg";
import MobileOnboarding from "./Mobile/Mobilebraing";
import { useNavigate } from "react-router-dom";
import img1 from "./Mobile/img/mobileviewpart1.png";
import img6 from "./Mobile/img/mobileview.png";
import FounderImg from "./Mobile/img/nagar.jpg";
import MdImg from "../assets/Images/managerdirector.jpeg";
import CeoImg from "./Mobile/img/CEO.jpg";
import CtoImg from "./Mobile/img/CTO.jpg";
import OurTeam from "./Mobile/img/OurTeam.jpg";
import OurTeam2 from "./Mobile/img/silder.jpeg";
import OurTeam3 from "./Mobile/img/silder3.jpeg";

import { useTheme } from "../context/ThemeContext";

// ─── Counter Component ────────────────────────────────────────
function Counter({ value, duration = 2.5 }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const target = Number(value) || 0;
    const controls = animate(count, target, { duration, ease: "easeOut" });
    return () => controls.stop();
  }, [isInView, value, duration, count]);

  return (
    <div ref={ref} className="inline-block">
      <motion.span>{rounded}</motion.span>
    </div>
  );
}

// ─── Animated Sphere ──────────────────────────────────────────
const AnimatedSphere = ({ position, color }) => {
  const meshRef = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.003;
      meshRef.current.rotation.y += 0.004;
      meshRef.current.position.y =
        position[1] + Math.sin(Date.now() * 0.0006 + position[0]) * 0.18;
    }
  });
  return (
    <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.9}>
      <Sphere ref={meshRef} args={[1.1, 42, 42]} position={position}>
        <meshStandardMaterial
          color={color}
          roughness={0.55}
          metalness={0.35}
          transparent
          opacity={0.82}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => (
  <>
    <PerspectiveCamera makeDefault position={[0, 0, 9.5]} />
    <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
    <ambientLight intensity={0.65} />
    <pointLight position={[10, 10, 10]} intensity={1.3} color="#dc2626" />
    <pointLight position={[-10, -10, -10]} intensity={0.85} color="#ef4444" />
    <pointLight position={[0, 6, 6]} intensity={1.0} color="#f87171" />
    <AnimatedSphere position={[-2.8, 1.8, -2.2]} color="#dc2626" />
    <AnimatedSphere position={[2.8, -1.6, -1.8]} color="#ef4444" />
    <AnimatedSphere position={[0.4, 2.4, 0.8]} color="#f87171" />
    <AnimatedSphere position={[-1.2, -2.1, -3.5]} color="#991b1b" />
    <Environment preset="city" />
  </>
);

const particlesOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  interactivity: {
    events: { onClick: { enable: true, mode: "push" }, onHover: { enable: true, mode: "repulse" }, resize: true },
    modes: { push: { quantity: 4 }, repulse: { distance: 140, duration: 0.4 } },
  },
  particles: {
    color: { value: ["#dc2626", "#ef4444", "#f87171"] },
    links: { color: "#dc2626", distance: 140, enable: true, opacity: 0.15, width: 1 },
    move: { direction: "none", enable: true, outModes: { default: "bounce" }, random: true, speed: 1.1, straight: false },
    number: { density: { enable: true, area: 800 }, value: 70 },
    opacity: { value: 0.35 },
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3.5 } },
  },
  detectRetina: true,
};

// Animation Variants
const fadeInUp = { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const fadeInLeft = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const fadeInRight = { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
const scaleIn = { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut" } } };
const staggerContainer = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };
const imageVariants = { initial: { opacity: 0, x: 40 }, animate: { opacity: 1, x: 0, transition: { duration: 1.1, ease: "easeOut" } }, exit: { opacity: 0, x: -40, transition: { duration: 1.1, ease: "easeIn" } } };

// Icons
const LinkedInIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

// FAQ Accordion
const FAQAccordion = ({ isDark }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What kind of projects do you take?", answer: "We handle custom web & mobile applications, enterprise software, government / PSU compliant systems, cloud migrations, legacy modernization, and full digital transformation initiatives." },
    { question: "Do you provide maintenance after launch?", answer: "Yes — we offer comprehensive Application Maintenance Services (AMS) including proactive monitoring, bug fixes, performance optimization, security patches, and regular updates." },
    { question: "What are your BPO working hours?", answer: "We provide 24/7 support coverage with multiple shifts. Most clients choose 24×5 or 24×7 depending on their time zone and SLA requirements." },
    { question: "Which technologies do you work with?", answer: "Frontend: React, Next.js, TypeScript | Backend: Java + Spring Boot, Node.js, Python | Databases: PostgreSQL, MongoDB, MySQL | Cloud: AWS, Azure, GCP | Others: Docker, Kubernetes, CI/CD pipelines." },
    { question: "How do you ensure data security & compliance?", answer: "We follow ISO 27001 practices, implement encryption at rest & in transit, conduct regular security audits, follow GDPR / DPDP / IT Act guidelines (where applicable), and provide role-based access control." },
  ];

  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <div key={index} className={`group backdrop-blur-lg border rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${isDark ? "bg-gray-950/75 border-red-900/50 hover:shadow-red-900/40" : "bg-white border-gray-200 hover:shadow-red-200/60 shadow-gray-200"}`}>
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`w-full px-6 md:px-8 py-6 text-left flex items-center justify-between transition-colors duration-300 ${isDark ? "hover:bg-red-950/40" : "hover:bg-red-50"}`}
          >
            <span className={`text-xl md:text-2xl font-semibold transition-colors ${isDark ? "text-white group-hover:text-red-300" : "text-gray-900 group-hover:text-red-600"}`}>
              {faq.question}
            </span>
            <ChevronDown className={`w-7 h-7 md:w-8 md:h-8 flex-shrink-0 text-red-500 transition-transform duration-300 ${openIndex === index ? "rotate-180 scale-110" : "scale-100"}`} />
          </button>

          <motion.div
            initial={false}
            animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`px-6 md:px-8 pb-6 pt-3 leading-relaxed text-base md:text-lg border-t ${isDark ? "text-gray-200 border-red-900/40" : "text-gray-700 border-gray-200"}`}>
              {faq.answer}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

// Leader Card
const LeaderCard = ({ img, alt, name, role, exp, desc, linkedIn, github, isDark }) => (
  <motion.div variants={scaleIn} whileHover={{ scale: 1.05, y: -10 }} className={`backdrop-blur-sm border rounded-2xl overflow-hidden shadow-xl transition-all duration-300 ${isDark ? "bg-gray-900/60 border-red-900/30 shadow-red-950/30" : "bg-white border-gray-200 shadow-gray-200"}`}>
    <div className="relative">
      <img src={img} alt={alt} className="w-full h-64 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
    </div>
    <div className="p-6 text-center">
      <h3 className={`text-2xl font-bold mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>{name}</h3>
      <p className="font-semibold mb-2 text-red-500">{role}</p>
      <p className={`text-sm mb-3 ${isDark ? "text-gray-400" : "text-gray-500"}`}>{exp}</p>
      <p className={`text-sm leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>{desc}</p>
      <div className="flex justify-center gap-6 mt-4">
        <a href={linkedIn} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? "text-gray-400 hover:text-red-500" : "text-gray-500 hover:text-red-500"}`}><LinkedInIcon /></a>
        <a href={github} target="_blank" rel="noopener noreferrer" className={`transition-colors ${isDark ? "text-gray-400 hover:text-red-500" : "text-gray-500 hover:text-red-500"}`}><GitHubIcon /></a>
      </div>
    </div>
  </motion.div>
);

export default function About() {
  const navigate = useNavigate();
  const { isDark } = useTheme();

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", category: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const teamImages = [OurTeam2, OurTeam3];
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Auto rotate
  useEffect(() => {
    const timer = setInterval(() => setActiveTestimonial((prev) => (prev + 1) % 3), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveImageIndex((prev) => (prev + 1) % teamImages.length), 4800);
    return () => clearInterval(interval);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      await axios.post("http://localhost:8000/query/create", formData);
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "", category: "" });
      setTimeout(() => { setIsModalOpen(false); setSuccess(false); }, 2000);
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const testimonials = [
    { text: "The website exceeded our expectations. The design is clean, professional, and helped us get more leads. Highly recommended!", author: "Dabeer", rating: 5 },
    { text: "Very professional service. Our online presence improved significantly after launching the website and running ads.", author: "Karamveer", rating: 4 },
    { text: "Amazing work! From website development to Meta Ads management, everything was handled perfectly", author: "Aman", rating: 5 },
  ];

  const bg = isDark ? "bg-black" : "bg-gray-50";
  const text = isDark ? "text-white" : "text-gray-900";
  const subText = isDark ? "text-gray-300" : "text-gray-600";
  const inputClass = isDark ? "bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-red-600" : "bg-gray-100 border-gray-300 text-gray-900 placeholder-gray-400 focus:border-red-500";
  const headingClass = isDark ? "text-white" : "text-gray-900";
  const bodyClass = isDark ? "text-gray-300" : "text-gray-700";
  const cardClass = isDark ? "bg-gray-900/70 border-red-900/40 hover:border-red-700/60 hover:shadow-red-950/50" : "bg-white border-gray-200 hover:border-red-200 hover:shadow-xl";

  return (
    <div className={`min-h-screen ${bg} ${text} relative overflow-x-hidden transition-colors duration-500`}>
      {/* Particles */}
      {isDark && <Particles id="tsparticles" init={particlesInit} options={particlesOptions} className="absolute inset-0 z-0" />}

      {/* Gradient Blobs */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-20 right-0 w-96 h-96 rounded-full blur-3xl animate-pulse ${isDark ? "bg-red-600/20" : "bg-red-100/60"}`} />
        <div className={`absolute bottom-40 left-0 w-96 h-96 rounded-full blur-3xl animate-pulse delay-1000 ${isDark ? "bg-red-800/15" : "bg-red-100/40"}`} />
      </div>

      {/* ====================== HERO SECTION ====================== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2340&q=80" alt="About Background" className="w-full h-full object-cover" />
          <div className={`absolute inset-0 ${isDark ? "bg-gradient-to-br from-black/85 via-black/75 to-black/90" : "bg-gradient-to-br from-black/60 via-black/50 to-black/40"}`} />
        </div>

        <div className="absolute inset-0 z-10">
          <Canvas>
            <Suspense fallback={null}>
              <Scene3D />
            </Suspense>
          </Canvas>
        </div>

        <div className={`absolute inset-0 z-20 ${isDark ? "bg-gradient-to-br from-red-950/40 via-black/60 to-black/80" : "bg-gradient-to-br from-red-50/70 via-white/60 to-white/80"}`} />

        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-30 w-full max-w-7xl mx-auto text-center">
          <motion.div variants={fadeInUp} className="mb-10 pt-20 md:pt-24">
            <h1 className={`text-6xl md:text-7xl lg:text-8xl font-black mb-6 ${text}`}>ABOUT AI Knots</h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
              <span className={isDark ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-600" : "text-red-600"}>Your Technology Partner</span>
            </h2>
          </motion.div>

          <motion.p variants={fadeInUp} className={`text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed px-4 ${subText}`}>
            We provide complete digital services,{" "}
            <span className={`font-semibold ${isDark ? "text-red-500" : "text-red-600"}`}>including SEO, digital marketing,</span> website development, social media management, software development, and ERP solutions.
          </motion.p>

          {/* Image Blocks */}
          <div className="space-y-16 lg:space-y-24 pb-16 pt-20">
            <div className="flex flex-col md:flex-row items-stretch min-h-[500px] lg:min-h-[680px]">
              <div className={`w-full md:w-5/12 z-10 flex flex-col justify-center order-2 md:order-1 px-6 md:px-10 lg:px-16 py-12 md:py-16 ${isDark ? "bg-gradient-to-r from-gray-900/90 to-transparent" : "bg-gradient-to-r from-white/95 to-transparent"}`}>
                <h3 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${text}`}>Building the <span className="text-red-500">Future</span></h3>
                <p className={`text-lg md:text-xl leading-relaxed mb-8 max-w-xl ${subText}`}>At we believe technology should empower—not complicate.</p>
                <button onClick={() => setIsModalOpen(true)} className="px-8 py-4 rounded-full font-semibold transition w-fit text-white bg-red-600 hover:bg-red-700">Get Started</button>
              </div>
              <div className="w-full md:w-7/12 self-end order-1 md:order-2">
                <img src={img4} alt="Collaboration" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-stretch min-h-[500px] lg:min-h-[680px]">
              <div className={`w-full md:w-5/12 z-10 flex flex-col justify-center px-6 md:px-10 lg:px-16 py-12 md:py-16 ${isDark ? "bg-gradient-to-l from-gray-900/90 to-transparent" : "bg-gradient-to-l from-white/95 to-transparent"}`}>
                <h3 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 ${text}`}>Innovation Meets <span className="text-red-500">Excellence</span></h3>
                <p className={`text-lg md:text-xl leading-relaxed mb-8 max-w-xl ${subText}`}>We transform businesses through seamless digital solutions.</p>
              </div>
              <div className="w-full md:w-7/12 relative group overflow-hidden order-1 md:order-2">
                <img src={img1} alt="Innovation" className="w-full h-full object-contain md:object-cover transition-opacity duration-500 group-hover:opacity-0" />
                <img src={img6} alt="Innovation Hover" className="w-full h-full object-contain md:object-cover absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </div>
          </div>

          <motion.div variants={fadeInUp} className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center px-4">
            <button onClick={() => setIsModalOpen(true)} className="px-12 py-6 rounded-full text-xl font-bold transition flex items-center gap-2 text-white bg-gradient-to-r from-red-600 to-red-800 shadow-lg shadow-red-900/50 hover:shadow-red-900/70">Start Building Your Future <ArrowRight className="w-6 h-6" /></button>
            <button onClick={() => navigate("/recentwork")} className="px-10 py-6 border-2 rounded-full transition flex items-center gap-3 font-medium border-red-600/60 hover:bg-red-950/20 text-red-400">See Our Solutions <ArrowRight className="w-5 h-5" /></button>
          </motion.div>

          {/* Contact Modal */}
          <AnimatePresence>
            {isModalOpen && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={(e) => e.target === e.currentTarget && setIsModalOpen(false)}>
                <motion.div initial={{ scale: 0.8, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.8, opacity: 0, y: 50 }} className={`border rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden ${isDark ? "bg-gray-900 border-red-900/30" : "bg-white border-gray-200"}`}>
                  <div className={`px-6 py-4 flex justify-between items-center ${isDark ? "bg-gradient-to-r from-red-900/80 to-red-800/60" : "bg-gradient-to-r from-red-700 to-red-600"}`}>
                    <h2 className="text-xl font-bold text-white">Get in Touch</h2>
                    <button onClick={() => setIsModalOpen(false)} className="text-white hover:text-red-300 transition"><X className="w-7 h-7" /></button>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {["name", "email", "phone"].map((field) => (
                      <input key={field} type={field === "email" ? "email" : field === "phone" ? "tel" : "text"} name={field} placeholder={`${field.charAt(0).toUpperCase() + field.slice(1)} *`} value={formData[field]} onChange={handleChange} required className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${inputClass}`} />
                    ))}
                    <select name="category" value={formData.category} onChange={handleChange} required className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${inputClass}`}>
                      <option value="" disabled>Select Category *</option>
                      <option value="SEO">SEO</option>
                      <option value="Software Developer">Software Developer</option>
                      <option value="BPO">BPO</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Other">Other</option>
                    </select>
                    <textarea name="message" placeholder="Your Message / Requirement..." value={formData.message} onChange={handleChange} rows={4} className={`w-full px-4 py-3 border rounded-lg focus:outline-none ${inputClass}`} />
                    <button type="submit" disabled={loading} className={`w-full py-4 rounded-lg font-bold text-lg text-white transition ${loading ? "bg-gray-700 cursor-not-allowed" : "bg-red-700 hover:bg-red-600 shadow-lg shadow-red-900/40"}`}>{loading ? "Sending..." : "Submit Inquiry"}</button>
                    {success && <p className="text-green-500 text-center font-medium">Thank you! We'll get back to you soon.</p>}
                    {error && <p className="text-red-500 text-center">{error}</p>}
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* ====================== ABOUT / STATS SECTION ====================== */}
      <section className={`relative py-16 px-4 sm:px-6 lg:px-8 transition-colors ${isDark ? "bg-black" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <p className={`text-xl md:text-2xl max-w-4xl mx-auto px-4 ${subText}`}>Technology that connects. Solutions that deliver. Partnerships that last.</p>
          </motion.div>

          <div className={`relative h-96 mb-12 rounded-2xl overflow-hidden border ${isDark ? "border-red-900/20" : "border-red-100"}`}>
            <Canvas><Suspense fallback={null}><Scene3D /></Suspense></Canvas>
          </div>

          {/* About + Team Carousel */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="grid md:grid-cols-2 gap-8 items-center mb-12">
            <motion.div variants={fadeInLeft} className="space-y-6">
              <h5 className="font-semibold text-xl text-red-500">About Our Solution</h5>
              <h2 className={`text-4xl md:text-5xl font-bold ${text}`}>#1 Partner For Your Business Growth</h2>
              <p className={`text-lg leading-relaxed ${subText}`}>We deliver cutting-edge technology solutions that transform businesses...</p>
              <div className="grid grid-cols-2 gap-8 my-8">
                <div><div className={`text-4xl font-black text-red-500`}>50+</div><p className={subText}>Projects Delivered</p></div>
                <div><div className={`text-4xl font-black text-red-500`}>100+</div><p className={subText}>Happy Clients</p></div>
              </div>
              <button onClick={() => setIsModalOpen(true)} className="px-10 py-4 rounded-full text-lg font-semibold transition text-white bg-red-600 hover:bg-red-700">Read More →</button>
            </motion.div>

            <motion.div variants={fadeInRight} className={`relative rounded-2xl shadow-2xl overflow-hidden border aspect-[4/3] md:aspect-[5/4] lg:aspect-[3/2] ${isDark ? "border-red-900/30" : "border-gray-200"}`}>
              <AnimatePresence initial={false} mode="wait">
                <motion.img key={activeImageIndex} src={teamImages[activeImageIndex]} alt="Our team working" className="absolute inset-0 w-full h-full object-cover" variants={imageVariants} initial="initial" animate="animate" exit="exit" />
              </AnimatePresence>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5 z-10">
                {teamImages.map((_, idx) => (
                  <button key={idx} onClick={() => setActiveImageIndex(idx)} className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === activeImageIndex ? "bg-red-500 shadow-md shadow-red-600/50 scale-125" : "bg-white/50 hover:bg-white/80"}`} />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          
          {/* Stats Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          >
            {[
              { num: "50+", label: "Projects Delivered", icon: Code },
              { num: "24/7", label: "Support Coverage", icon: Headphones },
              { num: "90%", label: "Uptime Commitment", icon: ShieldCheck },
              { num: "99+", label: "Happy Clients", icon: Users },
            ].map((item, index) => {
              const isAnimated = !item.num.includes("/");
              const numericValue = isAnimated ? parseFloat(item.num) : null;
              return (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={isDark ? { scale: 1.05, y: -8 } : {}}
                  className={`border rounded-2xl p-8 text-center flex flex-col items-center justify-center min-h-[220px] transition-all duration-300
                    ${
                      isDark
                        ? "bg-gradient-to-br from-gray-900 to-black border-red-900/30"
                        : "bg-white border-gray-200 shadow-md"
                    }`}
                >
                  <item.icon
                    className={`w-14 h-14 mx-auto mb-5 text-red-500`}
                  />
                  <div
                    className={`text-5xl md:text-6xl lg:text-7xl font-black mb-2 tracking-tight leading-none ${text}`}
                  >
                    {isAnimated ? (
                      <>
                        <Counter value={numericValue} duration={2.6} />
                        {item.num.includes("+") && (
                          <span className="text-red-500">+</span>
                        )}
                        {item.num.includes("%") && (
                          <span className="text-red-500">%</span>
                        )}
                      </>
                    ) : (
                      <span className="flex items-baseline justify-center gap-1">
                        <span>24</span>
                        <span className="text-6xl font-black text-red-500">
                          /
                        </span>
                        <span>7</span>
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-lg md:text-xl font-medium mt-3 ${subText}`}
                  >
                    {item.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
          <div className="mb-12"><MobileOnboarding /></div>
        </div>
      </section>

      {/* ====================== LEADERSHIP SECTION ====================== */}
      <section className={`relative py-16 px-4 sm:px-6 lg:px-8 transition-colors ${isDark ? "bg-gradient-to-b from-black to-gray-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <h2 className={`text-5xl md:text-7xl font-black mb-4 ${text}`}>Meet Our <span className="text-red-500">Leadership</span></h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${subText}`}>The visionaries driving AI Knots toward innovation and excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <LeaderCard isDark={isDark} img={CeoImg} alt="Ghulam Haider" name="Ghulam Haider" role="Founder" exp="15+ Years of Experience" desc="Visionary leader with over 15 years of experience in IT and digital transformation." linkedIn="https://www.linkedin.com/in/aley-nabi-9396b31b/" github="https://github.com/aleynabi-atlaknots" />
            <LeaderCard isDark={isDark} img={FounderImg} alt="Rakesh Nagar" name="Rakesh Nagar" role="Chief Executive Officer" exp="15+ Years of Experience" desc="Strategic leader with over 15 years of experience in driving business growth and innovation." linkedIn="https://www.linkedin.com/in/aley-nabi-9396b31b/" github="https://github.com/aleynabi-atlaknots" />
            <LeaderCard isDark={isDark} img={MdImg} alt="Alquma jabeen" name="Alquma jabeen" role="Managing Director" exp="7+ Years of Experience" desc="With over 7 years of expertise in the Banking sector and 3+ years of experience in Business Process Outsourcing (BPO)" linkedIn="https://www.linkedin.com/in/aley-nabi-profile" github="https://github.com/aleynabi-atlaknots" />
            <LeaderCard isDark={isDark} img={CtoImg} alt="Azhar Uddin" name="Azhar Uddin" role="Chief Technical Officer" exp="7+ Years of Experience" desc="Leading technical innovation, architecture, and engineering teams to deliver cutting-edge solutions." linkedIn="https://www.linkedin.com/in/aley-nabi-profile" github="https://github.com/aleynabi-atlaknots" />
          </div>
        </div>
      </section>

      {/* ====================== OUR TEAM SECTION ====================== */}
      <section className="py-16 px-5 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center mb-12">
            <h2 className={`text-5xl md:text-6xl font-black mb-4 ${text}`}>Our <span className="text-red-500">Team</span></h2>
            <p className={`text-xl md:text-2xl max-w-3xl mx-auto ${subText}`}>The passionate people behind AI Knots' success</p>
          </motion.div>
          <div className={`rounded-2xl overflow-hidden border shadow-2xl ${isDark ? "border-red-900/30" : "border-gray-200"}`}>
            <img src={OurTeam} alt="Our Team" className="w-full h-auto max-h-[700px] object-cover" />
          </div>
        </div>
      </section>

      {/* ====================== SERVICES SECTION ====================== */}
      <section className={`py-24 relative overflow-hidden ${isDark ? "bg-gradient-to-b from-black to-gray-900" : "bg-gradient-to-b from-gray-50 to-white"}`}>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${headingClass}`}>Our Core Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6"></div>
            <p className={`text-lg max-w-2xl mx-auto ${bodyClass}`}>From ideation to 24/7 support — we deliver end-to-end excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {[
              { title: "Application & Website Development", icon: Code, items: [{ text: "Corporate websites", icon: Building2 }, { text: "Enterprise web applications", icon: Cloud }, { text: "Portals & dashboards", icon: Database }, { text: "Mobile applications", icon: Smartphone }, { text: "Microservices & cloud-based systems", icon: Zap }] },
              { title: "Testing & Quality Assurance", icon: Search, items: [{ text: "Manual testing", icon: CheckCircle2 }, { text: "Automation testing", icon: Zap }, { text: "Performance testing", icon: Rocket }, { text: "Security testing", icon: Shield }] },
              { title: "Digital Marketing & E-commerce Solutions", icon: ShoppingCart, items: [{ text: "SEO & SEM services", icon: Search }, { text: "Social media marketing", icon: MessageCircle }, { text: "E-commerce platform development", icon: Building2 }, { text: "Content marketing & strategy", icon: Star }, { text: "Conversion rate optimization", icon: ArrowRight }] },
              { title: "Production Support & Maintenance", icon: Wrench, items: [{ text: "24×7 application support", icon: Clock }, { text: "Bug fixing & enhancements", icon: Wrench }, { text: "SLA-based support", icon: CheckCircle2 }, { text: "Monitoring & incident management", icon: Shield }] },
              { title: "BPO & IT Staffing Solutions", icon: Users, items: [{ text: "IT staffing & recruitment", icon: Building2 }, { text: "BPO services", icon: Landmark }, { text: "Remote team augmentation", icon: Building2 }, { text: "Project-based staffing", icon: ArrowRight }] },
            ].map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div key={idx} className={`group relative rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-3 ${cardClass}`}>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                      <ServiceIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-6 ${headingClass}`}>{service.title}</h3>
                    <ul className="space-y-4">
                      {service.items.map((item, i) => {
                        const ItemIcon = item.icon;
                        return (
                          <li key={i} className={`flex items-start gap-3 ${bodyClass} hover:translate-x-2 transition-all duration-300`}>
                            <ItemIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                            <span>{item.text}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


<section className={`py-24 relative overflow-hidden ${isDark ? "bg-gradient-to-b from-black to-gray-900" : "bg-gradient-to-b from-gray-50 to-white"}`}>
  <div className="container mx-auto px-6 lg:px-8 relative z-10">
    <div className="text-center mb-16">
      <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${headingClass}`}>
        Industry-Specific Solutions
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-800 mx-auto mb-6"></div>
      <p className={`text-lg max-w-2xl mx-auto ${bodyClass}`}>
        Tailored digital solutions designed for diverse industry verticals
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
      {[
        {
          title: "Banking & Financial Services",
          icon: Landmark,
          items: [
            { text: "Core banking support", icon: Building2 },
            { text: "Loan management systems", icon: Database },
            { text: "Payment integrations", icon: Zap },
            { text: "KYC / AML solutions", icon: Shield },
            { text: "Secure APIs & reporting", icon: Code2 }
          ]
        },
        {
          title: "Retail & E-Commerce",
          icon: ShoppingCart,
          items: [
            { text: "E-commerce platforms", icon: ShoppingCart },
            { text: "Order & inventory management", icon: Database },
            { text: "Payment gateways", icon: Zap },
            { text: "CRM & loyalty systems", icon: Building2 }
          ]
        },
        {
          title: "Enterprise Solutions",
          icon: Building,
          items: [
            { text: "HRMS", icon: Building2 },
            { text: "ERP modules", icon: Database },
            { text: "Workflow automation", icon: Zap },
            { text: "Reporting & analytics", icon: Code2 }
          ]
        },
        {
          title: "Government & PSU Projects",
          icon: Landmark,
          items: [
            { text: "Citizen portals", icon: Building2 },
            { text: "Data management systems", icon: Database },
            { text: "Secure web applications", icon: Shield },
            { text: "Long-term support contracts", icon: CheckCircle2 }
          ]
        }
      ].map((domain, idx) => {
        const DomainIcon = domain.icon;
        return (
          <div
            key={idx}
            className={`group relative rounded-3xl p-8 border transition-all duration-500 hover:-translate-y-3 ${cardClass}`}
          >
            <div className="relative z-10">
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-all duration-300">
                <DomainIcon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className={`text-2xl font-bold mb-6 ${headingClass} group-hover:text-red-600 transition-colors`}>
                {domain.title}
              </h3>

              {/* List Items */}
              <ul className="space-y-4">
                {domain.items.map((item, i) => {
                  const ItemIcon = item.icon;
                  return (
                    <li
                      key={i}
                      className={`flex items-start gap-3 ${bodyClass} hover:translate-x-2 transition-all duration-300`}
                    >
                      <ItemIcon className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  );
                })}
              </ul>

              {/* Optional "Explore" Button */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button className="text-red-600 hover:text-red-700 font-medium flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>
      {/* ====================== TESTIMONIALS ====================== */}
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-12 px-4">
        <h2 className={`text-5xl font-black text-center mb-12 ${text}`}>What Our <span className="text-red-500">Clients Say</span></h2>
        <div className="relative max-w-4xl mx-auto h-80 md:h-72">
          {testimonials.map((t, idx) => (
            <motion.div key={idx} animate={{ opacity: idx === activeTestimonial ? 1 : 0, scale: idx === activeTestimonial ? 1 : 0.9 }} transition={{ duration: 0.6 }} className={`absolute inset-0 border rounded-3xl p-10 flex flex-col justify-between ${isDark ? "bg-gradient-to-br from-gray-900/90 to-black/90 border-red-900/30" : "bg-white border-gray-200 shadow-lg"}`} style={{ pointerEvents: idx === activeTestimonial ? "auto" : "none" }}>
              <div className="flex gap-1 text-2xl text-red-500">{"★".repeat(t.rating)}</div>
              <p className={`text-2xl italic ${isDark ? "text-gray-100" : "text-gray-700"}`}>"{t.text}"</p>
              <p className={`font-bold ${text}`}>{t.author}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveTestimonial(i)} className={`h-3 rounded-full transition-all ${i === activeTestimonial ? "w-10 bg-red-600" : "w-3 bg-gray-400"}`} />
          ))}
        </div>
      </motion.div>

      {/* ====================== FAQ + FINAL CTA ====================== */}
      <div className="relative z-10 max-w-6xl mx-auto pb-16 px-4">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer}>
          <motion.h2 variants={fadeInUp} className={`text-4xl sm:text-5xl md:text-6xl font-extrabold text-center mb-6 md:mb-8 tracking-tight ${text}`}>FREQUENTLY <span className="text-red-500">ASKED</span> QUESTIONS</motion.h2>
          <motion.p variants={fadeInUp} className={`text-lg sm:text-xl md:text-2xl text-center mb-12 md:mb-16 font-light max-w-4xl mx-auto ${subText}`}>Got questions? We've got clear, straightforward answers.</motion.p>
          <FAQAccordion isDark={isDark} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="text-center py-16">
          <h3 className={`text-5xl md:text-6xl font-black mb-8 px-4 ${text}`}>Ready to build something <span className="text-red-500">great</span> together?</h3>
          <p className={`text-xl mb-10 max-w-2xl mx-auto px-4 ${subText}`}>Let's turn your vision into reality. Our team is ready to start today.</p>
          <button onClick={() => setIsModalOpen(true)} className="px-12 py-6 rounded-full text-2xl font-bold shadow-2xl transition text-white bg-gradient-to-r from-red-600 to-red-800 hover:shadow-red-900/70">LET'S START THE CONVERSATION →</button>
        </motion.div>
      </div>
    </div>
  );
}