# Desafio Técnico GrupoA Educação

**Stack Utilizada:**
* MySQL - database
* Express(.js) - Node.js web framework
* Vue(.js) - a client-side JavaScript framework
* Node(.js) - the premier JavaScript web server


**Funcionalidades:**

**1.** Login e logout;

**2.** Listar numa tabela todos os alunos cadastrados;

**3.** Cadastrar aluno;

**4.** Editar cadastro do aluno ;

**5.** Remover cadastro do aluno;


**Orientações:**

**1.** Clone o repositório
* Use o comando: ```git clone git@github.com:natferlima/challenge-full-stack-web.git ```

**2.** Entre na pasta do repositório e use o seguinte comando: ```npm install ```

**3.** Inicie o MySQL
* Para quem usa WSL2: ```sudo /etc/init.d/mysql start ```

**4.** No arquivo .env.exemple configure suas informações de acesso ao mysql e renomeie o arquivo para .env

**5.** Na pasta backend execute os seguintes comandos em sequência:
* ``` npx sequelize-cli db:create ```
* ``` npx sequelize-cli db:migrate ```
* ``` npx sequelize-cli db:seed:all ```

**4.** Na pasta do backend execute o seguinte comando: ``` npm run dev ```
* Ou na pasta raiz use: ```npm run dev --prefix backend ```

**5.** Na pasta do frontend execute o seguinte comando: ``` npm run serve ```
* Ou na pasta raiz use: ```npm run serve --prefix frontend ```

**6.** **ATENÇÃO:** Para efetuar login na aplicação use:
* ```email: admin@email.com  ```
* ```password: admin  ```

**7.** Para rodar os testes, na pasta backend execute o comando: ``` npm run test ```


