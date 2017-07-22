import { Injectable } from '@angular/core';
import { isPresent } from './ng4-loader-bar.utility';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

export enum AngularLoadingBarEventType {
  PROGRESS, HEIGHT, COLOR, VISIBLE, COMPLETE
}

export class AngularLoadingBarEvent {
  constructor(public type: AngularLoadingBarEventType, public value: any) { }
}

@Injectable()
export class AngularLoadingBarService {

  private _progress = 0;
  private _height = '2px';
  private _color = 'blue';
  private _visible = true;
  private _completed = false;
  private _intervalCounterId: any = 0;
  private _eventSource: Subject<AngularLoadingBarEvent> = new Subject<AngularLoadingBarEvent>();

  public interval: number = 500;
  public internalCounterId: any = 0;
  public events: Observable<AngularLoadingBarEvent> = this._eventSource.asObservable();

  constructor() { }

  set progress(value: number) {
    if (isPresent(value)) {
      if (value > 0) {
        this._visible = true;
      }

      this._progress = value;
      this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.PROGRESS, this._progress));
    }
  }

  get progress(): number {
    return this._progress;
  }

  set height(value: string) {
    if (isPresent(value)) {
      this._height = value;
      this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.HEIGHT, this._height));
    }
  }

  get height(): string {
    return this._height;
  }

  set color(value: string) {
    if (isPresent(value)) {
      this._color = value;
      this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.COLOR, this._color));
    }
  }

  get color(): string {
    return this._color;
  }

  set visible(value: boolean) {
    if (isPresent(value)) {
      this._visible = value;
      this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.VISIBLE, this._visible));
    }
  }

  get visible(): boolean {
    return this._visible;
  }

  set completed(value: boolean) {
    if (isPresent(value)) {
      this._completed = value;
      this.emitEvent(new AngularLoadingBarEvent(AngularLoadingBarEventType.VISIBLE, this._completed));
    }
  }

  get completed(): boolean {
    return this._completed;
  }

  private emitEvent(event: AngularLoadingBarEvent) {
    if (this._eventSource) {
      this._eventSource.next(event);
    }
  }

  start(onCompleted: Function = null) {
    this.stop();
    this.visible = true;
    this._intervalCounterId = setInterval(() => {
      var random = this.getRandom(1, 10);
      this.progress = this.progress + Math.floor(Math.abs(random));
      if (this.progress >= 100) {
        this.complete();
      }
    }, this.interval);
  }

  stop() {
    if (this._intervalCounterId) {
      clearInterval(this._intervalCounterId);
      this._intervalCounterId = null;
    }
  }

  reset() {
    this.stop();
    this.progress = 0;
  }

  complete() {
    this.progress = 100;
    this.stop();
    this.completed = true;
    setTimeout(() => {
      this.visible = false;
      setTimeout(() => {
        this.progress = 0;
      }, 250);
    }, 250);
  }

  getRandom(min: number, max: number) {
    return Math.random() * (min - max);
  }

}
