var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { AngularLoadingBarComponent } from './src/ng4-loader-bar.component';
import { AngularLoadingBarService } from './src/ng4-loader-bar.service';
export * from './src/ng4-loader-bar.component';
export * from './src/ng4-loader-bar.service';
var AngularLoadingBarModule = AngularLoadingBarModule_1 = (function () {
    function AngularLoadingBarModule() {
    }
    AngularLoadingBarModule.forRoot = function () {
        return {
            ngModule: AngularLoadingBarModule_1,
            providers: [AngularLoadingBarService]
        };
    };
    return AngularLoadingBarModule;
}());
AngularLoadingBarModule = AngularLoadingBarModule_1 = __decorate([
    NgModule({
        declarations: [AngularLoadingBarComponent],
        exports: [AngularLoadingBarComponent],
        providers: [AngularLoadingBarService]
    })
], AngularLoadingBarModule);
export { AngularLoadingBarModule };
var AngularLoadingBarModule_1;
