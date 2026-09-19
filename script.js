document.addEventListener("DOMContentLoaded", () => {
  const graphicDesign = [
    {title:"India's Most Brutal Serial Killer",src:"assets/01_MAIN_FINAL (1).png",kind:"thumbnail",label:"YOUTUBE THUMBNAIL"},
    {title:"A’ja Wilson — WNBA Champion",src:"assets/01-FINAL-WILSON (1).jpg",kind:"poster",label:"POSTER DESIGN"},
    {title:"Virat Kohli — 100 v/s Pakistan",src:"assets/02-KOHLI GRAINED (1).jpg",kind:"poster",label:"POSTER DESIGN"},
    {title:"Hypocrite — Samay Raina / Ashneer",src:"assets/ART 3 (1).png",kind:"thumbnail",label:"YOUTUBE THUMBNAIL"},
    {title:"5 Free After Effects Plugins",src:"assets/AE_PLUGINS_THUMBNAILS.png",kind:"thumbnail",label:"YOUTUBE THUMBNAIL"},
    {title:"Kinetic Typography in After Effects",src:"assets/KINETIC UPDATED.png",kind:"thumbnail",label:"YOUTUBE THUMBNAIL"}
  ];
  const motionGraphics = [
    {title:"Motion Graphics #01",driveId:"1cF6qD-xdQvEMndSY9c7nT9p6u9ws2vsL",thumb:"assets/MG [thumbnails]/01.png"},
    {title:"Motion Graphics #02",driveId:"1hMsnFtJ2SDOiTAucb8jnzfSIdOXEJq58",thumb:"assets/MG [thumbnails]/02.png"},
    {title:"Motion Graphics #03",driveId:"1ZusM5Z-UB3TK-WS39f4YGAwi9twEKrDp",thumb:"assets/MG [thumbnails]/03.png"},
    {title:"Motion Graphics #04",driveId:"121ePN1OiVnmgfUF-lFf9yWLPJMz06Nyg",thumb:"assets/MG [thumbnails]/04.png"},
    {title:"Motion Graphics #05",driveId:"1AuCNQ0T3Zp2bF9uH4yDnje-1Cokp5cxE",thumb:"assets/MG [thumbnails]/05.png"},
    {title:"Motion Graphics #06",driveId:"1iZtaCqpCns7XcTu0iBUg5FDl33Doxmb0",thumb:"assets/MG [thumbnails]/06.png"},
    {title:"Motion Graphics #07",driveId:"11DmIRdJqN_dhF7pUUx3dnu7wEvZ6EL6e",thumb:"assets/MG [thumbnails]/07.png"},
    {title:"Motion Graphics #08",driveId:"1Tdsn60SE_9CwifZUt1ToJqiu5LLqQAhD",thumb:"assets/MG [thumbnails]/08.png"},
    {title:"Motion Graphics #09",driveId:"1omt_C5PnL1kWBhtOZMVeXmrpgZY4Vyl4",thumb:"assets/MG [thumbnails]/09.png"}
  ];
  const longForm = [
    {title:"Long Form #01",driveId:"1VP1E0dTArBwiyP7S0YA7v85yW7Sb767n",youtube:"https://youtu.be/oWkbkVqzJXA?si=YMjQWt-ck-v_5bhK",thumb:"assets/LF [Thumbnails]/01.jpg"},
    {title:"Long Form #02",driveId:"1N_GTjkY6gOEfk_g0flKhtdUQ03EU6Z4D",youtube:"https://youtu.be/yKVrPG0KDGw?si=vWOzN3MtOu44zH30",thumb:"assets/LF [Thumbnails]/02.jpg"},
    {title:"Long Form #03",driveId:"1SZbig0U1U07XumbC6H_jOProff0ht7Ea",youtube:"https://youtu.be/pBv2bnPbAkQ?si=GHyYgizzUpU7wdk6",thumb:"assets/LF [Thumbnails]/03.jpg"}
  ];
  const shorts = [
    {id:"thgm6CuEBVw",title:"Short #01",type:"REELS / SHORTS · SOCIAL",start:0,label:"00:00"},
    {id:"QxibdIAmiD4",title:"Short #02",type:"REELS / SHORTS · SOCIAL",start:0,label:"00:00"},
    {id:"CM8xiNGodX4",title:"Short #03",type:"REELS / SHORTS · SOCIAL",start:0,label:"00:00"},
    {id:"dnPFNAPbNgY",title:"Short #04",type:"REELS / SHORTS · SOCIAL",start:0,label:"00:00"},
    {id:"guhZBWsRHyE",title:"Short #05",type:"REELS / SHORTS · SOCIAL",start:0,label:"00:00"}
  ];

  const $ = id => document.getElementById(id);
  const thumb = id => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  const drivePreview = id => `https://drive.google.com/file/d/${id}/preview`;

  function graphicCard(item,index){
    const n=String(index+1).padStart(2,"0");
    return `<article class="project graphic-project graphic-${item.kind}" data-video="graphic" data-src="${item.src}" data-kind="${item.kind}">
      <div class="project-media"><img src="${item.src}" alt="${item.title}" loading="lazy"><span class="num">${n}</span><span class="tag">${item.label}</span><span class="hover-hint">VIEW</span></div>
      <div class="project-meta"><h3>${item.title}</h3><p>${item.label} → VIEW</p></div>
    </article>`;
  }
  function driveCard(item,index,kind){
    const n=String(index+1).padStart(2,"0"),src=item.driveId?drivePreview(item.driveId):"",tag=kind==="motion"?"MOTION GRAPHICS":"LONG FORM";
    const poster=item.thumb||"";
    const longActions=kind==="long"&&item.youtube?`<div class="lf-actions"><a class="lf-btn lf-youtube" href="${item.youtube}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()"><span>▶</span> WATCH ON YOUTUBE</a><button class="lf-btn lf-drive" type="button" onclick="event.stopPropagation(); this.closest('.project').dispatchEvent(new CustomEvent('open-drive',{bubbles:true}))"><span>◆</span> WATCH IN DRIVE</button></div>`:"";
    return `<article class="project drive-project ${kind==="long"?"long-form-project":""}" data-video="drive" data-src="${src}" data-youtube="${item.youtube||""}">
      <div class="project-media drive-media">${poster?`<img src="${poster}" alt="${item.title}" loading="lazy">`:src?`<iframe src="${src}" title="${item.title}" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`:`<div class="drive-placeholder"><span>DRIVE VIDEO PENDING</span></div>`}<span class="num">${n}</span><span class="play">▶</span>${longActions}<span class="tag">${tag}</span><span class="hover-hint">HOVER</span></div>
      <div class="project-meta"><h3>${item.title}</h3><p>${src?"GOOGLE DRIVE → PREVIEW":"ADD DRIVE FILE ID"}</p></div>
    </article>`;
  }
  function youtubeCard(item,index){
    const n=String(index+1).padStart(2,"0");
    return `<article class="project" data-video="youtube" data-id="${item.id}" data-start="${item.start}">
      <div class="project-media"><img src="${thumb(item.id)}" alt="${item.title}" loading="lazy" onerror="this.src='https://i.ytimg.com/vi/${item.id}/hqdefault.jpg'"><span class="num">${n}</span><span class="play">▶</span><span class="tag">${item.type}</span><span class="time">${item.label} → END</span><span class="hover-hint">HOVER</span></div>
      <div class="project-meta"><h3>${item.title}</h3><p>${item.label} → END</p></div>
    </article>`;
  }

  const graphicGrid=$("graphicGrid"),motionGrid=$("motionGrid"),longGrid=$("longGrid"),shortGrid=$("shortGrid");
  if(graphicGrid) graphicGrid.innerHTML=graphicDesign.map(graphicCard).join("");
  if(motionGrid) motionGrid.innerHTML=motionGraphics.map((x,i)=>driveCard(x,i,"motion")).join("");
  if(longGrid) longGrid.innerHTML=longForm.map((x,i)=>driveCard(x,i,"long")).join("");
  if(shortGrid) shortGrid.innerHTML=shorts.map(youtubeCard).join("");

  const player=$("player"),frame=$("playerFrame"),playerImage=$("playerImage");
  function closePlayer(){
    if(!player)return;
    player.classList.remove("open","image-mode");
    player.setAttribute("aria-hidden","true");
    if(frame){frame.src="";frame.style.width="";frame.style.height="";frame.style.aspectRatio="";frame.style.maxWidth="";frame.style.maxHeight="";frame.style.overflow="";}
    if(playerImage){playerImage.removeAttribute("src");playerImage.style.display="none";playerImage.style.width="";playerImage.style.height="";playerImage.style.maxWidth="";playerImage.style.maxHeight="";}
    if(frame)frame.style.display="grid";
    document.body.style.overflow="";
  }
  function openImage(src){
    if(!player||!playerImage)return;
    frame.src="";
    frame.style.display="grid";
    frame.style.width="fit-content";
    frame.style.height="fit-content";
    frame.style.aspectRatio="auto";
    frame.style.maxWidth="calc(100vw - 80px)";
    frame.style.maxHeight="calc(100vh - 80px)";
    frame.style.overflow="visible";
    frame.style.background="transparent";
    frame.style.boxShadow="none";
    playerImage.src=src;
    playerImage.style.display="block";
    playerImage.style.width="auto";
    playerImage.style.height="auto";
    playerImage.style.maxWidth="calc(100vw - 80px)";
    playerImage.style.maxHeight="calc(100vh - 80px)";
    playerImage.style.objectFit="contain";
    playerImage.onload=()=>{
      const maxW=window.innerWidth-80,maxH=window.innerHeight-80;
      const scale=Math.min(maxW/playerImage.naturalWidth,maxH/playerImage.naturalHeight,1);
      frame.style.width=Math.round(playerImage.naturalWidth*scale)+"px";
      frame.style.height=Math.round(playerImage.naturalHeight*scale)+"px";
    };
    player.classList.add("open","image-mode");
    player.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }
  function openVideo(src){
    if(!player||!frame)return;
    player.classList.remove("image-mode");
    playerImage.removeAttribute("src");
    playerImage.style.display="none";
    frame.style.display="block";
    frame.style.width="min(1200px,92vw)";
    frame.style.height="auto";
    frame.style.aspectRatio="16/9";
    frame.style.maxWidth="";
    frame.style.maxHeight="";
    frame.style.overflow="hidden";
    frame.style.boxShadow="0 0 80px rgba(0,0,0,.8)";
    frame.src=src;
    player.classList.add("open");
    player.setAttribute("aria-hidden","false");
    document.body.style.overflow="hidden";
  }

  let activeHover=null;

  function stopInCardVideo(el){
    const media=el?.querySelector(".project-media");
    if(!media)return;
    const hoverFrame=media.querySelector(".in-card-hover-video");
    if(hoverFrame)hoverFrame.remove();
    el.classList.remove("is-playing");
    activeHover=null;
  }

  function showHover(el){
    if(!el || el.dataset.video==="graphic")return;
    if(activeHover===el)return;
    if(activeHover)stopInCardVideo(activeHover);

    const media=el.querySelector(".project-media");
    if(!media)return;
    activeHover=el;

    const frame=document.createElement("iframe");
    frame.className="in-card-hover-video";
    frame.setAttribute("allow","autoplay; fullscreen; picture-in-picture");
    frame.setAttribute("allowfullscreen","");
    frame.setAttribute("loading","eager");

    if(el.dataset.video==="youtube"){
      frame.src=`https://www.youtube-nocookie.com/embed/${el.dataset.id}?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1&start=${el.dataset.start||0}`;
    }else if(el.dataset.video==="drive" && el.dataset.src){
      frame.src=el.dataset.src + (el.dataset.src.includes("?") ? "&" : "?") + "autoplay=1";
    }else{
      activeHover=null;
      return;
    }

    media.appendChild(frame);
    el.classList.add("is-playing");
  }

  function hideHover(){
    if(activeHover)stopInCardVideo(activeHover);
  }

  const cursor=document.createElement("div");
  cursor.className="custom-cursor";
  document.body.appendChild(cursor);
  window.addEventListener("mousemove",e=>{
    cursor.style.left=e.clientX+"px";
    cursor.style.top=e.clientY+"px";
  });

  document.querySelectorAll(".project").forEach(el=>{
    el.addEventListener("mouseenter",()=>{showHover(el);cursor.classList.add("active");});
    el.addEventListener("mouseleave",()=>{hideHover();cursor.classList.remove("active");});
    el.addEventListener("click",()=>{
      hideHover();
      if(el.dataset.video==="graphic"){
        openImage(el.dataset.src);
        return;
      }
      if(el.dataset.video==="drive"){
        if(el.dataset.youtube){
          window.open(el.dataset.youtube,"_blank","noopener,noreferrer");
          return;
        }
        if(el.dataset.src){openVideo(el.dataset.src);return;}
      }
      if(el.dataset.video==="youtube"){
        openVideo(`https://www.youtube-nocookie.com/embed/${el.dataset.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1&start=${el.dataset.start||0}`);
      }
    });
    el.addEventListener("open-drive",()=>{
      hideHover();
      if(el.dataset.src)openVideo(el.dataset.src);
    });
  });

  window.addEventListener("scroll",hideHover,{passive:true});
  window.addEventListener("resize",()=>{
    hideHover();
    if(player?.classList.contains("image-mode")&&playerImage?.naturalWidth){
      const maxW=window.innerWidth-80,maxH=window.innerHeight-80;
      const scale=Math.min(maxW/playerImage.naturalWidth,maxH/playerImage.naturalHeight,1);
      frame.style.width=Math.round(playerImage.naturalWidth*scale)+"px";
      frame.style.height=Math.round(playerImage.naturalHeight*scale)+"px";
    }
  });
  $("playerClose")?.addEventListener("click",closePlayer);
  player?.addEventListener("click",e=>{if(e.target===player)closePlayer()});
  document.addEventListener("keydown",e=>{if(e.key==="Escape"){hideHover();closePlayer()}});
});