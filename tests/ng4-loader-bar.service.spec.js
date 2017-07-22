import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { AngularLoadingBarService } from '../src/ng4-loader-bar.service';
describe('AngularLoadingBarService', function () {
    var service;
    var providers = [AngularLoadingBarService];
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [providers]
        });
    });
    beforeEach(inject([AngularLoadingBarService], function (angularLoadingBarService) {
        service = angularLoadingBarService;
    }));
    it('should be defined', function () {
        expect(service).toBeDefined();
        expect(service instanceof AngularLoadingBarService).toBeTruthy();
    });
    it('starts at zero when first being injected', function () {
        expect(service.progress).toBe(0);
    });
    it('can change the progress to 90 if you call set progress', function () {
        service.progress = 90;
        expect(service.progress).toBe(90);
    });
    it('increaments over time after calling start', fakeAsync(function () {
        expect(service.progress).toBe(0);
        service.start();
        tick(500);
        expect(service.progress).toBeLessThan(10);
        service.stop();
    }));
    it('have 100 returned from progress after completed', function () {
        service.start();
        service.complete();
        expect(service.progress).toBe(100);
    });
    it('resets to zero when calling reset() when progress bar has been started or set', function () {
        service.progress = 30;
        service.reset();
        expect(service.progress).toBe(0);
    });
    it('will return 100 after calling complete', function () {
        service.progress = 30;
        service.complete();
        expect(service.progress).toBe(100);
    });
    it('return progress progress when calling progress without parameters', function () {
        var progress = service.progress;
        expect(service.progress).toBe(progress);
    });
    it('set progress when calling progress with parameters', function () {
        service.progress = 100;
        expect(service.progress).toBe(100);
    });
    it('return current height when calling height without parameters', function () {
        var height = service.height;
        expect(service.height).toBe(height);
    });
    it('set current height when calling height with parameters', function () {
        service.height = '100px';
        expect(service.height).toBe('100px');
    });
    it('return current color when calling color without parameters', function () {
        var color = service.color;
        expect(service.color).toBe(color);
    });
    it('set current color when calling color with parameters', function () {
        service.color = 'red';
        expect(service.color).toBe('red');
    });
    it('return value of visible when calling visible without parameters', function () {
        var visible = service.visible;
        expect(service.visible).toBe(visible);
    });
    it('set visibility when calling visible with parameters', function () {
        service.visible = false;
        expect(service.visible).toBe(false);
    });
    it('return value of compoleted when calling completed without parameters', function () {
        var completed = service.completed;
        expect(service.completed).toBe(completed);
    });
    it('set completed when calling completed with parameters', function () {
        service.completed = false;
        expect(service.completed).toBe(false);
    });
});
