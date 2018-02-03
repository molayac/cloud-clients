import { TestBed, inject } from '@angular/core/testing';

import { EmpresasService } from './empresas.service';

describe('EmpresasServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmpresasService]
    });
  });

  it('should be created', inject([EmpresasService], (service: EmpresasService) => {
    expect(service).toBeTruthy();
  }));
});
