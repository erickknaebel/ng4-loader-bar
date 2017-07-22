import { NgModule, ModuleWithProviders } from "@angular/core";
import { AngularLoadingBarComponent } from './src/ng4-loader-bar.component';
import { AngularLoadingBarService } from './src/ng4-loader-bar.service';

export * from './src/ng4-loader-bar.component';
export * from './src/ng4-loader-bar.service';

@NgModule({
    declarations: [AngularLoadingBarComponent],
    exports: [AngularLoadingBarComponent],
    providers: [AngularLoadingBarService]
})
export class AngularLoadingBarModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AngularLoadingBarModule,
            providers: [AngularLoadingBarService]
        };
    }
}