import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {PlayComponent} from './play.component';
import {DataService} from "../../services/data.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {By} from "@angular/platform-browser";


describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;
  let service: DataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayComponent, HttpClientTestingModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();

    service = TestBed.inject(DataService);
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to /start', fakeAsync(() => {
    jest.spyOn(component, "restart")
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('.restart');
    if (button) {
      button.click()
      expect(component.restart).toHaveBeenCalled();
      expect(component.restart).toEqual('/JKNJK');
    }
  }));

  it('should navigate to /home', fakeAsync(() => {
    jest.spyOn(component, "gotoHome")
    const button: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('.gotoHome');
    if (button) {
      button.click()
      expect(component.gotoHome).toHaveBeenCalled();
      expect(component.gotoHome).toHaveBeenCalledWith('/');
    }
  }));

  it('should return correct width percentage', () => {
    component.wrongGuessCount = 3;
    component.maxWrongGuesses = 10;
    const width = component.getWidth();
    expect(width).toBe('70%');
  });

  it('should return 100% when no wrong guesses', () => {
    component.wrongGuessCount = 0;
    component.maxWrongGuesses = 10;
    const width = component.getWidth();
    expect(width).toBe('100%');
  });

  it('should return 0% when max wrong guesses reached', () => {
    component.wrongGuessCount = 10;
    component.maxWrongGuesses = 10;
    const width = component.getWidth();
    expect(width).toBe('0%');
  });




  // it('should toggle menu visibility when toggleMenu() is called', () => {
  //   component.toggleMenu();
  //   expect(component.isMenuOpen).toBe(true);
  //
  //   component.toggleMenu();
  //   expect(component.isMenuOpen).toBe(false);
  // });

  // it('should navigate to /start when restart() is called', () => {
  //   jest.spyOn(router, 'navigate');
  //   component.restart();
  //   expect(router.navigate).toHaveBeenCalledWith(['/start']);
  // });
  //
  // it('should navigate to / when gotoHome() is called', () => {
  //   jest.spyOn(router, 'navigate');
  //   component.gotoHome();
  //   expect(router.navigate).toHaveBeenCalledWith(['/']);
  // });
});
