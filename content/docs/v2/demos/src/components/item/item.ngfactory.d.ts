/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
import * as import0 from './item';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/query_list';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
export declare class Wrapper_Item {
    _eventHandler: Function;
    context: import0.Item;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    constructor(p0: any, p1: any, p2: any, p3: any, p4: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_color(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_mode(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_ItemContent {
    _eventHandler: Function;
    context: import0.ItemContent;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_ItemDivider {
    _eventHandler: Function;
    context: import0.ItemDivider;
    _changed: boolean;
    _expr_0: any;
    _expr_1: any;
    constructor(p0: any, p1: any, p2: any, p3: any);
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    check_color(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    check_mode(currValue: any, throwOnChange: boolean, forceUpdate: boolean): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare class Wrapper_ItemGroup {
    _eventHandler: Function;
    context: import0.ItemGroup;
    _changed: boolean;
    constructor();
    ngOnDetach(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any): void;
    ngOnDestroy(): void;
    ngDoCheck(view: import2.AppView<any>, el: any, throwOnChange: boolean): boolean;
    checkHost(view: import2.AppView<any>, componentView: import2.AppView<any>, el: any, throwOnChange: boolean): void;
    handleEvent(eventName: string, $event: any): boolean;
    subscribe(view: import2.AppView<any>, _eventHandler: any): void;
}
export declare const ItemNgFactory: import8.ComponentFactory<import0.Item>;
export declare class View_Item0 extends import2.AppView<import0.Item> {
    _viewQuery_Label_0: import6.QueryList<any>;
    _el_0: any;
    _el_1: any;
    _anchor_2: any;
    _vc_2: import13.ViewContainer;
    _TemplateRef_2_5: any;
    _NgIf_2_6: import14.Wrapper_NgIf;
    _anchor_3: any;
    _vc_3: import13.ViewContainer;
    _TemplateRef_3_5: any;
    _NgIf_3_6: import14.Wrapper_NgIf;
    _el_4: any;
    constructor(viewUtils: import3.ViewUtils, parentView: import2.AppView<any>, parentIndex: number, parentElement: any);
    createInternal(rootSelector: string): import8.ComponentRef<any>;
    injectorGetInternal(token: any, requestNodeIndex: number, notFoundResult: any): any;
    detectChangesInternal(throwOnChange: boolean): void;
    destroyInternal(): void;
    createEmbeddedViewInternal(nodeIndex: number): import2.AppView<any>;
}
