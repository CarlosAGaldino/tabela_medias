var botaoAdicionar = document.querySelector('#adicionar-nota');
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    //var teste = document.querySelectorAll(".notamedia");
    var formulario = document.querySelector('.adiciona-notas');

    var notaMaterias = obterNotasFormulario(formulario); 
    
    var erros = validandoNotas(notaMaterias);
    //console.log(erros)

    if(erros.length > 0){
        exibirMensagemDeErro(erros);
        return;
    }
    adicionaNotasTab(notaMaterias, notaMaterias.media);
    
    //var materias = document.querySelectorAll('.materia');
    retiraMateriaDoSelect(disciplinas);
    console.log(materiasSelect.length);

    formulario.reset();
   

    var mensagemDeErro = document.querySelector('#error');
    mensagemDeErro.innerHTML="";  

});

function adicionaNotasTab(nota,validacao){
    var notaTr = montaTr(nota, validacao);
    var tabela = document.querySelector('#tabela-nota');
    tabela.appendChild(notaTr);
    
}

//criando o objeto
function obterNotasFormulario(formulario){
    var notas ={
        materia: formulario.materias.value,
        primeira: formulario.nota1.value,
        segunda: formulario.nota2.value,
        terceira: formulario.nota3.value,
        quarta: formulario.nota4.value,
        media: calculaMedia(formulario.nota1.value, formulario.nota2.value, formulario.nota3.value, formulario.nota4.value)
    }
    
    return notas;
    
}

function montaTr(nota, validacao){
    //criando a linha da tabela.
    var notaTr = document.createElement('tr');
    notaTr.classList.add('materia');

    //criando a linha de dados(td) da linha(tr) da tabela
    notaTr.appendChild(montaTh(nota.materia, 'nome-materia'));
    notaTr.appendChild(montaTd(nota.primeira, 'notaB1'));
    notaTr.appendChild(montaTd(nota.segunda, 'notaB2'));
    notaTr.appendChild(montaTd(nota.terceira, 'notaB3'));
    notaTr.appendChild(montaTd(nota.quarta, 'notaB4'));

    //colcor cor na nota
    /*Para fazer com que a cor da média final ficasse vermelha ou azul, era necessário adicionar uma das duas classes criadas no css, sendo necessário achar qual dessas variváveis estava recenedo o valor da média(no caso notaMaterias)  tendo que colocar novos parametros nas funções (adiciojnaNaTabela, montaTr e montaTd) para que o valor nota.media pudesse receber duas classes.*/

    if(validacao < 5){
        notaTr.appendChild(montaTd(nota.media, "notamedia","vermelha"));
        notaTr.classList.add('reprovado');
    }else {
        
        notaTr.appendChild(montaTd(nota.media, "notamedia", "azul"));
        notaTr.classList.add('aprovado')
    }
    
    return notaTr;
}

function montaTd(dado, classe, cor){
    //criando a linha de dados da tabela.
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(cor)
    td.classList.add(classe);

    return td;
}

function montaTh(dado,classe){
    var th = document.createElement('th');
    th.textContent = dado;
    th.classList.add(classe)

    return th;
}


