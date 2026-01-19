// Script do Portfólio de Design de Interfaces

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Adicionar animação ao carregar a página
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Destacar link ativo na navegação
function highlightActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href').split('/').pop();
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.style.color = 'var(--primary)';
            link.style.fontWeight = 'bold';
        }
    });
}

highlightActiveNav();

// Efeito de hover nos cards
document.querySelectorAll('.card, .trabalho-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 8px 40px rgba(0, 0, 0, 0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
    });
});

// Animação ao fazer scroll (fade-in)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Aplicar observador aos cards
document.querySelectorAll('.card, .trabalho-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease-out';
    observer.observe(card);
});

// Menu responsivo (se houver menu mobile)
const navContainer = document.querySelector('nav');
if (navContainer) {
    navContainer.style.transition = 'all 0.3s ease';
}

// Log de bem-vindo no console
console.log('%cBem-vindo ao meu Portfólio! 🎨', 'font-size: 20px; color: #6366f1; font-weight: bold;');
console.log('%cDesign de Interfaces - Portfólio Final', 'font-size: 14px; color: #a855f7;');

// ==================== FUNCIONALIDADES DE ACESSIBILIDADE ====================

// Obter elementos
const accessibilityBtn = document.getElementById('accessibility-btn');
const accessibilityPanel = document.getElementById('accessibility-panel');
const closeAccessibility = document.getElementById('close-accessibility');

// Botões de controle de fonte
const increaseFontBtn = document.getElementById('increase-font');
const decreaseFontBtn = document.getElementById('decrease-font');
const resetFontBtn = document.getElementById('reset-font');

// Checkboxes de acessibilidade
const highContrastCheck = document.getElementById('high-contrast');
const darkModeCheck = document.getElementById('dark-mode');
const highlightLinksCheck = document.getElementById('highlight-links');
const lineHeightCheck = document.getElementById('line-height');

// Botão de reset
const resetAccessibilityBtn = document.getElementById('reset-accessibility');

// Variável para armazenar o tamanho da fonte atual
let currentFontSize = 100; // Percentual base

// Carregar preferências salvas
function loadAccessibilityPreferences() {
    const preferences = JSON.parse(localStorage.getItem('accessibilityPreferences')) || {};
    
    if (preferences.fontSize) {
        currentFontSize = preferences.fontSize;
        document.documentElement.style.fontSize = currentFontSize + '%';
    }
    
    if (preferences.highContrast) {
        document.body.classList.add('high-contrast');
        if (highContrastCheck) highContrastCheck.checked = true;
    }
    
    if (preferences.darkMode) {
        document.body.classList.add('dark-mode');
        if (darkModeCheck) darkModeCheck.checked = true;
    }
    
    if (preferences.highlightLinks) {
        document.body.classList.add('highlight-links');
        if (highlightLinksCheck) highlightLinksCheck.checked = true;
    }
    
    if (preferences.increasedSpacing) {
        document.body.classList.add('increased-spacing');
        if (lineHeightCheck) lineHeightCheck.checked = true;
    }
}

// Salvar preferências
function saveAccessibilityPreferences() {
    const preferences = {
        fontSize: currentFontSize,
        highContrast: document.body.classList.contains('high-contrast'),
        darkMode: document.body.classList.contains('dark-mode'),
        highlightLinks: document.body.classList.contains('highlight-links'),
        increasedSpacing: document.body.classList.contains('increased-spacing')
    };
    
    localStorage.setItem('accessibilityPreferences', JSON.stringify(preferences));
}

// Abrir painel de acessibilidade
if (accessibilityBtn) {
    accessibilityBtn.addEventListener('click', () => {
        accessibilityPanel.classList.add('active');
        accessibilityPanel.setAttribute('aria-hidden', 'false');
        accessibilityBtn.setAttribute('aria-expanded', 'true');
    });
}

// Fechar painel de acessibilidade
if (closeAccessibility) {
    closeAccessibility.addEventListener('click', () => {
        accessibilityPanel.classList.remove('active');
        accessibilityPanel.setAttribute('aria-hidden', 'true');
        accessibilityBtn.setAttribute('aria-expanded', 'false');
    });
}

// Fechar painel ao clicar fora
document.addEventListener('click', (e) => {
    if (accessibilityPanel && accessibilityBtn) {
        if (!accessibilityPanel.contains(e.target) && !accessibilityBtn.contains(e.target)) {
            accessibilityPanel.classList.remove('active');
            accessibilityPanel.setAttribute('aria-hidden', 'true');
            accessibilityBtn.setAttribute('aria-expanded', 'false');
        }
    }
});

// Fechar com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && accessibilityPanel.classList.contains('active')) {
        accessibilityPanel.classList.remove('active');
        accessibilityPanel.setAttribute('aria-hidden', 'true');
        accessibilityBtn.setAttribute('aria-expanded', 'false');
    }
});

// Aumentar fonte
if (increaseFontBtn) {
    increaseFontBtn.addEventListener('click', () => {
        if (currentFontSize < 150) {
            currentFontSize += 10;
            document.documentElement.style.fontSize = currentFontSize + '%';
            saveAccessibilityPreferences();
        }
    });
}

// Diminuir fonte
if (decreaseFontBtn) {
    decreaseFontBtn.addEventListener('click', () => {
        if (currentFontSize > 80) {
            currentFontSize -= 10;
            document.documentElement.style.fontSize = currentFontSize + '%';
            saveAccessibilityPreferences();
        }
    });
}

// Resetar fonte
if (resetFontBtn) {
    resetFontBtn.addEventListener('click', () => {
        currentFontSize = 100;
        document.documentElement.style.fontSize = currentFontSize + '%';
        saveAccessibilityPreferences();
    });
}

// Alto contraste
if (highContrastCheck) {
    highContrastCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('high-contrast');
            // Desativar modo escuro se estiver ativo
            document.body.classList.remove('dark-mode');
            if (darkModeCheck) darkModeCheck.checked = false;
        } else {
            document.body.classList.remove('high-contrast');
        }
        saveAccessibilityPreferences();
    });
}

// Modo escuro
if (darkModeCheck) {
    darkModeCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('dark-mode');
            // Desativar alto contraste se estiver ativo
            document.body.classList.remove('high-contrast');
            if (highContrastCheck) highContrastCheck.checked = false;
        } else {
            document.body.classList.remove('dark-mode');
        }
        saveAccessibilityPreferences();
    });
}

// Destacar links
if (highlightLinksCheck) {
    highlightLinksCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('highlight-links');
        } else {
            document.body.classList.remove('highlight-links');
        }
        saveAccessibilityPreferences();
    });
}

// Aumentar espaçamento
if (lineHeightCheck) {
    lineHeightCheck.addEventListener('change', (e) => {
        if (e.target.checked) {
            document.body.classList.add('increased-spacing');
        } else {
            document.body.classList.remove('increased-spacing');
        }
        saveAccessibilityPreferences();
    });
}

// Resetar todas as configurações de acessibilidade
if (resetAccessibilityBtn) {
    resetAccessibilityBtn.addEventListener('click', () => {
        // Remover todas as classes
        document.body.classList.remove('high-contrast', 'dark-mode', 'highlight-links', 'increased-spacing');
        
        // Resetar tamanho da fonte
        currentFontSize = 100;
        document.documentElement.style.fontSize = currentFontSize + '%';
        
        // Desmarcar checkboxes
        if (highContrastCheck) highContrastCheck.checked = false;
        if (darkModeCheck) darkModeCheck.checked = false;
        if (highlightLinksCheck) highlightLinksCheck.checked = false;
        if (lineHeightCheck) lineHeightCheck.checked = false;
        
        // Limpar localStorage
        localStorage.removeItem('accessibilityPreferences');
        
        // Feedback visual
        alert('Configurações de acessibilidade restauradas para o padrão!');
    });
}

// Carregar preferências ao iniciar
loadAccessibilityPreferences();
