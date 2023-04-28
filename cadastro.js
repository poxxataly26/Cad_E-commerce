//###########################
//Código de validação de formulário de Cadastro

function Verificar(){
    let nome = document.getElementById('nome').value;
    let cpf = document.getElementById('CPF').value;
    let email = document.getElementById('email').value;
    let rg = document.getElementById('rg').value;
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



//#############################
