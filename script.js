const graphicDesign = [
  {title:"India's Most Brutal Serial Killer", src:"assets/01_MAIN_FINAL (1).png", kind:"thumbnail", label:"YOUTUBE THUMBNAIL"},
  {title:"A’ja Wilson — WNBA Champion", src:"assets/01-FINAL-WILSON (1).jpg", kind:"poster", label:"POSTER DESIGN"},
  {title:"Virat Kohli — 100 v/s Pakistan", src:"assets/02-KOHLI GRAINED (1).jpg", kind:"poster", label:"POSTER DESIGN"},
  {title:"Hypocrite — Samay Raina / Ashneer", src:"assets/ART 3 (1).png", kind:"thumbnail", label:"YOUTUBE THUMBNAIL"},
  {title:"5 Free After Effects Plugins", src:"assets/AE_PLUGINS_THUMBNAILS.png", kind:"thumbnail", label:"YOUTUBE THUMBNAIL"},
  {title:"Kinetic Typography in After Effects", src:"assets/KINETIC UPDATED.png", kind:"thumbnail", label:"YOUTUBE THUMBNAIL"}
];
const motionGraphics = [
  {title:"Motion Graphics #01", driveId:""},{title:"Motion Graphics #02", driveId:""},{title:"Motion Graphics #03", driveId:""},{title:"Motion Graphics #04", driveId:""},{title:"Motion Graphics #05", driveId:""},{title:"Motion Graphics #06", driveId:""},{title:"Motion Graphics #07", driveId:""}
];
const longForm = [
  {title:"Long Form #01", driveId:"1VP1E0dTArBwiyP7S0YA7v85yW7Sb767n"},{title:"Long Form #02", driveId:""},{title:"Long Form #03", driveId:""}
];
const shorts = [
  {id:"thgm6CuEBVw", title:"Short #01", type:"REELS / SHORTS · SOCIAL", start:0, label:"00:00"},
  {id:"QxibdIAmiD4", title:"Short #02", type:"REELS / SHORTS · SOCIAL", start:0, label:"00:00"},
  {id:"CM8xiNGodX4", title:"Short #03", type:"REELS / SHORTS · SOCIAL", start:0, label:"00:00"}
];
function thumb(id){return `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;}
function drivePreview(id){return `https://drive.google.com/file/d/${id}/preview`;}
function graphicCard(item,index){const n=String(index+1).padStart(2,"0");return `<article class="project graphic-project graphic-${item.kind}" data-video="graphic" data-src="${item.src}"><div class="project-media"><img src="${item.src}" alt="${item.title}" loading="lazy"><span class="num">${n}</span><span class="tag">${item.label}</span><span class="hover-hint">HOVER TO PREVIEW</span></div><div class="project-meta"><h3>${item.title}</h3><p>${item.kind==="poster"?"POSTER DESIGN → PREVIEW":"YOUTUBE THUMBNAIL → PREVIEW"}</p></div></article>`;}
function driveCard(item,index,kind){const n=String(index+1).padStart(2,"0"),src=item.driveId?drivePreview(item.driveId):"",tag=kind==="motion"?"MOTION GRAPHICS":"LONG FORM";return `<article class="project drive-project" data-video="drive" data-src="${src}"><div class="project-media drive-media">${src?`<iframe src="${src}" title="${item.title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`:`<div class="drive-placeholder"><span>DRIVE VIDEO PENDING</span></div>`}<span class="num">${n}</span><span class="play">▶</span><span class="tag">${tag}</span><span class="hover-hint">HOVER TO PREVIEW</span></div><div class="project-meta"><h3>${item.title}</h3><p>${src?"GOOGLE DRIVE → PREVIEW":"ADD DRIVE FILE ID"}</p></div></article>`;}
function youtubeCard(item,index){const n=String(index+1).padStart(2,"0");return `<article class="project" data-video="youtube" data-id="${item.id}" data-start="${item.start}"><div class="project-media"><img src="${thumb(item.id)}" alt="${item.title}" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/${item.id}/hqdefault.jpg'"><span class="num">${n}</span><span class="play">▶</span><span class="tag">${item.type}</span><span class="time">${item.label} → END</span><span class="hover-hint">HOVER TO PREVIEW</span></div><div class="project-meta"><h3>${item.title}</h3><p>${item.label} · ${item.label} → END</p></div></article>`;}
document.getElementById("graphicGrid").innerHTML=graphicDesign.map(graphicCard).join("");
document.getElementById("motionGrid").innerHTML=motionGraphics.map((x,i)=>driveCard(x,i,"motion")).join("");
document.getElementById("longGrid").innerHTML=longForm.map((x,i)=>driveCard(x,i,"long")).join("");
document.getElementById("shortGrid").innerHTML=shorts.map(youtubeCard).join("");

const player=document.getElementById("player"),frame=document.getElementById("playerFrame"),playerImage=document.getElementById("playerImage");
function close(){player.classList.remove("open");player.setAttribute("aria-hidden","true");frame.src="";playerImage.removeAttribute("src");playerImage.style.display="none";frame.style.display="block";document.body.style.overflow="";}
function openImage(src){frame.src="";frame.style.display="none";playerImage.src=src;playerImage.style.display="block";player.classList.add("open");player.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}
function openVideo(src){playerImage.removeAttribute("src");playerImage.style.display="none";frame.style.display="block";frame.src=src;player.classList.add("open");player.setAttribute("aria-hidden","false");document.body.style.overflow="hidden";}

const hoverPreview=document.createElement("div");
hoverPreview.className="hover-preview";
hoverPreview.innerHTML=`<div class="hover-preview-media"></div><div class="hover-preview-label">LIVE PREVIEW</div>`;
hoverPreview.style.pointerEvents="none";
document.body.appendChild(hoverPreview);
const hoverMedia=hoverPreview.querySelector(".hover-preview-media");
let activeHover=null;

function hideHover(){
  activeHover=null;
  hoverPreview.classList.remove("show");
  hoverMedia.innerHTML="";
}
function positionHover(el){
  const rect=el.getBoundingClientRect();
  const gap=20;
  const isPoster=el.classList.contains("graphic-poster");
  const width=isPoster?270:360;
  const height=isPoster?405:203;
  let left=rect.right+gap;
  if(left+width>window.innerWidth-18) left=rect.left-width-gap;
  if(left<18) left=Math.max(18,(window.innerWidth-width)/2);
  let top=rect.top+(rect.height-height)/2;
  top=Math.max(18,Math.min(top,window.innerHeight-height-18));
  hoverPreview.style.width=`${width}px`;
  hoverPreview.style.height=`${height}px`;
  hoverPreview.style.left=`${left}px`;
  hoverPreview.style.right="auto";
  hoverPreview.style.top=`${top}px`;
  hoverPreview.style.bottom="auto";
}
function showHover(el){
  if(activeHover===el)return;
  hideHover();
  activeHover=el;
  const rect=el.getBoundingClientRect();
  if(rect.bottom<0||rect.top>window.innerHeight)return;
  const media=el.querySelector(".project-media");
  if(!media)return;
  hoverMedia.innerHTML="";
  if(el.dataset.video==="graphic"){
    const img=document.createElement("img");
    img.src=el.dataset.src;
    img.alt="Design preview";
    hoverMedia.appendChild(img);
  }else if(el.dataset.video==="drive"&&el.dataset.src){
    const f=document.createElement("iframe");
    f.src=el.dataset.src;
    f.allow="autoplay; fullscreen; picture-in-picture";
    f.allowFullscreen=true;
    hoverMedia.appendChild(f);
  }else if(el.dataset.video==="youtube"){
    const f=document.createElement("iframe");
    f.src=`https://www.youtube-nocookie.com/embed/${el.dataset.id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&start=${el.dataset.start||0}`;
    f.allow="autoplay; fullscreen; picture-in-picture";
    f.allowFullscreen=true;
    hoverMedia.appendChild(f);
  }else{return;}
  positionHover(el);
  hoverPreview.classList.add("show");
}
document.querySelectorAll(".project").forEach(el=>{
  el.addEventListener("mouseenter",()=>showHover(el));
  el.addEventListener("mouseleave",hideHover);
  el.addEventListener("click",()=>{
    hideHover();
    if(el.dataset.video==="graphic")return;
    if(el.dataset.video==="drive"){if(el.dataset.src)openVideo(el.dataset.src);return;}
    if(el.dataset.video==="youtube"){
      const id=el.dataset.id,start=el.dataset.start||0;
      openVideo(`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&start=${start}`);
    }
  });
});
window.addEventListener("resize",()=>{if(activeHover)positionHover(activeHover);});
window.addEventListener("scroll",hideHover,{passive:true});
document.getElementById("playerClose").addEventListener("click",close);
player.addEventListener("click",e=>{if(e.target===player)close()});
document.addEventListener("keydown",e=>{if(e.key==="Escape"){hideHover();close()}});

/* Premium hover UX + custom circular cursor */
const uxStyle=document.createElement("style");
uxStyle.textContent=`
.graphic-project .project-media:before{display:none!important}
.graphic-project .project-media{transition:transform .45s cubic-bezier(.2,.8,.2,1),border-color .35s,box-shadow .45s;}
.graphic-project:hover .project-media{transform:translateY(-5px);border-color:rgba(255,61,24,.65);box-shadow:0 18px 45px rgba(0,0,0,.45)}
.project{transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.project:hover{transform:translateY(-3px)}
.project-media img{transition:transform .8s cubic-bezier(.16,1,.3,1),filter .45s!important}
.graphic-project:hover .project-media img{transform:scale(1.035)!important}
.hover-preview{right:auto!important;bottom:auto!important;width:360px;height:203px;border:1px solid rgba(255,255,255,.22);border-radius:2px;box-shadow:0 25px 90px rgba(0,0,0,.72),0 0 0 1px rgba(255,61,24,.08);opacity:0;visibility:hidden;transform:translateY(12px) scale(.94);filter:blur(3px);transition:opacity .22s ease,transform .38s cubic-bezier(.16,1,.3,1),filter .38s ease,visibility .22s}
.hover-preview.show{opacity:1;visibility:visible;transform:translateY(0) scale(1);filter:blur(0)}
.hover-preview-media img{transform:scale(1.015);transition:transform .9s cubic-bezier(.16,1,.3,1)}
.hover-preview.show .hover-preview-media img{transform:scale(1.035)}
.hover-preview:after{height:30%;background:linear-gradient(transparent,rgba(0,0,0,.78));}
.hover-preview-label{letter-spacing:.24em;font-size:8px;bottom:12px;opacity:.8}
.portfolio-cursor{position:fixed;left:0;top:0;width:18px;height:18px;border:1px solid rgba(255,255,255,.9);border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);mix-blend-mode:difference;transition:width .22s ease,height .22s ease,border-color .22s ease,background .22s ease,transform .08s linear}
.portfolio-cursor.active{width:58px;height:58px;border-color:#ff3d18;background:rgba(255,61,24,.12);mix-blend-mode:normal}
.portfolio-cursor.active:after{content:'VIEW';position:absolute;inset:0;display:grid;place-items:center;font:7px var(--mono);letter-spacing:.16em;color:#fff}
@media(max-width:700px){.portfolio-cursor{display:none}.hover-preview{display:none!important}}
`;
document.head.appendChild(uxStyle);
const cursor=document.createElement("div");
cursor.className="portfolio-cursor";
document.body.appendChild(cursor);
let mouseX=-100,mouseY=-100,curX=-100,curY=-100;
document.addEventListener("mousemove",e=>{mouseX=e.clientX;mouseY=e.clientY;});
function animateCursor(){curX+=(mouseX-curX)*.28;curY+=(mouseY-curY)*.28;cursor.style.left=curX+"px";cursor.style.top=curY+"px";requestAnimationFrame(animateCursor)}
animateCursor();
document.querySelectorAll(".project").forEach(el=>{
  el.addEventListener("mouseenter",()=>cursor.classList.add("active"));
  el.addEventListener("mouseleave",()=>cursor.classList.remove("active"));
});
document.addEventListener("mouseleave",()=>cursor.style.opacity="0");
document.addEventListener("mouseenter",()=>cursor.style.opacity="1");
`