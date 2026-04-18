import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// --- Assets ---
import integratedFarming from './assets/integrated-farming.png';
import inhouseFarming from './assets/inhouse-farming.png';
import heroBg from './assets/hero-bg.png';

// --- Components ---
import { Layout } from './components/Layout';
import { GenericPage, ModelPage } from './components/Templates';

// --- Pages ---
import { Home } from './pages/Home';
import { FarmSetup } from './pages/FarmSetup';
import { FarmOptimization } from './pages/FarmOptimization';
import { AgriConsulting } from './pages/AgriConsulting';
import { CaseStudies } from './pages/CaseStudies';
import { FreeDPR } from './pages/FreeDPR';
import { Contact } from './pages/Contact';
import { OnboardingPage } from './pages/Onboarding';
import { ThreeDLayout } from './pages/ThreeDLayout';
import { HowWeWork } from './pages/HowWeWork';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/3d" element={<ThreeDLayout />} />
          <Route path="/farm-setup" element={<FarmSetup />} />
          <Route path="/farm-optimization" element={<FarmOptimization />} />
          <Route path="/agri-business-consulting" element={<AgriConsulting />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/free-dpr" element={<FreeDPR />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<GenericPage title="About Us" />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/hydroponics-cost-india" element={<GenericPage title="Hydroponics Cost" />} />
          <Route path="/polyhouse-farming-profit" element={<GenericPage title="Polyhouse Profit" />} />
          <Route path="/farming-business-ideas" element={<GenericPage title="Business Ideas" />} />
          <Route path="/integrated-solutions" element={<GenericPage title="Integrated Solutions" />} />
          <Route path="/models/technical-farming" element={<ModelPage title="Integrated Technical Farming" badge="Precision" desc="Smart tech integration." image={integratedFarming} features={["Full IoT Control", "Max Yield Architecture"]} />} />
          <Route path="/models/organic-farming" element={<ModelPage title="Organic Excellence" badge="Export Grade" desc="Pesticide-free farming." image={heroBg} features={["APEDA Certified", "Domestic & Global Supply"]} />} />
          <Route path="/models/aquaponics" element={<ModelPage title="Aquaponics" badge="Efficiency" desc="Fish + Plants." image={inhouseFarming} features={["Water Recycling", "Premium Pricing"]} />} />
          <Route path="/models/animal-husbandry" element={<ModelPage title="Animal Husbandry" badge="Circular" desc="Smart Livestock." image={heroBg} features={["Dairy Optimization", "Bio-gas Integration"]} />} />
          <Route path="/models/agro-tourism" element={<ModelPage title="Agro Tourism" badge="Lifestyle" desc="Farm Experiences." image={integratedFarming} features={["Hospitality ROI", "Direct-to-Consumer"]} />} />
        </Routes>
      </Layout>
    </Router>
  );
}
