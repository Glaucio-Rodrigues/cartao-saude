import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'motion/react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import CartaoSaude from './pages/CartaoSaude';
import Login from './pages/Login';
import { 
  Menu, X, Search, User, Briefcase, Map as MapIcon, 
  FileText, Heart, Facebook, Twitter, Instagram, Youtube, Mic,
  ChevronRight, Calendar, Building2, Stethoscope, Accessibility
} from 'lucide-react';

// Import slick css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopBar = () => (
  <div className="w-full bg-[#0037C1] text-white text-sm py-2 px-[20px] xl:px-[50px] flex flex-col xl:flex-row xl:justify-between items-center gap-2">
    <div className="flex gap-4 justify-center">
      <a target="_blank" href="https://www.instagram.com/prefjaboatao/" rel="noreferrer"><Instagram className="text-white hover:text-yellow-300 text-lg transition-colors" size={18} /></a>
      <a target="_blank" href="https://x.com/jaboataoonline" rel="noreferrer"><Twitter className="text-white hover:text-yellow-300 text-lg transition-colors" size={18} /></a>
      <a target="_blank" href="https://www.facebook.com/PrefeituradoJaboatao" rel="noreferrer"><Facebook className="text-white hover:text-yellow-300 text-lg transition-colors" size={18} /></a>
      <a target="_blank" href="https://www.youtube.com/prefeiturajaboatao" rel="noreferrer"><Youtube className="text-white hover:text-yellow-300 text-lg transition-colors" size={18} /></a>
    </div>
    <div className="hidden xl:flex gap-4 text-xs md:text-sm">
      <ul className="flex gap-4 font-sans font-medium">
        <li><a target="_blank" className="hover:underline" href="http://diariooficial.jaboatao.pe.gov.br/" rel="noreferrer">Diário Oficial</a></li>
        <li><a target="_blank" className="hover:underline" href="https://portaldatransparencia.jaboatao.pe.gov.br/" rel="noreferrer">Portal da Transparência</a></li>
        <li><a target="_blank" className="hover:underline" href="http://ouvidoria.jaboatao.pe.gov.br/" rel="noreferrer">Ouvidoria</a></li>
        <li><a target="_blank" className="hover:underline" href="https://www.tinus.com.br/csp/JABOATAO/portal/index.csp" rel="noreferrer">Portal do Contribuinte</a></li>
        <li><a target="_blank" className="hover:underline" href="https://servidor.jaboatao.pe.gov.br/" rel="noreferrer">Portal do Servidor</a></li>
        <li><a target="_blank" className="hover:underline" href="https://jaboataoemacao.jaboatao.pe.gov.br/" rel="noreferrer">COVID-19</a></li>
        <li><a target="_blank" className="hover:underline" href="https://radardatransparencia.atricon.org.br/radar-da-transparencia-publica.html" rel="noreferrer">Radar da Transparência</a></li>
      </ul>
    </div>
  </div>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <TopBar />
      <nav className="w-full transition-all duration-300 bg-transparent">
        <div className="relative px-[20px] xl:px-[50px] py-3 border-b border-white/20 bg-black/20 backdrop-blur-sm">
          <div className="relative flex h-16 items-center justify-between">
            {/* Mobile Logo & Menu Toggle */}
            <div className="flex-shrink-0 min-w-[180px] flex items-center justify-start 2xl:hidden z-10">
              <a href="/">
                <img src="https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Flogo-hz-gradient-font-white.png&w=384&q=75" alt="Jaboatão Logo" className="h-10" referrerPolicy="no-referrer" />
              </a>
            </div>
            <div className="flex items-center gap-4 2xl:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <Menu className="h-8 w-8 cursor-pointer transition-colors duration-300 text-white" />
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden 2xl:flex items-center justify-between w-full text-[12px] xl:text-[14px]">
              <div className="flex items-center justify-between w-full gap-4">
                <div className="relative">
                  <div className="flex bg-[#0037C1] p-4 mt-4 rounded-b-[30px] shadow-lg">
                    <a className="mx-auto" href="/">
                      <img src="https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Flogo-hz-gradient-font-white.png&w=384&q=75" alt="Jaboatão Logo" className="h-12 px-4" referrerPolicy="no-referrer" />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  {/* Dropdown Items */}
                  {[
                    { title: 'INSTITUCIONAL', items: ['MAPA DA ESTRATÉGIA', 'ESTRUTURA ORGANIZACIONAL'] },
                    { title: 'A CIDADE', items: ['JABOATÃO DOS GUARARAPES', 'YAPOATAN', 'SÍMBOLOS DA CIDADE', 'FERIADOS MUNICIPAIS'] },
                    { title: 'SECRETARIAS', items: ['ASSISTÊNCIA SOCIAL', 'DESENVOLVIMENTO URBANO', 'EDUCAÇÃO', 'SAÚDE'] },
                    { title: 'ORGÃOS', items: ['EMLUME', 'JABOATÃOPREV', 'PROCON'] },
                    { title: 'SERVIÇOS', items: ['PPP-SAÚDE', 'CARTA DE SERVIÇOS', 'CIDADÃO', 'EMPRESA', 'TURISTA'] },
                    { title: 'LGPD', items: ['AVISO DE PRIVACIDADE', 'POLÍTICA DE PRIVACIDADE'] },
                  ].map((menu, idx) => (
                    <div key={idx} className="relative group">
                      <button className="p-3 font-bold relative after:content-[''] hover:bg-[#0037C1] after:absolute after:w-full after:h-0.5 after:bg-[#13AFF0] after:left-0 after:bottom-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 text-white">
                        {menu.title} ⏷
                      </button>
                      <div className="absolute left-0 w-52 bg-[#00BDFF] border border-white text-white shadow-md hidden group-hover:block">
                        {menu.items.map((item, i) => (
                          <a key={i} className="block px-4 py-3 hover:bg-white hover:text-[#0037C1] transition-all duration-200 text-[13px] border-b border-white/30" href="#">
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  <div className="relative group">
                    <a className="relative p-3 font-bold after:content-[''] hover:bg-[#0037C1] after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:transition-transform after:duration-300 text-white after:bg-[#13AFF0] after:scale-x-0 hover:after:scale-x-100" href="#">
                      CARTÃO SAÚDE
                    </a>
                  </div>
                  
                  <div className="relative group">
                    <a className="relative p-3 font-bold after:content-[''] hover:bg-[#0037C1] after:absolute after:w-full after:h-0.5 after:left-0 after:bottom-0 after:transition-transform after:duration-300 text-white after:bg-[#13AFF0] after:scale-x-0 hover:after:scale-x-100" href="#">
                      ACESSIBILIDADE
                    </a>
                  </div>
                  
                  <button className="cursor-pointer py-2 rounded-full transition-all duration-300 w-[68px] h-[30px] flex items-center justify-center bg-white text-[#0037C1] hover:bg-[#002BA3] hover:text-white">
                    <Accessibility size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-[100] bg-[#FDC300] text-[#0037C1] transform ease-in-out transition-all duration-500 2xl:hidden">
          <header className="w-full px-4 py-3 flex items-center justify-between bg-[#0037C1] border-b border-[#0037C1]/30">
            <img src="https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Flogo-hz-gradient-font-white.png&w=384&q=75" alt="Jaboatão Logo" className="h-10" referrerPolicy="no-referrer" />
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-1 rounded-full hover:bg-black/10 transition-colors">
              <X className="h-8 w-8 text-white" />
            </button>
          </header>
          <div className="p-6 flex flex-col gap-4 font-bold text-lg">
            <a href="#">INSTITUCIONAL</a>
            <a href="#">A CIDADE</a>
            <a href="#">SECRETARIAS</a>
            <a href="#">ORGÃOS</a>
            <a href="#">SERVIÇOS</a>
            <Link to="/cartao-saude" onClick={() => setIsMobileMenuOpen(false)}>CARTÃO SAÚDE</Link>
            <a href="#">LGPD</a>
            <a href="#">ACESSIBILIDADE</a>
          </div>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <div className="relative h-[400px] md:h-[430px] lg:h-[450px] 2xl:h-[650px] w-full overflow-hidden rounded-b-[50px]">
      <img 
        src="https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2FBandeira%2Fbandeira-jg.webp&w=1920&q=75" 
        alt="Bandeira de Jaboatão" 
        className="w-full h-full object-cover transform scale-105 transition-transform duration-500" 
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute inset-0 flex items-center justify-center text-white text-center md:block md:text-right md:top-40 md:right-16 md:left-auto md:inset-auto z-20"
      >
        <div className="pt-20 md:pt-0 relative">
          <p className="text-lg md:text-2xl mb-2 border-[#FDC300] pb-2 md:border-b-0 md:border-r-4 md:pr-4 font-medium tracking-wide">
            432 ANOS DO NOSSO MUNICÍPIO
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight border-[#FDC300] pb-2 md:border-b-0 md:border-r-4 md:pr-4">
            PREFEITURA <br/>DO JABOATÃO DOS GUARARAPES
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

const QuickAccess = () => {
  const items = [
    { icon: <User size={40} />, label: 'CIDADÃO' },
    { icon: <Building2 size={40} />, label: 'EMPRESA' },
    { icon: <Briefcase size={40} />, label: 'SERVIDOR' },
    { icon: <MapIcon size={40} />, label: 'TURISTA' },
    { icon: <Search size={40} />, label: 'PORTAL DA TRANSPARÊNCIA' },
    { icon: <FileText size={40} />, label: 'CARTA DE SERVIÇOS' },
    { icon: <Stethoscope size={40} />, label: 'PPP - SAÚDE' },
    { 
      icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M320.2 243.8l-49.7 99.4c-6 12.1-23.4 11.7-28.9-.6l-56.9-126.3-30 71.7H60.6l182.5 186.5c7.1 7.3 18.6 7.3 25.7 0L451.4 288H342.3l-22.1-44.2zM473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z"></path></svg>, 
      label: 'CARTÃO-SAÚDE', 
      isLink: true, 
      to: '/cartao-saude' 
    },
  ];

  return (
    <div className="relative w-full xl:max-w-[1300px] px-4 mx-auto py-10 lg:py-6 2xl:py-10 -mt-10 z-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8 gap-4">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-full"
          >
            {item.isLink ? (
              <Link to={item.to!} className="bg-gradient-to-b from-[#FDC300] to-[#FF8500] text-white hover:to-[#0037C1] hover:from-[#00BDFF] py-6 px-4 rounded-[20px] shadow-lg text-sm sm:text-base font-bold flex flex-col items-center justify-center text-center min-h-[150px] w-full transition-all duration-300 hover:-translate-y-2">
                <div className="mb-3">{item.icon}</div>
                <span className="uppercase tracking-wider">{item.label}</span>
              </Link>
            ) : (
              <button className="bg-gradient-to-b from-[#FDC300] to-[#FF8500] text-white hover:to-[#0037C1] hover:from-[#00BDFF] py-6 px-4 rounded-[20px] shadow-lg text-sm sm:text-base font-bold flex flex-col items-center justify-center text-center min-h-[150px] w-full transition-all duration-300 hover:-translate-y-2">
                <div className="mb-3">{item.icon}</div>
                <span className="uppercase tracking-wider">{item.label}</span>
              </button>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SectionTabs = () => (
  <div className="flex flex-wrap justify-center gap-6 my-8">
    <button className="text-[#0037C1] hover:text-[#FDC300] font-bold text-lg flex items-center gap-2 transition-colors">
      <FileText size={24} /> NOTÍCIAS
    </button>
    <button className="text-[#0037C1] hover:text-[#FDC300] font-bold text-lg flex items-center gap-2 transition-colors">
      <Search size={24} /> DESTAQUES
    </button>
    <button className="text-[#0037C1] hover:text-[#FDC300] font-bold text-lg flex items-center gap-2 transition-colors">
      <MapIcon size={24} /> MAPAS
    </button>
  </div>
);

const News = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://backendoficial.jaboatao.pe.gov.br/wp-json/wp/v2/posts?per_page=3&_embed');
        const data = await response.json();
        
        const formattedNews = data.map((post: any) => {
          let imageUrl = 'https://picsum.photos/seed/news/600/400';
          if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]?.source_url) {
            imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
          }

          const date = new Date(post.date).toLocaleDateString('pt-BR', {
            day: '2-digit', month: 'short', year: 'numeric'
          });

          return {
            id: post.id,
            image: imageUrl,
            date: date,
            title: post.title.rendered,
            excerpt: post.excerpt.rendered.replace(/<[^>]+>/g, ''),
            link: post.link,
            category: 'Notícia'
          };
        });
        
        setNewsItems(formattedNews);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNewsItems([
          { id: 1, image: 'https://picsum.photos/seed/news1/600/400', date: '12 Abr 2024', title: 'Prefeitura inaugura nova creche no bairro central', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'Educação', link: '#' },
          { id: 2, image: 'https://tm.ibxk.com.br/2023/11/01/01164050504484.jpg?ims=1600x900', date: '10 Abr 2024', title: 'Campanha de vacinação contra a gripe começa nesta segunda', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'Saúde', link: '#' },
          { id: 3, image: 'https://www.riobranco.ac.gov.br/wp-content/uploads/2025/09/Asfaltamento-no-bairro-Portal-da-Amazonia-6-e1758643859935.jpeg', date: '08 Abr 2024', title: 'Novas vias são asfaltadas melhorando o trânsito na região sul', excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', category: 'Infraestrutura', link: '#' },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div id="noticias" className="container mx-auto px-4 py-12">
      {loading ? (
        <section className="py-20 text-center text-xl text-[#008C32] font-bold animate-pulse">
          Carregando Notícias...
        </section>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <a href={item.link} target="_blank" rel="noopener noreferrer" key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group block transform hover:-translate-y-2">
              <div className="relative h-56 overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-[#0037C1] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {item.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-[#FF8500] text-sm mb-3 gap-2 font-bold">
                  <Calendar size={16} />
                  <span>{item.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0037C1] transition-colors" dangerouslySetInnerHTML={{ __html: item.title }} />
                <p className="text-gray-600 line-clamp-3 mb-4 text-sm" dangerouslySetInnerHTML={{ __html: item.excerpt }} />
                <span className="text-[#0037C1] font-bold flex items-center gap-1 group-hover:gap-2 transition-all uppercase text-sm">
                  Leia mais <ChevronRight size={16} />
                </span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

const Highlights = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  const items = [
    { id: 1, image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fdestaques%2F15.jpg&w=1080&q=75' },
    { id: 2, image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fdestaques%2F15.jpg&w=1080&q=75' },
    { id: 3, image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fdestaques%2F15.jpg&w=1080&q=75' },
    { id: 4, image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fdestaques%2F15.jpg&w=1080&q=75' },
    { id: 5, image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fdestaques%2F15.jpg&w=1080&q=75' },
  ];

  return (
    <section id="destaques" className="bg-gradient-to-t from-[#ff8500] via-[#fdc300] to-[#fdc300] py-16 mt-20 rounded-[50px] shadow-inner">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center mb-12">
          <h1 className="relative flex flex-col items-center text-2xl md:text-4xl font-bold text-white uppercase text-center">
            <div className="absolute top-1/2 left-[-50vw] w-[200vw] h-1 bg-gradient-to-r from-transparent via-white to-transparent -z-10 transform -translate-y-1/2 opacity-50"></div>
            <span className="bg-[#0037C1] px-10 py-3 rounded-full relative z-10 shadow-lg tracking-widest">DESTAQUES</span>
          </h1>
        </div>
        
        <div className="px-4 md:px-12">
          <Slider {...settings} className="highlights-slider">
            {items.map((item) => (
              <div key={item.id} className="px-3 outline-none py-4">
                <a href="#" className="block relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 aspect-square border-4 border-white">
                  <img src={item.image} alt="Destaque" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

const Maps = () => {
  const maps = [
    { id: 1, title: 'MAPA DAS ESCOLAS MUNICIPAIS', image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fmapas%2Fescolas.jpg&w=3840&q=75', offset: 'md:mt-0' },
    { id: 2, title: 'MAPA DAS UNIDADES DE SAÚDE', image: 'https://img.freepik.com/vetores-premium/mapa-de-jaboatao-dos-guararapes-cartaz-da-cidade-mapa-vetorial-de-fundo-horizontal-com-titulo-de-opacidade-mapa-de-ruas-da-area-do-municipio-panorama-de-horizonte-em-tela-larga_228947-551.jpg?w=1060', offset: 'md:mt-[60px] lg:mt-[80px] xl:mt-[100px]' },
    { id: 3, title: 'MAPA DOS BARES E RESTAURANTES', image: 'https://i.pinimg.com/originals/ef/95/0c/ef950ca8250881c033ecd652c208833d.jpg', offset: 'md:mt-0' },
    { id: 4, title: 'MAPA DOS MERCADOS PÚBLICOS', image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fmapas%2Fmercados.jpeg&w=3840&q=75', offset: 'md:mt-[60px] lg:mt-[80px] xl:mt-[100px]' },
    { id: 5, title: 'MAPA DO CRAS E CREAS', image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fmapas%2Fcras.png&w=3840&q=75', offset: 'md:mt-0' },
    { id: 6, title: 'MAPA DOS HOSPITAIS', image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fmapas%2Fhospitais.jpg&w=1080&q=75', offset: 'md:mt-[60px] lg:mt-[80px] xl:mt-[100px]' },
    { id: 7, title: 'MAPA DO VINHO', image: 'https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Fmapas%2Fvinho.jpg&w=1920&q=75', offset: 'md:mt-0' },
  ];

  return (
    <main id="mapas" className="relative px-4 py-32 bg-white">
      <div className="mb-16 relative flex justify-center">
        <h1 className="relative flex flex-col items-center text-2xl md:text-4xl font-bold text-white uppercase text-center">
          <div className="absolute top-1/2 left-[-50vw] w-[200vw] h-1 bg-gradient-to-r from-transparent via-[#0037C1] to-transparent -z-10 transform -translate-y-1/2 opacity-30"></div>
          <span className="bg-[#0037C1] px-10 py-3 rounded-full relative z-10 shadow-lg tracking-widest">MAPAS</span>
        </h1>
      </div>
      
      <div className="flex flex-wrap justify-center items-start gap-6 md:gap-4 lg:gap-5 xl:gap-6 max-w-[1400px] mx-auto">
        {maps.map((map) => (
          <div key={map.id} className={`w-[90%] sm:w-[80%] md:w-[125px] lg:w-[180px] xl:w-[220px] 2xl:w-[260px] h-[300px] md:h-[340px] lg:h-[380px] xl:h-[460px] rounded-[30px] overflow-hidden shadow-lg border-[3px] border-transparent bg-black relative hover:scale-105 hover:shadow-2xl transition-all duration-500 group hover:border-[#008C32] ${map.offset}`}>
            <a className="w-full h-full block relative" href="#">
              <img src={map.image} alt={map.title} className="object-cover opacity-70 absolute inset-0 w-full h-full transition-opacity group-hover:opacity-100" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-end justify-center text-white text-center p-6 bg-gradient-to-t from-[#008c31e6] via-[#008c3180] to-transparent">
                <h2 className="text-sm md:text-xs lg:text-sm xl:text-base font-bold uppercase drop-shadow-md">{map.title}</h2>
              </div>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0037C1] text-white pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">MAPA DO SITE</h3>
            <div className="w-12 h-1 bg-[#FDC300] mb-6"></div>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">MAPA DA ESTRATÉGIA</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">PORTAL DA TRANSPARÊNCIA</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">ESTRUTURA ORGANIZACIONAL</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">GALERIA DE ELOGIOS</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">CIDADÃO</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">CARTAS DE SERVIÇO</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">EMPRESA</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">SERVIDOR</a></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4 tracking-wider">SITES RELACIONADOS</h3>
            <div className="w-12 h-1 bg-[#FDC300] mb-6"></div>
            <ul className="space-y-2 text-sm text-gray-200">
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">AMOR JABOATÃO</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">BEM ESTAR ANIMAL</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">CONSELHO DE USUÁRIOS</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">DE OLHO NA CONSULTA</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">DIÁRIO OFICIAL</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">EDUCAÇÃO</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">ECONOMIA CRIATIVA</a></li>
              <li><a href="#" className="hover:text-[#FDC300] transition-colors uppercase">EMLUME</a></li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 tracking-wider">OUVIDORIA</h3>
            <div className="w-12 h-1 bg-[#FDC300] mb-6"></div>
            <div className="text-sm text-gray-200 space-y-2 mb-8">
              <p className="font-bold">OUVIDORIA GERAL: 0800 081 8999</p>
              <p>(81) 9.9422-5177</p>
              <p>ATENDIMENTO DE SEGUNDA A SEXTA-FEIRA, DAS 8H ÀS 14H</p>
              <p>E-MAIL: ouvidoria@jaboatao.pe.gov.br</p>
            </div>

            <h3 className="text-xl font-bold mb-4 tracking-wider mt-8">ACOMPANHE-NOS</h3>
            <div className="w-12 h-1 bg-[#FDC300] mb-6"></div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FDC300] hover:text-[#0037C1] transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FDC300] hover:text-[#0037C1] transition-all">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FDC300] hover:text-[#0037C1] transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FDC300] hover:text-[#0037C1] transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom White Section */}
      <div className="bg-[#0037C1] text-white py-10 mt-12">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8">
          <img src="https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Flogo-hz-gradient-font-white.png&w=384&q=75" alt="Jaboatão Logo" className="h-16" referrerPolicy="no-referrer" />
          <div className="text-sm text-center md:text-left space-y-4">
            <p>
              <strong>Palácio da Batalha</strong><br />
              Av. Barreto de Menezes, 1648 – Prazeres –<br />
              Jaboatão dos Guararapes – PE, CEP 54.310-310
            </p>
            <p>
              <strong>Complexo Administrativo</strong><br />
              Estr. da Batalha, 1200 – Jardim Jordão,<br />
              Jaboatão dos Guararapes – PE, CEP 54315-570
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-gray-500 text-center py-4 text-xs font-medium">
        Desenvolvido por: Secretaria Executiva de Governo Digital | SEGD
      </div>
    </footer>
  );
};

const FABs = () => {
  return (
    <>
      {/* Voice Command FAB */}
      <button 
        className="fixed bottom-6 left-6 w-16 h-16 bg-[#0037C1] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#002BA3] hover:scale-110 transition-all z-50 group border-4 border-white"
        title="Clique para falar"
      >
        <Mic size={28} />
      </button>

      {/* Accessibility / Back to top FAB placeholder */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-[#00BDFF] text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-[#0037C1] hover:scale-110 transition-all z-50"
      >
        <Accessibility size={24} />
      </button>
    </>
  );
};

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <QuickAccess />
        <SectionTabs />
        <News />
        <Highlights />
        <Maps />
      </main>
      <Footer />
      <FABs />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cartao-saude" element={<CartaoSaude />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
