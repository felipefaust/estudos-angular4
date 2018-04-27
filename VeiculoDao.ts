import { DaoInterface } from './DaoInterface'
import Veiculo from './Veiculo'

export class VeiculoDao implements DaoInterface{

    nomeTabela: string = 'tb_veiculo'

    inserir(object: Veiculo): boolean{
        console.log('logica insert')
        return true
    }
    atualizar(object: Veiculo): boolean{
        console.log('logica update')
        return true
    }
    remover(id: number): Veiculo{
        console.log('logica delete')
        return new Veiculo()
    }
    selecionar(id: number): Veiculo{
        console.log('logica select')
        return new Veiculo()
    }
    selecionarTodos(): [Veiculo]{
        console.log('logica selectAll')
        return [new Veiculo()]
    }
}