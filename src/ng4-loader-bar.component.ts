import { AngularLoadingBarService, AngularLoadingBarEvent, AngularLoadingBarEventType } from './ng4-loader-bar.service';
import { Component, OnInit, Input } from '@angular/core';
import { isPresent } from "./ng4-loader-bar.utility";

@Component({
  selector: 'ng4-loader-bar',
  template: `
  <div class="ng4-loader-bar">
    <div class="ng4-loader-bar-progress"
    [style.width]="progress + '%'"
    [style.backgroundColor]="color"
    [style.color]="color"
    [style.height]="height"
    [style.opacity]="show ? '1' : '0'"></div>
  </div>  
  `,
  styles: []
})
export class AngularLoadingBarComponent implements OnInit {

  @Input() progress: string = '0';
  @Input() color: string = 'red';
  @Input() height: string = '2px';
  @Input() show: boolean = true;

  constructor(public service: AngularLoadingBarService) { }

  ngOnInit(): any {
    this.service.events.subscribe((event: AngularLoadingBarEvent) => {
      if (event.type === AngularLoadingBarEventType.PROGRESS && isPresent(event.value)) {
        this.progress = event.value;
      } else if (event.type === AngularLoadingBarEventType.COLOR) {
        this.color = event.value;
      } else if (event.type === AngularLoadingBarEventType.HEIGHT) {
        this.height = event.value;
      } else if (event.type === AngularLoadingBarEventType.VISIBLE) {
        this.show = event.value;
      }
    });
  }

}
