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
import { HowWeWork } from './pages/HowWeWork';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/farm-setup" element={<FarmSetup />} />
          <Route path="/farm-optimization" element={<FarmOptimization />} />
          <Route path="/agri-business-consulting" element={<AgriConsulting />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/free-dpr" element={<FreeDPR />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<GenericPage title="About Us" />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/hydroponics-cost-india" element={<GenericPage title="Hydroponics Cost" h1="Hydroponics Cost in India 2026: What Nobody Tells You Before You Invest" metaDesc="Setup, running costs, ROI timelines. Here is the complete hydroponics cost breakdown for India in 2026, including what most guides leave out until after you have paid." />} />
          <Route path="/polyhouse-farming-profit" element={<GenericPage title="Polyhouse Profit" h1="Polyhouse Farming Profit Per Acre: What You Can Realistically Expect in 2026" metaDesc="What does polyhouse farming profit per acre actually look like after costs? Real data, real margins, and the crops delivering the best returns in India right now." />} />
          <Route path="/farming-business-ideas" element={<GenericPage title="Business Ideas" h1="Farming Business Ideas in India 2026: Ones That Are Actually Profitable" metaDesc="Not every farming business idea makes money. These 12 are backed by real market demand in India right now, with low entry costs and proven profit potential in 2026." />} />
          <Route path="/integrated-solutions" element={<GenericPage title="Integrated Solutions" h1="Integrated Farming Solutions India 2026: More Output, Less Waste" metaDesc="Integrated farming solutions combine crops, livestock, and waste cycles to slash costs and multiply income. Here is how to set one up that works in 2026." />} />
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
