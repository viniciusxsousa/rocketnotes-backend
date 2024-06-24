# Rocket Notes (Back-end)

Rocket Notes é um projeto backend que inclui toda a configuração do servidor, API e banco de dados. Este sistema foi desenvolvido para gerenciar notas de forma eficiente e segura. A API permite operações CRUD (criação, leitura, atualização e exclusão) das notas, oferecendo endpoints bem estruturados para integração com a interface frontend. O servidor foi configurado para garantir desempenho e segurança, enquanto o banco de dados foi projetado para armazenar as informações de forma organizada e acessível. Este projeto utiliza tecnologias modernas para proporcionar uma base sólida e escalável. 

### :arrow_forward: Rodando o projeto

1. Para rodar o projeto você precisa ter o node e o npm instalado.
2. Faça o clone desse repositório.
3. Rode o comando `npm install`, para instalar as dependências.
4. Rode o comando `npm run migrate`, para criar o banco de dados.
5. Copie o arquivo `.env.example` e cole na raíz do projeto.
6. No arquivo que foi copiado renomeie deixando apenas com `.env`.
7. Entre no arquivo `.env`, defina o `AUTH_SECRET`, com a qualquer palavra. 
8. Difina uma porta para `SERVER_PORT`, pode ser 8080 como exemplo.
9. Rode o comando `npm run dev`, para rodar o projeto. 

Para rodar o front-end do projeto, acesse e siga o passo a passo do seguinte link: https://github.com/viniciusxsousa/rocketnotes-frontend



### :atom_symbol: Tecnologias 
* [Node](https://nodejs.org/en)
* [Express](https://expressjs.com/pt-br/)
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
* [Knex.js](https://knexjs.org/)
* [Multer](https://www.npmjs.com/package/multer)
* [bcrypt.js](bcrypt.js)
* [SQLite](https://www.sqlite.org/)


### :computer_mouse: Features
* API com cadastro de usuário.
* API com CRUD completo de uma nota (criação, leitura, atualização e exclusão).
* Criptografia das senhas.
* Validação do usuário por token JWT.
* Variáveis de ambiente para configurar o seu ambiente.
