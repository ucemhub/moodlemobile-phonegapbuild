webpackJsonp([9],{1838:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"CoreViewerTextPageModule",function(){return s});var o=n(0),i=n(3),c=n(2),r=n(1957),l=n(16),a=n(15),f=this&&this.__decorate||function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r},s=function(){function e(){}return e=f([Object(o.I)({declarations:[r.a],imports:[l.a,a.a,i.l.forChild(r.a),c.b.forChild()]})],e)}()},1957:function(e,t,n){"use strict";n.d(t,"a",function(){return a});var o=n(0),i=n(3),c=n(8),r=this&&this.__decorate||function(e,t,n,o){var i,c=arguments.length,r=c<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(i=e[l])&&(r=(c<3?i(r):c>3?i(t,n,r):i(t,n))||r);return c>3&&r&&Object.defineProperty(t,n,r),r},l=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e,t,n){this.viewCtrl=e,this.title=t.get("title"),this.content=t.get("content"),this.component=t.get("component"),this.componentId=t.get("componentId"),this.files=t.get("files")}return e.prototype.closeModal=function(){this.viewCtrl.dismiss()},e=r([Object(o.m)({selector:"page-core-viewer-text",template:'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ title }}</ion-title>\n\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <core-format-text [text]="content" [component]="component" [componentId]="componentId"></core-format-text>\n\n    <ion-card *ngIf="files && files.length">\n        <core-file *ngFor="let file of files" [file]="file" [component]="component" [componentId]="componentId"></core-file>\n    </ion-card>\n</ion-content>\n'}),l("design:paramtypes",[i.z,i.r,c.a])],e)}()}});