# PrimeiroProjetoNodeJS

## Cadastro de Agendas
Irei começar a estruturar o projeto, separar as pastas em suas responsabilidades, irei entender alguns conceitos de como o TypeScript se integra com o projeto, além de já dividir o código com o intuito de separar as responsabilidades para que eu organizar melhor a aplicação.

## Validando a data
Nesta próxima etapa, irei entender melhor como trabalhar com datas, validar os agendamentos, para não permitir que sejam cadastrados com horas quebradas e também não permitir que dois agendamentos sejam feitos na mesma data e horário. Tudo isso será feito utilizando a ```date-fns```, que é uma biblioteca para lidar com datas dentro do JavaScript.

## Model de Agendamento
Será aplicado o conceito de model (ou entidade), com o intuito de isolar mais ainda as responsabilidades de cada parte do código.

Model é o formato de um dado que é armazenado em algum lugar da nossa aplicação, seja um banco de dados ou até mesmo a própria memória.

## Criando repositórios
Nessa aula aplicarei o conceito de repositórios, visando ainda mais a organização e a estrutura dos nossos arquivos.

Um repositório é a conexão entre a persistência (um banco de dados por exemplo) e a aplicação. É pelo repositório onde será buscado as informações no banco (ou onde estiver salva) e devolver para a aplicação.

## Listando agendamento
Trabalharei a implementação da rota de listagem de agendamentos e apesar de não utilizar muita regra de negócio, verei um pouco mais da utilidade do porquê usarmos os repositórios.

## Trabalhando com dados
Irei entender e aplicar um conceito que será utilizado ao longo de todo o bootcamp que é o DTO (Data Transfer Object).

Uma das melhores formas para transferir dados de um arquivo para outro no JavaScript/TypeScript é utilizando objetos, ainda mais se for um conjunto de informações como por exemplo o nome e e-mail de um usuário, pois assim é possível tipar e usar da desestruturação de objetos para nomear os parâmetros de uma função. Esse e outros conceitos serão explicados na aula!

## Services & SOLID
neste momento será aplicar um dos conceitos mais importantes da arquitetura de software que é o service.

Um service é a parte do código que possui toda a regra de negócio necessária para executar uma funcionalidade da aplicação como, por exemplo, criar um usuário, editar um dado, buscar informações no banco, etc. Você entenderá como esse padrão de arquitetura nos ajuda a organizar ainda mais a nossa aplicação e o porque de utilizar.
