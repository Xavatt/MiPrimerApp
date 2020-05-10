import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SerchPage } from './serch.page';

describe('SerchPage', () => {
  let component: SerchPage;
  let fixture: ComponentFixture<SerchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SerchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
