(function(e){function n(n){for(var o,a,c=n[0],s=n[1],u=n[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(n);while(f.length)f.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,a=1;a<t.length;a++){var s=t[a];0!==r[s]&&(o=!1)}o&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var o={},r={app:0},i=[];function a(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"f3fc5b9d"}[e]+".js"}function c(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=r[e];if(0!==t)if(t)n.push(t[2]);else{var o=new Promise((function(n,o){t=r[e]=[n,o]}));n.push(t[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(e);var u=new Error;i=function(n){s.onerror=s.onload=null,clearTimeout(l);var t=r[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,t[1](u)}r[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=o,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(t,o,function(n){return e[n]}.bind(null,o));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=u;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var o=t("85ec"),r=t.n(o);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("div",{attrs:{id:"nav"}},[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),t("router-view")],1)},i=[],a=(t("034f"),t("2877")),c={},s=Object(a["a"])(c,r,i,!1,null,null,null),u=s.exports,l=(t("d3b7"),t("8c4f")),d=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("el-form",{attrs:{"label-position":"top","label-width":"80px",model:e.msg}},[t("el-form-item",{attrs:{label:"Receive Msg"}},[t("el-input",{attrs:{type:"textarea",readonly:"",rows:10},model:{value:e.msg.receiveMsg,callback:function(n){e.$set(e.msg,"receiveMsg",n)},expression:"msg.receiveMsg"}})],1),t("el-form-item",{attrs:{label:"Send Msg"}},[t("el-input",{attrs:{type:"textarea",autosize:""},model:{value:e.msg.sendMsg,callback:function(n){e.$set(e.msg,"sendMsg",n)},expression:"msg.sendMsg"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.send}},[e._v(" Send ")])],1)],1)},f=[],p=(t("99af"),t("25f0"),t("4160"),t("caad"),t("b64b"),t("2532"),t("159b"),t("c975"),t("a434"),t("b0c0"),t("a9e3"),t("ac1f"),t("53ca")),g={signal:1,propertyUpdate:2,init:3,idle:4,debug:5,invokeMethod:6,connectToSignal:7,disconnectFromSignal:8,setProperty:9,response:10},v=function(e,n){if("object"===Object(p["a"])(e)&&"function"===typeof e.send){var t=this;this.transport=e,this.send=function(e){"string"!==typeof e&&(e=JSON.stringify(e)),t.transport.send(e)},this.transport.onmessage=function(e){var n=e.data;switch("string"===typeof n&&(n=JSON.parse(n)),n.type){case g.signal:t.handleSignal(n);break;case g.response:t.handleResponse(n);break;case g.propertyUpdate:t.handlePropertyUpdate(n);break;default:console.error("invalid message received:",e.data);break}},this.execCallbacks={},this.execId=0,this.exec=function(e,n){n?(t.execId===Number.MAX_VALUE&&(t.execId=Number.MIN_VALUE),e.hasOwnProperty("id")?console.error("Cannot exec message with property id: "+JSON.stringify(e)):(e.id=t.execId++,t.execCallbacks[e.id]=n,t.send(e))):t.send(e)},this.objects={},this.handleSignal=function(e){var n=t.objects[e.object];n?n.signalEmitted(e.signal,e.args):console.warn("Unhandled signal: "+e.object+"::"+e.signal)},this.handleResponse=function(e){e.hasOwnProperty("id")?(t.execCallbacks[e.id](e.data),delete t.execCallbacks[e.id]):console.error("Invalid response message received: ",JSON.stringify(e))},this.handlePropertyUpdate=function(e){for(var n in e.data){var o=e.data[n],r=t.objects[o.object];r?r.propertyUpdate(o.signals,o.properties):console.warn("Unhandled property update: "+o.object+"::"+o.signal)}t.exec({type:g.idle})},this.debug=function(e){t.send({type:g.debug,data:e})},t.exec({type:g.init},(function(e){for(var o in e)new h(o,e[o],t);for(var r in t.objects)t.objects[r].unwrapProperties();n&&n(t),t.exec({type:g.idle})}))}else console.error("The QWebChannel expects a transport object with a send function and onmessage callback property. Given is: transport: "+Object(p["a"])(e)+", transport.send: "+Object(p["a"])(e.send))};function h(e,n,t){this.__id__=e,t.objects[e]=this,this.__objectSignals__={},this.__propertyCache__={};var o=this;function r(e,n){var r=e[0],i=e[1];o[r]={connect:function(e){"function"===typeof e?(o.__objectSignals__[i]=o.__objectSignals__[i]||[],o.__objectSignals__[i].push(e),n||"destroyed"===r||t.exec({type:g.connectToSignal,object:o.__id__,signal:i})):console.error("Bad callback given to connect to signal "+r)},disconnect:function(e){if("function"===typeof e){o.__objectSignals__[i]=o.__objectSignals__[i]||[];var a=o.__objectSignals__[i].indexOf(e);-1!==a?(o.__objectSignals__[i].splice(a,1),n||0!==o.__objectSignals__[i].length||t.exec({type:g.disconnectFromSignal,object:o.__id__,signal:i})):console.error("Cannot find connection of signal "+r+" to "+e.name)}else console.error("Bad callback given to disconnect from signal "+r)}}}function i(e,n){var t=o.__objectSignals__[e];t&&t.forEach((function(e){e.apply(e,n)}))}function a(e){var n=e[0],r=e[1];o[n]=function(){for(var e,n=[],i=0;i<arguments.length;++i){var a=arguments[i];"function"===typeof a?e=a:a instanceof h&&void 0!==t.objects[a.__id__]?n.push({id:a.__id__}):n.push(a)}t.exec({type:g.invokeMethod,object:o.__id__,method:r,args:n},(function(n){if(void 0!==n){var t=o.unwrapQObject(n);e&&e(t)}}))}}function c(e){var n=e[0],i=e[1],a=e[2];o.__propertyCache__[n]=e[3],a&&(1===a[0]&&(a[0]=i+"Changed"),r(a,!0)),Object.defineProperty(o,i,{configurable:!0,get:function(){var e=o.__propertyCache__[n];return void 0===e&&console.warn('Undefined value in property cache for property "'+i+'" in object '+o.__id__),e},set:function(e){if(void 0!==e){o.__propertyCache__[n]=e;var r=e;r instanceof h&&void 0!==t.objects[r.__id__]&&(r={id:r.__id__}),t.exec({type:g.setProperty,object:o.__id__,property:n,value:r})}else console.warn("Property setter for "+i+" called with undefined value!")}})}for(var s in this.unwrapQObject=function(e){if(e instanceof Array){for(var n=new Array(e.length),r=0;r<e.length;++r)n[r]=o.unwrapQObject(e[r]);return n}if(!e||!e["__QObject*__"]||void 0===e.id)return e;var i=e.id;if(t.objects[i])return t.objects[i];if(e.data){var a=new h(i,e.data,t);return a.destroyed.connect((function(){if(t.objects[i]===a){delete t.objects[i];var e=[];for(var n in a)e.push(n);for(var o in e)delete a[e[o]]}})),a.unwrapProperties(),a}console.error("Cannot unwrap unknown QObject "+i+" without data.")},this.unwrapProperties=function(){for(var e in o.__propertyCache__)o.__propertyCache__[e]=o.unwrapQObject(o.__propertyCache__[e])},this.propertyUpdate=function(e,n){for(var t in n){var r=n[t];o.__propertyCache__[t]=r}for(var a in e)i(a,e[a])},this.signalEmitted=function(e,n){i(e,this.unwrapQObject(n))},n.methods.forEach(a),n.properties.forEach(c),n.signals.forEach((function(e){r(e,!1)})),n.enums)o[s]=n.enums[s]}var _=v,b=function(){return navigator.userAgent.includes("QtWebEngine")}();function m(e,n){if(!e)throw new Error("[ASSERT]: ".concat(n||e))}function y(e){console.log("%c".concat(e),"font-weight: bold;")}function w(e){return function(n){var t=n.action,o=n.data,r=void 0===o?"":o,i=n.promise,a=void 0===i?null:i;return new Promise((function(n,o){return a&&a.reject&&a.resolve&&(n=a.resolve,o=a.reject),Object.keys(e).includes(t)?"function"!==typeof e[t]?o(new Error("function"===typeof e[t].connect?"[SENDER]: ".concat(t," is a Qt signal, not a method"):"[SENDER]: Missing function named ".concat(t," in QObject !"))):void e[t](r,n):o(new Error("[SENDER]: Unknown action name !"))}))}}function j(e){return function(n,t){return Object.keys(e).includes(n)?Object.keys(e[n]).includes("connect")?"function"!==typeof e[n].connect?reject(new Error("[LISTENER]: No Connect Function!")):void e[n].connect(t):reject(new Error("[LISTENER]: ".concat(n," is not a Qt signa!"))):reject(new Error("[LISTENER]: Unknown event name!"))}}function S(e){return function(n,t){return Object.keys(e).includes(n)?Object.keys(e[n]).includes("disconnect")?"function"!==typeof e[n].disconnect?reject(new Error("[LISTENER]: No Disconnect Function!")):void e[n].disconnect(t):reject(new Error("[LISTENER]: ".concat(n," is not a Qt signa!"))):reject(new Error("[LISTENER]: Unknown event name!"))}}var E=!1,O=function(e){var n=this,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){};e||m(e,"必须提供一个QT对象的名称！"),E||m(window&&window.qt&&window.qt.webChannelTransport,"'qt' 或者 'qt.webChannelTransport' 需要被 QtWebEngine 注入到页面中！"),E&&!b&&(window.qt={webChannelTransport:{send:function(){y("QWebChannel simulator activated !")},onmessage:function(){}}}),this.sendQueue=[],this.eventQueue=[],this.send=function(e){var t=e.action,o=e.data,r=void 0===o?"":o;return new Promise((function(e,o){n.sendQueue.push({action:t,data:r,promise:{resolve:e,reject:o}})}))},this.on=function(e,t){n.eventQueue.push({event:e,callback:t})},this.off=function(e,n){console.log("尚未初始化！")},new _(window.qt.webChannelTransport,(function(o){if(!Object.keys(o.objects).includes(e))return t(),console.error("[QTWEBCHANNEL]: Unknown QT Object !");var r=o.objects[e];n.send=w(r),n.on=j(r),n.off=S(r),n.sendQueue.length>0&&(n.sendQueue.forEach((function(e){n.send({action:e.action,data:e.data,promise:e.promise})})),n.sendQueue=[]),n.eventQueue.length>0&&(n.eventQueue.forEach((function(e){n.on(e.event,e.callback)})),n.eventQueue=[]),t()}))},k=O,x=new k("context");function Q(e){return x.send({action:"send_msg",data:e})}function M(e){x.on("SigReceviceMessageFromQT",e)}function T(e){x.on("SigReceviceMessageFromQT",e)}var C={add:M,remove:T},N={name:"Home",components:{},data:function(){return{msg:{sendMsg:"",receiveMsg:""}}},created:function(){this.unNewTest(),C.add(this.receive)},beforeDestroy:function(){C.remove(this.receive)},mounted:function(){},methods:{send:function(){var e=this;Q(this.msg.sendMsg).then((function(n){console.log(n);var t=e.dateToString(new Date);e.msg.receiveMsg+="[".concat(t,"] JS: ").concat(e.msg.sendMsg,"\n"),e.msg.sendMsg=""})).catch((function(e){console.error(e)}))},receive:function(e){var n=this.dateToString(new Date);this.msg.receiveMsg+="[".concat(n,"] QT: ").concat(e,"\n")},dateToString:function(e){var n=e.getFullYear(),t=(e.getMonth()+1).toString(),o=e.getDate().toString(),r=e.getHours().toString(),i=e.getMinutes().toString(),a=e.getSeconds().toString();1==t.length&&(t="0"+t),1==o.length&&(o="0"+o),1==r.length&&(r="0"+r),1==i.length&&(i="0"+i),1==a.length&&(a="0"+a);var c=n+"-"+t+"-"+o+" "+r+":"+i+":"+a;return c},unNewTest:function(){var e=this,n="这是一条测试QWebChannel部分尚未初始化的信息";Q(n).then((function(t){var o=e.dateToString(new Date);e.msg.receiveMsg+="[".concat(o,"] JS: ").concat(n,"\n"),e.msg.sendMsg=""})).catch((function(e){console.log(e)}))}}},P=N,R=Object(a["a"])(P,d,f,!1,null,null,null),U=R.exports;o["default"].use(l["a"]);var I=[{path:"/",name:"Home",component:U},{path:"/about",name:"About",component:function(){return t.e("about").then(t.bind(null,"f820"))}}],A=new l["a"]({routes:I}),L=A,D=t("2f62");o["default"].use(D["a"]);var J=new D["a"].Store({state:{},mutations:{},actions:{},modules:{}}),q=t("5c96"),F=t.n(q);t("0fae");o["default"].use(F.a),new o["default"]({router:L,store:J,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.e9b7da05.js.map