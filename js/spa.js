import { criarCardsAnimais } from "./animais.js";

export function iniciarSPA() {
    const conteudoPrincipal =
        document.querySelector("#conteudo-principal");

    if (!conteudoPrincipal) {
        return;
    }

    const paginas = {
        inicio: `
            <section>
                <h2>Encontre seu novo melhor amigo</h2>

                <img
                    class="imagem-adocao"
                    src="img/animais-adocao.jpg"
                    alt="Cachorro e gato esperando por uma família para adoção">

                <p>
                    A AUma Gêmea é uma plataforma criada para aproximar
                    pessoas interessadas em adotar de animais que precisam
                    de um novo lar.
                </p>
            </section>
        `,

        adocao: `
            <section>
                <h2>Adoção responsável</h2>

                <p>
                    Adotar é assumir um compromisso e oferecer
                    cuidado e bem-estar ao animal.
                </p>

                <h3>Animais disponíveis</h3>

                <div class="lista-animais">
                    ${criarCardsAnimais()}
                </div>
            </section>
        `,

        projetos: `
            <section>
                <h2>Projetos e ações</h2>

                <p>
                    Conheça nossas campanhas de adoção,
                    doação e voluntariado.
                </p>
            </section>
        `
    };

    function renderizarPagina(pagina) {
        if (paginas[pagina]) {
            conteudoPrincipal.innerHTML =
                paginas[pagina];
        }
    }

    document
        .querySelectorAll("[data-page]")
        .forEach((link) => {

            link.addEventListener("click", (evento) => {
                evento.preventDefault();

                renderizarPagina(
                    link.dataset.page
                );
            });
        });


    conteudoPrincipal.addEventListener(
        "click",
        (evento) => {

            if (
                evento.target.classList
                    .contains("btn-interesse")
            ) {
                const animal =
                    evento.target.dataset.animal;

                evento.target.textContent =
                    `Interesse registrado em ${animal}`;

                evento.target.disabled = true;
            }
        }
    );
}