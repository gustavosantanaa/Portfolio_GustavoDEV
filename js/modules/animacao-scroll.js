export default function initAnimationScroll() {
    const sections = document.querySelectorAll("[data-anime='js-scroll']");

    function animaScroll() {
        sections.forEach((section) => {
            // Define a altura da seção como 60% da altura da janela
            const halfSection = window.innerHeight * 0.6;
            // Obtém a posição da seção em relação ao topo da janela
            const sectionTop = section.getBoundingClientRect().top;
            // Verifica se a seção está visível na tela
            const isSectionVisible = sectionTop - halfSection < 0;
            // Se estiver visível, adiciona a classe "animation" para animação
            if(isSectionVisible) {
                section.classList.add('animation')
            }
        })
    }

    window.addEventListener('scroll', animaScroll);
} 