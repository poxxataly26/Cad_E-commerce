# Cad_E-commerce

## Introdução
Este código é responsável por validar e preencher os campos do formulário de cadastro. É possível verificar a presença de dados nos campos obrigatórios, como nome, CPF, email, data de nascimento, estado, cidade, CEP, bairro, rua, número, complemento, senha e confirmação da senha. A uma verificação de senha correta quando o usuário digita nos campos "senha" e "confirmação".

Esse código também consome uma API de consulta de CEP, através dos dados da [ViaCep](https://viacep.com.br/). Uma vez que o usuário preenche o campo "CEP", a função `pesquisarCep` é acionada, realizando uma pesquisa na base de dados do ViaCep para obter informações do endereço do usuário. Se o CEP for válido, ela buscará as informações de endereço e preencherá o formulário com esses dados.

Dessa forma, o código funciona de forma completa e eficiente para validar e preencher os campos do formulário de cadastro, bem como consultar e inserir informações de endereço do usuário.

## Descrição





O código CSS define o estilo visual do formulário de cadastro, incluindo a cor de fundo, tamanho, fonte e estilos dos campos do formulário, botões e rótulos.

No geral, este código pode ser usado para criar um formulário de cadastro básico com um estilo agradável e validação de preenchimento obrigatório e comprimento correto. No entanto, é necessário um arquivo de script JavaScript adicionado para assegurar a devida funcionalidade. 



O formulário contem campos para coleta de:

Email
Nome
Telefone
Data de Nascimento
CPF
Endereço (Completo)
Senha (e confirmação de senha)

