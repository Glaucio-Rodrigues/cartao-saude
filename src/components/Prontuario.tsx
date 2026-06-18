import { Activity, Stethoscope, HeartPulse } from 'lucide-react';

export default function Prontuario() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Prontuário Digital</h1>
        <p className="text-gray-500 mt-1 text-sm">Resumo do seu histórico clínico e informações gerais.</p>
      </header>

      {/* Vital info cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0">
             <HeartPulse className="w-6 h-6" />
          </div>
          <div>
             <p className="text-sm text-gray-500">Tipo Sanguíneo</p>
             <p className="text-xl font-bold text-gray-900">O+</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#0038a8] shrink-0">
             <Activity className="w-6 h-6" />
          </div>
          <div>
             <p className="text-sm text-gray-500">Alergias</p>
             <p className="text-xl font-bold text-gray-900 truncate">Dipirona</p>
          </div>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
             <Stethoscope className="w-6 h-6" />
          </div>
          <div>
             <p className="text-sm text-gray-500">Comorbidades</p>
             <p className="text-xl font-bold text-gray-900">Nenhuma</p>
          </div>
        </div>
      </div>

      {/* Clinical interactions timeline */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6 px-1">Últimas Interações Clínicas</h3>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-gray-200 before:via-gray-200 before:to-transparent">
           
           <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#0038a8] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm">
                 <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg">Consulta de Rotina</h4>
                    <span className="text-sm font-semibold text-gray-500 bg-white px-2 py-1 rounded shadow-sm border border-gray-100">12 Out 2023</span>
                 </div>
                 <p className="text-sm leading-relaxed text-gray-600">Atendimento regular com Clínico Geral em UBS Centro. Observados os sinais vitais, pressão arterial 12/8. Paciente apresenta bons indicadores para a idade.</p>
              </div>
           </div>

           <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-blue-400 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-2xl border border-gray-100 shadow-sm">
                 <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900 text-base md:text-lg">Atendimento Ortopédico</h4>
                    <span className="text-sm font-semibold text-gray-500 bg-gray-50 px-2 py-1 rounded border border-gray-100">05 Ago 2023</span>
                 </div>
                 <p className="text-sm leading-relaxed text-gray-600">Entrada na urgência por torção leve no tornozelo. Realizado raio-x sem indicativo de fratura. Receitado repouso e anti-inflamatório.</p>
              </div>
           </div>
           
        </div>
      </div>
    </div>
  );
}
