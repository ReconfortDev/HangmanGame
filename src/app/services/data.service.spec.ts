import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService],
    });

    service = TestBed.inject(DataService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get category Data', () => {
    let Categories:any = [];

    service.getCategoryData().subscribe((res) => {
      Categories.push(res);
    })

    const request = httpTestingController.expectOne('/data.json');

    expect(request.request.method).toEqual('GET');

    request.flush({
      category: 'Categories'
    })

    expect(Categories).toEqual([{
      category: 'Categories'
    }]);
  })

  it('should get random word from a category', () => {
    const mockedData = {
      categories: {
        Movies: [
          { name: 'The Godfather', selected: false },
          { name: 'Titanic', selected: false },
          { name: 'Inception', selected: false },
        ],
      },
    }

    service.getRandomWord('Movies').subscribe((randomWord) => {
      expect(mockedData.categories.Movies).toContain(randomWord);
    })

    const request = httpTestingController.expectOne('/data.json');

    expect(request.request.method).toEqual('GET');

    request.flush(mockedData)
  })

});
