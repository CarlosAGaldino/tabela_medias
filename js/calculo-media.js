
function calculaMedia(n1, n2, n3, n4){
  

    var media = 0;
    media = (parseFloat(n1) + parseFloat(n2) +parseFloat(n3)+ parseFloat(n4));
    media = media/4;
    function obtemMedia(forme){
        var materia= {
            mediaFinal: forme.notamedia.value
        }
        return materia;
    }
    
    
    return media;
}


