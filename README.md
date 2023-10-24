# Cad_E-commerce

## Introdução
Este código é responsável por validar e preencher os campos do formulário de cadastro. É possível verificar a presença de dados nos campos obrigatórios, como nome, CPF, email, data de nascimento, estado, cidade, CEP, bairro, rua, número, complemento, senha e confirmação da senha. A uma verificação de senha correta quando o usuário digita nos campos "senha" e "confirmação".

Esse código também consome uma API de consulta de CEP, através dos dados da [ViaCep](https://viacep.com.br/). Uma vez que o usuário preenche o campo "CEP", a função `pesquisarCep` é acionada, realizando uma pesquisa na base de dados do ViaCep para obter informações do endereço do usuário. Se o CEP for válido, ela buscará as informações de endereço e preencherá o formulário com esses dados.

Dessa forma, o código funciona de forma completa e eficiente para validar e preencher os campos do formulário de cadastro, bem como consultar e inserir informações de endereço do usuário.

## Descrição


### Tecnologias utilizadas

- HTML5: Estrutura do conteúdo da página.
- CSS3: O código CSS define o estilo visual do formulário de cadastro, incluindo a cor de fundo, tamanho, fonte e estilos dos campos do formulário, botões e rótulos.
- JavaScript: É uma linguagem de programação utilizada para desenvolver aplicações para a web e para dispositivos.
- git: é um smóveisistema de controle de versionamento de código. Ele é usado para gerenciar arquivos de texto de um projeto em desenvolvimento e acompanhar suas alterações ao longo do tempo. 
- GitHub: pode criar seu repositório, compartilhar seu trabalho com outros, receber contribuições ou corrigir problemas em projetos de outras pessoas.

- Além disso é usado um API externa (ViaCep) através do JavaScript para buscar informações de endereço a partir do cep informado.

## Autores

[Talyta](https://github.com/poxxataly26/Cad_E-commerce/blob/main/img/foto.jpeg) 

<img src="https://github.com/poxxataly26/Cad_E-commerce/blob/main/img/foto.jpeg" width="100px">
