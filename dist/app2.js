"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/*----- criar carros -----*/
var carroA = new Carro_1.default('Gol', 2);
var carroB = new Carro_1.default('Fusca', 2);
var carroC = new Carro_1.default('PALIO', 4);
var listaDeCarros = [carroA, carroB, carroC];
var concessi = new Concessionaria_1.default('tes', listaDeCarros);
//console.log(concessi.mostraListaDeCarros())
var cliente = new Pessoa_1.default('Faust', 'Gol');
//console.log(cliente.dizerCarroPreferido())
concessi.mostraListaDeCarros().map(function (carro) {
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
