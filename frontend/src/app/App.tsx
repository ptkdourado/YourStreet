import { useState } from "react";
import logo from "figma:asset/2ee5a729a53e6d7122aac1e983d6dd6a232f1a6b.png";

export default function App() {
  const [activePanel, setActivePanel] = useState<"map" | "community" | "idea" | null>(null);

  const handlePanelToggle = (panel: "map" | "community" | "idea") => {
    // Se clicar no painel já ativo, fecha. Senão, abre o novo painel
    setActivePanel(activePanel === panel ? null : panel);
  };

  const handleGoogleLogin = () => {
    console.log("Login com Google iniciado");
    // Aqui você implementaria a lógica de autenticação OAuth do Google
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Lado Esquerdo - Ilustração e Textos */}
      <div className="lg:w-1/2 bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-8 lg:p-16 flex flex-col justify-center items-center relative overflow-hidden">
        {/* Decoração de fundo */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1771098302693-335a74ac1e6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMGNpdHlzY2FwZSUyMGlsbHVzdHJhdGlvbiUyMG1pbmltYWx8ZW58MXx8fHwxNzcyMjMyMDYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="relative z-10 max-w-lg w-full text-center lg:text-left space-y-6">
          {/* Botões interativos como tabs */}
          <div className="flex justify-center lg:justify-start gap-4 mb-8">
            <button
              onClick={() => handlePanelToggle("map")}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-500/50 hover:scale-110 hover:shadow-lg ${
                activePanel === "map"
                  ? "bg-yellow-400 shadow-lg -translate-y-0.5"
                  : "bg-black/10 hover:bg-black/20"
              }`}
              aria-label="Como o Mapa Funciona"
            >
              <svg
                className={`w-8 h-8 transition-colors ${
                  activePanel === "map" ? "text-white" : "text-black"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                />
              </svg>
            </button>
            <button
              onClick={() => handlePanelToggle("community")}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-500/50 hover:scale-110 hover:shadow-lg ${
                activePanel === "community"
                  ? "bg-yellow-400 shadow-lg -translate-y-0.5"
                  : "bg-yellow-400/30 hover:bg-yellow-400/50"
              }`}
              aria-label="Rede Colaborativa"
            >
              <svg
                className={`w-8 h-8 transition-colors ${
                  activePanel === "community" ? "text-white" : "text-yellow-700"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
            <button
              onClick={() => handlePanelToggle("idea")}
              className={`w-16 h-16 rounded-2xl flex items-center justify-center transform transition-all duration-300 cursor-pointer focus:outline-none focus:ring-4 focus:ring-yellow-500/50 hover:scale-110 hover:shadow-lg ${
                activePanel === "idea"
                  ? "bg-yellow-400 shadow-lg -translate-y-0.5"
                  : "bg-black/10 hover:bg-black/20"
              }`}
              aria-label="Propósito da Plataforma"
            >
              <svg
                className={`w-8 h-8 transition-colors ${
                  activePanel === "idea" ? "text-white" : "text-black"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            </button>
          </div>

          {/* Painéis informativos com animação */}
          {activePanel === "map" && (
            <div 
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-6 animate-[slideIn_0.3s_ease-out]"
              style={{ 
                animation: 'slideIn 0.3s ease-out',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <h3 className="text-lg font-semibold text-black">Como o Mapa Funciona</h3>
              </div>
              <div className="space-y-2 text-sm text-black/80">
                <p>• Marque ocorrências diretamente no mapa da cidade</p>
                <p>• Cada ponto representa um problema real relatado</p>
                <p>• Inclua fotos, descrição e nível de urgência</p>
                <p>• Atualização em tempo real</p>
                <p>• Mais confirmações = maior relevância</p>
                <div className="mt-4 pt-4 border-t border-black/10">
                  <p className="text-black font-medium italic">
                    "Visualize os problemas da sua região em segundos."
                  </p>
                </div>
              </div>
            </div>
          )}

          {activePanel === "community" && (
            <div 
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-6 animate-[slideIn_0.3s_ease-out]"
              style={{ 
                animation: 'slideIn 0.3s ease-out',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h3 className="text-lg font-semibold text-black">Rede Colaborativa</h3>
              </div>
              <div className="space-y-2 text-sm text-black/80">
                <p>• Comente e apoie ocorrências de outros moradores</p>
                <p>• Confirme que o problema também afeta você</p>
                <p>• A comunidade fortalece a visibilidade dos casos</p>
                <p>• Incentive a colaboração entre cidadãos</p>
                <p>• Gerem pressão positiva por soluções</p>
                <div className="mt-4 pt-4 border-t border-black/10">
                  <p className="text-black font-medium italic">
                    "Problemas compartilhados geram soluções coletivas."
                  </p>
                </div>
              </div>
            </div>
          )}

          {activePanel === "idea" && (
            <div 
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg mb-6 animate-[slideIn_0.3s_ease-out]"
              style={{ 
                animation: 'slideIn 0.3s ease-out',
                fontFamily: 'Poppins, sans-serif'
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3 className="text-lg font-semibold text-black">Propósito da Plataforma</h3>
              </div>
              <div className="space-y-2 text-sm text-black/80">
                <p>• Conectar cidadãos para melhorar bairros</p>
                <p>• Criar um canal organizado de visibilidade pública</p>
                <p>• Facilitar comunicação sobre problemas urbanos</p>
                <p>• Incentivar responsabilidade coletiva</p>
                <p>• Transformar reclamações em mobilização estruturada</p>
                <div className="mt-4 pt-4 border-t border-black/10">
                  <p className="text-black font-medium italic">
                    "Tecnologia a favor da transformação urbana."
                  </p>
                </div>
              </div>
            </div>
          )}

          <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] xl:text-5xl text-black" style={{ lineHeight: '1.25' }}>
            <span className="font-semibold">Sua rua melhor começa</span>
            <br />
            <span className="font-bold">com você.</span>
          </h1>

          <p className="text-lg lg:text-xl text-black/80 leading-relaxed">
            Conectando cidadãos para resolver problemas reais da cidade.
          </p>

          <div className="pt-6 space-y-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="flex items-center gap-3 text-black/80 font-medium">
              <svg className="w-5 h-5 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="leading-relaxed">Relate problemas nas ruas e bairros</span>
            </div>
            <div className="flex items-center gap-3 text-black/80 font-medium">
              <svg className="w-5 h-5 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="leading-relaxed">
                Compartilhe ocorrências com a comunidade
              </span>
            </div>
            <div className="flex items-center gap-3 text-black/80 font-medium">
              <svg className="w-5 h-5 text-black flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="leading-relaxed">Transforme seu bairro juntos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Lado Direito - Card de Login com Google */}
      <div className="lg:w-1/2 bg-white p-8 lg:p-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          {/* Card de Login */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
            {/* Logotipo */}
            <div className="flex justify-center mb-8">
              <img
                src={logo}
                alt="Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            {/* Título */}
            <h2 className="text-2xl text-center text-black mb-3">
              Acesse com sua conta
            </h2>

            {/* Subtítulo */}
            <p className="text-center text-gray-600 mb-8 text-sm">
              Entre com sua conta Google para continuar.
            </p>

            {/* Botão Google */}
            <button
              onClick={handleGoogleLogin}
              className="w-full bg-white hover:bg-gray-50 text-black py-3.5 px-4 rounded-xl border border-[#DADCE0] transition-all duration-200 hover:shadow-md flex items-center justify-center gap-3 min-h-[48px]"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.20443C17.64 8.56625 17.5827 7.95262 17.4764 7.36353H9V10.8449H13.8436C13.635 11.9699 13.0009 12.9231 12.0477 13.5613V15.8194H14.9564C16.6582 14.2526 17.64 11.9453 17.64 9.20443Z" fill="#4285F4"/>
                <path d="M8.99976 18C11.4298 18 13.467 17.1941 14.9561 15.8195L12.0475 13.5613C11.2416 14.1013 10.2107 14.4204 8.99976 14.4204C6.65567 14.4204 4.67158 12.8372 3.96385 10.71H0.957031V13.0418C2.43794 15.9831 5.48158 18 8.99976 18Z" fill="#34A853"/>
                <path d="M3.96409 10.7098C3.78409 10.1698 3.68182 9.59301 3.68182 8.99983C3.68182 8.40665 3.78409 7.82983 3.96409 7.28983V4.95801H0.957273C0.347727 6.17301 0 7.54755 0 8.99983C0 10.4521 0.347727 11.8266 0.957273 13.0416L3.96409 10.7098Z" fill="#FBBC05"/>
                <path d="M8.99976 3.57955C10.3211 3.57955 11.5075 4.03364 12.4402 4.92545L15.0216 2.34409C13.4629 0.891818 11.4257 0 8.99976 0C5.48158 0 2.43794 2.01682 0.957031 4.95818L3.96385 7.29C4.67158 5.16273 6.65567 3.57955 8.99976 3.57955Z" fill="#EA4335"/>
              </svg>
              <span className="font-medium">Continuar com Google</span>
            </button>

            {/* Texto de segurança */}
            <p className="text-center text-xs text-gray-500 mt-6 leading-relaxed">
              Utilizamos autenticação segura do Google. Não armazenamos sua senha.
            </p>
          </div>

          {/* Rodapé */}
          <p className="text-center text-sm text-gray-500 mt-8">
            © 2026 YS Civic Platform – Transformando bairros juntos.
          </p>
        </div>
      </div>
    </div>
  );
}
