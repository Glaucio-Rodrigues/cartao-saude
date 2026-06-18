import { useState } from 'react';
import { Lock, CreditCard, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [susNumber, setSusNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const formatSusNumber = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    const match = numbers.match(/^(\d{0,3})(\d{0,4})(\d{0,4})(\d{0,4})$/);
    if (!match) {
      return numbers.substring(0, 15);
    }
    
    let formatted = match[1];
    if (match[2]) formatted += ' ' + match[2];
    if (match[3]) formatted += ' ' + match[3];
    if (match[4]) formatted += ' ' + match[4];
    
    return formatted.trim();
  };

  const handleSusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSusNumber(formatSusNumber(e.target.value));
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanSus = susNumber.replace(/\s/g, '');
    if (cleanSus === '000000000000001' && password === 'adm123') {
      onLogin();
    } else {
      setError('Número do cartão SUS ou senha inválidos.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#0038a8] p-8 flex flex-col items-center justify-center relative">
          <div className="absolute top-0 left-0 w-full h-2 bg-[#ffcc00]"></div>
          <Link to="/">
            <img 
              alt="Jaboatão Logo" 
              className="h-14 mb-4 hover:opacity-90 transition-opacity" 
              referrerPolicy="no-referrer" 
              src="https://jaboatao.pe.gov.br/_next/image?url=%2Fimages%2Flogo-hz-gradient-font-white.png&w=384&q=75" 
            />
          </Link>
          <h1 className="text-white font-black text-2xl leading-none mt-2 tracking-tight text-center uppercase">Acesso ao Cartão Saúde</h1>
        </div>

        {/* Form */}
        <div className="p-8">
          <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Acesse sua carteira digital</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Número do Cartão SUS</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CreditCard className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={susNumber}
                  onChange={handleSusChange}
                  placeholder="000 0000 0000 0001"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0038a8] focus:border-[#0038a8] text-lg font-medium tracking-wide transition-colors"
                  maxLength={18}
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Senha</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(''); }}
                  placeholder="••••••"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0038a8] focus:border-[#0038a8] text-lg transition-colors"
                  required
                />
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg text-sm font-medium animate-in fade-in">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <p>{error}</p>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#0038a8] hover:bg-blue-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md transition-colors mt-2"
            >
              Entrar no Sistema
            </button>
          </form>
          
          <div className="mt-6 text-center">
            <a href="#" className="text-sm font-medium text-[#0038a8] hover:underline">Esqueci minha senha</a>
          </div>
        </div>
      </div>
      
      {/* Footer info for testing */}
      <div className="mt-8 text-center text-sm text-gray-500 max-w-xs">
        <p>Para testar, use:</p>
        <p className="font-mono mt-1 text-gray-700">Cartão: 000 0000 0000 0001</p>
        <p className="font-mono text-gray-700">Senha: adm123</p>
      </div>
    </div>
  );
}
