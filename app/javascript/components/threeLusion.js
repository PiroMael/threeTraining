import * as THREE from 'three';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { Reflector } from 'three/examples/jsm/objects/Reflector.js'
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import Stats from 'three/examples/jsm/libs/stats.module';


const createLusion = () => {


  
  let  loading = false;
  var audio = new Audio('ffx-ost-wandering-flame.mp3');
  audio.play();
 let audiospeed = 1.2;
  
  const stats = Stats()
  let animNum= 1; 
  let clock2 = new THREE.Clock();
  const params = {
    exposure: 0.945,
    bloomStrength: 1.373,
    bloomThreshold: 0,
    bloomRadius:0.4
  }
    let mixer, mixer2, action,action2;
    let speed = 2.6;
    let scaleUp = false;
    let slowDown = false;
    const blocker = document.querySelector('.blocker');
    const canva = document.getElementById("Lusion");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight , 0.1,1000);
    
        camera.position.setX(25.419655279453234);
        camera.position.setY(-8.883930016812661);
        camera.position.setZ( 62.98634826073061 );
        camera.rotation.set( 0.14012102534188015, 0.3801775885101106, -0.05229214295406957);
   
     
    var clock = new THREE.Clock;
    const listener = new THREE.AudioListener();
    listener.setMasterVolume(0.34);
    camera.add( listener );

    let testlight = new THREE.PointLight(0xffffff,30,100);
    testlight.position.set(3,-32,0);
    scene.add(testlight);
    // create a global audio source
    const sound = new THREE.Audio( listener );
    
    // load a sound and set it as the Audio object's buffer
    const audioLoader = new THREE.AudioLoader();
    
  
  
          const objects = [];
          const fbxLoader = new FBXLoader();
          fbxLoader.load(
              'Final Run.fbx',
              (object) => {
                 mixer = new THREE.AnimationMixer(object);
                  objects.push(object);
                  action = mixer.clipAction( object.animations[animNum] );
                  
                
                  object.traverse(child => { if ( child.isMesh ) {
    
                      
                             child.material.emissive = child.material.color;
                             child.material.emissiveIntensity = 2;
                          }
                          
                      
                  })
                  object.scale.set(.07, .07, .07)
                  object.position.set(3,-18,0)
                  
                  scene.add(object);
                  action.play(); 
                 
              },
              (xhr) => {
                  
                  if((xhr.loaded / xhr.total) * 100 == 100){
                    loading = true;
                   
                    audioLoader.load( 'ffx-ost-wandering-flame.mp3', function( buffer ) {
                      sound.setBuffer( buffer );
                      sound.setLoop( true );
                      sound.setVolume( 0.5 );
                      setTimeout(function () {
                        sound.play();
                    }, 1000);
                      
                      sound.setPlaybackRate (audiospeed);
                      window.addEventListener('click', event => {
                        audiospeed = audiospeed - 0.02;
                        sound.setPlaybackRate (audiospeed);
                        setTimeout(() => {
                          audiospeed = 1.2;
                          sound.setPlaybackRate (audiospeed);
                        }, 4000);
                      });
                    });  
                  }
              },
              (error) => {
                  
              }
          );

              
               
         
        


    scene.background = new THREE.Color( 0x000003);
    const geometryplane =  new THREE.PlaneBufferGeometry( 170, 370 );
 

var mirror = new Reflector(geometryplane, {
  clipBias: 0.2,
  textureWidth: window.innerWidth * window.devicePixelRatio,
  textureHeight: window.innerHeight * window.devicePixelRatio,
  color: 0x00078a,
  recursion: 1,
  roughness: 0.5,
  metalness: 0.403,
  reflectivity:0.37299,
});
mirror.position.set(0,0,-0.2)
mirror.rotateX(3*Math.PI/2);
mirror.position.setY(-18.2);
mirror.position.setZ(-60);
			scene.add(mirror)



    
        

    const BarsRight=[];
function addBarRight(){
  let meshdeph = Math.floor(Math.random() * 20) + 8;
  let colorbool = Math.floor(Math.random() * 2);
  let randomColor ;
  if (colorbool%2 == 0){
   randomColor = 0xed0219;
  }else{
      randomColor = 0x1058b5;
  }
  const light = new THREE.PointLight(randomColor);
  light.intensity= 0.1;
  const geometry =  new THREE.BoxGeometry( 0.5, 0.3, meshdeph );
  const material = new THREE.MeshStandardMaterial({ color:randomColor, emissive:randomColor, emissiveIntensity:2 })
  const barre = new THREE.Mesh( geometry, material);
 
  const [x] = Array(1).fill().map(() => Math.floor(Math.random() * 30) + 14);
  const [z] = Array(1).fill().map(() => THREE.MathUtils.randFloatSpread(380));
  const [y] = Array(1).fill().map(() => THREE.MathUtils.randFloatSpread(40));  
light.position.set(x, y, z);
if(light.position.y <10 && light.position.x < 22){
BarsRight.push(light)
light.add(barre);

scene.add(light);
}else{
  barre.position.set(x, y, z);
  BarsRight.push(barre)
  scene.add(barre);
}
}
Array(120).fill().forEach(addBarRight);

//LEFT SIDE OF THE SCENE//
const BarsLeft=[];
function addBarLeft(){
  
    let meshdeph = Math.floor(Math.random() * 20) + 8;
    let colorbool = Math.floor(Math.random() * 2);
    let randomColor ;
    if (colorbool%2 == 0){
      randomColor = 0xed0219;
     }else{
         randomColor = 0x1058b5;
     }
     const light = new THREE.PointLight(randomColor);
     light.intensity= 0.3;
     const geometry =  new THREE.BoxGeometry( 0.5, 0.3, meshdeph );
     const material = new THREE.MeshStandardMaterial({ color:randomColor, emissive:randomColor, emissiveIntensity:2 })
    const barre = new THREE.Mesh( geometry, material);
    const [x] = Array(1).fill().map(() => Math.floor(Math.random() * -30) - 8);
    const [z] = Array(1).fill().map(() => THREE.MathUtils.randFloatSpread(380));
    const [y] = Array(1).fill().map(() => THREE.MathUtils.randFloatSpread(40));  
    light.position.set(x, y, z);
    if(light.position.y <10 && light.position.x > -14){
    BarsLeft.push(light)
    light.add(barre);
    
    scene.add(light);
    }else{
      barre.position.set(x, y, z);
      BarsLeft.push(barre)
      scene.add(barre);
    }
  }
  Array(100).fill().forEach(addBarLeft);


  //TOP SIDE OF THE SCENE//
  const BarsTop=[];
  function addBarTop(){
    let meshdeph = Math.floor(Math.random() * 20) + 8;
    let colorbool = Math.floor(Math.random() * 2);
    let randomColor ;
    if (colorbool%2 == 0){
      randomColor = 0xed0219;
     }else{
         randomColor = 0x1058b5;
     }
     const geometry =  new THREE.BoxGeometry( 0.5, 0.3, meshdeph );
     const material = new THREE.MeshStandardMaterial({ color:randomColor, emissive:randomColor, emissiveIntensity:2 })
    const barre = new THREE.Mesh( geometry, material);
    const [x] = Array(1).fill().map(() => Math.floor(Math.random() *80)-40 );
    const [z] = Array(1).fill().map(() => THREE.MathUtils.randFloatSpread(380));
    const [y] = Array(1).fill().map(() => Math.floor(Math.random() * 40) + 17); 
  barre.position.set(x, y, z);
  BarsTop.push(barre)
  scene.add(barre);
  }
  Array(80).fill().forEach(addBarTop);
    //GEOMETRY AND OBJECTS END//


    // document.addEventListener('mousedown', onDocumentMouseDown, false);
  const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#Lusion'), antialias: true ,alpha: true
  
});
				renderer.setPixelRatio( window.devic2PixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );


				// tone mapping
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type=THREE.PCFSoftShadowMap;
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure=0.9485;
			
        renderer.physicallyCorrectLights = true;
        renderer.alpha = true;
        document.body.appendChild( renderer.domElement );

        const composer = new EffectComposer( renderer );

        const renderPass = new RenderPass( scene, camera );
        composer.addPass( renderPass );

          

          const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
          bloomPass.threshold = params.bloomThreshold;
          bloomPass.strength = params.bloomStrength;
          bloomPass.radius = params.bloomRadius;
          
          composer.addPass( bloomPass );
       
 const controls = new PointerLockControls( camera, renderer.domElement );
 controls.isLocked = true;       

 


          
           
// END //

        

// place it in the center


 
        
        window.addEventListener('click', event => {
          audiospeed = audiospeed - 0.04;
          scaleUp = true;
          slowDown = true;
          animNum = 0;
          let objecto= objects[0];
          action = mixer.clipAction( objecto.animations[animNum] );
          action.play();
          setTimeout(() => {
            animNum = 1;
            action.stop();
            action = mixer.clipAction( objecto.animations[animNum] );
            action.play();
          }, 2400);
          setTimeout(() => {
            scaleUp = false;
            slowDown = false;
            speed = 4;
            audiospeed = 1;
          }, 3400);
        });
        window.addEventListener('wheel', event => {
         let scrollSmouth = event.deltaY/200 * (0.2  * Math.PI);
          camera.position.x =  camera.position.x+ scrollSmouth * 0.4 ;
          camera.position.z = camera.position.z + scrollSmouth * 2;
});
      
      
         
        
        function animate() {

          requestAnimationFrame( animate );
          
          render();
          stats.update();
        
           mixer.update((clock2.getDelta())*speed/4)   // update the animation mixer
          
        }
        animate();
        function render() {
          camera.lookAt(0,-15, 0);
          var t = clock.getElapsedTime();
          
              BarsLeft.forEach(barre => {
                if (t >= 3.0)
              {
                  clock = new THREE.Clock;
                  barre.scale.set(1,1,1);
                  
              }
              else
              {
                if( scaleUp == true && barre.position.y < 5){
                  
                  barre.scale.x = 1+((t/1.2));
            
                }
                  
              }
              
              if(slowDown == true){
                let run  = true;
                if(speed > 0.2 && run == true){
                 speed = 2-((t/1.6));
                }else{
                  run = false;
                  speed = 0.3+((t/1.6));
                }
              }
              
             
            });
            
            BarsRight.forEach(barre => {
              if (t >= 3.0)
            {
                clock = new THREE.Clock;
                barre.scale.set(1,1,1);
                
            }
            else
            {
              if( scaleUp == true && barre.position.y < 5){
                
                barre.scale.x = 1+((t/1.2));
               
              }
                
            }
            
            if(slowDown == true){
              let run  = true;
              if(speed > 0.2 && run == true){
               speed = 2-((t/1.6));
              }else{
                run = false;
                speed = 0.3+((t/1.6));
              }
            }
            
           
          }); 
            BarsRight.forEach(barre => (barre.position.z > -300) ? barre.position.z -=speed : barre.position.z  = 60);
            BarsLeft.forEach(barre => (barre.position.z > -300) ? barre.position.z -=speed  : barre.position.z  = 60);
            BarsTop.forEach(barre => (barre.position.z > -300) ? barre.position.z -=speed : barre.position.z  = 60);
            
            
            
              
            
            
            
            composer.render();
  
        }
        
       
        }
        




const initLusionPage = () => {

  if (document.querySelector('#Lusion')) {
    createLusion();
  }
}


export { initLusionPage };