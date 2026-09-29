const animais = [
    {
        nome: "Luna",
        especie: "Cachorro",
        idade: "2 anos",
        descricao: "Carinhosa, brincalhona e adora companhia."
    },
    {
        nome: "Mingau",
        especie: "Gato",
        idade: "1 ano",
        descricao: "Tranquilo, curioso e muito apegado às pessoas."
    },
    {
        nome: "Thor",
        especie: "Cachorro",
        idade: "4 anos",
        descricao: "Companheiro, dócil e cheio de energia."
    }
];

export function criarCardsAnimais() {
    return animais.map((animal) => `
        <div class="card-animal">
            <span class="badge badge-adocao">
                ${animal.especie}
            </span>

            <h3>${animal.nome}</h3>

            <p>
                <strong>Idade:</strong> ${animal.idade}
            </p>

            <p>${animal.descricao}</p>

            <button
                type="button"
                class="btn-interesse"
                data-animal="${animal.nome}">
                Tenho interesse
            </button>
        </div>
    `).join("");
}