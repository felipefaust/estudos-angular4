import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria'

/*----- criar carros -----*/
let carroA = new Carro('Gol',2)
let carroB = new Carro('Fusca',2)
let carroC = new Carro('PALIO',4)

let listaDeCarros: Array<Carro> = [carroA,carroB,carroC]

let concessi = new Concessionaria('tes',listaDeCarros)
//console.log(concessi.mostraListaDeCarros())

let cliente = new Pessoa('Faust', 'Gol')

//console.log(cliente.dizerCarroPreferido())

concessi.mostraListaDeCarros().map((carro: Carro)=> {
    if (carro['modelo']==cliente.dizerCarroPreferido()){
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())