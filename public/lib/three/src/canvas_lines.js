$((function(){var camera,scene,renderer,mouseX=0,mouseY=0,windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2;function onWindowResize(){windowHalfX=window.innerWidth/2,windowHalfY=window.innerHeight/2,camera.aspect=window.innerWidth/window.innerHeight,camera.updateProjectionMatrix(),renderer.setSize(window.innerWidth,window.innerHeight)}function onDocumentMouseMove(event){mouseX=event.clientX-windowHalfX,mouseY=event.clientY-windowHalfY}function onDocumentTouchStart(event){event.touches.length>1&&(mouseX=event.touches[0].pageX-windowHalfX)}function onDocumentTouchMove(event){1==event.touches.length&&(mouseX=event.touches[0].pageX-windowHalfX)}!function init(){var container,particle;(container=document.createElement("div")).style.position="fixed",container.style.top="0px",container.style.left="0px",container.style.zIndex="-1",container.style.opacity="0.5",document.body.appendChild(container),(camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,1,1e4)).position.z=100,scene=new THREE.Scene,(renderer=new THREE.CanvasRenderer({alpha:!0})).setPixelRatio(window.devicePixelRatio),renderer.setSize(window.innerWidth,window.innerHeight),container.appendChild(renderer.domElement);for(var PI2=2*Math.PI,material=new THREE.SpriteCanvasMaterial({color:10263708,program:function(context){context.beginPath(),context.arc(0,0,.5,0,PI2,!0),context.fill()}}),geometry=new THREE.Geometry,i=0;i<100;i++)(particle=new THREE.Sprite(material)).position.x=2*Math.random()-1,particle.position.y=2*Math.random()-1,particle.position.z=2*Math.random()-1,particle.position.normalize(),particle.position.multiplyScalar(10*Math.random()+450),particle.scale.x=particle.scale.y=10,scene.add(particle),geometry.vertices.push(particle.position);var line=new THREE.Line(geometry,new THREE.LineBasicMaterial({color:10263708,opacity:.5}));scene.add(line),document.addEventListener("mousemove",onDocumentMouseMove,!1),document.addEventListener("touchstart",onDocumentTouchStart,!1),document.addEventListener("touchmove",onDocumentTouchMove,!1),window.addEventListener("resize",onWindowResize,!1)}(),function animate(){requestAnimationFrame(animate);!function render(){camera.position.x+=.05*(mouseX-camera.position.x),camera.position.y+=.05*(200-mouseY-camera.position.y),camera.lookAt(scene.position),renderer.render(scene,camera)}()}()}));