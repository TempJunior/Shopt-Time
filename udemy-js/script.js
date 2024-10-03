const listaEletronico = [];
const listaRoupas = [];
const listaEntret = [];

document.querySelector('#verifica')
    .addEventListener('click', function(){
        let select = document.querySelector('#opcoes')
        let opcaoSelecionada = select.options[select.selectedIndex].value;

        let produto = pegaNomeProduto();
        let precoOriginal = pegaValorProduto();

        let produtos = new ArmazenaProduto(produto, precoOriginal);

        switch (opcaoSelecionada) {
            case "eletronico":
                alert("Você selecionou Eletronico");
                let valorFinalEletronico = calculaDesconto(precoOriginal, 0.15);
                listaEletronico.push(produtos);
                listaEletronico.forEach(p =>{ 
                document.querySelector('#output').innerHTML = `${p.produto}
${p.preco}`
                })
                break;
            case "roupas":
                alert("Você selecionou Roupas");
                break;
            case "entretenimento":
                alert("Você selecionou entretenimento");
                break;
            default:
                alert("Opção não reconhecida");
        }
    });

function pegaNomeProduto(){
    return document.querySelector('#produto').value;
}

function pegaValorProduto(){
    return parseFloat(document.querySelector('#preco').value);
}

function calculaDesconto(preco, desconto){
    return preco - (preco * desconto);
}

class ArmazenaProduto{
    constructor(produto, preco){
        this.produto = produto;
        this.preco = preco;
    }
}