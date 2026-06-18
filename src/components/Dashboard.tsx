import { Newspaper, Star, Map, Info } from 'lucide-react';

export default function Dashboard({ onNavigate }: { onNavigate: (tab: any) => void }) {
  return (
    <div className="w-full py-6 md:py-8 animate-in fade-in duration-500">
      
      <header className="mb-8">
        <h1 className="text-2xl font-semibold text-gray-900">Bem-vindo, Cidadão.</h1>
        <p className="text-gray-500 mt-1 text-sm">Este é o seu portal integrado de serviços de saúde.</p>
      </header>

      {/* Cartão SUS */}
      <div className="relative w-full max-w-lg mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-200 mb-8 aspect-[1.59]">
        <img 
          src="https://cadunico.com.br/wp-content/uploads/cartao-sus-imprimir-pela-internet-2-via-e1532271516140.png" 
          alt="Cartão SUS" 
          className="absolute inset-0 w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="bg-white/50 border-2 border-dashed border-gray-200 rounded-3xl p-8 md:p-12 mb-8 flex flex-col items-center justify-center text-center">
        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
           <Info className="w-6 h-6 text-[#0038a8] opacity-60" />
        </div>
        <p className="text-sm mt-3 max-w-lg text-gray-600 leading-relaxed font-medium">
          Este espaço está reservado para futuras atualizações, avisos da secretaria de saúde, informativos em tempo real e indicadores gerais da rede.
        </p>
      </div>

      {/* Bottom Links */}
      <div className="mt-16 pt-8 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-12 text-[#0038a8] font-bold text-base md:text-lg">
        <button className="flex items-center gap-2 hover:text-blue-800 transition-colors">
          <Newspaper className="w-5 h-5 md:w-6 md:h-6" />
          NOTÍCIAS
        </button>
        <button className="flex items-center gap-2 hover:text-blue-800 transition-colors">
          <Star className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" />
          DESTAQUES
        </button>
        <button className="flex items-center gap-2 hover:text-blue-800 transition-colors">
          <Map className="w-5 h-5 md:w-6 md:h-6" />
          MAPAS
        </button>
      </div>
    </div>
  );
}
