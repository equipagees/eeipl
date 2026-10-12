import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import BrandProducts from './pages/BrandProducts';
import BydMheParent from './pages/BydMheParent';
import BydMheCategory from './pages/BydMheCategory';
import LiftmakParent from './pages/LiftmakParent';
import LiftmakCategory from './pages/LiftmakCategory';
import BeltasPage from './pages/BeltasPage';
import FrannaParent from './pages/FrannaParent';
import FrannaCategory from './pages/FrannaCategory';
import BobcatParent from './pages/BobcatParent';
import BobcatCategory from './pages/BobcatCategory';
import HydramakPage from './pages/HydramakPage';
import JinwooParent from './pages/JinwooParent';
import JinwooCategory from './pages/JinwooCategory';
import SkymechPage from './pages/SkymechPage';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          {/* Main Redirects/Aliases for standard paths */}
          <Route path="/" element={<Home />} />
          <Route path="/sample-home" element={<Home />} />
          
          <Route path="/about" element={<About />} />
          <Route path="/sample-about" element={<About />} />
          
          <Route path="/products" element={<Products />} />
          <Route path="/sample-products" element={<Products />} />
          
          {/* BYD MHE Parent and Category Routes */}
          <Route path="/products/byd-mhe" element={<BydMheParent />} />
          <Route path="/sample-products/byd-mhe" element={<BydMheParent />} />
          <Route path="/products/byd-mhe/:categoryId" element={<BydMheCategory />} />
          <Route path="/sample-products/byd-mhe/:categoryId" element={<BydMheCategory />} />

          {/* Liftmak Parent and Category Routes */}
          <Route path="/products/liftmak" element={<LiftmakParent />} />
          <Route path="/sample-products/liftmak" element={<LiftmakParent />} />
          <Route path="/products/liftmak/:categoryId" element={<LiftmakCategory />} />
          <Route path="/sample-products/liftmak/:categoryId" element={<LiftmakCategory />} />

          {/* Beltas Dedicated Page */}
          <Route path="/products/beltas" element={<BeltasPage />} />
          <Route path="/sample-products/beltas" element={<BeltasPage />} />

          {/* Franna Parent and Model Routes — primary at /terex-franna */}
          <Route path="/products/terex-franna" element={<FrannaParent />} />
          <Route path="/sample-products/terex-franna" element={<FrannaParent />} />
          <Route path="/products/terex-franna/:modelId" element={<FrannaCategory />} />
          <Route path="/sample-products/terex-franna/:modelId" element={<FrannaCategory />} />
          {/* Alias: /products/franna → same pages */}
          <Route path="/products/franna" element={<FrannaParent />} />
          <Route path="/sample-products/franna" element={<FrannaParent />} />
          <Route path="/products/franna/:modelId" element={<FrannaCategory />} />
          <Route path="/sample-products/franna/:modelId" element={<FrannaCategory />} />

          {/* Doosan Bobcat Parent and Category Routes */}
          <Route path="/products/doosan-bobcat" element={<BobcatParent />} />
          <Route path="/sample-products/doosan-bobcat" element={<BobcatParent />} />
          <Route path="/products/doosan-bobcat/:categoryId" element={<BobcatCategory />} />
          <Route path="/sample-products/doosan-bobcat/:categoryId" element={<BobcatCategory />} />
          {/* Aliases for /bobcat and /doosan */}
          <Route path="/products/bobcat" element={<BobcatParent />} />
          <Route path="/products/bobcat/:categoryId" element={<BobcatCategory />} />
          <Route path="/products/doosan" element={<BobcatParent />} />
          <Route path="/products/doosan/:categoryId" element={<BobcatCategory />} />

          {/* Jinwoo SMC Parent and Category Routes */}
          <Route path="/products/jinwoo-smc" element={<JinwooParent />} />
          <Route path="/sample-products/jinwoo-smc" element={<JinwooParent />} />
          <Route path="/products/jinwoo-smc/:categoryId" element={<JinwooCategory />} />
          <Route path="/sample-products/jinwoo-smc/:categoryId" element={<JinwooCategory />} />
          {/* Aliases for /jinwoo */}
          <Route path="/products/jinwoo" element={<JinwooParent />} />
          <Route path="/products/jinwoo/:categoryId" element={<JinwooCategory />} />
          
          {/* Brand Landing Pages: Dynamic Route */}
          <Route path="/products/:brandId" element={<BrandProducts />} />
          <Route path="/sample-products/:brandId" element={<BrandProducts />} />

          {/* Product Detail Pages: Dynamic Route */}
          <Route path="/products/:brandId/:productId" element={<ProductDetail />} />
          <Route path="/sample-products/:brandId/:productId" element={<ProductDetail />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/sample-products/:productId" element={<ProductDetail />} />

          {/* Hydramak Dedicated Single Product Page */}
          <Route path="/products/hydramak" element={<HydramakPage />} />
          <Route path="/sample-products/hydramak" element={<HydramakPage />} />
          
          {/* Skymech Dedicated Single Product Page */}
          <Route path="/products/skymech" element={<SkymechPage />} />
          <Route path="/sample-products/skymech" element={<SkymechPage />} />

          {/* Direct Product Aliases as listed by User */}
          <Route path="/skymech-truck-loader-cranes" element={<SkymechPage />} />
          <Route path="/jinwoo-smc-aerial-elevating-work-platform" element={<JinwooParent />} />
          <Route path="/hydramak-truck-mounted-boom-lift-hm24a" element={<HydramakPage />} />
          <Route path="/doosan-bobcat-in-india" element={<BobcatParent />} />
          <Route path="/byd-mhe" element={<ProductDetail forceId="byd-mhe" />} />
          <Route path="/franna-pick-carry-cranes" element={<FrannaParent />} />
          <Route path="/beltas-turntable-ladders" element={<BeltasPage />} />
          <Route path="/liftmak-fire-fighting-hydraulic-platforms" element={<LiftmakParent />} />

          {/* Contact Page Aliases */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/sample-contact-us" element={<Contact />} />
          
          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
