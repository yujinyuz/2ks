import{d as s,v as n,aG as o}from"../modules/vue-B4427qiu.js";import{C as p}from"../index-Cz7co0Tu.js";import{_ as i}from"./VClicks-B9pcvRhT.js";const f=s({props:{at:{type:[Number,String],default:"+1"},hide:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},wrapText:{type:Function,default:e=>n("span",e)}},render(){return n(i,{every:p,at:this.at,hide:this.hide,fade:this.fade,handleSpecialElements:!1},{default:()=>{var e,a;return(a=(e=this.$slots).default)==null?void 0:a.call(e).map(t=>t.type===o?this.wrapText(t):t)}})}});export{f as _};
