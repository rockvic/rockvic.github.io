(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8767],{84489:function(G){G.exports={linkGroup:"linkGroup___3u5k3"}},27322:function(G){G.exports={activitiesList:"activitiesList___1iz4w",username:"username___2CaQo",event:"event___37Bra",pageHeaderContent:"pageHeaderContent___1v9Rj",avatar:"avatar___2REGU",content:"content___2JXYM",contentTitle:"contentTitle___2ZQYk",extraContent:"extraContent___171XZ",statItem:"statItem___WnzK8",members:"members___pCbZL",member:"member___1PrAP",projectList:"projectList___1-phY",cardTitle:"cardTitle___i2mGR",projectGrid:"projectGrid___2_ET-",projectItemContent:"projectItemContent___1Af7z",datetime:"datetime___3wNS1",activeCard:"activeCard___2L47N"}},70347:function(){},68122:function(G,$,t){"use strict";t.r($),t.d($,{default:function(){return ee}});var h=t(13062),p=t(71230),r=t(89032),M=t(15746),Y=t(58024),j=t(39144),H=t(54421),Q=t(38272),de=t(95300),I=t(7277),ue=t(94233),z=t(51890),ve=t(71748),w=t(33860),T=t(72178),m=t(21010),B=t(73727),re=t(75362),le=t(30381),R=t.n(le),me=t(57663),a=t(71577),c=t(67294),o=t(49101),n=t(84489),l=t.n(n),e=t(85893),b=function(v){var i=v.links,Z=v.linkElement,W=v.onAdd;return(0,e.jsxs)("div",{className:l().linkGroup,children:[i.map(function(C){return(0,c.createElement)(Z,{key:"linkGroup-item-".concat(C.id||C.title),to:C.href,href:C.href},C.title)}),(0,e.jsxs)(a.Z,{size:"small",type:"primary",ghost:!0,onClick:W,children:[(0,e.jsx)(o.Z,{})," \u6DFB\u52A0"]})]})};b.defaultProps={links:[],onAdd:function(){},linkElement:"a"};var N=b,P=t(27322),s=t.n(P),g=t(3182),X=t(94043),y=t.n(X);function S(){return O.apply(this,arguments)}function O(){return O=(0,g.Z)(y().mark(function x(){return y().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,m.WY)("/api/project/notice"));case 1:case"end":return i.stop()}},x)})),O.apply(this,arguments)}function K(){return L.apply(this,arguments)}function L(){return L=(0,g.Z)(y().mark(function x(){return y().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,m.WY)("/api/activities"));case 1:case"end":return i.stop()}},x)})),L.apply(this,arguments)}function J(){return U.apply(this,arguments)}function U(){return U=(0,g.Z)(y().mark(function x(){return y().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.abrupt("return",(0,m.WY)("/api/fake_workplace_chart_data"));case 1:case"end":return i.stop()}},x)})),U.apply(this,arguments)}var q=[{title:"\u64CD\u4F5C\u4E00",href:""},{title:"\u64CD\u4F5C\u4E8C",href:""},{title:"\u64CD\u4F5C\u4E09",href:""},{title:"\u64CD\u4F5C\u56DB",href:""},{title:"\u64CD\u4F5C\u4E94",href:""},{title:"\u64CD\u4F5C\u516D",href:""}],se=function(v){var i=v.currentUser,Z=i&&Object.keys(i).length;return Z?(0,e.jsxs)("div",{className:s().pageHeaderContent,children:[(0,e.jsx)("div",{className:s().avatar,children:(0,e.jsx)(z.C,{size:"large",src:i.avatar})}),(0,e.jsxs)("div",{className:s().content,children:[(0,e.jsxs)("div",{className:s().contentTitle,children:["\u65E9\u5B89\uFF0C",i.name,"\uFF0C\u795D\u4F60\u5F00\u5FC3\u6BCF\u4E00\u5929\uFF01"]}),(0,e.jsxs)("div",{children:[i.title," |",i.group]})]})]}):(0,e.jsx)(w.Z,{avatar:!0,paragraph:{rows:1},active:!0})},ie=function(){return(0,e.jsxs)("div",{className:s().extraContent,children:[(0,e.jsx)("div",{className:s().statItem,children:(0,e.jsx)(I.Z,{title:"\u9879\u76EE\u6570",value:56})}),(0,e.jsx)("div",{className:s().statItem,children:(0,e.jsx)(I.Z,{title:"\u56E2\u961F\u5185\u6392\u540D",value:8,suffix:"/ 24"})}),(0,e.jsx)("div",{className:s().statItem,children:(0,e.jsx)(I.Z,{title:"\u9879\u76EE\u8BBF\u95EE",value:2223})})]})},_=function(){var v,i=(0,m.QT)(S),Z=i.loading,W=i.data,C=W===void 0?[]:W,te=(0,m.QT)(K),V=te.loading,ae=te.data,ce=ae===void 0?[]:ae,d=(0,m.QT)(J),A=d.data,E=function(f){var oe=f.template.split(/@\{([^{}]*)\}/gi).map(function(D){return f[D]?(0,e.jsx)("a",{href:f[D].link,children:f[D].name},f[D].name):D});return(0,e.jsx)(Q.ZP.Item,{children:(0,e.jsx)(Q.ZP.Item.Meta,{avatar:(0,e.jsx)(z.C,{src:f.user.avatar}),title:(0,e.jsxs)("span",{children:[(0,e.jsx)("a",{className:s().username,children:f.user.name}),"\xA0",(0,e.jsx)("span",{className:s().event,children:oe})]}),description:(0,e.jsx)("span",{className:s().datetime,title:f.updatedAt,children:R()(f.updatedAt).fromNow()})})},f.id)};return(0,e.jsx)(re.ZP,{content:(0,e.jsx)(se,{currentUser:{avatar:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png",name:"\u5434\u5F66\u7956",userid:"00000001",email:"antdesign@alipay.com",signature:"\u6D77\u7EB3\u767E\u5DDD\uFF0C\u6709\u5BB9\u4E43\u5927",title:"\u4EA4\u4E92\u4E13\u5BB6",group:"\u8682\u8681\u91D1\u670D\uFF0D\u67D0\u67D0\u67D0\u4E8B\u4E1A\u7FA4\uFF0D\u67D0\u67D0\u5E73\u53F0\u90E8\uFF0D\u67D0\u67D0\u6280\u672F\u90E8\uFF0DUED"}}),extraContent:(0,e.jsx)(ie,{}),children:(0,e.jsxs)(p.Z,{gutter:24,children:[(0,e.jsxs)(M.Z,{xl:16,lg:24,md:24,sm:24,xs:24,children:[(0,e.jsx)(j.Z,{className:s().projectList,style:{marginBottom:24},title:"\u8FDB\u884C\u4E2D\u7684\u9879\u76EE",bordered:!1,extra:(0,e.jsx)(B.rU,{to:"/",children:"\u5168\u90E8\u9879\u76EE"}),loading:Z,bodyStyle:{padding:0},children:C.map(function(u){return(0,e.jsx)(j.Z.Grid,{className:s().projectGrid,children:(0,e.jsxs)(j.Z,{bodyStyle:{padding:0},bordered:!1,children:[(0,e.jsx)(j.Z.Meta,{title:(0,e.jsxs)("div",{className:s().cardTitle,children:[(0,e.jsx)(z.C,{size:"small",src:u.logo}),(0,e.jsx)(B.rU,{to:u.href,children:u.title})]}),description:u.description}),(0,e.jsxs)("div",{className:s().projectItemContent,children:[(0,e.jsx)(B.rU,{to:u.memberLink,children:u.member||""}),u.updatedAt&&(0,e.jsx)("span",{className:s().datetime,title:u.updatedAt,children:R()(u.updatedAt).fromNow()})]})]})},u.id)})}),(0,e.jsx)(j.Z,{bodyStyle:{padding:0},bordered:!1,className:s().activeCard,title:"\u52A8\u6001",loading:V,children:(0,e.jsx)(Q.ZP,{loading:V,renderItem:function(f){return E(f)},dataSource:ce,className:s().activitiesList,size:"large"})})]}),(0,e.jsxs)(M.Z,{xl:8,lg:24,md:24,sm:24,xs:24,children:[(0,e.jsx)(j.Z,{style:{marginBottom:24},title:"\u5FEB\u901F\u5F00\u59CB / \u4FBF\u6377\u5BFC\u822A",bordered:!1,bodyStyle:{padding:0},children:(0,e.jsx)(N,{onAdd:function(){},links:q,linkElement:B.rU})}),(0,e.jsx)(j.Z,{style:{marginBottom:24},bordered:!1,title:"XX \u6307\u6570",loading:(A==null||(v=A.radarData)===null||v===void 0?void 0:v.length)===0,children:(0,e.jsx)("div",{className:s().chart,children:(0,e.jsx)(T.Fk,{height:343,data:(A==null?void 0:A.radarData)||[],angleField:"label",seriesField:"name",radiusField:"value",area:{visible:!1},point:{visible:!0},legend:{position:"bottom-center"}})})}),(0,e.jsx)(j.Z,{bodyStyle:{paddingTop:12,paddingBottom:12},bordered:!1,title:"\u56E2\u961F",loading:Z,children:(0,e.jsx)("div",{className:s().members,children:(0,e.jsx)(p.Z,{gutter:48,children:C.map(function(u){return(0,e.jsx)(M.Z,{span:12,children:(0,e.jsxs)(B.rU,{to:u.href,children:[(0,e.jsx)(z.C,{src:u.logo,size:"small"}),(0,e.jsx)("span",{className:s().member,children:u.member})]})},"members-item-".concat(u.id))})})})})]})]})})},ee=_},39144:function(G,$,t){"use strict";t.d($,{Z:function(){return me}});var h=t(96156),p=t(22122),r=t(67294),M=t(94184),Y=t.n(M),j=t(98423),H=t(65632),Q=function(a,c){var o={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&c.indexOf(n)<0&&(o[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(a);l<n.length;l++)c.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(a,n[l])&&(o[n[l]]=a[n[l]]);return o},de=function(c){var o=c.prefixCls,n=c.className,l=c.hoverable,e=l===void 0?!0:l,b=Q(c,["prefixCls","className","hoverable"]);return r.createElement(H.C,null,function(N){var P=N.getPrefixCls,s=P("card",o),g=Y()("".concat(s,"-grid"),n,(0,h.Z)({},"".concat(s,"-grid-hoverable"),e));return r.createElement("div",(0,p.Z)({},b,{className:g}))})},I=de,ue=function(a,c){var o={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&c.indexOf(n)<0&&(o[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(a);l<n.length;l++)c.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(a,n[l])&&(o[n[l]]=a[n[l]]);return o},z=function(c){return r.createElement(H.C,null,function(o){var n=o.getPrefixCls,l=c.prefixCls,e=c.className,b=c.avatar,N=c.title,P=c.description,s=ue(c,["prefixCls","className","avatar","title","description"]),g=n("card",l),X=Y()("".concat(g,"-meta"),e),y=b?r.createElement("div",{className:"".concat(g,"-meta-avatar")},b):null,S=N?r.createElement("div",{className:"".concat(g,"-meta-title")},N):null,O=P?r.createElement("div",{className:"".concat(g,"-meta-description")},P):null,K=S||O?r.createElement("div",{className:"".concat(g,"-meta-detail")},S,O):null;return r.createElement("div",(0,p.Z)({},s,{className:X}),y,K)})},ve=z,w=t(51752),T=t(71230),m=t(15746),B=t(97647),re=function(a,c){var o={};for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&c.indexOf(n)<0&&(o[n]=a[n]);if(a!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,n=Object.getOwnPropertySymbols(a);l<n.length;l++)c.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(a,n[l])&&(o[n[l]]=a[n[l]]);return o};function le(a){var c=a.map(function(o,n){return r.createElement("li",{style:{width:"".concat(100/a.length,"%")},key:"action-".concat(n)},r.createElement("span",null,o))});return c}var R=r.forwardRef(function(a,c){var o,n,l=r.useContext(H.E_),e=l.getPrefixCls,b=l.direction,N=r.useContext(B.Z),P=function(ne){var F;(F=a.onTabChange)===null||F===void 0||F.call(a,ne)},s=function(){var ne;return r.Children.forEach(a.children,function(F){F&&F.type&&F.type===I&&(ne=!0)}),ne},g=a.prefixCls,X=a.className,y=a.extra,S=a.headStyle,O=S===void 0?{}:S,K=a.bodyStyle,L=K===void 0?{}:K,J=a.title,U=a.loading,q=a.bordered,se=q===void 0?!0:q,ie=a.size,_=a.type,ee=a.cover,x=a.actions,v=a.tabList,i=a.children,Z=a.activeTabKey,W=a.defaultActiveTabKey,C=a.tabBarExtraContent,te=a.hoverable,V=a.tabProps,ae=V===void 0?{}:V,ce=re(a,["prefixCls","className","extra","headStyle","bodyStyle","title","loading","bordered","size","type","cover","actions","tabList","children","activeTabKey","defaultActiveTabKey","tabBarExtraContent","hoverable","tabProps"]),d=e("card",g),A=L.padding===0||L.padding==="0px"?{padding:24}:void 0,E=r.createElement("div",{className:"".concat(d,"-loading-block")}),u=r.createElement("div",{className:"".concat(d,"-loading-content"),style:A},r.createElement(T.Z,{gutter:8},r.createElement(m.Z,{span:22},E)),r.createElement(T.Z,{gutter:8},r.createElement(m.Z,{span:8},E),r.createElement(m.Z,{span:15},E)),r.createElement(T.Z,{gutter:8},r.createElement(m.Z,{span:6},E),r.createElement(m.Z,{span:18},E)),r.createElement(T.Z,{gutter:8},r.createElement(m.Z,{span:13},E),r.createElement(m.Z,{span:9},E)),r.createElement(T.Z,{gutter:8},r.createElement(m.Z,{span:4},E),r.createElement(m.Z,{span:3},E),r.createElement(m.Z,{span:16},E))),f=Z!==void 0,oe=(0,p.Z)((0,p.Z)({},ae),(o={},(0,h.Z)(o,f?"activeKey":"defaultActiveKey",f?Z:W),(0,h.Z)(o,"tabBarExtraContent",C),o)),D,fe=v&&v.length?r.createElement(w.Z,(0,p.Z)({size:"large"},oe,{className:"".concat(d,"-head-tabs"),onChange:P}),v.map(function(k){return r.createElement(w.Z.TabPane,{tab:k.tab,disabled:k.disabled,key:k.key})})):null;(J||y||fe)&&(D=r.createElement("div",{className:"".concat(d,"-head"),style:O},r.createElement("div",{className:"".concat(d,"-head-wrapper")},J&&r.createElement("div",{className:"".concat(d,"-head-title")},J),y&&r.createElement("div",{className:"".concat(d,"-extra")},y)),fe));var xe=ee?r.createElement("div",{className:"".concat(d,"-cover")},ee):null,ge=r.createElement("div",{className:"".concat(d,"-body"),style:L},U?u:i),ye=x&&x.length?r.createElement("ul",{className:"".concat(d,"-actions")},le(x)):null,Ee=(0,j.Z)(ce,["onTabChange"]),he=ie||N,je=Y()(d,(n={},(0,h.Z)(n,"".concat(d,"-loading"),U),(0,h.Z)(n,"".concat(d,"-bordered"),se),(0,h.Z)(n,"".concat(d,"-hoverable"),te),(0,h.Z)(n,"".concat(d,"-contain-grid"),s()),(0,h.Z)(n,"".concat(d,"-contain-tabs"),v&&v.length),(0,h.Z)(n,"".concat(d,"-").concat(he),he),(0,h.Z)(n,"".concat(d,"-type-").concat(_),!!_),(0,h.Z)(n,"".concat(d,"-rtl"),b==="rtl"),n),X);return r.createElement("div",(0,p.Z)({ref:c},Ee,{className:je}),D,xe,ge,ye)});R.Grid=I,R.Meta=ve;var me=R},58024:function(G,$,t){"use strict";var h=t(38663),p=t.n(h),r=t(70347),M=t.n(r),Y=t(18106),j=t(13062),H=t(89032)}}]);
