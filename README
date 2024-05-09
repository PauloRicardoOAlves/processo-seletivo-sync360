# Documentação do Projeto

## Página perfil

Este projeto é um desenvolvimento de front-end, back-end e o banco de dados. Projeto executado para o processo seletivo da empresa Sync360.

## Visão Geral

Esse sistema permite um usuário editar seu perfil em um site através de um formulário, guardar esses dados em um baco de dados e visualizá-los.

## Tecnologias Utilizadas

### Front-end
- **HTML**
- **CSS**
- **JavaScript**
- **Bootstrap:** Framework front-end que facilita o desenvolvimento responsivo.

### Back-end
- **Node.js**;
- **Express.js**;
- **PostgreSQL**.

## Estrutura do Projeto

O projeto está dividido em duas partes: front-end e back-end.

#### Front-end/
- **assets/**: Contém as imagens usadas no front-end;
- **index.html**: Página principal da aplicação;
- **styles.css**: Arquivo CSS;
- **app.js/**: Arquivo JavaScript.
  
#### Back-end
- **src/**: Contém os arquivos fonte do back-end;
    - **controllers/**: Contém os controladores da aplicação;
    - **dataBase/**: Aqui estão os arquivos de configuração e conexão do banco de dados;
    - **middlewares/**: Arquivos para a validação dos dados antes de serem enviados aos controladores;
    - **schemas/**: Os modelos dos dados e as mensagens de erro personalizados de acordo com a validação dos dados da requisição;
    - **index.js**: Arquivo principal do servidor;
    - **.env.example**: Chaves necessárias para o correto funcionamento do sistema.<br>
    *Obs.:Para o funcionamento correto o arquivo .env.example deve ser renomeado para .env.*


## Configuração do Ambiente de Desenvolvimento

1. Clone o repositório:
   ```
   git clone git@github.com:PauloRicardoOAlves/processo-seletivo-sync360.git
   ```
2. Entre no diretório do projeto:
   ```
   cd backend
   ```
3. Instale as dependências:
   ```
   npm install
   ```

   O app estará disponível em `http://localhost:3000`.

## Execução do Projeto

1. Inicie o servidor back-end executando o comando `npm run dev`;
2. Inicie o servidor front-end de desenvolvimento usando a extensão live server.

## Funcionalidades

- Envia os dados inseridos no formulário para um banco de dados e altera a seção perfil com os dados atualizados.

### Validação
    
O projeto só guarda os dados no banco de dados após os seguintes passos serem confirmados, sistema mostrará uma mensagem de pop-up informando o usuário em caso de não envio dos dados.

1. Todos os campos precisam ser preenchidos;<br>
*Exemplo de mensagem de erro*: `O campo NOME é obrigatório!`
2. O campo idade precisa ser um número positivo.
*Exemplo de mensagem de erro*: `O campo IDADE deve ser maior que zero!`

O sistema irá retonar a mensagem em foma de pop-up no navegador com uma mensagem de sucesso o formulário for preenchido corretamente, como por exemplo: 
`Usuário cadastrado com sucesso`