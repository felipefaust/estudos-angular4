import Carro from './Carro'
import { ConcessionariaInterface } from './ConcessionariaInterface'

export default class Concessionaria implements ConcessionariaInterface{
    private endereco: string
    private listaDeCarros: Array<Carro>

    constructor(endereco: string, listaDeCarro: Array<Carro>){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarro
    }
    public fornecerEndereco(): string {
        return this.endereco
    }
    public mostraListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }
    public fornecerHorariosDeFuncionamento() :string {
        return 'Abre cedo fecha tarde'
    }
}