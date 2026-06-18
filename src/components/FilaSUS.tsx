import { Activity, Users, Clock, AlertCircle, Info } from 'lucide-react';

export default function FilaSUS() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Fila Digital SUS</h1>
        <p className="text-gray-500 mt-1 text-sm">Acompanhe sua posição e tempo de espera com transparência.</p>
      </header>

      {/* Active Queue Card */}
      <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-3xl p-6 text-white shadow-lg relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium backdrop-blur-sm border border-white/10">
                Encaminhamento Ativo
              </span>
              <h2 className="text-2xl font-bold mt-3">Ortopedia</h2>
              <p className="text-teal-100 text-sm mt-1">Hospital das Clínicas</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <Activity className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-black/20 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-2 text-teal-100 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Sua Posição</span>
              </div>
              <div className="text-3xl font-bold">42º</div>
              <div className="text-xs text-teal-200 mt-1">de 156 pacientes</div>
            </div>
            
            <div className="bg-black/20 rounded-2xl p-4 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-2 text-teal-100 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider font-semibold">Tempo Est.</span>
              </div>
              <div className="text-3xl font-bold">45 <span className="text-lg font-normal">dias</span></div>
              <div className="text-xs text-teal-200 mt-1">Previsão: Dez/2023</div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-white/20 flex items-start gap-3">
            <Info className="w-5 h-5 text-teal-200 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-teal-100 leading-relaxed">
              Sua posição é atualizada diariamente. Casos de urgência podem alterar a ordem da fila conforme protocolo de classificação de risco.
            </p>
          </div>
        </div>
      </div>

      {/* Queue History or Other Queues */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Outras Solicitações</h3>
        
        <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h4 className="font-semibold text-gray-900">Ressonância Magnética</h4>
              <p className="text-sm text-gray-500">Solicitado em 10/09/2023</p>
            </div>
            <span className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-md">Aguardando Vaga</span>
          </div>
          
          <div className="flex items-center gap-3 mt-4">
            <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-gray-400 w-1/4 rounded-full"></div>
            </div>
            <span className="text-xs font-medium text-gray-500">Posição: 128º</span>
          </div>
        </div>
      </div>

      {/* Transparency Info */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
        <div className="flex items-center gap-3 mb-2">
          <AlertCircle className="w-5 h-5 text-blue-600" />
          <h4 className="font-semibold text-blue-900">Transparência SUS</h4>
        </div>
        <p className="text-sm text-blue-800 leading-relaxed">
          O Cartão Saúde garante a transparência das filas do SUS. As posições são baseadas na ordem cronológica e na classificação de risco (Protocolo de Manchester).
        </p>
        <button className="mt-3 text-sm font-medium text-blue-700 hover:underline">
          Entenda como funciona a fila
        </button>
      </div>
    </div>
  );
}
