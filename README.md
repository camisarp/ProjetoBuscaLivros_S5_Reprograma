<h1 align="center">  Projeto Guiado I :rocket: </h1> <br>



##  :books: Sistema de gerenciamento de livros ![](https://img.shields.io/badge/-javascript-yellow.svg) 
</br>

>  O Objetivo do **Projeto** é criar um sistema onde é ser possível gerenciar informações sobre os livros que já li e os livros que estão na nossa listinha de desejos, podendo buscar por categoria e ordenar por números de páginas.

</br>

### :pencil: `Passo a passo para a criação do projeto`
</br>

| Passo | Comando/informação       |
| --------- | ----------- |
| Inicie um projeto node | `npm init -y` |
| No package.json, crie o script start   | `"start": "node app.js"` |
| Instale as dependências   | `npm i readline-sync` |
| Crie o .gitignore     | `node_modules` |
|

### :zap: `Tecnologias`
</br>

| Ferramenta | Descrição |
| --- | --- |
| `javascript` | Linguagem de programação |
| `nodejs` | Ambiente de execução do javascript|
| `npm` | Gerenciador de pacotes|
| `readline-sync` | Dependência para receber inputs no terminal|
| 
  
### :triangular_ruler: `Arquitetura` 
</br>

```
 📁 projeto-de-livros
   |- 📁 controllers
   |     |- 📄 buscarLivros.js
   |     |- 📄 listarRecomendados.js
   |     |- 📄 listarLivrosNaoLidos.js
   |     |- 📄 listarLivrosOrdenados.js
   |- 📁 node_modules
   |- 📄 app.js
   |- 📄 database.js
   |- 📄 .gitignore
   |- 📄 package.json  
   |- 📄 package-lock.json
```
</br>

### :warning: `Requisitos` :warning:
</br>

- [ ]  **`MENU`** Deverá ter opções interativas `[1-6]`
- [ ]  **`1 - CATEGORIA: Buscar livro por categoria`** Deverá ser possível buscar livros pela categoria (`buscarLivros`);
- [ ]  **`2 - ORDENAR: Ordenar livros por quantidade de páginas`** Deverá retornar todos os livros ordenados de forma crescente por quantidade de páginas (`listarLivrosOrdenados`);
- [ ]  **`3 - RECOMENDADOS: Buscar livros recomendados`** Deverá listar livros que já foram lidos e que são recomendados (`listarRecomendados`);
- [ ]  **`4 - LISTA DE DESEJO: Buscar livros não lidos`** Deverá listar livros que ainda não foram lidos (`listarLivrosNaoLidos`);
- [ ] **`5 - SAIR`** Deverá aparecer mesagem `'Obrigada pela preferencia! ♥'` quando a opção `'5'` for escolhida;
- [ ] **`Qualquer outro número que não tenha no 'MENU'`** Deverá aparecer a mensagem `Essa opção não é válida!`.

```
- O comportamento esperado deve ser o pedido da entrada e a impressão das tabelas buscadas no console, conforme requisitos acima.
```
</br>

:mage_woman: `COMPORTAMENTO ESPERADO`

</BR>



![image](https://user-images.githubusercontent.com/84551213/165872275-406a7849-bc41-414c-8e33-bbcd16eb8d61.gif)



### :game_die: `Dados`


Criado dados mocados, um array de objetos de livros com a modelagem abaixo.

:open_book: `LIVRO`

```
- nome: string
- categoria: string
- paginas: number
- recomenda: boolean
- leu: boolean
```
----