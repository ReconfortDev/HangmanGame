import { ComponentFixture, TestBed } from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {StartComponent} from "./start.component";
import {DataService} from "../../services/data.service";
import { Router } from '@angular/router';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {By} from "@angular/platform-browser";

describe('StartComponent', () => {
  let component: StartComponent;
  let fixture: ComponentFixture<StartComponent>;
  let router: Router;
  let mockDataService: jest.Mocked<DataService>


  beforeEach(async () => {
    mockDataService = {
      getCategoryData: jest.fn()
    } as unknown as jest.Mocked<DataService>;

    await TestBed.configureTestingModule({
      declarations: [StartComponent],
      imports:[HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();

    fixture = TestBed.createComponent(StartComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call goToHome when button clicked', () => {
    jest.spyOn(component, 'gotoHome');
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.click();
    expect(component.gotoHome).toHaveBeenCalled();
  });

});
