
function contar(){
    var tempInicio = window.document.getElementById('txtinicio')
    var tempFim = window.document.getElementById('txtfim')
    var temppasso = window.document.getElementById('txtpasso')
    var resultado = window.document.getElementById('resultado')
    var inicio = Number(tempInicio.value)
    var fim = Number(tempFim.value)
    var passo = Number(temppasso.value)

    if( tempInicio.value.length == 0 || tempFim.value.length == 0 || temppasso.value.length == 0 || passo == 0 ){
        //window.alert('Faltam dados')
        resultado.innerHTML = 'impossível contar!'
    }else {
        resultado.innerHTML = 'Contagem: '
        if(inicio < fim){
            for(var i = inicio ; i <= fim; i += passo){
                resultado.innerHTML += `${i} \u{1F92D}`// += é concatenação de string  
            }
            resultado.innerHTML += ` \u{1F480}`

        }else{
            for(var i = inicio ; i >= fim; i -= passo){
                resultado.innerHTML += `${i} \u{1F92D}`// esse é codigo unicode de emojis 
            }
            resultado.innerHTML += ` \u{1F480}`
        }
    }
}