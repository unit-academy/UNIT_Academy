/* ==================================================================
   1. MENU MOBILE / MODAL DE NAVEGAÇÃO
   ================================================================== */
const menuBtn = document.getElementById("menuBtn");
const menuModal = document.getElementById("menuModal");

// Verifica se ambos existem antes de tentar adicionar eventos
if (menuBtn && menuModal) {
    let menuAberto = false;
    
    menuBtn.onclick = () => {
      menuAberto = !menuAberto;
      menuModal.style.display = menuAberto ? "flex" : "none";
    };
    
    // Fecha ao clicar fora do conteúdo do menu
    menuModal.onclick = (e) => {
      if (e.target === menuModal) {
        menuModal.style.display = "none";
        menuAberto = false;
      }
    };
}

/* ==================================================================
   2. ANIMAÇÃO DO TÍTULO (HERO SECTION)
   ================================================================== */
const subtitle = document.querySelector('.sub-title');
const title = document.querySelector('.main-title');

if (title && subtitle) {
    title.addEventListener('animationend', () => {
      subtitle.classList.add('show');
    });
}

/* ==================================================================
   3. BOTÃO "GET STARTED" / INICIAR
   ================================================================== */
const startBtn = document.getElementById('startBtn');

if (startBtn) {
    // Redireciona para a página ou âncora de treinamentos
    startBtn.onclick = () => window.location.href = 'treinamentos.html';
}

/* ==================================================================
   4. HEADER SCROLL (Aparece ao rolar a página)
   ================================================================== */
const scrollHeader = document.getElementById("scrollHeader");
const muralSection = document.getElementById("mural-projetos");

if (scrollHeader && muralSection) {
    window.addEventListener("scroll", () => {
      const rect = muralSection.getBoundingClientRect();
      // O header aparece quando o topo do mural chega a 20% da tela
      const show = rect.top <= window.innerHeight * 0.2;
      scrollHeader.classList.toggle("show", show);
    });
}

/* ==================================================================
   5. CONTROLE DE VÍDEOS (Play/Pause automático ao rolar)
   ================================================================== */
const aboutVideos = document.querySelectorAll('.aboutVideo');

if (aboutVideos.length > 0) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.muted = true; // Garante que o vídeo toque sem som (regra dos navegadores)
          if (video.readyState >= 2) {
            video.play();
          } else {
            video.addEventListener('canplay', () => video.play(), { once: true });
          }
        } else {
          video.pause();
        }
      });
    }, { threshold: 0.4 }); // 40% do vídeo visível para dar play
    
    aboutVideos.forEach(video => {
      observer.observe(video);
      // Loop manual para garantir compatibilidade
      video.addEventListener('ended', () => {
        video.currentTime = 0;
        video.play();
      });
    });
}

/* ==================================================================
   6. MODAL DE TREINAMENTOS
   ================================================================== */
const modalM = document.getElementById("Mmodal");
const modalTitleM = document.getElementById("MmodalTitle");
const modalDescM = document.getElementById("MmodalDesc");
const modalListM = document.getElementById("MmodalList");
const modalSkillsM = document.getElementById("MmodalSkills");
const modalContentM = document.querySelector(".Mmodal-content");
const closeBtnM = document.querySelector(".Mclose");

// Só ativa a lógica se o modal realmente existir na página
if (modalM) {
    
    // Configura os botões que abrem o modal
    document.querySelectorAll(".MopenModal").forEach(btn => {
      btn.addEventListener("click", () => {
        const tipo = btn.dataset.train; // Pega o tipo (criativa, automacao, web)
        abrirModalM(tipo);
      });
    });

    // Botão "X" para fechar
    if (closeBtnM) {
        closeBtnM.onclick = () => {
          modalM.style.display = "none";
        };
    }

    // Fechar ao clicar na parte escura (fora da caixa)
    window.addEventListener("click", e => {
      if (modalM.style.display === "block" && modalContentM && !modalContentM.contains(e.target) && !e.target.classList.contains("MopenModal")) {
        modalM.style.display = "none";
      }
    });
}

// Função que preenche os dados do modal
function abrirModalM(tipo) {
  if (!modalM) return; 

  let data = {};
  
  // --- DADOS DOS CURSOS ---
  
  /* 01. IA CRIATIVA */
  if (tipo === "criativa") {
    data = {
      title: "Treinamento: IA Criativa Transforme Ideias em Obras Digitais",
      desc: `Descubra o poder de criar sem limites. Neste treinamento, você aprende a usar inteligência artificial para produzir imagens, vídeos, textos, logos, páginas e projetos completos que impressionam.`,
      list: [
        "Dominar técnicas avançadas de criação de imagens e design digital.",
        "Criar vídeos e conteúdos interativos que capturam atenção.",
        "Produzir materiais profissionais que impressionam e engajam.",
        "Transformar conceitos criativos em projetos concretos.",
        "Construir portfólio digital de destaque."
      ],
      skills: `Criar conteúdos profissionais, avatares realistas, vídeos de alta qualidade e identidades visuais marcantes.`
    };
  }
  
  /* 02. AUTOMAÇÃO */
  else if (tipo === "automacao") {
    data = {
      title: "Treinamento: Automação & Bots",
      desc: `Aprenda a criar bots, automações e integrações que enviam mensagens, organizam processos e operam 24h por dia.`,
      list: [
            "Bots inteligentes para atendimento e respostas automáticas.",
            "Automação completa de tarefas repetitivas.",
            "Sistemas de envio automático de conteúdo 24h.",
            "Integração avançada com APIs e Webhooks.",
            "Robôs de gestão e negociação."
      ],
      skills: `Criar bots profissionais, montar automações inteligentes sem intervenção humana e integrar APIs reais.`
    };
  }
  
  /* 03. WEB + IA */
  else if (tipo === "web") {
    data = {
      title: "Treinamento: Programação com IA para Web",
      desc: `Aprenda a programar sites e sistemas modernos, combinando programação com IA.`,
      list: [
        "Domine HTML, CSS, JavaScript, PHP e Python.",
        "Integração com APIs de IA e bancos de dados.",
        "Criação de sites profissionais e responsivos.",
        "Desenvolvimento de projetos completos do zero."
      ],
      skills: `Programar do zero com IA, dominar linguagens web, integrar APIs e construir plataformas funcionais.`
    };
  }

  // Preenche o HTML do modal com os dados selecionados
  if (modalTitleM) modalTitleM.textContent = data.title;
  if (modalDescM) modalDescM.textContent = data.desc;
  
  if (modalListM) {
      modalListM.innerHTML = "";
      if (data.list) {
          data.list.forEach(item => {
            modalListM.innerHTML += `<li>${item}</li>`;
          });
      }
  }

  if (modalSkillsM) modalSkillsM.textContent = data.skills;

  // Mostra o modal
  modalM.style.display = "block";
}