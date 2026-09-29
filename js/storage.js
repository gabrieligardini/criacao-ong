export function obterCadastros() {
    const dadosSalvos =
        localStorage.getItem("cadastros");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return [];
}


export function salvarCadastro(cadastro) {
    const cadastros = obterCadastros();

    cadastros.push(cadastro);

    localStorage.setItem(
        "cadastros",
        JSON.stringify(cadastros)
    );
}


export function atualizarHistorico() {
    const historico =
        document.querySelector("#historico-cadastros");

    if (!historico) {
        return;
    }

    const cadastros = obterCadastros();

    if (cadastros.length > 0) {
        historico.textContent =
            `Cadastros armazenados neste navegador: ${cadastros.length}`;
    } else {
        historico.textContent =
            "Nenhum cadastro armazenado neste navegador.";
    }
}