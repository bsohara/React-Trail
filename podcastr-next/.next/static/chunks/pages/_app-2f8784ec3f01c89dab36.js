_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},BLsd:function(e,t,n){e.exports={playerContainer:"styles_playerContainer__2kTpC",empty:"styles_empty__XvMyC",emptyPlayer:"styles_emptyPlayer__WHPi6",progress:"styles_progress__ULW9V",slider:"styles_slider__3_Mkb",emptySlider:"styles_emptySlider__3p9Ad",buttons:"styles_buttons__i4fo8",playButton:"styles_playButton__fmvI6"}},JmTP:function(e,t,n){e.exports={headerContainer:"styles_headerContainer__3jyUX"}},TpEK:function(e,t,n){e.exports={wrapper:"app_wrapper__X8llh"}},hUgY:function(e,t,n){"use strict";n.r(t);var a=n("nKUr");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n("t+Ps");var i=n("TpEK"),o=n.n(i),s=n("JmTP"),u=n.n(s);function d(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function c(e){d(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function m(e){d(1,arguments);var t=c(e);return!isNaN(t)}var l={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function h(e){return function(t){var n=t||{},a=n.width?String(n.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}}var f={date:h({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:h({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:h({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},g={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function b(e){return function(t,n){var a,r=n||{};if("formatting"===(r.context?String(r.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=r.width?String(r.width):i;a=e.formattingValues[o]||e.formattingValues[i]}else{var s=e.defaultWidth,u=r.width?String(r.width):e.defaultWidth;a=e.values[u]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}function w(e){return function(t,n){var a=String(t),r=n||{},i=a.match(e.matchPattern);if(!i)return null;var o=i[0],s=a.match(e.parsePattern);if(!s)return null;var u=e.valueCallback?e.valueCallback(s[0]):s[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(o.length)}}}function v(e){return function(t,n){var a=String(t),r=n||{},i=r.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],s=a.match(o);if(!s)return null;var u,d=s[0],c=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return u="[object Array]"===Object.prototype.toString.call(c)?function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}(c,(function(e){return e.test(d)})):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}(c,(function(e){return e.test(d)})),u=e.valueCallback?e.valueCallback(u):u,{value:u=r.valueCallback?r.valueCallback(u):u,rest:a.slice(d.length)}}}var p={code:"en-US",formatDistance:function(e,t,n){var a;return n=n||{},a="string"===typeof l[e]?l[e]:1===t?l[e].one:l[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+a:a+" ago":a},formatLong:f,formatRelative:function(e,t,n,a){return g[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:b({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:b({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:b({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:b({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:b({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:w({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:v({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:v({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:v({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:v({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function y(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function x(e,t){d(2,arguments);var n=c(e).getTime(),a=y(t);return new Date(n+a)}function j(e,t){d(2,arguments);var n=y(t);return x(e,-n)}function M(e,t){for(var n=e<0?"-":"",a=Math.abs(e).toString();a.length<t;)a="0"+a;return n+a}var T={y:function(e,t){var n=e.getUTCFullYear(),a=n>0?n:1-n;return M("yy"===t?a%100:a,t.length)},M:function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):M(n+1,2)},d:function(e,t){return M(e.getUTCDate(),t.length)},a:function(e,t){var n=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.toUpperCase();case"aaa":return n;case"aaaaa":return n[0];case"aaaa":default:return"am"===n?"a.m.":"p.m."}},h:function(e,t){return M(e.getUTCHours()%12||12,t.length)},H:function(e,t){return M(e.getUTCHours(),t.length)},m:function(e,t){return M(e.getUTCMinutes(),t.length)},s:function(e,t){return M(e.getUTCSeconds(),t.length)},S:function(e,t){var n=t.length,a=e.getUTCMilliseconds();return M(Math.floor(a*Math.pow(10,n-3)),t.length)}},P=864e5;function C(e){d(1,arguments);var t=1,n=c(e),a=n.getUTCDay(),r=(a<t?7:0)+a-t;return n.setUTCDate(n.getUTCDate()-r),n.setUTCHours(0,0,0,0),n}function O(e){d(1,arguments);var t=c(e),n=t.getUTCFullYear(),a=new Date(0);a.setUTCFullYear(n+1,0,4),a.setUTCHours(0,0,0,0);var r=C(a),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var o=C(i);return t.getTime()>=r.getTime()?n+1:t.getTime()>=o.getTime()?n:n-1}function D(e){d(1,arguments);var t=O(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var a=C(n);return a}var W=6048e5;function k(e,t){d(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.weekStartsOn,i=null==r?0:y(r),o=null==n.weekStartsOn?i:y(n.weekStartsOn);if(!(o>=0&&o<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var s=c(e),u=s.getUTCDay(),m=(u<o?7:0)+u-o;return s.setUTCDate(s.getUTCDate()-m),s.setUTCHours(0,0,0,0),s}function S(e,t){d(1,arguments);var n=c(e,t),a=n.getUTCFullYear(),r=t||{},i=r.locale,o=i&&i.options&&i.options.firstWeekContainsDate,s=null==o?1:y(o),u=null==r.firstWeekContainsDate?s:y(r.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var m=new Date(0);m.setUTCFullYear(a+1,0,u),m.setUTCHours(0,0,0,0);var l=k(m,t),h=new Date(0);h.setUTCFullYear(a,0,u),h.setUTCHours(0,0,0,0);var f=k(h,t);return n.getTime()>=l.getTime()?a+1:n.getTime()>=f.getTime()?a:a-1}function U(e,t){d(1,arguments);var n=t||{},a=n.locale,r=a&&a.options&&a.options.firstWeekContainsDate,i=null==r?1:y(r),o=null==n.firstWeekContainsDate?i:y(n.firstWeekContainsDate),s=S(e,t),u=new Date(0);u.setUTCFullYear(s,0,o),u.setUTCHours(0,0,0,0);var c=k(u,t);return c}var E=6048e5;var N="midnight",q="noon",Y="morning",_="afternoon",H="evening",X="night";function z(e,t){var n=e>0?"-":"+",a=Math.abs(e),r=Math.floor(a/60),i=a%60;if(0===i)return n+String(r);var o=t||"";return n+String(r)+o+M(i,2)}function L(e,t){return e%60===0?(e>0?"-":"+")+M(Math.abs(e)/60,2):F(e,t)}function F(e,t){var n=t||"",a=e>0?"-":"+",r=Math.abs(e);return a+M(Math.floor(r/60),2)+n+M(r%60,2)}var B={G:function(e,t,n){var a=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(a,{width:"abbreviated"});case"GGGGG":return n.era(a,{width:"narrow"});case"GGGG":default:return n.era(a,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var a=e.getUTCFullYear(),r=a>0?a:1-a;return n.ordinalNumber(r,{unit:"year"})}return T.y(e,t)},Y:function(e,t,n,a){var r=S(e,a),i=r>0?r:1-r;return"YY"===t?M(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):M(i,t.length)},R:function(e,t){return M(O(e),t.length)},u:function(e,t){return M(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(a);case"QQ":return M(a,2);case"Qo":return n.ordinalNumber(a,{unit:"quarter"});case"QQQ":return n.quarter(a,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(a,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(a,{width:"wide",context:"formatting"})}},q:function(e,t,n){var a=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(a);case"qq":return M(a,2);case"qo":return n.ordinalNumber(a,{unit:"quarter"});case"qqq":return n.quarter(a,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(a,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(a,{width:"wide",context:"standalone"})}},M:function(e,t,n){var a=e.getUTCMonth();switch(t){case"M":case"MM":return T.M(e,t);case"Mo":return n.ordinalNumber(a+1,{unit:"month"});case"MMM":return n.month(a,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(a,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(a,{width:"wide",context:"formatting"})}},L:function(e,t,n){var a=e.getUTCMonth();switch(t){case"L":return String(a+1);case"LL":return M(a+1,2);case"Lo":return n.ordinalNumber(a+1,{unit:"month"});case"LLL":return n.month(a,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(a,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(a,{width:"wide",context:"standalone"})}},w:function(e,t,n,a){var r=function(e,t){d(1,arguments);var n=c(e),a=k(n,t).getTime()-U(n,t).getTime();return Math.round(a/E)+1}(e,a);return"wo"===t?n.ordinalNumber(r,{unit:"week"}):M(r,t.length)},I:function(e,t,n){var a=function(e){d(1,arguments);var t=c(e),n=C(t).getTime()-D(t).getTime();return Math.round(n/W)+1}(e);return"Io"===t?n.ordinalNumber(a,{unit:"week"}):M(a,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):T.d(e,t)},D:function(e,t,n){var a=function(e){d(1,arguments);var t=c(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var a=t.getTime(),r=n-a;return Math.floor(r/P)+1}(e);return"Do"===t?n.ordinalNumber(a,{unit:"dayOfYear"}):M(a,t.length)},E:function(e,t,n){var a=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(a,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(a,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(a,{width:"short",context:"formatting"});case"EEEE":default:return n.day(a,{width:"wide",context:"formatting"})}},e:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return M(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(r,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(r,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(r,{width:"short",context:"formatting"});case"eeee":default:return n.day(r,{width:"wide",context:"formatting"})}},c:function(e,t,n,a){var r=e.getUTCDay(),i=(r-a.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return M(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(r,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(r,{width:"narrow",context:"standalone"});case"cccccc":return n.day(r,{width:"short",context:"standalone"});case"cccc":default:return n.day(r,{width:"wide",context:"standalone"})}},i:function(e,t,n){var a=e.getUTCDay(),r=0===a?7:a;switch(t){case"i":return String(r);case"ii":return M(r,t.length);case"io":return n.ordinalNumber(r,{unit:"day"});case"iii":return n.day(a,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(a,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(a,{width:"short",context:"formatting"});case"iiii":default:return n.day(a,{width:"wide",context:"formatting"})}},a:function(e,t,n){var a=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},b:function(e,t,n){var a,r=e.getUTCHours();switch(a=12===r?q:0===r?N:r/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},B:function(e,t,n){var a,r=e.getUTCHours();switch(a=r>=17?H:r>=12?_:r>=4?Y:X,t){case"B":case"BB":case"BBB":return n.dayPeriod(a,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(a,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(a,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var a=e.getUTCHours()%12;return 0===a&&(a=12),n.ordinalNumber(a,{unit:"hour"})}return T.h(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):T.H(e,t)},K:function(e,t,n){var a=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(a,{unit:"hour"}):M(a,t.length)},k:function(e,t,n){var a=e.getUTCHours();return 0===a&&(a=24),"ko"===t?n.ordinalNumber(a,{unit:"hour"}):M(a,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):T.m(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):T.s(e,t)},S:function(e,t){return T.S(e,t)},X:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();if(0===r)return"Z";switch(t){case"X":return L(r);case"XXXX":case"XX":return F(r);case"XXXXX":case"XXX":default:return F(r,":")}},x:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"x":return L(r);case"xxxx":case"xx":return F(r);case"xxxxx":case"xxx":default:return F(r,":")}},O:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+z(r,":");case"OOOO":default:return"GMT"+F(r,":")}},z:function(e,t,n,a){var r=(a._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+z(r,":");case"zzzz":default:return"GMT"+F(r,":")}},t:function(e,t,n,a){var r=a._originalDate||e;return M(Math.floor(r.getTime()/1e3),t.length)},T:function(e,t,n,a){return M((a._originalDate||e).getTime(),t.length)}};function A(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function Q(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}var G={p:Q,P:function(e,t){var n,a=e.match(/(P+)(p+)?/),r=a[1],i=a[2];if(!i)return A(e,t);switch(r){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",A(r,t)).replace("{{time}}",Q(i,t))}};function R(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var J=["D","DD"],I=["YY","YYYY"];function K(e){return-1!==J.indexOf(e)}function V(e){return-1!==I.indexOf(e)}function $(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var Z=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,ee=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,te=/^'([^]*?)'?$/,ne=/''/g,ae=/[a-zA-Z]/;function re(e){return e.match(te)[1].replace(ne,"'")}var ie={lessThanXSeconds:{one:"menos de um segundo",other:"menos de {{count}} segundos"},xSeconds:{one:"1 segundo",other:"{{count}} segundos"},halfAMinute:"meio minuto",lessThanXMinutes:{one:"menos de um minuto",other:"menos de {{count}} minutos"},xMinutes:{one:"1 minuto",other:"{{count}} minutos"},aboutXHours:{one:"cerca de 1 hora",other:"cerca de {{count}} horas"},xHours:{one:"1 hora",other:"{{count}} horas"},xDays:{one:"1 dia",other:"{{count}} dias"},aboutXWeeks:{one:"cerca de 1 semana",other:"cerca de {{count}} semanas"},xWeeks:{one:"1 semana",other:"{{count}} semanas"},aboutXMonths:{one:"cerca de 1 m\xeas",other:"cerca de {{count}} meses"},xMonths:{one:"1 m\xeas",other:"{{count}} meses"},aboutXYears:{one:"cerca de 1 ano",other:"cerca de {{count}} anos"},xYears:{one:"1 ano",other:"{{count}} anos"},overXYears:{one:"mais de 1 ano",other:"mais de {{count}} anos"},almostXYears:{one:"quase 1 ano",other:"quase {{count}} anos"}};var oe={date:h({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:h({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:h({formats:{full:"{{date}} '\xe0s' {{time}}",long:"{{date}} '\xe0s' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},se={lastWeek:function(e,t,n){var a=e.getUTCDay();return"'"+(0===a||6===a?"\xfaltimo":"\xfaltima")+"' eeee '\xe0s' p"},yesterday:"'ontem \xe0s' p",today:"'hoje \xe0s' p",tomorrow:"'amanh\xe3 \xe0s' p",nextWeek:"eeee '\xe0s' p",other:"P"};var ue={code:"pt-BR",formatDistance:function(e,t,n){var a;return n=n||{},a="string"===typeof ie[e]?ie[e]:1===t?ie[e].one:ie[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"em "+a:"h\xe1 "+a:a},formatLong:oe,formatRelative:function(e,t,n,a){var r=se[e];return"function"===typeof r?r(t,n,a):r},localize:{ordinalNumber:function(e,t){var n=Number(e),a=String((t||{}).unit);return"week"===a||"isoWeek"===a?n+"\xaa":n+"\xba"},era:b({values:{narrow:["AC","DC"],abbreviated:["AC","DC"],wide:["antes de cristo","depois de cristo"]},defaultWidth:"wide"}),quarter:b({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["1\xba trimestre","2\xba trimestre","3\xba trimestre","4\xba trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:b({values:{narrow:["j","f","m","a","m","j","j","a","s","o","n","d"],abbreviated:["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez"],wide:["janeiro","fevereiro","mar\xe7o","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]},defaultWidth:"wide"}),day:b({values:{narrow:["D","S","T","Q","Q","S","S"],short:["dom","seg","ter","qua","qui","sex","sab"],abbreviated:["domingo","segunda","ter\xe7a","quarta","quinta","sexta","s\xe1bado"],wide:["domingo","segunda-feira","ter\xe7a-feira","quarta-feira","quinta-feira","sexta-feira","s\xe1bado"]},defaultWidth:"wide"}),dayPeriod:b({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"manh\xe3",afternoon:"tarde",evening:"tarde",night:"noite"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"md",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},abbreviated:{am:"AM",pm:"PM",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"},wide:{am:"a.m.",pm:"p.m.",midnight:"meia-noite",noon:"meio-dia",morning:"da manh\xe3",afternoon:"da tarde",evening:"da tarde",night:"da noite"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:w({matchPattern:/^(\d+)[\xba\xaao]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:v({matchPatterns:{narrow:/^(ac|dc|a|d)/i,abbreviated:/^(a\.?\s?c\.?|d\.?\s?c\.?)/i,wide:/^(antes de cristo|depois de cristo)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ac/i,/^dc/i],wide:[/^antes de cristo/i,/^depois de cristo/i]},defaultParseWidth:"any"}),quarter:v({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^T[1234]/i,wide:/^[1234](\xba)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:v({matchPatterns:{narrow:/^[jfmajsond]/i,abbreviated:/^(jan|fev|mar|abr|mai|jun|jul|ago|set|out|nov|dez)/i,wide:/^(janeiro|fevereiro|mar\xe7o|abril|maio|junho|julho|agosto|setembro|outubro|novembro|dezembro)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^fev/i,/^mar/i,/^abr/i,/^mai/i,/^jun/i,/^jul/i,/^ago/i,/^set/i,/^out/i,/^nov/i,/^dez/i]},defaultParseWidth:"any"}),day:v({matchPatterns:{narrow:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,short:/^(dom|[23456]\xaa?|s[a\xe1]b)/i,abbreviated:/^(dom|seg|ter|qua|qui|sex|s[a\xe1]b)/i,wide:/^(domingo|(segunda|ter[c\xe7]a|quarta|quinta|sexta)([- ]feira)?|s[a\xe1]bado)/i},defaultMatchWidth:"wide",parsePatterns:{short:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],narrow:[/^d/i,/^2/i,/^3/i,/^4/i,/^5/i,/^6/i,/^s[a\xe1]/i],any:[/^d/i,/^seg/i,/^t/i,/^qua/i,/^qui/i,/^sex/i,/^s[a\xe1]b/i]},defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:{narrow:/^(a|p|mn|md|(da) (manh\xe3|tarde|noite))/i,any:/^([ap]\.?\s?m\.?|meia[-\s]noite|meio[-\s]dia|(da) (manh\xe3|tarde|noite))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mn|^meia[-\s]noite/i,noon:/^md|^meio[-\s]dia/i,morning:/manh\xe3/i,afternoon:/tarde/i,evening:/tarde/i,night:/noite/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function de(){var e=function(e,t,n){d(2,arguments);var a=String(t),r=n||{},i=r.locale||p,o=i.options&&i.options.firstWeekContainsDate,s=null==o?1:y(o),u=null==r.firstWeekContainsDate?s:y(r.firstWeekContainsDate);if(!(u>=1&&u<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var l=i.options&&i.options.weekStartsOn,h=null==l?0:y(l),f=null==r.weekStartsOn?h:y(r.weekStartsOn);if(!(f>=0&&f<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=c(e);if(!m(g))throw new RangeError("Invalid time value");var b=R(g),w=j(g,b),v={firstWeekContainsDate:u,weekStartsOn:f,locale:i,_originalDate:g};return a.match(ee).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,G[t])(e,i.formatLong,v):e})).join("").match(Z).map((function(n){if("''"===n)return"'";var a=n[0];if("'"===a)return re(n);var o=B[a];if(o)return!r.useAdditionalWeekYearTokens&&V(n)&&$(n,t,e),!r.useAdditionalDayOfYearTokens&&K(n)&&$(n,t,e),o(w,n,i.localize,v);if(a.match(ae))throw new RangeError("Format string contains an unescaped latin alphabet character `"+a+"`");return n})).join("")}(new Date,"EEEEEE, d MMMM",{locale:ue});return Object(a.jsxs)("header",{className:u.a.headerContainer,children:[Object(a.jsx)("img",{src:"/logo.svg",alt:"Podcast"}),Object(a.jsx)("p",{children:"O melhor para voc\xea ouvir sempre"}),Object(a.jsx)("span",{children:e})]})}var ce=n("BLsd"),me=n.n(ce);function le(){return Object(a.jsxs)("div",{className:me.a.playerContainer,children:[Object(a.jsxs)("header",{children:[Object(a.jsx)("img",{src:"/playing.svg",alt:"Tocando agora"}),Object(a.jsx)("strong",{children:"Tocando agora"})]}),Object(a.jsx)("div",{className:me.a.emptyPlayer,children:Object(a.jsx)("strong",{children:"Selecione um podcast para ouvir"})}),Object(a.jsxs)("footer",{className:me.a.empty,children:[Object(a.jsxs)("div",{className:me.a.progress,children:[Object(a.jsx)("span",{children:"00:00"}),Object(a.jsx)("div",{className:me.a.slider,children:Object(a.jsx)("div",{className:me.a.emptySlider})}),Object(a.jsx)("span",{children:"00:00"})]}),Object(a.jsxs)("div",{className:me.a.buttons,children:[Object(a.jsx)("button",{type:"button",children:Object(a.jsx)("img",{src:"/shuffle.svg",alt:"Aleat\xf3rio"})}),Object(a.jsx)("button",{type:"button",children:Object(a.jsx)("img",{src:"/play-previous.svg",alt:"Anterior"})}),Object(a.jsx)("button",{type:"button",className:me.a.playButton,children:Object(a.jsx)("img",{src:"/play.svg",alt:"Tocar"})}),Object(a.jsx)("button",{type:"button",children:Object(a.jsx)("img",{src:"/play-next.svg",alt:"Pr\xf3ximo"})}),Object(a.jsx)("button",{type:"button",children:Object(a.jsx)("img",{src:"/repeat.svg",alt:"Repetir"})})]})]})]})}function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(a.jsxs)("div",{className:o.a.wrapper,children:[Object(a.jsxs)("main",{children:[Object(a.jsx)(de,{}),Object(a.jsx)(t,fe({},n))]}),Object(a.jsx)(le,{})]})}},"t+Ps":function(e,t,n){}},[[0,0,1,2]]]);