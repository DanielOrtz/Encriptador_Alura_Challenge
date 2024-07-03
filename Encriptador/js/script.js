const textoAgregado = document.getElementById
("textoAgregado")

const botonEncriptador = document.getElementById
("botonEncriptador")
const botonDesencriptador = document.getElementById
("botonDesencriptador")
const botonCopiar = document.getElementById
("botonCopiar")
const mensajeFinal = document.getElementById
("mensajeFinal")
const muneco = document.getElementById
("muneco");
const rightInfo = document.getElementById
("rightInfo");
const right = document.getElementById
("right");

let remplazar = [
    ["e", "enter"],
	["o", "ober"],
	["i", "imes"],
	["a", "ai"],
	["u", "ufat"],
]

const remplace = (nuevoValor) => {
    mensajeFinal.innerHTML = nuevoValor
    
    textoAgregado.value = "";

    muneco.classList.add("oculto");

    rightInfo.style.display ="none";
    botonCopiar.style.display = "block";
    right.classList.add("ajustar");
    mensajeFinal.classList.add("ajustar");
}

const reset = () => {
    mensajeFinal.innerHTML = "";
    muneco.classList.remove("oculto");
    rightInfo.style.display ="block";
    botonCopiar.style.display = "none";
    right.classList.remove("ajustar");
    mensajeFinal.classList.remove("ajustar");
    textoAgregado.focus();

}

botonEncriptador.addEventListener("click", () =>{
    const texto = textoAgregado.value.toLowerCase();
    if(texto != ""){
        function encriptar(newText){
            for(let i = 0; i < remplazar.length; i++ ){
                if (newText.includes(remplazar[i][0])){
                    newText = newText.replaceAll(remplazar[i][0],remplazar[i][1]);
                };
            };
            return newText;
        };
    }else{
        alert("Ingrese texto a Encriptar")
        reset();
    }
    remplace(encriptar(texto))
});

botonDesencriptador.addEventListener("click", () => {
    const texto = textoAgregado.value.toLowerCase();
    if(texto != ""){
        function descencriptar(newText){
            for(let i = 0; i < remplazar.length; i++){
                if(newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1],remplazar[i][0]);
                };
            };
            return newText;
        };
    }else{
        alert("Ingrese texto a Descencriptar")
        reset();
    }
        remplace(descencriptar(texto))
    });

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    //navigator.clipboard.writeText(texto.value);
    texto.select();
    document.execCommand("copy");
    alert("Texto Copiado");
    reset();
})