// Aguarda o DOM (estrutura HTML) ser totalmente carregado
document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DO MENU MOBILE ---
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    if (mobileNavToggle) {
        mobileNavToggle.addEventListener('click', () => {
            // Adiciona ou remove a classe 'nav-open' do <body>
            // O CSS cuida de todo o resto (mostrar/esconder menu, trocar ícone)
            document.body.classList.toggle('nav-open');
        });
    }
    
    // --- LÓGICA DO POPUP DE PESQUISA (NOVO) ---
    const openSearchBtn = document.getElementById('open-search');
    const closeSearchBtn = document.getElementById('close-search');
    const searchOverlay = document.getElementById('search-overlay');

    if (openSearchBtn && searchOverlay) {
        // Abrir o popup
        openSearchBtn.addEventListener('click', (e) => {
            e.preventDefault(); // Impede o link de pular para o topo
            document.body.classList.add('search-open');
        });
    }

    if (closeSearchBtn) {
        // Fechar pelo botão 'X'
        closeSearchBtn.addEventListener('click', () => {
            document.body.classList.remove('search-open');
        });
    }
    
    if (searchOverlay) {
        // Fechar clicando no fundo (overlay)
        searchOverlay.addEventListener('click', (e) => {
            // Se o clique foi no próprio overlay (fundo) e não no popup
            if (e.target.id === 'search-overlay') {
                document.body.classList.remove('search-open');
            }
        });
    }
    
});

// =======================================
// 1. SCRIPT DO LOADER (Estilo Lipo Plus)
// =======================================
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');

    // Tempo de espera mínimo do loader
    setTimeout(() => {
        if (loader) {
            loader.classList.add('fade-out'); // CSS cuida da animação de saída
        }
        if (content) {
            content.style.opacity = '1'; // Inicia o fade-in do conteúdo
        }
        
        // Esconde o loader da DOM após a animação
        setTimeout(() => {
            if (loader) loader.style.display = 'none';
        }, 500); // Duração da animação de fade-out do loader
    }, 1500); // 1.5 segundos de tempo mínimo do loader
});