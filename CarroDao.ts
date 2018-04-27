import { DaoInterface } from './DaoInterface'
import Carro from './Carro'

export class CarroDao implements DaoInterface{

    nomeTabela: string = 'tb_carro'

    inserir(object: Carro): boolean{
        console.log('logica insert')
        return true
    }
    atualizar(object: Carro): boolean{
        console.log('logica update')
        return true
    }
    remover(id: number): Carro{
        console.log('logica delete')
        return new Carro('',0)
    }
    selecionar(id: number): Carro{
        console.log('logica select')
        return new Carro('',0)
    }
    selecionarTodos(): [Carro]{
        console.log('logica selectAll')
        return [new Carro('',0)]
    }
}