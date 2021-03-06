/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './tab';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from '@angular/core/src/linker/view_container';
export declare class Wrapper_Tab {
    _eventHandler: Function;
    context: import0.Tab;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    _expr_2: any;
    _expr_3: any;
    _expr_4: any;
    _expr_5: any;
    _expr_6: any;
    _expr_7: any;
    _expr_8: any;
    _expr_9: any;
    _expr_10: any;
    _expr_11: any;
    _expr_12: any;
    subscription0: any;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any, p5: any, p6: any, p7: any, p8: any, p9: any, p10: any, p11: any, p12: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_root(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_rootParams(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_tabUrlPath(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_tabTitle(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_tabIcon(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_tabBadge(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_tabBadgeStyle(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_enabled(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_show(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_swipeBackEnabled(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_tabsHideOnSubPages(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any, emit0: boolean): void;
}
export declare const TabNgFactory: import7.ComponentFactory<import0.Tab>;
export declare class View_Tab0 extends import2.AppView<import0.Tab> {
    _viewQuery_viewport_0: import19.QueryList<any>;
    _el_0: any;
    _vc_0: import20.ViewContainer;
    _el_1: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import7.ComponentRef<any>;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
}
