(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{117:function(e,t,n){},118:function(e,t,n){"use strict";n.d(t,"a",function(){return y});var a=n(22),c=n(26),r=n(5),o=n(9),i=n(23),s=n(10),l=n(11),u=n(12),p=n(1),d=n.n(p),f=n(4),m=n.n(f),h=n(109),y=(n(117),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(c)))).addonRef=d.a.createRef(),n.inputRef=d.a.createRef(),n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){if(this.addonRef.current&&this.inputRef.current){var e=window.getComputedStyle(this.addonRef.current,null);this.inputRef.current.style.paddingRight="".concat(this.addonRef.current.clientWidth+2*parseInt(e.right,10),"px")}}},{key:"render",value:function(){var e,t=this.props,n=t.prefixCls,o=t.className,i=t.style,s=t.size,l=t.type,u=t.preIcon,p=t.addonAfter,f=Object(r.a)(t,["prefixCls","className","style","size","type","preIcon","addonAfter"]),y=m()(n,o,(e={},Object(c.a)(e,"".concat(n,"-").concat(s),s),Object(c.a)(e,"".concat(n,"-addon"),p),Object(c.a)(e,"disabled",this.props.disabled),e));return d.a.createElement("div",{className:y,style:i},d.a.createElement(h.a,{type:u}),d.a.createElement("input",Object(a.a)({ref:this.inputRef,type:l},f,{className:m()("".concat(n,"-inner"))})),p&&d.a.createElement("span",{className:"".concat(n,"-addon-after"),ref:this.addonRef},p))}}]),t}(d.a.Component));y.defaultProps={prefixCls:"w-input",preIcon:null,type:"text",size:"default"}},124:function(e,t,n){},138:function(e,t,n){"use strict";var a=n(6),c=n(1),r=n.n(c),o=n(18),i=n.n(o),s=n(4),l=n.n(s),u=n(22),p=n(5),d=n(9),f=n(23),m=n(10),h=n(11),y=n(12),b=n(133),v={},O={},g=function(e){function t(){var e,n;Object(d.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(c)))).state={notifys:{}},n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"create",value:function(e){var t=this,n=e.placement,a=e.key;v[n]||(v[n]={}),e.isOpen=!1,v[n][a]=e,e.duration&&(O[a]=setTimeout(function(){t.closed(a,n)},e.duration)),this.setState({notifys:v,placement:n},function(){v[n][a].isOpen=!0,t.setState({notifys:v})})}},{key:"closed",value:function(e,t){if(e&&t&&v[t][e]){v[t][e].isOpen=!1;var n=v[t][e];this.setState({notifys:v},function(){clearTimeout(O[e]),delete O[e],delete v[t][e],n&&n.willUnmount&&n.willUnmount(n,v)})}}},{key:"render",value:function(){var e=this,t=this.props.prefixCls,n=this.state.placement;return r.a.createElement(r.a.Fragment,null,n&&Object.keys(this.state.notifys[n]).map(function(a){var c=e.state.notifys[n][a],o=c.description,i=c.isOpen,s=Object(p.a)(c,["description","isOpen"]);return"open"===s.type&&delete s.type,r.a.createElement(b.a,Object(u.a)({className:l()(t),key:a,useButton:!1,width:320},s,{usePortal:!1,hasBackdrop:!1,isOpen:i,content:o}))}))}}]),t}(r.a.Component);g.defaultProps={prefixCls:"w-notify",placement:"topRight"};n(124);n.d(t,"a",function(){return w});var k={},j={};function w(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"open";if(e.placement||(e.placement="topRight"),e.type=t,!e.icon&&null!==e.icon)switch(e.type){case"success":e.icon="circle-check";break;case"warning":e.icon="warning";break;case"info":e.icon="information";break;case"error":e.icon="circle-close"}switch(e.type){case"info":e.type="primary";break;case"error":e.type="danger"}if(e.placement&&!k[e.placement]){var n=document.createElement("div");document.body.appendChild(n),n.className=l()("w-notify-warpper",e.placement),j[e.placement]=n,k[e.placement]=i.a.render(r.a.createElement(g,null),n)}null!==e.duration&&(e.duration=1e3*(e.duration||4.5)),k[e.placement]&&k[e.placement].create(Object(a.a)({},e,{duration:e.duration,key:parseInt(String(1e15*Math.random()),10).toString(36),willUnmount:function(t,n){t&&(t.onClose&&t.onClose(),0===Object.keys(n[e.placement]).length&&k[e.placement]&&(delete k[e.placement],j[e.placement]&&document.body.removeChild(j[e.placement])))}}))}["open","success","warning","info","error"].forEach(function(e){w[e]=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return w(t,e)}})},181:function(e,t,n){
/*!
 * @uiw/copy-to-clipboard v1.0.8
 * Copy to clipboard.
 * 
 * Copyright (c) 2019 Kenny Wang
 * https://github.com/uiw-react/copy-to-clipboard.git
 * 
 * Licensed under the MIT license.
 */
e.exports=function(){"use strict";return function(e,t){const n=document.createElement("textarea");n.value=e,n.setAttribute("readonly",""),n.style={position:"absolute",left:"-9999px"},document.body.appendChild(n);const a=document.getSelection().rangeCount>0&&document.getSelection().getRangeAt(0);n.select();try{const e=!!document.execCommand("copy");t&&t(e)}catch(e){t&&t(!1)}document.body.removeChild(n),a&&(document.getSelection().removeAllRanges(),document.getSelection().addRange(a))}}()},182:function(e,t,n){},327:function(e,t,n){"use strict";n.d(t,"a",function(){return m});var a=n(6),c=n(5),r=n(9),o=n(23),i=n(10),s=n(11),l=n(12),u=n(1),p=n.n(u),d=n(181),f=n.n(d),m=(n(182),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(o.a)(t,[{key:"onClick",value:function(e){var t=this.props,n=t.onClick,a=t.text;if(!a)return n("",!1,e);f()(a,function(t){n(a,t,e)})}},{key:"render",value:function(){var e=this.props,t=e.prefixCls,n=e.text,r=e.children,o=Object(c.a)(e,["prefixCls","text","children"]),i=Object(a.a)({},o,{onClick:this.onClick.bind(this),className:t});return p.a.createElement("a",i,p.a.createElement("span",{className:"".concat(t,"-select")},n),r)}}]),t}(p.a.Component));m.defaultProps={text:"",prefixCls:"w-copy-to-clipboard",onClick:function(){return null}}},702:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return k});var a=n(43),c=n.n(a),r=n(111),o=n.n(r),i=n(13),s=n.n(i),l=n(14),u=n.n(l),p=n(15),d=n.n(p),f=n(16),m=n.n(f),h=n(17),y=n.n(h),b=n(109),v=n(327),O=n(138),g=n(118),k=function(e){function t(){var e,n;s()(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=d()(this,(e=m()(t)).call.apply(e,[this].concat(c)))).path="packages/core/src/colors/README.md",n.dependencies={Icon:b.a,CopyToClipboard:v.a,Notify:O.a,Input:g.a},n}var a;return y()(t,e),u()(t,[{key:"renderPage",value:(a=o()(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(394).then(n.t.bind(null,656,7));case 2:return t=e.sent,e.abrupt("return",t.default||t);case 4:case"end":return e.stop()}},e)})),function(){return a.apply(this,arguments)})}]),t}(n(112).a)}}]);