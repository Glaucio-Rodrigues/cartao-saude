import { useState } from 'react';
import { Search, Filter, FileText, Download } from 'lucide-react';
import { generatePDF } from '../lib/pdf';

export default function Receitas() {
  const [searchTerm, setSearchTerm] = useState('');

  const receitas = [
    { title: "Amoxicilina 500mg, Ibuprofeno 400mg", date: "10 Out 2023", doctor: "Dr. Roberto Almeida", status: "Válida" },
    { title: "Losartana 50mg", date: "15 Ago 2023", doctor: "Dra. Camila Santos", status: "Expirada" },
    { title: "Dipirona Sódica 500mg", date: "02 Fev 2023", doctor: "Dr. Roberto Almeida", status: "Expirada" }
  ];

  const filteredReceitas = receitas.filter((receita) =>
    receita.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    receita.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Receitas Médicas</h1>
          <p className="text-gray-500 mt-1 text-sm">Histórico e documentos de prescrições médicas e medicamentos.</p>
        </div>
      </header>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar receitas por medicamento ou médico..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0038a8]" 
          />
        </div>
        <button className="p-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 shadow-sm">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
        {filteredReceitas.length > 0 ? (
          filteredReceitas.map((receita, index) => (
            <ReceitaItem key={index} {...receita} />
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            Nenhuma receita encontrada para "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}

function ReceitaItem({ title, date, doctor, status }: { title: string, date: string, doctor: string, status: string }) {
  const isValida = status === 'Válida';
  return (
    <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
      <div className="flex items-start gap-4">
        <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-1">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900 leading-tight">{title}</h4>
          <p className="text-sm text-gray-500 mt-1">Prescrito por {doctor} em {date}</p>
          <div className="mt-2 text-left">
            <span className={`text-xs font-semibold px-2 py-1 rounded-md inline-block ${isValida ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-600'}`}>{status}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={(e) => {
          e.stopPropagation();
          generatePDF(title, date, doctor, `Status: ${status}`);
        }}
        className="p-2 text-gray-400 hover:text-[#0038a8] hover:bg-blue-50 rounded-lg transition-colors"
        title="Download Receita (PDF)"
      >
        <Download className="w-5 h-5" />
      </button>
    </div>
  );
}
