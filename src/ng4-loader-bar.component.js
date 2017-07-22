var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { AngularLoadingBarService, AngularLoadingBarEventType } from './ng4-loader-bar.service';
import { Component, Input } from '@angular/core';
import { isPresent } from "./ng4-loader-bar.utility";
var AngularLoadingBarComponent = (function () {
    function AngularLoadingBarComponent(service) {
        this.service = service;
        this.animate = true;
        this.progress = '0';
        this.color = 'red';
        this.height = '2px';
        this.show = true;
    }
    AngularLoadingBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.events.subscribe(function (event) {
            if (event.type === AngularLoadingBarEventType.PROGRESS && isPresent(event.value)) {
                _this.progress = event.value;
            }
            else if (event.type === AngularLoadingBarEventType.COLOR) {
                _this.color = event.value;
            }
            else if (event.type === AngularLoadingBarEventType.HEIGHT) {
                _this.height = event.value;
            }
            else if (event.type === AngularLoadingBarEventType.VISIBLE) {
                _this.show = event.value;
            }
            else if (event.type === AngularLoadingBarEventType.COMPLETE && isPresent(event.value)) {
                _this.animate = false;
            }
        });
    };
    return AngularLoadingBarComponent;
}());
__decorate([
    Input(),
    __metadata("design:type", String)
], AngularLoadingBarComponent.prototype, "progress", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AngularLoadingBarComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], AngularLoadingBarComponent.prototype, "height", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AngularLoadingBarComponent.prototype, "show", void 0);
AngularLoadingBarComponent = __decorate([
    Component({
        selector: 'ng4-loader-barr',
        template: "\n  <div class=\"ng4-loader-bar\">\n    <div class=\"ng4-loader-bar-progress\"\n    [ngClass]=\"{'animation' : animate}\"\n    [style.width]=\"progress + '%'\"\n    [style.backgroundColor]=\"color\"\n    [style.color]=\"color\"\n    [style.height]=\"height\"\n    [style.opacity]=\"show ? '1' : '0'\"></div>\n  </div>  \n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [AngularLoadingBarService])
], AngularLoadingBarComponent);
export { AngularLoadingBarComponent };
