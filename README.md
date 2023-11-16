# Projeto - Copie e Cole e JavaScript

<p>Este projeto é uma aplicação simples desenvolvida em JavaScript que permite aos usuários copiar texto para a área de transferência do sistema utilizando a funcionalidade <b>'navigator.clipboard.writeText'</b>.</p>

## Funcionalidades
* **Cópia de Texto:** A aplicação oferece um botão ou uma função que, ao ser acionado pelo usuário, copia um texto específico para a área de transferência. <br>
* **Interface Simples:** Foi criada uma interface intuitiva para facilitar o uso da funcionalidade de cópia.

## Como Funciona
<p>O projeto utiliza a API <b>navigator.clipboard.writeText</b> oferecida pelos navegadores modernos para interagir com a área de transferência do sistema. Essa API permite a escrita de texto na área de transferência de forma programática.</p>

<p>Ao clicar no botão ou executar a função correspondente, o código JavaScript associado invoca a função navigator.clipboard.writeText com o texto desejado a ser copiado. Isso habilita os usuários a colar o conteúdo em qualquer lugar que aceite texto, como um editor de texto, planilha, ou campo de formulário.</p>

### Código HTML
~~~html
<!DOCTYPE html>
<html lang="pt-br">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Projeto | Copie e Cole</title>

        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

        <!-- Ícones -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

        <!-- CSS -->
        <link rel="stylesheet" href="./css/style.css">

        <!-- JavaScript -->
        <script src="./js/script.js" defer></script>
    </head>
    <body>
        
        <div class="card">
            <input type="text" id="input1" disabled readonly value="Olá mundo">
            <button id="btn-copied" class="btn material-symbols-outlined">content_copy</button>
        </div>

        <div class="card">
            <input type="text" id="input2">
            <button id="btn-paste" class="btn material-symbols-outlined">content_paste</button>
        </div>

    </body>
</html>
~~~

<br><br>
### Código CSS

~~~css
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.card {
    width: 250px;
    margin: 15px auto 25px;
    display: flex;
    align-items: center;
    gap: 5px;
}

.card input {
    width: 100%;
    padding: .2em;
}

.btn {
    border-radius: 5px;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    border: none;
    background-color: #cacaca;
    padding: .2em;
}
~~~

<br><br>

### Código JavaScript
~~~javascript
'use strict';

const input1 = document.querySelector('#input1');
const btnCopied = document.querySelector('#btn-copied')

const input2 = document.querySelector('#input2');
const btnPaste = document.querySelector('#btn-paste');

/* Realizando a função de copia na área de trabalho */
btnCopied.addEventListener('click', () => {
    navigator.clipboard.writeText(input1.value);
    console.log('Copied');
});

/* Realizando a função de colar */
btnPaste.addEventListener('click', async () => {
    const paste = await navigator.clipboard.readText();
    input2.value = paste;
    console.log('Paste');
});
~~~
