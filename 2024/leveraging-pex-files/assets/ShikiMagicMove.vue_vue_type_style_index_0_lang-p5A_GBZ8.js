import{d as H,z as at,v as z,t as U,O as lt,E as ct,n as q,ag as ft,Q as pt,o as gt,b as mt,l as yt,B as D}from"./modules/vue-B3MSS8ay.js";import{g as dt}from"./modules/file-saver-LUhfcczZ.js";import{v as bt,a as _t,aa as vt,C as wt,ab as St,ac as At}from"./index-CM3Ct9rq.js";import{u as kt}from"./slidev/context-DSAf3mji.js";const Mt=Object.freeze({diffTimeout:1,diffEditCost:4,matchThreshold:.5,matchDistance:1e3,patchDeleteThreshold:.5,patchMargin:4,matchMaxBits:32});function Ct(e){if(e!=null&&e.__resolved)return e;const n={...Mt,...e};return Object.defineProperty(n,"__resolved",{value:!0,enumerable:!1}),n}const L=-1,E=1,C=0;function M(e,n){return[e,n]}function O(e,n,r,s=!0,t){const i=Ct(r);typeof t>"u"&&(i.diffTimeout<=0?t=Number.MAX_VALUE:t=new Date().getTime()+i.diffTimeout*1e3);const c=t;if(e==null||n==null)throw new Error("Null input. (diff_main)");if(e===n)return e?[M(C,e)]:[];const f=s;let o=K(e,n);const a=e.substring(0,o);e=e.substring(o),n=n.substring(o),o=j(e,n);const h=e.substring(e.length-o);e=e.substring(0,e.length-o),n=n.substring(0,n.length-o);const l=Et(e,n,i,f,c);return a&&l.unshift(M(C,a)),h&&l.push(M(C,h)),I(l),l}function Et(e,n,r,s,t){let i;if(!e)return[M(E,n)];if(!n)return[M(L,e)];const c=e.length>n.length?e:n,f=e.length>n.length?n:e,o=c.indexOf(f);if(o!==-1)return i=[M(E,c.substring(0,o)),M(C,f),M(E,c.substring(o+f.length))],e.length>n.length&&(i[0][0]=i[2][0]=L),i;if(f.length===1)return[M(L,e),M(E,n)];const a=Ot(e,n,r);if(a){const h=a[0],l=a[1],u=a[2],m=a[3],p=a[4],d=O(h,u,r,s,t),k=O(l,m,r,s,t);return d.concat([M(C,p)],k)}return s&&e.length>100&&n.length>100?Bt(e,n,r,t):Lt(e,n,r,t)}function Bt(e,n,r,s){const t=Tt(e,n);e=t.chars1,n=t.chars2;const i=t.lineArray,c=O(e,n,r,!1,s);Rt(c,i),$t(c),c.push(M(C,""));let f=0,o=0,a=0,h="",l="";for(;f<c.length;){switch(c[f][0]){case E:a++,l+=c[f][1];break;case L:o++,h+=c[f][1];break;case C:if(o>=1&&a>=1){c.splice(f-o-a,o+a),f=f-o-a;const u=O(h,l,r,!1,s);for(let m=u.length-1;m>=0;m--)c.splice(f,0,u[m]);f=f+u.length}a=0,o=0,h="",l="";break}f++}return c.pop(),c}function Lt(e,n,r,s){const t=e.length,i=n.length,c=Math.ceil((t+i)/2),f=c,o=2*c,a=new Array(o),h=new Array(o);for(let S=0;S<o;S++)a[S]=-1,h[S]=-1;a[f+1]=0,h[f+1]=0;const l=t-i,u=l%2!==0;let m=0,p=0,d=0,k=0;for(let S=0;S<c&&!(new Date().getTime()>s);S++){for(let _=-S+m;_<=S-p;_+=2){const A=f+_;let y;_===-S||_!==S&&a[A-1]<a[A+1]?y=a[A+1]:y=a[A-1]+1;let v=y-_;for(;y<t&&v<i&&e.charAt(y)===n.charAt(v);)y++,v++;if(a[A]=y,y>t)p+=2;else if(v>i)m+=2;else if(u){const g=f+l-_;if(g>=0&&g<o&&h[g]!==-1){const b=t-h[g];if(y>=b)return W(e,n,r,y,v,s)}}}for(let _=-S+d;_<=S-k;_+=2){const A=f+_;let y;_===-S||_!==S&&h[A-1]<h[A+1]?y=h[A+1]:y=h[A-1]+1;let v=y-_;for(;y<t&&v<i&&e.charAt(t-y-1)===n.charAt(i-v-1);)y++,v++;if(h[A]=y,y>t)k+=2;else if(v>i)d+=2;else if(!u){const g=f+l-_;if(g>=0&&g<o&&a[g]!==-1){const b=a[g],w=f+b-g;if(y=t-y,b>=y)return W(e,n,r,b,w,s)}}}}return[M(L,e),M(E,n)]}function W(e,n,r,s,t,i){const c=e.substring(0,s),f=n.substring(0,t),o=e.substring(s),a=n.substring(t),h=O(c,f,r,!1,i),l=O(o,a,r,!1,i);return h.concat(l)}function Tt(e,n){const r=[],s={};let t=4e4;r[0]="";function i(o){let a="",h=0,l=-1,u=r.length;for(;l<o.length-1;){l=o.indexOf(`
`,h),l===-1&&(l=o.length-1);let m=o.substring(h,l+1);(s.hasOwnProperty?Object.prototype.hasOwnProperty.call(s,m):s[m]!==void 0)?a+=String.fromCharCode(s[m]):(u===t&&(m=o.substring(h),l=o.length),a+=String.fromCharCode(u),s[m]=u,r[u++]=m),h=l+1}return a}const c=i(e);t=65535;const f=i(n);return{chars1:c,chars2:f,lineArray:r}}function Rt(e,n){for(let r=0;r<e.length;r++){const s=e[r][1],t=[];for(let i=0;i<s.length;i++)t[i]=n[s.charCodeAt(i)];e[r][1]=t.join("")}}function K(e,n){if(!e||!n||e.charAt(0)!==n.charAt(0))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(i,t)===n.substring(i,t)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function j(e,n){if(!e||!n||e.charAt(e.length-1)!==n.charAt(n.length-1))return 0;let r=0,s=Math.min(e.length,n.length),t=s,i=0;for(;r<t;)e.substring(e.length-t,e.length-i)===n.substring(n.length-t,n.length-i)?(r=t,i=r):s=t,t=Math.floor((s-r)/2+r);return t}function J(e,n){const r=e.length,s=n.length;if(r===0||s===0)return 0;r>s?e=e.substring(r-s):r<s&&(n=n.substring(0,r));const t=Math.min(r,s);if(e===n)return t;let i=0,c=1;for(;;){const f=e.substring(t-c),o=n.indexOf(f);if(o===-1)return i;c+=o,(o===0||e.substring(t-c)===n.substring(0,c))&&(i=c,c++)}}function Ot(e,n,r){if(r.diffTimeout<=0)return null;const s=e.length>n.length?e:n,t=e.length>n.length?n:e;if(s.length<4||t.length*2<s.length)return null;function i(p,d,k){const S=p.substring(k,k+Math.floor(p.length/4));let _=-1,A="",y,v,g,b;for(;(_=d.indexOf(S,_+1))!==-1;){const w=K(p.substring(k),d.substring(_)),P=j(p.substring(0,k),d.substring(0,_));A.length<P+w&&(A=d.substring(_-P,_)+d.substring(_,_+w),y=p.substring(0,k-P),v=p.substring(k+w),g=d.substring(0,_-P),b=d.substring(_+w))}return A.length*2>=p.length?[y,v,g,b,A]:null}const c=i(s,t,Math.ceil(s.length/4)),f=i(s,t,Math.ceil(s.length/2));let o;if(!c&&!f)return null;f?c?o=c[4].length>f[4].length?c:f:o=f:o=c;let a,h,l,u;e.length>n.length?(a=o[0],h=o[1],l=o[2],u=o[3]):(l=o[0],u=o[1],a=o[2],h=o[3]);const m=o[4];return[a,h,l,u,m]}function $t(e){let n=!1;const r=[];let s=0,t=null,i=0,c=0,f=0,o=0,a=0;for(;i<e.length;)e[i][0]===C?(r[s++]=i,c=o,f=a,o=0,a=0,t=e[i][1]):(e[i][0]===E?o+=e[i][1].length:a+=e[i][1].length,t&&t.length<=Math.max(c,f)&&t.length<=Math.max(o,a)&&(e.splice(r[s-1],0,M(L,t)),e[r[s-1]+1][0]=E,s--,s--,i=s>0?r[s-1]:-1,c=0,f=0,o=0,a=0,t=null,n=!0)),i++;for(n&&I(e),zt(e),i=1;i<e.length;){if(e[i-1][0]===L&&e[i][0]===E){const h=e[i-1][1],l=e[i][1],u=J(h,l),m=J(l,h);u>=m?(u>=h.length/2||u>=l.length/2)&&(e.splice(i,0,M(C,l.substring(0,u))),e[i-1][1]=h.substring(0,h.length-u),e[i+1][1]=l.substring(u),i++):(m>=h.length/2||m>=l.length/2)&&(e.splice(i,0,M(C,h.substring(0,m))),e[i-1][0]=E,e[i-1][1]=l.substring(0,l.length-m),e[i+1][0]=L,e[i+1][1]=h.substring(m),i++),i++}i++}}const X=/[^a-zA-Z0-9]/,Y=/\s/,Q=/[\r\n]/,Dt=/\n\r?\n$/,Pt=/^\r?\n\r?\n/;function zt(e){function n(s,t){if(!s||!t)return 6;const i=s.charAt(s.length-1),c=t.charAt(0),f=i.match(X),o=c.match(X),a=f&&i.match(Y),h=o&&c.match(Y),l=a&&i.match(Q),u=h&&c.match(Q),m=l&&s.match(Dt),p=u&&t.match(Pt);return m||p?5:l||u?4:f&&!a&&h?3:a||h?2:f||o?1:0}let r=1;for(;r<e.length-1;){if(e[r-1][0]===C&&e[r+1][0]===C){let s=e[r-1][1],t=e[r][1],i=e[r+1][1];const c=j(s,t);if(c){const l=t.substring(t.length-c);s=s.substring(0,s.length-c),t=l+t.substring(0,t.length-c),i=l+i}let f=s,o=t,a=i,h=n(s,t)+n(t,i);for(;t.charAt(0)===i.charAt(0);){s+=t.charAt(0),t=t.substring(1)+i.charAt(0),i=i.substring(1);const l=n(s,t)+n(t,i);l>=h&&(h=l,f=s,o=t,a=i)}e[r-1][1]!==f&&(f?e[r-1][1]=f:(e.splice(r-1,1),r--),e[r][1]=o,a?e[r+1][1]=a:(e.splice(r+1,1),r--))}r++}}function I(e){e.push(M(C,""));let n=0,r=0,s=0,t="",i="",c;for(;n<e.length;)switch(e[n][0]){case E:s++,i+=e[n][1],n++;break;case L:r++,t+=e[n][1],n++;break;case C:r+s>1?(r!==0&&s!==0&&(c=K(i,t),c!==0&&(n-r-s>0&&e[n-r-s-1][0]===C?e[n-r-s-1][1]+=i.substring(0,c):(e.splice(0,0,M(C,i.substring(0,c))),n++),i=i.substring(c),t=t.substring(c)),c=j(i,t),c!==0&&(e[n][1]=i.substring(i.length-c)+e[n][1],i=i.substring(0,i.length-c),t=t.substring(0,t.length-c))),n-=r+s,e.splice(n,r+s),t.length&&(e.splice(n,0,M(L,t)),n++),i.length&&(e.splice(n,0,M(E,i)),n++),n++):n!==0&&e[n-1][0]===C?(e[n-1][1]+=e[n][1],e.splice(n,1)):n++,s=0,r=0,t="",i="";break}e[e.length-1][1]===""&&e.pop();let f=!1;for(n=1;n<e.length-1;)e[n-1][0]===C&&e[n+1][0]===C&&(e[n][1].substring(e[n][1].length-e[n-1][1].length)===e[n-1][1]?(e[n][1]=e[n-1][1]+e[n][1].substring(0,e[n][1].length-e[n-1][1].length),e[n+1][1]=e[n-1][1]+e[n+1][1],e.splice(n-1,1),f=!0):e[n][1].substring(0,e[n+1][1].length)===e[n+1][1]&&(e[n-1][1]+=e[n+1][1],e[n][1]=e[n][1].substring(e[n+1][1].length)+e[n+1][1],e.splice(n+1,1),f=!0)),n++;f&&I(e)}const V=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function jt(e,n){n?n={...V,...n}:n=V;const r=ht(n);return r.dispatch(e),r.toString()}const Nt=Object.freeze(["prototype","__proto__","constructor"]);function ht(e){let n="",r=new Map;const s=t=>{n+=t};return{toString(){return n},getContext(){return r},dispatch(t){return e.replacer&&(t=e.replacer(t)),this[t===null?"null":typeof t](t)},object(t){if(t&&typeof t.toJSON=="function")return this.object(t.toJSON());const i=Object.prototype.toString.call(t);let c="";const f=i.length;f<10?c="unknown:["+i+"]":c=i.slice(8,f-1),c=c.toLowerCase();let o=null;if((o=r.get(t))===void 0)r.set(t,r.size);else return this.dispatch("[CIRCULAR:"+o+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return s("buffer:"),s(t.toString("utf8"));if(c!=="object"&&c!=="function"&&c!=="asyncfunction")this[c]?this[c](t):e.ignoreUnknown||this.unkown(t,c);else{let a=Object.keys(t);e.unorderedObjects&&(a=a.sort());let h=[];e.respectType!==!1&&!G(t)&&(h=Nt),e.excludeKeys&&(a=a.filter(u=>!e.excludeKeys(u)),h=h.filter(u=>!e.excludeKeys(u))),s("object:"+(a.length+h.length)+":");const l=u=>{this.dispatch(u),s(":"),e.excludeValues||this.dispatch(t[u]),s(",")};for(const u of a)l(u);for(const u of h)l(u)}},array(t,i){if(i=i===void 0?e.unorderedArrays!==!1:i,s("array:"+t.length+":"),!i||t.length<=1){for(const o of t)this.dispatch(o);return}const c=new Map,f=t.map(o=>{const a=ht(e);a.dispatch(o);for(const[h,l]of a.getContext())c.set(h,l);return a.toString()});return r=c,f.sort(),this.array(f,!1)},date(t){return s("date:"+t.toJSON())},symbol(t){return s("symbol:"+t.toString())},unkown(t,i){if(s(i),!!t&&(s(":"),t&&typeof t.entries=="function"))return this.array(Array.from(t.entries()),!0)},error(t){return s("error:"+t.toString())},boolean(t){return s("bool:"+t)},string(t){s("string:"+t.length+":"),s(t)},function(t){s("fn:"),G(t)?this.dispatch("[native]"):this.dispatch(t.toString()),e.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),e.respectFunctionProperties&&this.object(t)},number(t){return s("number:"+t)},xml(t){return s("xml:"+t.toString())},null(){return s("Null")},undefined(){return s("Undefined")},regexp(t){return s("regex:"+t.toString())},uint8array(t){return s("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},uint8clampedarray(t){return s("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},int8array(t){return s("int8array:"),this.dispatch(Array.prototype.slice.call(t))},uint16array(t){return s("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},int16array(t){return s("int16array:"),this.dispatch(Array.prototype.slice.call(t))},uint32array(t){return s("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},int32array(t){return s("int32array:"),this.dispatch(Array.prototype.slice.call(t))},float32array(t){return s("float32array:"),this.dispatch(Array.prototype.slice.call(t))},float64array(t){return s("float64array:"),this.dispatch(Array.prototype.slice.call(t))},arraybuffer(t){return s("arraybuffer:"),this.dispatch(new Uint8Array(t))},url(t){return s("url:"+t.toString())},map(t){s("map:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},set(t){s("set:");const i=[...t];return this.array(i,e.unorderedSets!==!1)},file(t){return s("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},blob(){if(e.ignoreUnknown)return s("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return s("domwindow")},bigint(t){return s("bigint:"+t.toString())},process(){return s("process")},timer(){return s("timer")},pipe(){return s("pipe")},tcp(){return s("tcp")},udp(){return s("udp")},tty(){return s("tty")},statwatcher(){return s("statwatcher")},securecontext(){return s("securecontext")},connection(){return s("connection")},zlib(){return s("zlib")},context(){return s("context")},nodescript(){return s("nodescript")},httpparser(){return s("httpparser")},dataview(){return s("dataview")},signal(){return s("signal")},fsevent(){return s("fsevent")},tlswrap(){return s("tlswrap")}}}const ut="[native code] }",Ft=ut.length;function G(e){return typeof e!="function"?!1:Function.prototype.toString.call(e).slice(-Ft)===ut}class T{constructor(n,r){n=this.words=n||[],this.sigBytes=r===void 0?n.length*4:r}toString(n){return(n||xt).stringify(this)}concat(n){if(this.clamp(),this.sigBytes%4)for(let r=0;r<n.sigBytes;r++){const s=n.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=s<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<n.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=n.words[r>>>2];return this.sigBytes+=n.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new T([...this.words])}}const xt={stringify(e){const n=[];for(let r=0;r<e.sigBytes;r++){const s=e.words[r>>>2]>>>24-r%4*8&255;n.push((s>>>4).toString(16),(s&15).toString(16))}return n.join("")}},Ut={stringify(e){const n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let s=0;s<e.sigBytes;s+=3){const t=e.words[s>>>2]>>>24-s%4*8&255,i=e.words[s+1>>>2]>>>24-(s+1)%4*8&255,c=e.words[s+2>>>2]>>>24-(s+2)%4*8&255,f=t<<16|i<<8|c;for(let o=0;o<4&&s*8+o*6<e.sigBytes*8;o++)r.push(n.charAt(f>>>6*(3-o)&63))}return r.join("")}},qt={parse(e){const n=e.length,r=[];for(let s=0;s<n;s++)r[s>>>2]|=(e.charCodeAt(s)&255)<<24-s%4*8;return new T(r,n)}},Ht={parse(e){return qt.parse(unescape(encodeURIComponent(e)))}};class Kt{constructor(){this._data=new T,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new T,this._nDataBytes=0}_append(n){typeof n=="string"&&(n=Ht.parse(n)),this._data.concat(n),this._nDataBytes+=n.sigBytes}_doProcessBlock(n,r){}_process(n){let r,s=this._data.sigBytes/(this.blockSize*4);n?s=Math.ceil(s):s=Math.max((s|0)-this._minBufferSize,0);const t=s*this.blockSize,i=Math.min(t*4,this._data.sigBytes);if(t){for(let c=0;c<t;c+=this.blockSize)this._doProcessBlock(this._data.words,c);r=this._data.words.splice(0,t),this._data.sigBytes-=i}return new T(r,i)}}class It extends Kt{update(n){return this._append(n),this._process(),this}finalize(n){n&&this._append(n)}}const tt=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Zt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],R=[];class Wt extends It{constructor(){super(...arguments),this._hash=new T([...tt])}reset(){super.reset(),this._hash=new T([...tt])}_doProcessBlock(n,r){const s=this._hash.words;let t=s[0],i=s[1],c=s[2],f=s[3],o=s[4],a=s[5],h=s[6],l=s[7];for(let u=0;u<64;u++){if(u<16)R[u]=n[r+u]|0;else{const A=R[u-15],y=(A<<25|A>>>7)^(A<<14|A>>>18)^A>>>3,v=R[u-2],g=(v<<15|v>>>17)^(v<<13|v>>>19)^v>>>10;R[u]=y+R[u-7]+g+R[u-16]}const m=o&a^~o&h,p=t&i^t&c^i&c,d=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),k=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),S=l+k+m+Zt[u]+R[u],_=d+p;l=h,h=a,a=o,o=f+S|0,f=c,c=i,i=t,t=S+_|0}s[0]=s[0]+t|0,s[1]=s[1]+i|0,s[2]=s[2]+c|0,s[3]=s[3]+f|0,s[4]=s[4]+o|0,s[5]=s[5]+a|0,s[6]=s[6]+h|0,s[7]=s[7]+l|0}finalize(n){super.finalize(n);const r=this._nDataBytes*8,s=this._data.sigBytes*8;return this._data.words[s>>>5]|=128<<24-s%32,this._data.words[(s+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(s+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Jt(e){return new Wt().finalize(e).toString(Ut)}function Xt(e,n={}){const r=typeof e=="string"?e:jt(e,n);return Jt(r).slice(0,10)}function Yt(e,n,r="",s=!1){const t=Xt(e+r);let i=0,c=0;const f=Math.ceil(Math.log10(n.length)),o=Qt(n).flatMap((a,h)=>{var m;c=((m=a[0])==null?void 0:m.offset)||i;const l=a[a.length-1];l?i=l.offset+l.content.length:i+=1;const u=[...a,{content:`
`,offset:i}];return s&&u.unshift({key:`${t}-ln-${h+1}`,content:`${String(h+1).padStart(f," ")}  `,offset:c,htmlClass:"shiki-magic-move-line-number"}),u}).map((a,h)=>{const l=a;return l.key||(l.key=`${t}-${h}`),l});return{code:e,hash:t,tokens:o,lineNumbers:s}}function Qt(e){return e.map(n=>n.flatMap(r=>{if(r.content.match(/^\s+$/))return r;const s=r.content.match(/^(\s*)(.*?)(\s*)$/);if(!s)return r;const[,t,i,c]=s;if(!t&&!c)return r;const f=[{...r,offset:r.offset+t.length,content:i}];return t&&f.unshift({content:t,offset:r.offset}),c&&f.push({content:c,offset:r.offset+t.length+i.length}),f}))}function Vt(e,n){let r=0;const s=e.key;let t=0;const i=[];function c(){return t===0?(t++,s):`${s}-${t++}`}for(const f of n)f>r&&i.push({...e,content:e.content.slice(r,f),offset:e.offset+r,key:c()}),r=f;return r<e.content.length&&i.push({...e,content:e.content.slice(r),offset:e.offset+r,key:c()}),i}function et(e,n){const r=Array.from(n instanceof Set?n:new Set(n)).sort((s,t)=>s-t);return r.length?e.flatMap(s=>{const t=r.filter(i=>s.offset<i&&i<s.offset+s.content.length).map(i=>i-s.offset).sort((i,c)=>i-c);return t.length?Vt(s,t):s}):e}function Gt(e,n,r={}){const{splitTokens:s=!1,enhanceMatching:t=!0}=r,i=te(e.code,n.code,r),c=s?et(e.tokens,i.flatMap(a=>a.from)):e.tokens,f=s?et(n.tokens,i.flatMap(a=>a.to)):n.tokens,o=new Set;if(i.forEach(a=>{var p,d;const h=c.filter(k=>k.offset>=a.from[0]&&k.offset+k.content.length<=a.from[1]),l=f.filter(k=>k.offset>=a.to[0]&&k.offset+k.content.length<=a.to[1]);let u=0,m=0;for(;u<h.length&&m<l.length&&!(!h[u]||!l[m]);)h[u].content===l[m].content?(l[m].key=h[u].key,o.add(h[u].key),u++,m++):((p=h[u+1])==null?void 0:p.content)===l[m].content?u++:(h[u].content===((d=l[m+1])==null?void 0:d.content)||u++,m++)}),t)for(const a of c){if(o.has(a.key)||a.content.length<3||!a.content.match(/^[\w-]+$/))continue;const h=f.find(l=>l.content===a.content&&!o.has(l.key));h&&(h.key=a.key,o.add(a.key))}return{from:c.length===e.tokens.length?e:{...e,tokens:c},to:f.length===n.tokens.length?n:{...n,tokens:f}}}function te(e,n,r={}){var f;let s=O(e,n);s=((f=r.diffCleanup)==null?void 0:f.call(r,s))||s;let t="",i="";const c=[];for(const[o,a]of s)o===0?(c.push({from:[t.length,t.length+a.length],to:[i.length,i.length+a.length],content:a}),t+=a,i+=a):o===-1?t+=a:o===1&&(i+=a);if(t!==e||i!==n)throw new Error("Content mismatch");return c}var ee=Object.defineProperty,ne=(e,n,r)=>n in e?ee(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,$=(e,n,r)=>(ne(e,typeof n!="symbol"?n+"":n,r),r);const B="shiki-magic-move",N=`${B}-leave-from`,se=`${B}-leave-to`,nt=`${B}-leave-active`,F=`${B}-enter-from`,x=`${B}-enter-to`,st=`${B}-enter-active`,rt=`${B}-move`,it=`${B}-container-resize`,ot=`${B}-container-restyle`,re={globalScale:1,duration:500,delayMove:.3,delayLeave:.1,delayEnter:.7,delayContainer:.4,stagger:0,easing:"ease",animateContainer:!0,containerStyle:!0};class ie{constructor(n,r={}){$(this,"mapDom",new Map),$(this,"container"),$(this,"anchor"),$(this,"previousPromises",[]),$(this,"options"),$(this,"isFirstRender",!0),this.options={...re,...r},typeof n=="string"?this.container=document.querySelector(n):this.container=n,this.anchor=document.createElement("span"),this.anchor.style.position="absolute",this.anchor.style.top="0",this.anchor.style.left="0",this.anchor.style.height="1px",this.anchor.style.width="1px",this.container.prepend(this.anchor)}applyElementContent(n,r){r.content!==`
`&&(n.textContent=r.content,n.classList.add(`${B}-item`))}applyElementStyle(n,r){r.htmlStyle&&n.setAttribute("style",r.htmlStyle),r.htmlClass&&(n.className=[`${B}-item`,r.htmlClass].join(" ")),r.color&&(n.style.color=r.color),r.bgColor&&(n.style.backgroundColor=r.bgColor)}applyElement(n,r){this.applyElementContent(n,r),this.applyElementStyle(n,r)}applyNodeStyle(n,r){if(r.bg&&(n.style.backgroundColor=r.bg),r.fg&&(n.style.color=r.fg),r.rootStyle){const s=r.rootStyle.split(";");for(const t of s){const[i,c]=t.split(":");i&&c&&n.style.setProperty(i.trim(),c.trim())}}}applyContainerStyle(n){this.options.containerStyle&&this.applyNodeStyle(this.container,n)}registerTransitionEnd(n,r){return()=>{let s=!1,t=()=>{};const i=Promise.race([Promise.allSettled(n.getAnimations().map(c=>c.finished)).then(()=>r()),new Promise(c=>{t=()=>{s||(s=!0,r(),c())}})]);return i.resolve=t,i}}setCssVariables(){this.container.style.setProperty("--smm-duration",`${this.options.duration}ms`),this.container.style.setProperty("--smm-delay-move",`${this.options.delayMove}`),this.container.style.setProperty("--smm-delay-leave",`${this.options.delayLeave}`),this.container.style.setProperty("--smm-delay-enter",`${this.options.delayEnter}`),this.container.style.setProperty("--smm-delay-container",`${this.options.delayContainer}`),this.container.style.setProperty("--smm-easing",this.options.easing),this.container.style.setProperty("--smm-stagger","0")}replace(n){const r=new Map,s=n.tokens.map(t=>{if(this.mapDom.has(t.key)){const i=this.mapDom.get(t.key);return this.applyElement(i,t),r.set(t.key,i),this.mapDom.delete(t.key),i}else{const i=document.createElement(t.content===`
`?"br":"span");return this.applyElement(i,t),r.set(t.key,i),i}});this.container.replaceChildren(this.anchor,...s),this.applyContainerStyle(n),this.mapDom=r}render(n){this.setCssVariables();const r=new Map,s=[],t=[],i=[],c=[];this.previousPromises.forEach(p=>p.resolve()),this.previousPromises=[];const f=[],{globalScale:o}=this.options,a=new Map;let h=this.anchor.getBoundingClientRect();const l=this.container.getBoundingClientRect();for(const p of this.mapDom.values()){const d=p.getBoundingClientRect();a.set(p,{x:d.x-h.x,y:d.y-h.y})}const u=n.tokens.map(p=>{if(this.mapDom.has(p.key)){const d=this.mapDom.get(p.key);return this.applyElementContent(d,p),f.push(()=>{this.applyElementStyle(d,p)}),s.push(d),r.set(p.key,d),this.mapDom.delete(p.key),d}else{const d=document.createElement(p.content===`
`?"br":"span");return this.applyElement(d,p),t.push(d),r.set(p.key,d),d}});for(const[p,d]of this.mapDom)d.tagName!=="BR"&&i.push(d);for(const p of i)p.style.position="absolute";if(this.container.replaceChildren(this.anchor,...u,...i),this.mapDom=r,i.forEach((p,d)=>{p.style.position="absolute";const k=a.get(p);p.style.top=`${k.y/o}px`,p.style.left=`${k.x/o}px`,this.options.stagger?p.style.setProperty("--smm-stagger",`${d*this.options.stagger}ms`):p.style.removeProperty("--smm-stagger"),p.classList.add(N),p.classList.add(nt),f.unshift(()=>{p.classList.remove(N),p.classList.add(se)}),c.push(this.registerTransitionEnd(p,()=>{p.classList.remove(N),p.classList.remove(nt),p.classList.remove(x),p.remove()}))}),this.isFirstRender||t.forEach((p,d)=>{p.classList.add(F),p.classList.add(st),this.options.stagger?p.style.setProperty("--smm-stagger",`${d*this.options.stagger}ms`):p.style.removeProperty("--smm-stagger"),f.push(()=>{p.classList.remove(F),p.classList.add(x)}),c.push(this.registerTransitionEnd(p,()=>{p.classList.remove(F),p.classList.remove(st),p.classList.remove(x)}))}),h=this.anchor.getBoundingClientRect(),s.forEach((p,d)=>{const k=p.getBoundingClientRect(),S={x:k.x-h.x,y:k.y-h.y},_=a.get(p);p.style.transitionDuration=p.style.transitionDelay="0ms";const A=(_.x-S.x)/o,y=(_.y-S.y)/o;p.style.transform=`translate(${A}px, ${y}px)`,this.options.stagger?p.style.setProperty("--smm-stagger",`${d*this.options.stagger}ms`):p.style.removeProperty("--smm-stagger"),f.unshift(()=>{p.classList.add(rt),p.style.transform=p.style.transitionDuration=p.style.transitionDelay=""}),c.push(this.registerTransitionEnd(p,()=>{p.classList.remove(rt)}))}),this.options.animateContainer&&!this.isFirstRender){const p=this.container.getBoundingClientRect();(p.width!==l.width||p.height!==l.height)&&(this.container.style.transitionDuration=this.container.style.transitionDelay="0ms",this.container.style.height=`${l.height/o}px`,this.container.style.width=`${l.width/o}px`,f.unshift(()=>{this.container.classList.add(it),this.container.style.transitionDuration=this.container.style.transitionDelay="",this.container.style.height=`${p.height/o}px`,this.container.style.width=`${p.width/o}px`}),c.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(it),this.container.style.height=this.container.style.width=""})))}this.options.containerStyle&&(this.isFirstRender?this.applyContainerStyle(n):(f.push(()=>{this.container.classList.add(ot),this.applyContainerStyle(n)}),c.push(this.registerTransitionEnd(this.container,()=>{this.container.classList.remove(ot)})))),oe(),f.forEach(p=>p());const m=c.map(p=>p());return this.isFirstRender=!1,this.previousPromises=m,Promise.all(m).then()}}function oe(){return document.body.offsetHeight}const ae=H({name:"ShikiMagicMoveRenderer",props:{animate:{type:Boolean,default:!0},tokens:{type:Object,required:!0},previous:{type:Object,required:!1},options:{type:Object}},emits:["end","start"],setup(e,{emit:n}){const r=U();let s=!1;return lt(()=>{r.value.innerHTML="",s=!0;const t=new ie(r.value);ct(()=>e.tokens,async i=>{if(Object.assign(t.options,e.options),e.animate){e.previous&&t.replace(e.previous),await q();const c=t.render(i);await q(),n("start"),await c,n("end")}else t.replace(i)},{immediate:!0})}),()=>z("pre",{ref:r,class:"shiki-magic-move-container"},s?void 0:ft(e.tokens.tokens,t=>t.content===`
`?z("br",{key:t.key}):z("span",{style:[{color:t.color},t.htmlStyle],class:["shiki-magic-move-item",t.htmlClass],key:t.key},t.content)))}}),le=H({name:"ShikiMagicMovePrecompiled",props:{steps:{type:Array,required:!0},step:{type:Number,default:0},animate:{type:Boolean,default:!0},options:{type:Object,default:()=>({})}},emits:["start","end"],setup(e,{emit:n}){let s=Yt("",[]);const t=at(()=>{const i=Gt(s,e.steps[Math.min(e.step,e.steps.length-1)],e.options);return s=i.to,i});return()=>z(ae,{tokens:t.value.to,previous:t.value.from,options:e.options,animate:e.animate,onStart:()=>n("start"),onEnd:()=>n("end")})}});var Z={exports:{}};Z.exports;(function(e){var n=function(){var r=String.fromCharCode,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",i={};function c(o,a){if(!i[o]){i[o]={};for(var h=0;h<o.length;h++)i[o][o.charAt(h)]=h}return i[o][a]}var f={compressToBase64:function(o){if(o==null)return"";var a=f._compress(o,6,function(h){return s.charAt(h)});switch(a.length%4){default:case 0:return a;case 1:return a+"===";case 2:return a+"==";case 3:return a+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:f._decompress(o.length,32,function(a){return c(s,o.charAt(a))})},compressToUTF16:function(o){return o==null?"":f._compress(o,15,function(a){return r(a+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:f._decompress(o.length,16384,function(a){return o.charCodeAt(a)-32})},compressToUint8Array:function(o){for(var a=f.compress(o),h=new Uint8Array(a.length*2),l=0,u=a.length;l<u;l++){var m=a.charCodeAt(l);h[l*2]=m>>>8,h[l*2+1]=m%256}return h},decompressFromUint8Array:function(o){if(o==null)return f.decompress(o);for(var a=new Array(o.length/2),h=0,l=a.length;h<l;h++)a[h]=o[h*2]*256+o[h*2+1];var u=[];return a.forEach(function(m){u.push(r(m))}),f.decompress(u.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":f._compress(o,6,function(a){return t.charAt(a)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),f._decompress(o.length,32,function(a){return c(t,o.charAt(a))}))},compress:function(o){return f._compress(o,16,function(a){return r(a)})},_compress:function(o,a,h){if(o==null)return"";var l,u,m={},p={},d="",k="",S="",_=2,A=3,y=2,v=[],g=0,b=0,w;for(w=0;w<o.length;w+=1)if(d=o.charAt(w),Object.prototype.hasOwnProperty.call(m,d)||(m[d]=A++,p[d]=!0),k=S+d,Object.prototype.hasOwnProperty.call(m,k))S=k;else{if(Object.prototype.hasOwnProperty.call(p,S)){if(S.charCodeAt(0)<256){for(l=0;l<y;l++)g=g<<1,b==a-1?(b=0,v.push(h(g)),g=0):b++;for(u=S.charCodeAt(0),l=0;l<8;l++)g=g<<1|u&1,b==a-1?(b=0,v.push(h(g)),g=0):b++,u=u>>1}else{for(u=1,l=0;l<y;l++)g=g<<1|u,b==a-1?(b=0,v.push(h(g)),g=0):b++,u=0;for(u=S.charCodeAt(0),l=0;l<16;l++)g=g<<1|u&1,b==a-1?(b=0,v.push(h(g)),g=0):b++,u=u>>1}_--,_==0&&(_=Math.pow(2,y),y++),delete p[S]}else for(u=m[S],l=0;l<y;l++)g=g<<1|u&1,b==a-1?(b=0,v.push(h(g)),g=0):b++,u=u>>1;_--,_==0&&(_=Math.pow(2,y),y++),m[k]=A++,S=String(d)}if(S!==""){if(Object.prototype.hasOwnProperty.call(p,S)){if(S.charCodeAt(0)<256){for(l=0;l<y;l++)g=g<<1,b==a-1?(b=0,v.push(h(g)),g=0):b++;for(u=S.charCodeAt(0),l=0;l<8;l++)g=g<<1|u&1,b==a-1?(b=0,v.push(h(g)),g=0):b++,u=u>>1}else{for(u=1,l=0;l<y;l++)g=g<<1|u,b==a-1?(b=0,v.push(h(g)),g=0):b++,u=0;for(u=S.charCodeAt(0),l=0;l<16;l++)g=g<<1|u&1,b==a-1?(b=0,v.push(h(g)),g=0):b++,u=u>>1}_--,_==0&&(_=Math.pow(2,y),y++),delete p[S]}else for(u=m[S],l=0;l<y;l++)g=g<<1|u&1,b==a-1?(b=0,v.push(h(g)),g=0):b++,u=u>>1;_--,_==0&&(_=Math.pow(2,y),y++)}for(u=2,l=0;l<y;l++)g=g<<1|u&1,b==a-1?(b=0,v.push(h(g)),g=0):b++,u=u>>1;for(;;)if(g=g<<1,b==a-1){v.push(h(g));break}else b++;return v.join("")},decompress:function(o){return o==null?"":o==""?null:f._decompress(o.length,32768,function(a){return o.charCodeAt(a)})},_decompress:function(o,a,h){var l=[],u=4,m=4,p=3,d="",k=[],S,_,A,y,v,g,b,w={val:h(0),position:a,index:1};for(S=0;S<3;S+=1)l[S]=S;for(A=0,v=Math.pow(2,2),g=1;g!=v;)y=w.val&w.position,w.position>>=1,w.position==0&&(w.position=a,w.val=h(w.index++)),A|=(y>0?1:0)*g,g<<=1;switch(A){case 0:for(A=0,v=Math.pow(2,8),g=1;g!=v;)y=w.val&w.position,w.position>>=1,w.position==0&&(w.position=a,w.val=h(w.index++)),A|=(y>0?1:0)*g,g<<=1;b=r(A);break;case 1:for(A=0,v=Math.pow(2,16),g=1;g!=v;)y=w.val&w.position,w.position>>=1,w.position==0&&(w.position=a,w.val=h(w.index++)),A|=(y>0?1:0)*g,g<<=1;b=r(A);break;case 2:return""}for(l[3]=b,_=b,k.push(b);;){if(w.index>o)return"";for(A=0,v=Math.pow(2,p),g=1;g!=v;)y=w.val&w.position,w.position>>=1,w.position==0&&(w.position=a,w.val=h(w.index++)),A|=(y>0?1:0)*g,g<<=1;switch(b=A){case 0:for(A=0,v=Math.pow(2,8),g=1;g!=v;)y=w.val&w.position,w.position>>=1,w.position==0&&(w.position=a,w.val=h(w.index++)),A|=(y>0?1:0)*g,g<<=1;l[m++]=r(A),b=m-1,u--;break;case 1:for(A=0,v=Math.pow(2,16),g=1;g!=v;)y=w.val&w.position,w.position>>=1,w.position==0&&(w.position=a,w.val=h(w.index++)),A|=(y>0?1:0)*g,g<<=1;l[m++]=r(A),b=m-1,u--;break;case 2:return k.join("")}if(u==0&&(u=Math.pow(2,p),p++),l[b])d=l[b];else if(b===m)d=_+_.charAt(0);else return null;k.push(d),l[m++]=_+d.charAt(0),u--,_=d,u==0&&(u=Math.pow(2,p),p++)}}};return f}();e!=null?e.exports=n:typeof angular<"u"&&angular!=null&&angular.module("LZString",[]).factory("LZString",function(){return n})})(Z);var ce=Z.exports;const he=dt(ce),me=H({__name:"ShikiMagicMove",props:{at:{type:[String,Number],default:"+1"},stepsLz:{type:String,required:!0},stepRanges:{type:Array,required:!0},lines:{type:Boolean,default:bt.lineNumbers}},setup(e){const n=e,r=JSON.parse(he.decompressFromBase64(n.stepsLz)),{$clicksContext:s,$scale:t,$zoom:i}=kt(),{isPrintMode:c}=_t(),f=vt(),o=U(0),a=U(),h=at(()=>n.stepRanges.map(l=>l.length?l:["all"]));return pt(()=>{s==null||s.unregister(f)}),lt(()=>{if(!s)return;if(h.value.length!==r.length)throw new Error("[slidev] The length of stepRanges does not match the length of steps, this is an internal error.");const l=h.value.map(m=>m.length).reduce((m,p)=>m+p,0),u=s.calculateSince(n.at,l-1);s.register(f,u),ct(()=>s.current,()=>{const m=u?s.current-u.start:wt;let p=r.length-1,d=0,k="all";for(let S=0;S<h.value.length;S++){const _=h.value[S];if(m<d+_.length-1){p=S,k=_[m-d+1];break}d+=_.length||1}q(async()=>{var y;o.value=p,await St(0);const S=(y=a.value)==null?void 0:y.querySelector(".shiki");if(!S)return;const A=Array.from(S.children).slice(1).filter(v=>!v.className.includes("shiki-magic-move-leave")).reduce((v,g)=>(g.tagName==="BR"?v.push([]):v[v.length-1].push(g),v),[[]]);At(k,A.length,1,v=>A[v])})},{immediate:!0})}),(l,u)=>(gt(),mt("div",{ref_key:"container",ref:a,class:"slidev-code-wrapper slidev-code-magic-move relative"},[yt(D(le),{class:"slidev-code relative shiki overflow-visible",steps:D(r),step:o.value,animate:!D(c),options:{globalScale:D(t)*D(i),duration:800,stagger:1}},null,8,["steps","step","animate","options"])],512))}});export{me as _};
