'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* TopNavBar */}
      <header className="fixed w-full top-0 z-[100] bg-white shadow-sm border-b border-stone-200">
        {/* Single bar: Logo | Nav Links | Icons */}
        <div className="flex items-center justify-between w-full max-w-[1920px] mx-auto h-[56px] md:h-[60px] px-4 md:px-10 overflow-visible">

          {/* Logo — overflows the navbar */}
          <a className="flex-shrink-0 relative z-[101]" href="#">
            <img
              alt="Aralis – Alfajores Artesanales"
              className="w-auto object-contain h-16 md:h-28 drop-shadow-sm"
              src="/aralis-logo.png"
            />
          </a>

          {/* Desktop: nav links (centered) */}
          <nav className="hidden md:flex items-center gap-10 font-['Epilogue'] text-xs font-semibold tracking-[0.12em] uppercase">
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors" href="#">Inicio</a>
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors" href="#">Tienda Online</a>
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors" href="#">Contacto</a>
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors" href="#">Puntos de Venta</a>
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors" href="#">Trabaja con Nosotros</a>
          </nav>

          {/* Desktop: action icons */}
          <div className="hidden md:flex items-center gap-2">
            <button className="text-[#B8860B] hover:text-[#8B6508] transition-colors p-2">
              <span className="material-symbols-outlined text-[22px]">search</span>
            </button>
            <button className="text-[#B8860B] hover:text-[#8B6508] transition-colors p-2">
              <span className="material-symbols-outlined text-[22px]">person</span>
            </button>
            <button className="text-[#B8860B] hover:text-[#8B6508] transition-colors p-2 relative">
              <span className="material-symbols-outlined text-[22px]">shopping_cart</span>
              <span className="absolute top-0.5 right-0.5 bg-[#B8860B] text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
            </button>
          </div>

          {/* Mobile: hamburger button */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
          >
            <span className={`block w-6 h-[2px] bg-[#B8860B] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-6 h-[2px] bg-[#B8860B] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[2px] bg-[#B8860B] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>

        {/* Mobile: slide-down menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[400px] border-t border-stone-200' : 'max-h-0'}`}>
          <nav className="flex flex-col items-center py-6 gap-5 font-['Epilogue'] text-sm font-semibold tracking-[0.1em] uppercase bg-white">
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors py-1" href="#" onClick={() => setMobileMenuOpen(false)}>Inicio</a>
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors py-1" href="#" onClick={() => setMobileMenuOpen(false)}>Tienda Online</a>
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors py-1" href="#" onClick={() => setMobileMenuOpen(false)}>Contacto</a>
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors py-1" href="#" onClick={() => setMobileMenuOpen(false)}>Puntos de Venta</a>
            <a className="text-[#B8860B] hover:text-[#8B6508] transition-colors py-1" href="#" onClick={() => setMobileMenuOpen(false)}>Trabaja con Nosotros</a>
            {/* Mobile menu icons */}
            <div className="flex items-center gap-6 mt-2 pt-4 border-t border-stone-200 w-3/4 justify-center">
              <button className="text-[#B8860B] hover:text-[#8B6508] transition-colors p-2">
                <span className="material-symbols-outlined text-2xl">search</span>
              </button>
              <button className="text-[#B8860B] hover:text-[#8B6508] transition-colors p-2">
                <span className="material-symbols-outlined text-2xl">person</span>
              </button>
              <button className="text-[#B8860B] hover:text-[#8B6508] transition-colors p-2 relative">
                <span className="material-symbols-outlined text-2xl">shopping_cart</span>
                <span className="absolute top-1 right-1 bg-[#B8860B] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">0</span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="w-full pt-[60px] md:pt-[65px]">
        {/* Promo Marquee */}
        <div className="w-full bg-[#C68E4E] text-white py-2.5 overflow-hidden flex whitespace-nowrap relative z-10 shadow-sm">
          <div className="animate-marquee inline-block font-['Epilogue'] text-sm tracking-widest uppercase font-semibold">
            Envíos a todo el país | GRATIS para compras superiores a $60.000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Envíos a todo el país | GRATIS para compras superiores a $60.000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Envíos a todo el país | GRATIS para compras superiores a $60.000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Envíos a todo el país | GRATIS para compras superiores a $60.000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Envíos a todo el país | GRATIS para compras superiores a $60.000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Envíos a todo el país | GRATIS para compras superiores a $60.000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Envíos a todo el país | GRATIS para compras superiores a $60.000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Envíos a todo el país | GRATIS para compras superiores a $60.000 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
        </div>
        {/* Hero Section (Carousel) */}
        <section className="relative w-full h-[85vh] md:h-[calc(100vh-100px)] overflow-hidden group -mt-[40px]">
          <div className="flex w-full h-full overflow-x-auto snap-x snap-mandatory hide-scrollbar" style={{ msOverflowStyle: 'none' }}>
            {/* Slide 1 (Custom Image) */}
            <div
              className="relative min-w-full h-full snap-start bg-cover bg-center"
              style={{ backgroundImage: "url('/hero-image.png')" }}
            ></div>
            {/* Slide 2 */}
            <div
              className="relative min-w-full h-full snap-start bg-cover bg-center"
              style={{ backgroundImage: "url('/alfajor-box.png')" }}
            ></div>
            {/* Slide 3 */}
            <div
              className="relative min-w-full h-full snap-start bg-cover bg-center"
              style={{ backgroundImage: "url('/alfajor-wrapped.png')" }}
            ></div>
            {/* Slide 4 */}
            <div
              className="relative min-w-full h-full snap-start bg-cover bg-center"
              style={{ backgroundImage: "url('/alfajor-chocolate.png')" }}
            ></div>
          </div>
          <button className="absolute top-1/2 -translate-y-1/2 left-4 md:left-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all z-20 opacity-0 group-hover:opacity-100">
            <span className="material-symbols-outlined text-3xl">chevron_left</span>
          </button>
          <button className="absolute top-1/2 -translate-y-1/2 right-4 md:right-8 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all z-20 opacity-0 group-hover:opacity-100">
            <span className="material-symbols-outlined text-3xl">chevron_right</span>
          </button>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
            <button className="w-3 h-3 rounded-full bg-white transition-all"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80 transition-all"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80 transition-all"></button>
            <button className="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white/80 transition-all"></button>
          </div>
        </section>

        <section className="w-full bg-background py-section-gap px-margin-edge border-b-[0.5px] border-outline-variant">
          <div className="max-w-container-max mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-xl text-4xl text-on-surface tracking-tight uppercase">Nuestro Packaging</h2>
              <p className="font-body-md text-on-surface-variant mt-4 max-w-xl mx-auto">La excelencia se refleja en cada detalle. Presentaciones diseñadas para elevar la experiencia de regalar y disfrutar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
              <div className="group flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#f8f1e9]">
                  <img alt="Professional individual alfajor wrapping" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0uijA8oH3rD03-0Gg037Atx3eM1Cd1OX_91VHMCxr-zD_YEC7mUfVu0PUt9abjz4tJ0-TkjURnIR5-kMJJeMLQn_1qUK9huR3Xx5FOD8ArjQcslcbGj-ChbKYPXEzGFfHvED3sNnCon527FAQuJPI29dzt0EINbP3reI-C6shQJMbsY2rdyJgycNr4Th-5aa4ZucB8WOoWXW2m2u_1vXhH1AlJLlh4-9OePonJTEBoNdsIFAMFARnOs7Zn0" />
                </div>
                <div className="text-center">
                  <h3 className="font-headline-md text-xl text-on-surface mb-3 uppercase tracking-wider">Envoltorio Individual</h3>
                  <p className="font-body-md text-sm text-on-surface-variant">Sello dorado y papel artesanal para preservar la frescura.</p>
                </div>
              </div>
              <div className="group flex flex-col">
                <div className="relative aspect-[3/4] overflow-hidden mb-8 bg-[#f8f1e9]">
                  <img alt="Premium luxury collection box" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida/ADBb0ugQ31Tz2pJ5184YOqSrlkTVfnnU5CL32PPhby2OAc18s83q2UqoLUQL347ozeT8rh6Wff-FSitADZxRbfqChy8csrqGpse13oC1GpsLWBZBQ5FhMhRiIZzhNMxwIN3vWUYCUDhPu7xhdPH1p2OMev_EGkkOBw0o4TZRXQxERYL1SegxjfhhZohIV8SRd0OEAbPDE_54Kb0JSF8aeWKR9sPb7o12rXcsifeUBMTqcLNjyWXBDBhICCKoDEfs" />
                </div>
                <div className="text-center">
                  <h3 className="font-headline-md text-xl text-on-surface mb-3 uppercase tracking-wider">Cajas de Colección</h3>
                  <p className="font-body-md text-sm text-on-surface-variant">Presentación de lujo ideal para obsequios memorables.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pb-section-gap px-margin-edge max-w-container-max mx-auto">
          <div className="text-center mb-8 mt-16">
            <h2 className="font-headline-xl text-4xl text-on-surface tracking-tight">Nuestros Sabores</h2>
          </div>
          <div className="flex justify-center items-center mb-16 gap-4">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Estándar</span>
            <div className="relative inline-block w-14 mr-2 align-middle select-none transition duration-200 ease-in">
              <input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer z-10 top-1 left-1 transition-transform duration-300 ease-in-out" id="toggle" name="toggle" type="checkbox" />
              <label className="toggle-label block overflow-hidden h-8 rounded-full bg-stone-300 cursor-pointer transition-colors duration-300 ease-in-out" htmlFor="toggle"></label>
            </div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">Tamaño XL</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#f8f1e9]">
                <img alt="Alfajor de Nuez" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida/ADBb0ugJluDCpIw5778CbYGM3YD5HPyj2m9R1LhfGbSz35oC92VY_Avaztq5RlRMJZ2BePXy8GnHiriFZQ5Iv3lupO63upBYCzDpAWwLVIfNUcxapQGZo6qvhUKGp0g9obS77ESGds8ApQ4sp2FmSapNCyaD3Eal8t4FXgaHK3zLTgQz7ot3_8G_pM3qpOW5YG8z5Tc1Kdv6VHqmZuWDKrk6Tw-jcJChp5qJX8bQaa4lqZKFzu5NvO_K4MEHEpne" />
              </div>
              <div className="text-center">
                <h3 className="font-headline-md text-lg text-on-surface mb-2">Alfajor de Nuez</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Relleno de Manjar</p>
              </div>
            </div>
            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#fffcf0]">
                <img alt="Alfajor de Limón" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida/ADBb0ugJluDCpIw5778CbYGM3YD5HPyj2m9R1LhfGbSz35oC92VY_Avaztq5RlRMJZ2BePXy8GnHiriFZQ5Iv3lupO63upBYCzDpAWwLVIfNUcxapQGZo6qvhUKGp0g9obS77ESGds8ApQ4sp2FmSapNCyaD3Eal8t4FXgaHK3zLTgQz7ot3_8G_pM3qpOW5YG8z5Tc1Kdv6VHqmZuWDKrk6Tw-jcJChp5qJX8bQaa4lqZKFzu5NvO_K4MEHEpne" />
              </div>
              <div className="text-center">
                <h3 className="font-headline-md text-lg text-on-surface mb-2">Alfajor de Limón</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Relleno de Manjar</p>
              </div>
            </div>
            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#f4ecec]">
                <img alt="Alfajor Prestigio" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida/ADBb0ugJluDCpIw5778CbYGM3YD5HPyj2m9R1LhfGbSz35oC92VY_Avaztq5RlRMJZ2BePXy8GnHiriFZQ5Iv3lupO63upBYCzDpAWwLVIfNUcxapQGZo6qvhUKGp0g9obS77ESGds8ApQ4sp2FmSapNCyaD3Eal8t4FXgaHK3zLTgQz7ot3_8G_pM3qpOW5YG8z5Tc1Kdv6VHqmZuWDKrk6Tw-jcJChp5qJX8bQaa4lqZKFzu5NvO_K4MEHEpne" />
              </div>
              <div className="text-center">
                <h3 className="font-headline-md text-lg text-on-surface mb-2">Alfajor Prestigio</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Relleno de Manjar</p>
              </div>
            </div>
            {/* Product 4 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#f1f2f4]">
                <img alt="Alfajor Oreo" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida/ADBb0ugJluDCpIw5778CbYGM3YD5HPyj2m9R1LhfGbSz35oC92VY_Avaztq5RlRMJZ2BePXy8GnHiriFZQ5Iv3lupO63upBYCzDpAWwLVIfNUcxapQGZo6qvhUKGp0g9obS77ESGds8ApQ4sp2FmSapNCyaD3Eal8t4FXgaHK3zLTgQz7ot3_8G_pM3qpOW5YG8z5Tc1Kdv6VHqmZuWDKrk6Tw-jcJChp5qJX8bQaa4lqZKFzu5NvO_K4MEHEpne" />
              </div>
              <div className="text-center">
                <h3 className="font-headline-md text-lg text-on-surface mb-2">Alfajor Oreo</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Relleno de Manjar</p>
              </div>
            </div>
            {/* Product 5 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#fdf8ee]">
                <img alt="Alfajor Bon o Bon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 mix-blend-multiply" src="https://lh3.googleusercontent.com/aida/ADBb0ugJluDCpIw5778CbYGM3YD5HPyj2m9R1LhfGbSz35oC92VY_Avaztq5RlRMJZ2BePXy8GnHiriFZQ5Iv3lupO63upBYCzDpAWwLVIfNUcxapQGZo6qvhUKGp0g9obS77ESGds8ApQ4sp2FmSapNCyaD3Eal8t4FXgaHK3zLTgQz7ot3_8G_pM3qpOW5YG8z5Tc1Kdv6VHqmZuWDKrk6Tw-jcJChp5qJX8bQaa4lqZKFzu5NvO_K4MEHEpne" />
              </div>
              <div className="text-center">
                <h3 className="font-headline-md text-lg text-on-surface mb-2">Alfajor Bon o Bon</h3>
                <p className="font-body-md text-sm text-on-surface-variant">Relleno de Manjar</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-section-gap bg-surface-container-low border-y-[0.5px] border-outline-variant bg-white">
          <div className="max-w-container-max mx-auto px-margin-edge">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="font-headline-xl text-4xl text-on-surface mb-stack-md uppercase tracking-tight">Diseña tu experiencia</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-lg">
                  Crea una combinación única. Personaliza tu caja con nuestros alfajores artísticos y mensajes especiales. Un detalle exclusivo diseñado por ti.
                </p>
                <button className="bg-[#3D2B1F] hover:bg-[#835419] text-white px-12 py-4 rounded-none transition-colors duration-300 font-label-sm text-label-sm uppercase tracking-widest">
                  Armar Caja
                </button>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square overflow-hidden bg-white shadow-sm">
                  <img alt="Customizable artistic alfajores in a box" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/ADBb0uizKfGLyTq9SodceSXCFHP9Wrsx78LcIUL7sAmZ009pOeugOdA84Xvfggnd-lUySFnnvdDjNjd4kePql2KeF6yi_N51QAFEZYnQKFkYIDXQsvCf9VuT5NuN38z-vZiLscR18BVpJhSlExKRYXvUPMYuMxsx1DfcUHSK8WR2ZH99Qvj6Uvy-1tZDHWydBsrG9XSj3SrtsgiK01DEWxLn6DOcUOjdAbu5HnWmX_qg1s3iURMpXuOr8P8qjTuQXYE1EiGLz6P1MrYgNQ" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t-[0.5px] border-stone-200 dark:border-stone-800 pt-20 pb-10 mt-[120px] flat no shadows bg-stone-50 dark:bg-stone-950">
        <div className="flex flex-col items-center justify-center space-y-12 px-16 w-full font-['Epilogue'] text-sm tracking-wide">
          <div className="text-lg font-bold tracking-widest text-[#3D2B1F] dark:text-stone-100">
            Chocoblingblau
          </div>
          <nav className="flex flex-wrap justify-center gap-8">
            <a className="text-stone-400 dark:text-stone-500 hover:text-[#C68E4E] transition-colors hover:underline decoration-[#C68E4E] underline-offset-4 transition-all duration-500 ease-in-out" href="#">Privacidad</a>
            <a className="text-stone-400 dark:text-stone-500 hover:text-[#C68E4E] transition-colors hover:underline decoration-[#C68E4E] underline-offset-4 transition-all duration-500 ease-in-out" href="#">Términos</a>
            <a className="text-stone-400 dark:text-stone-500 hover:text-[#C68E4E] transition-colors hover:underline decoration-[#C68E4E] underline-offset-4 transition-all duration-500 ease-in-out" href="#">Envíos</a>
            <a className="text-stone-400 dark:text-stone-500 hover:text-[#C68E4E] transition-colors hover:underline decoration-[#C68E4E] underline-offset-4 transition-all duration-500 ease-in-out" href="#">Soporte</a>
          </nav>
          <div className="text-[#C68E4E] text-center max-w-md mx-auto opacity-80">
            © 2024 Chocoblingblau. Alfajores de Autor. Hecho a mano en Chile.
          </div>
        </div>
      </footer>
    </>
  );
}
