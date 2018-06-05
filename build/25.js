webpackJsonp([25],{1822:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"CoreMainMenuPageModule",function(){return u});var i=n(0),o=n(3),a=n(2),r=n(1941),s=n(16),l=n(15),c=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},u=function(){function e(){}return e=c([Object(i.I)({declarations:[r.a],imports:[s.a,l.a,o.l.forChild(r.a),a.b.forChild()]})],e)}()},1941:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var i=n(0),o=n(3),a=n(12),r=n(4),s=n(92),l=n(884),c=this&&this.__decorate||function(e,t,n,i){var o,a=arguments.length,r=a<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(r=(a<3?o(r):a>3?o(t,n,r):o(t,n))||r);return a>3&&r&&Object.defineProperty(t,n,r),r},u=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},d=function(){function e(e,t,n,i,o){this.menuDelegate=e,this.sitesProvider=t,this.navCtrl=n,this.mainMenuProvider=i,this.langObserver=o.on(a.a.LANGUAGE_CHANGED,this.loadSiteInfo.bind(this)),this.updateSiteObserver=o.on(a.a.SITE_UPDATED,this.loadSiteInfo.bind(this),t.getCurrentSiteId()),this.loadSiteInfo()}return e.prototype.ionViewDidLoad=function(){var e=this;this.subscription=this.menuDelegate.getHandlers().subscribe(function(t){e.handlers=t.slice(l.a.NUM_MAIN_HANDLERS),e.handlersLoaded=e.menuDelegate.areHandlersLoaded()})},e.prototype.ngOnDestroy=function(){this.subscription&&this.subscription.unsubscribe()},e.prototype.loadSiteInfo=function(){var e=this,t=this.sitesProvider.getCurrentSite(),n=t.getStoredConfig();this.siteInfo=t.getInfo(),this.logoutLabel="core.mainmenu."+(n&&"1"==n.tool_mobile_forcelogout?"logout":"changesite"),this.showWeb=!t.isFeatureDisabled("CoreMainMenuDelegate_website"),this.showHelp=!t.isFeatureDisabled("CoreMainMenuDelegate_help"),t.getDocsUrl().then(function(t){e.docsUrl=t}),this.mainMenuProvider.getCustomMenuItems().then(function(t){e.customItems=t})},e.prototype.openHandler=function(e){this.navCtrl.push(e.page,e.pageParams)},e.prototype.openItem=function(e){this.navCtrl.push("CoreViewerIframePage",{title:e.label,url:e.url})},e.prototype.openSettings=function(){this.navCtrl.push("CoreSettingsListPage")},e.prototype.logout=function(){this.sitesProvider.logout()},e=c([Object(i.m)({selector:"page-core-mainmenu-more",template:'<ion-header>\n    <ion-navbar>\n        <ion-title><core-format-text [text]="siteInfo.sitename"></core-format-text></ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-list>\n        <a ion-item core-user-link userId="{{siteInfo.userid}}">\n            <ion-avatar item-start>\n                <img [src]="siteInfo.userpictureurl" core-external-content alt="{{ \'core.pictureof\' | translate:{$a: siteInfo.fullname} }}" role="presentation">\n            </ion-avatar>\n            <p>{{siteInfo.fullname}}</p>\n        </a>\n        <ion-item-divider color="light"></ion-item-divider>\n        <ion-item text-center *ngIf="(!handlers || !handlers.length) && !handlersLoaded">\n            <ion-spinner></ion-spinner>\n        </ion-item>\n        <ion-item *ngFor="let handler of handlers" [ngClass]="[\'core-moremenu-handler\', handler.class]" (click)="openHandler(handler)" title="{{ handler.title | translate }}" detail-push>\n            <ion-icon [name]="handler.icon" item-start></ion-icon>\n            <p>{{ handler.title | translate}}</p>\n            <ion-badge item-end *ngIf="handler.showBadge" [hidden]="handler.loading || !handler.badge">{{badge}}</ion-badge>\n            <ion-spinner item-end *ngIf="handler.showBadge && handler.loading"></ion-spinner>\n        </ion-item>\n        <div *ngFor="let item of customItems" class="core-moremenu-customitem">\n            <a ion-item *ngIf="item.type != \'embedded\'" [href]="item.url" core-link [capture]="item.type == \'app\'" [inApp]="item.type == \'inappbrowser\'" title="{{item.label}}">\n                <ion-icon [name]="item.icon" item-start></ion-icon>\n                <p>{{item.label}}</p>\n            </a>\n            <a ion-item *ngIf="item.type == \'embedded\'" (click)="openItem(item)" title="{{item.label}}">\n                <ion-icon [name]="item.icon" item-start></ion-icon>\n                <p>{{item.label}}</p>\n            </a>\n        </div>\n        <a *ngIf="showWeb" ion-item [href]="siteInfo.siteurl" core-link autoLogin="yes" title="{{ \'core.mainmenu.website\' | translate }}">\n            <ion-icon name="globe" item-start></ion-icon>\n            <p>{{ \'core.mainmenu.website\' | translate }}</p>\n        </a>\n        <a *ngIf="showHelp" ion-item [href]="docsUrl" core-link autoLogin="no" title="{{ \'core.mainmenu.help\' | translate }}">\n            <ion-icon name="help-buoy" item-start></ion-icon>\n            <p>{{ \'core.mainmenu.help\' | translate }}</p>\n        </a>\n        <a ion-item (click)="openSettings()" title="{{ \'core.mainmenu.appsettings\' | translate }}">\n            <ion-icon name="cog" item-start></ion-icon>\n            <p>{{ \'core.mainmenu.appsettings\' | translate }}</p>\n        </a>\n        <a ion-item (click)="logout()" title="{{ logoutLabel | translate }}">\n            <ion-icon name="log-out" item-start></ion-icon>\n            <p>{{ logoutLabel | translate }}</p>\n        </a>\n    </ion-list>\n</ion-content>\n'}),u("design:paramtypes",[s.a,r.a,o.q,l.a,a.a])],e)}()}});