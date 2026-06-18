import { useState } from 'react';
import { Search, Filter, Share2, Upload, FileText, Download } from 'lucide-react';
import { generatePDF } from '../lib/pdf';

export default function Exames() {
  const [searchTerm, setSearchTerm] = useState('');
  const [exames, setExames] = useState([
    { title: "Hemograma Completo", date: "10 Out 2023", doctor: "Dr. Roberto Almeida", type: "PDF", size: "1.2 MB" },
    { title: "Ressonância Magnética - Joelho", date: "15 Ago 2023", doctor: "Dra. Camila Santos", type: "Imagem", size: "4.5 MB" },
    { title: "Ecocardiograma", date: "02 Fev 2023", doctor: "Dr. Roberto Almeida", type: "PDF", size: "2.1 MB" }
  ]);

  const filteredExames = exames.filter((exame) =>
    exame.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exame.doctor.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      
      const newExame = {
        title: file.name.split('.')[0] || "Exame Anexado",
        date: new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).format(new Date()),
        doctor: 'Você (Anexado)',
        type: file.type.includes('pdf') ? 'PDF' : 'Imagem',
        size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
      };
      
      setExames([newExame, ...exames]);
      e.target.value = '';
    }
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Armazenamento de Exames</h1>
          <p className="text-gray-500 mt-1 text-sm">Acesse e gerencie seus resultados de exames laboratoriais e de imagem.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-xl text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Compartilhar</span>
          </button>
          <label className="flex items-center gap-2 px-4 py-2 bg-[#0038a8] text-white rounded-xl text-sm font-medium hover:bg-blue-800 transition-colors shadow-sm cursor-pointer">
            <Upload className="w-4 h-4" />
            <span>Anexar exame</span>
            <input 
              type="file" 
              className="hidden" 
              onChange={handleFileUpload} 
              accept=".pdf,image/*" 
            />
          </label>
        </div>
      </header>

      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar exames (ex: Hemograma)..." 
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#0038a8]" 
          />
        </div>
        <button className="p-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl hover:bg-gray-50 shadow-sm">
          <Filter className="w-5 h-5" />
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden divide-y divide-gray-100">
        {filteredExames.length > 0 ? (
          filteredExames.map((exame, index) => (
            <DocumentItem key={index} {...exame} />
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            Nenhum exame encontrado para "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
}

function DocumentItem({ title, date, doctor, type, size }: { title: string, date: string, doctor: string, type: string, size: string }) {
  return (
    <div className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors group cursor-pointer">
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{title}</h4>
          <p className="text-sm text-gray-500 mt-0.5">{doctor}</p>
          <div className="flex items-center gap-2 mt-1 text-xs text-gray-400 font-medium">
            <span>{date}</span>
            <span>•</span>
            <span className="text-gray-600">{type}</span>
            <span>•</span>
            <span>{size}</span>
          </div>
        </div>
      </div>
      <button 
        onClick={() => generatePDF(title, date, doctor, `Tipo: ${type} - Tamanho: ${size}`)}
        className="p-2 text-gray-400 hover:text-[#0038a8] hover:bg-blue-50 rounded-lg transition-colors" 
        title="Download PDF"
      >
        <Download className="w-5 h-5" />
      </button>
    </div>
  );
}
