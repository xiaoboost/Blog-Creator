function E(e){return typeof e=="string"}function h(e){try{return JSON.parse(e)}catch(n){return}}(()=>{function e(o){let s=`<div class="ls-info-box"><pre>${o.map(i=>E(i)?i:`<span class="${i[0]}">${i[1]}</span>`).join("")}</pre></div>`,r=document.createElement("div");return r.innerHTML=s,r.children[0]}let n=document.querySelectorAll("pre span[ls-info]");for(let o of Array.from(n)){let t=o.getAttribute("ls-info")??"",s=h(decodeURI(t));if(o.setAttribute("ls-info",""),!s)return;let r=e(s);o.addEventListener("mouseenter",()=>{let i=o.getBoundingClientRect();document.body.appendChild(r),r.style.left=`${i.left}px`,r.style.top=`${i.top}px`}),o.addEventListener("mouseleave",()=>{document.body.removeChild(r)})}})();var O=typeof window!="undefined",l=O&&window.navigator.userAgent.toLowerCase(),J=l&&/msie|trident/.test(l),z=l&&l.indexOf("msie 9.0")>0,H=l&&l.indexOf("edge/")>0,Y=l&&l.indexOf("android")>0,G=l&&/iphone|ipad|ipod|ios/.test(l),V=l&&/chrome\/\d+/.test(l)&&!H,y=!1,C=!1;if(O){try{let e=Object.defineProperty({},"passive",{get(){y=!0}});document.body.addEventListener("test",null,e)}catch(e){}try{let e=Object.defineProperty({},"once",{get(){C=!0}});document.body.addEventListener("test",null,e)}catch(e){}}function d(e=0){return new Promise(n=>setTimeout(n,e))}async function v(e,n){e.style.display!=="block"&&(e.style.display="block",e.style.opacity="0",await d(),e.style.opacity="1",e.style.transition=`opacity ${n}ms linear`)}async function A(e,n){if(e.style.display!=="none"){if(!e.style.display){e.style.display="none";return}e.style.display="block",e.style.opacity="1",await d(),e.style.opacity="0",e.style.transition=`opacity ${n}ms linear`,await d(n),e.style.display="none"}}var L="goto-top",j=400,b=400;(()=>{let e=document.body.querySelector(`#${L}`),n=e?.parentElement;if(!e||!n)return;let o=y?{passive:!0,capture:!1}:!1,t=!1,s=()=>{window.scrollY>j?v(e,b):(A(e,b),t=!1)};s(),window.addEventListener("scroll",s,o),e.addEventListener("click",r=>{t||(t=!0,r.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))})})();var k="to-content",x=20,T="menu-item-highlight",S=2;function I(e,n){let o=n.trim(),t=(e.getAttribute("class")??"").split(/\s+/);if(t.includes(o))return;let s=t.concat(n.trim()).join(" ");e.setAttribute("class",s)}function P(e,n){let o=n.trim(),t=(e.getAttribute("class")??"").split(/\s+/);if(!t.includes(o))return;let s=t.filter(r=>r!==o).join(" ");e.setAttribute("class",s)}var p;(function(t){t[t.Init=0]="Init",t[t.Follow=1]="Follow",t[t.Static=2]="Static"})(p||(p={}));(()=>{let e=document.body.querySelector(`#${k}`),n=e?.parentElement;if(!e||!n)return;let o=Array.from(e.querySelectorAll(".menu-item")),t=n.offsetTop-x,s=y?{passive:!0,capture:!1}:!1,r=[],i=0,w=()=>{let a=window.scrollY;a>t&&(i===2||i===0)?(i=1,e.style.position="fixed",e.style.top=`${x}px`):a<=t&&(i===1||i===0)&&(i=2,e.style.position="",e.style.top="");let c=r.find(m=>m.offsetTop<a),f=(c&&e.querySelector(`[href="#${c.title}"]`))?.parentElement;o.forEach(m=>{m===f?I(f,T):P(m,T)})},g=()=>{let a=document.querySelector(".main-article");r=Array.from(a?.querySelectorAll(".anchor")??[]).map(c=>{let u=c.parentElement,f=u?.tagName.toLowerCase();return!f||!u?void 0:Number(f?.slice(1))<=S?u:void 0}).map(c=>({title:c?.getAttribute("id"),offsetTop:c?.offsetTop})).filter(c=>Boolean(c.title&&c.offsetTop)).sort((c,u)=>c.offsetTop>u.offsetTop?-1:1)};g(),w(),window.addEventListener("scroll",w,s),window.addEventListener("resize",g,s)})();