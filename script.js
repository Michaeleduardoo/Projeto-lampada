const turnON= document.getElementById("turnON")
const turnoff= document.getElementById("turnOf")
const lamp = document.getElementById("lampada")

function lampON(){
    lamp.src="./img/ligada.jpg"
}

function lampOf(){
    lamp.src="./img/desligada.jpg"
}

function lampqueb(){
    lamp.src="./img/quebrada.jpg"
}



turnoff.addEventListener("click", lampOf)
turnON.addEventListener("click", lampON)
lamp.addEventListener("mouseover", lampON)
lamp.addEventListener("mouseleave", lampOf)
lamp.addEventListener("dblclick", lampqueb)
