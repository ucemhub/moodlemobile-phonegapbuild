webpackJsonp([21],{1826:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"CoreSettingsSpaceUsagePageModule",function(){return d});var n=i(0),r=i(3),o=i(2),a=i(1945),s=i(16),c=i(15),l=i(75),f=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},d=function(){function e(){}return e=f([Object(n.I)({declarations:[a.a],imports:[s.a,c.a,l.a,r.l.forChild(a.a),o.b.forChild()]})],e)}()},1945:function(e,t,i){"use strict";i.d(t,"a",function(){return u});var n=i(0),r=i(2),o=i(28),a=i(20),s=i(4),c=i(8),l=i(9),f=this&&this.__decorate||function(e,t,i,n){var r,o=arguments.length,a=o<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,n);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,i,a):r(t,i))||a);return o>3&&a&&Object.defineProperty(t,i,a),a},d=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e,t,i,n,r,o){this.fileProvider=e,this.filePoolProvider=t,this.sitesProvider=i,this.textUtils=n,this.translate=r,this.domUtils=o,this.usageLoaded=!1,this.sites=[],this.currentSiteId="",this.totalUsage=0,this.freeSpace=0,this.currentSiteId=this.sitesProvider.getCurrentSiteId()}return e.prototype.ionViewDidLoad=function(){var e=this;this.fetchData().finally(function(){e.usageLoaded=!0})},e.prototype.calculateSizeUsage=function(){var e=this;return this.sitesProvider.getSortedSites().then(function(t){e.sites=t;var i=e.sites.map(function(t){return e.sitesProvider.getSite(t.id).then(function(e){return e.getSpaceUsage().then(function(e){t.spaceUsage=e})})});return Promise.all(i)})},e.prototype.calculateTotalUsage=function(){var e=0;this.sites.forEach(function(t){t.spaceUsage&&(e+=parseInt(t.spaceUsage,10))}),this.totalUsage=e},e.prototype.calculateFreeSpace=function(){var e=this;return this.fileProvider.isAvailable()?this.fileProvider.calculateFreeSpace().then(function(t){e.freeSpace=t}).catch(function(){e.freeSpace=0}):(this.freeSpace=0,Promise.resolve(null))},e.prototype.fetchData=function(){var e=this;return Promise.all([this.calculateSizeUsage().then(function(){return e.calculateTotalUsage()}),this.calculateFreeSpace()])},e.prototype.refreshData=function(e){this.fetchData().finally(function(){e.complete()})},e.prototype.updateSiteUsage=function(e,t){var i=e.spaceUsage;e.spaceUsage=t,this.totalUsage-=i-t,this.freeSpace+=i-t},e.prototype.deleteSiteFiles=function(e){var t=this;this.textUtils.formatText(e.siteName).then(function(i){var n=t.translate.instant("core.settings.deletesitefilestitle"),r=t.translate.instant("core.settings.deletesitefiles",{sitename:i});t.domUtils.showConfirm(r,n).then(function(){return t.sitesProvider.getSite(e.id)}).then(function(i){i.deleteFolder().then(function(){t.filePoolProvider.clearAllPackagesStatus(i.id),t.filePoolProvider.clearFilepool(i.id),t.updateSiteUsage(e,0)}).catch(function(n){n&&n.code===FileError.NOT_FOUND_ERR?(t.filePoolProvider.clearAllPackagesStatus(i.id),t.updateSiteUsage(e,0)):(t.domUtils.showErrorModal("core.settings.errordeletesitefiles",!0),i.getSpaceUsage().then(function(i){t.updateSiteUsage(e,i)}))})}).catch(function(){})})},e=f([Object(n.m)({selector:"page-core-settings-space-usage",template:'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'core.settings.spaceusage\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="usageLoaded" (ionRefresh)="refreshData($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="usageLoaded">\n        <ion-item *ngFor="let site of sites" [class.core-primary-item]="site.id == currentSiteId">\n            <h2><core-format-text [text]="site.siteName"></core-format-text></h2>\n            <p>{{ site.fullName }}</p>\n            <p item-end>{{ site.spaceUsage | coreBytesToSize }}</p>\n            <button ion-button icon-only clear color="danger" item-end (click)="deleteSiteFiles(site)" [hidden]="!site.spaceUsage > \'0\'" [attr.aria-label]="\'core.settings.deletesitefilestitle\' | translate">\n                <ion-icon name="trash"></ion-icon>\n            </button>\n        </ion-item>\n        <ion-item-divider color="light">\n            <p>{{ \'core.settings.total\' | translate }}</p>\n            <p item-end>{{ totalUsage | coreBytesToSize }}</p>\n        </ion-item-divider>\n        <ion-item-divider color="light">\n            <p>{{ \'core.settings.estimatedfreespace\' | translate }}</p>\n            <p item-end>{{ freeSpace | coreBytesToSize }}</p>\n        </ion-item-divider>\n    </core-loading>\n</ion-content>\n'}),d("design:paramtypes",[o.a,a.a,s.a,c.a,r.c,l.a])],e)}()}});