window.onload = function (){
    let segundos = 0;
    let centesimos = 0;
    let minutos = 0;
    let acrescentaCentesimos = document.getElementById("centesimos");
    let acrescentaSegundos = document.getElementById("segundos");
    let acrescentaMinutos = document.getElementById("minutos");
    let botaoStart = document.getElementById("button-start");
    let botaoStop = document.getElementById("button-stop")
    let botaoReset = document.getElementById("button-reset")
    let interval;

    botaoStart.onclick = function(){
        clearInterval(interval);
        interval = setInterval(startContagem, 10);
    }

    botaoStop.onclick = function(){
        clearInterval(interval);
    }

    botaoReset.onclick = function(){
        clearInterval(interval);
        centesimos = "00";
        segundos = "00";
        minutos = "00";
        acrescentaCentesimos.innerHTML = centesimos;
        acrescentaSegundos.innerHTML = segundos;
        acrescentaMinutos.innerHTML = minutos;

    }

    function startContagem(){
        centesimos++;

        if(centesimos <= 9){
            acrescentaCentesimos.innerHTML = "0" + centesimos;
        }

        if(centesimos > 9){
            acrescentaCentesimos.innerHTML = centesimos;
        }

        if(centesimos > 99){
            console.log("segundos");
            segundos++;
            acrescentaSegundos.innerHTML = "0" + segundos;
            centesimos = 0;
            acrescentaCentesimos.innerHTML = "0" + 0;
        }

        if(segundos > 9){
            acrescentaSegundos.innerHTML = segundos
        }

        if(segundos > 60){
            minutos++;
            acrescentaMinutos.innerHTML = "0" + minutos;
            segundos = 0;
            acrescentaSegundos.innerHTML = "0" + 0;
        }

        if(minutos > 9){
            acrescentaMinutos.innerHTML = minutos
        }
    }
}