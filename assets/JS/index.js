var jogador = 1 ;
var acabou = 0 ;
var numero_de_jogada = 0;
function jogada(numero){
    if(acabou == 0 ){
        // var teste = document.getElementById(numero).value
        // alert(teste)
        if(document.getElementById(numero).value == 0){
            if(jogador == 1){
                document.getElementById(numero).classList.add('azul') // fazer verificação se possivel mudar a cor
                document.getElementById(numero).value = 2;
                verificaGanhador(jogador)
                jogador = 2 
            }
            else if(jogador == 2){
                document.getElementById(numero).classList.add('vermelho')//fazer verificação se possivel mudar a cor
                document.getElementById(numero).value = 1;
                verificaGanhador(jogador)
                jogador = 1
            } 
            numero_de_jogada ++           
        }
        else{
            alert('casa ja jogada')
        }
        if((numero_de_jogada == 9)&&(acabou == 0)){
            alert('Deu velha')
        }
    }
    else{
        alert('Jogo ja acabou')
    }   
}
function verificaGanhador(jogador){
    var a = Number(document.getElementById(1).value)
    var b = Number(document.getElementById(2).value)
    var c = Number(document.getElementById(3).value)
    var d = Number(document.getElementById(4).value)
    var e = Number(document.getElementById(5).value)
    var f = Number(document.getElementById(6).value)
    var g = Number(document.getElementById(7).value)
    var h = Number(document.getElementById(8).value)
    var i = Number(document.getElementById(9).value)   
    // alert(a + b + c + d + e + f + g + h + i)
    //verifica linhas
    if((a == b)&&( b == c)){       
        if(a != 0){
            alert('fim de jogo') 
            acabou = 1
        }              
    }
    else if((d == e)&&( e == f)){
        if(d != 0){
            alert('fim de jogo') 
            acabou = 1
        }         
    }
    else if((g == h)&&( h == i)){
        if(g != 0){
            alert('fim de jogo') 
            acabou = 1
        }       
    }
    //verifica colunas
    if((a == d)&&( d == g)){
        if(a != 0){
            alert('fim de jogo') 
            acabou = 1
        }     
    }
    else if((b == e)&&( e == h)){
        if(b != 0){
            alert('fim de jogo') 
            acabou = 1
        }      
    }
    else if((c == f)&&( f == i)){
        if(c != 0){
            alert('fim de jogo') 
            acabou = 1
        }       
    }
    //verifica diagonais
    if((a == e)&&( e == i)){
        if(a != 0){
            alert('fim de jogo') 
            acabou = 1
        }        
    }
    else if((c == e)&&( c == g)){
        if(c != 0){
            alert('fim de jogo') 
            acabou = 1
        }        
    }
    if (acabou == 1) {
    alert('jogador ' + jogador + ' ganhou')
    }
}