var listaPT = ["linha","chuva","migraçao","rosto sorridente","grama"]
var indice = Math.floor(Math.random()*listaPT.length)
var desenhoPT=listaPT[indice];
document.getElementById('esboço').innerHTML=desenhoPT

var lista=["line","rain","animal_migration","smiley_face","grass"]
var desenho = lista[indice];

var pontos=0;
var tempo=0

function preload(){
    classifier=ml5.imageClassifier('DoodleNet')
}


function setup(){
    canvas=createCanvas(300,300)
    canvas.position(windowWidth/2-150,windowHeight-320)
    background('white')
    canvas.mouseReleased(classificar)
}
function draw(){
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY)
        
    }
    if(desenhoPlayer==desenho){
        pontos++;
        document.getElementById('pontoss').innerHTML=pontos
        attCanvas()
        tempo=0
    }

    tempo++;
    document.getElementById('temp').innerHTML=tempo
    if(tempo > 400){
        tempo = 0;
        attCanvas()
    }
}

function attCanvas(){
    indice=Math.floor(Math.random()*lista.length)
    desenho=lista[indice]

    desenhoPT = listaPT[indice];
    document.getElementById("esboço").innerHTML = desenhoPT;
    background('white')
    desenhoPlayer="";
}
function classificar(){
    classifier.classify(canvas, gotResults)
}
var desenhoPlayer=''
function gotResults(e,r){
if(e){
    console.log(e)
}else{
    console.log(r)
    desenhoPlayer=r[0].label;
    document.getElementById('sp1').innerHTML=desenhoPlayer
    document.getElementById('sp2').innerHTML=Math.round(r[0].confidence.toFixed(2)*100)+'%';
}

}
function limpar(){
background('white')    
}