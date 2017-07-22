import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularLoadingBarComponent } from '../src/ng4-loader-bar.component';
import { AngularLoadingBarService } from "../src/ng4-loader-bar.service";

describe('AngularLoadingBarComponent', () => {
  let fixture: ComponentFixture<AngularLoadingBarComponent>;
  let component: AngularLoadingBarComponent;
  let service: AngularLoadingBarService;
  let loadingBar: HTMLDivElement;
  let progressBar: HTMLDivElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AngularLoadingBarService ],
      declarations: [ AngularLoadingBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent<AngularLoadingBarComponent>(AngularLoadingBarComponent);
    let element = fixture.elementRef.nativeElement;
    component = new AngularLoadingBarComponent(service);
    service = new AngularLoadingBarService();
    loadingBar = element.querySelector('.ng4-loader-bar');
    progressBar = element.querySelector('.ng4-loader-bar-progress');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have the loadingBar defined', () => {
    expect(loadingBar).toBeDefined();
  });

  it('should have the progressBar defined', () => {
    expect(progressBar).toBeDefined();
  });

  it('should have a default value for the width of progressBar', () => {
    var width = component.progress + '%';

    expect(progressBar.style.width).toBe(width);
  });

  it('should update the width of the progress bar when calling set progress', () => {
    component.progress = '30';
    fixture.detectChanges();

    expect(progressBar.style.width).toBe('30%');
  });

  it('should have a default color defined for the progressBar', () => {
    var color = component.color;

    expect(progressBar.style.backgroundColor).toBe(color);
    expect(progressBar.style.color).toBe(color);
  });

  it('should update progress bar color when calling set color', () => {
    component.color = 'blue';
    fixture.detectChanges();

    expect(progressBar.style.backgroundColor).toBe('blue');
    expect(progressBar.style.color).toBe('blue');
  });

  it('should have a default height defined', () => {
    var height = component.height;

    expect(progressBar.style.height).toBe(height);
  });

  it('should update progress bar height when calling set height', () => {
    component.height = '10px';
    fixture.detectChanges();

    expect(progressBar.style.height).toBe('10px');
  });

  it('should have a default show property defined', () => {
    var visibility = component.show ? '1' : '0';

    expect(progressBar.style.opacity).toBe(visibility);
  });

  it('should update the opacity to zero when show is false', () => {
    component.show = false;
    fixture.detectChanges();

    expect(progressBar.style.opacity).toBe('0');
  });

  it('should update the opacity to 1 when show is true', () => {
    component.show = true;
    fixture.detectChanges();

    expect(progressBar.style.opacity).toBe('1');
  });

});
