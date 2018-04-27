import { DaoInterface } from './DaoInterface'
import Moto from './Moto'

export class MotoDao implements DaoInterface{

    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean{
        console.log('logica insert')
        return true
    }
    atualizar(object: Moto): boolean{
        console.log('logica update')
        return true
    }
    remover(id: number): Moto{
        console.log('logica delete')
        return new Moto()
    }
    selecionar(id: number): Moto{
        console.log('logica select')
        return new Moto()
    }
    selecionarTodos(): [Moto]{
        console.log('logica selectAll')
        return [new Moto()]
    }
}