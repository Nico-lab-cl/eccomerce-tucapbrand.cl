import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import CategoryBanner from '@/components/CategoryBanner';
import ManifestSection from '@/components/ManifestSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      
      {/* Spacer to give breathing room before products */}
      <div style={{ height: '64px' }} />
      
      <ProductGrid />
      <ManifestSection />
      <CategoryBanner />
      <Footer />
    </main>
  );
}
