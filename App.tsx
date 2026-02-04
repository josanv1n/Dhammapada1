
import React, { useState, useMemo, useEffect } from 'react';
import { DHAMMAPADA_DATA } from './data/dhammapada';
import { Dharmachakra } from './components/Dharmachakra';
import { Lotus } from './components/Lotus';
import { Vagga, Verse } from './types';

// Types for navigation
type ViewState = 'utama' | 'syair' | 'kontak';

// --- SUB-COMPONENTS ---

const HeroSection: React.FC<{ title: string; subtitle: string; image: string }> = ({ title, subtitle, image }) => (
  <section className="relative h-[45vh] md:h-[55vh] flex items-end px-6 md:px-12 pb-12 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src={image} 
        alt="Thematic Visual" 
        className="w-full h-full object-cover opacity-50 scale-105 transition-transform duration-10000 hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
      <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay" />
    </div>
    
    <div className="relative z-10 max-w-4xl">
      <h2 className="text-4xl md:text-7xl font-techno font-bold mb-4 glow-text tracking-tighter uppercase leading-none">
        {title}
      </h2>
      <p className="text-amber-400/90 text-lg md:text-xl max-w-2xl font-dhamma italic leading-relaxed">
        "{subtitle}"
      </p>
    </div>
  </section>
);

const HomeView: React.FC<{ onNavigate: (view: ViewState) => void }> = ({ onNavigate }) => {
  const randomVerse = useMemo(() => {
    const allVerses = DHAMMAPADA_DATA.flatMap(v => v.verses);
    return allVerses[Math.floor(Math.random() * allVerses.length)];
  }, []);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <HeroSection 
        title="Dhammapada Digital" 
        subtitle="Jalan Menuju Kebijaksanaan dan Kedamaian Batin melalui Bait-Bait Suci."
        image="https://images.unsplash.com/photo-1542372410-720c7885b5d1?auto=format&fit=crop&q=80&w=2000"
      />
      
      <div className="px-6 md:px-12 py-16 max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="glass p-8 rounded-3xl border-t-2 border-amber-500/50 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-8 h-[1px] bg-amber-500" />
              <span className="text-xs font-techno text-amber-500 tracking-[0.2em] uppercase">Mutiara Hari Ini</span>
            </div>
            <p className="font-dhamma text-2xl text-slate-100 italic mb-6 leading-relaxed">
              "{randomVerse.translation}"
            </p>
            <p className="text-sm font-techno text-slate-500 uppercase">— Syair {randomVerse.number}</p>
          </div>
          <button 
            onClick={() => onNavigate('syair')}
            className="mt-8 self-start px-6 py-3 bg-amber-500/10 hover:bg-amber-500 text-amber-500 hover:text-slate-950 border border-amber-500/30 rounded-xl transition-all duration-300 font-techno text-xs uppercase tracking-widest"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>

        <div className="space-y-6">
          <div className="glass p-8 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-colors group">
            <h3 className="font-techno text-lg text-blue-400 mb-4 group-hover:glow-text transition-all text-left">Sastra Suci Dhammapada</h3>
            <p className="text-slate-400 leading-relaxed font-light text-left">
              Dhammapada adalah bagian dari Khuddaka Nikaya, Sutta Pitaka. Terdiri dari 423 bait syair yang merupakan rangkuman ajaran moral dan filsafat Buddha Gautama.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl text-center border border-slate-800">
              <div className="text-3xl font-techno font-bold text-amber-400 mb-1">{DHAMMAPADA_DATA.length}</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">Vagga (Bab)</div>
            </div>
            <div className="glass p-6 rounded-2xl text-center border border-slate-800">
              <div className="text-3xl font-techno font-bold text-amber-400 mb-1">423</div>
              <div className="text-[10px] uppercase tracking-widest text-slate-500">Syair Suci</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const KontakView: React.FC = () => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 h-full flex flex-col">
    <HeroSection 
      title="Hubungi Kami" 
      subtitle="Menjalin Dhamma, Menyebarkan Kedamaian bagi Semua Makhluk."
      image="https://images.unsplash.com/photo-1542152336-e0e6878e178c?auto=format&fit=crop&q=80&w=2000"
    />
    <div className="px-6 md:px-12 py-16 max-w-4xl mx-auto w-full flex-1">
      <div className="glass p-10 rounded-3xl border border-slate-800 space-y-12">
        <div className="text-center">
          <Lotus className="w-16 h-16 text-amber-500 mx-auto mb-6 opacity-80" />
          <h3 className="font-techno text-2xl text-white mb-4">Aplikasi Digital Dhamma</h3>
          <p className="text-slate-400 max-w-md mx-auto leading-relaxed">
            Dikembangkan dengan semangat pengabdian untuk memudahkan umat dalam mempelajari dan merenungkan bait-bait suci Dhammapada di era digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-slate-800">
          <div>
            <h4 className="font-techno text-xs uppercase tracking-widest text-amber-500 mb-4 text-left">Informasi Kontak</h4>
            <div className="space-y-4">
              <a href="mailto:johan.jkt999@gmail.com" className="flex items-center gap-4 text-slate-300 hover:text-amber-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-amber-500/50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500">Email</div>
                  <div className="text-sm font-mono">johan.jkt999@gmail.com</div>
                </div>
              </a>
              <a href="https://wa.me/6281341300100" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-amber-400 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-amber-500/50">
                   <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                   </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-slate-500">WhatsApp</div>
                  <div className="text-sm font-mono">+62-813-41-300-100</div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:items-start">
             <div className="p-4 bg-slate-950 border border-amber-500/20 rounded-2xl mb-4">
                <Dharmachakra className="w-20 h-20" />
             </div>
             <p className="text-[10px] font-techno text-slate-500 text-center md:text-left tracking-widest uppercase">
               Sabbe Satta Bhavantu Sukhitatta
             </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('utama');
  const [selectedVagga, setSelectedVagga] = useState<Vagga>(DHAMMAPADA_DATA[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on navigation
  const navigate = (view: ViewState) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    if (view !== 'syair') setSearchQuery('');
  };

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const filteredVerses = useMemo(() => {
    return selectedVagga.verses.filter(v => 
      v.translation.toLowerCase().includes(searchQuery.toLowerCase()) || 
      v.pali.toLowerCase().includes(searchQuery.toLowerCase()) ||
      v.number.toString().includes(searchQuery)
    );
  }, [selectedVagga, searchQuery]);

  const renderContent = () => {
    switch (currentView) {
      case 'utama':
        return <HomeView onNavigate={navigate} />;
      case 'syair':
        return (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <HeroSection 
              title={selectedVagga.title} 
              subtitle={selectedVagga.translation}
              image="https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=2000"
            />

            <div className="sticky top-0 z-30 px-6 md:px-12 py-6 glass-subtle border-b border-slate-800/50 backdrop-blur-xl">
              <div className="max-w-3xl mx-auto flex items-center bg-slate-950/80 border border-slate-800 rounded-2xl px-5 py-3 group focus-within:border-amber-500/50 transition-all shadow-inner">
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input 
                  type="text" 
                  placeholder="Cari kata kunci dalam syair..."
                  className="bg-transparent border-none focus:ring-0 w-full px-4 text-slate-200 placeholder:text-slate-600"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <section className="px-6 md:px-12 py-16 max-w-5xl mx-auto">
              <div className="grid gap-16">
                {filteredVerses.length > 0 ? (
                  filteredVerses.map((verse) => (
                    <div key={verse.number} className="group relative">
                      <span className="absolute -top-12 -left-8 text-[12rem] font-techno font-black text-slate-900/40 select-none group-hover:text-amber-500/5 transition-colors pointer-events-none tracking-tighter">
                        {verse.number}
                      </span>

                      <div className="relative glass p-8 md:p-12 rounded-[2.5rem] border border-slate-800 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5 transition-all duration-700">
                        <div className="flex justify-between items-start mb-8">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                               <Lotus className="w-5 h-5 text-amber-500" />
                            </div>
                            <span className="text-xs font-techno text-amber-500/70 tracking-[0.3em] uppercase">Verse {verse.number}</span>
                          </div>
                        </div>

                        <h3 className="font-dhamma text-2xl md:text-3xl text-slate-300 italic mb-10 text-left leading-relaxed border-l-2 border-slate-800 pl-8">
                          "{verse.pali}"
                        </h3>
                        
                        <p className="font-dhamma text-xl md:text-2xl text-slate-100 text-left leading-relaxed font-semibold relative">
                          {verse.translation}
                          <span className="absolute -bottom-4 left-0 w-12 h-1 bg-amber-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700" />
                        </p>

                        <div className="mt-12 flex items-center justify-between">
                          <div className="flex gap-2">
                             <span className="px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-[10px] font-techno text-slate-500 tracking-wider">MAGADHI</span>
                             <span className="px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-[10px] font-techno text-amber-400 tracking-wider">INDONESIA</span>
                          </div>
                          <div className="text-[10px] font-techno text-slate-600 uppercase tracking-[0.2em]">Authentic Teaching</div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-32 glass rounded-3xl border border-dashed border-slate-800">
                    <div className="text-slate-700 font-techno text-5xl mb-4">404</div>
                    <p className="text-slate-500 font-techno tracking-widest uppercase text-sm">Syair tidak ditemukan</p>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="mt-8 text-amber-400 hover:text-amber-300 font-techno text-xs uppercase underline tracking-widest"
                    >
                      Reset Pencarian
                    </button>
                  </div>
                )}
              </div>
            </section>
          </div>
        );
      case 'kontak':
        return <KontakView />;
      default:
        return <HomeView onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col md:flex-row overflow-hidden bg-slate-950 text-slate-100">
      
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] opacity-10 blur-[150px] bg-amber-600 rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] opacity-10 blur-[150px] bg-blue-700 rounded-full" />
        <Dharmachakra className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] opacity-[0.03]" />
      </div>

      {/* MOBILE TOP NAVIGATION BAR */}
      <div className="md:hidden flex items-center justify-between p-4 glass sticky top-0 z-[60] border-b border-slate-900">
        <div className="flex items-center gap-2" onClick={() => navigate('utama')}>
          <Dharmachakra className="w-8 h-8" />
          <span className="font-techno font-black text-sm tracking-tighter">DHAMMAPADA</span>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 bg-slate-900 rounded-lg border border-slate-800 text-amber-400"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY / SIDEBAR */}
      <div 
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-md z-[55] transition-opacity duration-500 md:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
      />

      <aside className={`
        fixed inset-y-0 left-0 w-80 glass z-[58] md:h-screen md:sticky md:top-0 md:translate-x-0
        transition-transform duration-500 ease-in-out flex flex-col border-r border-slate-900
        ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="p-8 flex-1 overflow-y-auto">
          {/* LOGO - Hidden on mobile because it's in the top bar */}
          <div className="hidden md:flex items-center gap-4 mb-12 cursor-pointer group" onClick={() => navigate('utama')}>
            <div className="relative">
              <Dharmachakra className="w-10 h-10 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-amber-400/20 blur-lg rounded-full animate-pulse" />
            </div>
            <div className="text-left">
              <h1 className="font-techno text-xl font-black tracking-tighter text-white">DHAMMAPADA</h1>
              <p className="text-[8px] font-techno text-amber-500 tracking-[0.4em] uppercase opacity-60">Digital Experience</p>
            </div>
          </div>
          
          <nav className="space-y-2 mb-12">
             <h2 className="text-[10px] font-techno uppercase tracking-widest text-slate-600 mb-4 px-2 text-left">Menu Utama</h2>
             {[
               { id: 'utama', label: 'Halaman Utama', icon: <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> },
               { id: 'syair', label: 'Syair Suci', icon: <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /> },
               { id: 'kontak', label: 'Kontak Kami', icon: <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /> }
             ].map((item) => (
               <button
                key={item.id}
                onClick={() => navigate(item.id as ViewState)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
                  currentView === item.id 
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' 
                    : 'text-slate-500 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
                }`}
              >
                <svg className="w-5 h-5 opacity-60 group-hover:opacity-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {item.icon}
                </svg>
                <span className="font-techno text-xs uppercase tracking-widest">{item.label}</span>
              </button>
             ))}
          </nav>

          {currentView === 'syair' && (
            <div className="space-y-1 animate-in slide-in-from-left-4 duration-500">
              <h2 className="text-[10px] font-techno uppercase tracking-widest text-slate-600 mb-4 px-2 text-left">Vagga (Bab)</h2>
              <div className="grid gap-2">
                {DHAMMAPADA_DATA.map((vagga) => (
                  <button
                    key={vagga.id}
                    onClick={() => {
                      setSelectedVagga(vagga);
                      setIsMenuOpen(false); // Close menu on selection for mobile
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 group flex flex-col border ${
                      selectedVagga.id === vagga.id 
                        ? 'bg-slate-900 text-amber-400 border-amber-500/30' 
                        : 'hover:bg-slate-900/50 text-slate-500 hover:text-slate-300 border-transparent'
                    }`}
                  >
                    <div className="flex justify-between items-center w-full mb-1">
                      <span className="text-[8px] font-techno opacity-60 tracking-widest uppercase">Chapter {vagga.id}</span>
                      {selectedVagga.id === vagga.id && <div className="w-1 h-1 bg-amber-500 rounded-full shadow-[0_0_8px_rgba(245,158,11,1)]" />}
                    </div>
                    <span className="font-bold text-sm tracking-tight">{vagga.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="p-8 border-t border-slate-900 bg-slate-950/40 backdrop-blur-md">
          <div className="flex items-center gap-3 mb-4">
            <Lotus className="w-4 h-4 text-amber-600" />
            <span className="text-[9px] font-techno text-slate-600 uppercase tracking-widest">Digital Dhamma v1.0</span>
          </div>
          <p className="text-[10px] text-slate-500 leading-relaxed font-light italic text-left">
            "Semoga semua makhluk terbebas dari penderitaan."
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 z-10 relative h-screen overflow-y-auto bg-slate-950/20 backdrop-blur-sm scroll-smooth">
        {renderContent()}
      </main>

      {/* MOBILE BOTTOM NAV DECORATION */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/40 to-transparent z-[100]" />
    </div>
  );
};

export default App;
