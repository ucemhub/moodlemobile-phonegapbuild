webpackJsonp([0],{1743:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"AddonMessagesSettingsPageModule",function(){return h});var s=n(0),o=n(3),i=n(2),r=n(1859),a=n(16),c=n(15),l=n(1841),d=this&&this.__decorate||function(e,t,n,s){var o,i=arguments.length,r=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},h=function(){function e(){}return e=d([Object(s.I)({declarations:[r.a],imports:[a.a,c.a,l.a,o.l.forChild(r.a),i.b.forChild()]})],e)}()},1841:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var s=n(0),o=n(17),i=n(3),r=n(2),a=n(16),c=n(15),l=n(75),d=n(1842),h=n(1843),f=this&&this.__decorate||function(e,t,n,s){var o,i=arguments.length,r=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},u=function(){function e(){}return e=f([Object(s.I)({declarations:[d.a,h.a],imports:[o.b,i.k,r.b.forChild(),a.a,c.a,l.a],providers:[],exports:[d.a,h.a]})],e)}()},1842:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var s=n(0),o=n(3),i=n(2),r=n(12),a=n(4),c=n(101),l=n(9),d=n(7),h=n(11),f=n(140),u=this&&this.__decorate||function(e,t,n,s){var o,i=arguments.length,r=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},g=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},p=function(){function e(e,t,n,s,o,i,r,a,l,d){var h=this;this.eventsProvider=e,this.messagesProvider=s,this.domUtils=o,this.appProvider=r,this.loaded=!1,this.search={enabled:!1,showResults:!1,results:[],loading:"",text:""},this.search.loading=n.instant("core.searching"),this.loadingMessages=n.instant("core.loading"),this.siteId=t.getCurrentSiteId(),this.newMessagesObserver=e.on(c.a.NEW_MESSAGE_EVENT,function(e){if(e.userId){var t=h.discussions.find(function(t){return t.message.user==e.userId});void 0===t?(h.loaded=!1,h.refreshData().finally(function(){h.loaded=!0})):(t.message.message=e.message,t.message.timecreated=e.timecreated)}},this.siteId),this.readChangedObserver=e.on(c.a.READ_CHANGED_EVENT,function(e){if(e.userId){var t=h.discussions.find(function(t){return t.message.user==e.userId});void 0!==t&&(t.unread=!1,h.messagesProvider.invalidateDiscussionsCache())}},this.siteId),this.cronObserver=e.on(c.a.READ_CRON_EVENT,function(e){h.refreshData()},this.siteId),this.appResumeSubscription=a.resume.subscribe(function(){h.loaded&&(h.loaded=!1,h.refreshData())}),this.discussionUserId=i.get("discussionUserId")||!1,this.pushObserver=d.on("receive").subscribe(function(e){l.isFalseOrZero(e.notif)&&e.site==h.siteId&&h.refreshData()})}return e.prototype.ngOnInit=function(){var e=this;this.discussionUserId&&this.gotoDiscussion(this.discussionUserId),this.fetchData().then(function(){!e.discussionUserId&&e.discussions.length>0&&e.gotoDiscussion(e.discussions[0].message.user,void 0,!0)})},e.prototype.refreshData=function(e){var t=this;return this.messagesProvider.invalidateDiscussionsCache().then(function(){return t.fetchData().finally(function(){e&&(t.eventsProvider.trigger(c.a.READ_CHANGED_EVENT,void 0,t.siteId),e.complete())})})},e.prototype.fetchData=function(){var e=this;return this.loadingMessage=this.loadingMessages,this.search.enabled=this.messagesProvider.isSearchMessagesEnabled(),this.messagesProvider.getDiscussions().then(function(t){var n=[];for(var s in t)t[s].unread=!!t[s].unread,n.push(t[s]);e.discussions=n.sort(function(e,t){return t.message.timecreated-e.message.timecreated})}).catch(function(t){e.domUtils.showErrorModalDefault(t,"addon.messages.errorwhileretrievingdiscussions",!0)}).finally(function(){e.loaded=!0})},e.prototype.clearSearch=function(){var e=this;this.loaded=!1,this.search.showResults=!1,this.search.text="",this.fetchData().finally(function(){e.loaded=!0})},e.prototype.searchMessage=function(e){var t=this;return this.appProvider.closeKeyboard(),this.loaded=!1,this.loadingMessage=this.search.loading,this.messagesProvider.searchMessages(e).then(function(e){t.search.showResults=!0,t.search.results=e}).catch(function(e){t.domUtils.showErrorModalDefault(e,"addon.messages.errorwhileretrievingmessages",!0)}).finally(function(){t.loaded=!0})},e.prototype.gotoDiscussion=function(e,t,n){void 0===n&&(n=!1),this.discussionUserId=e;var s={discussion:e,onlyWithSplitView:n};t&&(s.message=t),this.eventsProvider.trigger(c.a.SPLIT_VIEW_LOAD_EVENT,s,this.siteId)},e.prototype.ngOnDestroy=function(){this.newMessagesObserver&&this.newMessagesObserver.off(),this.readChangedObserver&&this.readChangedObserver.off(),this.cronObserver&&this.cronObserver.off(),this.appResumeSubscription&&this.appResumeSubscription.unsubscribe(),this.pushObserver&&this.pushObserver.unsubscribe()},e=u([Object(s.m)({selector:"addon-messages-discussions",template:'<ion-content>\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-search-box *ngIf="search.enabled" (onSubmit)="searchMessage($event)" (onClear)="clearSearch($event)" [placeholder]=" \'addon.messages.message\' | translate" autocorrect="off" spellcheck="false" lengthCheck="2" [disabled]="!loaded"></core-search-box>\n\n    <core-loading [hideUntil]="loaded" [message]="loadingMessage">\n\n        <core-empty-box *ngIf="(!discussions || discussions.length <= 0) && !search.showResults" icon="chatbubbles" [message]="\'addon.messages.nomessages\' | translate"></core-empty-box>\n\n        <core-empty-box *ngIf="(!search.results || search.results.length <= 0) && search.showResults" icon="search" [message]="\'core.noresults\' | translate"></core-empty-box>\n\n        <ion-list *ngIf="search.showResults" no-margin>\n            <ion-item-divider color="light">\n                <h2>{{ \'core.searchresults\' | translate }}</h2>\n                <ion-note item-end>{{ search.results.length }}</ion-note>\n            </ion-item-divider>\n            <ion-item text-wrap *ngFor="let result of search.results" [title]="result.fullname" (click)="gotoDiscussion(result.userid, result.messageid)" [class.core-split-item-selected]="result.userid == discussionUserId" detail-none>\n                <ion-avatar item-start>\n                    <img src="{{result.profileimageurl}}" [alt]="\'core.pictureof\' | translate:{$a: result.fullname}" core-external-content onError="this.src=\'assets/img/user-avatar.png\'">\n                </ion-avatar>\n                <h2><core-format-text [text]="result.fullname"></core-format-text></h2>\n                <p><core-format-text clean="true" singleLine="true" [text]="result.lastmessage"></core-format-text></p>\n            </ion-item>\n        </ion-list>\n\n        <ion-list *ngIf="!search.showResults" no-margin>\n            <ion-item text-wrap *ngFor="let discussion of discussions" [title]="discussion.fullname" (click)="gotoDiscussion(discussion.message.user)" [class.core-split-item-selected]="discussion.message.user == discussionUserId" detail-none>\n                <ion-avatar item-start>\n                    <img src="{{discussion.profileimageurl}}" [alt]="\'core.pictureof\' | translate:{$a: discussion.fullname}" core-external-content onError="this.src=\'assets/img/user-avatar.png\'">\n                </ion-avatar>\n                <h2>\n                    <core-format-text [text]="discussion.fullname"></core-format-text>\n                    <ion-note *ngIf="discussion.message.timecreated > 0 || discussion.unread">\n                        <span *ngIf="discussion.unread" class="core-primary-circle"></span>\n                        <span *ngIf="discussion.message.timecreated > 0">{{discussion.message.timecreated / 1000 | coreDateDayOrTime}}</span>\n                    </ion-note>\n                </h2>\n                <p><core-format-text clean="true" singleLine="true" [text]="discussion.message.message"></core-format-text></p>\n            </ion-item>\n        </ion-list>\n    </core-loading>\n</ion-content>\n'}),g("design:paramtypes",[r.a,a.a,i.c,c.a,l.a,o.r,h.a,o.s,d.a,f.a])],e)}()},1843:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var s=n(0),o=n(3),i=n(2),r=n(4),a=n(101),c=n(9),l=n(11),d=n(12),h=this&&this.__decorate||function(e,t,n,s){var o,i=arguments.length,r=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=function(){function e(e,t,n,s,o,i,r){this.appProvider=n,this.messagesProvider=s,this.domUtils=o,this.eventsProvider=r,this.noSearchTypes=["online","offline","blocked","strangers"],this.loaded=!1,this.contactTypes=this.noSearchTypes,this.searchType="search",this.loadingMessage="",this.hasContacts=!1,this.contacts={search:[]},this.searchString="",this.currentUserId=e.getCurrentSiteUserId(),this.siteId=e.getCurrentSiteId(),this.searchingMessages=t.instant("core.searching"),this.loadingMessages=t.instant("core.loading"),this.loadingMessage=this.loadingMessages,this.discussionUserId=i.get("discussionUserId")||!1}return e.prototype.ngOnInit=function(){var e=this;this.discussionUserId&&this.gotoDiscussion(this.discussionUserId),this.fetchData().then(function(){if(!e.discussionUserId&&e.hasContacts){var t=void 0;for(var n in e.contacts)if(e.contacts[n].length>0){t=e.contacts[n][0];break}t&&e.gotoDiscussion(t.id,!0)}}).finally(function(){e.loaded=!0})},e.prototype.refreshData=function(e){var t=this;return(this.searchString?this.performSearch(this.searchString):this.messagesProvider.invalidateAllContactsCache(this.currentUserId).then(function(){return t.fetchData()})).finally(function(){e.complete()})},e.prototype.fetchData=function(){var e=this;return this.loadingMessage=this.loadingMessages,this.messagesProvider.getAllContacts().then(function(t){for(var n in t)e.contacts[n]=t[n].length>0?e.sortUsers(t[n]):[];e.clearSearch()}).catch(function(t){e.domUtils.showErrorModalDefault(t,"addon.messages.errorwhileretrievingcontacts",!0)})},e.prototype.sortUsers=function(e){return e.sort(function(e,t){var n=e.fullname.toLowerCase(),s=t.fullname.toLowerCase();return n.localeCompare(s)})},e.prototype.clearSearch=function(){this.searchString="",this.contactTypes=this.noSearchTypes,this.hasContacts=!1;for(var e in this.contacts)if(this.contacts[e].length>0)return void(this.hasContacts=!0)},e.prototype.search=function(e){var t=this;return this.appProvider.closeKeyboard(),this.loaded=!1,this.loadingMessage=this.searchingMessages,this.performSearch(e).finally(function(){t.loaded=!0})},e.prototype.performSearch=function(e){var t=this;return this.messagesProvider.searchContacts(e).then(function(n){t.hasContacts=n.length>0,t.searchString=e,t.contactTypes=["search"],t.contacts.search=t.sortUsers(n)}).catch(function(e){t.domUtils.showErrorModalDefault(e,"addon.messages.errorwhileretrievingcontacts",!0)})},e.prototype.gotoDiscussion=function(e,t){void 0===t&&(t=!1),this.discussionUserId=e;this.eventsProvider.trigger(a.a.SPLIT_VIEW_LOAD_EVENT,{discussion:e,onlyWithSplitView:t},this.siteId)},e=h([Object(s.m)({selector:"addon-messages-contacts",template:'<ion-content>\n    <ion-refresher [enabled]="loaded" (ionRefresh)="refreshData($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n\n    <core-search-box (onSubmit)="search($event)" (onClear)="clearSearch($event)" [placeholder]=" \'addon.messages.contactname\' | translate" autocorrect="off" spellcheck="false" lengthCheck="2" [disabled]="!loaded"></core-search-box>\n\n    <core-loading [hideUntil]="loaded" [message]="loadingMessage">\n        <core-empty-box *ngIf="!hasContacts && searchString == \'\'" icon="person" [message]="\'addon.messages.contactlistempty\' | translate"></core-empty-box>\n\n        <core-empty-box *ngIf="!hasContacts && searchString != \'\'" icon="person" [message]="\'addon.messages.nousersfound\' | translate"></core-empty-box>\n\n        <ion-list *ngFor="let contactType of contactTypes" no-margin>\n            <ng-container *ngIf="contacts[contactType] && (contacts[contactType].length > 0 || contactType === searchType)">\n                <ion-item-divider color="light">\n                    <h2>{{ \'addon.messages.type_\' + contactType | translate }}</h2>\n                    <ion-note item-end>{{ contacts[contactType].length }}</ion-note>\n                </ion-item-divider>\n                <ng-container *ngFor="let contact of contacts[contactType]">\n                    \x3c!-- Don\'t show deleted users --\x3e\n                    <ion-item text-wrap *ngIf="contact.profileimageurl || contact.profileimageurlsmall"  [title]="contact.fullname" (click)="gotoDiscussion(contact.id)" [class.core-split-item-selected]="contact.id == discussionUserId" detail-none>\n                        <ion-avatar item-start>\n                            <img src="{{contact.profileimageurl || contact.profileimageurlsmall}}" [alt]="\'core.pictureof\' | translate:{$a: contact.fullname}" core-external-content onError="this.src=\'assets/img/user-avatar.png\'">\n                        </ion-avatar>\n                        <h2><core-format-text [text]="contact.fullname"></core-format-text></h2>\n                    </ion-item>\n                </ng-container>\n            </ng-container>\n        </ion-list>\n    </core-loading>\n</ion-content>\n'}),f("design:paramtypes",[r.a,i.c,l.a,a.a,c.a,o.r,d.a])],e)}()},1859:function(e,t,n){"use strict";n.d(t,"a",function(){return l});var s=n(0),o=n(101),i=n(31),r=n(9),a=this&&this.__decorate||function(e,t,n,s){var o,i=arguments.length,r=i<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,n,s);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(i<3?o(r):i>3?o(t,n,r):o(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r},c=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},l=function(){function e(e,t,n){this.messagesProvider=e,this.domUtils=t,this.userProvider=n,this.blockNonContactsState=!1}return e.prototype.ionViewDidLoad=function(){this.fetchPreferences()},e.prototype.fetchPreferences=function(){var e=this;return this.messagesProvider.getMessagePreferences().then(function(t){e.preferences=t,e.blockNonContactsState=t.blocknoncontacts}).catch(function(t){e.domUtils.showErrorModal(t)}).finally(function(){e.preferencesLoaded=!0})},e.prototype.updatePreferences=function(){var e=this;this.messagesProvider.invalidateMessagePreferences().finally(function(){e.fetchPreferences()})},e.prototype.updatePreferencesAfterDelay=function(){var e=this;clearTimeout(this.updateTimeout),this.updateTimeout=setTimeout(function(){e.updateTimeout=null,e.updatePreferences()},5e3)},e.prototype.blockNonContacts=function(e){var t=this,n=this.domUtils.showModalLoading("core.sending",!0);this.userProvider.updateUserPreference("message_blocknoncontacts",e?1:0).then(function(){t.updatePreferencesAfterDelay()}).catch(function(e){t.domUtils.showErrorModal(e),t.blockNonContactsState=!t.blockNonContactsState}).finally(function(){n.dismiss()})},e.prototype.changePreference=function(e,t,n){var s=this,o=n[t],i=e.preferencekey+"_"+o.name,r=[],a="none";e.processors.forEach(function(e){e[t].checked&&r.push(e.name)}),a.length>0&&(a=r.join(",")),e.updating||(e.updating={}),e.updating[t]=!0,this.userProvider.updateUserPreference(i,a).then(function(){s.updatePreferencesAfterDelay()}).catch(function(e){s.domUtils.showErrorModal(e),o.checked=!o.checked}).finally(function(){e.updating[t]=!1})},e.prototype.refreshEvent=function(e){var t=this;this.messagesProvider.invalidateMessagePreferences().finally(function(){t.fetchPreferences().finally(function(){e.complete()})})},e.prototype.ngOnDestroy=function(){this.updateTimeout&&(clearTimeout(this.updateTimeout),this.updatePreferences())},e=a([Object(s.m)({selector:"page-addon-messages-settings",template:'<ion-header>\n    <ion-navbar>\n        <ion-title>{{ \'addon.messages.messagepreferences\' | translate }}</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content>\n    <ion-refresher [enabled]="preferencesLoaded" (ionRefresh)="refreshPreferences($event)">\n        <ion-refresher-content pullingText="{{ \'core.pulltorefresh\' | translate }}"></ion-refresher-content>\n    </ion-refresher>\n    <core-loading [hideUntil]="preferencesLoaded">\n        \x3c!-- Block non contacts. --\x3e\n        <ion-card>\n            <ion-item>\n              <ion-label>{{ \'addon.messages.blocknoncontacts\' | translate }}</ion-label>\n              <ion-toggle [(ngModel)]="blockNonContactsState" (ionChange)="blockNonContacts(blockNonContactsState)"></ion-toggle>\n            </ion-item>\n        </ion-card>\n\n        <ng-container *ngIf="preferences">\n            <div *ngFor="let component of preferences.components">\n                <ion-card list *ngFor="let notification of component.notifications">\n                    <ion-item-divider color="light" text-wrap>\n                        <ion-row no-padding>\n                            <ion-col no-padding>{{ notification.displayname }}</ion-col>\n                            <ion-col col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedin\' | translate }}</ion-col>\n                            <ion-col col-2 text-center no-padding class="hidden-phone">{{ \'core.settings.loggedoff\' | translate }}</ion-col>\n                        </ion-row>\n                    </ion-item-divider>\n                    <ng-container *ngFor="let processor of notification.processors">\n                        \x3c!-- Tablet view --\x3e\n                        <ion-row text-wrap class="hidden-phone" align-items-center>\n                            <ion-col margin-horizontal>{{ processor.displayname }}</ion-col>\n                            <ion-col col-2 text-center *ngFor="let state of [\'loggedin\', \'loggedoff\']">\n                                \x3c!-- If notifications not disabled, show toggle. --\x3e\n                                <ion-spinner [hidden]="preferences.disableall || !(notification.updating && notification.updating[state])"></ion-spinner>\n                                <ion-toggle *ngIf="!preferences.disableall" [(ngModel)]="processor[state].checked" (ionChange)="changePreference(notification, state, processor)" [disabled]="processor.locked || (notification.updating && notification.updating[state])">\n                                </ion-toggle>\n                                \x3c!-- If notifications are disabled, show "Disabled" instead of toggle. --\x3e\n                                <span *ngIf="preferences.disableall">{{ \'core.settings.disabled\' | translate }}</span>\n                            </ion-col>\n                        </ion-row>\n                        \x3c!-- Phone view --\x3e\n                        <ion-list-header text-wrap class="hidden-tablet">{{ processor.displayname }}</ion-list-header>\n                        \x3c!-- If notifications not disabled, show toggles. If notifications are disabled, show "Disabled" instead of toggle. --\x3e\n                        <ion-item *ngFor="let state of [\'loggedin\', \'loggedoff\']" text-wrap class="hidden-tablet">\n                            <ion-label>{{ \'core.settings.\' + state | translate }}</ion-label>\n                            <ion-spinner item-end *ngIf="!preferences.disableall && (notification.updating && notification.updating[state])"></ion-spinner>\n                            <ion-toggle item-end *ngIf="!preferences.disableall" [(ngModel)]="processor[state].checked" (ionChange)="changePreference(notification, state, processor)" [disabled]="processor.locked || (notification.updating && notification.updating[state])">\n                            </ion-toggle>\n                            <ion-note item-end *ngIf="preferences.disableall">{{ \'core.settings.disabled\' | translate }}</ion-note>\n                        </ion-item>\n                    </ng-container>\n                </ion-card>\n            </div>\n        </ng-container>\n    </core-loading>\n</ion-content>\n'}),c("design:paramtypes",[o.a,r.a,i.a])],e)}()}});