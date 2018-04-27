"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Veiculo_1 = __importDefault(require("./Veiculo"));
var VeiculoDao = /** @class */ (function () {
    function VeiculoDao() {
        this.nomeTabela = 'tb_veiculo';
    }
    VeiculoDao.prototype.inserir = function (object) {
        console.log('logica insert');
        return true;
    };
    VeiculoDao.prototype.atualizar = function (object) {
        console.log('logica update');
        return true;
    };
    VeiculoDao.prototype.remover = function (id) {
        console.log('logica delete');
        return new Veiculo_1.default();
    };
    VeiculoDao.prototype.selecionar = function (id) {
        console.log('logica select');
        return new Veiculo_1.default();
    };
    VeiculoDao.prototype.selecionarTodos = function () {
        console.log('logica selectAll');
        return [new Veiculo_1.default()];
    };
    return VeiculoDao;
}());
exports.VeiculoDao = VeiculoDao;
