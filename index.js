const input = document.querySelector('.input')
const form = document.querySelector('.form')

const infosFn = async (cep) => {
    try {
        const resposta = await fetch(`https://cep.awesomeapi.com.br/json/${cep}`)
        const data = await resposta.json()
        let ctx = document.createElement('div')
        ctx = `
            <div class="ctx"
                <div>
                    <p>Endereço: ${data.address_type} ${data.address_name}</p>
                    <p>Bairro: ${data.district}</p>
                    <p>Cidade: ${data.city}</p>
                    <p>Estado: ${data.state}</p>
                
                </div>
            </div>
        `
        document.querySelector('.infos').innerHTML = ctx
        console.log(data.name)
    } catch (err) {
    console.log(err)
}}


form.addEventListener('submit', (e) => {
    e.preventDefault()
    infosFn(input.value)
})