webpackJsonp([70],{1773:function(n,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),t.d(o,"AddonModLessonPasswordModalPageModule",function(){return d});var e=t(0),i=t(3),r=t(1889),a=t(2),s=t(16),c=this&&this.__decorate||function(n,o,t,e){var i,r=arguments.length,a=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,o,t,e);else for(var s=n.length-1;s>=0;s--)(i=n[s])&&(a=(r<3?i(a):r>3?i(o,t,a):i(o,t))||a);return r>3&&a&&Object.defineProperty(o,t,a),a},d=function(){function n(){}return n=c([Object(e.I)({declarations:[r.a],imports:[s.a,i.l.forChild(r.a),a.b.forChild()]})],n)}()},1889:function(n,o,t){"use strict";t.d(o,"a",function(){return s});var e=t(0),i=t(3),r=this&&this.__decorate||function(n,o,t,e){var i,r=arguments.length,a=r<3?o:null===e?e=Object.getOwnPropertyDescriptor(o,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,o,t,e);else for(var s=n.length-1;s>=0;s--)(i=n[s])&&(a=(r<3?i(a):r>3?i(o,t,a):i(o,t))||a);return r>3&&a&&Object.defineProperty(o,t,a),a},a=this&&this.__metadata||function(n,o){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,o)},s=function(){function n(n){this.viewCtrl=n}return n.prototype.submitPassword=function(n){this.viewCtrl.dismiss(n.value)},n.prototype.closeModal=function(){this.viewCtrl.dismiss()},n=r([Object(e.m)({selector:"page-addon-mod-lesson-password-modal",template:'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'core.login.password\' | translate }}</ion-title>\n        <ion-buttons end>\n            <button ion-button icon-only (click)="closeModal()" [attr.aria-label]="\'core.close\' | translate">\n                <ion-icon name="close"></ion-icon>\n            </button>\n        </ion-buttons>\n    </ion-navbar>\n</ion-header>\n<ion-content padding class="addon-mod_lesson-password-modal">\n    <form ion-list (ngSubmit)="submitPassword(passwordinput)">\n        <ion-item>\n            <core-show-password item-content [name]="\'password\'">\n                <ion-label>{{ \'addon.mod_lesson.enterpassword\' | translate }}</ion-label>\n                <ion-input name="password" type="password" placeholder="{{ \'core.login.password\' | translate }}" core-auto-focus #passwordinput></ion-input>\n            </core-show-password>\n        </ion-item>\n        <ion-item>\n            <button ion-button block type="submit" icon-end>\n                {{ \'addon.mod_lesson.continue\' | translate }}\n                <ion-icon name="arrow-forward" md="ios-arrow-forward"></ion-icon>\n            </button>\n        </ion-item>\n    </form>\n</ion-content>\n'}),a("design:paramtypes",[i.z])],n)}()}});