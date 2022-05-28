var disciplinas = document.querySelectorAll('.disciplina');

var adicionaNotasMaterias = document.querySelector('.adc-campo');

var btnFinalizar = document.querySelector("#finalizar");

var materiasSelect = document.querySelector("#materias")

//console.log(materiasSelect.length);

btnFinalizar.addEventListener("click", function(event){
    event.preventDefault();
    removeFormulário();
    
});


function retiraMateriaDoSelect(opcao){
    var selecionado = document.querySelector('#materias').value;

    //tentar fazer um função utilizando o for para tentar automatizar.
    var disciplina = disciplinas

    if(selecionado ==  'Física'){
        disciplina[0].remove();
    }
    if(selecionado ==  'Matemática'){
        disciplina[1].remove();
    }
    if(selecionado ==  'Português'){
        disciplina[2].remove();
    }
    if(selecionado ==  'Química'){
        disciplina[3].remove();
    }
    if(selecionado ==  'Biologia'){
        disciplina[4].remove();
    }
    if(selecionado ==  'História'){
        disciplina[5].remove();
    }
    if(selecionado ==  'Geográfia'){
        disciplina[6].remove();
    }
    if(selecionado ==  'Sociologia'){
        disciplina[7].remove();
    }
    if(selecionado ==  'Filosofia'){
        disciplina[8].remove();
    }
    if(selecionado ==  'Inglês'){
        disciplina[9].remove();
     }
   
}

function removeFormulário(){
    if(materiasSelect.length == 0){
        adicionaNotasMaterias.remove();

    } else{
        alert("ERROR!, por favor coloque todas as suas notas antes de finlizar.")
    }

}