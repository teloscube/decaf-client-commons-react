var e=require("@decafhub/decaf-client"),n=require("js-cookie"),t=require("react");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=/*#__PURE__*/a(n),o=/*#__PURE__*/a(t),r=o.default.createContext({client:void 0});function l(e){return o.default.createElement("div",{className:"spinner-wrapper"},o.default.createElement("style",null,"\n    .spinner-wrapper {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      height: 100vh;\n      flex-direction: column;\n    }\n    .spinner-text {\n      color: "+(e.titleColor||"#255d91")+";\n    }\n    .spinner {\n      width: "+(e.size||"40px")+";\n      height: "+(e.size||"40px")+";\n      position: relative;\n      margin: 10px auto;\n    }\n\n    .double-bounce1,\n    .double-bounce2 {\n      width: 100%;\n      height: 100%;\n      border-radius: 50%;\n      background-color: "+(e.color||"#1890ff")+";\n      opacity: 0.6;\n      position: absolute;\n      top: 0;\n      left: 0;\n\n      -webkit-animation: sk-bounce 2s infinite ease-in-out;\n      animation: sk-bounce 2s infinite ease-in-out;\n    }\n\n    .double-bounce2 {\n      -webkit-animation-delay: -1s;\n      animation-delay: -1s;\n    }\n\n    @-webkit-keyframes sk-bounce {\n      0%,\n      100% {\n        -webkit-transform: scale(0);\n      }\n      50% {\n        -webkit-transform: scale(1);\n      }\n    }\n\n    @keyframes sk-bounce {\n      0%,\n      100% {\n        transform: scale(0);\n        -webkit-transform: scale(0);\n      }\n      50% {\n        transform: scale(1);\n        -webkit-transform: scale(1);\n      }\n    }\n  "),o.default.createElement("div",{className:"spinner"},o.default.createElement("div",{className:"double-bounce1"}),o.default.createElement("div",{className:"double-bounce2"})),e.title&&o.default.createElement("p",{className:"spinner-text"},e.title))}exports.DecafApp=function(n){var a=o.default.useState(void 0),c=a[0],s=a[1],u=o.default.useState(!0),f=u[0],d=u[1];return t.useEffect(function(){var n,t=(n=function(){var e=i.default.get("ember_simple_auth-session");if(e)try{var n,t=JSON.parse(e);return null==t||null==(n=t.authenticated)?void 0:n.token}catch(e){return void console.error("Can not parse authentication information!")}}())?e.buildDecafClient("",{token:n}):void 0;t?t.barista.get("/healthchecks/").then(function(){s(t),d(!1)}).catch(function(){s(void 0),d(!1)}):(d(!1),s(void 0))},[]),f?o.default.createElement(l,{title:"Please Wait..."}):void 0===c?(window.location.href="/webapps/waitress/production?next="+window.location.href,null):o.default.createElement(r.Provider,{value:{client:c}},n.children)},exports.DecafSpinner=l,exports.useDecaf=function(){return t.useContext(r)};
//# sourceMappingURL=index.js.map
