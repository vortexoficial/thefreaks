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