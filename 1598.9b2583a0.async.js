(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1598],{11965:function($e,pe,D){"use strict";D.d(pe,{Z:function(){return ae}});var b=D(82961);function ae(L,V){var p=typeof Symbol!="undefined"&&L[Symbol.iterator]||L["@@iterator"];if(!p){if(Array.isArray(L)||(p=(0,b.Z)(L))||V&&L&&typeof L.length=="number"){p&&(L=p);var F=0,w=function(){};return{s:w,n:function(){return F>=L.length?{done:!0}:{done:!1,value:L[F++]}},e:function(A){throw A},f:w}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var P=!0,M=!1,G;return{s:function(){p=p.call(L)},n:function(){var A=p.next();return P=A.done,A},e:function(A){M=!0,G=A},f:function(){try{!P&&p.return!=null&&p.return()}finally{if(M)throw G}}}}},2016:function($e,pe,D){"use strict";D.d(pe,{Z:function(){return Ae}});var b=D(6610),ae=D(5991),L=D(10379),V=D(60446),p=D(90484),F=D(67294),w=D(75164),P=D(59015),M=D(98924),G=D(74204);function Z(I){var S=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!I)return{};var v=S.element,d=v===void 0?document.body:v,r={},s=Object.keys(I);return s.forEach(function(l){r[l]=d.style[l]}),s.forEach(function(l){d.style[l]=I[l]}),r}var A=Z;function Ie(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var q={},Te=function(I){if(!(!Ie()&&!I)){var S="ant-scrolling-effect",v=new RegExp("".concat(S),"g"),d=document.body.className;if(I){if(!v.test(d))return;A(q),q={},document.body.className=d.replace(v,"").trim();return}var r=(0,G.Z)();if(r&&(q=A({position:"relative",width:"calc(100% - ".concat(r,"px)")}),!v.test(d))){var s="".concat(d," ").concat(S);document.body.className=s.trim()}}},ee=D(85061),k=[],Oe="ant-scrolling-effect",le=new RegExp("".concat(Oe),"g"),ge=0,ie=new Map,We=(0,ae.Z)(function I(S){var v=this;(0,b.Z)(this,I),this.lockTarget=void 0,this.options=void 0,this.getContainer=function(){var d;return(d=v.options)===null||d===void 0?void 0:d.container},this.reLock=function(d){var r=k.find(function(s){var l=s.target;return l===v.lockTarget});r&&v.unLock(),v.options=d,r&&(r.options=d,v.lock())},this.lock=function(){var d;if(!k.some(function(g){var y=g.target;return y===v.lockTarget})){if(k.some(function(g){var y,E=g.options;return(E==null?void 0:E.container)===((y=v.options)===null||y===void 0?void 0:y.container)})){k=[].concat((0,ee.Z)(k),[{target:v.lockTarget,options:v.options}]);return}var r=0,s=((d=v.options)===null||d===void 0?void 0:d.container)||document.body;(s===document.body&&window.innerWidth-document.documentElement.clientWidth>0||s.scrollHeight>s.clientHeight)&&(r=(0,G.Z)());var l=s.className;if(k.filter(function(g){var y,E=g.options;return(E==null?void 0:E.container)===((y=v.options)===null||y===void 0?void 0:y.container)}).length===0&&ie.set(s,A({width:r!==0?"calc(100% - ".concat(r,"px)"):void 0,overflow:"hidden",overflowX:"hidden",overflowY:"hidden"},{element:s})),!le.test(l)){var N="".concat(l," ").concat(Oe);s.className=N.trim()}k=[].concat((0,ee.Z)(k),[{target:v.lockTarget,options:v.options}])}},this.unLock=function(){var d,r=k.find(function(N){var g=N.target;return g===v.lockTarget});if(k=k.filter(function(N){var g=N.target;return g!==v.lockTarget}),!(!r||k.some(function(N){var g,y=N.options;return(y==null?void 0:y.container)===((g=r.options)===null||g===void 0?void 0:g.container)}))){var s=((d=v.options)===null||d===void 0?void 0:d.container)||document.body,l=s.className;!le.test(l)||(A(ie.get(s),{element:s}),ie.delete(s),s.className=s.className.replace(le,"").trim())}},this.lockTarget=ge++,this.options=S}),U=0,oe=(0,M.Z)();function He(){return 0}var ve={},te=function(S){if(!oe)return null;if(S){if(typeof S=="string")return document.querySelectorAll(S)[0];if(typeof S=="function")return S();if((0,p.Z)(S)==="object"&&S instanceof window.HTMLElement)return S}return document.body},Le=function(I){(0,L.Z)(v,I);var S=(0,V.Z)(v);function v(d){var r;return(0,b.Z)(this,v),r=S.call(this,d),r.container=void 0,r.componentRef=F.createRef(),r.rafId=void 0,r.scrollLocker=void 0,r.renderComponent=void 0,r.updateScrollLocker=function(s){var l=s||{},N=l.visible,g=r.props,y=g.getContainer,E=g.visible;E&&E!==N&&oe&&te(y)!==r.scrollLocker.getContainer()&&r.scrollLocker.reLock({container:te(y)})},r.updateOpenCount=function(s){var l=s||{},N=l.visible,g=l.getContainer,y=r.props,E=y.visible,de=y.getContainer;E!==N&&oe&&te(de)===document.body&&(E&&!N?U+=1:s&&(U-=1));var be=typeof de=="function"&&typeof g=="function";(be?de.toString()!==g.toString():de!==g)&&r.removeCurrentContainer()},r.attachToParent=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;if(s||r.container&&!r.container.parentNode){var l=te(r.props.getContainer);return l?(l.appendChild(r.container),!0):!1}return!0},r.getContainer=function(){return oe?(r.container||(r.container=document.createElement("div"),r.attachToParent(!0)),r.setWrapperClassName(),r.container):null},r.setWrapperClassName=function(){var s=r.props.wrapperClassName;r.container&&s&&s!==r.container.className&&(r.container.className=s)},r.removeCurrentContainer=function(){var s,l;(s=r.container)===null||s===void 0||(l=s.parentNode)===null||l===void 0||l.removeChild(r.container)},r.switchScrollingEffect=function(){U===1&&!Object.keys(ve).length?(Te(),ve=A({overflow:"hidden",overflowX:"hidden",overflowY:"hidden"})):U||(A(ve),ve={},Te(!0))},r.scrollLocker=new We({container:te(d.getContainer)}),r}return(0,ae.Z)(v,[{key:"componentDidMount",value:function(){var r=this;this.updateOpenCount(),this.attachToParent()||(this.rafId=(0,w.Z)(function(){r.forceUpdate()}))}},{key:"componentDidUpdate",value:function(r){this.updateOpenCount(r),this.updateScrollLocker(r),this.setWrapperClassName(),this.attachToParent()}},{key:"componentWillUnmount",value:function(){var r=this.props,s=r.visible,l=r.getContainer;oe&&te(l)===document.body&&(U=s&&U?U-1:U),this.removeCurrentContainer(),w.Z.cancel(this.rafId)}},{key:"render",value:function(){var r=this.props,s=r.children,l=r.forceRender,N=r.visible,g=null,y={getOpenCount:function(){return U},getContainer:this.getContainer,switchScrollingEffect:this.switchScrollingEffect,scrollLocker:this.scrollLocker};return(l||N||this.componentRef.current)&&(g=F.createElement(P.Z,{getContainer:this.getContainer,ref:this.componentRef},s(y))),g}}]),v}(F.Component),Ae=Le},29405:function($e,pe,D){"use strict";D.d(pe,{J$:function(){return lt},ZP:function(){return vt},kY:function(){return Xe}});var b=D(67294);/*! *****************************************************************************
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
***************************************************************************** */function ae(e,o,t,i){function a(n){return n instanceof t?n:new t(function(f){f(n)})}return new(t||(t=Promise))(function(n,f){function m(h){try{u(i.next(h))}catch(R){f(R)}}function T(h){try{u(i.throw(h))}catch(R){f(R)}}function u(h){h.done?n(h.value):a(h.value).then(m,T)}u((i=i.apply(e,o||[])).next())})}function L(e,o){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,a,n,f;return f={next:m(0),throw:m(1),return:m(2)},typeof Symbol=="function"&&(f[Symbol.iterator]=function(){return this}),f;function m(u){return function(h){return T([u,h])}}function T(u){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,a&&(n=u[0]&2?a.return:u[0]?a.throw||((n=a.return)&&n.call(a),0):a.next)&&!(n=n.call(a,u[1])).done)return n;switch(a=0,n&&(u=[u[0]&2,n.value]),u[0]){case 0:case 1:n=u;break;case 4:return t.label++,{value:u[1],done:!1};case 5:t.label++,a=u[1],u=[0];continue;case 7:u=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!n||u[1]>n[0]&&u[1]<n[3])){t.label=u[1];break}if(u[0]===6&&t.label<n[1]){t.label=n[1],n=u;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(u);break}n[2]&&t.ops.pop(),t.trys.pop();continue}u=o.call(e,t)}catch(h){u=[6,h],a=0}finally{i=n=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}var V=function(){},p=V(),F=Object,w=function(e){return e===p},P=function(e){return typeof e=="function"},M=function(e,o){return F.assign({},e,o)},G="undefined",Z=function(){return typeof window!=G},A=function(){return typeof document!=G},Ie=function(){return Z()&&typeof window.requestAnimationFrame!=G},q=new WeakMap,Te=0,ee=function(e){var o=typeof e,t=e&&e.constructor,i=t==Date,a,n;if(F(e)===e&&!i&&t!=RegExp){if(a=q.get(e),a)return a;if(a=++Te+"~",q.set(e,a),t==Array){for(a="@",n=0;n<e.length;n++)a+=ee(e[n])+",";q.set(e,a)}if(t==F){a="#";for(var f=F.keys(e).sort();!w(n=f.pop());)w(e[n])||(a+=n+":"+ee(e[n])+",");q.set(e,a)}}else a=i?e.toJSON():o=="symbol"?e.toString():o=="string"?JSON.stringify(e):""+e;return a},k=!0,Oe=function(){return k},le=Z(),ge=A(),ie=le&&window.addEventListener?window.addEventListener.bind(window):V,We=ge?document.addEventListener.bind(document):V,U=le&&window.removeEventListener?window.removeEventListener.bind(window):V,oe=ge?document.removeEventListener.bind(document):V,He=function(){var e=ge&&document.visibilityState;return w(e)||e!=="hidden"},ve=function(e){return We("visibilitychange",e),ie("focus",e),function(){oe("visibilitychange",e),U("focus",e)}},te=function(e){var o=function(){k=!0,e()},t=function(){k=!1};return ie("online",o),ie("offline",t),function(){U("online",o),U("offline",t)}},Le={isOnline:Oe,isVisible:He},Ae={initFocus:ve,initReconnect:te},I=!Z()||"Deno"in window,S=function(e){return Ie()?window.requestAnimationFrame(e):setTimeout(e,1)},v=I?b.useEffect:b.useLayoutEffect,d=typeof navigator!="undefined"&&navigator.connection,r=!I&&d&&(["slow-2g","2g"].includes(d.effectiveType)||d.saveData),s=function(e){if(P(e))try{e=e()}catch(i){e=""}var o=[].concat(e);e=typeof e=="string"?e:(Array.isArray(e)?e.length:e)?ee(e):"";var t=e?"$swr$"+e:"";return[e,o,t]},l=new WeakMap,N=0,g=1,y=2,E=function(e,o,t,i,a,n,f){f===void 0&&(f=!0);var m=l.get(e),T=m[0],u=m[1],h=m[3],R=T[o],C=u[o];if(f&&C)for(var Y=0;Y<C.length;++Y)C[Y](t,i,a);return n&&(delete h[o],R&&R[0])?R[0](y).then(function(){return e.get(o)}):e.get(o)},de=0,be=function(){return++de},je=function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];return ae(void 0,void 0,void 0,function(){var t,i,a,n,f,m,T,u,h,R,C,Y,De,_,O,c,ye,ue,X,z,se;return L(this,function(ne){switch(ne.label){case 0:if(t=e[0],i=e[1],a=e[2],n=e[3],f=typeof n=="boolean"?{revalidate:n}:n||{},m=w(f.populateCache)?!0:f.populateCache,T=f.revalidate!==!1,u=f.rollbackOnError!==!1,h=f.optimisticData,R=s(i),C=R[0],Y=R[2],!C)return[2];if(De=l.get(t),_=De[2],e.length<3)return[2,E(t,C,t.get(C),p,p,T,!0)];if(O=a,ye=be(),_[C]=[ye,0],ue=!w(h),X=t.get(C),ue&&(z=P(h)?h(X):h,t.set(C,z),E(t,C,z)),P(O))try{O=O(t.get(C))}catch(ce){c=ce}return O&&P(O.then)?[4,O.catch(function(ce){c=ce})]:[3,2];case 1:if(O=ne.sent(),ye!==_[C][0]){if(c)throw c;return[2,O]}else c&&ue&&u&&(m=!0,O=X,t.set(C,X));ne.label=2;case 2:return m&&(c||(P(m)&&(O=m(O,X)),t.set(C,O)),t.set(Y,M(t.get(Y),{error:c}))),_[C][1]=be(),[4,E(t,C,O,c,p,T,!!m)];case 3:if(se=ne.sent(),c)throw c;return[2,m?se:O]}})})},Be=function(e,o){for(var t in e)e[t][0]&&e[t][0](o)},ze=function(e,o){if(!l.has(e)){var t=M(Ae,o),i={},a=je.bind(p,e),n=V;if(l.set(e,[i,{},{},{},a]),!I){var f=t.initFocus(setTimeout.bind(p,Be.bind(p,i,N))),m=t.initReconnect(setTimeout.bind(p,Be.bind(p,i,g)));n=function(){f&&f(),m&&m(),l.delete(e)}}return[e,a,n]}return[e,l.get(e)[4]]},at=function(e,o,t,i,a){var n=t.errorRetryCount,f=a.retryCount,m=~~((Math.random()+.5)*(1<<(f<8?f:8)))*t.errorRetryInterval;!w(n)&&f>n||setTimeout(i,m,a)},Ke=ze(new Map),Je=Ke[0],it=Ke[1],Ge=M({onLoadingSlow:V,onSuccess:V,onError:V,onErrorRetry:at,onDiscarded:V,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:r?1e4:5e3,focusThrottleInterval:5*1e3,dedupingInterval:2*1e3,loadingTimeout:r?5e3:3e3,compare:function(e,o){return ee(e)==ee(o)},isPaused:function(){return!1},cache:Je,mutate:it,fallback:{}},Le),Ye=function(e,o){var t=M(e,o);if(o){var i=e.use,a=e.fallback,n=o.use,f=o.fallback;i&&n&&(t.use=i.concat(n)),a&&f&&(t.fallback=M(a,f))}return t},xe=(0,b.createContext)({}),ot=function(e){var o=e.value,t=Ye((0,b.useContext)(xe),o),i=o&&o.provider,a=(0,b.useState)(function(){return i?ze(i(t.cache||Je),o):p})[0];return a&&(t.cache=a[0],t.mutate=a[1]),v(function(){return a?a[2]:p},[]),(0,b.createElement)(xe.Provider,M(e,{value:t}))},ut=function(e,o){var t=(0,b.useState)({})[1],i=(0,b.useRef)(e),a=(0,b.useRef)({data:!1,error:!1,isValidating:!1}),n=(0,b.useCallback)(function(f){var m=!1,T=i.current;for(var u in f){var h=u;T[h]!==f[h]&&(T[h]=f[h],a.current[h]&&(m=!0))}m&&!o.current&&t({})},[]);return v(function(){i.current=e}),[i,a.current,n]},st=function(e){return P(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(e[1]===null?e[2]:e[1])||{}]},Xe=function(){return M(Ge,(0,b.useContext)(xe))},ct=function(e){return function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var a=Xe(),n=st(t),f=n[0],m=n[1],T=n[2],u=Ye(a,T),h=e,R=u.use;if(R)for(var C=R.length;C-- >0;)h=R[C](h);return h(f,m||u.fetcher,u)}},Qe=function(e,o,t){var i=o[e]||(o[e]=[]);return i.push(t),function(){var a=i.indexOf(t);a>=0&&(i[a]=i[i.length-1],i.pop())}},Ve={dedupe:!0},ft=function(e,o,t){var i=t.cache,a=t.compare,n=t.fallbackData,f=t.suspense,m=t.revalidateOnMount,T=t.refreshInterval,u=t.refreshWhenHidden,h=t.refreshWhenOffline,R=l.get(i),C=R[0],Y=R[1],De=R[2],_=R[3],O=s(e),c=O[0],ye=O[1],ue=O[2],X=(0,b.useRef)(!1),z=(0,b.useRef)(!1),se=(0,b.useRef)(c),ne=(0,b.useRef)(o),ce=(0,b.useRef)(t),W=function(){return ce.current},Me=function(){return W().isVisible()&&W().isOnline()},Ne=function(j){return i.set(ue,M(i.get(ue),j))},qe=i.get(c),dt=w(n)?t.fallback[c]:n,Q=w(qe)?dt:qe,et=i.get(ue)||{},Ce=et.error,tt=!X.current,nt=function(){return tt&&!w(m)?m:W().isPaused()?!1:f?w(Q)?!1:t.revalidateIfStale:w(Q)||t.revalidateIfStale},ht=function(){return!c||!o?!1:et.isValidating?!0:tt&&nt()},Pe=ht(),Ue=ut({data:Q,error:Ce,isValidating:Pe},z),he=Ue[0],Fe=Ue[1],ke=Ue[2],fe=(0,b.useCallback)(function(j){return ae(void 0,void 0,void 0,function(){var $,H,B,we,Ee,K,x,re,J,Ze,Re,me,_e;return L(this,function(Se){switch(Se.label){case 0:if($=ne.current,!c||!$||z.current||W().isPaused())return[2,!1];we=!0,Ee=j||{},K=!_[c]||!Ee.dedupe,x=function(){return!z.current&&c===se.current&&X.current},re=function(){var rt=_[c];rt&&rt[1]===B&&delete _[c]},J={isValidating:!1},Ze=function(){Ne({isValidating:!1}),x()&&ke(J)},Ne({isValidating:!0}),ke({isValidating:!0}),Se.label=1;case 1:return Se.trys.push([1,3,,4]),K&&(E(i,c,he.current.data,he.current.error,!0),t.loadingTimeout&&!i.get(c)&&setTimeout(function(){we&&x()&&W().onLoadingSlow(c,t)},t.loadingTimeout),_[c]=[$.apply(void 0,ye),be()]),_e=_[c],H=_e[0],B=_e[1],[4,H];case 2:return H=Se.sent(),K&&setTimeout(re,t.dedupingInterval),!_[c]||_[c][1]!==B?(K&&x()&&W().onDiscarded(c),[2,!1]):(Ne({error:p}),J.error=p,Re=De[c],!w(Re)&&(B<=Re[0]||B<=Re[1]||Re[1]===0)?(Ze(),K&&x()&&W().onDiscarded(c),[2,!1]):(a(he.current.data,H)?J.data=he.current.data:J.data=H,a(i.get(c),H)||i.set(c,H),K&&x()&&W().onSuccess(H,c,t),[3,4]));case 3:return me=Se.sent(),re(),W().isPaused()||(Ne({error:me}),J.error=me,K&&x()&&(W().onError(me,c,t),(typeof t.shouldRetryOnError=="boolean"&&t.shouldRetryOnError||P(t.shouldRetryOnError)&&t.shouldRetryOnError(me))&&Me()&&W().onErrorRetry(me,c,t,fe,{retryCount:(Ee.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return we=!1,Ze(),x()&&K&&E(i,c,J.data,J.error,!1),[2,!0]}})})},[c]),mt=(0,b.useCallback)(je.bind(p,i,function(){return se.current}),[]);if(v(function(){ne.current=o,ce.current=t}),v(function(){if(!!c){var j=c!==se.current,$=fe.bind(p,Ve),H=function(x,re,J){ke(M({error:re,isValidating:J},a(he.current.data,x)?p:{data:x}))},B=0,we=function(x){if(x==N){var re=Date.now();W().revalidateOnFocus&&re>B&&Me()&&(B=re+W().focusThrottleInterval,$())}else if(x==g)W().revalidateOnReconnect&&Me()&&$();else if(x==y)return fe()},Ee=Qe(c,Y,H),K=Qe(c,C,we);return z.current=!1,se.current=c,X.current=!0,j&&ke({data:Q,error:Ce,isValidating:Pe}),nt()&&(w(Q)||I?$():S($)),function(){z.current=!0,Ee(),K()}}},[c,fe]),v(function(){var j;function $(){var B=P(T)?T(Q):T;B&&j!==-1&&(j=setTimeout(H,B))}function H(){!he.current.error&&(u||W().isVisible())&&(h||W().isOnline())?fe(Ve).then($):$()}return $(),function(){j&&(clearTimeout(j),j=-1)}},[T,u,h,fe]),(0,b.useDebugValue)(Q),f&&w(Q)&&c)throw ne.current=o,ce.current=t,z.current=!1,w(Ce)?fe(Ve):Ce;return{mutate:mt,get data(){return Fe.data=!0,Q},get error(){return Fe.error=!0,Ce},get isValidating(){return Fe.isValidating=!0,Pe}}},lt=F.defineProperty(ot,"default",{value:Ge}),pt=function(e){return s(e)[0]},vt=ct(ft)}}]);
