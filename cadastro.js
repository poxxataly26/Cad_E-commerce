//###########################
//Código de validação de formulário de Cadastro

function Verificar(){
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('CPF').value;
    let email = document.getElementById('email').value;
    let data = document.getElementById('data').value;
    let estado = document.getElementById('estado').value;
    let cidade = document.getElementById('cidade').value;
    let cep = document.getElementById('cep').value;
    let bairro = document.getElementById('bairro').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let complemento = document.getElementById('complemento').value;
    let senha = document.getElementById('senha').value;
    let senhax = document.getElementById('senhax').value;

    if(!nome || !cpf || !email || !rg || !data || !estado || !cidade || !cep || !bairro || !rua || !numero ||!complemento || !senha || !senhax){
        alert("Campos de preenchimento obrigatório. Favor preencher");
    }else{
        alert("Campos preenchidos com sucesso");
    }
    if((senhax !== '' && senha !== '') && senhax == senha){
    }else{
        alert("Sua senha esta incorreta");
    }
    }

'use strict'; // Modo restrito
//Consumindo API de CEP, do ViaCep
// https://viacep.com.br/

//Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

// Verificar se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //testa número informado com expressão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep); //verificar tamanho do cep digitado e executa função do cep eNumero

//Função para preencher formulário
const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

//Consumo da API da ViaCep
const pesquisarCep = async() => {
    limparFormulario();
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    if(cepValido(cep.value)){
        const dados = await fetch(url); //esperar/aguardar
        const addres = await dados.json();
        // hasOwnProperty reorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio  ojeto  em questão
        if(addres.hasOwnProperty('erro')){
            alert('CEP não encontrado');
        }else{
            preencherFormulario(addres);
        }
    }else{
        alert('CEP incorreto');
    }
}
//Adiciona evento DOM ao input do CEP para executar função pesquisarCep
document.getElementById('cep').addEventListener('focusout', pesquisarCep);
