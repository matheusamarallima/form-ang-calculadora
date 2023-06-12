import { Injectable } from '@angular/core';
// oq faz ele ser um serviço é o injectable, o angular entende que assim poderá prover para outras classes, é a injeção de dep do angular.


@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBS: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTI: string = '*';


  constructor() { }

// : apos a definição do metodo é o tipo de retorno sendo declarado
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;
    //let = variavel local, escopo local, não é visualizado em outras operações
    switch(operacao){
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBS: 
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTI:
        resultado = num1 * num2;
      break;
      default:
        resultado =0;
    }
    return resultado;
  }
}
