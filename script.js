const textArea = document.querySelector('.txt-original');
const textoAlterado = document.querySelector(".txt-alterado");

function criptografar(stringCriptografada) {
    let matrizChaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for (i = 0; i < matrizChaves.length; i++) {
        if (stringCriptografada.includes(matrizChaves[i][0])) {
            stringCriptografada = stringCriptografada.replaceAll(matrizChaves[i][0], matrizChaves[i][1])
        }
    }
    return stringCriptografada;
}

function btnCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    textoAlterado.value = textoCriptografado;
    textArea.value = '';

    document.querySelector('.txt-alterado').style.backgroundImage = "none";
}