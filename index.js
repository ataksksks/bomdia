const saudacao = document.querySelector('#saudacao')
const data = document.querySelector('#data')
const imagem = document.createElement('img')
const container = document.querySelector('.container')
const evento = document.querySelector('#evento')
let nome = 'Henrique'

let d = new Date()
let hora = d.getHours()

if(hora >= 18){
    saudacao.innerHTML = `<h1>Boa noite, ${nome}!</h1>`
    document.body.classList.add('noite')
}else if(hora >= 12){
    saudacao.innerHTML = `<h1>Boa tarde, ${nome}!</h1>`
    document.body.classList.add('tarde')
}else if(hora >= 6){
    saudacao.innerHTML = `<h1>Bom dia, ${nome}!</h1>`
    document.body.classList.add('manha')
}else if(hora >= 0){
    saudacao.innerHTML = `<h1>Boa madrugada, ${nome}!</h1>`
    document.body.classList.add('madrugada')
}

container.appendChild(saudacao)

let dia = d.getDate()
let mes = d.getMonth()
let ano = d.getFullYear()
let dSemana = d.getDay()



if (dia <= 9){
    dia = '0' + dia
}

if(mes < 9){
    mes = '0' + (mes + 1)
}else if(mes >= 9){
    mes = mes + 1
}

if(dSemana === 0){
    dSemana = 'domingo'
}else if(dSemana === 1){
    dSemana = 'segunda-feira'
}else if(dSemana === 2){
    dSemana = 'terça-feira'
}else if(dSemana === 3){
    dSemana = 'quarta-feira'
}else if(dSemana === 4){
    dSemana = 'quinta-feira'
}else if(dSemana === 5){
    dSemana = 'sexta-feira'
}else if(dSemana === 6){
    dSemana = 'sábado'
}

data.innerHTML = `Hoje é ${dSemana}, ${dia}/${mes}/${ano}`

container.appendChild(data)

if(dia === 18 && mes === '0'+ 6){
    evento.innerHTML = 'Feliz Aniversário!'
    container.appendChild(evento)
}

const botao = document.getElementById('botaoGatinho');

botao.addEventListener('click', (e) => {
    e.preventDefault();

    nome = 'gatinho';
    if(hora >= 18){
        saudacao.innerHTML = `<h1>Boa noite, ${nome}!</h1>`
    }else if(hora >= 12){
        saudacao.innerHTML = `<h1>Boa tarde, ${nome}!</h1>`
    }else if(hora >= 6){
        saudacao.innerHTML = `<h1>Bom dia, ${nome}!</h1>`
    }else if(hora >= 0){
        saudacao.innerHTML = `<h1>Boa madrugada, ${nome}!</h1>`
    }
})
