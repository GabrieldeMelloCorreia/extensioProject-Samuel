
 var player1 = document.getElementById("player1");
 var player2 = document.getElementById("player2");
 var yellow_cards = document.getElementById("yellow_cards");
 

function init()
{
    player1.style.position = "relative";
    player1.style.left = "17vh";
    player1.style.top = "-60vh";

    player2.style.position = "relative";
    player2.style.left = "17vh";
    player2.style.top = "-60vh";
   
    //const posTop = parseInt(player1.style.top);
    
}


window.addEventListener("load", init());

//player1
document.addEventListener("keydown", function(e){

    if(e.key ==="w")
    player1.style.top = parseInt(player1.style.top) + (-17) + "vh";
    console.log(player1.style.left);
})

document.addEventListener("keydown", function(e){

    if(e.key ==="a")
    player1.style.left = parseInt(player1.style.left) + (-17) + "vh";
    console.log(player1.style.left);
})

document.addEventListener("keydown", function(e){

    if(e.key ==="s")
    player1.style.top = parseInt(player1.style.top) + 17 + "vh";
    console.log(player1.style.top);
})

document.addEventListener("keydown", function(e){

    if(e.key ==="d")
    player1.style.left = parseInt(player1.style.left) + 17 + "vh";
    console.log(player1.style.left);
});

//player2
document.addEventListener("keydown", function(e){

    if(e.key ==="i")
    player2.style.top = parseInt(player2.style.top) + (-17) + "vh";
    console.log(player2.style.left);
})

document.addEventListener("keydown", function(e){

    if(e.key ==="j")
    player2.style.left = parseInt(player2.style.left) + (-17) + "vh";
    console.log(player2.style.left);
})

document.addEventListener("keydown", function(e){

    if(e.key ==="k")
    player2.style.top = parseInt(player2.style.top) + 17 + "vh";
    console.log(player2.style.top);
})

document.addEventListener("keydown", function(e){

    if(e.key ==="l")
    player2.style.left = parseInt(player2.style.left) + 17 + "vh";
    console.log(player2.style.left);
})


/*Movimentação do objeto por meio das setas

    var px=0;
    var py=0;

    document.addEventListener("keydown",function(event){
        var obj = document.getElementById("player1");
        var tecla = event.key;

        if(tecla == 37){
            px-= 10;
            obg.style.left=px+"px";
        }else if(tecla == 38){
            py-=10;
            obj.style.top=py+"px";
        }else if(tecla == 39){
            py+=10;
            obj.style.letf=py+"px";
        }else if(tecla == 40){
            py+=10;
            obj.style.top=py+"px";
        }        
       // As teclas direcionais tem os seguintes códigos: 37=Seta para esquerda - 
       // 38=Seta para cima - 39=Seta para direita - 40=Seta para baixo
    });
*/

document.addEventListener("keydown", function(Dado){

    if(Dado.key === "Enter"){
    var random = sortearNumero();
    exibirFaceSorteada(random);
    }
})

document.getElementById("button").addEventListener('click', function()
{
    var random = sortearNumero();
    exibirFaceSorteada(random);

});




function sortearNumero()
{
    var random = Math.floor(Math.random() * 6 + 1);
    return random;
}

function exibirFaceSorteada(random)
{
    random = sortearNumero();   
    switch(random)
    {
        case 1: 
            document.getElementById("dot").src = "../images/face1.png";
            break;
        case 2: 
            document.getElementById("dot").src = "../images/face2.png";
            break;
        case 3: 
            document.getElementById("dot").src = "../images/face3.png";
            break;
        case 4: 
            document.getElementById("dot").src = "../images/face4.png";
            break;
        case 5: 
            document.getElementById("dot").src = "../images/face5.png";
            break;
        case 6: 
            document.getElementById("dot").src = "../images/face6.png";
            break;
        default:
            break;
    }
}

/*function verificaStart()
{
    if(start == 0)
    {
        return true;
    }
}

verificaStart();
if(verificaStart() == true)
{
    inicioPlayer(player1, player2);
}*/







   
  
