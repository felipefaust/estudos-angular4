import {ConcessionariaDao} from './ConcessionariaDao'
import Concessionaria from './Concessionaria'

import {PessoaDao} from './PessoaDao'
import Pessoa from './Pessoa'

import {VeiculoDao} from './VeiculoDao'
import Veiculo from './Veiculo'

import {CarroDao} from './CarroDao'
import Carro from './Carro'

import {MotoDao} from './MotoDao'
import Moto from './Moto'

let daoC: ConcessionariaDao = new ConcessionariaDao()
let concessionaria = new Concessionaria('',[])

let daoP: PessoaDao = new PessoaDao()
let pessoa = new Pessoa('','')

let daoV: VeiculoDao = new VeiculoDao()
let veiculo = new Veiculo()

let daoCar: CarroDao = new CarroDao()
let carro = new Carro('',0)

let daoM: MotoDao = new MotoDao()
let moto = new Moto()

daoC.inserir(concessionaria)
daoP.atualizar(pessoa)
daoCar.remover(1)
daoV.selecionar(2)
daoM.selecionarTodos()


