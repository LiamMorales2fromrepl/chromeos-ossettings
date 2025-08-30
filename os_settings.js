import"chrome://os-settings/strings.m.js";import{dr as CrSettingsPrefs,k as assert,d as assertNotReached,ds as listenOnce,aE as NetworkListenerBehavior,W as WebUiListenerMixin,e as RouteObserverMixin,I as I18nMixin,ab as isInputDeviceSettingsSplitEnabled,K as getInputDeviceSettingsProvider,w as DevicePageBrowserProxyImpl,aR as MultiDeviceBrowserProxyImpl,dt as NETWORK_SECTION_PATH,du as BLUETOOTH_SECTION_PATH,dv as MULTI_DEVICE_SECTION_PATH,dw as PEOPLE_SECTION_PATH,dx as KERBEROS_SECTION_PATH,dy as DEVICE_SECTION_PATH,dz as PERSONALIZATION_SECTION_PATH,dA as PRIVACY_AND_SECURITY_SECTION_PATH,dB as APPS_SECTION_PATH,dC as androidAppsVisible,dD as ACCESSIBILITY_SECTION_PATH,dE as SYSTEM_PREFERENCES_SECTION_PATH,dF as ABOUT_CHROME_OS_SECTION_PATH,de as AccountManagerBrowserProxyImpl,n as assertExists,c as castExists,b$ as getDeviceNameUnsafe,b0 as MultiDeviceSettingsMode,ao as FakeInputDeviceSettingsProvider,dG as KeyboardSettingsObserverReceiver,ap as MouseSettingsObserverReceiver,dH as PointingStickSettingsObserverReceiver,dI as TouchpadSettingsObserverReceiver,dJ as routesMojom,aA as OncMojo,R as RouteOriginMixin,dK as Section$1,as as isExternalStorageEnabled,r as routes,dL as GraphicsTabletSettingsObserverReceiver,a as Router,O as getInstance,cg as ACCESSIBILITY_COMMON_IME_ID,dM as Button,dN as ButtonState,a6 as focusWithoutInk,aM as mojoString16ToString,aS as getEuicc,dO as hasActiveCellularNetwork,aN as CellularSetupPageName,dP as getESimProfile,J as stringToMojoString16,az as CrPolicyNetworkBehaviorMojo,dQ as NetworkConfigElementBehavior,ay as I18nBehavior,dR as assertNotReached$1,dS as htmlEscape,b as recordSettingChange,S as Setting,aQ as ESimManagerListenerMixin,D as DeepLinkingMixin,aF as InternetPageBrowserProxyImpl,aT as getSimSlotCount,P as PrefsMixin,dT as isConnectedToNonCellularNetwork,dU as getNumESimProfiles,aY as MultiDeviceFeature,co as LockStateMixin,cv as recordLockScreenProgress,cw as LockScreenProgress,dV as LockScreenUnlockType,cn as fireAuthTokenInvalidEvent,dW as PhoneHubPermissionsSetupFlowScreens,dX as PhoneHubPermissionsSetupAction,aZ as PhoneHubPermissionsSetupFeatureCombination,dY as getNearbyShareSettings,dZ as observeNearbyShareSettings,aX as MultiDeviceFeatureMixin,d_ as PhoneHubFeatureAccessStatus,aU as MultiDeviceFeatureState,b3 as assertExhaustive,bi as AboutPageBrowserProxyImpl,d$ as UpdateStatus,cm as LifetimeBrowserProxyImpl,a_ as sanitizeInnerHtml,bm as browserChannelToI18nId,au as isCrostiniSupported,c4 as OsBluetoothDevicesSubpageBrowserProxyImpl,e0 as HidWarningDialogSource,e1 as ButtonState$1,e2 as ButtonName,c9 as FocusRowMixin,e3 as DeviceItemState,aP as CrScrollableMixin,e4 as PairingAuthType,c5 as recordBluetoothUiSurfaceMetrics,c6 as BluetoothUiSurface,t as isChild,aW as getImage,cp as assertInstanceof,e5 as isAccountManagerEnabled,e6 as getGraduationHandlerProvider,e7 as GraduationObserverReceiver,a$ as SyncBrowserProxyImpl,e8 as AUTH_TOKEN_INVALID_EVENT_TYPE,cy as SignedInState,e9 as PrivacyHubNavigationOrigin,ac as PersonalizationHubBrowserProxyImpl,ea as isQuickAnswersSupported,eb as isMagicBoostFeatureEnabled,ec as isMagicBoostNoticeBannerVisible,ed as isLobsterSettingsToggleVisible,ee as isScannerSettingsToggleVisible,ef as isAssistantAllowed,eg as isGuest,eh as isPowerwashAllowed,ei as shouldShowStartup,bo as AndroidAppsBrowserProxyImpl,ej as CrSearchFieldMixin,ek as SectionSpec,el as SubpageSpec,em as SettingSpec,en as OpenWindowProxyImpl,eo as recordSearch,bb as FindShortcutMixin,ep as CrContainerShadowMixin,eq as setGlobalScrollTarget,er as recordPageFocus,es as recordPageBlur,et as recordClick,eu as recordNavigation,ev as recordSettingChangeForUnmappedPref,ew as ColorChangeUpdater}from"./shared.rollup.js";export{fF as AcceleratorAction,eY as ApnDetailDialog,eZ as ApnSelectionDialog,e_ as ApnSelectionDialogListItem,cY as ApnSubpageElement,bK as AppLanguageSelectionDialogEntryPoint,br as AppManagementBrowserProxy,aV as AppManagementComponentBrowserProxy,f_ as AppManagementFileHandlingItemElement,f$ as AppManagementReadOnlyPermissionItemElement,bR as AppManagementStore,bq as AppManagementStoreMixin,d0 as AppManagementSupportedLinksItemElement,g0 as AppManagementToggleRowElement,fb as BaseRowMixin,bh as BrowserChannel,eG as ChromeSigninUserChoice,b2 as ChromeVoxSubpageBrowserProxyImpl,a9 as CompanionAppState,f6 as ControlledButtonElement,f7 as ControlledRadioButtonElement,eK as CrA11yAnnouncerElement,cu as CrActionMenuElement,eL as CrAutoImgElement,cr as CrButtonElement,eO as CrCardRadioButtonElement,eM as CrCheckboxElement,cs as CrDialogElement,eN as CrExpandButtonElement,ct as CrIconButtonElement,cq as CrInputElement,aa as CrLinkRowElement,eW as CrPolicyIndicatorElement,eP as CrRadioButtonElement,eQ as CrRadioGroupElement,eR as CrSearchFieldElement,eS as CrSearchableDropDownElement,a7 as CrSliderElement,eT as CrTextareaElement,eU as CrToastElement,p as CrToggleElement,eX as CrTooltipIconElement,eD as DEFAULT_CHECKED_VALUE,eE as DEFAULT_UNCHECKED_VALUE,s as DateTimeBrowserProxy,fj as DateTimePageCallbackRouter,fk as DateTimePageHandlerRemote,fl as DateTimePageRemote,bk as DeviceNameBrowserProxyImpl,bn as DeviceNameState,eF as ExtensionControlBrowserProxyImpl,f8 as ExtensionControlledIndicatorElement,b8 as FaceGazeSubpageBrowserProxyImpl,ca as FastPairSavedDevicesOptInStatus,ai as Fkey,q as GeolocationAccessLevel,cb as GoogleDriveBrowserProxy,g4 as GoogleDrivePageCallbackRouter,g5 as GoogleDrivePageHandlerRemote,g6 as GoogleDrivePageRemote,ar as IdleBehavior,aq as LidClosedBehavior,eV as LocalizedLinkElement,N as MetaKey,gb as MetricsConsentBrowserProxyImpl,ah as ModifierKey,fS as NearbyAccountManagerBrowserProxyImpl,eA as NearbyProgressElement,fT as NearbyShareConfirmPageElement,fZ as NearbyShareDataUsage,fU as NearbyShareHighVisibilityPageElement,cd as OneDriveBrowserProxy,g7 as OneDrivePageCallbackRouter,g8 as OneDrivePageHandlerRemote,g9 as OneDrivePageRemote,dn as OsResetBrowserProxyImpl,g3 as OsSettingsAppsPageElement,cf as OsSettingsSubpageElement,cx as PageStatus,b1 as PhoneHubFeatureAccessProhibitedReason,fR as PhoneHubPermissionsSetupMode,bL as PluginVmBrowserProxyImpl,H as PolicyStatus,fc as PrefControlMixinInternal,cG as PrivacyHubSensorSubpageUserAction,eH as PrivacyPageBrowserProxyImpl,gl as Route,ge as ScheduleType,gh as SearchEnginesBrowserProxyImpl,eI as SecureDnsMode,eJ as SecureDnsUiManagementMode,bc as SelectToSpeakSubpageBrowserProxyImpl,bl as SetDeviceNameResult,gi as SettingsCardElement,f9 as SettingsDropdownMenuElement,fd as SettingsDropdownRowElement,fe as SettingsDropdownV2Element,gd as SettingsPrivacyHubAppPermissionRow,gf as SettingsPrivacyHubSystemServiceRow,E as SettingsRadioGroupElement,ff as SettingsRowElement,gm as SettingsSchedulerSliderElement,gg as SettingsSearchEngineElement,fa as SettingsSliderElement,fg as SettingsSliderRowElement,fh as SettingsSliderV2Element,ba as SettingsToggleButtonElement,fi as SettingsToggleV2Element,an as SimulateRightClickModifier,al as SixPackKey,ag as SixPackShortcutModifier,cc as Stage,cz as StatusAction,av as StorageSpaceState,be as SwitchAccessSubpageBrowserProxyImpl,bf as TextToSpeechSubpageBrowserProxyImpl,ak as TopRowActionKey,bg as TtsVoiceSubpageBrowserProxyImpl,fG as Vkey,fI as acceleratorInfoMojom,e$ as addApp,fJ as appNotificationHandlerMojom,fK as appParentalControlsHandlerMojom,fL as appPermissionHandlerMojom,f0 as changeApp,gk as createRouterForTesting,gj as createRoutesForTesting,fM as crosAudioConfigMojom,fY as dataUsageStringToEnum,fN as displaySettingsProviderMojom,fp as fakeCrosAudioConfig,fq as fakeGraphicsTabletButtonActions,fr as fakeGraphicsTablets,fs as fakeGraphicsTablets2,ft as fakeKeyboards,fu as fakeKeyboards2,fv as fakeMice,fw as fakeMice2,fx as fakeMouseButtonActions,fy as fakePointingSticks,fz as fakePointingSticks2,fA as fakeStyluses,fB as fakeTouchpads,fC as fakeTouchpads2,ex as getContactManager,Z as getDisplaySettingsProvider,fV as getReceiveManager,b9 as getShortcutInputProvider,fO as graduationHandlerMojom,eB as nearbyShareMojom,ey as observeContactManager,fW as observeReceiveManager,f3 as reduceAction,f1 as removeApp,f5 as resetGlobalScrollTargetForTesting,g1 as setAppNotificationProviderForTesting,g2 as setAppParentalControlsProviderForTesting,gc as setAppPermissionProviderForTesting,ez as setContactManagerForTesting,fm as setCrosAudioConfigForTesting,fn as setDisplayApiForTesting,fo as setDisplaySettingsProviderForTesting,ga as setGraduationHandlerProviderForTesting,fD as setInputDeviceSettingsProviderForTesting,eC as setNearbyShareSettingsForTesting,fX as setReceiveManagerForTesting,fH as setUserActionRecorderForTesting,fP as settingMojom,fE as setupFakeInputDeviceSettingsProvider,f4 as updateApps,bM as updateSelectedAppId,f2 as updateSubAppToParentAppId,fQ as userActionRecorderMojom}from"./shared.rollup.js";import{PolymerElement,html,mixinBehaviors,dedupingMixin,afterNextRender,microTask,flush,beforeNextRender,Polymer,Debouncer,timeOut,templatize}from"chrome://resources/polymer/v3_0/polymer/polymer_bundled.min.js";import{getBluetoothConfig}from"chrome://resources/ash/common/bluetooth/cros_bluetooth_config.js";import{MojoInterfaceProviderImpl}from"chrome://resources/ash/common/network/mojo_interface_provider.js";import{SystemPropertiesObserverReceiver,BluetoothSystemState,DeviceConnectionState,DeviceType,BluetoothDiscoveryDelegateReceiver,DevicePairingDelegateReceiver,PairingResult,KeyEnteredHandlerReceiver}from"chrome://resources/mojo/chromeos/ash/services/bluetooth_config/public/mojom/cros_bluetooth_config.mojom-webui.js";import{FilterType,NO_LIMIT,HiddenSsidMode,VpnType,SecurityType,CertificateType,StartConnectResult}from"chrome://resources/mojo/chromeos/services/network_config/public/mojom/cros_network_config.mojom-webui.js";import{NetworkType,ConnectionStateType,PolicySource,OncSource,IPConfigType,DeviceStateType,PortalState}from"chrome://resources/mojo/chromeos/services/network_config/public/mojom/network_types.mojom-webui.js";import{loadTimeData}from"chrome://resources/js/load_time_data.js";import{ActivationResult,ActivationDelegateReceiver,CarrierPortalStatus}from"chrome://resources/mojo/chromeos/ash/services/cellular_setup/public/mojom/cellular_setup.mojom-webui.js";import{getCellularSetupRemote,getESimManagerRemote}from"chrome://resources/ash/common/cellular_setup/mojo_interface_provider.js";import{ProfileInstallResult,ESimOperationResult,ProfileState,ProfileInstallMethod}from"chrome://resources/mojo/chromeos/ash/services/cellular_setup/public/mojom/esim_manager.mojom-webui.js";import{getHotspotConfig}from"chrome://resources/ash/common/hotspot/cros_hotspot_config.js";import{WiFiBand,WiFiSecurityMode,SetHotspotConfigResult,HotspotState,HotspotAllowStatus,CrosHotspotConfigObserverReceiver}from"chrome://resources/ash/common/hotspot/cros_hotspot_config.mojom-webui.js";import"../../../../../../../../../../../../../../nearby/nearby-share-internal-icons.m.js";import{FactorObserverReceiver,AuthFactorConfig,AuthFactor,PinFactorEditor,ConfigureResult}from"chrome://resources/mojo/chromeos/ash/services/auth_factor_config/public/mojom/auth_factor_config.mojom-webui.js";import{Visibility}from"chrome://resources/mojo/chromeos/ash/services/nearby/public/mojom/nearby_share_settings.mojom-webui.js";import{mojo}from"chrome://resources/mojo/mojo/public/js/bindings.js";import{TimeDeltaSpec}from"chrome://resources/mojo/mojo/public/mojom/base/time.mojom-webui.js";import{sendWithPromise}from"chrome://resources/js/cr.js";import{getHidPreservingController}from"chrome://resources/ash/common/bluetooth/hid_preserving_bluetooth_state_controller.js";import{String16Spec}from"chrome://resources/mojo/mojo/public/mojom/base/string16.mojom-webui.js";import"chrome://resources/ash/common/load_time_data.m.js";import"chrome://resources/mwc/lit/index.js";import"chrome://resources/mojo/chromeos/ash/services/nearby/public/mojom/nearby_share_target_types.mojom-webui.js";import"chrome://resources/cr_components/app_management/app_management.mojom-webui.js";
/* Copyright 2015 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */function deepEqual(val1,val2){if(val1===val2){return true}if(Array.isArray(val1)||Array.isArray(val2)){if(!Array.isArray(val1)||!Array.isArray(val2)){return false}return arraysEqual(val1,val2)}if(val1 instanceof Object&&val2 instanceof Object){return objectsEqual(val1,val2)}return false}function arraysEqual(arr1,arr2){if(arr1.length!==arr2.length){return false}for(let i=0;i<arr1.length;i++){if(!deepEqual(arr1[i],arr2[i])){return false}}return true}function objectsEqual(obj1,obj2){const keys1=Object.keys(obj1);const keys2=Object.keys(obj2);if(keys1.length!==keys2.length){return false}for(let i=0;i<keys1.length;i++){const key=keys1[i];if(!deepEqual(obj1[key],obj2[key])){return false}}return true}class SettingsPrefsElement extends PolymerElement{static get is(){return"settings-prefs"}static get properties(){return{prefs:{type:Object,notify:true}}}static get observers(){return["prefsChanged_(prefs.*)"]}lastPrefValues_=new Map;settingsApi_=chrome.settingsPrivate;initialized_=false;boundPrefsChanged_;constructor(){super();if(!CrSettingsPrefs.deferInitialization){this.initialize()}}disconnectedCallback(){super.disconnectedCallback();CrSettingsPrefs.resetForTesting()}initialize(settingsApi){if(this.initialized_){return}this.initialized_=true;if(settingsApi){this.settingsApi_=settingsApi}this.boundPrefsChanged_=this.onSettingsPrivatePrefsChanged_.bind(this);this.settingsApi_.onPrefsChanged.addListener(this.boundPrefsChanged_);this.settingsApi_.getAllPrefs().then((prefs=>{this.updatePrefs_(prefs);CrSettingsPrefs.setInitialized()}))}prefsChanged_(e){if(!CrSettingsPrefs.isInitialized||e.path==="prefs"){return}const key=this.getPrefKeyFromPath_(e.path);const prefStoreValue=this.lastPrefValues_.get(key);const prefObj=this.get(key,this.prefs);if(!deepEqual(prefStoreValue,prefObj.value)){this.dispatchEvent(new CustomEvent("user-action-setting-change",{bubbles:true,composed:true,detail:{prefKey:key,prefValue:prefObj.value}}));this.settingsApi_.setPref(key,prefObj.value,"").then((success=>{if(!success){this.refresh(key)}}))}}onSettingsPrivatePrefsChanged_(prefs){if(CrSettingsPrefs.isInitialized){this.updatePrefs_(prefs)}}refresh(key){this.settingsApi_.getPref(key).then((pref=>{this.updatePrefs_([pref])}))}updatePrefPath_(path,value,prefsObject){const parts=path.split(".");let cur=prefsObject;for(let part;parts.length&&(part=parts.shift());){if(!parts.length){cur[part]=value}else if(part in cur){cur=cur[part]}else{cur=cur[part]={}}}}updatePrefs_(newPrefs){const prefs=this.prefs||{};newPrefs.forEach((newPrefObj=>{this.lastPrefValues_.set(newPrefObj.key,structuredClone(newPrefObj.value));if(!deepEqual(this.get(newPrefObj.key,prefs),newPrefObj)){this.updatePrefPath_(newPrefObj.key,newPrefObj,prefs);if(prefs===this.prefs){this.notifyPath("prefs."+newPrefObj.key,newPrefObj)}}}));if(!this.prefs){this.prefs=prefs}}getPrefKeyFromPath_(path){const parts=path.split(".");assert(parts.shift()==="prefs","Path doesn't begin with 'prefs'");for(let i=1;i<=parts.length;i++){const key=parts.slice(0,i).join(".");if(this.lastPrefValues_.has(key)){return key}}return""}resetForTesting(){if(!this.initialized_){return}this.prefs=undefined;this.lastPrefValues_.clear();this.initialized_=false;this.settingsApi_.onPrefsChanged.removeListener(this.boundPrefsChanged_);this.settingsApi_=chrome.settingsPrivate}}customElements.define(SettingsPrefsElement.is,SettingsPrefsElement);function getTemplate$1a(){return html`<!--_html_template_start_--><style>:host{--cr-drawer-background-color:var(--cros-sys-app_base_shaded);--cr-drawer-width:256px}:host dialog{--transition-timing:200ms ease;background-color:var(--cr-drawer-background-color);border:none;border-start-end-radius:var(--cr-drawer-border-start-end-radius,0);border-end-end-radius:var(--cr-drawer-border-end-end-radius,0);bottom:0;left:calc(-1 * var(--cr-drawer-width));margin:0;max-height:initial;max-width:initial;overflow:hidden;padding:0;position:absolute;top:0;transition:left var(--transition-timing);width:var(--cr-drawer-width)}#container,:host dialog{height:100%;word-break:break-word}:host([show_]) dialog{left:0}:host([align=rtl]) dialog{left:auto;right:calc(-1 * var(--cr-drawer-width));transition:right var(--transition-timing)}:host([show_][align=rtl]) dialog{right:0}:host dialog::backdrop{background:rgba(0,0,0,.5);bottom:0;left:0;opacity:0;position:absolute;right:0;top:0;transition:opacity var(--transition-timing)}:host([show_]) dialog::backdrop{opacity:1}.drawer-header{align-items:center;border-bottom:var(--cr-separator-line);color:var(--cr-drawer-header-color,inherit);display:flex;font:var(--cr-drawer-header-font,inherit);font-size:123.08%;font-weight:var(--cr-drawer-header-font-weight,inherit);min-height:56px;padding-inline-start:var(--cr-drawer-header-padding,24px)}@media (prefers-color-scheme:dark){.drawer-header{color:var(--cr-primary-text-color)}}#heading{outline:0}:host ::slotted([slot=body]){height:calc(100% - 56px);overflow:auto}picture{margin-inline-end:16px}#product-logo,picture{height:24px;width:24px}</style>
<dialog id="dialog" on-cancel="onDialogCancel_" on-click="onDialogClick_" on-close="onDialogClose_">
  <div id="container" on-click="onContainerClick_">
    <div class="drawer-header">
      <slot name="header-icon">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="//resources/images/chrome_logo_dark.svg">
          <img id="product-logo" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" role="presentation">
        </picture>
      </slot>
      <div id="heading" tabindex="-1">[[heading]]</div>
    </div>
    <slot name="body"></slot>
  </div>
</dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CrDrawerElement extends PolymerElement{static get is(){return"cr-drawer"}static get template(){return getTemplate$1a()}static get properties(){return{heading:String,show_:{type:Boolean,reflectToAttribute:true},align:{type:String,value:"ltr",reflectToAttribute:true}}}fire_(eventName,detail){this.dispatchEvent(new CustomEvent(eventName,{bubbles:true,composed:true,detail:detail}))}get open(){return this.$.dialog.open}set open(_value){assertNotReached("Cannot set |open|.")}toggle(){if(this.open){this.cancel()}else{this.openDrawer()}}openDrawer(){if(this.open){return}this.$.dialog.showModal();this.show_=true;this.fire_("cr-drawer-opening");listenOnce(this.$.dialog,"transitionend",(()=>{this.fire_("cr-drawer-opened")}))}dismiss_(cancel){if(!this.open){return}this.show_=false;listenOnce(this.$.dialog,"transitionend",(()=>{this.$.dialog.close(cancel?"canceled":"closed")}))}cancel(){this.dismiss_(true)}close(){this.dismiss_(false)}wasCanceled(){return!this.open&&this.$.dialog.returnValue==="canceled"}onContainerClick_(event){event.stopPropagation()}onDialogClick_(){this.cancel()}onDialogCancel_(event){event.preventDefault();this.cancel()}onDialogClose_(){this.fire_("close")}}customElements.define(CrDrawerElement.is,CrDrawerElement);const styleMod=document.createElement("dom-module");styleMod.appendChild(html`
  <template>
    <style>
:host{color:var(--cr-primary-text-color);line-height:154%;overflow:hidden;user-select:text}
    </style>
  </template>
`.content);styleMod.register("cr-page-host-style");function getTemplate$19(){return html`<!--_html_template_start_--><style include="settings-shared">:host{--tap-target-padding:3px;align-items:center;background:0 0;border-color:transparent;border-radius:16px;border-style:solid;border-width:var(--settings-menu-item-border-width);box-sizing:border-box;color:var(--cros-text-color-primary);display:flex;flex-direction:row;font:var(--cros-button-1-font);height:60px;padding-inline-start:calc(12px - var(--settings-menu-item-border-width));padding-inline-end:calc(12px - var(--settings-menu-item-border-width));text-decoration:none;width:var(--settings-menu-item-width)}#labelWrapper{flex-grow:1;max-width:200px}#label,#sublabel{display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#sublabel{color:var(--cros-sys-on_surface_variant);font:var(--cros-body-2-font)}paper-tooltip{--paper-tooltip-min-width:max-content}iron-icon{margin-inline-end:12px;pointer-events:none}:host(:not(.iron-selected)) iron-icon{--iron-icon-fill-color:var(--cros-sys-primary)}:host(:not(.iron-selected):hover){background-color:var(--cros-sys-hover_on_subtle)!important}:host-context(.focus-outline-visible):host(:focus){border-color:var(--cros-focus-ring-color)}:host(.iron-selected){background-color:var(--cros-sys-primary)!important;color:var(--cros-sys-on_primary)}:host(.iron-selected)>iron-icon{--iron-icon-fill-color:var(--cros-sys-on_primary)}:host(.iron-selected) #sublabel{color:var(--cros-sys-surface_variant)}</style>

<iron-icon icon="[[icon]]" hidden="[[!icon]]"></iron-icon>
<div id="labelWrapper">
  <div id="label">[[label]]</div>
  <div id="sublabel">[[sublabel]]</div>
</div>
<paper-tooltip position="[[tooltipPosition]]" offset="4" fit-to-visible-bounds animation-delay="1000" aria-hidden="true">
  [[label]]
</paper-tooltip>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class OsSettingsMenuItemElement extends PolymerElement{static get is(){return"os-settings-menu-item"}static get template(){return getTemplate$19()}static get properties(){return{path:{type:String,reflectToAttribute:true},icon:{type:String,value:""},label:{type:String,value:""},sublabel:{type:String,value:""},ariaLabel:{type:String,reflectToAttribute:true,computed:"computeAriaLabel_(label)"},ariaDescription:{type:String,reflectToAttribute:true,computed:"computeAriaDescription_(sublabel)"},tooltipPosition:{type:String,value:"right"}}}ready(){super.ready();this.setAttribute("role","link");this.setAttribute("tabindex","0");this.addEventListener("keydown",this.onKeyDown_.bind(this))}computeAriaLabel_(){return this.label}computeAriaDescription_(){return this.sublabel}onKeyDown_(event){if(event.key!==" "&&event.key!=="Enter"){return}event.preventDefault();event.stopPropagation();if(event.repeat){return}this.dispatchEvent(new CustomEvent("click",{bubbles:true,composed:true}))}}customElements.define(OsSettingsMenuItemElement.is,OsSettingsMenuItemElement);function getTemplate$18(){return html`<!--_html_template_start_--><style include="settings-shared">:host{box-sizing:border-box;display:block;padding-bottom:2px;padding-inline-end:var(--settings-menu-padding-inline-end);padding-inline-start:var(--settings-menu-padding-inline-start);padding-top:var(--settings-menu-padding-top);width:var(--settings-menu-width)}:host *{-webkit-tap-highlight-color:transparent}[selectable]>:focus{background-color:transparent}#menuSeparator{border-bottom:var(--cr-separator-line);margin-bottom:8px;margin-top:8px}#topMenu>os-settings-menu-item{margin-bottom:8px}#topMenu>os-settings-menu-item:last-of-type{margin-bottom:calc(48px - calc(var(--tap-target-padding) + var(--settings-menu-item-border-width)))}</style>
<iron-selector id="topMenu" role="navigation" selectable="os-settings-menu-item" attr-for-selected="path" selected="[[selectedItemPath_]]" on-iron-activate="onItemActivated_" on-iron-select="onItemSelected_" on-iron-deselect="onItemDeselected_">
  <template id="topMenuRepeat" is="dom-repeat" items="[[menuItems_]]">
    <os-settings-menu-item path="[[item.path]]" icon="[[item.icon]]" label="[[item.label]]" sublabel="[[item.sublabel]]" tooltip-position="[[getMenuItemTooltipPosition_(isRtl_)]]">
    </os-settings-menu-item>
  </template>
</iron-selector>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const{Section:Section}=routesMojom;function capitalize(str){const firstChar=str.charAt(0).toLocaleUpperCase();const remainingStr=str.slice(1);return`${firstChar}${remainingStr}`}function getPrioritizedConnectedNetwork(networkStateList){const orderedNetworkTypes=[NetworkType.kEthernet,NetworkType.kWiFi,NetworkType.kCellular,NetworkType.kTether,NetworkType.kVPN];const networkStates={};for(const networkType of orderedNetworkTypes){networkStates[networkType]=[]}for(const networkState of networkStateList){networkStates[networkState.type].push(networkState)}for(const type of orderedNetworkTypes){for(const networkState of networkStates[type]){if(OncMojo.connectionStateIsConnected(networkState.connectionState)){return networkState}}}return null}const OsSettingsMenuElementBase=mixinBehaviors([NetworkListenerBehavior],WebUiListenerMixin(RouteObserverMixin(I18nMixin(PolymerElement))));class OsSettingsMenuElement extends OsSettingsMenuElementBase{static get is(){return"os-settings-menu"}static get template(){return getTemplate$18()}static get properties(){return{pageAvailability:{type:Object},isDrawerMenu:{type:Boolean,value:false},menuItems_:{type:Array,computed:"computeMenuItems_(pageAvailability.*,"+"accountsMenuItemDescription_,"+"bluetoothMenuItemDescription_,"+"deviceMenuItemDescription_,"+"internetMenuItemDescription_,"+"multideviceMenuItemDescription_)",readOnly:true},selectedItemPath_:{type:String,value:""},accountsMenuItemDescription_:{type:String,value(){return this.i18n("primaryUserEmail")}},bluetoothMenuItemDescription_:{type:String,value:""},hasKeyboard_:Boolean,hasMouse_:Boolean,hasPointingStick_:Boolean,hasTouchpad_:Boolean,deviceMenuItemDescription_:{type:String,value:"",computed:"computeDeviceMenuItemDescription_(hasKeyboard_,"+"hasMouse_, hasPointingStick_, hasTouchpad_)"},multideviceMenuItemDescription_:{type:String,value:""},internetMenuItemDescription_:{type:String,value:""},isRtl_:{type:Boolean,value:false}}}constructor(){super();this.isInputDeviceSettingsSplitEnabled_=isInputDeviceSettingsSplitEnabled();if(this.isInputDeviceSettingsSplitEnabled_){this.inputDeviceSettingsProvider_=getInputDeviceSettingsProvider()}else{this.devicePageBrowserProxy_=DevicePageBrowserProxyImpl.getInstance()}this.multideviceBrowserProxy_=MultiDeviceBrowserProxyImpl.getInstance()}connectedCallback(){super.connectedCallback();if(this.pageAvailability[Section.kPeople]){this.updateAccountsMenuItemDescription_();this.addWebUiListener("accounts-changed",this.updateAccountsMenuItemDescription_.bind(this))}this.observeBluetoothProperties_();if(this.isInputDeviceSettingsSplitEnabled_){this.observeKeyboardSettings_();this.observeMouseSettings_();this.observePointingStickSettings_();this.observeTouchpadSettings_()}else{this.hasKeyboard_=true;this.addWebUiListener("has-mouse-changed",this.set.bind(this,"hasMouse_"));this.addWebUiListener("has-pointing-stick-changed",this.set.bind(this,"hasPointingStick_"));this.addWebUiListener("has-touchpad-changed",this.set.bind(this,"hasTouchpad_"));this.devicePageBrowserProxy_.initializePointers()}this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();this.computeIsDeviceCellularCapable_().then((()=>{this.updateInternetMenuItemDescription_()}));if(this.pageAvailability[Section.kMultiDevice]){this.addWebUiListener("settings.updateMultidevicePageContentData",this.updateMultideviceMenuItemDescription_.bind(this));this.multideviceBrowserProxy_.getPageContentData().then(this.updateMultideviceMenuItemDescription_.bind(this))}this.isRtl_=window.getComputedStyle(this).direction==="rtl"}disconnectedCallback(){super.disconnectedCallback();this.bluetoothPropertiesObserverReceiver_?.$.close();this.keyboardSettingsObserverReceiver_?.$.close();this.mouseSettingsObserverReceiver_?.$.close();this.pointingStickSettingsObserverReceiver_?.$.close();this.touchpadSettingsObserverReceiver_?.$.close()}ready(){super.ready();this.$.topMenuRepeat.render()}currentRouteChanged(newRoute){this.setSelectedItemPathForRoute_(newRoute)}setSelectedItemPathForRoute_(route){const sectionAncestorRoute=route.getSectionAncestor();if(sectionAncestorRoute){const menuItems=this.shadowRoot.querySelectorAll("os-settings-menu-item");for(const menuItem of menuItems){if(sectionAncestorRoute.path===menuItem.path){this.setSelectedItemPath_(menuItem.path);return}}}this.setSelectedItemPath_("")}computeMenuItems_(){const menuItems=[{section:Section.kNetwork,path:`/${NETWORK_SECTION_PATH}`,icon:"os-settings:network-wifi",label:this.i18n("internetPageTitle"),sublabel:this.internetMenuItemDescription_},{section:Section.kBluetooth,path:`/${BLUETOOTH_SECTION_PATH}`,icon:"cr:bluetooth",label:this.i18n("bluetoothPageTitle"),sublabel:this.bluetoothMenuItemDescription_},{section:Section.kMultiDevice,path:`/${MULTI_DEVICE_SECTION_PATH}`,icon:"os-settings:connected-devices",label:this.i18n("multidevicePageTitle"),sublabel:this.multideviceMenuItemDescription_},{section:Section.kPeople,path:`/${PEOPLE_SECTION_PATH}`,icon:"os-settings:account",label:this.i18n("osPeoplePageTitle"),sublabel:this.accountsMenuItemDescription_},{section:Section.kKerberos,path:`/${KERBEROS_SECTION_PATH}`,icon:"os-settings:auth-key",label:this.i18n("kerberosPageTitle"),sublabel:null},{section:Section.kDevice,path:`/${DEVICE_SECTION_PATH}`,icon:"os-settings:laptop-chromebook",label:this.i18n("devicePageTitle"),sublabel:this.deviceMenuItemDescription_},{section:Section.kPersonalization,path:`/${PERSONALIZATION_SECTION_PATH}`,icon:"os-settings:personalization-menu",label:this.i18n("personalizationPageTitle"),sublabel:this.i18n("personalizationMenuItemDescription")},{section:Section.kPrivacyAndSecurity,path:`/${PRIVACY_AND_SECURITY_SECTION_PATH}`,icon:"cr:security",label:this.i18n("privacyPageTitle"),sublabel:this.i18n("privacyMenuItemDescription")},{section:Section.kApps,path:`/${APPS_SECTION_PATH}`,icon:"os-settings:apps",label:this.i18n("appsPageTitle"),sublabel:androidAppsVisible()?this.i18n("appsMenuItemDescription"):this.i18n("appsmenuItemDescriptionArcUnavailable")},{section:Section.kAccessibility,path:`/${ACCESSIBILITY_SECTION_PATH}`,icon:"os-settings:accessibility",label:this.i18n("a11yPageTitle"),sublabel:this.i18n("a11yMenuItemDescription")},{section:Section.kSystemPreferences,path:`/${SYSTEM_PREFERENCES_SECTION_PATH}`,icon:"os-settings:system-preferences",label:this.i18n("systemPreferencesTitle"),sublabel:this.i18n("systemPreferencesMenuItemDescription")},{section:Section.kAboutChromeOs,path:`/${ABOUT_CHROME_OS_SECTION_PATH}`,icon:"os-settings:chrome",label:this.i18n("aboutOsPageTitle"),sublabel:this.i18n("aboutChromeOsMenuItemDescription")}];return menuItems.filter((({section:section})=>!!this.pageAvailability[section]))}setSelectedItemPath_(path){this.selectedItemPath_=path}onItemActivated_(event){this.setSelectedItemPath_(event.detail.selected)}onItemSelected_(e){e.detail.item.setAttribute("aria-current","true")}onItemDeselected_(e){e.detail.item.removeAttribute("aria-current")}arrowState_(opened){return opened?"cr:arrow-drop-up":"cr:arrow-drop-down"}boolToString_(bool){return bool.toString()}getMenuItemTooltipPosition_(){if(this.isDrawerMenu){return"bottom"}return this.isRtl_?"left":"right"}async updateAccountsMenuItemDescription_(){const accounts=await AccountManagerBrowserProxyImpl.getInstance().getAccounts();if(accounts.length>1){this.accountsMenuItemDescription_=this.i18n("accountsMenuItemDescription",accounts.length);return}const deviceAccount=accounts.find((account=>account.isDeviceAccount));assertExists(deviceAccount,"No device account found.");this.accountsMenuItemDescription_=deviceAccount.email}observeBluetoothProperties_(){this.bluetoothPropertiesObserverReceiver_=new SystemPropertiesObserverReceiver(this);getBluetoothConfig().observeSystemProperties(this.bluetoothPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote())}onPropertiesUpdated(properties){const isBluetoothOn=properties.systemState===BluetoothSystemState.kEnabled||properties.systemState===BluetoothSystemState.kEnabling;const connectedDevices=properties.pairedDevices.filter((device=>device.deviceProperties.connectionState===DeviceConnectionState.kConnected));this.updateBluetoothMenuItemDescription_(isBluetoothOn,connectedDevices)}updateBluetoothMenuItemDescription_(isBluetoothOn,connectedDevices){if(connectedDevices.length===0){this.bluetoothMenuItemDescription_=isBluetoothOn?this.i18n("deviceOn"):this.i18n("deviceOff");return}if(connectedDevices.length===1){const device=castExists(connectedDevices[0]);this.bluetoothMenuItemDescription_=getDeviceNameUnsafe(device);return}this.bluetoothMenuItemDescription_=this.i18n("bluetoothMenuItemDescriptionMultipleDevicesConnected",connectedDevices.length)}onNetworkStateListChanged(){this.updateInternetMenuItemDescription_()}onDeviceStateListChanged(){this.updateInternetMenuItemDescription_()}onActiveNetworksChanged(){this.updateInternetMenuItemDescription_()}async computeIsDeviceCellularCapable_(){const{result:deviceStateList}=await this.networkConfig_.getDeviceStateList();const cellularDeviceState=deviceStateList.find((deviceState=>deviceState.type===NetworkType.kCellular));this.isDeviceCellularCapable_=!!cellularDeviceState}async isInstantHotspotAvailable_(){const{result:deviceStateList}=await this.networkConfig_.getDeviceStateList();const tetherDeviceState=deviceStateList.find((deviceState=>deviceState.type===NetworkType.kTether));return!!tetherDeviceState}async updateInternetMenuItemDescription_(){const{result:networkStateList}=await this.networkConfig_.getNetworkStateList({filter:FilterType.kVisible,limit:NO_LIMIT,networkType:NetworkType.kAll});const prioritizedConnectedNetwork=getPrioritizedConnectedNetwork(networkStateList);if(prioritizedConnectedNetwork){this.internetMenuItemDescription_=prioritizedConnectedNetwork.name;return}const tetherNetworkState=networkStateList.find((networkState=>networkState.type===NetworkType.kTether));if(tetherNetworkState&&await this.isInstantHotspotAvailable_()){this.internetMenuItemDescription_=this.i18n("internetMenuItemDescriptionInstantHotspotAvailable");return}if(this.isDeviceCellularCapable_){this.internetMenuItemDescription_=this.i18n("internetMenuItemDescriptionWifiAndMobileData");return}this.internetMenuItemDescription_=this.i18n("internetMenuItemDescriptionWifi")}updateMultideviceMenuItemDescription_(pageContentData){if(pageContentData.mode===MultiDeviceSettingsMode.HOST_SET_VERIFIED){if(pageContentData.hostDeviceName){this.multideviceMenuItemDescription_=this.i18n("multideviceMenuItemDescriptionPhoneConnected",pageContentData.hostDeviceName)}else{this.multideviceMenuItemDescription_=this.i18n("multideviceMenuItemDescriptionDeviceNameMissing")}return}this.multideviceMenuItemDescription_=this.i18n("multideviceMenuItemDescription")}observeKeyboardSettings_(){if(this.inputDeviceSettingsProvider_ instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider_.observeKeyboardSettings(this);return}this.keyboardSettingsObserverReceiver_=new KeyboardSettingsObserverReceiver(this);this.inputDeviceSettingsProvider_.observeKeyboardSettings(this.keyboardSettingsObserverReceiver_.$.bindNewPipeAndPassRemote())}onKeyboardListUpdated(keyboards){this.hasKeyboard_=keyboards.length>0}onKeyboardPoliciesUpdated(){}observeMouseSettings_(){if(this.inputDeviceSettingsProvider_ instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider_.observeMouseSettings(this);return}this.mouseSettingsObserverReceiver_=new MouseSettingsObserverReceiver(this);this.inputDeviceSettingsProvider_.observeMouseSettings(this.mouseSettingsObserverReceiver_.$.bindNewPipeAndPassRemote())}onMouseListUpdated(mice){this.hasMouse_=mice.length>0}onMousePoliciesUpdated(){}observePointingStickSettings_(){if(this.inputDeviceSettingsProvider_ instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider_.observePointingStickSettings(this);return}this.pointingStickSettingsObserverReceiver_=new PointingStickSettingsObserverReceiver(this);this.inputDeviceSettingsProvider_.observePointingStickSettings(this.pointingStickSettingsObserverReceiver_.$.bindNewPipeAndPassRemote())}onPointingStickListUpdated(pointingSticks){this.hasPointingStick_=pointingSticks.length>0}observeTouchpadSettings_(){if(this.inputDeviceSettingsProvider_ instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider_.observeTouchpadSettings(this);return}this.touchpadSettingsObserverReceiver_=new TouchpadSettingsObserverReceiver(this);this.inputDeviceSettingsProvider_.observeTouchpadSettings(this.touchpadSettingsObserverReceiver_.$.bindNewPipeAndPassRemote())}onTouchpadListUpdated(touchpads){this.hasTouchpad_=touchpads.length>0}computeDeviceMenuItemDescription_(){const wordOptions=[];if(this.hasKeyboard_){wordOptions.push(this.i18n("deviceMenuItemDescriptionKeyboard"))}if(this.hasMouse_||this.hasPointingStick_){wordOptions.push(this.i18n("deviceMenuItemDescriptionMouse"))}else if(this.hasTouchpad_){wordOptions.push(this.i18n("deviceMenuItemDescriptionTouchpad"))}wordOptions.push(this.i18n("deviceMenuItemDescriptionPrint"),this.i18n("deviceMenuItemDescriptionDisplay"));const words=wordOptions.slice(0,3);return capitalize(words.join(this.i18n("listSeparator")))}}customElements.define(OsSettingsMenuElement.is,OsSettingsMenuElement);function getTemplate$17(){return html`<!--_html_template_start_-->    <style>:host{align-items:center;border-top:1px solid var(--cr-separator-color);color:var(--cr-secondary-text-color);display:none;font-size:.8125rem;justify-content:center;padding:0 24px}:host([is-managed_]){display:flex}a[href]{color:var(--cr-link-color)}iron-icon{align-self:flex-start;flex-shrink:0;height:20px;padding-inline-end:var(--managed-footnote-icon-padding,8px);width:20px}</style>

    <template is="dom-if" if="[[isManaged_]]">
      <iron-icon icon="[[managedByIcon_]]"></iron-icon>
      <div id="content" inner-h-t-m-l="[[getManagementString_(showDeviceInfo)]]">
      </div>
    </template>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ManagedFootnoteElementBase=I18nMixin(WebUiListenerMixin(PolymerElement));class ManagedFootnoteElement extends ManagedFootnoteElementBase{static get is(){return"managed-footnote"}static get template(){return getTemplate$17()}static get properties(){return{isManaged_:{reflectToAttribute:true,type:Boolean,value(){return loadTimeData.getBoolean("isManaged")}},showDeviceInfo:{type:Boolean,value:false},managedByIcon_:{reflectToAttribute:true,type:String,value(){return loadTimeData.getString("managedByIcon")}}}}ready(){super.ready();this.addWebUiListener("is-managed-changed",(managed=>{loadTimeData.overrideValues({isManaged:managed});this.isManaged_=managed}))}getManagementString_(){if(this.showDeviceInfo){return this.i18nAdvanced("deviceManagedByOrg")}return this.i18nAdvanced("browserManagedByOrg")}}customElements.define(ManagedFootnoteElement.is,ManagedFootnoteElement);chrome.send("observeManagedUI");function getTemplate$16(){return html`<!--_html_template_start_--><style include="settings-shared">cr-link-row:not(:last-of-type){border-bottom:var(--cr-separator-line)}.restore-defaults-button{border-radius:16px;height:32px;margin-inline:16px}.restore-defaults-icon{--iron-icon-fill-color:currentColor;margin-inline-end:8px}</style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <div id="main" route-path="default">
    <settings-card header-text="Device">
      <template is="dom-if" if="[[showPointersRow_(hasMouse_, hasPointingStick_,
                                hasTouchpad_, isDeviceSettingsSplitEnabled_)]]">
        <cr-link-row id="pointersRow" start-icon="os-settings:device-pointing-stick" label="[[getPointersTitle_(hasMouse_, hasPointingStick_,
                                      hasTouchpad_)]]" on-click="onPointersClick_" role-description="Subpage button">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[showPerDeviceMouseRow_(mice,
                                      isDeviceSettingsSplitEnabled_)]]">
        <cr-link-row id="perDeviceMouseRow" start-icon="os-settings:device-mouse" label="Mouse" on-click="onPerDeviceMouseClick_" aria-label="Mouse" role-description="Subpage button">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[showPerDeviceTouchpadRow_(touchpads,
                                          isDeviceSettingsSplitEnabled_)]]">
        <cr-link-row id="perDeviceTouchpadRow" start-icon="os-settings:device-touchpad" aria-label="Touchpad" label="Touchpad" on-click="onPerDeviceTouchpadClick_" role-description="Subpage button">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[showPerDevicePointingStickRow_(pointingSticks,
                                              isDeviceSettingsSplitEnabled_)]]">
        <cr-link-row id="perDevicePointingStickRow" start-icon="os-settings:device-pointing-stick" aria-label="TrackPoint" label="TrackPoint" on-click="onPerDevicePointingStickClick_" role-description="Subpage button">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[isDeviceSettingsSplitEnabled_]]">
        <cr-link-row id="perDeviceKeyboardRow" start-icon="os-settings:device-keyboard" label="Keyboard and inputs" aria-label="Keyboard and inputs" sub-label="[[inputMethodDisplayName_]]" on-click="onPerDeviceKeyboardClick_" role-description="Subpage button">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[!isDeviceSettingsSplitEnabled_]]">
        <cr-link-row id="keyboardRow" start-icon="os-settings:device-keyboard" label="Keyboard and inputs" sub-label="[[inputMethodDisplayName_]]" on-click="onKeyboardClick_" role-description="Subpage button">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[hasStylus_]]">
        <cr-link-row id="stylusRow" start-icon="os-settings:device-stylus" label="Stylus" on-click="onStylusClick_" role-description="Subpage button">
        </cr-link-row>
      </template>
      <template is="dom-if" if="[[showGraphicsTabletRow_(graphicsTablets,
          isPeripheralCustomizationEnabled)]]">
        <cr-link-row id="tabletRow" start-icon="os-settings:device-tablet" label="Pen tablet" on-click="onGraphicsTabletClick" role-description="Subpage button">
        </cr-link-row>
      </template>
      <cr-link-row id="displayRow" start-icon="os-settings:device-display" label="Display" on-click="onDisplayClick_" role-description="Subpage button">
      </cr-link-row>
      <cr-link-row id="audioRow" start-icon="os-settings:device-audio" label="Audio" on-click="onAudioClick_" role-description="Subpage button">
      </cr-link-row>
    </settings-card>

    <printing-settings-card></printing-settings-card>
  </div>

  <template is="dom-if" route-path="/pointer-overlay">
    <os-settings-subpage page-title="[[getPointersTitle_(hasMouse_, hasPointingStick_,
                                        hasTouchpad_)]]">
      <settings-pointers prefs="{{prefs}}" has-mouse="[[hasMouse_]]" has-pointing-stick="[[hasPointingStick_]]" has-touchpad="[[hasTouchpad_]]" has-haptic-touchpad="[[hasHapticTouchpad_]]">
      </settings-pointers>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-mouse">
    <os-settings-subpage page-title="Mouse">
      <settings-per-device-mouse mice="[[mice]]" mouse-policies="[[mousePolicies]]">
      </settings-per-device-mouse>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-keyboard">
    <os-settings-subpage page-title="Keyboard and inputs">
      <settings-per-device-keyboard prefs="{{prefs}}" keyboards="[[keyboards]]" keyboard-policies="[[keyboardPolicies]]">
      </settings-per-device-keyboard>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-touchpad">
    <os-settings-subpage page-title="Touchpad">
      <settings-per-device-touchpad touchpads="[[touchpads]]" prefs="{{prefs}}">
      </settings-per-device-touchpad>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-pointing-stick">
    <os-settings-subpage page-title="TrackPoint">
      <settings-per-device-pointing-stick pointing-sticks="[[pointingSticks]]">
      </settings-per-device-pointing-stick>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/keyboard-overlay">
    <os-settings-subpage page-title="Keyboard and inputs">
      <settings-keyboard prefs="{{prefs}}">
      </settings-keyboard>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/stylus">
    <os-settings-subpage page-title="Stylus">
      <settings-stylus prefs="{{prefs}}"></settings-stylus>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/graphics-tablet">
    <os-settings-subpage page-title="Pen tablet">
      <settings-graphics-tablet-subpage graphics-tablets="[[graphicsTablets]]">
      </settings-graphics-tablet-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/graphics-tablet/customizeTabletButtons">
    <os-settings-subpage id="customizeTabletButtonsSubpage" page-title="Customize tablet buttons">
      <settings-customize-tablet-buttons-subpage graphics-tablets="[[graphicsTablets]]">
      </settings-customize-tablet-buttons-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/graphics-tablet/customizePenButtons">
    <os-settings-subpage id="customizePenButtonsSubpage" page-title="Customize pen buttons">
      <settings-customize-pen-buttons-subpage graphics-tablets="[[graphicsTablets]]">
      </settings-customize-pen-buttons-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/display">
    <os-settings-subpage page-title="Display">
      <settings-display prefs="{{prefs}}"></settings-display>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/audio">
    <os-settings-subpage page-title="Audio">
      <settings-audio prefs="{{prefs}}">
      </settings-audio>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-keyboard/remap-keys">
    <os-settings-subpage id="perDeviceKeyboardRemapKeysRow" page-title="Customize keyboard keys">
        <cr-button id="restoreDefaultsButton" slot="subpage-title-extra" on-click="restoreDefaults" class="restore-defaults-button">
        <iron-icon icon="os-settings:refresh" class="restore-defaults-icon">
        </iron-icon>
        <span>Reset keys</span>
    </cr-button>
      <settings-per-device-keyboard-remap-keys keyboards="[[keyboards]]" keyboard-policies="[[keyboardPolicies]]" id="remap-keys">
      </settings-per-device-keyboard-remap-keys>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/per-device-mouse/customizeButtons">
    <os-settings-subpage id="customizeMouseButtonsRow" page-title="Customize mouse buttons">
      <settings-customize-mouse-buttons-subpage mouse-list="[[mice]]" mouse-policies="[[mousePolicies]]">
      </settings-customize-mouse-buttons-subpage>
    </os-settings-subpage>
  </template>

  
  <template is="dom-if" route-path="/osLanguages/input">
    <os-settings-subpage page-title="Inputs">
      <os-settings-input-page prefs="{{prefs}}" languages="[[languages]]" language-helper="[[languageHelper]]">
      </os-settings-input-page>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/osLanguages/inputMethodOptions">
    <os-settings-subpage>
      <settings-input-method-options-page prefs="{{prefs}}" language-helper="[[languageHelper]]">
      </settings-input-method-options-page>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/osLanguages/editDictionary">
    <os-settings-subpage page-title="Customize spell check">
      <os-settings-edit-dictionary-page></os-settings-edit-dictionary-page>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/osLanguages/japaneseManageUserDictionary">
    <os-settings-subpage page-title="User dictionaries">
      <os-settings-japanese-manage-user-dictionary-page>
      </os-settings-japanese-manage-user-dictionary-page>
    </os-settings-subpage>
  </template>

  
  <template is="dom-if" route-path="/cupsPrinters">
    <os-settings-subpage page-title="Print" search-label="Search printers" search-term="{{searchTerm}}">
      <settings-cups-printers search-term="{{searchTerm}}" prefs="{{prefs}}">
      </settings-cups-printers>
    </os-settings-subpage>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsDevicePageElementBase=RouteOriginMixin(I18nMixin(WebUiListenerMixin(PolymerElement)));class SettingsDevicePageElement extends SettingsDevicePageElementBase{static get is(){return"settings-device-page"}static get template(){return getTemplate$16()}static get properties(){return{prefs:{type:Object,notify:true},section_:{type:Number,value:Section$1.kDevice,readOnly:true},hasMouse_:Boolean,hasPointingStick_:Boolean,hasTouchpad_:Boolean,hasHapticTouchpad_:Boolean,hasStylus_:{type:Boolean,value:false},isDeviceSettingsSplitEnabled_:{type:Boolean,value(){return isInputDeviceSettingsSplitEnabled()},readOnly:true},isPeripheralCustomizationEnabled:{type:Boolean,value(){return loadTimeData.getBoolean("enablePeripheralCustomization")},readOnly:true},isExternalStorageEnabled_:{type:Boolean,value(){return isExternalStorageEnabled()}},pointingSticks:{type:Array},keyboards:{type:Array},keyboardPolicies:{type:Object},touchpads:{type:Array},mice:{type:Array},mousePolicies:{type:Object},graphicsTablets:{type:Array},languages:Object,languageHelper:Object,inputMethodDisplayName_:{type:String,computed:"computeInputMethodDisplayName_("+"languages.inputMethods.currentId, languageHelper)"}}}static get observers(){return["pointersChanged_(hasMouse_, hasPointingStick_, hasTouchpad_)","mouseChanged_(mice)","touchpadChanged_(touchpads)","pointingStickChanged_(pointingSticks)","graphicsTabletChanged_(graphicsTablets)"]}constructor(){super();this.route=routes.DEVICE;this.browserProxy_=DevicePageBrowserProxyImpl.getInstance();if(this.isDeviceSettingsSplitEnabled_){this.inputDeviceSettingsProvider=getInputDeviceSettingsProvider();this.observePointingStickSettings();this.observeKeyboardSettings();this.observeTouchpadSettings();this.observeMouseSettings();if(this.isPeripheralCustomizationEnabled){this.observeGraphicsTabletSettings()}}}connectedCallback(){super.connectedCallback();if(!this.isDeviceSettingsSplitEnabled_){this.addWebUiListener("has-mouse-changed",this.set.bind(this,"hasMouse_"));this.addWebUiListener("has-pointing-stick-changed",this.set.bind(this,"hasPointingStick_"));this.addWebUiListener("has-touchpad-changed",this.set.bind(this,"hasTouchpad_"));this.addWebUiListener("has-haptic-touchpad-changed",this.set.bind(this,"hasHapticTouchpad_"));this.browserProxy_.initializePointers()}this.addWebUiListener("has-stylus-changed",this.set.bind(this,"hasStylus_"));this.browserProxy_.initializeStylus();this.addWebUiListener("storage-android-enabled-changed",this.set.bind(this,"isExternalStorageEnabled_"));this.browserProxy_.updateAndroidEnabled()}ready(){super.ready();this.addFocusConfig(routes.POINTERS,"#pointersRow");this.addFocusConfig(routes.PER_DEVICE_MOUSE,"#perDeviceMouseRow");this.addFocusConfig(routes.PER_DEVICE_TOUCHPAD,"#perDeviceTouchpadRow");this.addFocusConfig(routes.PER_DEVICE_POINTING_STICK,"#perDevicePointingStickRow");this.addFocusConfig(routes.PER_DEVICE_KEYBOARD,"#perDeviceKeyboardRow");this.addFocusConfig(routes.PER_DEVICE_KEYBOARD_REMAP_KEYS,"#perDeviceKeyboardRemapKeysRow");this.addFocusConfig(routes.KEYBOARD,"#keyboardRow");this.addFocusConfig(routes.STYLUS,"#stylusRow");this.addFocusConfig(routes.DISPLAY,"#displayRow");this.addFocusConfig(routes.AUDIO,"#audioRow");this.addFocusConfig(routes.GRAPHICS_TABLET,"#tabletRow");this.addFocusConfig(routes.CUSTOMIZE_MOUSE_BUTTONS,"#customizeMouseButtonsRow");this.addFocusConfig(routes.CUSTOMIZE_TABLET_BUTTONS,"#customizeTabletButtonsSubpage");this.addFocusConfig(routes.CUSTOMIZE_PEN_BUTTONS,"#customizePenButtonsSubpage")}observePointingStickSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observePointingStickSettings(this);return}this.pointingStickSettingsObserverReceiver=new PointingStickSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observePointingStickSettings(this.pointingStickSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onPointingStickListUpdated(pointingSticks){this.pointingSticks=pointingSticks}observeKeyboardSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observeKeyboardSettings(this);return}this.keyboardSettingsObserverReceiver=new KeyboardSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observeKeyboardSettings(this.keyboardSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onKeyboardListUpdated(keyboards){this.keyboards=keyboards}onKeyboardPoliciesUpdated(keyboardPolicies){this.keyboardPolicies=keyboardPolicies}observeTouchpadSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observeTouchpadSettings(this);return}this.touchpadSettingsObserverReceiver=new TouchpadSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observeTouchpadSettings(this.touchpadSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onTouchpadListUpdated(touchpads){this.touchpads=touchpads}observeMouseSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observeMouseSettings(this);return}this.mouseSettingsObserverReceiver=new MouseSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observeMouseSettings(this.mouseSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onMouseListUpdated(mice){this.mice=mice}onMousePoliciesUpdated(mousePolicies){this.mousePolicies=mousePolicies}observeGraphicsTabletSettings(){if(this.inputDeviceSettingsProvider instanceof FakeInputDeviceSettingsProvider){this.inputDeviceSettingsProvider.observeGraphicsTabletSettings(this);return}this.graphicsTabletSettingsObserverReceiver=new GraphicsTabletSettingsObserverReceiver(this);this.inputDeviceSettingsProvider.observeGraphicsTabletSettings(this.graphicsTabletSettingsObserverReceiver.$.bindNewPipeAndPassRemote())}onGraphicsTabletListUpdated(graphicsTablets){this.graphicsTablets=graphicsTablets}getPointersTitle_(){const hasMouseOrPointingStick=this.hasMouse_||this.hasPointingStick_;if(hasMouseOrPointingStick&&this.hasTouchpad_){return this.i18n("mouseAndTouchpadTitle")}if(hasMouseOrPointingStick){return this.i18n("mouseTitle")}if(this.hasTouchpad_){return this.i18n("touchpadTitle")}return""}onPointersClick_(){Router.getInstance().navigateTo(routes.POINTERS)}onPerDeviceKeyboardClick_(){Router.getInstance().navigateTo(routes.PER_DEVICE_KEYBOARD)}onPerDeviceMouseClick_(){Router.getInstance().navigateTo(routes.PER_DEVICE_MOUSE)}onPerDeviceTouchpadClick_(){Router.getInstance().navigateTo(routes.PER_DEVICE_TOUCHPAD)}onPerDevicePointingStickClick_(){Router.getInstance().navigateTo(routes.PER_DEVICE_POINTING_STICK)}onKeyboardClick_(){Router.getInstance().navigateTo(routes.KEYBOARD)}onStylusClick_(){Router.getInstance().navigateTo(routes.STYLUS)}onGraphicsTabletClick(){Router.getInstance().navigateTo(routes.GRAPHICS_TABLET)}onDisplayClick_(){Router.getInstance().navigateTo(routes.DISPLAY)}onAudioClick_(){Router.getInstance().navigateTo(routes.AUDIO)}onStorageClick_(){Router.getInstance().navigateTo(routes.STORAGE)}onPowerClick_(){Router.getInstance().navigateTo(routes.POWER)}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);this.checkPointerSubpage_()}pointersChanged_(){this.checkPointerSubpage_()}mouseChanged_(){if((!this.mice||this.mice.length===0)&&Router.getInstance().currentRoute===routes.PER_DEVICE_MOUSE){getInstance().announce(this.i18n("allMiceDisconnectedA11yLabel"));Router.getInstance().navigateTo(routes.DEVICE)}}touchpadChanged_(){if((!this.touchpads||this.touchpads.length===0)&&Router.getInstance().currentRoute===routes.PER_DEVICE_TOUCHPAD){getInstance().announce(this.i18n("allTouchpadsDisconnectedA11yLabel"));Router.getInstance().navigateTo(routes.DEVICE)}}pointingStickChanged_(){if((!this.pointingSticks||this.pointingSticks.length===0)&&Router.getInstance().currentRoute===routes.PER_DEVICE_POINTING_STICK){getInstance().announce(this.i18n("allPointingSticksDisconnectedA11yLabel"));Router.getInstance().navigateTo(routes.DEVICE)}}graphicsTabletChanged_(){if((!this.graphicsTablets||this.graphicsTablets.length===0)&&Router.getInstance().currentRoute===routes.GRAPHICS_TABLET){getInstance().announce(this.i18n("allGraphicsTabletsDisconnectedA11yLabel"));Router.getInstance().navigateTo(routes.DEVICE)}}showPointersRow_(){return(this.hasMouse_||this.hasTouchpad_||this.hasPointingStick_)&&!this.isDeviceSettingsSplitEnabled_}showPerDeviceMouseRow_(){return this.isDeviceSettingsSplitEnabled_&&this.mice&&this.mice.length!==0}showPerDeviceTouchpadRow_(touchpads){return this.isDeviceSettingsSplitEnabled_&&touchpads&&touchpads.length!==0}showPerDevicePointingStickRow_(){return this.isDeviceSettingsSplitEnabled_&&this.pointingSticks&&this.pointingSticks.length!==0}showGraphicsTabletRow_(){return this.isPeripheralCustomizationEnabled&&this.graphicsTablets&&this.graphicsTablets.length!==0}restoreDefaults(){const remapKeysPage=this.shadowRoot.querySelector("#remap-keys");remapKeysPage.restoreDefaults()}checkPointerSubpage_(){if(this.hasMouse_===false&&this.hasPointingStick_===false&&this.hasTouchpad_===false&&Router.getInstance().currentRoute===routes.POINTERS){Router.getInstance().navigateTo(routes.DEVICE)}}computeInputMethodDisplayName_(){const id=this.languages?.inputMethods?.currentId;if(!id||!this.languageHelper){return""}if(id===ACCESSIBILITY_COMMON_IME_ID){return""}return this.languageHelper.getInputMethodDisplayName(id)}}customElements.define(SettingsDevicePageElement.is,SettingsDevicePageElement);const template$1=html`

<iron-iconset-svg name="cellular-setup" size="20">
  <svg>
    <defs>
        <g id="camera" viewBox="0 0 20 20"><mask id="a" maskUnits="userSpaceOnUse" x="1" y="2" width="18" height="16"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.667 4.167h-2.642L12.5 2.5h-5L5.975 4.167H3.334c-.917 0-1.667.75-1.667 1.666v10c0 .917.75 1.667 1.667 1.667h13.333c.917 0 1.667-.75 1.667-1.667v-10c0-.916-.75-1.666-1.667-1.666zm0 11.666H3.334v-10h13.333v10zm-10-5A3.332 3.332 0 1 1 10 14.166a3.332 3.332 0 0 1-3.333-3.333z" fill="#fff"></path></mask><g mask="url(#a)"><path d="M0 0h20v20H0z"></path></g></g>
        <g id="checked" viewBox="0 0 20 20"><path d="M13.707 7.293a1 1 0 0 0-1.414 0L9 10.586 7.707 9.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-2a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></g>
        <g id="error" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M9 10h2V6H9v4zm1-8c-4.416 0-8 3.584-8 8s3.584 8 8 8 8-3.584 8-8-3.584-8-8-8zm0 14c-3.308 0-6-2.693-6-6 0-3.308 2.692-6 6-6 3.307 0 6 2.692 6 6 0 3.307-2.693 6-6 6zm-1-2h2v-2H9v2z"></path></g>
        <g id="switch-camera" viewBox="0 0 20 20"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 9V7H4.802A5.996 5.996 0 0 1 10 4a6 6 0 0 1 5.917 5h2.021c-.491-3.945-3.853-7-7.93-7a7.992 7.992 0 0 0-6.009 2.712L4 3H2v6h5zm5.938 2v2h2.198a5.996 5.996 0 0 1-5.198 3 6 6 0 0 1-5.917-5H2c.492 3.945 3.853 7 7.93 7a7.992 7.992 0 0 0 6.009-2.712V17h2v-6h-5zM10 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path></g>
        <g id="try-again" viewBox="0 0 20 20"><path path fill-rule="evenodd" clip-rule="evenodd" d="M10 3C6.136 3 3 6.136 3 10C3 13.864 6.136 17 10 17C12.1865 17 14.1399 15.9959 15.4239 14.4239L13.9984 12.9984C13.0852 14.2129 11.6325 15 10 15C7.24375 15 5 12.7563 5 10C5 7.24375 7.24375 5 10 5C11.6318 5 13.0839 5.78641 13.9972 7H11V9H17V3H15V5.10253C13.7292 3.80529 11.9581 3 10 3Z"></path></g>
        <g id="warning" viewBox="0 0 20 20"><path d="M9 12H11V8H9V12Z"></path><path d="M11 15H9V13H11V15Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M9.13177 2.50386C9.51566 1.83205 10.4844 1.83205 10.8683 2.50386L18.8683 16.5039C19.2492 17.1705 18.7678 18 18 18H2.00001C1.23219 18 0.750823 17.1705 1.13177 16.5039L9.13177 2.50386ZM10 5.01556L3.72321 16H16.2768L10 5.01556Z"></path></g>
        <g id="info" viewBox="0 0 24 24"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
    </defs>
  </svg>
</iron-iconset-svg>


<iron-iconset-svg name="cellular-setup-illo" size="200">
  <svg>
    <defs>
      <g id="error" viewBox="0 0 201 200" fill="none">
        <path d="M122.984 41.38c-25.952 0-46.99 21.015-46.99 46.939s21.038 46.94 46.99 46.94 46.991-21.016 46.991-46.94-21.039-46.94-46.991-46.94Zm0 1.928c24.886 0 45.06 20.152 45.06 45.011s-20.174 45.011-45.06 45.011c-24.886 0-45.06-20.152-45.06-45.011s20.174-45.01 45.06-45.01Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M133.249 89.338h-11.877v11.574h-13.557a.39.39 0 0 1-.272-.668l25.044-24.408a.39.39 0 0 1 .662.28v13.222Zm-1.288 3.1-1.815-1.814-2.691 2.688-2.69-2.688-1.816 1.813 2.691 2.688-2.691 2.688 1.816 1.813 2.69-2.675 2.691 2.675 1.815-1.813-2.677-2.688 2.677-2.688Z" fill="var(--cros-sys-illo-color1-2)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M157.595 158.993c0-13.495-10.951-24.435-24.461-24.435-13.509 0-24.461 10.94-24.461 24.435" fill="var(--cros-sys-illo-secondary)"/><path fill-rule="evenodd" clip-rule="evenodd" d="m48.74 134.835 1.893 2.7a2.532 2.532 0 0 1-.62 3.527l-.002.002-24.851 17.382a2.533 2.533 0 0 1-3.525-.622l-1.893-2.7a2.532 2.532 0 0 1 .62-3.527l.002-.002 24.851-17.382a2.532 2.532 0 0 1 3.525.622Z" fill="var(--cros-sys-illo-color5)"/><path d="M50.548 159.017c4.33.999 8.65-1.697 9.648-6.022.999-4.326-1.702-8.643-6.032-9.642-4.33-1-8.649 1.696-9.647 6.022-.999 4.325 1.701 8.642 6.031 9.642Z" fill="var(--cros-sys-illo-secondary)"/><path d="M68.12 147.061c11.198 0 20.276-9.068 20.276-20.254 0-11.187-9.078-20.255-20.277-20.255-11.198 0-20.276 9.068-20.276 20.255 0 11.186 9.078 20.254 20.276 20.254Z" fill="var(--cros-sys-illo-color3)"/><path d="M69.88 130.279v-.746c0-.617.116-1.14.348-1.569.232-.429.64-.909 1.223-1.44.72-.669 1.296-1.334 1.725-1.994.43-.66.644-1.444.644-2.353 0-.909-.228-1.732-.683-2.469-.454-.738-1.09-1.321-1.905-1.749-.815-.429-1.746-.643-2.794-.643-1.407 0-2.566.394-3.476 1.183-.91.789-1.536 1.697-1.88 2.726l2.473 1.029c.223-.669.57-1.222 1.042-1.659.472-.437 1.095-.656 1.867-.656.807 0 1.442.219 1.906.656.463.437.695.99.695 1.659 0 .549-.133 1.02-.4 1.415-.266.394-.699.857-1.3 1.389-.858.771-1.454 1.448-1.79 2.031-.334.583-.501 1.295-.501 2.135v1.055h2.806Zm-1.416 6.018a1.82 1.82 0 0 0 1.352-.565c.369-.378.553-.832.553-1.364 0-.531-.184-.986-.553-1.363a1.82 1.82 0 0 0-1.352-.566c-.532 0-.987.185-1.364.553a1.846 1.846 0 0 0-.567 1.376c0 .532.189.986.567 1.364.377.377.832.565 1.364.565Z" fill="var(--cros-sys-illo-base)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M62.197 156.996c-.52.906.13 2.039 1.17 2.039H73.98c1.039 0 1.688-1.133 1.169-2.039l-5.308-9.255a1.346 1.346 0 0 0-2.338 0l-5.307 9.255Z" fill="var(--cros-sys-illo-color4)"/><path d="M191.495 159.035a.965.965 0 0 1 .093 1.925l-.093.004H13.831a.965.965 0 0 1-.093-1.924l.093-.005h177.664Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M97.578 158.993c7.638 0 13.83-6.192 13.83-13.83s-6.192-13.83-13.83-13.83-13.83 6.192-13.83 13.83 6.192 13.83 13.83 13.83Z" fill="var(--cros-sys-illo-color1)"/>
      </g>
      <g id="final-page-success" viewBox="0 0 201 200" fill="none">
        <path d="M100.366 109.293c-23.295 0-42.18 18.794-42.18 41.977 0 23.183 18.885 41.976 42.18 41.976 23.295 0 42.179-18.793 42.179-41.976s-18.884-41.977-42.179-41.977Zm0 1.908c22.236 0 40.262 17.939 40.262 40.069 0 22.129-18.026 40.068-40.262 40.068s-40.262-17.939-40.262-40.068c0-22.13 18.026-40.069 40.262-40.069Z" fill="var(--cros-sys-illo-color1-2)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M72.382 80.903c0 15.456 12.528 27.985 27.984 27.985 15.455 0 27.984-12.53 27.984-27.985" fill="var(--cros-sys-illo-color1-2)"/><path d="M100.366 124.705c-14.784 0-26.768 11.984-26.768 26.768 0 14.783 11.984 26.767 26.768 26.767 14.783 0 26.767-11.984 26.767-26.767 0-14.784-11.984-26.768-26.767-26.768Zm0 2.549c13.375 0 24.218 10.843 24.218 24.219 0 13.375-10.843 24.218-24.218 24.218-13.376 0-24.219-10.843-24.219-24.218 0-13.376 10.843-24.219 24.219-24.219Z" fill="var(--cros-sys-illo-color1)"/><path d="M106.609 138.351h4.995v22.475h-4.995v-22.475Zm-17.48 12.486h4.994v9.989h-4.995v-9.989Zm8.74-6.243h4.994v16.232h-4.994v-16.232Z" fill="var(--cros-sys-illo-color1)"/><path fill-rule="evenodd" clip-rule="evenodd" d="m114.565 49.036 1.13 2.792a2.636 2.636 0 0 1-1.455 3.433l-.003.001-27.656 11.155a2.636 2.636 0 0 1-3.43-1.456l-1.13-2.792a2.636 2.636 0 0 1 1.455-3.433h.003l27.656-11.156a2.637 2.637 0 0 1 3.43 1.456Z" fill="var(--cros-sys-illo-color1)"/><path d="M100.366 50.643c8.96 0 16.223-7.264 16.223-16.223 0-8.96-7.263-16.223-16.223-16.223-8.96 0-16.223 7.263-16.223 16.223 0 8.96 7.263 16.223 16.223 16.223Z" fill="var(--cros-sys-illo-color2)"/><path fill-rule="evenodd" clip-rule="evenodd" d="m101.896 61.021 8.657 8.643c.476.475.477 1.245.002 1.72l-.002.002-8.657 8.643a1.216 1.216 0 0 1-1.719 0l-8.658-8.643a1.217 1.217 0 0 1-.002-1.72l.002-.002 8.658-8.643a1.217 1.217 0 0 1 1.719 0Z" fill="var(--cros-sys-illo-color3)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M94.252 8.37c-.49-.86.123-1.934 1.104-1.934h10.02c.981 0 1.594 1.075 1.103 1.934l-5.01 8.778c-.49.859-1.716.859-2.207 0l-5.01-8.778Z" fill="var(--cros-sys-illo-color6)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M111.439 25.828c.66.5.791 1.44.291 2.1L99.765 43.748a1.5 1.5 0 0 1-2.15.253l-7.03-5.79a1.5 1.5 0 1 1 1.907-2.316l5.824 4.796 11.022-14.57a1.5 1.5 0 0 1 2.101-.292Z" fill="var(--cros-sys-illo-base)"/>
      </g>
      <g id="sim-detect-error" viewBox="0 0 200 200" fill="none">
        <g clip-path="url(#a)"><path d="M250.017 151.141H98.165a6.753 6.753 0 0 1-6.752-6.752V40.862h165.419v103.465a6.764 6.764 0 0 1-1.978 4.837 6.748 6.748 0 0 1-4.837 1.977v0Z" fill="var(--cros-sys-illo-base)" stroke="var(--cros-sys-illo-color1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M149.866 141.888h48.45a2.562 2.562 0 0 0 2.563-2.563v-30.351a2.563 2.563 0 0 0-2.563-2.564h-48.45a2.563 2.563 0 0 0-2.563 2.564v30.351a2.562 2.562 0 0 0 2.563 2.563Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M268.71 44.987H79.473a1.375 1.375 0 0 1-1.376-1.375V40.55a2.688 2.688 0 0 1 2.688-2.688h186.612a2.688 2.688 0 0 1 2.688 2.688v3.063a1.375 1.375 0 0 1-1.375 1.375v0Z" fill="var(--cros-sys-illo-base)" stroke="var(--cros-sys-illo-color1)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M246.641 48.515h-145.1c-.587 0-1.063.505-1.063 1.127v45.68c0 .622.476 1.127 1.063 1.127h145.1c.587 0 1.063-.505 1.063-1.127v-45.68c0-.622-.476-1.127-1.063-1.127Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M68.147 97.994H43.285a1.025 1.025 0 0 1-1.025-1.077V78.155a1.025 1.025 0 0 1 1.025-1.025h19.48l6.408 6.202v13.585a1.024 1.024 0 0 1-1.026 1.077Z" fill="var(--cros-sys-illo-color1)"/><path d="M52.65 89.142H46.5c-.615 0-1.113.498-1.113 1.113v3.796c0 .614.498 1.113 1.113 1.113h6.15c.615 0 1.113-.499 1.113-1.113v-3.796c0-.615-.498-1.113-1.113-1.113Z" fill="var(--cros-sys-illo-base)"/><path d="M52.65 89.142H46.5c-.615 0-1.113.498-1.113 1.113v3.796c0 .614.498 1.113 1.113 1.113h6.15c.615 0 1.113-.499 1.113-1.113v-3.796c0-.615-.498-1.113-1.113-1.113Z" fill="var(--cros-sys-illo-color1-2)"/><path d="M35.852 70.568v34.038" stroke="var(--cros-sys-illo-color1)" stroke-width="4" stroke-linecap="square" stroke-linejoin="round"/><path d="M35.852 73.797H71.12a2.307 2.307 0 0 1 2.307 2.307V99.02a2.307 2.307 0 0 1-2.307 2.307H35.85" stroke="var(--cros-sys-illo-color1)" stroke-width="2" stroke-linejoin="round"/><path d="M54.614 129.674c23.386 0 42.343-18.958 42.343-42.343 0-23.386-18.957-42.344-42.343-42.344-23.385 0-42.343 18.958-42.343 42.344 0 23.385 18.958 42.343 42.343 42.343Z" stroke="var(--cros-sys-illo-base)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M54.614 129.674c23.386 0 42.343-18.958 42.343-42.343 0-23.386-18.957-42.344-42.343-42.344-23.385 0-42.343 18.958-42.343 42.344 0 23.385 18.958 42.343 42.343 42.343Z" stroke="var(--cros-sys-illo-color1-2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="a"><path fill="var(--cros-sys-illo-base)" d="M0 0h200v200H0z"/></clipPath></defs>
      </g>
      <g id="network-setup" viewBox="0 0 448 268" fill="none">
        <path fill="var(--cros-sys-illo-color1-2)" d="M161.515 66.264c8.231-8.384 21.739-8.384 29.97 0l2.126 2.165a21 21 0 0 0 18.462 5.999l2.992-.502c11.587-1.945 22.516 5.995 24.247 17.616l.447 3a20.998 20.998 0 0 0 11.409 15.705l2.716 1.353c10.518 5.237 14.692 18.084 9.262 28.504l-1.402 2.69a21 21 0 0 0 0 19.412l1.402 2.69c5.43 10.42 1.256 23.267-9.262 28.504l-2.716 1.353a20.998 20.998 0 0 0-11.409 15.704l-.447 3.001c-1.731 11.621-12.66 19.561-24.247 17.616l-2.992-.502a21 21 0 0 0-18.462 5.999l-2.126 2.165c-8.231 8.384-21.739 8.384-29.97 0l-2.126-2.165a21 21 0 0 0-18.462-5.999l-2.992.502c-11.587 1.945-22.516-5.995-24.247-17.616l-.447-3.001a20.998 20.998 0 0 0-11.409-15.704l-2.716-1.353c-10.518-5.237-14.692-18.085-9.262-28.504l1.402-2.69a21 21 0 0 0 0-19.412l-1.402-2.69c-5.43-10.42-1.256-23.267 9.262-28.504l2.716-1.353a20.998 20.998 0 0 0 11.409-15.704l.447-3c1.731-11.622 12.66-19.562 24.247-17.617l2.992.502a21 21 0 0 0 18.462-5.999l2.126-2.165Z"/><path stroke="var(--cros-sys-illo-color1-1)" stroke-width="2" d="m194.325 67.729-2.126-2.165c-8.623-8.784-22.775-8.784-31.398 0l-2.126 2.165a19.999 19.999 0 0 1-17.582 5.713l-2.992-.503c-12.139-2.037-23.588 6.281-25.402 18.456l-.447 3a20 20 0 0 1-10.866 14.957l-2.716 1.353c-11.018 5.486-15.392 18.946-9.703 29.861l1.403 2.69a20.001 20.001 0 0 1 0 18.488l-1.403 2.69c-5.689 10.915-1.315 24.375 9.703 29.861l2.716 1.353a20 20 0 0 1 10.866 14.956l.447 3.001c1.814 12.175 13.263 20.493 25.402 18.456l2.992-.503a20 20 0 0 1 17.582 5.713l2.126 2.165c8.623 8.784 22.775 8.784 31.398 0l2.126-2.165a20 20 0 0 1 17.582-5.713l2.992.503c12.139 2.037 23.588-6.281 25.402-18.456l.447-3.001a20 20 0 0 1 10.866-14.956l2.716-1.353c11.018-5.486 15.392-18.946 9.703-29.861l-1.403-2.69a20.002 20.002 0 0 1 0-18.488l1.403-2.69c5.689-10.915 1.315-24.375-9.703-29.861l-2.716-1.353a19.999 19.999 0 0 1-10.866-14.956l-.447-3.001c-1.814-12.175-13.263-20.493-25.402-18.456l-2.992.503a19.999 19.999 0 0 1-17.582-5.713Z"/><path fill="var(--cros-sys-illo-base)" fill-rule="evenodd" d="M135.851 231.34c-10.808.761-20.589-6.917-22.219-17.857l-.44-2.954a21 21 0 0 0-11.41-15.705l-2.673-1.331a21.17 21.17 0 0 1-3.062-1.862c.07-.843.127-1.316.127-1.316 10.877-22.149 37.395-36.852 67.662-37.796 2.732 0 5.332-.021 7.818-.04 27.89-.218 41.509-.325 67.279 29.623l18.963-32.618 13.701 6.683c.47.289.961.556 1.47.8l8.601 4.113 7.329 3.575s-18.205 51.582-49.306 51.582c-31.1 0-39.444-23.515-39.444-23.515l-4.778 33.68-41.395 3.185-2.653-1.593-4.776-15.921-5.838-14.859-15.657 12.196 10.701 21.93Z" clip-rule="evenodd"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m145.631 192.724-20.481 16.688 10.35 20.707m64.746-37.395s8.344 23.515 39.445 23.515 49.306-51.582 49.306-51.582l-31.101-15.171-18.964 32.618c-28.066-32.618-41.72-29.584-75.096-29.584-30.267.945-56.785 15.648-67.662 37.796"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M140.412 198.033s4.988 8.064 7.761 21.849c2.774 13.785 8.261 8.777 8.261 8.777M201.005 183.621l-5.309 41.909-38.51 3.123"/><path fill="var(--cros-sys-illo-color1-1)" d="M268.928 134.551c-5.748 4.252-9.928 14.351-9.928 14.351L279.379 159l6.271-3.189s17.243 4.252 23.514.532c3.633-2.156 5.904-5.654 4.336-8.843-6.271-2.126.889-2.319-1.723-5.508-1.045-2.657-10.904-2.641-14.631-3.189-6.477-.951-9.406-2.126-9.406-2.126s6.793.532 6.793-3.189c0-3.72-19.857-3.189-25.605 1.063Z"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M258.73 148.955s2.008-13.6 15.152-16.155c7.572-.927 16.105-2.244 18.401-1.694 2.297.55 3.94 2.576 2.268 4.3-1.672 1.724-8.44 1.265-8.44 1.265s4.536 1.622 10.13 2.273c5.595.651 11.55.373 13.762 1.273 2.212.9 2.924 1.613 2.287 3.457-.636 1.844-9.099 1.048-11.164.725"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M278.43 158.828s4.321-2.583 6.7-3.038c2.379-.455 11.788 2.857 16.26 2.615 4.472-.242 9.729-.666 8.796-3.608-.933-2.942-8.107-1.68-11.696-2.753-3.59-1.074-6.43-2.284-11.967-4.915-5.538-2.632-11.197-.846-11.197-.846"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-width="2" d="M292.321 145.572s4.498 2.355 9.958 3.635c5.46 1.28 10.147-.226 10.774 3.006.221 1.139-1.028 1.815-2.83 2.186"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-width="2" d="M294.33 142.364s2.297 1.175 8.454 2.918c6.158 1.742 12.415.216 11.287 4.5-.176.669-.846.833-1.554 1.275"/><path fill="var(--cros-sys-illo-color1-1)" fill-rule="evenodd" d="M181.206 129.366c-.506-1.269-1.02-2.559-1.396-3.842-2.225-7.594-9.958-12.013-17.271-9.87-7.313 2.143-11.437 10.037-9.211 17.631 1.115 3.807 3.615 6.816 6.752 8.601l2.258 5.268c1.213 2.83.607 4.953.607 4.953h15.011l-1.264-10.112c8.548-2.507 6.603-7.386 4.514-12.629Z" clip-rule="evenodd"/><path fill="var(--cros-sys-illo-color1)" d="m179.81 125.524.96-.281-.96.281Zm1.396 3.842.929-.37-.929.37Zm-18.667-13.712.282.96-.282-.96Zm-9.211 17.631-.96.281.96-.281Zm6.752 8.601.919-.394-.132-.309-.292-.166-.495.869Zm2.258 5.268.919-.394-.919.394Zm.607 4.953-.962-.275-.364 1.275h1.326v-1Zm15.011 0v1h1.133l-.141-1.124-.992.124Zm-1.264-10.112-.282-.959-.816.239.106.844.992-.124Zm2.159-16.19c.391 1.337.924 2.671 1.426 3.931l1.858-.74c-.509-1.277-1.005-2.523-1.365-3.753l-1.919.562Zm-16.03-9.191c6.749-1.978 13.949 2.093 16.03 9.191l1.919-.562c-2.371-8.09-10.635-12.857-18.512-10.549l.563 1.92Zm-8.534 16.39c-2.08-7.099 1.784-14.413 8.534-16.39l-.563-1.92c-7.877 2.309-12.261 10.782-9.89 18.872l1.919-.562Zm6.288 8.013c-2.916-1.659-5.246-4.46-6.288-8.013l-1.919.562c1.19 4.061 3.86 7.279 7.218 9.189l.989-1.738Zm2.682 5.743-2.258-5.268-1.838.788 2.258 5.268 1.838-.788Zm-.312 5.347.961.274.001-.001v-.002l.001-.004.004-.012.008-.032.024-.101c.019-.084.042-.2.064-.344.045-.288.088-.694.088-1.193 0-1-.172-2.375-.839-3.932l-1.838.788c.546 1.273.677 2.375.677 3.144 0 .385-.033.687-.064.885-.015.099-.03.172-.04.215l-.01.043-.001.005.001-.003v-.002l.001-.001v-.001l.962.274Zm15.011-1h-15.011v2h15.011v-2Zm-2.256-8.988 1.263 10.112 1.985-.248-1.264-10.112-1.984.248Zm4.577-12.383c.527 1.323 1.018 2.559 1.344 3.73.325 1.172.459 2.198.327 3.096-.127.866-.508 1.663-1.321 2.398-.836.755-2.162 1.473-4.217 2.076l.563 1.919c2.22-.651 3.856-1.483 4.994-2.511 1.161-1.049 1.766-2.269 1.96-3.592.19-1.291-.019-2.624-.379-3.921-.36-1.296-.895-2.636-1.413-3.935l-1.858.74Z"/><path fill="var(--cros-sys-illo-color1)" d="M175.036 107.905c4.916 2.217 1.328 11.297 1.328 11.297s-5.587.349-9.022 3.184c-3.436 2.836-2.758 8.085-2.758 8.085s-4.141-3.308-6.271-.6c-2.129 2.708 1.309 5.761 3.191 5.535 1.272-.321 2.523 2.332 3.199 4.084.33.855-.036 1.802-.823 2.274l-3.968 2.381s-7.43-3.715-12.737-10.614c-11.751-17.797 10.091-19.091 17.594-23.226 4.722-2.603 5.351-4.616 10.267-2.4Z"/><path stroke="var(--cros-sys-illo-color1)" stroke-linecap="round" stroke-width="2" d="M176.976 133.292s.678 1.139 2.566.959c1.887-.179 2.856-1.746 2.856-1.746"/><path fill="var(--cros-sys-illo-color1)" fill-rule="evenodd" d="M199.18 232.461a21.002 21.002 0 0 0-5.739 4.143l-2.092 2.131c-8.231 8.385-21.739 8.385-29.971 0l-2.092-2.131a20.996 20.996 0 0 0-9.043-5.43l.647-2.648 2.654 1.592 3.184-1.592 38.21-3.184 4.242 7.119Z" clip-rule="evenodd"/><path fill="var(--cros-sys-illo-color3)" d="M397.872 86.917c.805.4.716 1.575-.14 1.848L384.813 92.9c-.263.085-.48.275-.599.525l-5.883 12.437c-.391.829-1.599.738-1.861-.14l-3.948-13.18a.998.998 0 0 0-.513-.61l-12.151-6.027c-.805-.4-.716-1.575.139-1.849l12.919-4.134a.998.998 0 0 0 .599-.524l5.883-12.437c.392-.829 1.599-.738 1.862.14l3.947 13.18c.08.265.266.486.514.609l12.151 6.028Z"/><path fill="var(--cros-sys-illo-color1)" fill-rule="evenodd" d="m349.878 93.025-15.257-10.872-19.596 3.29-16.307 22.885a4.698 4.698 0 0 0 1.096 6.532l22.886 16.307c2.097 1.495 5.037 1.001 6.532-1.097l21.742-30.513a4.698 4.698 0 0 0-1.096-6.532Zm-28.419-2.279a1 1 0 0 0-1.394.234l-8.495 11.922a1 1 0 0 0 .234 1.395l1.947 1.387a1 1 0 0 0 1.395-.234l8.495-11.922a1 1 0 0 0-.235-1.395l-1.947-1.387Zm4.565 4.481a1 1 0 0 1 1.395-.234l1.947 1.387a1 1 0 0 1 .234 1.395L315.473 117.6a1 1 0 0 1-1.395.234l-1.947-1.387a1 1 0 0 1-.234-1.395l14.127-19.826Zm-1.283 14.41a1 1 0 0 1 1.395-.234l5.523 3.935a1 1 0 0 1 .234 1.395l-6.885 9.663a1 1 0 0 1-1.395.234l-5.523-3.935a1 1 0 0 1-.234-1.395l6.885-9.663Zm-14.546-3.082a1 1 0 0 0-1.395.234l-2.862 4.017a1 1 0 0 0 .234 1.395l1.947 1.387a1 1 0 0 0 1.395-.234l2.862-4.017a1 1 0 0 0-.234-1.395l-1.947-1.387Zm20.18-4.824a1 1 0 0 1 1.394-.234l5.523 3.935a1 1 0 0 1 .234 1.395l-2.862 4.017a1 1 0 0 1-1.395.234l-5.523-3.935a1.001 1.001 0 0 1-.234-1.395l2.863-4.017Z" clip-rule="evenodd"/><path fill="var(--cros-sys-illo-color2)" d="m357.021 183.351-20.762-16.266c-2.583-1.976-4.285-4.921-4.731-8.188a12.684 12.684 0 0 1 2.349-9.235 12.401 12.401 0 0 1 3.557-3.253 12.118 12.118 0 0 1 4.501-1.625 11.957 11.957 0 0 1 4.757.252 12.012 12.012 0 0 1 4.29 2.09l20.755 16.265c2.585 1.974 4.288 4.919 4.736 8.186a12.684 12.684 0 0 1-2.347 9.237c-1.952 2.646-4.85 4.4-8.058 4.876a11.996 11.996 0 0 1-9.047-2.339Z"/><path fill="var(--cros-sys-illo-color5)" d="m360.216 117.139-9.945 4.986a2.54 2.54 0 0 0-1.132 3.41l4.927 9.827a2.54 2.54 0 0 0 3.41 1.133l9.945-4.986a2.54 2.54 0 0 0 1.132-3.41l-4.927-9.827a2.54 2.54 0 0 0-3.41-1.133Z"/><circle cx="296.5" cy="59.5" r="9.25" stroke="var(--cros-sys-illo-color4)" stroke-width="2.5"/><path stroke="var(--cros-sys-illo-color1-2)" stroke-linecap="round" stroke-width="2" d="M373.354 32c-5.436 21.674-40.031 8.683-44.941 33.385"/>
      </g>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template$1.content);function getTemplate$15(){return html`<!--_html_template_start_--><style include="cros-color-overrides">:host{display:flex;justify-content:flex-end;padding:28px 0 28px 0}#forward:focus{box-shadow:0 0 0 2px var(--focus-shadow-color)}#flex{flex:1}</style>
<div id="flex"></div>
<cr-button id="cancel" class="cancel-button" on-click="onCancelButtonClicked_" disabled="[[isButtonDisabled_(buttonEnum_.CANCEL, buttonState.*)]]" hidden$="[[isButtonHidden_(buttonEnum_.CANCEL, buttonState.*)]]">
  [[i18n('cancel')]]
</cr-button>
<cr-button id="forward" class="action-button" on-click="onForwardButtonClicked_" disabled="[[isButtonDisabled_(buttonEnum_.FORWARD, buttonState.*)]]" hidden$="[[isButtonHidden_(buttonEnum_.FORWARD, buttonState.*)]]">
  [[forwardButtonLabel]]
</cr-button>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ButtonBarElementBase=I18nMixin(PolymerElement);class ButtonBarElement extends ButtonBarElementBase{static get is(){return"button-bar"}static get template(){return getTemplate$15()}static get properties(){return{buttonState:{type:Object,value:{}},buttonEnum_:{type:Object,value:Button},forwardButtonLabel:{type:String,value:""}}}isButtonHidden_(buttonName){const state=this.getButtonBarState_(buttonName);return state===ButtonState.HIDDEN}isButtonDisabled_(buttonName){const state=this.getButtonBarState_(buttonName);return state===ButtonState.DISABLED}focusDefaultButton(){const buttons=this.shadowRoot.querySelectorAll("cr-button");for(let i=buttons.length-1;i>=0;i--){const button=buttons.item(i);if(!button.disabled&&!button.hidden){focusWithoutInk(button);return}}}onCancelButtonClicked_(){this.dispatchEvent(new CustomEvent("cancel-requested",{bubbles:true,composed:true}))}onForwardButtonClicked_(){this.dispatchEvent(new CustomEvent("forward-nav-requested",{bubbles:true,composed:true}))}getButtonBarState_(button){assert(this.buttonState);switch(button){case Button.CANCEL:return this.buttonState.cancel;case Button.FORWARD:return this.buttonState.forward;default:assertNotReached()}}}customElements.define(ButtonBarElement.is,ButtonBarElement);function getTemplate$14(){return html`<!--_html_template_start_--><style include="iron-positioning cros-color-overrides">:host{display:flex;flex-direction:column;height:100%}#title{color:var(--cros-text-color-primary);font-weight:400;line-height:24px}#message{height:var(--base-page-message-height,auto);margin-bottom:20px}:host ::slotted([slot=page-body]){display:block;flex:1 1 auto}#message iron-icon{padding-inline-end:4px}</style>
<template is="dom-if" if="[[isTitleShown_(title)]]" restamp>
  <h3 id="title">[[getTitle_(title)]]</h3>
</template>
<div id="message" aria-live="polite" aria-atomic="true">
  <iron-icon icon$="cellular-setup:[[messageIcon]]" hidden$="[[!isMessageIconShown_(messageIcon)]]">
  </iron-icon>
  [[message]]
</div>
<slot name="page-body"></slot>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class BasePageElement extends PolymerElement{static get is(){return"base-page"}static get template(){return getTemplate$14()}static get properties(){return{title:String,message:String,messageIcon:{type:String,value:""}}}getTitle_(){return this.title}isTitleShown_(){return!!this.title}isMessageIconShown_(){return!!this.messageIcon}}customElements.define(BasePageElement.is,BasePageElement);function getTemplate$13(){return html`<!--_html_template_start_--><style include="iron-flex cr-hidden-style">#animationContainer{align-items:flex-end;display:flex;height:216px;justify-content:center;margin-bottom:54px}#simDetectError,#simDetectErrorJelly{height:100%;width:100%}#simDetectError{background-image:url(chrome://resources/ash/common/cellular_setup/sim_detect_error.svg);background-position:center center;background-repeat:no-repeat;background-size:contain}@media(prefers-color-scheme:dark){#simDetectError{background-image:url(chrome://resources/ash/common/cellular_setup/sim_detect_error_dark.svg)}}:host-context(body.jelly-enabled) #simDetectError{display:none}:host-context(body:not(.jelly-enabled)) #simDetectErrorJelly{display:none}#pageBody{height:222px}cros-lottie-renderer{height:85%}base-page{--base-page-message-height:40px}</style>
<base-page title="[[loadingTitle]]" message="[[loadingMessage]]">
  <div slot="page-body" id="pageBody" class="layout vertical center-center">
    <iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
    </iron-media-query>
    <template is="dom-if" if="[[!isSimDetectError]]" restamp>
      <div id="animationContainer">
        <cros-lottie-renderer id="spinner" asset-url="chrome://resources/ash/common/cellular_setup/spinner.json" autoplay dynamic aria-hidden>
        </cros-lottie-renderer>
      </div>
    </template>
    <div id="simDetectError" hidden$="[[!isSimDetectError]]">
    </div>
    <iron-icon id="simDetectErrorJelly" icon="cellular-setup-illo:sim-detect-error" hidden$="[[!isSimDetectError]]">
    </iron-icon>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SetupLoadingPageElement extends PolymerElement{static get is(){return"setup-loading-page"}static get template(){return getTemplate$13()}static get properties(){return{loadingMessage:{type:String,value:""},loadingTitle:{type:String,value:""},isSimDetectError:{type:Boolean,value:false}}}}customElements.define(SetupLoadingPageElement.is,SetupLoadingPageElement);function getTemplate$12(){return html`<!--_html_template_start_--><style include="iron-flex cr-hidden-style">paper-spinner-lite{height:32px;width:32px}#portalContainer{height:100%;width:100%}#errorIllustration,#errorIllustrationJelly{height:100%;width:100%}#errorIllustration{background-image:url(chrome://resources/ash/common/cellular_setup/error.svg);background-position:center center;background-repeat:no-repeat;background-size:contain}@media(prefers-color-scheme:dark){#errorIllustration{background-image:url(chrome://resources/ash/common/cellular_setup/error_dark.svg)}}:host-context(body.jelly-enabled) #errorIllustration{display:none}:host-context(body:not(.jelly-enabled)) #errorIllustrationJelly{display:none}</style>
<base-page title="[[getPageTitle_(
                        showError, carrierName_, hasCarrierPortalLoaded_)]]" message="[[getPageMessage_(showError)]]">
  <div slot="page-body" class="layout horizontal center-center">
    <paper-spinner-lite active hidden$="[[!shouldShowSpinner_(
                        showError, hasCarrierPortalLoaded_)]]">
    </paper-spinner-lite>
    <div id="portalContainer" hidden$="[[!shouldShowPortal_(
                        showError, hasCarrierPortalLoaded_)]]">
    </div>
    <div id="errorIllustration" hidden$="[[!showError]]"></div>
    <iron-icon id="errorIllustrationJelly" icon="cellular-setup-illo:error" hidden$="[[!showError]]">
    </iron-icon>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const WEBVIEW_REDIRECT_SCRIPT="(function(form, paymentUrl, postData) {"+"function addInputElement(form, name, value) {"+"  var input = document.createElement('input');"+"  input.type = 'hidden';"+"  input.name = name;"+"  input.value = value;"+"  form.appendChild(input);"+"}"+"function initFormFromPostData(form, postData) {"+"  if (!postData) return;"+"  var pairs = postData.split('&');"+"  pairs.forEach(pairStr => {"+"    var pair = pairStr.split('=');"+"    if (pair.length === 2)"+"      addInputElement(form, pair[0], pair[1]);"+"    else if (pair.length === 1)"+"      addInputElement(form, pair[0], true);"+"  });"+"}"+"form.action = unescape(paymentUrl);"+"form.method = 'POST';"+"initFormFromPostData(form, unescape(postData));"+"form.submit();"+"})";const WEBVIEW_REDIRECT_FORM_ID="redirectForm";const WEBVIEW_REDIRECT_HTML="<html><body>"+'<form id="'+WEBVIEW_REDIRECT_FORM_ID+'"></form>'+"</body></html>";function initializeWebviewRedirectForm(webview,paymentUrl,postData,webviewSrc,commitEvent){if(!commitEvent.isTopLevel||commitEvent.url!==webviewSrc){return}webview.executeScript({code:WEBVIEW_REDIRECT_SCRIPT+"("+"document.getElementById('"+WEBVIEW_REDIRECT_FORM_ID+"'),"+" '"+escape(paymentUrl)+"',"+" '"+escape(postData||"")+"');"})}function postDeviceDataToWebview(webview,paymentUrl,postData){const webviewSrc="data:text/html;charset=utf-8,"+encodeURIComponent(WEBVIEW_REDIRECT_HTML);webview.addEventListener("loadcommit",(commitEvent=>{initializeWebviewRedirectForm(webview,paymentUrl,postData,webviewSrc,commitEvent)}));webview.src=webviewSrc}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProvisioningPageElementBase=I18nMixin(PolymerElement);class ProvisioningPageElement extends ProvisioningPageElementBase{static get is(){return"provisioning-page"}static get template(){return getTemplate$12()}static get properties(){return{delegate:Object,showError:{type:Boolean,value:false,notify:true},cellularMetadata:{type:Object,value:null,observer:"onCellularMetadataChanged_"},hasCarrierPortalLoaded_:{type:Boolean,value:false},carrierName_:{type:String,value:""}}}getPageTitle_(){if(!this.delegate.shouldShowPageTitle()){return null}if(this.showError){return this.i18n("provisioningPageErrorTitle",this.carrierName_)}if(this.hasCarrierPortalLoaded_){return this.i18n("provisioningPageActiveTitle")}return this.i18n("provisioningPageLoadingTitle",this.carrierName_)}getPageMessage_(){if(this.showError){return this.i18n("provisioningPageErrorMessage",this.carrierName_)}return null}shouldShowSpinner_(){return!this.showError&&!this.hasCarrierPortalLoaded_}shouldShowPortal_(){return!this.showError&&this.hasCarrierPortalLoaded_}getPortalWebview(){return this.shadowRoot.querySelector("webview")}onCellularMetadataChanged_(){if(this.cellularMetadata){this.carrierName_=this.cellularMetadata.carrier;this.loadPortal_();return}this.resetPage_()}loadPortal_(){assert(!!this.cellularMetadata);assert(!this.getPortalWebview());const portalWebview=document.createElement("webview");this.$.portalContainer.appendChild(portalWebview);portalWebview.addEventListener("loadabort",this.onPortalLoadAbort_.bind(this));portalWebview.addEventListener("loadstop",this.onPortalLoadStop_.bind(this));window.addEventListener("message",this.onMessageReceived_.bind(this));if(this.cellularMetadata.paymentPostData){postDeviceDataToWebview(portalWebview,this.cellularMetadata.paymentUrl.url,this.cellularMetadata.paymentPostData);return}portalWebview.src=this.cellularMetadata.paymentUrl.url}resetPage_(){this.hasCarrierPortalLoaded_=false;const portalWebview=this.getPortalWebview();if(portalWebview){portalWebview.remove()}}onPortalLoadAbort_(){this.showError=true}onPortalLoadStop_(){if(this.hasCarrierPortalLoaded_){return}this.hasCarrierPortalLoaded_=true;this.dispatchEvent(new CustomEvent("carrier-portal-loaded",{bubbles:true,composed:true}));const portalWebview=this.getPortalWebview();assert(!!portalWebview);const contentWindow=portalWebview.contentWindow;assert(!!contentWindow);contentWindow.postMessage({msg:"loadedInWebview"},this.cellularMetadata.paymentUrl?.url)}onMessageReceived_(event){const messageType=event.data.type;const status=event.data.status;if(messageType==="requestDeviceInfoMsg"){const portalWebview=this.getPortalWebview();assert(!!portalWebview);const contentWindow=portalWebview.contentWindow;assert(!!contentWindow);contentWindow.postMessage({carrier:this.cellularMetadata.carrier,MEID:this.cellularMetadata.meid,IMEI:this.cellularMetadata.imei,MDN:this.cellularMetadata.mdn},this.cellularMetadata.paymentUrl?.url);return}if(messageType==="reportTransactionStatusMsg"){const success=status==="ok";this.dispatchEvent(new CustomEvent("on-carrier-portal-result",{bubbles:true,composed:true,detail:success}));return}}}customElements.define(ProvisioningPageElement.is,ProvisioningPageElement);function getTemplate$11(){return html`<!--_html_template_start_--><style>#illustration{background-image:url(chrome://resources/ash/common/cellular_setup/final_page_success.svg);background-position:center center;background-repeat:no-repeat;background-size:contain}#illustration.error{background-image:url(chrome://resources/ash/common/cellular_setup/error.svg);background-size:contain}@media(prefers-color-scheme:dark){#illustration{background-image:url(chrome://resources/ash/common/cellular_setup/final_page_success_dark.svg)}#illustration.error{background-image:url(chrome://resources/ash/common/cellular_setup/error_dark.svg)}}#illustrationJelly{height:242px;width:242px;align-self:center}:host-context(body.jelly-enabled) #illustration{display:none}:host-context(body:not(.jelly-enabled)) #illustrationJelly{display:none}</style>
<base-page title="[[getTitle_(showError)]]" message="[[getMessage_(showError)]]">
  <div id="illustration" class$="[[getPageBodyClass_(showError)]]" slot="page-body">
  </div>
  <iron-icon id="illustrationJelly" icon="[[getJellyIllustrationName_(showError)]]" slot="page-body">
  </iron-icon>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const FinalPageElementBase=I18nMixin(PolymerElement);class FinalPageElement extends FinalPageElementBase{static get is(){return"final-page"}static get template(){return getTemplate$11()}static get properties(){return{delegate:Object,showError:Boolean,message:String,errorMessage:String}}getTitle_(showError){if(this.delegate.shouldShowPageTitle()){return showError?this.i18n("finalPageErrorTitle"):this.i18n("finalPageTitle")}return null}getMessage_(showError){return showError?this.errorMessage:this.message}getPageBodyClass_(showError){return showError?"error":""}getJellyIllustrationName_(showError){return showError?"cellular-setup-illo:error":"cellular-setup-illo:final-page-success"}}customElements.define(FinalPageElement.is,FinalPageElement);function getTemplate$10(){return html`<!--_html_template_start_--><style>:host{display:flex;flex:1 1 auto;flex-direction:column}iron-pages{height:400px}</style>
<iron-pages attr-for-selected="id" selected="[[selectedPsimPageName_]]" selected-item="{{selectedPage_}}">
  <setup-loading-page id="simDetectPage" loading-title="[[getLoadingTitle_(state_)]]" loading-message="[[getLoadingMessage_(state_)]]" is-sim-detect-error="[[isSimDetectError_(state_)]]">
  </setup-loading-page>
  <provisioning-page id="provisioningPage" delegate="[[delegate]]" show-error="{{showError_}}" cellular-metadata="[[cellularMetadata_]]" on-carrier-portal-loaded="onCarrierPortalLoaded_" on-carrier-portal-result="onCarrierPortalResult_">
  </provisioning-page>
  <final-page id="finalPage" delegate="[[delegate]]" show-error="[[showError_]]" message="[[i18n('pSimfinalPageMessage')]]" error-message="[[i18n('finalPageErrorMessage')]]">
  </final-page>
</iron-pages>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SubflowMixin=dedupingMixin((superClass=>{class SubflowMixin extends superClass{static get properties(){return{buttonState:{type:Object,notify:true}}}initSubflow(){assertNotReached()}navigateForward(){assertNotReached()}maybeFocusPageElement(){return false}}return SubflowMixin}));
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PsimPageName;(function(PsimPageName){PsimPageName["SIM_DETECT"]="simDetectPage";PsimPageName["PROVISIONING"]="provisioningPage";PsimPageName["FINAL"]="finalPage"})(PsimPageName||(PsimPageName={}));var PsimUiState;(function(PsimUiState){PsimUiState["IDLE"]="idle";PsimUiState["STARTING_ACTIVATION"]="starting-activation";PsimUiState["WAITING_FOR_ACTIVATION_TO_START"]="waiting-for-activation-to-start";PsimUiState["TIMEOUT_START_ACTIVATION"]="timeout-start-activation";PsimUiState["FINAL_TIMEOUT_START_ACTIVATION"]="final-timeout-start-activation";PsimUiState["WAITING_FOR_PORTAL_TO_LOAD"]="waiting-for-portal-to-load";PsimUiState["TIMEOUT_PORTAL_LOAD"]="timeout-portal-load";PsimUiState["WAITING_FOR_USER_PAYMENT"]="waiting-for-user-payment";PsimUiState["WAITING_FOR_ACTIVATION_TO_FINISH"]="waiting-for-activation-to-finish";PsimUiState["TIMEOUT_FINISH_ACTIVATION"]="timeout-finish-activation";PsimUiState["ACTIVATION_SUCCESS"]="activation-success";PsimUiState["ALREADY_ACTIVATED"]="already-activated";PsimUiState["ACTIVATION_FAILURE"]="activation-failure"})(PsimUiState||(PsimUiState={}));var PsimSetupFlowResult;(function(PsimSetupFlowResult){PsimSetupFlowResult[PsimSetupFlowResult["SUCCESS"]=0]="SUCCESS";PsimSetupFlowResult[PsimSetupFlowResult["CANCELLED"]=1]="CANCELLED";PsimSetupFlowResult[PsimSetupFlowResult["CANCELLED_NO_SIM"]=2]="CANCELLED_NO_SIM";PsimSetupFlowResult[PsimSetupFlowResult["CANCELLED_COLD_SIM_DEFER"]=3]="CANCELLED_COLD_SIM_DEFER";PsimSetupFlowResult[PsimSetupFlowResult["CANCELLED_CARRIER_PORTAL"]=4]="CANCELLED_CARRIER_PORTAL";PsimSetupFlowResult[PsimSetupFlowResult["CANCELLED_PORTAL_ERROR"]=5]="CANCELLED_PORTAL_ERROR";PsimSetupFlowResult[PsimSetupFlowResult["CARRIER_PORTAL_TIMEOUT"]=6]="CARRIER_PORTAL_TIMEOUT";PsimSetupFlowResult[PsimSetupFlowResult["NETWORK_ERROR"]=7]="NETWORK_ERROR"})(PsimSetupFlowResult||(PsimSetupFlowResult={}));function getTimeoutMsForPsimUiState(state){if(state===PsimUiState.STARTING_ACTIVATION){return 1e4}if(state===PsimUiState.WAITING_FOR_PORTAL_TO_LOAD){return 1e4}if(state===PsimUiState.WAITING_FOR_ACTIVATION_TO_FINISH){return 1e3}return null}const MAX_START_ACTIVATION_ATTEMPTS=3;const PSIM_SETUP_RESULT_METRIC_NAME="Network.Cellular.PSim.SetupFlowResult";const SUCCESSFUL_PSIM_SETUP_DURATION_METRIC_NAME="Network.Cellular.PSim.CellularSetup.Success.Duration";const FAILED_PSIM_SETUP_DURATION_METRIC_NAME="Network.Cellular.PSim.CellularSetup.Failure.Duration";const PsimFlowUiElementBase=SubflowMixin(I18nMixin(PolymerElement));class PsimFlowUiElement extends PsimFlowUiElementBase{static get is(){return"psim-flow-ui"}static get template(){return getTemplate$10()}static get properties(){return{delegate:Object,nameOfCarrierPendingSetup:{type:String,notify:true,computed:"getCarrierText("+"selectedPsimPageName_, cellularMetadata_.*)"},forwardButtonLabel:{type:String,notify:true},state_:{type:String,value:PsimUiState.IDLE,observer:"handlePsimUiStateChange_"},selectedPsimPageName_:{type:String,value:PsimPageName.SIM_DETECT,notify:true},selectedPage_:Object,showError_:{type:Boolean,value:false},cellularMetadata_:{type:Object,value:null},startActivationAttempts_:{type:Number,value:0}}}constructor(){super();this.cellularSetupRemote_=null;this.activationDelegateReceiver_=null;this.currentTimeoutId_=null;this.carrierPortalHandler_=null;this.didCarrierPortalResultFail_=false;this.setTimeoutFunction_=setTimeout.bind(window);this.timeOnAttached_=null;this.cellularSetupRemote_=getCellularSetupRemote()}connectedCallback(){super.connectedCallback();this.timeOnAttached_=new Date}disconnectedCallback(){super.disconnectedCallback();let resultCode=null;switch(this.state_){case PsimUiState.IDLE:case PsimUiState.STARTING_ACTIVATION:resultCode=PsimSetupFlowResult.CANCELLED;break;case PsimUiState.WAITING_FOR_ACTIVATION_TO_START:resultCode=PsimSetupFlowResult.CANCELLED_COLD_SIM_DEFER;break;case PsimUiState.TIMEOUT_START_ACTIVATION:case PsimUiState.FINAL_TIMEOUT_START_ACTIVATION:resultCode=PsimSetupFlowResult.CANCELLED_NO_SIM;break;case PsimUiState.WAITING_FOR_PORTAL_TO_LOAD:resultCode=PsimSetupFlowResult.CANCELLED;break;case PsimUiState.TIMEOUT_PORTAL_LOAD:resultCode=PsimSetupFlowResult.CARRIER_PORTAL_TIMEOUT;break;case PsimUiState.WAITING_FOR_USER_PAYMENT:resultCode=PsimSetupFlowResult.CANCELLED_CARRIER_PORTAL;break;case PsimUiState.ACTIVATION_SUCCESS:case PsimUiState.WAITING_FOR_ACTIVATION_TO_FINISH:case PsimUiState.TIMEOUT_FINISH_ACTIVATION:case PsimUiState.ALREADY_ACTIVATED:resultCode=PsimSetupFlowResult.SUCCESS;break;case PsimUiState.ACTIVATION_FAILURE:resultCode=this.didCarrierPortalResultFail_?PsimSetupFlowResult.CANCELLED_PORTAL_ERROR:PsimSetupFlowResult.NETWORK_ERROR;break;default:assertNotReached()}assert(resultCode!==null);chrome.metricsPrivate.recordEnumerationValue(PSIM_SETUP_RESULT_METRIC_NAME,resultCode,Object.keys(PsimSetupFlowResult).length);const elapsedTimeMs=Date.now()-this.timeOnAttached_.getTime();if(resultCode===PsimSetupFlowResult.SUCCESS){chrome.metricsPrivate.recordLongTime(SUCCESSFUL_PSIM_SETUP_DURATION_METRIC_NAME,elapsedTimeMs);return}chrome.metricsPrivate.recordLongTime(FAILED_PSIM_SETUP_DURATION_METRIC_NAME,elapsedTimeMs)}onActivationStarted(metadata){this.clearTimer_();this.cellularMetadata_=metadata;this.state_=PsimUiState.WAITING_FOR_PORTAL_TO_LOAD}initSubflow(){this.state_=PsimUiState.STARTING_ACTIVATION;this.startActivationAttempts_=0;this.updateButtonBarState_();this.dispatchEvent(new CustomEvent("focus-default-button",{bubbles:true,composed:true}))}navigateForward(){switch(this.state_){case PsimUiState.WAITING_FOR_PORTAL_TO_LOAD:case PsimUiState.TIMEOUT_PORTAL_LOAD:case PsimUiState.WAITING_FOR_USER_PAYMENT:case PsimUiState.ACTIVATION_SUCCESS:this.state_=PsimUiState.WAITING_FOR_ACTIVATION_TO_FINISH;break;case PsimUiState.WAITING_FOR_ACTIVATION_TO_FINISH:case PsimUiState.TIMEOUT_FINISH_ACTIVATION:case PsimUiState.FINAL_TIMEOUT_START_ACTIVATION:case PsimUiState.ALREADY_ACTIVATED:case PsimUiState.ACTIVATION_FAILURE:this.dispatchEvent(new CustomEvent("exit-cellular-setup",{bubbles:true,composed:true}));break;case PsimUiState.TIMEOUT_START_ACTIVATION:this.state_=PsimUiState.STARTING_ACTIVATION;break;default:assertNotReached()}}setTimerFunctionForTest(timerFunction){this.setTimeoutFunction_=timerFunction}getSelectedPsimPageNameForTest(){return this.selectedPsimPageName_}getCurrentTimeoutIdForTest(){return this.currentTimeoutId_}setCurrentPsimUiStateForTest(state){this.state_=state}getCurrentPsimUiStateForTest(){return this.state_}updateButtonBarState_(){let buttonState;switch(this.state_){case PsimUiState.IDLE:case PsimUiState.STARTING_ACTIVATION:case PsimUiState.WAITING_FOR_ACTIVATION_TO_START:case PsimUiState.WAITING_FOR_PORTAL_TO_LOAD:case PsimUiState.TIMEOUT_PORTAL_LOAD:case PsimUiState.WAITING_FOR_USER_PAYMENT:this.forwardButtonLabel=this.i18n("next");buttonState={cancel:ButtonState.ENABLED,forward:ButtonState.DISABLED};break;case PsimUiState.TIMEOUT_START_ACTIVATION:this.forwardButtonLabel=this.i18n("tryAgain");buttonState={cancel:ButtonState.ENABLED,forward:ButtonState.ENABLED};break;case PsimUiState.ACTIVATION_SUCCESS:this.forwardButtonLabel=this.i18n("next");buttonState={cancel:ButtonState.ENABLED,forward:ButtonState.ENABLED};break;case PsimUiState.ALREADY_ACTIVATED:case PsimUiState.ACTIVATION_FAILURE:case PsimUiState.FINAL_TIMEOUT_START_ACTIVATION:this.forwardButtonLabel=this.i18n("done");buttonState={cancel:ButtonState.ENABLED,forward:ButtonState.ENABLED};break;case PsimUiState.WAITING_FOR_ACTIVATION_TO_FINISH:case PsimUiState.TIMEOUT_FINISH_ACTIVATION:this.forwardButtonLabel=this.i18n("done");buttonState={cancel:ButtonState.HIDDEN,forward:ButtonState.ENABLED};break;default:assertNotReached()}this.set("buttonState",buttonState)}onActivationFinished(result){this.closeActivationConnection_();switch(result){case ActivationResult.kSuccessfullyStartedActivation:this.state_=PsimUiState.ACTIVATION_SUCCESS;break;case ActivationResult.kAlreadyActivated:this.state_=PsimUiState.ALREADY_ACTIVATED;break;case ActivationResult.kFailedToActivate:this.state_=PsimUiState.ACTIVATION_FAILURE;break;default:assertNotReached()}}getCarrierText(){if(this.selectedPsimPageName_===PsimPageName.PROVISIONING&&this.cellularMetadata_){return this.cellularMetadata_.carrier}return""}updateShowError_(){switch(this.state_){case PsimUiState.TIMEOUT_PORTAL_LOAD:case PsimUiState.TIMEOUT_FINISH_ACTIVATION:case PsimUiState.ACTIVATION_FAILURE:this.showError_=true;return;default:this.showError_=false;return}}updateSelectedPage_(){switch(this.state_){case PsimUiState.IDLE:case PsimUiState.STARTING_ACTIVATION:case PsimUiState.WAITING_FOR_ACTIVATION_TO_START:case PsimUiState.TIMEOUT_START_ACTIVATION:case PsimUiState.FINAL_TIMEOUT_START_ACTIVATION:this.selectedPsimPageName_=PsimPageName.SIM_DETECT;return;case PsimUiState.WAITING_FOR_PORTAL_TO_LOAD:case PsimUiState.TIMEOUT_PORTAL_LOAD:case PsimUiState.WAITING_FOR_USER_PAYMENT:case PsimUiState.ACTIVATION_SUCCESS:this.selectedPsimPageName_=PsimPageName.PROVISIONING;return;case PsimUiState.WAITING_FOR_ACTIVATION_TO_FINISH:case PsimUiState.TIMEOUT_FINISH_ACTIVATION:case PsimUiState.ALREADY_ACTIVATED:case PsimUiState.ACTIVATION_FAILURE:this.selectedPsimPageName_=PsimPageName.FINAL;return;default:assertNotReached()}}handlePsimUiStateChange_(){this.updateShowError_();this.updateSelectedPage_();this.clearTimer_();const timeoutMs=getTimeoutMsForPsimUiState(this.state_);if(timeoutMs!==null){this.currentTimeoutId_=this.setTimeoutFunction_(this.onTimeout_.bind(this),timeoutMs)}if(this.state_===PsimUiState.STARTING_ACTIVATION){this.startActivation_()}this.updateButtonBarState_()}onTimeout_(){this.closeActivationConnection_();switch(this.state_){case PsimUiState.STARTING_ACTIVATION:this.startActivationAttempts_++;if(this.startActivationAttempts_<MAX_START_ACTIVATION_ATTEMPTS){this.state_=PsimUiState.TIMEOUT_START_ACTIVATION}else{this.state_=PsimUiState.FINAL_TIMEOUT_START_ACTIVATION}return;case PsimUiState.WAITING_FOR_PORTAL_TO_LOAD:this.state_=PsimUiState.TIMEOUT_PORTAL_LOAD;return;case PsimUiState.WAITING_FOR_ACTIVATION_TO_FINISH:this.state_=PsimUiState.TIMEOUT_FINISH_ACTIVATION;return;default:assertNotReached()}}startActivation_(){assert(!this.activationDelegateReceiver_);this.activationDelegateReceiver_=new ActivationDelegateReceiver(this);this.cellularSetupRemote_.startActivation(this.activationDelegateReceiver_.$.bindNewPipeAndPassRemote()).then((params=>{this.carrierPortalHandler_=params.observer}))}closeActivationConnection_(){assert(!!this.activationDelegateReceiver_);this.activationDelegateReceiver_.$.close();this.activationDelegateReceiver_=null;this.carrierPortalHandler_=null;this.cellularMetadata_=null}clearTimer_(){if(this.currentTimeoutId_){clearTimeout(this.currentTimeoutId_)}this.currentTimeoutId_=null}onCarrierPortalLoaded_(){this.state_=PsimUiState.WAITING_FOR_USER_PAYMENT;this.carrierPortalHandler_.onCarrierPortalStatusChange(CarrierPortalStatus.kPortalLoadedWithoutPaidUser)}onCarrierPortalResult_(event){const success=event.detail;this.didCarrierPortalResultFail_=!success;this.state_=success?PsimUiState.ACTIVATION_SUCCESS:PsimUiState.ACTIVATION_FAILURE}getLoadingMessage_(){if(this.state_===PsimUiState.TIMEOUT_START_ACTIVATION){return this.i18n("simDetectPageErrorMessage")}else if(this.state_===PsimUiState.FINAL_TIMEOUT_START_ACTIVATION){return this.i18n("simDetectPageFinalErrorMessage")}return this.i18n("establishNetworkConnectionMessage")}isSimDetectError_(){return this.state_===PsimUiState.TIMEOUT_START_ACTIVATION||this.state_===PsimUiState.FINAL_TIMEOUT_START_ACTIVATION}getLoadingTitle_(){if(this.delegate.shouldShowPageTitle()&&this.isSimDetectError_()){return this.i18n("simDetectPageErrorTitle")}return""}}customElements.define(PsimFlowUiElement.is,PsimFlowUiElement);function getTemplate$$(){return html`<!--_html_template_start_--><style include="iron-positioning">:host([expanded_]) #pageBody{transition-duration:.2s}:host(:not([expanded_])) #pageBody{transition-duration:150ms}:host([expanded_]) #esimQrCodeDetection{height:190px;transition-duration:.2s}:host(:not([expanded_])) #esimQrCodeDetection{height:120px;transition-duration:150ms}:host cr-button{--ripple-opacity:0}#esimQrCodeDetection{background-color:var(--cros-bg-color-dropped-elevation-1);border-radius:8px;margin:28px 0 16px 0;overflow:hidden;display:flex;align-items:center;justify-content:center}paper-spinner-lite{height:20px;margin-inline-end:6px;margin-top:6px;width:20px}cr-button:not(:focus){border:none;box-shadow:none}cr-button:hover{background-color:transparent}cr-button[disabled]{background-color:transparent}cr-button[disabled]>iron-icon{--iron-icon-fill-color:var(--cros-icon-color-disabled)}.animate{transition-property:height;transition-timing-function:cubic-bezier(0,0,.2,1)}.label{font-weight:500}.button-image{margin-inline-end:8px}.scan-finish-image{position:absolute}.scan-finish-message{padding-inline-end:0;padding-inline-start:30px}.scan-finish-message:hover{cursor:default}.scan-error-header{--iron-icon-fill-color:var(--cros-icon-color-alert)}.scan-error-message{color:var(--cros-text-color-alert)}.blue-icon{--iron-icon-fill-color:var(--cros-icon-color-prominent)}.hidden{visibility:hidden}.visually-hidden{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}#activationCode{--cr-input-border-radius:8px;--cr-input-border-bottom:none}#scanSuccessHeader{--iron-icon-fill-color:var(--cros-icon-color-positive);margin-bottom:8px}#scanSuccessMessage{color:var(--cros-text-color-positive);font-size:medium}#scanFailureHeader{margin-bottom:4px}#useCameraAgainButton{color:var(--cros-sys-on_primary_container);display:block;font-weight:500;text-align:center}#tryAgainButton{color:var(--cros-sys-on_primary_container);display:block;text-align:center}#switchCameraButton{background-color:var(--cros-tooltip-background-color);border-radius:16px;color:var(--cros-tooltip-label-color);margin:8px;padding:8px;position:absolute;right:0;z-index:2}#switchCameraButton iron-icon{--iron-icon-fill-color:var(--cros-tooltip-icon-color);filter:brightness(2.1)}#inputSubtitle{bottom:0;color:var(--cros-text-color-secondary);font-size:var(--cr-form-field-label-font-size);letter-spacing:.4px;line-height:var(--cr-form-field-label-line-height);margin-top:-8px}#video{height:inherit;transform:rotateY(180deg)}#pageBody{margin-top:-20px}#startScanningButton{color:var(--cros-sys-on_primary_container);max-width:470px;min-width:345px;text-align:center;width:auto}#carrierLockWarningContainer{color:var(--cros-text-color-alert);display:flex;margin-bottom:24px;margin-top:20px}#carrierLockWarningIcon{--iron-icon-fill-color:var(--cros-icon-color-alert);--iron-icon-height:24px;--iron-icon-width:24px;margin-inline-end:4px}</style>
<base-page>
  <div slot="page-body" id="pageBody" class="animate">
    <span id="description" aria-live="polite">
      [[getDescription_(cameraCount_, qrCodeDetector_, showNoProfilesFound)]]
    </span>
    <template is="dom-if" if="[[shouldShowCarrierLockWarning_(isDeviceCarrierLocked_)]]" restamp>
      <div id="carrierLockWarningContainer" aria-live="polite" role="alert">
        <iron-icon id="carrierLockWarningIcon" icon="cellular-setup:warning">
        </iron-icon>
        [[i18n('eSimCarrierLockedDevice')]]
      </div>
    </template>
    <template is="dom-if" if="[[isScanningAvailable_(cameraCount_, qrCodeDetector_.*)]]" restamp>
      <div id="esimQrCodeDetection" class="animate">
        <cr-button id="switchCameraButton" on-click="onSwitchCameraButtonPressed_" hidden$="[[isUiElementHidden_(uiElementEnum_.SWITCH_CAMERA, state_, cameraCount_)]]" disabled="[[isUiElementDisabled_(uiElementEnum_.SWITCH_CAMERA, state_)]]">
          <iron-icon class="button-image" icon="cellular-setup:switch-camera"></iron-icon>
          [[i18n('switchCamera')]]
        </cr-button>
        <video id="video" autoplay muted hidden$="[[isUiElementHidden_(uiElementEnum_.VIDEO, state_)]]">
        </video>
        <template is="dom-if" if="[[qrCodeCameraA11yString_]]" restamp>
          <div class="visually-hidden" aria-live="polite">
            [[qrCodeCameraA11yString_]]
          </div>
        </template>
        <div class="center blue-icon" id="startScanningContainer" hidden$="[[isUiElementHidden_(uiElementEnum_.START_SCANNING, state_)]]">
          <cr-button class="label" id="startScanningButton" on-click="startScanning_" disabled="[[isUiElementDisabled_(uiElementEnum_.START_SCANNING, state_)]]">
            <iron-icon class="button-image" icon="cellular-setup:camera"></iron-icon>
            [[i18n('useCamera')]]
          </cr-button>
        </div>
        <div class="center" id="scanFinishContainer" hidden$="[[isUiElementHidden_(uiElementEnum_.SCAN_FINISH, state_)]]">
          <div>
            <div id="scanSuccessContainer" hidden$="[[isUiElementHidden_(uiElementEnum_.SCAN_SUCCESS, state_)]]">
              <div id="scanSuccessHeader" hidden$="[[isUiElementHidden_(uiElementEnum_.CODE_DETECTED, state_)]]">
                <iron-icon class="scan-finish-image" icon="cellular-setup:checked"></iron-icon>
                <span class="label scan-finish-message" id="scanSuccessMessage">
                  [[i18n('scanQRCodeSuccess')]]
                </span>
              </div>
              <div id="scanInstallFailureHeader" class="scan-error-header" hidden$="[[isUiElementHidden_(uiElementEnum_.SCAN_INSTALL_FAILURE, state_)]]">
                <iron-icon class="scan-finish-image" icon="cellular-setup:error"></iron-icon>
                <span class="label scan-finish-message scan-error-message">
                  [[i18n('scanQrCodeInvalid')]]
                </span>
              </div>
              <template is="dom-if" restamp if="[[!isUiElementHidden_(uiElementEnum_.SCAN_INSTALL_FAILURE, state_)]]">
                <cr-button id="useCameraAgainButton" class="blue-icon" on-click="startScanning_">
                  <iron-icon class="button-image" icon="cellular-setup:camera">
                  </iron-icon>
                  [[i18n('qrCodeUseCameraAgain')]]
                </cr-button>
              </template>
            </div>
            <div id="scanFailureContainer" hidden$="[[isUiElementHidden_(uiElementEnum_.SCAN_FAILURE, state_)]]">
              <div id="scanFailureHeader" class="scan-error-header">
                <iron-icon class="scan-finish-image" icon="cellular-setup:error"></iron-icon>
                <span class="label scan-finish-message scan-error-message">
                  [[i18n('scanQrCodeError')]]
                </span>
              </div>
              <cr-button id="tryAgainButton" class="blue-icon" on-click="startScanning_" disabled="[[isUiElementDisabled_(uiElementEnum_.SCAN_FAILURE, state_)]]">
                <iron-icon class="button-image" icon="cellular-setup:try-again"></iron-icon>
                [[i18n('qrCodeRetry')]]
              </cr-button>
            </div>
          </div>
        </div>
      </div>
    </template>
    <div id="activationCodeContainer" class$="[[computeActivationCodeClass_(
          cameraCount_, qrCodeDetector_.*)]]">
      <cr-input id="activationCode" label="[[i18n('activationCode')]]" value="{{activationCode}}" on-keydown="onKeyDown_" invalid="[[shouldActivationCodeInputBeInvalid_(state_,
              isActivationCodeInvalidFormat_)]]" error-message="[[getInputErrorMessage_()]]" aria-description="[[getInputSubtitle_()]]">
      </cr-input>
      <div id="inputSubtitle" hidden$="[[shouldActivationCodeInputBeInvalid_(state_,
              isActivationCodeInvalidFormat_)]]">
        [[getInputSubtitle_()]]
      </div>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const QR_CODE_DETECTION_INTERVAL_MS=1e3;var PageState;(function(PageState){PageState[PageState["MANUAL_ENTRY"]=1]="MANUAL_ENTRY";PageState[PageState["SCANNING_USER_FACING"]=2]="SCANNING_USER_FACING";PageState[PageState["SCANNING_ENVIRONMENT_FACING"]=3]="SCANNING_ENVIRONMENT_FACING";PageState[PageState["SWITCHING_CAM_USER_TO_ENVIRONMENT"]=4]="SWITCHING_CAM_USER_TO_ENVIRONMENT";PageState[PageState["SWITCHING_CAM_ENVIRONMENT_TO_USER"]=5]="SWITCHING_CAM_ENVIRONMENT_TO_USER";PageState[PageState["SCANNING_SUCCESS"]=6]="SCANNING_SUCCESS";PageState[PageState["SCANNING_FAILURE"]=7]="SCANNING_FAILURE";PageState[PageState["MANUAL_ENTRY_INSTALL_FAILURE"]=8]="MANUAL_ENTRY_INSTALL_FAILURE";PageState[PageState["SCANNING_INSTALL_FAILURE"]=9]="SCANNING_INSTALL_FAILURE"})(PageState||(PageState={}));var UiElement;(function(UiElement){UiElement[UiElement["START_SCANNING"]=1]="START_SCANNING";UiElement[UiElement["VIDEO"]=2]="VIDEO";UiElement[UiElement["SWITCH_CAMERA"]=3]="SWITCH_CAMERA";UiElement[UiElement["SCAN_FINISH"]=4]="SCAN_FINISH";UiElement[UiElement["SCAN_SUCCESS"]=5]="SCAN_SUCCESS";UiElement[UiElement["SCAN_FAILURE"]=6]="SCAN_FAILURE";UiElement[UiElement["CODE_DETECTED"]=7]="CODE_DETECTED";UiElement[UiElement["SCAN_INSTALL_FAILURE"]=8]="SCAN_INSTALL_FAILURE"})(UiElement||(UiElement={}));const QR_CODE_FORMAT="qr_code";const ACTIVATION_CODE_PREFIX="LPA:1$";const ActivationCodePageElementBase=I18nMixin(PolymerElement);class ActivationCodePageElement extends ActivationCodePageElementBase{static get is(){return"activation-code-page"}static get template(){return getTemplate$$()}static get properties(){return{activationCode:{type:String,notify:true,observer:"onActivationCodeChanged_"},showError:{type:Boolean,notify:true,observer:"onShowErrorChanged_"},isFromQrCode:{type:Boolean,notify:true,value:false},showNoProfilesFound:{type:Boolean,notify:true},uiElementEnum_:{type:Object,value:UiElement},state_:{type:Object,value:PageState,observer:"onStateChanged_"},cameraCount_:{type:Number,value:0,observer:"onHasCameraCountChanged_"},qrCodeDetector_:{type:Object,value:null},expanded_:{type:Boolean,value:false,reflectToAttribute:true},qrCodeCameraA11yString_:{type:String,value:""},isDeviceCarrierLocked_:{type:Boolean,value:false},isActivationCodeInvalidFormat_:{type:Boolean,value:false}}}constructor(){super();this.qrCodeDetector_=null;this.networkConfig_=null;this.mediaDevices_=null;this.stream_=null;this.qrCodeDetectorTimer_=null;this.setIntervalFunction_=setInterval.bind(window);this.barcodeDetectorClass_=BarcodeDetector;this.imageCaptureClass_=ImageCapture;this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();this.networkConfig_.getDeviceStateList().then((response=>{const devices=response.result;const deviceState=devices.find((device=>device.type==NetworkType.kCellular))||null;if(deviceState){this.isDeviceCarrierLocked_=deviceState.isCarrierLocked}}))}ready(){super.ready();this.setMediaDevices(navigator.mediaDevices);this.initBarcodeDetector_();this.state_=PageState.MANUAL_ENTRY}disconnectedCallback(){super.disconnectedCallback();this.stopStream_(this.stream_);if(this.qrCodeDetectorTimer_){this.clearQrCodeDetectorTimer_()}this.mediaDevices_.removeEventListener("devicechange",this.updateCameraCount_.bind(this))}playVideo_(){const videoElement=this.shadowRoot.querySelector("#video");if(videoElement){assert(this.stream_);videoElement.srcObject=this.stream_;videoElement.play()}}stopStream_(stream){if(stream){for(const track of stream.getTracks()){track.stop()}}}isScanningAvailable_(){return this.cameraCount_>0&&!!this.qrCodeDetector_}shouldShowCarrierLockWarning_(){return this.isDeviceCarrierLocked_}async initBarcodeDetector_(){const formats=await this.barcodeDetectorClass_.getSupportedFormats();if(!formats||formats.length===0){this.qrCodeDetector_=null;return}const qrCodeFormat=formats.find((format=>format===QR_CODE_FORMAT));if(qrCodeFormat){this.qrCodeDetector_=new this.barcodeDetectorClass_({formats:[QR_CODE_FORMAT]})}}setMediaDevices(mediaDevices){this.mediaDevices_=mediaDevices;this.updateCameraCount_();this.mediaDevices_.addEventListener("devicechange",this.updateCameraCount_.bind(this))}async setFakesForTesting(barcodeDetectorClass,imageCaptureClass,setIntervalFunction,playVideoFunction){this.barcodeDetectorClass_=barcodeDetectorClass;await this.initBarcodeDetector_();this.imageCaptureClass_=imageCaptureClass;this.setIntervalFunction_=setIntervalFunction;this.playVideo_=playVideoFunction}getQrCodeDetectorTimerForTest(){return this.qrCodeDetectorTimer_}attemptToFocusOnPageContent(){if(this.isScanningAvailable_()){const useCameraBtn=this.shadowRoot.querySelector("#startScanningButton");if(useCameraBtn){useCameraBtn.focus();return true}}const activationCodeInput=this.shadowRoot.querySelector("#activationCode");if(activationCodeInput){activationCodeInput.focus();return true}return false}computeActivationCodeClass_(){return this.isScanningAvailable_()?"relative":"center"}updateCameraCount_(){if(!this.mediaDevices_||!this.mediaDevices_.enumerateDevices){this.cameraCount_=0;return}this.mediaDevices_.enumerateDevices().then((devices=>{this.cameraCount_=devices.filter((device=>device.kind==="videoinput")).length})).catch((()=>{this.cameraCount_=0}))}onHasCameraCountChanged_(){if(this.state_===PageState.SCANNING_ENVIRONMENT_FACING&&this.cameraCount_===1){this.state_=PageState.SWITCHING_CAM_ENVIRONMENT_TO_USER;this.startScanning_()}}startScanning_(){if(this.qrCodeDetectorTimer_){this.clearQrCodeDetectorTimer_()}if(this.stream_){this.stopStream_(this.stream_)}const useUserFacingCamera=this.state_!==PageState.SWITCHING_CAM_USER_TO_ENVIRONMENT;this.mediaDevices_.getUserMedia({video:{height:130,width:482,facingMode:useUserFacingCamera?"user":"environment"},audio:false}).then((stream=>{this.stream_=stream;if(this.stream_){this.playVideo_()}this.activationCode="";this.state_=useUserFacingCamera?PageState.SCANNING_USER_FACING:PageState.SCANNING_ENVIRONMENT_FACING;if(this.stream_){this.detectQrCode_()}})).catch((()=>{this.state_=PageState.SCANNING_FAILURE}))}detectQrCode_(){try{this.qrCodeDetectorTimer_=this.setIntervalFunction_((async()=>{assert(!!this.stream_);const capturer=new this.imageCaptureClass_(this.stream_.getVideoTracks()[0]);const frame=await capturer.grabFrame();const activationCode=await this.detectActivationCode_(frame);if(activationCode){if(this.qrCodeDetectorTimer_){this.clearQrCodeDetectorTimer_()}this.activationCode=activationCode;this.stopStream_(this.stream_);if(this.validateActivationCode_(activationCode)){this.state_=PageState.SCANNING_SUCCESS}else{this.state_=PageState.SCANNING_INSTALL_FAILURE}}}),QR_CODE_DETECTION_INTERVAL_MS)}catch(error){this.state_=PageState.SCANNING_FAILURE}}async detectActivationCode_(frame){if(!this.qrCodeDetector_){return null}const qrCodes=await this.qrCodeDetector_.detect(frame);if(qrCodes.length>0){return qrCodes[0].rawValue}return null}onActivationCodeChanged_(){const event=new CustomEvent("activation-code-updated",{bubbles:true,composed:true,detail:{activationCode:this.validateActivationCode_(this.activationCode)?this.activationCode:null}});this.dispatchEvent(event)}clearQrCodeDetectorTimer_(){assert(!!this.qrCodeDetectorTimer_);clearTimeout(this.qrCodeDetectorTimer_);this.qrCodeDetectorTimer_=null}validateActivationCode_(activationCode){if(activationCode.length<=ACTIVATION_CODE_PREFIX.length){this.isActivationCodeInvalidFormat_=activationCode!==ACTIVATION_CODE_PREFIX.substring(0,activationCode.length);return false}else{this.isActivationCodeInvalidFormat_=activationCode.substring(0,ACTIVATION_CODE_PREFIX.length)!==ACTIVATION_CODE_PREFIX}if(this.isActivationCodeInvalidFormat_){return false}return true}onSwitchCameraButtonPressed_(){if(this.state_===PageState.SCANNING_USER_FACING){this.state_=PageState.SWITCHING_CAM_USER_TO_ENVIRONMENT}else if(this.state_===PageState.SCANNING_ENVIRONMENT_FACING){this.state_=PageState.SWITCHING_CAM_ENVIRONMENT_TO_USER}this.startScanning_()}onShowErrorChanged_(){if(this.showError){if(this.state_===PageState.MANUAL_ENTRY){this.state_=PageState.MANUAL_ENTRY_INSTALL_FAILURE;afterNextRender(this,(()=>{focusWithoutInk(this.$.activationCode)}))}else if(this.state_===PageState.SCANNING_SUCCESS){this.state_=PageState.SCANNING_INSTALL_FAILURE}}}onStateChanged_(){this.qrCodeCameraA11yString_="";if(this.state_!==PageState.MANUAL_ENTRY_INSTALL_FAILURE&&this.state_!==PageState.SCANNING_INSTALL_FAILURE){this.showError=false}if(this.state_===PageState.MANUAL_ENTRY){this.isFromQrCode=false;if(this.qrCodeDetectorTimer_){this.clearQrCodeDetectorTimer_()}afterNextRender(this,(()=>{this.stopStream_(this.stream_)}))}if(this.state_===PageState.SCANNING_USER_FACING||this.state_===PageState.SCANNING_ENVIRONMENT_FACING){this.qrCodeCameraA11yString_=this.i18n("qrCodeA11YCameraOn");this.expanded_=true;return}if(this.state_===PageState.SCANNING_SUCCESS){this.isFromQrCode=true;this.qrCodeCameraA11yString_=this.i18n("qrCodeA11YCameraScanSuccess");this.dispatchEvent(new CustomEvent("focus-default-button",{bubbles:true,composed:true}))}this.expanded_=false}onKeyDown_(e){if(e.key==="Enter"){this.dispatchEvent(new CustomEvent("forward-navigation-requested",{bubbles:true,composed:true}))}if(e.key==="Tab"){return}this.state_=PageState.MANUAL_ENTRY;e.stopPropagation()}isUiElementHidden_(uiElement,state){switch(uiElement){case UiElement.START_SCANNING:return state!==PageState.MANUAL_ENTRY&&state!==PageState.MANUAL_ENTRY_INSTALL_FAILURE;case UiElement.VIDEO:return state!==PageState.SCANNING_USER_FACING&&state!==PageState.SCANNING_ENVIRONMENT_FACING;case UiElement.SWITCH_CAMERA:const isScanning=state===PageState.SCANNING_USER_FACING||state===PageState.SCANNING_ENVIRONMENT_FACING;return!(isScanning&&this.cameraCount_>1);case UiElement.SCAN_FINISH:return state!==PageState.SCANNING_SUCCESS&&state!==PageState.SCANNING_FAILURE&&state!==PageState.SCANNING_INSTALL_FAILURE;case UiElement.SCAN_SUCCESS:return state!==PageState.SCANNING_SUCCESS&&state!==PageState.SCANNING_INSTALL_FAILURE;case UiElement.SCAN_FAILURE:return state!==PageState.SCANNING_FAILURE;case UiElement.CODE_DETECTED:return state!==PageState.SCANNING_SUCCESS;case UiElement.SCAN_INSTALL_FAILURE:return state!==PageState.SCANNING_INSTALL_FAILURE}}isUiElementDisabled_(uiElement,state){switch(uiElement){case UiElement.SWITCH_CAMERA:return state===PageState.SWITCHING_CAM_USER_TO_ENVIRONMENT||state===PageState.SWITCHING_CAM_ENVIRONMENT_TO_USER;default:return false}}getDescription_(){if(!this.isScanningAvailable_()){if(this.showNoProfilesFound){return this.i18n("enterActivationCodeNoProfilesFound")}return this.i18n("enterActivationCode")}if(this.showNoProfilesFound){return this.i18n("scanQRCodeNoProfilesFound")}return this.i18n("scanQRCode")}shouldActivationCodeInputBeInvalid_(state){if(this.isActivationCodeInvalidFormat_){return true}return state===PageState.MANUAL_ENTRY_INSTALL_FAILURE}getInputSubtitle_(){return loadTimeData.getString("scanQrCodeInputSubtitle")}getInputErrorMessage_(){return loadTimeData.getString("scanQrCodeInputError")}}customElements.define(ActivationCodePageElement.is,ActivationCodePageElement);function getTemplate$_(){return html`<!--_html_template_start_--><style>#pageBody{height:282px;margin-top:-20px;overflow:hidden}#animationContainer{display:flex;height:216px;margin-bottom:30px;margin-top:24px}cros-lottie-renderer{margin:auto}</style>

<base-page>
  <div slot="page-body" id="pageBody" class="layout vertical center-center">
    <span>[[i18n('verifyingActivationCode')]]</span>
    <div id="animationContainer">
      <cros-lottie-renderer id="spinner" asset-url="chrome://resources/ash/common/cellular_setup/spinner.json" autoplay dynamic aria-hidden>
      </cros-lottie-renderer>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ActivationVerificationPageElementBase=I18nMixin(PolymerElement);class ActivationVerificationPageElement extends ActivationVerificationPageElementBase{static get is(){return"activation-verification-page"}static get template(){return getTemplate$_()}}customElements.define(ActivationVerificationPageElement.is,ActivationVerificationPageElement);function getTemplate$Z(){return html`<!--_html_template_start_--><style include="cr-shared-style iron-flex">#pageBody{height:282px;margin-top:-20px;overflow:hidden}#illustration{height:216px;width:448px;align-self:center}</style>
<base-page>
  <div slot="page-body" id="pageBody">
    <localized-link id="shouldSkipDiscovery" localized-string="[[i18nAdvanced('profileDiscoveryConsentMessageWithLink')]]" on-link-clicked="shouldSkipDiscoveryClicked_">
    </localized-link>
    <iron-icon id="illustration" icon="cellular-setup-illo:network-setup">
    </iron-icon>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProfileDiscoveryConsentPageElementBase=I18nMixin(PolymerElement);class ProfileDiscoveryConsentPageElement extends ProfileDiscoveryConsentPageElementBase{static get is(){return"profile-discovery-consent-page"}static get template(){return getTemplate$Z()}static get properties(){return{shouldSkipDiscovery:{type:Boolean,notify:true}}}shouldSkipDiscoveryClicked_(e){e.detail.event.preventDefault();e.stopPropagation();this.shouldSkipDiscovery=true;this.dispatchEvent(new CustomEvent("forward-navigation-requested",{bubbles:true,composed:true}))}}customElements.define(ProfileDiscoveryConsentPageElement.is,ProfileDiscoveryConsentPageElement);function getTemplate$Y(){return html`<!--_html_template_start_--><style include="iron-flex iron-positioning">#container{background-color:transparent;border-radius:12px;border-width:1px;border:var(--cr-separator-line);box-sizing:border-box;color:var(--cr-secondary-text-color);font:var(--cros-body-2-font);height:64px;margin-bottom:6px;margin-top:6px;padding-inline-start:12px}:host([selected]) #container{color:var(--cros-sys-on_primary_container);background-color:var(--cros-sys-primary_container);border-style:none;font:var(--cros-button-2-font)}:host(:not([selected]):focus) #container{border-width:3px;padding-inline-start:10px}#details{align-items:center;display:flex;flex:auto;min-height:var(--cr-section-two-line-min-height)}#profileTitleLabel{margin-inline-start:8px}#profileImage{margin-inline-end:8px}.icon{padding-inline-end:var(--cr-section-padding)}#checkmark{--iron-icon-fill-color:var(--cros-icon-color-prominent)}</style>
<div id="container" class="flex layout horizontal center" selectable>
  <div id="details">
    
    <div class="flex settings-box-text">
      <div id="profileTitleLabel">
        [[getProfileName_(profileProperties)]]
      </div>
    </div>
  </div>
  <div class="icon" hidden$="[[!selected]]">
    <iron-icon id="checkmark" icon="cellular-setup:checked" tabindex="-1">
    </iron-icon>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ProfileDiscoveryListItemElement extends PolymerElement{static get is(){return"profile-discovery-list-item"}static get template(){return getTemplate$Y()}static get properties(){return{profileProperties:{type:Object,value:null,notify:true},selected:{type:Boolean,reflectToAttribute:true},isDarkModeActive_:{type:Boolean,value:false}}}getProfileName_(){if(!this.profileProperties){return""}return mojoString16ToString(this.profileProperties.name)}}customElements.define(ProfileDiscoveryListItemElement.is,ProfileDiscoveryListItemElement);function getTemplate$X(){return html`<!--_html_template_start_--><style include="cr-shared-style iron-flex">[slot=page-body]{height:282px;margin-top:-20px}#container{height:230px;margin-top:20px;overflow-x:hidden;overflow-y:auto}#carrierLockWarningContainer{color:var(--cros-text-color-alert);display:flex;margin-bottom:24px;margin-top:20px}#carrierLockWarningIcon{--iron-icon-fill-color:var(--cros-icon-color-alert);--iron-icon-height:24px;--iron-icon-width:24px;margin-inline-end:4px}[scrollable] iron-list>:not(.no-outline):focus{background-color:transparent!important}</style>
  <base-page>
    <div slot="page-body">
      <localized-link id="profileListMessage" localized-string="[[i18nAdvanced('profileListPageMessageWithLink')]]" on-link-clicked="enterManuallyClicked_">
      </localized-link>
      <template is="dom-if" if="[[shouldShowCarrierLockWarning_(isDeviceCarrierLocked_)]]" restamp>
          <div id="carrierLockWarningContainer" aria-live="alert">
            <iron-icon id="carrierLockWarningIcon" icon="cellular-setup:warning">
            </iron-icon>
            [[i18n('eSimCarrierLockedDevice')]]
          </div>
      </template>
      <div id="container" class="layout vertical flex" scrollable>
        <iron-list id="profileList" items="[[pendingProfileProperties]]" scroll-target="container" preserve-focus selection-enabled selected-item="{{selectedProfileProperties}}" role="listbox">
          <template>
            <profile-discovery-list-item profile-properties="[[item]]" selected="[[isProfilePropertiesSelected_(item, selectedProfileProperties)]]" tabindex="0" role="option" aria-selected="[[isProfilePropertiesSelected_(item, selectedProfileProperties)]]">
            </profile-discovery-list-item>
          </template>
        </iron-list>
      </div>
    </div>
  </base-page>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ProfileDiscoveryListPageElementBase=I18nMixin(PolymerElement);class ProfileDiscoveryListPageElement extends ProfileDiscoveryListPageElementBase{static get is(){return"profile-discovery-list-page"}static get template(){return getTemplate$X()}static get properties(){return{pendingProfileProperties:Array,selectedProfileProperties:{type:Object,notify:true},isDeviceCarrierLocked_:{type:Boolean,value:false}}}attemptToFocusOnFirstProfile(){if(!this.pendingProfileProperties||this.pendingProfileProperties.length===0){return false}const items=this.shadowRoot.querySelectorAll("profile-discovery-list-item");const item=items[0];assert(items.length>0);item.focus();item.setAttribute("selected","true");this.selectedProfileProperties=item.profileProperties;return true}isProfilePropertiesSelected_(profileProperties){return this.selectedProfileProperties===profileProperties}constructor(){super();const networkConfig=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();networkConfig.getDeviceStateList().then((response=>{const devices=response.result;const deviceState=devices.find((device=>device.type===NetworkType.kCellular))||null;if(deviceState){this.isDeviceCarrierLocked_=deviceState.isCarrierLocked}}))}shouldShowCarrierLockWarning_(){return this.isDeviceCarrierLocked_}enterManuallyClicked_(e){e.detail.event.preventDefault();e.stopPropagation();this.selectedProfileProperties=null;this.dispatchEvent(new CustomEvent("forward-navigation-requested",{bubbles:true,composed:true}))}}customElements.define(ProfileDiscoveryListPageElement.is,ProfileDiscoveryListPageElement);function getTemplate$W(){return html`<!--_html_template_start_--><style include="iron-flex iron-positioning">[slot=page-body]{height:282px;margin-top:-20px}#outerDiv{height:236px}.container{width:472px}#details{align-items:center;color:var(--cros-text-color-primary);display:flex;margin-bottom:40px}#confirmationCodeContainer{margin-inline-end:16px}</style>
<base-page>
  <div slot="page-body">
    <div aria-live="polite">
      [[i18n('confirmationCodeMessage')]]
    </div>
    <div id="outerDiv" class="layout horizontal center">
      <div class="container">
        <div id="details">
          <div>
            [[getProfileName_(profileProperties)]]
          </div>
        </div>
        <div id="confirmationCodeContainer" class="relative">
          <cr-input id="confirmationCode" label="[[i18n('confirmationCodeInput')]]" value="{{confirmationCode}}" error-message="[[i18n('confirmationCodeError')]]" invalid="[[showError]]" on-keydown="onKeyDown_">
          </cr-input>
        </div>
      </div>
    </div>
  </div>
</base-page>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ConfirmationCodePageElementBase=I18nMixin(PolymerElement);class ConfirmationCodePageElement extends ConfirmationCodePageElementBase{static get is(){return"confirmation-code-page"}static get template(){return getTemplate$W()}static get properties(){return{profileProperties:Object,confirmationCode:{type:String,notify:true},showError:Boolean}}onKeyDown_(e){if(e.key==="Enter"){this.dispatchEvent(new CustomEvent("forward-navigation-requested",{bubbles:true,composed:true}))}e.stopPropagation()}getProfileName_(){if(!this.profileProperties){return""}return mojoString16ToString(this.profileProperties.name)}}customElements.define(ConfirmationCodePageElement.is,ConfirmationCodePageElement);function getTemplate$V(){return html`<!--_html_template_start_--><style include="iron-flex">:host{align-content:space-between;display:flex;flex:1 1 auto;flex-direction:column}</style>
<iron-pages attr-for-selected="id" selected="[[selectedEsimPageName_]]">
  <setup-loading-page id="profileLoadingPage" loading-message="[[i18n('profileLoadingPageMessage')]]">
  </setup-loading-page>
  <profile-discovery-consent-page id="profileDiscoveryConsentPage" should-skip-discovery="{{shouldSkipDiscovery_}}">
  </profile-discovery-consent-page>
  <profile-discovery-list-page id="profileDiscoveryPage" pending-profile-properties="[[pendingProfileProperties_]]" selected-profile-properties="{{selectedProfileProperties_}}">
  </profile-discovery-list-page>
  <activation-code-page id="activationCodePage" is-from-qr-code="{{isActivationCodeFromQrCode_}}" activation-code="{{activationCode_}}" show-no-profiles-found="[[noProfilesFound_(pendingProfiles_, pendingProfileProperties_)]]" show-error="{{showError_}}">
  </activation-code-page>
  <setup-loading-page id="profileInstallingPage" loading-message="[[i18n('profileInstallingMessage')]]">
  </setup-loading-page>
  <confirmation-code-page id="confirmationCodePage" confirmation-code="{{confirmationCode_}}" profile-properties="[[selectedProfileProperties_]]" show-error="{{showError_}}">
  </confirmation-code-page>
  <final-page id="finalPage" delegate="[[delegate]]" show-error="[[showError_]]" message="[[i18n('eSimFinalPageMessage')]]" error-message="[[i18n('eSimFinalPageErrorMessage')]]">
  </final-page>
</iron-pages>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var EsimPageName;(function(EsimPageName){EsimPageName["PROFILE_LOADING"]="profileLoadingPage";EsimPageName["PROFILE_DISCOVERY_CONSENT"]="profileDiscoveryConsentPage";EsimPageName["PROFILE_DISCOVERY"]="profileDiscoveryPage";EsimPageName["ACTIVATION_CODE"]="activationCodePage";EsimPageName["CONFIRMATION_CODE"]="confirmationCodePage";EsimPageName["PROFILE_INSTALLING"]="profileInstallingPage";EsimPageName["FINAL"]="finalPage"})(EsimPageName||(EsimPageName={}));var EsimUiState;(function(EsimUiState){EsimUiState["PROFILE_SEARCH"]="profile-search";EsimUiState["PROFILE_SEARCH_CONSENT"]="profile-search-consent";EsimUiState["ACTIVATION_CODE_ENTRY"]="activation-code-entry";EsimUiState["ACTIVATION_CODE_ENTRY_READY"]="activation-code-entry-ready";EsimUiState["ACTIVATION_CODE_ENTRY_INSTALLING"]="activation-code-entry-installing";EsimUiState["CONFIRMATION_CODE_ENTRY"]="confirmation-code-entry";EsimUiState["CONFIRMATION_CODE_ENTRY_READY"]="confirmation-code-entry-ready";EsimUiState["CONFIRMATION_CODE_ENTRY_INSTALLING"]="confirmation-code-entry-installing";EsimUiState["PROFILE_SELECTION"]="profile-selection";EsimUiState["PROFILE_SELECTION_INSTALLING"]="profile-selection-installing";EsimUiState["SETUP_FINISH"]="setup-finish"})(EsimUiState||(EsimUiState={}));var EsimSetupFlowResult;(function(EsimSetupFlowResult){EsimSetupFlowResult[EsimSetupFlowResult["SUCCESS"]=0]="SUCCESS";EsimSetupFlowResult[EsimSetupFlowResult["INSTALL_FAIL"]=1]="INSTALL_FAIL";EsimSetupFlowResult[EsimSetupFlowResult["CANCELLED_NEEDS_CONFIRMATION_CODE"]=2]="CANCELLED_NEEDS_CONFIRMATION_CODE";EsimSetupFlowResult[EsimSetupFlowResult["CANCELLED_INVALID_ACTIVATION_CODE"]=3]="CANCELLED_INVALID_ACTIVATION_CODE";EsimSetupFlowResult[EsimSetupFlowResult["ERROR_FETCHING_PROFILES"]=4]="ERROR_FETCHING_PROFILES";EsimSetupFlowResult[EsimSetupFlowResult["CANCELLED_WITHOUT_ERROR"]=5]="CANCELLED_WITHOUT_ERROR";EsimSetupFlowResult[EsimSetupFlowResult["CANCELLED_NO_PROFILES"]=6]="CANCELLED_NO_PROFILES";EsimSetupFlowResult[EsimSetupFlowResult["NO_NETWORK"]=7]="NO_NETWORK"})(EsimSetupFlowResult||(EsimSetupFlowResult={}));const ESIM_SETUP_RESULT_METRIC_NAME="Network.Cellular.ESim.SetupFlowResult";const SUCCESSFUL_ESIM_SETUP_DURATION_METRIC_NAME="Network.Cellular.ESim.CellularSetup.Success.Duration";const FAILED_ESIM_SETUP_DURATION_METRIC_NAME="Network.Cellular.ESim.CellularSetup.Failure.Duration";const EsimFlowUiElementBase=mixinBehaviors([NetworkListenerBehavior],SubflowMixin(I18nMixin(PolymerElement)));class EsimFlowUiElement extends EsimFlowUiElementBase{static get is(){return"esim-flow-ui"}static get template(){return getTemplate$V()}static get properties(){return{delegate:Object,header:{type:String,notify:true,computed:"computeHeader_(selectedEsimPageName_, showError_)"},forwardButtonLabel:{type:String,notify:true},state_:{type:String,value:EsimUiState.PROFILE_SEARCH_CONSENT,observer:"onStateChanged_"},selectedEsimPageName_:String,hasConsentedForDiscovery_:{type:Boolean,value:false},shouldSkipDiscovery_:{type:Boolean,value:false},showError_:{type:Boolean,value:false},pendingProfileProperties_:Array,selectedProfileProperties_:{type:Object,observer:"onSelectedProfilePropertiesChanged_"},activationCode_:{type:String,value:""},confirmationCode_:{type:String,value:"",observer:"onConfirmationCodeUpdated_"},hasHadActiveCellularNetwork_:{type:Boolean,value:false},isActivationCodeFromQrCode_:Boolean}}constructor(){super();this.euicc_=null;this.lastProfileInstallResult_=null;this.hasFailedFetchingProfiles_=false;this.isOffline_=false;this.timeOnAttached_=null;this.eSimManagerRemote_=getESimManagerRemote();const networkConfig=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();const filter={filter:FilterType.kActive,limit:NO_LIMIT,networkType:NetworkType.kAll};networkConfig.getNetworkStateList(filter).then((response=>{this.onActiveNetworksChanged(response.result)}))}connectedCallback(){super.connectedCallback();this.timeOnAttached_=new Date}disconnectedCallback(){super.disconnectedCallback();let resultCode=null;switch(this.lastProfileInstallResult_){case null:if(this.hasFailedFetchingProfiles_){resultCode=EsimSetupFlowResult.ERROR_FETCHING_PROFILES}else if(this.noProfilesFound_()){resultCode=EsimSetupFlowResult.CANCELLED_NO_PROFILES}else{resultCode=EsimSetupFlowResult.CANCELLED_WITHOUT_ERROR}break;case ProfileInstallResult.kSuccess:resultCode=EsimSetupFlowResult.SUCCESS;break;case ProfileInstallResult.kFailure:resultCode=EsimSetupFlowResult.INSTALL_FAIL;break;case ProfileInstallResult.kErrorNeedsConfirmationCode:resultCode=EsimSetupFlowResult.CANCELLED_NEEDS_CONFIRMATION_CODE;break;case ProfileInstallResult.kErrorInvalidActivationCode:resultCode=EsimSetupFlowResult.CANCELLED_INVALID_ACTIVATION_CODE;break}if(this.isOffline_&&resultCode!==EsimSetupFlowResult.SUCCESS){resultCode=EsimSetupFlowResult.NO_NETWORK}assert(resultCode!==null);chrome.metricsPrivate.recordEnumerationValue(ESIM_SETUP_RESULT_METRIC_NAME,resultCode,Object.keys(EsimSetupFlowResult).length);const elapsedTimeMs=(new Date).getTime()-this.timeOnAttached_.getTime();if(resultCode===EsimSetupFlowResult.SUCCESS){chrome.metricsPrivate.recordLongTime(SUCCESSFUL_ESIM_SETUP_DURATION_METRIC_NAME,elapsedTimeMs);return}chrome.metricsPrivate.recordLongTime(FAILED_ESIM_SETUP_DURATION_METRIC_NAME,elapsedTimeMs)}ready(){super.ready();this.addEventListener("activation-code-updated",(event=>{this.onActivationCodeUpdated_(event)}));this.addEventListener("forward-navigation-requested",this.onForwardNavigationRequested_)}onActiveNetworksChanged(activeNetworks){this.isOffline_=!activeNetworks.some((network=>network.connectionState===ConnectionStateType.kOnline))}initSubflow(){this.refreshInstalledProfiles_();this.onNetworkStateListChanged()}async fetchProfiles_(){await this.getEuicc_();if(!this.euicc_){return}await this.getAvailableProfileProperties_();if(this.noProfilesFound_()){this.state_=EsimUiState.ACTIVATION_CODE_ENTRY}else{this.state_=EsimUiState.PROFILE_SELECTION}}async getEuicc_(){const euicc=await getEuicc();if(!euicc){this.hasFailedFetchingProfiles_=true;this.showError_=true;this.state_=EsimUiState.SETUP_FINISH;console.warn("No Euiccs found");return}this.euicc_=euicc}async getAvailableProfileProperties_(){assert(this.euicc_);const requestAvailableProfilesResponse=await this.euicc_.requestAvailableProfiles();if(requestAvailableProfilesResponse.result===ESimOperationResult.kFailure){this.hasFailedFetchingProfiles_=true;console.warn("Error requesting available profiles: ",requestAvailableProfilesResponse);this.pendingProfileProperties_=[]}this.pendingProfileProperties_=requestAvailableProfilesResponse.profiles.filter((properties=>properties.state===ProfileState.kPending&&properties.activationCode))}async refreshInstalledProfiles_(){await this.getEuicc_();if(!this.euicc_){return}await this.euicc_.refreshInstalledProfiles()}handleProfileInstallResponse_(response){this.lastProfileInstallResult_=response.result;if(response.result===ProfileInstallResult.kErrorNeedsConfirmationCode){this.state_=EsimUiState.CONFIRMATION_CODE_ENTRY;return}this.showError_=response.result!==ProfileInstallResult.kSuccess;if(response.result===ProfileInstallResult.kFailure&&this.state_===EsimUiState.CONFIRMATION_CODE_ENTRY_INSTALLING){this.state_=EsimUiState.CONFIRMATION_CODE_ENTRY_READY;return}if(response.result===ProfileInstallResult.kErrorInvalidActivationCode&&this.state_!==EsimUiState.PROFILE_SELECTION_INSTALLING){this.state_=EsimUiState.ACTIVATION_CODE_ENTRY_READY;return}if(response.result===ProfileInstallResult.kSuccess||response.result===ProfileInstallResult.kFailure){this.state_=EsimUiState.SETUP_FINISH}}onStateChanged_(newState,oldState){this.updateButtonBarState_();this.updateSelectedPage_();if(this.hasConsentedForDiscovery_&&newState===EsimUiState.PROFILE_SEARCH){this.fetchProfiles_()}this.initializePageState_(newState,oldState)}updateSelectedPage_(){const oldSelectedEsimPageName=this.selectedEsimPageName_;switch(this.state_){case EsimUiState.PROFILE_SEARCH:this.selectedEsimPageName_=EsimPageName.PROFILE_LOADING;break;case EsimUiState.PROFILE_SEARCH_CONSENT:this.selectedEsimPageName_=EsimPageName.PROFILE_DISCOVERY_CONSENT;break;case EsimUiState.ACTIVATION_CODE_ENTRY:case EsimUiState.ACTIVATION_CODE_ENTRY_READY:this.selectedEsimPageName_=EsimPageName.ACTIVATION_CODE;break;case EsimUiState.ACTIVATION_CODE_ENTRY_INSTALLING:this.selectedEsimPageName_=EsimPageName.PROFILE_INSTALLING;break;case EsimUiState.CONFIRMATION_CODE_ENTRY:case EsimUiState.CONFIRMATION_CODE_ENTRY_READY:this.selectedEsimPageName_=EsimPageName.CONFIRMATION_CODE;break;case EsimUiState.CONFIRMATION_CODE_ENTRY_INSTALLING:this.selectedEsimPageName_=EsimPageName.PROFILE_INSTALLING;break;case EsimUiState.PROFILE_SELECTION:this.selectedEsimPageName_=EsimPageName.PROFILE_DISCOVERY;break;case EsimUiState.PROFILE_SELECTION_INSTALLING:this.selectedEsimPageName_=EsimPageName.PROFILE_INSTALLING;break;case EsimUiState.SETUP_FINISH:this.selectedEsimPageName_=EsimPageName.FINAL;break;default:assertNotReached()}if(oldSelectedEsimPageName!==this.selectedEsimPageName_){this.dispatchEvent(new CustomEvent("focus-default-button",{bubbles:true,composed:true}))}}generateButtonStateForActivationPage_(enableForwardBtn,cancelButtonStateIfEnabled){this.forwardButtonLabel=this.i18n("next");return{cancel:cancelButtonStateIfEnabled,forward:enableForwardBtn||loadTimeData.valueExists("isESimEmptyActivationCodeSupportEnabled")&&loadTimeData.getBoolean("isESimEmptyActivationCodeSupportEnabled")?ButtonState.ENABLED:ButtonState.DISABLED}}generateButtonStateForConfirmationPage_(enableForwardBtn,cancelButtonStateIfEnabled){this.forwardButtonLabel=this.i18n("confirm");return{cancel:cancelButtonStateIfEnabled,forward:enableForwardBtn?ButtonState.ENABLED:ButtonState.DISABLED}}updateButtonBarState_(){let buttonState;const cancelButtonStateIfEnabled=this.delegate.shouldShowCancelButton()?ButtonState.ENABLED:ButtonState.HIDDEN;const cancelButtonStateIfDisabled=this.delegate.shouldShowCancelButton()?ButtonState.DISABLED:ButtonState.HIDDEN;switch(this.state_){case EsimUiState.PROFILE_SEARCH:this.forwardButtonLabel=this.i18n("next");buttonState={cancel:cancelButtonStateIfEnabled,forward:ButtonState.DISABLED};break;case EsimUiState.PROFILE_SEARCH_CONSENT:this.forwardButtonLabel=this.i18n("profileDiscoveryConsentScan");buttonState={cancel:ButtonState.ENABLED,forward:ButtonState.ENABLED};break;case EsimUiState.ACTIVATION_CODE_ENTRY:buttonState=this.generateButtonStateForActivationPage_(false,cancelButtonStateIfEnabled);break;case EsimUiState.ACTIVATION_CODE_ENTRY_READY:buttonState=this.generateButtonStateForActivationPage_(true,cancelButtonStateIfEnabled);break;case EsimUiState.ACTIVATION_CODE_ENTRY_INSTALLING:buttonState=this.generateButtonStateForActivationPage_(false,cancelButtonStateIfDisabled);break;case EsimUiState.CONFIRMATION_CODE_ENTRY:buttonState=this.generateButtonStateForConfirmationPage_(false,cancelButtonStateIfEnabled);break;case EsimUiState.CONFIRMATION_CODE_ENTRY_READY:buttonState=this.generateButtonStateForConfirmationPage_(true,cancelButtonStateIfEnabled);break;case EsimUiState.CONFIRMATION_CODE_ENTRY_INSTALLING:buttonState=this.generateButtonStateForConfirmationPage_(false,cancelButtonStateIfDisabled);break;case EsimUiState.PROFILE_SELECTION:this.updateForwardButtonLabel_();buttonState={cancel:cancelButtonStateIfEnabled,forward:ButtonState.ENABLED};break;case EsimUiState.PROFILE_SELECTION_INSTALLING:buttonState={cancel:cancelButtonStateIfDisabled,forward:ButtonState.DISABLED};break;case EsimUiState.SETUP_FINISH:this.forwardButtonLabel=this.i18n("done");buttonState={cancel:ButtonState.HIDDEN,forward:ButtonState.ENABLED};break;default:assertNotReached()}this.set("buttonState",buttonState)}updateForwardButtonLabel_(){this.forwardButtonLabel=this.selectedProfileProperties_?this.i18n("next"):this.i18n("skipDiscovery")}initializePageState_(newState,oldState){if(newState===EsimUiState.CONFIRMATION_CODE_ENTRY&&oldState!==EsimUiState.CONFIRMATION_CODE_ENTRY_READY){this.confirmationCode_=""}if(newState===EsimUiState.ACTIVATION_CODE_ENTRY&&oldState!==EsimUiState.ACTIVATION_CODE_ENTRY_READY){this.activationCode_=""}}onActivationCodeUpdated_(event){if(this.state_!==EsimUiState.ACTIVATION_CODE_ENTRY&&this.state_!==EsimUiState.ACTIVATION_CODE_ENTRY_READY){return}this.state_=event.detail.activationCode?EsimUiState.ACTIVATION_CODE_ENTRY_READY:EsimUiState.ACTIVATION_CODE_ENTRY}onSelectedProfilePropertiesChanged_(){if(this.state_!==EsimUiState.PROFILE_SELECTION){return}this.updateForwardButtonLabel_()}onConfirmationCodeUpdated_(){if(this.state_!==EsimUiState.CONFIRMATION_CODE_ENTRY&&this.state_!==EsimUiState.CONFIRMATION_CODE_ENTRY_READY){return}this.state_=this.confirmationCode_?EsimUiState.CONFIRMATION_CODE_ENTRY_READY:EsimUiState.CONFIRMATION_CODE_ENTRY}navigateForward(){this.showError_=false;switch(this.state_){case EsimUiState.PROFILE_SEARCH_CONSENT:if(this.shouldSkipDiscovery_){this.state_=EsimUiState.ACTIVATION_CODE_ENTRY;break}this.hasConsentedForDiscovery_=true;this.state_=EsimUiState.PROFILE_SEARCH;break;case EsimUiState.ACTIVATION_CODE_ENTRY_READY:assert(this.euicc_);const confirmationCode="";this.state_=EsimUiState.ACTIVATION_CODE_ENTRY_INSTALLING;this.euicc_.installProfileFromActivationCode(this.activationCode_,confirmationCode,this.computeProfileInstallMethod_()).then(this.handleProfileInstallResponse_.bind(this));break;case EsimUiState.PROFILE_SELECTION:if(this.selectedProfileProperties_){assert(this.euicc_);this.state_=EsimUiState.PROFILE_SELECTION_INSTALLING;const confirmationCode="";this.euicc_.installProfileFromActivationCode(this.selectedProfileProperties_.activationCode,confirmationCode,ProfileInstallMethod.kViaSmds).then(this.handleProfileInstallResponse_.bind(this))}else{this.state_=EsimUiState.ACTIVATION_CODE_ENTRY}break;case EsimUiState.CONFIRMATION_CODE_ENTRY_READY:this.state_=EsimUiState.CONFIRMATION_CODE_ENTRY_INSTALLING;assert(this.euicc_);const fromQrCode=this.selectedProfileProperties_?true:false;const activationCode=fromQrCode?this.selectedProfileProperties_.activationCode:this.activationCode_;this.euicc_.installProfileFromActivationCode(activationCode,this.confirmationCode_,this.computeProfileInstallMethod_()).then(this.handleProfileInstallResponse_.bind(this));break;case EsimUiState.SETUP_FINISH:this.dispatchEvent(new CustomEvent("exit-cellular-setup",{bubbles:true,composed:true}));break;case EsimUiState.ACTIVATION_CODE_ENTRY:if(loadTimeData.valueExists("isESimEmptyActivationCodeSupportEnabled")&&loadTimeData.getBoolean("isESimEmptyActivationCodeSupportEnabled")){this.state_=EsimUiState.SETUP_FINISH}break;default:assertNotReached()}}maybeFocusPageElement(){switch(this.state_){case EsimUiState.ACTIVATION_CODE_ENTRY:case EsimUiState.ACTIVATION_CODE_ENTRY_READY:const activationCodePage=this.shadowRoot.querySelector("#activationCodePage");if(!activationCodePage){return false}return activationCodePage.attemptToFocusOnPageContent();case EsimUiState.PROFILE_SELECTION:const profileDiscoveryPage=this.shadowRoot.querySelector("#profileDiscoveryPage");if(!profileDiscoveryPage){return false}return profileDiscoveryPage.attemptToFocusOnFirstProfile();default:return false}}onForwardNavigationRequested_(){if(this.state_===EsimUiState.ACTIVATION_CODE_ENTRY_READY||this.state_===EsimUiState.CONFIRMATION_CODE_ENTRY_READY||this.state_===EsimUiState.PROFILE_SEARCH_CONSENT||this.state_===EsimUiState.PROFILE_SELECTION){this.navigateForward()}}async onNetworkStateListChanged(){const hasActive=await hasActiveCellularNetwork();if(hasActive){this.hasHadActiveCellularNetwork_=hasActive}}computeHeader_(){if(this.selectedEsimPageName_===EsimPageName.FINAL&&!this.showError_){return this.i18n("eSimFinalPageSuccessHeader")}if(this.selectedEsimPageName_===EsimPageName.PROFILE_DISCOVERY_CONSENT){return this.i18n("profileDiscoveryConsentTitle")}if(this.selectedEsimPageName_===EsimPageName.PROFILE_DISCOVERY){return this.i18n("profileDiscoveryPageTitle")}if(this.selectedEsimPageName_==EsimPageName.CONFIRMATION_CODE){return this.i18n("confimationCodePageTitle")}if(this.selectedEsimPageName_==EsimPageName.PROFILE_LOADING){return this.i18n("profileLoadingPageTitle")}return""}computeProfileInstallMethod_(){if(this.isActivationCodeFromQrCode_){return this.hasConsentedForDiscovery_?ProfileInstallMethod.kViaQrCodeAfterSmds:ProfileInstallMethod.kViaQrCodeSkippedSmds}return this.hasConsentedForDiscovery_?ProfileInstallMethod.kViaActivationCodeAfterSmds:ProfileInstallMethod.kViaActivationCodeSkippedSmds}noProfilesFound_(){return this.hasConsentedForDiscovery_&&!!this.pendingProfileProperties_&&this.pendingProfileProperties_.length===0}profilesFound_(){return this.hasConsentedForDiscovery_&&!!this.pendingProfileProperties_&&this.pendingProfileProperties_.length>0}getSelectedEsimPageNameForTest(){return this.selectedEsimPageName_}}customElements.define(EsimFlowUiElement.is,EsimFlowUiElement);function getTemplate$U(){return html`<!--_html_template_start_--><iron-pages attr-for-selected="id" selected="[[currentPageName]]" selected-item="{{currentPage_}}">
  <template is="dom-if" if="[[shouldShowPsimFlow_(currentPageName)]]" restamp>
    <psim-flow-ui button-state="{{buttonState_}}" name-of-carrier-pending-setup="{{flowPsimBanner}}" delegate="[[delegate]]" id="psim-flow-ui" forward-button-label="{{forwardButtonLabel_}}">
    </psim-flow-ui>
  </template>
  <template is="dom-if" if="[[shouldShowEsimFlow_(currentPageName)]]" restamp>
    <esim-flow-ui button-state="{{buttonState_}}" delegate="[[delegate]]" id="esim-flow-ui" header="{{flowHeader}}" forward-button-label="{{forwardButtonLabel_}}">
    </esim-flow-ui>
  </template>
</iron-pages>
<button-bar id="buttonBar" button-state="[[buttonState_]]" forward-button-label="[[forwardButtonLabel_]]">
</button-bar>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CellularSetupElement extends PolymerElement{static get is(){return"cellular-setup"}static get template(){return getTemplate$U()}static get properties(){return{delegate:Object,flowPsimBanner:{type:String,notify:true,value:""},flowHeader:{type:String,notify:true,value:""},currentPageName:String,selectedFlow_:{type:String,value:null},buttonState_:{type:Object,notify:true},currentPage_:{type:Object,observer:"onPageChange_"},forwardButtonLabel_:{type:String}}}connectedCallback(){super.connectedCallback();if(!this.currentPageName){this.currentPageName=CellularSetupPageName.ESIM_FLOW_UI}}ready(){super.ready();this.addEventListener("retry-requested",this.onRetryRequested_);this.addEventListener("forward-nav-requested",this.onForwardNavRequested_);this.addEventListener("cancel-requested",this.onCancelRequested_);this.addEventListener("focus-default-button",this.onFocusDefaultButton_)}onPageChange_(){if(this.currentPage_){this.flowPsimBanner="";this.currentPage_.initSubflow()}}onCancelRequested_(){this.dispatchEvent(new CustomEvent("exit-cellular-setup",{bubbles:true,composed:true}))}onRetryRequested_(){}onForwardNavRequested_(){this.currentPage_.navigateForward()}onFocusDefaultButton_(){afterNextRender(this,(()=>{if(this.currentPage_.maybeFocusPageElement()){return}this.$.buttonBar.focusDefaultButton()}))}shouldShowPsimFlow_(currentPage){return currentPage===CellularSetupPageName.PSIM_FLOW_UI}shouldShowEsimFlow_(currentPage){return currentPage===CellularSetupPageName.ESIM_FLOW_UI}}customElements.define(CellularSetupElement.is,CellularSetupElement);function getTemplate$T(){return html`<!--_html_template_start_--><style include="settings-shared">@media (min-width:640px){:host{--cr-dialog-width:512px}}@media (max-width:640px){:host{--cr-dialog-width:320px}}[slot=title]{--cr-dialog-title-slot-padding-bottom:8px;--cr-dialog-title-slot-padding-end:32px;--cr-dialog-title-slot-padding-start:32px;--cr-dialog-title-slot-padding-top:32px}#dialog [slot=body]{--cr-dialog-body-padding-horizontal:32px}#title{align-items:center;background-color:var(--cros-dialog-title-background-color);display:flex;font-size:x-small;height:32px;justify-content:center}</style>

<cr-dialog id="dialog">
  <div slot="title">
    <template is="dom-if" if="[[shouldShowPsimBanner_(psimBanner_)]]" restamp>
      <div id="psim-banner">
        [[psimBanner_]]
      </div>
    </template>
    <div id="header">[[getDialogHeader_(dialogHeader_)]]</div>
  </div>
  <div slot="body">
    <cellular-setup flow-psim-banner="{{psimBanner_}}" flow-header="{{dialogHeader_}}" delegate="[[delegate_]]" current-page-name="[[pageName]]">
    </cellular-setup>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class CellularSetupSettingsDelegate{shouldShowPageTitle(){return false}shouldShowCancelButton(){return true}}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsSettingsCellularSetupDialogElementBase=I18nMixin(PolymerElement);class OsSettingsCellularSetupDialogElement extends OsSettingsCellularSetupDialogElementBase{static get is(){return"os-settings-cellular-setup-dialog"}static get template(){return getTemplate$T()}static get properties(){return{pageName:String,delegate_:Object,psimBanner_:{type:String},dialogHeader_:{type:String}}}constructor(){super();this.delegate_=new CellularSetupSettingsDelegate}ready(){super.ready();this.addEventListener("exit-cellular-setup",this.onExitCellularSetup_)}connectedCallback(){super.connectedCallback();this.$.dialog.showModal()}onExitCellularSetup_(){this.$.dialog.close()}shouldShowPsimBanner_(){return!!this.psimBanner_}getDialogHeader_(){if(this.dialogHeader_){return this.dialogHeader_}return this.i18n("cellularSetupDialogTitle")}}customElements.define(OsSettingsCellularSetupDialogElement.is,OsSettingsCellularSetupDialogElement);function getTemplate$S(){return html`<!--_html_template_start_--><style include="settings-shared iron-positioning">:host{--cr-dialog-width:416px;--cr-dialog-title-slot-padding-bottom:10px}#body{overflow:hidden;padding:0 20px 2px 20px}#warningMessage{--iron-icon-fill-color:var(--cros-icon-color-disabled);--iron-icon-height:16px;--iron-icon-width:16px;font-size:smaller;padding-bottom:12px}#warningMessage iron-icon{float:left;padding-inline-end:4px}:host-context([dir=rtl]) #warningMessage iron-icon{float:right}#warningMessage div{overflow:hidden}#inputContainer{margin-top:12px}#inputInfo{background-color:var(--cros-bg-color);color:var(--cros-text-color-secondary);font-size:var(--cr-form-field-label-font-size);font-weight:400;height:30px;line-height:var(--cr-form-field-label-line-height);padding-top:8px;position:absolute;top:50px;width:100%}@media (prefers-color-scheme:dark){#inputInfo{background-image:linear-gradient(rgba(255,255,255,.04),rgba(255,255,255,.04))}}#inputInfo.error{color:var(--cros-text-color-alert)}#inputSubtitle{display:block;width:260px}#inputCount{position:absolute;right:0;top:8px}:host-context([dir=rtl]) #inputCount{left:0;right:auto}#cancel{margin-inline-end:8px}</style>
<cr-dialog id="profileRenameDialog" show-on-attach>
  <div slot="title">Rename Profile</div>
  <div id="body" slot="body">
    <div id="warningMessage" hidden$="[[!showCellularDisconnectWarning]]">
      <iron-icon icon="cr:info-outline"></iron-icon>
      <div>This may cause your mobile network to briefly disconnect</div>
    </div>
    <template is="dom-if" if="[[!errorMessage_]]" restamp>
      <div id="inputContainer" class="relative">
        
        <cr-input id="eSimprofileName" value="{{esimProfileName_}}" spellcheck="false" disabled="[[isRenameInProgress_]]" invalid="[[isInputInvalid_]]" label="New profile name" aria-label="[[i18n('eSimRenameProfileDialogLabel')]]" aria-description="[[i18n('eSimRenameProfileInputA11yLabel',
                maxInputLength)]]" error-message="[[i18n('eSimRenameProfileInputA11yLabel',
                maxInputLength)]]">
        </cr-input>
        <div id="inputInfo" class$="[[getInputInfoClass_(isInputInvalid_)]]" aria-hidden="true">
          <span id="inputSubtitle">Name can use letters, numbers, and special characters</span>
          <span id="inputCount">
            [[getInputCountString_(esimProfileName_)]]
          </span>
        </div>
      </div>
    </template>
    <div id="errorMessage" aria-live="polite" hidden$="[[!errorMessage_]]">
      [[errorMessage_]]
    </div>
  </div>
  <div slot="button-container">
    <template is="dom-if" if="[[!errorMessage_]]" restamp>
      <cr-button id="cancel" on-click="onCancelClick_" disabled="[[isRenameInProgress_]]" class="cancel-button">
        Cancel
      </cr-button>
    </template>
    <cr-button id="done" on-click="onRenameDialogDoneClick_" disabled="[[isDoneButtonDisabled_(isRenameInProgress_,
            esimProfileName_)]]" aria-label$="[[getDoneBtnA11yLabel_(esimProfileName_)]]" aria-describedby="warningMessage" class="action-button">
      Done
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_INPUT_LENGTH=20;const MIN_INPUT_LENGTH=1;const EMOJI_REGEX_EXP=/(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/gi;const EsimRenameDialogElementBase=I18nMixin(PolymerElement);class EsimRenameDialogElement extends EsimRenameDialogElementBase{static get is(){return"esim-rename-dialog"}static get template(){return getTemplate$S()}static get properties(){return{maxInputLength:{type:Number,value:MAX_INPUT_LENGTH,readonly:true},networkState:{type:Object,value:null},showCellularDisconnectWarning:{type:Boolean,value:false},errorMessage_:{type:String,value:""},esimProfileName_:{type:String,value:"",observer:"onEsimProfileNameChanged_"},isInputInvalid_:{type:Boolean,value:false},isRenameInProgress_:{type:Boolean,value:false}}}constructor(){super();this.esimProfileRemote_=null}connectedCallback(){super.connectedCallback();this.init_()}async init_(){if(!(this.networkState&&this.networkState.type===NetworkType.kCellular)){return}this.esimProfileRemote_=await getESimProfile(this.networkState.typeState.cellular.iccid);if(!this.esimProfileRemote_){this.errorMessage_=this.i18n("eSimRenameProfileDialogError")}this.esimProfileName_=this.networkState.name;if(!this.errorMessage_){this.shadowRoot.querySelector("#eSimprofileName").focus()}}async onRenameDialogDoneClick_(){if(this.errorMessage_){this.$.profileRenameDialog.close();return}this.isRenameInProgress_=true;const name=stringToMojoString16(this.esimProfileName_);const response=await this.esimProfileRemote_.setProfileNickname(name);this.handleSetProfileNicknameResponse_(response.result)}handleSetProfileNicknameResponse_(result){this.isRenameInProgress_=false;if(result===ESimOperationResult.kFailure){const showErrorToastEvent=new CustomEvent("show-error-toast",{bubbles:true,composed:true,detail:this.i18n("eSimRenameProfileDialogError")});this.dispatchEvent(showErrorToastEvent)}this.$.profileRenameDialog.close()}onCancelClick_(){this.$.profileRenameDialog.close()}onEsimProfileNameChanged_(_newValue,oldValue){if(oldValue){const sanitizedOldValue=oldValue.replace(EMOJI_REGEX_EXP,"");this.isInputInvalid_=sanitizedOldValue.length>MAX_INPUT_LENGTH}else{this.isInputInvalid_=false}const sanitizedProfileName=this.esimProfileName_.replace(EMOJI_REGEX_EXP,"");this.esimProfileName_=sanitizedProfileName.substring(0,MAX_INPUT_LENGTH)}getInputInfoClass_(isInputInvalid){return isInputInvalid?"error":""}getInputCountString_(esimProfileName){return this.i18n("eSimRenameProfileInputCharacterCount",esimProfileName.length.toLocaleString(undefined,{minimumIntegerDigits:2}),MAX_INPUT_LENGTH.toLocaleString())}isDoneButtonDisabled_(isRenameInProgress,esimProfileName){if(isRenameInProgress){return true}return esimProfileName.length<MIN_INPUT_LENGTH}getDoneBtnA11yLabel_(esimProfileName){return this.i18n("eSimRenameProfileDoneBtnA11yLabel",esimProfileName)}}customElements.define(EsimRenameDialogElement.is,EsimRenameDialogElement);function getTemplate$R(){return html`<!--_html_template_start_--><style include="settings-shared">:host{--cr-dialog-width:416px}#title{height:15px}#warningMessage{--iron-icon-fill-color:var(--cros-icon-color-disabled);--iron-icon-height:16px;--iron-icon-width:16px;font-size:smaller;margin-top:20px}#warningMessage iron-icon{float:left;padding-inline-end:4px}:host-context([dir=rtl]) #warningMessage iron-icon{float:right}#warningMessage div{overflow:hidden}#cancel{margin-inline-end:8px}#cancel:focus{box-shadow:0 0 0 2px var(--focus-shadow-color)}</style>
<cr-dialog id="dialog" show-on-attach>
  <div id="title" slot="title">
    [[getTitleString_(esimProfileName_)]]
  </div>
  <div slot="body">
    <div id="description">You may not be able to reinstall this profile</div>
    <div id="warningMessage" hidden$="[[!showCellularDisconnectWarning]]">
      <iron-icon icon="cr:info-outline"></iron-icon>
      <div>This may cause your mobile network to briefly disconnect</div>
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="cancel" aria-label="[[getCancelBtnA11yLabel_(esimProfileName_)]]" on-click="onCancelClick_" class="cancel-button">
      Cancel
    </cr-button>
    <cr-button id="remove" aria-label$="[[getRemoveBtnA11yLabel_(esimProfileName_)]]" aria-describedby="description warningMessage" on-click="onRemoveProfileClick_" class="action-button">
      Remove
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const EsimRemoveProfileDialogElementBase=I18nMixin(PolymerElement);class EsimRemoveProfileDialogElement extends EsimRemoveProfileDialogElementBase{static get is(){return"esim-remove-profile-dialog"}static get template(){return getTemplate$R()}static get properties(){return{networkState:{type:Object,value:null},showCellularDisconnectWarning:{type:Boolean,value:false},esimProfileName_:{type:String,value:""}}}constructor(){super();this.esimProfileRemote_=null}connectedCallback(){super.connectedCallback();this.init_()}async init_(){if(!(this.networkState&&this.networkState.type===NetworkType.kCellular)){return}this.esimProfileRemote_=await getESimProfile(this.networkState.typeState.cellular.iccid);if(!this.esimProfileRemote_){this.fireShowErrorToastEvent_();this.$.dialog.close();return}this.esimProfileName_=this.networkState.name;this.$.cancel.focus()}getTitleString_(){if(!this.esimProfileName_){return""}return this.i18n("esimRemoveProfileDialogTitle",this.esimProfileName_)}onRemoveProfileClick_(){this.esimProfileRemote_.uninstallProfile().then((response=>{if(response.result===ESimOperationResult.kFailure){this.fireShowErrorToastEvent_()}}));this.$.dialog.close();const params=new URLSearchParams;params.append("type",OncMojo.getNetworkTypeString(NetworkType.kCellular));Router.getInstance().setCurrentRoute(routes.INTERNET_NETWORKS,params,true)}onCancelClick_(){this.$.dialog.close()}getRemoveBtnA11yLabel_(esimProfileName){return this.i18n("eSimRemoveProfileRemoveA11yLabel",esimProfileName)}getCancelBtnA11yLabel_(esimProfileName){return this.i18n("eSimRemoveProfileCancelA11yLabel",esimProfileName)}fireShowErrorToastEvent_(){const showErrorToastEvent=new CustomEvent("show-error-toast",{bubbles:true,composed:true,detail:this.i18n("eSimRemoveProfileDialogError")});this.dispatchEvent(showErrorToastEvent)}}customElements.define(EsimRemoveProfileDialogElement.is,EsimRemoveProfileDialogElement);function getTemplate$Q(){return html`<!--_html_template_start_--><style include="internet-shared iron-flex">:host{--cr-dialog-width:380px}#subtitle{font-size:.75rem;font-weight:500;height:40px;position:relative;left:20px;top:-10px;width:340px}#warningMessage{--iron-icon-fill-color:var(--cros-icon-color-disabled);--iron-icon-height:16px;--iron-icon-width:16px;font-size:smaller;margin-top:20px}#warningMessage iron-icon{float:left;padding-inline-end:4px}:host-context([dir=rtl]) #warningMessage iron-icon{float:right}#warningMessage div{overflow:hidden}network-config-toggle{color:var(--cr-primary-text-color)}.input-info{font-size:var(--cr-form-field-label-font-size);height:20px;position:relative;top:-16px}.error{color:var(--cros-text-color-alert)}#errorMessage{font-weight:500}</style>

<cr-dialog id="dialog" show-on-attach>
  <div slot="title">Configure Chromebook hotspot</div>>
  <div slot="header" id="subtitle" class="secondary">
    <localized-link localized-string="[[i18nAdvanced('hotspotSettingsSubtitle')]]">
    </localized-link>
  </div>

  <div id="body" slot="body" aria-hidden="true">
    <network-config-input id="hotspotName" label="Hotspot name" value="{{hotspotSsid_}}" invalid="[[isSsidInvalid_]]">
    </network-config-input>
    <div id="hotspotNameInputInfo" class$="[[getSsidInputInfoClass_(isSsidInvalid_)]]" aria-hidden="true">
      [[getSsidInputInfo_(hotspotSsid_)]]
    </div>
    <network-password-input id="hotspotPassword" label="Password" value="{{hotspotPassword_}}" invalid="[[isPasswordInvalid_]]">
    </network-password-input>
    <div id="hotspotPasswordInputInfo" class$="[[getPasswordInputInfoClass_(isPasswordInvalid_)]]" aria-hidden="true">
      Use at least 8 characters
    </div>
    <network-config-select id="security" label="Security" onc-prefix="Hotspot.WiFi.Security" value="{{securityType_}}" items="[[getSecurityItems_()]]">
    </network-config-select>
    <network-config-toggle id="hotspotBssidToggle" label="Improve privacy for this hotspot" sub-label="Randomize your hardware&#39;s ID (BSSID) to prevent others from tracking this device." checked="{{isRandomizeBssidToggleOn_}}">
    </network-config-toggle>
    <network-config-toggle id="hotspotCompatibilityToggle" label="Extend compatibility" sub-label="Help other devices find this hotspot." checked="{{isExtendCompatibilityToggleOn_}}">
    </network-config-toggle>
    <div id="warningMessage" aria-hidden="true">
      <iron-icon tabindex="0" icon="cr:info-outline" aria-labelledby="hotspotConfigWarningMessage">
      </iron-icon>
      <div id="hotspotConfigWarningMessage">
        Changing settings will restart the hotspot. Devices using the hotspot will disconnect.
      </div>
    </div>
  </div>

  <div class="layout horizontal center" slot="button-container">
    <template is="dom-if" if="[[error_]]" restamp>
      <div id="errorMessage" class="flex error">
        [[error_]]
      </div>
    </template>
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelClick_">
      Cancel
    </cr-button>
    <cr-button id="saveButton" class="action-button" on-click="onSaveClick_" disabled="[[isSaveButtonDisabled_(isSsidInvalid_, isPasswordInvalid_)]]">
      Save
    </cr-button>
  </div>
</cr-dialog><!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var WiFiSecurityType;(function(WiFiSecurityType){WiFiSecurityType["WPA2"]="WPA2";WiFiSecurityType["WPA3"]="WPA3";WiFiSecurityType["WPA2WPA3"]="WPA2WPA3"})(WiFiSecurityType||(WiFiSecurityType={}));const MIN_WIFI_PASSWORD_LENGTH=8;const MAX_WIFI_PASSWORD_LENGTH=63;const MAX_HOTSPOT_SSID_LENGTH=32;const HotspotConfigDialogElementBase=I18nMixin(PolymerElement);class HotspotConfigDialogElement extends HotspotConfigDialogElementBase{static get is(){return"hotspot-config-dialog"}static get template(){return getTemplate$Q()}static get properties(){return{hotspotInfo:{type:Object},hotspotSsid_:{type:String,value:"",observer:"onSsidChanged_"},isSsidInvalid_:{type:Boolean,value:false},hotspotPassword_:{type:String,value:"",observer:"onPasswordChanged_"},isPasswordInvalid_:{type:Boolean,value:false},securityType_:{type:String,value:""},isRandomizeBssidToggleOn_:{type:Boolean,value:true},isExtendCompatibilityToggleOn_:{type:Boolean,value:false},error_:{type:String,value:""}}}connectedCallback(){super.connectedCallback();this.init_()}init_(){this.hotspotSsid_=castExists(this.hotspotInfo.config.ssid);this.hotspotPassword_=castExists(this.hotspotInfo.config.passphrase);this.isRandomizeBssidToggleOn_=castExists(this.hotspotInfo.config.bssidRandomization);this.isExtendCompatibilityToggleOn_=this.hotspotInfo.config.band===WiFiBand.k2_4GHz;this.securityType_=this.getWifiSecurityTypeString_(castExists(this.hotspotInfo.config.security))}onSsidChanged_(){this.isSsidInvalid_=this.hotspotSsid_.length===0||this.hotspotSsid_.length>MAX_HOTSPOT_SSID_LENGTH}onPasswordChanged_(){this.isPasswordInvalid_=this.hotspotPassword_.length<MIN_WIFI_PASSWORD_LENGTH||this.hotspotPassword_.length>MAX_WIFI_PASSWORD_LENGTH}getWifiSecurityTypeString_(security){if(security===WiFiSecurityMode.kWpa2){return WiFiSecurityType.WPA2}if(security===WiFiSecurityMode.kWpa3){return WiFiSecurityType.WPA3}if(security===WiFiSecurityMode.kWpa2Wpa3){return WiFiSecurityType.WPA2WPA3}assertNotReached()}getSecurityModeFromString_(security){if(security===WiFiSecurityType.WPA2){return WiFiSecurityMode.kWpa2}if(security===WiFiSecurityType.WPA3){return WiFiSecurityMode.kWpa3}if(security===WiFiSecurityType.WPA2WPA3){return WiFiSecurityMode.kWpa2Wpa3}assertNotReached()}getSecurityItems_(){return this.hotspotInfo.allowedWifiSecurityModes.map((security=>this.getWifiSecurityTypeString_(security)))}getSsidInputInfoClass_(){if(!this.isSsidInvalid_){return"input-info"}return"input-info error"}getSsidInputInfo_(){if(this.hotspotSsid_.length===0){return this.i18n("hotspotConfigNameEmptyInfo")}if(this.hotspotSsid_.length>MAX_HOTSPOT_SSID_LENGTH){return this.i18n("hotspotConfigNameTooLongInfo")}return this.i18n("hotspotConfigNameInfo")}getPasswordInputInfoClass_(){if(!this.isPasswordInvalid_){return"input-info"}return"input-info error"}isSaveButtonDisabled_(){return this.isSsidInvalid_||this.isPasswordInvalid_}onCancelClick_(){this.$.dialog.close()}async onSaveClick_(){const configToSet={ssid:this.hotspotSsid_,passphrase:this.hotspotPassword_,security:this.getSecurityModeFromString_(this.securityType_),band:this.isExtendCompatibilityToggleOn_?WiFiBand.k2_4GHz:WiFiBand.kAutoChoose,bssidRandomization:this.isRandomizeBssidToggleOn_,autoDisable:castExists(this.hotspotInfo.config.autoDisable)};const response=await getHotspotConfig().setHotspotConfig(configToSet);if(response.result===SetHotspotConfigResult.kSuccess){this.$.dialog.close();return}if(response.result===SetHotspotConfigResult.kFailedInvalidConfiguration){this.error_=this.i18n("hotspotConfigInvalidConfigurationErrorMessage")}else if(response.result===SetHotspotConfigResult.kFailedNotLogin){this.error_=this.i18n("hotspotConfigNotLoginErrorMessage")}else{this.error_=this.i18n("hotspotConfigGeneralErrorMessage")}}}customElements.define(HotspotConfigDialogElement.is,HotspotConfigDialogElement);function getTemplate$P(){return html`<!--_html_template_start_--><style include="network-shared">
  #container {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  cr-input {
    width: 100%;
  }

  cr-policy-network-indicator-mojo {
    --cr-tooltip-icon-margin-start: var(--cr-controlled-by-spacing);
  }
</style>

<div id="container">
  <cr-input label="[[label]]" value="{{value}}"
      hidden="[[hidden]]" readonly="[[readonly]]"
      disabled="[[getDisabled_(disabled, property)]]"
      invalid="[[invalid]]"
      on-keypress="onKeypress_">
  </cr-input>
  <cr-policy-network-indicator-mojo
      property="[[property]]" tooltip-position="left">
  </cr-policy-network-indicator>
</div>
<!--_html_template_end_-->`}
// Copyright 2018 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkConfigInputElementBase=mixinBehaviors([CrPolicyNetworkBehaviorMojo,NetworkConfigElementBehavior],PolymerElement);class NetworkConfigInputElement extends NetworkConfigInputElementBase{static get is(){return"network-config-input"}static get template(){return getTemplate$P()}static get properties(){return{label:String,hidden:{type:Boolean,reflectToAttribute:true},invalid:{type:Boolean,value:false},readonly:{type:Boolean,value:false},value:String}}focus(){const input=this.shadowRoot.querySelector("cr-input");assert(input);input.focus()}onKeypress_(event){if(event.key!=="Enter"){return}event.stopPropagation();this.dispatchEvent(new CustomEvent("enter",{bubbles:true,composed:true}))}}customElements.define(NetworkConfigInputElement.is,NetworkConfigInputElement);function getTemplate$O(){return html`<!--_html_template_start_--><style include="cr-shared-style network-shared md-select">
  .md-select {
    color: var(--cr-primary-text-color);
    width: 100%;
  }

  #outer {
    align-items: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: var(--cr-form-field-bottom-spacing);
    padding: 0;
  }

  #inner {
    align-items: center;
    display: flex;
    flex-direction: row;
  }

  cr-policy-network-indicator-mojo {
    --cr-tooltip-icon-margin-start: var(--cr-controlled-by-spacing);
  }
</style>

<div id="outer">
  <div id="label" class="cr-form-field-label">[[label]]</div>
  <div id="inner">
    <select class="md-select"
        disabled="[[getDisabled_(disabled, property)]]"
        value="{{value::change}}" aria-label$="[[label]]">
      <template is="dom-repeat" items="[[items]]">
        <option value="[[getItemValue_(item)]]"
            disabled="[[!getItemEnabled_(item, deviceCertsOnly)]]">
          [[getItemLabel_(item, key, oncPrefix)]]
        </option>
      </template>
    </select>
    <cr-policy-network-indicator-mojo
        property="[[property]]" tooltip-position="left">
    </cr-policy-network-indicator-mojo>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkConfigSelectElementBase=mixinBehaviors([I18nBehavior,CrPolicyNetworkBehaviorMojo,NetworkConfigElementBehavior],PolymerElement);class NetworkConfigSelectElement extends NetworkConfigSelectElementBase{static get is(){return"network-config-select"}static get template(){return getTemplate$O()}static get properties(){return{label:String,certList:Boolean,deviceCertsOnly:Boolean,items:Array,key:String,oncPrefix:{type:String,value:""}}}static get observers(){return["updateSelected_(items, value)"]}focus(){this.shadowRoot.querySelector("select").focus()}updateSelected_(){microTask.run(function(){const select=this.shadowRoot.querySelector("select");if(select.value!==this.value){select.value=this.value}}.bind(this))}getItemLabel_(item){if(this.certList){return this.getCertificateName_(item)}let value;if(this.key){value=OncMojo.getTypeString(this.key,item)}else{value=item}const oncValue="Onc"+this.oncPrefix.replace(/\./g,"-")+"_"+value;if(this.i18nExists(oncValue)){return this.i18n(oncValue)}assertNotReached$1("ONC value not found: "+oncValue);return value}getItemValue_(item){if(this.certList){return item.hash}return item}getItemEnabled_(item){if(this.certList){const cert=item;if(this.deviceCertsOnly&&!cert.deviceWide){return false}return!!cert.hash}return true}getCertificateName_(certificate){if(certificate.hardwareBacked){return this.i18n("networkCertificateNameHardwareBacked",certificate.issuedBy,certificate.issuedTo)}if(certificate.issuedTo){return this.i18n("networkCertificateName",certificate.issuedBy,certificate.issuedTo)}return certificate.issuedBy}isPrefilledValueValid(){if(this.prefilledValue===undefined||this.prefilledValue===null){return false}return this.items.includes(this.prefilledValue)}extraSetupForPrefilledValue(){this.disabled=true}}customElements.define(NetworkConfigSelectElement.is,NetworkConfigSelectElement);function getTemplate$N(){return html`<!--_html_template_start_--><style include="network-shared action-link iron-flex">
  #spinner-container {
    height: 200px;
  }

  .inline-text {
    margin-bottom: 12px;
  }

  .peer-card {
    background-color: var(--cr-card-background-color);
    border-radius: var(--cr-card-border-radius);
    box-shadow: var(--cr-card-shadow);
    flex: 1;
    margin-bottom: 8px;
    padding-inline-end: 10px;
    padding-inline-start: 10px;
    padding-top: 6px;
  }
</style>

<template is="dom-if" if="[[!managedProperties_]]" restamp>
  <div id="spinner-container" class="layout vertical center-center">
    <paper-spinner-lite active></paper-spinner-lite>
  </div>
</template>

<template is="dom-if" if="[[managedProperties_]]" restamp>
  <!-- SSID (WiFi) -->
  <template is="dom-if" if="[[isWiFi_(mojoType_)]]" restamp>
    <network-config-input id="ssid" label="[[i18n('OncWiFi-SSID')]]"
        value="{{configProperties_.typeConfig.wifi.ssid}}"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.ssid}}"
        readonly="[[hasGuid_(guid)]]">
    </network-config-input>
  </template>

  <!-- Security (WiFi and Ethernet) -->
  <template is="dom-if" if="[[securityIsVisible_(mojoType_)]]" restamp>
    <network-config-select id="security"
        label="[[i18n('OncWiFi-Security')]]"
        value="{{securityType_}}" key="security"
        disabled="[[!securityIsEnabled_(guid, mojoType_)]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.security}}"
        items="[[getSecurityItems_(mojoType_)]]"
        onc-prefix="WiFi.Security"
        property="[[getManagedSecurity_(managedProperties_)]]">
    </network-config-select>
  </template>

  <!-- Passphrase (WiFi) -->
  <template is="dom-if" restamp if="[[configRequiresPassphrase_]]">
    <network-password-input id="wifi-passphrase"
        on-keypress="onWifiPasswordInputKeypress_"
        label="[[i18n('OncWiFi-Passphrase')]]"
        value="{{configProperties_.typeConfig.wifi.passphrase}}"
        managed-properties="[[managedProperties_]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.passphrase}}"
        property="[[managedProperties_.typeProperties.wifi.passphrase]]">
    </network-password-input>
  </template>

  <!-- VPN -->
  <template is="dom-if" if="[[showVpn_]]" restamp>
    <network-config-input id="vpn-name-input" label="[[i18n('OncName')]]"
        value="{{configProperties_.name}}"
        readonly="[[hasGuid_(guid)]]">
    </network-config-input>
    <network-config-select id="vpn-type-select" label="[[i18n('OncVPN-Type')]]"
        value="{{vpnType_}}" items="[[vpnTypeItems_]]"
        onc-prefix="VPN.Type" disabled="[[hasGuid_(guid)]]">
    </network-config-select>
    <template is="dom-if" if="[[!showVpn_.WireGuard]]">
      <network-config-input id="vpn-host-input"
          label="[[i18n('OncVPN-Host')]]"
          value="{{configProperties_.typeConfig.vpn.host}}"
          property="[[managedProperties_.typeProperties.vpn.host]]">
      </network-config-input>
    </template>
    <template is="dom-if" if="[[showVpn_.IPsec]]" restamp>
      <network-config-select label="[[i18n('OncVPN-IPsec-AuthType')]]"
          id="ipsec-auth-type" value="{{ipsecAuthType_}}"
          items="[[ipsecAuthTypeItems_]]" onc-prefix="VPN.IPsec.AuthType"
          disabled="[[hasGuid_(guid)]]">
      </network-config-select>
      <template is="dom-if" if="[[showVpn_.IPsecEAP]]" restamp>
        <network-config-input label="[[i18n('OncVPN-IPsec-Username')]]"
            id="ipsec-eap-username-input"
            value="{{eapProperties_.identity}}"
            property="[[managedEapProperties_.identity]]">
        </network-config-input>
        <network-password-input label="[[i18n('OncVPN-IPsec-Password')]]"
            id="ipsec-eap-password-input"
            value="{{eapProperties_.password}}"
            managed-properties="[[managedProperties_]]"
            property="[[managedEapProperties_.password]]">
        </network-password-input>
      </template>
      <template is="dom-if" if="[[!showVpn_.IKEv2]]" restamp>
        <network-config-input label="[[i18n('OncVPN-L2TP-Username')]]"
            id="l2tp-username-input"
            value="{{configProperties_.typeConfig.vpn.l2tp.username}}"
            managed-properties="[[managedProperties_]]"
            property="[[managedProperties_.typeProperties.vpn.l2tp.username]]">
        </network-config-input>
        <network-password-input label="[[i18n('OncVPN-L2TP-Password')]]"
            value="{{configProperties_.typeConfig.vpn.l2tp.password}}"
            managed-properties="[[managedProperties_]]"
            property="[[managedProperties_.typeProperties.vpn.l2tp.password]]">
        </network-password-input>
        <network-config-input label="[[i18n('OncVPN-IPsec-Group')]]"
            value="{{configProperties_.typeConfig.vpn.ipSec.group}}"
            property="[[managedProperties_.typeProperties.vpn.ipSec.group]]">
        </network-config-input>
      </template>
      <template is="dom-if" if="[[showVpn_.IPsecPSK]]" restamp>
        <network-password-input label="[[i18n('OncVPN-IPsec-PSK')]]"
            id="ipsec-psk-input"
            value="{{configProperties_.typeConfig.vpn.ipSec.psk}}"
            managed-properties="[[managedProperties_]]"
            property="[[managedProperties_.typeProperties.vpn.ipSec.psk]]">
        </network-password-input>
      </template>
      <template is="dom-if" if="[[showVpn_.IKEv2]]" restamp>
        <network-config-input label="[[i18n('OncVPN-IPsec-LocalIdentity')]]"
            id="ipsec-local-id-input"
            value="{{configProperties_.typeConfig.vpn.ipSec.localIdentity}}"
            property="[[managedProperties_.typeProperties.vpn.ipSec.localIdentity]]">
        </network-config-input>
        <network-config-input label="[[i18n('OncVPN-IPsec-RemoteIdentity')]]"
            id="ipsec-remote-id-input"
            value="{{configProperties_.typeConfig.vpn.ipSec.remoteIdentity}}"
            property="[[managedProperties_.typeProperties.vpn.ipSec.remoteIdentity]]">
        </network-config-input>
      </template>
    </template>
    <template is="dom-if" if="[[showVpn_.OpenVPN]]" restamp>
      <network-config-input label="[[i18n('OncVPN-OpenVPN-Username')]]"
          id="openvpn-username-input"
          value="{{configProperties_.typeConfig.vpn.openVpn.username}}"
          property="[[managedProperties_.typeProperties.vpn.openVpn.username]]">
      </network-config-input>
      <network-password-input label="[[i18n('OncVPN-OpenVPN-Password')]]"
          id="openvpn-password-input"
          value="{{configProperties_.typeConfig.vpn.openVpn.password}}"
          managed-properties="[[managedProperties_]]"
          property="[[managedProperties_.typeProperties.vpn.openVpn.password]]">
      </network-password-input>
      <network-config-input label="[[i18n('OncVPN-OpenVPN-OTP')]]"
          id="openvpn-otp-input"
          value="{{configProperties_.typeConfig.vpn.openVpn.otp}}"
          property="[[managedProperties_.typeProperties.vpn.openVpn.otp]]">
      </network-config-input>
    </template>
    <template is="dom-if" if="[[showVpn_.ServerCA]]" restamp>
      <network-config-select id="vpnServerCa"
          label="[[i18n('OncEAP-ServerCA')]]"
          value="{{selectedServerCaHash_}}" items="[[serverCaCerts_]]"
          cert-list
          property="[[getManagedVpnServerCaRefs_(managedProperties_)]]">
      </network-config-select>
    </template>
    <template is="dom-if" if="[[showVpn_.UserCert]]" restamp>
      <network-config-select id="vpnUserCert"
          label="[[i18n('OncEAP-UserCert')]]"
          value="{{selectedUserCertHash_}}" items="[[userCerts_]]"
          cert-list
          property="[[getManagedVpnClientCertType_(managedProperties_)]]">
      </network-config-select>
    </template>
    <template is="dom-if" if="[[showVpn_.WireGuard]]">
      <network-config-input label="[[i18n('OncVPN-WireGuard-IPAddress')]]"
          id="wireguard-ip-input"
          value="{{ipAddressInput_}}"
          property="[[managedProperties_.typeProperties.vpn.wireguard.ipAddresses]]">
      </network-config-input>
      <network-config-input label="[[i18n('OncVPN-WireGuard-DNS')]]"
          value="{{nameServersInput_}}"
          property="[[managedProperties_.staticIpConfig.nameServers]]">
      </network-config-input>
      <network-config-select id="wireguard-key-type"
          label="[[i18n('OncVPN-WireGuard-Key')]]"
          value="{{wireguardKeyType_}}" items="[[wireguardKeyTypeItems_]]"
          onc-prefix="VPN.WireGuard.Key">
      </network-config-select>
      <template is="dom-if" if="[[isWireGuardUserPrivateKeyInputActive_]]">
        <network-password-input label="[[i18n('OncVPN-WireGuard-PrivateKey')]]"
            id="wireguardPrivateKeyInput"
            value="{{configProperties_.typeConfig.vpn.wireguard.privateKey}}"
            managed-properties="[[managedProperties_]]"
            property="[[managedProperties_.typeProperties.vpn.wireguard.privateKey]]">
        </network-password-input>
      </template>
      <div class="peer-card">
        <div class="inline-text">[[i18n('OncVPN-WireGuard-Peer')]]</div>
        <network-config-input label="[[i18n('OncVPN-WireGuard-Peer-PublicKey')]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.publicKey}}">
        </network-config-input>
        <network-password-input label="[[i18n('OncVPN-WireGuard-Peer-PresharedKey')]]"
            managed-properties="[[managedProperties_]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.presharedKey}}">
        </network-password-input>
        <network-config-input label="[[i18n('OncVPN-WireGuard-Peer-Endpoint')]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.endpoint}}">
        </network-config-input>
        <network-config-input label="[[i18n('OncVPN-WireGuard-Peer-AllowedIP')]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.allowedIps}}">
        </network-config-input>
        <network-config-input label="[[i18n('OncVPN-WireGuard-Peer-PersistentKeepalive')]]"
            value="{{configProperties_.typeConfig.vpn.wireguard.peers.0.persistentKeepalive}}">
        </network-config-input>
      </div>
    </template>
    <template is="dom-if" if="[[!showVpn_.WireGuard]]">
      <network-config-toggle label="[[i18n('networkConfigSaveCredentials')]]"
          id="vpn-save-credentials-toggle"
          checked="{{vpnSaveCredentials_}}"
          property="[[getManagedVpnSaveCredentials_(managedProperties_)]]">
      </network-config-toggle>
    </template>
  </template>

  <!-- EAP (WiFi, Ethernet) -->
  <template is="dom-if" if="[[showEap_]]" restamp>
    <network-config-select id="outer" label="[[i18n('OncEAP-Outer')]]"
        value="{{eapProperties_.outer}}" items="[[eapOuterItems_]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.outer}}"
        onc-prefix="EAP.Outer" hidden="[[!showEap_.Outer]]"
        property="[[managedEapProperties_.outer]]">
    </network-config-select>
    <network-config-select id="inner" label="[[i18n('OncEAP-Inner')]]"
        value="{{eapProperties_.inner}}"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.inner}}"
        items="[[getEapInnerItems_(eapProperties_.outer)]]"
        onc-prefix="EAP.Inner" hidden="[[!showEap_.Inner]]"
        property="[[managedEapProperties_.inner]]">
    </network-config-select>
    <network-config-select id="serverCa" label="[[i18n('OncEAP-ServerCA')]]"
        value="{{selectedServerCaHash_}}" items="[[serverCaCerts_]]"
        hidden="[[!showEap_.ServerCA]]" cert-list
        property="[[managedEapProperties_.useSystemCAs]]"
        device-certs-only="[[deviceCertsOnly_]]">
    </network-config-select>
    <network-config-input label="[[i18n('OncEAP-SubjectMatch')]]"
        value="{{eapProperties_.subjectMatch}}"
        hidden="[[!showEap_.EapServerCertMatch]]"
        property="[[managedEapProperties_.subjectMatch]]">
    </network-config-input>
    <network-config-input label="[[i18n('OncEAP-SubjectAltNameMatch')]]"
        value="{{serializedSubjectAltNameMatch_}}"
        hidden="[[!showEap_.EapServerCertMatch]]"
        property="[[managedEapProperties_.subjectAltNameMatch]]">
    </network-config-input>
    <network-config-input label="[[i18n('OncEAP-DomainSuffixMatch')]]"
        value="{{serializedDomainSuffixMatch_}}"
        hidden="[[!showEap_.EapServerCertMatch]]"
        property="[[managedEapProperties_.domainSuffixMatch]]">
    </network-config-input>
    <network-config-select id="userCert" label="[[i18n('OncEAP-UserCert')]]"
        value="{{selectedUserCertHash_}}" items="[[userCerts_]]"
        hidden="[[!showEap_.UserCert]]" cert-list
        property="[[managedEapProperties_.clientCertType]]"
        device-certs-only="[[deviceCertsOnly_]]">
    </network-config-select>
    <network-config-input id="oncEAPIdentity" label="[[i18n('OncEAP-Identity')]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.identity}}"
        value="{{eapProperties_.identity}}" hidden="[[!showEap_.Identity]]"
        property="[[managedEapProperties_.identity]]">
    </network-config-input>
    <network-password-input id="eapPassword" label="[[i18n('OncEAP-Password')]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.password}}"
        value="{{eapProperties_.password}}" hidden="[[!showEap_.Password]]"
        property="[[managedEapProperties_.password]]">
    </network-password-input>
    <network-config-input id="oncEAPAnonymousIdentity" label="[[i18n('OncEAP-AnonymousIdentity')]]"
        prefilled-value="{{prefilledProperties.typeConfig.wifi.eap.anonymousIdentity}}"
        value="{{eapProperties_.anonymousIdentity}}"
        hidden="[[!showEap_.AnonymousIdentity]]"
        property="[[managedEapProperties_.anonymousIdentity]]">
    </network-config-input>
    <network-config-toggle label="[[i18n('networkConfigSaveCredentials')]]"
        checked="{{eapProperties_.saveCredentials}}"
        property="[[managedEapProperties_.saveCredentials]]">
    </network-config-toggle>
  </template>

  <!-- Share (WiFi) -->
  <template is="dom-if" if="[[shareIsVisible_(managedProperties_, globalPolicy_)]]" restamp>
    <!-- TODO: b/302726243 - Reuse just one network-config-toggle -->
    <template is="dom-if" if="[[!networkIsEphemeral_(managedProperties_, globalPolicy_)]]" restamp>
      <network-config-toggle id="share" label="[[i18n('networkConfigShare')]]"
          checked="{{shareNetwork_}}" on-change="onShareChanged_"
          disabled="[[!shareIsEnabled_(configProperties_.*,
                    eapProperties_.*, shareAllowEnable)]]">
      </network-config-toggle>
    </template>
    <template is="dom-if" if="[[networkIsEphemeral_(managedProperties_, globalPolicy_)]]" restamp>
      <network-config-toggle id="shareEphemeralDisabled" label="[[i18n('networkConfigShare')]]"
          property="{{shareNetworkEphemeralDisabled_}}">
      </network-config-toggle>
    </template>
  </template>

  <!-- AutoConnect (WiFi) -->
  <template is="dom-if" if="[[configCanAutoConnect_(mojoType_)]]" restamp>
    <div class="property-box">
      <div id="autoConnectLabel" class="start">
        [[i18n('networkAutoConnect')]]
      </div>
      <template is="dom-if"
          if="[[isAutoConnectEnforcedByPolicy_(globalPolicy_)]]" restamp>
        <cr-policy-indicator indicator-type="devicePolicy">
        </cr-policy-indicator>
      </template>
      <cr-toggle id="autoConnect" checked="{{autoConnect_}}"
          disabled="[[autoConnectDisabled_(globalPolicy_)]]"
          aria-labelledby="autoConnectLabel">
      </cr-toggle>
    </div>
  </template>

  <!-- Hidden Network Warning -->
  <template is="dom-if" if="{{hiddenNetworkWarning_}}" restamp>
    <div>
      <iron-icon icon="cr:warning"></iron-icon>
      [[i18nAdvanced('hiddenNetworkWarning')]]
    </div>
  </template>
</template>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var VPNConfigType;(function(VPNConfigType){VPNConfigType["IKEV2"]="IKEv2";VPNConfigType["L2TP_IPSEC"]="L2TP_IPsec";VPNConfigType["OPEN_VPN"]="OpenVPN";VPNConfigType["WIREGUARD"]="WireGuard"})(VPNConfigType||(VPNConfigType={}));var IpsecAuthType;(function(IpsecAuthType){IpsecAuthType["PSK"]="PSK";IpsecAuthType["CERT"]="Cert";IpsecAuthType["EAP"]="EAP"})(IpsecAuthType||(IpsecAuthType={}));var WireGuardKeyConfigType;(function(WireGuardKeyConfigType){WireGuardKeyConfigType["USE_CURRENT"]="UseCurrent";WireGuardKeyConfigType["GENERATE_NEW"]="GenerateNew";WireGuardKeyConfigType["USER_INPUT"]="UserInput"})(WireGuardKeyConfigType||(WireGuardKeyConfigType={}));const DEFAULT_HASH="default";const DO_NOT_CHECK_HASH="do-not-check";const NO_CERTS_HASH="no-certs";const NO_USER_CERT_HASH="no-user-cert";const DEFAULT_EAP_OUTER_PROTOCOL="PEAP";const PLACEHOLDER_CREDENTIAL="(credential)";const MIN_PASSPHRASE_LENGTH=5;const IPV4_ADDR_REGEX=/^([0-9]+\.){3}[0-9]+$/i;const IPV6_ADDR_REGEX=/^(\:?[0-9a-f]{0,4}){2,8}$/i;const IP_CIDR_REGEX=/^[0-9a-f\.\:]+\/[0-9]+?$/i;const NetworkConfigElementBase=mixinBehaviors([NetworkListenerBehavior],I18nMixin(PolymerElement));class NetworkConfigElement extends NetworkConfigElementBase{static get is(){return"network-config"}static get template(){return getTemplate$N()}static get properties(){return{globalPolicy_:Object,guid:String,name:String,type:String,mojoType_:{type:Number,value:undefined},shareAllowEnable:Boolean,shareDefault:Boolean,enableConnect:{type:Boolean,notify:true,value:false},enableSave:{type:Boolean,notify:true,value:false},connectOnEnter:{type:Boolean,value:false},error:{type:String,notify:true},prefilledProperties:Object,managedProperties_:{type:Object,value:null},managedEapProperties_:{type:Object,value:null},propertiesSent_:{type:Boolean,value:false},configProperties_:{type:Object,value:undefined},eapProperties_:{type:Object},cachedServerCaCerts_:{type:Array,value:undefined},cachedUserCerts_:{type:Array,value:undefined},serverCaCerts_:{type:Array,value(){return[]}},selectedServerCaHash_:{type:String,value:undefined},userCerts_:{type:Array,value(){return[]}},selectedUserCertHash_:{type:String,value:undefined,observer:"updateIsConfigured_"},isConfigured_:{type:Boolean,value:false},shareNetwork_:{type:Boolean,value:true},shareNetworkEphemeralDisabled_:{type:Object,value:{activeValue:false,policySource:PolicySource.kDevicePolicyEnforced,policyValue:false}},autoConnect_:{type:Boolean,observer:"updateHiddenNetworkWarning_"},hiddenNetworkWarning_:Boolean,securityType_:Object,vpnSaveCredentials_:{type:Boolean,value:false},vpnType_:{type:String,value:undefined,observer:"updateVpnIPsecAuthTypeItems_"},ipsecAuthType_:{type:String,value:IpsecAuthType.PSK},wireguardKeyType_:String,ipAddressInput_:{type:String,observer:"updateIsConfigured_"},nameServersInput_:String,showEap_:{type:Object},showVpn_:{type:Object},isWireGuardUserPrivateKeyInputActive_:{type:Boolean,computed:"computeWireGuardKeyType_(wireguardKeyType_)"},eapOuterItems_:{type:Array,readOnly:true,value:["PEAP","EAP-TLS","EAP-TTLS","LEAP"]},eapInnerItemsPeap_:{type:Array,readOnly:true,value:()=>{const values=["Automatic","MD5","MSCHAPv2"];if(loadTimeData.getBoolean("eapGtcWifiAuthentication")){values.push("GTC")}return values}},eapInnerItemsTtls_:{type:Array,readOnly:true,value:["Automatic","MD5","MSCHAP","MSCHAPv2","PAP","CHAP","GTC"]},vpnTypeItems_:{type:Array,value:[VPNConfigType.L2TP_IPSEC,VPNConfigType.OPEN_VPN]},ipsecAuthTypeItems_:{type:Array,value:[]},wireguardKeyTypeItems_:{type:Array,value:[]},deviceCertsOnly_:{type:Boolean,value:false},configRequiresPassphrase_:{type:Boolean,computed:"computeConfigRequiresPassphrase_(mojoType_, securityType_)"},serializedDomainSuffixMatch_:{type:String,value:""},serializedSubjectAltNameMatch_:{type:String,value:""}}}static get observers(){return["setEnableConnect_(isConfigured_, propertiesSent_)","setEnableSave_(isConfigured_, managedProperties_)","setShareNetwork_(mojoType_, managedProperties_, securityType_,"+"shareDefault, shareAllowEnable)","updateConfigProperties_(mojoType_, managedProperties_)","updateSecurity_(configProperties_, securityType_)","updateCertItems_(cachedServerCaCerts_, cachedUserCerts_, vpnType_, "+"securityType_, eapProperties_.outer)","updateEapOuter_(eapProperties_.outer)","updateEapCerts_(eapProperties_.*, serverCaCerts_, userCerts_)","updateShowEap_(configProperties_.*, eapProperties_.*, securityType_)","updateVpnType_(configProperties_, vpnType_, ipsecAuthType_)","updateVpnIPsecCerts_(vpnType_, ipsecAuthType_,"+"configProperties_.typeConfig.vpn.ipSec.*, serverCaCerts_,"+"userCerts_)","updateOpenVPNCerts_(vpnType_,"+"configProperties_.typeConfig.vpn.openVpn.*,"+"serverCaCerts_, userCerts_)","updateIsConfigured_(configProperties_.*, securityType_)","updateIsConfigured_(configProperties_, eapProperties_.*)","updateIsConfigured_(configProperties_.typeConfig.wifi.*)","updateIsConfigured_(configProperties_.typeConfig.vpn.*, vpnType_,"+"ipsecAuthType_)"]}constructor(){super();this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote()}connectedCallback(){super.connectedCallback();this.networkConfig_.getGlobalPolicy().then((response=>{this.globalPolicy_=response.result}));this.addEventListener("enter",this.onEnterEvent_)}init(){this.networkConfig_.getSupportedVpnTypes().then((response=>{this.updateVpnTypeItems_(response.vpnTypes)}));this.initWireGuardKeyConfigType_();if(this.guid){this.networkConfig_.getManagedProperties(this.guid).then((response=>{this.getManagedPropertiesCallback_(response.result)}))}else{const mojoType=OncMojo.getNetworkTypeFromString(this.type);const managedProperties=OncMojo.getDefaultManagedProperties(mojoType,this.guid,this.name);if(mojoType===NetworkType.kWiFi&&this.securityType_!==undefined){assert(managedProperties.typeProperties.wifi);this.securityType_=this.getSecurityTypeAsNumber(this.securityType_);managedProperties.typeProperties.wifi.security=this.securityType_}this.managedProperties_=managedProperties;this.mojoType_=mojoType;setTimeout((()=>{this.focusFirstInput_()}))}if(this.mojoType_===NetworkType.kVPN||this.globalPolicy_&&this.globalPolicy_.allowOnlyPolicyWifiNetworksToConnect){this.autoConnect_=false}else{this.autoConnect_=true}this.hiddenNetworkWarning_=this.showHiddenNetworkWarning_();this.updateIsConfigured_()}save(){this.saveAndConnect_(false)}connect(){this.saveAndConnect_(true)}focusPassphrase_(){const passphraseInput=this.shadowRoot.querySelector("#wifi-passphrase");if(passphraseInput){passphraseInput.focus()}}saveAndConnect_(connect){if(!this.managedProperties_||this.propertiesSent_){return}this.propertiesSent_=true;this.error="";if(this.eapProperties_){const dsm=OncMojo.deserializeDomainSuffixMatch(this.serializedDomainSuffixMatch_);if(!dsm){this.setError_("invalidDomainSuffixMatchEntry");this.propertiesSent_=false;return}this.eapProperties_.domainSuffixMatch=dsm;const sanm=OncMojo.deserializeSubjectAltNameMatch(this.serializedSubjectAltNameMatch_);if(!sanm){this.setError_("invalidSubjectAlternativeNameMatchEntry");this.propertiesSent_=false;return}this.eapProperties_.subjectAltNameMatch=sanm;if(!this.eapConfigServerCaCertAllowed_()){this.setError_("missingEapDefaultServerCaSubjectVerification");this.propertiesSent_=false;return}}const propertiesToSet=this.getPropertiesToSet_();if(this.managedProperties_.source===OncSource.kNone){if(this.mojoType_===NetworkType.kWiFi){assert(propertiesToSet.typeConfig.wifi);propertiesToSet.typeConfig.wifi.hiddenSsid=HiddenSsidMode.kDisabled}if(!this.autoConnect_){propertiesToSet.autoConnect={value:false}}this.networkConfig_.configureNetwork(propertiesToSet,this.shareNetwork_).then((response=>{this.createNetworkCallback_(response.guid,response.errorMessage,connect)}))}else{this.networkConfig_.setProperties(this.guid,propertiesToSet).then((response=>{this.setPropertiesCallback_(response.success,response.errorMessage,connect)}))}this.dispatchEvent(new CustomEvent("properties-set"))}focusFirstInput_(){flush();const e=this.shadowRoot.querySelector("network-config-input:not([readonly]),"+"network-password-input:not([disabled]),"+"network-config-select:not([disabled])");if(e){e.focus()}}onEnterEvent_(event){if(event.composedPath()[0].localName==="network-config-input"||event.composedPath()[0].localName==="network-password-input"){this.onEnterPressedInInput_();event.stopPropagation()}}onEnterPressedInInput_(){if(!this.isConfigured_){return}if(this.connectOnEnter){this.connect()}else{this.save()}}close_(){this.guid="";this.type="";this.securityType_=undefined;this.dispatchEvent(new CustomEvent("close"))}hasGuid_(){return!!this.guid}isIkev2Supported_(){return this.vpnTypeItems_.includes(VPNConfigType.IKEV2)}isWireGuardSupported_(){return this.vpnTypeItems_.includes(VPNConfigType.WIREGUARD)}updateVpnTypeItems_(responseTypes){this.vpnTypeItems_=[VPNConfigType.L2TP_IPSEC,VPNConfigType.OPEN_VPN];if(responseTypes.includes("ikev2")){this.vpnTypeItems_.unshift(VPNConfigType.IKEV2)}if(responseTypes.includes("wireguard")){this.vpnTypeItems_.push(VPNConfigType.WIREGUARD)}}initWireGuardKeyConfigType_(){let items=[WireGuardKeyConfigType.GENERATE_NEW,WireGuardKeyConfigType.USER_INPUT];if(this.hasGuid_()){items=[...items,WireGuardKeyConfigType.USE_CURRENT];this.wireguardKeyType_=WireGuardKeyConfigType.USE_CURRENT}else{this.wireguardKeyType_=WireGuardKeyConfigType.GENERATE_NEW}this.wireguardKeyTypeItems_=items}onNetworkCertificatesChanged(){this.networkConfig_.getNetworkCertificates().then((response=>{this.set("cachedServerCaCerts_",response.serverCas.slice());this.set("cachedUserCerts_",response.userCerts.slice())}))}getDefaultCert_(type,desc,hash){return{type:type,hash:hash,issuedBy:desc,issuedTo:"",pemOrId:"",availableForNetworkAuth:false,hardwareBacked:false,deviceWide:true}}getActiveBoolean_(property){if(!property){return false}return property.activeValue}getActiveInt32_(property){if(!property){return 0}return property.activeValue}getActiveStringList_(property){if(!property){return null}return property.activeValue}getManagedPropertiesCallback_(managedProperties){if(!managedProperties){console.warn("Network no longer exists: "+this.guid);this.close_();return}this.managedProperties_=managedProperties;this.managedEapProperties_=this.getManagedEap_(managedProperties);this.mojoType_=managedProperties.type;if(this.mojoType_===NetworkType.kVPN){let saveCredentials=false;const vpn=managedProperties.typeProperties.vpn;assert(vpn);if(vpn.type===VpnType.kOpenVPN){assert(vpn.openVpn);saveCredentials=this.getActiveBoolean_(vpn.openVpn.saveCredentials)}else if(vpn.type===VpnType.kIKEv2){assert(vpn.ipSec);saveCredentials=this.getActiveBoolean_(vpn.ipSec.saveCredentials)}else if(vpn.type===VpnType.kL2TPIPsec){assert(vpn.ipSec);assert(vpn.l2tp);saveCredentials=this.getActiveBoolean_(vpn.ipSec.saveCredentials)||this.getActiveBoolean_(vpn.l2tp.saveCredentials)}else if(vpn.type===VpnType.kWireGuard){saveCredentials=true}this.vpnSaveCredentials_=saveCredentials}this.setError_(managedProperties.errorState);this.updateCertError_();this.focusFirstInput_()}getSecurityItems_(){if(this.mojoType_===NetworkType.kWiFi){return[SecurityType.kNone,SecurityType.kWepPsk,SecurityType.kWpaPsk,SecurityType.kWpaEap]}return[SecurityType.kNone,SecurityType.kWpaEap]}setShareNetwork_(){if(this.mojoType_===undefined||!this.managedProperties_||!this.securityType_===undefined){return}const source=this.managedProperties_.source;if(source!==OncSource.kNone){this.shareNetwork_=source===OncSource.kDevice||source===OncSource.kDevicePolicy;return}if(!this.shareIsVisible_()){this.shareNetwork_=this.shareDefault;return}if(this.shareAllowEnable&&!this.shareDefault){if(this.mojoType_===NetworkType.kWiFi){this.shareNetwork_=this.securityType_===SecurityType.kNone;return}}this.shareNetwork_=this.shareDefault}onShareChanged_(_event){this.updateSelectedCerts_()}getEAPConfigProperties_(eap){return{anonymousIdentity:OncMojo.getActiveString(eap.anonymousIdentity),clientCertType:OncMojo.getActiveString(eap.clientCertType),clientCertPkcs11Id:OncMojo.getActiveString(eap.clientCertPkcs11Id),domainSuffixMatch:this.getActiveStringList_(eap.domainSuffixMatch)||[],identity:OncMojo.getActiveString(eap.identity),inner:OncMojo.getActiveString(eap.inner),outer:OncMojo.getActiveString(eap.outer)||DEFAULT_EAP_OUTER_PROTOCOL,password:OncMojo.getActiveString(eap.password),saveCredentials:this.getActiveBoolean_(eap.saveCredentials),serverCaPems:this.getActiveStringList_(eap.serverCaPems),subjectAltNameMatch:OncMojo.getActiveValue(eap.subjectAltNameMatch)||[],subjectMatch:OncMojo.getActiveString(eap.subjectMatch),useSystemCas:this.getActiveBoolean_(eap.useSystemCas)}}getIPSecConfigProperties_(ipSec){return{authenticationType:OncMojo.getActiveString(ipSec.authenticationType)||"PSK",clientCertPkcs11Id:OncMojo.getActiveString(ipSec.clientCertPkcs11Id),clientCertType:OncMojo.getActiveString(ipSec.clientCertType),eap:ipSec.eap?this.getEAPConfigProperties_(ipSec.eap):null,group:OncMojo.getActiveString(ipSec.group),ikeVersion:this.getActiveInt32_(ipSec.ikeVersion),localIdentity:OncMojo.getActiveString(ipSec.localIdentity),psk:OncMojo.getActiveString(ipSec.psk),remoteIdentity:OncMojo.getActiveString(ipSec.remoteIdentity),saveCredentials:this.getActiveBoolean_(ipSec.saveCredentials),serverCaPems:this.getActiveStringList_(ipSec.serverCaPems),serverCaRefs:this.getActiveStringList_(ipSec.serverCaRefs)}}getL2TPConfigProperties_(l2tp){return{lcpEchoDisabled:this.getActiveBoolean_(l2tp.lcpEchoDisabled),password:OncMojo.getActiveString(l2tp.password),saveCredentials:this.getActiveBoolean_(l2tp.saveCredentials),username:OncMojo.getActiveString(l2tp.username)}}getOpenVPNConfigProperties_(openVpn){return{clientCertPkcs11Id:OncMojo.getActiveString(openVpn.clientCertPkcs11Id),clientCertType:OncMojo.getActiveString(openVpn.clientCertType),extraHosts:this.getActiveStringList_(openVpn.extraHosts),otp:"",password:OncMojo.getActiveString(openVpn.password),saveCredentials:this.getActiveBoolean_(openVpn.saveCredentials),serverCaPems:this.getActiveStringList_(openVpn.serverCaPems),serverCaRefs:this.getActiveStringList_(openVpn.serverCaRefs),userAuthenticationType:OncMojo.getActiveString(openVpn.userAuthenticationType),username:OncMojo.getActiveString(openVpn.username)}}getWireGuardConfigProperties_(wireguard){const config={ipAddresses:this.getActiveStringList_(wireguard.ipAddresses)??[],privateKey:OncMojo.getActiveString(wireguard.privateKey),peers:[]};if(wireguard.peers&&wireguard.peers.activeValue){for(const peer of wireguard.peers.activeValue){const peerCopied=Object.assign({},peer);if(this.hasGuid_()){peerCopied.presharedKey=PLACEHOLDER_CREDENTIAL}assert(config.peers);config.peers.push(peerCopied)}}return config}updateConfigProperties_(){if(this.mojoType_===undefined||!this.managedProperties_){return}this.showEap_=null;this.showVpn_=null;this.vpnType_=undefined;const managedProperties=this.managedProperties_;const configProperties=OncMojo.getDefaultConfigProperties(managedProperties.type);configProperties.name=OncMojo.getActiveString(managedProperties.name);let autoConnect;let security=SecurityType.kNone;switch(managedProperties.type){case NetworkType.kWiFi:const wifi=managedProperties.typeProperties.wifi;assert(wifi);autoConnect=this.getActiveBoolean_(wifi.autoConnect);const configWifi=configProperties.typeConfig.wifi;assert(configWifi);configWifi.passphrase=OncMojo.getActiveString(wifi.passphrase);configWifi.ssid=OncMojo.getActiveString(wifi.ssid);if(wifi.eap){configWifi.eap=this.getEAPConfigProperties_(wifi.eap)}security=wifi.security;configWifi.security=security;break;case NetworkType.kEthernet:assert(managedProperties.typeProperties.ethernet);const eap=managedProperties.typeProperties.ethernet.eap?this.getEAPConfigProperties_(managedProperties.typeProperties.ethernet.eap):null;security=eap?SecurityType.kWpaEap:SecurityType.kNone;const auth=security===SecurityType.kWpaEap?"8021X":"None";assert(configProperties.typeConfig.ethernet);configProperties.typeConfig.ethernet.authentication=auth;configProperties.typeConfig.ethernet.eap=eap;break;case NetworkType.kVPN:const vpn=managedProperties.typeProperties.vpn;assert(vpn);const vpnType=vpn.type;const configVpn=configProperties.typeConfig.vpn;assert(configVpn);configVpn.host=OncMojo.getActiveString(vpn.host);configVpn.type={value:vpnType};if(vpnType===VpnType.kIKEv2){if(!this.isIkev2Supported_()){break}assert(vpn.ipSec);configVpn.ipSec=this.getIPSecConfigProperties_(vpn.ipSec)}else if(vpnType===VpnType.kL2TPIPsec){assert(vpn.ipSec);configVpn.ipSec=this.getIPSecConfigProperties_(vpn.ipSec);assert(vpn.l2tp);configVpn.l2tp=this.getL2TPConfigProperties_(vpn.l2tp)}else if(vpnType===VpnType.kOpenVPN){assert(vpn.openVpn);configVpn.openVpn=this.getOpenVPNConfigProperties_(vpn.openVpn)}else if(vpnType===VpnType.kWireGuard){if(!this.isWireGuardSupported_()){break}assert(vpn.wireguard);configVpn.wireguard=this.getWireGuardConfigProperties_(vpn.wireguard);assert(configVpn.wireguard.ipAddresses);this.ipAddressInput_=configVpn.wireguard.ipAddresses.join(",");const staticIpConfig=managedProperties.staticIpConfig;if(staticIpConfig&&staticIpConfig.nameServers){this.nameServersInput_=staticIpConfig.nameServers.activeValue.join(",")}}else{assertNotReached()}security=SecurityType.kNone;break}if(autoConnect!==undefined){configProperties.autoConnect={value:autoConnect}}const requestCertificates=this.configProperties_===undefined;this.configProperties_=configProperties;this.securityType_=security;assert(this.configProperties_);this.set("eapProperties_",this.getEap_(this.configProperties_));if(!this.eapProperties_){this.showEap_=null}else{this.serializedDomainSuffixMatch_=OncMojo.serializeDomainSuffixMatch(this.eapProperties_.domainSuffixMatch);this.serializedSubjectAltNameMatch_=OncMojo.serializeSubjectAltNameMatch(this.eapProperties_.subjectAltNameMatch)}if(managedProperties.type===NetworkType.kVPN){this.vpnType_=this.getVpnTypeFromProperties_(this.configProperties_);this.ipsecAuthType_=this.getIpsecAuthTypeFromProperties_(this.configProperties_)}if(requestCertificates){this.onNetworkCertificatesChanged()}}updateSecurity_(){if(this.securityType_===undefined||!this.configProperties_){return}const type=this.mojoType_;this.securityType_=this.getSecurityTypeAsNumber(this.securityType_);const security=this.securityType_;if(type===NetworkType.kWiFi){assert(this.configProperties_.typeConfig.wifi);this.configProperties_.typeConfig.wifi.security=security}else if(type===NetworkType.kEthernet){const auth=security===SecurityType.kWpaEap?"8021X":"None";assert(this.configProperties_.typeConfig.ethernet);this.configProperties_.typeConfig.ethernet.authentication=auth}let eap=null;if(security===SecurityType.kWpaEap){eap=this.getEap_(this.configProperties_,true);assert(eap);eap.outer=eap.outer||DEFAULT_EAP_OUTER_PROTOCOL}this.setEap_(eap)}updateEapOuter_(){const eap=this.eapProperties_;if(!eap||!eap.outer){return}const innerItems=this.getEapInnerItems_(eap.outer);if(innerItems.length>0){if(!eap.inner||innerItems.indexOf(eap.inner)<0){this.set("eapProperties_.inner",innerItems[0])}}else{this.set("eapProperties_.inner",undefined)}if(eap.outer!=="EAP-TLS"){this.set("eapProperties_.clientCertType","None");this.set("eapProperties_.clientCertPkcs11Id","");this.selectedUserCertHash_=NO_USER_CERT_HASH}}updateEapCerts_(){if(this.mojoType_===NetworkType.kVPN){return}const eap=this.eapProperties_;const pem=eap&&eap.serverCaPems?eap.serverCaPems[0]:"";const certId=eap&&eap.clientCertType==="PKCS11Id"?eap.clientCertPkcs11Id:"";this.setSelectedCerts_(pem,certId)}updateShowEap_(){if(!this.eapProperties_||this.securityType_===SecurityType.kNone){this.showEap_=null;this.updateCertError_();return}const outer=this.eapProperties_.outer;switch(this.mojoType_){case NetworkType.kWiFi:case NetworkType.kEthernet:this.showEap_={Outer:true,Inner:outer==="PEAP"||outer==="EAP-TTLS",ServerCA:outer!=="LEAP",EapServerCertMatch:outer==="EAP-TLS"||outer==="EAP-TTLS"||outer==="PEAP",UserCert:outer==="EAP-TLS",Identity:true,Password:outer!=="EAP-TLS",AnonymousIdentity:outer==="PEAP"||outer==="EAP-TTLS"};break}this.updateCertError_()}getEap_(properties,optCreate=undefined){let eap;if(properties.typeConfig.wifi){eap=properties.typeConfig.wifi.eap}else if(properties.typeConfig.ethernet){eap=properties.typeConfig.ethernet.eap}else if(properties.typeConfig.vpn&&properties.typeConfig.vpn.ipSec){eap=properties.typeConfig.vpn.ipSec.eap}if(optCreate){return eap||{saveCredentials:false,useSystemCas:false,domainSuffixMatch:[],subjectAltNameMatch:[],anonymousIdentity:null,clientCertPkcs11Id:null,clientCertType:null,identity:null,inner:null,outer:null,password:null,serverCaPems:null,subjectMatch:null}}return eap||null}setEap_(eapProperties){assert(this.configProperties_);switch(this.mojoType_){case NetworkType.kWiFi:assert(this.configProperties_.typeConfig.wifi);this.configProperties_.typeConfig.wifi.eap=eapProperties;break;case NetworkType.kEthernet:{assert(this.configProperties_.typeConfig.ethernet);this.configProperties_.typeConfig.ethernet.eap=eapProperties;break}}this.set("eapProperties_",eapProperties)}getManagedEap_(managedProperties){let managedEap;switch(managedProperties.type){case NetworkType.kWiFi:{assert(managedProperties.typeProperties.wifi);managedEap=managedProperties.typeProperties.wifi.eap;break}case NetworkType.kEthernet:{assert(managedProperties.typeProperties.ethernet);managedEap=managedProperties.typeProperties.ethernet.eap;break}case NetworkType.kVPN:{assert(managedProperties.typeProperties.vpn);if(managedProperties.typeProperties.vpn.ipSec){managedEap=managedProperties.typeProperties.vpn.ipSec.eap}break}}return managedEap||null}getVpnTypeFromProperties_(properties){const vpn=properties.typeConfig.vpn;assert(vpn);if(!!vpn.type&&vpn.type.value===VpnType.kIKEv2){return VPNConfigType.IKEV2}else if(!!vpn.type&&vpn.type.value===VpnType.kL2TPIPsec){return VPNConfigType.L2TP_IPSEC}else if(!!vpn.type&&vpn.type.value===VpnType.kWireGuard){return VPNConfigType.WIREGUARD}return VPNConfigType.OPEN_VPN}getIpsecAuthTypeFromProperties_(properties){const vpn=properties.typeConfig.vpn;assert(vpn);if(!vpn.type||!(vpn.type.value===VpnType.kL2TPIPsec||vpn.type.value===VpnType.kIKEv2)){return IpsecAuthType.PSK}assert(vpn.ipSec);if(vpn.ipSec.authenticationType===IpsecAuthType.PSK){return IpsecAuthType.PSK}else if(vpn.ipSec.authenticationType===IpsecAuthType.CERT){return IpsecAuthType.CERT}else if(vpn.ipSec.authenticationType===IpsecAuthType.EAP){return IpsecAuthType.EAP}assertNotReached()}computeWireGuardKeyType_(){return this.wireguardKeyType_===WireGuardKeyConfigType.USER_INPUT}updateCertItems_(){if(this.configProperties_===undefined||this.cachedServerCaCerts_===undefined||this.cachedUserCerts_===undefined){return}const isOpenVpn=this.vpnType_===VPNConfigType.OPEN_VPN;const isIpsec=this.vpnType_===VPNConfigType.L2TP_IPSEC||this.vpnType_===VPNConfigType.IKEV2;let caCerts=this.cachedServerCaCerts_.slice();if(!isOpenVpn&&!isIpsec){caCerts.unshift(this.getDefaultCert_(CertificateType.kServerCA,this.i18n("networkCAUseDefault"),DEFAULT_HASH))}if(!isIpsec){caCerts.push(this.getDefaultCert_(CertificateType.kServerCA,this.i18n("networkCADoNotCheck"),DO_NOT_CHECK_HASH))}if(!caCerts.length){caCerts=[this.getDefaultCert_(CertificateType.kServerCA,this.i18n("networkCertificateNoneInstalled"),NO_CERTS_HASH)]}this.set("serverCaCerts_",caCerts);let userCerts=this.cachedUserCerts_.slice();userCerts.forEach((function(cert){if(!cert.availableForNetworkAuth){cert.hash=""}}));const isEap=this.securityType_===SecurityType.kWpaEap;const isEapTls=isEap&&this.eapProperties_&&this.eapProperties_.outer==="EAP-TLS";const isUserCertOptional=isOpenVpn||isEap&&!isEapTls;if(isUserCertOptional){userCerts.unshift(this.getDefaultCert_(CertificateType.kUserCert,this.i18n("networkNoUserCert"),NO_USER_CERT_HASH))}if(!userCerts.length){userCerts=[this.getDefaultCert_(CertificateType.kUserCert,this.i18n("networkCertificateNoneInstalled"),NO_CERTS_HASH)]}this.set("userCerts_",userCerts);this.updateSelectedCerts_();this.updateCertError_()}updateVpnType_(){if(this.configProperties_===undefined||this.vpnType_===undefined){return}const vpn=this.configProperties_.typeConfig.vpn;if(!vpn){this.showVpn_=null;this.updateCertError_();return}switch(this.vpnType_){case VPNConfigType.IKEV2:vpn.type={value:VpnType.kIKEv2};if(!vpn.ipSec){this.ipsecAuthType_=IpsecAuthType.EAP;vpn.ipSec={authenticationType:this.ipsecAuthType_,ikeVersion:2,saveCredentials:false,clientCertPkcs11Id:null,clientCertType:null,eap:null,group:null,localIdentity:null,psk:null,remoteIdentity:null,serverCaPems:null,serverCaRefs:null}}assert(vpn.ipSec);if(this.ipsecAuthType_===IpsecAuthType.EAP&&!vpn.ipSec.eap){vpn.ipSec.eap={domainSuffixMatch:[],outer:"MSCHAPv2",saveCredentials:false,subjectAltNameMatch:[],useSystemCas:false,anonymousIdentity:null,clientCertPkcs11Id:null,clientCertType:null,identity:null,inner:null,password:null,serverCaPems:null,subjectMatch:null};assert(vpn.ipSec.eap);this.eapProperties_=vpn.ipSec.eap}break;case VPNConfigType.L2TP_IPSEC:vpn.type={value:VpnType.kL2TPIPsec};if(this.ipsecAuthType_!==IpsecAuthType.PSK&&this.ipsecAuthType_!==IpsecAuthType.CERT){this.ipsecAuthType_=IpsecAuthType.PSK}if(!vpn.ipSec){vpn.ipSec={authenticationType:this.ipsecAuthType_,ikeVersion:1,saveCredentials:false,clientCertPkcs11Id:null,clientCertType:null,eap:null,group:null,localIdentity:null,psk:null,remoteIdentity:null,serverCaPems:null,serverCaRefs:null}}break;case VPNConfigType.OPEN_VPN:vpn.type={value:VpnType.kOpenVPN};vpn.openVpn=vpn.openVpn||{saveCredentials:false,clientCertPkcs11Id:null,clientCertType:null,extraHosts:null,otp:null,password:null,serverCaPems:null,serverCaRefs:null,username:null,userAuthenticationType:null};break;case VPNConfigType.WIREGUARD:vpn.type={value:VpnType.kWireGuard};vpn.wireguard=vpn.wireguard||{peers:[{publicKey:"",presharedKey:null,allowedIps:null,endpoint:null,persistentKeepaliveInterval:0}],ipAddresses:null,privateKey:null};break;default:assertNotReached()}const isIpsec=this.vpnType_===VPNConfigType.L2TP_IPSEC||this.vpnType_===VPNConfigType.IKEV2;const ipsecAuthIsPsk=this.ipsecAuthType_===IpsecAuthType.PSK;const ipsecAuthIsEap=this.ipsecAuthType_===IpsecAuthType.EAP;const ipsecAuthIsCert=this.ipsecAuthType_===IpsecAuthType.CERT;const isOpenvpn=this.vpnType_===VPNConfigType.OPEN_VPN;this.showVpn_={IPsec:isIpsec,IPsecPSK:isIpsec&&ipsecAuthIsPsk,IPsecEAP:isIpsec&&ipsecAuthIsEap,IKEv2:this.vpnType_===VPNConfigType.IKEV2,OpenVPN:isOpenvpn,WireGuard:this.vpnType_===VPNConfigType.WIREGUARD,ServerCA:isIpsec&&!ipsecAuthIsPsk||isOpenvpn,UserCert:isIpsec&&ipsecAuthIsCert||isOpenvpn};if(vpn.type.value===VpnType.kL2TPIPsec&&!vpn.l2tp){vpn.l2tp={lcpEchoDisabled:false,password:"",saveCredentials:false,username:""}}if(vpn.type.value!==VpnType.kL2TPIPsec&&vpn.type.value!==VpnType.kIKEv2){vpn.ipSec=null}if(vpn.type.value!==VpnType.kL2TPIPsec){vpn.l2tp=null}if(vpn.type.value!==VpnType.kOpenVPN){vpn.openVpn=null}if(vpn.type.value!==VpnType.kWireGuard){vpn.wireguard=null}this.updateCertError_()}updateVpnIPsecAuthTypeItems_(){this.ipsecAuthTypeItems_=[IpsecAuthType.PSK,IpsecAuthType.CERT];if(this.vpnType_===VPNConfigType.IKEV2){this.ipsecAuthTypeItems_.push(IpsecAuthType.EAP)}}updateVpnIPsecCerts_(){if(this.vpnType_!==VPNConfigType.L2TP_IPSEC&&this.vpnType_!==VPNConfigType.IKEV2){return}if(this.ipsecAuthType_===IpsecAuthType.PSK){return}assert(this.configProperties_?.typeConfig.vpn);const ipSec=this.configProperties_.typeConfig.vpn.ipSec;if(!ipSec){return}const pem=ipSec.serverCaPems?ipSec.serverCaPems[0]:null;const certId=ipSec.clientCertType==="PKCS11Id"?ipSec.clientCertPkcs11Id:"";this.setSelectedCerts_(pem,certId)}updateOpenVPNCerts_(){if(this.vpnType_!==VPNConfigType.OPEN_VPN){return}assert(this.configProperties_?.typeConfig.vpn);const openVpn=this.configProperties_.typeConfig.vpn.openVpn;if(!openVpn){return}const pem=openVpn.serverCaPems?openVpn.serverCaPems[0]:null;const certId=openVpn.clientCertType==="PKCS11Id"?openVpn.clientCertPkcs11Id:"";this.setSelectedCerts_(pem,certId)}updateCertError_(){const noCertsError="networkErrorNoUserCertificate";const noValidCertsError="networkErrorNotAvailableForNetworkAuth";if(this.error&&this.error!==noCertsError&&this.error!==noValidCertsError){return}const requireCerts=this.showEap_&&this.showEap_.UserCert||this.showVpn_&&this.showVpn_.UserCert;if(!requireCerts){this.setError_("");return}if(!this.userCerts_.length||this.userCerts_[0].hash===NO_CERTS_HASH){this.setError_(noCertsError);return}const validUserCert=this.userCerts_.find((function(cert){return!!cert.hash}));if(!validUserCert){this.setError_(noValidCertsError);return}this.setError_("");return}setSelectedCerts_(pem,certId){if(pem){const serverCa=this.serverCaCerts_.find((function(cert){return cert.pemOrId===pem}));if(serverCa){this.selectedServerCaHash_=serverCa.hash}}if(certId){const userCert=this.userCerts_.find((function(cert){return cert.pemOrId.indexOf(certId)>=0}));if(userCert){this.selectedUserCertHash_=userCert.hash}}this.updateSelectedCerts_();this.updateIsConfigured_()}findCert_(certs,hash){if(!hash){return undefined}return certs.find((cert=>cert.hash===hash))}updateSelectedCerts_(){if(!this.serverCaCerts_.length||!this.userCerts_.length){return}const eap=this.eapProperties_;this.deviceCertsOnly_=this.shareNetwork_&&!!eap&&eap.outer==="EAP-TLS";const caCert=this.findCert_(this.serverCaCerts_,this.selectedServerCaHash_);if(!caCert||this.deviceCertsOnly_&&!caCert.deviceWide){this.selectedServerCaHash_=undefined}if(!this.selectedServerCaHash_){if(eap&&eap.useSystemCas){this.selectedServerCaHash_=DEFAULT_HASH}else if(!this.guid&&this.serverCaCerts_[0]){let cert=this.serverCaCerts_[0];if(cert.hash===DEFAULT_HASH&&this.isRealCertUsableForNetworkAuth_(this.serverCaCerts_[1])){cert=this.serverCaCerts_[1]}this.selectedServerCaHash_=cert.hash}else{this.selectedServerCaHash_=DO_NOT_CHECK_HASH}}const userCert=this.findCert_(this.userCerts_,this.selectedUserCertHash_);if(!userCert||this.deviceCertsOnly_&&!userCert.deviceWide){this.selectedUserCertHash_=undefined}if(!this.selectedUserCertHash_){for(let i=0;i<this.userCerts_.length;++i){const userCert=this.userCerts_[i];if(userCert&&(!this.deviceCertsOnly_||userCert.deviceWide)){this.selectedUserCertHash_=userCert.hash;break}}}}isRealCertUsableForNetworkAuth_(cert){return!!cert&&cert.hash!==DO_NOT_CHECK_HASH&&cert.hash!==DEFAULT_HASH}getIsConfigured_(){if(this.securityType_===undefined||!this.configProperties_){return false}const typeConfig=this.configProperties_.typeConfig;if(typeConfig.vpn){if(this.vpnType_===VPNConfigType.IKEV2&&!this.isIkev2Supported_()){return false}return this.vpnIsConfigured_()}if(typeConfig.wifi){if(!typeConfig.wifi.ssid){return false}if(this.configRequiresPassphrase_){const passphrase=typeConfig.wifi.passphrase;if(!passphrase||passphrase.length<MIN_PASSPHRASE_LENGTH){return false}}}if(this.securityType_===SecurityType.kWpaEap){return this.eapIsConfigured_()}return true}updateIsConfigured_(){this.isConfigured_=this.getIsConfigured_()}isWiFi_(networkType){return networkType===NetworkType.kWiFi}setEnableSave_(){this.enableSave=this.isConfigured_&&!!this.managedProperties_}setEnableConnect_(){this.enableConnect=this.isConfigured_&&!this.propertiesSent_}securityIsVisible_(networkType){return networkType===NetworkType.kWiFi||networkType===NetworkType.kEthernet}securityIsEnabled_(){return!this.guid||this.mojoType_===NetworkType.kEthernet}shareIsVisible_(){if(!this.managedProperties_){return false}return this.managedProperties_.source===OncSource.kNone&&this.managedProperties_.type===NetworkType.kWiFi}shareIsEnabled_(){if(!this.managedProperties_){return false}if(!this.shareAllowEnable||this.managedProperties_.source!==OncSource.kNone){return false}return true}networkIsEphemeral_(){if(!loadTimeData.getBoolean("ephemeralNetworkPoliciesEnabled")){return false}if(!this.globalPolicy_||!this.globalPolicy_.userCreatedNetworkConfigurationsAreEphemeral){return false}if(!this.managedProperties_){return false}return this.managedProperties_.source===OncSource.kNone}configCanAutoConnect_(){return loadTimeData.getBoolean("showHiddenNetworkWarning")&&this.mojoType_===NetworkType.kWiFi}autoConnectDisabled_(){return this.isAutoConnectEnforcedByPolicy_()}isAutoConnectEnforcedByPolicy_(){return!!this.globalPolicy_&&!!this.globalPolicy_.allowOnlyPolicyNetworksToAutoconnect}showHiddenNetworkWarning_(){flush();return loadTimeData.getBoolean("showHiddenNetworkWarning")&&this.autoConnect_&&!this.hasGuid_()}updateHiddenNetworkWarning_(){this.hiddenNetworkWarning_=this.showHiddenNetworkWarning_()}selectedServerCaHashIsValid_(){return!!this.selectedServerCaHash_&&this.selectedServerCaHash_!==NO_CERTS_HASH}selectedUserCertHashIsValid_(){return!!this.selectedUserCertHash_&&this.selectedUserCertHash_!==NO_CERTS_HASH}eapIsConfigured_(){if(!this.configProperties_){return false}const eap=this.getEap_(this.configProperties_);if(!eap){return false}if(eap.outer!=="EAP-TLS"){return true}if(this.deviceCertsOnly_){let cert=this.findCert_(this.userCerts_,this.selectedUserCertHash_);if(!cert||!cert.deviceWide){return false}cert=this.findCert_(this.serverCaCerts_,this.selectedServerCaHash_);assert(cert);if(!cert.deviceWide){return false}}return this.selectedUserCertHashIsValid_()}ikev2IsConfigured_(){assert(this.configProperties_);switch(this.ipsecAuthType_){case IpsecAuthType.PSK:{const vpn=this.configProperties_.typeConfig.vpn;assert(vpn);assert(vpn.ipSec);return!!vpn.ipSec.psk}case IpsecAuthType.CERT:return this.selectedServerCaHashIsValid_()&&this.selectedUserCertHashIsValid_();case IpsecAuthType.EAP:{assert(this.eapProperties_);return this.selectedServerCaHashIsValid_()&&!!this.eapProperties_.identity}default:assertNotReached()}}l2tpIpsecIsConfigured_(){assert(this.configProperties_);const vpn=this.configProperties_.typeConfig.vpn;assert(vpn);switch(this.ipsecAuthType_){case IpsecAuthType.PSK:{assert(vpn.l2tp);assert(vpn.ipSec);return!!vpn.l2tp.username&&!!vpn.ipSec.psk}case IpsecAuthType.CERT:{assert(vpn.l2tp);return!!vpn.l2tp.username&&this.selectedServerCaHashIsValid_()&&this.selectedUserCertHashIsValid_()}default:assertNotReached()}}isValidWireGuardKey_(input){return!!input&&input.length===44&&input.charAt(43)==="="&&!!input.match(/^[a-z0-9+/=]+$/i)}isValidWireGuardIpAddresses_(ipAddresses){if(!ipAddresses){return false}let v4Count=0;let v6Count=0;for(const ipAddress of ipAddresses.split(",")){if(ipAddress.match(IPV4_ADDR_REGEX)){v4Count++}else if(ipAddress.match(IPV6_ADDR_REGEX)){v6Count++}else{return false}}if(v4Count>1||v6Count>1){return false}return v4Count+v6Count>0}isWireGuardConfigurationValid_(wireguard,ipAddresses){if(!wireguard){return false}if(!this.isValidWireGuardIpAddresses_(ipAddresses)){return false}if(this.isWireGuardUserPrivateKeyInputActive_&&!this.isValidWireGuardKey_(wireguard.privateKey)){return false}assert(wireguard.peers);const peer=wireguard.peers[0];if(!this.isValidWireGuardKey_(peer.publicKey)){return false}if(!!peer.presharedKey&&peer.presharedKey!==PLACEHOLDER_CREDENTIAL&&!this.isValidWireGuardKey_(peer.presharedKey)){return false}if(!peer.endpoint||!peer.endpoint.match(/^\[?[a-zA-Z0-9\-\.:]+\]?:[0-9]+$/i)){return false}if(!peer.allowedIps||!peer.allowedIps.split(",").every((s=>s.match(IP_CIDR_REGEX)))){return false}return true}vpnIsConfigured_(){assert(this.configProperties_);const vpn=this.configProperties_.typeConfig.vpn;if(!this.configProperties_.name||!vpn||!vpn.host&&this.vpnType_!==VPNConfigType.WIREGUARD){return false}switch(this.vpnType_){case VPNConfigType.IKEV2:return this.ikev2IsConfigured_();case VPNConfigType.L2TP_IPSEC:return this.l2tpIpsecIsConfigured_();case VPNConfigType.OPEN_VPN:return true;case VPNConfigType.WIREGUARD:return this.isWireGuardConfigurationValid_(vpn.wireguard,this.ipAddressInput_)}return false}getPropertiesToSet_(){const propertiesToSet=Object.assign({},this.configProperties_);propertiesToSet.autoConnect=null;if(this.guid){propertiesToSet.guid=this.guid}const eap=this.getEap_(propertiesToSet);if(eap){this.setEapProperties_(eap)}if(this.mojoType_===NetworkType.kVPN){const vpnConfig=propertiesToSet.typeConfig.vpn;assert(vpnConfig);if(vpnConfig.host){vpnConfig.host=vpnConfig.host.trim()}assert(vpnConfig.type);const vpnType=vpnConfig.type.value;if(vpnType===VpnType.kOpenVPN){this.setOpenVPNProperties_(propertiesToSet)}else{assert(propertiesToSet.typeConfig.vpn);propertiesToSet.typeConfig.vpn.openVpn=null}if(vpnType===VpnType.kIKEv2){this.setVpnIkev2Properties_(propertiesToSet)}else if(vpnType===VpnType.kL2TPIPsec){this.setVpnL2tpIpsecProperties_(propertiesToSet)}else{assert(propertiesToSet.typeConfig.vpn);propertiesToSet.typeConfig.vpn.ipSec=null;propertiesToSet.typeConfig.vpn.l2tp=null}if(vpnType===VpnType.kWireGuard){this.setWireGuardProperties_(propertiesToSet)}else{assert(propertiesToSet.typeConfig.vpn);propertiesToSet.typeConfig.vpn.wireguard=null}}return propertiesToSet}getServerCaPems_(){const caHash=this.selectedServerCaHash_||"";if(!caHash||caHash===DO_NOT_CHECK_HASH||caHash===DEFAULT_HASH){return[]}const serverCa=this.findCert_(this.serverCaCerts_,caHash);return serverCa&&serverCa.pemOrId?[serverCa.pemOrId]:[]}getUserCertPkcs11Id_(){const userCertHash=this.selectedUserCertHash_||"";if(!this.selectedUserCertHashIsValid_()||userCertHash===NO_USER_CERT_HASH){return""}const userCert=this.findCert_(this.userCerts_,userCertHash);return userCert&&userCert.pemOrId||""}setEapProperties_(eap){eap.useSystemCas=this.selectedServerCaHash_===DEFAULT_HASH;eap.serverCaPems=this.getServerCaPems_();const pkcs11Id=this.getUserCertPkcs11Id_();eap.clientCertType=pkcs11Id?"PKCS11Id":"None";eap.clientCertPkcs11Id=pkcs11Id||""}setVpnIkev2Properties_(propertiesToSet){assert(propertiesToSet.typeConfig.vpn);const ipsec=propertiesToSet.typeConfig.vpn.ipSec;assert(!!ipsec);ipsec.authenticationType=this.ipsecAuthType_;if(ipsec.authenticationType!==IpsecAuthType.PSK){ipsec.psk="";ipsec.serverCaPems=this.getServerCaPems_()}if(ipsec.authenticationType===IpsecAuthType.CERT){ipsec.clientCertType="PKCS11Id";ipsec.clientCertPkcs11Id=this.getUserCertPkcs11Id_()}else{ipsec.clientCertType=null;ipsec.clientCertPkcs11Id=null}if(ipsec.authenticationType===IpsecAuthType.EAP){const eap=ipsec.eap;assert(eap);ipsec.eap={domainSuffixMatch:[],identity:eap.identity,outer:"MSCHAPv2",password:eap.password,saveCredentials:this.vpnSaveCredentials_,subjectAltNameMatch:[],useSystemCas:false,anonymousIdentity:null,clientCertPkcs11Id:null,clientCertType:null,inner:null,serverCaPems:null,subjectMatch:null}}else{ipsec.eap=null}ipsec.ikeVersion=2;ipsec.saveCredentials=this.vpnSaveCredentials_}setOpenVPNProperties_(propertiesToSet){assert(propertiesToSet.typeConfig.vpn);const openVpn=propertiesToSet.typeConfig.vpn.openVpn;assert(!!openVpn);openVpn.serverCaPems=this.getServerCaPems_();const pkcs11Id=this.getUserCertPkcs11Id_();openVpn.clientCertType=pkcs11Id?"PKCS11Id":"None";openVpn.clientCertPkcs11Id=pkcs11Id||"";if(openVpn.password){openVpn.userAuthenticationType=openVpn.otp?"PasswordAndOTP":"Password"}else if(openVpn.otp){openVpn.userAuthenticationType="OTP"}else{openVpn.userAuthenticationType="None"}openVpn.saveCredentials=this.vpnSaveCredentials_;propertiesToSet.typeConfig.vpn.openVpn=openVpn}setWireGuardProperties_(propertiesToSet){assert(propertiesToSet.typeConfig.vpn);const wireguard=propertiesToSet.typeConfig.vpn.wireguard;assert(!!wireguard);propertiesToSet.typeConfig.vpn.host="wireguard";propertiesToSet.ipAddressConfigType="Static";assert(this.ipAddressInput_);wireguard.ipAddresses=this.ipAddressInput_.split(",");propertiesToSet.staticIpConfig={gateway:this.ipAddressInput_,routingPrefix:32,type:IPConfigType.kIPv4,ipAddress:null,excludedRoutes:null,includedRoutes:null,nameServers:null,searchDomains:null,webProxyAutoDiscoveryUrl:null};if(this.nameServersInput_){propertiesToSet.nameServersConfigType="Static";propertiesToSet.staticIpConfig.nameServers=this.nameServersInput_.split(",")}if(this.wireguardKeyType_===WireGuardKeyConfigType.USE_CURRENT){wireguard.privateKey=null}else if(this.wireguardKeyType_===WireGuardKeyConfigType.GENERATE_NEW){wireguard.privateKey=""}assert(!!wireguard.peers);for(const peer of wireguard.peers){if(peer.presharedKey===PLACEHOLDER_CREDENTIAL){peer.presharedKey=null}else if(peer.presharedKey===undefined){peer.presharedKey=""}}}setVpnL2tpIpsecProperties_(propertiesToSet){const vpn=propertiesToSet.typeConfig.vpn;assert(vpn);assert(vpn.ipSec);assert(vpn.l2tp);vpn.ipSec.authenticationType=this.ipsecAuthType_;if(vpn.ipSec.authenticationType===IpsecAuthType.CERT){vpn.ipSec.clientCertType="PKCS11Id";vpn.ipSec.clientCertPkcs11Id=this.getUserCertPkcs11Id_();vpn.ipSec.serverCaPems=this.getServerCaPems_()}vpn.ipSec.ikeVersion=1;vpn.ipSec.saveCredentials=this.vpnSaveCredentials_;vpn.l2tp.saveCredentials=this.vpnSaveCredentials_;vpn.ipSec.eap=null;vpn.ipSec.localIdentity=null;vpn.ipSec.remoteIdentity=null}setPropertiesCallback_(success,errorMessage,connect){if(!success){console.warn("Unable to set properties for: "+this.guid+" Error: "+errorMessage);this.propertiesSent_=false;this.setError_(errorMessage);this.focusPassphrase_();return}assert(this.managedProperties_);if(connect&&this.managedProperties_.connectionState===ConnectionStateType.kNotConnected){this.startConnect_(this.guid)}else{this.close_()}}createNetworkCallback_(guid,errorMessage,connect){if(!guid){console.warn("Unable to configure network: "+guid+" Error: "+errorMessage);this.propertiesSent_=false;this.setError_(errorMessage);this.focusPassphrase_();return}if(connect){this.startConnect_(guid)}else{this.close_()}}startConnect_(guid){this.networkConfig_.startConnect(guid).then((response=>{const result=response.result;if(result===StartConnectResult.kSuccess||result===StartConnectResult.kInvalidGuid||result===StartConnectResult.kInvalidState||result===StartConnectResult.kCanceled){this.close_();return}this.setError_(response.message);console.warn("Error connecting to network: "+guid+": "+result.toString()+" Message: "+response.message);this.propertiesSent_=false}))}computeConfigRequiresPassphrase_(mojoType,securityType){return mojoType===NetworkType.kWiFi&&(securityType===SecurityType.kWepPsk||securityType===SecurityType.kWpaPsk)}getEapInnerItems_(outer){if(outer==="PEAP"){return this.eapInnerItemsPeap_}if(outer==="EAP-TTLS"){return this.eapInnerItemsTtls_}return[]}setError_(error){this.error=error||""}getManagedSecurity_(managedProperties){const policySource=OncMojo.getEnforcedPolicySourceFromOncSource(managedProperties.source);if(policySource===PolicySource.kNone){return undefined}switch(managedProperties.type){case NetworkType.kWiFi:{assert(managedProperties.typeProperties.wifi);return{activeValue:OncMojo.getSecurityTypeString(managedProperties.typeProperties.wifi.security),policySource:policySource,policyValue:null}}case NetworkType.kEthernet:{assert(managedProperties.typeProperties.ethernet);return{activeValue:OncMojo.getActiveString(managedProperties.typeProperties.ethernet.authentication),policySource:policySource,policyValue:null}}}return undefined}getManagedVpnSaveCredentials_(managedProperties){const vpn=managedProperties.typeProperties.vpn;assert(vpn);switch(vpn.type){case VpnType.kIKEv2:{assert(vpn.ipSec);return vpn.ipSec.saveCredentials||OncMojo.createManagedBool(false)}case VpnType.kOpenVPN:{assert(vpn.openVpn);return vpn.openVpn.saveCredentials||OncMojo.createManagedBool(false)}case VpnType.kL2TPIPsec:{assert(vpn.ipSec);assert(vpn.l2tp);return vpn.ipSec.saveCredentials||vpn.l2tp.saveCredentials||OncMojo.createManagedBool(false)}case VpnType.kWireGuard:return OncMojo.createManagedBool(true)}assertNotReached()}getManagedVpnServerCaRefs_(managedProperties){const vpn=managedProperties.typeProperties.vpn;assert(vpn);switch(vpn.type){case VpnType.kOpenVPN:assert(vpn.openVpn);return vpn.openVpn.serverCaRefs;case VpnType.kIKEv2:case VpnType.kL2TPIPsec:assert(vpn.ipSec);return vpn.ipSec.serverCaRefs}assertNotReached()}getManagedVpnClientCertType_(managedProperties){const vpn=managedProperties.typeProperties.vpn;assert(vpn);switch(vpn.type){case VpnType.kOpenVPN:assert(vpn.openVpn);return vpn.openVpn.clientCertType||OncMojo.createManagedString("");case VpnType.kIKEv2:case VpnType.kL2TPIPsec:assert(vpn.ipSec);return vpn.ipSec.clientCertType||OncMojo.createManagedString("")}assertNotReached()}onWifiPasswordInputKeypress_(){if(this.error==="bad-passphrase"){this.setError_("")}}eapConfigServerCaCertAllowed_(){assert(this.eapProperties_);const outer=this.eapProperties_.outer;if(!(outer==="EAP-TLS"||outer==="EAP-TTLS"||outer==="PEAP")){return true}if(this.selectedServerCaHash_!==DEFAULT_HASH){return true}const isPropertyManaged=!!this.managedEapProperties_&&!!this.managedEapProperties_.useSystemCas&&this.managedEapProperties_.useSystemCas.policySource!==PolicySource.kNone;if(isPropertyManaged){return true}if(this.eapProperties_.domainSuffixMatch.length!=0||this.eapProperties_.subjectAltNameMatch.length!=0){return true}return false}getSecurityTypeAsNumber(securityType){if(typeof this.securityType_==="string"){return Number.parseInt(this.securityType_,10)}return securityType}getSecurityTypeForTesting(){return this.securityType_}setSecurityTypeForTesting(securityType){this.securityType_=securityType}getShareNetworkForTesting(){return this.shareNetwork_}setShareNetworkForTesting(shareNetwork){this.shareNetwork_=shareNetwork}getPropertiesSentForTesting(){return this.propertiesSent_}getManagedPropertiesForTesting(){assert(this.managedProperties_);return this.managedProperties_}getPropertiesToSetForTesting(){return this.getPropertiesToSet_()}setManagedPropertiesForTesting(managedProperties){this.managedProperties_=managedProperties}setSerializedSubjectAltNameMatchForTesting(serializedSubjectAltNameMatch){this.serializedSubjectAltNameMatch_=serializedSubjectAltNameMatch}setSerializedDomainSuffixMatchForTesting(serializedDomainSuffixMatch){this.serializedDomainSuffixMatch_=serializedDomainSuffixMatch}getVpnIsConfiguredForTesting(){return this.vpnIsConfigured_()}}customElements.define(NetworkConfigElement.is,NetworkConfigElement);function getTemplate$M(){return html`<!--_html_template_start_--><style include="internet-shared iron-flex">cr-dialog::part(dialog){width:460px}.error{color:var(--cros-text-color-alert);font-weight:500}</style>

<cr-dialog id="dialog" close-text="Close">
  <div id="dialogTitle" slot="title">
    [[getDialogTitle_(name, type, showConnect)]]
  </div>
  <div id="dialogBody" slot="body">
    <network-config id="networkConfig" class="flex" guid="[[guid]]" name="{{name}}" type="{{type}}" enable-connect="{{enableConnect_}}" enable-save="{{enableSave_}}" share-allow-enable="[[shareAllowEnable_]]" share-default="[[shareDefault_]]" error="{{error_}}" on-close="onClose_" connect-on-enter="[[showConnect]]" on-properties-set="onPropertiesSet_">
    </network-config>
  </div>

  <div class="layout horizontal center" slot="button-container">
    <template is="dom-if" if="[[error_]]" restamp>
      <div class="flex error">[[getError_(error_)]]</div>
    </template>
    <cr-button class="cancel-button" on-click="onCancelClick_">
      Cancel
    </cr-button>
    <template is="dom-if" if="[[!showConnect]]">
      <cr-button id="saveButton" class="action-button" on-click="onSaveClick_" disabled="[[!enableSave_]]">
        Save
      </cr-button>
    </template>
    <template is="dom-if" if="[[showConnect]]">
      <cr-button id="connectButton" class="action-button" on-click="onConnectClick_" disabled="[[!enableConnect_]]">
        Connect
      </cr-button>
    </template>
  </div>

</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const InternetConfigElementBase=I18nMixin(PolymerElement);class InternetConfigElement extends InternetConfigElementBase{static get is(){return"internet-config"}static get template(){return getTemplate$M()}static get properties(){return{shareAllowEnable_:{type:Boolean,value(){return loadTimeData.getBoolean("shareNetworkAllowEnable")}},shareDefault_:{type:Boolean,value(){return loadTimeData.getBoolean("shareNetworkDefault")}},guid:{type:String,value:""},type:String,name:String,showConnect:Boolean,enableConnect_:Boolean,enableSave_:Boolean,error_:{type:String,value:""}}}open(){const dialog=this.$.dialog;if(!dialog.open){dialog.showModal()}this.$.networkConfig.init()}close(){const dialog=this.$.dialog;if(dialog.open){dialog.close()}}onClose_(){this.close()}getDialogTitle_(){if(this.name&&!this.showConnect){return this.i18n("internetConfigName",htmlEscape(this.name))}const type=this.i18n("OncType"+this.type);return this.i18n("internetJoinType",type)}getError_(){if(this.i18nExists(this.error_)){return this.i18n(this.error_)}return this.i18n("networkErrorUnknown")}onCancelClick_(){this.close()}onSaveClick_(){this.$.networkConfig.save()}onConnectClick_(){this.$.networkConfig.connect()}onPropertiesSet_(){if(this.type===OncMojo.getNetworkTypeString(NetworkType.kWiFi)){recordSettingChange(Setting.kWifiAddNetwork,{stringValue:this.guid})}}}customElements.define(InternetConfigElement.is,InternetConfigElement);function getTemplate$L(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared iron-flex">cr-action-menu.dropdown-item{min-height:36px}cr-action-menu hr{border:none;border-top:var(--cr-separator-line);margin:6px 0 0 0}</style>
<template is="dom-if" if="[[shouldShowDotsMenuButton_(eSimNetworkState_, isGuest_)]]" restamp>
  <cr-icon-button class="icon-more-vert" title="More actions" id="moreNetworkDetail" on-click="onDotsClick_" disabled="[[isDotsMenuButtonDisabled_(eSimNetworkState_, deviceState.*)]]">
  </cr-icon-button>
</template>
<cr-lazy-render id="menu">
  <template>
    <cr-action-menu role-description="Menu">
      <button class="dropdown-item" id="renameBtn" on-click="onRenameEsimProfileClick_" role="menuitem">
        Rename Profile
      </button>
      <hr>
      <button class="dropdown-item" on-click="onRemoveEsimProfileClick_" role="menuitem" id="removeBtn">
        Remove Profile
      </button>
    </cr-action-menu>
  </template>
</cr-lazy-render>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsInternetDetailMenuElementBase=ESimManagerListenerMixin(DeepLinkingMixin(RouteObserverMixin(PolymerElement)));class SettingsInternetDetailMenuElement extends SettingsInternetDetailMenuElementBase{constructor(){super(...arguments);this.supportedSettingIds=new Set([Setting.kCellularRenameESimNetwork,Setting.kCellularRemoveESimNetwork])}static get is(){return"settings-internet-detail-menu"}static get template(){return getTemplate$L()}static get properties(){return{deviceState:Object,eSimNetworkState_:{type:Object,value:null},isGuest_:{type:Boolean,value(){return loadTimeData.getBoolean("isGuest")}},guid_:{type:String,value:""}}}beforeDeepLinkAttempt(settingId){afterNextRender(this,(()=>{const menu=this.$.menu.get();const menuTarget=castExists(this.shadowRoot.getElementById("moreNetworkDetail"));menu.showAt(menuTarget);afterNextRender(this,(()=>{let element=null;if(settingId===Setting.kCellularRenameESimNetwork){element=this.shadowRoot.getElementById("renameBtn")}else{element=this.shadowRoot.getElementById("removeBtn")}if(!element){console.warn("Deep link element could not be found");return}this.showDeepLinkElement(element);return}))}));return false}currentRouteChanged(route){this.eSimNetworkState_=null;this.guid_="";if(route!==routes.NETWORK_DETAIL){return}const queryParams=Router.getInstance().getQueryParameters();const guid=queryParams.get("guid")||"";if(!guid){console.error("No guid specified for page:"+route);return}this.guid_=guid;this.setEsimNetworkState_();this.attemptDeepLink()}onProfileChanged(){this.setEsimNetworkState_()}async setEsimNetworkState_(){const networkConfig=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();const response=await networkConfig.getNetworkState(this.guid_);if(!response.result||response.result.type!==NetworkType.kCellular||!response.result.typeState.cellular.eid||!response.result.typeState.cellular.iccid){this.eSimNetworkState_=null;return}this.eSimNetworkState_=response.result}onDotsClick_(e){const menu=this.$.menu.get();menu.showAt(e.target)}shouldShowDotsMenuButton_(){if(this.isGuest_){return false}return!!this.eSimNetworkState_}isDotsMenuButtonDisabled_(){if(this.eSimNetworkState_&&this.eSimNetworkState_.source===OncSource.kDevicePolicy){return true}if(!this.deviceState){return false}return OncMojo.deviceIsInhibited(this.deviceState)}onRenameEsimProfileClick_(){this.closeMenu_();const event=new CustomEvent("show-esim-profile-rename-dialog",{bubbles:true,composed:true,detail:{networkState:this.eSimNetworkState_}});this.dispatchEvent(event)}onRemoveEsimProfileClick_(){this.closeMenu_();const event=new CustomEvent("show-esim-remove-profile-dialog",{bubbles:true,composed:true,detail:{networkState:this.eSimNetworkState_}});this.dispatchEvent(event)}closeMenu_(){const actionMenu=castExists(this.shadowRoot.querySelector("cr-action-menu"));actionMenu.close()}}customElements.define(SettingsInternetDetailMenuElement.is,SettingsInternetDetailMenuElement);function getTemplate$K(){return html`<!--_html_template_start_--><style include="internet-shared iron-flex">.settings-box{border-top:var(--network-summary-item-border-top,var(--cr-separator-line))}#hotspotPageTitle{padding-inline-start:0}network-icon{padding-inline-end:16px;padding-inline-start:0;--network-icon-fill-color:var(--cros-sys-primary)}</style>

<div class="settings-box two-line no-padding">
  <div id="hotspotSummaryItemRow" actionable$="[[shouldShowArrowButton_(hotspotInfo.allowStatus)]]" on-click="navigateToDetailPage_" class="flex layout horizontal center link-wrapper">
      <network-icon id="hotspotIcon" hotspot-info="[[hotspotInfo]]">
      </network-icon>

    <div id="hotspotPageTitle" class="middle settings-box-text">
      Hotspot
      <div class="secondary" id="hotspotStateSublabel" hidden="[[shouldHideHotspotStateSublabel_(
              hotspotInfo.allowStatus, hotspotInfo.state)]]">
        [[getHotspotStateSublabel_(hotspotInfo.state)]]
      </div>
      <localized-link class="secondary" id="hotspotDisabledSublabelLink" hidden="[[!shouldHideHotspotStateSublabel_(
              hotspotInfo.allowStatus, hotspotInfo.state)]]" localized-string="[[getHotspotDisabledSublabelLink_(
              hotspotInfo.allowStatus)]]">
      </localized-link>
    </div>

    <template is="dom-if" if="[[shouldShowPolicyIndicator_(
        hotspotInfo.allowStatus)]]" restamp>
      <cr-policy-indicator id="policyIndicator" indicator-type="[[getPolicyIndicatorType_()]]">
      </cr-policy-indicator>
    </template>

    <template is="dom-if" if="[[shouldShowArrowButton_(
        hotspotInfo.allowStatus, hotspotInfo.state)]]" restamp>
      <cr-icon-button id="hotspotSummaryItemRowArrowIcon" class="subpage-arrow layout end" aria-label="Hotspot" aria-description$="[[getHotspotStateSublabel_(hotspotInfo.state)]]" aria-roledescription="Subpage button" on-click="navigateToDetailPage_">
      </cr-icon-button>
    </template>
  </div>

  <div class="separator"></div>
  <cr-toggle id="enableHotspotToggle" class="margin-matches-padding" checked="{{isHotspotToggleOn_}}" disabled$="[[isToggleDisabled_(hotspotInfo.allowStatus,
          hotspotInfo.state)]]" on-change="onHotspotToggleChange_" aria-label="Hotspot">
  </cr-toggle>
</div>
<!--_html_template_end_-->`}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const HotspotSummaryItemElementBase=mixinBehaviors([CrPolicyNetworkBehaviorMojo],I18nMixin(PolymerElement));class HotspotSummaryItemElement extends HotspotSummaryItemElementBase{static get is(){return"hotspot-summary-item"}static get template(){return getTemplate$K()}static get properties(){return{hotspotInfo:{type:Object,observer:"onHotspotInfoChanged_"},isHotspotToggleOn_:{type:Boolean,value:false}}}onHotspotInfoChanged_(newValue,_oldValue){this.isHotspotToggleOn_=newValue.state===HotspotState.kEnabled||newValue.state===HotspotState.kEnabling}navigateToDetailPage_(){if(!this.shouldShowArrowButton_()){return}Router.getInstance().navigateTo(routes.HOTSPOT_DETAIL)}getHotspotStateSublabel_(){if(this.hotspotInfo.state===HotspotState.kEnabling){return this.i18n("hotspotSummaryStateTurningOn")}if(this.hotspotInfo.state===HotspotState.kEnabled){return this.i18n("hotspotSummaryStateOn")}if(this.hotspotInfo.state===HotspotState.kDisabling){return this.i18n("hotspotSummaryStateTurningOff")}return this.i18n("hotspotSummaryStateOff")}shouldHideHotspotStateSublabel_(){if(this.hotspotInfo.state===HotspotState.kEnabling||this.hotspotInfo.state===HotspotState.kEnabled){return false}return this.hotspotInfo.allowStatus===HotspotAllowStatus.kDisallowedReadinessCheckFail||this.hotspotInfo.allowStatus===HotspotAllowStatus.kDisallowedNoMobileData}getHotspotDisabledSublabelLink_(allowStatus){if(allowStatus===HotspotAllowStatus.kDisallowedNoMobileData){return this.i18nAdvanced("hotspotNoMobileDataSublabelWithLink").toString()}if(allowStatus===HotspotAllowStatus.kDisallowedReadinessCheckFail){return this.i18nAdvanced("hotspotMobileDataNotSupportedSublabelWithLink").toString()}return""}setHotspotEnabledState_(enabled){if(enabled){getHotspotConfig().enableHotspot();return}getHotspotConfig().disableHotspot()}isToggleDisabled_(){if(this.hotspotInfo.state===HotspotState.kDisabling){return true}if(this.hotspotInfo.state===HotspotState.kEnabling||this.hotspotInfo.state===HotspotState.kEnabled){return false}return this.hotspotInfo.allowStatus!==HotspotAllowStatus.kAllowed}shouldShowArrowButton_(){return this.hotspotInfo.allowStatus===HotspotAllowStatus.kAllowed||this.hotspotInfo.state===HotspotState.kEnabling||this.hotspotInfo.state===HotspotState.kEnabled}getIconClass_(isHotspotToggleOn){if(isHotspotToggleOn){return"os-settings:hotspot-enabled"}return"os-settings:hotspot-disabled"}shouldShowPolicyIndicator_(allowStatus){return allowStatus===HotspotAllowStatus.kDisallowedByPolicy}getPolicyIndicatorType_(){return this.getIndicatorTypeForSource(OncSource.kDevicePolicy)}onHotspotToggleChange_(){this.setHotspotEnabledState_(this.isHotspotToggleOn_);getInstance().announce(this.isHotspotToggleOn_?this.i18n("hotspotEnabledA11yLabel"):this.i18n("hotspotDisabledA11yLabel"))}}customElements.define(HotspotSummaryItemElement.is,HotspotSummaryItemElement);function getTemplate$J(){return html`<!--_html_template_start_--><style include="internet-shared iron-flex">.settings-box{border-top:var(--network-summary-item-border-top,var(--cr-separator-line))}#outerBox{padding:0 var(--cr-section-padding)}#details{align-items:center;display:flex;flex:auto}.network-state{color:var(--cr-secondary-text-color);font-size:inherit}.warning-message{color:var(--cros-text-color-warning);font-size:inherit}#networkIcon{--network-icon-fill-color:var(--cros-sys-primary);padding-inline-end:16px;padding-inline-start:0}</style>
<div class="settings-box two-line no-padding">
  <div id="networkSummaryItemRow" actionable$="[[isItemActionable_(activeNetworkState,
                        deviceState, networkStateList)]]" class="flex layout horizontal center link-wrapper" on-click="onShowDetailsClick_">
    <div id="details" aria-hidden="true">
      <network-icon id="networkIcon" show-technology-badge="[[showTechnologyBadge_]]" network-state="[[activeNetworkState]]" device-state="[[deviceState]]">
      </network-icon>
      <div class="flex settings-box-text">
        <div id="networkTitleText">
          [[getTitleText_(activeNetworkState, deviceState)]]
        </div>
        <div id="networkState" class$="[[getNetworkStateClass_(activeNetworkState)]]">
          [[getNetworkStateText_(activeNetworkState, deviceState.*)]]
        </div>
      </div>
    </div>

    <template is="dom-if" if="[[showPolicyIndicator_(activeNetworkState)]]">
      <cr-policy-indicator id="policyIndicator" icon-aria-label="[[getTitleText_(activeNetworkState, deviceState)]]" indicator-type="[[getPolicyIndicatorType_(activeNetworkState)]]" on-click="doNothing_">
      </cr-policy-indicator>
    </template>

    <template is="dom-if" if="[[showArrowButton_(activeNetworkState,
                                  deviceState, networkStateList)]]">
      <cr-icon-button id="networkSummaryItemRowArrowIcon" class="subpage-arrow" aria-labelledby="networkTitleText" aria-describedby="networkState networkIcon" aria-roledescription="Subpage button" on-click="onShowDetailsArrowClick_">
      </cr-icon-button>
    </template>
  </div>

  <template is="dom-if" if="[[enableToggleIsVisible_(deviceState)]]">
    <div class="separator"></div>
    <cr-toggle id="deviceEnabledButton" class="margin-matches-padding" aria-label$="[[getToggleA11yString_(deviceState)]]" aria-describedby$="[[getToggleA11yDescribedBy_(deviceState)]]" checked="[[deviceIsEnabledOrEnabling_(deviceState)]]" disabled="[[!enableToggleIsEnabled_(deviceState)]]" on-change="onDeviceEnabledChange_">
    </cr-toggle>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkSummaryItemElementBase=mixinBehaviors([CrPolicyNetworkBehaviorMojo],I18nMixin(PolymerElement));class NetworkSummaryItemElement extends NetworkSummaryItemElementBase{static get is(){return"network-summary-item"}static get template(){return getTemplate$J()}static get properties(){return{deviceState:{type:Object,notify:true},tetherDeviceState:Object,activeNetworkState:Object,networkStateList:{type:Array,value(){return[]}},networkTitleText:String,showTechnologyBadge_:{type:Boolean,value(){return loadTimeData.valueExists("showTechnologyBadge")&&loadTimeData.getBoolean("showTechnologyBadge")}},globalPolicy:Object}}constructor(){super();this.browserProxy_=InternetPageBrowserProxyImpl.getInstance()}getDeviceEnabledToggle(){return this.shadowRoot.querySelector("#deviceEnabledButton")}getNetworkStateText_(){if(OncMojo.deviceIsInhibited(this.deviceState)){return this.i18n("internetDeviceBusy")}if(OncMojo.deviceIsFlashing(this.deviceState)){return this.i18n("internetDeviceFlashing")}if(this.isPortalState_(this.activeNetworkState.portalState)){if(this.deviceState&&this.deviceState.type===NetworkType.kCellular){return this.i18n("networkListItemCellularSignIn")}return this.i18n("networkListItemSignIn")}const stateText=this.getConnectionStateText_(this.activeNetworkState);if(stateText){return stateText}const deviceState=this.deviceState;if(deviceState){if(deviceState.type===NetworkType.kTether){if(deviceState.deviceState===DeviceStateType.kUninitialized){return this.i18n("tetherEnableBluetooth")}}if(deviceState.deviceState===DeviceStateType.kEnabled){return this.networkStateList.length>0?this.i18n("networkListItemNotConnected"):this.i18n("networkListItemNoNetwork")}if(deviceState.deviceState===DeviceStateType.kEnabling){return this.i18n("networkDeviceTurningOn")}}return this.i18n("deviceOff")}getConnectionStateText_(networkState){if(!networkState||!networkState.guid){return""}const connectionState=networkState.connectionState;const name=OncMojo.getNetworkStateDisplayNameUnsafe(networkState);if(OncMojo.connectionStateIsConnected(connectionState)){return networkState.type===NetworkType.kEthernet?this.i18n("networkListItemConnected"):name}if(connectionState===ConnectionStateType.kConnecting){return name?loadTimeData.getStringF("networkListItemConnectingTo",name):this.i18n("networkListItemConnecting")}return this.i18n("networkListItemNotConnected")}showPolicyIndicator_(activeNetworkState){return activeNetworkState!==undefined&&OncMojo.connectionStateIsConnected(activeNetworkState.connectionState)||this.isPolicySource(activeNetworkState.source)||this.isProhibitedVpn_()}getPolicyIndicatorType_(activeNetworkState){if(this.isProhibitedVpn_()){return this.getIndicatorTypeForSource(OncSource.kDevicePolicy)}return this.getIndicatorTypeForSource(activeNetworkState.source)}getNetworkStateClass_(activeNetworkState){if(this.isPortalState_(activeNetworkState.portalState)){return"warning-message"}return"network-state"}deviceIsEnabled_(deviceState){if(!deviceState){return false}if(this.isInstantHotspotRebrandEnabled_()&&deviceState.type===NetworkType.kTether){return true}if(deviceState.type===NetworkType.kVPN){return true}if(deviceState.deviceState===DeviceStateType.kEnabled){return true}if(OncMojo.deviceIsFlashing(deviceState)){return false}return OncMojo.deviceIsInhibited(deviceState)}deviceIsEnabling_(deviceState){return!!deviceState&&deviceState.deviceState===DeviceStateType.kEnabling}deviceIsEnabledOrEnabling_(deviceState){return this.deviceIsEnabled_(deviceState)||this.deviceIsEnabling_(deviceState)}enableToggleIsVisible_(deviceState){if(!deviceState){return false}switch(deviceState.type){case NetworkType.kEthernet:case NetworkType.kVPN:return false;case NetworkType.kTether:return!this.isInstantHotspotRebrandEnabled_();case NetworkType.kWiFi:case NetworkType.kCellular:return deviceState.deviceState!==DeviceStateType.kUninitialized}assertNotReached()}enableToggleIsEnabled_(deviceState){return this.enableToggleIsVisible_(deviceState)&&deviceState.deviceState!==DeviceStateType.kProhibited&&!OncMojo.deviceIsInhibited(deviceState)&&!OncMojo.deviceStateIsIntermediate(deviceState.deviceState)&&!OncMojo.deviceIsFlashing(deviceState)}getToggleA11yString_(deviceState){if(!this.enableToggleIsVisible_(deviceState)){return""}switch(deviceState.type){case NetworkType.kTether:return this.i18n("internetToggleTetherA11yLabel");case NetworkType.kCellular:return this.i18n("internetToggleMobileA11yLabel");case NetworkType.kWiFi:return this.i18n("internetToggleWiFiA11yLabel")}assertNotReached()}getToggleA11yDescribedBy_(deviceState){if(this.enableToggleIsVisible_(deviceState)&&deviceState.type===NetworkType.kTether&&deviceState.deviceState===DeviceStateType.kUninitialized){return"networkState"}return""}isInstantHotspotRebrandEnabled_(){return loadTimeData.valueExists("isInstantHotspotRebrandEnabled")&&loadTimeData.getBoolean("isInstantHotspotRebrandEnabled")}isProhibitedVpn_(){return!!this.deviceState&&this.deviceState.type===NetworkType.kVPN&&this.builtInVpnProhibited_(this.deviceState)}isBuiltInVpnType_(vpnType){return vpnType===VpnType.kL2TPIPsec||vpnType===VpnType.kOpenVPN}hasNonBuiltInVpn_(networkStateList){const nonBuiltInVpnIndex=networkStateList.findIndex((networkState=>!this.isBuiltInVpnType_(networkState.typeState.vpn.type)));return nonBuiltInVpnIndex!==-1}builtInVpnProhibited_(deviceState){return!!deviceState&&deviceState.deviceState===DeviceStateType.kProhibited}anyVpnExists_(deviceState,networkStateList){return this.hasNonBuiltInVpn_(networkStateList)||!this.builtInVpnProhibited_(deviceState)&&networkStateList.length>0}shouldShowDetails_(activeNetworkState,deviceState,networkStateList){if(!!deviceState&&deviceState.type===NetworkType.kVPN){return this.anyVpnExists_(deviceState,networkStateList)}return this.deviceIsEnabled_(deviceState)&&(!!activeNetworkState.guid||networkStateList.length>0)}shouldShowSubpage_(deviceState,networkStateList){if(!deviceState){return false}const type=deviceState.type;if(type===NetworkType.kTether||type===NetworkType.kCellular&&this.tetherDeviceState){return true}if(type===NetworkType.kCellular){if(OncMojo.deviceIsInhibited(deviceState)){return true}const{pSimSlots:pSimSlots,eSimSlots:eSimSlots}=getSimSlotCount(deviceState);if(eSimSlots>0||pSimSlots>0){return true}}if(type===NetworkType.kVPN){return this.anyVpnExists_(deviceState,networkStateList)}let minlen;if(type===NetworkType.kWiFi){minlen=0}else{minlen=2}return networkStateList.length>=minlen}onShowDetailsClick_(event){if(!this.deviceIsEnabled_(this.deviceState)){if(this.enableToggleIsEnabled_(this.deviceState)){const type=this.deviceState.type;const deviceEnabledToggledEvent=new CustomEvent("device-enabled-toggled",{bubbles:true,composed:true,detail:{enabled:true,type:type}});this.dispatchEvent(deviceEnabledToggledEvent)}}else if(this.isPortalState_(this.activeNetworkState.portalState)){this.browserProxy_.showPortalSignin(this.activeNetworkState.guid)}else if(this.shouldShowSubpage_(this.deviceState,this.networkStateList)){const showNetworksEvent=new CustomEvent("show-networks",{bubbles:true,composed:true,detail:this.deviceState.type});this.dispatchEvent(showNetworksEvent)}else if(this.shouldShowDetails_(this.activeNetworkState,this.deviceState,this.networkStateList)){if(this.activeNetworkState.guid){const showDetailEvent=new CustomEvent("show-detail",{bubbles:true,composed:true,detail:this.activeNetworkState});this.dispatchEvent(showDetailEvent)}else if(this.networkStateList.length>0){const showDetailEvent=new CustomEvent("show-detail",{bubbles:true,composed:true,detail:this.networkStateList[0]});this.dispatchEvent(showDetailEvent)}}event.stopPropagation()}onShowDetailsArrowClick_(event){if(this.shouldShowSubpage_(this.deviceState,this.networkStateList)){const showNetworksEvent=new CustomEvent("show-networks",{bubbles:true,composed:true,detail:this.deviceState.type});this.dispatchEvent(showNetworksEvent)}else if(this.shouldShowDetails_(this.activeNetworkState,this.deviceState,this.networkStateList)){if(this.activeNetworkState.guid){const showDetailEvent=new CustomEvent("show-detail",{bubbles:true,composed:true,detail:this.activeNetworkState});this.dispatchEvent(showDetailEvent)}else if(this.networkStateList.length>0){const showDetailEvent=new CustomEvent("show-detail",{bubbles:true,composed:true,detail:this.networkStateList[0]});this.dispatchEvent(showDetailEvent)}}event.stopPropagation()}isItemActionable_(activeNetworkState,deviceState,networkStateList){if(!this.deviceIsEnabled_(this.deviceState)){return this.enableToggleIsEnabled_(this.deviceState)}if(this.isPortalState_(this.activeNetworkState.portalState)){return true}return this.shouldShowSubpage_(this.deviceState,this.networkStateList)||this.shouldShowDetails_(activeNetworkState,deviceState,networkStateList)}showArrowButton_(activeNetworkState,deviceState,networkStateList){if(!this.deviceIsEnabled_(deviceState)){return false}return this.shouldShowSubpage_(deviceState,networkStateList)||this.shouldShowDetails_(activeNetworkState,deviceState,networkStateList)}onDeviceEnabledChange_(){assert(this.deviceState);const deviceIsEnabled=this.deviceIsEnabled_(this.deviceState);const deviceEnabledToggledEvent=new CustomEvent("device-enabled-toggled",{bubbles:true,composed:true,detail:{enabled:!deviceIsEnabled,type:this.deviceState.type}});this.dispatchEvent(deviceEnabledToggledEvent);this.deviceState.deviceState=deviceIsEnabled?DeviceStateType.kDisabling:DeviceStateType.kEnabling}getTitleText_(){if(this.networkTitleText){return this.networkTitleText}if(this.isPortalState_(this.activeNetworkState.portalState)){const stateText=this.getConnectionStateText_(this.activeNetworkState);if(stateText){return stateText}}return this.getNetworkTypeString_(this.activeNetworkState.type)}doNothing_(event){event.stopPropagation()}getNetworkTypeString_(type){if(type===NetworkType.kCellular||type===NetworkType.kTether&&!this.isInstantHotspotRebrandEnabled_()){type=NetworkType.kMobile}return this.i18n("OncType"+OncMojo.getNetworkTypeString(type))}isPortalState_(portalState){return portalState===PortalState.kPortal||portalState===PortalState.kPortalSuspected}}customElements.define(NetworkSummaryItemElement.is,NetworkSummaryItemElement);function getTemplate$I(){return html`<!--_html_template_start_--><style>network-summary-item:first-child{--network-summary-item-border-top:0}</style>
<div id="summary">
  <template is="dom-repeat" items="[[activeNetworkStates_]]">
    <network-summary-item id="[[getTypeString_(item)]]" active-network-state="[[item]]" device-state="[[get(item.type, deviceStates)]]" global-policy="[[globalPolicy_]]" network-state-list="[[get(item.type, networkStateLists_)]]" tether-device-state="[[getTetherDeviceState_(deviceStates)]]">
    </network-summary-item>
  </template>
  <template is="dom-if" if="[[shouldShowHotspotSummary_(
      isHotspotFeatureEnabled_, hotspotInfo, hotspotInfo.allowStatus)]]">
    <hotspot-summary-item hotspot-info="[[hotspotInfo]]">
    </hotspot-summary-item>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NetworkSummaryElementBase=mixinBehaviors([NetworkListenerBehavior],PolymerElement);class NetworkSummaryElement extends NetworkSummaryElementBase{static get is(){return"network-summary"}static get template(){return getTemplate$I()}static get properties(){return{defaultNetwork:{type:Object,value:null,notify:true},deviceStates:{type:Object,value(){return{[NetworkType.kWiFi]:{deviceState:DeviceStateType.kDisabled,type:NetworkType.kWiFi}}},notify:true},hotspotInfo:{type:Object,notify:true},activeNetworkStates_:{type:Array,value(){return[OncMojo.getDefaultNetworkState(NetworkType.kWiFi)]}},networkStateLists_:{type:Object,value(){return{[NetworkType.kWiFi]:[]}}},globalPolicy_:Object,isInstantHotspotRebrandEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isInstantHotspotRebrandEnabled")&&loadTimeData.getBoolean("isInstantHotspotRebrandEnabled")}}}}constructor(){super();this.activeNetworkIds_=null;this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote();this.crosHotspotConfig_=getHotspotConfig();this.crosHotspotConfigObserverReceiver_=new CrosHotspotConfigObserverReceiver(this)}ready(){super.ready();this.crosHotspotConfig_.addObserver(this.crosHotspotConfigObserverReceiver_.$.bindNewPipeAndPassRemote())}connectedCallback(){super.connectedCallback();this.getNetworkLists_();this.onPoliciesApplied("");this.onHotspotInfoChanged()}async onHotspotInfoChanged(){const response=await this.crosHotspotConfig_.getHotspotInfo();this.hotspotInfo=response.hotspotInfo}async onPoliciesApplied(_userhash){const response=await this.networkConfig_.getGlobalPolicy();this.globalPolicy_=response.result}onActiveNetworksChanged(networks){if(!this.activeNetworkIds_){return}networks.forEach((network=>{const index=this.activeNetworkStates_.findIndex((state=>state.guid===network.guid));if(index!==-1){this.set(["activeNetworkStates_",index],network)}}))}onNetworkStateListChanged(){this.getNetworkLists_()}onDeviceStateListChanged(){this.getNetworkLists_()}getNetworkRow(networkType){const networkTypeString=OncMojo.getNetworkTypeString(networkType);return this.shadowRoot.querySelector(`#${networkTypeString}`)}async getNetworkLists_(){const response=await this.networkConfig_.getDeviceStateList();this.getNetworkStates_(response.result)}async getNetworkStates_(deviceStateList){const filter={filter:FilterType.kVisible,limit:NO_LIMIT,networkType:NetworkType.kAll};const response=await this.networkConfig_.getNetworkStateList(filter);this.updateNetworkStates_(response.result,deviceStateList)}updateNetworkStates_(networkStates,deviceStateList){const newDeviceStates={};for(const device of deviceStateList){newDeviceStates[device.type]=device}const orderedNetworkTypes=[NetworkType.kEthernet,NetworkType.kWiFi,NetworkType.kCellular,NetworkType.kTether,NetworkType.kVPN];const activeNetworkStatesByType=new Map;const newNetworkStateLists={};for(const type of orderedNetworkTypes){newNetworkStateLists[type]=[]}let firstConnectedNetwork=null;networkStates.forEach((networkState=>{const type=networkState.type;if(!activeNetworkStatesByType.has(type)){activeNetworkStatesByType.set(type,networkState);if(!firstConnectedNetwork&&networkState.type!==NetworkType.kVPN&&OncMojo.connectionStateIsConnected(networkState.connectionState)){firstConnectedNetwork=networkState}}newNetworkStateLists[type].push(networkState)}),this);this.defaultNetwork=firstConnectedNetwork;const newActiveNetworkStates=[];this.activeNetworkIds_=new Set;for(const type of orderedNetworkTypes){const device=newDeviceStates[type];if(!device){continue}if(device.type===NetworkType.kVPN&&!activeNetworkStatesByType.has(device.type)){continue}if(type===NetworkType.kTether&&newDeviceStates[NetworkType.kCellular]&&!this.isInstantHotspotRebrandEnabled_){newNetworkStateLists[NetworkType.kCellular]=newNetworkStateLists[NetworkType.kCellular].concat(newNetworkStateLists[NetworkType.kTether]);continue}const networkState=castExists(this.getActiveStateForType_(activeNetworkStatesByType,type));if(networkState.source===OncSource.kNone&&device.deviceState===DeviceStateType.kProhibited){networkState.source=OncSource.kDevicePolicy}newActiveNetworkStates.push(networkState);this.activeNetworkIds_.add(networkState.guid)}this.deviceStates=newDeviceStates;this.networkStateLists_=newNetworkStateLists;this.activeNetworkStates_=newActiveNetworkStates;const activeNetworksUpdatedEvent=new CustomEvent("active-networks-updated",{bubbles:true,composed:true});this.dispatchEvent(activeNetworksUpdatedEvent)}getActiveStateForType_(activeStatesByType,type){let activeState=activeStatesByType.get(type);if(!activeState&&type===NetworkType.kCellular&&!this.isInstantHotspotRebrandEnabled_){activeState=activeStatesByType.get(NetworkType.kTether)}return activeState||OncMojo.getDefaultNetworkState(type)}getTypeString_(network){return OncMojo.getNetworkTypeString(network.type)}getTetherDeviceState_(deviceStates){return deviceStates[NetworkType.kTether]}shouldShowHotspotSummary_(){if(!this.hotspotInfo){return false}return this.hotspotInfo.allowStatus!==HotspotAllowStatus.kDisallowedNoCellularUpstream&&this.hotspotInfo.allowStatus!==HotspotAllowStatus.kDisallowedNoWiFiDownstream&&this.hotspotInfo.allowStatus!==HotspotAllowStatus.kDisallowedNoWiFiSecurityModes}}customElements.define(NetworkSummaryElement.is,NetworkSummaryElement);function getTemplate$H(){return html`<!--_html_template_start_--><style include="os-settings-icons settings-shared">iron-icon.policy{height:24px;margin-inline-end:12px;margin-inline-start:4px;width:24px}cr-toast iron-icon{--iron-icon-fill-color:var(--cros-toast-icon-color-warning);margin-inline-end:16px}#apnTooltip{text-align:center}#hotspotSubtitle{color:var(--cr-secondary-text-color);font-size:inherit;padding-left:20px;padding-top:8px;max-width:560px}#apnSubpageTitleExtra{display:flex;align-items:center}</style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="Network">
      <network-summary default-network="{{defaultNetwork}}" device-states="{{deviceStates}}" hotspot-info="{{hotspotInfo}}" on-active-networks-updated="attemptDeepLink">
      </network-summary>
      <template is="dom-if" if="[[allowAddConnection_(globalPolicy_,
          managedNetworkAvailable)]]">
        <cr-expand-button aria-label="Add network connection" class="settings-box two-line" expanded="{{addConnectionExpanded_}}" id="expandAddConnections">
          <span aria-hidden="true">
            Add connection
          </span>
        </cr-expand-button>
        <template is="dom-if" if="[[addConnectionExpanded_]]">
          <div class="list-frame vertical-list">
            <template is="dom-if" if="[[shouldShowAddWiFiRow_(globalPolicy_,
                managedNetworkAvailable, deviceStates)]]">
              <div actionable class="list-item" on-click="onAddWiFiClick_">
                <div class="start settings-box-text" id="add-wifi-label" aria-hidden="true">
                  Add Wi-Fiâ€¦
                </div>
                <cr-icon-button class="icon-add-wifi" aria-labelledby="add-wifi-label"></cr-icon-button>
              </div>
            </template>
            <div actionable$="[[!isBuiltInVpnManagementBlocked_]]" class="list-item" on-click="onAddVpnClick_">
              <div class="start settings-box-text" id="add-vpn-label" aria-hidden="true">
                Add built-in VPNâ€¦
              </div>
              <template is="dom-if" if="[[isBuiltInVpnManagementBlocked_]]">
                <cr-policy-indicator id="vpnPolicyIndicator" icon-aria-label="Built-in VPN" indicator-type="devicePolicy" on-click="doNothing_">
                </cr-policy-indicator>
              </template>
              <cr-icon-button id="add-vpn-button" class="icon-add-circle" aria-labelledby="add-vpn-label" disabled="[[isBuiltInVpnManagementBlocked_]]">
              </cr-icon-button>
            </div>
            <template is="dom-repeat" items="[[vpnProviders_]]">
              <div actionable class="list-item" on-click="onAddThirdPartyVpnClick_">
                <div class="start settings-box-text">
                  [[getAddThirdPartyVpnLabel_(item)]]
                </div>
                <cr-icon-button class="icon-external" aria-label$="[[getAddThirdPartyVpnLabel_(item)]]">
                </cr-icon-button>
              </div>
            </template>
          </div>
        </template>
      </template>
      <template is="dom-if" if="[[!allowAddConnection_(globalPolicy_,
          managedNetworkAvailable)]]">
        <div class="settings-box">
          <iron-icon class="policy" icon="cr20:domain"></iron-icon>
          <div class="settings-box-text">
            Add connection is disabled by your administrator
          </div>
        </div>
      </template>
    </settings-card>
  </div>

  <template is="dom-if" route-path="/networkDetail" restamp>
    <os-settings-subpage page-title="Network Details">
      <settings-internet-detail-menu slot="subpage-title-extra" device-state="[[getDeviceState_(subpageType_, deviceStates)]]">
      </settings-internet-detail-menu>
      <settings-internet-detail-subpage prefs="{{prefs}}" default-network="[[defaultNetwork]]" global-policy="[[globalPolicy_]]" managed-network-available="[[managedNetworkAvailable]]">
      </settings-internet-detail-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/knownNetworks" restamp>
    <os-settings-subpage page-title="Known Networks">
      <settings-internet-known-networks-subpage network-type="[[knownNetworksType_]]">
      </settings-internet-known-networks-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/apn" restamp>
    <os-settings-subpage page-title="Access point name (APN)">
      <div id="apnSubpageTitleExtra" slot="subpage-title-extra">
        <template is="dom-if" if="[[shouldDisallowApnModification_(globalPolicy_)]]">
          <cr-tooltip-icon id="apnManagedIcon" tooltip-text="This setting is managed by your administrator." icon-class="cr20:domain" tooltip-position="bottom">
          </cr-tooltip-icon>
        </template>
        <cr-icon-button id="apnActionMenuButton" class="icon-more-vert" on-click="onApnMenuButtonClicked_" focus-row-control focus-type="menu" deep-link-focus-id$="[[Setting.kCellularAddApn]]" title="More actions" disabled="[[shouldDisallowApnModification_(globalPolicy_)]]">
        </cr-icon-button>
      </div>
      <apn-subpage id="apnSubpage" is-num-custom-apns-limit-reached="{{isNumCustomApnsLimitReached_}}" should-disallow-apn-modification="[[shouldDisallowApnModification_(globalPolicy_)]]">
      </apn-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/networks" restamp>
    <os-settings-subpage page-title="[[getNetworksPageTitle_(subpageType_)]]" show-spinner="[[showSpinner_]]" spinner-title="Searching for networksâ€¦">
      <settings-internet-subpage-menu slot="subpage-title-extra" device-state="[[getDeviceState_(subpageType_, deviceStates)]]">
      </settings-internet-subpage-menu>
      <template is="dom-if" if="[[isDeviceUpdating_]]" restamp>
        <div class="settings-box first">
          <div id="flashingSubtitle" class="settings-box-text">
            Modem firmware update in progress. Don&#39;t turn off your device.
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[isProviderLocked_]]" restamp>
        
        <div class="settings-box first">
          <div id="cellularSubtitle" class="settings-box-text">
            <localized-link localized-string="[[i18nAdvanced('cellularSubpageSubtitle')]]">
            </localized-link>
          </div>
        </div>
      </template>
      <settings-internet-subpage prefs="{{prefs}}" default-network="[[defaultNetwork]]" device-state="[[getDeviceState_(subpageType_, deviceStates)]]" tether-device-state="[[getTetherDeviceState_(deviceStates)]]" global-policy="[[globalPolicy_]]" vpn-providers="[[vpnProviders_]]" show-spinner="{{showSpinner_}}" is-connected-to-non-cellular-network="[[isConnectedToNonCellularNetwork_]]" is-cellular-setup-active="[[showCellularSetupDialog_]]" is-built-in-vpn-management-blocked="[[isBuiltInVpnManagementBlocked_]]">
      </settings-internet-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/hotspotDetail" restamp>
    <os-settings-subpage id="hotspotSubpage" page-title="Hotspot" show-spinner="[[showHotspotSpinner_(hotspotInfo.state)]]">
      <div id="hotspotSubtitle">
        <localized-link localized-string="[[i18nAdvanced('hotspotSubpageSubtitle')]]">
        </localized-link>
      </div>
      <settings-hotspot-subpage hotspot-info="[[hotspotInfo]]">
      </settings-hotspot-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" route-path="/passpointDetail" restamp>
    <os-settings-subpage page-title="[[getPasspointSubscriptionName_(passpointSubscription_)]]">
      <settings-passpoint-subpage>
      </settings-passpoint-subpage>
    </os-settings-subpage>
  </template>

</os-settings-animated-pages>

<template is="dom-if" if="[[showInternetConfig_]]" restamp>
  <internet-config id="configDialog" on-close="onInternetConfigClose_">
  </internet-config>
</template>

<template is="dom-if" if="[[showCellularSetupDialog_]]" restamp>
  <os-settings-cellular-setup-dialog id="cellularSetupDialog" on-close="onCloseCellularSetupDialog_" page-name="[[cellularSetupDialogPageName_]]">
  </os-settings-cellular-setup-dialog>
</template>

<template is="dom-if" if="[[showESimProfileRenameDialog_]]" restamp>
  <esim-rename-dialog id="esimRenameDialog" on-close="onCloseEsimProfileRenameDialog_" network-state="[[eSimNetworkState_]]" show-cellular-disconnect-warning="[[hasActiveCellularNetwork_]]">
  </esim-rename-dialog>
</template>

<template is="dom-if" if="[[showESimRemoveProfileDialog_]]" restamp>
  <esim-remove-profile-dialog id="esimRemoveProfileDialog" on-close="onCloseEsimRemoveProfileDialog_" on-show-error-toast="onShowErrorToast_" network-state="[[eSimNetworkState_]]" show-cellular-disconnect-warning="[[hasActiveCellularNetwork_]]">
  </esim-remove-profile-dialog>
</template>

<template is="dom-if" if="[[showSimLockDialog_]]" restamp>
  <sim-lock-dialogs global-policy="[[globalPolicy_]]" is-dialog-open="{{showSimLockDialog_}}" device-state="[[getDeviceState_(subpageType_, deviceStates)]]">
  </sim-lock-dialogs>
</template>

<template is="dom-if" if="[[showHotspotConfigDialog_]]" restamp>
  <hotspot-config-dialog id="hotspotConfigDialog" on-close="onCloseHotspotConfigDialog_" hotspot-info="[[hotspotInfo]]">
  </hotspot-config-dialog>
</template>

<cr-action-menu id="apnDotsMenu">
  <button id="discoverMoreApnsButton" class="dropdown-item" on-click="onDiscoverMoreApnsClicked_" disabled="[[isNumCustomApnsLimitReached_]]">
    Show known APNs
  </button>
  <button id="createCustomApnButton" class="dropdown-item" on-click="onCreateCustomApnClicked_" disabled="[[isNumCustomApnsLimitReached_]]">
    Create new APN
  </button>
</cr-action-menu>

<template is="dom-if" if="[[isNumCustomApnsLimitReached_]]" restamp>
  
  <paper-tooltip id="discoverMoreApnsTooltip" for="discoverMoreApnsButton" position="[[apnMenuTooltipsPosition_]]">
    Remove an APN to add a new APN
  </paper-tooltip>
  <paper-tooltip id="createCustomApnTooltip" for="createCustomApnButton" position="[[apnMenuTooltipsPosition_]]">
    Remove an APN to add a new APN
  </paper-tooltip>
</template>

<cr-toast id="errorToast" duration="5000">
  <span id="errorToastMessage">[[errorToastMessage_]]</span>
</cr-toast>
<!--_html_template_end_-->`}
// Copyright 2015 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ESIM_PROFILE_LIMIT=5;const SettingsInternetPageElementBase=mixinBehaviors([NetworkListenerBehavior],DeepLinkingMixin(PrefsMixin(RouteOriginMixin(WebUiListenerMixin(I18nMixin(PolymerElement))))));class SettingsInternetPageElement extends SettingsInternetPageElementBase{static get is(){return"settings-internet-page"}static get template(){return getTemplate$H()}static get properties(){return{section_:{type:Number,value:Section$1.kNetwork,readOnly:true},deviceStates:{type:Object,notify:true,observer:"onDeviceStatesChanged_"},defaultNetwork:{type:Object,notify:true},hotspotInfo:{type:Object,notify:true},showSpinner_:Boolean,subpageType_:Number,knownNetworksType_:Number,addConnectionExpanded_:{type:Boolean,value:false},vpnIsProhibited_:{type:Boolean,value:false},isBuiltInVpnManagementBlocked_:{type:Boolean,computed:"computeIsBuiltInVpnManagementBlocked_(vpnIsProhibited_,"+"prefs.vpn_config_allowed.*"+"prefs.arc.vpn.*,"+"prefs.arc.vpn.always_on.*)"},globalPolicy_:Object,managedNetworkAvailable:{type:Boolean,value:false},vpnProviders_:{type:Array,value(){return[]}},showInternetConfig_:{type:Boolean,value:false},isApnRevampEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isApnRevampEnabled")&&loadTimeData.getBoolean("isApnRevampEnabled")}},isInstantHotspotRebrandEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isInstantHotspotRebrandEnabled")&&loadTimeData.getBoolean("isInstantHotspotRebrandEnabled")}},pendingShowCellularSetupDialogAttemptPageName_:{type:String,value:null},showCellularSetupDialog_:{type:Boolean,value:false},cellularSetupDialogPageName_:String,hasActiveCellularNetwork_:{type:Boolean,value:false},isConnectedToNonCellularNetwork_:{type:Boolean,value:false},showESimProfileRenameDialog_:{type:Boolean,value:false},showESimRemoveProfileDialog_:{type:Boolean,value:false},showHotspotConfigDialog_:{type:Boolean,value:false},pendingShowSimLockDialog_:{type:Boolean,value:false},showSimLockDialog_:{type:Boolean,value:false},isProviderLocked_:{type:Boolean,computed:"showProviderLocked_(subpageType_, deviceStates)"},isDeviceUpdating_:{type:Boolean,computed:"showDeviceUpdating_(subpageType_, deviceStates)"},eSimNetworkState_:{type:Object,value:""},errorToastMessage_:{type:String,value:""},isApnRevampAndAllowApnModificationPolicyEnabled_:{type:Boolean,value(){return loadTimeData.valueExists("isApnRevampAndAllowApnModificationPolicyEnabled")&&loadTimeData.getBoolean("isApnRevampAndAllowApnModificationPolicyEnabled")}},isNumCustomApnsLimitReached_:{type:Boolean},passpointSubscription_:{type:Object,notify:true},apnMenuTooltipsPosition_:{type:String,value:"left"}}}constructor(){super();this.supportedSettingIds=new Set([Setting.kWifiOnOff,Setting.kMobileOnOff,Setting.kCellularAddApn]);this.route=routes.INTERNET;this.detailType_=null;this.browserProxy_=InternetPageBrowserProxyImpl.getInstance();this.networkConfig_=MojoInterfaceProviderImpl.getInstance().getMojoServiceRemote()}ready(){super.ready();this.addEventListener("device-enabled-toggled",(event=>{this.onDeviceEnabledToggled_(event)}));this.addEventListener("network-connect",(event=>{this.onNetworkConnect_(event)}));this.addEventListener("show-cellular-setup",(event=>{this.onShowCellularSetupDialog_(event)}));this.addEventListener("show-config",(event=>{this.onShowConfig_(event)}));this.addEventListener("show-detail",(event=>{this.onShowDetail_(event)}));this.addEventListener("show-known-networks",(event=>{this.onShowKnownNetworks_(event)}));this.addEventListener("show-networks",(event=>{this.onShowNetworks_(event)}));this.addEventListener("show-esim-profile-rename-dialog",(event=>{this.onShowEsimProfileRenameDialog_(event)}));this.addEventListener("show-esim-remove-profile-dialog",(event=>{this.onShowEsimRemoveProfileDialog_(event)}));this.addEventListener("show-hotspot-config-dialog",(()=>{this.onShowHotspotConfigDialog_()}));this.addEventListener("show-passpoint-detail",(event=>{this.onShowPasspointDetails_(event)}));this.addEventListener("show-error-toast",(event=>{this.onShowErrorToast_(event)}));[routes.INTERNET_NETWORKS,routes.NETWORK_DETAIL,routes.KNOWN_NETWORKS,routes.HOTSPOT_DETAIL,routes.APN,routes.PASSPOINT_DETAIL].forEach((route=>{this.addFocusConfig(route,(()=>{if(this.detailType_!==null){const rowForDetailType=this.shadowRoot.querySelector("network-summary").getNetworkRow(this.detailType_);if(rowForDetailType){return rowForDetailType.shadowRoot.querySelector(".subpage-arrow")}}return null}))}))}connectedCallback(){super.connectedCallback();this.onPoliciesApplied("");this.onVpnProvidersChanged();this.onNetworkStateListChanged();const isRTL=window.getComputedStyle(this).direction==="rtl";this.apnMenuTooltipsPosition_=isRTL?"right":"left"}beforeDeepLinkAttempt(settingId){let networkType=null;if(settingId===Setting.kWifiOnOff){networkType=NetworkType.kWiFi}else if(settingId===Setting.kMobileOnOff){networkType=NetworkType.kCellular}else{return true}afterNextRender(this,(()=>{const networkRow=this.shadowRoot.querySelector("network-summary").getNetworkRow(networkType);if(networkRow){const toggleEl=networkRow.getDeviceEnabledToggle();if(toggleEl){this.showDeepLinkElement(toggleEl);return}}console.warn(`Element with deep link id ${settingId} not focusable.`)}));return false}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute===this.route||newRoute===routes.APN){this.attemptDeepLink()}else if(newRoute===routes.INTERNET_NETWORKS){const queryParams=Router.getInstance().getQueryParameters();const type=queryParams.get("type");if(type){this.subpageType_=OncMojo.getNetworkTypeFromString(type)}if(!oldRoute&&queryParams.get("showCellularSetup")==="true"){const pageName=queryParams.get("showPsimFlow")==="true"?CellularSetupPageName.PSIM_FLOW_UI:CellularSetupPageName.ESIM_FLOW_UI;this.pendingShowCellularSetupDialogAttemptPageName_=pageName}this.pendingShowSimLockDialog_=!oldRoute&&!!queryParams.get("showSimLockDialog")&&this.subpageType_===NetworkType.kCellular}else if(newRoute===routes.KNOWN_NETWORKS){const queryParams=Router.getInstance().getQueryParameters();const type=queryParams.get("type");if(type){this.knownNetworksType_=OncMojo.getNetworkTypeFromString(type)}else{this.knownNetworksType_=NetworkType.kWiFi}}}onNetworkStateListChanged(){hasActiveCellularNetwork().then((hasActive=>{this.hasActiveCellularNetwork_=hasActive}));this.updateIsConnectedToNonCellularNetwork_()}async onVpnProvidersChanged(){const response=await this.networkConfig_.getVpnProviders();const providers=response.providers;providers.sort(this.compareVpnProviders_);this.vpnProviders_=providers}async onPoliciesApplied(_userhash){const response=await this.networkConfig_.getGlobalPolicy();this.globalPolicy_=response.result}async updateIsConnectedToNonCellularNetwork_(){const isConnected=await isConnectedToNonCellularNetwork();this.isConnectedToNonCellularNetwork_=isConnected;return isConnected}onDeviceEnabledToggled_(event){this.networkConfig_.setNetworkTypeEnabledState(event.detail.type,event.detail.enabled)}onShowConfig_(event){const type=OncMojo.getNetworkTypeFromString(event.detail.type);if(!event.detail.guid){this.showConfig_(true,type)}else{this.showConfig_(false,type,event.detail.guid,event.detail.name)}}onShowCellularSetupDialog_(event){this.attemptShowCellularSetupDialog_(event.detail.pageName)}attemptShowCellularSetupDialog_(pageName){const cellularDeviceState=this.getDeviceState_(NetworkType.kCellular,this.deviceStates);if(!cellularDeviceState||cellularDeviceState.deviceState!==DeviceStateType.kEnabled){this.showErrorToast_(this.i18n("eSimMobileDataNotEnabledErrorToast"));return}if(pageName===CellularSetupPageName.PSIM_FLOW_UI){this.showCellularSetupDialog_=true;this.cellularSetupDialogPageName_=pageName}else{this.attemptShowEsimSetupDialog_()}}async attemptShowEsimSetupDialog_(){const numProfiles=await getNumESimProfiles();if(numProfiles>=ESIM_PROFILE_LIMIT){this.showErrorToast_(this.i18n("eSimProfileLimitReachedErrorToast",ESIM_PROFILE_LIMIT));return}const isConnected=await this.updateIsConnectedToNonCellularNetwork_();this.showCellularSetupDialog_=isConnected||loadTimeData.getBoolean("bypassConnectivityCheck");if(!this.showCellularSetupDialog_){this.showErrorToast_(this.i18n("eSimNoConnectionErrorToast"));return}this.cellularSetupDialogPageName_=CellularSetupPageName.ESIM_FLOW_UI}onShowErrorToast_(event){this.showErrorToast_(event.detail)}showErrorToast_(message){this.errorToastMessage_=message;this.$.errorToast.show()}onCloseCellularSetupDialog_(){this.showCellularSetupDialog_=false}showConfig_(configAndConnect,type,guid,name){assert(type!==NetworkType.kCellular&&type!==NetworkType.kTether);if(this.showInternetConfig_){return}this.showInternetConfig_=true;setTimeout((()=>{const configDialog=castExists(this.shadowRoot.querySelector("#configDialog"));configDialog.type=OncMojo.getNetworkTypeString(type);configDialog.guid=guid||"";configDialog.name=name||"";configDialog.showConnect=configAndConnect;configDialog.open()}))}onInternetConfigClose_(){this.showInternetConfig_=false}onShowDetail_(event){const networkState=event.detail;this.detailType_=networkState.type;const params=new URLSearchParams;params.append("guid",networkState.guid);params.append("type",OncMojo.getNetworkTypeString(networkState.type));params.append("name",OncMojo.getNetworkStateDisplayNameUnsafe(networkState));Router.getInstance().navigateTo(routes.NETWORK_DETAIL,params)}onShowEsimProfileRenameDialog_(event){this.eSimNetworkState_=event.detail.networkState;this.showESimProfileRenameDialog_=true}onCloseEsimProfileRenameDialog_(){this.showESimProfileRenameDialog_=false}onShowEsimRemoveProfileDialog_(event){this.eSimNetworkState_=event.detail.networkState;this.showESimRemoveProfileDialog_=true}onCloseEsimRemoveProfileDialog_(){this.showESimRemoveProfileDialog_=false}onShowHotspotConfigDialog_(){this.showHotspotConfigDialog_=true}onCloseHotspotConfigDialog_(){this.showHotspotConfigDialog_=false}onShowNetworks_(event){this.showNetworksSubpage_(event.detail)}getNetworksPageTitle_(){if(this.subpageType_===NetworkType.kCellular||this.subpageType_===NetworkType.kTether&&!this.isInstantHotspotRebrandEnabled_){return this.i18n("OncTypeMobile")}return this.i18n("OncType"+OncMojo.getNetworkTypeString(this.subpageType_))}showProviderLocked_(){if(this.subpageType_!==NetworkType.kCellular){return false}const cellularDeviceState=this.getDeviceState_(NetworkType.kCellular,this.deviceStates);if(!cellularDeviceState||!cellularDeviceState.isCarrierLocked){return false}return true}showDeviceUpdating_(){if(this.subpageType_!==NetworkType.kCellular){return false}const cellularDeviceState=this.getDeviceState_(NetworkType.kCellular,this.deviceStates);if(!cellularDeviceState||!cellularDeviceState.isFlashing){return false}return true}getDeviceState_(subpageType,deviceStates){if(subpageType===undefined){return undefined}if(subpageType===NetworkType.kTether&&this.deviceStates[NetworkType.kCellular]&&!this.isInstantHotspotRebrandEnabled_){subpageType=NetworkType.kCellular}return deviceStates[subpageType]}getTetherDeviceState_(deviceStates){return deviceStates[NetworkType.kTether]}onDeviceStatesChanged_(newValue,_oldValue){const wifiDeviceState=this.getDeviceState_(NetworkType.kWiFi,newValue);let managedNetworkAvailable=false;if(wifiDeviceState){managedNetworkAvailable=!!wifiDeviceState.managedNetworkAvailable}if(this.managedNetworkAvailable!==managedNetworkAvailable){this.managedNetworkAvailable=managedNetworkAvailable}assert(this.deviceStates);const vpn=this.deviceStates[NetworkType.kVPN];this.vpnIsProhibited_=!!vpn&&vpn.deviceState===DeviceStateType.kProhibited;if(this.detailType_&&!this.deviceStates[this.detailType_]){const detailPage=this.shadowRoot.querySelector("settings-internet-detail-subpage");if(detailPage){detailPage.close()}}if(this.pendingShowCellularSetupDialogAttemptPageName_){this.attemptShowCellularSetupDialog_(this.pendingShowCellularSetupDialogAttemptPageName_);this.pendingShowCellularSetupDialogAttemptPageName_=null}if(this.pendingShowSimLockDialog_){this.showSimLockDialog_=true;this.pendingShowSimLockDialog_=false}}onShowKnownNetworks_(event){const type=event.detail;this.detailType_=type;this.knownNetworksType_=type;const params=new URLSearchParams;params.append("type",OncMojo.getNetworkTypeString(type));Router.getInstance().navigateTo(routes.KNOWN_NETWORKS,params)}onAddWiFiClick_(){this.showConfig_(true,NetworkType.kWiFi)}onAddVpnClick_(){if(!this.isBuiltInVpnManagementBlocked_){this.showConfig_(true,NetworkType.kVPN)}}onAddThirdPartyVpnClick_(event){const provider=event.model.item;this.browserProxy_.addThirdPartyVpn(provider.appId)}showNetworksSubpage_(type){this.detailType_=type;const params=new URLSearchParams;params.append("type",OncMojo.getNetworkTypeString(type));this.subpageType_=type;Router.getInstance().navigateTo(routes.INTERNET_NETWORKS,params)}compareVpnProviders_(vpnProvider1,vpnProvider2){if(vpnProvider1.type<vpnProvider2.type){return-1}if(vpnProvider1.type>vpnProvider2.type){return 1}if(vpnProvider1.lastLaunchTime.internalValue>vpnProvider2.lastLaunchTime.internalValue){return-1}if(vpnProvider1.lastLaunchTime.internalValue<vpnProvider2.lastLaunchTime.internalValue){return 1}return 0}wifiIsEnabled_(deviceStates){const wifi=deviceStates[NetworkType.kWiFi];return!!wifi&&wifi.deviceState===DeviceStateType.kEnabled}shouldShowAddWiFiRow_(globalPolicy,managedNetworkAvailable,deviceStates){return this.allowAddWiFiConnection_(globalPolicy,managedNetworkAvailable)&&this.wifiIsEnabled_(deviceStates)}allowAddWiFiConnection_(globalPolicy,managedNetworkAvailable){if(!globalPolicy){return true}return!globalPolicy.allowOnlyPolicyWifiNetworksToConnect&&(!globalPolicy.allowOnlyPolicyWifiNetworksToConnectIfAvailable||!managedNetworkAvailable)}allowAddConnection_(globalPolicy,managedNetworkAvailable){if(!this.vpnIsProhibited_){return true}return this.allowAddWiFiConnection_(globalPolicy,managedNetworkAvailable)}computeIsBuiltInVpnManagementBlocked_(){if(this.vpnIsProhibited_){return true}if(!this.prefs){return false}const isVpnConfigProhibited=this.prefs.vpn_config_allowed&&!this.prefs.vpn_config_allowed.value;const hasAlwaysOnVpnActivated=this.prefs.arc&&this.prefs.arc.vpn&&this.prefs.arc.vpn.always_on&&this.prefs.arc.vpn.always_on.vpn_package&&!!this.prefs.arc.vpn.always_on.vpn_package.value;return isVpnConfigProhibited&&hasAlwaysOnVpnActivated}getAddThirdPartyVpnLabel_(provider){return this.i18n("internetAddThirdPartyVPN",provider.providerName||"")}async onNetworkConnect_(event){const networkState=event.detail.networkState;const type=networkState.type;const displayName=OncMojo.getNetworkStateDisplayNameUnsafe(networkState);if(!event.detail.bypassConnectionDialog&&type===NetworkType.kTether&&!networkState.typeState.tether.hasConnectedToHost){const params=new URLSearchParams;params.append("guid",networkState.guid);params.append("type",OncMojo.getNetworkTypeString(type));params.append("name",displayName);params.append("showConfigure",true.toString());Router.getInstance().navigateTo(routes.NETWORK_DETAIL,params);return}if(OncMojo.networkTypeHasConfigurationFlow(type)&&(!OncMojo.isNetworkConnectable(networkState)||!!networkState.errorState)){this.showConfig_(true,type,networkState.guid,displayName);return}const response=await this.networkConfig_.startConnect(networkState.guid);switch(response.result){case StartConnectResult.kSuccess:return;case StartConnectResult.kInvalidGuid:case StartConnectResult.kInvalidState:case StartConnectResult.kCanceled:return;case StartConnectResult.kNotConfigured:if(OncMojo.networkTypeHasConfigurationFlow(type)){this.showConfig_(true,type,networkState.guid,displayName)}return;case StartConnectResult.kBlocked:case StartConnectResult.kUnknown:console.warn("startConnect failed for: "+networkState.guid+" Error: "+response.message);return}}onApnMenuButtonClicked_(event){const target=event.target;if(!target){return}this.$.apnDotsMenu.showAt(target)}closeApnMenu_(){this.$.apnDotsMenu.close()}onCreateCustomApnClicked_(){if(this.isNumCustomApnsLimitReached_){return}this.closeApnMenu_();const apnSubpage=castExists(this.shadowRoot.querySelector("#apnSubpage"));apnSubpage.openApnDetailDialogInCreateMode()}onDiscoverMoreApnsClicked_(){if(this.isNumCustomApnsLimitReached_){return}this.closeApnMenu_();const apnSubpage=castExists(this.shadowRoot.querySelector("#apnSubpage"));apnSubpage.openApnSelectionDialog()}shouldDisallowApnModification_(globalPolicy){if(!this.isApnRevampAndAllowApnModificationPolicyEnabled_){return false}if(!globalPolicy){return false}return!globalPolicy.allowApnModification}onShowPasspointDetails_(event){this.passpointSubscription_=event.detail;const params=new URLSearchParams;params.append("id",this.passpointSubscription_.id);Router.getInstance().navigateTo(routes.PASSPOINT_DETAIL,params)}getPasspointSubscriptionName_(subscription){if(!subscription){return""}if(subscription.friendlyName&&subscription.friendlyName!==""){return subscription.friendlyName}return subscription.domains[0]}showHotspotSpinner_(){if(!this.hotspotInfo){return false}return this.hotspotInfo.state===HotspotState.kEnabling||this.hotspotInfo.state===HotspotState.kDisabling}}customElements.define(SettingsInternetPageElement.is,SettingsInternetPageElement);function getTemplate$G(){return html`<!--_html_template_start_--><style include="settings-shared iron-flex"></style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="Kerberos">
      <cr-link-row id="kerberosAccountsSubpageTrigger" on-click="onKerberosAccountsClick_" label="Kerberos tickets" role-description="Subpage button">
        <cr-policy-indicator indicator-type="userPolicy">
        </cr-policy-indicator>
      </cr-link-row>
    </settings-card>
  </div>

  <template is="dom-if" route-path="/kerberos/kerberosAccounts">
    <os-settings-subpage page-title="Kerberos tickets">
      <settings-kerberos-accounts-subpage></settings-kerberos-accounts-subpage>
    </os-settings-subpage>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsKerberosPageElementBase=RouteOriginMixin(WebUiListenerMixin(I18nMixin(PolymerElement)));class SettingsKerberosPageElement extends SettingsKerberosPageElementBase{static get is(){return"settings-kerberos-page"}static get template(){return getTemplate$G()}static get properties(){return{section_:{type:Number,value:Section$1.kKerberos,readOnly:true}}}constructor(){super();this.route=routes.KERBEROS}ready(){super.ready();this.addFocusConfig(routes.KERBEROS_ACCOUNTS_V2,"#kerberosAccountsSubpageTrigger")}onKerberosAccountsClick_(){Router.getInstance().navigateTo(routes.KERBEROS_ACCOUNTS_V2)}}customElements.define(SettingsKerberosPageElement.is,SettingsKerberosPageElement);function getTemplate$F(){return html`<!--_html_template_start_--><style include="cr-shared-style cros-color-overrides">cr-dialog::part(dialog){width:320px}#passwordInput{margin-top:20px}</style>
<cr-dialog id="dialog" close-text="Close">
  <div slot="title">Confirm your password</div>
  <div slot="body">
    <div id="passwordPrompt" hidden="[[!passwordPromptText]]">
      [[passwordPromptText]]
    </div>
    <cr-input id="passwordInput" type="password" placeholder="Password" invalid="[[passwordInvalid_]]" error-message="Invalid password" value="{{inputValue_}}" aria-disabled="false">
    </cr-input>
  </div>
  <div slot="button-container">
    <cr-button class="cancel-button" on-click="onCancelClick_">
      Cancel
    </cr-button>

    <cr-button id="confirmButton" class="action-button" disabled$="[[!isConfirmEnabled_(inputValue_, passwordInvalid_,
            waitingForPasswordCheck_)]]" on-click="submitPassword_">
      Confirm
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsPasswordPromptDialogElement extends PolymerElement{static get is(){return"settings-password-prompt-dialog"}static get template(){return getTemplate$F()}static get properties(){return{passwordPromptText:{type:String,notify:true,value:""},inputValue_:{type:String,value:"",observer:"onInputValueChange_"},passwordInvalid_:{type:Boolean,value:false},quickUnlockPrivate:{type:Object,value:chrome.quickUnlockPrivate},waitingForPasswordCheck_:{type:Boolean,value:false}}}get passwordInput(){return this.shadowRoot.querySelector("cr-input")}connectedCallback(){super.connectedCallback();this.$.dialog.showModal();window.setTimeout((()=>{this.passwordInput.focus()}),1)}onCancelClick_(){if(this.$.dialog.open){this.$.dialog.close()}}submitPassword_(){this.waitingForPasswordCheck_=true;const password=this.passwordInput.value;if(!password){this.passwordInvalid_=false;this.waitingForPasswordCheck_=false;return}this.quickUnlockPrivate.getAuthToken(password,(tokenInfo=>{this.waitingForPasswordCheck_=false;if(chrome.runtime.lastError){this.passwordInvalid_=true;this.passwordInput.select();return}this.dispatchEvent(new CustomEvent("token-obtained",{bubbles:true,composed:true,detail:tokenInfo}));this.passwordInvalid_=false;if(this.$.dialog.open){this.$.dialog.close()}}))}onInputValueChange_(){this.passwordInvalid_=false}isConfirmEnabled_(){return!this.waitingForPasswordCheck_&&!this.passwordInvalid_&&!!this.inputValue_}}customElements.define(SettingsPasswordPromptDialogElement.is,SettingsPasswordPromptDialogElement);function getTemplate$E(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">cr-dialog::part(dialog){width:512px}div[slot=title]{flex-direction:column;height:auto}div[slot=body]{align-items:center;display:flex;flex-direction:column;height:auto;justify-content:center;width:464px}iron-icon{--iron-icon-fill-color:var(--cros-icon-color-alert);padding-bottom:13px}#description{display:flex;flex-direction:column;gap:12px}:host(:not([did-setup-attempt-fail_])) #description{height:93px}:host([did-setup-attempt-fail_]) #description{height:60px}#illustration{background-position:center center;background-repeat:no-repeat;background-size:contain;height:200px;margin-bottom:24px;margin-top:24px;width:100%}:host([has-not-started-setup-attempt_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_setup.svg)}:host([is-setup-attempt-in-progress_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_connecting.svg)}:host([did-setup-attempt-fail_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_error.svg)}:host([has-completed-setup-successfully_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_finished.svg)}@media(prefers-color-scheme:dark){:host([has-not-started-setup-attempt_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_setup_dark.svg)}:host([is-setup-attempt-in-progress_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_connecting_dark.svg)}:host([did-setup-attempt-fail_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_error_dark.svg)}:host([has-completed-setup-successfully_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_finished_dark.svg)}}</style>
<cr-dialog id="dialog" close-text="Close">
  <div id="dialogTitle" slot="title">
    <template is="dom-if" if="[[didSetupAttemptFail_]]" restamp>
      <iron-icon id="failureIcon" icon="os-settings:failure-alert">
      </iron-icon>
    </template>
    <div id="title">[[title_]]</div>
  </div>
  <div id="dialogBody" slot="body">
    <div id="illustration"></div>
    <div id="description">
      <template is="dom-if" if="[[description_]]" restamp>
        <localized-link localized-string="[[description_]]">
        </localized-link>
      </template>
      <div hidden="[[!shouldShowSetupInstructionsSeparately_]]">
        Make sure your phone is nearby, unlocked, and has Bluetooth and Wi-Fi turned on
      </div>
    </div>
  </div>
  <div id="buttonContainer" slot="button-container">
    <template is="dom-if" if="[[shouldShowCancelButton_(setupState_)]]" restamp>
      <cr-button id="cancelButton" class="cancel-button" on-click="onCancelClicked_">
        Cancel
      </cr-button>
    </template>
    <template is="dom-if" if="[[hasCompletedSetupSuccessfully_]]" restamp>
      <cr-button id="doneButton" class="action-button" on-click="onDoneOrCloseButtonClicked_">
        Done
      </cr-button>
    </template>
    <template is="dom-if" if="[[isNotificationAccessProhibited_]]" restamp>
      <cr-button id="closeButton" class="action-button" on-click="onDoneOrCloseButtonClicked_">
        Close
      </cr-button>
    </template>
    <template is="dom-if" if="[[hasNotStartedSetupAttempt_]]" restamp>
      <cr-button id="getStartedButton" class="action-button" on-click="attemptNotificationSetup_">
        Get started
      </cr-button>
    </template>
    <template is="dom-if" if="[[shouldShowTryAgainButton_(setupState_)]]" restamp>
      <cr-button id="tryAgainButton" class="action-button" on-click="attemptNotificationSetup_">
        Try again
      </cr-button>
    </template>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var NotificationAccessSetupOperationStatus;(function(NotificationAccessSetupOperationStatus){NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["CONNECTION_REQUESTED"]=0]="CONNECTION_REQUESTED";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["CONNECTING"]=1]="CONNECTING";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["TIMED_OUT_CONNECTING"]=2]="TIMED_OUT_CONNECTING";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["CONNECTION_DISCONNECTED"]=3]="CONNECTION_DISCONNECTED";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE"]=4]="SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["COMPLETED_SUCCESSFULLY"]=5]="COMPLETED_SUCCESSFULLY";NotificationAccessSetupOperationStatus[NotificationAccessSetupOperationStatus["NOTIFICATION_ACCESS_PROHIBITED"]=6]="NOTIFICATION_ACCESS_PROHIBITED"})(NotificationAccessSetupOperationStatus||(NotificationAccessSetupOperationStatus={}));const SettingsMultideviceNotificationAccessSetupDialogElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));class SettingsMultideviceNotificationAccessSetupDialogElement extends SettingsMultideviceNotificationAccessSetupDialogElementBase{static get is(){return"settings-multidevice-notification-access-setup-dialog"}static get template(){return getTemplate$E()}static get properties(){return{setupState_:{type:Number,value:null},title_:{type:String,computed:"getTitle_(setupState_)"},description_:{type:String,computed:"getDescription_(setupState_)"},hasNotStartedSetupAttempt_:{type:Boolean,computed:"computeHasNotStartedSetupAttempt_(setupState_)",reflectToAttribute:true},isSetupAttemptInProgress_:{type:Boolean,computed:"computeIsSetupAttemptInProgress_(setupState_)",reflectToAttribute:true},didSetupAttemptFail_:{type:Boolean,computed:"computeDidSetupAttemptFail_(setupState_)",reflectToAttribute:true},hasCompletedSetupSuccessfully_:{type:Boolean,computed:"computeHasCompletedSetupSuccessfully_(setupState_)",reflectToAttribute:true},isNotificationAccessProhibited_:{type:Boolean,computed:"computeIsNotificationAccessProhibited_(setupState_)"},shouldShowSetupInstructionsSeparately_:{type:Boolean,computed:"computeShouldShowSetupInstructionsSeparately_("+"setupState_)",reflectToAttribute:true}}}constructor(){super();this.browserProxy_=MultiDeviceBrowserProxyImpl.getInstance()}connectedCallback(){super.connectedCallback();this.addWebUiListener("settings.onNotificationAccessSetupStatusChanged",this.onSetupStateChanged_.bind(this));this.$.dialog.showModal()}onSetupStateChanged_(setupState){this.setupState_=setupState;if(this.setupState_===NotificationAccessSetupOperationStatus.COMPLETED_SUCCESSFULLY){this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS,true)}}computeHasNotStartedSetupAttempt_(){return this.setupState_===null}computeIsSetupAttemptInProgress_(){return this.setupState_===NotificationAccessSetupOperationStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTING||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTION_REQUESTED}computeHasCompletedSetupSuccessfully_(){return this.setupState_===NotificationAccessSetupOperationStatus.COMPLETED_SUCCESSFULLY}computeIsNotificationAccessProhibited_(){return this.setupState_===NotificationAccessSetupOperationStatus.NOTIFICATION_ACCESS_PROHIBITED}computeDidSetupAttemptFail_(){return this.setupState_===NotificationAccessSetupOperationStatus.TIMED_OUT_CONNECTING||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTION_DISCONNECTED||this.setupState_===NotificationAccessSetupOperationStatus.NOTIFICATION_ACCESS_PROHIBITED}computeShouldShowSetupInstructionsSeparately_(){return this.setupState_===null||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTION_REQUESTED||this.setupState_===NotificationAccessSetupOperationStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTING}attemptNotificationSetup_(){this.browserProxy_.attemptNotificationSetup();this.setupState_=NotificationAccessSetupOperationStatus.CONNECTION_REQUESTED}onCancelClicked_(){this.browserProxy_.cancelNotificationSetup();this.$.dialog.close()}onDoneOrCloseButtonClicked_(){this.$.dialog.close()}getTitle_(){if(this.setupState_===null){return this.i18n("multideviceNotificationAccessSetupAckTitle")}const Status=NotificationAccessSetupOperationStatus;switch(this.setupState_){case Status.CONNECTION_REQUESTED:case Status.CONNECTING:return this.i18n("multideviceNotificationAccessSetupConnectingTitle");case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:return this.i18n("multideviceNotificationAccessSetupAwaitingResponseTitle");case Status.COMPLETED_SUCCESSFULLY:return this.i18n("multideviceNotificationAccessSetupCompletedTitle");case Status.TIMED_OUT_CONNECTING:return this.i18n("multideviceNotificationAccessSetupCouldNotEstablishConnectionTitle");case Status.CONNECTION_DISCONNECTED:return this.i18n("multideviceNotificationAccessSetupConnectionLostWithPhoneTitle");case Status.NOTIFICATION_ACCESS_PROHIBITED:return this.i18n("multideviceNotificationAccessSetupAccessProhibitedTitle");default:return""}}getDescription_(){if(this.setupState_===null){return this.i18n("multideviceNotificationAccessSetupAckSummary")}const Status=NotificationAccessSetupOperationStatus;switch(this.setupState_){case Status.COMPLETED_SUCCESSFULLY:return this.i18n("multideviceNotificationAccessSetupCompletedSummary");case Status.TIMED_OUT_CONNECTING:return this.i18n("multideviceNotificationAccessSetupEstablishFailureSummary");case Status.CONNECTION_DISCONNECTED:return this.i18n("multideviceNotificationAccessSetupMaintainFailureSummary");case Status.NOTIFICATION_ACCESS_PROHIBITED:return this.i18nAdvanced("multideviceNotificationAccessSetupAccessProhibitedSummary");case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:return this.i18n("multideviceNotificationAccessSetupAwaitingResponseSummary");case Status.CONNECTION_REQUESTED:case Status.CONNECTING:default:return""}}shouldShowCancelButton_(){return this.setupState_!==NotificationAccessSetupOperationStatus.COMPLETED_SUCCESSFULLY&&this.setupState_!==NotificationAccessSetupOperationStatus.NOTIFICATION_ACCESS_PROHIBITED}shouldShowTryAgainButton_(){return this.setupState_===NotificationAccessSetupOperationStatus.TIMED_OUT_CONNECTING||this.setupState_===NotificationAccessSetupOperationStatus.CONNECTION_DISCONNECTED}}customElements.define(SettingsMultideviceNotificationAccessSetupDialogElement.is,SettingsMultideviceNotificationAccessSetupDialogElement);function getTemplate$D(){return html`<!--_html_template_start_--><settings-password-prompt-dialog id="passwordPrompt" password-prompt-text="[[selectPasswordPromptEnterPasswordString_(hasPinLogin)]]" on-token-obtained="onTokenObtained_">
</settings-password-prompt-dialog>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsLockScreenPasswordPromptDialogElementBase=LockStateMixin(PolymerElement);class SettingsLockScreenPasswordPromptDialogElement extends SettingsLockScreenPasswordPromptDialogElementBase{static get is(){return"settings-lock-screen-password-prompt-dialog"}static get template(){return getTemplate$D()}static get properties(){return{}}connectedCallback(){super.connectedCallback();recordLockScreenProgress(LockScreenProgress.START_SCREEN_LOCK)}onTokenObtained_({detail:detail}){recordLockScreenProgress(LockScreenProgress.ENTER_PASSWORD_CORRECTLY);const authTokenObtainedEvent=new CustomEvent("auth-token-obtained",{bubbles:true,composed:true,detail:detail});this.dispatchEvent(authTokenObtainedEvent)}selectPasswordPromptEnterPasswordString_(hasPinLogin){if(hasPinLogin){return this.i18n("passwordPromptEnterPasswordLoginLock")}return this.i18n("passwordPromptEnterPasswordLock")}}customElements.define(SettingsLockScreenPasswordPromptDialogElement.is,SettingsLockScreenPasswordPromptDialogElement);function getTemplate$C(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">#screen-lock-description{align-items:center;display:flex;flex-direction:row;height:auto;justify-content:center}#half-container{flex:1;height:216px}#illustration{background-image:url(chrome://os-settings/images/multidevice_permission_setup_connecting.svg);background-position:center center;background-repeat:no-repeat;background-size:contain;height:200px;margin-bottom:8px;margin-top:8px;width:100%}@media(prefers-color-scheme:dark){#illustration{background-image:url(chrome://os-settings/images/multidevice_permission_setup_connecting_dark.svg)}}#radio-button-container{padding-top:20px}#passwordRadioButton{--cr-radio-button-label-spacing:20px;--cr-radio-button-size:20px;color:var(--cr-primary-text-color);min-height:20px;padding-inline-start:8px;padding-top:24px}#pinRadioButton{--cr-radio-button-label-spacing:20px;--cr-radio-button-size:20px;color:var(--cr-primary-text-color);min-height:20px;padding-inline-start:8px;padding-top:44px}#subtext{color:var(--cr-secondary-text-color);padding-inline-start:48px}</style>
<div id="screen-lock-description">
  <div id="half-container">
    <div id="illustration"></div>
  </div>
  <div id="half-container">
    <template is="dom-if" if="[[authTokenInfo_]]">
      <cr-radio-group id="radio-button-container" disabled$="[[quickUnlockDisabledByPolicy_]]" selected="{{selectedUnlockType}}" deep-link-focus-id$="[[Setting.kChangeAuthPinV2]]">
        <cr-radio-button id="passwordRadioButton" name="password" label="Password only">
        </cr-radio-button>
        <cr-radio-button id="pinRadioButton" name="pin+password" label="PIN or password">
        </cr-radio-button>
      </cr-radio-group>
    </template>
  </div>
</div>
<template is="dom-if" if="[[shouldPromptPasswordDialog_]]" restamp>
  <settings-lock-screen-password-prompt-dialog id="passwordDialog" on-close="onPasswordPromptDialogClose_" on-auth-token-obtained="onAuthTokenObtained_">
  </settings-lock-screen-password-prompt-dialog>
</template>
<template is="dom-if" if="[[showSetupPinDialog]]" restamp>
  <settings-setup-pin-dialog id="setupPin" auth-token="[[authTokenInfo_.token]]" on-close="onSetupPinDialogClose_">
  </settings-setup-pin-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsMultideviceScreenLockSubpageElementBase=LockStateMixin(PolymerElement);class SettingsMultideviceScreenLockSubpageElement extends SettingsMultideviceScreenLockSubpageElementBase{static get is(){return"settings-multidevice-screen-lock-subpage"}static get template(){return getTemplate$C()}static get properties(){return{authTokenInfo_:Object,quickUnlockDisabledByPolicy_:{type:Boolean,value(){return loadTimeData.getBoolean("quickUnlockDisabledByPolicy")},readOnly:true},shouldPromptPasswordDialog_:Boolean,isScreenLockEnabled:{type:Boolean,value:false,notify:true},isPasswordDialogShowing:{type:Boolean,value:false,notify:true},showSetupPinDialog:{type:Boolean,value:false,notify:true},hasPin:{type:Boolean,value:false}}}static get observers(){return["selectedUnlockTypeChanged_(selectedUnlockType)","updatePinState_(authTokenInfo_)"]}constructor(){super();if(this.authTokenInfo_===undefined){this.shouldPromptPasswordDialog_=true}}ready(){super.ready();const receiver=new FactorObserverReceiver(this);const remote=receiver.$.bindNewPipeAndPassRemote();AuthFactorConfig.getRemote().observeFactorChanges(remote)}async onFactorChanged(factor){if(factor!==AuthFactor.kPrefBasedPin&&factor!==AuthFactor.kCryptohomePin&&factor!==AuthFactor.kCryptohomePinV2){return}if(!this.authTokenInfo_){return}await this.updatePinState_(this.authTokenInfo_,true)}async updatePinState_(authTokenInfo,factorChanged=false){if(!authTokenInfo){return}const authToken=authTokenInfo.token;assert(this.authTokenInfo_&&this.authTokenInfo_.token===authToken);const{pinFactor:pinFactor}=await PinFactorEditor.getRemote().getConfiguredPinFactor(authToken);if(pinFactor!==null){this.hasPin=true;this.selectedUnlockType=LockScreenUnlockType.PIN_PASSWORD;return}if(factorChanged&&!this.hasPin&&this.selectedUnlockType===LockScreenUnlockType.PIN_PASSWORD){return}this.hasPin=false;this.selectedUnlockType=LockScreenUnlockType.PASSWORD}async selectedUnlockTypeChanged_(selected){const pinNumberEvent=new CustomEvent("pin-number-selected",{bubbles:true,composed:true,detail:{isPinNumberSelected:selected===LockScreenUnlockType.PIN_PASSWORD}});this.dispatchEvent(pinNumberEvent);if(selected===LockScreenUnlockType.PASSWORD&&this.authTokenInfo_){this.hasPin=false;const{result:result}=await PinFactorEditor.getRemote().removePin(this.authTokenInfo_.token);if(result!==ConfigureResult.kSuccess){this.hasPin=true}switch(result){case ConfigureResult.kSuccess:break;case ConfigureResult.kInvalidTokenError:fireAuthTokenInvalidEvent(this);break;case ConfigureResult.kFatalError:console.error("Error removing PIN");break}}}onPasswordPromptDialogClose_(){this.shouldPromptPasswordDialog_=false}onAuthTokenObtained_(e){this.authTokenInfo_=e.detail;this.setLockScreenEnabled(this.authTokenInfo_.token,true,(_success=>{}));this.isScreenLockEnabled=true;this.isPasswordDialogShowing=true}showConfigurePinButton_(selectedUnlockType){return selectedUnlockType===LockScreenUnlockType.PIN_PASSWORD}onSetupPinDialogClose_(){this.showSetupPinDialog=false}}customElements.define(SettingsMultideviceScreenLockSubpageElement.is,SettingsMultideviceScreenLockSubpageElement);function getTemplate$B(){return html`<!--_html_template_start_--><style include="cr-shared-style settings-shared">cr-dialog::part(dialog){width:512px}#dialogTitle{--cr-dialog-title-slot-padding-bottom:24px;--cr-dialog-title-slot-padding-end:24px;--cr-dialog-title-slot-padding-start:24px;--cr-dialog-title-slot-padding-top:24px}:host(:not([has-started-setup-attempt_])) #dialogTitle{--cr-dialog-title-slot-padding-bottom:20px}:host([is-setup-screen-lock-in-progress_]) #dialogTitle{--cr-dialog-title-slot-padding-bottom:20px}#title{align-items:center;color:var(--cros-text-color-primary);display:flex;flex-direction:row;font:var(--cros-title-1-font);gap:8px;justify-content:flex-start}#subtitle{color:var(--cros-text-color-secondary);font:var(--cros-body-1-font)}#dialogBody{display:flex;flex-direction:column;padding-inline-end:24px;padding-inline-start:24px}:host([has-started-setup-attempt_]) #dialogBody{height:296px}:host([is-setup-screen-lock-in-progress_]) #dialogBody{height:260px}:host([did-setup-attempt-fail_]) #dialogBody{height:288px}:host([should-show-setup-instructions-separately_]) #dialogBody{justify-content:space-between}#buttonContainer{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding-bottom:20px;padding-inline-end:24px;padding-inline-start:24px;padding-top:0}#failure-icon{--iron-icon-fill-color:var(--cros-icon-color-warning);height:32px;width:32px}#feature-icon{--iron-icon-fill-color:var(--cros-icon-color-prominent);height:20px;width:20px}#instruction-icon{--iron-icon-fill-color:var(--cros-icon-color-secondary);height:16px;width:16px}#screen-lock-instruction-icon{--iron-icon-fill-color:var(--cros-icon-color-secondary);height:20px;width:20px}#button-detail{align-items:flex-end;display:flex;flex-direction:row;gap:8px;justify-content:right}#description{color:var(--cros-text-color-secondary);font:var(--cros-body-2-font);padding-top:24px}#feature-description{align-items:flex-start;display:flex;flex-direction:column;width:252px}#start-setup-description{align-items:flex-start;display:flex;flex-direction:row;height:auto;justify-content:center}#feature-details-container{align-items:flex-start;color:var(--cros-text-color-secondary);display:flex;flex-direction:row;font:var(--cros-body-2-font);gap:20px;justify-content:start;padding-bottom:16px}#half-container{flex:1}#instruction{align-items:flex-end;color:var(--cros-text-color-secondary);display:flex;flex-direction:row;font:var(--cros-annotation-2-font);gap:6px;justify-content:start;padding-bottom:24px}#screen-lock-instruction{align-items:flex-start;color:var(--cros-text-color-secondary);display:flex;flex-direction:row;font:var(--cros-body-2-font);gap:8px;justify-content:start;padding-bottom:24px}#illustration{background-position:center center;background-repeat:no-repeat;background-size:contain;height:200px;width:100%}:host(:not([has-started-setup-attempt_])) #illustration{background-image:url(chrome://os-settings/images/notification_access_setup.svg);padding-bottom:8px;padding-top:8px;width:200px}:host([is-setup-attempt-in-progress_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_connecting.svg)}:host([did-setup-attempt-fail_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_error.svg)}:host([has-completed-setup_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_finished.svg)}@media(prefers-color-scheme:dark){:host(:not([has-started-setup-attempt_])) #illustration{background-image:url(chrome://os-settings/images/notification_access_setup_dark.svg)}:host([is-setup-attempt-in-progress_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_connecting_dark.svg)}:host([did-setup-attempt-fail_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_error_dark.svg)}:host([has-completed-setup-successfully_]) #illustration{background-image:url(chrome://os-settings/images/notification_access_finished_dark.svg)}}</style>
<cr-dialog id="dialog" close-text="Close">
  <div id="dialogTitle" slot="title">
    <div id="title" aria-live="[[getLiveStatus_(setupState_)]]" aria-labelledby="title" aria-describedby="description">
      <template is="dom-if" if="[[didSetupAttemptFail_]]" restamp>
        <iron-icon id="failure-icon" icon="os-settings:multidevice-error">
        </iron-icon>
      </template>
      [[title_]]
    </div>
    <template is="dom-if" if="[[hasStartedSetupAttempt_]]" restamp>
      <template is="dom-if" if="[[shouldShowScreenLockInstructions_(flowState_)]]" restamp>
        <div id="subtitle">
          This password or PIN protects your data on this Chromebook and any information you access from your phone. You&#39;ll need to unlock each time your Chromebook wakes from sleep.
        </div>
      </template>
    </template>
    <template is="dom-if" if="[[!hasStartedSetupAttempt_]]" restamp>
      <div id="subtitle">
        Your Chromebook can then:
      </div>
    </template>
  </div>
  <div id="dialogBody" slot="body">
    <template is="dom-if" if="[[!hasStartedSetupAttempt_]]" restamp>
      <div id="start-setup-description">
        <div id="half-container">
          <div id="illustration"></div>
        </div>
        <div id="half-container">
          <div id="feature-description">
            <template is="dom-if" if="[[showCameraRoll]]" restamp>
              <div id="feature-details-container">
                <iron-icon id="feature-icon" icon="os-settings:multidevice-recent-photos">
                </iron-icon>
                View your phone&#39;s photos and media
              </div>
            </template>
            <template is="dom-if" if="[[showNotifications]]" restamp>
              <div id="feature-details-container">
                <iron-icon id="feature-icon" icon="os-settings:multidevice-notifications">
                </iron-icon>
                View, dismiss, and reply to your phone&#39;s notifications
              </div>
            </template>
            <template is="dom-if" if="[[showAppStreaming]]" restamp>
              <div id="feature-details-container">
                <iron-icon id="feature-icon" icon="os-settings:multidevice-app-streaming">
                </iron-icon>
                Stream your phone&#39;s apps
              </div>
            </template>
          </div>
        </div>
      </div>
      <div id="instruction">
        <iron-icon id="instruction-icon" icon="os-settings:failure-alert">
        </iron-icon>
        Make sure your phone is nearby, unlocked, and Bluetooth and Wi-Fi are turned on
      </div>
    </template>
    <template is="dom-if" if="[[hasStartedSetupAttempt_]]" restamp>
      <template is="dom-if" if="[[shouldShowScreenLockInstructions_(flowState_)]]" restamp>
        <settings-multidevice-screen-lock-subpage id="screen-lock-subpage" is-screen-lock-enabled="{{isScreenLockEnabled_}}" on-pin-number-selected="onPinNumberSelected_" show-setup-pin-dialog="{{showSetupPinDialog_}}" is-password-dialog-showing="{{isPasswordDialogShowing}}">
        </settings-multidevice-screen-lock-subpage>
        <div id="screen-lock-instruction">
          <iron-icon id="screen-lock-instruction-icon" icon="os-settings:failure-alert">
          </iron-icon>
          If Smart Lock is turned on and your phone is unlocked, you don&#39;t need to enter a password or PIN
        </div>
      </template>
      <template is="dom-if" if="[[!shouldShowScreenLockInstructions_(flowState_)]]" restamp>
        <div id="illustration"></div>
        <template is="dom-if" if="[[description_]]" restamp>
          <div id="description">
            <localized-link localized-string="[[description_]]">
            </localized-link>
          </div>
        </template>
      </template>
    </template>
  </div>
  <div id="buttonContainer" slot="button-container">
    <div id="half-container">
      <template is="dom-if" if="[[shouldShowLearnMoreButton_]]" restamp>
        <cr-button id="learnMore" on-click="onLearnMoreClicked_" aria-label$="[[learnMoreButtonAriaLabel_]]">
          Learn more
        </cr-button>
      </template>
    </div>
    <div id="button-detail">
      <template is="dom-if" if="[[shouldShowCancelButton_(setupState_)]]" restamp>
        <cr-button id="cancelButton" on-click="onCancelClicked_">
          Cancel
        </cr-button>
      </template>
      <template is="dom-if" if="[[shouldShowDisabledDoneButton_]]" restamp>
        <cr-button id="doneButton" class="action-button" disabled="disabled">
          Done
        </cr-button>
      </template>
      <template is="dom-if" if="[[hasCompletedSetup_]]" restamp>
        <cr-button id="doneButton" class="action-button" on-click="onDoneOrCloseButtonClicked_" autofocus>
          Done
        </cr-button>
      </template>
      <template is="dom-if" if="[[isNotificationAccessProhibited_]]" restamp>
        <cr-button id="closeButton" class="action-button" on-click="onDoneOrCloseButtonClicked_">
          Close
        </cr-button>
      </template>
      <template is="dom-if" if="[[!hasStartedSetupAttempt_]]" restamp>
        <cr-button id="getStartedButton" class="action-button" on-click="nextPage_">
          Next
        </cr-button>
      </template>
      <template is="dom-if" if="[[hasStartedSetupAttempt_]]" restamp>
        <template is="dom-if" if="[[shouldShowScreenLockInstructions_(flowState_)]]" restamp>
          <cr-button id="getStartedButton" class="action-button" on-click="nextPage_">
            Next
          </cr-button>
        </template>
      </template>
      <template is="dom-if" if="[[shouldShowTryAgainButton_(setupState_)]]" restamp>
        <cr-button id="tryAgainButton" class="action-button" on-click="nextPage_">
          Try again
        </cr-button>
      </template>
    </div>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var PermissionsSetupStatus;(function(PermissionsSetupStatus){PermissionsSetupStatus[PermissionsSetupStatus["CONNECTION_REQUESTED"]=0]="CONNECTION_REQUESTED";PermissionsSetupStatus[PermissionsSetupStatus["CONNECTING"]=1]="CONNECTING";PermissionsSetupStatus[PermissionsSetupStatus["TIMED_OUT_CONNECTING"]=2]="TIMED_OUT_CONNECTING";PermissionsSetupStatus[PermissionsSetupStatus["CONNECTION_DISCONNECTED"]=3]="CONNECTION_DISCONNECTED";PermissionsSetupStatus[PermissionsSetupStatus["SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE"]=4]="SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE";PermissionsSetupStatus[PermissionsSetupStatus["COMPLETED_SUCCESSFULLY"]=5]="COMPLETED_SUCCESSFULLY";PermissionsSetupStatus[PermissionsSetupStatus["NOTIFICATION_ACCESS_PROHIBITED"]=6]="NOTIFICATION_ACCESS_PROHIBITED";PermissionsSetupStatus[PermissionsSetupStatus["COMPLETED_USER_REJECTED"]=7]="COMPLETED_USER_REJECTED";PermissionsSetupStatus[PermissionsSetupStatus["FAILED_OR_CANCELLED"]=8]="FAILED_OR_CANCELLED";PermissionsSetupStatus[PermissionsSetupStatus["CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED"]=9]="CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED";PermissionsSetupStatus[PermissionsSetupStatus["CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED"]=10]="CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED";PermissionsSetupStatus[PermissionsSetupStatus["CONNECTION_ESTABLISHED"]=11]="CONNECTION_ESTABLISHED"})(PermissionsSetupStatus||(PermissionsSetupStatus={}));var SetupFlowStatus;(function(SetupFlowStatus){SetupFlowStatus[SetupFlowStatus["INTRO"]=0]="INTRO";SetupFlowStatus[SetupFlowStatus["SET_LOCKSCREEN"]=1]="SET_LOCKSCREEN";SetupFlowStatus[SetupFlowStatus["WAIT_FOR_PHONE_NOTIFICATION"]=2]="WAIT_FOR_PHONE_NOTIFICATION";SetupFlowStatus[SetupFlowStatus["WAIT_FOR_PHONE_APPS"]=3]="WAIT_FOR_PHONE_APPS";SetupFlowStatus[SetupFlowStatus["WAIT_FOR_PHONE_COMBINED"]=4]="WAIT_FOR_PHONE_COMBINED";SetupFlowStatus[SetupFlowStatus["WAIT_FOR_CONNECTION"]=5]="WAIT_FOR_CONNECTION";SetupFlowStatus[SetupFlowStatus["FINISHED"]=6]="FINISHED"})(SetupFlowStatus||(SetupFlowStatus={}));const NOTIFICATION_FEATURE=1<<0;const CAMERA_ROLL_FEATURE=1<<1;const APPS_FEATURE=1<<2;const SettingsMultidevicePermissionsSetupDialogElementBase=LockStateMixin(PolymerElement);class SettingsMultidevicePermissionsSetupDialogElement extends SettingsMultidevicePermissionsSetupDialogElementBase{static get is(){return"settings-multidevice-permissions-setup-dialog"}static get template(){return getTemplate$B()}static get properties(){return{setupScreen_:{type:Number,computed:"getCurrentScreen_(setupState_, flowState_)"},setupState_:{type:Number,value:null},title_:{type:String,computed:"getTitle_(setupState_, flowState_)"},description_:{type:String,computed:"getDescription_(setupState_, flowState_)"},hasStartedSetupAttempt_:{type:Boolean,computed:"computeHasStartedSetupAttempt_(flowState_)",reflectToAttribute:true},isSetupAttemptInProgress_:{type:Boolean,computed:"computeIsSetupAttemptInProgress_(setupState_)",reflectToAttribute:true},isSetupScreenLockInProgress_:{type:Boolean,computed:"computeIsSetupScreenLockInProgress_(flowState_)",reflectToAttribute:true},didSetupAttemptFail_:{type:Boolean,computed:"computeDidSetupAttemptFail_(setupState_)",reflectToAttribute:true},hasCompletedSetup_:{type:Boolean,computed:"computeHasCompletedSetup_(setupState_)",reflectToAttribute:true},isNotificationAccessProhibited_:{type:Boolean,computed:"computeIsNotificationAccessProhibited_(setupState_)"},flowState_:{type:Number,value:SetupFlowStatus.INTRO},isScreenLockEnabled_:{type:Boolean,value:false},isPasswordDialogShowing:{type:Boolean,value:false,notify:true},isChromeosScreenLockEnabled:{type:Boolean,value:false},isPhoneScreenLockEnabled:{type:Boolean,value:false},showCameraRoll:{type:Boolean,value:false,observer:"onAccessStateChanged_"},showNotifications:{type:Boolean,value:false,observer:"onAccessStateChanged_"},showAppStreaming:{type:Boolean,value:false,observer:"onAccessStateChanged_"},setupMode_:{type:Number,value:0},completedMode_:{type:Number,value:0},shouldShowLearnMoreButton_:{type:Boolean,computed:"computeShouldShowLearnMoreButton_(setupState_, flowState_)",reflectToAttribute:true},shouldShowDisabledDoneButton_:{type:Boolean,computed:"computeShouldShowDisabledDoneButton_(setupState_)",reflectToAttribute:true},isPinNumberSelected_:{type:Boolean,value:false},isPinSet_:{type:Boolean,value:false},showSetupPinDialog_:{type:Boolean,value:false},combinedSetupSupported:{type:Boolean,value:false},learnMoreButtonAriaLabel_:{type:String,computed:"getLearnMoreButtonAriaLabel_()"}}}constructor(){super();this.browserProxy_=MultiDeviceBrowserProxyImpl.getInstance()}ready(){super.ready();this.addEventListener("set-pin-done",this.onSetPinDone_)}connectedCallback(){super.connectedCallback();this.addWebUiListener("settings.onNotificationAccessSetupStatusChanged",this.onNotificationSetupStateChanged_.bind(this));this.addWebUiListener("settings.onAppsAccessSetupStatusChanged",this.onAppsSetupStateChanged_.bind(this));this.addWebUiListener("settings.onCombinedAccessSetupStatusChanged",this.onCombinedSetupStateChanged_.bind(this));this.addWebUiListener("settings.onFeatureSetupConnectionStatusChanged",this.onFeatureSetupConnectionStatusChanged_.bind(this));this.$.dialog.showModal();this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(PhoneHubPermissionsSetupFlowScreens.INTRO,PhoneHubPermissionsSetupAction.SHOWN)}onNotificationSetupStateChanged_(notificationSetupState){if(this.flowState_!==SetupFlowStatus.WAIT_FOR_PHONE_NOTIFICATION){return}switch(notificationSetupState){case PermissionsSetupStatus.FAILED_OR_CANCELLED:case PermissionsSetupStatus.TIMED_OUT_CONNECTING:case PermissionsSetupStatus.CONNECTION_DISCONNECTED:case PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED:this.flowState_=SetupFlowStatus.FINISHED;break;case PermissionsSetupStatus.CONNECTION_REQUESTED:case PermissionsSetupStatus.CONNECTING:case PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:this.setupState_=notificationSetupState;return}if(notificationSetupState===PermissionsSetupStatus.COMPLETED_SUCCESSFULLY){if(this.setupMode_&NOTIFICATION_FEATURE&&!this.showNotifications){this.completedMode_|=NOTIFICATION_FEATURE;this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS,true)}}if(this.showAppStreaming){this.browserProxy_.attemptAppsSetup();this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_APPS;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}else{this.setupState_=notificationSetupState;this.flowState_=SetupFlowStatus.FINISHED;this.logCompletedSetupModeMetrics_()}}onAppsSetupStateChanged_(appsSetupResult){if(this.flowState_!==SetupFlowStatus.WAIT_FOR_PHONE_APPS){return}if(appsSetupResult===PermissionsSetupStatus.COMPLETED_SUCCESSFULLY&&!this.showAppStreaming){this.completedMode_|=APPS_FEATURE;this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.ECHE,true)}this.setupState_=appsSetupResult;if(appsSetupResult!==PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE&&appsSetupResult!==PermissionsSetupStatus.CONNECTING&&appsSetupResult!==PermissionsSetupStatus.CONNECTION_REQUESTED){this.flowState_=SetupFlowStatus.FINISHED}if(this.computeHasCompletedSetup_()){this.logCompletedSetupModeMetrics_()}}onCombinedSetupStateChanged_(combinedSetupResult){if(this.flowState_!==SetupFlowStatus.WAIT_FOR_PHONE_COMBINED){return}switch(combinedSetupResult){case PermissionsSetupStatus.COMPLETED_SUCCESSFULLY:case PermissionsSetupStatus.COMPLETED_USER_REJECTED:case PermissionsSetupStatus.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED:case PermissionsSetupStatus.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED:break;case PermissionsSetupStatus.FAILED_OR_CANCELLED:this.updateCamearRollSetupResultIfNeeded_();case PermissionsSetupStatus.TIMED_OUT_CONNECTING:case PermissionsSetupStatus.CONNECTION_DISCONNECTED:case PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED:this.flowState_=SetupFlowStatus.FINISHED;case PermissionsSetupStatus.CONNECTION_REQUESTED:case PermissionsSetupStatus.CONNECTING:case PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:this.setupState_=combinedSetupResult;return}if(combinedSetupResult===PermissionsSetupStatus.COMPLETED_SUCCESSFULLY){this.updateCamearRollSetupResultIfNeeded_();this.updateNotificationsSetupResultIfNeeded_()}if(combinedSetupResult===PermissionsSetupStatus.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED){this.updateCamearRollSetupResultIfNeeded_()}if(combinedSetupResult===PermissionsSetupStatus.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED){this.updateNotificationsSetupResultIfNeeded_()}if(this.showAppStreaming){this.browserProxy_.attemptAppsSetup();this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_APPS;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}else{this.setupState_=combinedSetupResult;this.flowState_=SetupFlowStatus.FINISHED;this.logCompletedSetupModeMetrics_()}}logSetupModeMetrics_(){if(this.showCameraRoll){this.setupMode_|=CAMERA_ROLL_FEATURE}if(this.showNotifications){this.setupMode_|=NOTIFICATION_FEATURE}if(this.showAppStreaming){this.setupMode_|=APPS_FEATURE}this.browserProxy_.logPhoneHubPermissionOnboardingSetupMode(this.computePhoneHubPermissionsSetupMode_(this.setupMode_))}logCompletedSetupModeMetrics_(){this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.setupScreen_,PhoneHubPermissionsSetupAction.SHOWN);this.browserProxy_.logPhoneHubPermissionOnboardingSetupResult(this.computePhoneHubPermissionsSetupMode_(this.completedMode_))}onFeatureSetupConnectionStatusChanged_(connectionResult){if(this.flowState_!==SetupFlowStatus.WAIT_FOR_CONNECTION){return}switch(connectionResult){case PermissionsSetupStatus.TIMED_OUT_CONNECTING:case PermissionsSetupStatus.CONNECTION_DISCONNECTED:this.setupState_=connectionResult;case PermissionsSetupStatus.COMPLETED_SUCCESSFULLY:return;case PermissionsSetupStatus.CONNECTION_ESTABLISHED:this.browserProxy_.cancelFeatureSetupConnection();if(this.isScreenLockRequired_()){this.flowState_=SetupFlowStatus.SET_LOCKSCREEN;return}this.startSetupProcess_();return;default:return}}updateCamearRollSetupResultIfNeeded_(){if(this.setupMode_&CAMERA_ROLL_FEATURE&&!this.showCameraRoll){this.completedMode_|=CAMERA_ROLL_FEATURE;this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.PHONE_HUB_CAMERA_ROLL,true)}}updateNotificationsSetupResultIfNeeded_(){if(this.setupMode_&NOTIFICATION_FEATURE&&!this.showNotifications){this.completedMode_|=NOTIFICATION_FEATURE;this.browserProxy_.setFeatureEnabledState(MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS,true)}}computeHasStartedSetupAttempt_(){return this.flowState_!==SetupFlowStatus.INTRO}computeIsSetupAttemptInProgress_(){return this.setupState_===PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE||this.setupState_===PermissionsSetupStatus.CONNECTING||this.setupState_===PermissionsSetupStatus.CONNECTION_REQUESTED}computeIsSetupScreenLockInProgress_(){return this.flowState_===SetupFlowStatus.SET_LOCKSCREEN}computeHasCompletedSetup_(){return this.setupState_===PermissionsSetupStatus.COMPLETED_SUCCESSFULLY||this.someFeaturesHaveBeenSetupWhenCompleted_()||this.setupState_===PermissionsSetupStatus.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED||this.setupState_===PermissionsSetupStatus.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED}computeIsNotificationAccessProhibited_(){return this.setupState_===PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED}computeDidSetupAttemptFail_(){return this.setupState_===PermissionsSetupStatus.TIMED_OUT_CONNECTING||this.setupState_===PermissionsSetupStatus.CONNECTION_DISCONNECTED||this.setupState_===PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED||this.noFeatureHasBeenSetupWhenCompleted_()}someFeaturesHaveBeenSetupWhenCompleted_(){return(this.setupState_===PermissionsSetupStatus.COMPLETED_USER_REJECTED||this.setupState_===PermissionsSetupStatus.FAILED_OR_CANCELLED)&&this.completedMode_!==0}noFeatureHasBeenSetupWhenCompleted_(){return(this.setupState_===PermissionsSetupStatus.COMPLETED_USER_REJECTED||this.setupState_===PermissionsSetupStatus.FAILED_OR_CANCELLED)&&this.completedMode_===0}hasPin_(){assert(this.shadowRoot!==null);const screenLockSubpage=this.shadowRoot.getElementById("screen-lock-subpage");assert(screenLockSubpage instanceof SettingsMultideviceScreenLockSubpageElement);return screenLockSubpage.hasPin}nextPage_(){this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.getCurrentScreen_(),PhoneHubPermissionsSetupAction.NEXT_OR_TRY_AGAIN);this.$.dialog.focus();switch(this.flowState_){case SetupFlowStatus.INTRO:this.logSetupModeMetrics_();case SetupFlowStatus.FINISHED:this.flowState_=SetupFlowStatus.WAIT_FOR_CONNECTION;case SetupFlowStatus.WAIT_FOR_CONNECTION:this.browserProxy_.attemptFeatureSetupConnection();this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED;return;case SetupFlowStatus.SET_LOCKSCREEN:if(!this.isScreenLockEnabled_){return}if(this.isPinNumberSelected_&&!this.isPinSet_&&!this.hasPin_()){this.showSetupPinDialog_=true;this.propagatePinNumberSelected_(true);return}this.propagatePinNumberSelected_(false);this.isPasswordDialogShowing=false;break}this.startSetupProcess_()}startSetupProcess_(){if((this.showCameraRoll||this.showNotifications)&&this.combinedSetupSupported){this.browserProxy_.attemptCombinedFeatureSetup(this.showCameraRoll,this.showNotifications);this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_COMBINED;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}else if(this.showNotifications&&!this.combinedSetupSupported){this.browserProxy_.attemptNotificationSetup();this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_NOTIFICATION;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}else if(this.showAppStreaming){this.browserProxy_.attemptAppsSetup();this.flowState_=SetupFlowStatus.WAIT_FOR_PHONE_APPS;this.setupState_=PermissionsSetupStatus.CONNECTION_REQUESTED}}onCancelClicked_(){if(this.flowState_===SetupFlowStatus.WAIT_FOR_PHONE_NOTIFICATION){this.browserProxy_.cancelNotificationSetup()}else if(this.flowState_===SetupFlowStatus.WAIT_FOR_PHONE_APPS){this.browserProxy_.cancelAppsSetup()}else if(this.flowState_===SetupFlowStatus.WAIT_FOR_PHONE_COMBINED){this.browserProxy_.cancelCombinedFeatureSetup()}else if(this.flowState_===SetupFlowStatus.WAIT_FOR_CONNECTION){this.browserProxy_.cancelFeatureSetupConnection()}if(this.noFeatureHasBeenSetupWhenCompleted_()){this.logCompletedSetupModeMetrics_()}this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.setupScreen_,PhoneHubPermissionsSetupAction.CANCEL);this.$.dialog.close()}onDoneOrCloseButtonClicked_(){this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.setupScreen_,PhoneHubPermissionsSetupAction.DONE);this.$.dialog.close()}onLearnMoreClicked_(){this.browserProxy_.logPhoneHubPermissionSetUpScreenAction(this.setupScreen_,PhoneHubPermissionsSetupAction.LEARN_MORE);window.open(this.i18n("multidevicePhoneHubPermissionsLearnMoreURL"))}onPinNumberSelected_(e){e.stopPropagation();assert(typeof e.detail.isPinNumberSelected==="boolean");this.isPinNumberSelected_=e.detail.isPinNumberSelected}onSetPinDone_(){this.isPinSet_=true;this.nextPage_()}propagatePinNumberSelected_(selected){const pinNumberEvent=new CustomEvent("pin-number-selected",{bubbles:true,composed:true,detail:{isPinNumberSelected:selected}});this.dispatchEvent(pinNumberEvent)}getCurrentScreen_(){if(this.flowState_===SetupFlowStatus.INTRO){return PhoneHubPermissionsSetupFlowScreens.INTRO}if(this.flowState_===SetupFlowStatus.SET_LOCKSCREEN){return PhoneHubPermissionsSetupFlowScreens.SET_A_PIN_OR_PASSWORD}const Status=PermissionsSetupStatus;switch(this.setupState_){case Status.CONNECTION_REQUESTED:case Status.CONNECTING:return PhoneHubPermissionsSetupFlowScreens.CONNECTING;case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:return PhoneHubPermissionsSetupFlowScreens.FINISH_SET_UP_ON_PHONE;case Status.COMPLETED_SUCCESSFULLY:case Status.COMPLETED_USER_REJECTED:case Status.FAILED_OR_CANCELLED:case Status.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED:case Status.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED:return PhoneHubPermissionsSetupFlowScreens.CONNECTED;case Status.TIMED_OUT_CONNECTING:return PhoneHubPermissionsSetupFlowScreens.CONNECTION_TIME_OUT;case Status.CONNECTION_DISCONNECTED:return PhoneHubPermissionsSetupFlowScreens.CONNECTION_ERROR;default:return PhoneHubPermissionsSetupFlowScreens.NOT_APPLICABLE}}getTitle_(){if(this.flowState_===SetupFlowStatus.INTRO){return this.i18n("multidevicePermissionsSetupAckTitle")}if(this.flowState_===SetupFlowStatus.SET_LOCKSCREEN){return this.i18n("multideviceNotificationAccessSetupScreenLockTitle")}const Status=PermissionsSetupStatus;switch(this.setupState_){case Status.CONNECTION_REQUESTED:case Status.CONNECTING:return this.i18n("multideviceNotificationAccessSetupConnectingTitle");case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:case Status.COMPLETED_SUCCESSFULLY:case Status.COMPLETED_USER_REJECTED:case Status.FAILED_OR_CANCELLED:case Status.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED:case Status.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED:return this.getSetupCompleteTitle_();case Status.TIMED_OUT_CONNECTING:return this.i18n("multidevicePermissionsSetupCouldNotEstablishConnectionTitle");case Status.CONNECTION_DISCONNECTED:return this.i18n("multideviceNotificationAccessSetupConnectionLostWithPhoneTitle");case Status.NOTIFICATION_ACCESS_PROHIBITED:return this.i18n("multidevicePermissionsSetupNotificationAccessProhibitedTitle");default:return""}}getDescription_(){if(this.flowState_===SetupFlowStatus.INTRO){return""}if(this.flowState_===SetupFlowStatus.SET_LOCKSCREEN){return""}const Status=PermissionsSetupStatus;switch(this.setupState_){case Status.COMPLETED_USER_REJECTED:case Status.FAILED_OR_CANCELLED:return this.completedMode_===0?"":this.i18n("multidevicePermissionsSetupCompletedMoreFeaturesSummary");case Status.COMPLETED_SUCCESSFULLY:case Status.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED:case Status.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED:return this.setupMode_===this.completedMode_?"":this.i18n("multidevicePermissionsSetupCompletedMoreFeaturesSummary");case Status.TIMED_OUT_CONNECTING:return this.i18n("multidevicePermissionsSetupEstablishFailureSummary");case Status.CONNECTION_DISCONNECTED:return this.i18n("multidevicePermissionsSetupMaintainFailureSummary");case Status.NOTIFICATION_ACCESS_PROHIBITED:return this.i18nAdvanced("multidevicePermissionsSetupNotificationAccessProhibitedSummary");case Status.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE:return this.i18n("multidevicePermissionsSetupOperationsInstructions");case Status.CONNECTION_REQUESTED:case Status.CONNECTING:return this.i18n("multidevicePermissionsSetupInstructions");default:return""}}getLiveStatus_(){if(this.setupState_===PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE){return"polite"}return"off"}computeShouldShowLearnMoreButton_(){return this.flowState_===SetupFlowStatus.INTRO||this.flowState_===SetupFlowStatus.SET_LOCKSCREEN||this.setupState_===PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE}shouldShowCancelButton_(){return this.setupState_!==PermissionsSetupStatus.COMPLETED_SUCCESSFULLY&&this.setupState_!==PermissionsSetupStatus.NOTIFICATION_ACCESS_PROHIBITED&&this.setupState_!==PermissionsSetupStatus.CAMERA_ROLL_GRANTED_NOTIFICATION_REJECTED&&this.setupState_!==PermissionsSetupStatus.CAMERA_ROLL_REJECTED_NOTIFICATION_GRANTED&&this.setupState_!==PermissionsSetupStatus.COMPLETED_USER_REJECTED&&this.setupState_!==PermissionsSetupStatus.FAILED_OR_CANCELLED||this.noFeatureHasBeenSetupWhenCompleted_()}computeShouldShowDisabledDoneButton_(){return this.setupState_===PermissionsSetupStatus.SENT_MESSAGE_TO_PHONE_AND_WAITING_FOR_RESPONSE}shouldShowTryAgainButton_(){return this.setupState_===PermissionsSetupStatus.TIMED_OUT_CONNECTING||this.setupState_===PermissionsSetupStatus.CONNECTION_DISCONNECTED||this.noFeatureHasBeenSetupWhenCompleted_()}shouldShowScreenLockInstructions_(){return this.flowState_===SetupFlowStatus.SET_LOCKSCREEN}isScreenLockRequired_(){return loadTimeData.getBoolean("isEcheAppEnabled")&&this.isPhoneScreenLockEnabled&&!this.isChromeosScreenLockEnabled&&this.showAppStreaming}getLearnMoreButtonAriaLabel_(){return this.i18n("multidevicePhoneHubLearnMoreAriaLabel")}getSetupCompleteTitle_(){switch(this.completedMode_){case NOTIFICATION_FEATURE:return this.i18n("multidevicePermissionsSetupNotificationsCompletedTitle");case CAMERA_ROLL_FEATURE:return this.i18n("multidevicePermissionsSetupCameraRollCompletedTitle");case NOTIFICATION_FEATURE|CAMERA_ROLL_FEATURE:return this.i18n("multidevicePermissionsSetupCameraRollAndNotificationsCompletedTitle");case APPS_FEATURE:return this.i18n("multidevicePermissionsSetupAppssCompletedTitle");case NOTIFICATION_FEATURE|APPS_FEATURE:return this.i18n("multidevicePermissionsSetupNotificationsAndAppsCompletedTitle");case CAMERA_ROLL_FEATURE|APPS_FEATURE:return this.i18n("multidevicePermissionsSetupCameraRollAndAppsCompletedTitle");case NOTIFICATION_FEATURE|CAMERA_ROLL_FEATURE|APPS_FEATURE:return this.i18n("multidevicePermissionsSetupAllCompletedTitle");default:return this.i18n("multidevicePermissionsSetupAppssCompletedFailedTitle")}}computePhoneHubPermissionsSetupMode_(mode){switch(mode){case NOTIFICATION_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.NOTIFICATION;case CAMERA_ROLL_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.CAMERA_ROLL;case NOTIFICATION_FEATURE|CAMERA_ROLL_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.NOTIFICATION_AND_CAMERA_ROLL;case APPS_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.MESSAGING_APP;case NOTIFICATION_FEATURE|APPS_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.NOTIFICATION_AND_MESSAGING_APP;case CAMERA_ROLL_FEATURE|APPS_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.MESSAGING_APP_AND_CAMERA_ROLL;case NOTIFICATION_FEATURE|CAMERA_ROLL_FEATURE|APPS_FEATURE:return PhoneHubPermissionsSetupFeatureCombination.ALL_PERMISSONS;default:return PhoneHubPermissionsSetupFeatureCombination.NONE}}onAccessStateChanged_(){if(this.flowState_===SetupFlowStatus.INTRO&&!this.showCameraRoll&&!this.showNotifications&&!this.showAppStreaming){this.$.dialog.close()}}}customElements.define(SettingsMultidevicePermissionsSetupDialogElement.is,SettingsMultidevicePermissionsSetupDialogElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const NearbyShareSettingsMixin=dedupingMixin((superClass=>{class NearbyShareSettingsMixinInternal extends superClass{static get properties(){return{settings:{type:Object,notify:true,value:{}}}}static get observers(){return["settingsChanged_(settings.*)"]}constructor(...args){super(...args);this.nearbyShareSettings_=null;this.observerReceiver_=null}connectedCallback(){super.connectedCallback();this.nearbyShareSettings_=getNearbyShareSettings();this.observerReceiver_=observeNearbyShareSettings(this);Promise.all([this.nearbyShareSettings_.getEnabled(),this.nearbyShareSettings_.getDeviceName(),this.nearbyShareSettings_.getDataUsage(),this.nearbyShareSettings_.getVisibility(),this.nearbyShareSettings_.getAllowedContacts(),this.nearbyShareSettings_.isOnboardingComplete(),this.nearbyShareSettings_.getFastInitiationNotificationState(),this.nearbyShareSettings_.getIsFastInitiationHardwareSupported()]).then((results=>{this.set("settings.enabled",results[0].enabled);this.set("settings.deviceName",results[1].deviceName);this.set("settings.dataUsage",results[2].dataUsage);this.set("settings.visibility",results[3].visibility);this.set("settings.allowedContacts",results[4].allowedContacts);this.set("settings.isOnboardingComplete",results[5].completed);this.set("settings.fastInitiationNotificationState",results[6].state);this.set("settings.isFastInitiationHardwareSupported",results[7].supported);this.onSettingsRetrieved()}))}disconnectedCallback(){super.disconnectedCallback();if(this.observerReceiver_){this.observerReceiver_.$.close()}if(this.nearbyShareSettings_){this.nearbyShareSettings_.$.close()}}onEnabledChanged(enabled){this.set("settings.enabled",enabled)}onIsFastInitiationHardwareSupportedChanged(supported){this.set("settings.isFastInitiationHardwareSupported",supported)}onFastInitiationNotificationStateChanged(state){this.set("settings.fastInitiationNotificationState",state)}onDeviceNameChanged(deviceName){this.set("settings.deviceName",deviceName)}onDataUsageChanged(dataUsage){this.set("settings.dataUsage",dataUsage)}onVisibilityChanged(visibility){this.set("settings.visibility",visibility)}onAllowedContactsChanged(allowedContacts){this.set("settings.allowedContacts",allowedContacts)}onIsOnboardingCompleteChanged(isComplete){this.set("settings.isOnboardingComplete",isComplete)}settingsChanged_(change){switch(change.path){case"settings.enabled":this.nearbyShareSettings_.setEnabled(change.value);break;case"settings.fastInitiationNotificationState":this.nearbyShareSettings_.setFastInitiationNotificationState(change.value);break;case"settings.deviceName":this.nearbyShareSettings_.setDeviceName(change.value);break;case"settings.dataUsage":this.nearbyShareSettings_.setDataUsage(change.value);break;case"settings.visibility":this.nearbyShareSettings_.setVisibility(change.value);break;case"settings.allowedContacts":this.nearbyShareSettings_.setAllowedContacts(change.value);break;case"settings.isOnboardingComplete":this.nearbyShareSettings_.setIsOnboardingComplete(change.value);break}}onSettingsRetrieved(){}}return NearbyShareSettingsMixinInternal}));
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ReasonSpec={$:mojo.internal.Enum()};var Reason;(function(Reason){Reason[Reason["MIN_VALUE"]=0]="MIN_VALUE";Reason[Reason["MAX_VALUE"]=2]="MAX_VALUE";Reason[Reason["kAccessPasswordManager"]=0]="kAccessPasswordManager";Reason[Reason["kAccessAuthenticationSettings"]=1]="kAccessAuthenticationSettings";Reason[Reason["kAccessMultideviceSettings"]=2]="kAccessMultideviceSettings"})(Reason||(Reason={}));class InSessionAuthPendingReceiver{handle;constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"chromeos.auth.mojom.InSessionAuth",scope)}}class InSessionAuthRemote{proxy;$;onConnectionError;constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(InSessionAuthPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}requestToken(reason,prompt){return this.proxy.sendMessage(0,InSessionAuth_RequestToken_ParamsSpec.$,InSessionAuth_RequestToken_ResponseParamsSpec.$,[reason,prompt],false)}checkToken(reason,token){return this.proxy.sendMessage(1,InSessionAuth_CheckToken_ParamsSpec.$,InSessionAuth_CheckToken_ResponseParamsSpec.$,[reason,token],false)}invalidateToken(token){this.proxy.sendMessage(2,InSessionAuth_InvalidateToken_ParamsSpec.$,null,[token],false)}requestLegacyWebAuthn(rpId,windowId){return this.proxy.sendMessage(3,InSessionAuth_RequestLegacyWebAuthn_ParamsSpec.$,InSessionAuth_RequestLegacyWebAuthn_ResponseParamsSpec.$,[rpId,windowId],false)}}class InSessionAuth{static get $interfaceName(){return"chromeos.auth.mojom.InSessionAuth"}static getRemote(){let remote=new InSessionAuthRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}const RequestTokenReplySpec={$:{}};const InSessionAuth_RequestToken_ParamsSpec={$:{}};const InSessionAuth_RequestToken_ResponseParamsSpec={$:{}};const InSessionAuth_CheckToken_ParamsSpec={$:{}};const InSessionAuth_CheckToken_ResponseParamsSpec={$:{}};const InSessionAuth_InvalidateToken_ParamsSpec={$:{}};const InSessionAuth_RequestLegacyWebAuthn_ParamsSpec={$:{}};const InSessionAuth_RequestLegacyWebAuthn_ResponseParamsSpec={$:{}};mojo.internal.Struct(RequestTokenReplySpec.$,"RequestTokenReply",[mojo.internal.StructField("token",0,0,mojo.internal.String,null,false,0,undefined,undefined),mojo.internal.StructField("timeout",8,0,TimeDeltaSpec.$,null,false,0,undefined,undefined)],[[0,24]]);mojo.internal.Struct(InSessionAuth_RequestToken_ParamsSpec.$,"InSessionAuth_RequestToken_Params",[mojo.internal.StructField("reason",0,0,ReasonSpec.$,0,false,0,undefined,undefined),mojo.internal.StructField("prompt",8,0,mojo.internal.String,null,true,1,undefined,undefined)],[[0,16],[1,24]]);mojo.internal.Struct(InSessionAuth_RequestToken_ResponseParamsSpec.$,"InSessionAuth_RequestToken_ResponseParams",[mojo.internal.StructField("reply",0,0,RequestTokenReplySpec.$,null,true,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(InSessionAuth_CheckToken_ParamsSpec.$,"InSessionAuth_CheckToken_Params",[mojo.internal.StructField("reason",0,0,ReasonSpec.$,0,false,0,undefined,undefined),mojo.internal.StructField("token",8,0,mojo.internal.String,null,false,0,undefined,undefined)],[[0,24]]);mojo.internal.Struct(InSessionAuth_CheckToken_ResponseParamsSpec.$,"InSessionAuth_CheckToken_ResponseParams",[mojo.internal.StructField("valid",0,0,mojo.internal.Bool,false,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(InSessionAuth_InvalidateToken_ParamsSpec.$,"InSessionAuth_InvalidateToken_Params",[mojo.internal.StructField("token",0,0,mojo.internal.String,null,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(InSessionAuth_RequestLegacyWebAuthn_ParamsSpec.$,"InSessionAuth_RequestLegacyWebAuthn_Params",[mojo.internal.StructField("rpId",0,0,mojo.internal.String,null,false,0,undefined,undefined),mojo.internal.StructField("windowId",8,0,mojo.internal.String,null,false,0,undefined,undefined)],[[0,24]]);mojo.internal.Struct(InSessionAuth_RequestLegacyWebAuthn_ResponseParamsSpec.$,"InSessionAuth_RequestLegacyWebAuthn_ResponseParams",[mojo.internal.StructField("success",0,0,mojo.internal.Bool,false,false,0,undefined,undefined)],[[0,16]]);function getTemplate$A(){return html`<!--_html_template_start_--><style include="settings-shared">cr-policy-indicator{padding:0 var(--cr-controlled-by-spacing)}#betterTogetherSuiteIcon,#nearbyShareIcon{--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="Connected devices">
      <div id="multideviceItem" class="settings-box first two-line no-padding">
        <div class="link-wrapper" id="suiteLinkWrapper" actionable$="[[doesClickOpenSubpage_(pageContentData)]]" on-click="handleItemClick_">
          <iron-icon id="betterTogetherSuiteIcon" icon="[[getIconName(MultiDeviceFeature.BETTER_TOGETHER_SUITE)]]">
          </iron-icon>
          <div class="middle settings-box-text" aria-hidden$="[[getTextAriaHidden_(pageContentData)]]">
            <div id="multideviceLabel">
              Android phone
            </div>
            <localized-link id="multideviceSubLabel" class="secondary" localized-string="[[getSubLabelInnerHtml_(pageContentData)]]">
            </localized-link>
          </div>
          <template is="dom-if" if="[[doesClickOpenSubpage_(pageContentData)]]" restamp>
            <cr-icon-button class="subpage-arrow" aria-labelledby="multideviceLabel" aria-describedby="multideviceSubLabel" aria-roledescription="Subpage button">
            </cr-icon-button>
          </template>
        </div>
        <template is="dom-if" if="[[!isSuiteAllowedByPolicy(pageContentData)]]" restamp>
          <cr-policy-indicator id="suitePolicyIndicator" indicator-type="userPolicy">
          </cr-policy-indicator>
          <settings-multidevice-feature-toggle class="margin-matches-padding" toggle-aria-label="Connected phone features enable." feature="[[MultiDeviceFeature.BETTER_TOGETHER_SUITE]]" page-content-data="[[pageContentData]]" deep-link-focus-id$="[[Setting.kMultiDeviceOnOff]]">
          </settings-multidevice-feature-toggle>
        </template>
        <template is="dom-if" if="[[shouldShowSeparatorAndSubpageArrow_(pageContentData)]]" restamp>
          <div class="separator"></div>
        </template>
        <template is="dom-if" if="[[shouldShowButton_(pageContentData)]]" restamp>
          <cr-button class="margin-matches-padding" on-click="handleButtonClick_" aria-label="[[getButtonA11yLabel_(pageContentData)]]" deep-link-focus-id$="[[Setting.kSetUpMultiDevice]]
                  [[Setting.kVerifyMultiDeviceSetup]]">
            [[getButtonText_(pageContentData)]]
          </cr-button>
        </template>
        <template is="dom-if" if="[[shouldShowToggle_(pageContentData)]]" restamp>
          <settings-multidevice-feature-toggle class="margin-matches-padding" toggle-aria-label="Connected phone features enable." feature="[[MultiDeviceFeature.BETTER_TOGETHER_SUITE]]" page-content-data="[[pageContentData]]" deep-link-focus-id$="[[Setting.kMultiDeviceOnOff]]">
          </settings-multidevice-feature-toggle>
        </template>
      </div>
      <template is="dom-if" if="[[isNearbyShareSupported_]]" restamp>
        <div id="nearbyshare-item" class="settings-box two-line no-padding">
          <div class="link-wrapper" id="nearbyLinkWrapper" actionable$="[[!isNearbyShareDisallowedByPolicy_(pageContentData)]]" on-click="nearbyShareClick_">
            
              <template is="dom-if" if="[[isNameEnabled_]]" restamp>
                <iron-icon id="nearbyShareIcon" icon="nearby-share-internal:nearby-share">
                </iron-icon>
              </template>
              <template is="dom-if" if="[[!isNameEnabled_]]" restamp>
                <iron-icon id="nearbyShareIcon" icon="os-settings:nearby-share">
                </iron-icon>
              </template>
            
            
            <div class="middle settings-box-text">
              <div id="nearbyShareLabel" aria-hidden="true">
                Quick Share
              </div>
              <template is="dom-if" if="[[showNearbyShareOnOffString_(
                        prefs.nearby_sharing.onboarding_complete.value,
                        pageContentData)]]" restamp>
                  <template is="dom-if" if="[[prefs.nearby_sharing.enabled.value]]">
                    <div class="secondary" id="nearbyShareSecondary">
                    [[getNearbyShareDescription_(settings.visibility)]]
                  </div>
                  </template>
                  <template is="dom-if" if="[[!prefs.nearby_sharing.enabled.value]]">
                    <div class="secondary" id="nearbyShareSecondary">
                      <localized-link localized-string="Share files and more with nearby devices. &lt;a&gt;Learn more&lt;/a&gt;" link-url="https://support.google.com/chromebook?p=nearby_share">
                      </localized-link>
                    </div>
                  </template>
              </template>
              <template is="dom-if" if="[[showNearbyShareSetUpDescription_(
                        prefs.nearby_sharing.onboarding_complete.value,
                        pageContentData)]]" restamp>
                <div class="secondary" id="nearbyShareSecondary">
                  <localized-link id="setupDescription" localized-string="Share files and more with nearby devices. &lt;a&gt;Learn more&lt;/a&gt;" link-url="https://support.google.com/chromebook?p=nearby_share">
                  </localized-link>
                </div>
              </template>
            </div>
            <template is="dom-if" if="[[shouldShowNearbyShareSubpageArrow_(
                prefs.nearby_sharing.enabled.value,
                shouldEnableNearbyShareBackgroundScanningRevamp_,
                pageContentData)]]" restamp>
              <cr-icon-button id="nearbyShareSubpageArrow" class="subpage-arrow" aria-labelledby="nearbyShareLabel" aria-describedby="nearbyShareSecondary" aria-roledescription="Subpage button">
              </cr-icon-button>
            </template>
          </div>
          <template is="dom-if" if="[[isNearbyShareDisallowedByPolicy_(pageContentData)]]" restamp>
            <cr-policy-indicator id="nearbyPolicyIndicator" indicator-type="userPolicy">
            </cr-policy-indicator>
          </template>
          <template is="dom-if" if="[[!isNearbyShareDisallowedByPolicy_(pageContentData)]]" restamp>
            <div class="separator"></div>
          </template>
          <template is="dom-if" if="[[showNearbyShareToggle_(
                    prefs.nearby_sharing.onboarding_complete.value,
                    pageContentData)]]" restamp>
            <cr-toggle id="nearbySharingToggleButton" class="margin-matches-padding" aria-label="Quick Share" checked="{{prefs.nearby_sharing.enabled.value}}" disabled="[[isNearbyShareDisallowedByPolicy_(pageContentData)]]" deep-link-focus-id$="[[Setting.kNearbyShareOnOff]]">
            </cr-toggle>
          </template>
          <template is="dom-if" if="[[showNearbyShareSetupButton_(
                    prefs.nearby_sharing.onboarding_complete.value,
                    pageContentData)]]" restamp>
            <cr-button class="margin-matches-padding" id="nearbySetUp" on-click="handleNearbySetUpClick_" disabled="[[isNearbyShareDisallowedByPolicy_(pageContentData)]]">
              Set up
            </cr-button>
          </template>
        </div>
      </template>
    </settings-card></div>
  

  <template is="dom-if" route-path="/multidevice/features" restamp>
    <os-settings-subpage page-title="[[getMultideviceSubpageTitle_(pageContentData)]]">
      <div slot="subpage-title-extra">
        <cr-button id="forgetDeviceButton" on-click="showForgetDeviceDialog_" deep-link-focus-id$="[[Setting.kForgetPhone]]">
          Disconnect
        </cr-button>
      </div>
      <div id="settingsMultideviceSubpageWrapper" tabindex="-1">
        <settings-multidevice-subpage page-content-data="[[pageContentData]]">
        </settings-multidevice-subpage>
      </div>
    </os-settings-subpage>
  </template>
  <template is="dom-if" if="[[isNearbyShareSupported_]]" restamp>
    <template is="dom-if" route-path="/multidevice/nearbyshare" restamp>
      <os-settings-subpage page-title="Quick Share">
        <settings-nearby-share-subpage settings="{{settings}}" prefs="{{prefs}}" is-settings-retreived="[[isSettingsRetreived]]">
        </settings-nearby-share-subpage>
      </os-settings-subpage>
    </template>
  </template>
</os-settings-animated-pages>
<template is="dom-if" if="[[showPasswordPromptDialog_]]" restamp>
  <settings-password-prompt-dialog id="multidevicePasswordPrompt" on-token-obtained="onTokenObtained_">
  </settings-password-prompt-dialog>
</template>
<template is="dom-if" if="[[showPermissionsSetupDialog_(
    showPhonePermissionSetupDialog_)]]" restamp>
  <settings-multidevice-notification-access-setup-dialog is-password-dialog-showing="{{isPasswordDialogShowing_}}" on-close="onHidePhonePermissionsSetupDialog_">
  </settings-multidevice-notification-access-setup-dialog>
</template>
<template is="dom-if" if="[[showNewPermissionsSetupDialog_(
    showPhonePermissionSetupDialog_)]]" restamp>
  <settings-multidevice-permissions-setup-dialog is-password-dialog-showing="{{isPasswordDialogShowing_}}" on-pin-number-selected="onPinNumberSelected_" is-chromeos-screen-lock-enabled="[[isChromeosScreenLockEnabled_]]" is-phone-screen-lock-enabled="[[isPhoneScreenLockEnabled_]]" show-camera-roll="[[isPhoneHubCameraRollSetupRequired(
                                        pageContentData)]]" show-notifications="[[isPhoneHubNotificationsSetupRequired(
                                          pageContentData)]]" show-app-streaming="[[isPhoneHubAppsSetupRequired(
                                          pageContentData)]]" combined-setup-supported="[[isCombinedSetupSupported_(
                                          pageContentData)]]" on-close="onHidePhonePermissionsSetupDialog_">
  </settings-multidevice-permissions-setup-dialog>
</template>

<template is="dom-if" if="[[shouldShowForgetDeviceDialog_]]" restamp>
  <settings-multidevice-forget-device-dialog on-close="closeForgetDeviceDialog_">
  </settings-multidevice-forget-device-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function getSettingForMultiDeviceFeature(feature){switch(feature){case MultiDeviceFeature.BETTER_TOGETHER_SUITE:return Setting.kMultiDeviceOnOff;case MultiDeviceFeature.PHONE_HUB:return Setting.kPhoneHubOnOff;case MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS:return Setting.kPhoneHubNotificationsOnOff;case MultiDeviceFeature.PHONE_HUB_TASK_CONTINUATION:return Setting.kPhoneHubTaskContinuationOnOff;case MultiDeviceFeature.PHONE_HUB_CAMERA_ROLL:return Setting.kPhoneHubCameraRollOnOff;case MultiDeviceFeature.SMART_LOCK:return Setting.kSmartLockOnOff;case MultiDeviceFeature.WIFI_SYNC:return Setting.kWifiSyncOnOff;case MultiDeviceFeature.ECHE:return Setting.kPhoneHubAppsOnOff;case MultiDeviceFeature.INSTANT_TETHERING:return Setting.kInstantTetheringOnOff;default:assertExhaustive(feature)}}const SettingsMultidevicePageElementBase=NearbyShareSettingsMixin(MultiDeviceFeatureMixin(RouteOriginMixin(DeepLinkingMixin(PrefsMixin(WebUiListenerMixin(PolymerElement))))));class SettingsMultidevicePageElement extends SettingsMultidevicePageElementBase{static get is(){return"settings-multidevice-page"}static get template(){return getTemplate$A()}static get properties(){return{section_:{type:Number,value:Section$1.kMultiDevice,readOnly:true},authToken_:{type:Object},authTokenReply_:{type:Object},featureToBeEnabledOnceAuthenticated_:{type:Number,value:null},showPasswordPromptDialog_:{type:Boolean,value:false},showPhonePermissionSetupDialog_:{type:Boolean,value:false},isNearbyShareSupported_:{type:Boolean,value:function(){return loadTimeData.getBoolean("isNearbyShareSupported")}},shouldEnableNearbyShareBackgroundScanningRevamp_:{type:Boolean,computed:`computeShouldEnableNearbyShareBackgroundScanningRevamp_(\n            settings.isFastInitiationHardwareSupported)`},isSettingsRetreived:{type:Boolean,value:false},isPasswordDialogShowing_:{type:Boolean,value:false},isPinNumberDialogShowing_:{type:Boolean,value:false},isChromeosScreenLockEnabled_:{type:Boolean,value:function(){return loadTimeData.getBoolean("isChromeosScreenLockEnabled")}},isPhoneScreenLockEnabled_:{type:Boolean,value:function(){return loadTimeData.getBoolean("isPhoneScreenLockEnabled")}},isNameEnabled_:{type:Boolean,value:()=>loadTimeData.getBoolean("isNameEnabled")},shouldShowForgetDeviceDialog_:{type:Boolean,value:false},isAuthPanelInSessionEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("isAuthPanelEnabled")},readOnly:true},fakeInSessionAuthForTesting_:{type:Object,value:null}}}constructor(){super();this.supportedSettingIds=new Set([Setting.kSetUpMultiDevice,Setting.kVerifyMultiDeviceSetup,Setting.kMultiDeviceOnOff,Setting.kNearbyShareDeviceVisibility,Setting.kNearbyShareOnOff]);this.route=routes.MULTIDEVICE;this.browserProxy_=MultiDeviceBrowserProxyImpl.getInstance()}ready(){super.ready();this.addEventListener("close",this.onDialogClose_);this.addEventListener("feature-toggle-clicked",(event=>{this.onFeatureToggleClicked_(event)}));this.addEventListener("forget-device-requested",this.onForgetDeviceRequested_);this.addEventListener("permission-setup-requested",this.onPermissionSetupRequested_);this.addWebUiListener("settings.updateMultidevicePageContentData",this.onPageContentDataChanged_.bind(this));this.addWebUiListener("settings.OnEnableScreenLockChanged",this.onEnableScreenLockChanged_.bind(this));this.addWebUiListener("settings.OnScreenLockStatusChanged",this.onScreenLockStatusChanged_.bind(this));this.addFocusConfig(routes.MULTIDEVICE_FEATURES,"#multideviceItem .subpage-arrow");this.browserProxy_.getPageContentData().then((data=>this.onInitialPageContentDataFetched_(data)))}onSettingsRetrieved(){this.isSettingsRetreived=true}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);this.leaveNestedPageIfNoHostIsSet_();if(newRoute!==this.route){return}this.attemptDeepLink()}getSubLabelInnerHtml_(){if(!this.isSuiteAllowedByPolicy()){return this.i18nAdvanced("multideviceSetupSummary")}switch(this.pageContentData.mode){case MultiDeviceSettingsMode.NO_ELIGIBLE_HOSTS:return this.i18nAdvanced("multideviceNoHostText");case MultiDeviceSettingsMode.NO_HOST_SET:return this.i18nAdvanced("multideviceSetupSummary");case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:return this.i18nAdvanced("multideviceVerificationText");case MultiDeviceSettingsMode.HOST_SET_VERIFIED:assertExists(this.pageContentData.hostDeviceName);return this.pageContentData.hostDeviceName;default:assertNotReached()}}getButtonText_(){switch(this.pageContentData.mode){case MultiDeviceSettingsMode.NO_HOST_SET:return this.i18n("multideviceSetupButton");case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:return this.i18n("multideviceVerifyButton");default:return""}}getButtonA11yLabel_(){switch(this.pageContentData.mode){case MultiDeviceSettingsMode.NO_HOST_SET:return this.i18n("multideviceSetupButtonA11yLabel");case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:return this.i18n("multideviceVerifyButtonA11yLabel");default:return""}}getTextAriaHidden_(){return String(this.pageContentData.mode===MultiDeviceSettingsMode.HOST_SET_VERIFIED)}shouldShowButton_(){return[MultiDeviceSettingsMode.NO_HOST_SET,MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER,MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION].includes(this.pageContentData.mode)}shouldShowToggle_(){return this.pageContentData.mode===MultiDeviceSettingsMode.HOST_SET_VERIFIED}shouldShowSeparatorAndSubpageArrow_(){return this.pageContentData.mode!==MultiDeviceSettingsMode.NO_ELIGIBLE_HOSTS}doesClickOpenSubpage_(){return this.isHostSet()}handleItemClick_(event){if(event.composedPath()[0].tagName==="A"){event.stopPropagation();return}if(!this.isHostSet()){return}Router.getInstance().navigateTo(routes.MULTIDEVICE_FEATURES)}handleButtonClick_(event){event.stopPropagation();switch(this.pageContentData.mode){case MultiDeviceSettingsMode.NO_HOST_SET:this.browserProxy_.showMultiDeviceSetupDialog();return;case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_SERVER:case MultiDeviceSettingsMode.HOST_SET_WAITING_FOR_VERIFICATION:this.browserProxy_.retryPendingHostSetup()}}async requestUserAuth_(){if(!this.isAuthPanelInSessionEnabled_){this.showPasswordPromptDialog_=true;return}const inSessionAuth=this.fakeInSessionAuthForTesting_??InSessionAuth.getRemote();const tokenInfo=await inSessionAuth.requestToken(Reason.kAccessAuthenticationSettings,loadTimeData.getString("authPrompt"));if(!tokenInfo.reply){Router.getInstance().navigateToPreviousRoute();return}this.authTokenReply_=tokenInfo.reply;this.enableFeatureOnceAuthenticated(this.authTokenReply_?.token)}onDialogClose_(event){event.stopPropagation();if(event.composedPath().some((element=>element.id==="multidevicePasswordPrompt"))){this.enableFeatureOnceAuthenticated(this.authToken_?.token)}}enableFeatureOnceAuthenticated(token){assert(this.featureToBeEnabledOnceAuthenticated_!==null);if(token){this.browserProxy_.setFeatureEnabledState(this.featureToBeEnabledOnceAuthenticated_,true,token);recordSettingChange(Setting.kMultiDeviceOnOff);this.authToken_=undefined;this.authTokenReply_=undefined}this.featureToBeEnabledOnceAuthenticated_=null;this.showPasswordPromptDialog_=false}onFeatureToggleClicked_(event){const feature=event.detail.feature;const enabled=event.detail.enabled;if(enabled&&this.isAuthenticationRequiredToEnable_(feature)){this.featureToBeEnabledOnceAuthenticated_=feature;this.requestUserAuth_();return}if(feature===MultiDeviceFeature.PHONE_HUB_NOTIFICATIONS&&enabled){switch(this.pageContentData.notificationAccessStatus){case PhoneHubFeatureAccessStatus.PROHIBITED:assertNotReached("Cannot enable notification access; prohibited");case PhoneHubFeatureAccessStatus.AVAILABLE_BUT_NOT_GRANTED:this.showPhonePermissionSetupDialog_=true;return}}this.browserProxy_.setFeatureEnabledState(feature,enabled);const changedSettingId=getSettingForMultiDeviceFeature(feature);if(changedSettingId!==null){recordSettingChange(changedSettingId,{boolValue:enabled})}}isAuthenticationRequiredToEnable_(feature){if(feature===MultiDeviceFeature.SMART_LOCK){return true}if(feature!==MultiDeviceFeature.BETTER_TOGETHER_SUITE){return false}const smartLockState=this.getFeatureState(MultiDeviceFeature.SMART_LOCK);return smartLockState===MultiDeviceFeatureState.UNAVAILABLE_SUITE_DISABLED||smartLockState===MultiDeviceFeatureState.UNAVAILABLE_INSUFFICIENT_SECURITY}onForgetDeviceRequested_(){this.browserProxy_.removeHostDevice();recordSettingChange(Setting.kForgetPhone);Router.getInstance().navigateTo(routes.MULTIDEVICE)}onPermissionSetupRequested_(){this.showPhonePermissionSetupDialog_=true}leaveNestedPageIfNoHostIsSet_(){if(!this.pageContentData){return}if(routes.NEARBY_SHARE===Router.getInstance().currentRoute){return}if(routes.MULTIDEVICE!==Router.getInstance().currentRoute&&routes.MULTIDEVICE.contains(Router.getInstance().currentRoute)&&!this.isHostSet()){beforeNextRender(this,(()=>{Router.getInstance().navigateTo(routes.MULTIDEVICE)}))}}onInitialPageContentDataFetched_(newData){this.onPageContentDataChanged_(newData);const urlParams=Router.getInstance().getQueryParameters();if(urlParams.get("showPhonePermissionSetupDialog")!==null){this.showPhonePermissionSetupDialog_=true;Router.getInstance().navigateTo(routes.MULTIDEVICE_FEATURES)}}onPageContentDataChanged_(newData){this.pageContentData=newData;this.leaveNestedPageIfNoHostIsSet_()}onTokenObtained_(e){this.authToken_=e.detail}isNearbyShareDisallowedByPolicy_(){if(!this.pageContentData){return false}return this.pageContentData.isNearbyShareDisallowedByPolicy}getNearbyShareDescription_(visibility){if(visibility===undefined){return this.i18n("nearbyShareDescriptionHidden")}switch(visibility){case Visibility.kAllContacts:return this.i18n("nearbyShareDescriptionVisibleToAllContacts");case Visibility.kSelectedContacts:return this.i18n("nearbyShareDescriptionVisibleToSelectedContacts");case Visibility.kYourDevices:return this.i18n("nearbyShareDescriptionVisibleToYourDevices");case Visibility.kNoOne:case Visibility.kUnknown:return this.i18n("nearbyShareDescriptionHidden");default:assertNotReached()}}showNearbyShareToggle_(isOnboardingComplete){return isOnboardingComplete||this.isNearbyShareDisallowedByPolicy_()}showNearbyShareSetupButton_(isOnboardingComplete){return!isOnboardingComplete&&!this.isNearbyShareDisallowedByPolicy_()}showNearbyShareOnOffString_(isOnboardingComplete){return isOnboardingComplete&&!this.isNearbyShareDisallowedByPolicy_()}showNearbyShareSetUpDescription_(isOnboardingComplete){return!isOnboardingComplete||this.isNearbyShareDisallowedByPolicy_()}nearbyShareClick_(){if(this.isNearbyShareDisallowedByPolicy_()){return}const nearbyEnabled=this.getPref("nearby_sharing.enabled").value;const onboardingComplete=this.getPref("nearby_sharing.onboarding_complete").value;if(this.shouldEnableNearbyShareBackgroundScanningRevamp_){Router.getInstance().navigateTo(routes.NEARBY_SHARE);return}let params=undefined;if(!nearbyEnabled){if(onboardingComplete){this.setPrefValue("nearby_sharing.enabled",true);return}params=new URLSearchParams;params.set("entrypoint","settings");params.set("onboarding","")}Router.getInstance().navigateTo(routes.NEARBY_SHARE,params)}showPermissionsSetupDialog_(){if(!this.showPhonePermissionSetupDialog_){return false}return!this.pageContentData.isPhoneHubPermissionsDialogSupported}showNewPermissionsSetupDialog_(){if(!this.showPhonePermissionSetupDialog_){return false}return this.pageContentData.isPhoneHubPermissionsDialogSupported}onHidePhonePermissionsSetupDialog_(){if(this.isPinNumberDialogShowing_){this.isPinNumberDialogShowing_=false;return}if(this.isPasswordDialogShowing_){this.isPasswordDialogShowing_=false;return}this.showPhonePermissionSetupDialog_=false;this.shadowRoot.getElementById("settingsMultideviceSubpageWrapper").focus()}onPinNumberSelected_(e){assert(typeof e.detail.isPinNumberSelected==="boolean");this.isPinNumberDialogShowing_=e.detail.isPinNumberSelected}handleNearbySetUpClick_(){const params=new URLSearchParams;params.set("onboarding","");params.set("entrypoint","settings");Router.getInstance().navigateTo(routes.NEARBY_SHARE,params)}shouldShowNearbyShareSubpageArrow_(isNearbySharingEnabled,shouldEnableNearbyShareBackgroundScanningRevamp){return(shouldEnableNearbyShareBackgroundScanningRevamp||isNearbySharingEnabled)&&!this.isNearbyShareDisallowedByPolicy_()}computeShouldEnableNearbyShareBackgroundScanningRevamp_(isHardwareSupported){return isHardwareSupported}isCombinedSetupSupported_(){return this.pageContentData.isPhoneHubFeatureCombinedSetupSupported}onEnableScreenLockChanged_(enabled){this.isChromeosScreenLockEnabled_=enabled}onScreenLockStatusChanged_(enabled){this.isPhoneScreenLockEnabled_=enabled}getMultideviceSubpageTitle_(){const deviceName=this.pageContentData.hostDeviceName||"";return this.i18n("multideviceSubpageTitle",deviceName)}showForgetDeviceDialog_(){this.shouldShowForgetDeviceDialog_=true}closeForgetDeviceDialog_(){this.shouldShowForgetDeviceDialog_=false}}customElements.define(SettingsMultidevicePageElement.is,SettingsMultidevicePageElement);function getTemplate$z(){return html`<!--_html_template_start_--><style include="settings-shared">settings-toggle-button{--cr-icon-button-margin-end:16px;--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<os-settings-animated-pages id="pages" current-route="{{currentRoute}}" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="Accessibility">
      <settings-toggle-button id="a11yImageLabelsToggle" icon="os-settings:a11y-image-description" hidden="[[!hasScreenReader_]]" pref="{{prefs.settings.a11y.enable_accessibility_image_labels}}" on-change="onToggleAccessibilityImageLabels_" label="Get image descriptions from Google" sub-label="If an image doesnâ€™t have a useful description, Chrome will try to provide one for you. To create descriptions, images are sent to Google." deep-link-focus-id$="[[Setting.kGetImageDescriptionsFromGoogle]]">
      </settings-toggle-button>
      <div class="hr" hidden="[[!hasScreenReader_]]"></div>
      <settings-toggle-button id="optionsInMenuToggle" icon="os-settings:accessibility" label="Show accessibility options in Quick Settings" sub-label="Accessibility features make your device easier to use. To access Quick Settings, select the time on the bottom of your screen." pref="{{prefs.settings.a11y.enable_menu}}" deep-link-focus-id$="[[Setting.kA11yQuickSettings]]">
      </settings-toggle-button>
      <div class="hr"></div>
      <cr-link-row id="textToSpeechSubpageTrigger" start-icon="os-settings:text-to-speech" label="Text-to-Speech" on-click="onTextToSpeechClick_" sub-label="ChromeVox screen reader and select-to-speak" role-description="Subpage button">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="displayAndMagnificationPageTrigger" start-icon="os-settings:zoom-in" label="Display and magnification" on-click="onDisplayAndMagnificationClick_" sub-label="Color inversion, color correction, magnifier, and display settings" role-description="Subpage button">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="keyboardAndTextInputPageTrigger" start-icon="os-settings:a11y-keyboard-and-text-input" label="Keyboard and text input" on-click="onKeyboardAndTextInputClick_" sub-label="On-screen keyboard, dictation, Switch Access, and more" role-description="Subpage button">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="cursorAndTouchpadPageTrigger" start-icon="os-settings:cursor-click" label="Cursor and touchpad" on-click="onCursorAndTouchpadClick_" sub-label="Automatic clicks, cursor size, cursor color, and more" role-description="Subpage button">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="audioAndCaptionsPageTrigger" start-icon="os-settings:a11y-hearing" label="Audio and captions" on-click="onAudioAndCaptionsClick_" sub-label="Mono audio, startup, Live Caption, and more" role-description="Subpage button">
      </cr-link-row>
      <template is="dom-if" if="[[!isGuest_]]">
        <cr-link-row id="additionalFeaturesLink" class="hr" start-icon="os-settings:a11y-find-more" label="Find more accessibility tools in the Chrome Web Store" on-click="onAdditionalFeaturesClick_" external>
        </cr-link-row>
      </template>
    </settings-card>
  </div>

  <template is="dom-if" route-path="/manageAccessibility">
    <os-settings-subpage page-title="Manage accessibility features" hide-back-button>
      <settings-toggle-button id="a11yImageLabelsToggle" hidden="[[!hasScreenReader_]]" pref="{{prefs.settings.a11y.enable_accessibility_image_labels}}" on-change="onToggleAccessibilityImageLabels_" label="Get image descriptions from Google" sub-label="If an image doesnâ€™t have a useful description, Chrome will try to provide one for you. To create descriptions, images are sent to Google." deep-link-focus-id$="[[Setting.kGetImageDescriptionsFromGoogle]]">
      </settings-toggle-button>
      <div class="hr" hidden="[[!hasScreenReader_]]"></div>
      <cr-link-row id="textToSpeechSubpageTrigger" label="Text-to-Speech" on-click="onTextToSpeechClick_" sub-label="ChromeVox screen reader and select-to-speak" role-description="Subpage button">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="displayAndMagnificationPageTrigger" label="Display and magnification" on-click="onDisplayAndMagnificationClick_" sub-label="Color inversion, color correction, magnifier, and display settings" role-description="Subpage button">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="keyboardAndTextInputPageTrigger" label="Keyboard and text input" on-click="onKeyboardAndTextInputClick_" sub-label="On-screen keyboard, dictation, Switch Access, and more" role-description="Subpage button">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="cursorAndTouchpadPageTrigger" label="Cursor and touchpad" on-click="onCursorAndTouchpadClick_" sub-label="Automatic clicks, cursor size, cursor color, and more" role-description="Subpage button">
      </cr-link-row>
      <div class="hr"></div>
      <cr-link-row id="audioAndCaptionsPageTrigger" label="Audio and captions" on-click="onAudioAndCaptionsClick_" sub-label="Mono audio, startup, Live Caption, and more" role-description="Subpage button">
      </cr-link-row>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/textToSpeech">
    <os-settings-subpage page-title="Text-to-Speech">
      <settings-text-to-speech-subpage prefs="{{prefs}}" has-screen-reader="[[hasScreenReader_]]">
      </settings-text-to-speech-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/textToSpeech/chromeVox">
    <os-settings-subpage page-title="ChromeVox">
      <settings-chromevox-subpage prefs="{{prefs}}">
      </settings-chromevox-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/textToSpeech/selectToSpeak">
    <os-settings-subpage page-title="Select-to-speak settings">
      <settings-select-to-speak-subpage prefs="{{prefs}}">
      </settings-select-to-speak-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/displayAndMagnification">
    <os-settings-subpage page-title="Display and magnification">
      <settings-display-and-magnification-subpage prefs="{{prefs}}">
      </settings-display-and-magnification-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/keyboardAndTextInput">
    <os-settings-subpage page-title="Keyboard and text input">
      <settings-keyboard-and-text-input-page prefs="{{prefs}}">
      </settings-keyboard-and-text-input-page>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/cursorAndTouchpad">
    <os-settings-subpage page-title="Cursor and touchpad">
      <settings-cursor-and-touchpad-page prefs="{{prefs}}">
      </settings-cursor-and-touchpad-page>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/audioAndCaptions">
    <os-settings-subpage page-title="Audio and captions">
      <settings-audio-and-captions-page prefs="{{prefs}}" languages="[[languages]]" language-helper="[[languageHelper]]">
      </settings-audio-and-captions-page>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/tts">
    <os-settings-subpage page-title="Text-to-Speech voice settings">
      <settings-tts-voice-subpage prefs="{{prefs}}">
      </settings-tts-voice-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/captions">
    <os-settings-subpage page-title="Captions">
      <settings-captions prefs="{{prefs}}" languages="[[languages]]" language-helper="[[languageHelper]]">
      </settings-captions>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/switchAccess">
    <os-settings-subpage page-title="Switch Access settings">
      <settings-switch-access-subpage prefs="{{prefs}}">
      </settings-switch-access-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/faceGaze">
    <os-settings-subpage page-title="Face control" multi-card>
      <settings-facegaze-subpage prefs="{{prefs}}">
      </settings-facegaze-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/manageAccessibility/mouseKeys">
    <os-settings-subpage page-title="Mouse Keys" multi-card>
      <settings-mouse-keys-subpage prefs="{{prefs}}">
      </settings-mouse-keys-subpage>
    </os-settings-subpage>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$5=null;class OsA11yPageBrowserProxyImpl{static getInstance(){return instance$5||(instance$5=new OsA11yPageBrowserProxyImpl)}static setInstanceForTesting(obj){instance$5=obj}confirmA11yImageLabels(){chrome.send("confirmA11yImageLabels")}getScreenReaderState(){return sendWithPromise("getScreenReaderState")}}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsSettingsA11yPageElementBase=DeepLinkingMixin(RouteOriginMixin(PrefsMixin(WebUiListenerMixin(PolymerElement))));class OsSettingsA11yPageElement extends OsSettingsA11yPageElementBase{static get is(){return"os-settings-a11y-page"}static get template(){return getTemplate$z()}static get properties(){return{currentRoute:{type:Object,notify:true},section_:{type:Number,value:Section$1.kAccessibility,readOnly:true},hasScreenReader_:{type:Boolean,value:false},isKioskOldA11ySettingsRedirectionEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("isKioskOldA11ySettingsRedirectionEnabled")}},isGuest_:{type:Boolean,value(){return loadTimeData.getBoolean("isGuest")}},languages:{type:Object},languageHelper:Object}}constructor(){super();this.supportedSettingIds=new Set([Setting.kA11yQuickSettings,Setting.kGetImageDescriptionsFromGoogle,Setting.kLiveCaption]);this.route=routes.OS_ACCESSIBILITY;this.browserProxy_=OsA11yPageBrowserProxyImpl.getInstance();if(this.isKioskOldA11ySettingsRedirectionEnabled_){this.redirectToOldA11ySettings()}}ready(){super.ready();if(routes.A11Y_TEXT_TO_SPEECH){this.addFocusConfig(routes.A11Y_TEXT_TO_SPEECH,"#textToSpeechSubpageTrigger")}if(routes.A11Y_DISPLAY_AND_MAGNIFICATION){this.addFocusConfig(routes.A11Y_DISPLAY_AND_MAGNIFICATION,"#displayAndMagnificationPageTrigger")}if(routes.A11Y_KEYBOARD_AND_TEXT_INPUT){this.addFocusConfig(routes.A11Y_KEYBOARD_AND_TEXT_INPUT,"#keyboardAndTextInputPageTrigger")}if(routes.A11Y_CURSOR_AND_TOUCHPAD){this.addFocusConfig(routes.A11Y_CURSOR_AND_TOUCHPAD,"#cursorAndTouchpadPageTrigger")}if(routes.A11Y_AUDIO_AND_CAPTIONS){this.addFocusConfig(routes.A11Y_AUDIO_AND_CAPTIONS,"#audioAndCaptionsPageTrigger")}}connectedCallback(){super.connectedCallback();const updateScreenReaderState=hasScreenReader=>{this.hasScreenReader_=hasScreenReader};this.browserProxy_.getScreenReaderState().then(updateScreenReaderState);this.addWebUiListener("screen-reader-state-changed",updateScreenReaderState)}currentRouteChanged(newRoute,prevRoute){super.currentRouteChanged(newRoute,prevRoute);if(newRoute===this.route){this.attemptDeepLink()}}redirectToOldA11ySettings(){Router.getInstance().navigateTo(routes.MANAGE_ACCESSIBILITY)}onToggleAccessibilityImageLabels_(){const a11yImageLabelsOn=this.$.a11yImageLabelsToggle.checked;if(a11yImageLabelsOn){this.browserProxy_.confirmA11yImageLabels()}}onSwitchAccessSettingsClick_(){Router.getInstance().navigateTo(routes.MANAGE_SWITCH_ACCESS_SETTINGS)}onTextToSpeechClick_(){Router.getInstance().navigateTo(routes.A11Y_TEXT_TO_SPEECH)}onDisplayAndMagnificationClick_(){Router.getInstance().navigateTo(routes.A11Y_DISPLAY_AND_MAGNIFICATION)}onKeyboardAndTextInputClick_(){Router.getInstance().navigateTo(routes.A11Y_KEYBOARD_AND_TEXT_INPUT)}onCursorAndTouchpadClick_(){Router.getInstance().navigateTo(routes.A11Y_CURSOR_AND_TOUCHPAD)}onAudioAndCaptionsClick_(){Router.getInstance().navigateTo(routes.A11Y_AUDIO_AND_CAPTIONS)}onAdditionalFeaturesClick_(){window.open("https://chrome.google.com/webstore/category/collection/3p_accessibility_extensions")}}customElements.define(OsSettingsA11yPageElement.is,OsSettingsA11yPageElement);function getTemplate$y(){return html`<!--_html_template_start_--><style>:host{background-color:var(--cr-card-background-color);border-radius:8px;box-shadow:var(--cr-card-shadow);display:flex;padding:16px}.image-container{background-color:var(--cros-illustration-color-1-shade-2);border-radius:50%;display:inline-block;height:40px;margin-inline-end:16px;width:40px}.inner-image{--iron-icon-fill-color:var(--cros-icon-color-prominent);padding:8px}.side-content{flex:1}.eol-offer-title{font-weight:500;margin-bottom:8px}.eol-offer-text{margin-bottom:8px}</style>
<div class="image-container">
  <iron-icon class="inner-image" icon="os-settings:end-of-life-offer">
  </iron-icon>
</div>
<div class="side-content">
  <div class="eol-offer-title">[[getEolTitleText_(shouldShowOfferText)]]</div>
  <div class="eol-offer-text">[[getEolMessageText_(shouldShowOfferText)]]</div>
  <cr-button id="eolIncentiveButton" class="action-button" on-click="onIncentiveButtonClick_">
    [[getEolButtonText_(shouldShowOfferText)]]
  </cr-button>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class EolOfferSection extends PolymerElement{static get is(){return"eol-offer-section"}static get template(){return getTemplate$y()}static get properties(){return{shouldShowOfferText:{type:Boolean,value:false}}}onIncentiveButtonClick_(){AboutPageBrowserProxyImpl.getInstance().endOfLifeIncentiveButtonClicked()}getEolTitleText_(){return loadTimeData.getString(this.shouldShowOfferText?"eolIncentiveOfferTitle":"eolIncentiveNoOfferTitle")}getEolMessageText_(){return loadTimeData.getString(this.shouldShowOfferText?"eolIncentiveOfferMessage":"eolIncentiveNoOfferMessage")}getEolButtonText_(){return loadTimeData.getString(this.shouldShowOfferText?"eolIncentiveButtonOfferText":"learnMore")}}customElements.define(EolOfferSection.is,EolOfferSection);function getTemplate$x(){return html`<!--_html_template_start_--><style include="settings-shared"></style>
<cr-dialog id="dialog" close-text="Close" show-on-attach>
  <div slot="title">Download update using mobile data</div>
  <div slot="body">
    [[warningMessage_]]
  </div>
  <div slot="button-container">
    <cr-button id="cancel" class="cancel-button" on-click="onCancelClick_">Cancel</cr-button>
    <cr-button id="continue" class="action-button" on-click="onContinueClick_">
      Continue
    </cr-button>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2017 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsUpdateWarningDialogElementBase=I18nMixin(PolymerElement);class SettingsUpdateWarningDialogElement extends SettingsUpdateWarningDialogElementBase{static get is(){return"settings-update-warning-dialog"}static get template(){return getTemplate$x()}static get properties(){return{updateInfo:{type:Object,observer:"onUpdateInfoChanged_"},warningMessage_:{type:String,value:""}}}constructor(){super();this.browserProxy_=AboutPageBrowserProxyImpl.getInstance()}onCancelClick_(){this.$.dialog.close()}onContinueClick_(){if(!this.updateInfo||!this.updateInfo.version||!this.updateInfo.size){console.warn("ERROR: requestUpdateOverCellular arguments are undefined");return}this.browserProxy_.requestUpdateOverCellular(this.updateInfo.version,this.updateInfo.size);this.$.dialog.close()}onUpdateInfoChanged_(){if(!this.updateInfo||this.updateInfo.size===undefined){console.warn("ERROR: Update size is undefined");return}this.warningMessage_=this.i18n("aboutUpdateWarningMessage",Math.floor(Number(this.updateInfo.size)/(1024*1024)))}}customElements.define(SettingsUpdateWarningDialogElement.is,SettingsUpdateWarningDialogElement);function getTemplate$w(){return html`<!--_html_template_start_--><style include="settings-shared">:host{--chromeos-logo-width:40px}.info-section{margin-bottom:12px}.padded{padding-bottom:10px;padding-top:10px}#productRow{min-height:auto;padding-bottom:18px;padding-top:18px}#productRow>#productTitle{font:var(--cros-display-7-font);margin:0}#productRow>#productLogo{margin-inline-end:16px;width:var(--chromeos-logo-width)}.icon-container{margin-inline-end:10px;min-width:var(--chromeos-logo-width);text-align:center}#updateRowIcon{margin-inline-end:16px}iron-icon[icon='cr:check-circle']{fill:var(--cros-icon-color-prominent)}iron-icon[icon='cr:error-outline'],iron-icon[icon='cr:warning'],iron-icon[icon='os-settings:end-of-life']{fill:var(--cros-icon-color-alert)}iron-icon[icon='os-settings:about-update-complete']{fill:var(--cros-sys-positive)}iron-icon[icon='os-settings:about-update-warning']{fill:var(--cros-sys-warning)}iron-icon[icon='os-settings:about-update-error']{fill:var(--cros-sys-error)}iron-icon[icon='cr20:domain']{fill:var(--cros-sys-primary)}#firmwareUpdateBadge{--iron-icon-fill-color:var(--cros-icon-color-secondary)}.settings-box .start{overflow-x:auto}cr-button{white-space:nowrap}#regulatoryInfo img{width:330px}@media(prefers-color-scheme:dark){#regulatoryInfo img{filter:invert(1)}}.separator-firmware-updates-badge{margin-inline-end:-4px;margin-inline-start:12px}#deferredUpdateButtons{min-height:unset;padding-bottom:10px}eol-offer-section{margin:6px 3px 16px 3px}</style>
<iron-media-query query="(prefers-color-scheme: dark)" query-matches="{{isDarkModeActive_}}">
</iron-media-query>

  <os-settings-animated-pages id="pages" section="[[section_]]">
    <div route-path="default">
      <settings-card header-text="About ChromeOS">
        <div id="productRow" class="settings-box first">
          <img id="productLogo" on-click="onProductLogoClick_" srcset="chrome://theme/current-channel-logo@1x, chrome://theme/current-channel-logo@2x 2x" alt="Chrome logo" role="presentation">
          <h1 id="productTitle">Google ChromeOS</h1>
        </div>
        <div class="settings-box two-line">
          
          <iron-icon id="updateRowIcon" icon$="[[getUpdateStatusIcon_(
                  hasEndOfLife_, currentUpdateStatusEvent_,
                  showExtendedUpdatesOption_)]]" src="[[getThrobberSrcIfUpdating_(
                  isDarkModeActive_,
                  hasEndOfLife_,
                  currentUpdateStatusEvent_,
                  showExtendedUpdatesOption_)]]">
          </iron-icon>
          <div class="start padded">
            <div id="updateStatusMessage" hidden="[[!showUpdateStatus_]]">
              <div id="updateStatusMessageInner" tabindex="-1" inner-h-t-m-l="[[getUpdateStatusMessage_(
                  currentUpdateStatusEvent_, targetChannel_)]]"></div>
              <a hidden$="[[!shouldShowLearnMoreLink_(
                  currentUpdateStatusEvent_)]]" target="_blank" href="https://support.google.com/chrome?p=update_error">
                Learn more
              </a>
            </div>
            <template is="dom-if" if="[[showEolIncentive_]]">
              <eol-offer-section id="endOfLifeOfferContainer" should-show-offer-text="[[shouldShowOfferText_]]">
              </eol-offer-section>
            </template>
            <localized-link id="endOfLifeMessage" hidden="[[!hasEndOfLife_]]" localized-string="This is the last automatic software and security update for this Chromebook. To get future updates, upgrade to a newer model. &lt;a target=&quot;_blank&quot; href=&quot;https://www.google.com/chromebook/older/&quot;&gt;Learn more&lt;/a&gt;">
            </localized-link>
            <div hidden="[[!showExtendedUpdatesOption_]]">
              <div id="extendedUpdatesMainMessage">
                Extended security updates available
              </div>
              <localized-link id="extendedUpdatesSecondaryMessage" class="secondary" localized-string="This device is no longer receiving automatic software updates. Turn on extended security updates for continued security, stability, and performance. Some functionality will be limited. &lt;a target=&quot;_blank&quot; href=&quot;https://www.google.com/chromebook/autoupdates-opt-in/&quot;&gt;Learn more&lt;/a&gt;">
              </localized-link>
            </div>
            <div class="secondary" hidden="[[!hasDeferredUpdate_]]">
              Your device may no longer work properly and may experience security and performance issues.
            </div>
            <div class="secondary">Version 138.0.7204.232  (Official Build)  (64-bit)</div>
          </div>
          <div class="separator" hidden="[[!showButtonContainer_]]"></div>
          <span id="buttonContainer" hidden="[[!showButtonContainer_]]">
            <cr-button id="relaunchButton" hidden$="[[!showRelaunch_]]" on-click="onRelaunchClick_">
                [[getRelaunchButtonText_(
                                currentUpdateStatusEvent_)]]
            </cr-button>
            <cr-button id="checkForUpdatesButton" hidden="[[!showCheckUpdates_]]" on-click="onCheckUpdatesClick_" deep-link-focus-id$="[[Setting.kCheckForOsUpdate]]">
              Check for updates
            </cr-button>
            <cr-button id="extendedUpdatesButton" hidden="[[!showExtendedUpdatesOption_]]" on-click="onExtendedUpdatesButtonClick_">
              Set up
            </cr-button>
          </span>
        </div>
        <div id="deferredUpdateButtons" class="settings-box first" hidden="[[!hasDeferredUpdate_]]">
          <div class="icon-container"></div>
          <cr-button id="applyDeferredUpdateAdvanced" on-click="onApplyDeferredUpdateAdvancedClick_">
            Restart
          </cr-button>
          <cr-button id="applyAndSetAutoUpdate" on-click="onApplyAndSetAutoUpdateClick_">
            Restart and get automatic updates
          </cr-button>
        </div>
        <cr-link-row id="aboutTPMFirmwareUpdate" class="hr" start-icon="os-settings:startup" hidden$="[[!showTPMFirmwareUpdateLineItem_]]" label="Powerwash for added security" on-click="onTpmFirmwareUpdateClick_">
          <div slot="sub-label">
            This upgrade resets your Chromebook and removes current user data.
            <a href="https://support.google.com/chromebook?p=tpm_update" target="_blank" on-click="onLearnMoreClick_">
              Learn more
            </a>
          </div>
        </cr-link-row>
        <template is="dom-if" if="[[hasInternetConnection_]]">
          <cr-link-row class="hr" id="releaseNotesOnline" start-icon="os-settings:about-release-notes" on-click="onReleaseNotesClick_" label="See what&#39;s new" sub-label="Automatic updates provide you with the latest features. Explore highlights from recent updates." external deep-link-focus-id$="[[Setting.kSeeWhatsNew]]">
          </cr-link-row>
        </template>
        <template is="dom-if" if="[[!hasInternetConnection_]]">
          <cr-link-row class="hr" id="releaseNotesOffline" start-icon="os-settings:about-release-notes" on-click="onReleaseNotesClick_" label="See what&#39;s new" title="Internet connection required" external deep-link-focus-id$="[[Setting.kSeeWhatsNew]]">
          </cr-link-row>
        </template>
        <cr-link-row class="hr" id="help" start-icon="os-settings:about-help" on-click="onHelpClick_" label="Get help" sub-label="View help articles or find device support" external deep-link-focus-id$="[[Setting.kGetHelpWithChromeOs]]">
        </cr-link-row>
  
        <cr-link-row class="hr" id="reportIssue" start-icon="os-settings:about-feedback" on-click="onReportIssueClick_" hidden="[[!prefs.feedback_allowed.value]]" label="[[getReportIssueLabel_()]]" sub-label="Share feedback or report an issue" external deep-link-focus-id$="[[Setting.kReportAnIssue]]">
        </cr-link-row>
  
        <cr-link-row class="hr" id="diagnostics" start-icon="os-settings:about-diagnostics" on-click="onDiagnosticsClick_" label="Diagnostics" sub-label="Test your battery, CPU, memory, connectivity, and more" external deep-link-focus-id$="[[Setting.kDiagnostics]]">
        </cr-link-row>
        <cr-link-row class="hr" id="firmwareUpdates" start-icon="os-settings:about-firmware-updates" on-click="onFirmwareUpdatesClick_" label="Firmware updates" sub-label="[[getFirmwareSublabel_(firmwareUpdateCount_)]]" external using-slotted-label deep-link-focus-id$="[[Setting.kFirmwareUpdates]]">
          <iron-icon id="firmwareUpdateBadge" icon$="[[getFirmwareUpdatesIcon_(firmwareUpdateCount_)]]" hidden$="[[!shouldShowFirmwareUpdatesBadge_(
                firmwareUpdateCount_)]]">
          </iron-icon>
          <div id="firmwareUpdateBadgeSeparator" class="separator separator-firmware-updates-badge" hidden$="[[!shouldShowFirmwareUpdatesBadge_(
                firmwareUpdateCount_)]]">
          </div>
        </cr-link-row>
        <cr-link-row class="hr" id="detailedBuildInfoTrigger" start-icon="os-settings:about-additional-details" on-click="onDetailedBuildInfoClick_" label="Additional details" role-description="Subpage button">
        </cr-link-row>
        <cr-link-row class="hr" on-click="onManagementPageClick_" start-icon="cr:domain" label="Your Chromebook is managed" hidden$="[[!isManaged_]]" external>
        </cr-link-row>
      </settings-card>

      <crostini-settings-card prefs="{{prefs}}"></crostini-settings-card>

      <settings-card id="copyrightCard">
        <div class="settings-box padded block first">
          <div class="info-section">
            <div class="secondary">Google ChromeOS</div>
            <div class="secondary">Copyright 2025 Google LLC. All rights reserved.</div>
          </div>

          <div class="info-section">
            <div class="secondary">
              <span>Chrome is made possible by the <a target="_blank" href="https://www.chromium.org/">Chromium</a> open source project.</span>
              <localized-link localized-string="Chrome is also made possible by other <a href='#'>open source software</a>." on-link-clicked="onProductLicenseOtherClicked_">
              </localized-link>
            </div>
            <div class="secondary" inner-h-t-m-l="[[getAboutProductOsLicense_(
                    showCrostiniLicense_)]]">
            </div>
          </div>
          
            <div class="secondary">
              <a id="aboutProductTos" href="chrome://terms/" target="_blank" deep-link-focus-id$="[[Setting.kTermsOfService]]">
                Terms of Service
              </a>
            </div>
          
        </div>
        <div id="regulatoryInfo" class="settings-box padded block" hidden$="[[!shouldShowRegulatoryOrSafetyInfo_(regulatoryInfo_)]]">
          
            <div class="secondary" hidden$="[[!shouldShowSafetyInfo_()]]">
              <a target="_blank" href="">
                Important use and safety information
              </a>
            </div>
          
          <img src="[[regulatoryInfo_.url]]" alt="[[regulatoryInfo_.text]]" hidden$="[[!shouldShowRegulatoryInfo_(regulatoryInfo_)]]">
        </div>
      </settings-card>
    </div>

    <template is="dom-if" route-path="/help/details">
      <os-settings-subpage page-title="Additional details">
        <settings-detailed-build-info-subpage eol-message-with-month-and-year="[[eolMessageWithMonthAndYear_]]" prefs="{{prefs}}">
        </settings-detailed-build-info-subpage>
      </os-settings-subpage>
    </template>

    
    <template is="dom-if" route-path="/crostini/details">
      <os-settings-subpage page-title="Linux development environment">
        <settings-crostini-subpage prefs="{{prefs}}">
        </settings-crostini-subpage>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/crostini/androidAdb">
      <os-settings-subpage page-title="Develop Android apps">
        <settings-crostini-arc-adb prefs="{{prefs}}">
        </settings-crostini-arc-adb>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/crostini/portForwarding">
      <os-settings-subpage page-title="Port forwarding">
        <settings-crostini-port-forwarding prefs="{{prefs}}">
        </settings-crostini-port-forwarding>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/crostini/exportImport">
      <os-settings-subpage page-title="Backup &amp; restore">
        <settings-crostini-export-import prefs="{{prefs}}">
        </settings-crostini-export-import>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/crostini/sharedPaths">
      <os-settings-subpage page-title="Manage shared folders">
        <settings-guest-os-shared-paths guest-os-type="crostini" prefs="{{prefs}}">
        </settings-guest-os-shared-paths>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/crostini/sharedUsbDevices">
      <os-settings-subpage page-title="Manage USB devices">
        <settings-crostini-shared-usb-devices prefs="{{prefs}}">
        </settings-crostini-shared-usb-devices>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/crostini/extraContainers">
      <os-settings-subpage page-title="Manage extra containers">
        <settings-crostini-extra-containers guest-os-type="crostini">
        </settings-crostini-extra-containers>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/bruschetta/details">
      <os-settings-subpage page-title="Managed Development Environment (Managed Development Environment)">
        <settings-bruschetta-subpage prefs="{{prefs}}">
        </settings-bruschetta-subpage>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/bruschetta/sharedUsbDevices">
      <os-settings-subpage page-title="Manage USB devices">
        <settings-guest-os-shared-usb-devices guest-os-type="bruschetta" prefs="{{prefs}}">
        </settings-guest-os-shared-usb-devices>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/bruschetta/sharedPaths">
      <os-settings-subpage page-title="Manage shared folders">
        <settings-guest-os-shared-paths guest-os-type="bruschetta" prefs="{{prefs}}">
        </settings-guest-os-shared-paths>
      </os-settings-subpage>
    </template>

    
    <template is="dom-if" route-path="/_internal/_storybook">
      <os-settings-subpage page-title="Storybook" hide-back-button>
        <settings-storybook-subpage></settings-storybook-subpage>
      </os-settings-subpage>
    </template>
  </os-settings-animated-pages>

<template is="dom-if" if="[[showUpdateWarningDialog_]]" restamp>
  <settings-update-warning-dialog update-info="[[updateInfo_]]" on-close="onUpdateWarningDialogClose_">
  </settings-update-warning-dialog>
</template>
<template is="dom-if" if="[[showTPMFirmwareUpdateDialog_]]" restamp>
  <os-settings-powerwash-dialog request-tpm-firmware-update on-close="onPowerwashDialogClose_">
  </os-settings-powerwash-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsAboutPageBase=DeepLinkingMixin(RouteOriginMixin(I18nMixin(WebUiListenerMixin(PolymerElement))));class OsAboutPageElement extends OsAboutPageBase{static get is(){return"os-about-page"}static get template(){return getTemplate$w()}static get properties(){return{section_:{type:Number,value:Section$1.kAboutChromeOs,readOnly:true},isDarkModeActive_:{type:Boolean,value:false},currentUpdateStatusEvent_:{type:Object,value:{message:"",progress:0,rollback:false,powerwash:false,status:UpdateStatus.UPDATED}},isManaged_:{type:Boolean,value(){return loadTimeData.getBoolean("isManaged")}},deviceManager_:{type:String,value(){return loadTimeData.getString("deviceManager")}},hasCheckedForUpdates_:{type:Boolean,value:false},currentChannel_:String,targetChannel_:String,isLts_:{type:Boolean,value:false},regulatoryInfo_:Object,hasEndOfLife_:{type:Boolean,value:false},showEolIncentive_:{type:Boolean,value:false},shouldShowOfferText_:{type:Boolean,value:false},hasDeferredUpdate_:{type:Boolean,value:false},eolMessageWithMonthAndYear_:{type:String,value:""},hasInternetConnection_:{type:Boolean,value:false},firmwareUpdateCount_:{type:Number,value:0},showCrostiniLicense_:{type:Boolean,value:false},showUpdateStatus_:{type:Boolean,value:false},showButtonContainer_:Boolean,showRelaunch_:{type:Boolean,value:false,computed:"computeShowRelaunch_(currentUpdateStatusEvent_)"},showCheckUpdates_:{type:Boolean,computed:"computeShowCheckUpdates_("+"currentUpdateStatusEvent_, hasCheckedForUpdates_, hasEndOfLife_,"+"showExtendedUpdatesOption_)"},showUpdateWarningDialog_:{type:Boolean,value:false},showTPMFirmwareUpdateLineItem_:{type:Boolean,value:false},showTPMFirmwareUpdateDialog_:Boolean,updateInfo_:Object,isPendingOsUpdateDeepLink_:{type:Boolean,value:false},showExtendedUpdatesOption_:{type:Boolean,value:false,computed:"computeShowExtendedUpdatesOption_("+"isExtendedUpdatesOptInEligible_,"+"currentUpdateStatusEvent_)"},isExtendedUpdatesOptInEligible_:{type:Boolean,value:false},isExtendedUpdatesDatePassed_:{type:Boolean,value:false},isExtendedUpdatesOptInRequired_:{type:Boolean,value:false}}}static get observers(){return["updateShowUpdateStatus_(hasEndOfLife_, currentUpdateStatusEvent_,"+"hasCheckedForUpdates_, showExtendedUpdatesOption_)","updateShowButtonContainer_(showRelaunch_, showCheckUpdates_,"+"showExtendedUpdatesOption_)","handleCrostiniEnabledChanged_(prefs.crostini.enabled.value)","updateIsExtendedUpdatesOptInEligible_("+"hasEndOfLife_, isExtendedUpdatesDatePassed_,"+"isExtendedUpdatesOptInRequired_)"]}constructor(){super();this.supportedSettingIds=new Set([Setting.kCheckForOsUpdate,Setting.kSeeWhatsNew,Setting.kGetHelpWithChromeOs,Setting.kReportAnIssue,Setting.kTermsOfService,Setting.kDiagnostics,Setting.kFirmwareUpdates]);this.route=routes.ABOUT;this.aboutBrowserProxy_=AboutPageBrowserProxyImpl.getInstance()}connectedCallback(){super.connectedCallback();this.aboutBrowserProxy_.pageReady();this.addEventListener("target-channel-changed",(e=>{this.targetChannel_=e.detail}));this.aboutBrowserProxy_.getChannelInfo().then((info=>{this.currentChannel_=info.currentChannel;this.targetChannel_=info.targetChannel;this.isLts_=info.isLts;this.startListening_()}));this.aboutBrowserProxy_.getRegulatoryInfo().then((info=>{this.regulatoryInfo_=info}));this.aboutBrowserProxy_.getEndOfLifeInfo().then((result=>{this.hasEndOfLife_=!!result.hasEndOfLife;this.eolMessageWithMonthAndYear_=result.aboutPageEndOfLifeMessage||"";this.showEolIncentive_=!!result.shouldShowEndOfLifeIncentive;this.shouldShowOfferText_=!!result.shouldShowOfferText;this.isExtendedUpdatesDatePassed_=!!result.isExtendedUpdatesDatePassed;this.isExtendedUpdatesOptInRequired_=!!result.isExtendedUpdatesOptInRequired}));this.aboutBrowserProxy_.checkInternetConnection().then((result=>{this.hasInternetConnection_=result}));this.aboutBrowserProxy_.getFirmwareUpdateCount().then((result=>{this.firmwareUpdateCount_=result}));if(Router.getInstance().getQueryParameters().get("checkForUpdate")==="true"){this.onCheckUpdatesClick_()}this.registerExtendedUpdatesObserver_()}ready(){super.ready();this.addFocusConfig(routes.ABOUT_DETAILED_BUILD_INFO,"#detailedBuildInfoTrigger")}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute!==this.route){return}this.attemptDeepLink().then((result=>{if(!result.deepLinkShown&&result.pendingSettingId){assert(result.pendingSettingId===Setting.kCheckForOsUpdate);this.isPendingOsUpdateDeepLink_=true}}))}startListening_(){this.addWebUiListener("update-status-changed",this.onUpdateStatusChanged_.bind(this));this.aboutBrowserProxy_.refreshUpdateStatus();this.addWebUiListener("tpm-firmware-update-status-changed",this.onTpmFirmwareUpdateStatusChanged_.bind(this));this.aboutBrowserProxy_.refreshTpmFirmwareUpdateStatus();this.addWebUiListener("extended-updates-setting-changed",this.onExtendedUpdatesSettingChanged_.bind(this))}onUpdateStatusChanged_(event){if(event.status===UpdateStatus.CHECKING){this.hasCheckedForUpdates_=true}else if(event.status===UpdateStatus.NEED_PERMISSION_TO_UPDATE){this.showUpdateWarningDialog_=true;this.updateInfo_={version:event.version,size:event.size}}this.hasDeferredUpdate_=event.status===UpdateStatus.DEFERRED;this.currentUpdateStatusEvent_=event}onLearnMoreClick_(event){event.stopPropagation()}onProductLicenseOtherClicked_(event){event.detail.event.preventDefault();
// Programmatically open license.
this.aboutBrowserProxy_.openProductLicenseOther()}onReleaseNotesClick_(){this.aboutBrowserProxy_.launchReleaseNotes()}onHelpClick_(){this.aboutBrowserProxy_.openOsHelpPage()}onDiagnosticsClick_(){this.aboutBrowserProxy_.openDiagnostics();recordSettingChange(Setting.kDiagnostics)}onFirmwareUpdatesClick_(){this.aboutBrowserProxy_.openFirmwareUpdatesPage();recordSettingChange(Setting.kFirmwareUpdates)}onRelaunchClick_(){LifetimeBrowserProxyImpl.getInstance().relaunch()}updateShowUpdateStatus_(){if((this.currentUpdateStatusEvent_.status===UpdateStatus.UPDATED||this.currentUpdateStatusEvent_.status===UpdateStatus.FAILED_DOWNLOAD||this.currentUpdateStatusEvent_.status===UpdateStatus.FAILED_HTTP||this.currentUpdateStatusEvent_.status===UpdateStatus.DISABLED_BY_ADMIN)&&(!this.hasCheckedForUpdates_||this.showUpdateWarningDialog_)){this.showUpdateStatus_=false;return}if(this.hasEndOfLife_||this.showExtendedUpdatesOption_){this.showUpdateStatus_=false;return}this.showUpdateStatus_=this.currentUpdateStatusEvent_.status!==UpdateStatus.DISABLED}updateShowButtonContainer_(){this.showButtonContainer_=this.showRelaunch_||this.showCheckUpdates_||this.showExtendedUpdatesOption_;if(!this.isPendingOsUpdateDeepLink_){return}this.showDeepLink(Setting.kCheckForOsUpdate).then((result=>{if(result.deepLinkShown){this.isPendingOsUpdateDeepLink_=false}}))}computeShowRelaunch_(){return this.checkStatus_(UpdateStatus.NEARLY_UPDATED)}shouldShowLearnMoreLink_(){return this.currentUpdateStatusEvent_.status===UpdateStatus.FAILED}shouldShowFirmwareUpdatesBadge_(){return this.firmwareUpdateCount_>0}getUpdateStatusMessage_(){switch(this.currentUpdateStatusEvent_.status){case UpdateStatus.CHECKING:case UpdateStatus.NEED_PERMISSION_TO_UPDATE:return this.i18nAdvanced("aboutUpgradeCheckStarted");case UpdateStatus.NEARLY_UPDATED:if(this.currentChannel_!==this.targetChannel_){return this.i18nAdvanced("aboutUpgradeSuccessChannelSwitch")}if(this.currentUpdateStatusEvent_.rollback){return this.i18nAdvanced("aboutRollbackSuccess",{substitutions:[this.deviceManager_]})}return this.i18nAdvanced("aboutUpgradeRelaunch");case UpdateStatus.UPDATED:return this.i18nAdvanced("aboutUpgradeUpToDate");case UpdateStatus.UPDATING:assert(typeof this.currentUpdateStatusEvent_.progress==="number");const progressPercent=this.currentUpdateStatusEvent_.progress+"%";if(this.currentChannel_!==this.targetChannel_){return this.i18nAdvanced("aboutUpgradeUpdatingChannelSwitch",{substitutions:[this.i18nAdvanced(browserChannelToI18nId(this.targetChannel_,this.isLts_)).toString(),progressPercent]})}if(this.currentUpdateStatusEvent_.rollback){return this.i18nAdvanced("aboutRollbackInProgress",{substitutions:[this.deviceManager_,progressPercent]})}if(this.currentUpdateStatusEvent_.progress>0){return this.i18nAdvanced("aboutUpgradeUpdatingPercent",{substitutions:[progressPercent]})}return this.i18nAdvanced("aboutUpgradeUpdating");case UpdateStatus.FAILED_HTTP:return this.i18nAdvanced("aboutUpgradeTryAgain");case UpdateStatus.FAILED_DOWNLOAD:return this.i18nAdvanced("aboutUpgradeDownloadError");case UpdateStatus.DISABLED_BY_ADMIN:return this.i18nAdvanced("aboutUpgradeAdministrator");case UpdateStatus.UPDATE_TO_ROLLBACK_VERSION_DISALLOWED:return this.i18nAdvanced("aboutUpdateToRollbackVersionDisallowed");case UpdateStatus.DEFERRED:return this.i18nAdvanced("aboutUpgradeNotUpToDate");default:let result="";const message=this.currentUpdateStatusEvent_.message;if(message){result+=message}const connectMessage=this.currentUpdateStatusEvent_.connectionTypes;if(connectMessage){result+=`<div>${connectMessage}</div>`}return sanitizeInnerHtml(result,{tags:["br","pre"]})}}getUpdateStatusIcon_(){if(this.hasEndOfLife_){return"os-settings:end-of-life"}if(this.showExtendedUpdatesOption_){return"os-settings:about-update-complete"}switch(this.currentUpdateStatusEvent_.status){case UpdateStatus.DISABLED_BY_ADMIN:return"cr20:domain";case UpdateStatus.FAILED_DOWNLOAD:case UpdateStatus.FAILED_HTTP:case UpdateStatus.FAILED:return"os-settings:about-update-error";case UpdateStatus.UPDATED:case UpdateStatus.NEARLY_UPDATED:return"os-settings:about-update-complete";case UpdateStatus.DEFERRED:case UpdateStatus.UPDATE_TO_ROLLBACK_VERSION_DISALLOWED:return"os-settings:about-update-warning";default:return null}}getFirmwareUpdatesIcon_(){if(this.firmwareUpdateCount_===0){return""}const maxBadgeId=9;const updateBadgeId=Math.min(this.firmwareUpdateCount_,maxBadgeId);return`os-settings:counter-${updateBadgeId}`}getThrobberSrcIfUpdating_(){if(this.hasEndOfLife_||this.showExtendedUpdatesOption_){return null}switch(this.currentUpdateStatusEvent_.status){case UpdateStatus.CHECKING:case UpdateStatus.UPDATING:return this.isDarkModeActive_?"chrome://resources/images/throbber_small_dark.svg":"chrome://resources/images/throbber_small.svg";default:return null}}checkStatus_(status){return this.currentUpdateStatusEvent_.status===status}onManagementPageClick_(){window.open("chrome://management")}isPowerwash_(){return!!this.currentUpdateStatusEvent_.powerwash}onDetailedBuildInfoClick_(){Router.getInstance().navigateTo(routes.ABOUT_DETAILED_BUILD_INFO)}getRelaunchButtonText_(){if(this.checkStatus_(UpdateStatus.NEARLY_UPDATED)){return this.i18n(this.isPowerwash_()?"aboutRelaunchAndPowerwash":"aboutRelaunch")}return""}onCheckUpdatesClick_(){this.onUpdateStatusChanged_({status:UpdateStatus.CHECKING});this.aboutBrowserProxy_.requestUpdate();this.$.updateStatusMessageInner.focus()}onApplyDeferredUpdateAdvancedClick_(){this.aboutBrowserProxy_.applyDeferredUpdateAdvanced();this.$.updateStatusMessageInner.focus()}onApplyAndSetAutoUpdateClick_(){this.aboutBrowserProxy_.setConsumerAutoUpdate(true);this.onApplyDeferredUpdateAdvancedClick_()}computeShowCheckUpdates_(){if(this.showExtendedUpdatesOption_){return false}const eolPassedAndNoUpdates=this.hasEndOfLife_&&this.checkStatus_(UpdateStatus.UPDATED);const staleUpdatedStatus=!this.hasCheckedForUpdates_&&this.checkStatus_(UpdateStatus.UPDATED);return eolPassedAndNoUpdates||staleUpdatedStatus||this.checkStatus_(UpdateStatus.FAILED)||this.checkStatus_(UpdateStatus.FAILED_HTTP)||this.checkStatus_(UpdateStatus.FAILED_DOWNLOAD)||this.checkStatus_(UpdateStatus.DISABLED_BY_ADMIN)||this.checkStatus_(UpdateStatus.UPDATE_TO_ROLLBACK_VERSION_DISALLOWED)}getAboutProductOsLicense_(showCrostiniLicense){return showCrostiniLicense?this.i18nAdvanced("aboutProductOsWithLinuxLicense"):this.i18nAdvanced("aboutProductOsLicense")}handleCrostiniEnabledChanged_(enabled){this.showCrostiniLicense_=enabled&&isCrostiniSupported()}shouldShowSafetyInfo_(){return loadTimeData.getBoolean("shouldShowSafetyInfo")}shouldShowRegulatoryInfo_(){return this.regulatoryInfo_!==null}shouldShowRegulatoryOrSafetyInfo_(){return this.shouldShowSafetyInfo_()||this.shouldShowRegulatoryInfo_()}onUpdateWarningDialogClose_(){this.showUpdateWarningDialog_=false;this.hasCheckedForUpdates_=false}onTpmFirmwareUpdateStatusChanged_(event){this.showTPMFirmwareUpdateLineItem_=event.updateAvailable}onTpmFirmwareUpdateClick_(){this.showTPMFirmwareUpdateDialog_=true}onPowerwashDialogClose_(){this.showTPMFirmwareUpdateDialog_=false}onProductLogoClick_(){this.$.productLogo.animate({transform:["none","rotate(-10turn)"]},{duration:500,easing:"cubic-bezier(1, 0, 0, 1)"})}onReportIssueClick_(){this.aboutBrowserProxy_.openFeedbackDialog()}getReportIssueLabel_(){return this.i18n("aboutSendFeedback")}getFirmwareSublabel_(){return this.firmwareUpdateCount_>0?this.i18n("aboutFirmwareUpdateAvailableDescription"):this.i18n("aboutFirmwareUpToDateDescription")}computeShowExtendedUpdatesOption_(){return this.isExtendedUpdatesOptInEligible_&&this.checkStatus_(UpdateStatus.UPDATED)}updateIsExtendedUpdatesOptInEligible_(){this.aboutBrowserProxy_.isExtendedUpdatesOptInEligible(this.hasEndOfLife_,this.isExtendedUpdatesDatePassed_,this.isExtendedUpdatesOptInRequired_).then((result=>{this.isExtendedUpdatesOptInEligible_=result}))}onExtendedUpdatesSettingChanged_(){this.updateIsExtendedUpdatesOptInEligible_()}onExtendedUpdatesButtonClick_(){this.aboutBrowserProxy_.openExtendedUpdatesDialog()}registerExtendedUpdatesObserver_(){const extendedUpdatesObserver=new IntersectionObserver(((entries,observer)=>{entries.forEach((entry=>{if(entry.isIntersecting){this.aboutBrowserProxy_.recordExtendedUpdatesShown();observer.disconnect();return}}))}));extendedUpdatesObserver.observe(this.$.extendedUpdatesButton)}}customElements.define(OsAboutPageElement.is,OsAboutPageElement);function getTemplate$v(){return html`<!--_html_template_start_--><style include="settings-shared os-settings-icons">#pairNewDeviceBtn{margin-inline-end:20px}#statusIcon{--iron-icon-fill-color:var(--cros-sys-primary)}</style>
<template is="dom-if" if="[[!isSecondaryUser_]]">
  <div id="bluetoothSummary" class="settings-box two-line first no-padding">
    <div class="link-wrapper" actionable on-click="onWrapperClick_">
      <iron-icon id="statusIcon" icon="[[getBluetoothStatusIconName_(
            systemProperties.*, isBluetoothToggleOn_)]]">
      </iron-icon>
      <div id="bluetoothPageTitle" class="middle settings-box-text" aria-hidden="true">
        Bluetooth
        <div class="secondary" id="bluetoothSecondaryLabel">
          [[getSecondaryLabel_(LabelTypeEnum_.DISPLAYED_TEXT, systemProperties.*, isBluetoothToggleOn_)]]
        </div>
      </div>
      <template is="dom-if" if="[[shouldShowSubpageArrow_(
            systemProperties.*, isBluetoothToggleOn_)]]" restamp>
        <cr-icon-button id="arrowIconButton" class="subpage-arrow layout end" on-click="onSubpageArrowClick_" aria-label="Bluetooth" aria-description$="[[getSecondaryLabel_(
              LabelTypeEnum_.A11Y, systemProperties.*, isBluetoothToggleOn)]]" aria-roledescription="Subpage button">
        </cr-icon-button>
      </template>
    </div>
    <div class="separator"></div>
    <cr-toggle id="enableBluetoothToggle" class="margin-matches-padding" checked="{{isBluetoothToggleOn_}}" on-change="onBluetoothToggleChange_" disabled$="[[isToggleDisabled_(systemProperties.systemState)]]" aria-label="Bluetooth enable">
    </cr-toggle>
  </div>

  <template is="dom-if" if="[[shouldShowPairNewDevice_(systemProperties.*)]]" restamp>
    <div id="pairNewDevice" class="settings-box no-padding" actionable on-click="onPairNewDeviceBtnClick_">
      <div id="pairNewDeviceLabel" class="middle settings-box-text" aria-hidden="true">
        Pair new device
      </div>
      <cr-icon-button id="pairNewDeviceBtn" on-click="onPairNewDeviceBtnClick_" class="icon-pair-bluetooth layout end" aria-labelledby="pairNewDeviceLabel">
      </cr-icon-button>
    </div>
  </template>
</template>

<template is="dom-if" if="[[isSecondaryUser_]]">
  <div id="bluetoothSummarySeconday" class="settings-box two-line">
    <iron-icon class="policy" icon="cr:group"></iron-icon>
    <div id="bluetoothSummarySecondayText" class="middle settings-box-text">
      [[i18n('bluetoothPrimaryUserControlled', primaryUserEmail_)]]
    </div>
  </div>
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var LabelType;(function(LabelType){LabelType[LabelType["A11Y"]=1]="A11Y";LabelType[LabelType["DISPLAYED_TEXT"]=2]="DISPLAYED_TEXT"})(LabelType||(LabelType={}));const SettingsBluetoothSummaryElementBase=RouteOriginMixin(I18nMixin(PolymerElement));class SettingsBluetoothSummaryElement extends SettingsBluetoothSummaryElementBase{static get is(){return"os-settings-bluetooth-summary"}static get template(){return getTemplate$v()}static get properties(){return{systemProperties:{type:Object,observer:"onSystemPropertiesChanged_"},isBluetoothToggleOn_:{type:Boolean,observer:"onIsBluetoothToggleOnChanged_"},LabelTypeEnum_:{type:Object,value:LabelType},isSecondaryUser_:{type:Boolean,value(){return loadTimeData.getBoolean("isSecondaryUser")},readOnly:true},primaryUserEmail_:{type:String,value(){return loadTimeData.getString("primaryUserEmail")},readOnly:true}}}constructor(){super();this.route=routes.BLUETOOTH;this.browserProxy_=OsBluetoothDevicesSubpageBrowserProxyImpl.getInstance()}ready(){super.ready();this.addFocusConfig(routes.BLUETOOTH_DEVICES,".subpage-arrow")}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute===this.route){this.browserProxy_.showBluetoothRevampHatsSurvey()}}onSystemPropertiesChanged_(){this.isBluetoothToggleOn_=this.systemProperties.systemState===BluetoothSystemState.kEnabled||this.systemProperties.systemState===BluetoothSystemState.kEnabling}onIsBluetoothToggleOnChanged_(_newValue,oldValue){if(oldValue===undefined){return}getInstance().announce(this.isBluetoothToggleOn_?this.i18n("bluetoothEnabledA11YLabel"):this.i18n("bluetoothDisabledA11YLabel"))}isToggleDisabled_(){if(!this.systemProperties){return false}return this.systemProperties.systemState===BluetoothSystemState.kUnavailable}getSecondaryLabel_(labelType){if(!this.isBluetoothToggleOn_){return this.i18n("bluetoothSummaryPageOff")}const connectedDevices=this.getConnectedDevices_();if(!connectedDevices.length){return this.i18n("bluetoothSummaryPageOn")}const isA11yLabel=labelType===LabelType.A11Y;const firstConnectedDeviceName=getDeviceNameUnsafe(connectedDevices[0]);if(connectedDevices.length===1){return isA11yLabel?loadTimeData.getStringF("bluetoothSummaryPageConnectedA11yOneDevice",firstConnectedDeviceName):firstConnectedDeviceName}if(connectedDevices.length===2){const secondConnectedDeviceName=getDeviceNameUnsafe(connectedDevices[1]);return isA11yLabel?loadTimeData.getStringF("bluetoothSummaryPageConnectedA11yTwoDevices",firstConnectedDeviceName,secondConnectedDeviceName):loadTimeData.getStringF("bluetoothSummaryPageTwoDevicesDescription",firstConnectedDeviceName,secondConnectedDeviceName)}return isA11yLabel?loadTimeData.getStringF("bluetoothSummaryPageConnectedA11yTwoOrMoreDevices",firstConnectedDeviceName,connectedDevices.length-1):loadTimeData.getStringF("bluetoothSummaryPageTwoOrMoreDevicesDescription",firstConnectedDeviceName,connectedDevices.length-1)}getConnectedDevices_(){const pairedDevices=this.systemProperties.pairedDevices;if(!pairedDevices){return[]}return pairedDevices.filter((device=>device.deviceProperties.connectionState===DeviceConnectionState.kConnected))}getBluetoothStatusIconName_(){if(!this.isBluetoothToggleOn_){return"os-settings:bluetooth-disabled"}if(this.getConnectedDevices_().length){return"os-settings:bluetooth-connected"}return"cr:bluetooth"}shouldShowSubpageArrow_(){if(this.isToggleDisabled_()){return false}return this.isBluetoothToggleOn_}onSubpageArrowClick_(e){this.navigateToBluetoothDevicesSubpage_();e.stopPropagation()}navigateToBluetoothDevicesSubpage_(){Router.getInstance().navigateTo(routes.BLUETOOTH_DEVICES)}onWrapperClick_(){if(this.isToggleDisabled_()){return}if(this.systemProperties.systemState===BluetoothSystemState.kDisabled||this.systemProperties.systemState===BluetoothSystemState.kDisabling){this.updateBluetoothState_(true);return}this.navigateToBluetoothDevicesSubpage_()}onPairNewDeviceBtnClick_(){this.dispatchEvent(new CustomEvent("start-pairing",{bubbles:true,composed:true}))}onBluetoothToggleChange_(event){event.stopPropagation();if(this.isToggleDisabled_()){return}this.updateBluetoothState_(event.detail)}updateBluetoothState_(enabled){this.isBluetoothToggleOn_=!enabled;getHidPreservingController().tryToSetBluetoothEnabledState(enabled,HidWarningDialogSource.kOsSettings);this.browserProxy_.showBluetoothRevampHatsSurvey()}shouldShowPairNewDevice_(){if(!this.systemProperties){return false}return this.systemProperties.systemState===BluetoothSystemState.kEnabled}}customElements.define(SettingsBluetoothSummaryElement.is,SettingsBluetoothSummaryElement);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const IronRangeBehavior={properties:{value:{type:Number,value:0,notify:true,reflectToAttribute:true},min:{type:Number,value:0,notify:true},max:{type:Number,value:100,notify:true},step:{type:Number,value:1,notify:true},ratio:{type:Number,value:0,readOnly:true,notify:true}},observers:["_update(value, min, max, step)"],_calcRatio:function(value){return(this._clampValue(value)-this.min)/(this.max-this.min)},_clampValue:function(value){return Math.min(this.max,Math.max(this.min,this._calcStep(value)))},_calcStep:function(value){value=parseFloat(value);if(!this.step){return value}var numSteps=Math.round((value-this.min)/this.step);if(this.step<1){return numSteps/(1/this.step)+this.min}else{return numSteps*this.step+this.min}},_validateValue:function(){var v=this._clampValue(this.value);this.value=this.oldValue=isNaN(v)?this.oldValue:v;return this.value!==v},_update:function(){this._validateValue();this._setRatio(this._calcRatio(this.value)*100)}};
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/Polymer({_template:html`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
        --google-green-100: #b7e1cd;
        --google-green-500: #0f9d58;
        --google-grey-300: #e0e0e0;
        --google-grey-500: #9e9e9e;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        transition-property: transform;

        /* Duration */
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        transform-origin: left center;
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        transform-origin: right center;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        transform-origin: center center;

        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
        }
        50% {
        }
        75% {
        }
        100% {
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
        }
        30% {
        }
        90% {
        }
        100% {
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[IronRangeBehavior],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:true},indeterminate:{type:Boolean,value:false,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:false,reflectToAttribute:true,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(indeterminate){this.toggleClass("indeterminate",indeterminate,this.$.primaryProgress)},_transformProgress:function(progress,ratio){var transform="scaleX("+ratio/100+")";progress.style.transform=progress.style.webkitTransform=transform},_mainRatioChanged:function(ratio){this._transformProgress(this.$.primaryProgress,ratio)},_progressChanged:function(secondaryProgress,value,min,max,indeterminate){secondaryProgress=this._clampValue(secondaryProgress);value=this._clampValue(value);var secondaryRatio=this._calcRatio(secondaryProgress)*100;var mainRatio=this._calcRatio(value)*100;this._setSecondaryRatio(secondaryRatio);this._transformProgress(this.$.secondaryProgress,secondaryRatio);this._transformProgress(this.$.primaryProgress,mainRatio);this.secondaryProgress=secondaryProgress;if(indeterminate){this.removeAttribute("aria-valuenow")}else{this.setAttribute("aria-valuenow",value)}this.setAttribute("aria-valuemin",min);this.setAttribute("aria-valuemax",max)},_disabledChanged:function(disabled){this.setAttribute("aria-disabled",disabled?"true":"false")},_hideSecondaryProgress:function(secondaryRatio){return secondaryRatio===0}});function getTemplate$u(){return html`<!--_html_template_start_--><style include="iron-positioning cros-color-overrides">
  :host ::slotted([slot='page-body']) {
    color: var(--cr-primary-text-color);
    height: 292px;
  }

  paper-progress {
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    --paper-progress-active-color: var(--cros-icon-color-prominent);
    --paper-progress-container-color: rgba(var(--cros-icon-color-prominent-rgb),
                                           var(--cros-second-tone-opacity));
  }

  :host-context(body.jelly-enabled) paper-progress {
    --paper-progress-active-color: var(--cros-color-primary);
    --paper-progress-container-color: var(--cros-highlight-color);
  }

  #buttonBar {
    align-self: flex-end;
    margin-top: 30px;
  }

  #container {
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 0 8px 8px 8px;
  }

  #title {
    color: var(--cr-primary-text-color);
    font-weight: normal;
    line-height: 24px;
    margin: 24px 0 8px 0;
  }

  .cancel-button {
    margin-inline-end: 0;
  }

  .action-button {
    margin-inline-end: 0;
    margin-inline-start: 8px;
  }
</style>
<div id="container">
  <template is="dom-if" if="[[showScanProgress]]" restamp>
    <paper-progress indeterminate>
    </paper-progress>
  </template>
  <h3 id="title">[[i18n('bluetoothPairNewDevice')]]</h3>
  <slot name="page-body" id="pageBody"></slot>
  <div id="buttonBar">
    <template  is="dom-if"
        if="[[shouldShowButton_(ButtonName.CANCEL, buttonBarState.*)]]" restamp>
      <cr-button
          id="cancel"
          class="cancel-button"
          on-click="onCancelClick_"
          disabled$="[[isButtonDisabled_(ButtonName.CANCEL, buttonBarState.*)]]">
        [[i18n('cancel')]]
      </cr-button>
    </template>
    <template is="dom-if"
        if="[[shouldShowButton_(ButtonName.PAIR, buttonBarState.*)]]" restamp>
      <cr-button
          id="pair"
          class="action-button"
          on-click="onPairClick_"
          disabled$="[[isButtonDisabled_(ButtonName.PAIR, buttonBarState.*)]]">
        [[i18n('bluetoothPair')]]
      </cr-button>
    </template>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothBasePageElementBase=I18nMixin(PolymerElement);class SettingsBluetoothBasePageElement extends SettingsBluetoothBasePageElementBase{static get is(){return"bluetooth-base-page"}static get template(){return getTemplate$u()}static get properties(){return{buttonBarState:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.HIDDEN}},showScanProgress:{type:Boolean,value:false},ButtonName:{type:Object,value:ButtonName},focusDefault:{type:Boolean,value:false}}}connectedCallback(){super.connectedCallback();afterNextRender(this,(()=>this.focus()))}focus(){super.focus();if(!this.focusDefault){return}const buttons=this.shadowRoot.querySelectorAll("cr-button");for(let i=buttons.length-1;i>=0;i--){const button=buttons.item(i);if(!button.disabled){focusWithoutInk(button);return}}}onCancelClick_(){this.dispatchEvent(new CustomEvent("cancel",{bubbles:true,composed:true}))}onPairClick_(){this.dispatchEvent(new CustomEvent("pair",{bubbles:true,composed:true}))}shouldShowButton_(buttonName){const state=this.getButtonBarState_(buttonName);return state!==ButtonState$1.HIDDEN}isButtonDisabled_(buttonName){const state=this.getButtonBarState_(buttonName);return state===ButtonState$1.DISABLED}getButtonBarState_(buttonName){switch(buttonName){case ButtonName.CANCEL:return this.buttonBarState.cancel;case ButtonName.PAIR:return this.buttonBarState.pair;default:return ButtonState$1.ENABLED}}}customElements.define(SettingsBluetoothBasePageElement.is,SettingsBluetoothBasePageElement);function getTemplate$t(){return html`<!--_html_template_start_--><style include="cr-shared-style">
  :host([pairing-failed_]) #secondaryLabel {
    color: var(--cros-text-color-alert);
  }

  bluetooth-icon {
    align-self: center;
    justify-self: center;
  }

  #deviceName {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 404px;
  }

  #container:hover {
    background-color: var(--cr-hover-background-color);
    cursor: pointer;
  }

  .text-row {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-inline-start: 24px;
    max-height: 48px;
  }

  .cr-row {
    padding: 0;
  }

  .secondary {
    color: var(--cros-text-color-disabled);
    font-size: 11px;
  }

</style>
<div id="wrapper" focus-row-container>
  <div id="container"
      class="cr-row continuation"
      actionable
      focus-row-control
      selectable
      aria-label$="[[getAriaLabel_(device.*, itemIndex, listSize)]]"
      role="button"
      focus-type="rowWrapper"
      on-keydown="onKeydown_"
      on-click="onSelected_">
    <bluetooth-icon device="[[device]]"></bluetooth-icon>
    <div aria-live="polite"
        id="textRow"
        aria-label="[[getSecondaryAriaLabel_(
          secondaryLabel_, pairingFailed_, device.*)]]"
        class="text-row">
      <div id="deviceName" aria-hidden="true">
        [[getDeviceName_(device.*)]]
      </div>
      <div id="secondaryLabel"
          aria-hidden="true"
          class="secondary">
        [[secondaryLabel_]]
      </div>
    </div>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPairingDeviceItemElementBase=FocusRowMixin(I18nMixin(PolymerElement));class SettingsBluetoothPairingDeviceItemElement extends SettingsBluetoothPairingDeviceItemElementBase{static get is(){return"bluetooth-pairing-device-item"}static get template(){return getTemplate$t()}static get properties(){return{device:Object,deviceItemState:{type:Object,value:DeviceItemState.DEFAULT},itemIndex:Number,listSize:Number,secondaryLabel_:{type:String,computed:"computeSecondaryLabel_(deviceItemState)"},pairingFailed_:{reflectToAttribute:true,type:Boolean,computed:"computePairingFailed_(deviceItemState)"}}}focus(){this.$.container.focus({preventScroll:true})}computePairingFailed_(){return this.deviceItemState===DeviceItemState.FAILED}getDeviceName_(){if(!this.device){return""}return mojoString16ToString(this.device.publicName)}onSelected_(event){this.dispatchPairDeviceEvent_();event.stopPropagation()}onKeydown_(event){if(event.key!=="Enter"&&event.key!==" "){return}this.dispatchPairDeviceEvent_();event.stopPropagation()}computeSecondaryLabel_(){switch(this.deviceItemState){case DeviceItemState.FAILED:return this.i18n("bluetoothPairingFailed");case DeviceItemState.PAIRING:return this.i18n("bluetoothPairing");case DeviceItemState.DEFAULT:return"";default:return""}}dispatchPairDeviceEvent_(){this.dispatchEvent(new CustomEvent("pair-device",{bubbles:true,composed:true,detail:{device:this.device}}))}getAriaLabel_(){if(!this.device){return""}return this.i18n("bluetoothA11yDeviceName",this.itemIndex+1,this.listSize,this.getDeviceName_())+" "+this.i18n(this.getA11yDeviceTypeTextName_())}getA11yDeviceTypeTextName_(){switch(this.device.deviceType){case DeviceType.kUnknown:return"bluetoothA11yDeviceTypeUnknown";case DeviceType.kComputer:return"bluetoothA11yDeviceTypeComputer";case DeviceType.kPhone:return"bluetoothA11yDeviceTypePhone";case DeviceType.kHeadset:return"bluetoothA11yDeviceTypeHeadset";case DeviceType.kVideoCamera:return"bluetoothA11yDeviceTypeVideoCamera";case DeviceType.kGameController:return"bluetoothA11yDeviceTypeGameController";case DeviceType.kKeyboard:return"bluetoothA11yDeviceTypeKeyboard";case DeviceType.kKeyboardMouseCombo:return"bluetoothA11yDeviceTypeKeyboardMouseCombo";case DeviceType.kMouse:return"bluetoothA11yDeviceTypeMouse";case DeviceType.kTablet:return"bluetoothA11yDeviceTypeTablet";default:return""}}getSecondaryAriaLabel_(){const deviceName=this.getDeviceName_();switch(this.deviceItemState){case DeviceItemState.FAILED:return this.i18n("bluetoothPairingDeviceItemSecondaryErrorA11YLabel",deviceName);case DeviceItemState.PAIRING:return this.i18n("bluetoothPairingDeviceItemSecondaryPairingA11YLabel",deviceName);case DeviceItemState.DEFAULT:return"";default:assertNotReached()}}}customElements.define(SettingsBluetoothPairingDeviceItemElement.is,SettingsBluetoothPairingDeviceItemElement);function getTemplate$s(){return html`<!--_html_template_start_--><style include="cr-shared-style">
  localized-link,
  #learn-more-description {
    color: var(--cros-text-color-secondary);
  }

  #container {
    height: 200px;
  }

  #deviceListTitle {
    color: var(--cros-text-color-secondary);
    font-size: 14px;
    font-weight: 500;
    margin: 20px 0 8px 0;
  }
</style>
<bluetooth-base-page
    show-scan-progress="[[isBluetoothEnabled]]"
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <template is="dom-if" if="[[!shouldOmitLinks]]" restamp>
      <localized-link
          localized-string="[[i18nAdvanced('bluetoothPairingLearnMoreLabel')]]">
      </localized-link>
    </template>
    <template is="dom-if" if="[[shouldOmitLinks]]" restamp>
      <div id="learn-more-description" aria-live="polite">
        [[i18n('bluetoothPairingDescription')]]
      </div>
    </template>
    <h2 id="deviceListTitle" aria-live="polite">
      [[getDeviceListTitle_(devices.*, isBluetoothEnabled, devicePendingPairing.*)]]
    </h2>
    <template  is="dom-if" if="[[shouldShowDeviceList_(devices.*,
        isBluetoothEnabled)]]" restamp>
      <div id="container" class="layout vertical flex" scrollable
          no-bottom-scroll-border>
          <iron-list items="[[devices]]"
              preserve-focus>
            <template>
              <bluetooth-pairing-device-item
                  item="[[item]]"
                  device="[[item]]"
                  device-item-state="[[getDeviceItemState_(
                      item, devicePendingPairing.*, failedPairingDeviceId)]]"
                  tabindex$="[[tabIndex]]"
                  focus-row-index="[[index]]"
                  iron-list-tab-index="[[tabIndex]]"
                  last-focused="{{lastFocused_}}"
                  list-blurred="{{listBlurred_}}"
                  item-index="[[index]]"
                  list-size="[[devices.length]]" >
              </bluetooth-pairing-device-item>
            </template>
          </iron-list>
      </div>
    </template>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPairingDeviceSelectionPageElementBase=I18nMixin(CrScrollableMixin(PolymerElement));class SettingsBluetoothPairingDeviceSelectionPageElement extends SettingsBluetoothPairingDeviceSelectionPageElementBase{static get is(){return"bluetooth-pairing-device-selection-page"}static get template(){return getTemplate$s()}static get properties(){return{devices:{type:Array,value:[],observer:"onDevicesChanged_"},failedPairingDeviceId:{type:String,value:""},devicePendingPairing:{type:Object,value:null,observer:"onDevicePendingPairingChanged_"},isBluetoothEnabled:{type:Boolean,value:false},shouldOmitLinks:{type:Boolean,value:false},buttonBarState_:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.HIDDEN}},lastFocused_:Object,listBlurred_:Boolean}}constructor(){super();this.lastSelectedDevice_=null}attemptFocusLastSelectedItem(){if(!this.lastSelectedDevice_){return}const index=this.devices.findIndex((device=>device.id===this.lastSelectedDevice_.id));if(index<0){return}afterNextRender(this,(()=>{const items=this.shadowRoot.querySelectorAll("bluetooth-pairing-device-item");if(index>=items.length){return}items[index].focus()}))}onDevicesChanged_(){this.updateScrollableContents()}onDevicePendingPairingChanged_(){if(!this.devicePendingPairing){return}this.lastSelectedDevice_=this.devicePendingPairing}shouldShowDeviceList_(){return this.isBluetoothEnabled&&this.devices&&this.devices.length>0}getDeviceListTitle_(){if(!this.isBluetoothEnabled){return this.i18n("bluetoothDisabled")}if(!this.devicePendingPairing&&!this.shouldShowDeviceList_()){return this.i18n("bluetoothNoAvailableDevices")}if(this.shouldShowDeviceList_()||this.devicePendingPairing){return this.i18n("bluetoothAvailableDevices")}return this.i18n("bluetoothNoAvailableDevices")}getDeviceItemState_(device){if(!device){return DeviceItemState.DEFAULT}if(device.id===this.failedPairingDeviceId){return DeviceItemState.FAILED}if(this.devicePendingPairing&&device.id===this.devicePendingPairing.id){return DeviceItemState.PAIRING}return DeviceItemState.DEFAULT}}customElements.define(SettingsBluetoothPairingDeviceSelectionPageElement.is,SettingsBluetoothPairingDeviceSelectionPageElement);function getTemplate$r(){return html`<!--_html_template_start_--><style include="cr-hidden-style iron-flex">
  span {
    background-color: var(--cros-bg-color-dropped-elevation-2);
    border-radius: 4px;
    font-size: 20px;
    height: 40px;
    text-align: center;
  }

  span.next {
    background-color: var(--cros-text-color-secondary);
    color: var(--cros-slider-label-text-color);
  }

  span.typed {
    background: var(--cros-bg-color-dropped-elevation-1);
    color: var(--cros-text-color-secondary);
  }

  #code {
    display: flex;
    flex-wrap: wrap;
    margin-inline: 30px;
  }

  #message {
    margin-bottom: 24px;
  }

  .center {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .enter {
    font-weight: 500;
    margin-bottom: 8px;
    padding: 0 12px;
  }

  .key {
    border-radius: 4px;
    font-weight: 400;
    margin-bottom: 16px;
    margin-inline-end: 8px;
    margin-top: 8px;
    width: 40px;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    focus-default
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody" class="center" aria-live="polite">
    <div id="message">
      [[getMessage_(deviceName)]]
    </div>
    <div id="code" class="layout horizontal center center-justified">
      <dom-repeat items="[[keys_]]">
        <template>
          <span class$="center key [[getKeyClass_(index, numKeysEntered)]]">
            [[getKeyAt_(index, keys_)]]
          </span>
        </template>
      </dom-repeat>
      <span id="enter"
          class$="center enter [[getEnterClass_(numKeysEntered, keys_)]]">
        [[i18n('bluetoothEnterKey')]]
      </span>
    </div>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_CODE_LENGTH=16;const SettingsBluetoothPairingEnterCodeElementBase=I18nMixin(PolymerElement);class SettingsBluetoothPairingEnterCodeElement extends SettingsBluetoothPairingEnterCodeElementBase{static get is(){return"bluetooth-pairing-enter-code-page"}static get template(){return getTemplate$r()}static get properties(){return{deviceName:{type:String,value:""},code:{type:String,value:""},numKeysEntered:{type:Number,value:0},buttonBarState_:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.HIDDEN}},keys_:{type:Array,computed:"computeKeys_(code)"}}}focus(){super.focus();const elem=this.shadowRoot?.querySelector("bluetooth-base-page");if(elem){elem.focus()}}computeKeys_(){if(!this.code){return[]}assert(this.code.length<=MAX_CODE_LENGTH);return this.code.split("")}getKeyAt_(index){return this.keys_[index]}getKeyClass_(index){if(!this.keys_||!this.numKeysEntered){return""}if(index===this.numKeysEntered){return"next"}else if(index<this.numKeysEntered){return"typed"}return""}getEnterClass_(){if(!this.keys_||!this.numKeysEntered){return""}if(this.numKeysEntered>=this.keys_.length){return"next"}return""}getMessage_(){return this.i18n("bluetoothPairingEnterKeys",this.deviceName)}}customElements.define(SettingsBluetoothPairingEnterCodeElement.is,SettingsBluetoothPairingEnterCodeElement);function getTemplate$q(){return html`<!--_html_template_start_--><style>
  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #message {
    margin-bottom: 56px;
  }

  #pin {
    width: 336px;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <div id="message">
      [[getMessage_(device.*)]]
    </div>
    <cr-input
        id="pin"
        minlength="1"
        maxlength="[[getMaxlength_(authType)]]"
        type="text"
        aria-label="[[getMessage_(device.*)]]"
        value="{{pinCode_}}"
        auto-validate >
    </cr-input>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const PIN_CODE_MAX_LENGTH=6;const PASSKEY_MAX_LENGTH=16;const SettingsBluetoothPairingRequestCodePageElementBase=I18nMixin(PolymerElement);class SettingsBluetoothRequestCodePageElement extends SettingsBluetoothPairingRequestCodePageElementBase{static get is(){return"bluetooth-pairing-request-code-page"}static get template(){return getTemplate$q()}static get properties(){return{device:{type:Object,value:null},authType:{type:Object,value:null},buttonBarState_:{type:Object,computed:"computeButtonBarState_(pinCode_)"},pinCode_:{type:String,value:""}}}connectedCallback(){super.connectedCallback();afterNextRender(this,(()=>{this.$.pin.focus()}))}getMessage_(){return this.i18n("bluetoothEnterPin",this.getDeviceName_())}getDeviceName_(){if(!this.device){return""}return mojoString16ToString(this.device.publicName)}computeButtonBarState_(){const pairButtonState=!this.pinCode_?ButtonState$1.DISABLED:ButtonState$1.ENABLED;return{cancel:ButtonState$1.ENABLED,pair:pairButtonState}}onPairClicked_(event){event.stopPropagation();if(!this.pinCode_){return}this.dispatchEvent(new CustomEvent("request-code-entered",{bubbles:true,composed:true,detail:{code:this.pinCode_}}))}getMaxlength_(){if(this.authType===PairingAuthType.REQUEST_PIN_CODE){return PIN_CODE_MAX_LENGTH}return PASSKEY_MAX_LENGTH}}customElements.define(SettingsBluetoothRequestCodePageElement.is,SettingsBluetoothRequestCodePageElement);function getTemplate$p(){return html`<!--_html_template_start_--><style>
   #code {
    font-size: 24px;
    margin-top: 40px;
  }

  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
<bluetooth-base-page
    on-pair="onPairClicked_"
    focus-default
    button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <div id="message" aria-live="polite">
      [[i18n('bluetoothConfirmCodeMessage')]]
    </div>
    <div id="code">[[code]]</div>
  </div>
</bluetooth-base-page><!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPairingConfirmCodePageElementBase=I18nMixin(PolymerElement);class SettingsBluetoothPairingConfirmCodePageElement extends SettingsBluetoothPairingConfirmCodePageElementBase{static get is(){return"bluetooth-pairing-confirm-code-page"}static get template(){return getTemplate$p()}static get properties(){return{code:{type:String,value:""},buttonBarState_:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.ENABLED}}}}onPairClicked_(event){event.stopPropagation();this.dispatchEvent(new CustomEvent("confirm-code",{bubbles:true,composed:true}))}}customElements.define(SettingsBluetoothPairingConfirmCodePageElement.is,SettingsBluetoothPairingConfirmCodePageElement);function getTemplate$o(){return html`<!--_html_template_start_--><style>
  #pageBody {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  paper-spinner-lite {
    height: 190px;
    width: 190px;
  }
</style>
<bluetooth-base-page  button-bar-state="[[buttonBarState_]]">
  <div slot="page-body" id="pageBody">
    <paper-spinner-lite active>
    </paper-spinner-lite>
  </div>
</bluetooth-base-page>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsBluetoothSpinnerPageElement extends PolymerElement{static get is(){return"bluetooth-spinner-page"}static get template(){return getTemplate$o()}static get properties(){return{buttonBarState_:{type:Object,value:{cancel:ButtonState$1.ENABLED,pair:ButtonState$1.DISABLED}}}}}customElements.define(SettingsBluetoothSpinnerPageElement.is,SettingsBluetoothSpinnerPageElement);function getTemplate$n(){return html`<!--_html_template_start_--><style>
  #container {
    height: 408px;
  }
</style>
<div id="container">
  <iron-pages
      attr-for-selected="id"
      on-cancel="onCancelClick_"
      selected="[[selectedPageId_]]">
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_SELECTION_PAGE, selectedPageId_)]]">
      <bluetooth-pairing-device-selection-page
          failed-pairing-device-id="[[lastFailedPairingDeviceId_]]"
          devices="[[discoveredDevices_]]"
          device-pending-pairing="[[devicePendingPairing_]]"
          on-pair-device="onPairDevice_"
          is-bluetooth-enabled="[[isBluetoothEnabled_]]"
          should-omit-links="[[shouldOmitLinks]]"
          id="deviceSelectionPage">
      </bluetooth-pairing-device-selection-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_REQUEST_CODE_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-pairing-request-code-page
          auth-type="pairingAuthType_"
          on-request-code-entered="onRequestCodeEntered_"
          device="[[devicePendingPairing_]]"
          id="deviceRequestCodePage">
      </bluetooth-pairing-request-code-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_CONFIRM_CODE_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-pairing-confirm-code-page
          on-confirm-code="onConfirmCode_"
          code="[[pairingCode_]]"
          id="deviceConfirmCodePage">
      </bluetooth-pairing-confirm-code-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.DEVICE_ENTER_CODE_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-pairing-enter-code-page
          code="[[pairingCode_]]"
          num-keys-entered="[[numKeysEntered_]]"
          device-name="[[getDeviceName_(devicePendingPairing_.*)]]"
          id="deviceEnterCodePage">
      </bluetooth-pairing-enter-code-page>
    </template>
    <template is="dom-if" if="[[shouldShowSubpage_(
        SubpageId.SPINNER_PAGE, selectedPageId_)]]" restamp>
      <bluetooth-spinner-page id="spinnerPage">
      </bluetooth-spinner-page>
    </template>
  </iron-pages>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class KeyEnteredHandler{constructor(page,keyEnteredHandlerReceiver){this.page_=page;this.keyEnteredHandlerReceiver_=new KeyEnteredHandlerReceiver(this);this.keyEnteredHandlerReceiver_.$.bindHandle(keyEnteredHandlerReceiver.handle)}handleKeyEntered(numKeysEntered){this.page_.handleKeyEntered(numKeysEntered)}close(){this.keyEnteredHandlerReceiver_.$.close()}}var BluetoothPairingSubpageId;(function(BluetoothPairingSubpageId){BluetoothPairingSubpageId["DEVICE_SELECTION_PAGE"]="deviceSelectionPage";BluetoothPairingSubpageId["DEVICE_ENTER_CODE_PAGE"]="deviceEnterCodePage";BluetoothPairingSubpageId["DEVICE_REQUEST_CODE_PAGE"]="deviceRequestCodePage";BluetoothPairingSubpageId["DEVICE_CONFIRM_CODE_PAGE"]="deviceConfirmCodePage";BluetoothPairingSubpageId["SPINNER_PAGE"]="spinnerPage"})(BluetoothPairingSubpageId||(BluetoothPairingSubpageId={}));class SettingsBluetoothPairingUiElement extends PolymerElement{static get is(){return"bluetooth-pairing-ui"}static get template(){return getTemplate$n()}static get properties(){return{pairingDeviceAddress:{type:String,value:null},shouldOmitLinks:{type:Boolean,value:false},selectedPageId_:{type:String,value:BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE,observer:"onSelectedPageIdChanged_"},discoveredDevices_:{type:Array,value:[]},devicePendingPairing_:{type:Object,value:null},pairingAuthType_:{type:Object,value:null},pairingCode_:{type:String,value:""},numKeysEntered_:{type:Number,value:0},lastFailedPairingDeviceId_:{type:String,value:""},isBluetoothEnabled_:{type:Boolean,value:false},SubpageId:{type:Object,value:BluetoothPairingSubpageId}}}constructor(){super();this.pairingDelegateReceiver_=null;this.requestCodeCallback_=null;this.keyEnteredReceiver_=null;this.confirmCodeCallback_=null;this.onBluetoothDiscoveryStartedCallbackForTest_=null;this.handlePairDeviceResultCallbackForTest_=null;this.systemPropertiesObserverReceiver_=new SystemPropertiesObserverReceiver(this);this.bluetoothDiscoveryDelegateReceiver_=new BluetoothDiscoveryDelegateReceiver(this)}ready(){super.ready();if(this.pairingDeviceAddress){this.selectedPageId_=BluetoothPairingSubpageId.SPINNER_PAGE}}connectedCallback(){super.connectedCallback();getBluetoothConfig().observeSystemProperties(this.systemPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote())}disconnectedCallback(){super.disconnectedCallback();if(this.systemPropertiesObserverReceiver_){this.systemPropertiesObserverReceiver_.$.close()}if(this.bluetoothDiscoveryDelegateReceiver_){this.bluetoothDiscoveryDelegateReceiver_.$.close()}if(this.pairingDelegateReceiver_){this.pairingDelegateReceiver_.$.close()}if(this.keyEnteredReceiver_){this.keyEnteredReceiver_.close()}}onPropertiesUpdated(properties){const wasBluetoothEnabled=this.isBluetoothEnabled_;this.isBluetoothEnabled_=properties.systemState===BluetoothSystemState.kEnabled;if(!wasBluetoothEnabled&&this.isBluetoothEnabled_){this.lastFailedPairingDeviceId_="";getBluetoothConfig().startDiscovery(this.bluetoothDiscoveryDelegateReceiver_.$.bindNewPipeAndPassRemote())}}onDiscoveredDevicesListChanged(discoveredDevices){this.discoveredDevices_=discoveredDevices;this.updateLastFailedPairingDeviceId_(discoveredDevices);if(!this.pairingDeviceAddress){return}if(this.pairingDelegateReceiver_){return}this.attemptPairDeviceByAddress_()}updateLastFailedPairingDeviceId_(devices){if(devices.some((device=>device.id===this.lastFailedPairingDeviceId_))){return}this.lastFailedPairingDeviceId_=""}onBluetoothDiscoveryStarted(handler){this.devicePairingHandler_=handler;if(this.onBluetoothDiscoveryStartedCallbackForTest_){this.onBluetoothDiscoveryStartedCallbackForTest_()}}onBluetoothDiscoveryStopped(){this.bluetoothDiscoveryDelegateReceiver_.$.close();this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;this.devicePairingHandler_=null}waitForOnBluetoothDiscoveryStartedForTest(){return new Promise((resolve=>{this.onBluetoothDiscoveryStartedCallbackForTest_=resolve}))}waitForHandlePairDeviceResultForTest(){return new Promise((resolve=>{this.handlePairDeviceResultCallbackForTest_=resolve}))}onPairDevice_(event){if(!event.detail.device){return}if(this.pairingDelegateReceiver_){this.queuedDevicePendingPairing_=event.detail.device;this.pairingDelegateReceiver_.$.close();return}this.pairDevice_(event.detail.device)}attemptPairDeviceByAddress_(){assert(this.pairingDeviceAddress);assert(!this.pairingDelegateReceiver_);if(!this.devicePairingHandler_){console.error("Attempted pairing with no device pairing handler.");return}this.devicePairingHandler_.fetchDevice(this.pairingDeviceAddress).then((result=>{if(!result.device){console.warn("Attempted pairing with a device that was not found, address: "+this.pairingDeviceAddress);return}this.pairDevice_(result.device)}))}pairDevice_(device){assert(this.devicePairingHandler_,"devicePairingHandler_ has not been set.");this.pairingDelegateReceiver_=new DevicePairingDelegateReceiver(this);this.devicePendingPairing_=device;assert(this.devicePendingPairing_);this.lastFailedPairingDeviceId_="";this.devicePairingHandler_.pairDevice(this.devicePendingPairing_.id,this.pairingDelegateReceiver_.$.bindNewPipeAndPassRemote()).then((result=>{this.handlePairDeviceResult_(result.result)})).catch((()=>{this.handlePairDeviceResult_(PairingResult.kNonAuthFailure)}))}handlePairDeviceResult_(result){if(this.pairingDelegateReceiver_){this.pairingDelegateReceiver_.$.close()}this.pairingAuthType_=null;if(this.keyEnteredReceiver_){this.keyEnteredReceiver_.close();this.keyEnteredReceiver_=null}this.pairingDelegateReceiver_=null;if(result===PairingResult.kSuccess){this.closeDialog_();return}this.pairingDeviceAddress=null;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE;if(this.devicePendingPairing_){this.lastFailedPairingDeviceId_=this.devicePendingPairing_.id}this.devicePendingPairing_=null;if(this.queuedDevicePendingPairing_&&this.devicePairingHandler_){this.pairDevice_(this.queuedDevicePendingPairing_)}this.queuedDevicePendingPairing_=null;if(this.handlePairDeviceResultCallbackForTest_){this.handlePairDeviceResultCallbackForTest_()}}requestPinCode(){return this.requestCode_(PairingAuthType.REQUEST_PIN_CODE)}requestPasskey(){return this.requestCode_(PairingAuthType.REQUEST_PASSKEY)}requestCode_(authType){this.pairingAuthType_=authType;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_REQUEST_CODE_PAGE;this.requestCodeCallback_={reject:null,resolve:null};const promise=new Promise(((resolve,reject)=>{this.requestCodeCallback_.resolve=code=>{if(authType===PairingAuthType.REQUEST_PIN_CODE){resolve({pinCode:code});return}if(authType===PairingAuthType.REQUEST_PASSKEY){resolve({passkey:code});return}assertNotReached()};this.requestCodeCallback_.reject=reject}));return promise}onRequestCodeEntered_(event){this.selectedPageId_=BluetoothPairingSubpageId.SPINNER_PAGE;event.stopPropagation();assert(this.pairingAuthType_);assert(this.requestCodeCallback_&&this.requestCodeCallback_.resolve);this.requestCodeCallback_.resolve(event.detail.code)}displayPinCode(pinCode,handler){this.displayCode_(handler,pinCode)}displayPasskey(passkey,handler){this.displayCode_(handler,passkey)}displayCode_(handler,code){this.pairingCode_=code;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_ENTER_CODE_PAGE;this.keyEnteredReceiver_=new KeyEnteredHandler(this,handler)}handleKeyEntered(numKeysEntered){this.numKeysEntered_=numKeysEntered}confirmPasskey(passkey){this.pairingAuthType_=PairingAuthType.CONFIRM_PASSKEY;this.selectedPageId_=BluetoothPairingSubpageId.DEVICE_CONFIRM_CODE_PAGE;this.pairingCode_=passkey;this.confirmCodeCallback_={resolve:null,reject:null};return new Promise(((resolve,reject)=>{this.confirmCodeCallback_.resolve=()=>{resolve({confirmed:true})};this.confirmCodeCallback_.reject=reject}))}onConfirmCode_(event){this.selectedPageId_=BluetoothPairingSubpageId.SPINNER_PAGE;event.stopPropagation();assert(this.pairingAuthType_);assert(this.confirmCodeCallback_&&this.confirmCodeCallback_.resolve);this.confirmCodeCallback_.resolve()}authorizePairing(){return new Promise((()=>{}))}shouldShowSubpage_(subpageId){return this.selectedPageId_===subpageId}onCancelClick_(event){event.stopPropagation();this.devicePendingPairing_=null;if(this.pairingDelegateReceiver_){this.pairingDelegateReceiver_.$.close();this.finishPendingCallbacksForTest_();this.pairingDelegateReceiver_=null;return}this.closeDialog_()}closeDialog_(){this.dispatchEvent(new CustomEvent("finished",{bubbles:true,composed:true}))}onSelectedPageIdChanged_(){if(this.selectedPageId_!==BluetoothPairingSubpageId.DEVICE_SELECTION_PAGE){return}const deviceSelectionPage=this.shadowRoot.querySelector("#deviceSelectionPage");if(!deviceSelectionPage){return}deviceSelectionPage.attemptFocusLastSelectedItem()}finishPendingCallbacksForTest_(){if(this.requestCodeCallback_&&this.requestCodeCallback_.reject){this.requestCodeCallback_.reject()}if(this.confirmCodeCallback_&&this.confirmCodeCallback_.reject){this.confirmCodeCallback_.reject()}}getDeviceName_(){if(!this.devicePendingPairing_){return""}return mojoString16ToString(this.devicePendingPairing_.publicName)}}customElements.define(SettingsBluetoothPairingUiElement.is,SettingsBluetoothPairingUiElement);function getTemplate$m(){return html`<!--_html_template_start_--><style include="settings-shared">#dialog{--cr-dialog-top-container-min-height:0}div[slot=body]{height:426px}</style>
<cr-dialog id="dialog" show-on-attach>
  <div slot="body">
    <bluetooth-pairing-ui on-finished="closeDialog_">
    </bluetooth-pairing-ui>
  </div>
</cr-dialog>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsBluetoothPairingDialogElement extends PolymerElement{static get is(){return"os-settings-bluetooth-pairing-dialog"}static get template(){return getTemplate$m()}connectedCallback(){super.connectedCallback();recordBluetoothUiSurfaceMetrics(BluetoothUiSurface.SETTINGS_PAIRING_DIALOG)}closeDialog_(e){this.$.dialog.close();e.stopPropagation()}}customElements.define(SettingsBluetoothPairingDialogElement.is,SettingsBluetoothPairingDialogElement);function getTemplate$l(){return html`<!--_html_template_start_--><style include="settings-shared iron-flex"></style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="Bluetooth">
      <os-settings-bluetooth-summary on-start-pairing="onStartPairing_" system-properties="[[systemProperties_]]">
      </os-settings-bluetooth-summary>
    </settings-card>
  </div>

  <template is="dom-if" route-path="/bluetoothDevices">
    
    <os-settings-subpage page-title="Bluetooth" hide-back-button>
      <div slot="subpage-title-extra">
        <template is="dom-if" if="[[shouldShowPairNewDevice_(systemProperties_.*)]]" restamp>
          <cr-button id="pairNewDevice" on-click="onStartPairing_" class="cancel-button">
            <iron-icon icon="cr:add" slot="prefix-icon">
            </iron-icon>
            Pair new device
          </cr-button>
        </template>
      </div>
      <os-settings-bluetooth-devices-subpage prefs="{{prefs}}" system-properties="[[systemProperties_]]">
      </os-settings-bluetooth-devices-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/bluetoothDeviceDetail">
    <os-settings-subpage>
      <os-settings-bluetooth-device-detail-subpage system-properties="[[systemProperties_]]">
      </os-settings-bluetooth-device-detail-subpage>
    </os-settings-subpage>
  </template>
  <os-settings-subpage route-path="/bluetoothSavedDevices" show-spinner="[[showSavedDevicesLoadingIndicators_]]">
    <os-settings-bluetooth-saved-devices-subpage show-saved-devices-loading-label="{{showSavedDevicesLoadingIndicators_}}">
    </os-settings-bluetooth-saved-devices-subpage>
  </os-settings-subpage>
</os-settings-animated-pages>

<template is="dom-if" if="[[shouldShowPairingDialog_]]" restamp>
  <os-settings-bluetooth-pairing-dialog on-close="onClosePairingDialog_">
  </os-settings-bluetooth-pairing-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsBluetoothPageElementBase=PrefsMixin(I18nMixin(PolymerElement));class SettingsBluetoothPageElement extends SettingsBluetoothPageElementBase{static get is(){return"os-settings-bluetooth-page"}static get template(){return getTemplate$l()}static get properties(){return{section_:{type:Number,value:Section$1.kBluetooth,readOnly:true},systemProperties_:Object,shouldShowPairingDialog_:{type:Boolean,value:false},showSavedDevicesLoadingIndicators_:Boolean}}constructor(){super();this.systemPropertiesObserverReceiver_=new SystemPropertiesObserverReceiver(this);this.browserProxy_=OsBluetoothDevicesSubpageBrowserProxyImpl.getInstance()}connectedCallback(){super.connectedCallback();getBluetoothConfig().observeSystemProperties(this.systemPropertiesObserverReceiver_.$.bindNewPipeAndPassRemote())}onPropertiesUpdated(properties){this.systemProperties_=properties}onStartPairing_(){this.shouldShowPairingDialog_=true;this.browserProxy_.showBluetoothRevampHatsSurvey()}onClosePairingDialog_(){this.shouldShowPairingDialog_=false}shouldShowPairNewDevice_(){if(!this.systemProperties_){return false}return this.systemProperties_.systemState===BluetoothSystemState.kEnabled}}customElements.define(SettingsBluetoothPageElement.is,SettingsBluetoothPageElement);
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$4=null;class ParentalControlsBrowserProxyImpl{static getInstance(){return instance$4||(instance$4=new ParentalControlsBrowserProxyImpl)}static setInstanceForTesting(obj){instance$4=obj}showAddSupervisionDialog(){chrome.send("showAddSupervisionDialog")}launchFamilyLinkSettings(){chrome.send("launchFamilyLinkSettings")}}function getTemplate$k(){return html`<!--_html_template_start_--><style include="settings-shared">#parentalControlRowIcon{--iron-icon-fill-color:var(--cros-sys-primary)}cr-link-row{--cr-section-padding:0}</style>

<settings-card header-text="Parental controls">
  <div id="parentalControlsItem" class="settings-box two-line first">
    <template is="dom-if" if="[[isChild_]]">
      <cr-link-row on-click="handleFamilyLinkButtonClick_" start-icon="cr20:kite" label="Parental controls" sub-label="Open the Family Link app to see your supervision settings" external>
      </cr-link-row>
    </template>
    <template is="dom-if" if="[[!isChild_]]">
      <iron-icon id="parentalControlRowIcon" class="start-icon" icon="cr20:kite">
      </iron-icon>
      <div class="middle settings-box-text">
        <div id="label" aria-hidden="true">
          Parental controls
        </div>
        <div class="secondary" id="subLabel" aria-hidden="true">
          [[getSetupLabelText_(online_)]]
        </div>
      </div>
      <cr-button id="setupButton" on-click="handleSetupButtonClick_" disabled$="[[!online_]]" aria-labelledby="label" aria-describedby="subLabel" aria-roledescription="Set up button" deep-link-focus-id$="[[Setting.kSetUpParentalControls]]">
        Set up
      </cr-button>
    </template>
  </div>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ParentalControlsSettingsCardElementBase=DeepLinkingMixin(RouteObserverMixin(I18nMixin(PolymerElement)));class ParentalControlsSettingsCardElement extends ParentalControlsSettingsCardElementBase{static get is(){return"parental-controls-settings-card"}static get template(){return getTemplate$k()}static get properties(){return{isChild_:{type:Boolean,value(){return isChild()},readOnly:true},online_:{type:Boolean,value(){return navigator.onLine}}}}constructor(){super();this.supportedSettingIds=new Set([Setting.kSetUpParentalControls]);this.browserProxy_=ParentalControlsBrowserProxyImpl.getInstance()}ready(){super.ready();window.addEventListener("offline",this.onOffline_.bind(this));window.addEventListener("online",this.onOnline_.bind(this))}currentRouteChanged(newRoute,_oldRoute){if(newRoute!==routes.OS_PEOPLE){return}this.attemptDeepLink()}getSetupButton(){return castExists(this.shadowRoot.querySelector("#setupButton"))}onOffline_(){this.online_=false}onOnline_(){this.online_=true}getSetupLabelText_(online){if(online){return this.i18n("parentalControlsPageSetUpLabel")}return this.i18n("parentalControlsPageConnectToInternetLabel")}handleSetupButtonClick_(event){event.stopPropagation();this.browserProxy_.showAddSupervisionDialog()}handleFamilyLinkButtonClick_(event){event.stopPropagation();this.browserProxy_.launchFamilyLinkSettings()}}customElements.define(ParentalControlsSettingsCardElement.is,ParentalControlsSettingsCardElement);function getTemplate$j(){return html`<!--_html_template_start_--><style include="settings-shared">.account-manager-description{color:var(--cr-secondary-text-color);display:block;max-width:560px;padding-top:8px;padding-bottom:8px}.account-manager-description.full-width{max-width:none}.profile-icon{--profile-icon-size:40px;background:center/cover no-repeat;border-radius:50%;flex-shrink:0;height:var(--profile-icon-size);width:var(--profile-icon-size)}.profile-icon.device-account-icon{--profile-icon-size:60px;margin-top:8px}.device-account-container{align-items:center;display:flex;flex-direction:column;margin-bottom:16px}.device-account-container .primary{font-weight:500;margin-top:8px}.managed-badge{--badge-offset:calc(100% - var(--badge-size)
                         - 2 * var(--padding-size));--badge-size:10px;--padding-size:4px;background:var(--cros-icon-color-prominent);border-radius:50%;height:var(--badge-size);left:var(--badge-offset);padding:var(--padding-size);position:relative;top:var(--badge-offset);width:var(--badge-size)}.managed-badge>iron-icon{--iron-icon-fill-color:var(--cros-bg-color-elevation-1);--iron-icon-height:var(--badge-size);--iron-icon-width:var(--badge-size);display:block}.managed-message{color:var(--cr-secondary-text-color);justify-content:center;margin-top:16px}.managed-message>cr-icon-button,.managed-message>iron-icon{margin-inline-end:5px}:host-context([dir=rtl]) .managed-badge{left:auto;right:var(--badge-offset)}#managedUserIcon{--iron-icon-fill-color:var(--cros-sys-secondary)}</style>

<settings-card header-text="Liam&#39;s accounts">
  <div class="settings-box first account-manager-description full-width">
    <localized-link localized-string="[[getAccountManagerDescription_()]]" link-url="https://support.google.com/chromebook?p=google_accounts">
    </localized-link>
  </div>

   
   <template is="dom-if" if="[[isDeviceAccountManaged_]]">
    <div class="settings-box managed-message">
      <template is="dom-if" if="[[!isChildUser_]]">
        <iron-icon id="managedUserIcon" icon="[[managedByIcon_]]"></iron-icon>
      </template>
      <template is="dom-if" if="[[isChildUser_]]">
        <cr-icon-button iron-icon="cr20:kite" on-click="onManagedIconClick_">
        </cr-icon-button>
      </template>
      <localized-link localized-string="[[getManagementDescription_(isChildUser_, deviceAccount)]]" link-url="chrome://management">
      </localized-link>
    </div>
  </template>

  
  <div class="device-account-container hr" role="img" aria-labelledby="deviceAccountFullName" aria-describedby="deviceAccountEmail">
    <div class="profile-icon device-account-icon" aria-hidden="true" style="background-image:[[getIconImageSet_(deviceAccount) ]]">
      <template is="dom-if" if="[[shouldShowManagedBadge_(isDeviceAccountManaged_,
                isChildUser_)]]">
        <div class="managed-badge">
          <iron-icon icon="cr:work"></iron-icon>
        </div>
      </template>
    </div>
    <span id="deviceAccountFullName" class="primary" aria-hidden="true">
      [[deviceAccount.fullName]]
    </span>
    <span id="deviceAccountEmail" class="secondary" aria-hidden="true">
      [[deviceAccount.email]]
    </span>
  </div>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AccountManagerSettingsCardElementBase=WebUiListenerMixin(I18nMixin(PolymerElement));class AccountManagerSettingsCardElement extends AccountManagerSettingsCardElementBase{static get is(){return"account-manager-settings-card"}static get template(){return getTemplate$j()}static get properties(){return{deviceAccount:Object,isChildUser_:{type:Boolean,value(){return isChild()},readOnly:true},isDeviceAccountManaged_:{type:Boolean,value(){return loadTimeData.getBoolean("isDeviceAccountManaged")},readOnly:true},isSecondaryGoogleAccountSigninAllowed_:{type:Boolean,value(){return loadTimeData.getBoolean("secondaryGoogleAccountSigninAllowed")},readOnly:true},managedByIcon_:{type:String,value(){return loadTimeData.getString("managedByIcon")}}}}onManagedIconClick_(){if(this.isChildUser_){ParentalControlsBrowserProxyImpl.getInstance().launchFamilyLinkSettings()}}getAccountManagerDescription_(){if(this.isChildUser_&&this.isSecondaryGoogleAccountSigninAllowed_){return this.i18nAdvanced("accountManagerChildDescription")}return this.i18nAdvanced("accountManagerDescription")}getManagementDescription_(){if(this.isChildUser_){return this.i18nAdvanced("accountManagerManagementDescription")}if(!this.deviceAccount){return""}assertExists(this.deviceAccount.organization);if(!this.deviceAccount.organization){if(this.isDeviceAccountManaged_){console.error("The device account is managed, but the organization is not set.")}return""}return this.i18nAdvanced("accountManagerManagementDescription",{substitutions:[this.deviceAccount.organization]})}shouldShowManagedBadge_(){return this.isDeviceAccountManaged_&&!this.isChildUser_}getIconImageSet_(){if(!this.deviceAccount){return""}return getImage(this.deviceAccount.pic)}}customElements.define(AccountManagerSettingsCardElement.is,AccountManagerSettingsCardElement);function getTemplate$i(){return html`<!--_html_template_start_--><style include="settings-shared iron-flex iron-flex-alignment">:host{--add-account-margin-top:16px;--account-item-padding-size:8px}.settings-box-text{padding-inline-start:var(--cr-section-padding)}#addAccountButtonContainer{padding-top:8px;padding-bottom:8px}.profile-icon{--profile-icon-size:40px;background:center/cover no-repeat;border-radius:50%;flex-shrink:0;height:var(--profile-icon-size);width:var(--profile-icon-size)}.profile-icon.device-account-icon{--profile-icon-size:60px;margin-top:16px}.middle .secondary{overflow:hidden;text-overflow:ellipsis}.middle.two-line-or-more{min-height:calc(var(--cr-section-two-line-min-height) - 2*var(--account-item-padding-size));padding-bottom:var(--account-item-padding-size);padding-top:var(--account-item-padding-size)}.middle.two-line-or-more>.flex{display:flex;flex-direction:column;justify-content:center;min-height:calc(var(--cr-section-two-line-min-height) - 2*var(--account-item-padding-size))}.secondary-accounts-policy-indicator{margin-inline-end:12px}.settings-box.user-message{align-items:flex-end}.secondary-accounts-tooltip{margin-inline-start:5px;width:15px}.settings-box.secondary-accounts-box{align-items:flex-end}.secondary-accounts-disabled-tooltip{padding-inline-end:12px}cr-policy-indicator{margin-inline-end:1em;margin-top:var(--add-account-margin-top)}.secondary-accounts-box>#addAccountButton{margin-bottom:12px;margin-top:12px}#addAccountIcon{-webkit-mask-image:url(chrome://resources/images/add.svg);background-color:currentColor;height:24px;width:24px}.signed-out-text{color:var(--cros-text-color-alert)}.error-badge{background:url(chrome://os-settings/images/error_badge.svg) center/cover no-repeat;display:block;height:20px;left:60%;position:relative;top:60%;width:20px}@media (prefers-color-scheme:dark){.error-badge{background:url(chrome://os-settings/images/error_badge_dark.svg) center/cover no-repeat}}:host-context([dir=rtl]) .error-badge{left:auto;right:60%}.edu-account-label{margin-inline-start:12px}#removeConfirmationButton{--active-shadow-action-rgb:var(--cros-color-alert-rgb);--bg-action:var(--cros-color-alert);--focus-shadow-color:var(--cros-highlight-color-error);--hover-bg-action:var(--cros-sys-hover_on_prominent);--hover-shadow-action-rgb:var(--cros-color-alert-rgb)}</style>

<settings-card header-text="[[getAccountListHeader_(isChildUser_)]]">
  
  <div class="settings-box-text first secondary">
    [[getAccountListDescription_(isChildUser_)]]
  </div>

  
  <template is="dom-repeat" id="secondaryAccountsList" items="[[getSecondaryAccounts_(accounts)]]">
    <div class="settings-box" role="listitem">
      <div class="profile-icon" style="background-image:[[getIconImageSet_(item.pic) ]]">
        <template is="dom-if" if="[[!item.isSignedIn]]">
          <span class="error-badge"></span>
        </template>
      </div>
      <div class="middle two-line-or-more no-min-width">
        <div class="flex text-elide">
          
          <template is="dom-if" if="[[item.isSignedIn]]">
            <span id="fullName_[[index]]" aria-hidden="true">[[item.fullName]]</span>
          </template>
          
          <template is="dom-if" if="[[!item.isSignedIn]]">
            <span class="signed-out-text">
              [[getAccountManagerSignedOutName_(item.unmigrated)]]
            </span>
          </template>
          
          <div class="secondary" id="email_[[index]]" aria-hidden="true">[[item.email]]</div>
          
          <span class="arc-availability secondary" id="arcStatus_[[index]]" aria-hidden="true" hidden$="[[item.isAvailableInArc]]">
             Can&#39;t be used with Android apps
          </span>
        </div>
      </div>
      <template is="dom-if" if="[[shouldShowReauthenticationButton_(item)]]">
        <cr-button title="[[getAccountManagerSignedOutTitle_(item)]]" class="reauth-button" on-click="onReauthenticationClick_" aria-labelledby$="fullName_[[index]] email_[[index]]">
          [[getAccountManagerSignedOutLabel_(item.unmigrated)]]
        </cr-button>
      </template>
      
      <cr-icon-button class="icon-more-vert" title="[[getMoreActionsTitle_(item)]]" aria-label="[[getMoreActionsTitle_(item)]]" aria-describedby$="fullName_[[index]]
                              arcStatus_[[index]]
                              eduAccountLabel_[[index]]" on-click="onAccountActionsMenuButtonClick_" deep-link-focus-id$="[[Setting.kRemoveAccount]]">
      </cr-icon-button>
    </div>
  </template>
  <cr-action-menu role-description="Menu">
    <button class="dropdown-item" on-click="onRemoveAccountClick_">
      Remove this account
    </button>
  </cr-action-menu>

  
  <div id="addAccountButtonContainer" class="settings-box">
    <template is="dom-if" if="[[!isSecondaryGoogleAccountSigninAllowed_]]">
      <cr-tooltip-icon class="secondary-accounts-disabled-tooltip" icon-class="[[getManagedAccountTooltipIcon_(isChildUser_)]]" tooltip-text="[[getSecondaryAccountsDisabledUserMessage_(
                              isChildUser_)]]" icon-aria-label="[[getSecondaryAccountsDisabledUserMessage_(
                                isChildUser_)]]">
      </cr-tooltip-icon>
    </template>
    <cr-button disabled="[[!isSecondaryGoogleAccountSigninAllowed_]]" id="addAccountButton" on-click="addAccount_" deep-link-focus-id$="[[Setting.kAddAccount]]">
      <div id="addAccountIcon" slot="prefix-icon"></div>
      [[getAddAccountLabel_(isChildUser_,
          isSecondaryGoogleAccountSigninAllowed_)]]
    </cr-button>
  </div>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const AdditionalAccountsSettingsCardElementBase=RouteObserverMixin(WebUiListenerMixin(I18nMixin(DeepLinkingMixin(PolymerElement))));class AdditionalAccountsSettingsCardElement extends AdditionalAccountsSettingsCardElementBase{static get is(){return"additional-accounts-settings-card"}static get template(){return getTemplate$i()}static get properties(){return{accounts:{type:Array,value(){return[]}},actionMenuAccount_:Object,isChildUser_:{type:Boolean,value(){return isChild()},readOnly:true},isDeviceAccountManaged_:{type:Boolean,value(){return loadTimeData.getBoolean("isDeviceAccountManaged")},readOnly:true},isSecondaryGoogleAccountSigninAllowed_:{type:Boolean,value(){return loadTimeData.getBoolean("secondaryGoogleAccountSigninAllowed")},readOnly:true}}}constructor(){super();this.supportedSettingIds=new Set([Setting.kAddAccount,Setting.kRemoveAccount]);this.browserProxy_=AccountManagerBrowserProxyImpl.getInstance()}currentRouteChanged(newRoute){if(newRoute!==routes.OS_PEOPLE){return}this.attemptDeepLink()}getAccountListHeader_(){return this.isChildUser_?this.i18n("accountListHeaderChild"):this.i18n("accountListHeader")}getAccountListDescription_(){return this.isChildUser_?this.i18n("accountListChildDescription"):this.i18n("accountListDescription")}getSecondaryAccountsDisabledUserMessage_(){return this.isChildUser_?this.i18n("accountManagerSecondaryAccountsDisabledChildText"):this.i18n("accountManagerSecondaryAccountsDisabledText")}getIconImageSet_(iconUrl){return getImage(iconUrl)}addAccount_(){recordSettingChange(Setting.kAddAccount,{intValue:this.accounts.length+1});this.browserProxy_.addAccount()}shouldShowReauthenticationButton_(account){return!account.isDeviceAccount&&!account.isSignedIn}getManagedAccountTooltipIcon_(){if(this.isChildUser_){return"cr20:kite"}if(this.isDeviceAccountManaged_){return"cr20:domain"}return""}getAccountManagerSignedOutName_(unmigrated){return this.i18n(unmigrated?"accountManagerUnmigratedAccountName":"accountManagerSignedOutAccountName")}getAccountManagerSignedOutLabel_(unmigrated){return this.i18n(unmigrated?"accountManagerMigrationLabel":"accountManagerReauthenticationLabel")}getAccountManagerSignedOutTitle_(account){const label=account.unmigrated?"accountManagerMigrationTooltip":"accountManagerReauthenticationTooltip";return this.i18n(label,account.email)}getMoreActionsTitle_(account){return this.i18n("accountManagerMoreActionsTooltip",account.email)}shouldShowSecondaryAccountsList_(){return this.getSecondaryAccounts_().length===0}getSecondaryAccounts_(){return this.accounts.filter((account=>!account.isDeviceAccount))}getAddAccountLabel_(){if(this.isChildUser_&&this.isSecondaryGoogleAccountSigninAllowed_){return this.i18n("addSchoolAccountLabel")}return this.i18n("addAccountLabel")}onReauthenticationClick_(event){if(event.model.item.unmigrated){this.browserProxy_.migrateAccount(event.model.item.email)}else{this.browserProxy_.reauthenticateAccount(event.model.item.email)}}onAccountActionsMenuButtonClick_(event){this.actionMenuAccount_=event.model.item;assertInstanceof(event.target,HTMLElement);this.shadowRoot.querySelector("cr-action-menu").showAt(event.target)}onRemoveAccountClick_(){this.shadowRoot.querySelector("cr-action-menu").close();assertExists(this.actionMenuAccount_);this.browserProxy_.removeAccount(this.actionMenuAccount_);this.actionMenuAccount_=null;this.shadowRoot.querySelector("#addAccountButton").focus()}getChangeArcAvailabilityLabel_(){if(!this.actionMenuAccount_){return""}return this.actionMenuAccount_.isAvailableInArc?this.i18n("accountStopUsingInArcButtonLabel"):this.i18n("accountUseInArcButtonLabel")}}customElements.define(AdditionalAccountsSettingsCardElement.is,AdditionalAccountsSettingsCardElement);function getTemplate$h(){return html`<!--_html_template_start_--><style include="settings-shared iron-flex">:host{--icon-width:40px}parental-controls-settings-card{--cr-link-row-icon-width:var(--icon-width)}</style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <account-manager-settings-card prefs="{{prefs}}" device-account="[[deviceAccount_]]">
    </account-manager-settings-card>
    <additional-accounts-settings-card prefs="{{prefs}}" accounts="[[accounts_]]">
    </additional-accounts-settings-card>
    <template is="dom-if" if="[[showParentalControls_]]">
      <parental-controls-settings-card prefs="{{prefs}}">
      </parental-controls-settings-card>
    </template>
    <template is="dom-if" if="[[showGraduationApp_]]">
      <graduation-settings-card></graduation-settings-card>
    </template>
  </div>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsSettingsPeoplePageElementBase=WebUiListenerMixin(PolymerElement);class OsSettingsPeoplePageElement extends OsSettingsPeoplePageElementBase{static get is(){return"os-settings-people-page"}static get template(){return getTemplate$h()}static get properties(){return{prefs:{type:Object,notify:true},section_:{type:Number,value:Section$1.kPeople,readOnly:true},accounts_:{type:Array,value(){return[]}},deviceAccount_:{type:Object,value(){return null}},isAccountManagerEnabled_:{type:Boolean,value(){return isAccountManagerEnabled()},readOnly:true},showParentalControls_:{type:Boolean,value(){return loadTimeData.valueExists("showParentalControls")&&loadTimeData.getBoolean("showParentalControls")}},showGraduationApp_:{type:Boolean,value:()=>loadTimeData.getBoolean("isGraduationFlagEnabled")&&loadTimeData.getBoolean("isGraduationAppEnabled")}}}constructor(){super();this.graduationMojoProvider_=getGraduationHandlerProvider()}connectedCallback(){super.connectedCallback();if(this.isAccountManagerEnabled_){this.addWebUiListener("accounts-changed",this.updateAccounts_.bind(this));this.updateAccounts_()}this.graduationObserverReceiver_=new GraduationObserverReceiver(this);this.graduationMojoProvider_.addObserver(this.graduationObserverReceiver_.$.bindNewPipeAndPassRemote())}async updateAccounts_(){const accounts=await AccountManagerBrowserProxyImpl.getInstance().getAccounts();this.accounts_=accounts;if(accounts.length===0){return}this.deviceAccount_=accounts[0]}onGraduationAppUpdated(isAppEnabled){this.showGraduationApp_=loadTimeData.getBoolean("isGraduationFlagEnabled")&&isAppEnabled}}customElements.define(OsSettingsPeoplePageElement.is,OsSettingsPeoplePageElement);function getTemplate$g(){return html`<!--_html_template_start_--><style include="settings-shared">#dataAccesProtectionDialogSubDescription{padding-top:10px}cr-dialog::part(dialog){width:370px}</style>

<cr-dialog id="warningDialog" show-on-attach>
  <div slot="title">
    Allow external accessories to access memory?
  </div>
  <div slot="body">
    <div>External accessories may be able to access or share personal data.</div>
    <div id="dataAccesProtectionDialogSubDescription">
      For this change to take effect, reconnect your external accessories.
    </div>
  </div>
  <div slot="button-container">
    <cr-button id="cancelButton" class="cancel-button" on-click="onCancelButtonClicked_">
      Cancel
    </cr-button>
    <cr-button id="disableConfirmation" class="action-button" on-click="onDisableClicked_">
      Allow
    </cr-button>
  </div>
</cr-dialog>

<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPeripheralDataAccessProtectionDialogElementBase=PrefsMixin(PolymerElement);class SettingsPeripheralDataAccessProtectionDialogElement extends SettingsPeripheralDataAccessProtectionDialogElementBase{static get is(){return"settings-peripheral-data-access-protection-dialog"}static get template(){return getTemplate$g()}static get properties(){return{prefName:{type:String}}}onDisableClicked_(){this.setPrefValue(this.prefName,true);this.getWarningDialog_().close()}onCancelButtonClicked_(){this.getWarningDialog_().close()}getWarningDialog_(){return castExists(this.shadowRoot.querySelector("#warningDialog"))}}customElements.define(SettingsPeripheralDataAccessProtectionDialogElement.is,SettingsPeripheralDataAccessProtectionDialogElement);function getTemplate$f(){return html`<!--_html_template_start_--><style include="settings-shared">:host([is-user-configurable_]) .peripheral-data-access-protection{--cr-disabled-opacity:1;cursor:pointer;opacity:1}#dataAccessProtectionWrapper:focus{outline:0}settings-toggle-button{--cr-icon-button-margin-end:16px;--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="Privacy and security">
      <cr-link-row id="privacyHubSubpageTrigger" start-icon="os-settings:privacy-controls" on-click="onPrivacyHubClick_" label="Privacy controls" sub-label="Manage your privacy by controlling access to microphone, camera, and more" role-description="Subpage button">
      </cr-link-row>
      <template is="dom-if" if="[[!isGuestMode_]]" restamp>
        <cr-link-row id="syncSetupRow" class="hr" start-icon="os-settings:sync" label="Sync and Google services" sub-label="[[getSyncAndGoogleServicesSubtext_(syncStatus)]]" on-click="onSyncClick_" role-description="Subpage button">
        </cr-link-row>
        <cr-link-row id="lockScreenRow" class="hr" start-icon="os-settings:lock" on-click="onConfigureLockClick_" label="[[selectLockScreenTitleString_(hasPinLogin)]]" sub-label="[[getPasswordState_(hasPin,
                prefs.settings.enable_screen_lock.value)]]" role-description="Subpage button">
        </cr-link-row>
        <cr-link-row id="manageOtherPeopleRow" class="hr" start-icon="os-settings:privacy-manage-people" label="Manage other people" on-click="onManageOtherPeople_" role-description="Subpage button">
        </cr-link-row>
        <template is="dom-if" if="[[isSmartPrivacyEnabled_]]" restamp>
          <cr-link-row id="smartPrivacySubpageTrigger" class="hr" start-icon="os-settings:privacy-smart-privacy" on-click="onSmartPrivacy_" label="Screen privacy" role-description="Subpage button">
          </cr-link-row>
        </template>
      </template>


      <template is="dom-if" if="[[isRevenBranding_]]">
        <settings-toggle-button id="enable-hw-data-usage" class="hr" pref="{{prefs.cros.reven.enable_hw_data_usage}}" label="[[i18n('enableHWDataUsage')]]" sub-label="[[i18n('enableHWDataUsageDesc')]]">
        </settings-toggle-button>
      </template>

      <settings-toggle-button id="verifiedAccessToggle" class="hr" icon="os-settings:privacy-verified-access" pref="{{
            prefs.cros.device.attestation_for_content_protection_enabled}}" label="Enable Verified Access" on-settings-boolean-control-change="onVerifiedAccessChange_" deep-link-focus-id$="[[Setting.kVerifiedAccess]]">
      </settings-toggle-button>
      <template is="dom-if" if="[[isThunderboltSupported_]]">
        <div class="hr"></div>
        
        <div id="dataAccessProtectionWrapper" tabindex="0" on-focus="onDataAccessToggleFocus_" on-keypress="onDataAccessToggleKeyPress_">
          <settings-toggle-button id="crosSettingDataAccessToggle" class="peripheral-data-access-protection" icon="os-settings:privacy-data-access-protection" pref="{{prefs.cros.device.peripheral_data_access_enabled}}" label="Block Thunderbolt or USB4 accessories from accessing and sharing memory (RAM)" sub-label="Some Thunderbolt or USB4 accessories need memory access to work properly." deep-link-focus-id$="[[Setting.kPeripheralDataAccessProtection]]" on-click="onPeripheralProtectionClick_" learn-more-url="https://support.google.com/chromebook?p=connect_thblt_usb4_accy" hidden$="[[isLocalStateDataAccessPref_(
                  dataAccessProtectionPrefName_)]]" disabled="disabled" inverted>
          </settings-toggle-button>
          <settings-toggle-button id="localStateDataAccessToggle" class="peripheral-data-access-protection" icon="os-settings:privacy-data-access-protection" pref="{{prefs.settings.local_state_device_pci_data_access_enabled}}" label="Block Thunderbolt or USB4 accessories from accessing and sharing memory (RAM)" sub-label="Some Thunderbolt or USB4 accessories need memory access to work properly." deep-link-focus-id$="[[Setting.kPeripheralDataAccessProtection]]" on-click="onPeripheralProtectionClick_" learn-more-url="https://support.google.com/chromebook?p=connect_thblt_usb4_accy" hidden$="[[isCrosSettingDataAccessPref_(
                  dataAccessProtectionPrefName_)]]" disabled="disabled" inverted>
          </settings-toggle-button>
        </div>
      </template>
      <template is="dom-if" if="[[showSecureDnsSetting_]]">
        <settings-secure-dns prefs="{{prefs}}"></settings-secure-dns>
      </template>
    </settings-card>
  </div>

  
  <template is="dom-if" route-path="/osPrivacy/privacyHub">
    <os-settings-subpage page-title="Privacy controls">
      <settings-privacy-hub-subpage prefs="{{prefs}}">
      </settings-privacy-hub-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/osPrivacy/privacyHub/microphone">
    <os-settings-subpage page-title="Microphone access">
      <settings-privacy-hub-microphone-subpage prefs="{{prefs}}">
      </settings-privacy-hub-microphone-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/osPrivacy/privacyHub/camera">
    <os-settings-subpage page-title="Camera access">
      <settings-privacy-hub-camera-subpage prefs="{{prefs}}">
      </settings-privacy-hub-camera-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/osPrivacy/privacyHub/geolocation">
    <os-settings-subpage page-title="Location access">
      <settings-privacy-hub-geolocation-subpage prefs="{{prefs}}">
      </settings-privacy-hub-geolocation-subpage>
    </os-settings-subpage>
  </template>
  <template is="dom-if" route-path="/osPrivacy/privacyHub/geolocation/advanced">
    <os-settings-subpage page-title="Advanced location settings">
      <settings-privacy-hub-geolocation-advanced-subpage prefs="{{prefs}}">
      </settings-privacy-hub-geolocation-advanced-subpage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" if="[[!isGuestMode_]]" restamp>
    <template is="dom-if" route-path="/osSyncSetup">
      <os-settings-subpage page-title="Sync and Google services" learn-more-url="https://support.google.com/chrome?p=syncgoogleservices">
        <os-settings-sync-subpage sync-status="[[syncStatus]]" prefs="{{prefs}}">
        </os-settings-sync-subpage>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/osSync">
      <os-settings-subpage page-title="Manage what you sync" learn-more-url="https://support.google.com/chrome?p=syncgoogleservices">
        <os-sync-controls-subpage>
        </os-sync-controls-subpage>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/osPrivacy/lockScreen">
      <os-settings-subpage page-title="[[selectLockScreenTitleString_(hasPinLogin)]]">
        <settings-lock-screen-subpage id="lockScreen" prefs="{{prefs}}" auth-token="[[getAuthToken_(authTokenInfo_, authTokenReply_)]]" on-invalidate-auth-token-requested="onInvalidateTokenRequested_" on-password-requested="onPasswordRequested_">
        </settings-lock-screen-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/lockScreen/fingerprint">
      <os-settings-subpage page-title="Fingerprint">
        <settings-fingerprint-list-subpage id="fingerprint-list" auth-token="[[getAuthToken_(authTokenInfo_, authTokenReply_)]]" on-password-requested="onPasswordRequested_">
        </settings-fingerprint-list-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/accounts">
      <os-settings-subpage page-title="Manage other people">
        <settings-manage-users-subpage prefs="{{prefs}}">
        </settings-manage-users-subpage>
      </os-settings-subpage>
    </template>
    <template is="dom-if" route-path="/osPrivacy/smartPrivacy">
      <os-settings-subpage page-title="Screen privacy">
        <settings-smart-privacy-subpage prefs="{{prefs}}">
        </settings-smart-privacy-subpage>
      </os-settings-subpage>
    </template>
  </template>

</os-settings-animated-pages>

<template is="dom-if" if="[[showPasswordPromptDialog_]]" restamp>
  <settings-lock-screen-password-prompt-dialog id="passwordDialog" on-close="onPasswordPromptDialogClose_" on-auth-token-obtained="onAuthTokenObtained_">
  </settings-lock-screen-password-prompt-dialog>
</template>

<template is="dom-if" if="[[showDisableProtectionDialog_]]" restamp>
  <settings-peripheral-data-access-protection-dialog id="protectionDialog" on-close="onDisableProtectionDialogClosed_" prefs="{{prefs}}" pref-name="[[dataAccessProtectionPrefName_]]">
  </settings-peripheral-data-access-protection-dialog>
</template>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$3=null;class PeripheralDataAccessBrowserProxyImpl{static getInstance(){return instance$3||(instance$3=new PeripheralDataAccessBrowserProxyImpl)}static setInstanceForTesting(obj){instance$3=obj}isThunderboltSupported(){return sendWithPromise("isThunderboltSupported")}getPolicyState(){return sendWithPromise("getPolicyState")}}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const OsSettingsPrivacyPageElementBase=PrefsMixin(LockStateMixin(RouteOriginMixin(DeepLinkingMixin(PolymerElement))));class OsSettingsPrivacyPageElement extends OsSettingsPrivacyPageElementBase{static get is(){return"os-settings-privacy-page"}static get template(){return getTemplate$f()}static get properties(){return{section_:{type:Number,value:Section$1.kPrivacyAndSecurity,readOnly:true},authTokenInfo_:{type:Object,observer:"onAuthTokenChanged_"},authTokenReply_:{type:Object},showPasswordPromptDialog_:{type:Boolean,value:false},syncStatus:Object,fingerprintUnlockEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("fingerprintUnlockEnabled")},readOnly:true},isAuthPanelInSessionEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("isAuthPanelEnabled")},readOnly:true},isSmartPrivacyEnabled_:{type:Boolean,value(){return loadTimeData.getBoolean("isSnoopingProtectionEnabled")||loadTimeData.getBoolean("isQuickDimEnabled")},readOnly:true},isRevenBranding_:{type:Boolean,value(){return loadTimeData.getBoolean("isRevenBranding")},readOnly:true},isGuestMode_:{type:Boolean,value(){return loadTimeData.getBoolean("isGuest")},readOnly:true},showDisableProtectionDialog_:{type:Boolean,value:false},isThunderboltSupported_:{type:Boolean,value:false},dataAccessProtectionPrefName_:{type:String,value:""},isUserConfigurable_:{type:Boolean,value:false,reflectToAttribute:true},dataAccessShiftTabPressed_:{type:Boolean,value:false},profileLabel_:String,showSecureDnsSetting_:{type:Boolean,value:function(){return loadTimeData.getBoolean("showSecureDnsSetting")},readOnly:true},isAccountManagerEnabled_:{type:Boolean,value(){return isAccountManagerEnabled()},readOnly:true},isAuthenticating_:{type:Boolean,value:false}}}static get observers(){return["onDataAccessFlagsSet_(isThunderboltSupported_.*)"]}constructor(){super();this.supportedSettingIds=new Set([Setting.kVerifiedAccess,Setting.kNonSplitSyncEncryptionOptions,Setting.kImproveSearchSuggestions,Setting.kMakeSearchesAndBrowsingBetter]);this.clearAccountPasswordTimeoutId_=undefined;this.route=routes.OS_PRIVACY;this.browserProxy_=PeripheralDataAccessBrowserProxyImpl.getInstance();this.syncBrowserProxy_=SyncBrowserProxyImpl.getInstance();this.browserProxy_.isThunderboltSupported().then((enabled=>{this.isThunderboltSupported_=enabled;if(this.isThunderboltSupported_){this.supportedSettingIds.add(Setting.kPeripheralDataAccessProtection)}}))}connectedCallback(){super.connectedCallback();this.syncBrowserProxy_.getSyncStatus().then(this.handleSyncStatus_.bind(this));this.addWebUiListener("sync-status-changed",this.handleSyncStatus_.bind(this))}ready(){super.ready();this.addEventListener(AUTH_TOKEN_INVALID_EVENT_TYPE,this.onAuthTokenInvalid_);this.addFocusConfig(routes.ACCOUNTS,"#manageOtherPeopleRow");this.addFocusConfig(routes.LOCK_SCREEN,"#lockScreenRow");this.addFocusConfig(routes.OS_SYNC_SETUP,"#syncSetupRow")}afterRenderShowDeepLink_(settingId,getElementCallback){afterNextRender(this,(()=>{const deepLinkElement=getElementCallback();if(!deepLinkElement||deepLinkElement.hidden){console.warn(`Element with deep link id ${settingId} not focusable.`);return}this.showDeepLinkElement(deepLinkElement)}))}beforeDeepLinkAttempt(settingId){switch(settingId){case Setting.kNonSplitSyncEncryptionOptions:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");syncPage.forceEncryptionExpanded=true;flush();return syncPage&&syncPage.getEncryptionOptions()&&syncPage.getEncryptionOptions().getEncryptionsRadioButtons()}));return false;case Setting.kImproveSearchSuggestions:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");return syncPage&&syncPage.getPersonalizationOptions()&&syncPage.getPersonalizationOptions().getSearchSuggestToggle()}));return false;case Setting.kMakeSearchesAndBrowsingBetter:this.afterRenderShowDeepLink_(settingId,(()=>{const syncPage=this.shadowRoot.querySelector("os-settings-sync-subpage");return syncPage&&syncPage.getPersonalizationOptions()&&syncPage.getPersonalizationOptions().getUrlCollectionToggle()}));return false;default:return true}}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute===routes.OS_SYNC_SETUP||newRoute===this.route){this.attemptDeepLink()}}selectLockScreenTitleString_(hasPinLogin){if(hasPinLogin){return this.i18n("lockScreenTitleLoginLock")}return this.i18n("lockScreenTitleLock")}getPasswordState_(hasPin,enableScreenLock){if(!enableScreenLock){return this.i18n("lockScreenNone")}if(hasPin){return this.i18n("lockScreenPinOrPassword")}return this.i18n("lockScreenPasswordOnly")}getSyncAndGoogleServicesSubtext_(){if(this.syncStatus&&this.syncStatus.hasError&&this.syncStatus.statusText){return this.syncStatus.statusText}return""}async onPasswordRequested_(){if(this.isAuthenticating_){return}this.isAuthenticating_=true;if(!this.isAuthPanelInSessionEnabled_){this.showPasswordPromptDialog_=true;this.isAuthenticating_=false;return}const tokenInfo=await InSessionAuth.getRemote().requestToken(Reason.kAccessAuthenticationSettings,loadTimeData.getString("authPrompt"));this.isAuthenticating_=false;if(!tokenInfo.reply){Router.getInstance().navigateToPreviousRoute();return}this.authTokenReply_=tokenInfo.reply}getAuthToken_(){if(!this.isAuthPanelInSessionEnabled_){return this.authTokenInfo_?.token}return this.authTokenReply_?.token}async onInvalidateTokenRequested_(){if(!this.isAuthPanelInSessionEnabled_){this.authTokenInfo_=undefined;return}if(this.authTokenReply_){const token=this.authTokenReply_.token;this.authTokenReply_=undefined;await InSessionAuth.getRemote().invalidateToken(token)}}onPasswordPromptDialogClose_(){if(this.isAuthPanelInSessionEnabled_&&!this.authTokenReply_){Router.getInstance().navigateToPreviousRoute();return}if(!this.isAuthPanelInSessionEnabled_){this.showPasswordPromptDialog_=false;this.isAuthenticating_=false;if(!this.authTokenInfo_){Router.getInstance().navigateToPreviousRoute()}}}onAuthTokenObtained_(e){this.authTokenInfo_=e.detail}onAuthTokenInvalid_(){if(this.isAuthPanelInSessionEnabled_){this.authTokenReply_=undefined;return}this.authTokenInfo_=undefined}onConfigureLockClick_(e){e.preventDefault();Router.getInstance().navigateTo(routes.LOCK_SCREEN)}onManageOtherPeople_(){Router.getInstance().navigateTo(routes.ACCOUNTS)}onSmartPrivacy_(){Router.getInstance().navigateTo(routes.SMART_PRIVACY)}handleSyncStatus_(syncStatus){this.syncStatus=syncStatus;if(!this.isAccountManagerEnabled_&&syncStatus&&this.syncStatus.signedInState===SignedInState.SYNCING&&syncStatus.signedInUsername){this.profileLabel_=syncStatus.signedInUsername}}onSyncClick_(){Router.getInstance().navigateTo(routes.OS_SYNC_SETUP)}onPrivacyHubClick_(){chrome.metricsPrivate.recordEnumerationValue("ChromeOS.PrivacyHub.Opened",PrivacyHubNavigationOrigin.SYSTEM_SETTINGS,Object.keys(PrivacyHubNavigationOrigin).length);Router.getInstance().navigateTo(routes.PRIVACY_HUB)}onAuthTokenChanged_(){if(this.clearAccountPasswordTimeoutId_){clearTimeout(this.clearAccountPasswordTimeoutId_)}if(this.authTokenInfo_===undefined){return}const IPC_SECONDS=2;const lifetimeMs=this.authTokenInfo_.lifetimeSeconds>IPC_SECONDS?(this.authTokenInfo_.lifetimeSeconds-IPC_SECONDS)*1e3:0;this.clearAccountPasswordTimeoutId_=setTimeout((()=>{this.authTokenInfo_=undefined}),lifetimeMs)}onDisableProtectionDialogClosed_(){this.showDisableProtectionDialog_=false}onPeripheralProtectionClick_(){if(!this.isUserConfigurable_){return}if(!this.getPref(this.dataAccessProtectionPrefName_).value){this.showDisableProtectionDialog_=true;return}this.setPrefValue(this.dataAccessProtectionPrefName_,false)}onDataAccessToggleFocus_(){if(!this.isUserConfigurable_){return}if(this.dataAccessShiftTabPressed_){this.dataAccessShiftTabPressed_=false;this.$.verifiedAccessToggle.focus();return}this.shadowRoot.querySelector(".peripheral-data-access-protection").focus()}onDataAccessToggleKeyPress_(event){if(event.shiftKey&&event.key==="Tab"){this.dataAccessShiftTabPressed_=true;return}if(event.key!=="Enter"&&event.key!==" "||!this.isUserConfigurable_){return}event.stopPropagation();if(!this.getPref(this.dataAccessProtectionPrefName_).value){this.showDisableProtectionDialog_=true;return}this.setPrefValue(this.dataAccessProtectionPrefName_,false)}onDataAccessFlagsSet_(){if(this.isThunderboltSupported_){this.browserProxy_.getPolicyState().then((policy=>{this.dataAccessProtectionPrefName_=policy.prefName;this.isUserConfigurable_=policy.isUserConfigurable})).then((()=>{afterNextRender(this,(()=>{this.shadowRoot.querySelector(".peripheral-data-access-protection").shadowRoot.querySelector("#control").addEventListener("keydown",this.onDataAccessToggleKeyPress_.bind(this))}))}))}}onVerifiedAccessChange_(){const enabled=this.$.verifiedAccessToggle.checked;recordSettingChange(Setting.kVerifiedAccess,{boolValue:enabled})}isLocalStateDataAccessPref_(){return this.dataAccessProtectionPrefName_==="settings.local_state_device_pci_data_access_enabled"}isCrosSettingDataAccessPref_(){return this.dataAccessProtectionPrefName_==="cros.device.peripheral_data_access_enabled"}}customElements.define(OsSettingsPrivacyPageElement.is,OsSettingsPrivacyPageElement);function getTemplate$e(){return html`<!--_html_template_start_--><style include="settings-shared"></style>
<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <settings-card header-text="Wallpaper and style">
      <cr-link-row id="personalizationHubButton" start-icon="os-settings:personalization" label="Set your wallpaper &amp; style" sub-label="Personalize wallpaper, screen saver, dark theme, and more" on-click="openPersonalizationHub_" external>
      </cr-link-row>
    </settings-card>
  </div>

</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsPersonalizationPageElementBase=DeepLinkingMixin(RouteObserverMixin(PrefsMixin(I18nMixin(PolymerElement))));class SettingsPersonalizationPageElement extends SettingsPersonalizationPageElementBase{static get is(){return"settings-personalization-page"}static get template(){return getTemplate$e()}static get properties(){return{section_:{type:Number,value:Section$1.kPersonalization,readOnly:true}}}constructor(){super();this.personalizationHubBrowserProxy_=PersonalizationHubBrowserProxyImpl.getInstance()}openPersonalizationHub_(){this.personalizationHubBrowserProxy_.openPersonalizationHub()}currentRouteChanged(route){if(route!==routes.PERSONALIZATION){return}this.attemptDeepLink()}}customElements.define(SettingsPersonalizationPageElement.is,SettingsPersonalizationPageElement);const template=html`<!--
This file contains internal icon definitions.
-->
<iron-iconset-svg name="ash-internal" size="24">
  <svg>
    <defs>
        <g id="lobster" clip-path="url(#clip0_905_20903)" viewBox="0 0 20 20">
        <path d="M4.5625 17.1667C4.07639 17.1667 3.66667 17 3.33333 16.6667C3 16.3194 2.83333 15.9097 2.83333 15.4375V4.5625C2.83333 4.09028 3 3.6875 3.33333 3.35417C3.66667 3.00694 4.07639 2.83333 4.5625 2.83333H10.9375V4.5625H4.5625V15.4375H15.4375V9.0625H17.1667V15.4375C17.1667 15.9097 17 16.3194 16.6667 16.6667C16.3333 17 15.9236 17.1667 15.4375 17.1667H4.5625ZM5.41667 14.0625L7.75 10.8958L9.25 12.8958L11.5 9.89583L14.5833 14.0625H5.41667ZM14.5 10.0833C14.5 8.80555 14.0556 7.72222 13.1667 6.83333C12.2778 5.94444 11.1944 5.5 9.91667 5.5C11.1944 5.5 12.2778 5.05556 13.1667 4.16667C14.0556 3.27778 14.5 2.19444 14.5 0.916666C14.5 2.19444 14.9444 3.27778 15.8333 4.16667C16.7222 5.05556 17.8056 5.5 19.0833 5.5C17.8056 5.5 16.7222 5.94444 15.8333 6.83333C14.9444 7.72222 14.5 8.80555 14.5 10.0833Z"/>
        </g>
        <defs>
        <clipPath id="clip0_905_20903">
        <rect width="20" height="20" fill="white"/>
        </clipPath>
        </defs>
    </defs>
  </svg>
</iron-iconset-svg>
`;document.head.appendChild(template.content);function getTemplate$d(){return html`<!--_html_template_start_--><style include="settings-shared">settings-toggle-button{--cr-icon-button-margin-end:16px;--iron-icon-fill-color:var(--cros-sys-primary)}.sub-item{padding-inline-start:var(--cr-section-indent-width)}#magic-boost-banner{margin-inline-end:20px;margin-inline-start:12px}</style>

<settings-card header-text="Search and suggestions">
  
  <template is="dom-if" if="[[!isQuickAnswersSupported_]]">
    <settings-search-engine deep-link-focus-id$="[[Setting.kPreferredSearchEngine]]">
    </settings-search-engine>
  </template>
  <template is="dom-if" if="[[isQuickAnswersSupported_]]">
    <cr-link-row id="searchRow" start-icon="os-settings:explore" label="Search" on-click="onSearchClick_" role-description="Subpage button">
    </cr-link-row>
  </template>

  
  <template is="dom-if" if="[[isAssistantAllowed_]]">
    <cr-link-row id="assistantRow" start-icon="os-settings:assistant" class="hr" label="Google Assistant" sub-label="[[getAssistantEnabledDisabledLabel_(
            prefs.settings.voice_interaction.enabled.value)]]" on-click="onGoogleAssistantClick_" role-description="Subpage button">
    </cr-link-row>
  </template>
  <settings-toggle-button id="contentRecommendationsToggle" class="hr" icon="os-settings:content-recommend" pref="{{prefs.settings.suggested_content_enabled}}" label="Get content recommendations" sub-label="See suggestions for new apps and web content in Launcher and search results. Sends statistics to improve suggestions only if you have chosen to send crash reports and diagnostics and usage data to ChromeOS." learn-more-url="https://support.google.com/chromebook?p=explorecontent">
  </settings-toggle-button>

  
  <template is="dom-if" if="[[isMagicBoostFeatureEnabled_]]">
    <settings-toggle-button id="magicBoostToggle" class="hr" icon="os-settings:magic-boost" pref="{{prefs.settings.magic_boost_enabled}}" label="Use Google AI to get help reading, writing, and creating" sub-label="Right-click to summarize content, get definitions, write with more confidence, create images, and more. Currently has limited availability." deep-link-focus-id$="[[Setting.kMagicBoostOnOff]]">
    </settings-toggle-button>
    <template is="dom-if" if="[[isMagicBoostNoticeBannerVisible_]]">
      <div class="sub-item" id="magic-boost-banner">
        <magic-boost-review-terms-banner description="You need to review and accept terms to use these features" button-label="Review">
        </magic-boost-review-terms-banner>
      </div>
    </template>
    <iron-collapse opened="[[prefs.settings.magic_boost_enabled.value]]" id="magicBoostCollapse">
      <div class="sub-item">
        
        <template is="dom-if" restamp if="[[!isHmrAllowedByEnterprisePolicy_]]">
          
          <settings-toggle-button id="helpMeReadEnterpriseToggle" class="hr" icon="os-settings:help-me-read" pref="{{prefs.settings.managed.help_me_read}}" numeric-unchecked-values="[[enterprisePolicyToggleUncheckedValues_]]" disabled="disabled" no-set-pref label="Help me read" sub-label="Summarize content, simplify complex language, or ask questions." deep-link-focus-id$="[[Setting.kMahiOnOff]]" learn-more-url="https://support.google.com/chromebook/?p=settings_help_me_read_write">
          </settings-toggle-button>
        </template>
        <template is="dom-if" restamp if="[[isHmrAllowedByEnterprisePolicy_]]">
          <settings-toggle-button id="helpMeReadToggle" class="hr" icon="os-settings:help-me-read" pref="{{prefs.settings.mahi_enabled}}" label="Help me read" sub-label="Summarize content, simplify complex language, or ask questions." deep-link-focus-id$="[[Setting.kMahiOnOff]]" learn-more-url="https://support.google.com/chromebook/?p=settings_help_me_read_write">
          </settings-toggle-button>
        </template>
      </div>
      <div class="sub-item">
        
        <template is="dom-if" restamp if="[[!isHmwAllowedByEnterprisePolicy_]]">
          
          <settings-toggle-button id="helpMeWriteEnterpriseToggle" class="hr" icon="os-settings:help-me-write" pref="{{prefs.settings.managed.help_me_write}}" numeric-unchecked-values="[[enterprisePolicyToggleUncheckedValues_]]" disabled="disabled" no-set-pref label="Help me write" sub-label="Create a draft or refine existing work." deep-link-focus-id$="[[Setting.kShowOrca]]" learn-more-url="https://support.google.com/chromebook/?p=settings_help_me_read_write">
          </settings-toggle-button>
        </template>
        <template is="dom-if" restamp if="[[isHmwAllowedByEnterprisePolicy_]]">
          <settings-toggle-button id="helpMeWriteToggle" class="hr" icon="os-settings:help-me-write" pref="{{prefs.assistive_input.orca_enabled}}" label="Help me write" sub-label="Create a draft or refine existing work." deep-link-focus-id$="[[Setting.kShowOrca]]" learn-more-url="https://support.google.com/chromebook/?p=settings_help_me_read_write">
          </settings-toggle-button>
        </template>
      </div>
      <div class="sub-item">
        <template is="dom-if" if="[[isLobsterSettingsToggleVisible_]]">
          <template is="dom-if" if="[[!isLobsterAllowedByEnterprisePolicy_]]" restamp>
            
            <settings-toggle-button id="lobsterEnterpriseToggle" class="hr" icon="ash-internal:lobster" pref="{{prefs.settings.lobster.enterprise_settings}}" numeric-unchecked-values="[[enterprisePolicyToggleUncheckedValues_]]" disabled="disabled" no-set-pref label="Create image" sub-label="Enter a custom prompt or highlight text to create an image" deep-link-focus-id$="[[Setting.kLobsterOnOff]]" learn-more-url="https://support.google.com/chromebook?p=dugong2">
            </settings-toggle-button>
          </template>
          <template is="dom-if" if="[[isLobsterAllowedByEnterprisePolicy_]]" restamp>
            <settings-toggle-button id="lobsterToggle" class="hr" icon="ash-internal:lobster" pref="{{prefs.settings.lobster_enabled}}" label="Create image" sub-label="Enter a custom prompt or highlight text to create an image" deep-link-focus-id$="[[Setting.kLobsterOnOff]]" learn-more-url="https://support.google.com/chromebook?p=dugong2">
            </settings-toggle-button>
          </template>
        </template>
      </div>
    </iron-collapse>
  </template>

  <template is="dom-if" if="[[isScannerSettingsToggleVisible_]]">
    
    
    <template is="dom-if" restamp if="[[!isScannerAllowedByEnterprisePolicy_]]">
      
      <settings-toggle-button id="scannerEnterpriseToggle" class="hr" pref="{{prefs.ash.scanner.enterprise_policy_allowed}}" numeric-unchecked-values="[[enterprisePolicyToggleUncheckedValues_]]" disabled="disabled" no-set-pref icon="os-settings:scanner" label="Suggested actions when searching your screen" sub-label="After taking a screenshot or searching your screen, show more actions such as add to Calendar, create Google Docs, and more." learn-more-url="https://support.google.com/chromebook?p=dugong3" deep-link-focus-id$="[[Setting.kScannerOnOff]]">
      </settings-toggle-button>
    </template>
    <template is="dom-if" restamp if="[[isScannerAllowedByEnterprisePolicy_]]">
      <settings-toggle-button id="scannerToggle" class="hr" pref="{{prefs.ash.scanner.enabled}}" icon="os-settings:scanner" label="Suggested actions when searching your screen" sub-label="After taking a screenshot or searching your screen, show more actions such as add to Calendar, create Google Docs, and more." learn-more-url="https://support.google.com/chromebook?p=dugong3" deep-link-focus-id$="[[Setting.kScannerOnOff]]">
      </settings-toggle-button>
    </template>
  </template>

</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const ENTERPRISE_POLICY_DISALLOWED=2;const SearchAndAssistantSettingsCardElementBase=DeepLinkingMixin(RouteOriginMixin(I18nMixin(PolymerElement)));class SearchAndAssistantSettingsCardElement extends SearchAndAssistantSettingsCardElementBase{static get is(){return"search-and-assistant-settings-card"}static get template(){return getTemplate$d()}static get properties(){return{prefs:{type:Object,notify:true},isQuickAnswersSupported_:{type:Boolean,value:()=>isQuickAnswersSupported()},isMagicBoostFeatureEnabled_:{type:Boolean,value:()=>isMagicBoostFeatureEnabled()},isMagicBoostNoticeBannerVisible_:{type:Boolean,value:()=>isMagicBoostNoticeBannerVisible()},isLobsterSettingsToggleVisible_:{type:Boolean,value:()=>isLobsterSettingsToggleVisible()},isScannerSettingsToggleVisible_:{type:Boolean,readOnly:true,value:()=>isScannerSettingsToggleVisible()},isLobsterAllowedByEnterprisePolicy_:{type:Boolean,computed:"isEnterprisePolicyAllowed_("+"prefs.settings.lobster.enterprise_settings.value)"},isScannerAllowedByEnterprisePolicy_:{type:Boolean,computed:"isEnterprisePolicyAllowed_("+"prefs.ash.scanner.enterprise_policy_allowed.value)"},isHmrAllowedByEnterprisePolicy_:{type:Boolean,computed:"isEnterprisePolicyAllowed_("+"prefs.settings.managed.help_me_read.value)"},isHmwAllowedByEnterprisePolicy_:{type:Boolean,computed:"isEnterprisePolicyAllowed_("+"prefs.settings.managed.help_me_write.value)"},enterprisePolicyToggleUncheckedValues_:{type:Array,readOnly:true,value:()=>[ENTERPRISE_POLICY_DISALLOWED]},isAssistantAllowed_:{type:Boolean,value:()=>isAssistantAllowed()}}}constructor(){super();this.supportedSettingIds=new Set([Setting.kPreferredSearchEngine,Setting.kMagicBoostOnOff,Setting.kMahiOnOff,Setting.kShowOrca,Setting.kLobsterOnOff,Setting.kSunfishOnOff,Setting.kScannerOnOff]);this.route=routes.SYSTEM_PREFERENCES}ready(){super.ready();this.addFocusConfig(routes.SEARCH_SUBPAGE,"#searchRow");this.addFocusConfig(routes.GOOGLE_ASSISTANT,"#assistantRow")}currentRouteChanged(newRoute,oldRoute){super.currentRouteChanged(newRoute,oldRoute);if(newRoute!==this.route){return}this.attemptDeepLink()}onSearchClick_(){assert(this.isQuickAnswersSupported_);Router.getInstance().navigateTo(routes.SEARCH_SUBPAGE)}onGoogleAssistantClick_(){assert(this.isAssistantAllowed_);Router.getInstance().navigateTo(routes.GOOGLE_ASSISTANT)}getAssistantEnabledDisabledLabel_(isAssistantEnabled){return this.i18n(isAssistantEnabled?"searchGoogleAssistantEnabled":"searchGoogleAssistantDisabled")}isEnterprisePolicyAllowed_(value){return value!==ENTERPRISE_POLICY_DISALLOWED}}customElements.define(SearchAndAssistantSettingsCardElement.is,SearchAndAssistantSettingsCardElement);function getTemplate$c(){return html`<!--_html_template_start_--><style include="settings-shared">settings-toggle-button{--cr-icon-button-margin-end:16px;--iron-icon-fill-color:var(--cros-sys-primary)}</style>

<settings-card header-text="Windows and desks">
  <settings-toggle-button id="snapWindowSuggestionsToggle" icon="os-settings:snap-window-suggestions" pref="{{prefs.ash.snap_window_suggestions.enabled}}" label="Show window suggestions when starting split-screen" sub-label="If you snap a window to one side to use split-screen, you&#39;ll see window suggestions for the other side" deep-link-focus-id$="[[Setting.kSnapWindowSuggestions]]">
  </settings-toggle-button>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2024 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MultitaskingSettingsCardElementBase=RouteObserverMixin(DeepLinkingMixin(I18nMixin(PolymerElement)));class MultitaskingSettingsCardElement extends MultitaskingSettingsCardElementBase{constructor(){super(...arguments);this.supportedSettingIds=new Set([Setting.kSnapWindowSuggestions])}static get is(){return"multitasking-settings-card"}static get template(){return getTemplate$c()}static get properties(){return{prefs:{type:Object,notify:true}}}currentRouteChanged(newRoute){if(newRoute!==routes.SYSTEM_PREFERENCES){return}this.attemptDeepLink()}}customElements.define(MultitaskingSettingsCardElement.is,MultitaskingSettingsCardElement);function getTemplate$b(){return html`<!--_html_template_start_--><style include="settings-shared">#restoreIcon{fill:var(--cros-sys-primary);margin-inline-end:16px}#textContainer{padding-inline-end:var(--cr-section-padding)}</style>

<settings-card header-text="Startup">
  <div class="settings-box first two-line">
    <iron-icon id="restoreIcon" icon="os-settings:restore">
    </iron-icon>
    <div id="textContainer" class="start settings-box-text" aria-hidden="true">
      Welcome Recap
      <div class="secondary">Open your previous windows and tabs to easily continue where you left off</div>
    </div>
    <settings-dropdown-menu id="onStartupDropdown" label="Welcome Recap" pref="{{prefs.settings.restore_apps_and_pages}}" menu-options="[[onStartupDropdownOptions_]]" deep-link-focus-id$="[[Setting.kRestoreAppsAndPages]]">
    </settings-dropdown-menu>
  </div>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const StartupSettingsCardElementBase=RouteObserverMixin(DeepLinkingMixin(PolymerElement));class StartupSettingsCardElement extends StartupSettingsCardElementBase{constructor(){super(...arguments);this.supportedSettingIds=new Set([Setting.kRestoreAppsAndPages])}static get is(){return"startup-settings-card"}static get template(){return getTemplate$b()}static get properties(){return{prefs:{type:Object,notify:true},onStartupDropdownOptions_:{type:Array,value:()=>[{value:1,name:loadTimeData.getString("onStartupAlways")},{value:2,name:loadTimeData.getString("onStartupAskEveryTime")},{value:3,name:loadTimeData.getString("onStartupDoNotRestore")}],readOnly:true}}}currentRouteChanged(newRoute){if(newRoute!==routes.SYSTEM_PREFERENCES){return}this.attemptDeepLink()}}customElements.define(StartupSettingsCardElement.is,StartupSettingsCardElement);function getTemplate$a(){return html`<!--_html_template_start_--><style include="settings-shared"></style>

<settings-card header-text="Storage and power">
  <template is="dom-if" if="[[shouldShowStorageRow_]]">
    <cr-link-row id="storageRow" start-icon="os-settings:storage" label="Storage management" on-click="showStorageSubpage_" role-description="Subpage button">
    </cr-link-row>
  </template>
  <cr-link-row id="powerRow" start-icon="os-settings:power" class="hr" label="Power" on-click="showPowerSubpage_" role-description="Subpage button">
  </cr-link-row>
</settings-card>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const StorageAndPowerSettingsCardElementBase=RouteOriginMixin(I18nMixin(PolymerElement));class StorageAndPowerSettingsCardElement extends StorageAndPowerSettingsCardElementBase{static get is(){return"storage-and-power-settings-card"}static get template(){return getTemplate$a()}static get properties(){return{shouldShowStorageRow_:{type:Boolean,value:()=>!loadTimeData.getBoolean("isDemoSession"),readOnly:true}}}constructor(){super();this.route=routes.SYSTEM_PREFERENCES}ready(){super.ready();this.addFocusConfig(routes.STORAGE,"#storageRow");this.addFocusConfig(routes.POWER,"#powerRow")}showStorageSubpage_(){Router.getInstance().navigateTo(routes.STORAGE)}showPowerSubpage_(){Router.getInstance().navigateTo(routes.POWER)}}customElements.define(StorageAndPowerSettingsCardElement.is,StorageAndPowerSettingsCardElement);function getTemplate$9(){return html`<!--_html_template_start_--><style include="settings-shared"></style>

<os-settings-animated-pages id="pages" section="[[section_]]">
  <div route-path="default">
    <storage-and-power-settings-card></storage-and-power-settings-card>

    <language-settings-card prefs="{{prefs}}" languages="[[languages]]" language-helper="[[languageHelper]]">
    </language-settings-card>

    <date-time-settings-card prefs="{{prefs}}" active-time-zone-display-name="{{activeTimeZoneDisplayName_}}">
    </date-time-settings-card>

    <template is="dom-if" if="[[shouldShowFilesSettingsCard_]]">
      <files-settings-card prefs="{{prefs}}"></files-settings-card>
    </template>

    <search-and-assistant-settings-card prefs="{{prefs}}">
    </search-and-assistant-settings-card>

    <template is="dom-if" if="[[shouldShowStartupSettingsCard_]]">
      <startup-settings-card prefs="{{prefs}}"></startup-settings-card>
    </template>

    <multitasking-settings-card prefs="{{prefs}}">
    </multitasking-settings-card>

    <template is="dom-if" if="[[shouldShowResetSettingsCard_]]">
      <reset-settings-card></reset-settings-card>
    </template>
  </div>

  
  <template is="dom-if" route-path="/dateTime/timeZone">
    <os-settings-subpage page-title="Time zone" learn-more-url="https://support.google.com/chromebook?p=chromebook_timezone&amp;hl=en-US">
      <timezone-subpage prefs="{{prefs}}" active-time-zone-display-name="{{activeTimeZoneDisplayName_}}">
      </timezone-subpage>
    </os-settings-subpage>
  </template>

  
  <template is="dom-if" route-path="/smbShares">
    <os-settings-subpage page-title="Network file shares">
      <settings-smb-shares-page prefs="{{prefs}}">
      </settings-smb-shares-page>
    </os-settings-subpage>
  </template>

  <template is="dom-if" if="[[shouldStampGoogleDriveSubpage_]]">
    <template is="dom-if" route-path="/googleDrive">
      <os-settings-subpage page-title="Google Drive" show-spinner="[[showSpinner_]]">
        <settings-google-drive-subpage prefs="{{prefs}}" show-spinner="{{showSpinner_}}">
        </settings-google-drive-subpage>
      </os-settings-subpage>
    </template>
  </template>

  <template is="dom-if" if="[[shouldStampOfficeSubpage_]]">
    <template is="dom-if" route-path="/officeFiles">
      <os-settings-subpage page-title="Microsoft 365 files">
        <settings-office-page prefs="{{prefs}}">
        </settings-office-page>
      </os-settings-subpage>
    </template>

    <template is="dom-if" route-path="/oneDrive">
      <os-settings-subpage page-title="OneDrive">
        <settings-one-drive-subpage prefs="{{prefs}}">
        </settings-one-drive-subpage>
      </os-settings-subpage>
    </template>
  </template>

  
  <template is="dom-if" route-path="/osLanguages/languages">
    <os-settings-subpage page-title="Languages">
      <os-settings-languages-page-v2 prefs="{{prefs}}" languages="[[languages]]" language-helper="[[languageHelper]]">
      </os-settings-languages-page-v2>
    </os-settings-subpage>
  </template>

  
  <template is="dom-if" route-path="/osLanguages/languages/appLanguages">
    <os-settings-subpage page-title="App languages">
      <os-settings-app-languages-page prefs="{{prefs}}">
      </os-settings-app-languages-page>
    </os-settings-subpage>
  </template>

  
  <template is="dom-if" if="[[isQuickAnswersSupported_]]">
    <template is="dom-if" route-path="/osSearch/search">
      <os-settings-subpage page-title="Search">
        <settings-search-subpage prefs="{{prefs}}">
        </settings-search-subpage>
      </os-settings-subpage>
    </template>
  </template>

  <template is="dom-if" if="[[isAssistantAllowed_]]">
    <template is="dom-if" route-path="/googleAssistant">
      <os-settings-subpage page-title="Google Assistant">
        <settings-google-assistant-subpage prefs="{{prefs}}">
        </settings-google-assistant-subpage>
      </os-settings-subpage>
    </template>
  </template>

  
  <template is="dom-if" route-path="/storage">
    <os-settings-subpage page-title="Storage management">
      <settings-storage prefs="{{prefs}}">
      </settings-storage>
    </os-settings-subpage>
  </template>

  <template is="dom-if" if="[[isExternalStorageEnabled_]]">
    <template is="dom-if" route-path="/storage/externalStoragePreferences">
      <os-settings-subpage page-title="External storage preferences">
        <settings-storage-external prefs="{{prefs}}">
        </settings-storage-external>
      </os-settings-subpage>
    </template>
  </template>

  <template is="dom-if" route-path="/power">
    <os-settings-subpage page-title="Power">
      <settings-power prefs="{{prefs}}">
      </settings-power>
    </os-settings-subpage>
  </template>
</os-settings-animated-pages>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SettingsSystemPreferencesPageElementBase=I18nMixin(PolymerElement);class SettingsSystemPreferencesPageElement extends SettingsSystemPreferencesPageElementBase{static get is(){return"settings-system-preferences-page"}static get template(){return getTemplate$9()}static get properties(){return{section_:{type:Number,value:Section$1.kSystemPreferences,readOnly:true},prefs:{type:Object,notify:true},languages:Object,languageHelper:Object,activeTimeZoneDisplayName_:{type:String,value:loadTimeData.getString("timeZoneName")},shouldShowFilesSettingsCard_:{type:Boolean,value:()=>!isGuest()},shouldShowResetSettingsCard_:{type:Boolean,value:()=>isPowerwashAllowed()},isQuickAnswersSupported_:{type:Boolean,value:()=>isQuickAnswersSupported()},isAssistantAllowed_:{type:Boolean,value:()=>isAssistantAllowed()},isExternalStorageEnabled_:{type:Boolean,value:()=>isExternalStorageEnabled()},shouldStampGoogleDriveSubpage_:{type:Boolean,value:()=>!!routes.GOOGLE_DRIVE},shouldStampOfficeSubpage_:{type:Boolean,value:()=>!!routes.OFFICE},shouldShowStartupSettingsCard_:{type:Boolean,value:()=>shouldShowStartup(),readOnly:true}}}}customElements.define(SettingsSystemPreferencesPageElement.is,SettingsSystemPreferencesPageElement);function getTemplate$8(){return html`<!--_html_template_start_--><style>#focusHost,:host{outline:0}:host(:not([active])){display:none}</style>

<div id="focusHost" tabindex="-1" aria-label="[[ariaLabel]]">
  <slot></slot>
</div>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class PageDisplayerElement extends PolymerElement{static get is(){return"page-displayer"}static get template(){return getTemplate$8()}static get properties(){return{active:{type:Boolean,value:false,reflectToAttribute:true},section:{type:Number,reflectToAttribute:true},ariaLabel:String}}ready(){super.ready();assert(this.section in Section$1,`Invalid section: ${this.section}.`)}focus(){this.shadowRoot.getElementById("focusHost").focus({preventScroll:true})}}customElements.define(PageDisplayerElement.is,PageDisplayerElement);function getTemplate$7(){return html`<!--_html_template_start_--><style include="cr-hidden-style settings-shared">:host{--page-backdrop-bg-color:var(--cros-sys-surface1);background-color:var(--page-backdrop-bg-color);border-radius:20px;box-sizing:border-box;display:block;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px;position:relative}@media (prefers-color-scheme:dark){:host{--page-backdrop-bg-color:var(--cros-sys-app_base)}}:host(:not(.showing-subpage)){padding-top:8px}:host([is-subpage-animating]){overflow:hidden}:host(.showing-subpage) page-displayer:not([active]){display:none}.banner{align-items:center;background-color:var(--cros-bg-color);border:var(--cr-hairline);border-radius:var(--cr-card-border-radius);display:flex;margin-bottom:var(--cr-section-vertical-margin);margin-top:var(--cr-section-vertical-margin)}.eol-warning-icon{align-items:center;background:rgba(var(--cros-icon-color-warning-rgb),var(--cros-second-tone-opacity));border-radius:50%;display:flex;flex:0 0 auto;height:40px;justify-content:center;margin-inline-end:var(--cr-section-padding);width:40px}.eol-warning-icon iron-icon{--iron-icon-fill-color:var(--cros-icon-color-warning);margin:0}#openInNewBrowserSettingsIcon{fill:var(--cros-link-color);margin-inline-start:0}#secondaryUserIcon{align-items:center;background:rgba(var(--cros-icon-color-prominent-rgb),var(--cros-second-tone-opacity));border-radius:50%;display:flex;flex:0 0 auto;height:40px;justify-content:center;margin-inline-end:var(--cr-section-padding);width:40px}#secondaryUserIcon iron-icon{--iron-icon-fill-color:var(--cros-icon-color-prominent);margin:0}#toggleContainer{align-items:center;color:var(--cros-text-color-primary);display:flex;font:inherit;justify-content:center;margin-bottom:0;margin-top:0;padding:0}#toggleSpacer{padding-top:33px}iron-icon{margin-inline-start:16px}eol-offer-section{margin-top:20px}</style>


<settings-languages prefs="{{prefs}}" languages="{{languages_}}" language-helper="{{languageHelper_}}">
</settings-languages>

<div id="mainPageContainer">
  <template is="dom-if" if="[[computeShowUpdateRequiredEolBanner_(
      isShowingSubpage_, showUpdateRequiredEolBanner_,
      showEOLIncentive_)]]">
    <div id="updateRequiredEolBanner" class="settings-box two-line banner">
      <div class="eol-warning-icon">
        <iron-icon icon="cr20:banner-warning"></iron-icon>
      </div>
      <localized-link id="bannerText" class="start" localized-string="">
      </localized-link>
      <cr-icon-button title="Close" id="closeUpdateRequiredEol" class="icon-clear" on-click="onCloseEolBannerClicked_" aria-describedby="bannerText">
      </cr-icon-button>
    </div>
  </template>
  <template is="dom-if" if="[[computeShowEolIncentive_(isShowingSubpage_,
      showEolIncentive_)]]">
    <eol-offer-section should-show-offer-text="[[shouldShowOfferText_]]">
    </eol-offer-section>
  </template>
  <div id="secondaryUserBanner" class="settings-box two-line banner" hidden="[[!showSecondaryUserBanner_]]">
    <div id="secondaryUserIcon">
      <iron-icon icon="os-settings:social-group"></iron-icon>
    </div>
    <div class="flex">Some settings belonging to liammacademia@gmail.com are being shared with you. These settings only affect your account when using multiple sign-in.</div>
  </div>

  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kNetwork)]]" restamp>
    <page-displayer section="[[SectionEnum_.kNetwork]]" aria-label="Network">
      <settings-internet-page prefs="{{prefs}}">
      </settings-internet-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kBluetooth)]]" restamp>
    <page-displayer section="[[SectionEnum_.kBluetooth]]" aria-label="Bluetooth">
      <os-settings-bluetooth-page prefs="{{prefs}}">
      </os-settings-bluetooth-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kMultiDevice)]]" restamp>
    <page-displayer section="[[SectionEnum_.kMultiDevice]]" aria-label="Connected devices">
      <settings-multidevice-page prefs="{{prefs}}">
      </settings-multidevice-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kPeople)]]" restamp>
    <page-displayer section="[[SectionEnum_.kPeople]]" aria-label="Accounts">
      <os-settings-people-page prefs="{{prefs}}">
      </os-settings-people-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kKerberos)]]" restamp>
    <page-displayer section="[[SectionEnum_.kKerberos]]" aria-label="Kerberos">
      <settings-kerberos-page></settings-kerberos-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kDevice)]]" restamp>
    <page-displayer section="[[SectionEnum_.kDevice]]" aria-label="Device">
      <settings-device-page prefs="{{prefs}}" languages="[[languages_]]" language-helper="[[languageHelper_]]">
      </settings-device-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kPersonalization)]]" restamp>
    <page-displayer section="[[SectionEnum_.kPersonalization]]" aria-label="Wallpaper and style">
      <settings-personalization-page prefs="{{prefs}}">
      </settings-personalization-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kPrivacyAndSecurity)]]" restamp>
    <page-displayer section="[[SectionEnum_.kPrivacyAndSecurity]]" aria-label="Privacy and security">
      <os-settings-privacy-page prefs="{{prefs}}">
      </os-settings-privacy-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kApps)]]" restamp>
    <page-displayer section="[[SectionEnum_.kApps]]" aria-label="Apps">
      <os-settings-apps-page prefs="{{prefs}}" android-apps-info="[[androidAppsInfo]]">
      </os-settings-apps-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kAccessibility)]]" restamp>
    <page-displayer section="[[SectionEnum_.kAccessibility]]" aria-label="Accessibility">
      <os-settings-a11y-page prefs="{{prefs}}" languages="[[languages_]]" language-helper="[[languageHelper_]]">
      </os-settings-a11y-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kSystemPreferences)]]" restamp>
    <page-displayer section="[[SectionEnum_.kSystemPreferences]]" aria-label="System preferences">
      <settings-system-preferences-page prefs="{{prefs}}" languages="[[languages_]]" language-helper="[[languageHelper_]]">
      </settings-system-preferences-page>
    </page-displayer>
  </template>
  <template is="dom-if" if="[[shouldStampPage_(pageAvailability, SectionEnum_.kAboutChromeOs)]]" restamp>
    <page-displayer section="[[SectionEnum_.kAboutChromeOs]]" aria-label="About ChromeOS">
      <os-about-page prefs="{{prefs}}"></os-about-page>
    </page-displayer>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2021 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function isValidArray(arr){if(arr instanceof Array&&Object.isFrozen(arr)){return true}return false}function getStaticString(literal){const isStaticString=isValidArray(literal)&&!!literal.raw&&isValidArray(literal.raw)&&literal.length===literal.raw.length&&literal.length===1;assert(isStaticString,"static_types.js only allows static strings");return literal.join("")}function createTypes(_ignore,literal){return getStaticString(literal)}const rules={createHTML:createTypes,createScript:createTypes,createScriptURL:createTypes};let staticPolicy;if(window.trustedTypes){staticPolicy=window.trustedTypes.createPolicy("static-types",rules)}else{staticPolicy=rules}function getTrustedHTML(literal){return staticPolicy.createHTML("",literal)}function getTrustedScriptURL(literal){return staticPolicy.createScriptURL("",literal)}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let lazyLoadPromise=null;function ensureLazyLoaded(){if(!lazyLoadPromise){const script=document.createElement("script");script.type="module";script.src=getTrustedScriptURL`./lazy_load.js`;document.body.appendChild(script);lazyLoadPromise=new Promise((resolve=>{script.onload=()=>{resolve()}}))}return lazyLoadPromise}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
var RouteState;(function(RouteState){RouteState["INITIAL"]="initial";RouteState["ROOT"]="root";RouteState["SECTION"]="section";RouteState["SUBPAGE"]="subpage";RouteState["DIALOG"]="dialog"})(RouteState||(RouteState={}));function classifyRoute(route){if(!route){return RouteState.INITIAL}if(route===routes.BASIC){return RouteState.ROOT}if(route.isSubpage()){return RouteState.SUBPAGE}if(route.isNavigableDialog){return RouteState.DIALOG}return RouteState.SECTION}const ALL_STATES=new Set([RouteState.DIALOG,RouteState.SECTION,RouteState.SUBPAGE,RouteState.ROOT]);const VALID_TRANSITIONS=new Map([[RouteState.INITIAL,ALL_STATES],[RouteState.DIALOG,new Set([RouteState.SECTION,RouteState.SUBPAGE,RouteState.ROOT])],[RouteState.SECTION,ALL_STATES],[RouteState.SUBPAGE,ALL_STATES],[RouteState.ROOT,ALL_STATES]]);const FIRST_PAGE_ROUTE=routes.INTERNET;const MainPageMixin=dedupingMixin((superClass=>{const superclassBase=RouteObserverMixin(superClass);class MainPageMixinInternal extends superclassBase{constructor(){super(...arguments);this.lastScrollTop_=0}get scroller_(){const hostEl=this.getRootNode().host;return castExists(hostEl?hostEl.closest("#container"):document.body)}containsRoute(_route){assertNotReached()}async enterSubpage(route){this.lastScrollTop_=this.scroller_.scrollTop;await this.activatePage(route);this.scroller_.scrollTop=0;this.classList.add("showing-subpage");this.dispatchCustomEvent_("showing-subpage");ensureLazyLoaded();this.dispatchCustomEvent_("show-container")}enterMainPage(){this.classList.remove("showing-subpage");return new Promise((resolve=>{requestAnimationFrame((()=>{if(Router.getInstance().lastRouteChangeWasPopstate()){this.scroller_.scrollTop=this.lastScrollTop_}this.dispatchCustomEvent_("showing-main-page");resolve()}))}))}showPage(route){this.activatePage(route,{focus:true})}async activatePage(route,options={}){const page=await this.ensurePageForRoute(route);const previouslyActive=this.shadowRoot.querySelectorAll("page-displayer[active]");for(const prevPage of previouslyActive){prevPage.active=false}page.active=true;if(options.focus){page.focus()}this.dispatchCustomEvent_("show-container")}activateInitialPage(){this.activatePage(FIRST_PAGE_ROUTE,{focus:false})}getStateTransition_(newRoute,oldRoute){const containsNew=this.containsRoute(newRoute);const containsOld=this.containsRoute(oldRoute);if(!containsNew&&!containsOld){return null}if(containsOld&&!containsNew){return[classifyRoute(oldRoute),RouteState.ROOT]}if(!containsOld&&containsNew){return[RouteState.ROOT,classifyRoute(newRoute)]}return[classifyRoute(oldRoute),classifyRoute(newRoute)]}currentRouteChanged(newRoute,oldRoute){const transition=this.getStateTransition_(newRoute,oldRoute);if(transition===null){return}const[oldState,newState]=transition;assert(VALID_TRANSITIONS.get(oldState).has(newState));if(oldState===RouteState.INITIAL){switch(newState){case RouteState.SECTION:this.showPage(newRoute);return;case RouteState.SUBPAGE:this.enterSubpage(newRoute);return;case RouteState.ROOT:this.activateInitialPage();return;case RouteState.DIALOG:default:return}}if(oldState===RouteState.ROOT){switch(newState){case RouteState.SECTION:this.showPage(newRoute);return;case RouteState.SUBPAGE:this.enterSubpage(newRoute);return;case RouteState.ROOT:this.activateInitialPage();return;case RouteState.DIALOG:default:return}}if(oldState===RouteState.SECTION){switch(newState){case RouteState.SECTION:this.showPage(newRoute);return;case RouteState.SUBPAGE:this.enterSubpage(newRoute);return;case RouteState.ROOT:this.scroller_.scrollTop=0;this.activateInitialPage();return;case RouteState.DIALOG:default:return}}if(oldState===RouteState.SUBPAGE){assert(oldRoute);switch(newState){case RouteState.SECTION:this.enterMainPage().then((()=>{this.activatePage(newRoute,{focus:true})}));return;case RouteState.SUBPAGE:if(!oldRoute.contains(newRoute)&&!newRoute.contains(oldRoute)){this.enterMainPage().then((()=>{this.enterSubpage(newRoute)}));return}if(oldRoute.contains(newRoute)){this.scroller_.scrollTop=0;return}return;case RouteState.ROOT:this.enterMainPage().then((()=>{this.activateInitialPage()}));return;case RouteState.DIALOG:this.enterMainPage();return;default:return}}if(oldState===RouteState.DIALOG){switch(newState){case RouteState.SUBPAGE:this.enterSubpage(newRoute);return;case RouteState.ROOT:case RouteState.SECTION:case RouteState.DIALOG:default:return}}}ensurePageForRoute(route){const section=this.queryPage(route.section);if(section){return Promise.resolve(section)}const waitFn=beforeNextRender.bind(null,this);return new Promise((resolve=>{waitFn((()=>{resolve(castExists(this.queryPage(route.section)))}))}))}queryPage(section){if(section===null){return null}return this.shadowRoot.querySelector(`page-displayer[section="${section}"]`)}dispatchCustomEvent_(name,options){const event=new CustomEvent(name,{bubbles:true,composed:true,...options});this.dispatchEvent(event)}}return MainPageMixinInternal}));
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MainPageContainerElementBase=MainPageMixin(WebUiListenerMixin(PolymerElement));class MainPageContainerElement extends MainPageContainerElementBase{static get is(){return"main-page-container"}static get template(){return getTemplate$7()}static get properties(){return{prefs:{type:Object,notify:true},SectionEnum_:{type:Object,value:Section$1},androidAppsInfo:Object,pageAvailability:{type:Object},isShowingSubpage_:{type:Boolean,value:false},showSecondaryUserBanner_:{type:Boolean,computed:"computeShowSecondaryUserBanner_(isShowingSubpage_)"},showUpdateRequiredEolBanner_:{type:Boolean,value:!!loadTimeData.getString("updateRequiredEolBannerText")},showEolIncentive_:{type:Boolean,value:false},shouldShowOfferText_:{type:Boolean,value:false},languages_:Object,languageHelper_:Object}}ready(){super.ready();this.setAttribute("role","main");this.addEventListener("showing-subpage",this.onShowingSubpage)}connectedCallback(){super.connectedCallback();this.addWebUiListener("android-apps-info-update",this.androidAppsInfoUpdate_.bind(this));AndroidAppsBrowserProxyImpl.getInstance().requestAndroidAppsInfo();AboutPageBrowserProxyImpl.getInstance().pageReady();AboutPageBrowserProxyImpl.getInstance().getEndOfLifeInfo().then((result=>{this.showEolIncentive_=!!result.shouldShowEndOfLifeIncentive;this.shouldShowOfferText_=!!result.shouldShowOfferText}))}currentRouteChanged(newRoute,oldRoute){if(oldRoute?.isSubpage()){if(!newRoute.isSubpage()||newRoute.section!==oldRoute.section){this.isShowingSubpage_=false}}else{assert(!this.isShowingSubpage_)}super.currentRouteChanged(newRoute,oldRoute)}containsRoute(_route){return true}shouldStampPage_(pageAvailability,pageName){return!!pageAvailability[pageName]}computeShowSecondaryUserBanner_(){return!this.isShowingSubpage_&&loadTimeData.getBoolean("isSecondaryUser")}computeShowUpdateRequiredEolBanner_(){return!this.isShowingSubpage_&&this.showUpdateRequiredEolBanner_&&!this.showEolIncentive_}computeShowEolIncentive_(){return!this.isShowingSubpage_&&this.showEolIncentive_}androidAppsInfoUpdate_(info){this.androidAppsInfo=info}onCloseEolBannerClicked_(){this.showUpdateRequiredEolBanner_=false}onShowingSubpage(){this.isShowingSubpage_=true}getArrowIcon_(opened){return opened?"cr:arrow-drop-up":"cr:arrow-drop-down"}}customElements.define(MainPageContainerElement.is,MainPageContainerElement);function getTemplate$6(){return html`<!--_html_template_start_--><style include="cr-hidden-style settings-shared">:host{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;padding-bottom:16px;padding-inline-end:16px;padding-inline-start:16px}#mainPageContainer{flex:1;max-width:958px;min-width:640px;width:100%}#managedHeader{border-top:none;font:var(--cros-body-2-font);margin-bottom:8px;padding-bottom:14px;padding-top:14px;position:relative;z-index:1;--cr-link-color:var(--cros-sys-primary);--cr-secondary-text-color:var(--cros-sys-secondary);--iron-icon-fill-color:var(--cros-sys-secondary)}</style>
<template is="dom-if" if="[[!isShowingSubpage_]]" restamp>
  <managed-footnote id="managedHeader" show-device-info></managed-footnote>
</template>
<main-page-container id="mainPageContainer" prefs="{{prefs}}" page-availability="[[pageAvailability]]">
</main-page-container>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class OsSettingsMainElement extends PolymerElement{static get is(){return"os-settings-main"}static get template(){return getTemplate$6()}static get properties(){return{prefs:{type:Object,notify:true},isShowingSubpage_:Boolean,toolbarSpinnerActive:{type:Boolean,value:false,notify:true},pageAvailability:Object}}ready(){super.ready();this.addEventListener("showing-main-page",this.onShowingMainPage_);this.addEventListener("showing-subpage",this.onShowingSubpage_)}onShowingMainPage_(){this.isShowingSubpage_=false}onShowingSubpage_(){this.isShowingSubpage_=true}}customElements.define(OsSettingsMainElement.is,OsSettingsMainElement);function getTemplate$5(){return html`<!--_html_template_start_--><style include="cr-shared-style cr-icons">:host{display:block;height:40px;transition:background-color 150ms cubic-bezier(.4,0,.2,1),width 150ms cubic-bezier(.4,0,.2,1);width:44px}:host-context([chrome-refresh-2023]):host{--cr-toolbar-search-field-hover-background:var(--color-toolbar-search-field-background-hover,
            var(--cr-hover-background-color)) isolation: isolate}:host([disabled]){opacity:var(--cr-disabled-opacity)}[hidden]{display:none!important}cr-icon-button{--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 32px);margin:var(--cr-toolbar-icon-margin,6px)}:host-context([chrome-refresh-2023]) cr-icon-button{--cr-icon-button-fill-color:var(--cr-toolbar-search-field-icon-color,
        var(--color-toolbar-search-field-icon,
        var(--cr-secondary-text-color)));--cr-icon-button-size:var(--cr-toolbar-icon-container-size, 28px);--cr-icon-button-icon-size:20px;margin:var(--cr-toolbar-icon-margin,0)}@media (prefers-color-scheme:light){cr-icon-button{--cr-icon-button-fill-color:var(
          --cr-toolbar-search-field-input-icon-color,
          var(--google-grey-700));--cr-icon-button-focus-outline-color:var(
          --cr-toolbar-icon-button-focus-outline-color,
          var(--cr-focus-outline-color))}}@media (prefers-color-scheme:dark){cr-icon-button{--cr-icon-button-fill-color:var(
          --cr-toolbar-search-field-input-icon-color,
          var(--google-grey-500))}}#icon{transition:margin 150ms,opacity .2s}#prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--google-grey-700));opacity:0}@media (prefers-color-scheme:dark){#prompt{color:var(--cr-toolbar-search-field-prompt-color,#fff)}}@media (prefers-color-scheme:dark){#prompt{--cr-toolbar-search-field-prompt-opacity:1;color:var(--cr-secondary-text-color,#fff)}}:host-context([chrome-refresh-2023]) #prompt{color:var(--cr-toolbar-search-field-prompt-color,var(--color-toolbar-search-field-foreground-placeholder,var(--cr-secondary-text-color)))}paper-spinner-lite{--paper-spinner-color:var(--cr-toolbar-search-field-input-icon-color,
            var(--google-grey-700));height:var(--cr-icon-size);margin:var(--cr-toolbar-search-field-paper-spinner-margin,0 6px);opacity:0;padding:6px;position:absolute;width:var(--cr-icon-size)}@media (prefers-color-scheme:dark){paper-spinner-lite{--paper-spinner-color:var(
          --cr-toolbar-search-field-input-icon-color, white)}}:host-context([chrome-refresh-2023]) paper-spinner-lite{margin:0;padding:2px}paper-spinner-lite[active]{opacity:1}#prompt,paper-spinner-lite{transition:opacity .2s}#searchTerm{-webkit-font-smoothing:antialiased;flex:1;line-height:185%;margin:var(--cr-toolbar-search-field-term-margin,0 2px);position:relative}:host-context([chrome-refresh-2023]) #searchTerm{font-size:12px;font-weight:500;margin:var(--cr-toolbar-search-field-term-margin,0)}label{bottom:0;cursor:var(--cr-toolbar-search-field-cursor,text);left:0;overflow:hidden;position:absolute;right:0;top:0;white-space:nowrap}:host([has-search-text]) label{visibility:hidden}input{-webkit-appearance:none;background:0 0;border:none;caret-color:var(--cr-toolbar-search-field-input-caret-color,var(--google-blue-700));color:var(--cr-toolbar-search-field-input-text-color,var(--google-grey-900));cursor:var(--cr-toolbar-search-field-cursor,text);font:inherit;outline:0;padding:0;position:relative;width:100%}input::selection{background-color:var(--cros-sys-highlight_text)}@media (prefers-color-scheme:dark){input{color:var(--cr-toolbar-search-field-input-text-color,#fff)}}:host-context([chrome-refresh-2023]) input{caret-color:var(--cr-toolbar-search-field-input-caret-color,currentColor);color:var(--cr-toolbar-search-field-input-text-color,var(--color-toolbar-search-field-foreground,var(--cr-fallback-color-on-surface)));font-size:12px;font-weight:500}input[type=search]::-webkit-search-cancel-button{display:none}:host([narrow]){border-radius:var(--cr-toolbar-search-field-border-radius,0)}:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,var(--google-grey-100));border-radius:var(--cr-toolbar-search-field-border-radius,46px);cursor:var(--cr-toolbar-search-field-cursor,text);max-width:var(--cr-toolbar-field-max-width,none);padding-inline-end:0;width:var(--cr-toolbar-field-width,680px)}@media (prefers-color-scheme:dark){:host(:not([narrow])){background:var(--cr-toolbar-search-field-background,rgba(0,0,0,.22))}}:host-context([chrome-refresh-2023]):host(:not([narrow])){--cr-toolbar-search-field-border-radius:100px;background:0 0;height:36px;overflow:hidden;padding:0 6px;position:relative}#background,#stateBackground{display:none}:host-context([chrome-refresh-2023]):host(:not([narrow])) #background{background:var(--cr-toolbar-search-field-background,var(--color-toolbar-search-field-background,var(--cr-fallback-color-base-container)));border-radius:inherit;display:block;inset:0;pointer-events:none;position:absolute;z-index:0}:host-context([chrome-refresh-2023]):host([search-focused_]:not([narrow])){outline:2px solid var(--cr-focus-outline-color);outline-offset:2px}:host-context([chrome-refresh-2023]):host(:not([narrow])) #stateBackground{display:block;inset:0;pointer-events:none;position:absolute}:host-context([chrome-refresh-2023]):host(:hover:not([search-focused_],[narrow])) #stateBackground{background:var(--cr-toolbar-search-field-hover-background);z-index:1}:host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,.7)}:host-context([chrome-refresh-2023]):host(:not([narrow]):not([showing-search])) #icon{opacity:var(--cr-toolbar-search-field-icon-opacity,1)}:host(:not([narrow])) #prompt{opacity:var(--cr-toolbar-search-field-prompt-opacity,1)}:host([narrow]) #prompt{opacity:var(--cr-toolbar-search-field-narrow-mode-prompt-opacity,0)}:host([narrow]:not([showing-search])) #searchTerm{display:none}:host([showing-search][spinner-active]) #icon{opacity:0}:host([narrow][showing-search]){width:100%}:host([narrow][showing-search]) #icon,:host([narrow][showing-search]) paper-spinner-lite{margin-inline-start:var(--cr-toolbar-search-icon-margin-inline-start,18px)}#content{align-items:center;display:flex;height:100%}:host-context([chrome-refresh-2023]) #content{position:relative;z-index:2}</style>
<div id="background"></div>
<div id="stateBackground"></div>
<div id="content">
  <template is="dom-if" id="spinnerTemplate">
    <paper-spinner-lite active="[[isSpinnerShown_]]">
    </paper-spinner-lite>
  </template>
  <cr-icon-button id="icon" iron-icon="cr:search" title="[[label]]" dir="ltr" tabindex$="[[computeIconTabIndex_(narrow, hasSearchText)]]" aria-hidden$="[[computeIconAriaHidden_(narrow, hasSearchText)]]" on-click="onSearchIconClicked_" disabled="[[disabled]]">
  </cr-icon-button>
  <div id="searchTerm">
    <label id="prompt" for="searchInput" aria-hidden="true">[[label]]</label>
    <input id="searchInput" aria-labelledby="prompt" autocapitalize="off" autocomplete="off" type="search" on-input="onSearchTermInput" on-search="onSearchTermSearch" on-keydown="onSearchTermKeydown_" on-focus="onInputFocus_" on-blur="onInputBlur_" autofocus$="[[autofocus]]" spellcheck="false" disabled="[[disabled]]">
  </div>
  <template is="dom-if" if="[[hasSearchText]]">
    <cr-icon-button id="clearSearch" iron-icon="cr:cancel" title="[[clearLabel]]" on-click="clearSearch_" disabled="[[disabled]]"></cr-icon-button>
  </template>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const CrToolbarSearchFieldElementBase=CrSearchFieldMixin(PolymerElement);class CrToolbarSearchFieldElement extends CrToolbarSearchFieldElementBase{static get is(){return"cr-toolbar-search-field"}static get template(){return getTemplate$5()}static get properties(){return{narrow:{type:Boolean,reflectToAttribute:true},showingSearch:{type:Boolean,value:false,notify:true,observer:"showingSearchChanged_",reflectToAttribute:true},disabled:{type:Boolean,value:false,reflectToAttribute:true},autofocus:{type:Boolean,value:false,reflectToAttribute:true},spinnerActive:{type:Boolean,reflectToAttribute:true},isSpinnerShown_:{type:Boolean,computed:"computeIsSpinnerShown_(spinnerActive, showingSearch)"},searchFocused_:{reflectToAttribute:true,type:Boolean,value:false}}}ready(){super.ready();this.addEventListener("click",(e=>this.showSearch_(e)))}getSearchInput(){return this.$.searchInput}isSearchFocused(){return this.searchFocused_}showAndFocus(){this.showingSearch=true;this.focus_()}onSearchTermInput(){super.onSearchTermInput();this.showingSearch=this.hasSearchText||this.isSearchFocused()}onSearchIconClicked_(){this.dispatchEvent(new CustomEvent("search-icon-clicked",{bubbles:true,composed:true}))}focus_(){this.getSearchInput().focus()}computeIconTabIndex_(narrow){return narrow&&!this.hasSearchText?0:-1}computeIconAriaHidden_(narrow){return Boolean(!narrow||this.hasSearchText).toString()}computeIsSpinnerShown_(){const showSpinner=this.spinnerActive&&this.showingSearch;if(showSpinner){this.$.spinnerTemplate.if=true}return showSpinner}onInputFocus_(){this.searchFocused_=true}onInputBlur_(){this.searchFocused_=false;if(!this.hasSearchText){this.showingSearch=false}}onSearchTermKeydown_(e){if(e.key==="Escape"){this.showingSearch=false}}showSearch_(e){if(e.target!==this.shadowRoot.querySelector("#clearSearch")){this.showingSearch=true}}clearSearch_(){this.setValue("");this.focus_();this.spinnerActive=false}showingSearchChanged_(_current,previous){if(previous===undefined){return}if(this.showingSearch){this.focus_();return}this.setValue("");this.getSearchInput().blur()}}customElements.define(CrToolbarSearchFieldElement.is,CrToolbarSearchFieldElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchResultIconSpec={$:mojo.internal.Enum()};var SearchResultIcon;(function(SearchResultIcon){SearchResultIcon[SearchResultIcon["MIN_VALUE"]=0]="MIN_VALUE";SearchResultIcon[SearchResultIcon["MAX_VALUE"]=79]="MAX_VALUE";SearchResultIcon[SearchResultIcon["kA11y"]=0]="kA11y";SearchResultIcon[SearchResultIcon["kAlwaysShowScrollbars"]=1]="kAlwaysShowScrollbars";SearchResultIcon[SearchResultIcon["kAndroid"]=2]="kAndroid";SearchResultIcon[SearchResultIcon["kAppsGrid"]=3]="kAppsGrid";SearchResultIcon[SearchResultIcon["kAppsParentalControls"]=4]="kAppsParentalControls";SearchResultIcon[SearchResultIcon["kAssistant"]=5]="kAssistant";SearchResultIcon[SearchResultIcon["kAudio"]=6]="kAudio";SearchResultIcon[SearchResultIcon["kAuthKey"]=7]="kAuthKey";SearchResultIcon[SearchResultIcon["kAutoclick"]=8]="kAutoclick";SearchResultIcon[SearchResultIcon["kAvatar"]=9]="kAvatar";SearchResultIcon[SearchResultIcon["kBluetooth"]=10]="kBluetooth";SearchResultIcon[SearchResultIcon["kCamera"]=11]="kCamera";SearchResultIcon[SearchResultIcon["kCellular"]=12]="kCellular";SearchResultIcon[SearchResultIcon["kCheckForUpdate"]=13]="kCheckForUpdate";SearchResultIcon[SearchResultIcon["kChrome"]=14]="kChrome";SearchResultIcon[SearchResultIcon["kClock"]=15]="kClock";SearchResultIcon[SearchResultIcon["kContrast"]=16]="kContrast";SearchResultIcon[SearchResultIcon["kCursorClick"]=17]="kCursorClick";SearchResultIcon[SearchResultIcon["kDetailedBuild"]=18]="kDetailedBuild";SearchResultIcon[SearchResultIcon["kDeveloperTags"]=19]="kDeveloperTags";SearchResultIcon[SearchResultIcon["kDiagnostics"]=20]="kDiagnostics";SearchResultIcon[SearchResultIcon["kDictation"]=21]="kDictation";SearchResultIcon[SearchResultIcon["kDisplay"]=22]="kDisplay";SearchResultIcon[SearchResultIcon["kDockedMagnifier"]=23]="kDockedMagnifier";SearchResultIcon[SearchResultIcon["kEthernet"]=24]="kEthernet";SearchResultIcon[SearchResultIcon["kFaceGaze"]=25]="kFaceGaze";SearchResultIcon[SearchResultIcon["kFingerprint"]=26]="kFingerprint";SearchResultIcon[SearchResultIcon["kFirmwareUpdates"]=27]="kFirmwareUpdates";SearchResultIcon[SearchResultIcon["kFolder"]=28]="kFolder";SearchResultIcon[SearchResultIcon["kFolderShared"]=29]="kFolderShared";SearchResultIcon[SearchResultIcon["kFullscreenMagnifier"]=30]="kFullscreenMagnifier";SearchResultIcon[SearchResultIcon["kGeolocation"]=31]="kGeolocation";SearchResultIcon[SearchResultIcon["kGoogleDrive"]=32]="kGoogleDrive";SearchResultIcon[SearchResultIcon["kGooglePlay"]=33]="kGooglePlay";SearchResultIcon[SearchResultIcon["kGraduation"]=34]="kGraduation";SearchResultIcon[SearchResultIcon["kHearing"]=35]="kHearing";SearchResultIcon[SearchResultIcon["kHelp"]=36]="kHelp";SearchResultIcon[SearchResultIcon["kHelpMeRead"]=37]="kHelpMeRead";SearchResultIcon[SearchResultIcon["kHelpMeWrite"]=38]="kHelpMeWrite";SearchResultIcon[SearchResultIcon["kHotspot"]=39]="kHotspot";SearchResultIcon[SearchResultIcon["kInstantTethering"]=40]="kInstantTethering";SearchResultIcon[SearchResultIcon["kKeyboard"]=41]="kKeyboard";SearchResultIcon[SearchResultIcon["kLanguage"]=42]="kLanguage";SearchResultIcon[SearchResultIcon["kLaptop"]=43]="kLaptop";SearchResultIcon[SearchResultIcon["kLock"]=44]="kLock";SearchResultIcon[SearchResultIcon["kMagicBoost"]=45]="kMagicBoost";SearchResultIcon[SearchResultIcon["kMicrophone"]=46]="kMicrophone";SearchResultIcon[SearchResultIcon["kMouse"]=47]="kMouse";SearchResultIcon[SearchResultIcon["kNearbyShare"]=48]="kNearbyShare";SearchResultIcon[SearchResultIcon["kNotifications"]=49]="kNotifications";SearchResultIcon[SearchResultIcon["kOneDrive"]=50]="kOneDrive";SearchResultIcon[SearchResultIcon["kOnScreenKeyboard"]=51]="kOnScreenKeyboard";SearchResultIcon[SearchResultIcon["kPaintbrush"]=52]="kPaintbrush";SearchResultIcon[SearchResultIcon["kPenguin"]=53]="kPenguin";SearchResultIcon[SearchResultIcon["kPersonalization"]=54]="kPersonalization";SearchResultIcon[SearchResultIcon["kPhone"]=55]="kPhone";SearchResultIcon[SearchResultIcon["kPluginVm"]=56]="kPluginVm";SearchResultIcon[SearchResultIcon["kPointingStick"]=57]="kPointingStick";SearchResultIcon[SearchResultIcon["kPower"]=58]="kPower";SearchResultIcon[SearchResultIcon["kPrinter"]=59]="kPrinter";SearchResultIcon[SearchResultIcon["kPrivacyControls"]=60]="kPrivacyControls";SearchResultIcon[SearchResultIcon["kReducedAnimations"]=61]="kReducedAnimations";SearchResultIcon[SearchResultIcon["kReleaseNotes"]=62]="kReleaseNotes";SearchResultIcon[SearchResultIcon["kReset"]=63]="kReset";SearchResultIcon[SearchResultIcon["kRestore"]=64]="kRestore";SearchResultIcon[SearchResultIcon["kScanner"]=65]="kScanner";SearchResultIcon[SearchResultIcon["kSearch"]=66]="kSearch";SearchResultIcon[SearchResultIcon["kSelectToSpeak"]=67]="kSelectToSpeak";SearchResultIcon[SearchResultIcon["kShield"]=68]="kShield";SearchResultIcon[SearchResultIcon["kSnapWindowSuggestions"]=69]="kSnapWindowSuggestions";SearchResultIcon[SearchResultIcon["kStorage"]=70]="kStorage";SearchResultIcon[SearchResultIcon["kStylus"]=71]="kStylus";SearchResultIcon[SearchResultIcon["kSwitchAccess"]=72]="kSwitchAccess";SearchResultIcon[SearchResultIcon["kSync"]=73]="kSync";SearchResultIcon[SearchResultIcon["kSystemPreferences"]=74]="kSystemPreferences";SearchResultIcon[SearchResultIcon["kTextToSpeech"]=75]="kTextToSpeech";SearchResultIcon[SearchResultIcon["kTouchpad"]=76]="kTouchpad";SearchResultIcon[SearchResultIcon["kWallpaper"]=77]="kWallpaper";SearchResultIcon[SearchResultIcon["kWifi"]=78]="kWifi";SearchResultIcon[SearchResultIcon["kZoomIn"]=79]="kZoomIn"})(SearchResultIcon||(SearchResultIcon={}));var search_result_icon_mojomWebui=Object.freeze({__proto__:null,get SearchResultIcon(){return SearchResultIcon},SearchResultIconSpec:SearchResultIconSpec});
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchResultTypeSpec={$:mojo.internal.Enum()};var SearchResultType;(function(SearchResultType){SearchResultType[SearchResultType["MIN_VALUE"]=0]="MIN_VALUE";SearchResultType[SearchResultType["MAX_VALUE"]=2]="MAX_VALUE";SearchResultType[SearchResultType["kSection"]=0]="kSection";SearchResultType[SearchResultType["kSubpage"]=1]="kSubpage";SearchResultType[SearchResultType["kSetting"]=2]="kSetting"})(SearchResultType||(SearchResultType={}));const SearchResultDefaultRankSpec={$:mojo.internal.Enum()};var SearchResultDefaultRank;(function(SearchResultDefaultRank){SearchResultDefaultRank[SearchResultDefaultRank["MIN_VALUE"]=0]="MIN_VALUE";SearchResultDefaultRank[SearchResultDefaultRank["MAX_VALUE"]=2]="MAX_VALUE";SearchResultDefaultRank[SearchResultDefaultRank["kHigh"]=0]="kHigh";SearchResultDefaultRank[SearchResultDefaultRank["kMedium"]=1]="kMedium";SearchResultDefaultRank[SearchResultDefaultRank["kLow"]=2]="kLow"})(SearchResultDefaultRank||(SearchResultDefaultRank={}));const ParentResultBehaviorSpec={$:mojo.internal.Enum()};var ParentResultBehavior;(function(ParentResultBehavior){ParentResultBehavior[ParentResultBehavior["MIN_VALUE"]=0]="MIN_VALUE";ParentResultBehavior[ParentResultBehavior["MAX_VALUE"]=1]="MAX_VALUE";ParentResultBehavior[ParentResultBehavior["kAllowParentResults"]=0]="kAllowParentResults";ParentResultBehavior[ParentResultBehavior["kDoNotIncludeParentResults"]=1]="kDoNotIncludeParentResults"})(ParentResultBehavior||(ParentResultBehavior={}));let SearchResultsObserverPendingReceiver$1=class SearchResultsObserverPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.settings.mojom.SearchResultsObserver",scope)}};let SearchResultsObserverRemote$1=class SearchResultsObserverRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(SearchResultsObserverPendingReceiver$1,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onSearchResultsChanged(){this.proxy.sendMessage(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1.$,null,[],false)}};let SearchResultsObserverReceiver$1=class SearchResultsObserverReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchResultsObserverRemote$1);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1.$,null,impl.onSearchResultsChanged.bind(impl),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}};let SearchResultsObserver$1=class SearchResultsObserver{static get $interfaceName(){return"ash.settings.mojom.SearchResultsObserver"}static getRemote(){let remote=new SearchResultsObserverRemote$1;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}};let SearchResultsObserverCallbackRouter$1=class SearchResultsObserverCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchResultsObserverRemote$1);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onSearchResultsChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1.$,null,this.onSearchResultsChanged.createReceiverHandler(false),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}};let SearchHandlerPendingReceiver$1=class SearchHandlerPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.settings.mojom.SearchHandler",scope)}};let SearchHandlerRemote$1=class SearchHandlerRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(SearchHandlerPendingReceiver$1,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}search(query,maxNumResults,parentResultBehavior){return this.proxy.sendMessage(0,SearchHandler_Search_ParamsSpec$1.$,SearchHandler_Search_ResponseParamsSpec$1.$,[query,maxNumResults,parentResultBehavior],false)}observe(observer){this.proxy.sendMessage(1,SearchHandler_Observe_ParamsSpec.$,null,[observer],false)}};let SearchHandlerReceiver$1=class SearchHandlerReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchHandlerRemote$1);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,SearchHandler_Search_ParamsSpec$1.$,SearchHandler_Search_ResponseParamsSpec$1.$,impl.search.bind(impl),false);this.helper_internal_.registerHandler(1,SearchHandler_Observe_ParamsSpec.$,null,impl.observe.bind(impl),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}};let SearchHandler$1=class SearchHandler{static get $interfaceName(){return"ash.settings.mojom.SearchHandler"}static getRemote(){let remote=new SearchHandlerRemote$1;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}};let SearchHandlerCallbackRouter$1=class SearchHandlerCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchHandlerRemote$1);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.search=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,SearchHandler_Search_ParamsSpec$1.$,SearchHandler_Search_ResponseParamsSpec$1.$,this.search.createReceiverHandler(true),false);this.observe=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1,SearchHandler_Observe_ParamsSpec.$,null,this.observe.createReceiverHandler(false),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}};const SearchResultSpec$1={$:{}};const SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1={$:{}};const SearchHandler_Search_ParamsSpec$1={$:{}};const SearchHandler_Search_ResponseParamsSpec$1={$:{}};const SearchHandler_Observe_ParamsSpec={$:{}};const SearchResultIdentifierSpec={$:{}};mojo.internal.Struct(SearchResultSpec$1.$,"SearchResult",[mojo.internal.StructField("text",0,0,String16Spec.$,null,false,0,undefined,undefined),mojo.internal.StructField("canonicalText",8,0,String16Spec.$,null,false,0,undefined,undefined),mojo.internal.StructField("urlPathWithParameters",16,0,mojo.internal.String,null,false,0,undefined,undefined),mojo.internal.StructField("icon",24,0,SearchResultIconSpec.$,0,false,0,undefined,undefined),mojo.internal.StructField("relevanceScore",32,0,mojo.internal.Double,0,false,0,undefined,undefined),mojo.internal.StructField("settingsPageHierarchy",40,0,mojo.internal.Array(String16Spec.$,false),null,false,0,undefined,undefined),mojo.internal.StructField("defaultRank",28,0,SearchResultDefaultRankSpec.$,0,false,0,undefined,undefined),mojo.internal.StructField("wasGeneratedFromTextMatch",48,0,mojo.internal.Bool,false,false,0,undefined,undefined),mojo.internal.StructField("type",52,0,SearchResultTypeSpec.$,0,false,0,undefined,undefined),mojo.internal.StructField("id",56,0,SearchResultIdentifierSpec.$,null,false,0,undefined,undefined)],[[0,80]]);mojo.internal.Struct(SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1.$,"SearchResultsObserver_OnSearchResultsChanged_Params",[],[[0,8]]);mojo.internal.Struct(SearchHandler_Search_ParamsSpec$1.$,"SearchHandler_Search_Params",[mojo.internal.StructField("query",0,0,String16Spec.$,null,false,0,undefined,undefined),mojo.internal.StructField("maxNumResults",8,0,mojo.internal.Uint32,0,false,0,undefined,undefined),mojo.internal.StructField("parentResultBehavior",12,0,ParentResultBehaviorSpec.$,0,false,0,undefined,undefined)],[[0,24]]);mojo.internal.Struct(SearchHandler_Search_ResponseParamsSpec$1.$,"SearchHandler_Search_ResponseParams",[mojo.internal.StructField("results",0,0,mojo.internal.Array(SearchResultSpec$1.$,false),null,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(SearchHandler_Observe_ParamsSpec.$,"SearchHandler_Observe_Params",[mojo.internal.StructField("observer",0,0,mojo.internal.InterfaceProxy(SearchResultsObserverRemote$1),null,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Union(SearchResultIdentifierSpec.$,"SearchResultIdentifier",{section:{ordinal:0,type:SectionSpec.$},subpage:{ordinal:1,type:SubpageSpec.$},setting:{ordinal:2,type:SettingSpec.$}});var search_mojomWebui=Object.freeze({__proto__:null,get ParentResultBehavior(){return ParentResultBehavior},ParentResultBehaviorSpec:ParentResultBehaviorSpec,SearchHandler:SearchHandler$1,SearchHandlerCallbackRouter:SearchHandlerCallbackRouter$1,SearchHandlerPendingReceiver:SearchHandlerPendingReceiver$1,SearchHandlerReceiver:SearchHandlerReceiver$1,SearchHandlerRemote:SearchHandlerRemote$1,SearchHandler_Observe_ParamsSpec:SearchHandler_Observe_ParamsSpec,SearchHandler_Search_ParamsSpec:SearchHandler_Search_ParamsSpec$1,SearchHandler_Search_ResponseParamsSpec:SearchHandler_Search_ResponseParamsSpec$1,get SearchResultDefaultRank(){return SearchResultDefaultRank},SearchResultDefaultRankSpec:SearchResultDefaultRankSpec,SearchResultIdentifierSpec:SearchResultIdentifierSpec,SearchResultSpec:SearchResultSpec$1,get SearchResultType(){return SearchResultType},SearchResultTypeSpec:SearchResultTypeSpec,SearchResultsObserver:SearchResultsObserver$1,SearchResultsObserverCallbackRouter:SearchResultsObserverCallbackRouter$1,SearchResultsObserverPendingReceiver:SearchResultsObserverPendingReceiver$1,SearchResultsObserverReceiver:SearchResultsObserverReceiver$1,SearchResultsObserverRemote:SearchResultsObserverRemote$1,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec:SearchResultsObserver_OnSearchResultsChanged_ParamsSpec$1});function getTemplate$4(){return html`<!--_html_template_start_--><style include="settings-shared">:host{width:100%}:host([selected]) [focus-row-container]{background-color:var(--cros-sys-highlight_shape)}:host(:not([selected])) [focus-row-container]:hover{background-color:var(--cros-sys-hover_on_subtle)}[focus-row-control][selectable]:focus{background-color:var(--cros-sys-ripple_neutral_on_subtle)}:host-context([dir=rtl]) #actionTypeIcon{transform:scaleX(-1)}[focus-row-container]{width:inherit}#searchResultContainer{align-items:center;display:flex;height:48px;justify-content:center;font:var(--cros-body-2-font)}#resultText{flex-grow:1;margin:var(--cr-toolbar-search-field-term-margin)}iron-icon{margin:var(--cr-toolbar-icon-margin);width:var(--cr-toolbar-icon-container-size)}b{color:var(--cros-sys-on_surface)}</style>
<div focus-row-container>
  
  <div focus-row-control focus-type="rowWrapper" id="searchResultContainer" on-click="onSearchResultSelected" on-keypress="onKeyPress_" aria-disabled="true" selectable>
    <iron-icon id="resultIcon" icon="[[getResultIcon_(searchResult)]]">
    </iron-icon>
    <div id="resultText" aria-hidden="true" inner-h-t-m-l="[[getResultInnerHtml_(searchResult)]]">
    </div>
    <iron-icon id="actionTypeIcon" icon="[[getActionTypeIcon_(searchResult)]]">
    </iron-icon>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function longestCommonSubstrings(string1,string2){let maxLength=0;let string1StartingIndices=[];const dp=Array(string1.length+1).fill([]).map((()=>Array(string2.length+1).fill(0)));for(let i=string1.length-1;i>=0;i--){for(let j=string2.length-1;j>=0;j--){if(string1[i]!==string2[j]){continue}dp[i][j]=dp[i+1][j+1]+1;if(maxLength===dp[i][j]){string1StartingIndices.unshift(i)}if(maxLength<dp[i][j]){maxLength=dp[i][j];string1StartingIndices=[i]}}}return string1StartingIndices.map((idx=>string1.substr(idx,maxLength)))}function isPersonalizationSearchResult(result){return!!result&&typeof result.relativeUrl==="string"}const DELOCALIZED_HYPHEN="-";const HYPHENS=["-","~","ÖŠ","Ö¾","á †","â€","â€‘","â€’","â€“","â€”","â€•","â“","â»","â‚‹","âˆ’","â¸º","â¸»","ã€œ","ã€°","ã‚ ","ï¹˜","ï¹£","ï¼"];const HYPHENS_REGEX_STR=`[${HYPHENS.join("")}]`;const HYPHENS_REGEX=new RegExp(HYPHENS_REGEX_STR,"g");function removeAccents(sourceString){return sourceString.toLocaleLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"")}function normalizeString(sourceString){return removeAccents(sourceString).replace(HYPHENS_REGEX,"")}function boldSubStrings(sourceString,substringsToBold){if(!substringsToBold||!substringsToBold.length){return sourceString}const subStrRegex=new RegExp("()("+substringsToBold.join("|")+")()","ig");return sourceString.replace(subStrRegex,(match=>match.bold()))}const OsSearchResultRowElementBase=FocusRowMixin(I18nMixin(PolymerElement));class OsSearchResultRowElement extends OsSearchResultRowElementBase{static get is(){return"os-search-result-row"}static get template(){return getTemplate$4()}static get properties(){return{selected:{type:Boolean,reflectToAttribute:true,observer:"makeA11yAnnouncementIfSelectedAndUnfocused_"},ariaLabel:{type:String,computed:"computeAriaLabel_(searchResult)",reflectToAttribute:true},searchQuery:String,searchResult:Object,listLength:Number,resultText_:{type:String,computed:"computeResultText_(searchResult)"}}}makeA11yAnnouncementIfSelectedAndUnfocused_(){if(!this.selected||this.lastFocused){return}getInstance().announce(this.ariaLabel)}computeResultText_(){return mojoString16ToString(this.searchResult.text)}getMatchingIndividualCharsBolded_(){return boldSubStrings(this.resultText_,this.searchQuery.split(""))}getModifiedInnerHtmlToken_(innerHtmlToken,normalizedQuery,queryTokens){const normalizedToken=normalizeString(innerHtmlToken);if(normalizedQuery.includes(normalizedToken)){return normalizedToken?innerHtmlToken.bold():innerHtmlToken}const queryTokenFilter=queryToken=>!!queryToken&&normalizedToken.includes(queryToken);const queryTokenToSegment=queryToken=>{const regExpStr=queryToken.split("").join(`${HYPHENS_REGEX_STR}*`);const innerHtmlTokenNoAccents=removeAccents(innerHtmlToken);const matchesNoAccents=innerHtmlTokenNoAccents.match(new RegExp(regExpStr,"g"))||[];return matchesNoAccents.map((match=>innerHtmlToken.toLocaleLowerCase().substr(innerHtmlTokenNoAccents.indexOf(match),match.length)))};const matches=queryTokens.filter(queryTokenFilter).map(queryTokenToSegment).flat();if(!matches.length){return innerHtmlToken}const maxStrLen=matches.reduce(((a,b)=>a.length>b.length?a:b)).length;const bolded=matches.filter((sourceString=>sourceString.length===maxStrLen));return boldSubStrings(innerHtmlToken,bolded)}generateQueryTokens_(normalizedQuery){const normalizedResultText=normalizeString(this.resultText_);const segmentToTokenMap=new Map;normalizedQuery.split(/\s/).forEach((querySegment=>{const queryTokens=longestCommonSubstrings(querySegment,normalizedResultText);if(segmentToTokenMap.has(querySegment)){const segmentTokens=segmentToTokenMap.get(querySegment).concat(queryTokens);segmentToTokenMap.set(querySegment,segmentTokens);return}segmentToTokenMap.set(querySegment,queryTokens)}));const getLongestTokensPerSegment=([querySegment,queryTokens])=>{if(!queryTokens.length){return[]}const maxLengthQueryToken=Math.max(...queryTokens.map((queryToken=>queryToken.length)));if(maxLengthQueryToken===1&&querySegment.length>1){return[]}return queryTokens.filter((queryToken=>queryToken.length===maxLengthQueryToken))};const inOrderTokenGroups=Array.from(segmentToTokenMap).map(getLongestTokensPerSegment);const inOrderTokens=[...new Set(inOrderTokenGroups.flat())];return this.mergeValidTokensToCompounded_(inOrderTokens)}mergeValidTokensToCompounded_(inOrderQueryTokens){const longestCompoundWordTokens=[];const hyphenatedResultText=removeAccents(this.resultText_).replace(HYPHENS_REGEX,DELOCALIZED_HYPHEN);let i=0;while(i<inOrderQueryTokens.length){let prefixToken=inOrderQueryTokens[i];i++;while(i<inOrderQueryTokens.length){const compoundToken=prefixToken+DELOCALIZED_HYPHEN+inOrderQueryTokens[i];if(!hyphenatedResultText.includes(compoundToken)){break}prefixToken=compoundToken;i++}longestCompoundWordTokens.push(prefixToken)}return longestCompoundWordTokens.map((token=>normalizeString(token)))}getTokenizeMatchedBoldTagged_(){const normalizedQuery=normalizeString(this.searchQuery);const queryTokens=this.generateQueryTokens_(normalizedQuery);const innerHtmlTokensWithBoldTags=this.resultText_.split(/\s/).map((innerHtmlToken=>this.getModifiedInnerHtmlToken_(innerHtmlToken,normalizedQuery,queryTokens)));const blankspaces=this.resultText_.match(/\s/g);if(!blankspaces){return innerHtmlTokensWithBoldTags.join("")}return innerHtmlTokensWithBoldTags.map(((token,idx)=>idx!==blankspaces.length?token+blankspaces[idx]:token)).join("")}getResultInnerHtml_(){if(!this.searchResult.wasGeneratedFromTextMatch){return sanitizeInnerHtml(this.resultText_)}if(this.resultText_.match(/\s/)||this.resultText_.toLocaleLowerCase()!==this.resultText_.toLocaleUpperCase()){return sanitizeInnerHtml(this.getTokenizeMatchedBoldTagged_())}return sanitizeInnerHtml(this.getMatchingIndividualCharsBolded_())}computeAriaLabel_(){assert(typeof this.focusRowIndex==="number");return this.i18n("searchResultSelected",this.focusRowIndex+1,this.listLength,this.computeResultText_())}onKeyPress_(e){if(e.key==="Enter"){e.stopPropagation();this.onSearchResultSelected()}}recordSearchResultMetrics_(){if(isPersonalizationSearchResult(this.searchResult)){chrome.metricsPrivate.recordSparseValue("ChromeOS.Settings.SearchResultPersonalizationSelected",this.searchResult.searchConceptId);chrome.metricsPrivate.recordEnumerationValue("Ash.Personalization.EntryPoint",loadTimeData.getInteger("settingsSearchEntryPoint"),loadTimeData.getInteger("entryPointEnumSize"));return}const settingsSearchResult=this.searchResult;chrome.metricsPrivate.recordEnumerationValue("ChromeOS.Settings.SearchResultTypeSelected",settingsSearchResult.type,SearchResultType.MAX_VALUE);const metricArgs=(type,id)=>{switch(type){case SearchResultType.kSection:return{metricName:"ChromeOS.Settings.SearchResultSectionSelected",value:id.section};case SearchResultType.kSubpage:return{metricName:"ChromeOS.Settings.SearchResultSubpageSelected",value:id.subpage};case SearchResultType.kSetting:return{metricName:"ChromeOS.Settings.SearchResultSettingSelected",value:id.setting};default:assertNotReached("Search Result Type not specified.")}};const args=metricArgs(settingsSearchResult.type,settingsSearchResult.id);if(args.value){chrome.metricsPrivate.recordSparseValue(args.metricName,args.value)}}onSearchResultSelected(){if(isPersonalizationSearchResult(this.searchResult)){this.recordSearchResultMetrics_();OpenWindowProxyImpl.getInstance().openUrl(loadTimeData.getString("personalizationAppUrl")+this.searchResult.relativeUrl);return}const settingsSearchResult=this.searchResult;assert(settingsSearchResult.urlPathWithParameters,"Url path is empty.");this.recordSearchResultMetrics_();const pathAndOptParams=settingsSearchResult.urlPathWithParameters.split("?");assert(pathAndOptParams.length<=2,"Path and params format error.");const route=Router.getInstance().getRouteForPath("/"+pathAndOptParams[0]);assert(route,"Supplied path does not map to an existing route: "+pathAndOptParams[0]);const paramsString=`search=${encodeURIComponent(this.searchQuery)}`+(pathAndOptParams.length===2?`&${pathAndOptParams[1]}`:``);const params=new URLSearchParams(paramsString);Router.getInstance().navigateTo(route,params);const event=new CustomEvent("navigated-to-result-route",{bubbles:true,composed:true});this.dispatchEvent(event)}getResultIcon_(){if(isPersonalizationSearchResult(this.searchResult)){return"os-settings:personalization"}const settingsSearchResult=this.searchResult;switch(settingsSearchResult.icon){case SearchResultIcon.kA11y:return"os-settings:accessibility";case SearchResultIcon.kAlwaysShowScrollbars:return"os-settings:scroll-vertical";case SearchResultIcon.kAndroid:return"os-settings:android";case SearchResultIcon.kAppsParentalControls:return"os-settings:apps-parental-controls";case SearchResultIcon.kAppsGrid:return"os-settings:apps";case SearchResultIcon.kAssistant:return"os-settings:assistant";case SearchResultIcon.kAudio:return"os-settings:device-audio";case SearchResultIcon.kAuthKey:return"os-settings:auth-key";case SearchResultIcon.kAutoclick:return"os-settings:autoclick";case SearchResultIcon.kSwitchAccess:return"os-settings:switch-access";case SearchResultIcon.kAvatar:return"os-settings:privacy-manage-people";case SearchResultIcon.kBluetooth:return"cr:bluetooth";case SearchResultIcon.kCamera:return"os-settings:camera";case SearchResultIcon.kCellular:return"os-settings:cellular";case SearchResultIcon.kCheckForUpdate:return"os-settings:about-update-complete";case SearchResultIcon.kChrome:return"os-settings:chrome";case SearchResultIcon.kClock:return"os-settings:clock";case SearchResultIcon.kContrast:return"os-settings:contrast";case SearchResultIcon.kCursorClick:return"os-settings:cursor-click";case SearchResultIcon.kDetailedBuild:return"os-settings:about-additional-details";case SearchResultIcon.kDeveloperTags:return"os-settings:developer-tags";case SearchResultIcon.kDiagnostics:return"os-settings:about-diagnostics";case SearchResultIcon.kDictation:return"os-settings:dictation";case SearchResultIcon.kDisplay:return"os-settings:device-display";case SearchResultIcon.kDockedMagnifier:return"os-settings:docked-magnifier";case SearchResultIcon.kEthernet:return"os-settings:settings-ethernet";case SearchResultIcon.kFaceGaze:return"os-settings:face-gaze";case SearchResultIcon.kFingerprint:return"os-settings:fingerprint";case SearchResultIcon.kFirmwareUpdates:return"os-settings:about-firmware-updates";case SearchResultIcon.kFolder:return"os-settings:folder-outline";case SearchResultIcon.kFolderShared:return"os-settings:folder-shared";case SearchResultIcon.kFullscreenMagnifier:return"os-settings:fullscreen-magnifier";case SearchResultIcon.kGeolocation:return"os-settings:geolocation";case SearchResultIcon.kGoogleDrive:return"os-settings:google-drive";case SearchResultIcon.kGooglePlay:return"os-settings:google-play";case SearchResultIcon.kGraduation:return"os-settings:graduation";case SearchResultIcon.kHearing:return"os-settings:a11y-hearing";case SearchResultIcon.kHelp:return"os-settings:about-help";case SearchResultIcon.kHelpMeRead:return"os-settings:help-me-read";case SearchResultIcon.kHelpMeWrite:return"os-settings:help-me-write";case SearchResultIcon.kHotspot:return"os-settings:hotspot";case SearchResultIcon.kInstantTethering:return"os-settings:magic-tethering";case SearchResultIcon.kKeyboard:return"os-settings:device-keyboard";case SearchResultIcon.kLanguage:return"os-settings:language";case SearchResultIcon.kLaptop:return"os-settings:laptop-chromebook";case SearchResultIcon.kLock:return"os-settings:lock";case SearchResultIcon.kMagicBoost:return"os-settings:magic-boost";case SearchResultIcon.kMicrophone:return"os-settings:microphone";case SearchResultIcon.kMouse:return"os-settings:device-mouse";case SearchResultIcon.kNearbyShare:if(loadTimeData.getBoolean("isNameEnabled")){return"nearby-share-internal:nearby-share"}return"os-settings:nearby-share";case SearchResultIcon.kNotifications:return"os-settings:apps-notifications";case SearchResultIcon.kOneDrive:return"os-settings:onedrive";case SearchResultIcon.kOnScreenKeyboard:return"os-settings:on-screen-keyboard";case SearchResultIcon.kPaintbrush:return"os-settings:personalization";case SearchResultIcon.kPenguin:return"os-settings:crostini-mascot";case SearchResultIcon.kPersonalization:return"os-settings:personalization-menu";case SearchResultIcon.kPhone:return"os-settings:connected-devices-android-phone";case SearchResultIcon.kPluginVm:return"os-settings:plugin-vm";case SearchResultIcon.kPointingStick:return"os-settings:device-pointing-stick";case SearchResultIcon.kPower:return"os-settings:power";case SearchResultIcon.kPrinter:return"os-settings:device-print";case SearchResultIcon.kPrivacyControls:return"os-settings:privacy-controls";case SearchResultIcon.kReducedAnimations:return"os-settings:reduced-animations";case SearchResultIcon.kReleaseNotes:return"os-settings:about-release-notes";case SearchResultIcon.kReset:return"os-settings:startup";case SearchResultIcon.kRestore:return"os-settings:restore";case SearchResultIcon.kScanner:return"os-settings:device-scan";case SearchResultIcon.kSearch:return"os-settings:explore";case SearchResultIcon.kSelectToSpeak:return"os-settings:select-to-speak";case SearchResultIcon.kShield:return"cr:security";case SearchResultIcon.kSnapWindowSuggestions:return"os-settings:snap-window-suggestions";case SearchResultIcon.kStorage:return"os-settings:storage";case SearchResultIcon.kStylus:return"os-settings:device-stylus";case SearchResultIcon.kSync:return"os-settings:sync";case SearchResultIcon.kSystemPreferences:return"os-settings:system-preferences";case SearchResultIcon.kTextToSpeech:return"os-settings:text-to-speech";case SearchResultIcon.kTouchpad:return"os-settings:device-touchpad";case SearchResultIcon.kWallpaper:return"os-settings:wallpaper";case SearchResultIcon.kWifi:return"os-settings:network-wifi";case SearchResultIcon.kZoomIn:return"os-settings:zoom-in";default:return"os-settings:settings-general"}}getActionTypeIcon_(){return isPersonalizationSearchResult(this.searchResult)?"cr:open-in-new":"cr:arrow-forward"}}customElements.define(OsSearchResultRowElement.is,OsSearchResultRowElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const SearchConceptIdSpec={$:mojo.internal.Enum()};var SearchConceptId;(function(SearchConceptId){SearchConceptId[SearchConceptId["MIN_VALUE"]=0]="MIN_VALUE";SearchConceptId[SearchConceptId["MAX_VALUE"]=500]="MAX_VALUE";SearchConceptId[SearchConceptId["kPersonalization"]=0]="kPersonalization";SearchConceptId[SearchConceptId["kChangeWallpaper"]=100]="kChangeWallpaper";SearchConceptId[SearchConceptId["kTimeOfDayWallpaper"]=101]="kTimeOfDayWallpaper";SearchConceptId[SearchConceptId["kChangeDeviceAccountImage"]=200]="kChangeDeviceAccountImage";SearchConceptId[SearchConceptId["kAmbientMode"]=300]="kAmbientMode";SearchConceptId[SearchConceptId["kAmbientModeChooseSource"]=301]="kAmbientModeChooseSource";SearchConceptId[SearchConceptId["kAmbientModeTurnOff"]=302]="kAmbientModeTurnOff";SearchConceptId[SearchConceptId["kAmbientModeGooglePhotos"]=303]="kAmbientModeGooglePhotos";SearchConceptId[SearchConceptId["kAmbientModeArtGallery"]=304]="kAmbientModeArtGallery";SearchConceptId[SearchConceptId["kAmbientModeTurnOn"]=305]="kAmbientModeTurnOn";SearchConceptId[SearchConceptId["kAmbientModeTimeOfDay"]=306]="kAmbientModeTimeOfDay";SearchConceptId[SearchConceptId["kDarkMode"]=400]="kDarkMode";SearchConceptId[SearchConceptId["kDarkModeSchedule"]=401]="kDarkModeSchedule";SearchConceptId[SearchConceptId["kDarkModeTurnOff"]=402]="kDarkModeTurnOff";SearchConceptId[SearchConceptId["kDarkModeTurnOn"]=403]="kDarkModeTurnOn";SearchConceptId[SearchConceptId["kDynamicColor"]=404]="kDynamicColor";SearchConceptId[SearchConceptId["kKeyboardBacklight"]=500]="kKeyboardBacklight"})(SearchConceptId||(SearchConceptId={}));class SearchResultsObserverPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.personalization_app.mojom.SearchResultsObserver",scope)}}class SearchResultsObserverRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(SearchResultsObserverPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}onSearchResultsChanged(){this.proxy.sendMessage(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$,null,[],false)}}class SearchResultsObserverReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchResultsObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$,null,impl.onSearchResultsChanged.bind(impl),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}}class SearchResultsObserver{static get $interfaceName(){return"ash.personalization_app.mojom.SearchResultsObserver"}static getRemote(){let remote=new SearchResultsObserverRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class SearchResultsObserverCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchResultsObserverRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.onSearchResultsChanged=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$,null,this.onSearchResultsChanged.createReceiverHandler(false),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}class SearchHandlerPendingReceiver{constructor(handle){this.handle=mojo.internal.interfaceSupport.getEndpointForReceiver(handle)}bindInBrowser(scope="context"){mojo.internal.interfaceSupport.bind(this.handle,"ash.personalization_app.mojom.SearchHandler",scope)}}class SearchHandlerRemote{constructor(handle){this.proxy=new mojo.internal.interfaceSupport.InterfaceRemoteBase(SearchHandlerPendingReceiver,handle);this.$=new mojo.internal.interfaceSupport.InterfaceRemoteBaseWrapper(this.proxy);this.onConnectionError=this.proxy.getConnectionErrorEventRouter()}search(query,maxNumResults){return this.proxy.sendMessage(0,SearchHandler_Search_ParamsSpec.$,SearchHandler_Search_ResponseParamsSpec.$,[query,maxNumResults],false)}addObserver(observer){this.proxy.sendMessage(1,SearchHandler_AddObserver_ParamsSpec.$,null,[observer],false)}}class SearchHandlerReceiver{constructor(impl){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchHandlerRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.helper_internal_.registerHandler(0,SearchHandler_Search_ParamsSpec.$,SearchHandler_Search_ResponseParamsSpec.$,impl.search.bind(impl),false);this.helper_internal_.registerHandler(1,SearchHandler_AddObserver_ParamsSpec.$,null,impl.addObserver.bind(impl),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}}class SearchHandler{static get $interfaceName(){return"ash.personalization_app.mojom.SearchHandler"}static getRemote(){let remote=new SearchHandlerRemote;remote.$.bindNewPipeAndPassReceiver().bindInBrowser();return remote}}class SearchHandlerCallbackRouter{constructor(){this.helper_internal_=new mojo.internal.interfaceSupport.InterfaceReceiverHelperInternal(SearchHandlerRemote);this.$=new mojo.internal.interfaceSupport.InterfaceReceiverHelper(this.helper_internal_);this.router_=new mojo.internal.interfaceSupport.CallbackRouter;this.search=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(0,SearchHandler_Search_ParamsSpec.$,SearchHandler_Search_ResponseParamsSpec.$,this.search.createReceiverHandler(true),false);this.addObserver=new mojo.internal.interfaceSupport.InterfaceCallbackReceiver(this.router_);this.helper_internal_.registerHandler(1,SearchHandler_AddObserver_ParamsSpec.$,null,this.addObserver.createReceiverHandler(false),false);this.onConnectionError=this.helper_internal_.getConnectionErrorEventRouter()}removeListener(id){return this.router_.removeListener(id)}}const SearchResultSpec={$:{}};const SearchResultsObserver_OnSearchResultsChanged_ParamsSpec={$:{}};const SearchHandler_Search_ParamsSpec={$:{}};const SearchHandler_Search_ResponseParamsSpec={$:{}};const SearchHandler_AddObserver_ParamsSpec={$:{}};mojo.internal.Struct(SearchResultSpec.$,"SearchResult",[mojo.internal.StructField("searchConceptId",0,0,SearchConceptIdSpec.$,0,false,0,undefined,undefined),mojo.internal.StructField("text",8,0,String16Spec.$,null,false,0,undefined,undefined),mojo.internal.StructField("relativeUrl",16,0,mojo.internal.String,null,false,0,undefined,undefined),mojo.internal.StructField("relevanceScore",24,0,mojo.internal.Double,0,false,0,undefined,undefined)],[[0,40]]);mojo.internal.Struct(SearchResultsObserver_OnSearchResultsChanged_ParamsSpec.$,"SearchResultsObserver_OnSearchResultsChanged_Params",[],[[0,8]]);mojo.internal.Struct(SearchHandler_Search_ParamsSpec.$,"SearchHandler_Search_Params",[mojo.internal.StructField("query",0,0,String16Spec.$,null,false,0,undefined,undefined),mojo.internal.StructField("maxNumResults",8,0,mojo.internal.Uint32,0,false,0,undefined,undefined)],[[0,24]]);mojo.internal.Struct(SearchHandler_Search_ResponseParamsSpec.$,"SearchHandler_Search_ResponseParams",[mojo.internal.StructField("results",0,0,mojo.internal.Array(SearchResultSpec.$,false),null,false,0,undefined,undefined)],[[0,16]]);mojo.internal.Struct(SearchHandler_AddObserver_ParamsSpec.$,"SearchHandler_AddObserver_Params",[mojo.internal.StructField("observer",0,0,mojo.internal.InterfaceProxy(SearchResultsObserverRemote),null,false,0,undefined,undefined)],[[0,16]]);var personalization_search_mojomWebui=Object.freeze({__proto__:null,get SearchConceptId(){return SearchConceptId},SearchConceptIdSpec:SearchConceptIdSpec,SearchHandler:SearchHandler,SearchHandlerCallbackRouter:SearchHandlerCallbackRouter,SearchHandlerPendingReceiver:SearchHandlerPendingReceiver,SearchHandlerReceiver:SearchHandlerReceiver,SearchHandlerRemote:SearchHandlerRemote,SearchHandler_AddObserver_ParamsSpec:SearchHandler_AddObserver_ParamsSpec,SearchHandler_Search_ParamsSpec:SearchHandler_Search_ParamsSpec,SearchHandler_Search_ResponseParamsSpec:SearchHandler_Search_ResponseParamsSpec,SearchResultSpec:SearchResultSpec,SearchResultsObserver:SearchResultsObserver,SearchResultsObserverCallbackRouter:SearchResultsObserverCallbackRouter,SearchResultsObserverPendingReceiver:SearchResultsObserverPendingReceiver,SearchResultsObserverReceiver:SearchResultsObserverReceiver,SearchResultsObserverRemote:SearchResultsObserverRemote,SearchResultsObserver_OnSearchResultsChanged_ParamsSpec:SearchResultsObserver_OnSearchResultsChanged_ParamsSpec});
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let personalizationSearchHandler=null;function setPersonalizationSearchHandlerForTesting(testSearchHandler){personalizationSearchHandler=testSearchHandler}function getPersonalizationSearchHandler(){if(!personalizationSearchHandler){personalizationSearchHandler=SearchHandler.getRemote()}return personalizationSearchHandler}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let settingsSearchHandler=null;function setSettingsSearchHandlerForTesting(testSearchHandler){settingsSearchHandler=testSearchHandler}function getSettingsSearchHandler(){if(settingsSearchHandler){return settingsSearchHandler}settingsSearchHandler=SearchHandler$1.getRemote();return settingsSearchHandler}
// Copyright 2022 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function mergeResults(a,b,maxNumResults){return a.concat(b).sort(((x,y)=>y.relevanceScore-x.relevanceScore)).slice(0,maxNumResults)}async function combinedSearch(query,maxNumResults,parentResultBehavior){const[settingsResponse,personalizationResponse]=await Promise.all([getSettingsSearchHandler().search(query,maxNumResults,parentResultBehavior),getPersonalizationSearchHandler().search(query,maxNumResults)]);return{results:mergeResults(settingsResponse.results,personalizationResponse.results,maxNumResults)}}function getTemplate$3(){return html`<!--_html_template_start_--><style include="settings-shared">:host{--cr-toolbar-search-field-background:var(--cros-sys-input_field_on_shaded);--cr-toolbar-focused-min-height:40px;--cr-toolbar-icon-container-size:32px;--cr-toolbar-icon-margin:8px 16px;--cr-toolbar-search-field-icon-opacity:1;--cr-toolbar-search-field-narrow-mode-prompt-opacity:1;--cr-toolbar-search-field-prompt-opacity:1;--cr-toolbar-search-icon-margin-inline-start:16px;--cr-toolbar-query-exists-min-height:var(--cr-toolbar-focused-min-height);--separator-height:8px;-webkit-tap-highlight-color:transparent;display:flex;flex-basis:var(--cr-toolbar-field-width);transition:width 150ms cubic-bezier(.4,0,.2,1);width:var(--cr-toolbar-field-width)}@media (prefers-color-scheme:dark){:host{--cr-toolbar-search-field-narrow-mode-prompt-opacity:1}}:host([narrow]:not([showing-search])){flex-direction:row;justify-content:flex-end}:host([narrow][showing-search]){justify-content:center}cr-toolbar-search-field{--cr-toolbar-search-field-term-margin:0;--cr-toolbar-search-field-border-radius:var(--settings-toolbar-search-field-border-radius);--cr-toolbar-search-field-paper-spinner-margin:0 12px;--cr-toolbar-search-field-input-icon-color:var(--cros-icon-color-primary);--cr-toolbar-search-field-input-text-color:var(--cros-text-color-primary);--cr-toolbar-search-field-input-caret-color:currentColor;--cr-toolbar-search-field-prompt-color:var(--cros-text-color-secondary);--cr-toolbar-icon-button-focus-outline-color:var(--cros-focus-ring-color);--cr-toolbar-field-max-width:var(--cr-toolbar-field-width);font:var(--cros-body-2-font);height:var(--settings-toolbar-search-box-height)}:host([narrow][showing-search]) cr-toolbar-search-field{background-color:var(--cr-toolbar-search-field-background)}:host([narrow]:not([showing-search])) cr-toolbar-search-field{padding-inline-end:var(--settings-toolbar-padding-inline-end)}:host([showing-search]:focus-within) cr-toolbar-search-field{--cr-toolbar-search-field-background:var(--cros-bg-color-elevation-3);box-shadow:var(--cr-elevation-1);min-height:var(--cr-toolbar-focused-min-height)}:host([has-search-query]) cr-toolbar-search-field{min-height:var(--cr-toolbar-query-exists-min-height)}:host(:not(:focus-within)) cr-toolbar-search-field{--cr-toolbar-search-field-cursor:pointer}:host([should-show-dropdown_]:focus-within) cr-toolbar-search-field{--cr-toolbar-search-field-border-radius:20px 20px 0 0;box-shadow:var(--cr-elevation-3);height:56px;margin-top:var(--separator-height);padding-bottom:var(--separator-height)}:host-context([chrome-refresh-2023]) cr-toolbar-search-field{outline-offset:0}:host-context([chrome-refresh-2023]):host([showing-search]) cr-toolbar-search-field,:host-context([chrome-refresh-2023]):host-context(html:not(.focus-outline-visible)) cr-toolbar-search-field{outline:0}iron-dropdown{margin-top:72px}iron-dropdown [slot=dropdown-content]{background-color:var(--cros-bg-color-elevation-3);border-radius:0 0 20px 20px;box-shadow:var(--cr-elevation-3);display:table;padding-bottom:8px;width:var(--cr-toolbar-field-width)}iron-list{max-height:50vh}.pill-button-with-icon{--border-color:transparent;--cr-button-height:24px;--hover-bg-color:var(--cros-highlight-color);--text-color:var(--cros-text-color-secondary);border-radius:24px;margin-inline-end:8px;padding:4px 8px}.pill-button-with-icon:hover{--text-color:var(--cros-text-color-prominent)}#noSearchResultsContainer{height:32px;line-height:32px;margin-inline-start:24px;font:var(--cros-body-2-font)}#reportSearchResult{display:flex;justify-content:flex-end;margin-inline-start:8px}.separator{background-color:var(--cros-bg-color-elevation-3);border-top:1px solid var(--cros-sys-separator);height:var(--separator-height);margin-inline-end:0;margin-inline-start:0;margin-top:-9px}</style>
<cr-toolbar-search-field id="search" narrow="[[narrow]]" on-search-icon-clicked="onSearchIconClicked_" label="Search settings" clear-label="Clear search" showing-search="{{showingSearch}}" spinner-active="[[spinnerActive]]">
</cr-toolbar-search-field>
<iron-dropdown id="searchResults" opened="[[shouldShowDropdown_]]" allow-outside-scroll no-cancel-on-outside-click>
  
  <div slot="dropdown-content">
    <div class="separator"></div>
    <iron-list id="searchResultList" selection-enabled risk-selection items="[[searchResults_]]" selected-item="{{selectedItem_}}" on-selected-item-changed="onSelectedItemChanged_">
      <template>
        <os-search-result-row actionable search-result="[[item]]" search-query="[[getCurrentQuery_(searchResults_)]]" selected="[[isItemSelected_(item, selectedItem_)]]" tabindex$="[[getRowTabIndex_(item, selectedItem_,
                shouldShowDropdown_)]]" iron-list-tab-index$="[[getRowTabIndex_(item, selectedItem_,
                shouldShowDropdown_)]]" on-navigated-to-result-route="onNavigatedToResultRowRoute_" last-focused="{{lastFocused_}}" list-blurred="{{listBlurred_}}" list-length="[[getListLength_(searchResults_)]]" focus-row-index="[[index]]" first$="[[!index]]">
        </os-search-result-row>
      </template>
    </iron-list>
  
    <div id="noSearchResultsContainer" aria-hidden="true" hidden="[[searchResultsExist_]]">
        No search results found
    </div>
    
      <div id="reportSearchResult">
        <cr-button id="reportSearchResultButton" class="pill-button-with-icon" hidden="[[shouldHideFeedbackButton_]]" on-click="onSendFeedbackClick_">
            <iron-icon class="search-feedback-icon" icon="os-settings:feedback" slot="prefix-icon">
            </iron-icon>
            <span>Report this search result</span>
        </cr-button>
      </div>
    
  </div>
</iron-dropdown>
<!--_html_template_end_-->`}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$2=null;class OsSettingsSearchBoxBrowserProxyImpl{static getInstance(){return instance$2||(instance$2=new OsSettingsSearchBoxBrowserProxyImpl)}static setInstanceForTesting(obj){instance$2=obj}openSearchFeedbackDialog(descriptionTemplate){chrome.send("openSearchFeedbackDialog",[descriptionTemplate])}}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
const MAX_NUM_SEARCH_RESULTS=5;const SEARCH_REQUEST_METRIC_NAME="ChromeOS.Settings.SearchRequests";const USER_ACTION_ON_SEARCH_RESULTS_SHOWN_METRIC_NAME="ChromeOS.Settings.UserActionOnSearchResultsShown";var OsSettingSearchRequestTypes;(function(OsSettingSearchRequestTypes){OsSettingSearchRequestTypes[OsSettingSearchRequestTypes["ANY_SEARCH_REQUEST"]=0]="ANY_SEARCH_REQUEST";OsSettingSearchRequestTypes[OsSettingSearchRequestTypes["DISCARED_RESULTS_SEARCH_REQUEST"]=1]="DISCARED_RESULTS_SEARCH_REQUEST";OsSettingSearchRequestTypes[OsSettingSearchRequestTypes["SHOWN_RESULTS_SEARCH_REQUEST"]=2]="SHOWN_RESULTS_SEARCH_REQUEST"})(OsSettingSearchRequestTypes||(OsSettingSearchRequestTypes={}));var OsSettingSearchBoxUserAction;(function(OsSettingSearchBoxUserAction){OsSettingSearchBoxUserAction[OsSettingSearchBoxUserAction["SEARCH_RESULT_CLICKED"]=0]="SEARCH_RESULT_CLICKED";OsSettingSearchBoxUserAction[OsSettingSearchBoxUserAction["CLICKED_OUT_OF_SEARCH_BOX"]=1]="CLICKED_OUT_OF_SEARCH_BOX"})(OsSettingSearchBoxUserAction||(OsSettingSearchBoxUserAction={}));const OsSettingsSearchBoxElementBase=I18nMixin(PolymerElement);class OsSettingsSearchBoxElement extends OsSettingsSearchBoxElementBase{static get is(){return"os-settings-search-box"}static get template(){return getTemplate$3()}static get properties(){return{narrow:{type:Boolean,reflectToAttribute:true},showingSearch:{type:Boolean,value:false,notify:true,reflectToAttribute:true},hasSearchQuery:{type:Boolean,value:false,reflectToAttribute:true},spinnerActive:Boolean,selectedItem_:{type:Object},lastSelectedItem_:{type:Object},searchResults_:{type:Array,value:[],observer:"onSearchResultsChanged_"},shouldShowDropdown_:{type:Boolean,value:false,reflectToAttribute:true},searchResultsExist_:{type:Boolean,value:false,computed:"computeSearchResultsExist_(searchResults_)"},shouldHideFeedbackButton_:{type:Boolean,computed:"computeShouldHideFeedbackButton_("+"hasSearchQuery, searchResultsExist_)"},lastFocused_:Object,listBlurred_:Boolean,searchRequestCount_:{type:Number,value:0}}}constructor(){super();this.settingsSearchResultObserverReceiver_=null;this.personalizationSearchResultObserverReceiver_=null;this.osSettingsSearchBoxBrowserProxy_=OsSettingsSearchBoxBrowserProxyImpl.getInstance()}ready(){super.ready();this.addEventListener("blur",this.onBlur_);this.addEventListener("keydown",this.onKeyDown_);this.addEventListener("search-changed",this.onSearchChanged_)}connectedCallback(){super.connectedCallback();const toolbarSearchField=this.$.search;const searchInput=toolbarSearchField.getSearchInput();if(Router.getInstance().currentRoute===routes.BASIC){toolbarSearchField.showAndFocus()}searchInput.addEventListener("focus",this.onSearchInputFocused_.bind(this));searchInput.addEventListener("mousedown",this.onSearchInputMousedown_.bind(this));const urlSearchQuery=Router.getInstance().getQueryParameters().get("search")||"";toolbarSearchField.setValue(urlSearchQuery,true);window.addEventListener("beforeunload",(()=>{chrome.metricsPrivate.recordSparseValue("ChromeOS.Settings.SearchRequestsPerSession",this.searchRequestCount_)}));this.personalizationSearchResultObserverReceiver_=new SearchResultsObserverReceiver(this);getPersonalizationSearchHandler().addObserver(this.personalizationSearchResultObserverReceiver_.$.bindNewPipeAndPassRemote());this.settingsSearchResultObserverReceiver_=new SearchResultsObserverReceiver$1(this);getSettingsSearchHandler().observe(this.settingsSearchResultObserverReceiver_.$.bindNewPipeAndPassRemote())}disconnectedCallback(){super.disconnectedCallback();assert(this.personalizationSearchResultObserverReceiver_,"Personalization search observer should be initialized");this.personalizationSearchResultObserverReceiver_.$.close();assert(this.settingsSearchResultObserverReceiver_,"Settings search observer should be initialized");this.settingsSearchResultObserverReceiver_.$.close()}onSearchResultsChanged(){this.fetchSearchResults_()}getSelectedOsSearchResultRow_(){return castExists(this.$.searchResultList.querySelector("os-search-result-row[selected]"),"No OsSearchResultRow is selected.")}getCurrentQuery_(){return this.$.search.getSearchInput().value}computeShouldHideFeedbackButton_(){return this.searchResultsExist_||!this.hasSearchQuery}computeSearchResultsExist_(){return this.searchResults_.length!==0}onSearchChanged_(){this.hasSearchQuery=this.getCurrentQuery_().trim().length!==0;this.fetchSearchResults_()}fetchSearchResults_(){const query=this.getCurrentQuery_();if(query===""){this.searchResults_=[];return}this.spinnerActive=true;const queryMojoString16=stringToMojoString16(query);const timeOfSearchRequest=Date.now();combinedSearch(queryMojoString16,MAX_NUM_SEARCH_RESULTS,ParentResultBehavior.kAllowParentResults).then((response=>{const latencyMs=Date.now()-timeOfSearchRequest;chrome.metricsPrivate.recordTime("ChromeOS.Settings.SearchLatency",latencyMs);this.onSearchResultsReceived_(query,response.results);const event=new CustomEvent("search-results-fetched",{bubbles:true,composed:true});this.dispatchEvent(event)}));++this.searchRequestCount_;chrome.metricsPrivate.recordEnumerationValue(SEARCH_REQUEST_METRIC_NAME,OsSettingSearchRequestTypes.ANY_SEARCH_REQUEST,Object.keys(OsSettingSearchRequestTypes).length);chrome.metricsPrivate.recordSparseValue("ChromeOS.Settings.NumCharsOfQueries",query.length)}onSearchResultsReceived_(query,results){chrome.metricsPrivate.recordSparseValue("ChromeOS.Settings.NumSearchResultsFetched",results.length);const shouldDiscardResults=query!==this.getCurrentQuery_();chrome.metricsPrivate.recordEnumerationValue(SEARCH_REQUEST_METRIC_NAME,shouldDiscardResults?OsSettingSearchRequestTypes.DISCARED_RESULTS_SEARCH_REQUEST:OsSettingSearchRequestTypes.SHOWN_RESULTS_SEARCH_REQUEST,Object.keys(OsSettingSearchRequestTypes).length);if(shouldDiscardResults){return}this.spinnerActive=false;this.lastFocused_=null;this.searchResults_=results;recordSearch()}onNavigatedToResultRowRoute_(){this.$.search.blur();this.shouldShowDropdown_=false;chrome.metricsPrivate.recordEnumerationValue(USER_ACTION_ON_SEARCH_RESULTS_SHOWN_METRIC_NAME,OsSettingSearchBoxUserAction.SEARCH_RESULT_CLICKED,Object.keys(OsSettingSearchBoxUserAction).length)}onBlur_(event){event.stopPropagation();if(event.sourceCapabilities&&this.searchResultsExist_){chrome.metricsPrivate.recordEnumerationValue(USER_ACTION_ON_SEARCH_RESULTS_SHOWN_METRIC_NAME,OsSettingSearchBoxUserAction.CLICKED_OUT_OF_SEARCH_BOX,Object.keys(OsSettingSearchBoxUserAction).length)}this.shouldShowDropdown_=false}onSearchInputFocused_(){this.lastFocused_=null;if(this.searchResultsExist_){this.shouldShowDropdown_=true;return}this.fetchSearchResults_()}onSearchInputMousedown_(){if(!this.shouldShowDropdown_){const searchInput=this.$.search.getSearchInput();afterNextRender(this,(()=>searchInput.select()))}}isItemSelected_(item){return this.searchResults_.indexOf(item)===this.searchResults_.indexOf(this.selectedItem_)}getListLength_(){return this.searchResults_.length}getRowTabIndex_(item){return this.isItemSelected_(item)&&this.shouldShowDropdown_?0:-1}onSearchResultsChanged_(){if(this.searchResultsExist_){this.selectedItem_=this.searchResults_[0]}this.shouldShowDropdown_=this.$.search.isSearchFocused()&&!!this.getCurrentQuery_();if(!this.shouldShowDropdown_){return}if(!this.searchResultsExist_){getInstance().announce(this.i18n("searchNoResults"));return}}onSelectedItemChanged_(){if(!this.$.searchResultList.selectedItem&&this.lastSelectedItem_){this.$.searchResultList.selectItem(this.lastSelectedItem_)}this.lastSelectedItem_=this.$.searchResultList.selectedItem}selectRowViaKeys_(key){assert(key==="ArrowDown"||key==="ArrowUp","Only arrow keys.");assert(!!this.selectedItem_,"There should be a selected item already.");const selectedRowIndex=this.searchResults_.indexOf(this.selectedItem_);const numRows=this.searchResults_.length;const delta=key==="ArrowUp"?-1:1;const indexOfNewRow=(numRows+selectedRowIndex+delta)%numRows;this.selectedItem_=this.searchResults_[indexOfNewRow];if(this.lastFocused_){this.getSelectedOsSearchResultRow_().focus()}this.getSelectedOsSearchResultRow_().scrollIntoViewIfNeeded()}onSendFeedbackClick_(){const descriptionTemplate=this.i18nAdvanced("searchFeedbackDescriptionTemplate",{substitutions:[this.getCurrentQuery_()]}).toString();this.osSettingsSearchBoxBrowserProxy_.openSearchFeedbackDialog(descriptionTemplate)}onKeyDown_(e){if(!this.searchResultsExist_||!this.$.search.isSearchFocused()&&!this.lastFocused_){return}if(e.key==="Enter"){this.getSelectedOsSearchResultRow_().onSearchResultSelected();return}if(e.key==="ArrowUp"||e.key==="ArrowDown"){e.preventDefault();this.selectRowViaKeys_(e.key);return}}onSearchIconClicked_(){this.$.search.getSearchInput().select();if(this.getCurrentQuery_()){this.shouldShowDropdown_=true}}}customElements.define(OsSettingsSearchBoxElement.is,OsSettingsSearchBoxElement);function getTemplate$2(){return html`<!--_html_template_start_--><style include="cr-icons cr-hidden-style settings-shared">:host{align-items:center;background-color:var(--settings-base-bg-color);color:var(--cros-text-color-secondary);display:flex;height:var(--settings-toolbar-height);padding-top:var(--settings-toolbar-padding-top)}h1{color:var(--cros-sys-primary);flex:1;font:var(--cros-title-1-font);margin-inline-start:8px;padding-inline-end:12px}#leftContent{position:relative;transition:opacity .1s}#leftSpacer{align-items:center;box-sizing:border-box;display:flex;padding-inline-start:var(--settings-toolbar-padding-inline-start);width:var(--settings-menu-width)}:host([narrow]) #leftSpacer{width:20px;padding-inline-start:var(--settings-toolbar-padding-inline-start-narrow)}cr-icon-button{--cr-icon-button-fill-color:currentColor;--cr-icon-button-size:32px;min-width:32px}#centeredContent{display:flex;flex:1 1 0;justify-content:center}:host([narrow]) #centeredContent{position:absolute;width:100%;z-index:-1}:host([narrow]:not([showing-search_])) #centeredContent{justify-content:flex-end}:host([has-overlay]){transition:visibility var(--cr-toolbar-overlay-animation-duration);visibility:hidden}#settingsTitle{white-space:nowrap}:host([narrow][showing-search_]) #settingsTitle{display:none}:host([showing-search_][is-search-box-cutoff_]) os-settings-search-box{--cr-toolbar-field-width:min(80vw,
      var(--settings-toolbar-search-box-width));margin-inline-start:48px}:host([showing-search_][is-search-box-cutoff_][narrow]) os-settings-search-box{--cr-toolbar-field-width:min(80vw,
      var(--settings-toolbar-narrow-search-box-width))}:host([showing-search_][narrow]:not([is-search-box-cutoff_])) os-settings-search-box{--cr-toolbar-field-width:var(--settings-toolbar-narrow-search-box-width)}:host(:not([narrow]):not([is-search-box-cutoff_])) os-settings-search-box{--cr-toolbar-field-width:var(--settings-toolbar-search-box-width)}:host(:not([narrow])) #leftContent{flex:0 1 0}:host(:not([narrow])) #centeredContent{flex-basis:var(--settings-main-basis)}</style>
<iron-media-query query="(max-width: 780px)" query-matches="{{isSearchBoxCutoff_}}">
</iron-media-query>
<div id="leftContent">
  <div id="leftSpacer">
    <template is="dom-if" if="[[showMenu]]">
      <cr-icon-button id="menuButton" class="no-overlap" iron-icon="cr20:menu" on-click="onMenuClick_" aria-label="Main menu" title="Main menu">
      </cr-icon-button>
    </template>
    <h1 id="settingsTitle">Settings</h1>
  </div>
</div>

<div id="centeredContent" hidden$="[[!showSearch]]">
  <os-settings-search-box id="searchBox" narrow="[[narrow]]" showing-search="{{showingSearch_}}">
  </os-settings-search-box>
</div>
<!--_html_template_end_-->`}
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsToolbarElement extends PolymerElement{static get is(){return"settings-toolbar"}static get template(){return getTemplate$2()}static get properties(){return{spinnerActive:Boolean,showMenu:{type:Boolean,value:false},showSearch:{type:Boolean,value:true},narrow:{type:Boolean,value:false,reflectToAttribute:true},isSearchBoxCutoff_:{type:Boolean,reflectToAttribute:true},showingSearch_:{type:Boolean,reflectToAttribute:true}}}getSearchField(){const searchBox=castExists(this.shadowRoot.querySelector("os-settings-search-box"));return castExists(searchBox.shadowRoot.querySelector("cr-toolbar-search-field"))}onMenuClick_(){const event=new CustomEvent("settings-toolbar-menu-tap",{bubbles:true,composed:true});this.dispatchEvent(event)}}customElements.define(SettingsToolbarElement.is,SettingsToolbarElement);
/* Copyright 2020 The Chromium Authors
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */const PrefType=chrome.settingsPrivate.PrefType;const PREF_TO_SETTING_MAP={"crostini.mic_allowed":{setting:Setting.kCrostiniMicAccess,type:PrefType.BOOLEAN},"bruschetta.mic_allowed":{setting:Setting.kCrostiniMicAccess,type:PrefType.BOOLEAN},"guest_os.usb_notification_enabled":{setting:Setting.kGuestUsbNotification,type:PrefType.BOOLEAN},"guest_os.usb_persistent_passthrough_enabled":{setting:Setting.kGuestUsbPersistentPassthrough,type:PrefType.BOOLEAN},"settings.clock.use_24hour_clock":{setting:Setting.k24HourClock,type:PrefType.BOOLEAN},"generated.resolve_timezone_by_geolocation_on_off":{setting:Setting.kChangeTimeZone,type:PrefType.BOOLEAN},"browser.enable_spellchecking":{setting:Setting.kSpellCheckOnOff,type:PrefType.BOOLEAN},"translate.enabled":{setting:Setting.kOfferTranslation,type:PrefType.BOOLEAN},"ash.snap_window_suggestions.enabled":{setting:Setting.kSnapWindowSuggestions,type:PrefType.BOOLEAN},"settings.restore_apps_and_pages":{setting:Setting.kRestoreAppsAndPages,type:PrefType.NUMBER},"ash.low_battery_sound.enabled":{setting:Setting.kLowBatterySound,type:PrefType.BOOLEAN},"ash.charging_sounds.enabled":{setting:Setting.kChargingSounds,type:PrefType.BOOLEAN},"settings.language.send_function_keys":{setting:Setting.kKeyboardFunctionKeys,type:PrefType.BOOLEAN},"settings.touchpad.sensitivity2":{setting:Setting.kTouchpadSpeed,type:PrefType.NUMBER},"settings.a11y.flash_notifications_enabled":{setting:Setting.kFlashNotifications,type:PrefType.BOOLEAN},"accessibility.captions.live_caption_enabled":{setting:Setting.kLiveCaption,type:PrefType.BOOLEAN},"settings.a11y.mono_audio":{setting:Setting.kMonoAudio,type:PrefType.BOOLEAN},"settings.a11y.autoclick":{setting:Setting.kAutoClickWhenCursorStops,type:PrefType.BOOLEAN},"settings.a11y.cursor_highlight":{setting:Setting.kHighlightCursorWhileMoving,type:PrefType.BOOLEAN},"settings.a11y.cursor_color_enabled":{setting:Setting.kEnableCursorColor,type:PrefType.BOOLEAN},"settings.a11y.face_gaze.enabled":{setting:Setting.kFaceGaze,type:PrefType.BOOLEAN},"settings.a11y.large_cursor_enabled":{setting:Setting.kLargeCursor,type:PrefType.BOOLEAN},"settings.a11y.overscroll_history_navigation":{setting:Setting.kOverscrollEnabled,type:PrefType.BOOLEAN},"ash.docked_magnifier.enabled":{setting:Setting.kDockedMagnifier,type:PrefType.BOOLEAN},"settings.a11y.color_filtering.enabled":{setting:Setting.kColorCorrectionEnabled,type:PrefType.BOOLEAN},"settings.a11y.color_filtering.color_vision_correction_amount":{setting:Setting.kColorCorrectionFilterAmount,type:PrefType.NUMBER},"settings.a11y.color_filtering.color_vision_deficiency_type":{setting:Setting.kColorCorrectionFilterType,type:PrefType.NUMBER},"settings.a11y.high_contrast_enabled":{setting:Setting.kHighContrastMode,type:PrefType.BOOLEAN},"settings.a11y.reduced_animations.enabled":{setting:Setting.kReducedAnimationsEnabled,type:PrefType.BOOLEAN},"settings.a11y.overlay_scrollbar.enabled":{setting:Setting.kAlwaysShowScrollbarsEnabled,type:PrefType.BOOLEAN},"settings.a11y.screen_magnifier":{setting:Setting.kFullscreenMagnifier,type:PrefType.BOOLEAN},"settings.a11y.screen_magnifier_focus_following":{setting:Setting.kFullscreenMagnifierFocusFollowing,type:PrefType.BOOLEAN},"settings.a11y.screen_magnifier_chromevox_focus_following":{setting:Setting.kMagnifierFollowsChromeVox,type:PrefType.BOOLEAN},"settings.a11y.screen_magnifier_select_to_speak_focus_following":{setting:Setting.kAccessibilityMagnifierFollowsSts,type:PrefType.BOOLEAN},"settings.a11y.screen_magnifier_mouse_following_mode":{setting:Setting.kFullscreenMagnifierMouseFollowingMode,type:PrefType.NUMBER},"settings.a11y.bounce_keys_enabled":{setting:Setting.kBounceKeys,type:PrefType.BOOLEAN},"settings.a11y.caret.blink_interval":{setting:Setting.kCaretBlinkInterval,type:PrefType.NUMBER},"settings.a11y.caretbrowsing.enabled":{setting:Setting.kCaretBrowsing,type:PrefType.BOOLEAN},"settings.a11y.caret_highlight":{setting:Setting.kHighlightTextCaret,type:PrefType.BOOLEAN},"settings.a11y.dictation":{setting:Setting.kDictation,type:PrefType.BOOLEAN},"settings.a11y.focus_highlight":{setting:Setting.kHighlightKeyboardFocus,type:PrefType.BOOLEAN},"settings.a11y.slow_keys_enabled":{setting:Setting.kSlowKeys,type:PrefType.BOOLEAN},"settings.a11y.sticky_keys_enabled":{setting:Setting.kStickyKeys,type:PrefType.BOOLEAN},"settings.a11y.switch_access.enabled":{setting:Setting.kEnableSwitchAccess,type:PrefType.BOOLEAN},"settings.a11y.virtual_keyboard":{setting:Setting.kOnScreenKeyboard,type:PrefType.BOOLEAN},"settings.a11y.enable_main_node_annotation":{setting:Setting.kMainNodeAnnotationsEnabled,type:PrefType.BOOLEAN},"settings.a11y.select_to_speak":{setting:Setting.kSelectToSpeak,type:PrefType.BOOLEAN},"settings.accessibility":{setting:Setting.kChromeVox,type:PrefType.BOOLEAN},"cros.device.peripheral_data_access_enabled":{setting:Setting.kPeripheralDataAccessProtection,type:PrefType.BOOLEAN},"cros.reven.enable_hw_data_usage":{setting:Setting.kRevenEnableHwDataUsage,type:PrefType.BOOLEAN},"settings.magic_boost_enabled":{setting:Setting.kMagicBoostOnOff,type:PrefType.BOOLEAN},"settings.mahi_enabled":{setting:Setting.kMahiOnOff,type:PrefType.BOOLEAN},"assistive_input.orca_enabled":{setting:Setting.kShowOrca,type:PrefType.BOOLEAN},"settings.lobster_enabled":{setting:Setting.kLobsterOnOff,type:PrefType.BOOLEAN},"ash.scanner.enabled":{setting:Setting.kScannerOnOff,type:PrefType.BOOLEAN}};function convertPrefToSettingMetric(prefKey,prefValue){const settingAndType=PREF_TO_SETTING_MAP[prefKey];if(!settingAndType){return null}const{type:type,setting:setting}=settingAndType;switch(type){case PrefType.BOOLEAN:assert(typeof prefValue==="boolean");return{setting:setting,value:{boolValue:prefValue}};case PrefType.NUMBER:assert(typeof prefValue==="number");return{setting:setting,value:{intValue:prefValue}};default:return null}}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
function createPageAvailability(){return{[Section$1.kAboutChromeOs]:!!routes.ABOUT,[Section$1.kAccessibility]:!!routes.OS_ACCESSIBILITY,[Section$1.kApps]:!!routes.APPS,[Section$1.kBluetooth]:!!routes.BLUETOOTH,[Section$1.kDevice]:!!routes.DEVICE,[Section$1.kKerberos]:!!routes.KERBEROS,[Section$1.kMultiDevice]:!!routes.MULTIDEVICE,[Section$1.kNetwork]:!!routes.INTERNET,[Section$1.kPeople]:!!routes.OS_PEOPLE,[Section$1.kPersonalization]:!!routes.PERSONALIZATION,[Section$1.kPrivacyAndSecurity]:!!routes.OS_PRIVACY,[Section$1.kSystemPreferences]:!!routes.SYSTEM_PREFERENCES}}
// Copyright 2023 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let instance$1=null;class OsSettingsHatsBrowserProxyImpl{static getInstance(){return instance$1||(instance$1=new OsSettingsHatsBrowserProxyImpl)}static setInstanceForTesting(obj){instance$1=obj}sendSettingsHats(){chrome.send("sendSettingsHats")}settingsUsedSearch(){chrome.send("settingsUsedSearch")}}function getTemplate$1(){return html`<!--_html_template_start_--><style include="cr-page-host-style settings-shared">:host{display:flex;flex-direction:column;height:100%;--settings-main-basis:calc(var(--cr-centered-card-max-width) /
        var(--cr-centered-card-width-percentage));--cr-card-border-radius:4px;--cr-card-shadow:var(--cr-elevation-1);--cr-toolbar-padding-top:8px}settings-toolbar{min-height:56px;z-index:3}#drawer{--cr-drawer-border-start-end-radius:12px;--cr-drawer-border-end-end-radius:12px;--cr-drawer-header-color:var(--cros-sys-primary);--cr-drawer-header-font:var(--cros-title-1-font);--cr-drawer-header-padding:22px;--cr-drawer-width:var(--settings-menu-width);--cr-separator-line:none}#cr-container-shadow-top{z-index:2}#container{align-items:flex-start;display:flex;flex:1;overflow:overlay;position:relative}#center,#left{flex:1 1 0}#left{flex-grow:0;height:100%;position:sticky;top:0;z-index:100}#left os-settings-menu{height:100%;overflow:auto;overscroll-behavior:contain}#center{box-sizing:border-box;flex-basis:var(--settings-main-basis);height:100%;padding-top:8px}#center>os-settings-main{min-height:100%}@media (max-width:980px){#left{display:none}#center{min-width:auto;padding:0 3px}}#drawerIcon{--iron-icon-fill-color:var(--cros-sys-primary);cursor:pointer;margin-inline-end:6px;margin-inline-start:0;outline:0}</style>
<settings-prefs id="prefs" prefs="{{prefs}}"></settings-prefs>
<iron-media-query query="(max-width: [[narrowThreshold_]]px)" query-matches="{{isNarrow}}">
</iron-media-query>
<template is="dom-if" if="[[showToolbar_]]">
  <settings-toolbar on-settings-toolbar-menu-tap="onMenuButtonClick_" spinner-active="[[toolbarSpinnerActive_]]" role="banner" narrow="[[isNarrow]]" narrow-threshold="980" show-menu="[[isNarrow]]">
  </settings-toolbar>
</template>
<template is="dom-if" if="[[showNavMenu_]]">
  <cr-drawer id="drawer" on-close="onMenuClose_" heading="Settings" align="ltr">
    <div slot="header-icon">
      <cr-icon-button id="drawerIcon" iron-icon="cr20:menu" on-click="onDrawerIconClick_" title="Close">
      </cr-icon-button>
    </div>
    <div slot="body">
      <template is="dom-if" id="drawerTemplate">
        <os-settings-menu is-drawer-menu page-availability="[[pageAvailability_]]" on-iron-activate="onMenuItemSelected_">
        </os-settings-menu>
      </template>
    </div>
  </cr-drawer>
</template>

<div id="container" class="no-outline">
  <div id="left">
    <template is="dom-if" if="[[showNavMenu_]]">
      <os-settings-menu page-availability="[[pageAvailability_]]" on-iron-activate="onMenuItemSelected_">
      </os-settings-menu>
    </template>
  </div>
  <div id="center">
    <os-settings-main prefs="{{prefs}}" toolbar-spinner-active="{{toolbarSpinnerActive_}}" page-availability="[[pageAvailability_]]">
    </os-settings-main>
  </div>
</div>
<!--_html_template_end_-->`}
// Copyright 2019 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
let defaultResourceLoaded=true;assert(!window.settings||!defaultResourceLoaded,"os_settings_ui.js was executed twice. You probably have an invalid import.");const OsSettingsUiElementBase=RouteObserverMixin(FindShortcutMixin(CrContainerShadowMixin(PolymerElement)));class OsSettingsUiElement extends OsSettingsUiElementBase{static get is(){return"os-settings-ui"}static get template(){return getTemplate$1()}static get properties(){return{prefs:Object,toolbarSpinnerActive_:{type:Boolean,value:false},isNarrow:{type:Boolean,value:false,readonly:true,notify:true,observer:"onNarrowChanged_"},pageAvailability_:{type:Object,value:()=>createPageAvailability()},showToolbar_:Boolean,showNavMenu_:Boolean,narrowThreshold_:{type:Number,value:980}}}constructor(){super();this.activeRoute_=null;this.scrollEndDebouncer_=null;Router.getInstance().initializeRouteFromUrl();this.osSettingsHatsBrowserProxy_=OsSettingsHatsBrowserProxyImpl.getInstance();this.boundTriggerSettingsHats_=this.triggerSettingsHats_.bind(this)}ready(){super.ready();window.CrPolicyStrings={controlledSettingExtension:loadTimeData.getString("controlledSettingExtension"),controlledSettingExtensionWithoutName:loadTimeData.getString("controlledSettingExtensionWithoutName"),controlledSettingPolicy:loadTimeData.getString("controlledSettingPolicy"),controlledSettingRecommendedMatches:loadTimeData.getString("controlledSettingRecommendedMatches"),controlledSettingRecommendedDiffers:loadTimeData.getString("controlledSettingRecommendedDiffers"),controlledSettingShared:loadTimeData.getString("controlledSettingShared"),controlledSettingWithOwner:loadTimeData.getString("controlledSettingWithOwner"),controlledSettingNoOwner:loadTimeData.getString("controlledSettingNoOwner"),controlledSettingParent:loadTimeData.getString("controlledSettingParent"),controlledSettingChildRestriction:loadTimeData.getString("controlledSettingChildRestriction")};this.showNavMenu_=!loadTimeData.getBoolean("isKioskModeActive");this.showToolbar_=!loadTimeData.getBoolean("isKioskModeActive");this.addEventListener("show-container",(()=>{this.$.container.style.visibility="visible"}));this.addEventListener("hide-container",(()=>{this.$.container.style.visibility="hidden"}));this.addEventListener("refresh-pref",this.onRefreshPref_);this.addEventListener("user-action-setting-pref-change",this.syncPrefChange_.bind(this));this.addEventListener("user-action-setting-change",this.recordChangedSetting_.bind(this));this.addEventListener("search-changed",(()=>{this.osSettingsHatsBrowserProxy_.settingsUsedSearch()}),{once:true});this.listenForDrawerOpening_();this.enableShadowBehavior(true)}connectedCallback(){super.connectedCallback();document.documentElement.classList.remove("loading");setTimeout((()=>{this.recordTimeUntilInteractive_()}));document.fonts.load("bold 12px Roboto");setGlobalScrollTarget(this.$.container);const scrollToTop=top=>new Promise((resolve=>{if(this.$.container.scrollTop===top){resolve();return}this.$.container.scrollTo({top:top,behavior:"auto"});const onScroll=()=>{this.scrollEndDebouncer_=Debouncer.debounce(this.scrollEndDebouncer_,timeOut.after(75),(()=>{this.$.container.removeEventListener("scroll",onScroll);resolve()}))};this.$.container.addEventListener("scroll",onScroll)}));this.addEventListener("scroll-to-top",(e=>{scrollToTop(e.detail.top).then(e.detail.callback)}));this.addEventListener("scroll-to-bottom",(e=>{scrollToTop(e.detail.bottom-this.$.container.clientHeight).then(e.detail.callback)}));if(document.hasFocus()){recordPageFocus()}window.addEventListener("focus",recordPageFocus);window.addEventListener("blur",recordPageBlur);window.addEventListener("blur",this.boundTriggerSettingsHats_);window.addEventListener("click",recordClick,true)}disconnectedCallback(){super.disconnectedCallback();window.removeEventListener("focus",recordPageFocus);window.removeEventListener("blur",recordPageBlur);window.removeEventListener("blur",this.boundTriggerSettingsHats_);window.removeEventListener("click",recordClick);Router.getInstance().resetRouteForTesting()}currentRouteChanged(newRoute,oldRoute){if(oldRoute&&newRoute!==oldRoute){recordNavigation()}}handleFindShortcut(modalContextOpen){if(modalContextOpen||!this.showToolbar_){return false}const toolbar=this.getToolbar_();toolbar.getSearchField().showAndFocus();toolbar.getSearchField().getSearchInput().select();return true}searchInputHasFocus(){if(!this.showToolbar_){return false}return this.getToolbar_().getSearchField().isSearchFocused()}listenForDrawerOpening_(){if(!this.showNavMenu_){return}microTask.run((()=>{const drawer=this.getDrawer_();listenOnce(drawer,"cr-drawer-opening",(()=>{const drawerTemplate=castExists(this.shadowRoot.querySelector("#drawerTemplate"));drawerTemplate.if=true}));window.addEventListener("popstate",(()=>{drawer.cancel()}))}))}getDrawer_(){return castExists(this.shadowRoot.querySelector("cr-drawer"))}getToolbar_(){return castExists(this.shadowRoot.querySelector("settings-toolbar"))}onRefreshPref_(e){this.$.prefs.refresh(e.detail)}recordChangedSetting_(e){const{prefKey:prefKey,prefValue:prefValue}=e.detail;const settingMetric=convertPrefToSettingMetric(prefKey,prefValue);if(!settingMetric){recordSettingChangeForUnmappedPref();return}recordSettingChange(settingMetric.setting,settingMetric.value)}syncPrefChange_(event){const{prefKey:prefKey,value:value}=event.detail;this.set(`prefs.${prefKey}.value`,value)}onMenuItemSelected_(e){assert(this.showNavMenu_);const path=e.detail.selected;const route=Router.getInstance().getRouteForPath(path);assert(route,`os-settings-menu-item with invalid route: ${path}`);this.activeRoute_=route;if(this.isNarrow){this.getDrawer_().close();return}this.navigateToActiveRoute_()}onMenuButtonClick_(){if(!this.showNavMenu_){return}this.getDrawer_().toggle()}navigateToActiveRoute_(){if(this.activeRoute_){Router.getInstance().navigateTo(this.activeRoute_,undefined,true);this.activeRoute_=null}}onMenuClose_(){if(!this.getDrawer_().wasCanceled()){this.navigateToActiveRoute_();return}this.$.container.setAttribute("tabindex","-1");this.$.container.focus();listenOnce(this.$.container,["blur","pointerdown"],(()=>{this.$.container.removeAttribute("tabindex")}))}onNarrowChanged_(){if(this.showNavMenu_){const drawer=this.getDrawer_();if(drawer.open&&!this.isNarrow){drawer.close()}}}onDrawerIconClick_(){this.getDrawer_().cancel()}recordTimeUntilInteractive_(){const METRIC_NAME="ChromeOS.Settings.TimeUntilInteractive";const timeMs=Math.round(window.performance.now());chrome.metricsPrivate.recordTime(METRIC_NAME,timeMs)}triggerSettingsHats_(){this.osSettingsHatsBrowserProxy_.sendSettingsHats()}}customElements.define(OsSettingsUiElement.is,OsSettingsUiElement);
// Copyright 2016 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class ProfileInfoBrowserProxyImpl{getProfileInfo(){return sendWithPromise("getProfileInfo")}getProfileStatsCount(){chrome.send("getProfileStatsCount")}static getInstance(){return instance||(instance=new ProfileInfoBrowserProxyImpl)}static setInstance(obj){instance=obj}}let instance=null;function getTemplate(){return html`<!--_html_template_start_--><slot></slot>
<!--_html_template_end_-->`}
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
class SettingsIdleLoadElement extends PolymerElement{static get is(){return"settings-idle-load"}static get template(){return getTemplate()}static get properties(){return{}}constructor(){super();this.child_=null;this.instance_=null;this.loading_=null;this.idleCallback_=0}connectedCallback(){super.connectedCallback();this.idleCallback_=requestIdleCallback((()=>{this.get()}))}disconnectedCallback(){super.disconnectedCallback();window.cancelIdleCallback(this.idleCallback_)}requestLazyModule_(){return new Promise(((resolve,reject)=>{ensureLazyLoaded().then((()=>{const slot=this.shadowRoot.querySelector("slot");assert(slot);const template=slot.assignedNodes({flatten:true}).filter((n=>n.nodeType===Node.ELEMENT_NODE))[0];const TemplateClass=templatize(template,this,{mutableData:false,forwardHostProp:this._forwardHostPropV2});this.instance_=new TemplateClass;assert(!this.child_);this.child_=this.instance_.root.firstElementChild;assert(this.child_);this.parentNode.insertBefore(this.instance_.root,this);resolve(this.child_);const event=new CustomEvent("lazy-loaded",{bubbles:true,composed:true});this.dispatchEvent(event)}),reject)}))}get(){if(this.loading_){return this.loading_}this.loading_=this.requestLazyModule_();return this.loading_}_forwardHostPropV2(prop,value){if(this.instance_){this.instance_.forwardHostProp(prop,value)}}}customElements.define(SettingsIdleLoadElement.is,SettingsIdleLoadElement);
// Copyright 2020 The Chromium Authors
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
window.addEventListener("load",(()=>{ColorChangeUpdater.forDocument().start()}));export{AboutPageBrowserProxyImpl,AccountManagerSettingsCardElement,AdditionalAccountsSettingsCardElement,AndroidAppsBrowserProxyImpl,CrDrawerElement,CrPolicyNetworkBehaviorMojo,CrSettingsPrefs,CrToolbarSearchFieldElement,DevicePageBrowserProxyImpl,EsimRemoveProfileDialogElement,EsimRenameDialogElement,FakeInputDeviceSettingsProvider,HotspotConfigDialogElement,HotspotSummaryItemElement,InternetConfigElement,InternetPageBrowserProxyImpl,LifetimeBrowserProxyImpl,MainPageContainerElement,ManagedFootnoteElement,MultiDeviceBrowserProxyImpl,MultiDeviceFeature,MultiDeviceFeatureState,MultiDeviceSettingsMode,MultitaskingSettingsCardElement,NearbyShareSettingsMixin,NetworkSummaryElement,NetworkSummaryItemElement,NotificationAccessSetupOperationStatus,OpenWindowProxyImpl,OsA11yPageBrowserProxyImpl,OsAboutPageElement,OsBluetoothDevicesSubpageBrowserProxyImpl,OsSettingsA11yPageElement,OsSettingsCellularSetupDialogElement,OsSettingsHatsBrowserProxyImpl,OsSettingsMainElement,OsSettingsMenuElement,OsSettingsMenuItemElement,OsSettingsPeoplePageElement,OsSettingsPrivacyPageElement,OsSettingsSearchBoxBrowserProxyImpl,OsSettingsSearchBoxElement,OsSettingsUiElement,PageDisplayerElement,ParentalControlsBrowserProxyImpl,ParentalControlsSettingsCardElement,PeripheralDataAccessBrowserProxyImpl,PermissionsSetupStatus,PersonalizationHubBrowserProxyImpl,PhoneHubFeatureAccessStatus,PhoneHubPermissionsSetupAction,PhoneHubPermissionsSetupFeatureCombination,PhoneHubPermissionsSetupFlowScreens,ProfileInfoBrowserProxyImpl,Router,SearchAndAssistantSettingsCardElement,SettingsBluetoothPageElement,SettingsBluetoothPairingDialogElement,SettingsBluetoothSummaryElement,SettingsDevicePageElement,SettingsIdleLoadElement,SettingsInternetDetailMenuElement,SettingsInternetPageElement,SettingsKerberosPageElement,SettingsMultideviceNotificationAccessSetupDialogElement,SettingsMultidevicePageElement,SettingsMultidevicePermissionsSetupDialogElement,SettingsPersonalizationPageElement,SettingsPrefsElement,SettingsSystemPreferencesPageElement,SetupFlowStatus,SignedInState,StartupSettingsCardElement,StorageAndPowerSettingsCardElement,SyncBrowserProxyImpl,SettingsToolbarElement as ToolbarElement,UpdateStatus,WiFiSecurityType,createPageAvailability as createPageAvailabilityForTesting,ensureLazyLoaded,getInputDeviceSettingsProvider,getNearbyShareSettings,getPersonalizationSearchHandler,getSettingsSearchHandler,getTrustedHTML,observeNearbyShareSettings,personalization_search_mojomWebui as personalizationSearchMojom,recordClick,recordNavigation,recordPageBlur,recordPageFocus,recordSearch,recordSettingChange,routes,routesMojom,search_mojomWebui as searchMojom,search_result_icon_mojomWebui as searchResultIconMojom,setGlobalScrollTarget as setGlobalScrollTargetForTesting,setPersonalizationSearchHandlerForTesting,setSettingsSearchHandlerForTesting};
