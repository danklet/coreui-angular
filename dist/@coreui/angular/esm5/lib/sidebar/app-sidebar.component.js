/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject, HostBinding, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { sidebarCssClasses } from '../shared';
var AppSidebarComponent = /** @class */ (function () {
    function AppSidebarComponent(document, renderer) {
        this.document = document;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    AppSidebarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.displayBreakpoint(this.display);
        this.isCompact(this.compact);
        this.isFixed(this.fixed);
        this.isMinimized(this.minimized);
        this.isOffCanvas(this.offCanvas);
    };
    /**
     * @return {?}
     */
    AppSidebarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.renderer.removeClass(this.document.body, 'sidebar-fixed');
    };
    /**
     * @param {?=} compact
     * @return {?}
     */
    AppSidebarComponent.prototype.isCompact = /**
     * @param {?=} compact
     * @return {?}
     */
    function (compact) {
        if (compact === void 0) { compact = this.compact; }
        if (compact) {
            this.renderer.addClass(this.document.body, 'sidebar-compact');
        }
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    AppSidebarComponent.prototype.isFixed = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    };
    /**
     * @param {?=} minimized
     * @return {?}
     */
    AppSidebarComponent.prototype.isMinimized = /**
     * @param {?=} minimized
     * @return {?}
     */
    function (minimized) {
        if (minimized === void 0) { minimized = this.minimized; }
        if (minimized) {
            this.renderer.addClass(this.document.body, 'sidebar-minimized');
        }
    };
    /**
     * @param {?=} offCanvas
     * @return {?}
     */
    AppSidebarComponent.prototype.isOffCanvas = /**
     * @param {?=} offCanvas
     * @return {?}
     */
    function (offCanvas) {
        if (offCanvas === void 0) { offCanvas = this.offCanvas; }
        if (offCanvas) {
            this.renderer.addClass(this.document.body, 'sidebar-off-canvas');
        }
    };
    /**
     * @param {?=} fixed
     * @return {?}
     */
    AppSidebarComponent.prototype.fixedPosition = /**
     * @param {?=} fixed
     * @return {?}
     */
    function (fixed) {
        if (fixed === void 0) { fixed = this.fixed; }
        console.warn('deprecated fixedPosition(), use isFixed() instead');
        if (fixed) {
            this.renderer.addClass(this.document.body, 'sidebar-fixed');
        }
    };
    /**
     * @param {?=} display
     * @return {?}
     */
    AppSidebarComponent.prototype.displayBreakpoint = /**
     * @param {?=} display
     * @return {?}
     */
    function (display) {
        if (display === void 0) { display = this.display; }
        if (display !== false) {
            /** @type {?} */
            var cssClass = display ? "sidebar-" + display + "-show" : sidebarCssClasses[0];
            this.renderer.addClass(this.document.body, cssClass);
        }
    };
    AppSidebarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-sidebar',
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    AppSidebarComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: Renderer2 }
    ]; };
    AppSidebarComponent.propDecorators = {
        compact: [{ type: Input }],
        display: [{ type: Input }],
        fixed: [{ type: Input }],
        minimized: [{ type: Input }],
        offCanvas: [{ type: Input }],
        true: [{ type: HostBinding, args: ['class.sidebar',] }]
    };
    return AppSidebarComponent;
}());
export { AppSidebarComponent };
if (false) {
    /** @type {?} */
    AppSidebarComponent.prototype.compact;
    /** @type {?} */
    AppSidebarComponent.prototype.display;
    /** @type {?} */
    AppSidebarComponent.prototype.fixed;
    /** @type {?} */
    AppSidebarComponent.prototype.minimized;
    /** @type {?} */
    AppSidebarComponent.prototype.offCanvas;
    /** @type {?} */
    AppSidebarComponent.prototype.true;
    /**
     * @type {?}
     * @private
     */
    AppSidebarComponent.prototype.document;
    /**
     * @type {?}
     * @private
     */
    AppSidebarComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXNpZGViYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvcmV1aS9hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL3NpZGViYXIvYXBwLXNpZGViYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUU5QztJQWFFLDZCQUM0QixRQUFhLEVBQy9CLFFBQW1CO1FBREQsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUMvQixhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQzFCLENBQUM7Ozs7SUFFSixzQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DLENBQUM7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUUsQ0FBQztJQUNsRSxDQUFDOzs7OztJQUVELHVDQUFTOzs7O0lBQVQsVUFBVSxPQUErQjtRQUEvQix3QkFBQSxFQUFBLFVBQW1CLElBQUksQ0FBQyxPQUFPO1FBQ3ZDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLENBQUUsQ0FBQztTQUNoRTtJQUNILENBQUM7Ozs7O0lBRUQscUNBQU87Ozs7SUFBUCxVQUFRLEtBQTJCO1FBQTNCLHNCQUFBLEVBQUEsUUFBaUIsSUFBSSxDQUFDLEtBQUs7UUFDakMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLENBQUMsQ0FBQztTQUM3RDtJQUNILENBQUM7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLFNBQW1DO1FBQW5DLDBCQUFBLEVBQUEsWUFBcUIsSUFBSSxDQUFDLFNBQVM7UUFDN0MsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1NBQ2pFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCx5Q0FBVzs7OztJQUFYLFVBQVksU0FBbUM7UUFBbkMsMEJBQUEsRUFBQSxZQUFxQixJQUFJLENBQUMsU0FBUztRQUM3QyxJQUFJLFNBQVMsRUFBRTtZQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG9CQUFvQixDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFhOzs7O0lBQWIsVUFBYyxLQUEyQjtRQUEzQixzQkFBQSxFQUFBLFFBQWlCLElBQUksQ0FBQyxLQUFLO1FBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsbURBQW1ELENBQUMsQ0FBQztRQUNsRSxJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwrQ0FBaUI7Ozs7SUFBakIsVUFBa0IsT0FBMkI7UUFBM0Isd0JBQUEsRUFBQSxVQUFlLElBQUksQ0FBQyxPQUFPO1FBQzNDLElBQUksT0FBTyxLQUFLLEtBQUssRUFBRTs7Z0JBQ2YsUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBVyxPQUFPLFVBQU8sQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBQzNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQzs7Z0JBbEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsYUFBYTtvQkFDdkIsUUFBUSxFQUFFLDJCQUEyQjtpQkFDdEM7Ozs7Z0RBV0ksTUFBTSxTQUFDLFFBQVE7Z0JBbkIrQyxTQUFTOzs7MEJBVXpFLEtBQUs7MEJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7NEJBQ0wsS0FBSzt1QkFFTCxXQUFXLFNBQUMsZUFBZTs7SUF3RDlCLDBCQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0EvRFksbUJBQW1COzs7SUFDOUIsc0NBQTBCOztJQUMxQixzQ0FBc0I7O0lBQ3RCLG9DQUF3Qjs7SUFDeEIsd0NBQTRCOztJQUM1Qix3Q0FBNEI7O0lBRTVCLG1DQUFtQzs7Ozs7SUFHakMsdUNBQXVDOzs7OztJQUN2Qyx1Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QsIEhvc3RCaW5kaW5nLCBPbkluaXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbmltcG9ydCB7IHNpZGViYXJDc3NDbGFzc2VzIH0gZnJvbSAnLi4vc2hhcmVkJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXNpZGViYXInLFxyXG4gIHRlbXBsYXRlOiBgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PmBcclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFNpZGViYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgY29tcGFjdDogYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNwbGF5OiBhbnk7XHJcbiAgQElucHV0KCkgZml4ZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgbWluaW1pemVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIG9mZkNhbnZhczogYm9vbGVhbjtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5zaWRlYmFyJykgdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnksXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaXNwbGF5QnJlYWtwb2ludCh0aGlzLmRpc3BsYXkpO1xyXG4gICAgdGhpcy5pc0NvbXBhY3QodGhpcy5jb21wYWN0KTtcclxuICAgIHRoaXMuaXNGaXhlZCh0aGlzLmZpeGVkKTtcclxuICAgIHRoaXMuaXNNaW5pbWl6ZWQodGhpcy5taW5pbWl6ZWQpO1xyXG4gICAgdGhpcy5pc09mZkNhbnZhcyh0aGlzLm9mZkNhbnZhcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1maXhlZCcgKTtcclxuICB9XHJcblxyXG4gIGlzQ29tcGFjdChjb21wYWN0OiBib29sZWFuID0gdGhpcy5jb21wYWN0KTogdm9pZCB7XHJcbiAgICBpZiAoY29tcGFjdCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItY29tcGFjdCcgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlzRml4ZWQoZml4ZWQ6IGJvb2xlYW4gPSB0aGlzLmZpeGVkKTogdm9pZCB7XHJcbiAgICBpZiAoZml4ZWQpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRvY3VtZW50LmJvZHksICdzaWRlYmFyLWZpeGVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc01pbmltaXplZChtaW5pbWl6ZWQ6IGJvb2xlYW4gPSB0aGlzLm1pbmltaXplZCk6IHZvaWQge1xyXG4gICAgaWYgKG1pbmltaXplZCkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItbWluaW1pemVkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc09mZkNhbnZhcyhvZmZDYW52YXM6IGJvb2xlYW4gPSB0aGlzLm9mZkNhbnZhcyk6IHZvaWQge1xyXG4gICAgaWYgKG9mZkNhbnZhcykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgJ3NpZGViYXItb2ZmLWNhbnZhcycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZml4ZWRQb3NpdGlvbihmaXhlZDogYm9vbGVhbiA9IHRoaXMuZml4ZWQpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUud2FybignZGVwcmVjYXRlZCBmaXhlZFBvc2l0aW9uKCksIHVzZSBpc0ZpeGVkKCkgaW5zdGVhZCcpO1xyXG4gICAgaWYgKGZpeGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5kb2N1bWVudC5ib2R5LCAnc2lkZWJhci1maXhlZCcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZGlzcGxheUJyZWFrcG9pbnQoZGlzcGxheTogYW55ID0gdGhpcy5kaXNwbGF5KTogdm9pZCB7XHJcbiAgICBpZiAoZGlzcGxheSAhPT0gZmFsc2UpIHtcclxuICAgICAgY29uc3QgY3NzQ2xhc3MgPSBkaXNwbGF5ID8gYHNpZGViYXItJHtkaXNwbGF5fS1zaG93YCA6IHNpZGViYXJDc3NDbGFzc2VzWzBdO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZG9jdW1lbnQuYm9keSwgY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=