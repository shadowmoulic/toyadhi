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
          <Route path="/about" element={<GenericPage title="Best Agriculture Consulting Company in India 2026: Honest Guide" h1="How to Choose the Right Agriculture Consulting Company in India" metaDesc="Not all agriculture consulting companies in India deliver results. Here is what to look for, what to avoid, and which firms are actually worth your money in 2026." />} />
          <Route path="/how-we-work" element={<HowWeWork />} />
          <Route path="/hydroponics-cost-india" element={<GenericPage title="Hydroponics Cost in India 2026: Full Honest Breakdown" h1="Hydroponics Cost in India 2026: What Nobody Tells You Before You Invest" metaDesc="Setup, running costs, ROI timelines. Here is the complete hydroponics cost breakdown for India in 2026, including what most guides leave out until after you have paid." />} />
          <Route path="/polyhouse-farming-profit" element={<GenericPage title="Polyhouse Farming Profit Per Acre 2026: Real Numbers Inside" h1="Polyhouse Farming Profit Per Acre: What You Can Realistically Expect in 2026" metaDesc="What does polyhouse farming profit per acre actually look like after costs? Real data, real margins, and the crops delivering the best returns in India right now." />} />
          <Route path="/farming-business-ideas" element={<GenericPage title="12 Farming Business Ideas in India That Are Making Money in 2026" h1="Farming Business Ideas in India 2026: Ones That Are Actually Profitable" metaDesc="Not every farming business idea makes money. These 12 are backed by real market demand in India right now, with low entry costs and proven profit potential in 2026." />} />
          <Route path="/integrated-solutions" element={<GenericPage title="Integrated Farming Solutions 2026: More Output, Less Waste" h1="Integrated Farming Solutions: The System That Beats Single-Crop Farming" metaDesc="Integrated farming solutions combine crops, livestock, and waste cycles to slash costs and multiply income. Here is how to set one up that works in 2026." />} />
          <Route path="/farming-subsidies-india" element={<GenericPage title="Farming Subsidies in India 2026: What You Are Eligible For" h1="Farming Subsidies in India 2026: The Complete Eligibility Guide" metaDesc="Most farmers in India miss subsidies they qualify for. Here is a clear, updated breakdown of farming subsidies available in 2026 and exactly how to claim them." />} />
          <Route path="/training" element={<GenericPage title="Best Agriculture Training Programs in India 2026: Worth It?" h1="Agriculture Training Programs in India: Which Ones Are Actually Worth Your Time" metaDesc="Hundreds of agriculture training programs in India promise transformation. Here are the ones with real outcomes, verified skills, and placement records in 2026." />} />
          <Route path="/blog" element={<GenericPage title="Best Agriculture Blogs in India 2026: No Fluff, Just Results" h1="Top Agriculture Blogs in India 2026: Curated for Farmers Who Mean Business" metaDesc="Skip the generic content. These are the agriculture blogs in India actually publishing useful, field-tested insights that help farmers make better decisions in 2026." />} />
          <Route path="/organic-vs-hydroponics" element={<GenericPage title="Organic vs Hydroponics Farming 2026: Which One Actually Pays More" h1="Organic vs Hydroponics Farming: An Honest Comparison for 2026" metaDesc="Organic vs hydroponics farming is not just a philosophy debate. It is a money decision. Here is what the numbers say about cost, yield, and profit in India in 2026." />} />
          <Route path="/who-we-work-with" element={<GenericPage title="Agriculture Consultancy Clients: What Results They Actually Get" h1="What Agriculture Consultancy Clients Actually Achieve: Real Case Studies" metaDesc="Results from real agriculture consultancy clients, not testimonial snippets. Full case studies showing what changed, what was invested, and what came back in 2026." />} />
          <Route path="/solutions/sustainable-farming" element={<GenericPage title="Sustainable Farming Solutions That Actually Work in 2026" h1="Sustainable Farming Solutions: What's Working in 2026" metaDesc="Tired of advice that doesn't translate to real farms? Discover sustainable farming solutions that boost yield, cut costs, and actually work on the ground in 2026." />} />
          <Route path="/solutions/advanced-cultivation" element={<GenericPage title="Advanced Farming Systems in 2026: What's Worth the Investment" h1="Advanced Farming Systems: The Real ROI Breakdown for 2026" metaDesc="Not every advanced farming system pays off. Here's an honest breakdown of which technologies deliver real results and which ones are just hype in 2026." />} />
          <Route path="/solutions/smart-farming" element={<GenericPage title="Smart Farming Technology in India 2026: What's Actually Working" h1="Smart Farming Technology in India: The 2026 Ground Reality" metaDesc="India's smart farming technology boom is real, but patchy. Here's what's actually working for farmers in 2026, from IoT sensors to AI-driven precision tools." />} />
          <Route path="/solutions/post-harvest" element={<GenericPage title="Post Harvest Management in India 2026: Stop Losing What You Grew" h1="Post Harvest Management in India: How to Stop Losing 30% of Your Crop" metaDesc="India loses crores worth of produce every year to poor post harvest management. Here are the 2026 strategies that are actually cutting those losses down." />} />
          <Route path="/solutions/circular-farming" element={<GenericPage title="Circular Farming Systems 2026: Zero Waste Agriculture That Pays" h1="Circular Farming Systems: How Zero Waste Agriculture Actually Makes Money" metaDesc="Circular farming systems are not just good for the planet. Done right, they cut input costs and increase margins. Here is how leading farms are doing it in 2026." />} />
          <Route path="/solutions/climate-sustainability" element={<GenericPage title="Climate Smart Agriculture in India 2026: Survive and Profit" h1="Climate Smart Agriculture in India: What 2026 Demands From Every Farmer" metaDesc="Erratic rainfall. Rising heat. Shrinking margins. Discover the climate smart agriculture strategies Indian farmers are using in 2026 to protect yield and income." />} />
          <Route path="/solutions/agri-business" element={<GenericPage title="Agri Business Development in India: Biggest Opportunities in 2026" h1="Agri Business Development in India: Where the Real Money Is in 2026" metaDesc="India's agri business development sector is seeing its biggest shift in decades. Here are the opportunities that smart investors and farmers are moving on right now." />} />
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
