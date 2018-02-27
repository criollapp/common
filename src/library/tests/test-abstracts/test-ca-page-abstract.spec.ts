import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {Router} from '@angular/router';

import {CACommonModule} from '../../modules/ca-common.module';
import {XTestPageAbstractComponent} from '../utils/test-ca-page-abstract-component.util';

describe('CAPageAbstract', () => {
  let component: XTestPageAbstractComponent;
  let fixture: ComponentFixture<XTestPageAbstractComponent>;

  const mockRouter = {
    navigate: jasmine.createSpy('navigate')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CACommonModule, RouterTestingModule.withRoutes([])],
      declarations: [XTestPageAbstractComponent],
      providers: [
        { provide: Router, useValue: mockRouter }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XTestPageAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('router was injected', () => {
    expect(component.router instanceof Object).toBeTruthy();
  });

  it('goTo send to url', () => {
    component.goTo('/app');

    expect(mockRouter.navigate).toHaveBeenCalledWith(['/app']);
  });

});
