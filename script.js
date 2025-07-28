function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')
}

// DIA DA SEMANA
let day1 = new Date()
let data2 = day1.getDay()

function abertura() {
  var horario = document.getElementById("day-semana")

  switch (data2) {
    case 0:
      horario.innerText = "HOJE: Domingo"
      break
    case 1:
      horario.innerText = "HOJE: Segunda-feira"
      break
    case 2:
      horario.innerText = "HOJE: Terça-feira"
      break
    case 3:
      horario.innerText = "HOJE: Quarta-feira"
      break
    case 4:
      horario.innerText = "HOJE: Quinta-feira"
      break
    case 5:
      horario.innerText = "HOJE: Sexta-feira"
      break
    case 6:
      horario.innerText = "HOJE: Sábado"
      break
    default:
      alert('ERROR NO DIA DA SEMANA') 
  }
}

function statusDay() {
  var status = document.getElementById('status');
  let day = new Date()
  let date = day.getHours()

  if(date >= 9 && date <= 20) {
    status.innerText = 'ABERTO'
    status.style.backgroundColor = 'green'
  } else if (data2 === 6) {
    date >= 8 && date <= 12 ? status.innerTexT = 'ABERTO' : status.innerText = 'FECHADO'
    date >= 8 && date <= 14
      ? (status.style.backgroundColor = "green")
      : (status.style.backgroundColor = "red")
  } else if(data2 === 0) {
    status.innerText = "FECHADO"
    status.style.backgroundColor = "red"
  } else {
    status.innerText = "FECHADO"
    status.style.backgroundColor = "red"
  }
}

function atualizarRelogio() {
  const agora = new Date()

  const horas = agora.getHours().toString().padStart(2, "0")
  const minutos = agora.getMinutes().toString().padStart(2, "0")
  const segundos = agora.getSeconds().toString().padStart(2, "0")

  document.getElementById("horas").innerText = `⏳ ${horas}:${minutos}:${segundos} horas`
}

atualizarRelogio();
setInterval(atualizarRelogio, 1000);

window.onload = abertura(), statusDay(), setTimeout();