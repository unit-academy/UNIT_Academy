function abrirModalM(tipo) {
    let data = {};
    const modalM = document.getElementById("Mmodal");
    
    // --- FASE 1: VISUAL ---
    if (tipo === "criativa") {
        data = {
            title: "Fase 01: Design & Assets com IA",
            desc: "A fundação visual. Antes de escrever código, aprendemos a gerar os recursos gráficos e vídeos que darão vida ao sistema.",
            list: [
                {
                    title: "Engenharia de Prompts",
                    tag: "Fundamentos",
                    desc: "A lógica universal para comandar IAs. Aprenda sobre parâmetros, estilos e consistência visual."
                },
                {
                    title: "Síntese de Imagem (UI Assets)",
                    tag: "100% Prático",
                    desc: "Criação de ícones, logotipos, fundos e texturas de alta fidelidade para usar nos sites e apps."
                },
                {
                    title: "Vídeo Generativo & Motion",
                    tag: "Ferramentas",
                    desc: "Produção de trailers, vídeos de vendas e backgrounds animados sem precisar de câmeras."
                },
                {
                    title: "Prototipagem de Interfaces",
                    tag: "Projeto Real",
                    desc: "Gerando o layout completo das telas (Mockups) para guiar o desenvolvimento do código."
                }
            ],
            skills: "Domínio completo da geração de mídia sintética (Imagem, Vídeo e Áudio) para uso profissional."
        };
    }

    // --- FASE 2: LÓGICA ---
    if (tipo === "automacao") {
        data = {
            title: "Fase 02: Lógica & Automação (Backend)",
            desc: "O cérebro da operação. Preparamos o ambiente para a IA escrever scripts em Python que trabalham por você.",
            list: [
                {
                    title: "Setup de Desenvolvimento",
                    tag: "Configuração",
                    desc: "Instalação do Editor de Código, Interpretadores e configuração de variáveis de ambiente (PATH)."
                },
                {
                    title: "Lógica IA-First",
                    tag: "Metodologia",
                    desc: "Como ler, interpretar e corrigir scripts gerados por IA sem precisar decorar sintaxe."
                },
                {
                    title: "APIs de Mensageria (Chatbots)",
                    tag: "Projeto Real",
                    desc: "Conectando seu código ao WhatsApp/Telegram para criar atendentes que funcionam sozinhos."
                },
                {
                    title: "Manipulação de Dados",
                    tag: "Técnico",
                    desc: "Scripts para ler planilhas, extrair dados da web (Scraping) e gerar relatórios automáticos."
                },
                {
                    title: "Módulo Trader Quant",
                    tag: "Intensivo",
                    desc: "Conexão com corretoras financeiras e criação de algoritmos de compra e venda automática."
                }
            ],
            skills: "Capacidade de criar 'funcionários digitais' e scripts complexos usando a lógica assistida por IA."
        };
    }

    // --- FASE 3: SISTEMA WEB ---
    if (tipo === "web") {
        data = {
            title: "Fase 03: Arquitetura Web Full Stack",
            desc: "A construção do ecossistema. Estruturação de servidores, bancos de dados e sistemas complexos.",
            list: [
                {
                    title: "Servidor Local & Ambiente",
                    tag: "Configuração",
                    desc: "Transformando seu PC em um servidor de hospedagem com Apache, MySQL e Node.js."
                },
                {
                    title: "Arquitetura de Pastas (MVC)",
                    tag: "Conceito",
                    desc: "Organização profissional de arquivos para garantir que o projeto possa crescer sem quebrar."
                },
                {
                    title: "Front-End Inteligente",
                    tag: "Vision-to-Code",
                    desc: "Técnica de enviar layouts para a IA codificar HTML5/CSS3 responsivo em minutos."
                },
                {
                    title: "Banco de Dados & Autenticação",
                    tag: "Intensivo",
                    desc: "Sistemas de Login, Cadastro de Usuários, Painéis Administrativos e Segurança de dados."
                },
                {
                    title: "Deploy Profissional",
                    tag: "Publicação",
                    desc: "Configuração de DNS, SSL (Cadeado de segurança) e publicação em servidores reais na nuvem."
                }
            ],
            skills: "Você se torna um Arquiteto de Software capaz de construir plataformas, SaaS e sistemas de gestão."
        };
    }

    // --- FASE 4: MOBILE (WRAPPER & WEBVIEW) ---
    if (tipo === "mobile") {
        data = {
            title: "Fase 04: Mobile (Técnica WebView)",
            desc: "Não vamos reescrever o código. Aprenda a 'encapsular' seu site Web dentro de um aplicativo instalável (.APK) usando a técnica de Wrappers.",
            list: [
                {
                    title: "O Conceito Wrapper",
                    tag: "Estratégia",
                    desc: "Entenda como funcionam os 'Navegadores Dedicados' (WebViews) que transformam sites em aplicativos indistinguíveis dos nativos."
                },
                {
                    title: "Design App-Like",
                    tag: "UI/UX",
                    desc: "Técnicas de CSS e IA para fazer seu site parecer um aplicativo real (botões fixos, gestos de toque e remoção de zoom)."
                },
                {
                    title: "Ferramentas de Conversão",
                    tag: "Ferramentas",
                    desc: "Usando softwares automáticos para gerar o arquivo instalável (.APK para Android) a partir da sua URL."
                },
                {
                    title: "Publicação & Lojas",
                    tag: "Business",
                    desc: "Como assinar digitalmente seu aplicativo e o processo para disponibilizar para download (Play Store ou Download Direto)."
                }
            ],
            skills: "Capacidade de transformar qualquer projeto Web em um aplicativo mobile em questão de minutos, sem programar em Java ou Swift."
        };
    }

    // RENDERIZAÇÃO NO HTML
    document.getElementById("MmodalTitle").innerHTML = data.title;
    document.getElementById("MmodalDesc").innerHTML = data.desc;
    
    const lista = document.getElementById("MmodalList");
    lista.innerHTML = "";
    
    data.list.forEach(item => {
        // Lógica de Cores das Tags
        let corTag = "var(--primary)"; // Roxo padrão (Default)
        let bgTag = "rgba(124, 58, 237, 0.15)";

        // Cinza para Configuração/Teoria
        if(item.tag === "Configuração" || item.tag === "Fundamentos" || item.tag === "Conceito" || item.tag === "Metodologia" || item.tag === "Estratégia") { 
            corTag = "#a0a0b0"; 
            bgTag = "rgba(255,255,255,0.05)"; 
        }
        
        // Verde Neon para Prática e Projetos
        if(item.tag === "100% Prático" || item.tag === "Projeto Real" || item.tag === "Vision-to-Code" || item.tag === "UI/UX") { 
            corTag = "var(--neon-green)"; 
            bgTag = "rgba(0, 255, 157, 0.1)"; 
        }
        
        // Laranja Neon para Intensivo e Business
        if(item.tag === "Intensivo" || item.tag === "Business" || item.tag === "Técnico" || item.tag === "Publicação") { 
            corTag = "var(--neon-orange)"; 
            bgTag = "rgba(255, 159, 67, 0.1)"; 
        }

        // Renderiza o Item
        lista.innerHTML += `
            <li style="margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 15px;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                    <strong style="color: #fff; font-size: 1rem;">${item.title}</strong>
                    <span style="background: ${bgTag}; color: ${corTag}; padding: 3px 10px; border-radius: 4px; font-size: 0.7rem; border: 1px solid ${corTag}; font-weight: 700; text-transform: uppercase; letter-spacing: 0.5px;">${item.tag}</span>
                </div>
                <p style="color: #a0a0b0; font-size: 0.85rem; margin: 0; line-height: 1.5;">${item.desc}</p>
            </li>
        `;
    });

    document.getElementById("MmodalSkills").innerHTML = data.skills;
    
    // EXIBIR
    modalM.style.display = "block";
}
        // --- LÓGICA DO MODAL (SÓ OS EVENTOS) ---
        const modalM = document.getElementById("Mmodal");
        
        // Botões de abrir
        document.querySelectorAll(".MopenModal").forEach(btn => {
            btn.addEventListener("click", () => {
                abrirModalM(btn.dataset.train);
            });
        });

        // Botão de fechar
        document.querySelector(".Mclose").onclick = () => { modalM.style.display = "none"; };
        window.addEventListener("click", e => {
            if (e.target === modalM) modalM.style.display = "none";
        });

        // --- LÓGICA DEPOIMENTOS (MANTÉM AQUI) ---
        const comments = [
            { user: "@futuredev", text: "A UNIT destravou minha carreira. Criei meu primeiro SaaS em 2 semanas." },
            { user: "@neonmind", text: "O módulo de IA Criativa com Google Flow mudou minha agência." },
            { user: "@traderbot", text: "Os robôs traders pagaram o curso na primeira semana. Incrível." },
            { user: "@webmaster", text: "Nunca vi um curso ensinar a criar uma Rede Social do zero assim." }
        ];
        let cIndex = 0;
        function updateComment() {
            const el = document.getElementById("comment-display");
            el.querySelector(".user-name").textContent = comments[cIndex].user;
            el.querySelector(".user-text").textContent = `"${comments[cIndex].text}"`;
            cIndex = (cIndex + 1) % comments.length;
        }
        updateComment();
        setInterval(updateComment, 5000);