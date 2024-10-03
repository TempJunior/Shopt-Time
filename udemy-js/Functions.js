function upperCaseTxt (txt){
    console.log(txt);
}

upperCaseTxt('Meu texto.')

let meuTextoValor;

function seiLa(){
    let texto = prompt('Digite um texto');
    texto.toUpperCase();
    meuTextoValor = texto;
}
seiLa();


document.querySelector('#areaTexto').innerHTML = meuTextoValor;