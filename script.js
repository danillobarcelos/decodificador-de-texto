const textArea = document.querySelector('.txt-original');
const textoAlterado = document.querySelector(".txt-alterado");

function criptografar(stringCriptografada) {
    let matrizChaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringCriptografada = stringCriptografada.toLowerCase();

    for (let i in matrizChaves) {
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

function descriptografar(stringDescriptografada) {
    let matrizChaves = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDescriptografada = stringDescriptografada.toLowerCase();

    for (let i in matrizChaves) {
        if (stringDescriptografada.includes(matrizChaves[i][1])) {
            stringDescriptografada = stringDescriptografada.replaceAll(matrizChaves[i][1], matrizChaves[i][0]);
        }
    }
    return stringDescriptografada;
}

function btnDescriptografar() {
    const textoDescriptografado = descriptografar(textArea.value);
    textoAlterado.value = textoDescriptografado;
    textArea.value = '';

    document.querySelector('.txt-alterado').style.backgroundImage = "none";
}

function copiarTexto() {
    textoAlterado.select();
    return document.execCommand("copy");
}

function btnClicar(textoCopiado){
    copiarTexto(textoAlterado.value);
    textoAlterado.value = '';
    document.querySelector('.txt-alterado').style.backgroundImage = "url(imagens/desenho1.png)";
    
}