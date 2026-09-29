import {
    salvarCadastro,
    atualizarHistorico
} from "./storage.js";


function mostrarErro(campo, mensagem) {
    campo.classList.remove("campo-sucesso");
    campo.classList.add("campo-erro");

    let mensagemErro =
        campo.parentElement.querySelector(
            `[data-erro="${campo.name}"]`
        );

    if (!mensagemErro) {
        mensagemErro =
            document.createElement("small");

        mensagemErro.dataset.erro = campo.name;
        mensagemErro.classList.add("mensagem-erro");

        campo.insertAdjacentElement(
            "afterend",
            mensagemErro
        );
    }

    mensagemErro.textContent = mensagem;
}


function mostrarSucesso(campo) {
    campo.classList.remove("campo-erro");
    campo.classList.add("campo-sucesso");

    const mensagemErro =
        campo.parentElement.querySelector(
            `[data-erro="${campo.name}"]`
        );

    if (mensagemErro) {
        mensagemErro.remove();
    }
}


function validarCampo(campo) {
    if (!campo.validity.valid) {

        if (campo.validity.valueMissing) {
            mostrarErro(
                campo,
                "Este campo é obrigatório."
            );

        } else if (campo.validity.typeMismatch) {
            mostrarErro(
                campo,
                "Digite um valor em formato válido."
            );

        } else if (campo.validity.patternMismatch) {
            mostrarErro(
                campo,
                "O formato informado não é válido."
            );
        }

        return false;
    }

    mostrarSucesso(campo);
    return true;
}


export function iniciarFormulario() {
    const formulario =
        document.querySelector("#form-cadastro");

    if (!formulario) {
        return;
    }

    const mensagemFormulario =
        document.querySelector("#mensagem-formulario");


    formulario.addEventListener("input", (evento) => {
        const campo = evento.target;

        if (campo.matches("input, select")) {
            validarCampo(campo);
        }
    });


    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        const campos =
            formulario.querySelectorAll(
                "input, select"
            );

        let formularioValido = true;

        campos.forEach((campo) => {
            if (!validarCampo(campo)) {
                formularioValido = false;
            }
        });

        if (!formularioValido) {
            return;
        }

        const dados =
            new FormData(formulario);

        const cadastro = {
            nome: dados.get("nome"),
            email: dados.get("email"),
            nascimento: dados.get("nascimento"),
            cpf: dados.get("cpf"),
            telefone: dados.get("telefone"),
            endereco: dados.get("endereco"),
            cep: dados.get("cep"),
            cidade: dados.get("cidade"),
            estado: dados.get("estado"),
            interesse: dados.get("interesse")
        };

        salvarCadastro(cadastro);

        mensagemFormulario.textContent =
            "Cadastro enviado e salvo com sucesso!";

        mensagemFormulario.className =
            "mensagem-sucesso";

        formulario.reset();

        campos.forEach((campo) => {
            campo.classList.remove("campo-sucesso");
        });

        atualizarHistorico();
    });


    const campoNascimento =
        document.querySelector("#nascimento");

    const idadeCalculada =
        document.querySelector("#idade-calculada");

    if (
    campoNascimento &&
    idadeCalculada &&
    typeof dayjs !== "undefined"
) {

        campoNascimento.addEventListener(
            "change",
            () => {

                if (campoNascimento.value) {
                    const nascimento =
                        dayjs(campoNascimento.value);

                    const idade =
                        dayjs().diff(
                            nascimento,
                            "year"
                        );

                    idadeCalculada.textContent =
                        `Idade: ${idade} anos`;
                }
            }
        );
    }
}