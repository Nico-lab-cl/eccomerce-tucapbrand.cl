import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import CategoryBanner from '@/components/CategoryBanner';
import ManifestSection from '@/components/ManifestSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProductGrid />
        <CategoryBanner />
        <ManifestSection />
      </main>
      <Footer />
    </>
  );
}
