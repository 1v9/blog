window.addEventListener("DOMContentLoaded",()=>{var isRight="right"===CONFIG.sidebar.position,SIDEBAR_WIDTH=CONFIG.sidebar.width||320,mousePos={},touchPos={},sidebarToggleLines={lines:document.querySelector(".sidebar-toggle"),init:function(){this.lines.classList.remove("toggle-arrow","toggle-close")},arrow:function(){this.lines.classList.remove("toggle-close"),this.lines.classList.add("toggle-arrow")},close:function(){this.lines.classList.remove("toggle-arrow"),this.lines.classList.add("toggle-close")}};function updateFooterPosition(){var footer=document.querySelector(".footer"),containerHeight=document.querySelector(".header").offsetHeight+document.querySelector(".main").offsetHeight+footer.offsetHeight;footer.classList.toggle("footer-fixed",containerHeight<=window.innerHeight)}({sidebarEl:document.querySelector(".sidebar"),isSidebarVisible:!1,init:function(){window.addEventListener("mousedown",this.mousedownHandler.bind(this)),window.addEventListener("mouseup",this.mouseupHandler.bind(this)),document.querySelector(".sidebar-toggle").addEventListener("click",()=>this.clickHandler()),document.querySelector(".sidebar-toggle").addEventListener("mouseenter",()=>this.mouseEnterHandler()),document.querySelector(".sidebar-toggle").addEventListener("mouseleave",()=>this.mouseLeaveHandler()),this.sidebarEl.addEventListener("touchstart",this.touchendHandler.bind(this)),this.sidebarEl.addEventListener("touchend",this.touchendHandler.bind(this)),this.sidebarEl.addEventListener("touchmove",event=>event.preventDefault()),window.addEventListener("sidebar:show",()=>this.showSidebar()),window.addEventListener("sidebar:hide",()=>this.hideSidebar())},mousedownHandler:function(event){mousePos.X=event.pageX,mousePos.Y=event.pageY},mouseupHandler:function(event){var deltaX=event.pageX-mousePos.X,deltaY=event.pageY-mousePos.Y,clickingBlankPart=Math.sqrt(deltaX*deltaX+deltaY*deltaY)<20&&event.target.matches(".main");this.isSidebarVisible&&(clickingBlankPart||event.target.matches("img.medium-zoom-image, .fancybox img"))&&this.hideSidebar()},clickHandler:function(){this.isSidebarVisible?this.hideSidebar():this.showSidebar()},mouseEnterHandler:function(){this.isSidebarVisible||sidebarToggleLines.arrow()},mouseLeaveHandler:function(){this.isSidebarVisible||sidebarToggleLines.init()},touchstartHandler:function(event){touchPos.X=event.touches[0].clientX,touchPos.Y=event.touches[0].clientY},touchendHandler:function(event){var deltaX=event.changedTouches[0].clientX-touchPos.X,deltaY=event.changedTouches[0].clientY-touchPos.Y,effectiveSliding=Math.abs(deltaY)<20&&(deltaX>30&&isRight||deltaX<-30&&!isRight);this.isSidebarVisible&&effectiveSliding&&this.hideSidebar()},showSidebar:function(){this.isSidebarVisible=!0,this.sidebarEl.classList.add("sidebar-active"),"function"==typeof Velocity&&Velocity(document.querySelectorAll(".sidebar .motion-element"),isRight?"transition.slideRightIn":"transition.slideLeftIn",{stagger:50,drag:!0}),sidebarToggleLines.close(),NexT.utils.isDesktop()&&window.anime(Object.assign({targets:document.body,duration:400,easing:"linear"},isRight?{"padding-right":SIDEBAR_WIDTH}:{"padding-left":SIDEBAR_WIDTH}))},hideSidebar:function(){this.isSidebarVisible=!1,this.sidebarEl.classList.remove("sidebar-active"),sidebarToggleLines.init(),NexT.utils.isDesktop()&&window.anime(Object.assign({targets:document.body,duration:400,easing:"linear"},isRight?{"padding-right":0}:{"padding-left":0}))}}).init(),updateFooterPosition(),window.addEventListener("resize",updateFooterPosition),window.addEventListener("scroll",updateFooterPosition)});