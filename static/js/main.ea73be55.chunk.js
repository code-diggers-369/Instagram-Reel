(this["webpackJsonpinsta-reel"]=this["webpackJsonpinsta-reel"]||[]).push([[0],{29:function(e,n,a){e.exports=a.p+"static/media/icon.bb817349.png"},30:function(e,n,a){e.exports=a.p+"static/media/vid1.ad2f460f.mp4"},31:function(e,n,a){e.exports=a.p+"static/media/vid2.a9705369.mp4"},32:function(e,n,a){e.exports=a.p+"static/media/vid3.b905646e.mp4"},36:function(e,n,a){e.exports=a(51)},41:function(e,n,a){},42:function(e,n,a){},48:function(e,n,a){},49:function(e,n,a){},50:function(e,n,a){},51:function(e,n,a){"use strict";a.r(n);var t=a(0),c=a.n(t),l=a(9),o=a.n(l),r=(a(41),a(33)),s=a(23),i=a.n(s),m=a(28),u=a.n(m);a(42);function d(){return c.a.createElement("div",{className:"video-header"},c.a.createElement(i.a,null),c.a.createElement("h3",null,"Reel"),c.a.createElement(u.a,null))}var v=a(69),E=a(66),f=a(67),h=a(68);a(48);function p(e){var n=e.channel,a=e.song,t=e.likes,l=e.comment,o=e.shares;return c.a.createElement("div",{className:"video-footer"},c.a.createElement("div",{className:"video-text"},c.a.createElement("h3",null,n," . (",a,")",c.a.createElement(v.a,null,c.a.createElement("h4",{style:{color:"white"}},"Follow")))),c.a.createElement("div",{className:"footer-buttons"},c.a.createElement("div",{className:"flex-box"},c.a.createElement(E.a,null),t),c.a.createElement("div",{className:"flex-box"},c.a.createElement(f.a,null),l),c.a.createElement("div",{className:"flex-box"},c.a.createElement(h.a,null),o)))}a(49);function g(e){var n=e.channel,a=e.song,l=e.url,o=e.likes,s=e.comment,i=e.shares,m=Object(t.useState)(!1),u=Object(r.a)(m,2),v=u[0],E=u[1],f=Object(t.useRef)();return Object(t.useEffect)((function(){var e=document.getElementById("video-container");e&&e.addEventListener("scroll",(function(){f.current.pause()}))}),[]),c.a.createElement("div",{className:"video-cards"},c.a.createElement(d,null),c.a.createElement("video",{onClick:function(){v?(f.current.pause(),E(!1)):(f.current.play(),E(!0))},className:"video-player",ref:f,src:l,loop:!0}),c.a.createElement(p,{channel:n,song:a,likes:o,comment:s,shares:i}))}var b=a(29),k=a.n(b),N=a(30),x=a.n(N),w=a(31),y=a.n(w),j=a(32),O=a.n(j);a(50);function B(){var e=[{channel:"aaa",song:"song-1",url:x.a,likes:"32",comment:"2",shares:"23"},{channel:"bbb",song:"song-2",url:y.a,likes:"3",comment:"22",shares:"23"},{channel:"ccc",song:"song-3",url:O.a,likes:"89",comment:"23",shares:"29"}];return c.a.createElement("div",{className:"App"},c.a.createElement("center",null,c.a.createElement("div",{className:"logo"},c.a.createElement("img",{alt:"logo",src:k.a,className:"insta-logo"})),c.a.createElement("h3",null,"Reel"),c.a.createElement("div",{className:"video-container",id:"video-container"},e.map((function(e,n){return c.a.createElement(g,{key:n,channel:e.channel,song:e.song,url:e.url,likes:e.likes,comment:e.comment,shares:e.shares})})))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.ea73be55.chunk.js.map