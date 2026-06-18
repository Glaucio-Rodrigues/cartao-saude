import { Link } from 'react-router-dom';

export default function CartaoSaude() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <img 
                src="https://viver.jaboatao.pe.gov.br/wp-content/uploads/2025/02/logo-hz-gradient-01-300x84.png" 
                alt="Prefeitura de Jaboatão dos Guararapes" 
                className="h-12 object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 flex justify-center">
              <h1 className="text-2xl font-bold text-blue-800 hidden sm:block">
                Chegou o Cartão Saúde
              </h1>
            </div>
            <div className="w-[100px]"></div> {/* Spacer to keep title centered */}
          </div>
          {/* Mobile title */}
          <div className="pb-4 sm:hidden flex justify-center">
             <h1 className="text-xl font-bold text-blue-800 text-center">
                Chegou o Cartão Saúde
              </h1>
          </div>
        </div>
      </header>

      {/* Banner */}
      <div className="relative w-full min-h-[240px] sm:min-h-[250px] md:min-h-[260px] lg:min-h-[260px] flex items-end justify-center rounded-b-[20px] lg:rounded-b-[50px] overflow-hidden mb-8">
        <img src="https://coletivosaudemental.com.br/media/posts/14/Cartao-do-SUS.png" alt="background" className="absolute inset-0 w-full h-full object-cover" referrerPolicy="no-referrer" />
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="z-10 w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 pb-4 text-white text-center">
          <h1 className="text-[18px] sm:text-[22px] md:text-[28px] lg:text-[36px] font-bold uppercase drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)] leading-tight">CARTÃO SAÚDE - SAIBA MAIS</h1>
          <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[16px] font-semibold mt-1 flex justify-center items-center gap-1">
            <span>
              <Link className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all" to="/">INÍCIO</Link>
              &nbsp;» <span className="brightness-125">CARTÃO SAÚDE</span>
            </span>
            <span className="mx-1">|</span>
            <Link to="/login" className="text-white hover:underline hover:text-yellow-500 hover:brightness-125 transition-all">
              LOGIN
            </Link>
          </p>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="space-y-12 text-gray-700 leading-relaxed">
          
          {/* Intro */}
          <section className="prose prose-blue max-w-none">
            <p className="text-lg">
              O Cartão Saúde surge como uma solução inovadora, funcionando como uma Carteira 
              Digital de Saúde que centraliza informações essenciais em um único aplicativo. O 
              objetivo principal é gerenciar os atendimentos de forma prática, promovendo maior 
              eficiência, transparência e organização no acompanhamento médico.
            </p>
            <p className="text-lg mt-4">
              Entre suas funcionalidades estão o prontuário digital, o agendamento de consultas, a 
              carteira de vacinação, o armazenamento de exames e receitas médicas, além da fila 
              digital — recursos que representam um avanço significativo na integração tecnológica 
              ao serviço público de saúde.
            </p>
            <p className="text-lg mt-4">
              Mais do que um recurso digital, o Cartão Saúde é uma ferramenta de inclusão, 
              fortalecendo a relação entre pacientes e profissionais de saúde e contribuindo para um 
              atendimento mais organizado, acessível e humanizado.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Público Alvo */}
            <section className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3 text-sm">1</span>
                Público Alvo
              </h2>
              <p>
                O aplicativo é voltado para quem precisa de maior praticidade e centralização das 
                informações médicas, garantindo inclusão digital e melhor experiência, sem focar em 
                idade.
              </p>
            </section>

            {/* Problema */}
            <section className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3 text-sm">2</span>
                Problema
              </h2>
              <ul className="space-y-3 list-none p-0">
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  Dificuldades em acompanhar consultas
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  Perda de exames e documentos médicos
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  Desorganização do histórico médico
                </li>
                <li className="flex items-start">
                  <span className="text-gray-500 mr-2">•</span>
                  Complicações em acompanhar filas médicas
                </li>
              </ul>
            </section>
          </div>

          {/* Objetivo */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3 text-sm">3</span>
              Objetivo
            </h2>
            <p className="text-lg">
              Centralizar todas as informações de saúde dos usuários em um único aplicativo, 
              funcionando como uma carteira digital que reúne prontuário, exames, consultas, 
              vacinas e histórico médico. A proposta busca melhorar o atendimento médico ao 
              disponibilizar dados organizados e acessíveis, facilitar o acompanhamento de 
              consultas e exames, reduzir perdas de documentos e dar mais transparência ao 
              sistema público de saúde por meio do acompanhamento digital das filas.
            </p>
          </section>

          {/* Benefícios */}
          <section className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 rounded-full bg-gray-200 text-gray-700 flex items-center justify-center mr-3 text-sm">4</span>
              Benefícios
            </h2>
            <p className="text-lg">
              O projeto Cartão Saúde traz melhorias significativas para a experiência dos pacientes e 
              para a eficiência do sistema de saúde. Ele proporciona uma melhor organização das 
              informações médicas, evitando perdas de exames e consultas, além de reduzir faltas 
              decorrentes de esquecimento ou descontrole de agendamentos. Com dados 
              centralizados e acessíveis, os profissionais de saúde têm acesso rápido ao histórico do 
              paciente, o que torna o atendimento mais ágil e eficaz.
            </p>
          </section>

        </div>
      </main>
    </div>
  );
}
