import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Layout from "./Component/Layout";
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import Contact from "./Component/Contact";

import FitnessApp from "./Component/Mobile/Fitnessapplanding";
import MobileOnboarding from "./Component/Mobile/Mobilebraing";
import FitnessAppLanding from "./Component/Mobile/Fitnessapplanding";

import Technology from "./Technology/Technology";
import TechNews from "./Technology/TechNews";

import RecentWork from "./Component/Recentwork/Recentwork";
import CareerPage from "./Component/Carrer/Carrerpage";
import Gallery from "./Gallery/Gallery";

import Blog from "./Component/Blog/Blog";
import BlogDetail from "./Component/Blog/BlogDetail";

import DigitalMarketing from "./Component/DigitalMarketing/DigitalMarketing";
import SEO from "./Component/DigitalMarketing/SEO";
import GraphicDesigning from "./Component/Graphic/Graphic";

import SoftwareDevelopment from "./Component/SoftwareDevelopment/SoftwareDevelopment";
import MobileAppDevelopment from "./Component/SoftwareDevelopment/MobileAppDevelopment";
import ERPDevelopment from "./Component/SoftwareDevelopment/ERPDevelopment";
import PaidAdv from "./Component/PaidAdvatisment/PaidAdv";
import LocalMarketing from "./Component/LocalMarketing/LocalMarketing";
import EcommerceDevelopment from "./Component/SoftwareDevelopment/EcommerceDevelopment";
import CloudSolutions from "./Component/SoftwareDevelopment/CloudSolutions";
import AIServices from "./Component/SoftwareDevelopment/AIServices";
import SocialMediaMarketing from "./Component/SoftwareDevelopment/SocialMediaMarketing";
import ContentWritingBranding from "./Component/Design/ContentWritingBranding";
import WebsiteDesignDevelopment from "./Component/Design/WebsiteDesignDevelopment";
import UiUxDesign from "./Component/Design/UiUxDesign";
import PrivacyPolicy from "./Component/PrivacyPolicy/PrivacyPolicy";
import CookiePolicy from "./Component/CookiePolicy/CookiePolicy";
import TermsOfService from "./Component/TermsOfService/TermsOfService";
import ScrollToTop from "./Component/ScrollToTop/ScrollToTop";
import Portfolio from "./Component/Portfolio/Portfolio";
import TechnologyDetail from "./Technology/TechnologyDetail";
// import ScrollToTop from "./Component/ScrollToTop";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="service" element={<Service />} />
            <Route path="contact" element={<Contact />} />
            <Route path="mobile" element={<FitnessApp />} />
            <Route path="mobile-onboarding" element={<MobileOnboarding />} />
            <Route path="branding" element={<FitnessApp />} />
            <Route path="fitness" element={<FitnessAppLanding />} />
            <Route path="technology" element={<Technology />} />
            <Route path="technews" element={<TechNews />} />
            <Route path="careers" element={<CareerPage />} />
            <Route path="recentwork" element={<RecentWork />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogDetail />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="/technology/:id" element={<TechnologyDetail />} />
            <Route path="digital-marketing" element={<DigitalMarketing />} />
            <Route path="seo" element={<SEO />} />
            <Route path="graphics" element={<GraphicDesigning />} />

            <Route path="software" element={<SoftwareDevelopment />} />
            <Route
              path="mobiledevelopment"
              element={<MobileAppDevelopment />}
            />
            <Route path="erpdevelopment" element={<ERPDevelopment />} />
            <Route path="graphicdesign" element={<GraphicDesigning />} />
            <Route path="paidadv" element={<PaidAdv />} />
            <Route path="localmarketing" element={<LocalMarketing />} />
            <Route
              path="ecommercedevelopment"
              element={<EcommerceDevelopment />}
            />
            <Route path="cloudsolutions" element={<CloudSolutions />} />
            <Route path="ai-mlservice" element={<AIServices />} />
            <Route
              path="socialmediamarketing"
              element={<SocialMediaMarketing />}
            />

            <Route
              path="contentwritingbranding"
              element={<ContentWritingBranding />}
            />
            <Route path="uidesign" element={<UiUxDesign />} />
            <Route
              path="websitedesigndevelopment"
              element={<WebsiteDesignDevelopment />}
            />

            <Route path="privacypolicy" element={<PrivacyPolicy />} />

            <Route path="cookiepolicy" element={<CookiePolicy />} />

            <Route path="termsofservice" element={<TermsOfService />} />

            <Route path="/portfolio" element={<Portfolio />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </HelmetProvider>
  );
};

export default App;
