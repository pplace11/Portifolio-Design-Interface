# 🎨 Portfólio de Design de Interface

Um portfólio web responsivo e acessível que apresenta projetos e matérias sobre **Design de Interface (UI/UX)**. Este projeto foi desenvolvido como trabalho final da cadeira de Design de Interfaces, combinando bons princípios de design com acessibilidade web.

## 📚 Sobre o Projeto

Este portfólio educacional aborda tópicos fundamentais de design de interface, incluindo:

- **Introdução ao Design de Interface (UI/UX)** - Fundamentos e equilíbrio entre estética e função
- **Princípios de Composição Visual** - Equilíbrio, Contraste e Alinhamento
- **Tipos de Formatos Digitais** - Diferenças entre Raster, Vetorial e extensões de ficheiro
- **O Poder do Espaço Negativo** - Importância do vazio e hierarquia visual
- **Tendências Visuais Atuais** - Maximalismo, Neomorfismo, Retro-Futurismo e Tipografia
- **Acessibilidade Digital (WCAG 2.1)** - Criação de interfaces inclusivas

## ✨ Características Principais

### 🎯 Design Moderno
- Interface com efeito **Glass Morphism**
- Gradientes e cores harmoniosas (Indigo e Roxo)
- Layout responsivo que se adapta a qualquer dispositivo
- Animações suaves e transições elegantes

### ♿ Acessibilidade Completa
- Painel flutuante de acessibilidade com 5 opções:
  - 🔤 **Controle de Tamanho de Fonte** (aumentar/diminuir)
  - 🌈 **Alto Contraste** (preto e branco puro)
  - 🌙 **Modo Escuro** (reduz fadiga visual)
  - 🔗 **Destaque de Links** (sublinhado e fundo colorido)
  - 📏 **Espaçamento Aumentado** (melhor legibilidade)
- Suporte a **WCAG 2.1**
- Atributos ARIA para leitores de tela
- Navegação por teclado

### 💾 Persistência de Dados
- Preferências de acessibilidade salvas em **localStorage**
- Configurações recuperadas ao recarregar a página

### 📱 Responsividade
- Funciona perfeitamente em Desktop, Tablet e Mobile
- Media queries otimizadas para todos os tamanhos de tela
- Menu de navegação adaptativo

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **HTML5** | Estrutura semântica e acessível |
| **CSS3** | Styling moderno com Grid, Flexbox e animações |
| **JavaScript (Vanilla)** | Lógica interativa e gerenciamento de acessibilidade |
| **localStorage API** | Persistência de preferências do usuário |
| **Intersection Observer** | Animações ao fazer scroll |

## 📂 Estrutura do Projeto

```
Portifolio-Design-Interface/
├── 📄 index.html                 # Página principal com projects destacados
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
│   └── style.css                 # Folha de estilos principal
├── 📂 components/
│   └── script.js                 # Script JavaScript com acessibilidade
├── 📂 assets/
│   └── logo_empresa.png          # Logo do portfólio
└── README.md                     # Este ficheiro

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

2. **Abra a página principal:**
   - Duplo clique em `index.html` ou
   - Use um servidor local:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Python 2
     python -m SimpleHTTPServer 8000
     ```

3. **Acesse no navegador:**
   - Local: `http://localhost:8000`
   - Ou simplesmente abra o ficheiro `index.html`
