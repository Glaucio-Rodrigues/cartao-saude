import { useState } from 'react';
import { 
  LogOut, 
  Home, 
  Calendar, 
  FileText, 
  Activity, 
  Syringe, 
  TestTube,
  Pill,
  Users,
  Menu,
  X,
  Instagram,
  Twitter,
  Facebook,
  Youtube
} from 'lucide-react';
import { Link } from 'react-router-dom';
import LoginComponent from '../components/Login';
import DashboardComponent from '../components/Dashboard';
import AgendamentosComponent from '../components/Agendamentos';
import ExamesComponent from '../components/Exames';
import FilaSUSComponent from '../components/FilaSUS';
import ProntuarioComponent from '../components/Prontuario';
import ReceitasComponent from '../components/Receitas';
import VacinacaoComponent from '../components/Vacinacao';
import { cn } from '../lib/utils';

type Tab = 'dashboard' | 'agendamentos' | 'exames' | 'fila' | 'prontuario' | 'receitas' | 'vacinacao';

export default function LoginWrapper() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentTab, setCurrentTab] = useState<Tab>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (!isLogged) {
    return <LoginComponent onLogin={() => setIsLogged(true)} />;
  }

  const handleNavigate = (tab: Tab) => {
    setCurrentTab(tab);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { id: 'dashboard', label: 'Início', icon: Home },
    { id: 'prontuario', label: 'Prontuário Digital', icon: FileText },
    { id: 'agendamentos', label: 'Agendamentos', icon: Calendar },
    { id: 'vacinacao', label: 'Carteira de Vacinação', icon: Syringe },
    { id: 'exames', label: 'Meus Exames', icon: TestTube },
    { id: 'receitas', label: 'Receitas Médicas', icon: Pill },
    { id: 'fila', label: 'Fila do SUS', icon: Users },
  ] as const;

  return (
    <div className="flex flex-col h-screen bg-gray-50 overflow-hidden font-sans">
      
      {/* Top Blue Bar */}
      <div className="bg-[#0037C1] text-white py-1.5 px-6 flex justify-between items-center text-sm z-20 relative">
        <div className="flex gap-4">
          <Instagram className="w-4 h-4 cursor-pointer hover:text-gray-200" />
          <Twitter className="w-4 h-4 cursor-pointer hover:text-gray-200" />
          <Facebook className="w-4 h-4 cursor-pointer hover:text-gray-200" />
          <Youtube className="w-4 h-4 cursor-pointer hover:text-gray-200" />
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white h-20 shadow-sm z-10 flex relative w-full">
        <div className="w-[40%] md:w-1/2 flex items-center px-4 md:px-8 gap-3">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 -ml-2 text-[#0037C1] hover:bg-gray-100 rounded-lg transition-colors">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <Link to="/" className="flex items-center">
             <span className="text-[#0037C1] font-extrabold text-xl md:text-2xl tracking-tight">CARTÃO SAÚDE</span>
          </Link>
        </div>

        <div className="w-[60%] md:w-1/2 bg-[#FFCC00] relative flex items-center justify-end px-4 md:px-8" 
             style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}>
          <div className="text-right mr-3 md:mr-4 hidden sm:block">
             <div className="font-bold text-[#0037C1] text-sm md:text-base leading-tight">Cidadão Conectado</div>
             <div className="text-xs text-[#0037C1]/80">Cartão SUS: final 0001</div>
          </div>
          <div className="bg-white text-[#0037C1] w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-sm">
             C
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={cn(
          "fixed inset-y-0 left-0 bg-white w-72 border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static z-40 flex flex-col pt-24 lg:pt-0",
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}>
          <div className="px-6 py-4 hidden lg:block">
             <h3 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">Menu de Serviços</h3>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 space-y-1 mt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-semibold transition-all duration-200",
                  currentTab === item.id 
                    ? "bg-[#0037C1] text-white shadow-md shadow-[#0037C1]/20" 
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                )}
              >
                <item.icon className={cn("w-5 h-5", currentTab === item.id ? "text-white" : "text-gray-400")} />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="p-4 md:p-6 pb-6 mt-4">
            <button 
              onClick={() => setIsLogged(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-lg text-sm font-bold text-white bg-[#0037C1] hover:bg-blue-800 transition-colors shadow-md"
            >
              <LogOut className="w-5 h-5" />
              Sair do Cartão
            </button>
          </div>
        </aside>

        {isMobileMenuOpen && (
          <div 
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto w-full bg-gray-50/50 flex flex-col">
          <div className="max-w-6xl mx-auto p-6 md:p-8 lg:p-10 flex-1 w-full">
            {currentTab === 'dashboard' && <DashboardComponent onNavigate={handleNavigate} />}
            {currentTab === 'agendamentos' && <AgendamentosComponent />}
            {currentTab === 'exames' && <ExamesComponent />}
            {currentTab === 'fila' && <FilaSUSComponent />}
            {currentTab === 'prontuario' && <ProntuarioComponent />}
            {currentTab === 'receitas' && <ReceitasComponent />}
            {currentTab === 'vacinacao' && <VacinacaoComponent />}
          </div>

          <footer className="bg-[#0037C1] text-white py-6 mt-auto border-t border-blue-800">
            <div className="max-w-6xl mx-auto px-6 md:px-8 lg:px-10 flex flex-col sm:flex-row justify-between items-center gap-4">
              <img 
                alt="Jaboatão Logo" 
                className="h-8 opacity-90" 
                referrerPolicy="no-referrer" 
                src="https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Flogo-hz-gradient-font-white.png&w=384&q=75" 
              />
              <div className="text-xs text-blue-200 text-center sm:text-right">
                <p className="font-semibold text-white/90">Secretaria Municipal de Saúde</p>
                <p className="mt-0.5 opacity-80">Jaboatão dos Guararapes - PE</p>
                <p className="mt-2 opacity-60">© {new Date().getFullYear()} Todos os direitos reservados.</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
