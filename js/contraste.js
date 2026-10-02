const CHAVE_CONTRASTE = "altoContraste";

export function iniciarContraste() {
    const botao =
        document.querySelector("#alternar-contraste");

    if (!botao) {
        return;
    }

    const contrasteSalvo =
        localStorage.getItem(CHAVE_CONTRASTE);

    if (contrasteSalvo === "ativo") {
        document.body.classList.add("alto-contraste");

        botao.setAttribute(
            "aria-pressed",
            "true"
        );

        botao.textContent =
            "Desativar alto contraste";
    }

    botao.addEventListener("click", () => {
        const ativo =
            document.body.classList.toggle(
                "alto-contraste"
            );

        botao.setAttribute(
            "aria-pressed",
            String(ativo)
        );

        if (ativo) {
            botao.textContent =
                "Desativar alto contraste";

            localStorage.setItem(
                CHAVE_CONTRASTE,
                "ativo"
            );
        } else {
            botao.textContent =
                "Alto contraste";

            localStorage.setItem(
                CHAVE_CONTRASTE,
                "inativo"
            );
        }
    });
}