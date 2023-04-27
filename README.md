# BugerEatsCypress

Automação de testes do site [Buger Eats](https://buger-eats-qa.vercel.app/)

## Pré-requisitos

Antes de começar, certifique-se de que você tenha as seguintes ferramentas instaladas em sua máquina:

- Node.js
- NPM (gerenciador de pacotes do Node.js)
- Git (sistema de controle de versão)
- VsCode


Crie uma pasta para criar o diretório para o seu projeto e navegue até ele usando o terminal
Quando estiver na pasta vamos clonar o repositório do projeto que utiliza Cypress com o seguinte comando:

```
git clone https://github.com/DiegoBarbosa09/BugerEats_Test.git
```


Estando dentro do diretorio, utilize o comando
```
npm install
```
Para instalar o pacote Node.js nas dependências do projeto no arquivo package.json



Após a instalação, abra o Cypress usando o seguinte comando
```
npx cypress open
```
Inicializará a interface grafica do cypress com os testes que poderá ser executado

Caso queira iniciar o projeto em headless utilize o comando
```
npx cypress run
```
Esse comando executara todo o projeto em headless

## Package da biblioteca npm
Nesse projeto foi utilizado alguns packages da biblioteca "npm"
- mochawesome  (Para gerar reports em html)
```
npm i mochawesome
```

- Gerador validar de CPF (Para criar cpf e utilizar na massa de dados)
```
npm i gerador-validador-cpf
```

- cypress-file-upload (Para fazer upload de arquivo)
```
npm i cypress-file-upload
```

