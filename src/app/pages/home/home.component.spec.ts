import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { HomeComponent } from './home.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import {StartComponent} from "../start/start.component";
import {InstructionComponent} from "../instruction/instruction.component";

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterTestingModule.withRoutes([
        {
          path: 'start', component: StartComponent
        },
        {
          path: 'instruction', component: InstructionComponent
        }
      ])]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call start when button is clicked', () => {
    jest.spyOn(component, 'start');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.start).toHaveBeenCalled();
  });

  it('should call gotToInstruction when button is clicked', () => {
    const instructionButton = fixture.debugElement.query(By.css('#instruction-button'));
    jest.spyOn(component, 'gotToInstruction');

    if (instructionButton) {
      instructionButton.nativeElement.click();
      expect(component.gotToInstruction).toHaveBeenCalled();
    } else {
      fail("Instruction button not found");
    }
  })
});
