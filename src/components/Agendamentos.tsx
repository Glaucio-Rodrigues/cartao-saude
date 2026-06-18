import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, MapPin, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Agendamentos() {
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const handleReagendar = () => {
    setMessage({ text: 'Solicitação de reagendamento enviada com sucesso!', type: 'success' });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleCancelar = () => {
    setMessage({ text: 'Solicitação de cancelamento enviada!', type: 'error' });
    setTimeout(() => setMessage(null), 5000);
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Agendamentos</h1>
          <p className="text-gray-500 mt-1 text-sm">Gerencie suas consultas e exames.</p>
        </div>
      </header>

      {message && (
        <div className={cn(
          "p-4 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2",
          message.type === 'success' ? "bg-emerald-50 text-emerald-800 border border-emerald-200" : "bg-red-50 text-red-800 border border-red-200"
        )}>
          {message.type === 'success' ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          <span className="font-medium text-sm">{message.text}</span>
        </div>
      )}

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Próximos</h2>
        
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-teal-50 rounded-xl flex flex-col items-center justify-center text-teal-700 flex-shrink-0 border border-teal-100">
                  <span className="text-xs font-bold uppercase">Out</span>
                  <span className="text-xl font-bold leading-none">24</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Consulta Cardiológica</h3>
                  <p className="text-gray-600 text-sm">Dr. Roberto Almeida</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-md">Confirmado</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2.5 rounded-lg">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>14:30 (Duração est.: 30min)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2.5 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="truncate">Clínica Vida - Sala 402</span>
              </div>
            </div>
            
            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-50">
              <button 
                onClick={handleReagendar}
                className="flex-1 py-2 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reagendar
              </button>
              <button 
                onClick={handleCancelar}
                className="flex-1 py-2 text-sm font-medium text-red-600 bg-white border border-gray-200 rounded-lg hover:bg-red-50 hover:border-red-200 transition-colors"
              >
                Cancelar
              </button>
            </div>
          </div>
          
          <div className="p-5">
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                <div className="w-14 h-14 bg-gray-50 rounded-xl flex flex-col items-center justify-center text-gray-700 flex-shrink-0 border border-gray-200">
                  <span className="text-xs font-bold uppercase">Nov</span>
                  <span className="text-xl font-bold leading-none">12</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg">Exame de Sangue</h3>
                  <p className="text-gray-600 text-sm">Laboratório Central</p>
                </div>
              </div>
              <span className="px-2.5 py-1 bg-yellow-50 text-yellow-700 text-xs font-medium rounded-md">Pendente</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2.5 rounded-lg">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>08:00 (Jejum de 12h)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2.5 rounded-lg">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="truncate">Unidade Centro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <h2 className="text-lg font-semibold text-gray-900">Histórico</h2>
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
          <HistoryItem title="Clínico Geral" doctor="Dra. Ana Silva" date="15 Set 2023" status="Realizado" />
          <HistoryItem title="Dermatologista" doctor="Dr. Carlos Mendes" date="02 Ago 2023" status="Realizado" />
          <HistoryItem title="Oftalmologista" doctor="Dra. Beatriz Costa" date="10 Jun 2023" status="Faltou" isLast />
        </div>
      </div>
    </div>
  );
}

function HistoryItem({ title, doctor, date, status, isLast = false }: { title: string, doctor: string, date: string, status: string, isLast?: boolean }) {
  const isMissed = status === 'Faltou';
  
  return (
    <div className={`p-4 flex items-center justify-between hover:bg-gray-50 cursor-pointer transition-colors ${!isLast ? 'border-b border-gray-100' : ''}`}>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500">
          <CalendarIcon className="w-5 h-5" />
        </div>
        <div>
          <h4 className="font-medium text-gray-900">{title}</h4>
          <p className="text-sm text-gray-500 mt-0.5">{doctor} • {date}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className={cn(
          "text-xs font-medium px-2.5 py-1 rounded-md hidden sm:block",
          isMissed ? "bg-red-50 text-red-700" : "bg-gray-100 text-gray-700"
        )}>
          {status}
        </span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </div>
    </div>
  );
}
