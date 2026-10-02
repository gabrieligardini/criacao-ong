# 🐾 AUma Gêmea

**Um novo aumigo, uma nova paixão.**

AUma Gêmea é um projeto acadêmico de desenvolvimento Front-End voltado à adoção responsável de animais.

A proposta da plataforma é aproximar animais que precisam de um novo lar de pessoas interessadas em adotar, além de apresentar formas de participação em ações de doação e voluntariado.

## 💜 Sobre o projeto

O projeto foi desenvolvido durante uma experiência prática da faculdade e evoluiu por diferentes etapas de construção.

Ao longo do desenvolvimento foram trabalhados conceitos de HTML semântico, CSS, JavaScript, formulários, validação de dados, Design System, Flexbox, CSS Grid, responsividade, acessibilidade, armazenamento local, modularização e preparação da aplicação para produção.

A aplicação conta com três páginas principais:

- **Início:** apresentação da AUma Gêmea, adoção responsável e animais disponíveis.
- **Projetos:** campanhas, ações, doações, voluntariado e componentes de feedback.
- **Cadastro:** formulário para pessoas interessadas em participar das ações da plataforma.

## ✨ Funcionalidades

- Navegação entre diferentes páginas
- Navegação dinâmica utilizando JavaScript
- Cards de animais gerados dinamicamente
- Registro de interesse em animais
- Menu responsivo para desktop e dispositivos móveis
- Layout baseado em Grid de 12 colunas
- Responsividade para diferentes tamanhos de tela
- Formulário de cadastro com validação
- Validação de CPF, telefone, CEP e campos obrigatórios
- Validação da data de nascimento
- Cálculo de idade utilizando Day.js
- Armazenamento de cadastros no localStorage
- Histórico de cadastros armazenados no navegador
- Estados visuais de interação nos botões e campos
- Badges para categorização
- Alertas informativos e de sucesso
- Toast de notificação
- Modo de alto contraste
- Persistência da preferência de alto contraste
- Recursos de acessibilidade e navegação por teclado

## 🎨 Design System

Para manter a identidade visual consistente, o projeto utiliza variáveis CSS para padronizar cores, tipografia e espaçamentos.

A identidade visual utiliza principalmente tons de roxo e lilás, acompanhados por amarelo como cor de destaque e cores neutras para fundos, textos e bordas.

A tipografia utilizada é **Arial**, com diferentes tamanhos definidos de acordo com a hierarquia das informações.

O projeto também possui uma versão de alto contraste, com fundo preto, textos brancos e elementos de destaque amarelos.

## 📱 Responsividade

O layout foi desenvolvido utilizando **Flexbox** e **CSS Grid**.

A estrutura principal utiliza um Grid de 12 colunas e possui cinco faixas responsivas para adaptação a diferentes tamanhos de tela:

- **Até 480px:** `.grid-conteudo` ocupa as 12 colunas (`1 / 13`), utilizando toda a largura disponível, com redução dos espaçamentos.
- **De 481px a 767px:** `.grid-conteudo` continua ocupando as 12 colunas (`1 / 13`).
- **De 768px a 991px:** `.grid-conteudo` ocupa da coluna 2 até a 12 (`2 / 12`), mantendo margens laterais.
- **De 992px a 1199px:** o conteúdo mantém a distribuição `2 / 12`.
- **A partir de 1200px:** o conteúdo mantém a distribuição `2 / 12`, dentro do limite máximo de 1200px definido para o Grid.

Em telas de até 767px, o menu de desktop é ocultado e substituído por um menu mobile implementado com `<details>` e `<summary>`. Nesse mesmo intervalo, a lista de animais passa de três colunas para uma única coluna, fazendo os cards serem empilhados verticalmente.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- ES6 Modules
- Flexbox
- CSS Grid
- Media Queries
- localStorage
- Day.js
- Node.js e npm
- Vite 8.3.1
- Git
- GitHub

O projeto utiliza JavaScript sem frameworks de interface. O **Day.js** é utilizado como biblioteca externa para manipulação de datas e o **Vite** é utilizado como ferramenta de desenvolvimento e preparação da aplicação para produção.

## 📂 Estrutura do projeto

    AumaGemea/
    │
    ├── css/
    │   └── style.css
    │
    ├── img/
    │   └── animais-adocao.webp
    │
    ├── js/
    │   ├── animais.js
    │   ├── contraste.js
    │   ├── formulario.js
    │   ├── main.js
    │   ├── spa.js
    │   └── storage.js
    │
    ├── .gitignore
    ├── cadastro.html
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── projetos.html
    ├── README.md
    └── vite.config.js

As pastas `node_modules/` e `dist/` são geradas localmente e não são versionadas no repositório.

## 🚀 Instalação e execução

É necessário possuir **Node.js** e **npm** instalados.

Clone o repositório:

    git clone https://github.com/gabrieligardini/criacao-ong.git

Acesse a pasta do projeto:

    cd criacao-ong

Instale as dependências:

    npm install

Inicie o ambiente de desenvolvimento:

    npm run dev

Para gerar a versão de produção:

    npm run build

Para visualizar localmente a build de produção:

    npm run preview

A build otimizada é gerada na pasta `dist/`.

## ⚙️ Build de produção

O projeto utiliza **Vite 8.3.1** para preparar a aplicação para produção.

A configuração possui múltiplas entradas para as páginas `index.html`, `projetos.html` e `cadastro.html`. Durante a build, os módulos JavaScript e os arquivos CSS são processados e otimizados para distribuição.

Nos testes realizados, a build de produção manteve as funcionalidades da aplicação funcionando normalmente.

## ♿ Semântica e acessibilidade

Foram utilizados elementos semânticos como `header`, `nav`, `main`, `section` e `footer`.

Também foram aplicados textos alternativos em imagens, labels associados aos campos dos formulários, hierarquia de títulos, validações nativas do HTML, estados de foco e atributos ARIA.

O modo de alto contraste pode ser ativado pelo usuário e sua preferência é armazenada no `localStorage`, permanecendo ativa durante a navegação e após a atualização da página.

## 🌿 Versionamento

O projeto utiliza Git e GitHub para controle de versão, com fluxo baseado em branches como:

- `main`
- `develop`
- `feature/*`

As alterações são organizadas utilizando Conventional Commits e o versionamento segue os princípios do Semantic Versioning.

A primeira versão estável do projeto foi publicada como **v1.0.0**. Posteriormente, a versão **v1.1.0** incorporou melhorias de acessibilidade, preparação da aplicação para produção com Vite e otimização da imagem principal para WebP.

## 🎓 Aprendizados

O desenvolvimento deste projeto permitiu aplicar diferentes conhecimentos de Front-End em uma aplicação completa.

Além da construção da interface, o projeto proporcionou experiência com modularização do JavaScript, manipulação do DOM, eventos, armazenamento local, bibliotecas externas, acessibilidade, GitFlow, versionamento e preparação de uma aplicação para produção.

Também foi possível praticar depuração e resolução de problemas reais durante a evolução do projeto, contribuindo para uma melhor organização e manutenção do código.

## 👩‍💻 Desenvolvido por

**Gabrieli Gardini Fernandes**

Desenvolvedora Web com foco em Front-End.

GitHub: @gabrieligardini

---

💜 Projeto desenvolvido para fins acadêmicos.