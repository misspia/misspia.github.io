var lM=Object.defineProperty;var uM=(n,e,t)=>e in n?lM(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var de=(n,e,t)=>(uM(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function X0(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var $0={exports:{}},pc={},j0={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ll=Symbol.for("react.element"),cM=Symbol.for("react.portal"),fM=Symbol.for("react.fragment"),hM=Symbol.for("react.strict_mode"),dM=Symbol.for("react.profiler"),pM=Symbol.for("react.provider"),mM=Symbol.for("react.context"),gM=Symbol.for("react.forward_ref"),_M=Symbol.for("react.suspense"),vM=Symbol.for("react.memo"),xM=Symbol.for("react.lazy"),Am=Symbol.iterator;function yM(n){return n===null||typeof n!="object"?null:(n=Am&&n[Am]||n["@@iterator"],typeof n=="function"?n:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q0=Object.assign,K0={};function jo(n,e,t){this.props=n,this.context=e,this.refs=K0,this.updater=t||Y0}jo.prototype.isReactComponent={};jo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};jo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Z0(){}Z0.prototype=jo.prototype;function qd(n,e,t){this.props=n,this.context=e,this.refs=K0,this.updater=t||Y0}var Kd=qd.prototype=new Z0;Kd.constructor=qd;q0(Kd,jo.prototype);Kd.isPureReactComponent=!0;var Cm=Array.isArray,Q0=Object.prototype.hasOwnProperty,Zd={current:null},J0={key:!0,ref:!0,__self:!0,__source:!0};function ev(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Q0.call(e,i)&&!J0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ll,type:n,key:s,ref:o,props:r,_owner:Zd.current}}function SM(n,e){return{$$typeof:ll,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Qd(n){return typeof n=="object"&&n!==null&&n.$$typeof===ll}function MM(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Rm=/\/+/g;function lf(n,e){return typeof n=="object"&&n!==null&&n.key!=null?MM(""+n.key):e.toString(36)}function pu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case ll:case cM:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+lf(o,0):i,Cm(r)?(t="",n!=null&&(t=n.replace(Rm,"$&/")+"/"),pu(r,e,t,"",function(u){return u})):r!=null&&(Qd(r)&&(r=SM(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Rm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Cm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+lf(s,a);o+=pu(s,e,t,l,r)}else if(l=yM(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+lf(s,a++),o+=pu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Sl(n,e,t){if(n==null)return n;var i=[],r=0;return pu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function EM(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var un={current:null},mu={transition:null},TM={ReactCurrentDispatcher:un,ReactCurrentBatchConfig:mu,ReactCurrentOwner:Zd};ze.Children={map:Sl,forEach:function(n,e,t){Sl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Sl(n,function(){e++}),e},toArray:function(n){return Sl(n,function(e){return e})||[]},only:function(n){if(!Qd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};ze.Component=jo;ze.Fragment=fM;ze.Profiler=dM;ze.PureComponent=qd;ze.StrictMode=hM;ze.Suspense=_M;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TM;ze.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=q0({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Zd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Q0.call(e,l)&&!J0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ll,type:n.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(n){return n={$$typeof:mM,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:pM,_context:n},n.Consumer=n};ze.createElement=ev;ze.createFactory=function(n){var e=ev.bind(null,n);return e.type=n,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(n){return{$$typeof:gM,render:n}};ze.isValidElement=Qd;ze.lazy=function(n){return{$$typeof:xM,_payload:{_status:-1,_result:n},_init:EM}};ze.memo=function(n,e){return{$$typeof:vM,type:n,compare:e===void 0?null:e}};ze.startTransition=function(n){var e=mu.transition;mu.transition={};try{n()}finally{mu.transition=e}};ze.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ze.useCallback=function(n,e){return un.current.useCallback(n,e)};ze.useContext=function(n){return un.current.useContext(n)};ze.useDebugValue=function(){};ze.useDeferredValue=function(n){return un.current.useDeferredValue(n)};ze.useEffect=function(n,e){return un.current.useEffect(n,e)};ze.useId=function(){return un.current.useId()};ze.useImperativeHandle=function(n,e,t){return un.current.useImperativeHandle(n,e,t)};ze.useInsertionEffect=function(n,e){return un.current.useInsertionEffect(n,e)};ze.useLayoutEffect=function(n,e){return un.current.useLayoutEffect(n,e)};ze.useMemo=function(n,e){return un.current.useMemo(n,e)};ze.useReducer=function(n,e,t){return un.current.useReducer(n,e,t)};ze.useRef=function(n){return un.current.useRef(n)};ze.useState=function(n){return un.current.useState(n)};ze.useSyncExternalStore=function(n,e,t){return un.current.useSyncExternalStore(n,e,t)};ze.useTransition=function(){return un.current.useTransition()};ze.version="18.2.0";j0.exports=ze;var Tt=j0.exports;const Yo=X0(Tt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wM=Tt,AM=Symbol.for("react.element"),CM=Symbol.for("react.fragment"),RM=Object.prototype.hasOwnProperty,PM=wM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bM={key:!0,ref:!0,__self:!0,__source:!0};function tv(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)RM.call(e,i)&&!bM.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:AM,type:n,key:s,ref:o,props:r,_owner:PM.current}}pc.Fragment=CM;pc.jsx=tv;pc.jsxs=tv;$0.exports=pc;var bn=$0.exports,wh={},nv={exports:{}},zn={},iv={exports:{}},rv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,j){var G=D.length;D.push(j);e:for(;0<G;){var ae=G-1>>>1,z=D[ae];if(0<r(z,j))D[ae]=j,D[G]=z,G=ae;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var j=D[0],G=D.pop();if(G!==j){D[0]=G;e:for(var ae=0,z=D.length,I=z>>>1;ae<I;){var O=2*(ae+1)-1,q=D[O],L=O+1,b=D[L];if(0>r(q,G))L<z&&0>r(b,q)?(D[ae]=b,D[L]=G,ae=L):(D[ae]=q,D[O]=G,ae=O);else if(L<z&&0>r(b,G))D[ae]=b,D[L]=G,ae=L;else break e}}return j}function r(D,j){var G=D.sortIndex-j.sortIndex;return G!==0?G:D.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,_=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var j=t(u);j!==null;){if(j.callback===null)i(u);else if(j.startTime<=D)i(u),j.sortIndex=j.expirationTime,e(l,j);else break;j=t(u)}}function M(D){if(m=!1,x(D),!_)if(t(l)!==null)_=!0,Q(S);else{var j=t(u);j!==null&&$(M,j.startTime-D)}}function S(D,j){_=!1,m&&(m=!1,h(P),P=-1),p=!0;var G=d;try{for(x(j),f=t(l);f!==null&&(!(f.expirationTime>j)||D&&!Y());){var ae=f.callback;if(typeof ae=="function"){f.callback=null,d=f.priorityLevel;var z=ae(f.expirationTime<=j);j=n.unstable_now(),typeof z=="function"?f.callback=z:f===t(l)&&i(l),x(j)}else i(l);f=t(l)}if(f!==null)var I=!0;else{var O=t(u);O!==null&&$(M,O.startTime-j),I=!1}return I}finally{f=null,d=G,p=!1}}var E=!1,w=null,P=-1,y=5,A=-1;function Y(){return!(n.unstable_now()-A<y)}function W(){if(w!==null){var D=n.unstable_now();A=D;var j=!0;try{j=w(!0,D)}finally{j?U():(E=!1,w=null)}}else E=!1}var U;if(typeof v=="function")U=function(){v(W)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,H=V.port2;V.port1.onmessage=W,U=function(){H.postMessage(null)}}else U=function(){g(W,0)};function Q(D){w=D,E||(E=!0,U())}function $(D,j){P=g(function(){D(n.unstable_now())},j)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,Q(S))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):y=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var G=d;d=j;try{return D()}finally{d=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,j){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=d;d=D;try{return j()}finally{d=G}},n.unstable_scheduleCallback=function(D,j,G){var ae=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ae+G:ae):G=ae,D){case 1:var z=-1;break;case 2:z=250;break;case 5:z=1073741823;break;case 4:z=1e4;break;default:z=5e3}return z=G+z,D={id:c++,callback:j,priorityLevel:D,startTime:G,expirationTime:z,sortIndex:-1},G>ae?(D.sortIndex=G,e(u,D),t(l)===null&&D===t(u)&&(m?(h(P),P=-1):m=!0,$(M,G-ae))):(D.sortIndex=z,e(l,D),_||p||(_=!0,Q(S))),D},n.unstable_shouldYield=Y,n.unstable_wrapCallback=function(D){var j=d;return function(){var G=d;d=j;try{return D.apply(this,arguments)}finally{d=G}}}})(rv);iv.exports=rv;var LM=iv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv=Tt,Fn=LM;function se(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ov=new Set,Ua={};function Ls(n,e){Po(n,e),Po(n+"Capture",e)}function Po(n,e){for(Ua[n]=e,n=0;n<e.length;n++)ov.add(e[n])}var Ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ah=Object.prototype.hasOwnProperty,DM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Pm={},bm={};function IM(n){return Ah.call(bm,n)?!0:Ah.call(Pm,n)?!1:DM.test(n)?bm[n]=!0:(Pm[n]=!0,!1)}function UM(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function NM(n,e,t,i){if(e===null||typeof e>"u"||UM(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Gt[n]=new cn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Gt[e]=new cn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Gt[n]=new cn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Gt[n]=new cn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Gt[n]=new cn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Gt[n]=new cn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Gt[n]=new cn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Gt[n]=new cn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Gt[n]=new cn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Jd=/[\-:]([a-z])/g;function ep(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Jd,ep);Gt[e]=new cn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Jd,ep);Gt[e]=new cn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Jd,ep);Gt[e]=new cn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Gt[n]=new cn(n,1,!1,n.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Gt[n]=new cn(n,1,!1,n.toLowerCase(),null,!0,!0)});function tp(n,e,t,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(NM(e,t,r,i)&&(t=null),i||r===null?IM(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var sr=sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ml=Symbol.for("react.element"),eo=Symbol.for("react.portal"),to=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),Ch=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),lv=Symbol.for("react.context"),ip=Symbol.for("react.forward_ref"),Rh=Symbol.for("react.suspense"),Ph=Symbol.for("react.suspense_list"),rp=Symbol.for("react.memo"),dr=Symbol.for("react.lazy"),uv=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function ea(n){return n===null||typeof n!="object"?null:(n=Lm&&n[Lm]||n["@@iterator"],typeof n=="function"?n:null)}var pt=Object.assign,uf;function da(n){if(uf===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);uf=e&&e[1]||""}return`
`+uf+n}var cf=!1;function ff(n,e){if(!n||cf)return"";cf=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{cf=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?da(n):""}function OM(n){switch(n.tag){case 5:return da(n.type);case 16:return da("Lazy");case 13:return da("Suspense");case 19:return da("SuspenseList");case 0:case 2:case 15:return n=ff(n.type,!1),n;case 11:return n=ff(n.type.render,!1),n;case 1:return n=ff(n.type,!0),n;default:return""}}function bh(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case to:return"Fragment";case eo:return"Portal";case Ch:return"Profiler";case np:return"StrictMode";case Rh:return"Suspense";case Ph:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case lv:return(n.displayName||"Context")+".Consumer";case av:return(n._context.displayName||"Context")+".Provider";case ip:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case rp:return e=n.displayName||null,e!==null?e:bh(n.type)||"Memo";case dr:e=n._payload,n=n._init;try{return bh(n(e))}catch{}}return null}function FM(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bh(e);case 8:return e===np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function cv(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function kM(n){var e=cv(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function El(n){n._valueTracker||(n._valueTracker=kM(n))}function fv(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=cv(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Du(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Lh(n,e){var t=e.checked;return pt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Dm(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ur(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hv(n,e){e=e.checked,e!=null&&tp(n,"checked",e,!1)}function Dh(n,e){hv(n,e);var t=Ur(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Ih(n,e.type,t):e.hasOwnProperty("defaultValue")&&Ih(n,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Im(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Ih(n,e,t){(e!=="number"||Du(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var pa=Array.isArray;function _o(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ur(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Uh(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return pt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Um(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(se(92));if(pa(t)){if(1<t.length)throw Error(se(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ur(t)}}function dv(n,e){var t=Ur(e.value),i=Ur(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Nm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function pv(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?pv(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Tl,mv=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Tl=Tl||document.createElement("div"),Tl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Tl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Na(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ya={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},zM=["Webkit","ms","Moz","O"];Object.keys(ya).forEach(function(n){zM.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ya[e]=ya[n]})});function gv(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ya.hasOwnProperty(n)&&ya[n]?(""+e).trim():e+"px"}function _v(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=gv(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var BM=pt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Oh(n,e){if(e){if(BM[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function Fh(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=null;function sp(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var zh=null,vo=null,xo=null;function Om(n){if(n=fl(n)){if(typeof zh!="function")throw Error(se(280));var e=n.stateNode;e&&(e=xc(e),zh(n.stateNode,n.type,e))}}function vv(n){vo?xo?xo.push(n):xo=[n]:vo=n}function xv(){if(vo){var n=vo,e=xo;if(xo=vo=null,Om(n),e)for(n=0;n<e.length;n++)Om(e[n])}}function yv(n,e){return n(e)}function Sv(){}var hf=!1;function Mv(n,e,t){if(hf)return n(e,t);hf=!0;try{return yv(n,e,t)}finally{hf=!1,(vo!==null||xo!==null)&&(Sv(),xv())}}function Oa(n,e){var t=n.stateNode;if(t===null)return null;var i=xc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(se(231,e,typeof t));return t}var Bh=!1;if(Ji)try{var ta={};Object.defineProperty(ta,"passive",{get:function(){Bh=!0}}),window.addEventListener("test",ta,ta),window.removeEventListener("test",ta,ta)}catch{Bh=!1}function VM(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Sa=!1,Iu=null,Uu=!1,Vh=null,HM={onError:function(n){Sa=!0,Iu=n}};function GM(n,e,t,i,r,s,o,a,l){Sa=!1,Iu=null,VM.apply(HM,arguments)}function WM(n,e,t,i,r,s,o,a,l){if(GM.apply(this,arguments),Sa){if(Sa){var u=Iu;Sa=!1,Iu=null}else throw Error(se(198));Uu||(Uu=!0,Vh=u)}}function Ds(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Ev(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Fm(n){if(Ds(n)!==n)throw Error(se(188))}function XM(n){var e=n.alternate;if(!e){if(e=Ds(n),e===null)throw Error(se(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Fm(r),n;if(s===i)return Fm(r),e;s=s.sibling}throw Error(se(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(t.alternate!==i)throw Error(se(190))}if(t.tag!==3)throw Error(se(188));return t.stateNode.current===t?n:e}function Tv(n){return n=XM(n),n!==null?wv(n):null}function wv(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=wv(n);if(e!==null)return e;n=n.sibling}return null}var Av=Fn.unstable_scheduleCallback,km=Fn.unstable_cancelCallback,$M=Fn.unstable_shouldYield,jM=Fn.unstable_requestPaint,yt=Fn.unstable_now,YM=Fn.unstable_getCurrentPriorityLevel,op=Fn.unstable_ImmediatePriority,Cv=Fn.unstable_UserBlockingPriority,Nu=Fn.unstable_NormalPriority,qM=Fn.unstable_LowPriority,Rv=Fn.unstable_IdlePriority,mc=null,Di=null;function KM(n){if(Di&&typeof Di.onCommitFiberRoot=="function")try{Di.onCommitFiberRoot(mc,n,void 0,(n.current.flags&128)===128)}catch{}}var vi=Math.clz32?Math.clz32:JM,ZM=Math.log,QM=Math.LN2;function JM(n){return n>>>=0,n===0?32:31-(ZM(n)/QM|0)|0}var wl=64,Al=4194304;function ma(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ou(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ma(a):(s&=o,s!==0&&(i=ma(s)))}else o=t&~r,o!==0?i=ma(o):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-vi(e),r=1<<t,i|=n[t],e&=~r;return i}function e1(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function t1(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-vi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=e1(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Hh(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pv(){var n=wl;return wl<<=1,!(wl&4194240)&&(wl=64),n}function df(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ul(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-vi(e),n[e]=t}function n1(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-vi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ap(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-vi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ye=0;function bv(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Lv,lp,Dv,Iv,Uv,Gh=!1,Cl=[],Mr=null,Er=null,Tr=null,Fa=new Map,ka=new Map,mr=[],i1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zm(n,e){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(e.pointerId)}}function na(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=fl(e),e!==null&&lp(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function r1(n,e,t,i,r){switch(e){case"focusin":return Mr=na(Mr,n,e,t,i,r),!0;case"dragenter":return Er=na(Er,n,e,t,i,r),!0;case"mouseover":return Tr=na(Tr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Fa.set(s,na(Fa.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ka.set(s,na(ka.get(s)||null,n,e,t,i,r)),!0}return!1}function Nv(n){var e=rs(n.target);if(e!==null){var t=Ds(e);if(t!==null){if(e=t.tag,e===13){if(e=Ev(t),e!==null){n.blockedOn=e,Uv(n.priority,function(){Dv(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function gu(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Wh(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);kh=i,t.target.dispatchEvent(i),kh=null}else return e=fl(t),e!==null&&lp(e),n.blockedOn=t,!1;e.shift()}return!0}function Bm(n,e,t){gu(n)&&t.delete(e)}function s1(){Gh=!1,Mr!==null&&gu(Mr)&&(Mr=null),Er!==null&&gu(Er)&&(Er=null),Tr!==null&&gu(Tr)&&(Tr=null),Fa.forEach(Bm),ka.forEach(Bm)}function ia(n,e){n.blockedOn===e&&(n.blockedOn=null,Gh||(Gh=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,s1)))}function za(n){function e(r){return ia(r,n)}if(0<Cl.length){ia(Cl[0],n);for(var t=1;t<Cl.length;t++){var i=Cl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Mr!==null&&ia(Mr,n),Er!==null&&ia(Er,n),Tr!==null&&ia(Tr,n),Fa.forEach(e),ka.forEach(e),t=0;t<mr.length;t++)i=mr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<mr.length&&(t=mr[0],t.blockedOn===null);)Nv(t),t.blockedOn===null&&mr.shift()}var yo=sr.ReactCurrentBatchConfig,Fu=!0;function o1(n,e,t,i){var r=Ye,s=yo.transition;yo.transition=null;try{Ye=1,up(n,e,t,i)}finally{Ye=r,yo.transition=s}}function a1(n,e,t,i){var r=Ye,s=yo.transition;yo.transition=null;try{Ye=4,up(n,e,t,i)}finally{Ye=r,yo.transition=s}}function up(n,e,t,i){if(Fu){var r=Wh(n,e,t,i);if(r===null)Ef(n,e,i,ku,t),zm(n,i);else if(r1(r,n,e,t,i))i.stopPropagation();else if(zm(n,i),e&4&&-1<i1.indexOf(n)){for(;r!==null;){var s=fl(r);if(s!==null&&Lv(s),s=Wh(n,e,t,i),s===null&&Ef(n,e,i,ku,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ef(n,e,i,null,t)}}var ku=null;function Wh(n,e,t,i){if(ku=null,n=sp(i),n=rs(n),n!==null)if(e=Ds(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Ev(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return ku=n,null}function Ov(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(YM()){case op:return 1;case Cv:return 4;case Nu:case qM:return 16;case Rv:return 536870912;default:return 16}default:return 16}}var _r=null,cp=null,_u=null;function Fv(){if(_u)return _u;var n,e=cp,t=e.length,i,r="value"in _r?_r.value:_r.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return _u=r.slice(n,1<i?1-i:void 0)}function vu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Rl(){return!0}function Vm(){return!1}function Bn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Rl:Vm,this.isPropagationStopped=Vm,this}return pt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Rl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Rl)},persist:function(){},isPersistent:Rl}),e}var qo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=Bn(qo),cl=pt({},qo,{view:0,detail:0}),l1=Bn(cl),pf,mf,ra,gc=pt({},cl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ra&&(ra&&n.type==="mousemove"?(pf=n.screenX-ra.screenX,mf=n.screenY-ra.screenY):mf=pf=0,ra=n),pf)},movementY:function(n){return"movementY"in n?n.movementY:mf}}),Hm=Bn(gc),u1=pt({},gc,{dataTransfer:0}),c1=Bn(u1),f1=pt({},cl,{relatedTarget:0}),gf=Bn(f1),h1=pt({},qo,{animationName:0,elapsedTime:0,pseudoElement:0}),d1=Bn(h1),p1=pt({},qo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),m1=Bn(p1),g1=pt({},qo,{data:0}),Gm=Bn(g1),_1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y1(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=x1[n])?!!e[n]:!1}function hp(){return y1}var S1=pt({},cl,{key:function(n){if(n.key){var e=_1[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=vu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?v1[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(n){return n.type==="keypress"?vu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),M1=Bn(S1),E1=pt({},gc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Bn(E1),T1=pt({},cl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),w1=Bn(T1),A1=pt({},qo,{propertyName:0,elapsedTime:0,pseudoElement:0}),C1=Bn(A1),R1=pt({},gc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),P1=Bn(R1),b1=[9,13,27,32],dp=Ji&&"CompositionEvent"in window,Ma=null;Ji&&"documentMode"in document&&(Ma=document.documentMode);var L1=Ji&&"TextEvent"in window&&!Ma,kv=Ji&&(!dp||Ma&&8<Ma&&11>=Ma),Xm=String.fromCharCode(32),$m=!1;function zv(n,e){switch(n){case"keyup":return b1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bv(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var no=!1;function D1(n,e){switch(n){case"compositionend":return Bv(e);case"keypress":return e.which!==32?null:($m=!0,Xm);case"textInput":return n=e.data,n===Xm&&$m?null:n;default:return null}}function I1(n,e){if(no)return n==="compositionend"||!dp&&zv(n,e)?(n=Fv(),_u=cp=_r=null,no=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kv&&e.locale!=="ko"?null:e.data;default:return null}}var U1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!U1[n.type]:e==="textarea"}function Vv(n,e,t,i){vv(i),e=zu(e,"onChange"),0<e.length&&(t=new fp("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ea=null,Ba=null;function N1(n){Qv(n,0)}function _c(n){var e=so(n);if(fv(e))return n}function O1(n,e){if(n==="change")return e}var Hv=!1;if(Ji){var _f;if(Ji){var vf="oninput"in document;if(!vf){var Ym=document.createElement("div");Ym.setAttribute("oninput","return;"),vf=typeof Ym.oninput=="function"}_f=vf}else _f=!1;Hv=_f&&(!document.documentMode||9<document.documentMode)}function qm(){Ea&&(Ea.detachEvent("onpropertychange",Gv),Ba=Ea=null)}function Gv(n){if(n.propertyName==="value"&&_c(Ba)){var e=[];Vv(e,Ba,n,sp(n)),Mv(N1,e)}}function F1(n,e,t){n==="focusin"?(qm(),Ea=e,Ba=t,Ea.attachEvent("onpropertychange",Gv)):n==="focusout"&&qm()}function k1(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return _c(Ba)}function z1(n,e){if(n==="click")return _c(e)}function B1(n,e){if(n==="input"||n==="change")return _c(e)}function V1(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var Si=typeof Object.is=="function"?Object.is:V1;function Va(n,e){if(Si(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Ah.call(e,r)||!Si(n[r],e[r]))return!1}return!0}function Km(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Zm(n,e){var t=Km(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Km(t)}}function Wv(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?Wv(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function Xv(){for(var n=window,e=Du();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Du(n.document)}return e}function pp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function H1(n){var e=Xv(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&Wv(t.ownerDocument.documentElement,t)){if(i!==null&&pp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Zm(t,s);var o=Zm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var G1=Ji&&"documentMode"in document&&11>=document.documentMode,io=null,Xh=null,Ta=null,$h=!1;function Qm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;$h||io==null||io!==Du(i)||(i=io,"selectionStart"in i&&pp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ta&&Va(Ta,i)||(Ta=i,i=zu(Xh,"onSelect"),0<i.length&&(e=new fp("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=io)))}function Pl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var ro={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},xf={},$v={};Ji&&($v=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function vc(n){if(xf[n])return xf[n];if(!ro[n])return n;var e=ro[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in $v)return xf[n]=e[t];return n}var jv=vc("animationend"),Yv=vc("animationiteration"),qv=vc("animationstart"),Kv=vc("transitionend"),Zv=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Br(n,e){Zv.set(n,e),Ls(e,[n])}for(var yf=0;yf<Jm.length;yf++){var Sf=Jm[yf],W1=Sf.toLowerCase(),X1=Sf[0].toUpperCase()+Sf.slice(1);Br(W1,"on"+X1)}Br(jv,"onAnimationEnd");Br(Yv,"onAnimationIteration");Br(qv,"onAnimationStart");Br("dblclick","onDoubleClick");Br("focusin","onFocus");Br("focusout","onBlur");Br(Kv,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);Ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function eg(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,WM(i,e,void 0,n),n.currentTarget=null}function Qv(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;eg(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;eg(r,a,u),s=l}}}if(Uu)throw n=Vh,Uu=!1,Vh=null,n}function rt(n,e){var t=e[Zh];t===void 0&&(t=e[Zh]=new Set);var i=n+"__bubble";t.has(i)||(Jv(e,n,2,!1),t.add(i))}function Mf(n,e,t){var i=0;e&&(i|=4),Jv(t,n,i,e)}var bl="_reactListening"+Math.random().toString(36).slice(2);function Ha(n){if(!n[bl]){n[bl]=!0,ov.forEach(function(t){t!=="selectionchange"&&($1.has(t)||Mf(t,!1,n),Mf(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[bl]||(e[bl]=!0,Mf("selectionchange",!1,e))}}function Jv(n,e,t,i){switch(Ov(e)){case 1:var r=o1;break;case 4:r=a1;break;default:r=up}t=r.bind(null,e,t,n),r=void 0,!Bh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Ef(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=rs(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Mv(function(){var u=s,c=sp(t),f=[];e:{var d=Zv.get(n);if(d!==void 0){var p=fp,_=n;switch(n){case"keypress":if(vu(t)===0)break e;case"keydown":case"keyup":p=M1;break;case"focusin":_="focus",p=gf;break;case"focusout":_="blur",p=gf;break;case"beforeblur":case"afterblur":p=gf;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=c1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=w1;break;case jv:case Yv:case qv:p=d1;break;case Kv:p=C1;break;case"scroll":p=l1;break;case"wheel":p=P1;break;case"copy":case"cut":case"paste":p=m1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Wm}var m=(e&4)!==0,g=!m&&n==="scroll",h=m?d!==null?d+"Capture":null:d;m=[];for(var v=u,x;v!==null;){x=v;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,h!==null&&(M=Oa(v,h),M!=null&&m.push(Ga(v,M,x)))),g)break;v=v.return}0<m.length&&(d=new p(d,_,null,t,c),f.push({event:d,listeners:m}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==kh&&(_=t.relatedTarget||t.fromElement)&&(rs(_)||_[er]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=u,_=_?rs(_):null,_!==null&&(g=Ds(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(m=Hm,M="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(m=Wm,M="onPointerLeave",h="onPointerEnter",v="pointer"),g=p==null?d:so(p),x=_==null?d:so(_),d=new m(M,v+"leave",p,t,c),d.target=g,d.relatedTarget=x,M=null,rs(c)===u&&(m=new m(h,v+"enter",_,t,c),m.target=x,m.relatedTarget=g,M=m),g=M,p&&_)t:{for(m=p,h=_,v=0,x=m;x;x=Ns(x))v++;for(x=0,M=h;M;M=Ns(M))x++;for(;0<v-x;)m=Ns(m),v--;for(;0<x-v;)h=Ns(h),x--;for(;v--;){if(m===h||h!==null&&m===h.alternate)break t;m=Ns(m),h=Ns(h)}m=null}else m=null;p!==null&&tg(f,d,p,m,!1),_!==null&&g!==null&&tg(f,g,_,m,!0)}}e:{if(d=u?so(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var S=O1;else if(jm(d))if(Hv)S=B1;else{S=k1;var E=F1}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(S=z1);if(S&&(S=S(n,u))){Vv(f,S,t,c);break e}E&&E(n,d,u),n==="focusout"&&(E=d._wrapperState)&&E.controlled&&d.type==="number"&&Ih(d,"number",d.value)}switch(E=u?so(u):window,n){case"focusin":(jm(E)||E.contentEditable==="true")&&(io=E,Xh=u,Ta=null);break;case"focusout":Ta=Xh=io=null;break;case"mousedown":$h=!0;break;case"contextmenu":case"mouseup":case"dragend":$h=!1,Qm(f,t,c);break;case"selectionchange":if(G1)break;case"keydown":case"keyup":Qm(f,t,c)}var w;if(dp)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else no?zv(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(kv&&t.locale!=="ko"&&(no||P!=="onCompositionStart"?P==="onCompositionEnd"&&no&&(w=Fv()):(_r=c,cp="value"in _r?_r.value:_r.textContent,no=!0)),E=zu(u,P),0<E.length&&(P=new Gm(P,n,null,t,c),f.push({event:P,listeners:E}),w?P.data=w:(w=Bv(t),w!==null&&(P.data=w)))),(w=L1?D1(n,t):I1(n,t))&&(u=zu(u,"onBeforeInput"),0<u.length&&(c=new Gm("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=w))}Qv(f,e)})}function Ga(n,e,t){return{instance:n,listener:e,currentTarget:t}}function zu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oa(n,t),s!=null&&i.unshift(Ga(n,s,r)),s=Oa(n,e),s!=null&&i.push(Ga(n,s,r))),n=n.return}return i}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function tg(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Oa(t,s),l!=null&&o.unshift(Ga(t,l,a))):r||(l=Oa(t,s),l!=null&&o.push(Ga(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var j1=/\r\n?/g,Y1=/\u0000|\uFFFD/g;function ng(n){return(typeof n=="string"?n:""+n).replace(j1,`
`).replace(Y1,"")}function Ll(n,e,t){if(e=ng(e),ng(n)!==e&&t)throw Error(se(425))}function Bu(){}var jh=null,Yh=null;function qh(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Kh=typeof setTimeout=="function"?setTimeout:void 0,q1=typeof clearTimeout=="function"?clearTimeout:void 0,ig=typeof Promise=="function"?Promise:void 0,K1=typeof queueMicrotask=="function"?queueMicrotask:typeof ig<"u"?function(n){return ig.resolve(null).then(n).catch(Z1)}:Kh;function Z1(n){setTimeout(function(){throw n})}function Tf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),za(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);za(e)}function wr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function rg(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Ko=Math.random().toString(36).slice(2),Ri="__reactFiber$"+Ko,Wa="__reactProps$"+Ko,er="__reactContainer$"+Ko,Zh="__reactEvents$"+Ko,Q1="__reactListeners$"+Ko,J1="__reactHandles$"+Ko;function rs(n){var e=n[Ri];if(e)return e;for(var t=n.parentNode;t;){if(e=t[er]||t[Ri]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=rg(n);n!==null;){if(t=n[Ri])return t;n=rg(n)}return e}n=t,t=n.parentNode}return null}function fl(n){return n=n[Ri]||n[er],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function so(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(se(33))}function xc(n){return n[Wa]||null}var Qh=[],oo=-1;function Vr(n){return{current:n}}function ot(n){0>oo||(n.current=Qh[oo],Qh[oo]=null,oo--)}function it(n,e){oo++,Qh[oo]=n.current,n.current=e}var Nr={},Jt=Vr(Nr),pn=Vr(!1),ys=Nr;function bo(n,e){var t=n.type.contextTypes;if(!t)return Nr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function Vu(){ot(pn),ot(Jt)}function sg(n,e,t){if(Jt.current!==Nr)throw Error(se(168));it(Jt,e),it(pn,t)}function ex(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,FM(n)||"Unknown",r));return pt({},t,i)}function Hu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Nr,ys=Jt.current,it(Jt,n),it(pn,pn.current),!0}function og(n,e,t){var i=n.stateNode;if(!i)throw Error(se(169));t?(n=ex(n,e,ys),i.__reactInternalMemoizedMergedChildContext=n,ot(pn),ot(Jt),it(Jt,n)):ot(pn),it(pn,t)}var $i=null,yc=!1,wf=!1;function tx(n){$i===null?$i=[n]:$i.push(n)}function eE(n){yc=!0,tx(n)}function Hr(){if(!wf&&$i!==null){wf=!0;var n=0,e=Ye;try{var t=$i;for(Ye=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}$i=null,yc=!1}catch(r){throw $i!==null&&($i=$i.slice(n+1)),Av(op,Hr),r}finally{Ye=e,wf=!1}}return null}var ao=[],lo=0,Gu=null,Wu=0,$n=[],jn=0,Ss=null,Yi=1,qi="";function Qr(n,e){ao[lo++]=Wu,ao[lo++]=Gu,Gu=n,Wu=e}function nx(n,e,t){$n[jn++]=Yi,$n[jn++]=qi,$n[jn++]=Ss,Ss=n;var i=Yi;n=qi;var r=32-vi(i)-1;i&=~(1<<r),t+=1;var s=32-vi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Yi=1<<32-vi(e)+r|t<<r|i,qi=s+n}else Yi=1<<s|t<<r|i,qi=n}function mp(n){n.return!==null&&(Qr(n,1),nx(n,1,0))}function gp(n){for(;n===Gu;)Gu=ao[--lo],ao[lo]=null,Wu=ao[--lo],ao[lo]=null;for(;n===Ss;)Ss=$n[--jn],$n[jn]=null,qi=$n[--jn],$n[jn]=null,Yi=$n[--jn],$n[jn]=null}var Nn=null,In=null,lt=!1,di=null;function ix(n,e){var t=Zn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function ag(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Nn=n,In=wr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Nn=n,In=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ss!==null?{id:Yi,overflow:qi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Zn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Nn=n,In=null,!0):!1;default:return!1}}function Jh(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ed(n){if(lt){var e=In;if(e){var t=e;if(!ag(n,e)){if(Jh(n))throw Error(se(418));e=wr(t.nextSibling);var i=Nn;e&&ag(n,e)?ix(i,t):(n.flags=n.flags&-4097|2,lt=!1,Nn=n)}}else{if(Jh(n))throw Error(se(418));n.flags=n.flags&-4097|2,lt=!1,Nn=n}}}function lg(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function Dl(n){if(n!==Nn)return!1;if(!lt)return lg(n),lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!qh(n.type,n.memoizedProps)),e&&(e=In)){if(Jh(n))throw rx(),Error(se(418));for(;e;)ix(n,e),e=wr(e.nextSibling)}if(lg(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(se(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){In=wr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}In=null}}else In=Nn?wr(n.stateNode.nextSibling):null;return!0}function rx(){for(var n=In;n;)n=wr(n.nextSibling)}function Lo(){In=Nn=null,lt=!1}function _p(n){di===null?di=[n]:di.push(n)}var tE=sr.ReactCurrentBatchConfig;function fi(n,e){if(n&&n.defaultProps){e=pt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Xu=Vr(null),$u=null,uo=null,vp=null;function xp(){vp=uo=$u=null}function yp(n){var e=Xu.current;ot(Xu),n._currentValue=e}function td(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function So(n,e){$u=n,vp=uo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(hn=!0),n.firstContext=null)}function ti(n){var e=n._currentValue;if(vp!==n)if(n={context:n,memoizedValue:e,next:null},uo===null){if($u===null)throw Error(se(308));uo=n,$u.dependencies={lanes:0,firstContext:n}}else uo=uo.next=n;return e}var ss=null;function Sp(n){ss===null?ss=[n]:ss.push(n)}function sx(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Sp(e)):(t.next=r.next,r.next=t),e.interleaved=t,tr(n,i)}function tr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var pr=!1;function Mp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ox(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ki(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,tr(n,t)}return r=i.interleaved,r===null?(e.next=e,Sp(i)):(e.next=r.next,r.next=e),i.interleaved=e,tr(n,t)}function xu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ap(n,t)}}function ug(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function ju(n,e,t,i){var r=n.updateQueue;pr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,m=a;switch(d=e,p=t,m.tag){case 1:if(_=m.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=m.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=pt({},f,d);break e;case 2:pr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(1);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Es|=o,n.lanes=o,n.memoizedState=f}}function cg(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var ax=new sv.Component().refs;function nd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:pt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Sc={isMounted:function(n){return(n=n._reactInternals)?Ds(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Rr(n),s=Ki(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(xi(e,n,r,i),xu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=ln(),r=Rr(n),s=Ki(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(xi(e,n,r,i),xu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=ln(),i=Rr(n),r=Ki(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(n,r,i),e!==null&&(xi(e,n,i,t),xu(e,n,i))}};function fg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Va(t,i)||!Va(r,s):!0}function lx(n,e,t){var i=!1,r=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=ti(s):(r=mn(e)?ys:Jt.current,i=e.contextTypes,s=(i=i!=null)?bo(n,r):Nr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Sc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function hg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Sc.enqueueReplaceState(e,e.state,null)}function id(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=ax,Mp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ti(s):(s=mn(e)?ys:Jt.current,r.context=bo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(nd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Sc.enqueueReplaceState(r,r.state,null),ju(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function sa(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(se(309));var i=t.stateNode}if(!i)throw Error(se(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===ax&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(se(284));if(!t._owner)throw Error(se(290,n))}return n}function Il(n,e){throw n=Object.prototype.toString.call(e),Error(se(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function dg(n){var e=n._init;return e(n._payload)}function ux(n){function e(h,v){if(n){var x=h.deletions;x===null?(h.deletions=[v],h.flags|=16):x.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=Pr(h,v),h.index=0,h.sibling=null,h}function s(h,v,x){return h.index=x,n?(x=h.alternate,x!==null?(x=x.index,x<v?(h.flags|=2,v):x):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,x,M){return v===null||v.tag!==6?(v=Df(x,h.mode,M),v.return=h,v):(v=r(v,x),v.return=h,v)}function l(h,v,x,M){var S=x.type;return S===to?c(h,v,x.props.children,M,x.key):v!==null&&(v.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dr&&dg(S)===v.type)?(M=r(v,x.props),M.ref=sa(h,v,x),M.return=h,M):(M=wu(x.type,x.key,x.props,null,h.mode,M),M.ref=sa(h,v,x),M.return=h,M)}function u(h,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=If(x,h.mode,M),v.return=h,v):(v=r(v,x.children||[]),v.return=h,v)}function c(h,v,x,M,S){return v===null||v.tag!==7?(v=hs(x,h.mode,M,S),v.return=h,v):(v=r(v,x),v.return=h,v)}function f(h,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Df(""+v,h.mode,x),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Ml:return x=wu(v.type,v.key,v.props,null,h.mode,x),x.ref=sa(h,null,v),x.return=h,x;case eo:return v=If(v,h.mode,x),v.return=h,v;case dr:var M=v._init;return f(h,M(v._payload),x)}if(pa(v)||ea(v))return v=hs(v,h.mode,x,null),v.return=h,v;Il(h,v)}return null}function d(h,v,x,M){var S=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(h,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ml:return x.key===S?l(h,v,x,M):null;case eo:return x.key===S?u(h,v,x,M):null;case dr:return S=x._init,d(h,v,S(x._payload),M)}if(pa(x)||ea(x))return S!==null?null:c(h,v,x,M,null);Il(h,x)}return null}function p(h,v,x,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return h=h.get(x)||null,a(v,h,""+M,S);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Ml:return h=h.get(M.key===null?x:M.key)||null,l(v,h,M,S);case eo:return h=h.get(M.key===null?x:M.key)||null,u(v,h,M,S);case dr:var E=M._init;return p(h,v,x,E(M._payload),S)}if(pa(M)||ea(M))return h=h.get(x)||null,c(v,h,M,S,null);Il(v,M)}return null}function _(h,v,x,M){for(var S=null,E=null,w=v,P=v=0,y=null;w!==null&&P<x.length;P++){w.index>P?(y=w,w=null):y=w.sibling;var A=d(h,w,x[P],M);if(A===null){w===null&&(w=y);break}n&&w&&A.alternate===null&&e(h,w),v=s(A,v,P),E===null?S=A:E.sibling=A,E=A,w=y}if(P===x.length)return t(h,w),lt&&Qr(h,P),S;if(w===null){for(;P<x.length;P++)w=f(h,x[P],M),w!==null&&(v=s(w,v,P),E===null?S=w:E.sibling=w,E=w);return lt&&Qr(h,P),S}for(w=i(h,w);P<x.length;P++)y=p(w,h,P,x[P],M),y!==null&&(n&&y.alternate!==null&&w.delete(y.key===null?P:y.key),v=s(y,v,P),E===null?S=y:E.sibling=y,E=y);return n&&w.forEach(function(Y){return e(h,Y)}),lt&&Qr(h,P),S}function m(h,v,x,M){var S=ea(x);if(typeof S!="function")throw Error(se(150));if(x=S.call(x),x==null)throw Error(se(151));for(var E=S=null,w=v,P=v=0,y=null,A=x.next();w!==null&&!A.done;P++,A=x.next()){w.index>P?(y=w,w=null):y=w.sibling;var Y=d(h,w,A.value,M);if(Y===null){w===null&&(w=y);break}n&&w&&Y.alternate===null&&e(h,w),v=s(Y,v,P),E===null?S=Y:E.sibling=Y,E=Y,w=y}if(A.done)return t(h,w),lt&&Qr(h,P),S;if(w===null){for(;!A.done;P++,A=x.next())A=f(h,A.value,M),A!==null&&(v=s(A,v,P),E===null?S=A:E.sibling=A,E=A);return lt&&Qr(h,P),S}for(w=i(h,w);!A.done;P++,A=x.next())A=p(w,h,P,A.value,M),A!==null&&(n&&A.alternate!==null&&w.delete(A.key===null?P:A.key),v=s(A,v,P),E===null?S=A:E.sibling=A,E=A);return n&&w.forEach(function(W){return e(h,W)}),lt&&Qr(h,P),S}function g(h,v,x,M){if(typeof x=="object"&&x!==null&&x.type===to&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ml:e:{for(var S=x.key,E=v;E!==null;){if(E.key===S){if(S=x.type,S===to){if(E.tag===7){t(h,E.sibling),v=r(E,x.props.children),v.return=h,h=v;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===dr&&dg(S)===E.type){t(h,E.sibling),v=r(E,x.props),v.ref=sa(h,E,x),v.return=h,h=v;break e}t(h,E);break}else e(h,E);E=E.sibling}x.type===to?(v=hs(x.props.children,h.mode,M,x.key),v.return=h,h=v):(M=wu(x.type,x.key,x.props,null,h.mode,M),M.ref=sa(h,v,x),M.return=h,h=M)}return o(h);case eo:e:{for(E=x.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){t(h,v.sibling),v=r(v,x.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=If(x,h.mode,M),v.return=h,h=v}return o(h);case dr:return E=x._init,g(h,v,E(x._payload),M)}if(pa(x))return _(h,v,x,M);if(ea(x))return m(h,v,x,M);Il(h,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,x),v.return=h,h=v):(t(h,v),v=Df(x,h.mode,M),v.return=h,h=v),o(h)):t(h,v)}return g}var Do=ux(!0),cx=ux(!1),hl={},Ii=Vr(hl),Xa=Vr(hl),$a=Vr(hl);function os(n){if(n===hl)throw Error(se(174));return n}function Ep(n,e){switch(it($a,e),it(Xa,n),it(Ii,hl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nh(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Nh(e,n)}ot(Ii),it(Ii,e)}function Io(){ot(Ii),ot(Xa),ot($a)}function fx(n){os($a.current);var e=os(Ii.current),t=Nh(e,n.type);e!==t&&(it(Xa,n),it(Ii,t))}function Tp(n){Xa.current===n&&(ot(Ii),ot(Xa))}var ct=Vr(0);function Yu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Af=[];function wp(){for(var n=0;n<Af.length;n++)Af[n]._workInProgressVersionPrimary=null;Af.length=0}var yu=sr.ReactCurrentDispatcher,Cf=sr.ReactCurrentBatchConfig,Ms=0,dt=null,Rt=null,Ut=null,qu=!1,wa=!1,ja=0,nE=0;function Xt(){throw Error(se(321))}function Ap(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!Si(n[t],e[t]))return!1;return!0}function Cp(n,e,t,i,r,s){if(Ms=s,dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,yu.current=n===null||n.memoizedState===null?oE:aE,n=t(i,r),wa){s=0;do{if(wa=!1,ja=0,25<=s)throw Error(se(301));s+=1,Ut=Rt=null,e.updateQueue=null,yu.current=lE,n=t(i,r)}while(wa)}if(yu.current=Ku,e=Rt!==null&&Rt.next!==null,Ms=0,Ut=Rt=dt=null,qu=!1,e)throw Error(se(300));return n}function Rp(){var n=ja!==0;return ja=0,n}function wi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?dt.memoizedState=Ut=n:Ut=Ut.next=n,Ut}function ni(){if(Rt===null){var n=dt.alternate;n=n!==null?n.memoizedState:null}else n=Rt.next;var e=Ut===null?dt.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=n;else{if(n===null)throw Error(se(310));Rt=n,n={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?dt.memoizedState=Ut=n:Ut=Ut.next=n}return Ut}function Ya(n,e){return typeof e=="function"?e(n):e}function Rf(n){var e=ni(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=Rt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ms&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,dt.lanes|=c,Es|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Si(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,dt.lanes|=s,Es|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Pf(n){var e=ni(),t=e.queue;if(t===null)throw Error(se(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);Si(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function hx(){}function dx(n,e){var t=dt,i=ni(),r=e(),s=!Si(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Pp(gx.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(t.flags|=2048,qa(9,mx.bind(null,t,i,r,e),void 0,null),Ot===null)throw Error(se(349));Ms&30||px(t,e,r)}return r}function px(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function mx(n,e,t,i){e.value=t,e.getSnapshot=i,_x(e)&&vx(n)}function gx(n,e,t){return t(function(){_x(e)&&vx(n)})}function _x(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!Si(n,t)}catch{return!0}}function vx(n){var e=tr(n,1);e!==null&&xi(e,n,1,-1)}function pg(n){var e=wi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ya,lastRenderedState:n},e.queue=n,n=n.dispatch=sE.bind(null,dt,n),[e.memoizedState,n]}function qa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=dt.updateQueue,e===null?(e={lastEffect:null,stores:null},dt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function xx(){return ni().memoizedState}function Su(n,e,t,i){var r=wi();dt.flags|=n,r.memoizedState=qa(1|e,t,void 0,i===void 0?null:i)}function Mc(n,e,t,i){var r=ni();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Ap(i,o.deps)){r.memoizedState=qa(e,t,s,i);return}}dt.flags|=n,r.memoizedState=qa(1|e,t,s,i)}function mg(n,e){return Su(8390656,8,n,e)}function Pp(n,e){return Mc(2048,8,n,e)}function yx(n,e){return Mc(4,2,n,e)}function Sx(n,e){return Mc(4,4,n,e)}function Mx(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Ex(n,e,t){return t=t!=null?t.concat([n]):null,Mc(4,4,Mx.bind(null,e,n),t)}function bp(){}function Tx(n,e){var t=ni();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function wx(n,e){var t=ni();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ap(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function Ax(n,e,t){return Ms&21?(Si(t,e)||(t=Pv(),dt.lanes|=t,Es|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,hn=!0),n.memoizedState=t)}function iE(n,e){var t=Ye;Ye=t!==0&&4>t?t:4,n(!0);var i=Cf.transition;Cf.transition={};try{n(!1),e()}finally{Ye=t,Cf.transition=i}}function Cx(){return ni().memoizedState}function rE(n,e,t){var i=Rr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Rx(n))Px(e,t);else if(t=sx(n,e,t,i),t!==null){var r=ln();xi(t,n,i,r),bx(t,e,i)}}function sE(n,e,t){var i=Rr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Rx(n))Px(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,Si(a,o)){var l=e.interleaved;l===null?(r.next=r,Sp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=sx(n,e,r,i),t!==null&&(r=ln(),xi(t,n,i,r),bx(t,e,i))}}function Rx(n){var e=n.alternate;return n===dt||e!==null&&e===dt}function Px(n,e){wa=qu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function bx(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ap(n,t)}}var Ku={readContext:ti,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},oE={readContext:ti,useCallback:function(n,e){return wi().memoizedState=[n,e===void 0?null:e],n},useContext:ti,useEffect:mg,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Su(4194308,4,Mx.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Su(4194308,4,n,e)},useInsertionEffect:function(n,e){return Su(4,2,n,e)},useMemo:function(n,e){var t=wi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=wi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=rE.bind(null,dt,n),[i.memoizedState,n]},useRef:function(n){var e=wi();return n={current:n},e.memoizedState=n},useState:pg,useDebugValue:bp,useDeferredValue:function(n){return wi().memoizedState=n},useTransition:function(){var n=pg(!1),e=n[0];return n=iE.bind(null,n[1]),wi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=dt,r=wi();if(lt){if(t===void 0)throw Error(se(407));t=t()}else{if(t=e(),Ot===null)throw Error(se(349));Ms&30||px(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,mg(gx.bind(null,i,s,n),[n]),i.flags|=2048,qa(9,mx.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=wi(),e=Ot.identifierPrefix;if(lt){var t=qi,i=Yi;t=(i&~(1<<32-vi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=ja++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=nE++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},aE={readContext:ti,useCallback:Tx,useContext:ti,useEffect:Pp,useImperativeHandle:Ex,useInsertionEffect:yx,useLayoutEffect:Sx,useMemo:wx,useReducer:Rf,useRef:xx,useState:function(){return Rf(Ya)},useDebugValue:bp,useDeferredValue:function(n){var e=ni();return Ax(e,Rt.memoizedState,n)},useTransition:function(){var n=Rf(Ya)[0],e=ni().memoizedState;return[n,e]},useMutableSource:hx,useSyncExternalStore:dx,useId:Cx,unstable_isNewReconciler:!1},lE={readContext:ti,useCallback:Tx,useContext:ti,useEffect:Pp,useImperativeHandle:Ex,useInsertionEffect:yx,useLayoutEffect:Sx,useMemo:wx,useReducer:Pf,useRef:xx,useState:function(){return Pf(Ya)},useDebugValue:bp,useDeferredValue:function(n){var e=ni();return Rt===null?e.memoizedState=n:Ax(e,Rt.memoizedState,n)},useTransition:function(){var n=Pf(Ya)[0],e=ni().memoizedState;return[n,e]},useMutableSource:hx,useSyncExternalStore:dx,useId:Cx,unstable_isNewReconciler:!1};function Uo(n,e){try{var t="",i=e;do t+=OM(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function bf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function rd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var uE=typeof WeakMap=="function"?WeakMap:Map;function Lx(n,e,t){t=Ki(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Qu||(Qu=!0,pd=i),rd(n,e)},t}function Dx(n,e,t){t=Ki(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){rd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){rd(n,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function gg(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new uE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=EE.bind(null,n,e,t),e.then(n,n))}function _g(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function vg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Ki(-1,1),e.tag=2,Ar(t,e,1))),t.lanes|=1),n)}var cE=sr.ReactCurrentOwner,hn=!1;function rn(n,e,t,i){e.child=n===null?cx(e,null,t,i):Do(e,n.child,t,i)}function xg(n,e,t,i,r){t=t.render;var s=e.ref;return So(e,r),i=Cp(n,e,t,i,s,r),t=Rp(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,nr(n,e,r)):(lt&&t&&mp(e),e.flags|=1,rn(n,e,i,r),e.child)}function yg(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!kp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Ix(n,e,s,i,r)):(n=wu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Va,t(o,i)&&n.ref===e.ref)return nr(n,e,r)}return e.flags|=1,n=Pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Ix(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Va(s,i)&&n.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(hn=!0);else return e.lanes=n.lanes,nr(n,e,r)}return sd(n,e,t,i,r)}function Ux(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(fo,Pn),Pn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,it(fo,Pn),Pn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,it(fo,Pn),Pn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,it(fo,Pn),Pn|=i;return rn(n,e,r,t),e.child}function Nx(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function sd(n,e,t,i,r){var s=mn(t)?ys:Jt.current;return s=bo(e,s),So(e,r),t=Cp(n,e,t,i,s,r),i=Rp(),n!==null&&!hn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,nr(n,e,r)):(lt&&i&&mp(e),e.flags|=1,rn(n,e,t,r),e.child)}function Sg(n,e,t,i,r){if(mn(t)){var s=!0;Hu(e)}else s=!1;if(So(e,r),e.stateNode===null)Mu(n,e),lx(e,t,i),id(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ti(u):(u=mn(t)?ys:Jt.current,u=bo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&hg(e,o,i,u),pr=!1;var d=e.memoizedState;o.state=d,ju(e,i,o,r),l=e.memoizedState,a!==i||d!==l||pn.current||pr?(typeof c=="function"&&(nd(e,t,c,i),l=e.memoizedState),(a=pr||fg(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ox(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:fi(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ti(l):(l=mn(t)?ys:Jt.current,l=bo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&hg(e,o,i,l),pr=!1,d=e.memoizedState,o.state=d,ju(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||pn.current||pr?(typeof p=="function"&&(nd(e,t,p,i),_=e.memoizedState),(u=pr||fg(e,t,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return od(n,e,t,i,s,r)}function od(n,e,t,i,r,s){Nx(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&og(e,t,!1),nr(n,e,s);i=e.stateNode,cE.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Do(e,n.child,null,s),e.child=Do(e,null,a,s)):rn(n,e,a,s),e.memoizedState=i.state,r&&og(e,t,!0),e.child}function Ox(n){var e=n.stateNode;e.pendingContext?sg(n,e.pendingContext,e.pendingContext!==e.context):e.context&&sg(n,e.context,!1),Ep(n,e.containerInfo)}function Mg(n,e,t,i,r){return Lo(),_p(r),e.flags|=256,rn(n,e,t,i),e.child}var ad={dehydrated:null,treeContext:null,retryLane:0};function ld(n){return{baseLanes:n,cachePool:null,transitions:null}}function Fx(n,e,t){var i=e.pendingProps,r=ct.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),it(ct,r&1),n===null)return ed(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=wc(o,i,0,null),n=hs(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ld(t),e.memoizedState=ad,n):Lp(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return fE(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=hs(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ld(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=ad,i}return s=n.child,n=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Lp(n,e){return e=wc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Ul(n,e,t,i){return i!==null&&_p(i),Do(e,n.child,null,t),n=Lp(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function fE(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=bf(Error(se(422))),Ul(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=wc({mode:"visible",children:i.children},r,0,null),s=hs(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Do(e,n.child,null,o),e.child.memoizedState=ld(o),e.memoizedState=ad,s);if(!(e.mode&1))return Ul(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=bf(s,i,void 0),Ul(n,e,o,i)}if(a=(o&n.childLanes)!==0,hn||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,tr(n,r),xi(i,n,r,-1))}return Fp(),i=bf(Error(se(421))),Ul(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=TE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,In=wr(r.nextSibling),Nn=e,lt=!0,di=null,n!==null&&($n[jn++]=Yi,$n[jn++]=qi,$n[jn++]=Ss,Yi=n.id,qi=n.overflow,Ss=e),e=Lp(e,i.children),e.flags|=4096,e)}function Eg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),td(n.return,e,t)}function Lf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function kx(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(n,e,i.children,t),i=ct.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Eg(n,t,e);else if(n.tag===19)Eg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(it(ct,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Yu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Lf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Yu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Lf(e,!0,t,null,s);break;case"together":Lf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Mu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function nr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Es|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(se(153));if(e.child!==null){for(n=e.child,t=Pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function hE(n,e,t){switch(e.tag){case 3:Ox(e),Lo();break;case 5:fx(e);break;case 1:mn(e.type)&&Hu(e);break;case 4:Ep(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Xu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ct,ct.current&1),e.flags|=128,null):t&e.child.childLanes?Fx(n,e,t):(it(ct,ct.current&1),n=nr(n,e,t),n!==null?n.sibling:null);it(ct,ct.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return kx(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ct,ct.current),i)break;return null;case 22:case 23:return e.lanes=0,Ux(n,e,t)}return nr(n,e,t)}var zx,ud,Bx,Vx;zx=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};ud=function(){};Bx=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,os(Ii.current);var s=null;switch(t){case"input":r=Lh(n,r),i=Lh(n,i),s=[];break;case"select":r=pt({},r,{value:void 0}),i=pt({},i,{value:void 0}),s=[];break;case"textarea":r=Uh(n,r),i=Uh(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Bu)}Oh(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Vx=function(n,e,t,i){t!==i&&(e.flags|=4)};function oa(n,e){if(!lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function $t(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function dE(n,e,t){var i=e.pendingProps;switch(gp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return mn(e.type)&&Vu(),$t(e),null;case 3:return i=e.stateNode,Io(),ot(pn),ot(Jt),wp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Dl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,di!==null&&(_d(di),di=null))),ud(n,e),$t(e),null;case 5:Tp(e);var r=os($a.current);if(t=e.type,n!==null&&e.stateNode!=null)Bx(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return $t(e),null}if(n=os(Ii.current),Dl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Ri]=e,i[Wa]=s,n=(e.mode&1)!==0,t){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<ga.length;r++)rt(ga[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Dm(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Um(i,s),rt("invalid",i)}Oh(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ll(i.textContent,a,n),r=["children",""+a]):Ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(t){case"input":El(i),Im(i,s,!0);break;case"textarea":El(i),Nm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Bu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=pv(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Ri]=e,n[Wa]=i,zx(n,e,!1,!1),e.stateNode=n;e:{switch(o=Fh(t,i),t){case"dialog":rt("cancel",n),rt("close",n),r=i;break;case"iframe":case"object":case"embed":rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<ga.length;r++)rt(ga[r],n);r=i;break;case"source":rt("error",n),r=i;break;case"img":case"image":case"link":rt("error",n),rt("load",n),r=i;break;case"details":rt("toggle",n),r=i;break;case"input":Dm(n,i),r=Lh(n,i),rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=pt({},i,{value:void 0}),rt("invalid",n);break;case"textarea":Um(n,i),r=Uh(n,i),rt("invalid",n);break;default:r=i}Oh(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?_v(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&mv(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Na(n,l):typeof l=="number"&&Na(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",n):l!=null&&tp(n,s,l,o))}switch(t){case"input":El(n),Im(n,i,!1);break;case"textarea":El(n),Nm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ur(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?_o(n,!!i.multiple,s,!1):i.defaultValue!=null&&_o(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Bu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(n&&e.stateNode!=null)Vx(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(t=os($a.current),os(Ii.current),Dl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Ri]=e,(s=i.nodeValue!==t)&&(n=Nn,n!==null))switch(n.tag){case 3:Ll(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ll(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Ri]=e,e.stateNode=i}return $t(e),null;case 13:if(ot(ct),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(lt&&In!==null&&e.mode&1&&!(e.flags&128))rx(),Lo(),e.flags|=98560,s=!1;else if(s=Dl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Ri]=e}else Lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else di!==null&&(_d(di),di=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ct.current&1?Pt===0&&(Pt=3):Fp())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Io(),ud(n,e),n===null&&Ha(e.stateNode.containerInfo),$t(e),null;case 10:return yp(e.type._context),$t(e),null;case 17:return mn(e.type)&&Vu(),$t(e),null;case 19:if(ot(ct),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)oa(s,!1);else{if(Pt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Yu(n),o!==null){for(e.flags|=128,oa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return it(ct,ct.current&1|2),e.child}n=n.sibling}s.tail!==null&&yt()>No&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304)}else{if(!i)if(n=Yu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),oa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return $t(e),null}else 2*yt()-s.renderingStartTime>No&&t!==1073741824&&(e.flags|=128,i=!0,oa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,t=ct.current,it(ct,i?t&1|2:t&1),e):($t(e),null);case 22:case 23:return Op(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Pn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function pE(n,e){switch(gp(e),e.tag){case 1:return mn(e.type)&&Vu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Io(),ot(pn),ot(Jt),wp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Tp(e),null;case 13:if(ot(ct),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(se(340));Lo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ot(ct),null;case 4:return Io(),null;case 10:return yp(e.type._context),null;case 22:case 23:return Op(),null;case 24:return null;default:return null}}var Nl=!1,qt=!1,mE=typeof WeakSet=="function"?WeakSet:Set,ge=null;function co(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){mt(n,e,i)}else t.current=null}function cd(n,e,t){try{t()}catch(i){mt(n,e,i)}}var Tg=!1;function gE(n,e){if(jh=Fu,n=Xv(),pp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Yh={focusedElem:n,selectionRange:t},Fu=!1,ge=e;ge!==null;)if(e=ge,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ge=n;else for(;ge!==null;){e=ge;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var m=_.memoizedProps,g=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?m:fi(e.type,m),g);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(M){mt(e,e.return,M)}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}return _=Tg,Tg=!1,_}function Aa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&cd(e,t,s)}r=r.next}while(r!==i)}}function Ec(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function fd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Hx(n){var e=n.alternate;e!==null&&(n.alternate=null,Hx(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Ri],delete e[Wa],delete e[Zh],delete e[Q1],delete e[J1])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Gx(n){return n.tag===5||n.tag===3||n.tag===4}function wg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Gx(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function hd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Bu));else if(i!==4&&(n=n.child,n!==null))for(hd(n,e,t),n=n.sibling;n!==null;)hd(n,e,t),n=n.sibling}function dd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(dd(n,e,t),n=n.sibling;n!==null;)dd(n,e,t),n=n.sibling}var zt=null,hi=!1;function lr(n,e,t){for(t=t.child;t!==null;)Wx(n,e,t),t=t.sibling}function Wx(n,e,t){if(Di&&typeof Di.onCommitFiberUnmount=="function")try{Di.onCommitFiberUnmount(mc,t)}catch{}switch(t.tag){case 5:qt||co(t,e);case 6:var i=zt,r=hi;zt=null,lr(n,e,t),zt=i,hi=r,zt!==null&&(hi?(n=zt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):zt.removeChild(t.stateNode));break;case 18:zt!==null&&(hi?(n=zt,t=t.stateNode,n.nodeType===8?Tf(n.parentNode,t):n.nodeType===1&&Tf(n,t),za(n)):Tf(zt,t.stateNode));break;case 4:i=zt,r=hi,zt=t.stateNode.containerInfo,hi=!0,lr(n,e,t),zt=i,hi=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cd(t,e,o),r=r.next}while(r!==i)}lr(n,e,t);break;case 1:if(!qt&&(co(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){mt(t,e,a)}lr(n,e,t);break;case 21:lr(n,e,t);break;case 22:t.mode&1?(qt=(i=qt)||t.memoizedState!==null,lr(n,e,t),qt=i):lr(n,e,t);break;default:lr(n,e,t)}}function Ag(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new mE),e.forEach(function(i){var r=wE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function oi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,hi=!1;break e;case 3:zt=a.stateNode.containerInfo,hi=!0;break e;case 4:zt=a.stateNode.containerInfo,hi=!0;break e}a=a.return}if(zt===null)throw Error(se(160));Wx(s,o,r),zt=null,hi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xx(e,n),e=e.sibling}function Xx(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(e,n),Ei(n),i&4){try{Aa(3,n,n.return),Ec(3,n)}catch(m){mt(n,n.return,m)}try{Aa(5,n,n.return)}catch(m){mt(n,n.return,m)}}break;case 1:oi(e,n),Ei(n),i&512&&t!==null&&co(t,t.return);break;case 5:if(oi(e,n),Ei(n),i&512&&t!==null&&co(t,t.return),n.flags&32){var r=n.stateNode;try{Na(r,"")}catch(m){mt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&hv(r,s),Fh(a,o);var u=Fh(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?_v(r,f):c==="dangerouslySetInnerHTML"?mv(r,f):c==="children"?Na(r,f):tp(r,c,f,u)}switch(a){case"input":Dh(r,s);break;case"textarea":dv(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?_o(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?_o(r,!!s.multiple,s.defaultValue,!0):_o(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wa]=s}catch(m){mt(n,n.return,m)}}break;case 6:if(oi(e,n),Ei(n),i&4){if(n.stateNode===null)throw Error(se(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){mt(n,n.return,m)}}break;case 3:if(oi(e,n),Ei(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{za(e.containerInfo)}catch(m){mt(n,n.return,m)}break;case 4:oi(e,n),Ei(n);break;case 13:oi(e,n),Ei(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Up=yt())),i&4&&Ag(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(qt=(u=qt)||c,oi(e,n),qt=u):oi(e,n),Ei(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ge=n,c=n.child;c!==null;){for(f=ge=c;ge!==null;){switch(d=ge,p=d.child,d.tag){case 0:case 11:case 14:case 15:Aa(4,d,d.return);break;case 1:co(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(m){mt(i,t,m)}}break;case 5:co(d,d.return);break;case 22:if(d.memoizedState!==null){Rg(f);continue}}p!==null?(p.return=d,ge=p):Rg(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=gv("display",o))}catch(m){mt(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){mt(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:oi(e,n),Ei(n),i&4&&Ag(n);break;case 21:break;default:oi(e,n),Ei(n)}}function Ei(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Gx(t)){var i=t;break e}t=t.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Na(r,""),i.flags&=-33);var s=wg(n);dd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=wg(n);hd(n,a,o);break;default:throw Error(se(161))}}catch(l){mt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function _E(n,e,t){ge=n,$x(n)}function $x(n,e,t){for(var i=(n.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Nl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=Nl;var u=qt;if(Nl=o,(qt=l)&&!u)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?Pg(r):l!==null?(l.return=o,ge=l):Pg(r);for(;s!==null;)ge=s,$x(s),s=s.sibling;ge=r,Nl=a,qt=u}Cg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Cg(n)}}function Cg(n){for(;ge!==null;){var e=ge;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||Ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:fi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}cg(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&za(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}qt||e.flags&512&&fd(e)}catch(d){mt(e,e.return,d)}}if(e===n){ge=null;break}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}}function Rg(n){for(;ge!==null;){var e=ge;if(e===n){ge=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ge=t;break}ge=e.return}}function Pg(n){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Ec(4,e)}catch(l){mt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{fd(e)}catch(l){mt(e,s,l)}break;case 5:var o=e.return;try{fd(e)}catch(l){mt(e,o,l)}}}catch(l){mt(e,e.return,l)}if(e===n){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var vE=Math.ceil,Zu=sr.ReactCurrentDispatcher,Dp=sr.ReactCurrentOwner,ei=sr.ReactCurrentBatchConfig,$e=0,Ot=null,wt=null,Ht=0,Pn=0,fo=Vr(0),Pt=0,Ka=null,Es=0,Tc=0,Ip=0,Ca=null,fn=null,Up=0,No=1/0,Wi=null,Qu=!1,pd=null,Cr=null,Ol=!1,vr=null,Ju=0,Ra=0,md=null,Eu=-1,Tu=0;function ln(){return $e&6?yt():Eu!==-1?Eu:Eu=yt()}function Rr(n){return n.mode&1?$e&2&&Ht!==0?Ht&-Ht:tE.transition!==null?(Tu===0&&(Tu=Pv()),Tu):(n=Ye,n!==0||(n=window.event,n=n===void 0?16:Ov(n.type)),n):1}function xi(n,e,t,i){if(50<Ra)throw Ra=0,md=null,Error(se(185));ul(n,t,i),(!($e&2)||n!==Ot)&&(n===Ot&&(!($e&2)&&(Tc|=t),Pt===4&&gr(n,Ht)),gn(n,i),t===1&&$e===0&&!(e.mode&1)&&(No=yt()+500,yc&&Hr()))}function gn(n,e){var t=n.callbackNode;t1(n,e);var i=Ou(n,n===Ot?Ht:0);if(i===0)t!==null&&km(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&km(t),e===1)n.tag===0?eE(bg.bind(null,n)):tx(bg.bind(null,n)),K1(function(){!($e&6)&&Hr()}),t=null;else{switch(bv(i)){case 1:t=op;break;case 4:t=Cv;break;case 16:t=Nu;break;case 536870912:t=Rv;break;default:t=Nu}t=ey(t,jx.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function jx(n,e){if(Eu=-1,Tu=0,$e&6)throw Error(se(327));var t=n.callbackNode;if(Mo()&&n.callbackNode!==t)return null;var i=Ou(n,n===Ot?Ht:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=ec(n,i);else{e=i;var r=$e;$e|=2;var s=qx();(Ot!==n||Ht!==e)&&(Wi=null,No=yt()+500,fs(n,e));do try{SE();break}catch(a){Yx(n,a)}while(1);xp(),Zu.current=s,$e=r,wt!==null?e=0:(Ot=null,Ht=0,e=Pt)}if(e!==0){if(e===2&&(r=Hh(n),r!==0&&(i=r,e=gd(n,r))),e===1)throw t=Ka,fs(n,0),gr(n,i),gn(n,yt()),t;if(e===6)gr(n,i);else{if(r=n.current.alternate,!(i&30)&&!xE(r)&&(e=ec(n,i),e===2&&(s=Hh(n),s!==0&&(i=s,e=gd(n,s))),e===1))throw t=Ka,fs(n,0),gr(n,i),gn(n,yt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Jr(n,fn,Wi);break;case 3:if(gr(n,i),(i&130023424)===i&&(e=Up+500-yt(),10<e)){if(Ou(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){ln(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Kh(Jr.bind(null,n,fn,Wi),e);break}Jr(n,fn,Wi);break;case 4:if(gr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-vi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*vE(i/1960))-i,10<i){n.timeoutHandle=Kh(Jr.bind(null,n,fn,Wi),i);break}Jr(n,fn,Wi);break;case 5:Jr(n,fn,Wi);break;default:throw Error(se(329))}}}return gn(n,yt()),n.callbackNode===t?jx.bind(null,n):null}function gd(n,e){var t=Ca;return n.current.memoizedState.isDehydrated&&(fs(n,e).flags|=256),n=ec(n,e),n!==2&&(e=fn,fn=t,e!==null&&_d(e)),n}function _d(n){fn===null?fn=n:fn.push.apply(fn,n)}function xE(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!Si(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gr(n,e){for(e&=~Ip,e&=~Tc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-vi(e),i=1<<t;n[t]=-1,e&=~i}}function bg(n){if($e&6)throw Error(se(327));Mo();var e=Ou(n,0);if(!(e&1))return gn(n,yt()),null;var t=ec(n,e);if(n.tag!==0&&t===2){var i=Hh(n);i!==0&&(e=i,t=gd(n,i))}if(t===1)throw t=Ka,fs(n,0),gr(n,e),gn(n,yt()),t;if(t===6)throw Error(se(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Jr(n,fn,Wi),gn(n,yt()),null}function Np(n,e){var t=$e;$e|=1;try{return n(e)}finally{$e=t,$e===0&&(No=yt()+500,yc&&Hr())}}function Ts(n){vr!==null&&vr.tag===0&&!($e&6)&&Mo();var e=$e;$e|=1;var t=ei.transition,i=Ye;try{if(ei.transition=null,Ye=1,n)return n()}finally{Ye=i,ei.transition=t,$e=e,!($e&6)&&Hr()}}function Op(){Pn=fo.current,ot(fo)}function fs(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,q1(t)),wt!==null)for(t=wt.return;t!==null;){var i=t;switch(gp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Vu();break;case 3:Io(),ot(pn),ot(Jt),wp();break;case 5:Tp(i);break;case 4:Io();break;case 13:ot(ct);break;case 19:ot(ct);break;case 10:yp(i.type._context);break;case 22:case 23:Op()}t=t.return}if(Ot=n,wt=n=Pr(n.current,null),Ht=Pn=e,Pt=0,Ka=null,Ip=Tc=Es=0,fn=Ca=null,ss!==null){for(e=0;e<ss.length;e++)if(t=ss[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}ss=null}return n}function Yx(n,e){do{var t=wt;try{if(xp(),yu.current=Ku,qu){for(var i=dt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}qu=!1}if(Ms=0,Ut=Rt=dt=null,wa=!1,ja=0,Dp.current=null,t===null||t.return===null){Pt=1,Ka=e,wt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=_g(o);if(p!==null){p.flags&=-257,vg(p,o,a,s,e),p.mode&1&&gg(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var m=new Set;m.add(l),e.updateQueue=m}else _.add(l);break e}else{if(!(e&1)){gg(s,u,e),Fp();break e}l=Error(se(426))}}else if(lt&&a.mode&1){var g=_g(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),vg(g,o,a,s,e),_p(Uo(l,a));break e}}s=l=Uo(l,a),Pt!==4&&(Pt=2),Ca===null?Ca=[s]:Ca.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=Lx(s,l,e);ug(s,h);break e;case 1:a=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Cr===null||!Cr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Dx(s,a,e);ug(s,M);break e}}s=s.return}while(s!==null)}Zx(t)}catch(S){e=S,wt===t&&t!==null&&(wt=t=t.return);continue}break}while(1)}function qx(){var n=Zu.current;return Zu.current=Ku,n===null?Ku:n}function Fp(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(Es&268435455)&&!(Tc&268435455)||gr(Ot,Ht)}function ec(n,e){var t=$e;$e|=2;var i=qx();(Ot!==n||Ht!==e)&&(Wi=null,fs(n,e));do try{yE();break}catch(r){Yx(n,r)}while(1);if(xp(),$e=t,Zu.current=i,wt!==null)throw Error(se(261));return Ot=null,Ht=0,Pt}function yE(){for(;wt!==null;)Kx(wt)}function SE(){for(;wt!==null&&!$M();)Kx(wt)}function Kx(n){var e=Jx(n.alternate,n,Pn);n.memoizedProps=n.pendingProps,e===null?Zx(n):wt=e,Dp.current=null}function Zx(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=pE(t,e),t!==null){t.flags&=32767,wt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pt=6,wt=null;return}}else if(t=dE(t,e,Pn),t!==null){wt=t;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=n}while(e!==null);Pt===0&&(Pt=5)}function Jr(n,e,t){var i=Ye,r=ei.transition;try{ei.transition=null,Ye=1,ME(n,e,t,i)}finally{ei.transition=r,Ye=i}return null}function ME(n,e,t,i){do Mo();while(vr!==null);if($e&6)throw Error(se(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(se(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(n1(n,s),n===Ot&&(wt=Ot=null,Ht=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ol||(Ol=!0,ey(Nu,function(){return Mo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ei.transition,ei.transition=null;var o=Ye;Ye=1;var a=$e;$e|=4,Dp.current=null,gE(n,t),Xx(t,n),H1(Yh),Fu=!!jh,Yh=jh=null,n.current=t,_E(t),jM(),$e=a,Ye=o,ei.transition=s}else n.current=t;if(Ol&&(Ol=!1,vr=n,Ju=r),s=n.pendingLanes,s===0&&(Cr=null),KM(t.stateNode),gn(n,yt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Qu)throw Qu=!1,n=pd,pd=null,n;return Ju&1&&n.tag!==0&&Mo(),s=n.pendingLanes,s&1?n===md?Ra++:(Ra=0,md=n):Ra=0,Hr(),null}function Mo(){if(vr!==null){var n=bv(Ju),e=ei.transition,t=Ye;try{if(ei.transition=null,Ye=16>n?16:n,vr===null)var i=!1;else{if(n=vr,vr=null,Ju=0,$e&6)throw Error(se(331));var r=$e;for($e|=4,ge=n.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ge=u;ge!==null;){var c=ge;switch(c.tag){case 0:case 11:case 15:Aa(8,c,s)}var f=c.child;if(f!==null)f.return=c,ge=f;else for(;ge!==null;){c=ge;var d=c.sibling,p=c.return;if(Hx(c),c===u){ge=null;break}if(d!==null){d.return=p,ge=d;break}ge=p}}}var _=s.alternate;if(_!==null){var m=_.child;if(m!==null){_.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Aa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ge=h;break e}ge=s.return}}var v=n.current;for(ge=v;ge!==null;){o=ge;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ge=x;else e:for(o=v;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ec(9,a)}}catch(S){mt(a,a.return,S)}if(a===o){ge=null;break e}var M=a.sibling;if(M!==null){M.return=a.return,ge=M;break e}ge=a.return}}if($e=r,Hr(),Di&&typeof Di.onPostCommitFiberRoot=="function")try{Di.onPostCommitFiberRoot(mc,n)}catch{}i=!0}return i}finally{Ye=t,ei.transition=e}}return!1}function Lg(n,e,t){e=Uo(t,e),e=Lx(n,e,1),n=Ar(n,e,1),e=ln(),n!==null&&(ul(n,1,e),gn(n,e))}function mt(n,e,t){if(n.tag===3)Lg(n,n,t);else for(;e!==null;){if(e.tag===3){Lg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){n=Uo(t,n),n=Dx(e,n,1),e=Ar(e,n,1),n=ln(),e!==null&&(ul(e,1,n),gn(e,n));break}}e=e.return}}function EE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=ln(),n.pingedLanes|=n.suspendedLanes&t,Ot===n&&(Ht&t)===t&&(Pt===4||Pt===3&&(Ht&130023424)===Ht&&500>yt()-Up?fs(n,0):Ip|=t),gn(n,e)}function Qx(n,e){e===0&&(n.mode&1?(e=Al,Al<<=1,!(Al&130023424)&&(Al=4194304)):e=1);var t=ln();n=tr(n,e),n!==null&&(ul(n,e,t),gn(n,t))}function TE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Qx(n,t)}function wE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Qx(n,t)}var Jx;Jx=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return hn=!1,hE(n,e,t);hn=!!(n.flags&131072)}else hn=!1,lt&&e.flags&1048576&&nx(e,Wu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Mu(n,e),n=e.pendingProps;var r=bo(e,Jt.current);So(e,t),r=Cp(null,e,i,n,r,t);var s=Rp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,Hu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mp(e),r.updater=Sc,e.stateNode=r,r._reactInternals=e,id(e,i,n,t),e=od(null,e,i,!0,s,t)):(e.tag=0,lt&&s&&mp(e),rn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(Mu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=CE(i),n=fi(i,n),r){case 0:e=sd(null,e,i,n,t);break e;case 1:e=Sg(null,e,i,n,t);break e;case 11:e=xg(null,e,i,n,t);break e;case 14:e=yg(null,e,i,fi(i.type,n),t);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),sd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Sg(n,e,i,r,t);case 3:e:{if(Ox(e),n===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ox(n,e),ju(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Uo(Error(se(423)),e),e=Mg(n,e,i,t,r);break e}else if(i!==r){r=Uo(Error(se(424)),e),e=Mg(n,e,i,t,r);break e}else for(In=wr(e.stateNode.containerInfo.firstChild),Nn=e,lt=!0,di=null,t=cx(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Lo(),i===r){e=nr(n,e,t);break e}rn(n,e,i,t)}e=e.child}return e;case 5:return fx(e),n===null&&ed(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,qh(i,r)?o=null:s!==null&&qh(i,s)&&(e.flags|=32),Nx(n,e),rn(n,e,o,t),e.child;case 6:return n===null&&ed(e),null;case 13:return Fx(n,e,t);case 4:return Ep(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Do(e,null,i,t):rn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),xg(n,e,i,r,t);case 7:return rn(n,e,e.pendingProps,t),e.child;case 8:return rn(n,e,e.pendingProps.children,t),e.child;case 12:return rn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Xu,i._currentValue),i._currentValue=o,s!==null)if(Si(s.value,o)){if(s.children===r.children&&!pn.current){e=nr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ki(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),td(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),td(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,So(e,t),r=ti(r),i=i(r),e.flags|=1,rn(n,e,i,t),e.child;case 14:return i=e.type,r=fi(i,e.pendingProps),r=fi(i.type,r),yg(n,e,i,r,t);case 15:return Ix(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:fi(i,r),Mu(n,e),e.tag=1,mn(i)?(n=!0,Hu(e)):n=!1,So(e,t),lx(e,i,r),id(e,i,r,t),od(null,e,i,!0,n,t);case 19:return kx(n,e,t);case 22:return Ux(n,e,t)}throw Error(se(156,e.tag))};function ey(n,e){return Av(n,e)}function AE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(n,e,t,i){return new AE(n,e,t,i)}function kp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function CE(n){if(typeof n=="function")return kp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ip)return 11;if(n===rp)return 14}return 2}function Pr(n,e){var t=n.alternate;return t===null?(t=Zn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function wu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")kp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case to:return hs(t.children,r,s,e);case np:o=8,r|=8;break;case Ch:return n=Zn(12,t,e,r|2),n.elementType=Ch,n.lanes=s,n;case Rh:return n=Zn(13,t,e,r),n.elementType=Rh,n.lanes=s,n;case Ph:return n=Zn(19,t,e,r),n.elementType=Ph,n.lanes=s,n;case uv:return wc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case av:o=10;break e;case lv:o=9;break e;case ip:o=11;break e;case rp:o=14;break e;case dr:o=16,i=null;break e}throw Error(se(130,n==null?n:typeof n,""))}return e=Zn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function hs(n,e,t,i){return n=Zn(7,n,i,e),n.lanes=t,n}function wc(n,e,t,i){return n=Zn(22,n,i,e),n.elementType=uv,n.lanes=t,n.stateNode={isHidden:!1},n}function Df(n,e,t){return n=Zn(6,n,null,e),n.lanes=t,n}function If(n,e,t){return e=Zn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function RE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=df(0),this.expirationTimes=df(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=df(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zp(n,e,t,i,r,s,o,a,l){return n=new RE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mp(s),n}function PE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:eo,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function ty(n){if(!n)return Nr;n=n._reactInternals;e:{if(Ds(n)!==n||n.tag!==1)throw Error(se(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(n.tag===1){var t=n.type;if(mn(t))return ex(n,t,e)}return e}function ny(n,e,t,i,r,s,o,a,l){return n=zp(t,i,!0,n,r,s,o,a,l),n.context=ty(null),t=n.current,i=ln(),r=Rr(t),s=Ki(i,r),s.callback=e??null,Ar(t,s,r),n.current.lanes=r,ul(n,r,i),gn(n,i),n}function Ac(n,e,t,i){var r=e.current,s=ln(),o=Rr(r);return t=ty(t),e.context===null?e.context=t:e.pendingContext=t,e=Ki(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ar(r,e,o),n!==null&&(xi(n,r,o,s),xu(n,r,o)),o}function tc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Dg(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Bp(n,e){Dg(n,e),(n=n.alternate)&&Dg(n,e)}function bE(){return null}var iy=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vp(n){this._internalRoot=n}Cc.prototype.render=Vp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(se(409));Ac(n,e,null,null)};Cc.prototype.unmount=Vp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ts(function(){Ac(null,n,null,null)}),e[er]=null}};function Cc(n){this._internalRoot=n}Cc.prototype.unstable_scheduleHydration=function(n){if(n){var e=Iv();n={blockedOn:null,target:n,priority:e};for(var t=0;t<mr.length&&e!==0&&e<mr[t].priority;t++);mr.splice(t,0,n),t===0&&Nv(n)}};function Hp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Rc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Ig(){}function LE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=tc(o);s.call(u)}}var o=ny(e,i,n,0,null,!1,!1,"",Ig);return n._reactRootContainer=o,n[er]=o.current,Ha(n.nodeType===8?n.parentNode:n),Ts(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=tc(l);a.call(u)}}var l=zp(n,0,!1,null,null,!1,!1,"",Ig);return n._reactRootContainer=l,n[er]=l.current,Ha(n.nodeType===8?n.parentNode:n),Ts(function(){Ac(e,l,t,i)}),l}function Pc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=tc(o);a.call(l)}}Ac(e,o,n,r)}else o=LE(t,e,n,r,i);return tc(o)}Lv=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ma(e.pendingLanes);t!==0&&(ap(e,t|1),gn(e,yt()),!($e&6)&&(No=yt()+500,Hr()))}break;case 13:Ts(function(){var i=tr(n,1);if(i!==null){var r=ln();xi(i,n,1,r)}}),Bp(n,1)}};lp=function(n){if(n.tag===13){var e=tr(n,134217728);if(e!==null){var t=ln();xi(e,n,134217728,t)}Bp(n,134217728)}};Dv=function(n){if(n.tag===13){var e=Rr(n),t=tr(n,e);if(t!==null){var i=ln();xi(t,n,e,i)}Bp(n,e)}};Iv=function(){return Ye};Uv=function(n,e){var t=Ye;try{return Ye=n,e()}finally{Ye=t}};zh=function(n,e,t){switch(e){case"input":if(Dh(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=xc(i);if(!r)throw Error(se(90));fv(i),Dh(i,r)}}}break;case"textarea":dv(n,t);break;case"select":e=t.value,e!=null&&_o(n,!!t.multiple,e,!1)}};yv=Np;Sv=Ts;var DE={usingClientEntryPoint:!1,Events:[fl,so,xc,vv,xv,Np]},aa={findFiberByHostInstance:rs,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},IE={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:sr.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Tv(n),n===null?null:n.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||bE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fl.isDisabled&&Fl.supportsFiber)try{mc=Fl.inject(IE),Di=Fl}catch{}}zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=DE;zn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hp(e))throw Error(se(200));return PE(n,e,null,t)};zn.createRoot=function(n,e){if(!Hp(n))throw Error(se(299));var t=!1,i="",r=iy;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zp(n,1,!1,null,null,t,!1,i,r),n[er]=e.current,Ha(n.nodeType===8?n.parentNode:n),new Vp(e)};zn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(se(188)):(n=Object.keys(n).join(","),Error(se(268,n)));return n=Tv(e),n=n===null?null:n.stateNode,n};zn.flushSync=function(n){return Ts(n)};zn.hydrate=function(n,e,t){if(!Rc(e))throw Error(se(200));return Pc(null,n,e,!0,t)};zn.hydrateRoot=function(n,e,t){if(!Hp(n))throw Error(se(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=iy;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=ny(e,null,n,1,t??null,r,!1,s,o),n[er]=e.current,Ha(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Cc(e)};zn.render=function(n,e,t){if(!Rc(e))throw Error(se(200));return Pc(null,n,e,!1,t)};zn.unmountComponentAtNode=function(n){if(!Rc(n))throw Error(se(40));return n._reactRootContainer?(Ts(function(){Pc(null,null,n,!1,function(){n._reactRootContainer=null,n[er]=null})}),!0):!1};zn.unstable_batchedUpdates=Np;zn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Rc(t))throw Error(se(200));if(n==null||n._reactInternals===void 0)throw Error(se(38));return Pc(n,e,t,!1,i)};zn.version="18.2.0-next-9e3b772b8-20220608";function ry(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ry)}catch(n){console.error(n)}}ry(),nv.exports=zn;var UE=nv.exports,Ug=UE;wh.createRoot=Ug.createRoot,wh.hydrateRoot=Ug.hydrateRoot;var sy={exports:{}},qe={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp=Symbol.for("react.element"),Wp=Symbol.for("react.portal"),bc=Symbol.for("react.fragment"),Lc=Symbol.for("react.strict_mode"),Dc=Symbol.for("react.profiler"),Ic=Symbol.for("react.provider"),Uc=Symbol.for("react.context"),NE=Symbol.for("react.server_context"),Nc=Symbol.for("react.forward_ref"),Oc=Symbol.for("react.suspense"),Fc=Symbol.for("react.suspense_list"),kc=Symbol.for("react.memo"),zc=Symbol.for("react.lazy"),OE=Symbol.for("react.offscreen"),oy;oy=Symbol.for("react.module.reference");function ri(n){if(typeof n=="object"&&n!==null){var e=n.$$typeof;switch(e){case Gp:switch(n=n.type,n){case bc:case Dc:case Lc:case Oc:case Fc:return n;default:switch(n=n&&n.$$typeof,n){case NE:case Uc:case Nc:case zc:case kc:case Ic:return n;default:return e}}case Wp:return e}}}qe.ContextConsumer=Uc;qe.ContextProvider=Ic;qe.Element=Gp;qe.ForwardRef=Nc;qe.Fragment=bc;qe.Lazy=zc;qe.Memo=kc;qe.Portal=Wp;qe.Profiler=Dc;qe.StrictMode=Lc;qe.Suspense=Oc;qe.SuspenseList=Fc;qe.isAsyncMode=function(){return!1};qe.isConcurrentMode=function(){return!1};qe.isContextConsumer=function(n){return ri(n)===Uc};qe.isContextProvider=function(n){return ri(n)===Ic};qe.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Gp};qe.isForwardRef=function(n){return ri(n)===Nc};qe.isFragment=function(n){return ri(n)===bc};qe.isLazy=function(n){return ri(n)===zc};qe.isMemo=function(n){return ri(n)===kc};qe.isPortal=function(n){return ri(n)===Wp};qe.isProfiler=function(n){return ri(n)===Dc};qe.isStrictMode=function(n){return ri(n)===Lc};qe.isSuspense=function(n){return ri(n)===Oc};qe.isSuspenseList=function(n){return ri(n)===Fc};qe.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===bc||n===Dc||n===Lc||n===Oc||n===Fc||n===OE||typeof n=="object"&&n!==null&&(n.$$typeof===zc||n.$$typeof===kc||n.$$typeof===Ic||n.$$typeof===Uc||n.$$typeof===Nc||n.$$typeof===oy||n.getModuleId!==void 0)};qe.typeOf=ri;sy.exports=qe;var ay=sy.exports;function FE(n){function e(z,I,O,q,L){for(var b=0,J=0,pe=0,ie=0,le,fe,he=0,we=0,Ae,Ge=Ae=le=0,Ce=0,Ne=0,Be=0,De=0,Ct=O.length,R=Ct-1,T,F="",ne="",oe="",ce="",ye;Ce<Ct;){if(fe=O.charCodeAt(Ce),Ce===R&&J+ie+pe+b!==0&&(J!==0&&(fe=J===47?10:47),ie=pe=b=0,Ct++,R++),J+ie+pe+b===0){if(Ce===R&&(0<Ne&&(F=F.replace(d,"")),0<F.trim().length)){switch(fe){case 32:case 9:case 59:case 13:case 10:break;default:F+=O.charAt(Ce)}fe=59}switch(fe){case 123:for(F=F.trim(),le=F.charCodeAt(0),Ae=1,De=++Ce;Ce<Ct;){switch(fe=O.charCodeAt(Ce)){case 123:Ae++;break;case 125:Ae--;break;case 47:switch(fe=O.charCodeAt(Ce+1)){case 42:case 47:e:{for(Ge=Ce+1;Ge<R;++Ge)switch(O.charCodeAt(Ge)){case 47:if(fe===42&&O.charCodeAt(Ge-1)===42&&Ce+2!==Ge){Ce=Ge+1;break e}break;case 10:if(fe===47){Ce=Ge+1;break e}}Ce=Ge}}break;case 91:fe++;case 40:fe++;case 34:case 39:for(;Ce++<R&&O.charCodeAt(Ce)!==fe;);}if(Ae===0)break;Ce++}switch(Ae=O.substring(De,Ce),le===0&&(le=(F=F.replace(f,"").trim()).charCodeAt(0)),le){case 64:switch(0<Ne&&(F=F.replace(d,"")),fe=F.charCodeAt(1),fe){case 100:case 109:case 115:case 45:Ne=I;break;default:Ne=Q}if(Ae=e(I,Ne,Ae,fe,L+1),De=Ae.length,0<D&&(Ne=t(Q,F,Be),ye=a(3,Ae,Ne,I,U,W,De,fe,L,q),F=Ne.join(""),ye!==void 0&&(De=(Ae=ye.trim()).length)===0&&(fe=0,Ae="")),0<De)switch(fe){case 115:F=F.replace(E,o);case 100:case 109:case 45:Ae=F+"{"+Ae+"}";break;case 107:F=F.replace(v,"$1 $2"),Ae=F+"{"+Ae+"}",Ae=H===1||H===2&&s("@"+Ae,3)?"@-webkit-"+Ae+"@"+Ae:"@"+Ae;break;default:Ae=F+Ae,q===112&&(Ae=(ne+=Ae,""))}else Ae="";break;default:Ae=e(I,t(I,F,Be),Ae,q,L+1)}oe+=Ae,Ae=Be=Ne=Ge=le=0,F="",fe=O.charCodeAt(++Ce);break;case 125:case 59:if(F=(0<Ne?F.replace(d,""):F).trim(),1<(De=F.length))switch(Ge===0&&(le=F.charCodeAt(0),le===45||96<le&&123>le)&&(De=(F=F.replace(" ",":")).length),0<D&&(ye=a(1,F,I,z,U,W,ne.length,q,L,q))!==void 0&&(De=(F=ye.trim()).length)===0&&(F="\0\0"),le=F.charCodeAt(0),fe=F.charCodeAt(1),le){case 0:break;case 64:if(fe===105||fe===99){ce+=F+O.charAt(Ce);break}default:F.charCodeAt(De-1)!==58&&(ne+=r(F,le,fe,F.charCodeAt(2)))}Be=Ne=Ge=le=0,F="",fe=O.charCodeAt(++Ce)}}switch(fe){case 13:case 10:J===47?J=0:1+le===0&&q!==107&&0<F.length&&(Ne=1,F+="\0"),0<D*G&&a(0,F,I,z,U,W,ne.length,q,L,q),W=1,U++;break;case 59:case 125:if(J+ie+pe+b===0){W++;break}default:switch(W++,T=O.charAt(Ce),fe){case 9:case 32:if(ie+b+J===0)switch(he){case 44:case 58:case 9:case 32:T="";break;default:fe!==32&&(T=" ")}break;case 0:T="\\0";break;case 12:T="\\f";break;case 11:T="\\v";break;case 38:ie+J+b===0&&(Ne=Be=1,T="\f"+T);break;case 108:if(ie+J+b+V===0&&0<Ge)switch(Ce-Ge){case 2:he===112&&O.charCodeAt(Ce-3)===58&&(V=he);case 8:we===111&&(V=we)}break;case 58:ie+J+b===0&&(Ge=Ce);break;case 44:J+pe+ie+b===0&&(Ne=1,T+="\r");break;case 34:case 39:J===0&&(ie=ie===fe?0:ie===0?fe:ie);break;case 91:ie+J+pe===0&&b++;break;case 93:ie+J+pe===0&&b--;break;case 41:ie+J+b===0&&pe--;break;case 40:if(ie+J+b===0){if(le===0)switch(2*he+3*we){case 533:break;default:le=1}pe++}break;case 64:J+pe+ie+b+Ge+Ae===0&&(Ae=1);break;case 42:case 47:if(!(0<ie+b+pe))switch(J){case 0:switch(2*fe+3*O.charCodeAt(Ce+1)){case 235:J=47;break;case 220:De=Ce,J=42}break;case 42:fe===47&&he===42&&De+2!==Ce&&(O.charCodeAt(De+2)===33&&(ne+=O.substring(De,Ce+1)),T="",J=0)}}J===0&&(F+=T)}we=he,he=fe,Ce++}if(De=ne.length,0<De){if(Ne=I,0<D&&(ye=a(2,ne,Ne,z,U,W,De,q,L,q),ye!==void 0&&(ne=ye).length===0))return ce+ne+oe;if(ne=Ne.join(",")+"{"+ne+"}",H*V!==0){switch(H!==2||s(ne,2)||(V=0),V){case 111:ne=ne.replace(M,":-moz-$1")+ne;break;case 112:ne=ne.replace(x,"::-webkit-input-$1")+ne.replace(x,"::-moz-$1")+ne.replace(x,":-ms-input-$1")+ne}V=0}}return ce+ne+oe}function t(z,I,O){var q=I.trim().split(g);I=q;var L=q.length,b=z.length;switch(b){case 0:case 1:var J=0;for(z=b===0?"":z[0]+" ";J<L;++J)I[J]=i(z,I[J],O).trim();break;default:var pe=J=0;for(I=[];J<L;++J)for(var ie=0;ie<b;++ie)I[pe++]=i(z[ie]+" ",q[J],O).trim()}return I}function i(z,I,O){var q=I.charCodeAt(0);switch(33>q&&(q=(I=I.trim()).charCodeAt(0)),q){case 38:return I.replace(h,"$1"+z.trim());case 58:return z.trim()+I.replace(h,"$1"+z.trim());default:if(0<1*O&&0<I.indexOf("\f"))return I.replace(h,(z.charCodeAt(0)===58?"":"$1")+z.trim())}return z+I}function r(z,I,O,q){var L=z+";",b=2*I+3*O+4*q;if(b===944){z=L.indexOf(":",9)+1;var J=L.substring(z,L.length-1).trim();return J=L.substring(0,z).trim()+J+";",H===1||H===2&&s(J,1)?"-webkit-"+J+J:J}if(H===0||H===2&&!s(L,1))return L;switch(b){case 1015:return L.charCodeAt(10)===97?"-webkit-"+L+L:L;case 951:return L.charCodeAt(3)===116?"-webkit-"+L+L:L;case 963:return L.charCodeAt(5)===110?"-webkit-"+L+L:L;case 1009:if(L.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+L+L;case 978:return"-webkit-"+L+"-moz-"+L+L;case 1019:case 983:return"-webkit-"+L+"-moz-"+L+"-ms-"+L+L;case 883:if(L.charCodeAt(8)===45)return"-webkit-"+L+L;if(0<L.indexOf("image-set(",11))return L.replace(Y,"$1-webkit-$2")+L;break;case 932:if(L.charCodeAt(4)===45)switch(L.charCodeAt(5)){case 103:return"-webkit-box-"+L.replace("-grow","")+"-webkit-"+L+"-ms-"+L.replace("grow","positive")+L;case 115:return"-webkit-"+L+"-ms-"+L.replace("shrink","negative")+L;case 98:return"-webkit-"+L+"-ms-"+L.replace("basis","preferred-size")+L}return"-webkit-"+L+"-ms-"+L+L;case 964:return"-webkit-"+L+"-ms-flex-"+L+L;case 1023:if(L.charCodeAt(8)!==99)break;return J=L.substring(L.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+J+"-webkit-"+L+"-ms-flex-pack"+J+L;case 1005:return _.test(L)?L.replace(p,":-webkit-")+L.replace(p,":-moz-")+L:L;case 1e3:switch(J=L.substring(13).trim(),I=J.indexOf("-")+1,J.charCodeAt(0)+J.charCodeAt(I)){case 226:J=L.replace(S,"tb");break;case 232:J=L.replace(S,"tb-rl");break;case 220:J=L.replace(S,"lr");break;default:return L}return"-webkit-"+L+"-ms-"+J+L;case 1017:if(L.indexOf("sticky",9)===-1)break;case 975:switch(I=(L=z).length-10,J=(L.charCodeAt(I)===33?L.substring(0,I):L).substring(z.indexOf(":",7)+1).trim(),b=J.charCodeAt(0)+(J.charCodeAt(7)|0)){case 203:if(111>J.charCodeAt(8))break;case 115:L=L.replace(J,"-webkit-"+J)+";"+L;break;case 207:case 102:L=L.replace(J,"-webkit-"+(102<b?"inline-":"")+"box")+";"+L.replace(J,"-webkit-"+J)+";"+L.replace(J,"-ms-"+J+"box")+";"+L}return L+";";case 938:if(L.charCodeAt(5)===45)switch(L.charCodeAt(6)){case 105:return J=L.replace("-items",""),"-webkit-"+L+"-webkit-box-"+J+"-ms-flex-"+J+L;case 115:return"-webkit-"+L+"-ms-flex-item-"+L.replace(P,"")+L;default:return"-webkit-"+L+"-ms-flex-line-pack"+L.replace("align-content","").replace(P,"")+L}break;case 973:case 989:if(L.charCodeAt(3)!==45||L.charCodeAt(4)===122)break;case 931:case 953:if(A.test(z)===!0)return(J=z.substring(z.indexOf(":")+1)).charCodeAt(0)===115?r(z.replace("stretch","fill-available"),I,O,q).replace(":fill-available",":stretch"):L.replace(J,"-webkit-"+J)+L.replace(J,"-moz-"+J.replace("fill-",""))+L;break;case 962:if(L="-webkit-"+L+(L.charCodeAt(5)===102?"-ms-"+L:"")+L,O+q===211&&L.charCodeAt(13)===105&&0<L.indexOf("transform",10))return L.substring(0,L.indexOf(";",27)+1).replace(m,"$1-webkit-$2")+L}return L}function s(z,I){var O=z.indexOf(I===1?":":"{"),q=z.substring(0,I!==3?O:10);return O=z.substring(O+1,z.length-1),j(I!==2?q:q.replace(y,"$1"),O,I)}function o(z,I){var O=r(I,I.charCodeAt(0),I.charCodeAt(1),I.charCodeAt(2));return O!==I+";"?O.replace(w," or ($1)").substring(4):"("+I+")"}function a(z,I,O,q,L,b,J,pe,ie,le){for(var fe=0,he=I,we;fe<D;++fe)switch(we=$[fe].call(c,z,he,O,q,L,b,J,pe,ie,le)){case void 0:case!1:case!0:case null:break;default:he=we}if(he!==I)return he}function l(z){switch(z){case void 0:case null:D=$.length=0;break;default:if(typeof z=="function")$[D++]=z;else if(typeof z=="object")for(var I=0,O=z.length;I<O;++I)l(z[I]);else G=!!z|0}return l}function u(z){return z=z.prefix,z!==void 0&&(j=null,z?typeof z!="function"?H=1:(H=2,j=z):H=0),u}function c(z,I){var O=z;if(33>O.charCodeAt(0)&&(O=O.trim()),ae=O,O=[ae],0<D){var q=a(-1,I,O,O,U,W,0,0,0,0);q!==void 0&&typeof q=="string"&&(I=q)}var L=e(Q,O,I,0,0);return 0<D&&(q=a(-2,L,O,O,U,W,L.length,0,0,0),q!==void 0&&(L=q)),ae="",V=0,W=U=1,L}var f=/^\0+/g,d=/[\0\r\f]/g,p=/: */g,_=/zoo|gra/,m=/([,: ])(transform)/g,g=/,\r+?/g,h=/([\t\r\n ])*\f?&/g,v=/@(k\w+)\s*(\S*)\s*/,x=/::(place)/g,M=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,E=/\(\s*(.*)\s*\)/g,w=/([\s\S]*?);/g,P=/-self|flex-/g,y=/[^]*?(:[rp][el]a[\w-]+)[^]*/,A=/stretch|:\s*\w+\-(?:conte|avail)/,Y=/([^-])(image-set\()/,W=1,U=1,V=0,H=1,Q=[],$=[],D=0,j=null,G=0,ae="";return c.use=l,c.set=u,n!==void 0&&u(n),c}var kE={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function zE(n){var e=Object.create(null);return function(t){return e[t]===void 0&&(e[t]=n(t)),e[t]}}var BE=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Ng=zE(function(n){return BE.test(n)||n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)<91}),ly={exports:{}},Ke={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kt=typeof Symbol=="function"&&Symbol.for,Xp=kt?Symbol.for("react.element"):60103,$p=kt?Symbol.for("react.portal"):60106,Bc=kt?Symbol.for("react.fragment"):60107,Vc=kt?Symbol.for("react.strict_mode"):60108,Hc=kt?Symbol.for("react.profiler"):60114,Gc=kt?Symbol.for("react.provider"):60109,Wc=kt?Symbol.for("react.context"):60110,jp=kt?Symbol.for("react.async_mode"):60111,Xc=kt?Symbol.for("react.concurrent_mode"):60111,$c=kt?Symbol.for("react.forward_ref"):60112,jc=kt?Symbol.for("react.suspense"):60113,VE=kt?Symbol.for("react.suspense_list"):60120,Yc=kt?Symbol.for("react.memo"):60115,qc=kt?Symbol.for("react.lazy"):60116,HE=kt?Symbol.for("react.block"):60121,GE=kt?Symbol.for("react.fundamental"):60117,WE=kt?Symbol.for("react.responder"):60118,XE=kt?Symbol.for("react.scope"):60119;function Vn(n){if(typeof n=="object"&&n!==null){var e=n.$$typeof;switch(e){case Xp:switch(n=n.type,n){case jp:case Xc:case Bc:case Hc:case Vc:case jc:return n;default:switch(n=n&&n.$$typeof,n){case Wc:case $c:case qc:case Yc:case Gc:return n;default:return e}}case $p:return e}}}function uy(n){return Vn(n)===Xc}Ke.AsyncMode=jp;Ke.ConcurrentMode=Xc;Ke.ContextConsumer=Wc;Ke.ContextProvider=Gc;Ke.Element=Xp;Ke.ForwardRef=$c;Ke.Fragment=Bc;Ke.Lazy=qc;Ke.Memo=Yc;Ke.Portal=$p;Ke.Profiler=Hc;Ke.StrictMode=Vc;Ke.Suspense=jc;Ke.isAsyncMode=function(n){return uy(n)||Vn(n)===jp};Ke.isConcurrentMode=uy;Ke.isContextConsumer=function(n){return Vn(n)===Wc};Ke.isContextProvider=function(n){return Vn(n)===Gc};Ke.isElement=function(n){return typeof n=="object"&&n!==null&&n.$$typeof===Xp};Ke.isForwardRef=function(n){return Vn(n)===$c};Ke.isFragment=function(n){return Vn(n)===Bc};Ke.isLazy=function(n){return Vn(n)===qc};Ke.isMemo=function(n){return Vn(n)===Yc};Ke.isPortal=function(n){return Vn(n)===$p};Ke.isProfiler=function(n){return Vn(n)===Hc};Ke.isStrictMode=function(n){return Vn(n)===Vc};Ke.isSuspense=function(n){return Vn(n)===jc};Ke.isValidElementType=function(n){return typeof n=="string"||typeof n=="function"||n===Bc||n===Xc||n===Hc||n===Vc||n===jc||n===VE||typeof n=="object"&&n!==null&&(n.$$typeof===qc||n.$$typeof===Yc||n.$$typeof===Gc||n.$$typeof===Wc||n.$$typeof===$c||n.$$typeof===GE||n.$$typeof===WE||n.$$typeof===XE||n.$$typeof===HE)};Ke.typeOf=Vn;ly.exports=Ke;var $E=ly.exports,Yp=$E,jE={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},YE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},qE={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},cy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},qp={};qp[Yp.ForwardRef]=qE;qp[Yp.Memo]=cy;function Og(n){return Yp.isMemo(n)?cy:qp[n.$$typeof]||jE}var KE=Object.defineProperty,ZE=Object.getOwnPropertyNames,Fg=Object.getOwnPropertySymbols,QE=Object.getOwnPropertyDescriptor,JE=Object.getPrototypeOf,kg=Object.prototype;function fy(n,e,t){if(typeof e!="string"){if(kg){var i=JE(e);i&&i!==kg&&fy(n,i,t)}var r=ZE(e);Fg&&(r=r.concat(Fg(e)));for(var s=Og(n),o=Og(e),a=0;a<r.length;++a){var l=r[a];if(!YE[l]&&!(t&&t[l])&&!(o&&o[l])&&!(s&&s[l])){var u=QE(e,l);try{KE(n,l,u)}catch{}}}}return n}var eT=fy;const tT=X0(eT);function bi(){return(bi=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n}).apply(this,arguments)}var zg=function(n,e){for(var t=[n[0]],i=0,r=e.length;i<r;i+=1)t.push(e[i],n[i+1]);return t},vd=function(n){return n!==null&&typeof n=="object"&&(n.toString?n.toString():Object.prototype.toString.call(n))==="[object Object]"&&!ay.typeOf(n)},nc=Object.freeze([]),br=Object.freeze({});function Za(n){return typeof n=="function"}function Bg(n){return n.displayName||n.name||"Component"}function Kp(n){return n&&typeof n.styledComponentId=="string"}var Oo=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",Zp=typeof window<"u"&&"HTMLElement"in window,nT=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY)),iT={};function dl(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];throw new Error("An error occurred. See https://git.io/JUIaE#"+n+" for more information."+(t.length>0?" Args: "+t.join(", "):""))}var rT=function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}var e=n.prototype;return e.indexOfGroup=function(t){for(var i=0,r=0;r<t;r++)i+=this.groupSizes[r];return i},e.insertRules=function(t,i){if(t>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,o=s;t>=o;)(o<<=1)<0&&dl(16,""+t);this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=s;a<o;a++)this.groupSizes[a]=0}for(var l=this.indexOfGroup(t+1),u=0,c=i.length;u<c;u++)this.tag.insertRule(l,i[u])&&(this.groupSizes[t]++,l++)},e.clearGroup=function(t){if(t<this.length){var i=this.groupSizes[t],r=this.indexOfGroup(t),s=r+i;this.groupSizes[t]=0;for(var o=r;o<s;o++)this.tag.deleteRule(r)}},e.getGroup=function(t){var i="";if(t>=this.length||this.groupSizes[t]===0)return i;for(var r=this.groupSizes[t],s=this.indexOfGroup(t),o=s+r,a=s;a<o;a++)i+=this.tag.getRule(a)+`/*!sc*/
`;return i},n}(),Au=new Map,ic=new Map,Pa=1,kl=function(n){if(Au.has(n))return Au.get(n);for(;ic.has(Pa);)Pa++;var e=Pa++;return Au.set(n,e),ic.set(e,n),e},sT=function(n){return ic.get(n)},oT=function(n,e){e>=Pa&&(Pa=e+1),Au.set(n,e),ic.set(e,n)},aT="style["+Oo+'][data-styled-version="5.3.11"]',lT=new RegExp("^"+Oo+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),uT=function(n,e,t){for(var i,r=t.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&n.registerName(e,i)},cT=function(n,e){for(var t=(e.textContent||"").split(`/*!sc*/
`),i=[],r=0,s=t.length;r<s;r++){var o=t[r].trim();if(o){var a=o.match(lT);if(a){var l=0|parseInt(a[1],10),u=a[2];l!==0&&(oT(u,l),uT(n,u,a[3]),n.getTag().insertRules(l,i)),i.length=0}else i.push(o)}}},fT=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},hy=function(n){var e=document.head,t=n||e,i=document.createElement("style"),r=function(a){for(var l=a.childNodes,u=l.length;u>=0;u--){var c=l[u];if(c&&c.nodeType===1&&c.hasAttribute(Oo))return c}}(t),s=r!==void 0?r.nextSibling:null;i.setAttribute(Oo,"active"),i.setAttribute("data-styled-version","5.3.11");var o=fT();return o&&i.setAttribute("nonce",o),t.insertBefore(i,s),i},hT=function(){function n(t){var i=this.element=hy(t);i.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,o=0,a=s.length;o<a;o++){var l=s[o];if(l.ownerNode===r)return l}dl(17)}(i),this.length=0}var e=n.prototype;return e.insertRule=function(t,i){try{return this.sheet.insertRule(i,t),this.length++,!0}catch{return!1}},e.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.getRule=function(t){var i=this.sheet.cssRules[t];return i!==void 0&&typeof i.cssText=="string"?i.cssText:""},n}(),dT=function(){function n(t){var i=this.element=hy(t);this.nodes=i.childNodes,this.length=0}var e=n.prototype;return e.insertRule=function(t,i){if(t<=this.length&&t>=0){var r=document.createTextNode(i),s=this.nodes[t];return this.element.insertBefore(r,s||null),this.length++,!0}return!1},e.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n}(),pT=function(){function n(t){this.rules=[],this.length=0}var e=n.prototype;return e.insertRule=function(t,i){return t<=this.length&&(this.rules.splice(t,0,i),this.length++,!0)},e.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.getRule=function(t){return t<this.length?this.rules[t]:""},n}(),Vg=Zp,mT={isServer:!Zp,useCSSOMInjection:!nT},rc=function(){function n(t,i,r){t===void 0&&(t=br),i===void 0&&(i={}),this.options=bi({},mT,{},t),this.gs=i,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Zp&&Vg&&(Vg=!1,function(s){for(var o=document.querySelectorAll(aT),a=0,l=o.length;a<l;a++){var u=o[a];u&&u.getAttribute(Oo)!=="active"&&(cT(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}n.registerId=function(t){return kl(t)};var e=n.prototype;return e.reconstructWithOptions=function(t,i){return i===void 0&&(i=!0),new n(bi({},this.options,{},t),this.gs,i&&this.names||void 0)},e.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.getTag=function(){return this.tag||(this.tag=(r=(i=this.options).isServer,s=i.useCSSOMInjection,o=i.target,t=r?new pT(o):s?new hT(o):new dT(o),new rT(t)));var t,i,r,s,o},e.hasNameForId=function(t,i){return this.names.has(t)&&this.names.get(t).has(i)},e.registerName=function(t,i){if(kl(t),this.names.has(t))this.names.get(t).add(i);else{var r=new Set;r.add(i),this.names.set(t,r)}},e.insertRules=function(t,i,r){this.registerName(t,i),this.getTag().insertRules(kl(t),r)},e.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.clearRules=function(t){this.getTag().clearGroup(kl(t)),this.clearNames(t)},e.clearTag=function(){this.tag=void 0},e.toString=function(){return function(t){for(var i=t.getTag(),r=i.length,s="",o=0;o<r;o++){var a=sT(o);if(a!==void 0){var l=t.names.get(a),u=i.getGroup(o);if(l&&u&&l.size){var c=Oo+".g"+o+'[id="'+a+'"]',f="";l!==void 0&&l.forEach(function(d){d.length>0&&(f+=d+",")}),s+=""+u+c+'{content:"'+f+`"}/*!sc*/
`}}}return s}(this)},n}(),gT=/(a)(d)/gi,Hg=function(n){return String.fromCharCode(n+(n>25?39:97))};function xd(n){var e,t="";for(e=Math.abs(n);e>52;e=e/52|0)t=Hg(e%52)+t;return(Hg(e%52)+t).replace(gT,"$1-$2")}var ho=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},dy=function(n){return ho(5381,n)};function py(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(Za(t)&&!Kp(t))return!1}return!0}var _T=dy("5.3.11"),vT=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&py(e),this.componentId=t,this.baseHash=ho(_T,t),this.baseStyle=i,rc.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var r=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(e,t,i)),this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))s.push(this.staticRulesId);else{var o=ws(this.rules,e,t,i).join(""),a=xd(ho(this.baseHash,o)>>>0);if(!t.hasNameForId(r,a)){var l=i(o,"."+a,void 0,r);t.insertRules(r,a,l)}s.push(a),this.staticRulesId=a}else{for(var u=this.rules.length,c=ho(this.baseHash,i.hash),f="",d=0;d<u;d++){var p=this.rules[d];if(typeof p=="string")f+=p;else if(p){var _=ws(p,e,t,i),m=Array.isArray(_)?_.join(""):_;c=ho(c,m+d),f+=m}}if(f){var g=xd(c>>>0);if(!t.hasNameForId(r,g)){var h=i(f,"."+g,void 0,r);t.insertRules(r,g,h)}s.push(g)}}return s.join(" ")},n}(),xT=/^\s*\/\/.*$/gm,yT=[":","[",".","#"];function ST(n){var e,t,i,r,s=n===void 0?br:n,o=s.options,a=o===void 0?br:o,l=s.plugins,u=l===void 0?nc:l,c=new FE(a),f=[],d=function(m){function g(h){if(h)try{m(h+"}")}catch{}}return function(h,v,x,M,S,E,w,P,y,A){switch(h){case 1:if(y===0&&v.charCodeAt(0)===64)return m(v+";"),"";break;case 2:if(P===0)return v+"/*|*/";break;case 3:switch(P){case 102:case 112:return m(x[0]+v),"";default:return v+(A===0?"/*|*/":"")}case-2:v.split("/*|*/}").forEach(g)}}}(function(m){f.push(m)}),p=function(m,g,h){return g===0&&yT.indexOf(h[t.length])!==-1||h.match(r)?m:"."+e};function _(m,g,h,v){v===void 0&&(v="&");var x=m.replace(xT,""),M=g&&h?h+" "+g+" { "+x+" }":x;return e=v,t=g,i=new RegExp("\\"+t+"\\b","g"),r=new RegExp("(\\"+t+"\\b){2,}"),c(h||!g?"":g,M)}return c.use([].concat(u,[function(m,g,h){m===2&&h.length&&h[0].lastIndexOf(t)>0&&(h[0]=h[0].replace(i,p))},d,function(m){if(m===-2){var g=f;return f=[],g}}])),_.hash=u.length?u.reduce(function(m,g){return g.name||dl(15),ho(m,g.name)},5381).toString():"",_}var my=Yo.createContext();my.Consumer;var gy=Yo.createContext(),MT=(gy.Consumer,new rc),yd=ST();function _y(){return Tt.useContext(my)||MT}function vy(){return Tt.useContext(gy)||yd}var ET=function(){function n(e,t){var i=this;this.inject=function(r,s){s===void 0&&(s=yd);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.toString=function(){return dl(12,String(i.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return n.prototype.getName=function(e){return e===void 0&&(e=yd),this.name+e.hash},n}(),TT=/([A-Z])/,wT=/([A-Z])/g,AT=/^ms-/,CT=function(n){return"-"+n.toLowerCase()};function Gg(n){return TT.test(n)?n.replace(wT,CT).replace(AT,"-ms-"):n}var Wg=function(n){return n==null||n===!1||n===""};function ws(n,e,t,i){if(Array.isArray(n)){for(var r,s=[],o=0,a=n.length;o<a;o+=1)(r=ws(n[o],e,t,i))!==""&&(Array.isArray(r)?s.push.apply(s,r):s.push(r));return s}if(Wg(n))return"";if(Kp(n))return"."+n.styledComponentId;if(Za(n)){if(typeof(u=n)!="function"||u.prototype&&u.prototype.isReactComponent||!e)return n;var l=n(e);return ws(l,e,t,i)}var u;return n instanceof ET?t?(n.inject(t,i),n.getName(i)):n:vd(n)?function c(f,d){var p,_,m=[];for(var g in f)f.hasOwnProperty(g)&&!Wg(f[g])&&(Array.isArray(f[g])&&f[g].isCss||Za(f[g])?m.push(Gg(g)+":",f[g],";"):vd(f[g])?m.push.apply(m,c(f[g],g)):m.push(Gg(g)+": "+(p=g,(_=f[g])==null||typeof _=="boolean"||_===""?"":typeof _!="number"||_===0||p in kE||p.startsWith("--")?String(_).trim():_+"px")+";"));return d?[d+" {"].concat(m,["}"]):m}(n):n.toString()}var Xg=function(n){return Array.isArray(n)&&(n.isCss=!0),n};function xy(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];return Za(n)||vd(n)?Xg(ws(zg(nc,[n].concat(t)))):t.length===0&&n.length===1&&typeof n[0]=="string"?n:Xg(ws(zg(n,t)))}var yy=function(n,e,t){return t===void 0&&(t=br),n.theme!==t.theme&&n.theme||e||t.theme},RT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,PT=/(^-|-$)/g;function Uf(n){return n.replace(RT,"-").replace(PT,"")}var Sy=function(n){return xd(dy(n)>>>0)};function zl(n){return typeof n=="string"&&!0}var Sd=function(n){return typeof n=="function"||typeof n=="object"&&n!==null&&!Array.isArray(n)},bT=function(n){return n!=="__proto__"&&n!=="constructor"&&n!=="prototype"};function LT(n,e,t){var i=n[t];Sd(e)&&Sd(i)?My(i,e):n[t]=e}function My(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];for(var r=0,s=t;r<s.length;r++){var o=s[r];if(Sd(o))for(var a in o)bT(a)&&LT(n,o[a],a)}return n}var Qp=Yo.createContext();Qp.Consumer;var Nf={};function Ey(n,e,t){var i=Kp(n),r=!zl(n),s=e.attrs,o=s===void 0?nc:s,a=e.componentId,l=a===void 0?function(v,x){var M=typeof v!="string"?"sc":Uf(v);Nf[M]=(Nf[M]||0)+1;var S=M+"-"+Sy("5.3.11"+M+Nf[M]);return x?x+"-"+S:S}(e.displayName,e.parentComponentId):a,u=e.displayName,c=u===void 0?function(v){return zl(v)?"styled."+v:"Styled("+Bg(v)+")"}(n):u,f=e.displayName&&e.componentId?Uf(e.displayName)+"-"+e.componentId:e.componentId||l,d=i&&n.attrs?Array.prototype.concat(n.attrs,o).filter(Boolean):o,p=e.shouldForwardProp;i&&n.shouldForwardProp&&(p=e.shouldForwardProp?function(v,x,M){return n.shouldForwardProp(v,x,M)&&e.shouldForwardProp(v,x,M)}:n.shouldForwardProp);var _,m=new vT(t,f,i?n.componentStyle:void 0),g=m.isStatic&&o.length===0,h=function(v,x){return function(M,S,E,w){var P=M.attrs,y=M.componentStyle,A=M.defaultProps,Y=M.foldedComponentIds,W=M.shouldForwardProp,U=M.styledComponentId,V=M.target,H=function(q,L,b){q===void 0&&(q=br);var J=bi({},L,{theme:q}),pe={};return b.forEach(function(ie){var le,fe,he,we=ie;for(le in Za(we)&&(we=we(J)),we)J[le]=pe[le]=le==="className"?(fe=pe[le],he=we[le],fe&&he?fe+" "+he:fe||he):we[le]}),[J,pe]}(yy(S,Tt.useContext(Qp),A)||br,S,P),Q=H[0],$=H[1],D=function(q,L,b,J){var pe=_y(),ie=vy(),le=L?q.generateAndInjectStyles(br,pe,ie):q.generateAndInjectStyles(b,pe,ie);return le}(y,w,Q),j=E,G=$.$as||S.$as||$.as||S.as||V,ae=zl(G),z=$!==S?bi({},S,{},$):S,I={};for(var O in z)O[0]!=="$"&&O!=="as"&&(O==="forwardedAs"?I.as=z[O]:(W?W(O,Ng,G):!ae||Ng(O))&&(I[O]=z[O]));return S.style&&$.style!==S.style&&(I.style=bi({},S.style,{},$.style)),I.className=Array.prototype.concat(Y,U,D!==U?D:null,S.className,$.className).filter(Boolean).join(" "),I.ref=j,Tt.createElement(G,I)}(_,v,x,g)};return h.displayName=c,(_=Yo.forwardRef(h)).attrs=d,_.componentStyle=m,_.displayName=c,_.shouldForwardProp=p,_.foldedComponentIds=i?Array.prototype.concat(n.foldedComponentIds,n.styledComponentId):nc,_.styledComponentId=f,_.target=i?n.target:n,_.withComponent=function(v){var x=e.componentId,M=function(E,w){if(E==null)return{};var P,y,A={},Y=Object.keys(E);for(y=0;y<Y.length;y++)P=Y[y],w.indexOf(P)>=0||(A[P]=E[P]);return A}(e,["componentId"]),S=x&&x+"-"+(zl(v)?v:Uf(Bg(v)));return Ey(v,bi({},M,{attrs:d,componentId:S}),t)},Object.defineProperty(_,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=i?My({},n.defaultProps,v):v}}),Object.defineProperty(_,"toString",{value:function(){return"."+_.styledComponentId}}),r&&tT(_,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),_}var Md=function(n){return function e(t,i,r){if(r===void 0&&(r=br),!ay.isValidElementType(i))return dl(1,String(i));var s=function(){return t(i,r,xy.apply(void 0,arguments))};return s.withConfig=function(o){return e(t,i,bi({},r,{},o))},s.attrs=function(o){return e(t,i,bi({},r,{attrs:Array.prototype.concat(r.attrs,o).filter(Boolean)}))},s}(Ey,n)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(n){Md[n]=Md(n)});var DT=function(){function n(t,i){this.rules=t,this.componentId=i,this.isStatic=py(t),rc.registerId(this.componentId+1)}var e=n.prototype;return e.createStyles=function(t,i,r,s){var o=s(ws(this.rules,i,r,s).join(""),""),a=this.componentId+t;r.insertRules(a,a,o)},e.removeStyles=function(t,i){i.clearRules(this.componentId+t)},e.renderStyles=function(t,i,r,s){t>2&&rc.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,i,r,s)},n}();function IT(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var r=xy.apply(void 0,[n].concat(t)),s="sc-global-"+Sy(JSON.stringify(r)),o=new DT(r,s);function a(u){var c=_y(),f=vy(),d=Tt.useContext(Qp),p=Tt.useRef(c.allocateGSInstance(s)).current;return c.server&&l(p,u,c,d,f),Tt.useLayoutEffect(function(){if(!c.server)return l(p,u,c,d,f),function(){return o.removeStyles(p,c)}},[p,u,c,d,f]),null}function l(u,c,f,d,p){if(o.isStatic)o.renderStyles(u,iT,f,p);else{var _=bi({},c,{theme:yy(c,d,a.defaultProps)});o.renderStyles(u,_,f,p)}}return Yo.memo(a)}const or=Md,UT=or.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`,sc={white:"#fff",black:"#000"},Ed={family:' "Noto Serif Display", serif',weight:{light:300,regular:400,medium:500,semiBold:600}},NT=IT`
  :root, body, #root {
    min-width: 320px;
    width: 100%;
    min-height: 100vh;
    font-family: ${Ed.family};
    font-size: 16px;
    font-weight: ${Ed.weight.regular};
  }

  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-color: #242424;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

body {
  margin: 0;
  display: flex;
  place-items: center;
}

* {
  cursor: none;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
`,OT=()=>{const[n,e]=Tt.useState(0),[t,i]=Tt.useState(0);return Tt.useEffect(()=>{const r=()=>{const{innerWidth:s,innerHeight:o}=window;e(s),i(o)};return r(),window.addEventListener("resize",r),()=>window.removeEventListener("resize",r)},[]),{width:n,height:t}};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jp="152",FT=0,$g=1,kT=2,Ty=1,zT=2,Gi=3,Or=0,_n=1,on=2,Lr=0,Eo=1,jg=2,Yg=3,qg=4,BT=5,Js=100,VT=101,HT=102,Kg=103,Zg=104,GT=200,WT=201,XT=202,$T=203,wy=204,Ay=205,jT=206,YT=207,qT=208,KT=209,ZT=210,QT=0,JT=1,ew=2,Td=3,tw=4,nw=5,iw=6,rw=7,Cy=0,sw=1,ow=2,Zi=0,aw=1,lw=2,uw=3,cw=4,fw=5,Ry=300,Fo=301,ko=302,wd=303,Ad=304,Kc=306,Cd=1e3,gi=1001,Rd=1002,sn=1003,Qg=1004,Of=1005,Yn=1006,hw=1007,Qa=1008,As=1009,dw=1010,pw=1011,Py=1012,mw=1013,as=1014,ls=1015,Ja=1016,gw=1017,_w=1018,To=1020,vw=1021,_i=1023,xw=1024,yw=1025,ds=1026,zo=1027,Sw=1028,Mw=1029,Ew=1030,Tw=1031,ww=1033,Ff=33776,kf=33777,zf=33778,Bf=33779,Jg=35840,e_=35841,t_=35842,n_=35843,Aw=36196,i_=37492,r_=37496,s_=37808,o_=37809,a_=37810,l_=37811,u_=37812,c_=37813,f_=37814,h_=37815,d_=37816,p_=37817,m_=37818,g_=37819,__=37820,v_=37821,Vf=36492,Cw=36283,x_=36284,y_=36285,S_=36286,by=3e3,ps=3001,Rw=3200,Pw=3201,bw=0,Lw=1,ms="",Le="srgb",Ni="srgb-linear",Ly="display-p3",Hf=7680,Dw=519,M_=35044,E_="300 es",Pd=1035;class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=Math.PI/180,bd=180/Math.PI;function pl(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Bt(n,e,t){return Math.max(e,Math.min(t,n))}function Iw(n,e){return(n%e+e)%e}function Wf(n,e,t){return(1-t)*n+t*e}function T_(n){return(n&n-1)===0&&n!==0}function Uw(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Bl(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function An(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ve{constructor(){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],_=i[8],m=r[0],g=r[3],h=r[6],v=r[1],x=r[4],M=r[7],S=r[2],E=r[5],w=r[8];return s[0]=o*m+a*v+l*S,s[3]=o*g+a*x+l*E,s[6]=o*h+a*M+l*w,s[1]=u*m+c*v+f*S,s[4]=u*g+c*x+f*E,s[7]=u*h+c*M+f*w,s[2]=d*m+p*v+_*S,s[5]=d*g+p*x+_*E,s[8]=d*h+p*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/_;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=d*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Xf.makeScale(e,t)),this}rotate(e){return this.premultiply(Xf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xf.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xf=new Ve;function Dy(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function el(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const w_={};function ba(n){n in w_||(w_[n]=!0,console.warn(n))}function wo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function $f(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Nw=new Ve().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Ow=new Ve().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Fw(n){return n.convertSRGBToLinear().applyMatrix3(Ow)}function kw(n){return n.applyMatrix3(Nw).convertLinearToSRGB()}const zw={[Ni]:n=>n,[Le]:n=>n.convertSRGBToLinear(),[Ly]:Fw},Bw={[Ni]:n=>n,[Le]:n=>n.convertLinearToSRGB(),[Ly]:kw},ai={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Ni},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=zw[e],r=Bw[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Os;class Iy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Os===void 0&&(Os=el("canvas")),Os.width=e.width,Os.height=e.height;const i=Os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Os}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=el("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wo(t[i]/255)*255):t[i]=wo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Uy{constructor(e=null){this.isSource=!0,this.uuid=pl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jf(r[o].image)):s.push(jf(r[o]))}else s=jf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function jf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Iy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vw=0;class vn extends Is{constructor(e=vn.DEFAULT_IMAGE,t=vn.DEFAULT_MAPPING,i=gi,r=gi,s=Yn,o=Qa,a=_i,l=As,u=vn.DEFAULT_ANISOTROPY,c=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vw++}),this.uuid=pl(),this.name="",this.source=new Uy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ps?Le:ms),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ry)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cd:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Rd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cd:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Rd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Le?ps:by}set encoding(e){ba("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ps?Le:ms}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Ry;vn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],_=l[9],m=l[2],g=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+m)<.1&&Math.abs(_+g)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,M=(p+1)/2,S=(h+1)/2,E=(c+d)/4,w=(f+m)/4,P=(_+g)/4;return x>M&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=w/i):M>S?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=P/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=w/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((g-_)*(g-_)+(f-m)*(f-m)+(d-c)*(d-c));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(f-m)/v,this.z=(d-c)/v,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cs extends Is{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ba("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ps?Le:ms),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Yn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Uy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ny extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hw extends vn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=m;return}if(f!==m||l!==d||u!==p||c!==_){let g=1-a;const h=l*d+u*p+c*_+f*m,v=h>=0?1:-1,x=1-h*h;if(x>Number.EPSILON){const S=Math.sqrt(x),E=Math.atan2(S,h*v);g=Math.sin(g*E)/S,a=Math.sin(a*E)/S}const M=a*v;if(l=l*g+d*M,u=u*g+p*M,c=c*g+_*M,f=f*g+m*M,g===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=S,u*=S,c*=S,f*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+c*f+l*p-u*d,e[t+1]=l*_+c*d+u*f-a*p,e[t+2]=u*_+c*p+a*d-l*f,e[t+3]=c*_-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"YXZ":this._x=d*c*f+u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"ZXY":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f-d*p*_;break;case"ZYX":this._x=d*c*f-u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f+d*p*_;break;case"YZX":this._x=d*c*f+u*p*_,this._y=u*p*f+d*c*_,this._z=u*c*_-d*p*f,this._w=u*c*f-d*p*_;break;case"XZY":this._x=d*c*f-u*p*_,this._y=u*p*f-d*c*_,this._z=u*c*_+d*p*f,this._w=u*c*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Bt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(A_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(A_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,f=l*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=u*l+d*-s+c*-a-f*-o,this.y=c*l+d*-o+f*-s-u*-a,this.z=f*l+d*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yf.copy(this).projectOnVector(e),this.sub(Yf)}reflect(e){return this.sub(Yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Bt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yf=new k,A_=new Qi;class ml{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Fs.copy(e.boundingBox),Fs.applyMatrix4(e.matrixWorld),this.union(Fs);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)ki.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ki)}else r.boundingBox===null&&r.computeBoundingBox(),Fs.copy(r.boundingBox),Fs.applyMatrix4(e.matrixWorld),this.union(Fs)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),Vl.subVectors(this.max,la),ks.subVectors(e.a,la),zs.subVectors(e.b,la),Bs.subVectors(e.c,la),ur.subVectors(zs,ks),cr.subVectors(Bs,zs),jr.subVectors(ks,Bs);let t=[0,-ur.z,ur.y,0,-cr.z,cr.y,0,-jr.z,jr.y,ur.z,0,-ur.x,cr.z,0,-cr.x,jr.z,0,-jr.x,-ur.y,ur.x,0,-cr.y,cr.x,0,-jr.y,jr.x,0];return!qf(t,ks,zs,Bs,Vl)||(t=[1,0,0,0,1,0,0,0,1],!qf(t,ks,zs,Bs,Vl))?!1:(Hl.crossVectors(ur,cr),t=[Hl.x,Hl.y,Hl.z],qf(t,ks,zs,Bs,Vl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new k,new k,new k,new k,new k,new k,new k,new k],ki=new k,Fs=new ml,ks=new k,zs=new k,Bs=new k,ur=new k,cr=new k,jr=new k,la=new k,Vl=new k,Hl=new k,Yr=new k;function qf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Yr.fromArray(n,s);const a=r.x*Math.abs(Yr.x)+r.y*Math.abs(Yr.y)+r.z*Math.abs(Yr.z),l=e.dot(Yr),u=t.dot(Yr),c=i.dot(Yr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const Gw=new ml,ua=new k,Kf=new k;class Zc{constructor(e=new k,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Gw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ua.subVectors(e,this.center);const t=ua.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ua,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ua.copy(e.center).add(Kf)),this.expandByPoint(ua.copy(e.center).sub(Kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new k,Zf=new k,Gl=new k,fr=new k,Qf=new k,Wl=new k,Jf=new k;class Oy{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Zf.copy(e).add(t).multiplyScalar(.5),Gl.copy(t).sub(e).normalize(),fr.copy(this.origin).sub(Zf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Gl),a=fr.dot(this.direction),l=-fr.dot(Gl),u=fr.lengthSq(),c=Math.abs(1-o*o);let f,d,p,_;if(c>0)if(f=o*l-a,d=o*a-l,_=s*c,f>=0)if(d>=-_)if(d<=_){const m=1/c;f*=m,d*=m,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Zf).addScaledVector(Gl,d),p}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const i=zi.dot(this.direction),r=zi.dot(zi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,i,r,s){Qf.subVectors(t,e),Wl.subVectors(i,e),Jf.crossVectors(Qf,Wl);let o=this.direction.dot(Jf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fr.subVectors(this.origin,e);const l=a*this.direction.dot(Wl.crossVectors(fr,Wl));if(l<0)return null;const u=a*this.direction.dot(Qf.cross(fr));if(u<0||l+u>o)return null;const c=-a*fr.dot(Jf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,l,u,c,f,d,p,_,m,g){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=m,h[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Vs.setFromMatrixColumn(e,0).length(),s=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+_*u,t[5]=d-m*u,t[9]=-a*l,t[2]=m-d*u,t[6]=_+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,_=u*c,m=u*f;t[0]=d+m*a,t[4]=_*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-_,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,_=u*c,m=u*f;t[0]=d-m*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*c,t[9]=m-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,_=a*c,m=a*f;t[0]=l*c,t[4]=_*u-p,t[8]=d*u+m,t[1]=l*f,t[5]=m*u+d,t[9]=p*u-_,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=m-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+_,t[10]=d-m*f}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,m=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+m,t[5]=o*c,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*c,t[10]=m*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ww,e,Xw)}lookAt(e,t,i){const r=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),hr.crossVectors(i,Cn),hr.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),hr.crossVectors(i,Cn)),hr.normalize(),Xl.crossVectors(Cn,hr),r[0]=hr.x,r[4]=Xl.x,r[8]=Cn.x,r[1]=hr.y,r[5]=Xl.y,r[9]=Cn.y,r[2]=hr.z,r[6]=Xl.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],_=i[2],m=i[6],g=i[10],h=i[14],v=i[3],x=i[7],M=i[11],S=i[15],E=r[0],w=r[4],P=r[8],y=r[12],A=r[1],Y=r[5],W=r[9],U=r[13],V=r[2],H=r[6],Q=r[10],$=r[14],D=r[3],j=r[7],G=r[11],ae=r[15];return s[0]=o*E+a*A+l*V+u*D,s[4]=o*w+a*Y+l*H+u*j,s[8]=o*P+a*W+l*Q+u*G,s[12]=o*y+a*U+l*$+u*ae,s[1]=c*E+f*A+d*V+p*D,s[5]=c*w+f*Y+d*H+p*j,s[9]=c*P+f*W+d*Q+p*G,s[13]=c*y+f*U+d*$+p*ae,s[2]=_*E+m*A+g*V+h*D,s[6]=_*w+m*Y+g*H+h*j,s[10]=_*P+m*W+g*Q+h*G,s[14]=_*y+m*U+g*$+h*ae,s[3]=v*E+x*A+M*V+S*D,s[7]=v*w+x*Y+M*H+S*j,s[11]=v*P+x*W+M*Q+S*G,s[15]=v*y+x*U+M*$+S*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],_=e[3],m=e[7],g=e[11],h=e[15];return _*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+m*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+g*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],_=e[12],m=e[13],g=e[14],h=e[15],v=f*g*u-m*d*u+m*l*p-a*g*p-f*l*h+a*d*h,x=_*d*u-c*g*u-_*l*p+o*g*p+c*l*h-o*d*h,M=c*m*u-_*f*u+_*a*p-o*m*p-c*a*h+o*f*h,S=_*f*l-c*m*l-_*a*d+o*m*d+c*a*g-o*f*g,E=t*v+i*x+r*M+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=v*w,e[1]=(m*d*s-f*g*s-m*r*p+i*g*p+f*r*h-i*d*h)*w,e[2]=(a*g*s-m*l*s+m*r*u-i*g*u-a*r*h+i*l*h)*w,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*w,e[4]=x*w,e[5]=(c*g*s-_*d*s+_*r*p-t*g*p-c*r*h+t*d*h)*w,e[6]=(_*l*s-o*g*s-_*r*u+t*g*u+o*r*h-t*l*h)*w,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*w,e[8]=M*w,e[9]=(_*f*s-c*m*s-_*i*p+t*m*p+c*i*h-t*f*h)*w,e[10]=(o*m*s-_*a*s+_*i*u-t*m*u-o*i*h+t*a*h)*w,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*w,e[12]=S*w,e[13]=(c*m*r-_*f*r+_*i*d-t*m*d-c*i*g+t*f*g)*w,e[14]=(_*a*r-o*m*r-_*i*l+t*m*l+o*i*g-t*a*g)*w,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*w,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,_=s*f,m=o*c,g=o*f,h=a*f,v=l*u,x=l*c,M=l*f,S=i.x,E=i.y,w=i.z;return r[0]=(1-(m+h))*S,r[1]=(p+M)*S,r[2]=(_-x)*S,r[3]=0,r[4]=(p-M)*E,r[5]=(1-(d+h))*E,r[6]=(g+v)*E,r[7]=0,r[8]=(_+x)*w,r[9]=(g-v)*w,r[10]=(1-(d+m))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Vs.set(r[0],r[1],r[2]).length();const o=Vs.set(r[4],r[5],r[6]).length(),a=Vs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],li.copy(this);const u=1/s,c=1/o,f=1/a;return li.elements[0]*=u,li.elements[1]*=u,li.elements[2]*=u,li.elements[4]*=c,li.elements[5]*=c,li.elements[6]*=c,li.elements[8]*=f,li.elements[9]*=f,li.elements[10]*=f,t.setFromRotationMatrix(li),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,l=2*s/(t-e),u=2*s/(i-r),c=(t+e)/(t-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=u,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,l=1/(t-e),u=1/(i-r),c=1/(o-s),f=(t+e)*l,d=(i+r)*u,p=(o+s)*c;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*c,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Vs=new k,li=new At,Ww=new k(0,0,0),Xw=new k(1,1,1),hr=new k,Xl=new k,Cn=new k,C_=new At,R_=new Qi;class Qc{constructor(e=0,t=0,i=0,r=Qc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Bt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Bt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Bt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return C_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(C_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return R_.setFromEuler(this),this.setFromQuaternion(R_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qc.DEFAULT_ORDER="XYZ";class Fy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $w=0;const P_=new k,Hs=new Qi,Bi=new At,$l=new k,ca=new k,jw=new k,Yw=new Qi,b_=new k(1,0,0),L_=new k(0,1,0),D_=new k(0,0,1),qw={type:"added"},I_={type:"removed"};class xn extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$w++}),this.uuid=pl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new k,t=new Qc,i=new Qi,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Ve}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Fy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(b_,e)}rotateY(e){return this.rotateOnAxis(L_,e)}rotateZ(e){return this.rotateOnAxis(D_,e)}translateOnAxis(e,t){return P_.copy(e).applyQuaternion(this.quaternion),this.position.add(P_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(b_,e)}translateY(e){return this.translateOnAxis(L_,e)}translateZ(e){return this.translateOnAxis(D_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?$l.copy(e):$l.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ca,$l,this.up):Bi.lookAt($l,ca,this.up),this.quaternion.setFromRotationMatrix(Bi),r&&(Bi.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(qw)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(I_)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(I_)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,jw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,Yw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}xn.DEFAULT_UP=new k(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new k,Vi=new k,eh=new k,Hi=new k,Gs=new k,Ws=new k,U_=new k,th=new k,nh=new k,ih=new k;let jl=!1;class pi{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ui.subVectors(e,t),r.cross(ui);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ui.subVectors(r,t),Vi.subVectors(i,t),eh.subVectors(e,t);const o=ui.dot(ui),a=ui.dot(Vi),l=ui.dot(eh),u=Vi.dot(Vi),c=Vi.dot(eh),f=o*u-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Hi),Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getUV(e,t,i,r,s,o,a,l){return jl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Hi),l.setScalar(0),l.addScaledVector(s,Hi.x),l.addScaledVector(o,Hi.y),l.addScaledVector(a,Hi.z),l}static isFrontFacing(e,t,i,r){return ui.subVectors(i,t),Vi.subVectors(e,t),ui.cross(Vi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),ui.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return jl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),jl=!0),pi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return pi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Gs.subVectors(r,i),Ws.subVectors(s,i),th.subVectors(e,i);const l=Gs.dot(th),u=Ws.dot(th);if(l<=0&&u<=0)return t.copy(i);nh.subVectors(e,r);const c=Gs.dot(nh),f=Ws.dot(nh);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Gs,o);ih.subVectors(e,s);const p=Gs.dot(ih),_=Ws.dot(ih);if(_>=0&&p<=_)return t.copy(s);const m=p*u-l*_;if(m<=0&&u>=0&&_<=0)return a=u/(u-_),t.copy(i).addScaledVector(Ws,a);const g=c*_-p*f;if(g<=0&&f-c>=0&&p-_>=0)return U_.subVectors(s,r),a=(f-c)/(f-c+(p-_)),t.copy(r).addScaledVector(U_,a);const h=1/(g+m+d);return o=m*h,a=d*h,t.copy(i).addScaledVector(Gs,o).addScaledVector(Ws,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Kw=0;class gl extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=pl(),this.name="",this.type="Material",this.blending=Eo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=wy,this.blendDst=Ay,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Td,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dw,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hf,this.stencilZFail=Hf,this.stencilZPass=Hf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function rh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class st{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Le){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ai.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=ai.workingColorSpace){return this.r=e,this.g=t,this.b=i,ai.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=ai.workingColorSpace){if(e=Iw(e,1),t=Bt(t,0,1),i=Bt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=rh(o,s,e+1/3),this.g=rh(o,s,e),this.b=rh(o,s,e-1/3)}return ai.toWorkingColorSpace(this,r),this}setStyle(e,t=Le){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Le){const i=ky[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}copyLinearToSRGB(e){return this.r=$f(e.r),this.g=$f(e.g),this.b=$f(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Le){return ai.fromWorkingColorSpace(Yt.copy(this),e),Math.round(Bt(Yt.r*255,0,255))*65536+Math.round(Bt(Yt.g*255,0,255))*256+Math.round(Bt(Yt.b*255,0,255))}getHexString(e=Le){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ai.workingColorSpace){ai.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,s=Yt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=ai.workingColorSpace){return ai.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Le){ai.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==Le?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ci),ci.h+=e,ci.s+=t,ci.l+=i,this.setHSL(ci.h,ci.s,ci.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(Yl);const i=Wf(ci.h,Yl.h,t),r=Wf(ci.s,Yl.s,t),s=Wf(ci.l,Yl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new st;st.NAMES=ky;class em extends gl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Cy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new k,ql=new je;class yi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=M_,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ql.fromBufferAttribute(this,t),ql.applyMatrix3(e),this.setXY(t,ql.x,ql.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bl(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bl(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bl(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),i=An(i,this.array),r=An(r,this.array),s=An(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==M_&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zy extends yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class By extends yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class at extends yi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Zw=0;const Wn=new At,sh=new xn,Xs=new k,Rn=new ml,fa=new ml,It=new k;class Hn extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zw++}),this.uuid=pl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dy(e)?By:zy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,i){return Wn.makeTranslation(e,t,i),this.applyMatrix4(Wn),this}scale(e,t,i){return Wn.makeScale(e,t,i),this.applyMatrix4(Wn),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new at(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ml);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Rn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];fa.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(Rn.min,fa.min),Rn.expandByPoint(It),It.addVectors(Rn.max,fa.max),Rn.expandByPoint(It)):(Rn.expandByPoint(fa.min),Rn.expandByPoint(fa.max))}Rn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)It.fromBufferAttribute(a,u),l&&(Xs.fromBufferAttribute(e,u),It.add(Xs)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new k,c[A]=new k;const f=new k,d=new k,p=new k,_=new je,m=new je,g=new je,h=new k,v=new k;function x(A,Y,W){f.fromArray(r,A*3),d.fromArray(r,Y*3),p.fromArray(r,W*3),_.fromArray(o,A*2),m.fromArray(o,Y*2),g.fromArray(o,W*2),d.sub(f),p.sub(f),m.sub(_),g.sub(_);const U=1/(m.x*g.y-g.x*m.y);isFinite(U)&&(h.copy(d).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(U),v.copy(p).multiplyScalar(m.x).addScaledVector(d,-g.x).multiplyScalar(U),u[A].add(h),u[Y].add(h),u[W].add(h),c[A].add(v),c[Y].add(v),c[W].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:i.length}]);for(let A=0,Y=M.length;A<Y;++A){const W=M[A],U=W.start,V=W.count;for(let H=U,Q=U+V;H<Q;H+=3)x(i[H+0],i[H+1],i[H+2])}const S=new k,E=new k,w=new k,P=new k;function y(A){w.fromArray(s,A*3),P.copy(w);const Y=u[A];S.copy(Y),S.sub(w.multiplyScalar(w.dot(Y))).normalize(),E.crossVectors(P,Y);const U=E.dot(c[A])<0?-1:1;l[A*4]=S.x,l[A*4+1]=S.y,l[A*4+2]=S.z,l[A*4+3]=U}for(let A=0,Y=M.length;A<Y;++A){const W=M[A],U=W.start,V=W.count;for(let H=U,Q=U+V;H<Q;H+=3)y(i[H+0]),y(i[H+1]),y(i[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,u=new k,c=new k,f=new k;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let h=0;h<c;h++)d[_++]=u[p++]}return new yi(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const N_=new At,Ti=new Oy,Kl=new Zc,O_=new k,$s=new k,js=new k,Ys=new k,oh=new k,Zl=new k,Ql=new je,Jl=new je,eu=new je,F_=new k,k_=new k,z_=new k,tu=new k,nu=new k;class dn extends xn{constructor(e=new Hn,t=new em){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Zl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(oh.fromBufferAttribute(f,e),o?Zl.addScaledVector(oh,c):Zl.addScaledVector(oh.sub(t),c))}t.add(Zl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Kl.copy(i.boundingSphere),Kl.applyMatrix4(s),Ti.copy(e.ray).recast(e.near),!(Kl.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(Kl,O_)===null||Ti.origin.distanceToSquared(O_)>(e.far-e.near)**2))&&(N_.copy(s).invert(),Ti.copy(e.ray).applyMatrix4(N_),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let i;const r=this.geometry,s=this.material,o=r.index,a=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(s))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=s[m.materialIndex],h=Math.max(m.start,d.start),v=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let x=h,M=v;x<M;x+=3){const S=o.getX(x),E=o.getX(x+1),w=o.getX(x+2);i=iu(this,g,e,Ti,l,u,c,S,E,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const h=o.getX(m),v=o.getX(m+1),x=o.getX(m+2);i=iu(this,s,e,Ti,l,u,c,h,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(a!==void 0)if(Array.isArray(s))for(let p=0,_=f.length;p<_;p++){const m=f[p],g=s[m.materialIndex],h=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let x=h,M=v;x<M;x+=3){const S=x,E=x+1,w=x+2;i=iu(this,g,e,Ti,l,u,c,S,E,w),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=p,g=_;m<g;m+=3){const h=m,v=m+1,x=m+2;i=iu(this,s,e,Ti,l,u,c,h,v,x),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Qw(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;nu.copy(a),nu.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(nu);return u<t.near||u>t.far?null:{distance:u,point:nu.clone(),object:n}}function iu(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,$s),n.getVertexPosition(l,js),n.getVertexPosition(u,Ys);const c=Qw(n,e,t,i,$s,js,Ys,tu);if(c){r&&(Ql.fromBufferAttribute(r,a),Jl.fromBufferAttribute(r,l),eu.fromBufferAttribute(r,u),c.uv=pi.getInterpolation(tu,$s,js,Ys,Ql,Jl,eu,new je)),s&&(Ql.fromBufferAttribute(s,a),Jl.fromBufferAttribute(s,l),eu.fromBufferAttribute(s,u),c.uv1=pi.getInterpolation(tu,$s,js,Ys,Ql,Jl,eu,new je),c.uv2=c.uv1),o&&(F_.fromBufferAttribute(o,a),k_.fromBufferAttribute(o,l),z_.fromBufferAttribute(o,u),c.normal=pi.getInterpolation(tu,$s,js,Ys,F_,k_,z_,new k),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new k,materialIndex:0};pi.getNormal($s,js,Ys,f.normal),c.face=f}return c}class _l extends Hn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new at(u,3)),this.setAttribute("normal",new at(c,3)),this.setAttribute("uv",new at(f,2));function _(m,g,h,v,x,M,S,E,w,P,y){const A=M/w,Y=S/P,W=M/2,U=S/2,V=E/2,H=w+1,Q=P+1;let $=0,D=0;const j=new k;for(let G=0;G<Q;G++){const ae=G*Y-U;for(let z=0;z<H;z++){const I=z*A-W;j[m]=I*v,j[g]=ae*x,j[h]=V,u.push(j.x,j.y,j.z),j[m]=0,j[g]=0,j[h]=E>0?1:-1,c.push(j.x,j.y,j.z),f.push(z/w),f.push(1-G/P),$+=1}}for(let G=0;G<P;G++)for(let ae=0;ae<w;ae++){const z=d+ae+H*G,I=d+ae+H*(G+1),O=d+(ae+1)+H*(G+1),q=d+(ae+1)+H*G;l.push(z,I,q),l.push(I,O,q),D+=6}a.addGroup(p,D,y),p+=D,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Bo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=Bo(n[t]);for(const r in i)e[r]=i[r]}return e}function Jw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Vy(n){return n.getRenderTarget()===null?n.outputColorSpace:Ni}const eA={clone:Bo,merge:nn};var tA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fr extends gl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tA,this.fragmentShader=nA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Bo(e.uniforms),this.uniformsGroups=Jw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Hy extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qn extends Hy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=bd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bd*2*Math.atan(Math.tan(Gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qs=-90,Ks=1;class iA extends xn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new qn(qs,Ks,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new qn(qs,Ks,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new qn(qs,Ks,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new qn(qs,Ks,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new qn(qs,Ks,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new qn(qs,Ks,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Zi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Gy extends vn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Fo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rA extends Cs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ba("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ps?Le:ms),this.texture=new Gy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _l(5,5,5),s=new Fr({name:"CubemapFromEquirect",uniforms:Bo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:Lr});s.uniforms.tEquirect.value=t;const o=new dn(r,s),a=t.minFilter;return t.minFilter===Qa&&(t.minFilter=Yn),new iA(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const ah=new k,sA=new k,oA=new Ve;class es{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ah.subVectors(i,t).cross(sA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ah),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||oA.getNormalMatrix(e),r=this.coplanarPoint(ah).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new Zc,ru=new k;class Wy{constructor(e=new es,t=new es,i=new es,r=new es,s=new es,o=new es){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],l=i[4],u=i[5],c=i[6],f=i[7],d=i[8],p=i[9],_=i[10],m=i[11],g=i[12],h=i[13],v=i[14],x=i[15];return t[0].setComponents(a-r,f-l,m-d,x-g).normalize(),t[1].setComponents(a+r,f+l,m+d,x+g).normalize(),t[2].setComponents(a+s,f+u,m+p,x+h).normalize(),t[3].setComponents(a-s,f-u,m-p,x-h).normalize(),t[4].setComponents(a-o,f-c,m-_,x-v).normalize(),t[5].setComponents(a+o,f+c,m+_,x+v).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(ru.x=r.normal.x>0?e.max.x:e.min.x,ru.y=r.normal.y>0?e.max.y:e.min.y,ru.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ru)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Xy(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function aA(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,f,d),u.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,f){const d=c.array,p=c.updateRange;n.bindBuffer(f,u),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f===void 0?i.set(u,r(u,c)):f.version<u.version&&(s(f.buffer,u,c),f.version=u.version)}return{get:o,remove:a,update:l}}class Zo extends Hn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,p=[],_=[],m=[],g=[];for(let h=0;h<c;h++){const v=h*d-o;for(let x=0;x<u;x++){const M=x*f-s;_.push(M,-v,0),m.push(0,0,1),g.push(x/a),g.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const x=v+u*h,M=v+u*(h+1),S=v+1+u*(h+1),E=v+1+u*h;p.push(x,M,E),p.push(M,S,E)}this.setIndex(p),this.setAttribute("position",new at(_,3)),this.setAttribute("normal",new at(m,3)),this.setAttribute("uv",new at(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}var lA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cA=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,fA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pA="vec3 transformed = vec3( position );",mA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_A=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,AA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,CA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,RA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PA=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,LA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,IA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,UA="gl_FragColor = linearToOutputTexel( gl_FragColor );",NA=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,FA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,BA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,VA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,XA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$A=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,jA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,KA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ZA=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,QA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eC=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tC=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nC=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,iC=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rC=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sC=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oC=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,aC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lC=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,cC=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,fC=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,hC=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dC=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pC=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mC=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gC=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_C=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vC=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,xC=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,yC=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,SC=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,MC=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TC=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wC=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,AC=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CC=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,RC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,PC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,LC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,DC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,IC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,NC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,OC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,BC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,VC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,HC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,GC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,WC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,XC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$C=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,YC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,KC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ZC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,QC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,JC=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eR=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tR=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,nR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,sR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oR=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uR=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,fR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,dR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,mR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_R=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ER=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,AR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,NR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ue={alphamap_fragment:lA,alphamap_pars_fragment:uA,alphatest_fragment:cA,alphatest_pars_fragment:fA,aomap_fragment:hA,aomap_pars_fragment:dA,begin_vertex:pA,beginnormal_vertex:mA,bsdfs:gA,iridescence_fragment:_A,bumpmap_pars_fragment:vA,clipping_planes_fragment:xA,clipping_planes_pars_fragment:yA,clipping_planes_pars_vertex:SA,clipping_planes_vertex:MA,color_fragment:EA,color_pars_fragment:TA,color_pars_vertex:wA,color_vertex:AA,common:CA,cube_uv_reflection_fragment:RA,defaultnormal_vertex:PA,displacementmap_pars_vertex:bA,displacementmap_vertex:LA,emissivemap_fragment:DA,emissivemap_pars_fragment:IA,encodings_fragment:UA,encodings_pars_fragment:NA,envmap_fragment:OA,envmap_common_pars_fragment:FA,envmap_pars_fragment:kA,envmap_pars_vertex:zA,envmap_physical_pars_fragment:ZA,envmap_vertex:BA,fog_vertex:VA,fog_pars_vertex:HA,fog_fragment:GA,fog_pars_fragment:WA,gradientmap_pars_fragment:XA,lightmap_fragment:$A,lightmap_pars_fragment:jA,lights_lambert_fragment:YA,lights_lambert_pars_fragment:qA,lights_pars_begin:KA,lights_toon_fragment:QA,lights_toon_pars_fragment:JA,lights_phong_fragment:eC,lights_phong_pars_fragment:tC,lights_physical_fragment:nC,lights_physical_pars_fragment:iC,lights_fragment_begin:rC,lights_fragment_maps:sC,lights_fragment_end:oC,logdepthbuf_fragment:aC,logdepthbuf_pars_fragment:lC,logdepthbuf_pars_vertex:uC,logdepthbuf_vertex:cC,map_fragment:fC,map_pars_fragment:hC,map_particle_fragment:dC,map_particle_pars_fragment:pC,metalnessmap_fragment:mC,metalnessmap_pars_fragment:gC,morphcolor_vertex:_C,morphnormal_vertex:vC,morphtarget_pars_vertex:xC,morphtarget_vertex:yC,normal_fragment_begin:SC,normal_fragment_maps:MC,normal_pars_fragment:EC,normal_pars_vertex:TC,normal_vertex:wC,normalmap_pars_fragment:AC,clearcoat_normal_fragment_begin:CC,clearcoat_normal_fragment_maps:RC,clearcoat_pars_fragment:PC,iridescence_pars_fragment:bC,output_fragment:LC,packing:DC,premultiplied_alpha_fragment:IC,project_vertex:UC,dithering_fragment:NC,dithering_pars_fragment:OC,roughnessmap_fragment:FC,roughnessmap_pars_fragment:kC,shadowmap_pars_fragment:zC,shadowmap_pars_vertex:BC,shadowmap_vertex:VC,shadowmask_pars_fragment:HC,skinbase_vertex:GC,skinning_pars_vertex:WC,skinning_vertex:XC,skinnormal_vertex:$C,specularmap_fragment:jC,specularmap_pars_fragment:YC,tonemapping_fragment:qC,tonemapping_pars_fragment:KC,transmission_fragment:ZC,transmission_pars_fragment:QC,uv_pars_fragment:JC,uv_pars_vertex:eR,uv_vertex:tR,worldpos_vertex:nR,background_vert:iR,background_frag:rR,backgroundCube_vert:sR,backgroundCube_frag:oR,cube_vert:aR,cube_frag:lR,depth_vert:uR,depth_frag:cR,distanceRGBA_vert:fR,distanceRGBA_frag:hR,equirect_vert:dR,equirect_frag:pR,linedashed_vert:mR,linedashed_frag:gR,meshbasic_vert:_R,meshbasic_frag:vR,meshlambert_vert:xR,meshlambert_frag:yR,meshmatcap_vert:SR,meshmatcap_frag:MR,meshnormal_vert:ER,meshnormal_frag:TR,meshphong_vert:wR,meshphong_frag:AR,meshphysical_vert:CR,meshphysical_frag:RR,meshtoon_vert:PR,meshtoon_frag:bR,points_vert:LR,points_frag:DR,shadow_vert:IR,shadow_frag:UR,sprite_vert:NR,sprite_frag:OR},ue={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaTest:{value:0}}},Ci={basic:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new st(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:nn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:nn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new st(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:nn([ue.points,ue.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:nn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:nn([ue.common,ue.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:nn([ue.sprite,ue.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:nn([ue.common,ue.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:nn([ue.lights,ue.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Ci.physical={uniforms:nn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const su={r:0,b:0,g:0};function FR(n,e,t,i,r,s,o){const a=new st(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function _(g,h){let v=!1,x=h.isScene===!0?h.background:null;switch(x&&x.isTexture&&(x=(h.backgroundBlurriness>0?t:e).get(x)),x===null?m(a,l):x&&x.isColor&&(m(x,1),v=!0),n.xr.getEnvironmentBlendMode()){case"opaque":v=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),v=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),v=!0;break}(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Kc)?(c===void 0&&(c=new dn(new _l(1,1,1),new Fr({name:"BackgroundCubeMaterial",uniforms:Bo(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Le,(f!==x||d!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new dn(new Zo(2,2),new Fr({name:"BackgroundMaterial",uniforms:Bo(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Le,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,d=x.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function m(g,h){g.getRGB(su,Vy(n)),i.buffers.color.setClear(su.r,su.g,su.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(g,h=1){a.set(g),l=h,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:_}}function kR(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let u=l,c=!1;function f(V,H,Q,$,D){let j=!1;if(o){const G=m($,Q,H);u!==G&&(u=G,p(u.object)),j=h(V,$,Q,D),j&&v(V,$,Q,D)}else{const G=H.wireframe===!0;(u.geometry!==$.id||u.program!==Q.id||u.wireframe!==G)&&(u.geometry=$.id,u.program=Q.id,u.wireframe=G,j=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(j||c)&&(c=!1,P(V,H,Q,$),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(V){return i.isWebGL2?n.bindVertexArray(V):s.bindVertexArrayOES(V)}function _(V){return i.isWebGL2?n.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function m(V,H,Q){const $=Q.wireframe===!0;let D=a[V.id];D===void 0&&(D={},a[V.id]=D);let j=D[H.id];j===void 0&&(j={},D[H.id]=j);let G=j[$];return G===void 0&&(G=g(d()),j[$]=G),G}function g(V){const H=[],Q=[],$=[];for(let D=0;D<r;D++)H[D]=0,Q[D]=0,$[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Q,attributeDivisors:$,object:V,attributes:{},index:null}}function h(V,H,Q,$){const D=u.attributes,j=H.attributes;let G=0;const ae=Q.getAttributes();for(const z in ae)if(ae[z].location>=0){const O=D[z];let q=j[z];if(q===void 0&&(z==="instanceMatrix"&&V.instanceMatrix&&(q=V.instanceMatrix),z==="instanceColor"&&V.instanceColor&&(q=V.instanceColor)),O===void 0||O.attribute!==q||q&&O.data!==q.data)return!0;G++}return u.attributesNum!==G||u.index!==$}function v(V,H,Q,$){const D={},j=H.attributes;let G=0;const ae=Q.getAttributes();for(const z in ae)if(ae[z].location>=0){let O=j[z];O===void 0&&(z==="instanceMatrix"&&V.instanceMatrix&&(O=V.instanceMatrix),z==="instanceColor"&&V.instanceColor&&(O=V.instanceColor));const q={};q.attribute=O,O&&O.data&&(q.data=O.data),D[z]=q,G++}u.attributes=D,u.attributesNum=G,u.index=$}function x(){const V=u.newAttributes;for(let H=0,Q=V.length;H<Q;H++)V[H]=0}function M(V){S(V,0)}function S(V,H){const Q=u.newAttributes,$=u.enabledAttributes,D=u.attributeDivisors;Q[V]=1,$[V]===0&&(n.enableVertexAttribArray(V),$[V]=1),D[V]!==H&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,H),D[V]=H)}function E(){const V=u.newAttributes,H=u.enabledAttributes;for(let Q=0,$=H.length;Q<$;Q++)H[Q]!==V[Q]&&(n.disableVertexAttribArray(Q),H[Q]=0)}function w(V,H,Q,$,D,j){i.isWebGL2===!0&&(Q===n.INT||Q===n.UNSIGNED_INT)?n.vertexAttribIPointer(V,H,Q,D,j):n.vertexAttribPointer(V,H,Q,$,D,j)}function P(V,H,Q,$){if(i.isWebGL2===!1&&(V.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const D=$.attributes,j=Q.getAttributes(),G=H.defaultAttributeValues;for(const ae in j){const z=j[ae];if(z.location>=0){let I=D[ae];if(I===void 0&&(ae==="instanceMatrix"&&V.instanceMatrix&&(I=V.instanceMatrix),ae==="instanceColor"&&V.instanceColor&&(I=V.instanceColor)),I!==void 0){const O=I.normalized,q=I.itemSize,L=t.get(I);if(L===void 0)continue;const b=L.buffer,J=L.type,pe=L.bytesPerElement;if(I.isInterleavedBufferAttribute){const ie=I.data,le=ie.stride,fe=I.offset;if(ie.isInstancedInterleavedBuffer){for(let he=0;he<z.locationSize;he++)S(z.location+he,ie.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let he=0;he<z.locationSize;he++)M(z.location+he);n.bindBuffer(n.ARRAY_BUFFER,b);for(let he=0;he<z.locationSize;he++)w(z.location+he,q/z.locationSize,J,O,le*pe,(fe+q/z.locationSize*he)*pe)}else{if(I.isInstancedBufferAttribute){for(let ie=0;ie<z.locationSize;ie++)S(z.location+ie,I.meshPerAttribute);V.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let ie=0;ie<z.locationSize;ie++)M(z.location+ie);n.bindBuffer(n.ARRAY_BUFFER,b);for(let ie=0;ie<z.locationSize;ie++)w(z.location+ie,q/z.locationSize,J,O,q*pe,q/z.locationSize*ie*pe)}}else if(G!==void 0){const O=G[ae];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(z.location,O);break;case 3:n.vertexAttrib3fv(z.location,O);break;case 4:n.vertexAttrib4fv(z.location,O);break;default:n.vertexAttrib1fv(z.location,O)}}}}E()}function y(){W();for(const V in a){const H=a[V];for(const Q in H){const $=H[Q];for(const D in $)_($[D].object),delete $[D];delete H[Q]}delete a[V]}}function A(V){if(a[V.id]===void 0)return;const H=a[V.id];for(const Q in H){const $=H[Q];for(const D in $)_($[D].object),delete $[D];delete H[Q]}delete a[V.id]}function Y(V){for(const H in a){const Q=a[H];if(Q[V.id]===void 0)continue;const $=Q[V.id];for(const D in $)_($[D].object),delete $[D];delete Q[V.id]}}function W(){U(),c=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:W,resetDefaultState:U,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:Y,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function zR(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,u,c,f),t.update(c,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function BR(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,M=o||e.has("OES_texture_float"),S=x&&M,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:g,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:S,maxSamples:E}}function VR(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new es,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!g)s?c(null):u();else{const v=s?0:i,x=v*4;let M=h.clippingState||null;l.value=M,M=c(_,d,x,p);for(let S=0;S!==x;++S)M[S]=t[S];h.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,_){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,_!==!0||g===null){const h=p+m*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<h)&&(g=new Float32Array(h));for(let x=0,M=p;x!==m;++x,M+=4)o.copy(f[x]).applyMatrix4(v,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function HR(n){let e=new WeakMap;function t(o,a){return a===wd?o.mapping=Fo:a===Ad&&(o.mapping=ko),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===wd||a===Ad)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new rA(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class GR extends Hy{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const po=4,B_=[.125,.215,.35,.446,.526,.582],is=20,lh=new GR,V_=new st;let uh=null;const ts=(1+Math.sqrt(5))/2,Zs=1/ts,H_=[new k(1,1,1),new k(-1,1,1),new k(1,1,-1),new k(-1,1,-1),new k(0,ts,Zs),new k(0,ts,-Zs),new k(Zs,0,ts),new k(-Zs,0,ts),new k(ts,Zs,0),new k(-ts,Zs,0)];class G_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){uh=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=X_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(uh),e.scissorTest=!1,ou(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fo||e.mapping===ko?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),uh=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ja,format:_i,colorSpace:Ni,depthBuffer:!1},r=W_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=W_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=WR(s)),this._blurMaterial=XR(s,e,t)}return r}_compileMaterial(e){const t=new dn(this._lodPlanes[0],e);this._renderer.compile(t,lh)}_sceneToCubeUV(e,t,i,r){const a=new qn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(V_),c.toneMapping=Zi,c.autoClear=!1;const p=new em({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new dn(new _l,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(V_),m=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const x=this._cubeSize;ou(r,v*x,h>2?x:0,x,x),c.setRenderTarget(r),m&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Fo||e.mapping===ko;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=X_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new dn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ou(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,lh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=H_[(r-1)%H_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new dn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*is-1),m=s/_,g=isFinite(s)?1+Math.floor(c*m):is;g>is&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${is}`);const h=[];let v=0;for(let w=0;w<is;++w){const P=w/m,y=Math.exp(-P*P/2);h.push(y),w===0?v+=y:w<g&&(v+=2*y)}for(let w=0;w<h.length;w++)h[w]=h[w]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-i;const M=this._sizeLods[r],S=3*M*(r>x-po?r-x+po:0),E=4*(this._cubeSize-M);ou(t,S,E,3*M,2*M),l.setRenderTarget(t),l.render(f,lh)}}function WR(n){const e=[],t=[],i=[];let r=n;const s=n-po+1+B_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-po?l=B_[o-n+po-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,_=6,m=3,g=2,h=1,v=new Float32Array(m*_*p),x=new Float32Array(g*_*p),M=new Float32Array(h*_*p);for(let E=0;E<p;E++){const w=E%3*2/3-1,P=E>2?0:-1,y=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];v.set(y,m*_*E),x.set(d,g*_*E);const A=[E,E,E,E,E,E];M.set(A,h*_*E)}const S=new Hn;S.setAttribute("position",new yi(v,m)),S.setAttribute("uv",new yi(x,g)),S.setAttribute("faceIndex",new yi(M,h)),e.push(S),r>po&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function W_(n,e,t){const i=new Cs(n,e,t);return i.texture.mapping=Kc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ou(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function XR(n,e,t){const i=new Float32Array(is),r=new k(0,1,0);return new Fr({name:"SphericalGaussianBlur",defines:{n:is,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function X_(){return new Fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function $_(){return new Fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function tm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $R(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===wd||l===Ad,c=l===Fo||l===ko;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new G_(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new G_(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function jR(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function YR(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const m=p[_];for(let g=0,h=m.length;g<h;g++)e.update(m[g],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,_=f.attributes.position;let m=0;if(p!==null){const v=p.array;m=p.version;for(let x=0,M=v.length;x<M;x+=3){const S=v[x+0],E=v[x+1],w=v[x+2];d.push(S,E,E,w,w,S)}}else{const v=_.array;m=_.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const S=x+0,E=x+1,w=x+2;d.push(S,E,E,w,w,S)}}const g=new(Dy(d)?By:zy)(d,1);g.version=m;const h=s.get(f);h&&e.remove(h),s.set(f,g)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function qR(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function u(d){a=d.type,l=d.bytesPerElement}function c(d,p){n.drawElements(s,p,a,d*l),t.update(p,s,1)}function f(d,p,_){if(_===0)return;let m,g;if(r)m=n,g="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](s,p,a,d*l,_),t.update(p,s,_)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f}function KR(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function ZR(n,e){return n[0]-e[0]}function QR(n,e){return Math.abs(e[1])-Math.abs(n[1])}function JR(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Vt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=_!==void 0?_.length:0;let g=s.get(c);if(g===void 0||g.count!==m){let H=function(){U.dispose(),s.delete(c),c.removeEventListener("dispose",H)};var p=H;g!==void 0&&g.texture.dispose();const x=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let y=0;x===!0&&(y=1),M===!0&&(y=2),S===!0&&(y=3);let A=c.attributes.position.count*y,Y=1;A>e.maxTextureSize&&(Y=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const W=new Float32Array(A*Y*4*m),U=new Ny(W,A,Y,m);U.type=ls,U.needsUpdate=!0;const V=y*4;for(let Q=0;Q<m;Q++){const $=E[Q],D=w[Q],j=P[Q],G=A*Y*4*Q;for(let ae=0;ae<$.count;ae++){const z=ae*V;x===!0&&(o.fromBufferAttribute($,ae),W[G+z+0]=o.x,W[G+z+1]=o.y,W[G+z+2]=o.z,W[G+z+3]=0),M===!0&&(o.fromBufferAttribute(D,ae),W[G+z+4]=o.x,W[G+z+5]=o.y,W[G+z+6]=o.z,W[G+z+7]=0),S===!0&&(o.fromBufferAttribute(j,ae),W[G+z+8]=o.x,W[G+z+9]=o.y,W[G+z+10]=o.z,W[G+z+11]=j.itemSize===4?o.w:1)}}g={count:m,texture:U,size:new je(A,Y)},s.set(c,g),c.addEventListener("dispose",H)}let h=0;for(let x=0;x<d.length;x++)h+=d[x];const v=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const _=d===void 0?0:d.length;let m=i[c.id];if(m===void 0||m.length!==_){m=[];for(let M=0;M<_;M++)m[M]=[M,0];i[c.id]=m}for(let M=0;M<_;M++){const S=m[M];S[0]=M,S[1]=d[M]}m.sort(QR);for(let M=0;M<8;M++)M<_&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(ZR);const g=c.morphAttributes.position,h=c.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const S=a[M],E=S[0],w=S[1];E!==Number.MAX_SAFE_INTEGER&&w?(g&&c.getAttribute("morphTarget"+M)!==g[E]&&c.setAttribute("morphTarget"+M,g[E]),h&&c.getAttribute("morphNormal"+M)!==h[E]&&c.setAttribute("morphNormal"+M,h[E]),r[M]=w,v+=w):(g&&c.hasAttribute("morphTarget"+M)===!0&&c.deleteAttribute("morphTarget"+M),h&&c.hasAttribute("morphNormal"+M)===!0&&c.deleteAttribute("morphNormal"+M),r[M]=0)}const x=c.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function eP(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);return r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const $y=new vn,jy=new Ny,Yy=new Hw,qy=new Gy,j_=[],Y_=[],q_=new Float32Array(16),K_=new Float32Array(9),Z_=new Float32Array(4);function Qo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=j_[r];if(s===void 0&&(s=new Float32Array(r),j_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Jc(n,e){let t=Y_[e];t===void 0&&(t=new Int32Array(e),Y_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function iP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function rP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function sP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(bt(t,i))return;Z_.set(i),n.uniformMatrix2fv(this.addr,!1,Z_),Lt(t,i)}}function oP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(bt(t,i))return;K_.set(i),n.uniformMatrix3fv(this.addr,!1,K_),Lt(t,i)}}function aP(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(bt(t,i))return;q_.set(i),n.uniformMatrix4fv(this.addr,!1,q_),Lt(t,i)}}function lP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function uP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function cP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function fP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function hP(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function dP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function pP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function mP(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function gP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||$y,r)}function _P(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Yy,r)}function vP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||qy,r)}function xP(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||jy,r)}function yP(n){switch(n){case 5126:return tP;case 35664:return nP;case 35665:return iP;case 35666:return rP;case 35674:return sP;case 35675:return oP;case 35676:return aP;case 5124:case 35670:return lP;case 35667:case 35671:return uP;case 35668:case 35672:return cP;case 35669:case 35673:return fP;case 5125:return hP;case 36294:return dP;case 36295:return pP;case 36296:return mP;case 35678:case 36198:case 36298:case 36306:case 35682:return gP;case 35679:case 36299:case 36307:return _P;case 35680:case 36300:case 36308:case 36293:return vP;case 36289:case 36303:case 36311:case 36292:return xP}}function SP(n,e){n.uniform1fv(this.addr,e)}function MP(n,e){const t=Qo(e,this.size,2);n.uniform2fv(this.addr,t)}function EP(n,e){const t=Qo(e,this.size,3);n.uniform3fv(this.addr,t)}function TP(n,e){const t=Qo(e,this.size,4);n.uniform4fv(this.addr,t)}function wP(n,e){const t=Qo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function AP(n,e){const t=Qo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function CP(n,e){const t=Qo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function RP(n,e){n.uniform1iv(this.addr,e)}function PP(n,e){n.uniform2iv(this.addr,e)}function bP(n,e){n.uniform3iv(this.addr,e)}function LP(n,e){n.uniform4iv(this.addr,e)}function DP(n,e){n.uniform1uiv(this.addr,e)}function IP(n,e){n.uniform2uiv(this.addr,e)}function UP(n,e){n.uniform3uiv(this.addr,e)}function NP(n,e){n.uniform4uiv(this.addr,e)}function OP(n,e,t){const i=this.cache,r=e.length,s=Jc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||$y,s[o])}function FP(n,e,t){const i=this.cache,r=e.length,s=Jc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Yy,s[o])}function kP(n,e,t){const i=this.cache,r=e.length,s=Jc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||qy,s[o])}function zP(n,e,t){const i=this.cache,r=e.length,s=Jc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||jy,s[o])}function BP(n){switch(n){case 5126:return SP;case 35664:return MP;case 35665:return EP;case 35666:return TP;case 35674:return wP;case 35675:return AP;case 35676:return CP;case 5124:case 35670:return RP;case 35667:case 35671:return PP;case 35668:case 35672:return bP;case 35669:case 35673:return LP;case 5125:return DP;case 36294:return IP;case 36295:return UP;case 36296:return NP;case 35678:case 36198:case 36298:case 36306:case 35682:return OP;case 35679:case 36299:case 36307:return FP;case 35680:case 36300:case 36308:case 36293:return kP;case 36289:case 36303:case 36311:case 36292:return zP}}class VP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=yP(t.type)}}class HP{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=BP(t.type)}}class GP{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ch=/(\w+)(\])?(\[|\.)?/g;function Q_(n,e){n.seq.push(e),n.map[e.id]=e}function WP(n,e,t){const i=n.name,r=i.length;for(ch.lastIndex=0;;){const s=ch.exec(i),o=ch.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Q_(t,u===void 0?new VP(a,n,e):new HP(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new GP(a),Q_(t,f)),t=f}}}class Cu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);WP(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function J_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let XP=0;function $P(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function jP(n){switch(n){case Ni:return["Linear","( value )"];case Le:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function e0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$P(n.getShaderSource(e),o)}else return r}function YP(n,e){const t=jP(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function qP(n,e){let t;switch(e){case aw:t="Linear";break;case lw:t="Reinhard";break;case uw:t="OptimizedCineon";break;case cw:t="ACESFilmic";break;case fw:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function KP(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(_a).join(`
`)}function ZP(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function QP(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function _a(n){return n!==""}function t0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function n0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JP=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ld(n){return n.replace(JP,eb)}function eb(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ld(t)}const tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function i0(n){return n.replace(tb,nb)}function nb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function r0(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ib(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Ty?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===zT?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Gi&&(e="SHADOWMAP_TYPE_VSM"),e}function rb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Fo:case ko:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ko:e="ENVMAP_MODE_REFRACTION";break}return e}function ob(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Cy:e="ENVMAP_BLENDING_MULTIPLY";break;case sw:e="ENVMAP_BLENDING_MIX";break;case ow:e="ENVMAP_BLENDING_ADD";break}return e}function ab(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function lb(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=ib(t),u=rb(t),c=sb(t),f=ob(t),d=ab(t),p=t.isWebGL2?"":KP(t),_=ZP(s),m=r.createProgram();let g,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=[_].filter(_a).join(`
`),g.length>0&&(g+=`
`),h=[p,_].filter(_a).join(`
`),h.length>0&&(h+=`
`)):(g=[r0(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_a).join(`
`),h=[p,r0(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Zi?qP("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,YP("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_a).join(`
`)),o=Ld(o),o=t0(o,t),o=n0(o,t),a=Ld(a),a=t0(a,t),a=n0(a,t),o=i0(o),a=i0(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,h=["#define varying in",t.glslVersion===E_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===E_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const x=v+g+o,M=v+h+a,S=J_(r,r.VERTEX_SHADER,x),E=J_(r,r.FRAGMENT_SHADER,M);if(r.attachShader(m,S),r.attachShader(m,E),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m),n.debug.checkShaderErrors){const y=r.getProgramInfoLog(m).trim(),A=r.getShaderInfoLog(S).trim(),Y=r.getShaderInfoLog(E).trim();let W=!0,U=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,S,E);else{const V=e0(r,S,"vertex"),H=e0(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+V+`
`+H)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(A===""||Y==="")&&(U=!1);U&&(this.diagnostics={runnable:W,programLog:y,vertexShader:{log:A,prefix:g},fragmentShader:{log:Y,prefix:h}})}r.deleteShader(S),r.deleteShader(E);let w;this.getUniforms=function(){return w===void 0&&(w=new Cu(r,m)),w};let P;return this.getAttributes=function(){return P===void 0&&(P=QP(r,m)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.name=t.shaderName,this.id=XP++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=E,this}let ub=0;class cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new fb(e),t.set(e,i)),i}}class fb{constructor(e){this.id=ub++,this.code=e,this.usedTimes=0}}function hb(n,e,t,i,r,s,o){const a=new Fy,l=new cb,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return y===1?"uv1":y===2?"uv2":y===3?"uv3":"uv"}function g(y,A,Y,W,U){const V=W.fog,H=U.geometry,Q=y.isMeshStandardMaterial?W.environment:null,$=(y.isMeshStandardMaterial?t:e).get(y.envMap||Q),D=$&&$.mapping===Kc?$.image.height:null,j=_[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const G=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=G!==void 0?G.length:0;let z=0;H.morphAttributes.position!==void 0&&(z=1),H.morphAttributes.normal!==void 0&&(z=2),H.morphAttributes.color!==void 0&&(z=3);let I,O,q,L;if(j){const Je=Ci[j];I=Je.vertexShader,O=Je.fragmentShader}else I=y.vertexShader,O=y.fragmentShader,l.update(y),q=l.getVertexShaderID(y),L=l.getFragmentShaderID(y);const b=n.getRenderTarget(),J=U.isInstancedMesh===!0,pe=!!y.map,ie=!!y.matcap,le=!!$,fe=!!y.aoMap,he=!!y.lightMap,we=!!y.bumpMap,Ae=!!y.normalMap,Ge=!!y.displacementMap,Ce=!!y.emissiveMap,Ne=!!y.metalnessMap,Be=!!y.roughnessMap,De=y.clearcoat>0,Ct=y.iridescence>0,R=y.sheen>0,T=y.transmission>0,F=De&&!!y.clearcoatMap,ne=De&&!!y.clearcoatNormalMap,oe=De&&!!y.clearcoatRoughnessMap,ce=Ct&&!!y.iridescenceMap,ye=Ct&&!!y.iridescenceThicknessMap,ve=R&&!!y.sheenColorMap,ee=R&&!!y.sheenRoughnessMap,Se=!!y.specularMap,Ee=!!y.specularColorMap,Re=!!y.specularIntensityMap,_e=T&&!!y.transmissionMap,Me=T&&!!y.thicknessMap,We=!!y.gradientMap,Ze=!!y.alphaMap,_t=y.alphaTest>0,N=!!y.extensions,K=!!H.attributes.uv1,re=!!H.attributes.uv2,me=!!H.attributes.uv3;return{isWebGL2:c,shaderID:j,shaderName:y.type,vertexShader:I,fragmentShader:O,defines:y.defines,customVertexShaderID:q,customFragmentShaderID:L,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,instancing:J,instancingColor:J&&U.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:b===null?n.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ni,map:pe,matcap:ie,envMap:le,envMapMode:le&&$.mapping,envMapCubeUVHeight:D,aoMap:fe,lightMap:he,bumpMap:we,normalMap:Ae,displacementMap:d&&Ge,emissiveMap:Ce,normalMapObjectSpace:Ae&&y.normalMapType===Lw,normalMapTangentSpace:Ae&&y.normalMapType===bw,metalnessMap:Ne,roughnessMap:Be,clearcoat:De,clearcoatMap:F,clearcoatNormalMap:ne,clearcoatRoughnessMap:oe,iridescence:Ct,iridescenceMap:ce,iridescenceThicknessMap:ye,sheen:R,sheenColorMap:ve,sheenRoughnessMap:ee,specularMap:Se,specularColorMap:Ee,specularIntensityMap:Re,transmission:T,transmissionMap:_e,thicknessMap:Me,gradientMap:We,opaque:y.transparent===!1&&y.blending===Eo,alphaMap:Ze,alphaTest:_t,combine:y.combine,mapUv:pe&&m(y.map.channel),aoMapUv:fe&&m(y.aoMap.channel),lightMapUv:he&&m(y.lightMap.channel),bumpMapUv:we&&m(y.bumpMap.channel),normalMapUv:Ae&&m(y.normalMap.channel),displacementMapUv:Ge&&m(y.displacementMap.channel),emissiveMapUv:Ce&&m(y.emissiveMap.channel),metalnessMapUv:Ne&&m(y.metalnessMap.channel),roughnessMapUv:Be&&m(y.roughnessMap.channel),clearcoatMapUv:F&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:oe&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:ee&&m(y.sheenRoughnessMap.channel),specularMapUv:Se&&m(y.specularMap.channel),specularColorMapUv:Ee&&m(y.specularColorMap.channel),specularIntensityMapUv:Re&&m(y.specularIntensityMap.channel),transmissionMapUv:_e&&m(y.transmissionMap.channel),thicknessMapUv:Me&&m(y.thicknessMap.channel),alphaMapUv:Ze&&m(y.alphaMap.channel),vertexTangents:Ae&&!!H.attributes.tangent,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,vertexUv1s:K,vertexUv2s:re,vertexUv3s:me,pointsUvs:U.isPoints===!0&&!!H.attributes.uv&&(pe||Ze),fog:!!V,useFog:y.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:U.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:z,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:y.toneMapped?n.toneMapping:Zi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===on,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:N&&y.extensions.derivatives===!0,extensionFragDepth:N&&y.extensions.fragDepth===!0,extensionDrawBuffers:N&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:N&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function h(y){const A=[];if(y.shaderID?A.push(y.shaderID):(A.push(y.customVertexShaderID),A.push(y.customFragmentShaderID)),y.defines!==void 0)for(const Y in y.defines)A.push(Y),A.push(y.defines[Y]);return y.isRawShaderMaterial===!1&&(v(A,y),x(A,y),A.push(n.outputColorSpace)),A.push(y.customProgramCacheKey),A.join()}function v(y,A){y.push(A.precision),y.push(A.outputColorSpace),y.push(A.envMapMode),y.push(A.envMapCubeUVHeight),y.push(A.mapUv),y.push(A.alphaMapUv),y.push(A.lightMapUv),y.push(A.aoMapUv),y.push(A.bumpMapUv),y.push(A.normalMapUv),y.push(A.displacementMapUv),y.push(A.emissiveMapUv),y.push(A.metalnessMapUv),y.push(A.roughnessMapUv),y.push(A.clearcoatMapUv),y.push(A.clearcoatNormalMapUv),y.push(A.clearcoatRoughnessMapUv),y.push(A.iridescenceMapUv),y.push(A.iridescenceThicknessMapUv),y.push(A.sheenColorMapUv),y.push(A.sheenRoughnessMapUv),y.push(A.specularMapUv),y.push(A.specularColorMapUv),y.push(A.specularIntensityMapUv),y.push(A.transmissionMapUv),y.push(A.thicknessMapUv),y.push(A.combine),y.push(A.fogExp2),y.push(A.sizeAttenuation),y.push(A.morphTargetsCount),y.push(A.morphAttributeCount),y.push(A.numDirLights),y.push(A.numPointLights),y.push(A.numSpotLights),y.push(A.numSpotLightMaps),y.push(A.numHemiLights),y.push(A.numRectAreaLights),y.push(A.numDirLightShadows),y.push(A.numPointLightShadows),y.push(A.numSpotLightShadows),y.push(A.numSpotLightShadowsWithMaps),y.push(A.shadowMapType),y.push(A.toneMapping),y.push(A.numClippingPlanes),y.push(A.numClipIntersection),y.push(A.depthPacking)}function x(y,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),y.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),y.push(a.mask)}function M(y){const A=_[y.type];let Y;if(A){const W=Ci[A];Y=eA.clone(W.uniforms)}else Y=y.uniforms;return Y}function S(y,A){let Y;for(let W=0,U=u.length;W<U;W++){const V=u[W];if(V.cacheKey===A){Y=V,++Y.usedTimes;break}}return Y===void 0&&(Y=new lb(n,A,y,s),u.push(Y)),Y}function E(y){if(--y.usedTimes===0){const A=u.indexOf(y);u[A]=u[u.length-1],u.pop(),y.destroy()}}function w(y){l.remove(y)}function P(){l.dispose()}return{getParameters:g,getProgramCacheKey:h,getUniforms:M,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:P}}function db(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function pb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function s0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function o0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,_,m,g){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:m,group:g},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=m,h.group=g),e++,h}function a(f,d,p,_,m,g){const h=o(f,d,p,_,m,g);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,_,m,g){const h=o(f,d,p,_,m,g);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||pb),i.length>1&&i.sort(d||s0),r.length>1&&r.sort(d||s0)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function mb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new o0,n.set(i,[o])):r>=s.length?(o=new o0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function gb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new st};break;case"SpotLight":t={position:new k,direction:new k,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function _b(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let vb=0;function xb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function yb(n,e){const t=new gb,i=_b(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new k);const s=new k,o=new At,a=new At;function l(c,f){let d=0,p=0,_=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let m=0,g=0,h=0,v=0,x=0,M=0,S=0,E=0,w=0,P=0;c.sort(xb);const y=f===!0?Math.PI:1;for(let Y=0,W=c.length;Y<W;Y++){const U=c[Y],V=U.color,H=U.intensity,Q=U.distance,$=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)d+=V.r*H*y,p+=V.g*H*y,_+=V.b*H*y;else if(U.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(U.sh.coefficients[D],H);else if(U.isDirectionalLight){const D=t.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity*y),U.castShadow){const j=U.shadow,G=i.get(U);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,r.directionalShadow[m]=G,r.directionalShadowMap[m]=$,r.directionalShadowMatrix[m]=U.shadow.matrix,M++}r.directional[m]=D,m++}else if(U.isSpotLight){const D=t.get(U);D.position.setFromMatrixPosition(U.matrixWorld),D.color.copy(V).multiplyScalar(H*y),D.distance=Q,D.coneCos=Math.cos(U.angle),D.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),D.decay=U.decay,r.spot[h]=D;const j=U.shadow;if(U.map&&(r.spotLightMap[w]=U.map,w++,j.updateMatrices(U),U.castShadow&&P++),r.spotLightMatrix[h]=j.matrix,U.castShadow){const G=i.get(U);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,r.spotShadow[h]=G,r.spotShadowMap[h]=$,E++}h++}else if(U.isRectAreaLight){const D=t.get(U);D.color.copy(V).multiplyScalar(H),D.halfWidth.set(U.width*.5,0,0),D.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=D,v++}else if(U.isPointLight){const D=t.get(U);if(D.color.copy(U.color).multiplyScalar(U.intensity*y),D.distance=U.distance,D.decay=U.decay,U.castShadow){const j=U.shadow,G=i.get(U);G.shadowBias=j.bias,G.shadowNormalBias=j.normalBias,G.shadowRadius=j.radius,G.shadowMapSize=j.mapSize,G.shadowCameraNear=j.camera.near,G.shadowCameraFar=j.camera.far,r.pointShadow[g]=G,r.pointShadowMap[g]=$,r.pointShadowMatrix[g]=U.shadow.matrix,S++}r.point[g]=D,g++}else if(U.isHemisphereLight){const D=t.get(U);D.skyColor.copy(U.color).multiplyScalar(H*y),D.groundColor.copy(U.groundColor).multiplyScalar(H*y),r.hemi[x]=D,x++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const A=r.hash;(A.directionalLength!==m||A.pointLength!==g||A.spotLength!==h||A.rectAreaLength!==v||A.hemiLength!==x||A.numDirectionalShadows!==M||A.numPointShadows!==S||A.numSpotShadows!==E||A.numSpotMaps!==w)&&(r.directional.length=m,r.spot.length=h,r.rectArea.length=v,r.point.length=g,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=E+w-P,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=P,A.directionalLength=m,A.pointLength=g,A.spotLength=h,A.rectAreaLength=v,A.hemiLength=x,A.numDirectionalShadows=M,A.numPointShadows=S,A.numSpotShadows=E,A.numSpotMaps=w,r.version=vb++)}function u(c,f){let d=0,p=0,_=0,m=0,g=0;const h=f.matrixWorldInverse;for(let v=0,x=c.length;v<x;v++){const M=c[v];if(M.isDirectionalLight){const S=r.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),d++}else if(M.isSpotLight){const S=r.spot[_];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(h),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(h),_++}else if(M.isRectAreaLight){const S=r.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(h),a.identity(),o.copy(M.matrixWorld),o.premultiply(h),a.extractRotation(o),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(h),p++}else if(M.isHemisphereLight){const S=r.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(h),g++}}}return{setup:l,setupView:u,state:r}}function a0(n,e){const t=new yb(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function Sb(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new a0(n,e),t.set(s,[l])):o>=a.length?(l=new a0(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Mb extends gl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eb extends gl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Tb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ab(n,e,t){let i=new Wy;const r=new je,s=new je,o=new Vt,a=new Mb({depthPacking:Pw}),l=new Eb,u={},c=t.maxTextureSize,f={[Or]:_n,[_n]:Or,[on]:on},d=new Fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Tb,fragmentShader:wb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Hn;_.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new dn(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ty;let h=this.type;this.render=function(S,E,w){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;const P=n.getRenderTarget(),y=n.getActiveCubeFace(),A=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(Lr),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const W=h!==Gi&&this.type===Gi,U=h===Gi&&this.type!==Gi;for(let V=0,H=S.length;V<H;V++){const Q=S[V],$=Q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const D=$.getFrameExtents();if(r.multiply(D),s.copy($.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/D.x),r.x=s.x*D.x,$.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/D.y),r.y=s.y*D.y,$.mapSize.y=s.y)),$.map===null||W===!0||U===!0){const G=this.type!==Gi?{minFilter:sn,magFilter:sn}:{};$.map!==null&&$.map.dispose(),$.map=new Cs(r.x,r.y,G),$.map.texture.name=Q.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const j=$.getViewportCount();for(let G=0;G<j;G++){const ae=$.getViewport(G);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),Y.viewport(o),$.updateMatrices(Q,G),i=$.getFrustum(),M(E,w,$.camera,Q,this.type)}$.isPointLightShadow!==!0&&this.type===Gi&&v($,w),$.needsUpdate=!1}h=this.type,g.needsUpdate=!1,n.setRenderTarget(P,y,A)};function v(S,E){const w=e.update(m);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Cs(r.x,r.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,w,d,m,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,w,p,m,null)}function x(S,E,w,P){let y=null;const A=w.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(A!==void 0)y=A;else if(y=w.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const Y=y.uuid,W=E.uuid;let U=u[Y];U===void 0&&(U={},u[Y]=U);let V=U[W];V===void 0&&(V=y.clone(),U[W]=V),y=V}if(y.visible=E.visible,y.wireframe=E.wireframe,P===Gi?y.side=E.shadowSide!==null?E.shadowSide:E.side:y.side=E.shadowSide!==null?E.shadowSide:f[E.side],y.alphaMap=E.alphaMap,y.alphaTest=E.alphaTest,y.map=E.map,y.clipShadows=E.clipShadows,y.clippingPlanes=E.clippingPlanes,y.clipIntersection=E.clipIntersection,y.displacementMap=E.displacementMap,y.displacementScale=E.displacementScale,y.displacementBias=E.displacementBias,y.wireframeLinewidth=E.wireframeLinewidth,y.linewidth=E.linewidth,w.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const Y=n.properties.get(y);Y.light=w}return y}function M(S,E,w,P,y){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&y===Gi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,S.matrixWorld);const W=e.update(S),U=S.material;if(Array.isArray(U)){const V=W.groups;for(let H=0,Q=V.length;H<Q;H++){const $=V[H],D=U[$.materialIndex];if(D&&D.visible){const j=x(S,D,P,y);n.renderBufferDirect(w,null,W,j,S,$)}}}else if(U.visible){const V=x(S,U,P,y);n.renderBufferDirect(w,null,W,V,S,null)}}const Y=S.children;for(let W=0,U=Y.length;W<U;W++)M(Y[W],E,w,P,y)}}function Cb(n,e,t){const i=t.isWebGL2;function r(){let N=!1;const K=new Vt;let re=null;const me=new Vt(0,0,0,0);return{setMask:function(xe){re!==xe&&!N&&(n.colorMask(xe,xe,xe,xe),re=xe)},setLocked:function(xe){N=xe},setClear:function(xe,Je,et,Wt,ar){ar===!0&&(xe*=Wt,Je*=Wt,et*=Wt),K.set(xe,Je,et,Wt),me.equals(K)===!1&&(n.clearColor(xe,Je,et,Wt),me.copy(K))},reset:function(){N=!1,re=null,me.set(-1,0,0,0)}}}function s(){let N=!1,K=null,re=null,me=null;return{setTest:function(xe){xe?b(n.DEPTH_TEST):J(n.DEPTH_TEST)},setMask:function(xe){K!==xe&&!N&&(n.depthMask(xe),K=xe)},setFunc:function(xe){if(re!==xe){switch(xe){case QT:n.depthFunc(n.NEVER);break;case JT:n.depthFunc(n.ALWAYS);break;case ew:n.depthFunc(n.LESS);break;case Td:n.depthFunc(n.LEQUAL);break;case tw:n.depthFunc(n.EQUAL);break;case nw:n.depthFunc(n.GEQUAL);break;case iw:n.depthFunc(n.GREATER);break;case rw:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}re=xe}},setLocked:function(xe){N=xe},setClear:function(xe){me!==xe&&(n.clearDepth(xe),me=xe)},reset:function(){N=!1,K=null,re=null,me=null}}}function o(){let N=!1,K=null,re=null,me=null,xe=null,Je=null,et=null,Wt=null,ar=null;return{setTest:function(vt){N||(vt?b(n.STENCIL_TEST):J(n.STENCIL_TEST))},setMask:function(vt){K!==vt&&!N&&(n.stencilMask(vt),K=vt)},setFunc:function(vt,Gn,Mi){(re!==vt||me!==Gn||xe!==Mi)&&(n.stencilFunc(vt,Gn,Mi),re=vt,me=Gn,xe=Mi)},setOp:function(vt,Gn,Mi){(Je!==vt||et!==Gn||Wt!==Mi)&&(n.stencilOp(vt,Gn,Mi),Je=vt,et=Gn,Wt=Mi)},setLocked:function(vt){N=vt},setClear:function(vt){ar!==vt&&(n.clearStencil(vt),ar=vt)},reset:function(){N=!1,K=null,re=null,me=null,xe=null,Je=null,et=null,Wt=null,ar=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,m=[],g=null,h=!1,v=null,x=null,M=null,S=null,E=null,w=null,P=null,y=!1,A=null,Y=null,W=null,U=null,V=null;const H=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,$=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(D)[1]),Q=$>=1):D.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),Q=$>=2);let j=null,G={};const ae=n.getParameter(n.SCISSOR_BOX),z=n.getParameter(n.VIEWPORT),I=new Vt().fromArray(ae),O=new Vt().fromArray(z);function q(N,K,re,me){const xe=new Uint8Array(4),Je=n.createTexture();n.bindTexture(N,Je),n.texParameteri(N,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(N,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<re;et++)i&&(N===n.TEXTURE_3D||N===n.TEXTURE_2D_ARRAY)?n.texImage3D(K,0,n.RGBA,1,1,me,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(K+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return Je}const L={};L[n.TEXTURE_2D]=q(n.TEXTURE_2D,n.TEXTURE_2D,1),L[n.TEXTURE_CUBE_MAP]=q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(L[n.TEXTURE_2D_ARRAY]=q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),L[n.TEXTURE_3D]=q(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),b(n.DEPTH_TEST),l.setFunc(Td),Ge(!1),Ce($g),b(n.CULL_FACE),we(Lr);function b(N){d[N]!==!0&&(n.enable(N),d[N]=!0)}function J(N){d[N]!==!1&&(n.disable(N),d[N]=!1)}function pe(N,K){return p[N]!==K?(n.bindFramebuffer(N,K),p[N]=K,i&&(N===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=K),N===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=K)),!0):!1}function ie(N,K){let re=m,me=!1;if(N)if(re=_.get(K),re===void 0&&(re=[],_.set(K,re)),N.isWebGLMultipleRenderTargets){const xe=N.texture;if(re.length!==xe.length||re[0]!==n.COLOR_ATTACHMENT0){for(let Je=0,et=xe.length;Je<et;Je++)re[Je]=n.COLOR_ATTACHMENT0+Je;re.length=xe.length,me=!0}}else re[0]!==n.COLOR_ATTACHMENT0&&(re[0]=n.COLOR_ATTACHMENT0,me=!0);else re[0]!==n.BACK&&(re[0]=n.BACK,me=!0);me&&(t.isWebGL2?n.drawBuffers(re):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(re))}function le(N){return g!==N?(n.useProgram(N),g=N,!0):!1}const fe={[Js]:n.FUNC_ADD,[VT]:n.FUNC_SUBTRACT,[HT]:n.FUNC_REVERSE_SUBTRACT};if(i)fe[Kg]=n.MIN,fe[Zg]=n.MAX;else{const N=e.get("EXT_blend_minmax");N!==null&&(fe[Kg]=N.MIN_EXT,fe[Zg]=N.MAX_EXT)}const he={[GT]:n.ZERO,[WT]:n.ONE,[XT]:n.SRC_COLOR,[wy]:n.SRC_ALPHA,[ZT]:n.SRC_ALPHA_SATURATE,[qT]:n.DST_COLOR,[jT]:n.DST_ALPHA,[$T]:n.ONE_MINUS_SRC_COLOR,[Ay]:n.ONE_MINUS_SRC_ALPHA,[KT]:n.ONE_MINUS_DST_COLOR,[YT]:n.ONE_MINUS_DST_ALPHA};function we(N,K,re,me,xe,Je,et,Wt){if(N===Lr){h===!0&&(J(n.BLEND),h=!1);return}if(h===!1&&(b(n.BLEND),h=!0),N!==BT){if(N!==v||Wt!==y){if((x!==Js||E!==Js)&&(n.blendEquation(n.FUNC_ADD),x=Js,E=Js),Wt)switch(N){case Eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jg:n.blendFunc(n.ONE,n.ONE);break;case Yg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Yg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}M=null,S=null,w=null,P=null,v=N,y=Wt}return}xe=xe||K,Je=Je||re,et=et||me,(K!==x||xe!==E)&&(n.blendEquationSeparate(fe[K],fe[xe]),x=K,E=xe),(re!==M||me!==S||Je!==w||et!==P)&&(n.blendFuncSeparate(he[re],he[me],he[Je],he[et]),M=re,S=me,w=Je,P=et),v=N,y=!1}function Ae(N,K){N.side===on?J(n.CULL_FACE):b(n.CULL_FACE);let re=N.side===_n;K&&(re=!re),Ge(re),N.blending===Eo&&N.transparent===!1?we(Lr):we(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),l.setFunc(N.depthFunc),l.setTest(N.depthTest),l.setMask(N.depthWrite),a.setMask(N.colorWrite);const me=N.stencilWrite;u.setTest(me),me&&(u.setMask(N.stencilWriteMask),u.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),u.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Be(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?b(n.SAMPLE_ALPHA_TO_COVERAGE):J(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(N){A!==N&&(N?n.frontFace(n.CW):n.frontFace(n.CCW),A=N)}function Ce(N){N!==FT?(b(n.CULL_FACE),N!==Y&&(N===$g?n.cullFace(n.BACK):N===kT?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):J(n.CULL_FACE),Y=N}function Ne(N){N!==W&&(Q&&n.lineWidth(N),W=N)}function Be(N,K,re){N?(b(n.POLYGON_OFFSET_FILL),(U!==K||V!==re)&&(n.polygonOffset(K,re),U=K,V=re)):J(n.POLYGON_OFFSET_FILL)}function De(N){N?b(n.SCISSOR_TEST):J(n.SCISSOR_TEST)}function Ct(N){N===void 0&&(N=n.TEXTURE0+H-1),j!==N&&(n.activeTexture(N),j=N)}function R(N,K,re){re===void 0&&(j===null?re=n.TEXTURE0+H-1:re=j);let me=G[re];me===void 0&&(me={type:void 0,texture:void 0},G[re]=me),(me.type!==N||me.texture!==K)&&(j!==re&&(n.activeTexture(re),j=re),n.bindTexture(N,K||L[N]),me.type=N,me.texture=K)}function T(){const N=G[j];N!==void 0&&N.type!==void 0&&(n.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function F(){try{n.compressedTexImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ne(){try{n.compressedTexImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{n.texSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{n.texStorage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{n.texImage2D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(N){I.equals(N)===!1&&(n.scissor(N.x,N.y,N.z,N.w),I.copy(N))}function Me(N){O.equals(N)===!1&&(n.viewport(N.x,N.y,N.z,N.w),O.copy(N))}function We(N,K){let re=f.get(K);re===void 0&&(re=new WeakMap,f.set(K,re));let me=re.get(N);me===void 0&&(me=n.getUniformBlockIndex(K,N.name),re.set(N,me))}function Ze(N,K){const me=f.get(K).get(N);c.get(K)!==me&&(n.uniformBlockBinding(K,me,N.__bindingPointIndex),c.set(K,me))}function _t(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},j=null,G={},p={},_=new WeakMap,m=[],g=null,h=!1,v=null,x=null,M=null,S=null,E=null,w=null,P=null,y=!1,A=null,Y=null,W=null,U=null,V=null,I.set(0,0,n.canvas.width,n.canvas.height),O.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:b,disable:J,bindFramebuffer:pe,drawBuffers:ie,useProgram:le,setBlending:we,setMaterial:Ae,setFlipSided:Ge,setCullFace:Ce,setLineWidth:Ne,setPolygonOffset:Be,setScissorTest:De,activeTexture:Ct,bindTexture:R,unbindTexture:T,compressedTexImage2D:F,compressedTexImage3D:ne,texImage2D:Ee,texImage3D:Re,updateUBOMapping:We,uniformBlockBinding:Ze,texStorage2D:ee,texStorage3D:Se,texSubImage2D:oe,texSubImage3D:ce,compressedTexSubImage2D:ye,compressedTexSubImage3D:ve,scissor:_e,viewport:Me,reset:_t}}function Rb(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let m;const g=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,T){return h?new OffscreenCanvas(R,T):el("canvas")}function x(R,T,F,ne){let oe=1;if((R.width>ne||R.height>ne)&&(oe=ne/Math.max(R.width,R.height)),oe<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ce=T?Uw:Math.floor,ye=ce(oe*R.width),ve=ce(oe*R.height);m===void 0&&(m=v(ye,ve));const ee=F?v(ye,ve):m;return ee.width=ye,ee.height=ve,ee.getContext("2d").drawImage(R,0,0,ye,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ye+"x"+ve+")."),ee}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function M(R){return T_(R.width)&&T_(R.height)}function S(R){return a?!1:R.wrapS!==gi||R.wrapT!==gi||R.minFilter!==sn&&R.minFilter!==Yn}function E(R,T){return R.generateMipmaps&&T&&R.minFilter!==sn&&R.minFilter!==Yn}function w(R){n.generateMipmap(R)}function P(R,T,F,ne,oe=!1){if(a===!1)return T;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ce=T;return T===n.RED&&(F===n.FLOAT&&(ce=n.R32F),F===n.HALF_FLOAT&&(ce=n.R16F),F===n.UNSIGNED_BYTE&&(ce=n.R8)),T===n.RG&&(F===n.FLOAT&&(ce=n.RG32F),F===n.HALF_FLOAT&&(ce=n.RG16F),F===n.UNSIGNED_BYTE&&(ce=n.RG8)),T===n.RGBA&&(F===n.FLOAT&&(ce=n.RGBA32F),F===n.HALF_FLOAT&&(ce=n.RGBA16F),F===n.UNSIGNED_BYTE&&(ce=ne===Le&&oe===!1?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)),(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function y(R,T,F){return E(R,F)===!0||R.isFramebufferTexture&&R.minFilter!==sn&&R.minFilter!==Yn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function A(R){return R===sn||R===Qg||R===Of?n.NEAREST:n.LINEAR}function Y(R){const T=R.target;T.removeEventListener("dispose",Y),U(T),T.isVideoTexture&&_.delete(T)}function W(R){const T=R.target;T.removeEventListener("dispose",W),H(T)}function U(R){const T=i.get(R);if(T.__webglInit===void 0)return;const F=R.source,ne=g.get(F);if(ne){const oe=ne[T.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&V(R),Object.keys(ne).length===0&&g.delete(F)}i.remove(R)}function V(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const F=R.source,ne=g.get(F);delete ne[T.__cacheKey],o.memory.textures--}function H(R){const T=R.texture,F=i.get(R),ne=i.get(T);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)n.deleteFramebuffer(F.__webglFramebuffer[oe]),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[oe]);else{if(n.deleteFramebuffer(F.__webglFramebuffer),F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let oe=0;oe<F.__webglColorRenderbuffer.length;oe++)F.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[oe]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let oe=0,ce=T.length;oe<ce;oe++){const ye=i.get(T[oe]);ye.__webglTexture&&(n.deleteTexture(ye.__webglTexture),o.memory.textures--),i.remove(T[oe])}i.remove(T),i.remove(R)}let Q=0;function $(){Q=0}function D(){const R=Q;return R>=l&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+l),Q+=1,R}function j(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function G(R,T){const F=i.get(R);if(R.isVideoTexture&&De(R),R.isRenderTargetTexture===!1&&R.version>0&&F.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(F,R,T);return}}t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+T)}function ae(R,T){const F=i.get(R);if(R.version>0&&F.__version!==R.version){J(F,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+T)}function z(R,T){const F=i.get(R);if(R.version>0&&F.__version!==R.version){J(F,R,T);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+T)}function I(R,T){const F=i.get(R);if(R.version>0&&F.__version!==R.version){pe(F,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+T)}const O={[Cd]:n.REPEAT,[gi]:n.CLAMP_TO_EDGE,[Rd]:n.MIRRORED_REPEAT},q={[sn]:n.NEAREST,[Qg]:n.NEAREST_MIPMAP_NEAREST,[Of]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[hw]:n.LINEAR_MIPMAP_NEAREST,[Qa]:n.LINEAR_MIPMAP_LINEAR};function L(R,T,F){if(F?(n.texParameteri(R,n.TEXTURE_WRAP_S,O[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,O[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,O[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,q[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,q[T.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==gi||T.wrapT!==gi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,A(T.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==sn&&T.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===sn||T.minFilter!==Of&&T.minFilter!==Qa||T.type===ls&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Ja&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function b(R,T){let F=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",Y));const ne=T.source;let oe=g.get(ne);oe===void 0&&(oe={},g.set(ne,oe));const ce=j(T);if(ce!==R.__cacheKey){oe[ce]===void 0&&(oe[ce]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),oe[ce].usedTimes++;const ye=oe[R.__cacheKey];ye!==void 0&&(oe[R.__cacheKey].usedTimes--,ye.usedTimes===0&&V(T)),R.__cacheKey=ce,R.__webglTexture=oe[ce].texture}return F}function J(R,T,F){let ne=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=n.TEXTURE_3D);const oe=b(R,T),ce=T.source;t.bindTexture(ne,R.__webglTexture,n.TEXTURE0+F);const ye=i.get(ce);if(ce.version!==ye.__version||oe===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ve=S(T)&&M(T.image)===!1;let ee=x(T.image,ve,!1,c);ee=Ct(T,ee);const Se=M(ee)||a,Ee=s.convert(T.format,T.colorSpace);let Re=s.convert(T.type),_e=P(T.internalFormat,Ee,Re,T.colorSpace);L(ne,T,Se);let Me;const We=T.mipmaps,Ze=a&&T.isVideoTexture!==!0,_t=ye.__version===void 0||oe===!0,N=y(T,ee,Se);if(T.isDepthTexture)_e=n.DEPTH_COMPONENT,a?T.type===ls?_e=n.DEPTH_COMPONENT32F:T.type===as?_e=n.DEPTH_COMPONENT24:T.type===To?_e=n.DEPTH24_STENCIL8:_e=n.DEPTH_COMPONENT16:T.type===ls&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ds&&_e===n.DEPTH_COMPONENT&&T.type!==Py&&T.type!==as&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=as,Re=s.convert(T.type)),T.format===zo&&_e===n.DEPTH_COMPONENT&&(_e=n.DEPTH_STENCIL,T.type!==To&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=To,Re=s.convert(T.type))),_t&&(Ze?t.texStorage2D(n.TEXTURE_2D,1,_e,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,_e,ee.width,ee.height,0,Ee,Re,null));else if(T.isDataTexture)if(We.length>0&&Se){Ze&&_t&&t.texStorage2D(n.TEXTURE_2D,N,_e,We[0].width,We[0].height);for(let K=0,re=We.length;K<re;K++)Me=We[K],Ze?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,Ee,Re,Me.data):t.texImage2D(n.TEXTURE_2D,K,_e,Me.width,Me.height,0,Ee,Re,Me.data);T.generateMipmaps=!1}else Ze?(_t&&t.texStorage2D(n.TEXTURE_2D,N,_e,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee.width,ee.height,Ee,Re,ee.data)):t.texImage2D(n.TEXTURE_2D,0,_e,ee.width,ee.height,0,Ee,Re,ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ze&&_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,N,_e,We[0].width,We[0].height,ee.depth);for(let K=0,re=We.length;K<re;K++)Me=We[K],T.format!==_i?Ee!==null?Ze?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ee.depth,Ee,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,_e,Me.width,Me.height,ee.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,ee.depth,Ee,Re,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,K,_e,Me.width,Me.height,ee.depth,0,Ee,Re,Me.data)}else{Ze&&_t&&t.texStorage2D(n.TEXTURE_2D,N,_e,We[0].width,We[0].height);for(let K=0,re=We.length;K<re;K++)Me=We[K],T.format!==_i?Ee!==null?Ze?t.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,Ee,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,K,_e,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Me.width,Me.height,Ee,Re,Me.data):t.texImage2D(n.TEXTURE_2D,K,_e,Me.width,Me.height,0,Ee,Re,Me.data)}else if(T.isDataArrayTexture)Ze?(_t&&t.texStorage3D(n.TEXTURE_2D_ARRAY,N,_e,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,Ee,Re,ee.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,ee.width,ee.height,ee.depth,0,Ee,Re,ee.data);else if(T.isData3DTexture)Ze?(_t&&t.texStorage3D(n.TEXTURE_3D,N,_e,ee.width,ee.height,ee.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,Ee,Re,ee.data)):t.texImage3D(n.TEXTURE_3D,0,_e,ee.width,ee.height,ee.depth,0,Ee,Re,ee.data);else if(T.isFramebufferTexture){if(_t)if(Ze)t.texStorage2D(n.TEXTURE_2D,N,_e,ee.width,ee.height);else{let K=ee.width,re=ee.height;for(let me=0;me<N;me++)t.texImage2D(n.TEXTURE_2D,me,_e,K,re,0,Ee,Re,null),K>>=1,re>>=1}}else if(We.length>0&&Se){Ze&&_t&&t.texStorage2D(n.TEXTURE_2D,N,_e,We[0].width,We[0].height);for(let K=0,re=We.length;K<re;K++)Me=We[K],Ze?t.texSubImage2D(n.TEXTURE_2D,K,0,0,Ee,Re,Me):t.texImage2D(n.TEXTURE_2D,K,_e,Ee,Re,Me);T.generateMipmaps=!1}else Ze?(_t&&t.texStorage2D(n.TEXTURE_2D,N,_e,ee.width,ee.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ee,Re,ee)):t.texImage2D(n.TEXTURE_2D,0,_e,Ee,Re,ee);E(T,Se)&&w(ne),ye.__version=ce.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function pe(R,T,F){if(T.image.length!==6)return;const ne=b(R,T),oe=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+F);const ce=i.get(oe);if(oe.version!==ce.__version||ne===!0){t.activeTexture(n.TEXTURE0+F),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ye=T.isCompressedTexture||T.image[0].isCompressedTexture,ve=T.image[0]&&T.image[0].isDataTexture,ee=[];for(let K=0;K<6;K++)!ye&&!ve?ee[K]=x(T.image[K],!1,!0,u):ee[K]=ve?T.image[K].image:T.image[K],ee[K]=Ct(T,ee[K]);const Se=ee[0],Ee=M(Se)||a,Re=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),Me=P(T.internalFormat,Re,_e,T.colorSpace),We=a&&T.isVideoTexture!==!0,Ze=ce.__version===void 0||ne===!0;let _t=y(T,Se,Ee);L(n.TEXTURE_CUBE_MAP,T,Ee);let N;if(ye){We&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Me,Se.width,Se.height);for(let K=0;K<6;K++){N=ee[K].mipmaps;for(let re=0;re<N.length;re++){const me=N[re];T.format!==_i?Re!==null?We?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,me.width,me.height,Re,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Me,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,0,0,me.width,me.height,Re,_e,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re,Me,me.width,me.height,0,Re,_e,me.data)}}}else{N=T.mipmaps,We&&Ze&&(N.length>0&&_t++,t.texStorage2D(n.TEXTURE_CUBE_MAP,_t,Me,ee[0].width,ee[0].height));for(let K=0;K<6;K++)if(ve){We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ee[K].width,ee[K].height,Re,_e,ee[K].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,ee[K].width,ee[K].height,0,Re,_e,ee[K].data);for(let re=0;re<N.length;re++){const xe=N[re].image[K].image;We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,xe.width,xe.height,Re,_e,xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Me,xe.width,xe.height,0,Re,_e,xe.data)}}else{We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Re,_e,ee[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Me,Re,_e,ee[K]);for(let re=0;re<N.length;re++){const me=N[re];We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,0,0,Re,_e,me.image[K]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+K,re+1,Me,Re,_e,me.image[K])}}}E(T,Ee)&&w(n.TEXTURE_CUBE_MAP),ce.__version=oe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ie(R,T,F,ne,oe){const ce=s.convert(F.format,F.colorSpace),ye=s.convert(F.type),ve=P(F.internalFormat,ce,ye,F.colorSpace);i.get(T).__hasExternalTextures||(oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,ve,T.width,T.height,T.depth,0,ce,ye,null):t.texImage2D(oe,0,ve,T.width,T.height,0,ce,ye,null)),t.bindFramebuffer(n.FRAMEBUFFER,R),Be(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,oe,i.get(F).__webglTexture,0,Ne(T)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,oe,i.get(F).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function le(R,T,F){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let ne=n.DEPTH_COMPONENT16;if(F||Be(T)){const oe=T.depthTexture;oe&&oe.isDepthTexture&&(oe.type===ls?ne=n.DEPTH_COMPONENT32F:oe.type===as&&(ne=n.DEPTH_COMPONENT24));const ce=Ne(T);Be(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,ne,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,ne,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const ne=Ne(T);F&&Be(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,T.width,T.height):Be(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ne=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let oe=0;oe<ne.length;oe++){const ce=ne[oe],ye=s.convert(ce.format,ce.colorSpace),ve=s.convert(ce.type),ee=P(ce.internalFormat,ye,ve,ce.colorSpace),Se=Ne(T);F&&Be(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ee,T.width,T.height):Be(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ee,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,ee,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,oe=Ne(T);if(T.depthTexture.format===ds)Be(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(T.depthTexture.format===zo)Be(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function he(R){const T=i.get(R),F=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");fe(T.__webglFramebuffer,R)}else if(F){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]=n.createRenderbuffer(),le(T.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),le(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(R,T,F){const ne=i.get(R);T!==void 0&&ie(ne.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),F!==void 0&&he(R)}function Ae(R){const T=R.texture,F=i.get(R),ne=i.get(T);R.addEventListener("dispose",W),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=T.version,o.memory.textures++);const oe=R.isWebGLCubeRenderTarget===!0,ce=R.isWebGLMultipleRenderTargets===!0,ye=M(R)||a;if(oe){F.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)F.__webglFramebuffer[ve]=n.createFramebuffer()}else{if(F.__webglFramebuffer=n.createFramebuffer(),ce)if(r.drawBuffers){const ve=R.texture;for(let ee=0,Se=ve.length;ee<Se;ee++){const Ee=i.get(ve[ee]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&Be(R)===!1){const ve=ce?T:[T];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ee=0;ee<ve.length;ee++){const Se=ve[ee];F.__webglColorRenderbuffer[ee]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ee]);const Ee=s.convert(Se.format,Se.colorSpace),Re=s.convert(Se.type),_e=P(Se.internalFormat,Ee,Re,Se.colorSpace,R.isXRRenderTarget===!0),Me=Ne(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,_e,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ee,n.RENDERBUFFER,F.__webglColorRenderbuffer[ee])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),le(F.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),L(n.TEXTURE_CUBE_MAP,T,ye);for(let ve=0;ve<6;ve++)ie(F.__webglFramebuffer[ve],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ve);E(T,ye)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ce){const ve=R.texture;for(let ee=0,Se=ve.length;ee<Se;ee++){const Ee=ve[ee],Re=i.get(Ee);t.bindTexture(n.TEXTURE_2D,Re.__webglTexture),L(n.TEXTURE_2D,Ee,ye),ie(F.__webglFramebuffer,R,Ee,n.COLOR_ATTACHMENT0+ee,n.TEXTURE_2D),E(Ee,ye)&&w(n.TEXTURE_2D)}t.unbindTexture()}else{let ve=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ve=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ve,ne.__webglTexture),L(ve,T,ye),ie(F.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,ve),E(T,ye)&&w(ve),t.unbindTexture()}R.depthBuffer&&he(R)}function Ge(R){const T=M(R)||a,F=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,oe=F.length;ne<oe;ne++){const ce=F[ne];if(E(ce,T)){const ye=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(ce).__webglTexture;t.bindTexture(ye,ve),w(ye),t.unbindTexture()}}}function Ce(R){if(a&&R.samples>0&&Be(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],F=R.width,ne=R.height;let oe=n.COLOR_BUFFER_BIT;const ce=[],ye=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(R),ee=R.isWebGLMultipleRenderTargets===!0;if(ee)for(let Se=0;Se<T.length;Se++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Se=0;Se<T.length;Se++){ce.push(n.COLOR_ATTACHMENT0+Se),R.depthBuffer&&ce.push(ye);const Ee=ve.__ignoreDepthValues!==void 0?ve.__ignoreDepthValues:!1;if(Ee===!1&&(R.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),ee&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Se]),Ee===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ye]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ye])),ee){const Re=i.get(T[Se]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Re,0)}n.blitFramebuffer(0,0,F,ne,0,0,F,ne,oe,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ce)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ee)for(let Se=0;Se<T.length;Se++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,ve.__webglColorRenderbuffer[Se]);const Ee=i.get(T[Se]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}}function Ne(R){return Math.min(f,R.samples)}function Be(R){const T=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function De(R){const T=o.render.frame;_.get(R)!==T&&(_.set(R,T),R.update())}function Ct(R,T){const F=R.colorSpace,ne=R.format,oe=R.type;return R.isCompressedTexture===!0||R.format===Pd||F!==Ni&&F!==ms&&(F===Le?a===!1?e.has("EXT_sRGB")===!0&&ne===_i?(R.format=Pd,R.minFilter=Yn,R.generateMipmaps=!1):T=Iy.sRGBToLinear(T):(ne!==_i||oe!==As)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),T}this.allocateTextureUnit=D,this.resetTextureUnits=$,this.setTexture2D=G,this.setTexture2DArray=ae,this.setTexture3D=z,this.setTextureCube=I,this.rebindTextures=we,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ce,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Be}function Pb(n,e,t){const i=t.isWebGL2;function r(s,o=ms){let a;if(s===As)return n.UNSIGNED_BYTE;if(s===gw)return n.UNSIGNED_SHORT_4_4_4_4;if(s===_w)return n.UNSIGNED_SHORT_5_5_5_1;if(s===dw)return n.BYTE;if(s===pw)return n.SHORT;if(s===Py)return n.UNSIGNED_SHORT;if(s===mw)return n.INT;if(s===as)return n.UNSIGNED_INT;if(s===ls)return n.FLOAT;if(s===Ja)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===vw)return n.ALPHA;if(s===_i)return n.RGBA;if(s===xw)return n.LUMINANCE;if(s===yw)return n.LUMINANCE_ALPHA;if(s===ds)return n.DEPTH_COMPONENT;if(s===zo)return n.DEPTH_STENCIL;if(s===Pd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Sw)return n.RED;if(s===Mw)return n.RED_INTEGER;if(s===Ew)return n.RG;if(s===Tw)return n.RG_INTEGER;if(s===ww)return n.RGBA_INTEGER;if(s===Ff||s===kf||s===zf||s===Bf)if(o===Le)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Ff)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===kf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===zf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Bf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Ff)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===kf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===zf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Bf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jg||s===e_||s===t_||s===n_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Jg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===e_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===t_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===n_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Aw)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===i_||s===r_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===i_)return o===Le?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===r_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===s_||s===o_||s===a_||s===l_||s===u_||s===c_||s===f_||s===h_||s===d_||s===p_||s===m_||s===g_||s===__||s===v_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===s_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===o_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===a_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===l_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===u_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===c_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===f_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===h_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===d_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===p_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===m_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===g_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===__)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===v_)return o===Le?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Vf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Vf)return o===Le?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Cw||s===x_||s===y_||s===S_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Vf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===x_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===y_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===S_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===To?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class bb extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class us extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Lb={type:"move"};class fh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new us,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new us,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new us,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),h=this._getHandJoint(u,m);g!==null&&(h.matrix.fromArray(g.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=g.radius),h.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Lb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new us;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Db extends vn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ds,c!==ds&&c!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ds&&(i=as),i===void 0&&c===zo&&(i=To),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:sn,this.minFilter=l!==void 0?l:sn,this.flipY=!1,this.generateMipmaps=!1}}class Ib extends Is{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,_=null;const m=t.getContextAttributes();let g=null,h=null;const v=[],x=[],M=new Set,S=new Map,E=new qn;E.layers.enable(1),E.viewport=new Vt;const w=new qn;w.layers.enable(2),w.viewport=new Vt;const P=[E,w],y=new bb;y.layers.enable(1),y.layers.enable(2);let A=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let O=v[I];return O===void 0&&(O=new fh,v[I]=O),O.getTargetRaySpace()},this.getControllerGrip=function(I){let O=v[I];return O===void 0&&(O=new fh,v[I]=O),O.getGripSpace()},this.getHand=function(I){let O=v[I];return O===void 0&&(O=new fh,v[I]=O),O.getHandSpace()};function W(I){const O=x.indexOf(I.inputSource);if(O===-1)return;const q=v[O];q!==void 0&&(q.update(I.inputSource,I.frame,u||o),q.dispatchEvent({type:I.type,data:I.inputSource}))}function U(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",V);for(let I=0;I<v.length;I++){const O=x[I];O!==null&&(x[I]=null,v[I].disconnect(O))}A=null,Y=null,e.setRenderTarget(g),p=null,d=null,f=null,r=null,h=null,z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){s=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(I){u=I},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(I){if(r=I,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",U),r.addEventListener("inputsourceschange",V),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const O={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,O),r.updateRenderState({baseLayer:p}),h=new Cs(p.framebufferWidth,p.framebufferHeight,{format:_i,type:As,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let O=null,q=null,L=null;m.depth&&(L=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,O=m.stencil?zo:ds,q=m.stencil?To:as);const b={colorFormat:t.RGBA8,depthFormat:L,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(b),r.updateRenderState({layers:[d]}),h=new Cs(d.textureWidth,d.textureHeight,{format:_i,type:As,depthTexture:new Db(d.textureWidth,d.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,O),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const J=e.properties.get(h);J.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),z.setContext(r),z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function V(I){for(let O=0;O<I.removed.length;O++){const q=I.removed[O],L=x.indexOf(q);L>=0&&(x[L]=null,v[L].disconnect(q))}for(let O=0;O<I.added.length;O++){const q=I.added[O];let L=x.indexOf(q);if(L===-1){for(let J=0;J<v.length;J++)if(J>=x.length){x.push(q),L=J;break}else if(x[J]===null){x[J]=q,L=J;break}if(L===-1)break}const b=v[L];b&&b.connect(q)}}const H=new k,Q=new k;function $(I,O,q){H.setFromMatrixPosition(O.matrixWorld),Q.setFromMatrixPosition(q.matrixWorld);const L=H.distanceTo(Q),b=O.projectionMatrix.elements,J=q.projectionMatrix.elements,pe=b[14]/(b[10]-1),ie=b[14]/(b[10]+1),le=(b[9]+1)/b[5],fe=(b[9]-1)/b[5],he=(b[8]-1)/b[0],we=(J[8]+1)/J[0],Ae=pe*he,Ge=pe*we,Ce=L/(-he+we),Ne=Ce*-he;O.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ne),I.translateZ(Ce),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const Be=pe+Ce,De=ie+Ce,Ct=Ae-Ne,R=Ge+(L-Ne),T=le*ie/De*Be,F=fe*ie/De*Be;I.projectionMatrix.makePerspective(Ct,R,T,F,Be,De),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function D(I,O){O===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(O.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(r===null)return;y.near=w.near=E.near=I.near,y.far=w.far=E.far=I.far,(A!==y.near||Y!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,Y=y.far);const O=I.parent,q=y.cameras;D(y,O);for(let L=0;L<q.length;L++)D(q[L],O);q.length===2?$(y,E,w):y.projectionMatrix.copy(E.projectionMatrix),j(I,y,O)};function j(I,O,q){q===null?I.matrix.copy(O.matrixWorld):(I.matrix.copy(q.matrixWorld),I.matrix.invert(),I.matrix.multiply(O.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0);const L=I.children;for(let b=0,J=L.length;b<J;b++)L[b].updateMatrixWorld(!0);I.projectionMatrix.copy(O.projectionMatrix),I.projectionMatrixInverse.copy(O.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=bd*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(I){l=I,d!==null&&(d.fixedFoveation=I),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=I)},this.getPlanes=function(){return M};let G=null;function ae(I,O){if(c=O.getViewerPose(u||o),_=O,c!==null){const q=c.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let L=!1;q.length!==y.cameras.length&&(y.cameras.length=0,L=!0);for(let b=0;b<q.length;b++){const J=q[b];let pe=null;if(p!==null)pe=p.getViewport(J);else{const le=f.getViewSubImage(d,J);pe=le.viewport,b===0&&(e.setRenderTargetTextures(h,le.colorTexture,d.ignoreDepthValues?void 0:le.depthStencilTexture),e.setRenderTarget(h))}let ie=P[b];ie===void 0&&(ie=new qn,ie.layers.enable(b),ie.viewport=new Vt,P[b]=ie),ie.matrix.fromArray(J.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(J.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(pe.x,pe.y,pe.width,pe.height),b===0&&(y.matrix.copy(ie.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),L===!0&&y.cameras.push(ie)}}for(let q=0;q<v.length;q++){const L=x[q],b=v[q];L!==null&&b!==void 0&&b.update(L,O,u||o)}if(G&&G(I,O),O.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:O.detectedPlanes});let q=null;for(const L of M)O.detectedPlanes.has(L)||(q===null&&(q=[]),q.push(L));if(q!==null)for(const L of q)M.delete(L),S.delete(L),i.dispatchEvent({type:"planeremoved",data:L});for(const L of O.detectedPlanes)if(!M.has(L))M.add(L),S.set(L,O.lastChangedTime),i.dispatchEvent({type:"planeadded",data:L});else{const b=S.get(L);L.lastChangedTime>b&&(S.set(L,L.lastChangedTime),i.dispatchEvent({type:"planechanged",data:L}))}}_=null}const z=new Xy;z.setAnimationLoop(ae),this.setAnimationLoop=function(I){G=I},this.dispose=function(){}}}function Ub(n,e){function t(g,h){g.matrixAutoUpdate===!0&&g.updateMatrix(),h.value.copy(g.matrix)}function i(g,h){h.color.getRGB(g.fogColor.value,Vy(n)),h.isFog?(g.fogNear.value=h.near,g.fogFar.value=h.far):h.isFogExp2&&(g.fogDensity.value=h.density)}function r(g,h,v,x,M){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(g,h):h.isMeshToonMaterial?(s(g,h),f(g,h)):h.isMeshPhongMaterial?(s(g,h),c(g,h)):h.isMeshStandardMaterial?(s(g,h),d(g,h),h.isMeshPhysicalMaterial&&p(g,h,M)):h.isMeshMatcapMaterial?(s(g,h),_(g,h)):h.isMeshDepthMaterial?s(g,h):h.isMeshDistanceMaterial?(s(g,h),m(g,h)):h.isMeshNormalMaterial?s(g,h):h.isLineBasicMaterial?(o(g,h),h.isLineDashedMaterial&&a(g,h)):h.isPointsMaterial?l(g,h,v,x):h.isSpriteMaterial?u(g,h):h.isShadowMaterial?(g.color.value.copy(h.color),g.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(g,h){g.opacity.value=h.opacity,h.color&&g.diffuse.value.copy(h.color),h.emissive&&g.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap,t(h.alphaMap,g.alphaMapTransform)),h.bumpMap&&(g.bumpMap.value=h.bumpMap,t(h.bumpMap,g.bumpMapTransform),g.bumpScale.value=h.bumpScale,h.side===_n&&(g.bumpScale.value*=-1)),h.normalMap&&(g.normalMap.value=h.normalMap,t(h.normalMap,g.normalMapTransform),g.normalScale.value.copy(h.normalScale),h.side===_n&&g.normalScale.value.negate()),h.displacementMap&&(g.displacementMap.value=h.displacementMap,t(h.displacementMap,g.displacementMapTransform),g.displacementScale.value=h.displacementScale,g.displacementBias.value=h.displacementBias),h.emissiveMap&&(g.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,g.emissiveMapTransform)),h.specularMap&&(g.specularMap.value=h.specularMap,t(h.specularMap,g.specularMapTransform)),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(g.envMap.value=v,g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=h.reflectivity,g.ior.value=h.ior,g.refractionRatio.value=h.refractionRatio),h.lightMap){g.lightMap.value=h.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=h.lightMapIntensity*x,t(h.lightMap,g.lightMapTransform)}h.aoMap&&(g.aoMap.value=h.aoMap,g.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,g.aoMapTransform))}function o(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform))}function a(g,h){g.dashSize.value=h.dashSize,g.totalSize.value=h.dashSize+h.gapSize,g.scale.value=h.scale}function l(g,h,v,x){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.size.value=h.size*v,g.scale.value=x*.5,h.map&&(g.map.value=h.map,t(h.map,g.uvTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function u(g,h){g.diffuse.value.copy(h.color),g.opacity.value=h.opacity,g.rotation.value=h.rotation,h.map&&(g.map.value=h.map,t(h.map,g.mapTransform)),h.alphaMap&&(g.alphaMap.value=h.alphaMap),h.alphaTest>0&&(g.alphaTest.value=h.alphaTest)}function c(g,h){g.specular.value.copy(h.specular),g.shininess.value=Math.max(h.shininess,1e-4)}function f(g,h){h.gradientMap&&(g.gradientMap.value=h.gradientMap)}function d(g,h){g.metalness.value=h.metalness,h.metalnessMap&&(g.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,g.metalnessMapTransform)),g.roughness.value=h.roughness,h.roughnessMap&&(g.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,g.roughnessMapTransform)),e.get(h).envMap&&(g.envMapIntensity.value=h.envMapIntensity)}function p(g,h,v){g.ior.value=h.ior,h.sheen>0&&(g.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),g.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(g.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,g.sheenColorMapTransform)),h.sheenRoughnessMap&&(g.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,g.sheenRoughnessMapTransform))),h.clearcoat>0&&(g.clearcoat.value=h.clearcoat,g.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(g.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,g.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(g.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&g.clearcoatNormalScale.value.negate())),h.iridescence>0&&(g.iridescence.value=h.iridescence,g.iridescenceIOR.value=h.iridescenceIOR,g.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(g.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,g.iridescenceMapTransform)),h.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),h.transmission>0&&(g.transmission.value=h.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(g.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,g.transmissionMapTransform)),g.thickness.value=h.thickness,h.thicknessMap&&(g.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=h.attenuationDistance,g.attenuationColor.value.copy(h.attenuationColor)),g.specularIntensity.value=h.specularIntensity,g.specularColor.value.copy(h.specularColor),h.specularColorMap&&(g.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,g.specularColorMapTransform)),h.specularIntensityMap&&(g.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,h){h.matcap&&(g.matcap.value=h.matcap)}function m(g,h){const v=e.get(h).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Nb(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;i.uniformBlockBinding(v,M)}function u(v,x){let M=r[v.id];M===void 0&&(_(v),M=c(v),r[v.id]=M,v.addEventListener("dispose",g));const S=x.program;i.updateUBOMapping(v,S);const E=e.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function c(v){const x=f();v.__bindingPointIndex=x;const M=n.createBuffer(),S=v.__size,E=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,M),M}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const x=r[v.id],M=v.uniforms,S=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,w=M.length;E<w;E++){const P=M[E];if(p(P,E,S)===!0){const y=P.__offset,A=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let W=0;W<A.length;W++){const U=A[W],V=m(U);typeof U=="number"?(P.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,y+Y,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=U.elements[0],P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=U.elements[0],P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=U.elements[0]):(U.toArray(P.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,P.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,x,M){const S=v.value;if(M[x]===void 0){if(typeof S=="number")M[x]=S;else{const E=Array.isArray(S)?S:[S],w=[];for(let P=0;P<E.length;P++)w.push(E[P].clone());M[x]=w}return!0}else if(typeof S=="number"){if(M[x]!==S)return M[x]=S,!0}else{const E=Array.isArray(M[x])?M[x]:[M[x]],w=Array.isArray(S)?S:[S];for(let P=0;P<E.length;P++){const y=E[P];if(y.equals(w[P])===!1)return y.copy(w[P]),!0}}return!1}function _(v){const x=v.uniforms;let M=0;const S=16;let E=0;for(let w=0,P=x.length;w<P;w++){const y=x[w],A={boundary:0,storage:0},Y=Array.isArray(y.value)?y.value:[y.value];for(let W=0,U=Y.length;W<U;W++){const V=Y[W],H=m(V);A.boundary+=H.boundary,A.storage+=H.storage}if(y.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=M,w>0){E=M%S;const W=S-E;E!==0&&W-A.boundary<0&&(M+=S-E,y.__offset=M)}M+=A.storage}return E=M%S,E>0&&(M+=S-E),v.__size=M,v.__cache={},this}function m(v){const x={boundary:0,storage:0};return typeof v=="number"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function g(v){const x=v.target;x.removeEventListener("dispose",g);const M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}function Ob(){const n=el("canvas");return n.style.display="block",n}class Ky{constructor(e={}){const{canvas:t=Ob(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let p=null,_=null;const m=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Le,this.useLegacyLights=!0,this.toneMapping=Zi,this.toneMappingExposure=1;const h=this;let v=!1,x=0,M=0,S=null,E=-1,w=null;const P=new Vt,y=new Vt;let A=null,Y=t.width,W=t.height,U=1,V=null,H=null;const Q=new Vt(0,0,Y,W),$=new Vt(0,0,Y,W);let D=!1;const j=new Wy;let G=!1,ae=!1,z=null;const I=new At,O=new k,q={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function L(){return S===null?U:1}let b=i;function J(C,X){for(let Z=0;Z<C.length;Z++){const B=C[Z],te=t.getContext(B,X);if(te!==null)return te}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jp}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",We,!1),t.addEventListener("webglcontextcreationerror",Ze,!1),b===null){const X=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&X.shift(),b=J(X,C),b===null)throw J(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}b.getShaderPrecisionFormat===void 0&&(b.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pe,ie,le,fe,he,we,Ae,Ge,Ce,Ne,Be,De,Ct,R,T,F,ne,oe,ce,ye,ve,ee,Se,Ee;function Re(){pe=new jR(b),ie=new BR(b,pe,e),pe.init(ie),ee=new Pb(b,pe,ie),le=new Cb(b,pe,ie),fe=new KR(b),he=new db,we=new Rb(b,pe,le,he,ie,ee,fe),Ae=new HR(h),Ge=new $R(h),Ce=new aA(b,ie),Se=new kR(b,pe,Ce,ie),Ne=new YR(b,Ce,fe,Se),Be=new eP(b,Ne,Ce,fe),ce=new JR(b,ie,we),F=new VR(he),De=new hb(h,Ae,Ge,pe,ie,Se,F),Ct=new Ub(h,he),R=new mb,T=new Sb(pe,ie),oe=new FR(h,Ae,Ge,le,Be,d,l),ne=new Ab(h,Be,ie),Ee=new Nb(b,fe,ie,le),ye=new zR(b,pe,fe,ie),ve=new qR(b,pe,fe,ie),fe.programs=De.programs,h.capabilities=ie,h.extensions=pe,h.properties=he,h.renderLists=R,h.shadowMap=ne,h.state=le,h.info=fe}Re();const _e=new Ib(h,b);this.xr=_e,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const C=pe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=pe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(C){C!==void 0&&(U=C,this.setSize(Y,W,!1))},this.getSize=function(C){return C.set(Y,W)},this.setSize=function(C,X,Z=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=C,W=X,t.width=Math.floor(C*U),t.height=Math.floor(X*U),Z===!0&&(t.style.width=C+"px",t.style.height=X+"px"),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(Y*U,W*U).floor()},this.setDrawingBufferSize=function(C,X,Z){Y=C,W=X,U=Z,t.width=Math.floor(C*Z),t.height=Math.floor(X*Z),this.setViewport(0,0,C,X)},this.getCurrentViewport=function(C){return C.copy(P)},this.getViewport=function(C){return C.copy(Q)},this.setViewport=function(C,X,Z,B){C.isVector4?Q.set(C.x,C.y,C.z,C.w):Q.set(C,X,Z,B),le.viewport(P.copy(Q).multiplyScalar(U).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,X,Z,B){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,X,Z,B),le.scissor(y.copy($).multiplyScalar(U).floor())},this.getScissorTest=function(){return D},this.setScissorTest=function(C){le.setScissorTest(D=C)},this.setOpaqueSort=function(C){V=C},this.setTransparentSort=function(C){H=C},this.getClearColor=function(C){return C.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(C=!0,X=!0,Z=!0){let B=0;C&&(B|=b.COLOR_BUFFER_BIT),X&&(B|=b.DEPTH_BUFFER_BIT),Z&&(B|=b.STENCIL_BUFFER_BIT),b.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",We,!1),t.removeEventListener("webglcontextcreationerror",Ze,!1),R.dispose(),T.dispose(),he.dispose(),Ae.dispose(),Ge.dispose(),Be.dispose(),Se.dispose(),Ee.dispose(),De.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",xe),_e.removeEventListener("sessionend",Je),z&&(z.dispose(),z=null),et.stop()};function Me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function We(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const C=fe.autoReset,X=ne.enabled,Z=ne.autoUpdate,B=ne.needsUpdate,te=ne.type;Re(),fe.autoReset=C,ne.enabled=X,ne.autoUpdate=Z,ne.needsUpdate=B,ne.type=te}function Ze(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function _t(C){const X=C.target;X.removeEventListener("dispose",_t),N(X)}function N(C){K(C),he.remove(C)}function K(C){const X=he.get(C).programs;X!==void 0&&(X.forEach(function(Z){De.releaseProgram(Z)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,Z,B,te,Te){X===null&&(X=q);const Pe=te.isMesh&&te.matrixWorld.determinant()<0,be=rM(C,X,Z,B,te);le.setMaterial(B,Pe);let Ie=Z.index,Oe=1;B.wireframe===!0&&(Ie=Ne.getWireframeAttribute(Z),Oe=2);const Fe=Z.drawRange,ke=Z.attributes.position;let Qe=Fe.start*Oe,en=(Fe.start+Fe.count)*Oe;Te!==null&&(Qe=Math.max(Qe,Te.start*Oe),en=Math.min(en,(Te.start+Te.count)*Oe)),Ie!==null?(Qe=Math.max(Qe,0),en=Math.min(en,Ie.count)):ke!=null&&(Qe=Math.max(Qe,0),en=Math.min(en,ke.count));const si=en-Qe;if(si<0||si===1/0)return;Se.setup(te,B,be,Z,Ie);let Wr,St=ye;if(Ie!==null&&(Wr=Ce.get(Ie),St=ve,St.setIndex(Wr)),te.isMesh)B.wireframe===!0?(le.setLineWidth(B.wireframeLinewidth*L()),St.setMode(b.LINES)):St.setMode(b.TRIANGLES);else if(te.isLine){let Xe=B.linewidth;Xe===void 0&&(Xe=1),le.setLineWidth(Xe*L()),te.isLineSegments?St.setMode(b.LINES):te.isLineLoop?St.setMode(b.LINE_LOOP):St.setMode(b.LINE_STRIP)}else te.isPoints?St.setMode(b.POINTS):te.isSprite&&St.setMode(b.TRIANGLES);if(te.isInstancedMesh)St.renderInstances(Qe,si,te.count);else if(Z.isInstancedBufferGeometry){const Xe=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,rf=Math.min(Z.instanceCount,Xe);St.renderInstances(Qe,si,rf)}else St.render(Qe,si)},this.compile=function(C,X){function Z(B,te,Te){B.transparent===!0&&B.side===on&&B.forceSinglePass===!1?(B.side=_n,B.needsUpdate=!0,yl(B,te,Te),B.side=Or,B.needsUpdate=!0,yl(B,te,Te),B.side=on):yl(B,te,Te)}_=T.get(C),_.init(),g.push(_),C.traverseVisible(function(B){B.isLight&&B.layers.test(X.layers)&&(_.pushLight(B),B.castShadow&&_.pushShadow(B))}),_.setupLights(h.useLegacyLights),C.traverse(function(B){const te=B.material;if(te)if(Array.isArray(te))for(let Te=0;Te<te.length;Te++){const Pe=te[Te];Z(Pe,C,B)}else Z(te,C,B)}),g.pop(),_=null};let re=null;function me(C){re&&re(C)}function xe(){et.stop()}function Je(){et.start()}const et=new Xy;et.setAnimationLoop(me),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(C){re=C,_e.setAnimationLoop(C),C===null?et.stop():et.start()},_e.addEventListener("sessionstart",xe),_e.addEventListener("sessionend",Je),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(X),X=_e.getCamera()),C.isScene===!0&&C.onBeforeRender(h,C,X,S),_=T.get(C,g.length),_.init(),g.push(_),I.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j.setFromProjectionMatrix(I),ae=this.localClippingEnabled,G=F.init(this.clippingPlanes,ae),p=R.get(C,m.length),p.init(),m.push(p),Wt(C,X,0,h.sortObjects),p.finish(),h.sortObjects===!0&&p.sort(V,H),G===!0&&F.beginShadows();const Z=_.state.shadowsArray;if(ne.render(Z,C,X),G===!0&&F.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(p,C),_.setupLights(h.useLegacyLights),X.isArrayCamera){const B=X.cameras;for(let te=0,Te=B.length;te<Te;te++){const Pe=B[te];ar(p,C,Pe,Pe.viewport)}}else ar(p,C,X);S!==null&&(we.updateMultisampleRenderTarget(S),we.updateRenderTargetMipmap(S)),C.isScene===!0&&C.onAfterRender(h,C,X),Se.resetDefaultState(),E=-1,w=null,g.pop(),g.length>0?_=g[g.length-1]:_=null,m.pop(),m.length>0?p=m[m.length-1]:p=null};function Wt(C,X,Z,B){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)Z=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){B&&O.setFromMatrixPosition(C.matrixWorld).applyMatrix4(I);const Pe=Be.update(C),be=C.material;be.visible&&p.push(C,Pe,be,Z,O.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){C.isSkinnedMesh&&C.skeleton.frame!==fe.render.frame&&(C.skeleton.update(),C.skeleton.frame=fe.render.frame);const Pe=Be.update(C),be=C.material;if(B&&(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),O.copy(Pe.boundingSphere.center).applyMatrix4(C.matrixWorld).applyMatrix4(I)),Array.isArray(be)){const Ie=Pe.groups;for(let Oe=0,Fe=Ie.length;Oe<Fe;Oe++){const ke=Ie[Oe],Qe=be[ke.materialIndex];Qe&&Qe.visible&&p.push(C,Pe,Qe,Z,O.z,ke)}}else be.visible&&p.push(C,Pe,be,Z,O.z,null)}}const Te=C.children;for(let Pe=0,be=Te.length;Pe<be;Pe++)Wt(Te[Pe],X,Z,B)}function ar(C,X,Z,B){const te=C.opaque,Te=C.transmissive,Pe=C.transparent;_.setupLightsView(Z),G===!0&&F.setGlobalState(h.clippingPlanes,Z),Te.length>0&&vt(te,Te,X,Z),B&&le.viewport(P.copy(B)),te.length>0&&Gn(te,X,Z),Te.length>0&&Gn(Te,X,Z),Pe.length>0&&Gn(Pe,X,Z),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function vt(C,X,Z,B){if(z===null){const be=ie.isWebGL2;z=new Cs(1024,1024,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")?Ja:As,minFilter:Qa,samples:be&&a===!0?4:0})}const te=h.getRenderTarget();h.setRenderTarget(z),h.clear();const Te=h.toneMapping;h.toneMapping=Zi,Gn(C,Z,B),we.updateMultisampleRenderTarget(z),we.updateRenderTargetMipmap(z);let Pe=!1;for(let be=0,Ie=X.length;be<Ie;be++){const Oe=X[be],Fe=Oe.object,ke=Oe.geometry,Qe=Oe.material,en=Oe.group;if(Qe.side===on&&Fe.layers.test(B.layers)){const si=Qe.side;Qe.side=_n,Qe.needsUpdate=!0,Mi(Fe,Z,B,ke,Qe,en),Qe.side=si,Qe.needsUpdate=!0,Pe=!0}}Pe===!0&&(we.updateMultisampleRenderTarget(z),we.updateRenderTargetMipmap(z)),h.setRenderTarget(te),h.toneMapping=Te}function Gn(C,X,Z){const B=X.isScene===!0?X.overrideMaterial:null;for(let te=0,Te=C.length;te<Te;te++){const Pe=C[te],be=Pe.object,Ie=Pe.geometry,Oe=B===null?Pe.material:B,Fe=Pe.group;be.layers.test(Z.layers)&&Mi(be,X,Z,Ie,Oe,Fe)}}function Mi(C,X,Z,B,te,Te){C.onBeforeRender(h,X,Z,B,te,Te),C.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(h,X,Z,B,C,Te),te.transparent===!0&&te.side===on&&te.forceSinglePass===!1?(te.side=_n,te.needsUpdate=!0,h.renderBufferDirect(Z,X,B,te,C,Te),te.side=Or,te.needsUpdate=!0,h.renderBufferDirect(Z,X,B,te,C,Te),te.side=on):h.renderBufferDirect(Z,X,B,te,C,Te),C.onAfterRender(h,X,Z,B,te,Te)}function yl(C,X,Z){X.isScene!==!0&&(X=q);const B=he.get(C),te=_.state.lights,Te=_.state.shadowsArray,Pe=te.state.version,be=De.getParameters(C,te.state,Te,X,Z),Ie=De.getProgramCacheKey(be);let Oe=B.programs;B.environment=C.isMeshStandardMaterial?X.environment:null,B.fog=X.fog,B.envMap=(C.isMeshStandardMaterial?Ge:Ae).get(C.envMap||B.environment),Oe===void 0&&(C.addEventListener("dispose",_t),Oe=new Map,B.programs=Oe);let Fe=Oe.get(Ie);if(Fe!==void 0){if(B.currentProgram===Fe&&B.lightsStateVersion===Pe)return Em(C,be),Fe}else be.uniforms=De.getUniforms(C),C.onBuild(Z,be,h),C.onBeforeCompile(be,h),Fe=De.acquireProgram(be,Ie),Oe.set(Ie,Fe),B.uniforms=be.uniforms;const ke=B.uniforms;(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(ke.clippingPlanes=F.uniform),Em(C,be),B.needsLights=oM(C),B.lightsStateVersion=Pe,B.needsLights&&(ke.ambientLightColor.value=te.state.ambient,ke.lightProbe.value=te.state.probe,ke.directionalLights.value=te.state.directional,ke.directionalLightShadows.value=te.state.directionalShadow,ke.spotLights.value=te.state.spot,ke.spotLightShadows.value=te.state.spotShadow,ke.rectAreaLights.value=te.state.rectArea,ke.ltc_1.value=te.state.rectAreaLTC1,ke.ltc_2.value=te.state.rectAreaLTC2,ke.pointLights.value=te.state.point,ke.pointLightShadows.value=te.state.pointShadow,ke.hemisphereLights.value=te.state.hemi,ke.directionalShadowMap.value=te.state.directionalShadowMap,ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,ke.spotShadowMap.value=te.state.spotShadowMap,ke.spotLightMatrix.value=te.state.spotLightMatrix,ke.spotLightMap.value=te.state.spotLightMap,ke.pointShadowMap.value=te.state.pointShadowMap,ke.pointShadowMatrix.value=te.state.pointShadowMatrix);const Qe=Fe.getUniforms(),en=Cu.seqWithValue(Qe.seq,ke);return B.currentProgram=Fe,B.uniformsList=en,Fe}function Em(C,X){const Z=he.get(C);Z.outputColorSpace=X.outputColorSpace,Z.instancing=X.instancing,Z.skinning=X.skinning,Z.morphTargets=X.morphTargets,Z.morphNormals=X.morphNormals,Z.morphColors=X.morphColors,Z.morphTargetsCount=X.morphTargetsCount,Z.numClippingPlanes=X.numClippingPlanes,Z.numIntersection=X.numClipIntersection,Z.vertexAlphas=X.vertexAlphas,Z.vertexTangents=X.vertexTangents,Z.toneMapping=X.toneMapping}function rM(C,X,Z,B,te){X.isScene!==!0&&(X=q),we.resetTextureUnits();const Te=X.fog,Pe=B.isMeshStandardMaterial?X.environment:null,be=S===null?h.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Ni,Ie=(B.isMeshStandardMaterial?Ge:Ae).get(B.envMap||Pe),Oe=B.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Fe=!!B.normalMap&&!!Z.attributes.tangent,ke=!!Z.morphAttributes.position,Qe=!!Z.morphAttributes.normal,en=!!Z.morphAttributes.color,si=B.toneMapped?h.toneMapping:Zi,Wr=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,St=Wr!==void 0?Wr.length:0,Xe=he.get(B),rf=_.state.lights;if(G===!0&&(ae===!0||C!==w)){const wn=C===w&&B.id===E;F.setState(B,C,wn)}let Dt=!1;B.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==rf.state.version||Xe.outputColorSpace!==be||te.isInstancedMesh&&Xe.instancing===!1||!te.isInstancedMesh&&Xe.instancing===!0||te.isSkinnedMesh&&Xe.skinning===!1||!te.isSkinnedMesh&&Xe.skinning===!0||Xe.envMap!==Ie||B.fog===!0&&Xe.fog!==Te||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==F.numPlanes||Xe.numIntersection!==F.numIntersection)||Xe.vertexAlphas!==Oe||Xe.vertexTangents!==Fe||Xe.morphTargets!==ke||Xe.morphNormals!==Qe||Xe.morphColors!==en||Xe.toneMapping!==si||ie.isWebGL2===!0&&Xe.morphTargetsCount!==St)&&(Dt=!0):(Dt=!0,Xe.__version=B.version);let Xr=Xe.currentProgram;Dt===!0&&(Xr=yl(B,X,te));let Tm=!1,Jo=!1,sf=!1;const tn=Xr.getUniforms(),$r=Xe.uniforms;if(le.useProgram(Xr.program)&&(Tm=!0,Jo=!0,sf=!0),B.id!==E&&(E=B.id,Jo=!0),Tm||w!==C){if(tn.setValue(b,"projectionMatrix",C.projectionMatrix),ie.logarithmicDepthBuffer&&tn.setValue(b,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),w!==C&&(w=C,Jo=!0,sf=!0),B.isShaderMaterial||B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshStandardMaterial||B.envMap){const wn=tn.map.cameraPosition;wn!==void 0&&wn.setValue(b,O.setFromMatrixPosition(C.matrixWorld))}(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&tn.setValue(b,"isOrthographic",C.isOrthographicCamera===!0),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial||B.isShadowMaterial||te.isSkinnedMesh)&&tn.setValue(b,"viewMatrix",C.matrixWorldInverse)}if(te.isSkinnedMesh){tn.setOptional(b,te,"bindMatrix"),tn.setOptional(b,te,"bindMatrixInverse");const wn=te.skeleton;wn&&(ie.floatVertexTextures?(wn.boneTexture===null&&wn.computeBoneTexture(),tn.setValue(b,"boneTexture",wn.boneTexture,we),tn.setValue(b,"boneTextureSize",wn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const of=Z.morphAttributes;if((of.position!==void 0||of.normal!==void 0||of.color!==void 0&&ie.isWebGL2===!0)&&ce.update(te,Z,Xr),(Jo||Xe.receiveShadow!==te.receiveShadow)&&(Xe.receiveShadow=te.receiveShadow,tn.setValue(b,"receiveShadow",te.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&($r.envMap.value=Ie,$r.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),Jo&&(tn.setValue(b,"toneMappingExposure",h.toneMappingExposure),Xe.needsLights&&sM($r,sf),Te&&B.fog===!0&&Ct.refreshFogUniforms($r,Te),Ct.refreshMaterialUniforms($r,B,U,W,z),Cu.upload(b,Xe.uniformsList,$r,we)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Cu.upload(b,Xe.uniformsList,$r,we),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&tn.setValue(b,"center",te.center),tn.setValue(b,"modelViewMatrix",te.modelViewMatrix),tn.setValue(b,"normalMatrix",te.normalMatrix),tn.setValue(b,"modelMatrix",te.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const wn=B.uniformsGroups;for(let af=0,aM=wn.length;af<aM;af++)if(ie.isWebGL2){const wm=wn[af];Ee.update(wm,Xr),Ee.bind(wm,Xr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Xr}function sM(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function oM(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(C,X,Z){he.get(C.texture).__webglTexture=X,he.get(C.depthTexture).__webglTexture=Z;const B=he.get(C);B.__hasExternalTextures=!0,B.__hasExternalTextures&&(B.__autoAllocateDepthBuffer=Z===void 0,B.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,X){const Z=he.get(C);Z.__webglFramebuffer=X,Z.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,Z=0){S=C,x=X,M=Z;let B=!0,te=null,Te=!1,Pe=!1;if(C){const Ie=he.get(C);Ie.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(b.FRAMEBUFFER,null),B=!1):Ie.__webglFramebuffer===void 0?we.setupRenderTarget(C):Ie.__hasExternalTextures&&we.rebindTextures(C,he.get(C.texture).__webglTexture,he.get(C.depthTexture).__webglTexture);const Oe=C.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Pe=!0);const Fe=he.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(te=Fe[X],Te=!0):ie.isWebGL2&&C.samples>0&&we.useMultisampledRTT(C)===!1?te=he.get(C).__webglMultisampledFramebuffer:te=Fe,P.copy(C.viewport),y.copy(C.scissor),A=C.scissorTest}else P.copy(Q).multiplyScalar(U).floor(),y.copy($).multiplyScalar(U).floor(),A=D;if(le.bindFramebuffer(b.FRAMEBUFFER,te)&&ie.drawBuffers&&B&&le.drawBuffers(C,te),le.viewport(P),le.scissor(y),le.setScissorTest(A),Te){const Ie=he.get(C.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ie.__webglTexture,Z)}else if(Pe){const Ie=he.get(C.texture),Oe=X||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ie.__webglTexture,Z||0,Oe)}E=-1},this.readRenderTargetPixels=function(C,X,Z,B,te,Te,Pe){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=he.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Pe!==void 0&&(be=be[Pe]),be){le.bindFramebuffer(b.FRAMEBUFFER,be);try{const Ie=C.texture,Oe=Ie.format,Fe=Ie.type;if(Oe!==_i&&ee.convert(Oe)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ke=Fe===Ja&&(pe.has("EXT_color_buffer_half_float")||ie.isWebGL2&&pe.has("EXT_color_buffer_float"));if(Fe!==As&&ee.convert(Fe)!==b.getParameter(b.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===ls&&(ie.isWebGL2||pe.has("OES_texture_float")||pe.has("WEBGL_color_buffer_float")))&&!ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-B&&Z>=0&&Z<=C.height-te&&b.readPixels(X,Z,B,te,ee.convert(Oe),ee.convert(Fe),Te)}finally{const Ie=S!==null?he.get(S).__webglFramebuffer:null;le.bindFramebuffer(b.FRAMEBUFFER,Ie)}}},this.copyFramebufferToTexture=function(C,X,Z=0){const B=Math.pow(2,-Z),te=Math.floor(X.image.width*B),Te=Math.floor(X.image.height*B);we.setTexture2D(X,0),b.copyTexSubImage2D(b.TEXTURE_2D,Z,0,0,C.x,C.y,te,Te),le.unbindTexture()},this.copyTextureToTexture=function(C,X,Z,B=0){const te=X.image.width,Te=X.image.height,Pe=ee.convert(Z.format),be=ee.convert(Z.type);we.setTexture2D(Z,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,Z.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,Z.unpackAlignment),X.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,B,C.x,C.y,te,Te,Pe,be,X.image.data):X.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,B,C.x,C.y,X.mipmaps[0].width,X.mipmaps[0].height,Pe,X.mipmaps[0].data):b.texSubImage2D(b.TEXTURE_2D,B,C.x,C.y,Pe,be,X.image),B===0&&Z.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(C,X,Z,B,te=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=C.max.x-C.min.x+1,Pe=C.max.y-C.min.y+1,be=C.max.z-C.min.z+1,Ie=ee.convert(B.format),Oe=ee.convert(B.type);let Fe;if(B.isData3DTexture)we.setTexture3D(B,0),Fe=b.TEXTURE_3D;else if(B.isDataArrayTexture)we.setTexture2DArray(B,0),Fe=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,B.unpackAlignment);const ke=b.getParameter(b.UNPACK_ROW_LENGTH),Qe=b.getParameter(b.UNPACK_IMAGE_HEIGHT),en=b.getParameter(b.UNPACK_SKIP_PIXELS),si=b.getParameter(b.UNPACK_SKIP_ROWS),Wr=b.getParameter(b.UNPACK_SKIP_IMAGES),St=Z.isCompressedTexture?Z.mipmaps[0]:Z.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,St.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,St.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,C.min.x),b.pixelStorei(b.UNPACK_SKIP_ROWS,C.min.y),b.pixelStorei(b.UNPACK_SKIP_IMAGES,C.min.z),Z.isDataTexture||Z.isData3DTexture?b.texSubImage3D(Fe,te,X.x,X.y,X.z,Te,Pe,be,Ie,Oe,St.data):Z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),b.compressedTexSubImage3D(Fe,te,X.x,X.y,X.z,Te,Pe,be,Ie,St.data)):b.texSubImage3D(Fe,te,X.x,X.y,X.z,Te,Pe,be,Ie,Oe,St),b.pixelStorei(b.UNPACK_ROW_LENGTH,ke),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Qe),b.pixelStorei(b.UNPACK_SKIP_PIXELS,en),b.pixelStorei(b.UNPACK_SKIP_ROWS,si),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Wr),te===0&&B.generateMipmaps&&b.generateMipmap(Fe),le.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?we.setTextureCube(C,0):C.isData3DTexture?we.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?we.setTexture2DArray(C,0):we.setTexture2D(C,0),le.unbindTexture()},this.resetState=function(){x=0,M=0,S=null,le.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Le?ps:by}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ps?Le:Ni}}class Fb extends Ky{}Fb.prototype.isWebGL1Renderer=!0;class kb extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class au extends yi{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Zy extends gl{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const l0=new At,Dd=new Oy,lu=new Zc,uu=new k;class nm extends xn{constructor(e=new Hn,t=new Zy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lu.copy(i.boundingSphere),lu.applyMatrix4(r),lu.radius+=s,e.ray.intersectsSphere(lu)===!1)return;l0.copy(r).invert(),Dd.copy(e.ray).applyMatrix4(l0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let _=d,m=p;_<m;_++){const g=u.getX(_);uu.fromBufferAttribute(f,g),u0(uu,g,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,m=p;_<m;_++)uu.fromBufferAttribute(f,_),u0(uu,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function u0(n,e,t,i,r,s,o){const a=Dd.distanceSqToPoint(n);if(a<t){const l=new k;Dd.closestPointToPoint(n,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class zb{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],d=i[r+1]-c,p=(o-c)/d;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=t||(o.isVector2?new je:new k);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new k,r=[],s=[],o=[],a=new k,l=new At;for(let p=0;p<=e;p++){const _=p/e;r[p]=this.getTangentAt(_,new k)}s[0]=new k,o[0]=new k;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),d=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),d<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(Bt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,_))}o[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(Bt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(r[_],p*_)),o[_].crossVectors(r[_],s[_])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}function im(){let n=0,e=0,t=0,i=0;function r(s,o,a,l){n=s,e=a,t=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let d=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;d*=c,p*=c,r(o,a,d,p)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const cu=new k,hh=new im,dh=new im,ph=new im;class Bb extends zb{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new k){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(cu.subVectors(r[0],r[1]).add(r[0]),u=cu);const f=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(cu.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=cu),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let _=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(d),p),g=Math.pow(d.distanceToSquared(c),p);m<1e-4&&(m=1),_<1e-4&&(_=m),g<1e-4&&(g=m),hh.initNonuniformCatmullRom(u.x,f.x,d.x,c.x,_,m,g),dh.initNonuniformCatmullRom(u.y,f.y,d.y,c.y,_,m,g),ph.initNonuniformCatmullRom(u.z,f.z,d.z,c.z,_,m,g)}else this.curveType==="catmullrom"&&(hh.initCatmullRom(u.x,f.x,d.x,c.x,this.tension),dh.initCatmullRom(u.y,f.y,d.y,c.y,this.tension),ph.initCatmullRom(u.z,f.z,d.z,c.z,this.tension));return i.set(hh.calc(l),dh.calc(l),ph.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new k().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}class rm extends Hn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);const s=[],o=[],a=[],l=[],u=new k,c=new je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const p=i+f/t*r;u.x=e*Math.cos(p),u.y=e*Math.sin(p),o.push(u.x,u.y,u.z),a.push(0,0,1),c.x=(o[d]/e+1)/2,c.y=(o[d+1]/e+1)/2,l.push(c.x,c.y)}for(let f=1;f<=t;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new at(o,3)),this.setAttribute("normal",new at(a,3)),this.setAttribute("uv",new at(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rm(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vl extends Fr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const c0={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Vb{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const p=u[f],_=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const Hb=new Vb;class Qy{constructor(e){this.manager=e!==void 0?e:Hb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Gb extends Qy{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=c0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=el("img");function l(){c(),c0.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Vo extends Qy{constructor(e){super(e)}load(e,t,i,r){const s=new vn,o=new Gb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Wb extends Hn{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class Jy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=f0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=f0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function f0(){return(typeof performance>"u"?Date:performance).now()}class Xb{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Bt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jp);class $b extends Is{constructor(t,{cameraFar:i=1e3,cameraNear:r=.1,fog:s}){super();de(this,"isInitiated");de(this,"canvas");de(this,"renderer");de(this,"clock");de(this,"mouse");de(this,"scene");de(this,"camera");this.isInitiated=!1,this.clock=new Jy,this.canvas=t,this.mouse=new je,this.scene=new kb,s&&(this.scene.fog=s);const o=window.innerWidth/window.innerHeight;this.camera=new qn(75,o,r,i),this.camera.position.set(0,1,-3),this.camera.lookAt(new k),this.renderer=new Ky({canvas:this.canvas,antialias:!0,alpha:!1,stencil:!1}),this.renderer.outputColorSpace=Le,this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setClearColor(16768477),this.renderer.setPixelRatio(window.devicePixelRatio)}clear(){}init(){}draw(){}render(){this.init(),this.draw(),this.isInitiated=!0}clearScene(){for(;this.scene.children.length>0;)this.scene.remove(this.scene.children[0])}createMouseListener(){this.mouse=new je,this.canvas.addEventListener("mousemove",t=>{this.mouse.x=t.clientX/this.canvas.width*2-1,this.mouse.y=-(t.clientY/this.canvas.height)*2+1})}resize(t,i){this.canvas.width=t,this.canvas.height=i,this.camera.aspect=t/i,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,i),this.customResize(t,i)}customResize(t,i){}setCameraPos(t,i,r){this.camera.position.set(t,i,r)}lookAt(t){this.camera.lookAt(t)}setClearColor(t){this.renderer.setClearColor(t)}}const Kn=(n,e,t,i,r)=>t+(i-t)*(r-n)/(e-n),Rs=n=>n*Math.PI/180,mi=(n,e)=>Math.random()*(e-n)+n,jb=navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i),Yb=-1,qb=1,Kb=-1.5,Zb=-1,Qb=5,Jb=7,h0=-2,d0=2,p0=.002,m0=.01,e2=.008,t2=.025,n2=5,i2=40,g0=.2,_0=.9;class r2{constructor(){de(this,"xStartPosition");de(this,"yStartPosition");de(this,"yEndPosition");de(this,"zStartPosition");de(this,"yVelocity");de(this,"rotationVelocity");de(this,"position");de(this,"rotation");de(this,"size");de(this,"alpha");this.xStartPosition=0,this.yStartPosition=0,this.yEndPosition=0,this.zStartPosition=0,this.yVelocity=0,this.position=new k,this.rotationVelocity=0,this.rotation=0,this.size=1,this.alpha=1,this.reset()}reset(){this.xStartPosition=mi(Yb,qb),this.yStartPosition=mi(Kb,Zb),this.yEndPosition=mi(Qb,Jb),this.zStartPosition=mi(h0,d0),this.yVelocity=mi(p0,m0),this.position.set(this.xStartPosition,this.yStartPosition,this.zStartPosition),this.rotationVelocity=Kn(p0,m0,e2,t2,this.yVelocity),this.rotation=mi(0,Math.PI*2),this.size=Kn(h0,d0,n2,i2,this.zStartPosition)}update(){this.rotation-=this.rotationVelocity,this.position.y>=this.yEndPosition?this.reset():this.position.y+=this.yVelocity;const e=Kn(this.yStartPosition,this.yEndPosition,0,1,this.position.y);e>_0?this.alpha=1-Kn(_0,1,0,1,e):e<g0?this.alpha=Kn(0,g0,0,1,e):this.alpha=1}}const s2="/assets/petal-02d99c03.png",o2="/assets/flower-b823cd9a.png",a2="/assets/grass-blade-alpha-586406fd.jpg",l2="/assets/grass-blade-diffuse-06f3b631.jpg",u2="/assets/perlin-fbm-e915b1d5.jpg",v0="/assets/cloud-3dcb97e9.webp",c2="/assets/butterfly-wing-12565de8.png";var f2=`precision highp float;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

attribute vec2 uv;
attribute vec3 position;
attribute float rotation;
attribute float size;
attribute float alpha;

varying vec2 vUv;
varying vec2 vAngle;
varying float vAlpha;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size;

  vUv = uv;
  
  vAngle = vec2(cos(rotation), sin(rotation));
  vAlpha = alpha;
}`,h2=`precision highp float;

uniform sampler2D diffuseTexture;

varying vec2 vAngle;
varying float vAlpha;

void main() {
    
    
    vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
    
    vec4 texture = texture2D(diffuseTexture, coords);
    vec3 color = vec3(1.0, 1.0, 1.0);

    gl_FragColor = vec4(color, vAlpha * texture.a);
}`;const d2=20;class p2{constructor(){de(this,"petals");de(this,"geometry");de(this,"material");de(this,"group");this.petals=[],this.geometry=new Hn,this.createPetals(),this.material=new vl({fragmentShader:h2,vertexShader:f2,depthTest:!0,depthWrite:!1,transparent:!0,vertexColors:!0,side:on,uniforms:{diffuseTexture:{value:new Vo().load(s2)}}}),this.group=new nm(this.geometry,this.material)}get position(){return this.group.position}createPetals(){const e=[],t=[],i=[],r=[];for(let s=0;s<d2;s++){const o=new r2;this.petals.push(o),e.push(o.position.x,o.position.y,o.position.z),t.push(o.rotation),i.push(o.size),r.push(o.alpha)}this.geometry.setAttribute("position",new at(e,3)),this.geometry.setAttribute("rotation",new at(t,1)),this.geometry.setAttribute("size",new at(i,1)),this.geometry.setAttribute("alpha",new at(r,1))}update(){const e=[],t=[],i=[],r=[];this.petals.forEach(s=>{s.update(),e.push(s.position.x,s.position.y,s.position.z),t.push(s.rotation),i.push(s.size),r.push(s.alpha)}),this.geometry.setAttribute("position",new at(e,3)),this.geometry.setAttribute("rotation",new at(t,1)),this.geometry.setAttribute("size",new at(i,1)),this.geometry.setAttribute("alpha",new at(r,1))}}var m2=`precision highp float;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

attribute vec2 uv;
attribute vec3 position;
attribute float size;
attribute float alpha;

varying vec2 vUv;
varying vec2 vAngle;
varying float vAlpha;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;
  gl_PointSize = size;

  vUv = uv;
  
  
  vAngle = vec2(cos(3.14), sin(3.14));
  vAlpha = alpha;
}`,g2=`precision highp float;

uniform sampler2D diffuseTexture;

varying vec2 vAngle;
varying float vAlpha;

void main() {
    vec2 coords = (gl_PointCoord - 0.5) * mat2(vAngle.x, vAngle.y, -vAngle.y, vAngle.x) + 0.5;
    vec4 texture = texture2D(diffuseTexture, coords);
    vec4 color = vec4(2.0, 2.0, 2.0, vAlpha);

    gl_FragColor = color * texture;
}`;const eS=(n,e)=>Math.sqrt(Math.pow(n[0]-e[0],2)+Math.pow(n[1]-e[1],2)),_2=800,tS=-3,sm=3,Id=-1,oc=5,v2=-.5,x2=5,y2=70,S2=(sm+tS)/2,M2=(oc+Id)/2,nS=eS([S2,M2],[sm,oc])*.75,x0=nS*.5,y0=.9;class E2{constructor(){de(this,"origin");de(this,"geometry");de(this,"material");de(this,"group");this.origin=new k,this.geometry=new Hn,this.material=new vl({vertexShader:m2,fragmentShader:g2,depthTest:!0,depthWrite:!1,transparent:!0,vertexColors:!0,side:on,uniforms:{diffuseTexture:{value:new Vo().load(o2)}}}),this.createFlowers(),this.group=new nm(this.geometry,this.material),this.group.rotateX(Rs(15))}createFlowers(){const e=[],t=[],i=[];for(let r=0;r<_2;r++){const s=new k(mi(tS,sm),v2,mi(Id,oc)),o=Kn(Id,oc,x2,y2,s.z);e.push(s.x,s.y,s.z),t.push(o);const a=eS([this.origin.x,this.origin.z],[s.x,s.z]);if(a>=x0){const l=y0-Kn(x0,nS,0,y0,a);i.push(l)}else i.push(1)}this.geometry.setAttribute("position",new at(e,3)),this.geometry.setAttribute("size",new at(t,1)),this.geometry.setAttribute("alpha",new at(i,1))}update(){}}var T2=`precision mediump float;

uniform vec3 cameraPosition;

uniform float ambientStrength;
uniform float diffuseStrength;
uniform float specularStrength;
uniform float translucencyStrength;
uniform float shininess;
uniform vec3 lightColour;
uniform vec3 sunDirection;

uniform sampler2D map;
uniform sampler2D alphaMap;
uniform vec3 specularColour;

varying float frc;
varying float idx;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;

vec3 ACESFilm(vec3 x){
	float a = 2.51;
	float b = 0.03;
	float c = 2.43;
	float d = 0.59;
	float e = 0.14;
	return clamp((x*(a*x+b))/(x*(c*x+d)+e), 0.0, 1.0);
}

void main() {

  
  if(texture2D(alphaMap, vUv).r < 0.15){
    discard;
  }

	vec3 normal;

	
	if(gl_FrontFacing){
		normal = normalize(vNormal);
	}else{
		normal = normalize(-vNormal);
	}

  
	vec3 textureColour = pow(texture2D(map, vUv).rgb, vec3(2.2));

  
	vec3 mixColour = idx > 0.75 ? vec3(0.2, 0.8, 0.06) : vec3(0.5, 0.8, 0.08);
  textureColour = mix(0.1 * mixColour, textureColour, 0.75);

	vec3 lightTimesTexture = lightColour * textureColour;
  vec3 ambient = textureColour;
	vec3 lightDir = normalize(sunDirection);

  
	float dotNormalLight = dot(normal, lightDir);
  float diff = max(dotNormalLight, 0.0);

  
  vec3 diffuse = diff * lightTimesTexture;

  float sky = max(dot(normal, vec3(0, 1, 0)), 0.0);
	vec3 skyLight = sky * vec3(0.12, 0.29, 0.55);

  vec3 viewDirection = normalize(cameraPosition - vPosition);
  vec3 halfwayDir = normalize(lightDir + viewDirection);
  
  float spec = pow(max(dot(normal, halfwayDir), 0.0), shininess);
  
  
  vec3 specular = spec * specularColour * lightColour;

	
	vec3 diffuseTranslucency = vec3(0);
	vec3 forwardTranslucency = vec3(0);
	float dotViewLight = dot(-lightDir, viewDirection);
	if(dotNormalLight <= 0.0){
		diffuseTranslucency = lightTimesTexture * translucencyStrength * -dotNormalLight;
		if(dotViewLight > 0.0){
			forwardTranslucency = lightTimesTexture * translucencyStrength * pow(dotViewLight, 16.0);
		}
	}

  vec3 col = 0.3 * skyLight * textureColour + ambientStrength * ambient + diffuseStrength * diffuse + specularStrength * specular + diffuseTranslucency + forwardTranslucency;

	
	col = mix(0.35*vec3(0.1, 0.25, 0.02), col, frc);
	
  
  col = ACESFilm(col);

  
	col = pow(col, vec3(0.4545));

  gl_FragColor = vec4(col, 1.0);
}`,w2=`precision mediump float;
attribute vec3 position;
attribute vec3 normal;
attribute vec3 offset;
attribute vec2 uv;
attribute vec2 halfRootAngle;
attribute float scale;
attribute float index;
uniform float time;

uniform float delta;
uniform float posX;
uniform float posZ;
uniform float radius;
uniform float width;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPosition;
varying float frc;
varying float idx;

const float PI = 3.1415;
const float TWO_PI = 2.0 * PI;
const float BLADE_HEIGHT = 1.0;

uniform sampler2D noiseTexture;

float getYPosition(vec2 p) {
  return 8.0 * (2.0 * texture2D(noiseTexture, p / 800.0).r - 1.0);
}

vec3 rotateVectorByQuaternion(vec3 v, vec4 q) {
  return 2.0 * cross(q.xyz, v * q.w + cross(q.xyz, v)) + v;
}

float placeOnSphere(vec3 v) {
  float theta = acos(v.z / radius);
  float phi = acos(v.x / (radius * sin(theta)));
  float sV = radius * sin(theta) * sin(phi);
  
  if(sV != sV) {
    sV = v.y;
  }
  return sV;
}

void main() {

	
  frc = position.y / float(BLADE_HEIGHT);

	
  vPosition = position;
  vPosition.y *= scale;

	
  vNormal = normal;
  vNormal.y /= scale;

	
  vec4 direction = vec4(0.0, halfRootAngle.x, 0.0, halfRootAngle.y);
  vPosition = rotateVectorByQuaternion(vPosition, direction);
  vNormal = rotateVectorByQuaternion(vNormal, direction);

  
  vUv = uv;

  vec3 pos;
  vec3 globalPos;
  vec3 tile;

  globalPos.x = offset.x - posX * delta;
  globalPos.z = offset.z - posZ * delta;

  tile.x = floor((globalPos.x + 0.5 * width) / width);
  tile.z = floor((globalPos.z + 0.5 * width) / width);

  pos.x = globalPos.x - tile.x * width;
  pos.z = globalPos.z - tile.z * width;

  pos.y = max(0.0, placeOnSphere(pos)) - radius;
  pos.y += getYPosition(vec2(pos.x + delta * posX, pos.z + delta * posZ));

	
  vec2 fractionalPos = 0.5 + offset.xz / width;
  
  fractionalPos *= TWO_PI;

  
  float noise = 0.5 + 0.5 * sin(fractionalPos.x + time);
  float halfAngle = -noise * 0.1;
  noise = 0.5 + 0.5 * cos(fractionalPos.y + time);
  halfAngle -= noise * 0.05;

  direction = normalize(vec4(sin(halfAngle), 0.0, -sin(halfAngle), cos(halfAngle)));

	
  vPosition = rotateVectorByQuaternion(vPosition, direction);
  vNormal = rotateVectorByQuaternion(vNormal, direction);

	
  vPosition += pos;

	
  idx = index;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);

}`;const iS=10,A2=64,C2=iS/A2,R2=.1,P2=1.5,S0=jb?100:300,b2=.7,L2=1.5,D2=.5,I2=1.5,U2=256,N2=new k(1,1,.5),O2=new k(1,1,1);var M0=new je(.01,.01);const F2=4,Ru=.4,k2=Ru/8.33;var z2=.2,E0=.4;class B2{constructor(e){de(this,"context");de(this,"viewDirection");de(this,"geometry");de(this,"material");de(this,"group");this.context=e,this.viewDirection=new k,this.geometry=new Wb,this.createGrassInstances();const t=new Vo,i=t.load(l2),r=t.load(a2),s=t.load(u2);this.material=new vl({uniforms:{time:{value:0},delta:{value:C2},posX:{value:M0.x},posZ:{value:M0.y},radius:{value:0},width:{value:iS},map:{value:i},alphaMap:{value:r},noiseTexture:{value:s},sunDirection:{value:new k(Math.sin(E0),Math.sin(z2),-Math.cos(E0))},cameraPosition:{value:this.context.camera.position},ambientStrength:{value:b2},translucencyStrength:{value:L2},diffuseStrength:{value:I2},specularStrength:{value:D2},shininess:{value:U2},lightColour:{value:N2},specularColour:{value:O2}},vertexShader:w2,fragmentShader:T2,side:on}),this.group=new dn(this.geometry,this.material)}get position(){return this.group.position}get uniforms(){return this.material.uniforms}createGrassInstances(){const e=new Zo(k2,Ru,1,F2);e.translate(0,Ru/2,0);let t=new k,i=new Qi,r=new Qi,s,o,a,l,u,c,f;u=.05,c=Math.sin(u/2),f=new k(0,1,0),s=f.x*c,o=f.y*c,a=f.z*c,l=Math.cos(u/2),i.set(s,o,a,l),u=.3,c=Math.sin(u/2),f.set(1,0,0),s=f.x*c,o=f.y*c,a=f.z*c,l=Math.cos(u/2),r.set(s,o,a,l),i.multiply(r),u=.1,c=Math.sin(u/2),f.set(0,0,1),s=f.x*c,o=f.y*c,a=f.z*c,l=Math.cos(u/2),r.set(s,o,a,l),i.multiply(r);let d=new Qi;for(let S=0;S<e.attributes.position.array.length;S+=3){d.setFromAxisAngle(new k(0,1,0),Math.PI/2),t.x=e.attributes.position.array[S],t.y=e.attributes.position.array[S+1],t.z=e.attributes.position.array[S+2];let E=t.y/Ru;d.slerp(i,E),t.applyQuaternion(d),e.attributes.position.array,e.attributes.position.array[S]=t.x,e.attributes.position.array[S+1]=t.y,e.attributes.position.array[S+2]=t.z}e.computeVertexNormals(),this.geometry.index=e.index,this.geometry.attributes.position=e.attributes.position,this.geometry.attributes.uv=e.attributes.uv,this.geometry.attributes.normal=e.attributes.normal;var p=[],_=[],m=[],g=[];for(let S=0;S<S0;S++){p.push(S/S0);const{x:E,y:w,z:P}=this.getRandCirclePos();_.push(E,w,P);let y=Math.PI-Math.random()*(2*Math.PI);g.push(Math.sin(.5*y),Math.cos(.5*y)),S%3!=0?m.push(2+Math.random()*1.25):m.push(2+Math.random())}var h=new au(new Float32Array(_),3),v=new au(new Float32Array(m),1),x=new au(new Float32Array(g),2),M=new au(new Float32Array(p),1);this.geometry.setAttribute("offset",h),this.geometry.setAttribute("scale",v),this.geometry.setAttribute("halfRootAngle",x),this.geometry.setAttribute("index",M)}getRandCirclePos(){const e=mi(R2,P2),t=mi(0,Math.PI*2);return{x:e*Math.cos(t),y:0,z:e*Math.sin(t)}}update(){this.uniforms.time.value=this.context.clock.getElapsedTime()}}var V2=`precision highp float;

varying vec2 vUv;

float remap(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (value - oldMin) * (newMax - newMin) / (oldMax - oldMin);
}

void main() {
    vec3 color = vec3(0.28, 0.69, 0.85);
    vec2 nUv = abs(vUv);
    float dist = length(nUv);
    float alpha = 1.0;

  float threshold = 0.2;
  
  
  
  
  

  if(dist > threshold) {
    alpha = 1.0 - remap(dist, threshold, 0.5, 0.0, 1.0);
  }
  
  
  
   alpha *= 0.6;

    gl_FragColor = vec4(color, alpha);
}`,H2=`precision highp float;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  vUv = uv - 0.5;
}`;class G2{constructor(){de(this,"geometry");de(this,"material");de(this,"group");this.geometry=new Hn,this.createClouds();const e=new Vo().load(v0);e.flipY=!1,this.material=new Zy({map:new Vo().load(v0),transparent:!0,color:16777215,opacity:.55,size:4.5}),this.group=new nm(this.geometry,this.material)}createClouds(){const e=[-.2,2.5,1,-2.4,.3,1.9,2.2,.7,2.5],t=[5,7,6],i=[.45,1,.5];this.geometry.setAttribute("position",new at(e,3)),this.geometry.setAttribute("size",new at(t,1)),this.geometry.setAttribute("alpha",new at(i,1))}update(){}}class W2{constructor(){de(this,"clouds");de(this,"geometry");de(this,"material");de(this,"background");de(this,"group");this.clouds=new G2,this.geometry=new Zo(8.5,8),this.material=new vl({fragmentShader:V2,vertexShader:H2,uniforms:{},side:on,transparent:!0}),this.background=new dn(this.geometry,this.material),this.group=new us,this.group.add(this.background),this.group.add(this.clouds.group)}get position(){return this.group.position}get uniforms(){return this.material.uniforms}update(){}}var X2=`precision highp float;

varying vec2 vUv;
varying float vDistance;

float remap(float value, float oldMin, float oldMax, float newMin, float newMax) {
    return newMin + (value - oldMin) * (newMax - newMin) / (oldMax - oldMin);
}

void main() {
    vec3 color = vec3(0.1, 0.25, 0.02);
    float normalizedDistance = remap(vDistance, 0.0, 1.7, 0.0, 1.0);
    float alpha = 1.0;
    

    float threshold = 0.8;
    if(normalizedDistance > threshold) {
      alpha = 1.0 - remap(normalizedDistance, threshold, 1.0, 0.0, 1.0);
    }

    alpha *= 0.4;

    gl_FragColor = vec4(color, alpha);
}`,$2=`precision highp float;

uniform mat4 projectionMatrix;
uniform mat4 modelViewMatrix;

attribute vec3 position;
attribute vec2 uv;

varying vec2 vUv;
varying float vDistance;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_Position = projectionMatrix * mvPosition;

  vUv = uv;
  vDistance = length(position.xyz);
}`;class j2{constructor(){de(this,"geometry");de(this,"material");de(this,"group");this.geometry=new rm(1.7,32),this.material=new vl({fragmentShader:X2,vertexShader:$2,transparent:!0,side:on}),this.group=new dn(this.geometry,this.material),this.group.rotateX(-Rs(90))}get position(){return this.group.position}get rotation(){return this.group.rotation}update(){}}const fu=.07,Y2=.07,q2=.15,T0=Rs(-80),w0=Rs(0),K2=0,A0=1,Z2=5e-4,Q2=.003,mh=.2,J2=.8;class eL{constructor(e){de(this,"context");de(this,"spherical");de(this,"rotationMatrix");de(this,"targetQuaternion");de(this,"target");de(this,"curve");de(this,"pathProgess");de(this,"pathProgressVelocity");de(this,"wingRotationDirection");de(this,"wingRotationVelocity");de(this,"wingRotation");de(this,"wing1");de(this,"wing2");de(this,"material");de(this,"group");de(this,"butterfly");this.context=e,this.spherical=new Xb,this.rotationMatrix=new At,this.targetQuaternion=new Qi,this.target=new dn,this.curve=new Bb([new k(0,-.25,0),new k(-.6,.4,-1),new k(-.5,1,-1.5),new k(0,1,-3.5),new k(1,1.5,-4),new k(.5,2,-4.5),new k(0,2.5,-5)]),this.pathProgess=0,this.wingRotationDirection=1,this.wingRotationVelocity=mi(Y2,q2),this.wingRotation=Rs(20),this.pathProgressVelocity=Kn(T0,w0,Z2,Q2,this.wingRotationVelocity),this.material=new em({map:new Vo().load(c2),transparent:!0,side:on});const t=new Zo(fu,fu*1.3),i=t.clone();t.translate(fu/2,0,0),i.translate(fu/2,0,0),this.wing1=new dn(t,this.material),this.wing2=new dn(i,this.material),this.wing2.rotation.set(0,Rs(180),0),this.butterfly=new us,this.butterfly.add(this.wing1),this.butterfly.add(this.wing2),this.group=new us,this.group.add(this.butterfly)}get position(){return this.group.position}updateTarget(){const e=this.curve.getPoint(this.pathProgess);this.target.position.set(e.x,e.y,e.z)}update(){this.wingRotation>=w0?this.wingRotationDirection=-1:this.wingRotation<=T0&&(this.wingRotationDirection=1),this.wingRotation+=this.wingRotationVelocity*this.wingRotationDirection,this.wing1.rotation.y=this.wingRotation,this.wing2.rotation.y=Math.PI-this.wingRotation,this.pathProgess>=A0?this.pathProgess=K2:this.pathProgess+=this.pathProgressVelocity;const e=this.curve.getPoint(this.pathProgess);this.butterfly.position.set(e.x,e.y,e.z);const t=this.curve.getPoint(Math.min(this.pathProgess+this.pathProgressVelocity,A0));this.target.position.set(t.x,t.y,t.z),this.rotationMatrix.lookAt(this.target.position,this.butterfly.position,this.butterfly.up),this.targetQuaternion.setFromRotationMatrix(this.rotationMatrix);const i=this.context.clock.getElapsedTime();if(!this.butterfly.quaternion.equals(this.targetQuaternion)){const r=.01*i;this.butterfly.quaternion.rotateTowards(this.targetQuaternion,r)}this.pathProgess<mh&&(this.material.opacity=Kn(0,mh,0,1,this.pathProgess)),this.pathProgess>J2&&(this.material.opacity=1-Kn(mh,1,0,1,this.pathProgess))}}function Xi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function rS(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ho={duration:.5,overwrite:!1,delay:0},om,Zt,ut,Qn=1e8,nt=1/Qn,Ud=Math.PI*2,tL=Ud/4,nL=0,sS=Math.sqrt,iL=Math.cos,rL=Math.sin,Ft=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},ir=function(e){return typeof e=="number"},am=function(e){return typeof e>"u"},Oi=function(e){return typeof e=="object"},yn=function(e){return e!==!1},lm=function(){return typeof window<"u"},hu=function(e){return gt(e)||Ft(e)},oS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Qt=Array.isArray,Nd=/(?:-?\.?\d|\.)+/gi,aS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,gh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,lS=/[+-]=-?[.\d]+/,uS=/[^,'"\[\]\s]+/gi,sL=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,Ai,Od,um,kn={},ac={},cS,fS=function(e){return(ac=Ps(e,kn))&&Tn},cm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},tl=function(e,t){return!t&&console.warn(e)},hS=function(e,t){return e&&(kn[e]=t)&&ac&&(ac[e]=t)||kn},nl=function(){return 0},oL={suppressEvents:!0,isStart:!0,kill:!1},Pu={suppressEvents:!0,kill:!1},aL={suppressEvents:!0},fm={},Dr=[],Fd={},dS,Ln={},_h={},C0=30,bu=[],hm="",dm=function(e){var t=e[0],i,r;if(Oi(t)||gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=bu.length;r--&&!bu[r].targetTest(t););i=bu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new FS(e[r],i)))||e.splice(r,1);return e},gs=function(e){return e._gsap||dm(Jn(e))[0]._gsap},pS=function(e,t,i){return(i=e[t])&&gt(i)?e[t]():am(i)&&e.getAttribute&&e.getAttribute(t)||i},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},xt=function(e){return Math.round(e*1e5)/1e5||0},Nt=function(e){return Math.round(e*1e7)/1e7||0},Ao=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},lL=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},lc=function(){var e=Dr.length,t=Dr.slice(0),i,r;for(Fd={},Dr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},mS=function(e,t,i,r){Dr.length&&!Zt&&lc(),e.render(t,i,r||Zt&&t<0&&(e._initted||e._startAt)),Dr.length&&!Zt&&lc()},gS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(uS).length<2?t:Ft(e)?e.trim():e},_S=function(e){return e},ii=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},uL=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ps=function(e,t){for(var i in t)e[i]=t[i];return e},R0=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Oi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},uc=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},La=function(e){var t=e.parent||ft,i=e.keyframes?uL(Qt(e.keyframes)):ii;if(yn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},cL=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},vS=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},ef=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},kr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},_s=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},fL=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},kd=function(e,t,i,r){return e._startAt&&(Zt?e._startAt.revert(Pu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},hL=function n(e){return!e||e._ts&&n(e.parent)},P0=function(e){return e._repeat?Go(e._tTime,e=e.duration()+e._rDelay)*e:0},Go=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},cc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},tf=function(e){return e._end=Nt(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},nf=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Nt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),tf(e),i._dirty||_s(i,e)),e},xS=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=cc(e.rawTime(),t),(!t._dur||xl(0,t.totalDuration(),i)-t._tTime>nt)&&t.render(i,!0)),_s(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-nt}},Pi=function(e,t,i,r){return t.parent&&kr(t),t._start=Nt((ir(i)?i:i||e!==ft?Xn(e,i,t):e._time)+t._delay),t._end=Nt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),vS(e,t,"_first","_last",e._sort?"_start":0),zd(t)||(e._recent=t),r||xS(e,t),e._ts<0&&nf(e,e._tTime),e},yS=function(e,t){return(kn.ScrollTrigger||cm("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},SS=function(e,t,i,r,s){if(mm(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Zt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&dS!==Dn.frame)return Dr.push(e),e._lazy=[s,r],1},dL=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},zd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},pL=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&dL(e)&&!(!e._initted&&zd(e))||(e._ts<0||e._dp._ts<0)&&!zd(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=xl(0,e._tDur,t),c=Go(l,a),e._yoyo&&c&1&&(o=1-o),c!==Go(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Zt||r||e._zTime===nt||!t&&e._zTime){if(!e._initted&&SS(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?nt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&kd(e,t,i,!0),e._onUpdate&&!i&&Un(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Un(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&kr(e,1),!i&&!Zt&&(Un(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},mL=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Wo=function(e,t,i,r){var s=e._repeat,o=Nt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Nt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&nf(e,e._tTime=e._tDur*a),e.parent&&tf(e),i||_s(e.parent,e),e},b0=function(e){return e instanceof an?_s(e):Wo(e,e._dur)},gL={_start:0,endTime:nl,totalDuration:nl},Xn=function n(e,t,i){var r=e.labels,s=e._recent||gL,o=e.duration()>=Qn?s.endTime(!1):e._dur,a,l,u;return Ft(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Qt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Da=function(e,t,i){var r=ir(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=yn(l.vars.inherit)&&l.parent;o.immediateRender=yn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Et(t[0],o,t[s+1])},Gr=function(e,t){return e||e===0?t(e):t},xl=function(e,t,i){return i<e?e:i>t?t:i},Kt=function(e,t){return!Ft(e)||!(t=sL.exec(e))?"":t[1]},_L=function(e,t,i){return Gr(i,function(r){return xl(e,t,r)})},Bd=[].slice,MS=function(e,t){return e&&Oi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Oi(e[0]))&&!e.nodeType&&e!==Ai},vL=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ft(r)&&!t||MS(r,1)?(s=i).push.apply(s,Jn(r)):i.push(r)})||i},Jn=function(e,t,i){return ut&&!t&&ut.selector?ut.selector(e):Ft(e)&&!i&&(Od||!Xo())?Bd.call((t||um).querySelectorAll(e),0):Qt(e)?vL(e,i):MS(e)?Bd.call(e,0):e?[e]:[]},Vd=function(e){return e=Jn(e)[0]||tl("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Jn(t,i.querySelectorAll?i:i===e?tl("Invalid scope")||um.createElement("div"):e)}},ES=function(e){return e.sort(function(){return .5-Math.random()})},TS=function(e){if(gt(e))return e;var t=Oi(e)?e:{each:e},i=vs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Ft(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,p,_){var m=(_||t).length,g=o[m],h,v,x,M,S,E,w,P,y;if(!g){if(y=t.grid==="auto"?0:(t.grid||[1,Qn])[1],!y){for(w=-Qn;w<(w=_[y++].getBoundingClientRect().left)&&y<m;);y<m&&y--}for(g=o[m]=[],h=l?Math.min(y,m)*c-.5:r%y,v=y===Qn?0:l?m*f/y-.5:r/y|0,w=0,P=Qn,E=0;E<m;E++)x=E%y-h,M=v-(E/y|0),g[E]=S=u?Math.abs(u==="y"?M:x):sS(x*x+M*M),S>w&&(w=S),S<P&&(P=S);r==="random"&&ES(g),g.max=w-P,g.min=P,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(y>m?m-1:u?u==="y"?m/y:y:Math.max(y,m/y))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Kt(t.amount||t.each)||0,i=i&&m<0?US(i):i}return m=(g[d]-g.min)/g.max||0,Nt(g.b+(i?i(m):m)*g.v)+g.u}},Hd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Nt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(ir(i)?0:Kt(i))}},wS=function(e,t){var i=Qt(e),r,s;return!i&&Oi(e)&&(r=i=e.radius||Qn,e.values?(e=Jn(e.values),(s=!ir(e[0]))&&(r*=r)):e=Hd(e.increment)),Gr(t,i?gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Qn,c=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||ir(o)?c:c+Kt(o)}:Hd(e))},AS=function(e,t,i,r){return Gr(Qt(e)?!t:i===!0?!!(i=0):!r,function(){return Qt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},xL=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},yL=function(e,t){return function(i){return e(parseFloat(i))+(t||Kt(i))}},SL=function(e,t,i){return RS(e,t,0,1,i)},CS=function(e,t,i){return Gr(i,function(r){return e[~~t(r)]})},ML=function n(e,t,i){var r=t-e;return Qt(e)?CS(e,n(0,e.length),t):Gr(i,function(s){return(r+(s-e)%r)%r+e})},EL=function n(e,t,i){var r=t-e,s=r*2;return Qt(e)?CS(e,n(0,e.length-1),t):Gr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},il=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?uS:Nd),i+=e.substr(t,r-t)+AS(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},RS=function(e,t,i,r,s){var o=t-e,a=r-i;return Gr(s,function(l){return i+((l-e)/o*a||0)})},TL=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Ft(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Qt(e)&&!Qt(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(_){_*=f;var m=Math.min(d,~~_);return c[m](_-m)},i=t}else r||(e=Ps(Qt(e)?[]:{},e));if(!c){for(l in t)pm.call(a,e,l,"get",t[l]);s=function(_){return vm(_,a)||(o?e.p:e)}}}return Gr(i,s)},L0=function(e,t,i){var r=e.labels,s=Qn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Un=function(e,t,i){var r=e.vars,s=r[t],o=ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Dr.length&&lc(),a&&(ut=a),c=l?s.apply(u,l):s.call(u),ut=o,c},va=function(e){return kr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Zt),e.progress()<1&&Un(e,"onInterrupt"),e},go,PS=[],bS=function(e){if(e)if(e=!e.name&&e.default||e,lm()||e.headless){var t=e.name,i=gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:nl,render:vm,add:pm,kill:BL,modifier:zL,rawVars:0},o={targetTest:0,get:0,getSetter:_m,aliases:{},register:0};if(Xo(),e!==r){if(Ln[t])return;ii(r,ii(uc(e,s),o)),Ps(r.prototype,Ps(s,uc(e,o))),Ln[r.prop=t]=r,e.targetTest&&(bu.push(r),fm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}hS(t,r),e.register&&e.register(Tn,r,Mn)}else PS.push(e)},tt=255,xa={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},vh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*tt+.5|0},LS=function(e,t,i){var r=e?ir(e)?[e>>16,e>>8&tt,e&tt]:0:xa.black,s,o,a,l,u,c,f,d,p,_;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),xa[e])r=xa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&tt,r&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(r=_=e.match(Nd),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=vh(l+1/3,s,o),r[1]=vh(l,s,o),r[2]=vh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(aS),i&&r.length<4&&(r[3]=1),r}else r=e.match(Nd)||xa.transparent;r=r.map(Number)}return t&&!_&&(s=r[0]/tt,o=r[1]/tt,a=r[2]/tt,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(p=f-d,u=c>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},DS=function(e){var t=[],i=[],r=-1;return e.split(Ir).forEach(function(s){var o=s.match(mo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},D0=function(e,t,i){var r="",s=(e+r).match(Ir),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=LS(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=DS(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ir,"1").split(mo),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ir),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Ir=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in xa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),wL=/hsl[a]?\(/,IS=function(e){var t=e.join(" "),i;if(Ir.lastIndex=0,Ir.test(t))return i=wL.test(t),e[1]=D0(e[1],i),e[0]=D0(e[0],i,DS(e[1])),!0},rl,Dn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,p,_=function m(g){var h=n()-r,v=g===!0,x,M,S,E;if((h>e||h<0)&&(i+=h-t),r+=h,S=r-i,x=S-o,(x>0||v)&&(E=++f.frame,d=S-f.time*1e3,f.time=S=S/1e3,o+=x+(x>=s?4:s-x),M=1),v||(l=u(m)),M)for(p=0;p<a.length;p++)a[p](S,d,E,g)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){cS&&(!Od&&lm()&&(Ai=Od=window,um=Ai.document||{},kn.gsap=Tn,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(Tn.version),fS(ac||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),PS.forEach(bS)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,o-f.time*1e3+1|0)},rl=1,_(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),rl=0,u=nl},lagSmoothing:function(g,h){e=g||1/0,t=Math.min(h||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,h,v){var x=h?function(M,S,E,w){g(M,S,E,w),f.remove(x)}:g;return f.remove(g),a[v?"unshift":"push"](x),Xo(),x},remove:function(g,h){~(h=a.indexOf(g))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},f}(),Xo=function(){return!rl&&Dn.wake()},He={},AL=/^[\d.\-M][\d.\-,\s]/,CL=/["']/g,RL=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(CL,"").trim():+u,r=l.substr(a+1).trim();return t},PL=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},bL=function(e){var t=(e+"").split("("),i=He[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[RL(t[1])]:PL(e).split(",").map(gS)):He._CE&&AL.test(e)?He._CE("",e):i},US=function(e){return function(t){return 1-e(1-t)}},NS=function n(e,t){for(var i=e._first,r;i;)i instanceof an?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},vs=function(e,t){return e&&(gt(e)?e:He[e]||bL(e))||t},Us=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Sn(e,function(a){He[a]=kn[a]=s,He[o=a.toLowerCase()]=i;for(var l in s)He[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=He[a+"."+l]=s[l]}),s},OS=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},xh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Ud*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*rL((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:OS(a);return s=Ud/s,l.config=function(u,c){return n(e,u,c)},l},yh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:OS(i);return r.config=function(s){return n(e,s)},r};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Us(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});He.Linear.easeNone=He.none=He.Linear.easeIn;Us("Elastic",xh("in"),xh("out"),xh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Us("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Us("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Us("Circ",function(n){return-(sS(1-n*n)-1)});Us("Sine",function(n){return n===1?1:-iL(n*tL)+1});Us("Back",yh("in"),yh("out"),yh());He.SteppedEase=He.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-nt;return function(a){return((r*xl(0,o,a)|0)+s)*i}}};Ho.ease=He["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return hm+=n+","+n+"Params,"});var FS=function(e,t){this.id=nL++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:pS,this.set=t?t.getSetter:_m},sl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Wo(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),rl||Dn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Wo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Xo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(nf(this,i),!s._dp||s.parent||xS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===nt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),mS(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+P0(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+P0(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Go(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?cc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-nt?0:this._rts,this.totalTime(xl(-Math.abs(this._delay),this._tDur,s),r!==!1),tf(this),fL(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Xo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Pi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(yn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=aL);var r=Zt;return Zt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Zt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,b0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,b0(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Xn(this,i),yn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,yn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-nt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=gt(i)?i:_S,a=function(){var u=r.then;r.then=null,gt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){va(this)},n}();ii(sl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var an=function(n){rS(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=yn(i.sortChildren),ft&&Pi(i.parent||ft,Xi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&yS(Xi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Da(0,arguments,this),this},t.from=function(r,s,o){return Da(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Da(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,La(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,Xn(this,o),1),this},t.call=function(r,s,o){return Pi(this,Et.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Et(r,o,Xn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,La(o).immediateRender=yn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,La(a).immediateRender=yn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Nt(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,p,_,m,g,h,v,x,M,S,E,w;if(this!==ft&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,M=this._start,x=this._ts,h=!x,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(d=Nt(c%g),c===l?(m=this._repeat,d=u):(m=~~(c/g),m&&m===c/g&&(d=u,m--),d>u&&(d=u)),S=Go(this._tTime,g),!a&&this._tTime&&S!==m&&this._tTime-S*g-this._dur<=0&&(S=m),E&&m&1&&(d=u-d,w=1),m!==S&&!this._lock){var P=E&&S&1,y=P===(E&&m&1);if(m<S&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(w?0:Nt(m*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Un(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,y&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;NS(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=mL(this,Nt(a),Nt(d)),v&&(c-=d-(d=v._start))),this._tTime=c,this._time=d,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!m&&(Un(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(_=p._next,(p._act||d>=p._start)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=-nt);break}}p=_}else{p=this._last;for(var A=r<0?r:d;p;){if(_=p._prev,(p._act||A<=p._end)&&p._ts&&v!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,s,o||Zt&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!h){v=0,_&&(c+=this._zTime=A?-nt:nt);break}}p=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-nt)._zTime=d>=a?1:-1,this._ts))return this._start=M,tf(this),this.render(r,s,o);this._onUpdate&&!s&&Un(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&kr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Un(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(ir(s)||(s=Xn(this,s,r)),!(r instanceof sl)){if(Qt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ft(r))return this.addLabel(r,s);if(gt(r))r=Et.delayedCall(0,r);else return this}return this!==r?Pi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Qn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Et?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ft(r)?this.removeLabel(r):gt(r)?this.killTweensOf(r):(ef(this,r),r===this._recent&&(this._recent=this._last),_s(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Nt(Dn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Et.delayedCall(0,s||nl,o);return a.data="isPause",this._hasPause=1,Pi(this,a,Xn(this,r))},t.removePause=function(r){var s=this._first;for(r=Xn(this,r);s;)s._start===r&&s.data==="isPause"&&kr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Jn(r),l=this._first,u=ir(s),c;l;)l instanceof Et?lL(l._targets,a)&&(u?(!xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Xn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,p,_=Et.to(o,ii({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||nt,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());_._dur!==g&&Wo(_,g,0,1).render(_._time,!0,!0),p=1}c&&c.apply(_,f||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,ii({startAt:{time:Xn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),L0(this,Xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),L0(this,Xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return _s(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),_s(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Qn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Pi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Wo(o,o===ft&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(ft._ts&&(mS(ft,cc(r,ft)),dS=Dn.frame),Dn.frame>=C0){C0+=On.autoSleep||120;var s=ft._first;if((!s||!s._ts)&&On.autoSleep&&Dn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Dn.sleep()}}},e}(sl);ii(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var LL=function(e,t,i,r,s,o,a){var l=new Mn(this._pt,e,t,0,1,GS,null,s),u=0,c=0,f,d,p,_,m,g,h,v;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=il(r)),o&&(v=[i,r],o(v,e,t),i=v[0],r=v[1]),d=i.match(gh)||[];f=gh.exec(r);)_=f[0],m=r.substring(u,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),_!==d[c++]&&(g=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:_.charAt(1)==="="?Ao(g,_)-g:parseFloat(_)-g,m:p&&p<4?Math.round:0},u=gh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(lS.test(r)||h)&&(l.e=0),this._pt=l,l},pm=function(e,t,i,r,s,o,a,l,u,c){gt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:gt(f)?u?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=gt(f)?u?OL:VS:gm,_;if(Ft(r)&&(~r.indexOf("random(")&&(r=il(r)),r.charAt(1)==="="&&(_=Ao(d,r)+(Kt(d)||0),(_||_===0)&&(r=_))),!c||d!==r||Gd)return!isNaN(d*r)&&r!==""?(_=new Mn(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?kL:HS,0,p),u&&(_.fp=u),a&&_.modifier(a,this,e),this._pt=_):(!f&&!(t in e)&&cm(t,r),LL.call(this,e,t,d,r,p,l||On.stringFilter,u))},DL=function(e,t,i,r,s){if(gt(e)&&(e=Ia(e,s,t,i,r)),!Oi(e)||e.style&&e.nodeType||Qt(e)||oS(e))return Ft(e)?Ia(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ia(e[a],s,t,i,r);return o},kS=function(e,t,i,r,s,o){var a,l,u,c;if(Ln[e]&&(a=new Ln[e]).init(s,a.rawVars?t[e]:DL(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new Mn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==go))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},xr,Gd,mm=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,p=r.autoRevert,_=e._dur,m=e._startAt,g=e._targets,h=e.parent,v=h&&h.data==="nested"?h.vars.targets:g,x=e._overwrite==="auto"&&!om,M=e.timeline,S,E,w,P,y,A,Y,W,U,V,H,Q,$;if(M&&(!d||!s)&&(s="none"),e._ease=vs(s,Ho.ease),e._yEase=f?US(vs(f===!0?s:f,Ho.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!M&&!!r.runBackwards,!M||d&&!r.stagger){if(W=g[0]?gs(g[0]).harness:0,Q=W&&r[W.prop],S=uc(r,fm),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&_?Pu:oL),m._lazy=0),o){if(kr(e._startAt=Et.set(g,ii({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!m&&yn(l),startAt:null,delay:0,onUpdate:u&&function(){return Un(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt||!a&&!p)&&e._startAt.revert(Pu),a&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&_&&!m){if(t&&(a=!1),w=ii({overwrite:!1,data:"isFromStart",lazy:a&&!m&&yn(l),immediateRender:a,stagger:0,parent:h},S),Q&&(w[W.prop]=Q),kr(e._startAt=Et.set(g,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Zt?e._startAt.revert(Pu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&yn(l)||l&&!_,E=0;E<g.length;E++){if(y=g[E],Y=y._gsap||dm(g)[E]._gsap,e._ptLookup[E]=V={},Fd[Y.id]&&Dr.length&&lc(),H=v===g?E:v.indexOf(y),W&&(U=new W).init(y,Q||S,e,H,v)!==!1&&(e._pt=P=new Mn(e._pt,y,U.name,0,1,U.render,U,0,U.priority),U._props.forEach(function(D){V[D]=P}),U.priority&&(A=1)),!W||Q)for(w in S)Ln[w]&&(U=kS(w,S,e,H,y,v))?U.priority&&(A=1):V[w]=P=pm.call(e,y,w,"get",S[w],H,v,0,r.stringFilter);e._op&&e._op[E]&&e.kill(y,e._op[E]),x&&e._pt&&(xr=e,ft.killTweensOf(y,V,e.globalTime(t)),$=!e.parent,xr=0),e._pt&&l&&(Fd[Y.id]=1)}A&&WS(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!$,d&&t<=0&&M.render(Qn,!0,!0)},IL=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Gd=1,e.vars[t]="+=0",mm(e,a),Gd=0,l?tl(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=xt(i)+Kt(f.e)),f.b&&(f.b=c.s+Kt(f.b))},UL=function(e,t){var i=e[0]?gs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ps({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},NL=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Qt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ia=function(e,t,i,r,s){return gt(e)?e.call(t,i,r,s):Ft(e)&&~e.indexOf("random(")?il(e):e},zS=hm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",BS={};Sn(zS+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return BS[n]=1});var Et=function(n){rS(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:La(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,h=l.yoyoEase,v=r.parent||ft,x=(Qt(i)||oS(i)?ir(i[0]):"length"in r)?[i]:Jn(i),M,S,E,w,P,y,A,Y;if(a._targets=x.length?dm(x):tl("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,_||d||hu(u)||hu(c)){if(r=a.vars,M=a.timeline=new an({data:"nested",defaults:m||{},targets:v&&v.data==="nested"?v.vars.targets:x}),M.kill(),M.parent=M._dp=Xi(a),M._start=0,d||hu(u)||hu(c)){if(w=x.length,A=d&&TS(d),Oi(d))for(P in d)~zS.indexOf(P)&&(Y||(Y={}),Y[P]=d[P]);for(S=0;S<w;S++)E=uc(r,BS),E.stagger=0,h&&(E.yoyoEase=h),Y&&Ps(E,Y),y=x[S],E.duration=+Ia(u,Xi(a),S,y,x),E.delay=(+Ia(c,Xi(a),S,y,x)||0)-a._delay,!d&&w===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),M.to(y,E,A?A(S,y,x):0),M._ease=He.none;M.duration()?u=c=0:a.timeline=0}else if(_){La(ii(M.vars.defaults,{ease:"none"})),M._ease=vs(_.ease||r.ease||"none");var W=0,U,V,H;if(Qt(_))_.forEach(function(Q){return M.to(x,Q,">")}),M.duration();else{E={};for(P in _)P==="ease"||P==="easeEach"||NL(P,_[P],E,_.easeEach);for(P in E)for(U=E[P].sort(function(Q,$){return Q.t-$.t}),W=0,S=0;S<U.length;S++)V=U[S],H={ease:V.e,duration:(V.t-(S?U[S-1].t:0))/100*u},H[P]=V.v,M.to(x,H,W),W+=H.duration;M.duration()<u&&M.to({},{duration:u-M.duration()})}}u||a.duration(u=M.duration())}else a.timeline=0;return p===!0&&!om&&(xr=Xi(a),ft.killTweensOf(x),xr=0),Pi(v,Xi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!_&&a._start===Nt(v._time)&&yn(f)&&hL(Xi(a))&&v.data!=="nested")&&(a._tTime=-nt,a.render(Math.max(0,-c)||0)),g&&yS(Xi(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-nt&&!c?l:r<nt?0:r,d,p,_,m,g,h,v,x,M;if(!u)pL(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=f,x=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(d=Nt(f%m),f===l?(_=this._repeat,d=u):(_=~~(f/m),_&&_===Nt(f/m)&&(d=u,_--),d>u&&(d=u)),h=this._yoyo&&_&1,h&&(M=this._yEase,d=u-d),g=Go(this._tTime,m),d===a&&!o&&this._initted&&_===g)return this._tTime=f,this;_!==g&&(x&&this._yEase&&NS(x,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==m&&this._initted&&(this._lock=o=1,this.render(Nt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(SS(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(M||this._ease)(d/u),this._from&&(this.ratio=v=1-v),d&&!a&&!s&&!_&&(Un(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(v,p.d),p=p._next;x&&x.render(r<0?r:x._dur*x._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&kd(this,r,s,o),Un(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&Un(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&kd(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&kr(this,1),!s&&!(c&&!a)&&(f||a||h)&&(Un(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){rl||Dn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||mm(this,u),c=this._ease(u/this._dur),IL(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(nf(this,0),this.parent||vS(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?va(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xr&&xr.vars.overwrite!==!0)._first||va(this),this.parent&&o!==this.timeline.totalDuration()&&Wo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Jn(r):a,u=this._ptLookup,c=this._pt,f,d,p,_,m,g,h;if((!s||s==="all")&&cL(a,l))return s==="all"&&(this._pt=0),va(this);for(f=this._op=this._op||[],s!=="all"&&(Ft(s)&&(m={},Sn(s,function(v){return m[v]=1}),s=m),s=UL(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){d=u[h],s==="all"?(f[h]=s,_=d,p={}):(p=f[h]=f[h]||{},_=s);for(m in _)g=d&&d[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&ef(this,g,"_pt"),delete d[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&va(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Da(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Da(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return ft.killTweensOf(r,s,o)},e}(sl);ii(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(n){Et[n]=function(){var e=new an,t=Bd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var gm=function(e,t,i){return e[t]=i},VS=function(e,t,i){return e[t](i)},OL=function(e,t,i,r){return e[t](r.fp,i)},FL=function(e,t,i){return e.setAttribute(t,i)},_m=function(e,t){return gt(e[t])?VS:am(e[t])&&e.setAttribute?FL:gm},HS=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},kL=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},GS=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},vm=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},zL=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},BL=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?ef(this,t,"_pt"):t.dep||(i=1),t=r;return!i},VL=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},WS=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},Mn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||HS,this.d=l||this,this.set=u||gm,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=VL,this.m=i,this.mt=s,this.tween=r},n}();Sn(hm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return fm[n]=1});kn.TweenMax=kn.TweenLite=Et;kn.TimelineLite=kn.TimelineMax=an;ft=new an({sortChildren:!1,defaults:Ho,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=IS;var xs=[],Lu={},HL=[],I0=0,GL=0,Sh=function(e){return(Lu[e]||HL).map(function(t){return t()})},Wd=function(){var e=Date.now(),t=[];e-I0>2&&(Sh("matchMediaInit"),xs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Ai.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Sh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),I0=e,Sh("matchMedia"))},XS=function(){function n(t,i){this.selector=i&&Vd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=GL++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){gt(i)&&(s=r,r=i,i=gt);var o=this,a=function(){var u=ut,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Vd(s)),ut=o,f=r.apply(o,arguments),gt(f)&&o._r.push(f),ut=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ut;ut=null,i(this),ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof an?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Et)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=xs.length;o--;)xs[o].id===this.id&&xs.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),WL=function(){function n(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Oi(i)||(i={matches:i});var o=new XS(0,s||this.scope),a=o.conditions={},l,u,c;ut&&!o.selector&&(o.selector=ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Ai.matchMedia(i[u]),l&&(xs.indexOf(o)<0&&xs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Wd):l.addEventListener("change",Wd)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),fc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return bS(r)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return ft.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ft(e)&&(e=Jn(e)[0]);var s=gs(e||{}).get,o=i?_S:gS;return i==="native"&&(i=""),e&&(t?o((Ln[t]&&Ln[t].get||s)(e,t,i,r)):function(a,l,u){return o((Ln[a]&&Ln[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Jn(e),e.length>1){var r=e.map(function(c){return Tn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Ln[t],a=gs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;go._pt=0,f.init(e,i?c+i:c,go,0,[e]),f.render(1,f),go._pt&&vm(1,go)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Tn.to(e,Ps((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=vs(e.ease,Ho.ease)),R0(Ho,e||{})},config:function(e){return R0(On,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Ln[a]&&!kn[a]&&tl(t+" effect requires "+a+" plugin.")}),_h[t]=function(a,l,u){return i(Jn(a),ii(l||{},s),u)},o&&(an.prototype[t]=function(a,l,u){return this.add(_h[t](a,Oi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){He[e]=vs(t)},parseEase:function(e,t){return arguments.length?vs(e,t):He},getById:function(e){return ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new an(e),r,s;for(i.smoothChildTiming=yn(e.smoothChildTiming),ft.remove(i),i._dp=0,i._time=i._tTime=ft._time,r=ft._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&Pi(i,r,r._start-r._delay),r=s;return Pi(ft,i,0),i},context:function(e,t){return e?new XS(e,t):ut},matchMedia:function(e){return new WL(e)},matchMediaRefresh:function(){return xs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Wd()},addEventListener:function(e,t){var i=Lu[e]||(Lu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Lu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:ML,wrapYoyo:EL,distribute:TS,random:AS,snap:wS,normalize:SL,getUnit:Kt,clamp:_L,splitColor:LS,toArray:Jn,selector:Vd,mapRange:RS,pipe:xL,unitize:yL,interpolate:TL,shuffle:ES},install:fS,effects:_h,ticker:Dn,updateRoot:an.updateRoot,plugins:Ln,globalTimeline:ft,core:{PropTween:Mn,globals:hS,Tween:Et,Timeline:an,Animation:sl,getCache:gs,_removeLinkedListItem:ef,reverting:function(){return Zt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return om=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return fc[n]=Et[n]});Dn.add(an.updateRoot);go=fc.to({},{duration:0});var XL=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},$L=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=XL(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Mh=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ft(s)&&(l={},Sn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}$L(a,s)}}}},Tn=fc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Zt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Mh("roundProps",Hd),Mh("modifiers"),Mh("snap",wS))||fc;Et.version=an.version=Tn.version="3.12.5";cS=1;lm()&&Xo();He.Power0;He.Power1;He.Power2;var jL=He.Power3;He.Power4;He.Linear;He.Quad;He.Cubic;He.Quart;He.Quint;He.Strong;He.Elastic;He.Back;He.SteppedEase;He.Bounce;He.Sine;He.Expo;He.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var U0,yr,Co,xm,cs,N0,ym,YL=function(){return typeof window<"u"},rr={},ns=180/Math.PI,Ro=Math.PI/180,Qs=Math.atan2,O0=1e8,Sm=/([A-Z])/g,qL=/(left|right|width|margin|padding|x)/i,KL=/[\s,\(]\S/,Li={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Xd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},ZL=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QL=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},JL=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},$S=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},jS=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},eD=function(e,t,i){return e.style[t]=i},tD=function(e,t,i){return e.style.setProperty(t,i)},nD=function(e,t,i){return e._gsap[t]=i},iD=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},rD=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},sD=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},ht="transform",En=ht+"Origin",oD=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in rr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Li[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=ji(r,a)}):this.tfm[e]=o.x?o[e]:ji(r,e),e===En&&(this.tfm.zOrigin=o.zOrigin);else return Li.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(ht)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(En,t,"")),e=ht}(s||t)&&this.props.push(e,t,s[e])},YS=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},aD=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Sm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ym(),(!s||!s.isStart)&&!i[ht]&&(YS(i),r.zOrigin&&i[En]&&(i[En]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},qS=function(e,t){var i={target:e,props:[],revert:aD,save:oD};return e._gsap||Tn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},KS,$d=function(e,t){var i=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return i&&i.style?i:yr.createElement(e)},Ui=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Sm,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,$o(t)||t,1)||""},F0="O,Moz,ms,Ms,Webkit".split(","),$o=function(e,t,i){var r=t||cs,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(F0[o]+e in s););return o<0?null:(o===3?"ms":o>=0?F0[o]:"")+e},jd=function(){YL()&&window.document&&(U0=window,yr=U0.document,Co=yr.documentElement,cs=$d("div")||{style:{}},$d("div"),ht=$o(ht),En=ht+"Origin",cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",KS=!!$o("perspective"),ym=Tn.core.reverting,xm=1)},Eh=function n(e){var t=$d("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Co.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Co.removeChild(t),this.style.cssText=s,o},k0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},ZS=function(e){var t;try{t=e.getBBox()}catch{t=Eh.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Eh||(t=Eh.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+k0(e,["x","cx","x1"])||0,y:+k0(e,["y","cy","y1"])||0,width:0,height:0}:t},QS=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&ZS(e))},bs=function(e,t){if(t){var i=e.style,r;t in rr&&t!==En&&(t=ht),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Sm,"-$1").toLowerCase())):i.removeAttribute(t)}},Sr=function(e,t,i,r,s,o){var a=new Mn(e._pt,t,i,0,1,o?jS:$S);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},z0={deg:1,rad:1,turn:1},lD={grid:1,flex:1},zr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=cs.style,l=qL.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",_,m,g,h;if(r===o||!s||z0[r]||z0[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),h=e.getCTM&&QS(e),(p||o==="%")&&(rr[t]||~t.indexOf("adius")))return _=h?e.getBBox()[l?"width":"height"]:e[c],xt(p?s/_*f:s/100*_);if(a[l?"width":"height"]=f+(d?o:r),m=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===yr||!m.appendChild)&&(m=yr.body),g=m._gsap,g&&p&&g.width&&l&&g.time===Dn.time&&!g.uncache)return xt(s/g.width*f);if(p&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=f+r,_=e[c],v?e.style[t]=v:bs(e,t)}else(p||o==="%")&&!lD[Ui(m,"display")]&&(a.position=Ui(e,"position")),m===e&&(a.position="static"),m.appendChild(cs),_=cs[c],m.removeChild(cs),a.position="absolute";return l&&p&&(g=gs(m),g.time=Dn.time,g.width=m[c]),xt(d?_*s/f:_&&s?f/_*s:0)},ji=function(e,t,i,r){var s;return xm||jd(),t in Li&&t!=="transform"&&(t=Li[t],~t.indexOf(",")&&(t=t.split(",")[0])),rr[t]&&t!=="transform"?(s=al(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:dc(Ui(e,En))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=hc[t]&&hc[t](e,t,i)||Ui(e,t)||pS(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?zr(e,t,s,i)+i:s},uD=function(e,t,i,r){if(!i||i==="none"){var s=$o(t,e,1),o=s&&Ui(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ui(e,"borderTopColor"))}var a=new Mn(this._pt,e.style,t,0,1,GS),l=0,u=0,c,f,d,p,_,m,g,h,v,x,M,S;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(m=e.style[t],e.style[t]=r,r=Ui(e,t)||r,m?e.style[t]=m:bs(e,t)),c=[i,r],IS(c),i=c[0],r=c[1],d=i.match(mo)||[],S=r.match(mo)||[],S.length){for(;f=mo.exec(r);)g=f[0],v=r.substring(l,f.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),g!==(m=d[u++]||"")&&(p=parseFloat(m)||0,M=m.substr((p+"").length),g.charAt(1)==="="&&(g=Ao(p,g)+M),h=parseFloat(g),x=g.substr((h+"").length),l=mo.lastIndex-x.length,x||(x=x||On.units[t]||M,l===r.length&&(r+=x,a.e+=x)),M!==x&&(p=zr(e,t,m,x)||0),a._pt={_next:a._pt,p:v||u===1?v:",",s:p,c:h-p,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?jS:$S;return lS.test(r)&&(a.e=0),this._pt=a,a},B0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cD=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=B0[i]||i,t[1]=B0[r]||r,t.join(" ")},fD=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],rr[a]&&(l=1,a=a==="transformOrigin"?En:ht),bs(i,a);l&&(bs(i,ht),o&&(o.svg&&i.removeAttribute("transform"),al(i,1),o.uncache=1,YS(r)))}},hc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new Mn(e._pt,t,i,0,0,fD);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},ol=[1,0,0,1,0,0],JS={},eM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},V0=function(e){var t=Ui(e,ht);return eM(t)?ol:t.substr(7).match(aS).map(xt)},Mm=function(e,t){var i=e._gsap||gs(e),r=e.style,s=V0(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ol:s):(s===ol&&!e.offsetParent&&e!==Co&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Co.appendChild(e)),s=V0(e),l?r.display=l:bs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Co.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Yd=function(e,t,i,r,s,o){var a=e._gsap,l=s||Mm(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],_=l[1],m=l[2],g=l[3],h=l[4],v=l[5],x=t.split(" "),M=parseFloat(x[0])||0,S=parseFloat(x[1])||0,E,w,P,y;i?l!==ol&&(w=p*g-_*m)&&(P=M*(g/w)+S*(-m/w)+(m*v-g*h)/w,y=M*(-_/w)+S*(p/w)-(p*v-_*h)/w,M=P,S=y):(E=ZS(e),M=E.x+(~x[0].indexOf("%")?M/100*E.width:M),S=E.y+(~(x[1]||x[0]).indexOf("%")?S/100*E.height:S)),r||r!==!1&&a.smooth?(h=M-u,v=S-c,a.xOffset=f+(h*p+v*m)-h,a.yOffset=d+(h*_+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[En]="0px 0px",o&&(Sr(o,a,"xOrigin",u,M),Sr(o,a,"yOrigin",c,S),Sr(o,a,"xOffset",f,a.xOffset),Sr(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",M+" "+S)},al=function(e,t){var i=e._gsap||new FS(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ui(e,En)||"0",c,f,d,p,_,m,g,h,v,x,M,S,E,w,P,y,A,Y,W,U,V,H,Q,$,D,j,G,ae,z,I,O,q;return c=f=d=m=g=h=v=x=M=0,p=_=1,i.svg=!!(e.getCTM&&QS(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ht]!=="none"?l[ht]:"")),r.scale=r.rotate=r.translate="none"),w=Mm(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",$=""):$=!t&&e.getAttribute("data-svg-origin"),Yd(e,$||u,!!$||i.originIsAbsolute,i.smooth!==!1,w)),S=i.xOrigin||0,E=i.yOrigin||0,w!==ol&&(Y=w[0],W=w[1],U=w[2],V=w[3],c=H=w[4],f=Q=w[5],w.length===6?(p=Math.sqrt(Y*Y+W*W),_=Math.sqrt(V*V+U*U),m=Y||W?Qs(W,Y)*ns:0,v=U||V?Qs(U,V)*ns+m:0,v&&(_*=Math.abs(Math.cos(v*Ro))),i.svg&&(c-=S-(S*Y+E*U),f-=E-(S*W+E*V))):(q=w[6],I=w[7],G=w[8],ae=w[9],z=w[10],O=w[11],c=w[12],f=w[13],d=w[14],P=Qs(q,z),g=P*ns,P&&(y=Math.cos(-P),A=Math.sin(-P),$=H*y+G*A,D=Q*y+ae*A,j=q*y+z*A,G=H*-A+G*y,ae=Q*-A+ae*y,z=q*-A+z*y,O=I*-A+O*y,H=$,Q=D,q=j),P=Qs(-U,z),h=P*ns,P&&(y=Math.cos(-P),A=Math.sin(-P),$=Y*y-G*A,D=W*y-ae*A,j=U*y-z*A,O=V*A+O*y,Y=$,W=D,U=j),P=Qs(W,Y),m=P*ns,P&&(y=Math.cos(P),A=Math.sin(P),$=Y*y+W*A,D=H*y+Q*A,W=W*y-Y*A,Q=Q*y-H*A,Y=$,H=D),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,h=180-h),p=xt(Math.sqrt(Y*Y+W*W+U*U)),_=xt(Math.sqrt(Q*Q+q*q)),P=Qs(H,Q),v=Math.abs(P)>2e-4?P*ns:0,M=O?1/(O<0?-O:O):0),i.svg&&($=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!eM(Ui(e,ht)),$&&e.setAttribute("transform",$))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(p*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=xt(p),i.scaleY=xt(_),i.rotation=xt(m)+a,i.rotationX=xt(g)+a,i.rotationY=xt(h)+a,i.skewX=v+a,i.skewY=x+a,i.transformPerspective=M+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[En]=dc(u)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?dD:KS?tM:hD,i.uncache=0,i},dc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Th=function(e,t,i){var r=Kt(t);return xt(parseFloat(t)+parseFloat(zr(e,"x",i+"px",r)))+r},hD=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,tM(e,t)},Kr="0deg",ha="0px",Zr=") ",tM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,p=i.skewY,_=i.scaleX,m=i.scaleY,g=i.transformPerspective,h=i.force3D,v=i.target,x=i.zOrigin,M="",S=h==="auto"&&e&&e!==1||h===!0;if(x&&(f!==Kr||c!==Kr)){var E=parseFloat(c)*Ro,w=Math.sin(E),P=Math.cos(E),y;E=parseFloat(f)*Ro,y=Math.cos(E),o=Th(v,o,w*y*-x),a=Th(v,a,-Math.sin(E)*-x),l=Th(v,l,P*y*-x+x)}g!==ha&&(M+="perspective("+g+Zr),(r||s)&&(M+="translate("+r+"%, "+s+"%) "),(S||o!==ha||a!==ha||l!==ha)&&(M+=l!==ha||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Zr),u!==Kr&&(M+="rotate("+u+Zr),c!==Kr&&(M+="rotateY("+c+Zr),f!==Kr&&(M+="rotateX("+f+Zr),(d!==Kr||p!==Kr)&&(M+="skew("+d+", "+p+Zr),(_!==1||m!==1)&&(M+="scale("+_+", "+m+Zr),v.style[ht]=M||"translate(0, 0)"},dD=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,p=i.target,_=i.xOrigin,m=i.yOrigin,g=i.xOffset,h=i.yOffset,v=i.forceCSS,x=parseFloat(o),M=parseFloat(a),S,E,w,P,y;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ro,u*=Ro,S=Math.cos(l)*f,E=Math.sin(l)*f,w=Math.sin(l-u)*-d,P=Math.cos(l-u)*d,u&&(c*=Ro,y=Math.tan(u-c),y=Math.sqrt(1+y*y),w*=y,P*=y,c&&(y=Math.tan(c),y=Math.sqrt(1+y*y),S*=y,E*=y)),S=xt(S),E=xt(E),w=xt(w),P=xt(P)):(S=f,P=d,E=w=0),(x&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(x=zr(p,"x",o,"px"),M=zr(p,"y",a,"px")),(_||m||g||h)&&(x=xt(x+_-(_*S+m*w)+g),M=xt(M+m-(_*E+m*P)+h)),(r||s)&&(y=p.getBBox(),x=xt(x+r/100*y.width),M=xt(M+s/100*y.height)),y="matrix("+S+","+E+","+w+","+P+","+x+","+M+")",p.setAttribute("transform",y),v&&(p.style[ht]=y)},pD=function(e,t,i,r,s){var o=360,a=Ft(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ns:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*O0)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*O0)%o-~~(u/o)*o)),e._pt=d=new Mn(e._pt,t,i,r,u,ZL),d.e=c,d.u="deg",e._props.push(i),d},H0=function(e,t){for(var i in t)e[i]=t[i];return e},mD=function(e,t,i){var r=H0({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,p,_;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[ht]=t,a=al(i,1),bs(i,ht),i.setAttribute("transform",u)):(u=getComputedStyle(i)[ht],o[ht]=t,a=al(i,1),o[ht]=u);for(l in rr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Kt(u),_=Kt(c),f=p!==_?zr(i,l,u,_):parseFloat(u),d=parseFloat(c),e._pt=new Mn(e._pt,a,l,f,d-f,Xd),e._pt.u=_||0,e._props.push(l));H0(a,r)};Sn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});hc[e>1?"border"+n:n]=function(a,l,u,c,f){var d,p;if(arguments.length<4)return d=o.map(function(_){return ji(a,_,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(_,m){return p[_]=d[m]=d[m]||d[(m-1)/2|0]}),a.init(l,p,f)}});var nM={name:"css",register:jd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,p,_,m,g,h,v,x,M,S,E,w,P;xm||jd(),this.styles=this.styles||qS(e),P=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Ln[m]&&kS(m,t,i,r,e,s)))){if(p=typeof c,_=hc[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=il(c)),_)_(this,e,m,c,i)&&(w=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",Ir.lastIndex=0,Ir.test(u)||(g=Kt(u),h=Kt(c)),h?g!==h&&(u=zr(e,m,u,h)+h):g&&(c+=g),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),P.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Ft(u)&&~u.indexOf("random(")&&(u=il(u)),Kt(u+"")||u==="auto"||(u+=On.units[m]||Kt(ji(e,m))||""),(u+"").charAt(1)==="="&&(u=ji(e,m))):u=ji(e,m),d=parseFloat(u),v=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),v&&(c=c.substr(2)),f=parseFloat(c),m in Li&&(m==="autoAlpha"&&(d===1&&ji(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,a.visibility),Sr(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=Li[m],~m.indexOf(",")&&(m=m.split(",")[0]))),x=m in rr,x){if(this.styles.save(m),M||(S=e._gsap,S.renderTransform&&!t.parseTransform||al(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,M=this._pt=new Mn(this._pt,a,ht,0,1,S.renderTransform,S,0,-1),M.dep=1),m==="scale")this._pt=new Mn(this._pt,S,"scaleY",S.scaleY,(v?Ao(S.scaleY,v+f):f)-S.scaleY||0,Xd),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){P.push(En,0,a[En]),c=cD(c),S.svg?Yd(e,c,0,E,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==S.zOrigin&&Sr(this,S,"zOrigin",S.zOrigin,h),Sr(this,a,m,dc(u),dc(c)));continue}else if(m==="svgOrigin"){Yd(e,c,1,E,0,this);continue}else if(m in JS){pD(this,S,m,d,v?Ao(d,v+c):c);continue}else if(m==="smoothOrigin"){Sr(this,S,"smooth",S.smooth,c);continue}else if(m==="force3D"){S[m]=c;continue}else if(m==="transform"){mD(this,c,e);continue}}else m in a||(m=$o(m)||m);if(x||(f||f===0)&&(d||d===0)&&!KL.test(c)&&m in a)g=(u+"").substr((d+"").length),f||(f=0),h=Kt(c)||(m in On.units?On.units[m]:g),g!==h&&(d=zr(e,m,u,h)),this._pt=new Mn(this._pt,x?S:a,m,d,(v?Ao(d,v+f):f)-d,!x&&(h==="px"||m==="zIndex")&&t.autoRound!==!1?JL:Xd),this._pt.u=h||0,g!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=QL);else if(m in a)uD.call(this,e,m,u,v?v+c:c);else if(m in e)this.add(e,m,u||e[m],v?v+c:c,r,s);else if(m!=="parseTransform"){cm(m,c);continue}x||(m in a?P.push(m,0,a[m]):P.push(m,1,u||e[m])),o.push(m)}}w&&WS(this)},render:function(e,t){if(t.tween._time||!ym())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:ji,aliases:Li,getSetter:function(e,t,i){var r=Li[t];return r&&r.indexOf(",")<0&&(t=r),t in rr&&t!==En&&(e._gsap.x||ji(e,"x"))?i&&N0===i?t==="scale"?iD:nD:(N0=i||{})&&(t==="scale"?rD:sD):e.style&&!am(e.style[t])?eD:~t.indexOf("-")?tD:_m(e,t)},core:{_removeProperty:bs,_getMatrix:Mm}};Tn.utils.checkPrefix=$o;Tn.core.getStyleSaver=qS;(function(n,e,t,i){var r=Sn(n+","+e+","+t,function(s){rr[s]=1});Sn(e,function(s){On.units[s]="deg",JS[s]=1}),Li[r[13]]=n+","+e,Sn(i,function(s){var o=s.split(":");Li[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});Tn.registerPlugin(nM);var iM=Tn.registerPlugin(nM)||Tn;iM.core.Tween;const G0=4;class gD{constructor(e){de(this,"context");de(this,"mouse");de(this,"center");de(this,"onMouseMove",e=>{const{height:t,width:i}=this.context.canvas;this.mouse.set(e.clientX-i/2,-e.clientY+t/2);const r=Kn(0,i,180,200,this.mouse.x),s=Rs(r),{x:o,z:a}=this.getCircleCoord(s),l=Kn(0,i,.2,2,this.mouse.y);iM.timeline().to(this.context.camera.position,{x:o,y:l,z:-a,delay:.1,ease:jL.easeOut,onUpdate:()=>{this.context.camera.lookAt(0,0,0)}})});this.context=e,this.center=new k(0,0,0),this.mouse=new je}getCircleCoord(e){return{x:this.center.x+G0*Math.sin(e),y:0,z:this.center.y+G0*Math.cos(e)}}update(){}}class _D extends $b{constructor(t){super(t,{});de(this,"clock");de(this,"petals");de(this,"flowers");de(this,"sky");de(this,"grass");de(this,"ground");de(this,"butterfly");de(this,"cameraManager");this.clock=new Jy(!0),this.flowers=new E2,this.ground=new j2,this.sky=new W2,this.petals=new p2,this.butterfly=new eL(this),this.grass=new B2(this),this.cameraManager=new gD(this)}init(){this.setClearColor(15658657),this.setCameraPos(0,0,4),this.lookAt(new k(0,0,0)),this.scene.add(this.butterfly.group),this.scene.add(this.petals.group),this.scene.add(this.sky.group),this.scene.add(this.grass.group),this.scene.add(this.ground.group),this.sky.position.set(0,0,-3.5),this.grass.position.set(0,-1.2,0),this.ground.position.set(0,-1.2,0),document.addEventListener("mousemove",this.cameraManager.onMouseMove,!1)}dispose(){}draw(){this.renderer.render(this.scene,this.camera),this.petals.update(),this.butterfly.update(),this.flowers.update(),this.sky.update(),this.grass.update(),this.ground.update(),this.cameraManager.update(),requestAnimationFrame(()=>this.draw())}}class vD{constructor(){de(this,"universe");this.universe=void 0}setup(e){this.universe=new _D(e)}resize(e,t){var i;(i=this.universe)==null||i.resize(e,t)}unmount(){var e;(e=this.universe)==null||e.clearScene()}render(){var e;(e=this.universe)==null||e.render()}}const xD=()=>{const[n,e]=Tt.useState({x:0,y:0});return Tt.useEffect(()=>{const t=i=>{const{clientX:r,clientY:s}=i;e({x:r,y:s})};return document.addEventListener("mousemove",t),()=>{document.removeEventListener("mousemove",t)}},[]),{position:n}},du=18,W0=2,yD=or.div.attrs(n=>({style:{top:`${n.top}px`,left:`${n.left}px`,width:`${n.active?du*W0:du}px`,height:`${n.active?du*W0:du}px`,opacity:n.active?.5:1}}))`
  pointer-events: none;
  position: absolute;

  border-radius: 50%;
  background-color: ${sc.black};
  transition-property: width, height, opacity;
  transition-duration: 0.3s;
  transform: translate(-50%, -50%);
`,SD=({active:n})=>{const{position:e}=xD();return bn.jsx(yD,{top:e.y,left:e.x,active:n})},MD=or.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`,ED=or(UT)`
  position: relative;
  z-index: 1;
`,TD=or.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10em;
`,wD=or.h1`
  font-weight: ${Ed.weight.semiBold};
  font-size: 36px;
  color: ${sc.black};
  letter-spacing: 0.3em;
  margin-right: -0.3em;
  text-transform: uppercase;
`,AD=or.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`,CD=or.a`
  position: relative;
  font-size: 16px;
  color: ${sc.black};
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0%;
    height: 1px;
    background-color: ${sc.black};
    transition: 0.35s all;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`,RD=[{label:"sketchbook",href:"https://misspia.github.io/sketchbook/"},{label:"linkedin",href:"https://www.linkedin.com/in/misspia/"},{label:"github",href:"https://github.com/misspia"}],PD=()=>{const n=Tt.useRef(null),{width:e,height:t}=OT(),[i,r]=Tt.useState(!1),s=Tt.useMemo(()=>{if(!n.current)return;const o=new vD;return o.setup(n.current),o},[n.current]);return Tt.useEffect(()=>{s&&s.resize(e,t)},[e,t]),Tt.useEffect(()=>{s&&s.render()},[s]),bn.jsxs(ED,{children:[bn.jsx(MD,{ref:n}),bn.jsxs(TD,{children:[bn.jsx(wD,{children:"m i s s p i a"}),bn.jsx(AD,{children:RD.map(o=>bn.jsx(CD,{href:o.href,target:"_blank",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:o.label},o.label))})]}),bn.jsx(SD,{active:i})]})},bD=or.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,LD=()=>bn.jsx(bD,{children:bn.jsx(PD,{})});wh.createRoot(document.getElementById("root")).render(bn.jsxs(Yo.StrictMode,{children:[bn.jsx(NT,{}),bn.jsx(LD,{})]}));
