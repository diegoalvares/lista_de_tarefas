const adc = document.getElementById('adc')
const card = document.getElementById('bg_transparente')
const enviar = document.getElementById('enviar')
const cancelar = document.getElementById('cancelar')

adc.addEventListener('click', function(){
    card.style.display = 'block'
})

enviar.addEventListener('click', function(){
    card.style.display = 'none'
})

cancelar.addEventListener('click', function(){
    card.style.display = 'none'
})