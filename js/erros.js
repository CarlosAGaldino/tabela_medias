//criando mensagem de erro
function exibirMensagemDeErro(erros){
    var ul = document.querySelector('#error');
    ul.innerHTML= "";

    erros.forEach(function(erro){
        var li = document.createElement('li');
        li.textContent = erro;
        ul.appendChild(li);
        
    })    
    
}

function validandoNotas(nota){
    var erros = [];

    if(nota.primeira < 0 || nota.primeira > 10 || nota.primeira.length == 0){
        erros.push('NOTA 1 não é um valor válido.')
    }
    if(nota.segunda < 0 || nota.segunda > 10 || nota.segunda.length == 0){
       erros.push('NOTA 2 não é um valor válido.')
    }
    if(nota.terceira < 0 || nota.terceira > 10 || nota.terceira.length == 0){
        erros.push('NOTA 3 não é um valor válido.')
    } 
    if(nota.quarta < 0 || nota.quarta > 10 || nota.quarta.length == 0){
        erros.push('NOTA 4 não é um valor válido.')
    }
    return erros;
}