import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { ContainerComponent } from './container.component';
import { ContentComponent } from '../content/content.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CoreModule } from '../../core/core.module';
import { Change, Reset } from '../../core/store/actions/app.actions';
import { TestScheduler } from 'rxjs/testing';
import { timer } from 'rxjs';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        CoreModule
      ],
      declarations: [
        ContainerComponent,
        ContentComponent
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('start function', () => {
    it('should define subscription', () => {
      component.start();
      expect(component.subscription).toBeDefined();
    });

    it('should call Change action every second', () => {
      const expectedAction = new Change();
      const spy = spyOn(component['store'], 'dispatch');
      const scheduler = new TestScheduler((actual, expected) => {
        expect(spy).toEqual(expected);
      });
      component.start();
      fixture.detectChanges();
      scheduler.schedule(() => {
        expect(spy).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expectedAction);
      }, 999, null);
      scheduler.schedule(() => {
        expect(spy).toHaveBeenCalledTimes(2);
        expect(spy).toHaveBeenCalledWith(expectedAction);
      }, 1000, null);
      scheduler.schedule(() => {
        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenCalledWith(expectedAction);
      }, 2000, null);
      scheduler.schedule(() => {
        expect(spy).toHaveBeenCalledTimes(4);
        expect(spy).toHaveBeenCalledWith(expectedAction);
      }, 3000, null);
      scheduler.schedule(() => {
        expect(spy).toHaveBeenCalledTimes(4);
        expect(spy).toHaveBeenCalledWith(expectedAction);
      }, 3500, null);
      scheduler.schedule(() => {
        expect(spy).toHaveBeenCalledTimes(5);
        expect(spy).toHaveBeenCalledWith(expectedAction);
      }, 4000, null);
      scheduler.flush();
    });
  });

  describe('stop function', () => {
    it('should stop timer', () => {
      component.start();
      component.stop();
      expect(component.subscription.closed).toBe(true);
    });
  });

  describe('reset function', () => {
    it('should call Reset action', () => {
      const expectedAction = new Reset();
      const spy = spyOn(component['store'], 'dispatch');
      component.reset();
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(expectedAction);
    });
  });
});
