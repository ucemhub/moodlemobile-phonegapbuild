webpackJsonp([19],{1828:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"CoreSharedFilesChooseSitePageModule",function(){return f});var n=i(0),r=i(3),o=i(1947),a=i(2),s=i(16),l=i(15),c=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},f=function(){function e(){}return e=c([Object(n.I)({declarations:[o.a],imports:[s.a,l.a,r.l.forChild(o.a),a.b.forChild()]})],e)}()},1947:function(e,t,i){"use strict";i.d(t,"a",function(){return h});var n=i(0),r=i(3),o=i(28),a=i(4),s=i(9),l=i(393),c=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},h=function(){function e(e,t,i,n,r,o){this.navCtrl=e,this.sharedFilesHelper=i,this.sitesProvider=n,this.domUtils=r,this.fileProvider=o,this.filePath=t.get("filePath")}return e.prototype.ngOnInit=function(){var e=this;if(!this.filePath)return this.domUtils.showErrorModal("Error reading file."),void this.navCtrl.pop();var t=this.fileProvider.getFileAndDirectoryFromPath(this.filePath);this.fileName=t.name,this.fileProvider.getFile(this.filePath).then(function(t){e.fileEntry=t,e.fileName=e.fileEntry.name}).catch(function(){e.domUtils.showErrorModal("Error reading file."),e.navCtrl.pop()}),this.sitesProvider.getSites().then(function(t){e.sites=t}).finally(function(){e.loaded=!0})},e.prototype.storeInSite=function(e){var t=this;this.loaded=!1,this.sharedFilesHelper.storeSharedFileInSite(this.fileEntry,e).then(function(){t.navCtrl.pop()}).finally(function(){t.loaded=!0})},e=c([Object(n.m)({selector:"page-core-shared-files-choose-site",template:'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'core.sharedfiles.sharedfiles\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <core-loading [hideUntil]="loaded">\n        <ion-list>\n            <ion-item text-wrap>\n                <p class="item-heading">{{ \'core.sharedfiles.chooseaccountstorefile\' | translate }}</p>\n                <p>{{fileName}}</p>\n            </ion-item>\n            <a ion-item *ngFor="let site of sites" (click)="storeInSite(site.id)">\n                <img [src]="site.avatar" item-start>\n                <h2>{{site.fullName}}</h2>\n                <p><core-format-text clean="true" [text]="site.siteName"></core-format-text></p>\n                <p>{{site.siteUrl}}</p>\n            </a>\n        </ion-list>\n    </core-loading>\n</ion-content>\n\n\n\n'}),f("design:paramtypes",[r.q,r.r,l.a,a.a,s.a,o.a])],e)}()}});