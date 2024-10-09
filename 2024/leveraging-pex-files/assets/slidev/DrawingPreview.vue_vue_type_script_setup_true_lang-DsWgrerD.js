import{t as C,z as b,B as F,d as pt,ax as Vt,ay as Ut,az as A,o as Y,b as gt,e as Gt,f as xt,h as ht,ac as Ht,l as _t,c as qt,au as Zt,i as Xt,T as Yt,W as at,aA as Qt,K as Jt,y as Wt,n as te,E as ee,g as se}from"../modules/vue-B3MSS8ay.js";import{V as re,a as At,Z as wt,Q as St,z as bt,A as Pt,W as ne,$ as ie,_ as Ft,a0 as ae,a1 as oe,a2 as le,a3 as he,a4 as ue,v as ut,a5 as ce,a6 as de,a7 as ot,a8 as Et,a9 as fe,O as pe}from"../index-CM3Ct9rq.js";function ge(t){var e;return{info:C(((e=re(t))==null?void 0:e.meta.slide)??null),update:async()=>{}}}const lt={};function ss(t){function e(s){return lt[s]??(lt[s]=ge(s))}return{info:b({get(){return e(F(t)).info.value},set(s){e(F(t)).info.value=s}}),update:async(s,r)=>{const i=e(r??F(t)),n=await i.update(s);return n&&(i.info.value=n),n}}}const me=["id"],ve=["id"],ye=pt({__name:"SlideContainer",props:{width:{type:Number},meta:{default:()=>({})},isMain:{type:Boolean,default:!1}},setup(t){const e=t,{isPrintMode:s}=At(),r=C(null),i=Vt(r),n=C(null),o=b(()=>e.width??i.width.value),a=b(()=>e.width?e.width/wt.value:i.height.value),l=b(()=>St.value&&!s.value?+St.value:Math.min(o.value/bt.value,a.value/Pt.value)),p=b(()=>({height:`${Pt.value}px`,width:`${bt.value}px`,transform:`translate(-50%, -50%) scale(${l.value})`,"--slidev-slide-scale":l.value})),y=b(()=>e.width?{width:`${e.width}px`,height:`${e.width/wt.value}px`}:{});return e.isMain&&Ut(b(()=>`:root { --slidev-slide-scale: ${l.value}; }`)),A(ne,l),A(ie,n),(v,S)=>(Y(),gt("div",{id:t.isMain?"slide-container":void 0,ref_key:"container",ref:r,class:"slidev-slide-container",style:ht(y.value)},[Gt("div",{id:t.isMain?"slide-content":void 0,ref_key:"slideElement",ref:n,class:"slidev-slide-content",style:ht(p.value)},[xt(v.$slots,"default",{},void 0,!0)],12,ve),xt(v.$slots,"controls",{},void 0,!0)],12,me))}}),rs=Ft(ye,[["__scopeId","data-v-1c424805"]]),ns={render:()=>[]},is={render:()=>[]},xe={render:()=>[]},_e={render:()=>[]},we=["data-slidev-no"],Se=pt({__name:"SlideWrapper",props:{clicksContext:{type:Object,required:!0},renderContext:{type:String,default:"slide"},route:{type:Object,required:!0}},setup(t){const e=t,s=b(()=>{var n,o;return((o=(n=e.route.meta)==null?void 0:n.slide)==null?void 0:o.frontmatter.zoom)??1});A(ae,e.route),A(oe,e.route.meta.slide.frontmatter),A(le,C(e.route.no)),A(he,C(e.renderContext)),A(ue,Ht(e,"clicksContext")),A(ce,s);const r=b(()=>s.value===1?void 0:{width:`${100/s.value}%`,height:`${100/s.value}%`,transformOrigin:"top left",transform:`scale(${s.value})`}),i=b(()=>({...r.value,"user-select":ut.selectable?void 0:"none"}));return(n,o)=>(Y(),gt("div",{"data-slidev-no":e.route.no,class:Xt(F(de)(t.route,["slide","presenter"].includes(e.renderContext)?"":"disable-view-transition")),style:ht(i.value)},[_t(F(_e)),(Y(),qt(Zt(e.route.component))),_t(F(xe))],14,we))}}),as=Ft(Se,[["__scopeId","data-v-0b2ef7e0"]]);var be=Object.defineProperty,Mt=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable,Lt=(t,e,s)=>e in t?be(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,ct=(t,e)=>{for(var s in e||(e={}))Pe.call(e,s)&&Lt(t,s,e[s]);if(Mt)for(var s of Mt(e))Ee.call(e,s)&&Lt(t,s,e[s]);return t},Me=()=>({emit(t,...e){for(let s=0,r=this.events[t]||[],i=r.length;s<i;s++)r[s](...e)},events:{},on(t,e){var s;return((s=this.events)[t]||(s[t]=[])).push(e),()=>{var r;this.events[t]=(r=this.events[t])==null?void 0:r.filter(i=>e!==i)}}});function Ct(t,e,s,r=i=>i){return t*r(.5-e*(.5-s))}function Le(t){return[-t[0],-t[1]]}function L(t,e){return[t[0]+e[0],t[1]+e[1]]}function P(t,e){return[t[0]-e[0],t[1]-e[1]]}function M(t,e){return[t[0]*e,t[1]*e]}function Ce(t,e){return[t[0]/e,t[1]/e]}function U(t){return[t[1],-t[0]]}function kt(t,e){return t[0]*e[0]+t[1]*e[1]}function ke(t,e){return t[0]===e[0]&&t[1]===e[1]}function De(t){return Math.hypot(t[0],t[1])}function Ie(t){return t[0]*t[0]+t[1]*t[1]}function Dt(t,e){return Ie(P(t,e))}function Tt(t){return Ce(t,De(t))}function Ne(t,e){return Math.hypot(t[1]-e[1],t[0]-e[0])}function G(t,e,s){let r=Math.sin(s),i=Math.cos(s),n=t[0]-e[0],o=t[1]-e[1],a=n*i-o*r,l=n*r+o*i;return[a+e[0],l+e[1]]}function dt(t,e,s){return L(t,M(P(e,t),s))}function It(t,e,s){return L(t,M(e,s))}var{min:j,PI:$e}=Math,Nt=.275,H=$e+1e-4;function Ae(t,e={}){let{size:s=16,smoothing:r=.5,thinning:i=.5,simulatePressure:n=!0,easing:o=u=>u,start:a={},end:l={},last:p=!1}=e,{cap:y=!0,easing:v=u=>u*(2-u)}=a,{cap:S=!0,easing:f=u=>--u*u*u+1}=l;if(t.length===0||s<=0)return[];let d=t[t.length-1].runningLength,c=a.taper===!1?0:a.taper===!0?Math.max(s,d):a.taper,E=l.taper===!1?0:l.taper===!0?Math.max(s,d):l.taper,R=Math.pow(s*r,2),D=[],h=[],x=t.slice(0,10).reduce((u,w)=>{let g=w.pressure;if(n){let m=j(1,w.distance/s),rt=j(1,1-m);g=j(1,u+(rt-u)*(m*Nt))}return(u+g)/2},t[0].pressure),_=Ct(s,i,t[t.length-1].pressure,o),W,tt=t[0].vector,B=t[0].point,q=B,T=B,K=q,et=!1;for(let u=0;u<t.length;u++){let{pressure:w}=t[u],{point:g,vector:m,distance:rt,runningLength:V}=t[u];if(u<t.length-1&&d-V<3)continue;if(i){if(n){let $=j(1,rt/s),it=j(1,1-$);w=j(1,x+(it-x)*($*Nt))}_=Ct(s,i,w,o)}else _=s/2;W===void 0&&(W=_);let jt=V<c?v(V/c):1,Ot=d-V<E?f((d-V)/E):1;_=Math.max(.01,_*Math.min(jt,Ot));let mt=(u<t.length-1?t[u+1]:t[u]).vector,nt=u<t.length-1?kt(m,mt):1,Bt=kt(m,tt)<0&&!et,vt=nt!==null&&nt<0;if(Bt||vt){let $=M(U(tt),_);for(let it=1/13,X=0;X<=1;X+=it)T=G(P(g,$),g,H*X),D.push(T),K=G(L(g,$),g,H*-X),h.push(K);B=T,q=K,vt&&(et=!0);continue}if(et=!1,u===t.length-1){let $=M(U(m),_);D.push(P(g,$)),h.push(L(g,$));continue}let yt=M(U(dt(mt,m,nt)),_);T=P(g,yt),(u<=1||Dt(B,T)>R)&&(D.push(T),B=T),K=L(g,yt),(u<=1||Dt(q,K)>R)&&(h.push(K),q=K),x=w,tt=m}let I=t[0].point.slice(0,2),N=t.length>1?t[t.length-1].point.slice(0,2):L(t[0].point,[1,1]),st=[],Z=[];if(t.length===1){if(!(c||E)||p){let u=It(I,Tt(U(P(I,N))),-(W||_)),w=[];for(let g=1/13,m=g;m<=1;m+=g)w.push(G(u,I,H*2*m));return w}}else{if(!(c||E&&t.length===1))if(y)for(let w=1/13,g=w;g<=1;g+=w){let m=G(h[0],I,H*g);st.push(m)}else{let w=P(D[0],h[0]),g=M(w,.5),m=M(w,.51);st.push(P(I,g),P(I,m),L(I,m),L(I,g))}let u=U(Le(t[t.length-1].vector));if(E||c&&t.length===1)Z.push(N);else if(S){let w=It(N,u,_);for(let g=1/29,m=g;m<1;m+=g)Z.push(G(w,N,H*3*m))}else Z.push(L(N,M(u,_)),L(N,M(u,_*.99)),P(N,M(u,_*.99)),P(N,M(u,_)))}return D.concat(Z,h.reverse(),st)}function Fe(t,e={}){var s;let{streamline:r=.5,size:i=16,last:n=!1}=e;if(t.length===0)return[];let o=.15+(1-r)*.85,a=Array.isArray(t[0])?t:t.map(({x:f,y:d,pressure:c=.5})=>[f,d,c]);if(a.length===2){let f=a[1];a=a.slice(0,-1);for(let d=1;d<5;d++)a.push(dt(a[0],f,d/4))}a.length===1&&(a=[...a,[...L(a[0],[1,1]),...a[0].slice(2)]]);let l=[{point:[a[0][0],a[0][1]],pressure:a[0][2]>=0?a[0][2]:.25,vector:[1,1],distance:0,runningLength:0}],p=!1,y=0,v=l[0],S=a.length-1;for(let f=1;f<a.length;f++){let d=n&&f===S?a[f].slice(0,2):dt(v.point,a[f],o);if(ke(v.point,d))continue;let c=Ne(d,v.point);if(y+=c,f<S&&!p){if(y<i)continue;p=!0}v={point:d,pressure:a[f][2]>=0?a[f][2]:.5,vector:Tt(P(v.point,d)),distance:c,runningLength:y},l.push(v)}return l[0].vector=((s=l[1])==null?void 0:s.vector)||[0,0],l}function Te(t,e={}){return Ae(Fe(t,e),e)}function Q(t,e){return t-e}function Ke(t){return t<0?-1:1}function J(t){return[Math.abs(t),Ke(t)]}function Kt(){const t=()=>((1+Math.random())*65536|0).toString(16).substring(1);return`${t()+t()}-${t()}-${t()}-${t()}-${t()}${t()}${t()}`}var ze=2,k=ze,O=class{constructor(t){this.drauu=t,this.event=void 0,this.point=void 0,this.start=void 0,this.el=null}onSelected(t){}onUnselected(){}onStart(t){}onMove(t){return!1}onEnd(t){}get brush(){return this.drauu.brush}get shiftPressed(){return this.drauu.shiftPressed}get altPressed(){return this.drauu.altPressed}get svgElement(){return this.drauu.el}getMousePosition(t){var e,s,r;const i=this.drauu.el,n=(e=this.drauu.options.coordinateScale)!=null?e:1,o=(s=this.drauu.options.offset)!=null?s:{x:0,y:0};if(this.drauu.options.coordinateTransform===!1){const a=this.drauu.el.getBoundingClientRect();return{x:(t.pageX-a.left+o.x)*n,y:(t.pageY-a.top+o.y)*n,pressure:t.pressure}}else{const a=this.drauu.svgPoint;a.x=t.clientX+o.x,a.y=t.clientY+o.y;const l=a.matrixTransform((r=i.getScreenCTM())==null?void 0:r.inverse());return{x:l.x*n,y:l.y*n,pressure:t.pressure}}}createElement(t,e){var s;const r=document.createElementNS("http://www.w3.org/2000/svg",t),i=e?ct(ct({},this.brush),e):this.brush;return r.setAttribute("fill",(s=i.fill)!=null?s:"transparent"),r.setAttribute("stroke",i.color),r.setAttribute("stroke-width",i.size.toString()),r.setAttribute("stroke-linecap","round"),i.dasharray&&r.setAttribute("stroke-dasharray",i.dasharray),r}attr(t,e){this.el.setAttribute(t,typeof e=="string"?e:e.toFixed(k))}_setEvent(t){this.event=t,this.point=this.getMousePosition(t)}_eventDown(t){return this._setEvent(t),this.start=this.point,this.onStart(this.point)}_eventMove(t){return this._setEvent(t),this.onMove(this.point)}_eventUp(t){return this._setEvent(t),this.onEnd(this.point)}},Re=class zt extends O{constructor(){super(...arguments),this.points=[]}onStart(e){return this.el=document.createElementNS("http://www.w3.org/2000/svg","path"),this.points=[e],this.attr("fill",this.brush.color),this.attr("d",this.getSvgData(this.points)),this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&this.points.push(e),this.attr("d",this.getSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!!e}getSvgData(e){return zt.getSvgData(e,this.brush)}static getSvgData(e,s){const r=Te(e,ct({size:s.size,thinning:.9,simulatePressure:!1,start:{taper:5},end:{taper:5}},s.stylusOptions));if(!r.length)return"";const i=r.reduce((n,[o,a],l,p)=>{const[y,v]=p[(l+1)%p.length];return n.push(o,a,(o+y)/2,(a+v)/2),n},["M",...r[0],"Q"]);return i.push("Z"),i.map(n=>typeof n=="number"?n.toFixed(2):n).join(" ")}},je=class extends O{onStart(t){return this.el=this.createElement("ellipse"),this.attr("cx",t.x),this.attr("cy",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=J(t.x-this.start.x),[r,i]=J(t.y-this.start.y);if(this.shiftPressed){const n=Math.min(e,r);e=n,r=n}if(this.altPressed)this.attr("cx",this.start.x),this.attr("cy",this.start.y),this.attr("rx",e),this.attr("ry",r);else{const[n,o]=[this.start.x,this.start.x+e*s].sort(Q),[a,l]=[this.start.y,this.start.y+r*i].sort(Q);this.attr("cx",(n+o)/2),this.attr("cy",(a+l)/2),this.attr("rx",(o-n)/2),this.attr("ry",(l-a)/2)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Rt(t,e){const s=document.createElementNS("http://www.w3.org/2000/svg","defs"),r=document.createElementNS("http://www.w3.org/2000/svg","marker"),i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("fill",e),r.setAttribute("id",t),r.setAttribute("viewBox","0 -5 10 10"),r.setAttribute("refX","5"),r.setAttribute("refY","0"),r.setAttribute("markerWidth","4"),r.setAttribute("markerHeight","4"),r.setAttribute("orient","auto"),i.setAttribute("d","M0,-5L10,0L0,5"),r.appendChild(i),s.appendChild(r),s}var Oe=class extends O{onStart(t){if(this.el=this.createElement("line",{fill:"transparent"}),this.attr("x1",t.x),this.attr("y1",t.y),this.attr("x2",t.x),this.attr("y2",t.y),this.brush.arrowEnd){const e=Kt(),s=document.createElementNS("http://www.w3.org/2000/svg","g");return s.append(Rt(e,this.brush.color)),s.append(this.el),this.attr("marker-end",`url(#${e})`),s}return this.el}onMove(t){if(!this.el)return!1;let{x:e,y:s}=t;if(this.shiftPressed){const r=t.x-this.start.x,i=t.y-this.start.y;if(i!==0){let n=r/i;n=Math.round(n),Math.abs(n)<=1?(e=this.start.x+i*n,s=this.start.y+i):(e=this.start.x+r,s=this.start.y)}}return this.altPressed?(this.attr("x1",this.start.x*2-e),this.attr("y1",this.start.y*2-s),this.attr("x2",e),this.attr("y2",s)):(this.attr("x1",this.start.x),this.attr("y1",this.start.y),this.attr("x2",e),this.attr("y2",s)),!0}onEnd(){const t=this.el;return this.el=null,!(!t||t.getTotalLength()<5)}},Be=class extends O{onStart(t){return this.el=this.createElement("rect"),this.brush.cornerRadius&&(this.attr("rx",this.brush.cornerRadius),this.attr("ry",this.brush.cornerRadius)),this.attr("x",t.x),this.attr("y",t.y),this.el}onMove(t){if(!this.el||!this.start)return!1;let[e,s]=J(t.x-this.start.x),[r,i]=J(t.y-this.start.y);if(this.shiftPressed){const n=Math.min(e,r);e=n,r=n}if(this.altPressed)this.attr("x",this.start.x-e),this.attr("y",this.start.y-r),this.attr("width",e*2),this.attr("height",r*2);else{const[n,o]=[this.start.x,this.start.x+e*s].sort(Q),[a,l]=[this.start.y,this.start.y+r*i].sort(Q);this.attr("x",n),this.attr("y",a),this.attr("width",o-n),this.attr("height",l-a)}return!0}onEnd(){const t=this.el;return this.el=null,!(!t||!t.getTotalLength())}};function Ve(t,e){const s=t.x-e.x,r=t.y-e.y;return s*s+r*r}function Ue(t,e,s){let r=e.x,i=e.y,n=s.x-r,o=s.y-i;if(n!==0||o!==0){const a=((t.x-r)*n+(t.y-i)*o)/(n*n+o*o);a>1?(r=s.x,i=s.y):a>0&&(r+=n*a,i+=o*a)}return n=t.x-r,o=t.y-i,n*n+o*o}function Ge(t,e){let s=t[0];const r=[s];let i;for(let n=1,o=t.length;n<o;n++)i=t[n],Ve(i,s)>e&&(r.push(i),s=i);return s!==i&&i&&r.push(i),r}function ft(t,e,s,r,i){let n=r,o=0;for(let a=e+1;a<s;a++){const l=Ue(t[a],t[e],t[s]);l>n&&(o=a,n=l)}n>r&&(o-e>1&&ft(t,e,o,r,i),i.push(t[o]),s-o>1&&ft(t,o,s,r,i))}function He(t,e){const s=t.length-1,r=[t[0]];return ft(t,0,s,e,r),r.push(t[s]),r}function $t(t,e,s=!1){if(t.length<=2)return t;const r=e*e;return t=s?t:Ge(t,r),t=He(t,r),t}var qe=class z extends O{constructor(){super(...arguments),this.points=[],this.count=0}onStart(e){if(this.el=this.createElement("path",{fill:"transparent"}),this.points=[e],this.brush.arrowEnd){this.arrowId=Kt();const s=Rt(this.arrowId,this.brush.color);this.el.appendChild(s)}return this.el}onMove(e){return this.el||this.onStart(e),this.points[this.points.length-1]!==e&&(this.points.push(e),this.count+=1),this.count>5&&(this.points=$t(this.points,1,!0),this.count=0),this.attr("d",z.toSvgData(this.points)),!0}onEnd(){const e=this.el;return this.el=null,!(!e||(e.setAttribute("d",z.toSvgData($t(this.points,1,!0))),!e.getTotalLength()))}static line(e,s){const r=s.x-e.x,i=s.y-e.y;return{length:Math.sqrt(r**2+i**2),angle:Math.atan2(i,r)}}static controlPoint(e,s,r,i){const n=s||e,o=r||e,a=.2,l=z.line(n,o),p=l.angle+(i?Math.PI:0),y=l.length*a,v=e.x+Math.cos(p)*y,S=e.y+Math.sin(p)*y;return{x:v,y:S}}static bezierCommand(e,s,r){const i=z.controlPoint(r[s-1],r[s-2],e),n=z.controlPoint(e,r[s-1],r[s+1],!0);return`C ${i.x.toFixed(k)},${i.y.toFixed(k)} ${n.x.toFixed(k)},${n.y.toFixed(k)} ${e.x.toFixed(k)},${e.y.toFixed(k)}`}static toSvgData(e){return e.reduce((s,r,i,n)=>i===0?`M ${r.x.toFixed(k)},${r.y.toFixed(k)}`:`${s} ${z.bezierCommand(r,i,n)}`,"")}},Ze=class extends O{constructor(){super(...arguments),this.pathSubFactor=20,this.pathFragments=[],this._erased=[]}onSelected(t){const e=(s,r)=>{if(s&&s.length)for(let i=0;i<s.length;i++){const n=s[i];if(n.getTotalLength){const o=n.getTotalLength();for(let a=0;a<this.pathSubFactor;a++){const l=n.getPointAtLength(o*a/this.pathSubFactor),p=n.getPointAtLength(o*(a+1)/this.pathSubFactor);this.pathFragments.push({x1:l.x,x2:p.x,y1:l.y,y2:p.y,segment:a,element:r||n})}}else n.children&&e(n.children,n)}};t&&e(t.children)}onUnselected(){this.pathFragments=[]}onStart(t){this.svgPointPrevious=this.svgElement.createSVGPoint(),this.svgPointPrevious.x=t.x,this.svgPointPrevious.y=t.y}onMove(t){this.svgPointCurrent=this.svgElement.createSVGPoint(),this.svgPointCurrent.x=t.x,this.svgPointCurrent.y=t.y;const e=this.checkAndEraseElement();return this.svgPointPrevious=this.svgPointCurrent,e}onEnd(){this.svgPointPrevious=void 0,this.svgPointCurrent=void 0;const t=this._erased;return this._erased=[],{undo:()=>t.forEach(e=>this.drauu._restoreNode(e)),redo:()=>t.forEach(e=>this.drauu._removeNode(e))}}checkAndEraseElement(){if(this.pathFragments.length)for(let t=0;t<this.pathFragments.length;t++){const e=this.pathFragments[t],s={x1:this.svgPointPrevious.x,x2:this.svgPointCurrent.x,y1:this.svgPointPrevious.y,y2:this.svgPointCurrent.y};this.lineLineIntersect(e,s)&&(this.drauu._removeNode(e.element),this._erased.push(e.element))}return this._erased.length&&(this.pathFragments=this.pathFragments.filter(t=>!this._erased.includes(t.element))),this._erased.length>0}lineLineIntersect(t,e){const s=t.x1,r=t.x2,i=e.x1,n=e.x2,o=t.y1,a=t.y2,l=e.y1,p=e.y2,y=(s-r)*(l-p)-(o-a)*(i-n),v=(s*a-o*r)*(i-n)-(s-r)*(i*p-l*n),S=(s*a-o*r)*(l-p)-(o-a)*(i*p-l*n),f=(d,c,E)=>d>=c&&d<=E?!0:d>=E&&d<=c;if(y===0)return!1;{const d={x:v/y,y:S/y};return f(d.x,s,r)&&f(d.y,o,a)&&f(d.x,i,n)&&f(d.y,l,p)}}};function Xe(t){return{draw:new qe(t),stylus:new Re(t),line:new Oe(t),rectangle:new Be(t),ellipse:new je(t),eraseLine:new Ze(t)}}var Ye=class{constructor(t={}){this.options=t,this.el=null,this.svgPoint=null,this.eventEl=null,this.shiftPressed=!1,this.altPressed=!1,this.drawing=!1,this._emitter=Me(),this._originalPointerId=null,this._models=Xe(this),this._opStack=[],this._opIndex=0,this._disposables=[],this._elements=[],this.options.brush||(this.options.brush={color:"black",size:3,mode:"stylus"}),t.el&&this.mount(t.el,t.eventTarget,t.window)}get model(){return this._models[this.mode]}get mounted(){return!!this.el}get mode(){return this.options.brush.mode||"stylus"}set mode(t){this._models[this.mode].onUnselected(),this.options.brush.mode=t,this.model.onSelected(this.el)}get brush(){return this.options.brush}set brush(t){this.options.brush=t}resolveSelector(t){return typeof t=="string"?document.querySelector(t):t||null}mount(t,e,s=window){if(this.el)throw new Error("[drauu] already mounted, unmount previous target first");if(this.el=this.resolveSelector(t),!this.el)throw new Error("[drauu] target element not found");if(this.el.tagName.toLocaleLowerCase()!=="svg")throw new Error("[drauu] can only mount to a SVG element");if(!this.el.createSVGPoint)throw new Error("[drauu] SVG element must be create by document.createElementNS('http://www.w3.org/2000/svg', 'svg')");this.svgPoint=this.el.createSVGPoint();const r=this.resolveSelector(e)||this.el,i=this.eventStart.bind(this),n=this.eventMove.bind(this),o=this.eventEnd.bind(this),a=this.eventKeyboard.bind(this);r.addEventListener("pointerdown",i,{passive:!1}),s.addEventListener("pointermove",n,{passive:!1}),s.addEventListener("pointerup",o,{passive:!1}),s.addEventListener("pointercancel",o,{passive:!1}),s.addEventListener("keydown",a,!1),s.addEventListener("keyup",a,!1),this._disposables.push(()=>{r.removeEventListener("pointerdown",i),s.removeEventListener("pointermove",n),s.removeEventListener("pointerup",o),s.removeEventListener("pointercancel",o),s.removeEventListener("keydown",a,!1),s.removeEventListener("keyup",a,!1)}),this._emitter.emit("mounted")}unmount(){this._disposables.forEach(t=>t()),this._disposables.length=0,this._elements.length=0,this.el=null,this._emitter.emit("unmounted")}on(t,e){return this._emitter.on(t,e)}undo(){return!this.canUndo()||this.drawing?!1:(this._opStack[--this._opIndex].undo(),this._emitter.emit("changed"),!0)}redo(){return!this.canRedo()||this.drawing?!1:(this._opStack[this._opIndex++].redo(),this._emitter.emit("changed"),!0)}canRedo(){return this._opIndex<this._opStack.length}canUndo(){return this._opIndex>0}eventMove(t){!this.acceptsInput(t)||!this.drawing||this.model._eventMove(t)&&(t.stopPropagation(),t.preventDefault(),this._emitter.emit("changed"))}eventStart(t){this.acceptsInput(t)&&(t.stopPropagation(),t.preventDefault(),this._currentNode&&this.cancel(),this.drawing=!0,this._originalPointerId=t.pointerId,this._emitter.emit("start"),this._currentNode=this.model._eventDown(t),this._currentNode&&this.mode!=="eraseLine"&&this.el.appendChild(this._currentNode),this._emitter.emit("changed"))}eventEnd(t){if(!this.acceptsInput(t)||!this.drawing)return;const e=this.model._eventUp(t);if(!e)this.cancel();else if(e===!0){const s=this._currentNode;this._appendNode(s),this.commit({undo:()=>this._removeNode(s),redo:()=>this._restoreNode(s)})}else this.commit(e);this.drawing=!1,this._emitter.emit("end"),this._emitter.emit("changed"),this._originalPointerId=null}acceptsInput(t){return(!this.options.acceptsInputTypes||this.options.acceptsInputTypes.includes(t.pointerType))&&!(this._originalPointerId&&this._originalPointerId!==t.pointerId)}eventKeyboard(t){this.shiftPressed===t.shiftKey&&this.altPressed===t.altKey||(this.shiftPressed=t.shiftKey,this.altPressed=t.altKey,this.model.point&&this.model.onMove(this.model.point)&&this._emitter.emit("changed"))}commit(t){this._opStack.length=this._opIndex,this._opStack.push(t),this._opIndex++;const e=this._currentNode;this._currentNode=void 0,this._emitter.emit("committed",e)}clear(){this._opStack.length=0,this._opIndex=0,this.cancel(),this.el.innerHTML="",this._emitter.emit("changed")}cancel(){this._currentNode&&(this.el.removeChild(this._currentNode),this._currentNode=void 0,this._emitter.emit("canceled"))}dump(){return this.el.innerHTML}load(t){this.clear(),this.el.innerHTML=t}_appendNode(t){const e=this._elements.at(-1);e?e.after(t):this.el.append(t);const s=this._elements.push(t)-1;t.dataset.drauu_index=s.toString()}_removeNode(t){t.remove(),this._elements[+t.dataset.drauu_index]=null}_restoreNode(t){const e=+t.dataset.drauu_index;this._elements[e]=t;for(let s=e-1;s>=0;s--){const r=this._elements[s];if(r){r.after(t);return}}this.el.prepend(t)}};function Qe(t){return new Ye(t)}const Je=Yt(()=>{const{currentSlideNo:t,isPresenter:e}=At(),s=["#ff595e","#ffca3a","#8ac926","#1982c4","#6a4c93","#ffffff","#000000"],r=at("slidev-drawing-enabled",!1),i=at("slidev-drawing-pinned",!1),n=Qt(at("slidev-drawing-brush",{color:s[0],size:4,mode:"stylus"})),o=C(!1),a=C(!1),l=C(!1),p=C(!1),y=C("stylus"),v=b(()=>ut.drawings.syncAll||e.value);let S=!1;const f=b({get(){return y.value},set(h){y.value=h,h==="arrow"?(c.mode="line",n.arrowEnd=!0):(c.mode=h,n.arrowEnd=!1)}}),d=Jt({brush:n,acceptsInputTypes:b(()=>r.value&&(!ut.drawings.presenterOnly||e.value)?void 0:["pen"]),coordinateTransform:!1}),c=Wt(Qe(d));function E(){c.clear(),v.value&&Et(t.value,"")}function R(){var h;l.value=c.canRedo(),a.value=c.canUndo(),p.value=!!((h=c.el)!=null&&h.children.length)}function D(h){S=!0;const x=ot[h||t.value];x!=null?c.load(x):c.clear(),R(),S=!1}return c.on("changed",()=>{if(R(),!S){const h=c.dump(),x=t.value;(ot[x]||"")!==h&&v.value&&Et(x,c.dump())}}),fe(h=>{S=!0,h[t.value]!=null&&c.load(h[t.value]||""),S=!1,R()}),te(()=>{ee(t,()=>{c.mounted&&D()},{immediate:!0})}),c.on("start",()=>o.value=!0),c.on("end",()=>o.value=!1),window.addEventListener("keydown",h=>{if(!r.value||pe.value)return;const x=!h.ctrlKey&&!h.altKey&&!h.shiftKey&&!h.metaKey;let _=!0;h.code==="KeyZ"&&(h.ctrlKey||h.metaKey)?h.shiftKey?c.redo():c.undo():h.code==="Escape"?r.value=!1:h.code==="KeyL"&&x?f.value="line":h.code==="KeyA"&&x?f.value="arrow":h.code==="KeyS"&&x?f.value="stylus":h.code==="KeyR"&&x?f.value="rectangle":h.code==="KeyE"&&x?f.value="ellipse":h.code==="KeyC"&&x?E():h.code.startsWith("Digit")&&x&&+h.code[5]<=s.length?n.color=s[+h.code[5]-1]:_=!1,_&&(h.preventDefault(),h.stopPropagation())},!1),{brush:n,brushColors:s,canClear:p,canRedo:l,canUndo:a,clear:E,drauu:c,drauuOptions:d,drawingEnabled:r,drawingMode:f,drawingPinned:i,drawingState:ot,isDrawing:o,loadCanvas:D}}),We=["innerHTML"],os=pt({__name:"DrawingPreview",props:{page:{}},setup(t){const{drawingState:e}=Je();return(s,r)=>F(e)[s.page]?(Y(),gt("svg",{key:0,class:"w-full h-full absolute top-0 pointer-events-none",innerHTML:F(e)[s.page]},null,8,We)):se("v-if",!0)}});export{is as G,as as S,os as _,rs as a,ge as b,Je as c,ns as d,ss as u};
