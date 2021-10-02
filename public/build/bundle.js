var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function i(e){e.forEach(t)}function s(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let o,a;function l(e,t){e.appendChild(t)}function c(e,t,n){e.insertBefore(t,n||null)}function h(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function f(){return d(" ")}function p(){return d("")}function _(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function m(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function g(e){return""===e?null:+e}function y(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function v(e,t){e.value=null==t?"":t}function w(e,t,n,i){e.style.setProperty(t,n,i?"important":"")}function C(e,t){for(let n=0;n<e.options.length;n+=1){const i=e.options[n];if(i.__value===t)return void(i.selected=!0)}e.selectedIndex=-1}function b(e){const t=e.querySelector(":checked")||e.options[0];return t&&t.__value}function k(e,t,n){e.classList[n?"add":"remove"](t)}function S(e){a=e}function T(){const e=function(){if(!a)throw new Error("Function called outside component initialization");return a}();return(t,n)=>{const i=e.$$.callbacks[t];if(i){const s=function(e,t,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(e,n,!1,t),i}(t,n);i.slice().forEach((t=>{t.call(e,s)}))}}}const I=[],D=[],E=[],x=[],N=Promise.resolve();let P=!1;function M(e){E.push(e)}let O=!1;const R=new Set;function A(){if(!O){O=!0;do{for(let e=0;e<I.length;e+=1){const t=I[e];S(t),F(t.$$)}for(S(null),I.length=0;D.length;)D.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];R.has(t)||(R.add(t),t())}E.length=0}while(I.length);for(;x.length;)x.pop()();P=!1,O=!1,R.clear()}}function F(e){if(null!==e.fragment){e.update(),i(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(M)}}const L=new Set;let Y;function W(){Y={r:0,c:[],p:Y}}function j(){Y.r||i(Y.c),Y=Y.p}function U(e,t){e&&e.i&&(L.delete(e),e.i(t))}function q(e,t,n,i){if(e&&e.o){if(L.has(e))return;L.add(e),Y.c.push((()=>{L.delete(e),i&&(n&&e.d(1),i())})),e.o(t)}}function H(e){e&&e.c()}function $(e,n,r,o){const{fragment:a,on_mount:l,on_destroy:c,after_update:h}=e.$$;a&&a.m(n,r),o||M((()=>{const n=l.map(t).filter(s);c?c.push(...n):i(n),e.$$.on_mount=[]})),h.forEach(M)}function V(e,t){const n=e.$$;null!==n.fragment&&(i(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function z(e,t){-1===e.$$.dirty[0]&&(I.push(e),P||(P=!0,N.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(t,s,r,o,l,c,u,d=[-1]){const f=a;S(t);const p=t.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:s.context||[]),callbacks:n(),dirty:d,skip_bound:!1,root:s.target||f.$$.root};u&&u(p.root);let _=!1;if(p.ctx=r?r(t,s.props||{},((e,n,...i)=>{const s=i.length?i[0]:n;return p.ctx&&l(p.ctx[e],p.ctx[e]=s)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](s),_&&z(t,e)),n})):[],p.update(),_=!0,i(p.before_update),p.fragment=!!o&&o(p.ctx),s.target){if(s.hydrate){const e=function(e){return Array.from(e.childNodes)}(s.target);p.fragment&&p.fragment.l(e),e.forEach(h)}else p.fragment&&p.fragment.c();s.intro&&U(t.$$.fragment),$(t,s.target,s.anchor,s.customElement),A()}S(f)}class B{$destroy(){V(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function K(e){var t={exports:{}};return e(t,t.exports),t.exports}function Q(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets option of @rollup/plugin-commonjs appropriately for this require call to behave properly.')}K((function(e,t){e.exports=function(){var t,n;function i(){return t.apply(null,arguments)}function s(e){t=e}function r(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function o(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function a(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(a(e,t))return!1;return!0}function c(e){return void 0===e}function h(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function u(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,t){var n,i=[];for(n=0;n<e.length;++n)i.push(t(e[n],n));return i}function f(e,t){for(var n in t)a(t,n)&&(e[n]=t[n]);return a(t,"toString")&&(e.toString=t.toString),a(t,"valueOf")&&(e.valueOf=t.valueOf),e}function p(e,t,n,i){return Bn(e,t,n,i,!0).utc()}function _(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function m(e){return null==e._pf&&(e._pf=_()),e._pf}function g(e){if(null==e._isValid){var t=m(e),i=n.call(t.parsedDateParts,(function(e){return null!=e})),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&i);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function y(e){var t=p(NaN);return null!=e?f(m(t),e):m(t).userInvalidated=!0,t}n=Array.prototype.some?Array.prototype.some:function(e){var t,n=Object(this),i=n.length>>>0;for(t=0;t<i;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};var v=i.momentProperties=[],w=!1;function C(e,t){var n,i,s;if(c(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),c(t._i)||(e._i=t._i),c(t._f)||(e._f=t._f),c(t._l)||(e._l=t._l),c(t._strict)||(e._strict=t._strict),c(t._tzm)||(e._tzm=t._tzm),c(t._isUTC)||(e._isUTC=t._isUTC),c(t._offset)||(e._offset=t._offset),c(t._pf)||(e._pf=m(t)),c(t._locale)||(e._locale=t._locale),v.length>0)for(n=0;n<v.length;n++)c(s=t[i=v[n]])||(e[i]=s);return e}function b(e){C(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===w&&(w=!0,i.updateOffset(this),w=!1)}function k(e){return e instanceof b||null!=e&&null!=e._isAMomentObject}function S(e){!1===i.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function T(e,t){var n=!0;return f((function(){if(null!=i.deprecationHandler&&i.deprecationHandler(null,e),n){var s,r,o,l=[];for(r=0;r<arguments.length;r++){if(s="","object"==typeof arguments[r]){for(o in s+="\n["+r+"] ",arguments[0])a(arguments[0],o)&&(s+=o+": "+arguments[0][o]+", ");s=s.slice(0,-2)}else s=arguments[r];l.push(s)}S(e+"\nArguments: "+Array.prototype.slice.call(l).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)}),t)}var I,D={};function E(e,t){null!=i.deprecationHandler&&i.deprecationHandler(e,t),D[e]||(S(t),D[e]=!0)}function x(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function N(e){var t,n;for(n in e)a(e,n)&&(x(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function P(e,t){var n,i=f({},e);for(n in t)a(t,n)&&(o(e[n])&&o(t[n])?(i[n]={},f(i[n],e[n]),f(i[n],t[n])):null!=t[n]?i[n]=t[n]:delete i[n]);for(n in e)a(e,n)&&!a(t,n)&&o(e[n])&&(i[n]=f({},i[n]));return i}function M(e){null!=e&&this.set(e)}i.suppressDeprecationWarnings=!1,i.deprecationHandler=null,I=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)a(e,t)&&n.push(t);return n};var O={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function R(e,t,n){var i=this._calendar[e]||this._calendar.sameElse;return x(i)?i.call(t,n):i}function A(e,t,n){var i=""+Math.abs(e),s=t-i.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,s)).toString().substr(1)+i}var F=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,L=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Y={},W={};function j(e,t,n,i){var s=i;"string"==typeof i&&(s=function(){return this[i]()}),e&&(W[e]=s),t&&(W[t[0]]=function(){return A(s.apply(this,arguments),t[1],t[2])}),n&&(W[n]=function(){return this.localeData().ordinal(s.apply(this,arguments),e)})}function U(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function q(e){var t,n,i=e.match(F);for(t=0,n=i.length;t<n;t++)W[i[t]]?i[t]=W[i[t]]:i[t]=U(i[t]);return function(t){var s,r="";for(s=0;s<n;s++)r+=x(i[s])?i[s].call(t,e):i[s];return r}}function H(e,t){return e.isValid()?(t=$(t,e.localeData()),Y[t]=Y[t]||q(t),Y[t](e)):e.localeData().invalidDate()}function $(e,t){var n=5;function i(e){return t.longDateFormat(e)||e}for(L.lastIndex=0;n>=0&&L.test(e);)e=e.replace(L,i),L.lastIndex=0,n-=1;return e}var V={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function z(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(F).map((function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e})).join(""),this._longDateFormat[e])}var G="Invalid date";function B(){return this._invalidDate}var K="%d",Z=/\d{1,2}/;function J(e){return this._ordinal.replace("%d",e)}var X={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function ee(e,t,n,i){var s=this._relativeTime[n];return x(s)?s(e,t,n,i):s.replace(/%d/i,e)}function te(e,t){var n=this._relativeTime[e>0?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)}var ne={};function ie(e,t){var n=e.toLowerCase();ne[n]=ne[n+"s"]=ne[t]=e}function se(e){return"string"==typeof e?ne[e]||ne[e.toLowerCase()]:void 0}function re(e){var t,n,i={};for(n in e)a(e,n)&&(t=se(n))&&(i[t]=e[n]);return i}var oe={};function ae(e,t){oe[e]=t}function le(e){var t,n=[];for(t in e)a(e,t)&&n.push({unit:t,priority:oe[t]});return n.sort((function(e,t){return e.priority-t.priority})),n}function ce(e){return e%4==0&&e%100!=0||e%400==0}function he(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function ue(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=he(t)),n}function de(e,t){return function(n){return null!=n?(pe(this,e,n),i.updateOffset(this,t),this):fe(this,e)}}function fe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function pe(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ce(e.year())&&1===e.month()&&29===e.date()?(n=ue(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),et(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function _e(e){return x(this[e=se(e)])?this[e]():this}function me(e,t){if("object"==typeof e){var n,i=le(e=re(e));for(n=0;n<i.length;n++)this[i[n].unit](e[i[n].unit])}else if(x(this[e=se(e)]))return this[e](t);return this}var ge,ye=/\d/,ve=/\d\d/,we=/\d{3}/,Ce=/\d{4}/,be=/[+-]?\d{6}/,ke=/\d\d?/,Se=/\d\d\d\d?/,Te=/\d\d\d\d\d\d?/,Ie=/\d{1,3}/,De=/\d{1,4}/,Ee=/[+-]?\d{1,6}/,xe=/\d+/,Ne=/[+-]?\d+/,Pe=/Z|[+-]\d\d:?\d\d/gi,Me=/Z|[+-]\d\d(?::?\d\d)?/gi,Oe=/[+-]?\d+(\.\d{1,3})?/,Re=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function Ae(e,t,n){ge[e]=x(t)?t:function(e,i){return e&&n?n:t}}function Fe(e,t){return a(ge,e)?ge[e](t._strict,t._locale):new RegExp(Le(e))}function Le(e){return Ye(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,(function(e,t,n,i,s){return t||n||i||s})))}function Ye(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}ge={};var We={};function je(e,t){var n,i=t;for("string"==typeof e&&(e=[e]),h(t)&&(i=function(e,n){n[t]=ue(e)}),n=0;n<e.length;n++)We[e[n]]=i}function Ue(e,t){je(e,(function(e,n,i,s){i._w=i._w||{},t(e,i._w,i,s)}))}function qe(e,t,n){null!=t&&a(We,e)&&We[e](t,n._a,n,e)}var He,$e=0,Ve=1,ze=2,Ge=3,Be=4,Ke=5,Qe=6,Ze=7,Je=8;function Xe(e,t){return(e%t+t)%t}function et(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Xe(t,12);return e+=(t-n)/12,1===n?ce(e)?29:28:31-n%7%2}He=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},j("M",["MM",2],"Mo",(function(){return this.month()+1})),j("MMM",0,0,(function(e){return this.localeData().monthsShort(this,e)})),j("MMMM",0,0,(function(e){return this.localeData().months(this,e)})),ie("month","M"),ae("month",8),Ae("M",ke),Ae("MM",ke,ve),Ae("MMM",(function(e,t){return t.monthsShortRegex(e)})),Ae("MMMM",(function(e,t){return t.monthsRegex(e)})),je(["M","MM"],(function(e,t){t[Ve]=ue(e)-1})),je(["MMM","MMMM"],(function(e,t,n,i){var s=n._locale.monthsParse(e,i,n._strict);null!=s?t[Ve]=s:m(n).invalidMonth=e}));var tt="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),nt="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),it=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,st=Re,rt=Re;function ot(e,t){return e?r(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||it).test(t)?"format":"standalone"][e.month()]:r(this._months)?this._months:this._months.standalone}function at(e,t){return e?r(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[it.test(t)?"format":"standalone"][e.month()]:r(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function lt(e,t,n){var i,s,r,o=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],i=0;i<12;++i)r=p([2e3,i]),this._shortMonthsParse[i]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[i]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(s=He.call(this._shortMonthsParse,o))?s:null:-1!==(s=He.call(this._longMonthsParse,o))?s:null:"MMM"===t?-1!==(s=He.call(this._shortMonthsParse,o))||-1!==(s=He.call(this._longMonthsParse,o))?s:null:-1!==(s=He.call(this._longMonthsParse,o))||-1!==(s=He.call(this._shortMonthsParse,o))?s:null}function ct(e,t,n){var i,s,r;if(this._monthsParseExact)return lt.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),i=0;i<12;i++){if(s=p([2e3,i]),n&&!this._longMonthsParse[i]&&(this._longMonthsParse[i]=new RegExp("^"+this.months(s,"").replace(".","")+"$","i"),this._shortMonthsParse[i]=new RegExp("^"+this.monthsShort(s,"").replace(".","")+"$","i")),n||this._monthsParse[i]||(r="^"+this.months(s,"")+"|^"+this.monthsShort(s,""),this._monthsParse[i]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[i].test(e))return i;if(n&&"MMM"===t&&this._shortMonthsParse[i].test(e))return i;if(!n&&this._monthsParse[i].test(e))return i}}function ht(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=ue(t);else if(!h(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),et(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function ut(e){return null!=e?(ht(this,e),i.updateOffset(this,!0),this):fe(this,"Month")}function dt(){return et(this.year(),this.month())}function ft(e){return this._monthsParseExact?(a(this,"_monthsRegex")||_t.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(a(this,"_monthsShortRegex")||(this._monthsShortRegex=st),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function pt(e){return this._monthsParseExact?(a(this,"_monthsRegex")||_t.call(this),e?this._monthsStrictRegex:this._monthsRegex):(a(this,"_monthsRegex")||(this._monthsRegex=rt),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function _t(){function e(e,t){return t.length-e.length}var t,n,i=[],s=[],r=[];for(t=0;t<12;t++)n=p([2e3,t]),i.push(this.monthsShort(n,"")),s.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(i.sort(e),s.sort(e),r.sort(e),t=0;t<12;t++)i[t]=Ye(i[t]),s[t]=Ye(s[t]);for(t=0;t<24;t++)r[t]=Ye(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+s.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+i.join("|")+")","i")}function mt(e){return ce(e)?366:365}j("Y",0,0,(function(){var e=this.year();return e<=9999?A(e,4):"+"+e})),j(0,["YY",2],0,(function(){return this.year()%100})),j(0,["YYYY",4],0,"year"),j(0,["YYYYY",5],0,"year"),j(0,["YYYYYY",6,!0],0,"year"),ie("year","y"),ae("year",1),Ae("Y",Ne),Ae("YY",ke,ve),Ae("YYYY",De,Ce),Ae("YYYYY",Ee,be),Ae("YYYYYY",Ee,be),je(["YYYYY","YYYYYY"],$e),je("YYYY",(function(e,t){t[$e]=2===e.length?i.parseTwoDigitYear(e):ue(e)})),je("YY",(function(e,t){t[$e]=i.parseTwoDigitYear(e)})),je("Y",(function(e,t){t[$e]=parseInt(e,10)})),i.parseTwoDigitYear=function(e){return ue(e)+(ue(e)>68?1900:2e3)};var gt=de("FullYear",!0);function yt(){return ce(this.year())}function vt(e,t,n,i,s,r,o){var a;return e<100&&e>=0?(a=new Date(e+400,t,n,i,s,r,o),isFinite(a.getFullYear())&&a.setFullYear(e)):a=new Date(e,t,n,i,s,r,o),a}function wt(e){var t,n;return e<100&&e>=0?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ct(e,t,n){var i=7+t-n;return-(7+wt(e,0,i).getUTCDay()-t)%7+i-1}function bt(e,t,n,i,s){var r,o,a=1+7*(t-1)+(7+n-i)%7+Ct(e,i,s);return a<=0?o=mt(r=e-1)+a:a>mt(e)?(r=e+1,o=a-mt(e)):(r=e,o=a),{year:r,dayOfYear:o}}function kt(e,t,n){var i,s,r=Ct(e.year(),t,n),o=Math.floor((e.dayOfYear()-r-1)/7)+1;return o<1?i=o+St(s=e.year()-1,t,n):o>St(e.year(),t,n)?(i=o-St(e.year(),t,n),s=e.year()+1):(s=e.year(),i=o),{week:i,year:s}}function St(e,t,n){var i=Ct(e,t,n),s=Ct(e+1,t,n);return(mt(e)-i+s)/7}function Tt(e){return kt(e,this._week.dow,this._week.doy).week}j("w",["ww",2],"wo","week"),j("W",["WW",2],"Wo","isoWeek"),ie("week","w"),ie("isoWeek","W"),ae("week",5),ae("isoWeek",5),Ae("w",ke),Ae("ww",ke,ve),Ae("W",ke),Ae("WW",ke,ve),Ue(["w","ww","W","WW"],(function(e,t,n,i){t[i.substr(0,1)]=ue(e)}));var It={dow:0,doy:6};function Dt(){return this._week.dow}function Et(){return this._week.doy}function xt(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Nt(e){var t=kt(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function Pt(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}function Mt(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Ot(e,t){return e.slice(t,7).concat(e.slice(0,t))}j("d",0,"do","day"),j("dd",0,0,(function(e){return this.localeData().weekdaysMin(this,e)})),j("ddd",0,0,(function(e){return this.localeData().weekdaysShort(this,e)})),j("dddd",0,0,(function(e){return this.localeData().weekdays(this,e)})),j("e",0,0,"weekday"),j("E",0,0,"isoWeekday"),ie("day","d"),ie("weekday","e"),ie("isoWeekday","E"),ae("day",11),ae("weekday",11),ae("isoWeekday",11),Ae("d",ke),Ae("e",ke),Ae("E",ke),Ae("dd",(function(e,t){return t.weekdaysMinRegex(e)})),Ae("ddd",(function(e,t){return t.weekdaysShortRegex(e)})),Ae("dddd",(function(e,t){return t.weekdaysRegex(e)})),Ue(["dd","ddd","dddd"],(function(e,t,n,i){var s=n._locale.weekdaysParse(e,i,n._strict);null!=s?t.d=s:m(n).invalidWeekday=e})),Ue(["d","e","E"],(function(e,t,n,i){t[i]=ue(e)}));var Rt="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),At="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ft="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Lt=Re,Yt=Re,Wt=Re;function jt(e,t){var n=r(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Ot(n,this._week.dow):e?n[e.day()]:n}function Ut(e){return!0===e?Ot(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function qt(e){return!0===e?Ot(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ht(e,t,n){var i,s,r,o=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],i=0;i<7;++i)r=p([2e3,1]).day(i),this._minWeekdaysParse[i]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[i]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[i]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(s=He.call(this._weekdaysParse,o))?s:null:"ddd"===t?-1!==(s=He.call(this._shortWeekdaysParse,o))?s:null:-1!==(s=He.call(this._minWeekdaysParse,o))?s:null:"dddd"===t?-1!==(s=He.call(this._weekdaysParse,o))||-1!==(s=He.call(this._shortWeekdaysParse,o))||-1!==(s=He.call(this._minWeekdaysParse,o))?s:null:"ddd"===t?-1!==(s=He.call(this._shortWeekdaysParse,o))||-1!==(s=He.call(this._weekdaysParse,o))||-1!==(s=He.call(this._minWeekdaysParse,o))?s:null:-1!==(s=He.call(this._minWeekdaysParse,o))||-1!==(s=He.call(this._weekdaysParse,o))||-1!==(s=He.call(this._shortWeekdaysParse,o))?s:null}function $t(e,t,n){var i,s,r;if(this._weekdaysParseExact)return Ht.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),i=0;i<7;i++){if(s=p([2e3,1]).day(i),n&&!this._fullWeekdaysParse[i]&&(this._fullWeekdaysParse[i]=new RegExp("^"+this.weekdays(s,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[i]=new RegExp("^"+this.weekdaysShort(s,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[i]=new RegExp("^"+this.weekdaysMin(s,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[i]||(r="^"+this.weekdays(s,"")+"|^"+this.weekdaysShort(s,"")+"|^"+this.weekdaysMin(s,""),this._weekdaysParse[i]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[i].test(e))return i;if(n&&"ddd"===t&&this._shortWeekdaysParse[i].test(e))return i;if(n&&"dd"===t&&this._minWeekdaysParse[i].test(e))return i;if(!n&&this._weekdaysParse[i].test(e))return i}}function Vt(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=Pt(e,this.localeData()),this.add(e-t,"d")):t}function zt(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function Gt(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=Mt(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Bt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Zt.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(a(this,"_weekdaysRegex")||(this._weekdaysRegex=Lt),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Kt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Zt.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(a(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Yt),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Qt(e){return this._weekdaysParseExact?(a(this,"_weekdaysRegex")||Zt.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(a(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Wt),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Zt(){function e(e,t){return t.length-e.length}var t,n,i,s,r,o=[],a=[],l=[],c=[];for(t=0;t<7;t++)n=p([2e3,1]).day(t),i=Ye(this.weekdaysMin(n,"")),s=Ye(this.weekdaysShort(n,"")),r=Ye(this.weekdays(n,"")),o.push(i),a.push(s),l.push(r),c.push(i),c.push(s),c.push(r);o.sort(e),a.sort(e),l.sort(e),c.sort(e),this._weekdaysRegex=new RegExp("^("+c.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+o.join("|")+")","i")}function Jt(){return this.hours()%12||12}function Xt(){return this.hours()||24}function en(e,t){j(e,0,0,(function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)}))}function tn(e,t){return t._meridiemParse}function nn(e){return"p"===(e+"").toLowerCase().charAt(0)}j("H",["HH",2],0,"hour"),j("h",["hh",2],0,Jt),j("k",["kk",2],0,Xt),j("hmm",0,0,(function(){return""+Jt.apply(this)+A(this.minutes(),2)})),j("hmmss",0,0,(function(){return""+Jt.apply(this)+A(this.minutes(),2)+A(this.seconds(),2)})),j("Hmm",0,0,(function(){return""+this.hours()+A(this.minutes(),2)})),j("Hmmss",0,0,(function(){return""+this.hours()+A(this.minutes(),2)+A(this.seconds(),2)})),en("a",!0),en("A",!1),ie("hour","h"),ae("hour",13),Ae("a",tn),Ae("A",tn),Ae("H",ke),Ae("h",ke),Ae("k",ke),Ae("HH",ke,ve),Ae("hh",ke,ve),Ae("kk",ke,ve),Ae("hmm",Se),Ae("hmmss",Te),Ae("Hmm",Se),Ae("Hmmss",Te),je(["H","HH"],Ge),je(["k","kk"],(function(e,t,n){var i=ue(e);t[Ge]=24===i?0:i})),je(["a","A"],(function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e})),je(["h","hh"],(function(e,t,n){t[Ge]=ue(e),m(n).bigHour=!0})),je("hmm",(function(e,t,n){var i=e.length-2;t[Ge]=ue(e.substr(0,i)),t[Be]=ue(e.substr(i)),m(n).bigHour=!0})),je("hmmss",(function(e,t,n){var i=e.length-4,s=e.length-2;t[Ge]=ue(e.substr(0,i)),t[Be]=ue(e.substr(i,2)),t[Ke]=ue(e.substr(s)),m(n).bigHour=!0})),je("Hmm",(function(e,t,n){var i=e.length-2;t[Ge]=ue(e.substr(0,i)),t[Be]=ue(e.substr(i))})),je("Hmmss",(function(e,t,n){var i=e.length-4,s=e.length-2;t[Ge]=ue(e.substr(0,i)),t[Be]=ue(e.substr(i,2)),t[Ke]=ue(e.substr(s))}));var sn=/[ap]\.?m?\.?/i,rn=de("Hours",!0);function on(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var an,ln={calendar:O,longDateFormat:V,invalidDate:G,ordinal:K,dayOfMonthOrdinalParse:Z,relativeTime:X,months:tt,monthsShort:nt,week:It,weekdays:Rt,weekdaysMin:Ft,weekdaysShort:At,meridiemParse:sn},cn={},hn={};function un(e,t){var n,i=Math.min(e.length,t.length);for(n=0;n<i;n+=1)if(e[n]!==t[n])return n;return i}function dn(e){return e?e.toLowerCase().replace("_","-"):e}function fn(e){for(var t,n,i,s,r=0;r<e.length;){for(t=(s=dn(e[r]).split("-")).length,n=(n=dn(e[r+1]))?n.split("-"):null;t>0;){if(i=pn(s.slice(0,t).join("-")))return i;if(n&&n.length>=t&&un(s,n)>=t-1)break;t--}r++}return an}function pn(t){var n=null;if(void 0===cn[t]&&e&&e.exports)try{n=an._abbr,Q("./locale/"+t),_n(n)}catch(e){cn[t]=null}return cn[t]}function _n(e,t){var n;return e&&((n=c(t)?yn(e):mn(e,t))?an=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),an._abbr}function mn(e,t){if(null!==t){var n,i=ln;if(t.abbr=e,null!=cn[e])E("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),i=cn[e]._config;else if(null!=t.parentLocale)if(null!=cn[t.parentLocale])i=cn[t.parentLocale]._config;else{if(null==(n=pn(t.parentLocale)))return hn[t.parentLocale]||(hn[t.parentLocale]=[]),hn[t.parentLocale].push({name:e,config:t}),null;i=n._config}return cn[e]=new M(P(i,t)),hn[e]&&hn[e].forEach((function(e){mn(e.name,e.config)})),_n(e),cn[e]}return delete cn[e],null}function gn(e,t){if(null!=t){var n,i,s=ln;null!=cn[e]&&null!=cn[e].parentLocale?cn[e].set(P(cn[e]._config,t)):(null!=(i=pn(e))&&(s=i._config),t=P(s,t),null==i&&(t.abbr=e),(n=new M(t)).parentLocale=cn[e],cn[e]=n),_n(e)}else null!=cn[e]&&(null!=cn[e].parentLocale?(cn[e]=cn[e].parentLocale,e===_n()&&_n(e)):null!=cn[e]&&delete cn[e]);return cn[e]}function yn(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return an;if(!r(e)){if(t=pn(e))return t;e=[e]}return fn(e)}function vn(){return I(cn)}function wn(e){var t,n=e._a;return n&&-2===m(e).overflow&&(t=n[Ve]<0||n[Ve]>11?Ve:n[ze]<1||n[ze]>et(n[$e],n[Ve])?ze:n[Ge]<0||n[Ge]>24||24===n[Ge]&&(0!==n[Be]||0!==n[Ke]||0!==n[Qe])?Ge:n[Be]<0||n[Be]>59?Be:n[Ke]<0||n[Ke]>59?Ke:n[Qe]<0||n[Qe]>999?Qe:-1,m(e)._overflowDayOfYear&&(t<$e||t>ze)&&(t=ze),m(e)._overflowWeeks&&-1===t&&(t=Ze),m(e)._overflowWeekday&&-1===t&&(t=Je),m(e).overflow=t),e}var Cn=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,bn=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,kn=/Z|[+-]\d\d(?::?\d\d)?/,Sn=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],Tn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],In=/^\/?Date\((-?\d+)/i,Dn=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,En={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function xn(e){var t,n,i,s,r,o,a=e._i,l=Cn.exec(a)||bn.exec(a);if(l){for(m(e).iso=!0,t=0,n=Sn.length;t<n;t++)if(Sn[t][1].exec(l[1])){s=Sn[t][0],i=!1!==Sn[t][2];break}if(null==s)return void(e._isValid=!1);if(l[3]){for(t=0,n=Tn.length;t<n;t++)if(Tn[t][1].exec(l[3])){r=(l[2]||" ")+Tn[t][0];break}if(null==r)return void(e._isValid=!1)}if(!i&&null!=r)return void(e._isValid=!1);if(l[4]){if(!kn.exec(l[4]))return void(e._isValid=!1);o="Z"}e._f=s+(r||"")+(o||""),Un(e)}else e._isValid=!1}function Nn(e,t,n,i,s,r){var o=[Pn(e),nt.indexOf(t),parseInt(n,10),parseInt(i,10),parseInt(s,10)];return r&&o.push(parseInt(r,10)),o}function Pn(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Mn(e){return e.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function On(e,t,n){return!e||At.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(m(n).weekdayMismatch=!0,n._isValid=!1,!1)}function Rn(e,t,n){if(e)return En[e];if(t)return 0;var i=parseInt(n,10),s=i%100;return(i-s)/100*60+s}function An(e){var t,n=Dn.exec(Mn(e._i));if(n){if(t=Nn(n[4],n[3],n[2],n[5],n[6],n[7]),!On(n[1],t,e))return;e._a=t,e._tzm=Rn(n[8],n[9],n[10]),e._d=wt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),m(e).rfc2822=!0}else e._isValid=!1}function Fn(e){var t=In.exec(e._i);null===t?(xn(e),!1===e._isValid&&(delete e._isValid,An(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:i.createFromInputFallback(e)))):e._d=new Date(+t[1])}function Ln(e,t,n){return null!=e?e:null!=t?t:n}function Yn(e){var t=new Date(i.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function Wn(e){var t,n,i,s,r,o=[];if(!e._d){for(i=Yn(e),e._w&&null==e._a[ze]&&null==e._a[Ve]&&jn(e),null!=e._dayOfYear&&(r=Ln(e._a[$e],i[$e]),(e._dayOfYear>mt(r)||0===e._dayOfYear)&&(m(e)._overflowDayOfYear=!0),n=wt(r,0,e._dayOfYear),e._a[Ve]=n.getUTCMonth(),e._a[ze]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Ge]&&0===e._a[Be]&&0===e._a[Ke]&&0===e._a[Qe]&&(e._nextDay=!0,e._a[Ge]=0),e._d=(e._useUTC?wt:vt).apply(null,o),s=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==s&&(m(e).weekdayMismatch=!0)}}function jn(e){var t,n,i,s,r,o,a,l,c;null!=(t=e._w).GG||null!=t.W||null!=t.E?(r=1,o=4,n=Ln(t.GG,e._a[$e],kt(Kn(),1,4).year),i=Ln(t.W,1),((s=Ln(t.E,1))<1||s>7)&&(l=!0)):(r=e._locale._week.dow,o=e._locale._week.doy,c=kt(Kn(),r,o),n=Ln(t.gg,e._a[$e],c.year),i=Ln(t.w,c.week),null!=t.d?((s=t.d)<0||s>6)&&(l=!0):null!=t.e?(s=t.e+r,(t.e<0||t.e>6)&&(l=!0)):s=r),i<1||i>St(n,r,o)?m(e)._overflowWeeks=!0:null!=l?m(e)._overflowWeekday=!0:(a=bt(n,i,s,r,o),e._a[$e]=a.year,e._dayOfYear=a.dayOfYear)}function Un(e){if(e._f!==i.ISO_8601)if(e._f!==i.RFC_2822){e._a=[],m(e).empty=!0;var t,n,s,r,o,a,l=""+e._i,c=l.length,h=0;for(s=$(e._f,e._locale).match(F)||[],t=0;t<s.length;t++)r=s[t],(n=(l.match(Fe(r,e))||[])[0])&&((o=l.substr(0,l.indexOf(n))).length>0&&m(e).unusedInput.push(o),l=l.slice(l.indexOf(n)+n.length),h+=n.length),W[r]?(n?m(e).empty=!1:m(e).unusedTokens.push(r),qe(r,n,e)):e._strict&&!n&&m(e).unusedTokens.push(r);m(e).charsLeftOver=c-h,l.length>0&&m(e).unusedInput.push(l),e._a[Ge]<=12&&!0===m(e).bigHour&&e._a[Ge]>0&&(m(e).bigHour=void 0),m(e).parsedDateParts=e._a.slice(0),m(e).meridiem=e._meridiem,e._a[Ge]=qn(e._locale,e._a[Ge],e._meridiem),null!==(a=m(e).era)&&(e._a[$e]=e._locale.erasConvertYear(a,e._a[$e])),Wn(e),wn(e)}else An(e);else xn(e)}function qn(e,t,n){var i;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((i=e.isPM(n))&&t<12&&(t+=12),i||12!==t||(t=0),t):t}function Hn(e){var t,n,i,s,r,o,a=!1;if(0===e._f.length)return m(e).invalidFormat=!0,void(e._d=new Date(NaN));for(s=0;s<e._f.length;s++)r=0,o=!1,t=C({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[s],Un(t),g(t)&&(o=!0),r+=m(t).charsLeftOver,r+=10*m(t).unusedTokens.length,m(t).score=r,a?r<i&&(i=r,n=t):(null==i||r<i||o)&&(i=r,n=t,o&&(a=!0));f(e,n||t)}function $n(e){if(!e._d){var t=re(e._i),n=void 0===t.day?t.date:t.day;e._a=d([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],(function(e){return e&&parseInt(e,10)})),Wn(e)}}function Vn(e){var t=new b(wn(zn(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function zn(e){var t=e._i,n=e._f;return e._locale=e._locale||yn(e._l),null===t||void 0===n&&""===t?y({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),k(t)?new b(wn(t)):(u(t)?e._d=t:r(n)?Hn(e):n?Un(e):Gn(e),g(e)||(e._d=null),e))}function Gn(e){var t=e._i;c(t)?e._d=new Date(i.now()):u(t)?e._d=new Date(t.valueOf()):"string"==typeof t?Fn(e):r(t)?(e._a=d(t.slice(0),(function(e){return parseInt(e,10)})),Wn(e)):o(t)?$n(e):h(t)?e._d=new Date(t):i.createFromInputFallback(e)}function Bn(e,t,n,i,s){var a={};return!0!==t&&!1!==t||(i=t,t=void 0),!0!==n&&!1!==n||(i=n,n=void 0),(o(e)&&l(e)||r(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=s,a._l=n,a._i=e,a._f=t,a._strict=i,Vn(a)}function Kn(e,t,n,i){return Bn(e,t,n,i,!1)}i.createFromInputFallback=T("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",(function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))})),i.ISO_8601=function(){},i.RFC_2822=function(){};var Qn=T("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Kn.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:y()})),Zn=T("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",(function(){var e=Kn.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:y()}));function Jn(e,t){var n,i;if(1===t.length&&r(t[0])&&(t=t[0]),!t.length)return Kn();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}function Xn(){return Jn("isBefore",[].slice.call(arguments,0))}function ei(){return Jn("isAfter",[].slice.call(arguments,0))}var ti=function(){return Date.now?Date.now():+new Date},ni=["year","quarter","month","week","day","hour","minute","second","millisecond"];function ii(e){var t,n,i=!1;for(t in e)if(a(e,t)&&(-1===He.call(ni,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<ni.length;++n)if(e[ni[n]]){if(i)return!1;parseFloat(e[ni[n]])!==ue(e[ni[n]])&&(i=!0)}return!0}function si(){return this._isValid}function ri(){return Ei(NaN)}function oi(e){var t=re(e),n=t.year||0,i=t.quarter||0,s=t.month||0,r=t.week||t.isoWeek||0,o=t.day||0,a=t.hour||0,l=t.minute||0,c=t.second||0,h=t.millisecond||0;this._isValid=ii(t),this._milliseconds=+h+1e3*c+6e4*l+1e3*a*60*60,this._days=+o+7*r,this._months=+s+3*i+12*n,this._data={},this._locale=yn(),this._bubble()}function ai(e){return e instanceof oi}function li(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function ci(e,t,n){var i,s=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),o=0;for(i=0;i<s;i++)(n&&e[i]!==t[i]||!n&&ue(e[i])!==ue(t[i]))&&o++;return o+r}function hi(e,t){j(e,0,0,(function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+A(~~(e/60),2)+t+A(~~e%60,2)}))}hi("Z",":"),hi("ZZ",""),Ae("Z",Me),Ae("ZZ",Me),je(["Z","ZZ"],(function(e,t,n){n._useUTC=!0,n._tzm=di(Me,e)}));var ui=/([\+\-]|\d\d)/gi;function di(e,t){var n,i,s=(t||"").match(e);return null===s?null:0===(i=60*(n=((s[s.length-1]||[])+"").match(ui)||["-",0,0])[1]+ue(n[2]))?0:"+"===n[0]?i:-i}function fi(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(k(e)||u(e)?e.valueOf():Kn(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),i.updateOffset(n,!1),n):Kn(e).local()}function pi(e){return-Math.round(e._d.getTimezoneOffset())}function _i(e,t,n){var s,r=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=di(Me,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=pi(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),r!==e&&(!t||this._changeInProgress?Oi(this,Ei(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,i.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:pi(this)}function mi(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function gi(e){return this.utcOffset(0,e)}function yi(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(pi(this),"m")),this}function vi(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=di(Pe,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function wi(e){return!!this.isValid()&&(e=e?Kn(e).utcOffset():0,(this.utcOffset()-e)%60==0)}function Ci(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function bi(){if(!c(this._isDSTShifted))return this._isDSTShifted;var e,t={};return C(t,this),(t=zn(t))._a?(e=t._isUTC?p(t._a):Kn(t._a),this._isDSTShifted=this.isValid()&&ci(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function ki(){return!!this.isValid()&&!this._isUTC}function Si(){return!!this.isValid()&&this._isUTC}function Ti(){return!!this.isValid()&&this._isUTC&&0===this._offset}i.updateOffset=function(){};var Ii=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Di=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function Ei(e,t){var n,i,s,r=e,o=null;return ai(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:h(e)||!isNaN(+e)?(r={},t?r[t]=+e:r.milliseconds=+e):(o=Ii.exec(e))?(n="-"===o[1]?-1:1,r={y:0,d:ue(o[ze])*n,h:ue(o[Ge])*n,m:ue(o[Be])*n,s:ue(o[Ke])*n,ms:ue(li(1e3*o[Qe]))*n}):(o=Di.exec(e))?(n="-"===o[1]?-1:1,r={y:xi(o[2],n),M:xi(o[3],n),w:xi(o[4],n),d:xi(o[5],n),h:xi(o[6],n),m:xi(o[7],n),s:xi(o[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(s=Pi(Kn(r.from),Kn(r.to)),(r={}).ms=s.milliseconds,r.M=s.months),i=new oi(r),ai(e)&&a(e,"_locale")&&(i._locale=e._locale),ai(e)&&a(e,"_isValid")&&(i._isValid=e._isValid),i}function xi(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Ni(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Pi(e,t){var n;return e.isValid()&&t.isValid()?(t=fi(t,e),e.isBefore(t)?n=Ni(e,t):((n=Ni(t,e)).milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Mi(e,t){return function(n,i){var s;return null===i||isNaN(+i)||(E(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),s=n,n=i,i=s),Oi(this,Ei(n,i),e),this}}function Oi(e,t,n,s){var r=t._milliseconds,o=li(t._days),a=li(t._months);e.isValid()&&(s=null==s||s,a&&ht(e,fe(e,"Month")+a*n),o&&pe(e,"Date",fe(e,"Date")+o*n),r&&e._d.setTime(e._d.valueOf()+r*n),s&&i.updateOffset(e,o||a))}Ei.fn=oi.prototype,Ei.invalid=ri;var Ri=Mi(1,"add"),Ai=Mi(-1,"subtract");function Fi(e){return"string"==typeof e||e instanceof String}function Li(e){return k(e)||u(e)||Fi(e)||h(e)||Wi(e)||Yi(e)||null==e}function Yi(e){var t,n,i=o(e)&&!l(e),s=!1,r=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"];for(t=0;t<r.length;t+=1)n=r[t],s=s||a(e,n);return i&&s}function Wi(e){var t=r(e),n=!1;return t&&(n=0===e.filter((function(t){return!h(t)&&Fi(e)})).length),t&&n}function ji(e){var t,n,i=o(e)&&!l(e),s=!1,r=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(t=0;t<r.length;t+=1)n=r[t],s=s||a(e,n);return i&&s}function Ui(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function qi(e,t){1===arguments.length&&(arguments[0]?Li(arguments[0])?(e=arguments[0],t=void 0):ji(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||Kn(),s=fi(n,this).startOf("day"),r=i.calendarFormat(this,s)||"sameElse",o=t&&(x(t[r])?t[r].call(this,n):t[r]);return this.format(o||this.localeData().calendar(r,this,Kn(n)))}function Hi(){return new b(this)}function $i(e,t){var n=k(e)?e:Kn(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=se(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function Vi(e,t){var n=k(e)?e:Kn(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=se(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function zi(e,t,n,i){var s=k(e)?e:Kn(e),r=k(t)?t:Kn(t);return!!(this.isValid()&&s.isValid()&&r.isValid())&&("("===(i=i||"()")[0]?this.isAfter(s,n):!this.isBefore(s,n))&&(")"===i[1]?this.isBefore(r,n):!this.isAfter(r,n))}function Gi(e,t){var n,i=k(e)?e:Kn(e);return!(!this.isValid()||!i.isValid())&&("millisecond"===(t=se(t)||"millisecond")?this.valueOf()===i.valueOf():(n=i.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function Bi(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Ki(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Qi(e,t,n){var i,s,r;if(!this.isValid())return NaN;if(!(i=fi(e,this)).isValid())return NaN;switch(s=6e4*(i.utcOffset()-this.utcOffset()),t=se(t)){case"year":r=Zi(this,i)/12;break;case"month":r=Zi(this,i);break;case"quarter":r=Zi(this,i)/3;break;case"second":r=(this-i)/1e3;break;case"minute":r=(this-i)/6e4;break;case"hour":r=(this-i)/36e5;break;case"day":r=(this-i-s)/864e5;break;case"week":r=(this-i-s)/6048e5;break;default:r=this-i}return n?r:he(r)}function Zi(e,t){if(e.date()<t.date())return-Zi(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(n,"months");return-(n+(t-i<0?(t-i)/(i-e.clone().add(n-1,"months")):(t-i)/(e.clone().add(n+1,"months")-i)))||0}function Ji(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function Xi(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?H(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",H(n,"Z")):H(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function es(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,i,s="moment",r="";return this.isLocal()||(s=0===this.utcOffset()?"moment.utc":"moment.parseZone",r="Z"),e="["+s+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n="-MM-DD[T]HH:mm:ss.SSS",i=r+'[")]',this.format(e+t+n+i)}function ts(e){e||(e=this.isUtc()?i.defaultFormatUtc:i.defaultFormat);var t=H(this,e);return this.localeData().postformat(t)}function ns(e,t){return this.isValid()&&(k(e)&&e.isValid()||Kn(e).isValid())?Ei({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function is(e){return this.from(Kn(),e)}function ss(e,t){return this.isValid()&&(k(e)&&e.isValid()||Kn(e).isValid())?Ei({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function rs(e){return this.to(Kn(),e)}function os(e){var t;return void 0===e?this._locale._abbr:(null!=(t=yn(e))&&(this._locale=t),this)}i.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",i.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var as=T("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",(function(e){return void 0===e?this.localeData():this.locale(e)}));function ls(){return this._locale}var cs=1e3,hs=60*cs,us=60*hs,ds=3506328*us;function fs(e,t){return(e%t+t)%t}function ps(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-ds:new Date(e,t,n).valueOf()}function _s(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-ds:Date.UTC(e,t,n)}function ms(e){var t,n;if(void 0===(e=se(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?_s:ps,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=fs(t+(this._isUTC?0:this.utcOffset()*hs),us);break;case"minute":t=this._d.valueOf(),t-=fs(t,hs);break;case"second":t=this._d.valueOf(),t-=fs(t,cs)}return this._d.setTime(t),i.updateOffset(this,!0),this}function gs(e){var t,n;if(void 0===(e=se(e))||"millisecond"===e||!this.isValid())return this;switch(n=this._isUTC?_s:ps,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=us-fs(t+(this._isUTC?0:this.utcOffset()*hs),us)-1;break;case"minute":t=this._d.valueOf(),t+=hs-fs(t,hs)-1;break;case"second":t=this._d.valueOf(),t+=cs-fs(t,cs)-1}return this._d.setTime(t),i.updateOffset(this,!0),this}function ys(){return this._d.valueOf()-6e4*(this._offset||0)}function vs(){return Math.floor(this.valueOf()/1e3)}function ws(){return new Date(this.valueOf())}function Cs(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function bs(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function ks(){return this.isValid()?this.toISOString():null}function Ss(){return g(this)}function Ts(){return f({},m(this))}function Is(){return m(this).overflow}function Ds(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function Es(e,t){var n,s,r,o=this._eras||yn("en")._eras;for(n=0,s=o.length;n<s;++n){switch(typeof o[n].since){case"string":r=i(o[n].since).startOf("day"),o[n].since=r.valueOf()}switch(typeof o[n].until){case"undefined":o[n].until=1/0;break;case"string":r=i(o[n].until).startOf("day").valueOf(),o[n].until=r.valueOf()}}return o}function xs(e,t,n){var i,s,r,o,a,l=this.eras();for(e=e.toUpperCase(),i=0,s=l.length;i<s;++i)if(r=l[i].name.toUpperCase(),o=l[i].abbr.toUpperCase(),a=l[i].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return l[i];break;case"NNNN":if(r===e)return l[i];break;case"NNNNN":if(a===e)return l[i]}else if([r,o,a].indexOf(e)>=0)return l[i]}function Ns(e,t){var n=e.since<=e.until?1:-1;return void 0===t?i(e.since).year():i(e.since).year()+(t-e.offset)*n}function Ps(){var e,t,n,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),i[e].since<=n&&n<=i[e].until)return i[e].name;if(i[e].until<=n&&n<=i[e].since)return i[e].name}return""}function Ms(){var e,t,n,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),i[e].since<=n&&n<=i[e].until)return i[e].narrow;if(i[e].until<=n&&n<=i[e].since)return i[e].narrow}return""}function Os(){var e,t,n,i=this.localeData().eras();for(e=0,t=i.length;e<t;++e){if(n=this.clone().startOf("day").valueOf(),i[e].since<=n&&n<=i[e].until)return i[e].abbr;if(i[e].until<=n&&n<=i[e].since)return i[e].abbr}return""}function Rs(){var e,t,n,s,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=r[e].since<=r[e].until?1:-1,s=this.clone().startOf("day").valueOf(),r[e].since<=s&&s<=r[e].until||r[e].until<=s&&s<=r[e].since)return(this.year()-i(r[e].since).year())*n+r[e].offset;return this.year()}function As(e){return a(this,"_erasNameRegex")||qs.call(this),e?this._erasNameRegex:this._erasRegex}function Fs(e){return a(this,"_erasAbbrRegex")||qs.call(this),e?this._erasAbbrRegex:this._erasRegex}function Ls(e){return a(this,"_erasNarrowRegex")||qs.call(this),e?this._erasNarrowRegex:this._erasRegex}function Ys(e,t){return t.erasAbbrRegex(e)}function Ws(e,t){return t.erasNameRegex(e)}function js(e,t){return t.erasNarrowRegex(e)}function Us(e,t){return t._eraYearOrdinalRegex||xe}function qs(){var e,t,n=[],i=[],s=[],r=[],o=this.eras();for(e=0,t=o.length;e<t;++e)i.push(Ye(o[e].name)),n.push(Ye(o[e].abbr)),s.push(Ye(o[e].narrow)),r.push(Ye(o[e].name)),r.push(Ye(o[e].abbr)),r.push(Ye(o[e].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+i.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+s.join("|")+")","i")}function Hs(e,t){j(0,[e,e.length],0,t)}function $s(e){return Qs.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Vs(e){return Qs.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function zs(){return St(this.year(),1,4)}function Gs(){return St(this.isoWeekYear(),1,4)}function Bs(){var e=this.localeData()._week;return St(this.year(),e.dow,e.doy)}function Ks(){var e=this.localeData()._week;return St(this.weekYear(),e.dow,e.doy)}function Qs(e,t,n,i,s){var r;return null==e?kt(this,i,s).year:(t>(r=St(e,i,s))&&(t=r),Zs.call(this,e,t,n,i,s))}function Zs(e,t,n,i,s){var r=bt(e,t,n,i,s),o=wt(r.year,0,r.dayOfYear);return this.year(o.getUTCFullYear()),this.month(o.getUTCMonth()),this.date(o.getUTCDate()),this}function Js(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}j("N",0,0,"eraAbbr"),j("NN",0,0,"eraAbbr"),j("NNN",0,0,"eraAbbr"),j("NNNN",0,0,"eraName"),j("NNNNN",0,0,"eraNarrow"),j("y",["y",1],"yo","eraYear"),j("y",["yy",2],0,"eraYear"),j("y",["yyy",3],0,"eraYear"),j("y",["yyyy",4],0,"eraYear"),Ae("N",Ys),Ae("NN",Ys),Ae("NNN",Ys),Ae("NNNN",Ws),Ae("NNNNN",js),je(["N","NN","NNN","NNNN","NNNNN"],(function(e,t,n,i){var s=n._locale.erasParse(e,i,n._strict);s?m(n).era=s:m(n).invalidEra=e})),Ae("y",xe),Ae("yy",xe),Ae("yyy",xe),Ae("yyyy",xe),Ae("yo",Us),je(["y","yy","yyy","yyyy"],$e),je(["yo"],(function(e,t,n,i){var s;n._locale._eraYearOrdinalRegex&&(s=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[$e]=n._locale.eraYearOrdinalParse(e,s):t[$e]=parseInt(e,10)})),j(0,["gg",2],0,(function(){return this.weekYear()%100})),j(0,["GG",2],0,(function(){return this.isoWeekYear()%100})),Hs("gggg","weekYear"),Hs("ggggg","weekYear"),Hs("GGGG","isoWeekYear"),Hs("GGGGG","isoWeekYear"),ie("weekYear","gg"),ie("isoWeekYear","GG"),ae("weekYear",1),ae("isoWeekYear",1),Ae("G",Ne),Ae("g",Ne),Ae("GG",ke,ve),Ae("gg",ke,ve),Ae("GGGG",De,Ce),Ae("gggg",De,Ce),Ae("GGGGG",Ee,be),Ae("ggggg",Ee,be),Ue(["gggg","ggggg","GGGG","GGGGG"],(function(e,t,n,i){t[i.substr(0,2)]=ue(e)})),Ue(["gg","GG"],(function(e,t,n,s){t[s]=i.parseTwoDigitYear(e)})),j("Q",0,"Qo","quarter"),ie("quarter","Q"),ae("quarter",7),Ae("Q",ye),je("Q",(function(e,t){t[Ve]=3*(ue(e)-1)})),j("D",["DD",2],"Do","date"),ie("date","D"),ae("date",9),Ae("D",ke),Ae("DD",ke,ve),Ae("Do",(function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient})),je(["D","DD"],ze),je("Do",(function(e,t){t[ze]=ue(e.match(ke)[0])}));var Xs=de("Date",!0);function er(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}j("DDD",["DDDD",3],"DDDo","dayOfYear"),ie("dayOfYear","DDD"),ae("dayOfYear",4),Ae("DDD",Ie),Ae("DDDD",we),je(["DDD","DDDD"],(function(e,t,n){n._dayOfYear=ue(e)})),j("m",["mm",2],0,"minute"),ie("minute","m"),ae("minute",14),Ae("m",ke),Ae("mm",ke,ve),je(["m","mm"],Be);var tr=de("Minutes",!1);j("s",["ss",2],0,"second"),ie("second","s"),ae("second",15),Ae("s",ke),Ae("ss",ke,ve),je(["s","ss"],Ke);var nr,ir,sr=de("Seconds",!1);for(j("S",0,0,(function(){return~~(this.millisecond()/100)})),j(0,["SS",2],0,(function(){return~~(this.millisecond()/10)})),j(0,["SSS",3],0,"millisecond"),j(0,["SSSS",4],0,(function(){return 10*this.millisecond()})),j(0,["SSSSS",5],0,(function(){return 100*this.millisecond()})),j(0,["SSSSSS",6],0,(function(){return 1e3*this.millisecond()})),j(0,["SSSSSSS",7],0,(function(){return 1e4*this.millisecond()})),j(0,["SSSSSSSS",8],0,(function(){return 1e5*this.millisecond()})),j(0,["SSSSSSSSS",9],0,(function(){return 1e6*this.millisecond()})),ie("millisecond","ms"),ae("millisecond",16),Ae("S",Ie,ye),Ae("SS",Ie,ve),Ae("SSS",Ie,we),nr="SSSS";nr.length<=9;nr+="S")Ae(nr,xe);function rr(e,t){t[Qe]=ue(1e3*("0."+e))}for(nr="S";nr.length<=9;nr+="S")je(nr,rr);function or(){return this._isUTC?"UTC":""}function ar(){return this._isUTC?"Coordinated Universal Time":""}ir=de("Milliseconds",!1),j("z",0,0,"zoneAbbr"),j("zz",0,0,"zoneName");var lr=b.prototype;function cr(e){return Kn(1e3*e)}function hr(){return Kn.apply(null,arguments).parseZone()}function ur(e){return e}lr.add=Ri,lr.calendar=qi,lr.clone=Hi,lr.diff=Qi,lr.endOf=gs,lr.format=ts,lr.from=ns,lr.fromNow=is,lr.to=ss,lr.toNow=rs,lr.get=_e,lr.invalidAt=Is,lr.isAfter=$i,lr.isBefore=Vi,lr.isBetween=zi,lr.isSame=Gi,lr.isSameOrAfter=Bi,lr.isSameOrBefore=Ki,lr.isValid=Ss,lr.lang=as,lr.locale=os,lr.localeData=ls,lr.max=Zn,lr.min=Qn,lr.parsingFlags=Ts,lr.set=me,lr.startOf=ms,lr.subtract=Ai,lr.toArray=Cs,lr.toObject=bs,lr.toDate=ws,lr.toISOString=Xi,lr.inspect=es,"undefined"!=typeof Symbol&&null!=Symbol.for&&(lr[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),lr.toJSON=ks,lr.toString=Ji,lr.unix=vs,lr.valueOf=ys,lr.creationData=Ds,lr.eraName=Ps,lr.eraNarrow=Ms,lr.eraAbbr=Os,lr.eraYear=Rs,lr.year=gt,lr.isLeapYear=yt,lr.weekYear=$s,lr.isoWeekYear=Vs,lr.quarter=lr.quarters=Js,lr.month=ut,lr.daysInMonth=dt,lr.week=lr.weeks=xt,lr.isoWeek=lr.isoWeeks=Nt,lr.weeksInYear=Bs,lr.weeksInWeekYear=Ks,lr.isoWeeksInYear=zs,lr.isoWeeksInISOWeekYear=Gs,lr.date=Xs,lr.day=lr.days=Vt,lr.weekday=zt,lr.isoWeekday=Gt,lr.dayOfYear=er,lr.hour=lr.hours=rn,lr.minute=lr.minutes=tr,lr.second=lr.seconds=sr,lr.millisecond=lr.milliseconds=ir,lr.utcOffset=_i,lr.utc=gi,lr.local=yi,lr.parseZone=vi,lr.hasAlignedHourOffset=wi,lr.isDST=Ci,lr.isLocal=ki,lr.isUtcOffset=Si,lr.isUtc=Ti,lr.isUTC=Ti,lr.zoneAbbr=or,lr.zoneName=ar,lr.dates=T("dates accessor is deprecated. Use date instead.",Xs),lr.months=T("months accessor is deprecated. Use month instead",ut),lr.years=T("years accessor is deprecated. Use year instead",gt),lr.zone=T("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",mi),lr.isDSTShifted=T("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",bi);var dr=M.prototype;function fr(e,t,n,i){var s=yn(),r=p().set(i,t);return s[n](r,e)}function pr(e,t,n){if(h(e)&&(t=e,e=void 0),e=e||"",null!=t)return fr(e,t,n,"month");var i,s=[];for(i=0;i<12;i++)s[i]=fr(e,i,n,"month");return s}function _r(e,t,n,i){"boolean"==typeof e?(h(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,h(t)&&(n=t,t=void 0),t=t||"");var s,r=yn(),o=e?r._week.dow:0,a=[];if(null!=n)return fr(t,(n+o)%7,i,"day");for(s=0;s<7;s++)a[s]=fr(t,(s+o)%7,i,"day");return a}function mr(e,t){return pr(e,t,"months")}function gr(e,t){return pr(e,t,"monthsShort")}function yr(e,t,n){return _r(e,t,n,"weekdays")}function vr(e,t,n){return _r(e,t,n,"weekdaysShort")}function wr(e,t,n){return _r(e,t,n,"weekdaysMin")}dr.calendar=R,dr.longDateFormat=z,dr.invalidDate=B,dr.ordinal=J,dr.preparse=ur,dr.postformat=ur,dr.relativeTime=ee,dr.pastFuture=te,dr.set=N,dr.eras=Es,dr.erasParse=xs,dr.erasConvertYear=Ns,dr.erasAbbrRegex=Fs,dr.erasNameRegex=As,dr.erasNarrowRegex=Ls,dr.months=ot,dr.monthsShort=at,dr.monthsParse=ct,dr.monthsRegex=pt,dr.monthsShortRegex=ft,dr.week=Tt,dr.firstDayOfYear=Et,dr.firstDayOfWeek=Dt,dr.weekdays=jt,dr.weekdaysMin=qt,dr.weekdaysShort=Ut,dr.weekdaysParse=$t,dr.weekdaysRegex=Bt,dr.weekdaysShortRegex=Kt,dr.weekdaysMinRegex=Qt,dr.isPM=nn,dr.meridiem=on,_n("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===ue(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),i.lang=T("moment.lang is deprecated. Use moment.locale instead.",_n),i.langData=T("moment.langData is deprecated. Use moment.localeData instead.",yn);var Cr=Math.abs;function br(){var e=this._data;return this._milliseconds=Cr(this._milliseconds),this._days=Cr(this._days),this._months=Cr(this._months),e.milliseconds=Cr(e.milliseconds),e.seconds=Cr(e.seconds),e.minutes=Cr(e.minutes),e.hours=Cr(e.hours),e.months=Cr(e.months),e.years=Cr(e.years),this}function kr(e,t,n,i){var s=Ei(t,n);return e._milliseconds+=i*s._milliseconds,e._days+=i*s._days,e._months+=i*s._months,e._bubble()}function Sr(e,t){return kr(this,e,t,1)}function Tr(e,t){return kr(this,e,t,-1)}function Ir(e){return e<0?Math.floor(e):Math.ceil(e)}function Dr(){var e,t,n,i,s,r=this._milliseconds,o=this._days,a=this._months,l=this._data;return r>=0&&o>=0&&a>=0||r<=0&&o<=0&&a<=0||(r+=864e5*Ir(xr(a)+o),o=0,a=0),l.milliseconds=r%1e3,e=he(r/1e3),l.seconds=e%60,t=he(e/60),l.minutes=t%60,n=he(t/60),l.hours=n%24,o+=he(n/24),a+=s=he(Er(o)),o-=Ir(xr(s)),i=he(a/12),a%=12,l.days=o,l.months=a,l.years=i,this}function Er(e){return 4800*e/146097}function xr(e){return 146097*e/4800}function Nr(e){if(!this.isValid())return NaN;var t,n,i=this._milliseconds;if("month"===(e=se(e))||"quarter"===e||"year"===e)switch(t=this._days+i/864e5,n=this._months+Er(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(xr(this._months)),e){case"week":return t/7+i/6048e5;case"day":return t+i/864e5;case"hour":return 24*t+i/36e5;case"minute":return 1440*t+i/6e4;case"second":return 86400*t+i/1e3;case"millisecond":return Math.floor(864e5*t)+i;default:throw new Error("Unknown unit "+e)}}function Pr(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*ue(this._months/12):NaN}function Mr(e){return function(){return this.as(e)}}var Or=Mr("ms"),Rr=Mr("s"),Ar=Mr("m"),Fr=Mr("h"),Lr=Mr("d"),Yr=Mr("w"),Wr=Mr("M"),jr=Mr("Q"),Ur=Mr("y");function qr(){return Ei(this)}function Hr(e){return e=se(e),this.isValid()?this[e+"s"]():NaN}function $r(e){return function(){return this.isValid()?this._data[e]:NaN}}var Vr=$r("milliseconds"),zr=$r("seconds"),Gr=$r("minutes"),Br=$r("hours"),Kr=$r("days"),Qr=$r("months"),Zr=$r("years");function Jr(){return he(this.days()/7)}var Xr=Math.round,eo={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function to(e,t,n,i,s){return s.relativeTime(t||1,!!n,e,i)}function no(e,t,n,i){var s=Ei(e).abs(),r=Xr(s.as("s")),o=Xr(s.as("m")),a=Xr(s.as("h")),l=Xr(s.as("d")),c=Xr(s.as("M")),h=Xr(s.as("w")),u=Xr(s.as("y")),d=r<=n.ss&&["s",r]||r<n.s&&["ss",r]||o<=1&&["m"]||o<n.m&&["mm",o]||a<=1&&["h"]||a<n.h&&["hh",a]||l<=1&&["d"]||l<n.d&&["dd",l];return null!=n.w&&(d=d||h<=1&&["w"]||h<n.w&&["ww",h]),(d=d||c<=1&&["M"]||c<n.M&&["MM",c]||u<=1&&["y"]||["yy",u])[2]=t,d[3]=+e>0,d[4]=i,to.apply(null,d)}function io(e){return void 0===e?Xr:"function"==typeof e&&(Xr=e,!0)}function so(e,t){return void 0!==eo[e]&&(void 0===t?eo[e]:(eo[e]=t,"s"===e&&(eo.ss=t-1),!0))}function ro(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,i,s=!1,r=eo;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(s=e),"object"==typeof t&&(r=Object.assign({},eo,t),null!=t.s&&null==t.ss&&(r.ss=t.s-1)),i=no(this,!s,r,n=this.localeData()),s&&(i=n.pastFuture(+this,i)),n.postformat(i)}var oo=Math.abs;function ao(e){return(e>0)-(e<0)||+e}function lo(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,i,s,r,o,a,l=oo(this._milliseconds)/1e3,c=oo(this._days),h=oo(this._months),u=this.asSeconds();return u?(e=he(l/60),t=he(e/60),l%=60,e%=60,n=he(h/12),h%=12,i=l?l.toFixed(3).replace(/\.?0+$/,""):"",s=u<0?"-":"",r=ao(this._months)!==ao(u)?"-":"",o=ao(this._days)!==ao(u)?"-":"",a=ao(this._milliseconds)!==ao(u)?"-":"",s+"P"+(n?r+n+"Y":"")+(h?r+h+"M":"")+(c?o+c+"D":"")+(t||e||l?"T":"")+(t?a+t+"H":"")+(e?a+e+"M":"")+(l?a+i+"S":"")):"P0D"}var co=oi.prototype;return co.isValid=si,co.abs=br,co.add=Sr,co.subtract=Tr,co.as=Nr,co.asMilliseconds=Or,co.asSeconds=Rr,co.asMinutes=Ar,co.asHours=Fr,co.asDays=Lr,co.asWeeks=Yr,co.asMonths=Wr,co.asQuarters=jr,co.asYears=Ur,co.valueOf=Pr,co._bubble=Dr,co.clone=qr,co.get=Hr,co.milliseconds=Vr,co.seconds=zr,co.minutes=Gr,co.hours=Br,co.days=Kr,co.weeks=Jr,co.months=Qr,co.years=Zr,co.humanize=ro,co.toISOString=lo,co.toString=lo,co.toJSON=lo,co.locale=os,co.localeData=ls,co.toIsoString=T("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",lo),co.lang=as,j("X",0,0,"unix"),j("x",0,0,"valueOf"),Ae("x",Ne),Ae("X",Oe),je("X",(function(e,t,n){n._d=new Date(1e3*parseFloat(e))})),je("x",(function(e,t,n){n._d=new Date(ue(e))})),
//! moment.js
i.version="2.29.1",s(Kn),i.fn=lr,i.min=Xn,i.max=ei,i.now=ti,i.utc=p,i.unix=cr,i.months=mr,i.isDate=u,i.locale=_n,i.invalid=y,i.duration=Ei,i.isMoment=k,i.weekdays=yr,i.parseZone=hr,i.localeData=yn,i.isDuration=ai,i.monthsShort=gr,i.weekdaysMin=wr,i.defineLocale=mn,i.updateLocale=gn,i.locales=vn,i.weekdaysShort=vr,i.normalizeUnits=se,i.relativeTimeRounding=io,i.relativeTimeThreshold=so,i.calendarFormat=Ui,i.prototype=lr,i.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},i}()}));const Z=e=>{e.setAttribute("size",e.getAttribute("placeholder").length+2)},J=(e,t)=>"minutes"===t?e:"hours"===t?60*e:"seconds"===t?e/60:"days"===t?60*e*24:void 0,X=e=>`${e.getFullYear()}-${(1+e.getMonth()).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`;function ee(t){let n,s,r,o,a,d,p,y,w,b,S,T,I,D,E,x,N,P,O,R,A,F,L,Y,W,j;return{c(){n=u("main"),s=u("h3"),s.textContent="Add Items Below!",r=f(),o=u("form"),a=u("input"),d=f(),p=u("input"),y=f(),w=u("select"),b=u("option"),b.textContent="Minutes",S=u("option"),S.textContent="Hours",T=u("option"),T.textContent="Seconds",I=u("option"),I.textContent="Days (for Calc HW)",D=f(),E=u("div"),x=u("textarea"),N=f(),P=u("input"),O=f(),R=u("input"),A=f(),F=u("input"),L=f(),Y=u("script"),Y.textContent="// make the textarea responsive, put all scripts inside of here!\n        function autoResize() {\n            this.style.height = 'auto';\n            this.style.height = this.scrollHeight + 'px';\n        }\n    \n        textarea = document.querySelector(\"#descTextArea\");\n        textarea.addEventListener('input', autoResize, false);",m(s,"id","add-item-banner"),m(s,"class","svelte-jh9kss"),m(a,"id","inputName"),m(a,"type","text"),m(a,"placeholder","Name"),m(a,"class","svelte-jh9kss"),k(a,"normal-width-name",t[2]),m(p,"id","inputTime"),m(p,"type","number"),m(p,"placeholder","Time Needed"),m(p,"class","svelte-jh9kss"),k(p,"adjust-width",t[1]),b.selected="true",b.__value="minutes",b.value=b.__value,S.__value="hours",S.value=S.__value,T.__value="seconds",T.value=T.__value,I.__value="days",I.value=I.__value,m(w,"name","units"),m(w,"class","svelte-jh9kss"),void 0===t[3].timeUnits&&M((()=>t[14].call(w))),m(x,"id","descTextArea"),m(x,"name","description"),m(x,"placeholder","Description"),m(x,"class","svelte-jh9kss"),m(P,"type","date"),m(P,"id","inputDueDate"),m(P,"placeholder",X(new Date)),m(P,"class","svelte-jh9kss"),k(P,"width-adjuster",t[0]),m(R,"type","number"),m(R,"id","inputPoints"),m(R,"placeholder","Points (optional)"),m(R,"class","svelte-jh9kss"),m(E,"class","dels svelte-jh9kss"),m(F,"id","submit-button"),m(F,"type","submit"),m(F,"placeholder","Enter"),m(F,"class","svelte-jh9kss"),m(o,"class","grid-3")},m(e,i){c(e,n,i),l(n,s),l(n,r),l(n,o),l(o,a),t[10](a),v(a,t[3].name),l(o,d),l(o,p),t[12](p),v(p,t[3].time),l(o,y),l(o,w),l(w,b),l(w,S),l(w,T),l(w,I),C(w,t[3].timeUnits),l(o,D),l(o,E),l(E,x),t[15](x),v(x,t[3].description),l(E,N),l(E,P),t[17](P),v(P,t[3].dueDate),l(E,O),l(E,R),t[19](R),v(R,t[3].points),l(o,A),l(o,F),l(n,L),l(n,Y),W||(j=[_(a,"input",t[11]),_(p,"input",t[13]),_(w,"change",t[14]),_(x,"input",t[16]),_(P,"input",t[18]),_(R,"input",t[20]),_(o,"submit",t[9])],W=!0)},p(e,[t]){8&t&&a.value!==e[3].name&&v(a,e[3].name),4&t&&k(a,"normal-width-name",e[2]),8&t&&g(p.value)!==e[3].time&&v(p,e[3].time),2&t&&k(p,"adjust-width",e[1]),8&t&&C(w,e[3].timeUnits),8&t&&v(x,e[3].description),8&t&&v(P,e[3].dueDate),1&t&&k(P,"width-adjuster",e[0]),8&t&&g(R.value)!==e[3].points&&v(R,e[3].points)},i:e,o:e,d(e){e&&h(n),t[10](null),t[12](null),t[15](null),t[17](null),t[19](null),W=!1,i(j)}}}function te(e,t,n){let i=!0,s=!1,r=!0;const o=T();let a,l,c,h,u,d={name:"",time:"",timeUnits:"minutes",description:"",dueDate:X(new Date),points:null};const f=["Name","Time Needed","Description","Due Date (e.x. 2/3/2021)"];return[i,s,r,d,a,l,c,h,u,e=>{e.preventDefault(),(e=>{n(0,i=!0),n(1,s=!1),n(2,r=!0);const t=[a,l,h,c];for(let e=0;e<t.length;e++)t[e].style.setProperty("--color",null),t[e].style.setProperty("--opacity",null),t[e].placeholder=f[e],Z(t[e]);const o=e.name,u=e.time;e.timeUnits;const d=e.description,p=e.dueDate;e.points;let _=!0;return""===o&&(_=!1,n(2,r=!1),n(4,a.placeholder="Please give a name.",a),Z(a),a.style.setProperty("--color","red"),a.style.setProperty("--opacity",1)),""===u&&(_=!1,n(1,s=!0),n(5,l.placeholder="Please give the amount of time needed.",l),l.style.setProperty("--color","red"),l.style.setProperty("--opacity",1)),""===d&&(_=!1,n(7,h.placeholder="Please give a description.",h),Z(h),h.style.setProperty("--color","red"),h.style.setProperty("--opacity",1)),""===p&&(_=!1,n(0,i=!1),n(6,c.value="",c),n(6,c.placeholder="Please give a valid due date.",c),Z(c),c.style.setProperty("--color","red"),c.style.setProperty("--opacity",1)),_})(d)&&(o("additem",d),n(3,d={name:"",time:"",timeUnits:"minutes",description:"",dueDate:"",points:null}),console.log("yep we submitted!"))},function(e){D[e?"unshift":"push"]((()=>{a=e,n(4,a)}))},function(){d.name=this.value,n(3,d)},function(e){D[e?"unshift":"push"]((()=>{l=e,n(5,l)}))},function(){d.time=g(this.value),n(3,d)},function(){d.timeUnits=b(this),n(3,d)},function(e){D[e?"unshift":"push"]((()=>{h=e,n(7,h)}))},function(){d.description=this.value,n(3,d)},function(e){D[e?"unshift":"push"]((()=>{c=e,n(6,c)}))},function(){d.dueDate=this.value,n(3,d)},function(e){D[e?"unshift":"push"]((()=>{u=e,n(8,u)}))},function(){d.points=g(this.value),n(3,d)}]}class ne extends B{constructor(e){super(),G(this,e,te,ee,r,{})}}
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */var ie=function(e,t){return(ie=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function se(e,t,n,i){return new(n||(n=Promise))((function(s,r){function o(e){try{l(i.next(e))}catch(e){r(e)}}function a(e){try{l(i.throw(e))}catch(e){r(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((i=i.apply(e,t||[])).next())}))}function re(e,t){var n,i,s,r,o={label:0,sent:function(){if(1&s[0])throw s[1];return s[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,i&&(s=2&r[0]?i.return:r[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,r[1])).done)return s;switch(i=0,s&&(r=[2&r[0],s.value]),r[0]){case 0:case 1:s=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,i=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!(s=o.trys,(s=s.length>0&&s[s.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!s||r[1]>s[0]&&r[1]<s[3])){o.label=r[1];break}if(6===r[0]&&o.label<s[1]){o.label=s[1],s=r;break}if(s&&o.label<s[2]){o.label=s[2],o.ops.push(r);break}s[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],i=0}finally{n=s=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}function oe(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ae(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,s,r=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(e){s={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function le(e,t,n){if(n||2===arguments.length)for(var i,s=0,r=t.length;s<r;s++)!i&&s in t||(i||(i=Array.prototype.slice.call(t,0,s)),i[s]=t[s]);return e.concat(i||Array.prototype.slice.call(t))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ce=!1,he="${JSCORE_VERSION}",ue=function(e,t){if(!e)throw de(t)},de=function(e){return new Error("Firebase Database ("+he+") INTERNAL ASSERT FAILED: "+e)},fe=function(e){for(var t=[],n=0,i=0;i<e.length;i++){var s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},pe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[],s=0;s<e.length;s+=3){var r=e[s],o=s+1<e.length,a=o?e[s+1]:0,l=s+2<e.length,c=l?e[s+2]:0,h=r>>2,u=(3&r)<<4|a>>4,d=(15&a)<<2|c>>6,f=63&c;l||(f=64,o||(d=64)),i.push(n[h],n[u],n[d],n[f])}return i.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fe(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],n=0,i=0;n<e.length;){var s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){var r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){var o=((7&s)<<18|(63&(r=e[n++]))<<12|(63&(a=e[n++]))<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(o>>10)),t[i++]=String.fromCharCode(56320+(1023&o))}else{r=e[n++];var a=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[],s=0;s<e.length;){var r=n[e.charAt(s++)],o=s<e.length?n[e.charAt(s)]:0,a=++s<e.length?n[e.charAt(s)]:64,l=++s<e.length?n[e.charAt(s)]:64;if(++s,null==r||null==o||null==a||null==l)throw Error();var c=r<<2|o>>4;if(i.push(c),64!==a){var h=o<<4&240|a>>2;if(i.push(h),64!==l){var u=a<<6&192|l;i.push(u)}}}return i},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},_e=function(e){try{return pe.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function me(e){return ge(void 0,e)}function ge(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(var n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=ge(e[n],t[n]));return e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var ye=function(){function e(){var e=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.resolve=t,e.reject=n}))}return e.prototype.wrapCallback=function(e){var t=this;return function(n,i){n?t.reject(n):t.resolve(i),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(n):e(n,i))}},e}();
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ve(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test("undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:"")}function we(){return!0===ce}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var Ce=function(e){function t(n,i,s){var r=e.call(this,i)||this;return r.code=n,r.customData=s,r.name="FirebaseError",Object.setPrototypeOf(r,t.prototype),Error.captureStackTrace&&Error.captureStackTrace(r,be.prototype.create),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}ie(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t}(Error),be=function(){function e(e,t,n){this.service=e,this.serviceName=t,this.errors=n}return e.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var i=t[0]||{},s=this.service+"/"+e,r=this.errors[e],o=r?ke(r,i):"Error",a=this.serviceName+": "+o+" ("+s+").",l=new Ce(s,a,i);return l},e}();function ke(e,t){return e.replace(Se,(function(e,n){var i=t[n];return null!=i?String(i):"<"+n+"?>"}))}var Se=/\{\$([^}]+)}/g;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Te(e){return JSON.parse(e)}function Ie(e){return JSON.stringify(e)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var De=function(e){var t={},n={},i={},s="";try{var r=e.split(".");t=Te(_e(r[0])||""),n=Te(_e(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Ee(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function xe(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function Ne(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Pe(e,t,n){var i={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function Me(e,t){if(e===t)return!0;for(var n=Object.keys(e),i=Object.keys(t),s=0,r=n;s<r.length;s++){var o=r[s];if(!i.includes(o))return!1;var a=e[o],l=t[o];if(Oe(a)&&Oe(l)){if(!Me(a,l))return!1}else if(a!==l)return!1}for(var c=0,h=i;c<h.length;c++){o=h[c];if(!n.includes(o))return!1}return!0}function Oe(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
var Re=function(){function e(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}return e.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},e.prototype.compress_=function(e,t){t||(t=0);var n=this.W_;if("string"==typeof e)for(var i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(i=16;i<80;i++){var s=n[i-3]^n[i-8]^n[i-14]^n[i-16];n[i]=4294967295&(s<<1|s>>>31)}var r,o,a=this.chain_[0],l=this.chain_[1],c=this.chain_[2],h=this.chain_[3],u=this.chain_[4];for(i=0;i<80;i++){i<40?i<20?(r=h^l&(c^h),o=1518500249):(r=l^c^h,o=1859775393):i<60?(r=l&c|h&(l|c),o=2400959708):(r=l^c^h,o=3395469782);s=(a<<5|a>>>27)+r+u+o+n[i]&4294967295;u=h,h=c,c=4294967295&(l<<30|l>>>2),l=a,a=s}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+c&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295},e.prototype.update=function(e,t){if(null!=e){void 0===t&&(t=e.length);for(var n=t-this.blockSize,i=0,s=this.buf_,r=this.inbuf_;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++i,++r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++i,++r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}},e.prototype.digest=function(){var e=[],t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&t,t/=256;this.compress_(this.buf_);var i=0;for(n=0;n<5;n++)for(var s=24;s>=0;s-=8)e[i]=this.chain_[n]>>s&255,++i;return e},e}();function Ae(e,t){return e+" failed: "+t+" argument "}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Fe=function(e){for(var t=0,n=0;n<e.length;n++){var i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};function Le(e,t,n){void 0===t&&(t=1e3),void 0===n&&(n=2);var i=t*Math.pow(n,e),s=Math.round(.5*i*(Math.random()-.5)*2);return Math.min(144e5,i+s)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function Ye(e){return e&&e._delegate?e._delegate:e}var We=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),je="[DEFAULT]",Ue=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new ye;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var i=this.getOrInitializeService({instanceIdentifier:t});i&&n.resolve(i)}catch(e){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:je})}catch(e){}try{for(var i=oe(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var r=ae(s.value,2),o=r[0],a=r[1],l=this.normalizeInstanceIdentifier(o);try{var c=this.getOrInitializeService({instanceIdentifier:l});a.resolve(c)}catch(e){}}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=je),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return se(this,void 0,void 0,(function(){var e;return re(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(le(le([],ae(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),ae(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=je),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=je),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,s=void 0===i?{}:i,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(this.name+"("+r+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var o=this.getOrInitializeService({instanceIdentifier:r,options:s});try{for(var a=oe(this.instancesDeferred.entries()),l=a.next();!l.done;l=a.next()){var c=ae(l.value,2),h=c[0],u=c[1];r===this.normalizeInstanceIdentifier(h)&&u.resolve(o)}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return o},e.prototype.onInit=function(e,t){var n,i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);var r=this.instances.get(i);return r&&e(r,i),function(){s.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,s=this.onInitCallbacks.get(t);if(s)try{for(var r=oe(s),o=r.next();!o.done;o=r.next()){var a=o.value;try{a(e,t)}catch(e){}}}catch(e){n={error:e}}finally{try{o&&!o.done&&(i=r.return)&&i.call(r)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t,n=e.instanceIdentifier,i=e.options,s=void 0===i?{}:i,r=this.instances.get(n);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:(t=n,t===je?void 0:t),options:s}),this.instances.set(n,r),this.instancesOptions.set(n,s),this.invokeOnInitCallbacks(r,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,r)}catch(e){}return r||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=je),this.component?this.component.multipleInstances?e:je:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var qe,He,$e=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new Ue(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}();
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */function Ve(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var i=Array(e),s=0;for(t=0;t<n;t++)for(var r=arguments[t],o=0,a=r.length;o<a;o++,s++)i[s]=r[o];return i}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(He||(He={}));var ze={debug:He.DEBUG,verbose:He.VERBOSE,info:He.INFO,warn:He.WARN,error:He.ERROR,silent:He.SILENT},Ge=He.INFO,Be=((qe={})[He.DEBUG]="log",qe[He.VERBOSE]="log",qe[He.INFO]="info",qe[He.WARN]="warn",qe[He.ERROR]="error",qe),Ke=function(e,t){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(t<e.logLevel)){var s=(new Date).toISOString(),r=Be[t];if(!r)throw new Error("Attempted to log a message with an invalid logType (value: "+t+")");console[r].apply(console,Ve(["["+s+"]  "+e.name+":"],n))}},Qe=function(){function e(e){this.name=e,this._logLevel=Ge,this._logHandler=Ke,this._userLogHandler=null}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in He))throw new TypeError('Invalid value "'+e+'" assigned to `logLevel`');this._logLevel=e},enumerable:!1,configurable:!0}),e.prototype.setLogLevel=function(e){this._logLevel="string"==typeof e?ze[e]:e},Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e},enumerable:!1,configurable:!0}),e.prototype.debug=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ve([this,He.DEBUG],e)),this._logHandler.apply(this,Ve([this,He.DEBUG],e))},e.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ve([this,He.VERBOSE],e)),this._logHandler.apply(this,Ve([this,He.VERBOSE],e))},e.prototype.info=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ve([this,He.INFO],e)),this._logHandler.apply(this,Ve([this,He.INFO],e))},e.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ve([this,He.WARN],e)),this._logHandler.apply(this,Ve([this,He.WARN],e))},e.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._userLogHandler&&this._userLogHandler.apply(this,Ve([this,He.ERROR],e)),this._logHandler.apply(this,Ve([this,He.ERROR],e))},e}();
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ze{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Je="@firebase/app",Xe=new Qe("@firebase/app"),et="[DEFAULT]",tt={[Je]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},nt=new Map,it=new Map;function st(e,t){try{e.container.addComponent(t)}catch(n){Xe.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function rt(e){const t=e.name;if(it.has(t))return Xe.debug(`There were multiple attempts to register component ${t}.`),!1;it.set(t,e);for(const t of nt.values())st(t,e);return!0}function ot(e,t){return e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const at=new be("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class lt{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new We("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw at.create("app-deleted",{appName:this._name})}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ct(e="[DEFAULT]"){const t=nt.get(e);if(!t)throw at.create("no-app",{appName:e});return t}function ht(e,t,n){var i;let s=null!==(i=tt[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=t.match(/\s|\//);if(r||o){const e=[`Unable to register library "${s}" with version "${t}":`];return r&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Xe.warn(e.join(" "))}rt(new We(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var ut;rt(new We("platform-logger",(e=>new Ze(e)),"PRIVATE")),ht(Je,"0.7.0",ut),ht("fire-js","");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
ht("firebase","9.0.2","app");var dt=K((function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function i(e,t,i){var s,r=new Promise((function(r,o){n(s=e[t].apply(e,i)).then(r,o)}));return r.request=s,r}function s(e,t,n){var s=i(e,t,n);return s.then((function(e){if(e)return new h(e,s.request)}))}function r(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,s){s.forEach((function(s){s in n.prototype&&(e.prototype[s]=function(){return i(this[t],s,arguments)})}))}function a(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return this[t][i].apply(this[t],arguments)})}))}function l(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return s(this[t],i,arguments)})}))}function c(e){this._index=e}function h(e,t){this._cursor=e,this._request=t}function u(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function _(e,t,n){var s=i(indexedDB,"open",[e,t]),r=s.request;return r&&(r.onupgradeneeded=function(e){n&&n(new f(r.result,e.oldVersion,r.transaction))}),s.then((function(e){return new p(e)}))}function m(e){return i(indexedDB,"deleteDatabase",[e])}r(c,"_index",["name","keyPath","multiEntry","unique"]),o(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),l(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(h,"_cursor",["direction","key","primaryKey","value"]),o(h,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(h.prototype[e]=function(){var t=this,i=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,i),n(t._request).then((function(e){if(e)return new h(e,t._request)}))}))})})),u.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},u.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},r(u,"_store",["name","keyPath","indexNames","autoIncrement"]),o(u,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),l(u,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(u,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new u(this._tx.objectStore.apply(this._tx,arguments))},r(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new u(this._db.createObjectStore.apply(this._db,arguments))},r(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},r(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[u,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),i=n[n.length-1],s=this._store||this._index,r=s[e].apply(s,n.slice(0,-1));r.onsuccess=function(){i(r.result)}})}))})),[c,u].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,i=[];return new Promise((function(s){n.iterateCursor(e,(function(e){e?(i.push(e.value),void 0===t||i.length!=t?e.continue():s(i)):s(i)}))}))})})),e.openDb=_,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}(t)}));const ft="0.5.0",pt=1e4,_t="w:0.5.0",mt="FIS_v2",gt=36e5,yt=new be("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function vt(e){return e instanceof Ce&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function wt({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Ct(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function bt(e,t){const n=(await t.json()).error;return yt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function kt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function St(e,{refreshToken:t}){const n=kt(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function Tt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function It(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Dt=/^[cdef][\w-]{21}$/;function Et(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return Dt.test(t)?t:""}catch(e){return""}}function xt(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Nt=new Map;function Pt(e,t){const n=xt(e);Mt(n,t),function(e,t){const n=function(){!Ot&&"BroadcastChannel"in self&&(Ot=new BroadcastChannel("[Firebase] FID Change"),Ot.onmessage=e=>{Mt(e.data.key,e.data.fid)});return Ot}();n&&n.postMessage({key:e,fid:t});0===Nt.size&&Ot&&(Ot.close(),Ot=null)}(n,t)}function Mt(e,t){const n=Nt.get(e);if(n)for(const e of n)e(t)}let Ot=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Rt="firebase-installations-store";let At=null;function Ft(){return At||(At=dt.openDb("firebase-installations-database",1,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(Rt)}}))),At}async function Lt(e,t){const n=xt(e),i=(await Ft()).transaction(Rt,"readwrite"),s=i.objectStore(Rt),r=await s.get(n);return await s.put(t,n),await i.complete,r&&r.fid===t.fid||Pt(e,t.fid),t}async function Yt(e){const t=xt(e),n=(await Ft()).transaction(Rt,"readwrite");await n.objectStore(Rt).delete(t),await n.complete}async function Wt(e,t){const n=xt(e),i=(await Ft()).transaction(Rt,"readwrite"),s=i.objectStore(Rt),r=await s.get(n),o=t(r);return void 0===o?await s.delete(n):await s.put(o,n),await i.complete,!o||r&&r.fid===o.fid||Pt(e,o.fid),o}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function jt(e){let t;const n=await Wt(e,(n=>{const i=function(e){return Ht(e||{fid:Et(),registrationStatus:0})}(n),s=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(yt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()};return{installationEntry:n,registrationPromise:async function(e,t){try{return Lt(e,await async function(e,{fid:t}){const n=wt(e),i=kt(e),s={fid:t,authVersion:mt,appId:e.appId,sdkVersion:_t},r={method:"POST",headers:i,body:JSON.stringify(s)},o=await Tt((()=>fetch(n,r)));if(o.ok){const e=await o.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ct(e.authToken)}}throw await bt("Create Installation",o)}(e,t))}catch(n){throw vt(n)&&409===n.customData.serverCode?await Yt(e):await Lt(e,{fid:t.fid,registrationStatus:0}),n}}(e,n)}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Ut(e)}:{installationEntry:t}}(e,i);return t=s.registrationPromise,s.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Ut(e){let t=await qt(e);for(;1===t.registrationStatus;)await It(100),t=await qt(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await jt(e);return n||t}return t}function qt(e){return Wt(e,(e=>{if(!e)throw yt.create("installation-not-found");return Ht(e)}))}function Ht(e){return 1===(t=e).registrationStatus&&t.registrationTime+pt<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function $t({appConfig:e,platformLoggerProvider:t},n){const i=function(e,{fid:t}){return`${wt(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),s=St(e,n),r=t.getImmediate({optional:!0});r&&s.append("x-firebase-client",r.getPlatformInfoString());const o={installation:{sdkVersion:_t}},a={method:"POST",headers:s,body:JSON.stringify(o)},l=await Tt((()=>fetch(i,a)));if(l.ok){return Ct(await l.json())}throw await bt("Generate Auth Token",l)}async function Vt(e,t=!1){let n;const i=await Wt(e.appConfig,(i=>{if(!Gt(i))throw yt.create("not-registered");const s=i.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+gt}(e)}(s))return i;if(1===s.requestStatus)return n=async function(e,t){let n=await zt(e.appConfig);for(;1===n.authToken.requestStatus;)await It(100),n=await zt(e.appConfig);const i=n.authToken;return 0===i.requestStatus?Vt(e,t):i}(e,t),i;{if(!navigator.onLine)throw yt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(i);return n=async function(e,t){try{const n=await $t(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await Lt(e.appConfig,i),n}catch(n){if(!vt(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Lt(e.appConfig,n)}else await Yt(e.appConfig);throw n}}(e,t),t}}));return n?await n:i.authToken}function zt(e){return Wt(e,(e=>{if(!Gt(e))throw yt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+pt<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function Gt(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Bt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await jt(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n.appConfig);return(await Vt(n,t)).token}function Kt(e){return yt.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Qt="installations",Zt=e=>{const t=ot(e.getProvider("app").getImmediate(),Qt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:i}=await jt(t.appConfig);return i?i.catch(console.error):Vt(t).catch(console.error),n.fid}(t),getToken:e=>Bt(t,e)}};rt(new We(Qt,(e=>{const t=e.getProvider("app").getImmediate();return{app:t,appConfig:function(e){if(!e||!e.options)throw Kt("App Configuration");if(!e.name)throw Kt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Kt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:ot(t,"platform-logger"),_delete:()=>Promise.resolve()}}),"PUBLIC")),rt(new We("installations-internal",Zt,"PRIVATE")),ht("@firebase/installations",ft);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Jt="analytics",Xt="https://www.googletagmanager.com/gtag/js",en=new Qe("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function tn(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function nn(e,t,n,i){return async function(s,r,o){try{"event"===s?await async function(e,t,n,i,s){try{let r=[];if(s&&s.send_to){let e=s.send_to;Array.isArray(e)||(e=[e]);const i=await tn(n);for(const n of e){const e=i.find((e=>e.measurementId===n)),s=e&&t[e.appId];if(!s){r=[];break}r.push(s)}}0===r.length&&(r=Object.values(t)),await Promise.all(r),e("event",i,s||{})}catch(e){en.error(e)}}(e,t,n,r,o):"config"===s?await async function(e,t,n,i,s,r){const o=i[s];try{if(o)await t[o];else{const e=(await tn(n)).find((e=>e.measurementId===s));e&&await t[e.appId]}}catch(e){en.error(e)}e("config",s,r)}(e,t,n,i,r,o):e("set",r)}catch(e){en.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const sn=new be("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const rn=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function on(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function an(e,t=rn,n){const{appId:i,apiKey:s,measurementId:r}=e.options;if(!i)throw sn.create("no-app-id");if(!s){if(r)return{measurementId:r,appId:i};throw sn.create("no-api-key")}const o=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new cn;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),ln({appId:i,apiKey:s,measurementId:r},o,a,t)}async function ln(e,{throttleEndTimeMillis:t,backoffCount:n},i,s=rn){const{appId:r,measurementId:o}=e;try{await function(e,t){return new Promise(((n,i)=>{const s=Math.max(t-Date.now(),0),r=setTimeout(n,s);e.addEventListener((()=>{clearTimeout(r),i(sn.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(i,t)}catch(e){if(o)return en.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:r,measurementId:o};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:i}=e,s={method:"GET",headers:on(i)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(r,s);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw sn.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}(e);return s.deleteThrottleMetadata(r),t}catch(t){if(!function(e){if(!(e instanceof Ce&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(s.deleteThrottleMetadata(r),o)return en.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:r,measurementId:o};throw t}const a=503===Number(t.customData.httpStatus)?Le(n,s.intervalMillis,30):Le(n,s.intervalMillis),l={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return s.setThrottleMetadata(r,l),en.debug(`Calling attemptFetch again in ${a} millis`),ln(e,l,i,s)}}class cn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function hn(){if(!("indexedDB"in self)||null==indexedDB)return en.warn(sn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise((function(e,t){try{var n=!0,i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=function(){s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=function(){n=!1},s.onerror=function(){var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return en.warn(sn.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function un(e,t,n,i,s,r,o){var a;const l=an(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&en.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>en.error(e))),t.push(l);const c=hn().then((e=>e?i.getId():void 0)),[h,u]=await Promise.all([l,c]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Xt))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Xt}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(r,h.measurementId),s("js",new Date);const d=null!==(a=null==o?void 0:o.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=u&&(d.firebase_id=u),s("config",h.measurementId,d),h.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class dn{constructor(e){this.app=e}_delete(){return delete fn[this.app.options.appId],Promise.resolve()}}let fn={},pn=[];const _n={};let mn,gn,yn="dataLayer",vn=!1;function wn(){const e=[];var t;if("object"==typeof(t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)&&void 0!==t.id&&e.push("This is a browser extension environment."),navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=sn.create("invalid-analytics-context",{errorInfo:t});en.warn(n.message)}}function Cn(e,t,n){wn();const i=e.options.appId;if(!i)throw sn.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw sn.create("no-api-key");en.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=fn[i])throw sn.create("already-exists",{id:i});if(!vn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(yn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,i,s){let r=function(...e){window[i].push(arguments)};return window[s]&&"function"==typeof window[s]&&(r=window[s]),window[s]=nn(r,e,t,n),{gtagCore:r,wrappedGtag:window[s]}}(fn,pn,_n,yn,"gtag");gn=e,mn=t,vn=!0}fn[i]=un(e,pn,_n,t,mn,yn,n);return new dn(e)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function bn(e,t,n,i){e=Ye(e),async function(e,t,n,i,s){if(s&&s.global)e("event",n,i);else{const s=await t;e("event",n,Object.assign(Object.assign({},i),{send_to:s}))}}(gn,fn[e.app.options.appId],t,n,i).catch((e=>en.error(e)))}rt(new We(Jt,((e,{options:t})=>Cn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),rt(new We("analytics-internal",(function(e){try{const t=e.getProvider(Jt).getImmediate();return{logEvent:(e,n,i)=>bn(t,e,n,i)}}catch(e){throw sn.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),ht("@firebase/analytics","0.7.0");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let kn="";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Sn{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ie(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:Te(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Tn{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ee(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const In=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new Sn(t)}}catch(e){}return new Tn},Dn=In("localStorage"),En=In("sessionStorage"),xn=new Qe("@firebase/database"),Nn=function(){let e=1;return function(){return e++}}(),Pn=function(e){const t=function(e){for(var t=[],n=0,i=0;i<e.length;i++){var s=e.charCodeAt(i);if(s>=55296&&s<=56319){var r=s-55296;i++,ue(i<e.length,"Surrogate pair missing trail surrogate."),s=65536+(r<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t}(e),n=new Re;n.update(t);const i=n.digest();return pe.encodeByteArray(i)},Mn=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=Mn.apply(null,i):t+="object"==typeof i?Ie(i):i,t+=" "}return t};let On=null,Rn=!0;const An=function(...e){var t,n;if(!0===Rn&&(Rn=!1,null===On&&!0===En.get("logging_enabled")&&(t=!0,ue(!n||!0===t||!1===t,"Can't turn on custom loggers persistently."),!0===t?(xn.logLevel=He.VERBOSE,On=xn.log.bind(xn),n&&En.set("logging_enabled",!0)):"function"==typeof t?On=t:(On=null,En.remove("logging_enabled")))),On){const t=Mn.apply(null,e);On(t)}},Fn=function(e){return function(...t){An(e,...t)}},Ln=function(...e){const t="FIREBASE INTERNAL ERROR: "+Mn(...e);xn.error(t)},Yn=function(...e){const t=`FIREBASE FATAL ERROR: ${Mn(...e)}`;throw xn.error(t),new Error(t)},Wn=function(...e){const t="FIREBASE WARNING: "+Mn(...e);xn.warn(t)},jn=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},Un="[MIN_NAME]",qn="[MAX_NAME]",Hn=function(e,t){if(e===t)return 0;if(e===Un||t===qn)return-1;if(t===Un||e===qn)return 1;{const n=Zn(e),i=Zn(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},$n=function(e,t){return e===t?0:e<t?-1:1},Vn=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+Ie(t))},zn=function(e){if("object"!=typeof e||null===e)return Ie(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=Ie(t[i]),n+=":",n+=zn(e[t[i]]);return n+="}",n},Gn=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function Bn(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Kn=function(e){ue(!jn(e),"Invalid JSON number");const t=1023;let n,i,s,r,o;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const a=[];for(o=52;o;o-=1)a.push(s%2?1:0),s=Math.floor(s/2);for(o=11;o;o-=1)a.push(i%2?1:0),i=Math.floor(i/2);a.push(n?1:0),a.reverse();const l=a.join("");let c="";for(o=0;o<64;o+=8){let e=parseInt(l.substr(o,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()},Qn=new RegExp("^-?(0*)\\d{1,10}$"),Zn=function(e){if(Qn.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},Jn=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw Wn("Exception was thrown by user callback.",t),e}),Math.floor(0))}},Xn=function(e,t){const n=setTimeout(e,t);return"object"==typeof n&&n.unref&&n.unref(),n};
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ei{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){Wn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ti{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(An("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Wn(e)}}class ni{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ni.OWNER="owner";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ii=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,si="websocket",ri="long_polling";
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class oi{constructor(e,t,n,i,s=!1,r="",o=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Dn.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Dn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function ai(e,t,n){let i;if(ue("string"==typeof t,"typeof type must == string"),ue("object"==typeof n,"typeof params must == object"),t===si)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==ri)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return Bn(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class li{constructor(){this.counters_={}}incrementCounter(e,t=1){Ee(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return me(this.counters_)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ci={},hi={};function ui(e){const t=e.toString();return ci[t]||(ci[t]=new li),ci[t]}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class di{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&Jn((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const fi="start";class pi{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Fn(e),this.stats_=ui(t),this.urlFn=e=>(this.appCheckToken&&(e.ac=this.appCheckToken),ai(t,ri,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new di(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if("complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new _i(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===fi)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={start:"t"};e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v="5",this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&ii.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){pi.forceAllow_=!0}static forceDisallow(){pi.forceDisallow_=!0}static isAvailable(){return!!pi.forceAllow_||!(pi.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI)}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(i=fe(t),pe.encodeByteArray(i,!0));var i;const s=Gn(n,1840);for(let e=0;e<s.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Ie(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class _i{constructor(e,t,n,i){this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Nn(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=_i.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,"javascript:".length)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){An("frame writing exception"),e.stack&&An(e.stack),An(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||An("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{An("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let mi=null;"undefined"!=typeof MozWebSocket?mi=MozWebSocket:"undefined"!=typeof WebSocket&&(mi=WebSocket);class gi{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Fn(this.connId),this.stats_=ui(t),this.connURL=gi.connectionURL_(t,r,o,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i){const s={v:"5"};return"undefined"!=typeof location&&location.hostname&&ii.test(location.hostname)&&(s.r="f"),t&&(s.s=t),n&&(s.ls=n),i&&(s.ac=i),ai(e,si,s)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Dn.set("previous_websocket_failure",!0);try{if(we());else{const e={headers:{"X-Firebase-GMPID":this.applicationId||"","X-Firebase-AppCheck":this.appCheckToken||""}};this.mySock=new mi(this.connURL,[],e)}}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){gi.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==mi&&!gi.forceDisallow_}static previouslyFailed(){return Dn.isInMemoryStorage||!0===Dn.get("previous_websocket_failure")}markConnectionHealthy(){Dn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=Te(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(ue(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=Ie(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Gn(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}gi.responsesRequiredToBeHealthy=2,gi.healthyTimeout=3e4;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class yi{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[pi,gi]}initTransports_(e){const t=gi&&gi.isAvailable();let n=t&&!gi.previouslyFailed();if(e.webSocketOnly&&(t||Wn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[gi];else{const e=this.transports_=[];for(const t of yi.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t)}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class vi{constructor(e,t,n,i,s,r,o,a,l,c){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Fn("c:"+this.id+":"),this.transportManager_=new yi(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xn((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Vn("t",e),n=Vn("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Vn("t",e),n=Vn("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Vn("t",e);if("d"in e){const n=e.d;if("h"===t)this.onHandshake_(n);else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?Ln("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ln("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),"5"!==n&&Wn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Xn((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xn((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Dn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wi{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ci{constructor(e){this.allowedEvents_=e,this.listeners_={},ue(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){ue(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bi extends Ci{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||ve()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new bi}getInitialEvent(e){return ue("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ki{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function Si(){return new ki("")}function Ti(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function Ii(e){return e.pieces_.length-e.pieceNum_}function Di(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ki(e.pieces_,t)}function Ei(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function xi(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ni(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ki(t,0)}function Pi(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ki)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ki(n,0)}function Mi(e){return e.pieceNum_>=e.pieces_.length}function Oi(e,t){const n=Ti(e),i=Ti(t);if(null===n)return t;if(n===i)return Oi(Di(e),Di(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function Ri(e,t){if(Ii(e)!==Ii(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ai(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(Ii(e)>Ii(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Fi{constructor(e,t){this.errorPrefix_=t,this.parts_=xi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=Fe(this.parts_[e]);Li(this)}}function Li(e){if(e.byteLength_>768)throw new Error(e.errorPrefix_+"has a key path longer than 768 bytes ("+e.byteLength_+").");if(e.parts_.length>32)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+Yi(e))}function Yi(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Wi extends Ci{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Wi}getInitialEvent(e){return ue("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ji=1e3;class Ui extends wi{constructor(e,t,n,i,s,r,o,a){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=o,this.authOverride_=a,this.id=Ui.nextPersistentConnectionId_++,this.log_=Fn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ji,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!we())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Wi.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&bi.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_(Ie(s)),ue(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new ye,n={p:e._path.toString(),q:e._queryObject},i={action:"g",request:n,onComplete:e=>{const i=e.d;"ok"===e.s?(this.onDataUpdate_(n.p,i,!1,null),t.resolve(i)):t.reject(i)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_||setTimeout((()=>{const e=this.outstandingGets_[s];void 0!==e&&i===e&&(delete this.outstandingGets_[s],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),this.log_("get "+s+" timed out on connection"),t.reject(new Error("Client is offline.")))}),3e3),this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),ue(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const o={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,o),this.connected_&&this.sendListen_(o)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Ui.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&Ee(e,"w")){const n=xe(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();Wn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){var t;(e&&40===e.length||"object"==typeof(t=De(e).claims)&&!0===t.admin)&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=function(e){var t=De(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")}(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),ue(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ie(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):Ln("Unrecognized action received from server: "+Ie(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){ue(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=ji),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ui.nextConnectionId_++,s=this.lastSessionId;let r=!1,o=null;const a=function(){o?o.close():(r=!0,n())},l=function(e){ue(o,"sendRequest call when we're not connected not allowed."),o.sendRequest(e)};this.realtime_={close:a,sendRequest:l};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[a,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?An("getToken() completed but was canceled"):(An("getToken() completed. Creating connection."),this.authToken_=a&&a.accessToken,this.appCheckToken_=l&&l.token,o=new vi(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{Wn(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&Wn(e),a())}}}interrupt(e){An("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){An("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ne(this.interruptReasons_)&&(this.reconnectDelay_=ji,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>zn(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ki(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){An("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){An("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};e["sdk.js."+kn.replace(/\./g,"-")]=1,ve()?e["framework.cordova"]=1:"object"==typeof navigator&&"ReactNative"===navigator.product&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=bi.getInstance().currentlyOnline();return Ne(this.interruptReasons_)&&e}}Ui.nextPersistentConnectionId_=0,Ui.nextConnectionId_=0;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class qi{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new qi(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Hi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new qi(Un,e),i=new qi(Un,t);return 0!==this.compare(n,i)}minPost(){return qi.MIN}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let $i;class Vi extends Hi{static get __EMPTY_NODE(){return $i}static set __EMPTY_NODE(e){$i=e}compare(e,t){return Hn(e.name,t.name)}isDefinedOn(e){throw de("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return qi.MIN}maxPost(){return new qi(qn,$i)}makePost(e,t){return ue("string"==typeof e,"KeyIndex indexValue must always be a string."),new qi(e,$i)}toString(){return".key"}}const zi=new Vi;
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Gi{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(e=e,r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Bi{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:Bi.RED,this.left=null!=i?i:Ki.EMPTY_NODE,this.right=null!=s?s:Ki.EMPTY_NODE}copy(e,t,n,i,s){return new Bi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ki.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return Ki.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Bi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Bi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Bi.RED=!0,Bi.BLACK=!1;class Ki{constructor(e,t=Ki.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ki(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Bi.BLACK,null,null))}remove(e){return new Ki(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Bi.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Gi(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Gi(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Gi(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Gi(this.root_,null,this.comparator_,!0,e)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Qi(e,t){return Hn(e.name,t.name)}function Zi(e,t){return Hn(e,t)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Ji;Ki.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new Bi(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Xi=function(e){return"number"==typeof e?"number:"+Kn(e):"string:"+e},es=function(e){if(e.isLeafNode()){const t=e.val();ue("string"==typeof t||"number"==typeof t||"object"==typeof t&&Ee(t,".sv"),"Priority must be a string or number.")}else ue(e===Ji||e.isEmpty(),"priority of unexpected type.");ue(e===Ji||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
let ts,ns,is;class ss{constructor(e,t=ss.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,ue(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),es(this.priorityNode_)}static set __childrenNodeConstructor(e){ts=e}static get __childrenNodeConstructor(){return ts}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ss(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:ss.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Mi(e)?this:".priority"===Ti(e)?this.priorityNode_:ss.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:ss.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=Ti(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:(ue(".priority"!==n||1===Ii(e),".priority must be the last token in a path"),this.updateImmediateChild(n,ss.__childrenNodeConstructor.EMPTY_NODE.updateChild(Di(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?Kn(this.value_):this.value_,this.lazyHash_=Pn(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ss.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ss.__childrenNodeConstructor?-1:(ue(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=ss.VALUE_TYPE_ORDER.indexOf(t),s=ss.VALUE_TYPE_ORDER.indexOf(n);return ue(i>=0,"Unknown leaf type: "+t),ue(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}ss.VALUE_TYPE_ORDER=["object","boolean","number","string"];const rs=new class extends Hi{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?Hn(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return qi.MIN}maxPost(){return new qi(qn,new ss("[PRIORITY-POST]",is))}makePost(e,t){const n=ns(e);return new qi(t,new ss("[PRIORITY-POST]",n))}toString(){return".priority"}},os=Math.log(2);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class as{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/os,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ls=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new Bi(a,o.node,Bi.BLACK,null,null);{const l=parseInt(r/2,10)+t,c=s(t,l),h=s(l+1,i);return o=e[l],a=n?n(o):o,new Bi(a,o.node,Bi.BLACK,c,h)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const c=s(r+1,a),h=e[r],u=n?n(h):h;l(new Bi(u,h.node,i,null,c))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,Bi.BLACK):(a(i,Bi.BLACK),a(i,Bi.RED))}return r}(new as(e.length));return new Ki(i||t,r)};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let cs;const hs={};class us{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return ue(hs&&rs,"ChildrenNode.ts has not been loaded"),cs=cs||new us({".priority":hs},{".priority":rs}),cs}get(e){const t=xe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ki?t:null}hasIndex(e){return Ee(this.indexSet_,e.toString())}addIndex(e,t){ue(e!==zi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(qi.Wrap);let r,o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),n.push(o),o=s.getNext();r=i?ls(n,e.getCompare()):hs;const a=e.toString(),l=Object.assign({},this.indexSet_);l[a]=e;const c=Object.assign({},this.indexes_);return c[a]=r,new us(c,l)}addToIndexes(e,t){const n=Pe(this.indexes_,((n,i)=>{const s=xe(this.indexSet_,i);if(ue(s,"Missing index implementation for "+i),n===hs){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(qi.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),ls(n,s.getCompare())}return hs}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new qi(e.name,i))),s.insert(e,e.node)}}));return new us(n,this.indexSet_)}removeFromIndexes(e,t){const n=Pe(this.indexes_,(n=>{if(n===hs)return n;{const i=t.get(e.name);return i?n.remove(new qi(e.name,i)):n}}));return new us(n,this.indexSet_)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let ds;class fs{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&es(this.priorityNode_),this.children_.isEmpty()&&ue(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ds||(ds=new fs(new Ki(Zi),null,us.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ds}updatePriority(e){return this.children_.isEmpty()?this:new fs(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?ds:t}}getChild(e){const t=Ti(e);return null===t?this:this.getImmediateChild(t).getChild(Di(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if(ue(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new qi(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?ds:this.priorityNode_;return new fs(i,r,s)}}updateChild(e,t){const n=Ti(e);if(null===n)return t;{ue(".priority"!==Ti(e)||1===Ii(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Di(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(rs,((r,o)=>{t[r]=o.val(e),n++,s&&fs.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xi(this.getPriority().val())+":"),this.forEachChild(rs,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":Pn(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new qi(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new qi(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new qi(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,qi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,qi.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ps?-1:0}withIndex(e){if(e===zi||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new fs(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===zi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(rs),n=t.getIterator(rs);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===zi?null:this.indexMap_.get(e.toString())}}fs.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const ps=new class extends fs{constructor(){super(new Ki(Zi),fs.EMPTY_NODE,us.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return fs.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(qi,{MIN:{value:new qi(Un,fs.EMPTY_NODE)},MAX:{value:new qi(qn,ps)}}),Vi.__EMPTY_NODE=fs.EMPTY_NODE,ss.__childrenNodeConstructor=fs,Ji=ps,function(e){is=e}(ps);function _s(e,t=null){if(null===e)return fs.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),ue(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new ss(e,_s(t))}if(e instanceof Array){let n=fs.EMPTY_NODE;return Bn(e,((t,i)=>{if(Ee(e,t)&&"."!==t.substring(0,1)){const e=_s(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(_s(t))}{const n=[];let i=!1;if(Bn(e,((e,t)=>{if("."!==e.substring(0,1)){const s=_s(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new qi(e,s)))}})),0===n.length)return fs.EMPTY_NODE;const s=ls(n,Qi,(e=>e.name),Zi);if(i){const e=ls(n,rs.getCompare());return new fs(s,_s(t),new us({".priority":e},{".priority":rs}))}return new fs(s,_s(t),us.Default)}}!function(e){ns=e}(_s);
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class ms extends Hi{constructor(e){super(),this.indexPath_=e,ue(!Mi(e)&&".priority"!==Ti(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?Hn(e.name,t.name):s}makePost(e,t){const n=_s(e),i=fs.EMPTY_NODE.updateChild(this.indexPath_,n);return new qi(t,i)}maxPost(){const e=fs.EMPTY_NODE.updateChild(this.indexPath_,ps);return new qi(qn,e)}toString(){return xi(this.indexPath_,0).join("/")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const gs=new class extends Hi{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?Hn(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return qi.MIN}maxPost(){return qi.MAX}makePost(e,t){const n=_s(e);return new qi(t,n)}toString(){return".value"}};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ys(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function vs(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ws(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Cs{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){ue(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const o=e.getImmediateChild(t);return o.getChild(i).equals(n.getChild(i))&&o.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(vs(t,o)):ue(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):o.isEmpty()?r.trackChildChange(ys(t,n)):r.trackChildChange(ws(t,n,o))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(rs,((e,i)=>{t.hasChild(e)||n.trackChildChange(vs(e,i))})),t.isLeafNode()||t.forEachChild(rs,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(ws(t,i,s))}else n.trackChildChange(ys(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?fs.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class bs{constructor(e){this.indexedFilter_=new Cs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=bs.getStartPost_(e),this.endPost_=bs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,t,n,i,s,r){return this.matches(new qi(t,n))||(n=fs.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=fs.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(fs.EMPTY_NODE);const s=this;return t.forEachChild(rs,((e,t)=>{s.matches(new qi(e,t))||(i=i.updateImmediateChild(e,fs.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class ks{constructor(e){this.rangedFilter_=new bs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new qi(t,n))||(n=fs.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=fs.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=fs.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();let s;if(s=this.reverse_?this.index_.compare(this.rangedFilter_.getStartPost(),t)<=0:this.index_.compare(t,this.rangedFilter_.getEndPost())<=0,!s)break;i=i.updateImmediateChild(t.name,t.node),n++}}else{let e,n,s,r;if(i=t.withIndex(this.index_),i=i.updatePriority(fs.EMPTY_NODE),this.reverse_){r=i.getReverseIterator(this.index_),e=this.rangedFilter_.getEndPost(),n=this.rangedFilter_.getStartPost();const t=this.index_.getCompare();s=(e,n)=>t(n,e)}else r=i.getIterator(this.index_),e=this.rangedFilter_.getStartPost(),n=this.rangedFilter_.getEndPost(),s=this.index_.getCompare();let o=0,a=!1;for(;r.hasNext();){const t=r.getNext();!a&&s(e,t)<=0&&(a=!0);a&&o<this.limit_&&s(t,n)<=0?o++:i=i.updateImmediateChild(t.name,fs.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const o=e;ue(o.numChildren()===this.limit_,"");const a=new qi(t,n),l=this.reverse_?o.getFirstChild(this.index_):o.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(o.hasChild(t)){const e=o.getImmediateChild(t);let h=i.getChildAfterChild(this.index_,l,this.reverse_);for(;null!=h&&(h.name===t||o.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const u=null==h?1:r(h,a);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(ws(t,n,e)),o.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(vs(t,e));const n=o.updateImmediateChild(t,fs.EMPTY_NODE);return null!=h&&this.rangedFilter_.matches(h)?(null!=s&&s.trackChildChange(ys(h.name,h.node)),n.updateImmediateChild(h.name,h.node)):n}}return n.isEmpty()?e:c&&r(l,a)>=0?(null!=s&&(s.trackChildChange(vs(l.name,l.node)),s.trackChildChange(ys(t,n))),o.updateImmediateChild(t,n).updateImmediateChild(l.name,fs.EMPTY_NODE)):e}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ss{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=rs}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return ue(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return ue(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Un}hasEnd(){return this.endSet_}getIndexEndValue(){return ue(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return ue(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:qn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return ue(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===rs}copy(){const e=new Ss;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Ts(e){const t={};if(e.isDefault())return t;let n;return e.index_===rs?n="$priority":e.index_===gs?n="$value":e.index_===zi?n="$key":(ue(e.index_ instanceof ms,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=Ie(n),e.startSet_&&(t.startAt=Ie(e.indexStartValue_),e.startNameSet_&&(t.startAt+=","+Ie(e.indexStartName_))),e.endSet_&&(t.endAt=Ie(e.indexEndValue_),e.endNameSet_&&(t.endAt+=","+Ie(e.indexEndName_))),e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function Is(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_)),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_)),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==rs&&(t.i=e.index_.toString()),t}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ds extends wi{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=Fn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:(ue(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=Ds.getListenId_(e,n),o={};this.listens_[r]=o;const a=Ts(e._queryParams);this.restRequest_(s+".json",a,((e,t)=>{let a=t;if(404===e&&(a=null,e=null),null===e&&this.onDataUpdate_(s,a,!1,n),xe(this.listens_,r)===o){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=Ds.getListenId_(e,t);delete this.listens_[n]}get(e){const t=Ts(e._queryParams),n=e._path.toString(),i=new ye;return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+function(e){for(var t=[],n=function(e,n){Array.isArray(n)?n.forEach((function(n){t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))})):t.push(encodeURIComponent(e)+"="+encodeURIComponent(n))},i=0,s=Object.entries(e);i<s.length;i++){var r=s[i];n(r[0],r[1])}return t.length?"&"+t.join("&"):""}(t);this.log_("Sending REST request for "+r);const o=new XMLHttpRequest;o.onreadystatechange=()=>{if(n&&4===o.readyState){this.log_("REST Response for "+r+" received. status:",o.status,"response:",o.responseText);let e=null;if(o.status>=200&&o.status<300){try{e=Te(o.responseText)}catch(e){Wn("Failed to parse JSON response for "+r+": "+o.responseText)}n(null,e)}else 401!==o.status&&404!==o.status&&Wn("Got unsuccessful REST response for "+r+" Status: "+o.status),n(o.status);n=null}},o.open("GET",r,!0),o.send()}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Es{constructor(){this.rootNode_=fs.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function xs(){return{value:null,children:new Map}}function Ns(e,t,n){if(Mi(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=Ti(t);e.children.has(i)||e.children.set(i,xs());Ns(e.children.get(i),t=Di(t),n)}}function Ps(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,((e,i)=>{Ps(i,new ki(t.toString()+"/"+e),n)}))}class Ms{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&Bn(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Os{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ms(e);const n=1e4+2e4*Math.random();Xn(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Bn(e,((e,i)=>{i>0&&Ee(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),Xn(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var Rs;function As(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */!function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"}(Rs||(Rs={}));class Fs{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Rs.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Mi(this.path)){if(null!=this.affectedTree.value)return ue(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ki(e));return new Fs(Si(),t,this.revert)}}return ue(Ti(this.path)===e,"operationForChild called for unrelated child."),new Fs(Di(this.path),this.affectedTree,this.revert)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ls{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Rs.OVERWRITE}operationForChild(e){return Mi(this.path)?new Ls(this.source,Si(),this.snap.getImmediateChild(e)):new Ls(this.source,Di(this.path),this.snap)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ys{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Rs.MERGE}operationForChild(e){if(Mi(this.path)){const t=this.children.subtree(new ki(e));return t.isEmpty()?null:t.value?new Ls(this.source,Si(),t.value):new Ys(this.source,Si(),t)}return ue(Ti(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ys(this.source,Di(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ws{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Mi(e))return this.isFullyInitialized()&&!this.filtered_;const t=Ti(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class js{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Us(e,t,n,i,s,r){const o=i.filter((e=>e.type===n));o.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw de("Should only compare child_ events.");const i=new qi(t.childName,t.snapshotNode),s=new qi(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,n))),o.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function qs(e,t){return{eventCache:e,serverCache:t}}function Hs(e,t,n,i){return qs(new Ws(t,n,i),e.serverCache)}function $s(e,t,n,i){return qs(e.eventCache,new Ws(t,n,i))}function Vs(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function zs(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */let Gs;class Bs{constructor(e,t=(()=>(Gs||(Gs=new Ki($n)),Gs))()){this.value=e,this.children=t}static fromObject(e){let t=new Bs(null);return Bn(e,((e,n)=>{t=t.set(new ki(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:Si(),value:this.value};if(Mi(e))return null;{const n=Ti(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Di(e),t);if(null!=s){return{path:Pi(new ki(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Mi(e))return this;{const t=Ti(e),n=this.children.get(t);return null!==n?n.subtree(Di(e)):new Bs(null)}}set(e,t){if(Mi(e))return new Bs(t,this.children);{const n=Ti(e),i=(this.children.get(n)||new Bs(null)).set(Di(e),t),s=this.children.insert(n,i);return new Bs(this.value,s)}}remove(e){if(Mi(e))return this.children.isEmpty()?new Bs(null):new Bs(null,this.children);{const t=Ti(e),n=this.children.get(t);if(n){const i=n.remove(Di(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new Bs(null):new Bs(this.value,s)}return this}}get(e){if(Mi(e))return this.value;{const t=Ti(e),n=this.children.get(t);return n?n.get(Di(e)):null}}setTree(e,t){if(Mi(e))return t;{const n=Ti(e),i=(this.children.get(n)||new Bs(null)).setTree(Di(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new Bs(this.value,s)}}fold(e){return this.fold_(Si(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Pi(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Si(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Mi(e))return null;{const i=Ti(e),s=this.children.get(i);return s?s.findOnPath_(Di(e),Pi(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Si(),t)}foreachOnPath_(e,t,n){if(Mi(e))return this;{this.value&&n(t,this.value);const i=Ti(e),s=this.children.get(i);return s?s.foreachOnPath_(Di(e),Pi(t,i),n):new Bs(null)}}foreach(e){this.foreach_(Si(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Pi(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Ks{constructor(e){this.writeTree_=e}static empty(){return new Ks(new Bs(null))}}function Qs(e,t,n){if(Mi(t))return new Ks(new Bs(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Oi(s,t);return r=r.updateChild(o,n),new Ks(e.writeTree_.set(s,r))}{const i=new Bs(n),s=e.writeTree_.setTree(t,i);return new Ks(s)}}}function Zs(e,t,n){let i=e;return Bn(n,((e,n)=>{i=Qs(i,Pi(t,e),n)})),i}function Js(e,t){if(Mi(t))return Ks.empty();{const n=e.writeTree_.setTree(t,new Bs(null));return new Ks(n)}}function Xs(e,t){return null!=er(e,t)}function er(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Oi(n.path,t)):null}function tr(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(rs,((e,n)=>{t.push(new qi(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new qi(e,n.value))})),t}function nr(e,t){if(Mi(t))return e;{const n=er(e,t);return new Ks(null!=n?new Bs(n):e.writeTree_.subtree(t))}}function ir(e){return e.writeTree_.isEmpty()}function sr(e,t){return rr(Si(),e.writeTree_,t)}function rr(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?(ue(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=rr(Pi(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Pi(e,".priority"),i)),n}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function or(e,t){return vr(t,e)}function ar(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));ue(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,o=e.allWrites.length-1;for(;s&&o>=0;){const t=e.allWrites[o];t.visible&&(o>=n&&lr(t,i.path)?s=!1:Ai(i.path,t.path)&&(r=!0)),o--}if(s){if(r)return function(e){e.visibleWrites=hr(e.allWrites,cr,Si()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Js(e.visibleWrites,i.path);else{Bn(i.children,(t=>{e.visibleWrites=Js(e.visibleWrites,Pi(i.path,t))}))}return!0}return!1}function lr(e,t){if(e.snap)return Ai(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ai(Pi(e.path,n),t))return!0;return!1}function cr(e){return e.visible}function hr(e,t,n){let i=Ks.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Ai(n,e)?(t=Oi(n,e),i=Qs(i,t,r.snap)):Ai(e,n)&&(t=Oi(e,n),i=Qs(i,Si(),r.snap.getChild(t)));else{if(!r.children)throw de("WriteRecord should have .snap or .children");if(Ai(n,e))t=Oi(n,e),i=Zs(i,t,r.children);else if(Ai(e,n))if(t=Oi(e,n),Mi(t))i=Zs(i,Si(),r.children);else{const e=xe(r.children,Ti(t));if(e){const n=e.getChild(Di(t));i=Qs(i,Si(),n)}}}}}return i}function ur(e,t,n,i,s){if(i||s){const r=nr(e.visibleWrites,t);if(!s&&ir(r))return n;if(s||null!=n||Xs(r,Si())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Ai(e.path,t)||Ai(t,e.path))};return sr(hr(e.allWrites,r,t),n||fs.EMPTY_NODE)}return null}{const i=er(e.visibleWrites,t);if(null!=i)return i;{const i=nr(e.visibleWrites,t);if(ir(i))return n;if(null!=n||Xs(i,Si())){return sr(i,n||fs.EMPTY_NODE)}return null}}}function dr(e,t,n,i){return ur(e.writeTree,e.treePath,t,n,i)}function fr(e,t){return function(e,t,n){let i=fs.EMPTY_NODE;const s=er(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(rs,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=nr(e.visibleWrites,t);return n.forEachChild(rs,((e,t)=>{const n=sr(nr(s,new ki(e)),t);i=i.updateImmediateChild(e,n)})),tr(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return tr(nr(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function pr(e,t,n,i){return function(e,t,n,i,s){ue(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Pi(t,n);if(Xs(e.visibleWrites,r))return null;{const t=nr(e.visibleWrites,r);return ir(t)?s.getChild(n):sr(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function _r(e,t){return function(e,t){return er(e.visibleWrites,t)}(e.writeTree,Pi(e.treePath,t))}function mr(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=nr(e.visibleWrites,t),c=er(l,Si());if(null!=c)a=c;else{if(null==n)return[];a=sr(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function gr(e,t,n){return function(e,t,n,i){const s=Pi(t,n),r=er(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return sr(nr(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function yr(e,t){return vr(Pi(e.treePath,t),e.writeTree)}function vr(e,t){return{treePath:e,writeTree:t}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class wr{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;ue("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),ue(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,ws(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,vs(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,ys(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw de("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,ws(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Cr=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class br{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ws(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gr(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:zs(this.viewCache_),s=mr(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function kr(e,t,n,i,s){const r=new wr;let o,a;if(n.type===Rs.OVERWRITE){const l=n;l.source.fromUser?o=Ir(e,t,l.path,l.snap,i,s,r):(ue(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered()&&!Mi(l.path),o=Tr(e,t,l.path,l.snap,i,s,a,r))}else if(n.type===Rs.MERGE){const l=n;l.source.fromUser?o=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const c=Pi(n,i);Dr(t,Ti(c))&&(a=Ir(e,a,c,l,s,r,o))})),i.foreach(((i,l)=>{const c=Pi(n,i);Dr(t,Ti(c))||(a=Ir(e,a,c,l,s,r,o))})),a}(e,t,l.path,l.children,i,s,r):(ue(l.source.fromServer,"Unknown source."),a=l.source.tagged||t.serverCache.isFiltered(),o=xr(e,t,l.path,l.children,i,s,a,r))}else if(n.type===Rs.ACK_USER_WRITE){const a=n;o=a.revert?function(e,t,n,i,s,r){let o;if(null!=_r(i,n))return t;{const a=new br(i,t,s),l=t.eventCache.getNode();let c;if(Mi(n)||".priority"===Ti(n)){let n;if(t.serverCache.isFullyInitialized())n=dr(i,zs(t));else{const e=t.serverCache.getNode();ue(e instanceof fs,"serverChildren would be complete if leaf node"),n=fr(i,e)}n=n,c=e.filter.updateFullNode(l,n,r)}else{const s=Ti(n);let h=gr(i,s,t.serverCache);null==h&&t.serverCache.isCompleteForChild(s)&&(h=l.getImmediateChild(s)),c=null!=h?e.filter.updateChild(l,s,h,Di(n),a,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(l,s,fs.EMPTY_NODE,Di(n),a,r):l,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=dr(i,zs(t)),o.isLeafNode()&&(c=e.filter.updateFullNode(c,o,r)))}return o=t.serverCache.isFullyInitialized()||null!=_r(i,Si()),Hs(t,c,o,e.filter.filtersNodes())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,t,a.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=_r(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Mi(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Tr(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Mi(n)){let i=new Bs(null);return l.getNode().forEachChild(zi,((e,t)=>{i=i.set(new ki(e),t)})),xr(e,t,n,i,s,r,a,o)}return t}{let c=new Bs(null);return i.foreach(((e,t)=>{const i=Pi(n,e);l.isCompleteForPath(i)&&(c=c.set(e,l.getNode().getChild(i)))})),xr(e,t,n,c,s,r,a,o)}}(e,t,a.path,a.affectedTree,i,s,r)}else{if(n.type!==Rs.LISTEN_COMPLETE)throw de("Unknown operation type: "+n.type);o=function(e,t,n,i,s){const r=t.serverCache,o=$s(t,r.getNode(),r.isFullyInitialized()||Mi(n),r.isFiltered());return Sr(e,o,n,i,Cr,s)}(e,t,n.path,i,r)}const l=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Vs(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push({type:"value",snapshotNode:Vs(t)})}}(t,o,l),{viewCache:o,changes:l}}function Sr(e,t,n,i,s,r){const o=t.eventCache;if(null!=_r(i,n))return t;{let a,l;if(Mi(n))if(ue(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=zs(t),s=fr(i,n instanceof fs?n:fs.EMPTY_NODE);a=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=dr(i,zs(t));a=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=Ti(n);if(".priority"===c){ue(1===Ii(n),"Can't have a priority with additional path components");const s=o.getNode();l=t.serverCache.getNode();const r=pr(i,n,s,l);a=null!=r?e.filter.updatePriority(s,r):o.getNode()}else{const h=Di(n);let u;if(o.isCompleteForChild(c)){l=t.serverCache.getNode();const e=pr(i,n,o.getNode(),l);u=null!=e?o.getNode().getImmediateChild(c).updateChild(h,e):o.getNode().getImmediateChild(c)}else u=gr(i,c,t.serverCache);a=null!=u?e.filter.updateChild(o.getNode(),c,u,h,s,r):o.getNode()}}return Hs(t,a,o.isFullyInitialized()||Mi(n),e.filter.filtersNodes())}}function Tr(e,t,n,i,s,r,o,a){const l=t.serverCache;let c;const h=o?e.filter:e.filter.getIndexedFilter();if(Mi(n))c=h.updateFullNode(l.getNode(),i,null);else if(h.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);c=h.updateFullNode(l.getNode(),e,null)}else{const e=Ti(n);if(!l.isCompleteForPath(n)&&Ii(n)>1)return t;const s=Di(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);c=".priority"===e?h.updatePriority(l.getNode(),r):h.updateChild(l.getNode(),e,r,s,Cr,null)}const u=$s(t,c,l.isFullyInitialized()||Mi(n),h.filtersNodes());return Sr(e,u,n,s,new br(s,u,r),a)}function Ir(e,t,n,i,s,r,o){const a=t.eventCache;let l,c;const h=new br(s,t,r);if(Mi(n))c=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Hs(t,c,!0,e.filter.filtersNodes());else{const s=Ti(n);if(".priority"===s)c=e.filter.updatePriority(t.eventCache.getNode(),i),l=Hs(t,c,a.isFullyInitialized(),a.isFiltered());else{const r=Di(n),c=a.getNode().getImmediateChild(s);let u;if(Mi(r))u=i;else{const e=h.getCompleteChild(s);u=null!=e?".priority"===Ei(r)&&e.getChild(Ni(r)).isEmpty()?e:e.updateChild(r,i):fs.EMPTY_NODE}if(c.equals(u))l=t;else{l=Hs(t,e.filter.updateChild(a.getNode(),s,u,r,h,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Dr(e,t){return e.eventCache.isCompleteForChild(t)}function Er(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function xr(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,c=t;l=Mi(n)?i:new Bs(null).setTree(n,i);const h=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(h.hasChild(n)){const l=Er(0,t.serverCache.getNode().getImmediateChild(n),i);c=Tr(e,c,new ki(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&void 0===i.value;if(!h.hasChild(n)&&!l){const l=Er(0,t.serverCache.getNode().getImmediateChild(n),i);c=Tr(e,c,new ki(n),l,s,r,o,a)}})),c}class Nr{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new Cs(n.getIndex()),s=(r=n).loadsAllData()?new Cs(r.getIndex()):r.hasLimit()?new ks(r):new bs(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(fs.EMPTY_NODE,o.getNode(),null),c=s.updateFullNode(fs.EMPTY_NODE,a.getNode(),null),h=new Ws(l,o.isFullyInitialized(),i.filtersNodes()),u=new Ws(c,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=qs(u,h),this.eventGenerator_=new js(this.query_)}get query(){return this.query_}}function Pr(e,t){const n=zs(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Mi(t)&&!n.getImmediateChild(Ti(t)).isEmpty())?n.getChild(t):null}function Mr(e,t,n,i){t.type===Rs.MERGE&&null!==t.source.queryId&&(ue(zs(e.viewCache_),"We should always have a full cache before handling merges"),ue(Vs(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=kr(e.processor_,s,t,n,i);var o,a;return o=e.processor_,a=r.viewCache,ue(a.eventCache.getNode().isIndexed(o.filter.getIndex()),"Event snap not indexed"),ue(a.serverCache.getNode().isIndexed(o.filter.getIndex()),"Server snap not indexed"),ue(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,function(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Us(e,s,"child_removed",t,i,n),Us(e,s,"child_added",t,i,n),Us(e,s,"child_moved",r,i,n),Us(e,s,"child_changed",t,i,n),Us(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,r.changes,r.viewCache.eventCache.getNode(),null)}let Or,Rr;class Ar{constructor(){this.views=new Map}}function Fr(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return ue(null!=r,"SyncTree gave us an op for an invalid query."),Mr(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(Mr(r,t,n,i));return s}}function Lr(e,t){let n=null;for(const i of e.views.values())n=n||Pr(i,t);return n}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Yr{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Bs(null),this.pendingWriteTree_={visibleWrites:Ks.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Wr(e,t,n,i,s){return function(e,t,n,i,s){ue(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Qs(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?$r(e,new Ls({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function jr(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(ar(e.pendingWriteTree_,t)){let t=new Bs(null);return null!=i.snap?t=t.set(Si(),!0):Bn(i.children,(e=>{t=t.set(new ki(e),!0)})),$r(e,new Fs(i.path,t,n))}return[]}function Ur(e,t,n){return $r(e,new Ls({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function qr(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Lr(n,Oi(e,t));if(i)return i}));return ur(i,t,s,n,!0)}function Hr(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Oi(e,n);i=i||Lr(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||Lr(s,Si()):(s=new Ar,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new Ws(i,!0,!1):null;return function(e){return Vs(e.viewCache_)}(function(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=dr(n,s?i:null),r=!1;e?r=!0:i instanceof fs?(e=fr(n,i),r=!1):(e=fs.EMPTY_NODE,r=!1);const o=qs(new Ws(e,r,!1),new Ws(i,s,!1));return new Nr(t,o)}return o}(s,t,or(e.pendingWriteTree_,t._path),r?o.getNode():fs.EMPTY_NODE,r))}function $r(e,t){return Vr(t,e.syncPointTree_,null,or(e.pendingWriteTree_,Si()))}function Vr(e,t,n,i){if(Mi(e.path))return zr(e,t,n,i);{const s=t.get(Si());null==n&&null!=s&&(n=Lr(s,Si()));let r=[];const o=Ti(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=yr(i,o);r=r.concat(Vr(a,l,e,t))}return s&&(r=r.concat(Fr(s,e,i,n))),r}}function zr(e,t,n,i){const s=t.get(Si());null==n&&null!=s&&(n=Lr(s,Si()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=yr(i,t),l=e.operationForChild(t);l&&(r=r.concat(zr(l,s,o,a)))})),s&&(r=r.concat(Fr(s,e,i,n))),r}function Gr(e,t){return e.tagToQueryMap.get(t)}function Br(e){const t=e.indexOf("$");return ue(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ki(e.substr(0,t))}}function Kr(e,t,n){const i=e.syncPointTree_.get(t);ue(i,"Missing sync point for query tag that we're tracking");return Fr(i,n,or(e.pendingWriteTree_,t),null)}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Qr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Qr(t)}node(){return this.node_}}class Zr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Pi(this.path_,e);return new Zr(this.syncTree_,t)}node(){return qr(this.syncTree_,this.path_)}}const Jr=function(e,t,n){return e&&"object"==typeof e?(ue(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?Xr(e[".sv"],t,n):"object"==typeof e[".sv"]?eo(e[".sv"],t):void ue(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},Xr=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:ue(!1,"Unexpected server value: "+e)}},eo=function(e,t,n){e.hasOwnProperty("increment")||ue(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&ue(!1,"Unexpected increment value: "+i);const s=t.node();if(ue(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},to=function(e,t,n){return no(e,new Qr(t),n)};function no(e,t,n){const i=e.getPriority().val(),s=Jr(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=Jr(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new ss(r,_s(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new ss(s))),i.forEachChild(rs,((e,i)=>{const s=no(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class io{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function so(e,t){let n=t instanceof ki?t:new ki(t),i=e,s=Ti(n);for(;null!==s;){const e=xe(i.node.children,s)||{children:{},childCount:0};i=new io(s,i,e),n=Di(n),s=Ti(n)}return i}function ro(e){return e.node.value}function oo(e,t){e.node.value=t,uo(e)}function ao(e){return e.node.childCount>0}function lo(e,t){Bn(e.node.children,((n,i)=>{t(new io(n,e,i))}))}function co(e,t,n,i){n&&!i&&t(e),lo(e,(e=>{co(e,t,!0,i)})),n&&i&&t(e)}function ho(e){return new ki(null===e.parent?e.name:ho(e.parent)+"/"+e.name)}function uo(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===ro(e)&&!ao(e)}(n),s=Ee(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,uo(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,uo(e))}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e.parent,e.name,e)}const fo=/[\[\].#$\/\u0000-\u001F\u007F]/,po=/[\[\].#$\u0000-\u001F\u007F]/,_o=10485760,mo=function(e){return"string"==typeof e&&0!==e.length&&!fo.test(e)},go=function(e){return"string"==typeof e&&0!==e.length&&!po.test(e)},yo=function(e,t,n){const i=n instanceof ki?new Fi(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+Yi(i));if("function"==typeof t)throw new Error(e+"contains a function "+Yi(i)+" with contents = "+t.toString());if(jn(t))throw new Error(e+"contains "+t.toString()+" "+Yi(i));if("string"==typeof t&&t.length>_o/3&&Fe(t)>_o)throw new Error(e+"contains a string greater than "+"10485760 utf8 bytes "+Yi(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(Bn(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!mo(t)))throw new Error(e+" contains an invalid key ("+t+") "+Yi(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');!function(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=Fe(t),Li(e)}(i,t),yo(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=Fe(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+Yi(i)+" in addition to actual children.")}},vo=function(e,t,n,i){if(!(i&&void 0===n||go(n)))throw new Error(Ae(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},wo=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!mo(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),go(e)}(n))throw new Error(Ae(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Co{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function bo(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||Ri(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function ko(e,t,n){bo(e,n),So(e,(e=>Ai(e,t)||Ai(t,e)))}function So(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(To(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function To(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();On&&An("event: "+n.toString()),Jn(i)}}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class Io{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Co,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=xs(),this.transactionQueueTree_=new io,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Do(e,t,n){if(e.stats_=ui(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new Ds(e.repoInfo_,((t,n,i,s)=>{No(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>Po(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ie(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Ui(e.repoInfo_,t,((t,n,i,s)=>{No(e,t,n,i,s)}),(t=>{Po(e,t)}),(t=>{!function(e,t){Bn(t,((t,n)=>{Mo(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return hi[n]||(hi[n]=t()),hi[n]}(e.repoInfo_,(()=>new Os(e.stats_,e.server_))),e.infoData_=new Es,e.infoSyncTree_=new Yr({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Ur(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),Mo(e,"connected",!1),e.serverSyncTree_=new Yr({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);ko(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function Eo(e){const t=e.infoData_.getNode(new ki(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function xo(e){return(t=(t={timestamp:Eo(e)})||{}).timestamp=t.timestamp||(new Date).getTime(),t;var t}function No(e,t,n,i,s){e.dataUpdateCount++;const r=new ki(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(s)if(i){const t=Pe(n,(e=>_s(e)));o=function(e,t,n,i){const s=Gr(e,i);if(s){const i=Br(s),r=i.path,o=i.queryId,a=Oi(r,t),l=Bs.fromObject(n);return Kr(e,r,new Ys(As(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=_s(n);o=function(e,t,n,i){const s=Gr(e,i);if(null!=s){const i=Br(s),r=i.path,o=i.queryId,a=Oi(r,t);return Kr(e,r,new Ls(As(o),a,n))}return[]}(e.serverSyncTree_,r,t,s)}else if(i){const t=Pe(n,(e=>_s(e)));o=function(e,t,n){const i=Bs.fromObject(n);return $r(e,new Ys({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=_s(n);o=Ur(e.serverSyncTree_,r,t)}let a=r;o.length>0&&(a=Wo(e,r)),ko(e.eventQueue_,a,o)}function Po(e,t){Mo(e,"connected",t),!1===t&&function(e){Fo(e,"onDisconnectEvents");const t=xo(e),n=xs();Ps(e.onDisconnect_,Si(),((i,s)=>{const r=function(e,t,n,i){return no(t,new Zr(n,e),i)}(i,s,e.serverSyncTree_,t);Ns(n,i,r)}));let i=[];Ps(n,Si(),((t,n)=>{i=i.concat(Ur(e.serverSyncTree_,t,n));const s=$o(e,t);Wo(e,s)})),e.onDisconnect_=xs(),ko(e.eventQueue_,Si(),i)}(e)}function Mo(e,t,n){const i=new ki("/.info/"+t),s=_s(n);e.infoData_.updateSnapshot(i,s);const r=Ur(e.infoSyncTree_,i,s);ko(e.eventQueue_,i,r)}function Oo(e){return e.nextWriteId_++}function Ro(e,t){const n=Hr(e.serverSyncTree_,t);return null!=n?Promise.resolve(n):e.server_.get(t).then((n=>{const i=_s(n).withIndex(t._queryParams.getIndex()),s=Ur(e.serverSyncTree_,t._path,i);var r,o;return r=e.eventQueue_,o=t._path,bo(r,s),So(r,(e=>Ri(e,o))),Promise.resolve(i)}),(n=>(Fo(e,"get for query "+Ie(t)+" failed: "+n),Promise.reject(new Error(n)))))}function Ao(e,t,n,i,s){Fo(e,"set",{path:t.toString(),value:n,priority:i});const r=xo(e),o=_s(n,i),a=qr(e.serverSyncTree_,t),l=to(o,a,r),c=Oo(e),h=Wr(e.serverSyncTree_,t,l,c,!0);bo(e.eventQueue_,h),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||Wn("set at "+t+" failed: "+n);const o=jr(e.serverSyncTree_,c,!r);ko(e.eventQueue_,t,o),function(e,t,n,i){t&&Jn((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}(0,s,n,i)}));const u=$o(e,t);Wo(e,u),ko(e.eventQueue_,u,[])}function Fo(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),An(n,...t)}function Lo(e,t,n){return qr(e.serverSyncTree_,t,n)||fs.EMPTY_NODE}function Yo(e,t=e.transactionQueueTree_){if(t||Ho(e,t),ro(t)){const n=Uo(e,t);ue(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=Lo(e,t,i);let r=s;const o=s.hash();for(let e=0;e<n.length;e++){const i=n[e];ue(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Oi(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const a=r.val(!0),l=t;e.server_.put(l.toString(),a,(i=>{Fo(e,"transaction put response",{path:l.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(jr(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();Ho(e,so(e.transactionQueueTree_,t)),Yo(e,e.transactionQueueTree_),ko(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)Jn(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{Wn("transaction at "+l.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}Wo(e,t)}}),o)}(e,ho(t),n)}else ao(t)&&lo(t,(t=>{Yo(e,t)}))}function Wo(e,t){const n=jo(e,t),i=ho(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)).map((e=>e.currentWriteId));for(let a=0;a<t.length;a++){const l=t[a],c=Oi(n,l.path);let h,u=!1;if(ue(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===l.status)u=!0,h=l.abortReason,s=s.concat(jr(e.serverSyncTree_,l.currentWriteId,!0));else if(0===l.status)if(l.retryCount>=25)u=!0,h="maxretry",s=s.concat(jr(e.serverSyncTree_,l.currentWriteId,!0));else{const n=Lo(e,l.path,r);l.currentInputSnapshot=n;const i=t[a].update(n.val());if(void 0!==i){yo("transaction failed: Data returned ",i,l.path);let t=_s(i);"object"==typeof i&&null!=i&&Ee(i,".priority")||(t=t.updatePriority(n.getPriority()));const o=l.currentWriteId,a=xo(e),c=to(t,n,a);l.currentOutputSnapshotRaw=t,l.currentOutputSnapshotResolved=c,l.currentWriteId=Oo(e),r.splice(r.indexOf(o),1),s=s.concat(Wr(e.serverSyncTree_,l.path,c,l.currentWriteId,l.applyLocally)),s=s.concat(jr(e.serverSyncTree_,o,!0))}else u=!0,h="nodata",s=s.concat(jr(e.serverSyncTree_,l.currentWriteId,!0))}ko(e.eventQueue_,n,s),s=[],u&&(t[a].status=2,o=t[a].unwatcher,setTimeout(o,Math.floor(0)),t[a].onComplete&&("nodata"===h?i.push((()=>t[a].onComplete(null,!1,t[a].currentInputSnapshot))):i.push((()=>t[a].onComplete(new Error(h),!1,null)))))}var o;Ho(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)Jn(i[e]);Yo(e,e.transactionQueueTree_)}(e,Uo(e,n),i),i}function jo(e,t){let n,i=e.transactionQueueTree_;for(n=Ti(t);null!==n&&void 0===ro(i);)i=so(i,n),n=Ti(t=Di(t));return i}function Uo(e,t){const n=[];return qo(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function qo(e,t,n){const i=ro(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);lo(t,(t=>{qo(e,t,n)}))}function Ho(e,t){const n=ro(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,oo(t,n.length>0?n:void 0)}lo(t,(t=>{Ho(e,t)}))}function $o(e,t){const n=ho(jo(e,t)),i=so(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{Vo(e,t)})),Vo(e,i),co(i,(t=>{Vo(e,t)})),n}function Vo(e,t){const n=ro(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?(ue(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):(ue(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(jr(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?oo(t,void 0):n.length=r+1,ko(e.eventQueue_,ho(t),s);for(let e=0;e<i.length;e++)Jn(i[e])}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const zo=function(e,t){const n=Go(e),i=n.namespace;"firebase.com"===n.domain&&Yn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||Yn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&Wn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new oi(n.host,n.secure,i,t,s,"",i!==n.subdomain),path:new ki(n.pathString)}},Go=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let c=e.indexOf("//");c>=0&&(a=e.substring(0,c-1),e=e.substring(c+2));let h=e.indexOf("/");-1===h&&(h=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(h,u)),h<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(h,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):Wn(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));c=t.indexOf(":"),c>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(c+1),10)):c=t.length;const f=t.slice(0,c);if("localhost"===f.toLowerCase())n="localhost";else if(f.split(".").length<=2)n=f;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Bo{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Mi(this._path)?null:Ei(this._path)}get ref(){return new Ko(this._repo,this._path)}get _queryIdentifier(){const e=Is(this._queryParams),t=zn(e);return"{}"===t?"default":t}get _queryObject(){return Is(this._queryParams)}isEqual(e){if(!((e=Ye(e))instanceof Bo))return!1;const t=this._repo===e._repo,n=Ri(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Ko extends Bo{constructor(e,t){super(e,t,new Ss,!1)}get parent(){const e=Ni(this._path);return null===e?null:new Ko(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Qo{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ki(e),n=Jo(this.ref,e);return new Qo(this._node.getChild(t),n,rs)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Qo(n,Jo(this.ref,t),rs))))}hasChild(e){const t=new ki(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Zo(e,t){return(e=Ye(e))._checkNotDeleted("ref"),void 0!==t?Jo(e._root,t):e._root}function Jo(e,t){var n,i,s,r;return null===Ti((e=Ye(e))._path)?(n="child",i="path",r=!1,(s=t)&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),vo(n,i,s,r)):vo("child","path",t,!1),new Ko(e._repo,Pi(e._path,t))}function Xo(e,t){(function(e,t){if(".info"===Ti(t))throw new Error(e+" failed = Can't modify data under /.info/")})("set",(e=Ye(e))._path),function(e,t,n,i){i&&void 0===t||yo(Ae(e,"value"),t,n)}("set",t,e._path,!1);const n=new ye;return Ao(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}!function(e){ue(!Or,"__referenceConstructor has already been defined"),Or=e}(Ko),function(e){ue(!Rr,"__referenceConstructor has already been defined"),Rr=e}(Ko);
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const ea={};function ta(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||Yn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),An("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,l=zo(r,s),c=l.repoInfo;"undefined"!=typeof process&&(a=process.env.FIREBASE_DATABASE_EMULATOR_HOST),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,l=zo(r,s),c=l.repoInfo):o=!l.repoInfo.secure;const h=s&&o?new ni(ni.OWNER):new ti(e.name,e.options,t);wo("Invalid Firebase Database URL",l),Mi(l.path)||Yn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=function(e,t,n,i){let s=ea[t.name];s||(s={},ea[t.name]=s);let r=s[e.toURLString()];r&&Yn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new Io(e,false,n,i),s[e.toURLString()]=r,r}(c,e,h,new ei(e.name,n));return new na(u,e)}class na{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Do(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ko(this._repo,Si())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=ea[t];n&&n[e.key]===e||Yn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),function(e){e.persistentConnection_&&e.persistentConnection_.interrupt("repo_interrupt")}(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&Yn("Cannot call "+e+" on a deleted database.")}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Ui.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Ui.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)},
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function(e){!function(e){kn=e}("9.0.0"),rt(new We("database",((e,{instanceIdentifier:t})=>ta(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),ht("@firebase/database","0.12.0",e)}();const ia=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:et,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!=typeof i||!i)throw at.create("bad-app-name",{appName:String(i)});const s=nt.get(i);if(s){if(Me(e,s.options)&&Me(n,s.config))return s;throw at.create("duplicate-app",{appName:i})}const r=new $e(i);for(const e of it.values())r.addComponent(e);const o=new lt(e,n,r);return nt.set(i,o),o}({apiKey:"AIzaSyAr_-oKV3ZIOxpcZGuMArNM4FdOhOycP2U",authDomain:"my-awesome-project-7e477.firebaseapp.com",databaseURL:"https://my-awesome-project-7e477-default-rtdb.firebaseio.com",projectId:"my-awesome-project-7e477",storageBucket:"my-awesome-project-7e477.appspot.com",messagingSenderId:"792665789546",appId:"1:792665789546:web:5408d4cbf580c884bea613",measurementId:"G-MY94EDEHE6"});!function(e=ct()){const t=ot(e=Ye(e),Jt);t.isInitialized()?t.getImmediate():function(e,t={}){const n=ot(e,Jt);if(n.isInitialized()){const e=n.getImmediate();if(Me(t,n.getOptions()))return e;throw sn.create("already-initialized")}n.initialize({options:t})}(e)}(ia);const sa=function(e=ct(),t){return ot(e,"database").getImmediate({identifier:t})}(ia);function ra(t){let n,i,s;return{c(){n=u("div"),n.innerHTML='<div class="container__progressbars svelte-1t4ynyq"><div class="progressbar svelte-1t4ynyq"><svg class="progressbar__svg svelte-1t4ynyq"><circle cx="80" cy="80" r="70" class="progressbar__svg-circle circle-html shadow-html svelte-1t4ynyq"></circle></svg> \n\t\t\t<span class="progressbar__text shadow-html svelte-1t4ynyq">Loading...</span></div></div>',i=f(),s=u("div"),m(n,"class","container svelte-1t4ynyq"),m(s,"id","main-container-social"),m(s,"class","main-container-social svelte-1t4ynyq")},m(e,t){c(e,n,t),c(e,i,t),c(e,s,t)},p:e,i:e,o:e,d(e){e&&h(n),e&&h(i),e&&h(s)}}}class oa extends B{constructor(e){super(),G(this,e,null,ra,r,{})}}function aa(e){let t,n;return t=new oa({}),{c(){H(t.$$.fragment)},m(e,i){$(t,e,i),n=!0},i(e){n||(U(t.$$.fragment,e),n=!0)},o(e){q(t.$$.fragment,e),n=!1},d(e){V(t,e)}}}function la(e){let t,n,i,s,r,a,d,p,_,g,y,v,w,C,b,S,T=e[0]&&aa();return{c(){var l,c;t=u("html"),n=u("head"),n.innerHTML='<meta name="google-signin-client_id" content="226901785403-n6l4602spok3ch7983t2a9muu4i96ffn.apps.googleusercontent.com"/>',i=f(),T&&T.c(),s=f(),r=u("div"),r.innerHTML='<h1>Sign into <span id="around" class="svelte-akwqg8">Around</span></h1>',a=f(),d=u("div"),d.innerHTML="<h3>A fun app to manage your crazy life!</h3>",p=f(),_=u("body"),g=u("div"),y=f(),v=u("script"),v.textContent="function onSuccess(googleUser) {\n          }\n\n          function onFailure(error) {\n            console.log(error);\n          }           \n\n          function renderButton() {\n\n            const PERC_WIDTH = 0.3; \n            const PERC_HEIGHT = 0.1;\n\n            const WIDTH = document.documentElement.clientWidth * PERC_WIDTH;     \n            const HEIGHT = document.documentElement.clientHeight * PERC_HEIGHT;\n\n            try {\n                gapi.signin2.render(\"my-signin2\", {\n                'scope': 'profile email',\n                'width': WIDTH,\n                'height': HEIGHT,\n                'longtitle': false,\n                'theme': 'dark',\n                'onsuccess': onSignIn,\n                'onfailure': onFailure\n                });\n            } \n\n            catch (err) {\n                console.log(err);\n            }\n          }\n\n          let currentHeight = null;\n          let currentWidth = null;\n\n          setInterval(() => {\n            let needToRender = false; \n            if (document.documentElement.clientHeight != currentHeight) {\n                currentHeight = document.documentElement.clientHeight;\n                needToRender = true;\n            }\n\n            if (document.documentElement.clientWidth != currentWidth) {\n                currentWidth = document.documentElement.clientWidth;\n                needToRender = true;\n            } \n\n            if (needToRender) {renderButton();}\n          }, 500);",w=f(),C=u("script"),m(r,"class","title svelte-akwqg8"),k(r,"invisible",e[0]),m(d,"class","description svelte-akwqg8"),k(d,"invisible",e[0]),m(g,"class","signin svelte-akwqg8"),m(g,"id","my-signin2"),k(g,"invisible",e[0]),l=C.src,c=b="https://apis.google.com/js/platform.js?onload=renderButton",o||(o=document.createElement("a")),o.href=c,l!==o.href&&m(C,"src","https://apis.google.com/js/platform.js?onload=renderButton"),C.async=!0,C.defer=!0,m(t,"lang","en")},m(e,o){c(e,t,o),l(t,n),l(t,i),T&&T.m(t,null),l(t,s),l(t,r),l(t,a),l(t,d),l(t,p),l(t,_),l(_,g),l(_,y),l(_,v),l(_,w),l(_,C),S=!0},p(e,[n]){e[0]?T?1&n&&U(T,1):(T=aa(),T.c(),U(T,1),T.m(t,s)):T&&(W(),q(T,1,1,(()=>{T=null})),j()),1&n&&k(r,"invisible",e[0]),1&n&&k(d,"invisible",e[0]),1&n&&k(g,"invisible",e[0])},i(e){S||(U(T),S=!0)},o(e){q(T),S=!1},d(e){e&&h(t),T&&T.d()}}}function ca(e,t,n){let i=!0;setTimeout((()=>{n(0,i=!1)}),800);const s=T();return window.onSignIn=e=>{const t=e.getBasicProfile().fT,n=e.getBasicProfile().uU,i=e.getBasicProfile().PJ;var r;(r=Jo(Zo(sa),"users/"+t),Ro((r=Ye(r))._repo,r).then((e=>new Qo(e,new Ko(r._repo,r._path),r._queryParams.getIndex())))).then((function(e){null===e.val()?(Xo(Zo(sa,"users/"+t),[0]),s("authenticated",{name:n,id:t,items:[0],pfplink:i})):s("authenticated",{name:n,id:t,items:e.val(),pfplink:i})}))},[i]}class ha extends B{constructor(e){super(),G(this,e,ca,la,r,{})}}function ua(e,t,n){const i=e.slice();return i[21]=t[n],i[22]=t,i[23]=n,i}function da(t){let n,i;return n=new ha({}),n.$on("authenticated",t[6]),{c(){H(n.$$.fragment)},m(e,t){$(n,e,t),i=!0},p:e,i(e){i||(U(n.$$.fragment,e),i=!0)},o(e){q(n.$$.fragment,e),i=!1},d(e){V(n,e)}}}function fa(e){let t,n,i,s,r,o,a,g,v,C,b,k,S,T,I,D;function E(e,t){return 0==e[3].length?_a:pa}b=new ne({}),b.$on("additem",e[7]);let x=E(e),N=x(e);return{c(){t=u("div"),n=u("button"),i=f(),s=u("p"),s.textContent="Sign Out",r=f(),o=u("h1"),a=d(e[2]),g=d("'s "),v=u("span"),v.textContent="Around",C=f(),H(b.$$.fragment),k=f(),N.c(),S=p(),m(n,"id","sign-out-button"),w(n,"background-image","url("+e[4]+")"),m(n,"class","svelte-ufck67"),m(s,"id","sign-out-text"),m(s,"class","svelte-ufck67"),m(t,"class","sign-out-section svelte-ufck67"),m(v,"id","around"),m(v,"class","svelte-ufck67"),m(o,"id","title"),m(o,"class","svelte-ufck67")},m(h,u){c(h,t,u),l(t,n),l(t,i),l(t,s),c(h,r,u),c(h,o,u),l(o,a),l(o,g),l(o,v),c(h,C,u),$(b,h,u),c(h,k,u),N.m(h,u),c(h,S,u),T=!0,I||(D=_(n,"click",e[8]),I=!0)},p(e,t){(!T||16&t)&&w(n,"background-image","url("+e[4]+")"),(!T||4&t)&&y(a,e[2]),x===(x=E(e))&&N?N.p(e,t):(N.d(1),N=x(e),N&&(N.c(),N.m(S.parentNode,S)))},i(e){T||(U(b.$$.fragment,e),T=!0)},o(e){q(b.$$.fragment,e),T=!1},d(e){e&&h(t),e&&h(r),e&&h(o),e&&h(C),V(b,e),e&&h(k),N.d(e),e&&h(S),I=!1,D()}}}function pa(e){let t,n,s,r,o,a,d,g,y,v,w,b,k,S,T,I=e[3],D=[];for(let t=0;t<I.length;t+=1)D[t]=ma(ua(e,I,t));return{c(){t=u("h2"),t.textContent="Sort HW By:",n=f(),s=u("select"),r=u("option"),r.textContent="Due Date",o=u("option"),o.textContent="Points",a=u("option"),a.textContent="Time Needed ",d=u("option"),d.textContent="Name",g=f(),y=u("br"),v=f(),w=u("br"),b=f();for(let e=0;e<D.length;e+=1)D[e].c();k=p(),m(t,"id","sort-text"),m(t,"class","svelte-ufck67"),r.selected="true",r.__value="dueDate",r.value=r.__value,o.__value="points",o.value=o.__value,a.__value="time",a.value=a.__value,d.__value="name",d.value=d.__value,m(s,"id","sort-selector"),m(s,"name","sortBy"),m(s,"class","svelte-ufck67"),void 0===e[0]&&M((()=>e[11].call(s)))},m(i,h){c(i,t,h),c(i,n,h),c(i,s,h),l(s,r),l(s,o),l(s,a),l(s,d),C(s,e[0]),c(i,g,h),c(i,y,h),c(i,v,h),c(i,w,h),c(i,b,h);for(let e=0;e<D.length;e+=1)D[e].m(i,h);c(i,k,h),S||(T=[_(s,"change",e[11]),_(s,"change",e[10])],S=!0)},p(e,t){if(1&t&&C(s,e[0]),552&t){let n;for(I=e[3],n=0;n<I.length;n+=1){const i=ua(e,I,n);D[n]?D[n].p(i,t):(D[n]=ma(i),D[n].c(),D[n].m(k.parentNode,k))}for(;n<D.length;n+=1)D[n].d(1);D.length=I.length}},d(e){e&&h(t),e&&h(n),e&&h(s),e&&h(g),e&&h(y),e&&h(v),e&&h(w),e&&h(b),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(D,e),e&&h(k),S=!1,i(T)}}}function _a(t){let n;return{c(){n=u("p"),n.innerHTML="<strong>No HW (Yet) 😅😅</strong>",m(n,"id","none-there"),m(n,"class","svelte-ufck67")},m(e,t){c(e,n,t)},p:e,d(e){e&&h(n)}}}function ma(e){let t,n,s,r,o,a,p,g,w,b,k,S,T,I,D,E,x,N,P,O,R,A,F,L,Y,W,j,U,q,H,$,V,z,G,B,K,Q,Z,J,X,ee,te,ne=e[23]+1+".",ie=e[21].name+"",se=e[21].time+"",re=e[21].points+"",oe=e[21].description+"";function ae(){e[12].call(o,e[22],e[23])}function le(){return e[13](e[23])}function ce(){e[14].call(I,e[22],e[23])}function he(){e[15].call(P,e[22],e[23])}function ue(){e[16].call(F,e[22],e[23])}function de(){e[17].call(V,e[22],e[23])}function fe(){e[18].call(Z,e[22],e[23])}return{c(){t=u("h1"),n=u("span"),s=d(ne),r=f(),o=u("span"),a=d(ie),p=f(),g=u("button"),g.textContent="Delete",w=f(),b=u("div"),k=u("div"),S=u("h3"),T=d("Due Date: "),I=u("input"),D=f(),E=u("div"),x=u("h3"),N=d("Time: "),P=u("span"),O=d(se),R=f(),A=u("div"),F=u("select"),L=u("option"),L.textContent="Minutes",Y=u("option"),Y.textContent="Hours",W=u("option"),W.textContent="Seconds",j=u("option"),j.textContent="Days (for Calc HW)",U=f(),q=u("div"),H=u("h3"),$=d("Points: "),V=u("span"),z=d(re),G=f(),B=u("div"),K=u("p"),Q=u("em"),Z=u("span"),J=d(oe),X=f(),m(o,"contenteditable","true"),m(o,"class","edit-info svelte-ufck67"),void 0===e[21].name&&M(ae),m(t,"id","name"),m(t,"class","svelte-ufck67"),m(g,"id","trash"),m(g,"type","button"),m(g,"class","svelte-ufck67"),m(I,"type","date"),m(I,"class","edit-info svelte-ufck67"),m(I,"id","iDD"),m(S,"id","iDH"),m(S,"class","svelte-ufck67"),m(k,"class","dueDate svelte-ufck67"),m(P,"contenteditable","true"),m(P,"class","edit-info svelte-ufck67"),void 0===e[21].time&&M(he),m(E,"class","time svelte-ufck67"),L.__value="minutes",L.value=L.__value,Y.__value="hours",Y.value=Y.__value,W.__value="seconds",W.value=W.__value,j.__value="days",j.value=j.__value,m(F,"id","unit-selector"),m(F,"name","units"),void 0===e[21].timeUnits&&M(ue),m(A,"class","time-unit-selector svelte-ufck67"),m(V,"contenteditable","true"),m(V,"class","edit-info svelte-ufck67"),void 0===e[21].points&&M(de),m(q,"class","points svelte-ufck67"),m(Z,"contenteditable","true"),m(Z,"class","edit-info svelte-ufck67"),void 0===e[21].description&&M(fe),m(B,"class","description svelte-ufck67"),m(b,"class","grid-container svelte-ufck67")},m(i,h){c(i,t,h),l(t,n),l(n,s),l(t,r),l(t,o),l(o,a),void 0!==e[21].name&&(o.textContent=e[21].name),c(i,p,h),c(i,g,h),c(i,w,h),c(i,b,h),l(b,k),l(k,S),l(S,T),l(S,I),v(I,e[21].dueDate),l(b,D),l(b,E),l(E,x),l(x,N),l(x,P),l(P,O),void 0!==e[21].time&&(P.textContent=e[21].time),l(b,R),l(b,A),l(A,F),l(F,L),l(F,Y),l(F,W),l(F,j),C(F,e[21].timeUnits),l(b,U),l(b,q),l(q,H),l(H,$),l(H,V),l(V,z),void 0!==e[21].points&&(V.textContent=e[21].points),l(b,G),l(b,B),l(B,K),l(K,Q),l(Q,Z),l(Z,J),void 0!==e[21].description&&(Z.textContent=e[21].description),l(b,X),ee||(te=[_(o,"blur",e[5]),_(o,"input",ae),_(g,"click",le),_(I,"blur",e[5]),_(I,"input",ce),_(P,"blur",e[5]),_(P,"input",he),_(F,"change",ue),_(F,"blur",e[5]),_(V,"blur",e[5]),_(V,"input",de),_(Z,"blur",e[5]),_(Z,"input",fe)],ee=!0)},p(t,n){e=t,8&n&&ie!==(ie=e[21].name+"")&&y(a,ie),8&n&&e[21].name!==o.textContent&&(o.textContent=e[21].name),8&n&&v(I,e[21].dueDate),8&n&&se!==(se=e[21].time+"")&&y(O,se),8&n&&e[21].time!==P.textContent&&(P.textContent=e[21].time),8&n&&C(F,e[21].timeUnits),8&n&&re!==(re=e[21].points+"")&&y(z,re),8&n&&e[21].points!==V.textContent&&(V.textContent=e[21].points),8&n&&oe!==(oe=e[21].description+"")&&y(J,oe),8&n&&e[21].description!==Z.textContent&&(Z.textContent=e[21].description)},d(e){e&&h(t),e&&h(p),e&&h(g),e&&h(w),e&&h(b),ee=!1,i(te)}}}function ga(e){let t,n,i,s,r,o,a;const d=[fa,da],p=[];function _(e,t){return e[1]?0:1}return r=_(e),o=p[r]=d[r](e),{c(){t=u("main"),n=u("head"),n.innerHTML='<meta name="google-signin-client_id" content="226901785403-n6l4602spok3ch7983t2a9muu4i96ffn.apps.googleusercontent.com"/>  \n\t\t<script src="https://apis.google.com/js/platform.js" async="" defer=""><\/script>',i=f(),s=u("div"),o.c(),m(s,"class","container"),m(t,"class","svelte-ufck67")},m(e,o){c(e,t,o),l(t,n),l(t,i),l(t,s),p[r].m(s,null),a=!0},p(e,[t]){let n=r;r=_(e),r===n?p[r].p(e,t):(W(),q(p[n],1,1,(()=>{p[n]=null})),j(),o=p[r],o?o.p(e,t):(o=p[r]=d[r](e),o.c()),U(o,1),o.m(s,null))},i(e){a||(U(o),a=!0)},o(e){q(o),a=!1},d(e){e&&h(t),p[r].d()}}}function ya(e,t,n){let i,s,r,o=!1,a=[],l="dueDate";const c=()=>{"dueDate"===l?n(3,a=a.sort(((e,t)=>new Date(e.dueDate)-new Date(t.dueDate)))):"points"===l?n(3,a=a.sort(((e,t)=>t.points-e.points))):"name"===l?n(3,a=a.sort(((e,t)=>e.name.localeCompare(t.name)))):"time"===l&&n(3,a=a.sort(((e,t)=>J(t.time,t.timeUnits)-J(e.time,e.timeUnits)))),Xo(Zo(sa,"users/"+s),a)};const h=e=>{n(3,a=a.filter(((t,n)=>n!=e))),n(3,a),Xo(Zo(sa,"users/"+s),a)};return e.$$.update=()=>{1&e.$$.dirty&&c()},[l,o,i,a,r,c,e=>{const{name:t,items:c,id:h,pfplink:u}=e.detail;if(n(2,i=t),s=h,n(4,r=u),n(1,o=!0),JSON.stringify(c)===JSON.stringify([0]))n(3,a=[]);else{if(n(3,a=c),null==a[0].sortSelection)for(let e=0;e<a.length;e++)n(3,a[e].sortSelection="dueDate",a);else n(0,l=a[0].sortSelection);Xo(Zo(sa,"users/"+s),a)}},e=>{const t=e.detail;n(3,a=[...a,t]);for(let e=0;e<a.length;e++)n(3,a[e].sortSelection=l,a);n(3,a),c(),Xo(Zo(sa,"users/"+s),a)},function(){gapi.auth2.getAuthInstance().signOut().then((function(){n(1,o=!1)}))},h,()=>{for(let e=0;e<a.length;e++)n(3,a[e].sortSelection=l,a);Xo(Zo(sa,"users/"+s),a)},function(){l=b(this),n(0,l)},function(e,t){e[t].name=this.textContent,n(3,a)},e=>{h(e)},function(e,t){e[t].dueDate=this.value,n(3,a)},function(e,t){e[t].time=this.textContent,n(3,a)},function(e,t){e[t].timeUnits=b(this),n(3,a)},function(e,t){e[t].points=this.textContent,n(3,a)},function(e,t){e[t].description=this.textContent,n(3,a)}]}return new class extends B{constructor(e){super(),G(this,e,ya,ga,r,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
