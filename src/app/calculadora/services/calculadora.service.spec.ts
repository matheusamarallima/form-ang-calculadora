import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('deve garantir que 1 + 4 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
    let soma = service.calcular(1, 4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }))
  it('deve garantir que 1 - 4 = -3',
  inject([CalculadoraService], (service: CalculadoraService)=>{
    let subtra = service.calcular(1, 4, CalculadoraService.SUBS)
    expect(subtra).toEqual(-3);
  }))
  it('deve garantir que 1 * 5 = 5', 
  inject([CalculadoraService], (service: CalculadoraService)=> {
    let mult = service.calcular(1, 5, CalculadoraService.MULTI)
    expect(mult).toEqual(5);
  }))
  it('deve garantir que 4 / 2 = 2', 
  inject([CalculadoraService], (service: CalculadoraService)=> {
    let div = service.calcular(4, 2, CalculadoraService.DIVISAO)
    expect(div).toEqual(2);
  }))
});
