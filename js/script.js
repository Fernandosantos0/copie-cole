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