let fecha = document.querySelector("#fecha");
let hora = document.querySelector("#hora");

function obtenerFecha() {
  let time = new Date();

  let diasSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "jueves",
    "Viernes",
    "Sabado",
  ];

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  //fecha objetivo
  fecha.innerHTML = `${diasSemana[time.getDay()]} ${time.getDate()} de ${
    meses[time.getMonth()]
  } de ${time.getFullYear()}`;

  //modificar segundos
  let segundos = time.getSeconds();
  let horas = time.getHours();
  let minutos = time.getSeconds();

  if (segundos < 10) {
    //agregar un 0 delante de numero
    segundos = "0" + segundos;
  }

  if (horas < 10) {
    //agregar un 0 delante de numero
    horas = "0" + horas;
  }

  if (minutos < 10) {
    //agregar un 0 delante de numero
    minutos = "0" + minutos;
  }

  //modificar Hora
  hora.innerHTML = `${horas}: ${minutos}:${segundos}`;
}

setInterval(obtenerFecha, 1000);

function cambiarColor(color) {
  console.log("Cambiar el color a rosa");
 

  switch(color){
      case 'rosa':
        fecha.className = 'fecha relojRosa';
        hora.className = 'hora relojRosa';
        break;

        case 'verde':
            fecha.className = 'fecha relojVerde';
            hora.className = 'hora relojVerde';
            break;
            
            case 'celeste':
                fecha.className = 'fecha relojCeleste';
                hora.className = 'hora relojCeleste';
                break;

                default:
                    fecha.className = 'fecha relojVerde';
                    hora.className = 'hora relojVerde';
  }
}
