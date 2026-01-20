# 🎨 Portfólio de Design de Interface

Um portfólio web **altamente interativo**, **acessível** e **emocionalmente envolvente** que apresenta projetos e matérias sobre **Design de Interface (UI/UX)**. Este projeto foi desenvolvido como trabalho final da cadeira de Design de Interfaces, combinando princípios de design moderno, acessibilidade WCAG 2.1 AAA, e design emocional.

## 📚 Sobre o Projeto

Este portfólio educacional aborda tópicos fundamentais de design de interface, incluindo:

- **Introdução ao Design de Interface (UI/UX)** - Fundamentos e equilíbrio entre estética e função
- **Princípios de Composição Visual** - Equilíbrio, Contraste e Alinhamento
- **Tipos de Formatos Digitais** - Diferenças entre Raster, Vetorial e extensões de ficheiro
- **O Poder do Espaço Negativo** - Importância do vazio e hierarquia visual
- **Tendências Visuais Atuais** - Maximalismo, Neomorfismo, Retro-Futurismo e Tipografia
- **Acessibilidade Digital (WCAG 2.1)** - Criação de interfaces inclusivas

## ✨ Características Principais

### 🎯 Design Moderno e Emocional
- Interface com efeito **Glass Morphism** e gradientes harmoniosos
- **Sistema de Design Emocional** com 9 animações interativas
- **Tipografia profissional** usando fonte Inter do Google Fonts
- Sistema de cores otimizado com **contraste 7.2:1 a 16.1:1** (WCAG AAA)
- **Sistema de espaçamento em 6 níveis** (4px a 128px) para consistência visual
- Layout responsivo que se adapta a qualquer dispositivo
- Animações suaves com `cubic-bezier` personalizado

### 🎉 Interações e Microanimações
- **Confetti particles** ao clicar em botões (15 partículas, 5 cores)
- **Ripple effect** ao passar o mouse sobre cards
- **Efeito heartbeat** nos botões ao hover
- **Efeito celebrate** ao clicar (shake + escala)
- **Gentle glow** pulsante em cards
- **Parallax** nas ilustrações (tracking do mouse ±20px)
- **Smart navigation** que esconde/mostra ao fazer scroll
- **Easter egg**: código Konami (↑↑↓↓←→←→) ativa modo arco-íris 🌈
- **Intersection Observer** para reveal progressivo de elementos

### 🎮 Gamificação
- **Contador de interações** com localStorage
- Celebração especial a cada 10 cliques
- Persistência do progresso entre sessões
- Feedback visual com emoji 🎉 e animação zoom

### ♿ Acessibilidade Completa (WCAG 2.1 AAA)
- **Painel flutuante de acessibilidade** (animação 0.3s - 2x mais rápida):
  - 🔤 **Controle de Tamanho de Fonte** (A-, A, A+)
  - 🌈 **Alto Contraste** (preto e branco puro)
  - 🌙 **Modo Escuro** (tema completo com legibilidade otimizada)
  - 🔗 **Destaque de Links** (sublinhado e fundo colorido)
  - 📏 **Espaçamento Aumentado** (line-height 2.5)
  - 🔊 **Leitura de Voz (Text-to-Speech)** com API SpeechSynthesis
- **Contraste de cores AAA**: 7.2:1 (texto normal) e 16.1:1 (títulos)
- Atributos ARIA completos para leitores de tela
- Navegação por teclado 100% funcional
- Dark mode otimizado (logo e títulos com alta legibilidade)

### 🔊 Text-to-Speech (Leitura de Voz)
- **API SpeechSynthesis** do navegador
- Lê automaticamente todo o conteúdo principal da página
- Controles de play/pause/stop
- Preferência **persiste** entre páginas (localStorage)
- Funciona em todas as 9 páginas do portfólio
- Feedback visual claro do estado (ativo/inativo)

### 🎨 Ilustrações SVG Customizadas
- **9 ilustrações SVG** desenhadas manualmente
- Otimizadas para acessibilidade (aria-hidden="true")
- Responsivas e escaláveis
- Cores consistentes com paleta do design system

### 💾 Persistência de Dados
- Todas as preferências de acessibilidade salvas em **localStorage**
- Configurações recuperadas automaticamente ao recarregar
- Sincronização entre todas as páginas do site
- Estado de TTS persistente

### 📱 Responsividade Total
- Funciona perfeitamente em Desktop, Tablet e Mobile
- Media queries otimizadas para todos os tamanhos de tela
- Menu de navegação adaptativo
- Touch-friendly (alvos de toque ≥44x44px)
- Imagens e SVGs escaláveis

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **HTML5** | Estrutura semântica e acessível com ARIA completo |
| **CSS3** | Grid, Flexbox, Custom Properties, Keyframe Animations |
| **JavaScript (Vanilla)** | Microinterações, gamificação, Text-to-Speech |
| **Google Fonts (Inter)** | Tipografia profissional otimizada para legibilidade |
| **localStorage API** | Persistência de preferências e progresso |
| **SpeechSynthesis API** | Text-to-Speech nativo do navegador |
| **Intersection Observer** | Animações progressivas ao fazer scroll |
| **CSS Custom Properties** | Sistema de design com variáveis reutilizáveis |

## 🎨 Sistema de Design

### Paleta de Cores
```css
/* Cores Principais */
--primary: #6366f1      /* Indigo - Tom principal */
--secondary: #8b5cf6    /* Purple - Tom secundário */
--accent: #ec4899       /* Pink - Destaque */

/* Cores Emocionais */
--joy: #f59e0b          /* Amarelo - Alegria */
--love: #ec4899         /* Rosa - Afeto */
--energy: #ef4444       /* Vermelho - Energia */
--calm: #06b6d4         /* Azul - Calma */

/* Modo Escuro */
--dark-bg: #0f172a      /* Fundo escuro */
--dark-surface: #1e293b /* Superfícies */
--dark-text: #f1f5f9    /* Texto claro */
```

### Sistema de Espaçamento (6 Níveis)
```css
--space-xs: 4px    /* Extra pequeno */
--space-sm: 8px    /* Pequeno */
--space-md: 16px   /* Médio */
--space-lg: 32px   /* Grande */
--space-xl: 64px   /* Extra grande */
--space-2xl: 128px /* 2x Extra grande */
```

### Contraste de Cores (WCAG AAA)
- **Texto Normal**: 7.2:1 (mínimo 4.5:1 requerido)
- **Títulos/Headings**: 16.1:1 (mínimo 3:1 requerido)
- **Links**: 8.5:1 com sublinhado
- **Modo Escuro**: 14.3:1 em fundos escuros

### Animações (18 Total)
**9 Animações Originais:**
- slideInLeft, slideInRight, slideInUp, slideInDown
- fadeIn, fadeInUp, shimmer, gentleFloat, pulse

**9 Animações Emocionais:**
- heartbeat, celebrate, rainbow, gentleGlow
- wave, confetti, breathe, zoomIn, flip

## 📂 Estrutura do Projeto

```
Portifolio-Design-Interface/
├── 📄 index.html                 # Página principal com projetos destacados
├── 📂 public/
│   ├── projeto1.html             # Matéria: Introdução ao Design
│   ├── projeto2.html             # Matéria: Composição Visual
│   ├── projeto3.html             # Matéria: Tipos e Formatos
│   ├── projeto4.html             # Matéria: Espaço Negativo
│   ├── projeto5.html             # Matéria: Tendências Visuais
│   ├── projeto6.html             # Matéria: Acessibilidade Digital
│   ├── sobre.html                # Página sobre a cadeira e jornada
│   └── trabalho.html             # Página com listagem de matérias
├── 📂 css/
│   └── style.css                 # Folha de estilos principal (2500+ linhas)
│                                 # - Sistema de design completo
│                                 # - 18 keyframe animations
│                                 # - Responsividade total
│                                 # - Dark mode otimizado
│                                 # - Acessibilidade AAA
├── 📂 components/
│   └── script.js                 # JavaScript principal (750+ linhas)
│                                 # - Painel de acessibilidade
│                                 # - Text-to-Speech (SpeechSynthesis)
│                                 # - Microinterações emocionais
│                                 # - Confetti particles
│                                 # - Gamificação
│                                 # - Parallax mouse tracking
│                                 # - Easter eggs
│                                 # - Intersection Observer
├── 📂 assets/
│   └── logo_empresa.png          # Logo do portfólio
├── 📂 src/                       # Recursos adicionais (opcional)
└── 📄 README.md                  # Este ficheiro
```

## 🚀 Como Executar

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Nenhuma dependência externa! É um projeto estático puro

### Passos

1. **Clone ou descarregue o repositório:**
   ```bash
   git clone https://github.com/seu-usuario/Portifolio-Design-Interface.git
   cd Portifolio-Design-Interface
   ```

3. **Abra no navegador:**
   - Local: `http://localhost:8000`
   - Ou simplesmente abra o ficheiro `index.html`
