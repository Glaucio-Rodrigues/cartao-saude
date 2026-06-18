import { Shield } from 'lucide-react';

export default function Vacinacao() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-2xl font-semibold text-gray-900">Carteira de Vacinação</h1>
        <p className="text-gray-500 mt-1 text-sm">Registro digital integrado de imunizações do Ministério da Saúde.</p>
      </header>

      {/* Status Banner */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 flex items-start gap-4 shadow-sm">
        <Shield className="w-8 h-8 text-[#0038a8] flex-shrink-0" />
        <div>
          <h3 className="text-[#0038a8] font-bold text-lg leading-tight mb-1">Imunização em dia</h3>
          <p className="text-sm text-blue-800/80">Sua carteira está atualizada de acordo com o calendário nacional de vacinação para sua faixa etária.</p>
        </div>
      </div>

      {/* Vaccines List */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden p-5">
        <h3 className="font-semibold text-gray-900 mb-4 px-1">Doses Aplicadas</h3>
        
        <div className="space-y-3">
          <VaccineItem name="COVID-19 (Bivalente)" date="10 Mar 2023" dose="Reforço" appliedAt="UBS Centro" />
          <VaccineItem name="Influenza (Gripe)" date="15 Mai 2023" dose="Anual" appliedAt="Hospital das Clínicas" />
          <VaccineItem name="Hepatite B" date="12 Jan 2020" dose="3ª Dose" appliedAt="Posto Saúde Vila Nova" />
          <VaccineItem name="Febre Amarela" date="05 Nov 2018" dose="Dose Única" appliedAt="UBS Sul" />
        </div>
      </div>
    </div>
  );
}

function VaccineItem({ name, date, dose, appliedAt }: { name: string, date: string, dose: string, appliedAt: string }) {
  return (
    <div className="flex items-center justify-between p-4 border border-gray-100 rounded-xl bg-gray-50/50 hover:bg-gray-50 transition-colors">
      <div>
        <h4 className="font-semibold text-gray-900 text-sm md:text-base">{name}</h4>
        <div className="flex gap-2 items-center mt-1">
          <span className="px-2 py-0.5 bg-[#0038a8]/10 text-[#0038a8] text-xs font-semibold rounded">{dose}</span>
          <span className="text-xs text-gray-500 hidden sm:inline-block">Local: {appliedAt}</span>
        </div>
      </div>
      <div className="text-right">
        <span className="text-sm font-bold text-gray-700">{date}</span>
      </div>
    </div>
  );
}
