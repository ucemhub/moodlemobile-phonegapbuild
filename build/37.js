webpackJsonp([37],{1810:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r.d(t,"CoreGradesGradePageModule",function(){return f});var n=r(0),a=r(3),o=r(2),i=r(1929),d=r(16),c=r(15),g=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},f=function(){function e(){}return e=g([Object(n.I)({declarations:[i.a],imports:[d.a,c.a,a.l.forChild(i.a),o.b.forChild()]})],e)}()},1929:function(e,t,r){"use strict";r.d(t,"a",function(){return s});var n=r(0),a=r(3),o=r(91),i=r(9),d=r(129),c=r(4),g=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,i=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var d=e.length-1;d>=0;d--)(a=e[d])&&(i=(o<3?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},s=function(){function e(e,t,r,n,a){this.gradesProvider=e,this.domUtils=t,this.gradesHelper=r,this.gradeLoaded=!1,this.courseId=n.get("courseId"),this.userId=n.get("userId")||a.getCurrentSiteUserId(),this.gradeId=n.get("gradeId")}return e.prototype.ionViewDidLoad=function(){var e=this;this.fetchData().finally(function(){e.gradeLoaded=!0})},e.prototype.fetchData=function(){var e=this;return this.gradesHelper.getGradeItem(this.courseId,this.gradeId,this.userId).then(function(t){e.grade=t}).catch(function(t){e.domUtils.showErrorModalDefault(t,"Error loading grade item")})},e.prototype.refreshGrade=function(e){var t=this;this.gradesProvider.invalidateCourseGradesData(this.courseId,this.userId).finally(function(){t.fetchData().finally(function(){e.complete()})})},g([Object(n._9)(a.f),f("design:type",a.f)],e.prototype,"content",void 0),e=g([Object(n.m)({selector:"page-core-grades-grade",template:'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'core.grades.grade\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="gradeLoaded" (ionRefresh)="refreshGrade($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="gradeLoaded">\n        <core-empty-box *ngIf="!grade" icon="stats" [message]="\'core.grades.nogradesreturned\' | translate"></core-empty-box>\n\n        <ion-list *ngIf="grade">\n            <a ion-item *ngIf="grade.itemname && grade.link" text-wrap detail-push [href]="grade.link" core-link captureLink="true">\n                <ion-icon *ngIf="grade.icon" name="{{grade.icon}}" item-start></ion-icon>\n                <img *ngIf="grade.image" [src]="grade.image" item-start/>\n                <h2><core-format-text [text]="grade.itemname"></core-format-text></h2>\n            </a>\n\n            <ion-item *ngIf="grade.itemname && !grade.link" text-wrap >\n                <ion-icon *ngIf="grade.icon" name="{{grade.icon}}" item-start></ion-icon>\n                <img *ngIf="grade.image" [src]="grade.image" item-start/>\n                <h2><core-format-text [text]="grade.itemname"></core-format-text></h2>\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="grade.weight">\n                <h2>{{ \'core.grades.weight\' | translate}}</h2>\n                <p><core-format-text [text]="grade.weight"></core-format-text></p>\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="grade.grade">\n                <h2>{{ \'core.grades.grade\' | translate}}</h2>\n                <p><core-format-text [text]="grade.grade"></core-format-text></p>\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="grade.range">\n                <h2>{{ \'core.grades.range\' | translate}}</h2>\n                <p><core-format-text [text]="grade.range"></core-format-text></p>\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="grade.percentage">\n                <h2>{{ \'core.grades.percentage\' | translate}}</h2>\n                <p><core-format-text [text]="grade.percentage"></core-format-text></p>\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="grade.lettergrade">\n                <h2>{{ \'core.grades.lettergrade\' | translate}}</h2>\n                <p><core-format-text [text]="grade.lettergrade"></core-format-text></p>\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="grade.rank">\n                <h2>{{ \'core.grades.rank\' | translate}}</h2>\n                <p><core-format-text [text]="grade.rank"></core-format-text></p>\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="grade.average">\n                <h2>{{ \'core.grades.average\' | translate}}</h2>\n                <p><core-format-text [text]="grade.average"></core-format-text></p>\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="grade.feedback">\n                <h2>{{ \'core.grades.feedback\' | translate}}</h2>\n                <p><core-format-text [fullTitle]="\'core.grades.feedback\' | translate" maxHeight="60" fullOnClick="true" [text]="grade.feedback"></core-format-text></p>\n            </ion-item>\n\n            <ion-item text-wrap *ngIf="grade.contributiontocoursetotal">\n                <h2>{{ \'core.grades.contributiontocoursetotal\' | translate}}</h2>\n                <p><core-format-text [text]="grade.contributiontocoursetotal"></core-format-text></p>\n            </ion-item>\n        </ion-list>\n    </core-loading>\n</ion-content>\n'}),f("design:paramtypes",[o.a,i.a,d.a,a.r,c.a])],e)}()}});