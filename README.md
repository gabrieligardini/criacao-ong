# 🐾 AUma Gêmea

**Um novo aumigo, uma nova paixão.**

AUma Gêmea é um projeto acadêmico desenvolvido com o objetivo de praticar conceitos de desenvolvimento Front-End por meio da criação de uma plataforma voltada à adoção responsável de animais.

A proposta é aproximar animais que precisam de um novo lar de pessoas interessadas em adotar, além de apresentar formas de participação em ações de doação e voluntariado.

## 💜 Sobre o projeto

O projeto foi desenvolvido durante uma experiência prática da faculdade e evoluiu por diferentes etapas de construção.

Ao longo do desenvolvimento foram aplicados conceitos de HTML semântico, CSS, JavaScript, formulários, validação de dados, Design System, Flexbox, CSS Grid, responsividade, manipulação do DOM, eventos, armazenamento local e modularização.

A aplicação conta com três páginas principais:

- **Início:** apresentação da AUma Gêmea e navegação dinâmica para conteúdos da plataforma.
- **Projetos:** campanhas, ações, doações, voluntariado e componentes de feedback.
- **Cadastro:** formulário para pessoas interessadas em participar das ações da plataforma.

## ✨ Funcionalidades

- Navegação entre diferentes páginas
- Navegação dinâmica no formato SPA
- Menu responsivo para desktop e dispositivos móveis
- Menu hambúrguer em telas menores
- Submenu dropdown
- Layout baseado em Grid de 12 colunas
- Responsividade para diferentes tamanhos de tela
- Cards de animais gerados dinamicamente
- Registro de interesse em animais
- Formulário de cadastro
- Validação dos campos do formulário
- Validação para impedir data de nascimento futura
- Cálculo de idade com Day.js
- Persistência de cadastros com localStorage
- Estados visuais de interação nos botões e campos
- Badges, alertas e notificações
- JavaScript organizado em módulos ES6

## 🎨 Design System

Para manter a identidade visual consistente, o projeto utiliza variáveis CSS para padronizar cores, tipografia e espaçamentos.

A identidade visual utiliza principalmente tons de roxo e lilás, acompanhados por uma cor amarela de destaque e cores neutras para fundos, textos e bordas.

A tipografia utilizada é **Arial**, com diferentes tamanhos definidos de acordo com a hierarquia das informações.

## 📱 Responsividade

O layout foi desenvolvido utilizando **Flexbox**, **CSS Grid** e **Media Queries**.

A estrutura principal utiliza um Grid de 12 colunas e possui cinco faixas responsivas para adaptação em:

- celulares pequenos;
- celulares;
- tablets;
- notebooks;
- desktops.

Em dispositivos móveis, a navegação horizontal é substituída por um menu hambúrguer, permitindo melhor aproveitamento do espaço disponível.

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- ES6 Modules
- Flexbox
- CSS Grid
- Media Queries
- Web Storage API (localStorage)
- Day.js
- Git
- GitHub

O projeto utiliza JavaScript puro, sem frameworks Front-End. A biblioteca **Day.js** é carregada por CDN e utilizada para manipulação de datas e cálculo de idade.

## 📂 Estrutura do projeto

```text
aumagemea/
│
├── css/
│   └── style.css
│
├── img/
│   └── animais-adocao.jpg
│
├── js/
│   ├── main.js
│   ├── animais.js
│   ├── formulario.js
│   ├── spa.js
│   └── storage.js
│
├── cadastro.html
├── index.html
├── projetos.html
└── README.md
```

## ⚙️ Pré-requisitos

Para executar o projeto localmente é necessário ter:

- Um navegador moderno, como Chrome, Edge ou Firefox
- Git instalado, caso o projeto seja clonado pelo repositório
- Conexão com a internet para o carregamento da biblioteca Day.js por CDN

Não é necessário instalar Node.js ou dependências com npm, pois o projeto não utiliza gerenciador de pacotes.

## 🚀 Instalação e execução local

Clone o repositório:

```bash
git clone https://github.com/gabrieligardini/criacao-ong.git
```

Acesse a pasta do projeto:

```bash
cd criacao-ong
```

Como a aplicação utiliza ES6 Modules, recomenda-se executá-la por meio de um servidor local.

No VS Code, uma opção é utilizar a extensão **Live Server** e abrir o arquivo `index.html` por meio da opção **Open with Live Server**.

Não há etapa de instalação de dependências com `npm install`, pois a biblioteca Day.js é carregada diretamente por CDN.

## 🧪 Build e testes

O projeto utiliza HTML, CSS e JavaScript sem ferramenta de build. Por isso, não é necessário executar um comando de compilação para gerar a aplicação.

Os testes são realizados manualmente no navegador e com as ferramentas de desenvolvimento, verificando:

- navegação e renderização da SPA;
- responsividade da interface;
- validação do formulário;
- cálculo de idade;
- armazenamento no localStorage;
- carregamento dos módulos JavaScript;
- funcionamento dos eventos e componentes interativos.

O Console, a aba Network e as ferramentas de armazenamento do DevTools podem ser utilizados para identificar erros durante os testes.

## ♿ Semântica e acessibilidade

Durante o desenvolvimento foram utilizados elementos semânticos como `header`, `nav`, `main`, `section` e `footer`.

Também foram aplicados textos alternativos em imagens, labels associados aos campos dos formulários, hierarquia de títulos, atributos de validação e mensagens de feedback ao usuário.

## 🌿 Versionamento e GitFlow

O projeto utiliza Git e GitHub para controle de versão.

A organização das branches segue uma estrutura baseada em GitFlow:

- `main`: versão estável da aplicação;
- `develop`: integração das funcionalidades em desenvolvimento;
- `feature/*`: desenvolvimento isolado de novas funcionalidades e melhorias.

As alterações desenvolvidas em branches de feature são integradas à `develop` e posteriormente incorporadas à versão estável.

O projeto também passou a utilizar **Conventional Commits** para tornar o histórico mais legível. Exemplos:

```text
fix: impede data de nascimento futura
```

Para as releases, é adotado o **Versionamento Semântico (SemVer)** no formato `MAJOR.MINOR.PATCH`.

Exemplos:

- `1.0.0`: primeira versão estável;
- `1.0.1`: correção compatível com a versão atual;
- `1.1.0`: inclusão de nova funcionalidade compatível;
- `2.0.0`: alteração que introduza incompatibilidades importantes.

Issues, milestones e pull requests também são utilizados para documentar tarefas, organizar entregas e registrar a integração das alterações.

## 🎓 Aprendizados

O desenvolvimento deste projeto permitiu aplicar diferentes conhecimentos de Front-End em uma aplicação integrada.

Além da construção das páginas, o projeto proporcionou prática com organização de código, responsividade, experiência do usuário, manipulação do DOM, persistência de dados, modularização JavaScript, depuração e controle de versão.

A evolução da aplicação também demonstrou a importância de testar cada alteração e manter uma estrutura organizada para facilitar a manutenção do projeto.

## 👩‍💻 Desenvolvido por

**Gabrieli Gardini Fernandes**

Desenvolvedora Web com foco em Front-End.

GitHub: @gabrieligardini

---

💜 Projeto desenvolvido para fins acadêmicos.
