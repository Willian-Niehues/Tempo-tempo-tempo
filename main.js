
const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
const contadores = document.querySelectorAll(".contador");


for (let i = 0; i < botoes.length; i++) {
  botoes[i].onclick = function () {
    for (let j = 0; j < botoes.length; j++) {
      botoes[j].classList.remove("ativo");
      textos[j].classList.remove("ativo");
    }
    botoes[i].classList.add("ativo");
    textos[i].classList.add("ativo");
  };
}


const tempoObjetivo1 = new Date("2027-12-19T00:00:00");
const tempoObjetivo2 = new Date("2027-02-19T00:00:00");
const tempoObjetivo3 = new Date("2027-05-19T00:00:00");
const tempoObjetivo4 = new Date("2027-08-19T00:00:00");

const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
  const agora = new Date();
  let diffMs = tempoObjetivo - agora;

  if (diffMs <= 0) {
    return [0, 0, 0, 0, 0, 0];
  }

  let totalSegundos = Math.floor(diffMs / 1000);

  const segundos = totalSegundos % 60;
  let totalMinutos = Math.floor(totalSegundos / 60);
  const minutos = totalMinutos % 60;
  let totalHoras = Math.floor(totalMinutos / 60);
  const horas = totalHoras % 24;
  let totalDias = Math.floor(totalHoras / 24);

  const anos = Math.floor(totalDias / 365);
  let diasRestantes = totalDias % 365;

  const meses = Math.floor(diasRestantes / 30);
  const dias = diasRestantes % 30;

  return [anos, meses, dias, horas, minutos, segundos];
}


function atualizaCronometro() {
  for (let i = 0; i < contadores.length; i++) {

    if (!tempos[i]) continue;

    const [anos, meses, dias, horas, minutos, segundos] = calculaTempo(
      tempos[i]
    );

  
    const elAnos = document.getElementById("anos" + i);
    const elMeses = document.getElementById("meses" + i);
    const elDias = document.getElementById("dias" + i);
    const elHoras = document.getElementById("horas" + i);
    const elMinutos = document.getElementById("minutos" + i);
    const elSegundos = document.getElementById("segundos" + i);

    if (elAnos) elAnos.textContent = anos;
    if (elMeses) elMeses.textContent = meses;
    if (elDias) elDias.textContent = dias;
    if (elHoras) elHoras.textContent = horas;
    if (elMinutos) elMinutos.textContent = minutos;
    if (elSegundos) elSegundos.textContent = segundos;
  }
}


function comecaCronometro() {
  atualizaCronometro();
  setInterval(atualizaCronometro, 1000);
}

comecaCronometro();
