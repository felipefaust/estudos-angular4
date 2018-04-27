import Carro from "./Carro"
import Moto from "./Moto"
import Concessionaria from "./Concessionaria";

let carro = new Carro('Golzeira',3)

carro.acelerar()
carro.acelerar()

let moto = new Moto()
let concessionaria = new Concessionaria('',[])
moto.acelerar()
moto.acelerar()

console.log(concessionaria.fornecerHorariosDeFuncionamento())
console.log(moto)
console.log(carro)