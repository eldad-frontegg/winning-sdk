import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBotComponent } from './support-bot.component';

describe('SupportBotComponent', () => {
  let component: SupportBotComponent;
  let fixture: ComponentFixture<SupportBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupportBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
