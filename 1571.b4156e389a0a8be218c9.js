(self.webpackChunksstyleapp=self.webpackChunksstyleapp||[]).push([[1571],{1571:(e,t,o)=>{"use strict";o.r(t),o.d(t,{startTapClick:()=>n});var s=o(1843);const n=e=>{let t,o,n,v,p=10*-u,f=0;const L=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,h=e=>{p=(0,s.o)(e),g(e)},E=()=>{clearTimeout(v),v=void 0,o&&(y(!1),o=void 0)},w=e=>{o||void 0!==t&&null!==t.parentElement||(t=void 0,k(i(e),e))},g=e=>{k(void 0,e)},k=(e,t)=>{if(e&&e===o)return;clearTimeout(v),v=void 0;const{x:n,y:i}=(0,s.p)(t);if(o){if(m.has(o))throw new Error("internal error");o.classList.contains(c)||T(o,n,i),y(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const o=a(e)?0:d;e.classList.remove(c),v=setTimeout(()=>{T(e,n,i),v=void 0},o)}o=e},T=(e,t,o)=>{f=Date.now(),e.classList.add(c);const s=L&&r(e);s&&s.addRipple&&(b(),n=s.addRipple(t,o))},b=()=>{void 0!==n&&(n.then(e=>e()),n=void 0)},y=e=>{b();const t=o;if(!t)return;const s=l-Date.now()+f;if(e&&s>0&&!a(t)){const e=setTimeout(()=>{t.classList.remove(c),m.delete(t)},l);m.set(t,e)}else t.classList.remove(c)},S=document;S.addEventListener("ionScrollStart",e=>{t=e.target,E()}),S.addEventListener("ionScrollEnd",()=>{t=void 0}),S.addEventListener("ionGestureCaptured",E),S.addEventListener("touchstart",e=>{p=(0,s.o)(e),w(e)},!0),S.addEventListener("touchcancel",h,!0),S.addEventListener("touchend",h,!0),S.addEventListener("mousedown",e=>{const t=(0,s.o)(e)-u;p<t&&w(e)},!0),S.addEventListener("mouseup",e=>{const t=(0,s.o)(e)-u;p<t&&g(e)},!0)},i=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const o=t[e];if(o.classList&&o.classList.contains("ion-activatable"))return o}}},a=e=>e.classList.contains("ion-activatable-instant"),r=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},c="ion-activated",d=200,l=200,u=2500}}]);