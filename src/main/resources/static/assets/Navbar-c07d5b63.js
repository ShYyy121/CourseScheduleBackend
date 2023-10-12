import{p as L,m as G,y as J,n as $,s as W,a as i,z as fe,A as he,B as ye,l as be,C as j,D,E as we,G as Se,H as _e,q as xe,u as ke,I as p,J as g,K as pe,L as Te,M as F,N as Y,O as Le,P as K,Q as M,R as Q,S as ee,T as Ae,U as Ve,W as Ye,X as Be,Y as z,Z as De,_ as $e,b as We,$ as Oe,a0 as ze,a1 as Xe,a2 as Fe,a3 as Ue,a4 as qe,a5 as Ze,F as O,a6 as je,r as U,o as N,g as q,w as k,a7 as ue,h as ie,a8 as Ge,c as H,a9 as se,k as ce,d as A,aa as ve,t as Z,j as Je}from"./index-1d7bfa1d.js";import{_ as Ke}from"./_plugin-vue_export-helper-c27b6911.js";import{a as Ee,u as Ne,V as Qe}from"./VMain-829b4bfa.js";const et=L({text:String,...G(),...J()},"VToolbarTitle"),tt=$()({name:"VToolbarTitle",props:et(),setup(e,r){let{slots:l}=r;return W(()=>{const u=!!(l.default||l.text||e.text);return i(e.tag,{class:["v-toolbar-title",e.class],style:e.style},{default:()=>{var a;return[u&&i("div",{class:"v-toolbar-title__placeholder"},[l.text?l.text():e.text,(a=l.default)==null?void 0:a.call(l)])]}})}),{}}}),at=[null,"prominent","default","comfortable","compact"],Ce=L({absolute:Boolean,collapse:Boolean,color:String,density:{type:String,default:"default",validator:e=>at.includes(e)},extended:Boolean,extensionHeight:{type:[Number,String],default:48},flat:Boolean,floating:Boolean,height:{type:[Number,String],default:64},image:String,title:String,...fe(),...G(),...he(),...ye(),...J({tag:"header"}),...be()},"VToolbar"),de=$()({name:"VToolbar",props:Ce(),setup(e,r){var s;let{slots:l}=r;const{backgroundColorClasses:u,backgroundColorStyles:a}=j(D(e,"color")),{borderClasses:t}=we(e),{elevationClasses:m}=Se(e),{roundedClasses:y}=_e(e),{themeClasses:S}=xe(e),{rtlClasses:o}=ke(),n=p(!!(e.extended||(s=l.extension)!=null&&s.call(l))),d=g(()=>parseInt(Number(e.height)+(e.density==="prominent"?Number(e.height):0)-(e.density==="comfortable"?8:0)-(e.density==="compact"?16:0),10)),c=g(()=>n.value?parseInt(Number(e.extensionHeight)+(e.density==="prominent"?Number(e.extensionHeight):0)-(e.density==="comfortable"?4:0)-(e.density==="compact"?8:0),10):0);return pe({VBtn:{variant:"text"}}),W(()=>{var b;const f=!!(e.title||l.title),T=!!(l.image||e.image),C=(b=l.extension)==null?void 0:b.call(l);return n.value=!!(e.extended||C),i(e.tag,{class:["v-toolbar",{"v-toolbar--absolute":e.absolute,"v-toolbar--collapse":e.collapse,"v-toolbar--flat":e.flat,"v-toolbar--floating":e.floating,[`v-toolbar--density-${e.density}`]:!0},u.value,t.value,m.value,y.value,S.value,o.value,e.class],style:[a.value,e.style]},{default:()=>[T&&i("div",{key:"image",class:"v-toolbar__image"},[l.image?i(F,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},l.image):i(Te,{key:"image-img",cover:!0,src:e.image},null)]),i(F,{defaults:{VTabs:{height:Y(d.value)}}},{default:()=>{var _,V,B;return[i("div",{class:"v-toolbar__content",style:{height:Y(d.value)}},[l.prepend&&i("div",{class:"v-toolbar__prepend"},[(_=l.prepend)==null?void 0:_.call(l)]),f&&i(tt,{key:"title",text:e.title},{text:l.title}),(V=l.default)==null?void 0:V.call(l),l.append&&i("div",{class:"v-toolbar__append"},[(B=l.append)==null?void 0:B.call(l)])])]}}),i(F,{defaults:{VTabs:{height:Y(c.value)}}},{default:()=>[i(Le,null,{default:()=>[n.value&&i("div",{class:"v-toolbar__extension",style:{height:Y(c.value)}},[C])]})]})]})}),{contentHeight:d,extensionHeight:c}}}),lt=L({scrollTarget:{type:String},scrollThreshold:{type:[String,Number],default:300}},"scroll");function nt(e){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{canScroll:l}=r;let u=0;const a=K(null),t=p(0),m=p(0),y=p(0),S=p(!1),o=p(!1),n=g(()=>Number(e.scrollThreshold)),d=g(()=>Ae((n.value-t.value)/n.value||0)),c=()=>{const s=a.value;!s||l&&!l.value||(u=t.value,t.value="window"in s?s.pageYOffset:s.scrollTop,o.value=t.value<u,y.value=Math.abs(t.value-n.value))};return M(o,()=>{m.value=m.value||t.value}),M(S,()=>{m.value=0}),Q(()=>{M(()=>e.scrollTarget,s=>{var T;const f=s?document.querySelector(s):window;f&&f!==a.value&&((T=a.value)==null||T.removeEventListener("scroll",c),a.value=f,a.value.addEventListener("scroll",c,{passive:!0}))},{immediate:!0})}),ee(()=>{var s;(s=a.value)==null||s.removeEventListener("scroll",c)}),l&&M(l,c,{immediate:!0}),{scrollThreshold:n,currentScroll:t,currentThreshold:y,isScrollActive:S,scrollRatio:d,isScrollingUp:o,savedScroll:m}}const ot=L({scrollBehavior:String,modelValue:{type:Boolean,default:!0},location:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},...Ce(),...Ee(),...lt(),height:{type:[Number,String],default:64}},"VAppBar"),rt=$()({name:"VAppBar",props:ot(),emits:{"update:modelValue":e=>!0},setup(e,r){let{slots:l}=r;const u=K(),a=Ve(e,"modelValue"),t=g(()=>{var _;const b=new Set(((_=e.scrollBehavior)==null?void 0:_.split(" "))??[]);return{hide:b.has("hide"),inverted:b.has("inverted"),collapse:b.has("collapse"),elevate:b.has("elevate"),fadeImage:b.has("fade-image")}}),m=g(()=>{const b=t.value;return b.hide||b.inverted||b.collapse||b.elevate||b.fadeImage||!a.value}),{currentScroll:y,scrollThreshold:S,isScrollingUp:o,scrollRatio:n}=nt(e,{canScroll:m}),d=g(()=>e.collapse||t.value.collapse&&(t.value.inverted?n.value>0:n.value===0)),c=g(()=>e.flat||t.value.elevate&&(t.value.inverted?y.value>0:y.value===0)),s=g(()=>t.value.fadeImage?t.value.inverted?1-n.value:n.value:void 0),f=g(()=>{var V,B;if(t.value.hide&&t.value.inverted)return 0;const b=((V=u.value)==null?void 0:V.contentHeight)??0,_=((B=u.value)==null?void 0:B.extensionHeight)??0;return b+_});Ye(g(()=>!!e.scrollBehavior),()=>{De(()=>{t.value.hide?t.value.inverted?a.value=y.value>S.value:a.value=o.value||y.value<S.value:a.value=!0})});const{ssrBootStyles:T}=Be(),{layoutItemStyles:C}=Ne({id:e.name,order:g(()=>parseInt(e.order,10)),position:D(e,"location"),layoutSize:f,elementSize:p(void 0),active:a,absolute:D(e,"absolute")});return W(()=>{const[b]=de.filterProps(e);return i(de,z({ref:u,class:["v-app-bar",{"v-app-bar--bottom":e.location==="bottom"},e.class],style:[{...C.value,"--v-toolbar-image-opacity":s.value,height:void 0,...T.value},e.style]},b,{collapse:d.value,flat:c.value}),l)}),{}}}),ut=L({...$e({icon:"$menu",variant:"text"})},"VAppBarNavIcon"),it=$()({name:"VAppBarNavIcon",props:ut(),setup(e,r){let{slots:l}=r;return W(()=>i(We,z(e,{class:["v-app-bar-nav-icon"]}),l)),{}}});function st(e){let{rootEl:r,isSticky:l,layoutItemStyles:u}=e;const a=p(!1),t=p(0),m=g(()=>{const o=typeof a.value=="boolean"?"top":a.value;return[l.value?{top:"auto",bottom:"auto",height:void 0}:void 0,a.value?{[o]:Y(t.value)}:{top:u.value.top}]});Q(()=>{M(l,o=>{o?window.addEventListener("scroll",S,{passive:!0}):window.removeEventListener("scroll",S)},{immediate:!0})}),ee(()=>{document.removeEventListener("scroll",S)});let y=0;function S(){const o=y>window.scrollY?"up":"down",n=r.value.getBoundingClientRect(),d=parseFloat(u.value.top??0),c=window.scrollY-Math.max(0,t.value-d),s=n.height+Math.max(t.value,d)-window.scrollY-window.innerHeight,f=parseFloat(getComputedStyle(r.value).getPropertyValue("--v-body-scroll-y"))||0;n.height<window.innerHeight-d?(a.value="top",t.value=d):o==="up"&&a.value==="bottom"||o==="down"&&a.value==="top"?(t.value=window.scrollY+n.top-f,a.value=!0):o==="down"&&s<=0?(t.value=0,a.value="bottom"):o==="up"&&c<=0&&(f?a.value!=="top"&&(t.value=-c+f+d,a.value="top"):(t.value=n.top+c,a.value="top")),y=window.scrollY}return{isStuck:a,stickyStyles:m}}const ct=100,vt=20;function me(e){const r=1.41421356237;return(e<0?-1:1)*Math.sqrt(Math.abs(e))*r}function ge(e){if(e.length<2)return 0;if(e.length===2)return e[1].t===e[0].t?0:(e[1].d-e[0].d)/(e[1].t-e[0].t);let r=0;for(let l=e.length-1;l>0;l--){if(e[l].t===e[l-1].t)continue;const u=me(r),a=(e[l].d-e[l-1].d)/(e[l].t-e[l-1].t);r+=(a-u)*Math.abs(a),l===e.length-1&&(r*=.5)}return me(r)*1e3}function dt(){const e={};function r(a){Array.from(a.changedTouches).forEach(t=>{(e[t.identifier]??(e[t.identifier]=new Oe(vt))).push([a.timeStamp,t])})}function l(a){Array.from(a.changedTouches).forEach(t=>{delete e[t.identifier]})}function u(a){var o;const t=(o=e[a])==null?void 0:o.values().reverse();if(!t)throw new Error(`No samples for touch id ${a}`);const m=t[0],y=[],S=[];for(const n of t){if(m[0]-n[0]>ct)break;y.push({t:n[0],d:n[1].clientX}),S.push({t:n[0],d:n[1].clientY})}return{x:ge(y),y:ge(S),get direction(){const{x:n,y:d}=this,[c,s]=[Math.abs(n),Math.abs(d)];return c>s&&n>=0?"right":c>s&&n<=0?"left":s>c&&d>=0?"down":s>c&&d<=0?"up":mt()}}}return{addMovement:r,endTouch:l,getVelocity:u}}function mt(){throw new Error}function gt(e){let{isActive:r,isTemporary:l,width:u,touchless:a,position:t}=e;Q(()=>{window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",_,{passive:!1}),window.addEventListener("touchend",V,{passive:!0})}),ee(()=>{window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",_),window.removeEventListener("touchend",V)});const m=g(()=>["left","right"].includes(t.value)),{addMovement:y,endTouch:S,getVelocity:o}=dt();let n=!1;const d=p(!1),c=p(0),s=p(0);let f;function T(v,w){return(t.value==="left"?v:t.value==="right"?document.documentElement.clientWidth-v:t.value==="top"?v:t.value==="bottom"?document.documentElement.clientHeight-v:R())-(w?u.value:0)}function C(v){let w=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;const h=t.value==="left"?(v-s.value)/u.value:t.value==="right"?(document.documentElement.clientWidth-v-s.value)/u.value:t.value==="top"?(v-s.value)/u.value:t.value==="bottom"?(document.documentElement.clientHeight-v-s.value)/u.value:R();return w?Math.max(0,Math.min(1,h)):h}function b(v){if(a.value)return;const w=v.changedTouches[0].clientX,h=v.changedTouches[0].clientY,x=25,I=t.value==="left"?w<x:t.value==="right"?w>document.documentElement.clientWidth-x:t.value==="top"?h<x:t.value==="bottom"?h>document.documentElement.clientHeight-x:R(),P=r.value&&(t.value==="left"?w<u.value:t.value==="right"?w>document.documentElement.clientWidth-u.value:t.value==="top"?h<u.value:t.value==="bottom"?h>document.documentElement.clientHeight-u.value:R());(I||P||r.value&&l.value)&&(n=!0,f=[w,h],s.value=T(m.value?w:h,r.value),c.value=C(m.value?w:h),S(v),y(v))}function _(v){const w=v.changedTouches[0].clientX,h=v.changedTouches[0].clientY;if(n){if(!v.cancelable){n=!1;return}const I=Math.abs(w-f[0]),P=Math.abs(h-f[1]);(m.value?I>P&&I>3:P>I&&P>3)?(d.value=!0,n=!1):(m.value?P:I)>3&&(n=!1)}if(!d.value)return;v.preventDefault(),y(v);const x=C(m.value?w:h,!1);c.value=Math.max(0,Math.min(1,x)),x>1?s.value=T(m.value?w:h,!0):x<0&&(s.value=T(m.value?w:h,!1))}function V(v){if(n=!1,!d.value)return;y(v),d.value=!1;const w=o(v.changedTouches[0].identifier),h=Math.abs(w.x),x=Math.abs(w.y);(m.value?h>x&&h>400:x>h&&x>3)?r.value=w.direction===({left:"right",right:"left",top:"down",bottom:"up"}[t.value]||R()):r.value=c.value>.5}const B=g(()=>d.value?{transform:t.value==="left"?`translateX(calc(-100% + ${c.value*u.value}px))`:t.value==="right"?`translateX(calc(100% - ${c.value*u.value}px))`:t.value==="top"?`translateY(calc(-100% + ${c.value*u.value}px))`:t.value==="bottom"?`translateY(calc(100% - ${c.value*u.value}px))`:R(),transition:"none"}:void 0);return{isDragging:d,dragProgress:c,dragStyles:B}}function R(){throw new Error}const ft=["start","end","left","right","top","bottom"],ht=L({color:String,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,modelValue:{type:Boolean,default:null},permanent:Boolean,rail:{type:Boolean,default:null},railWidth:{type:[Number,String],default:56},scrim:{type:[Boolean,String],default:!0},image:String,temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},location:{type:String,default:"start",validator:e=>ft.includes(e)},sticky:Boolean,...fe(),...G(),...he(),...Ee(),...ye(),...J({tag:"nav"}),...be()},"VNavigationDrawer"),yt=$()({name:"VNavigationDrawer",props:ht(),emits:{"update:modelValue":e=>!0,"update:rail":e=>!0},setup(e,r){let{attrs:l,emit:u,slots:a}=r;const{isRtl:t}=ke(),{themeClasses:m}=xe(e),{borderClasses:y}=we(e),{backgroundColorClasses:S,backgroundColorStyles:o}=j(D(e,"color")),{elevationClasses:n}=Se(e),{mobile:d}=ze(),{roundedClasses:c}=_e(e),s=Xe(),f=Ve(e,"modelValue",null,E=>!!E),{ssrBootStyles:T}=Be(),{scopeId:C}=Fe(),b=K(),_=p(!1),V=g(()=>e.rail&&e.expandOnHover&&_.value?Number(e.width):Number(e.rail?e.railWidth:e.width)),B=g(()=>je(e.location,t.value)),v=g(()=>!e.permanent&&(d.value||e.temporary)),w=g(()=>e.sticky&&!v.value&&B.value!=="bottom");e.expandOnHover&&e.rail!=null&&M(_,E=>u("update:rail",!E)),e.disableResizeWatcher||M(v,E=>!e.permanent&&qe(()=>f.value=!E)),!e.disableRouteWatcher&&s&&M(s.currentRoute,()=>v.value&&(f.value=!1)),M(()=>e.permanent,E=>{E&&(f.value=!0)}),Ue(()=>{e.modelValue!=null||v.value||(f.value=e.permanent||!d.value)});const{isDragging:h,dragProgress:x,dragStyles:I}=gt({isActive:f,isTemporary:v,width:V,touchless:D(e,"touchless"),position:B}),P=g(()=>{const E=v.value?0:e.rail&&e.expandOnHover?Number(e.railWidth):V.value;return h.value?E*x.value:E}),{layoutItemStyles:X,layoutItemScrimStyles:Ie}=Ne({id:e.name,order:g(()=>parseInt(e.order,10)),position:B,layoutSize:P,elementSize:V,active:g(()=>f.value||h.value),disableTransitions:g(()=>h.value),absolute:g(()=>e.absolute||w.value&&typeof te.value!="string")}),{isStuck:te,stickyStyles:Me}=st({rootEl:b,isSticky:w,layoutItemStyles:X}),ae=j(g(()=>typeof e.scrim=="string"?e.scrim:null)),Pe=g(()=>({...h.value?{opacity:x.value*.2,transition:"none"}:void 0,...Ie.value}));pe({VList:{bgColor:"transparent"}});function He(){_.value=!0}function Re(){_.value=!1}return W(()=>{const E=a.image||e.image;return i(O,null,[i(e.tag,z({ref:b,onMouseenter:He,onMouseleave:Re,class:["v-navigation-drawer",`v-navigation-drawer--${B.value}`,{"v-navigation-drawer--expand-on-hover":e.expandOnHover,"v-navigation-drawer--floating":e.floating,"v-navigation-drawer--is-hovering":_.value,"v-navigation-drawer--rail":e.rail,"v-navigation-drawer--temporary":v.value,"v-navigation-drawer--active":f.value,"v-navigation-drawer--sticky":w.value},m.value,S.value,y.value,n.value,c.value,e.class],style:[o.value,X.value,I.value,T.value,Me.value,e.style]},C,l),{default:()=>{var le,ne,oe,re;return[E&&i("div",{key:"image",class:"v-navigation-drawer__img"},[a.image?(le=a.image)==null?void 0:le.call(a,{image:e.image}):i("img",{src:e.image,alt:""},null)]),a.prepend&&i("div",{class:"v-navigation-drawer__prepend"},[(ne=a.prepend)==null?void 0:ne.call(a)]),i("div",{class:"v-navigation-drawer__content"},[(oe=a.default)==null?void 0:oe.call(a)]),a.append&&i("div",{class:"v-navigation-drawer__append"},[(re=a.append)==null?void 0:re.call(a)])]}}),i(Ze,{name:"fade-transition"},{default:()=>[v.value&&(h.value||f.value)&&!!e.scrim&&i("div",z({class:["v-navigation-drawer__scrim",ae.backgroundColorClasses.value],style:[Pe.value,ae.backgroundColorStyles.value],onClick:()=>f.value=!1},C),null)]})])}),{isStuck:te}}}),bt={name:"Navbar",data(){return{drawer:!1,navItems:[{title:"用户管理",icon:"../assets/account.png",route:"/Navbar/userinfo"},{title:"查询",icon:"../assets/magnify.png",route:"/Navbar/search"},{title:"机房管理",icon:"../assets/ServerRoom.png",expanded:!1,children:[{title:"机房信息",route:"/Navbar/server-room-info"},{title:"排课查询",route:"/Navbar/schedule-query"}]},{title:"系统设置",icon:"../assets/setting.png",route:"/Navbar/settings"},{title:"个人中心",icon:"../assets/person.png",route:"/Navbar/person"}]}},methods:{toggleExpand(e){e.expanded=!e.expanded}}};function wt(e,r,l,u,a,t){const m=U("v-list-item-icon"),y=U("v-list-item-content"),S=U("router-view");return N(),q(O,null,[i(yt,{modelValue:a.drawer,"onUpdate:modelValue":r[0]||(r[0]=o=>a.drawer=o),app:""},{default:k(()=>[i(ue,null,{default:k(()=>[(N(!0),q(O,null,ie(a.navItems,(o,n)=>(N(),H(se,{key:n,to:o.route,link:""},{default:k(()=>[i(m,null,{default:k(()=>[o.children?o.expanded?(N(),H(ce,{key:2},{default:k(()=>[A("mdi-chevron-up")]),_:1})):(N(),H(ce,{key:1},{default:k(()=>[A("mdi-chevron-down")]),_:1})):(N(),H(Te,{key:0,src:o.icon,alt:"Icon",height:"24",width:"24"},null,8,["src"]))]),_:2},1024),i(y,null,{default:k(()=>[o.children?(N(),H(ve,{key:1,onClick:d=>t.toggleExpand(o)},{default:k(()=>[A(Z(o.title),1)]),_:2},1032,["onClick"])):(N(),H(ve,{key:0},{default:k(()=>[A(Z(o.title),1)]),_:2},1024))]),_:2},1024),o.children&&o.expanded?(N(),H(ue,{key:0},{default:k(()=>[(N(!0),q(O,null,ie(o.children,(d,c)=>(N(),H(se,{key:c,to:d.route,link:""},{default:k(()=>[i(y,null,{default:k(()=>[A(Z(d.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))]),_:2},1024)):Je("",!0)]),_:2},1032,["to"]))),128))]),_:1})]),_:1},8,["modelValue"]),i(rt,{app:""},{default:k(()=>[i(it,{onClick:r[1]||(r[1]=Ge(o=>a.drawer=!a.drawer,["stop"]))})]),_:1}),i(Qe,null,{default:k(()=>[i(S)]),_:1})],64)}const kt=Ke(bt,[["render",wt]]);export{kt as default};