import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls'
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { CSS3DRenderer, CSS3DObject } from 'three/examples//jsm/renderers/CSS3DRenderer.js';
import Stats from 'three/examples/jsm/libs/stats.module';

let InPortal = false;
let moveForward = false;
			let moveBackward = false;
			let moveLeft = false;
			let moveRight = false;
const createScene = () => {
  const stats = Stats()



    const canva = document.getElementById("bg");
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight , 0.1,1000);

    const loader = new GLTFLoader();
    let objects = [];
    const clock2 = new THREE.Clock();
    const light = new THREE.PointLight(0xff0000, 1, 100);
    light.position.set( 0, 1, 60);


    const pointer = new THREE.Vector2();
    

    scene.background = new THREE.Color( 0x2f302f );

    //GEOMETRY AND OBJECTS//

				

  
    const geometry = new THREE.BoxGeometry( 10, 20, 10 );
    const material = new THREE.MeshPhongMaterial( {color: 0xffffff} );
    const modelPlaceholder = new THREE.Mesh( geometry, material );
    modelPlaceholder.name = 'modelPlaceholder';
    scene.add( modelPlaceholder );
    
    const planegeo = new THREE.PlaneGeometry( 15, 9, 32 );
    const planemat = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( planegeo, planemat );
    plane.userData = {
      URL: "https://www.twitch.tv/danyetraz"
  };
    objects.push(plane);
  
    modelPlaceholder.add( plane );

    plane.position.set(0,0,20);
    
    
    const planegeo2 = new THREE.PlaneGeometry( 15, 9, 32 );
    const planemat2 = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    const plane2 = new THREE.Mesh( planegeo2, planemat2 );
    plane2.userData = {
      URL:"https://www.twitch.tv/raz404"
    };
    objects.push(plane2);
    modelPlaceholder.add( plane2 );

    plane2.position.set(20,-20,0);
    plane2.rotateY(Math.PI/2);

  
    
    const planegeo3 = new THREE.PlaneGeometry( 15, 9, 33 );
    const planemat3 = new THREE.MeshBasicMaterial( {color: 0xffffff, side: THREE.DoubleSide} );
    const plane3 = new THREE.Mesh( planegeo3, planemat3 );
    plane3.userData = {
      URL:"https://www.twitch.tv/danycaligula"
    };
    objects.push(plane3);
    modelPlaceholder.add( plane3 );

    plane3.position.set(0,-40,-20);

    //GEOMETRY AND OBJECTS END//

    // document.addEventListener('mousedown', onDocumentMouseDown, false);
  const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'), antialias: true ,alpha: true
  
});
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				document.body.appendChild( renderer.domElement );

				// tone mapping
				renderer.toneMapping = THREE.NoToneMapping;

				renderer.outputEncoding = THREE.sRGBEncoding;
    
        document.addEventListener( 'mousemove', onPointerMove );
        
        function onPointerMove( event ) {

          pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
          pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
  
        }
  
        var raycaster, mouse = { x : 0, y : 0 };

        init();

        function init () {

            //Usual setup code here.

            raycaster = new THREE.Raycaster();
            renderer.domElement.addEventListener( 'click', raycast, false );

            //Next setup code there.

        }

      
        function raycast ( e ) {
          // Step 1: Detect light helper
              //1. sets the mouse position with a coordinate system where the center
              //   of the screen is the origin
              mouse.x = ( e.clientX / window.innerWidth ) * 2 - 1;
              mouse.y = - ( e.clientY / window.innerHeight ) * 2 + 1;
          
              //2. set the picking ray from the camera position and mouse coordinates
              raycaster.setFromCamera( mouse, camera );    
          
              //3. compute intersections (note the 2nd parameter)
              var intersects = raycaster.intersectObjects( scene.children, true );
          
              for ( var i = 0; i < intersects.length; i++ ) {
                  console.log( intersects[ i ].distance ); 
                  if (intersects.length > 0 && intersects[ i ].distance< 65 && intersects[ i ].object.name != 'modelPlaceholder') {
                    
                         window.open(intersects[i].object.userData.URL);
                    
                  }
              }
                  /*
                      An intersection has the following properties :
                          - object : intersected object (THREE.Mesh)
                          - distance : distance from camera to intersection (number)
                          - face : intersected face (THREE.Face3)
                          - faceIndex : intersected face index (number)
                          - point : intersection point (THREE.Vector3)
                          - uv : intersection point in the object's UV coordinates (THREE.Vector2)
                  */
              }
          
          
          
      


       

       
        
       
        
        //controls.update() must be called after any manual changes to the camera's transform

        

// place it in the center


        camera.position.set( 0, 1, 70 );
        
        window.addEventListener('wheel', onMouseWheel, false);
        function onMouseWheel(event) {

          event.preventDefault();
          if (modelPlaceholder.position.y < 10 && modelPlaceholder.position.y > -10) {
          modelPlaceholder.translateY( event.deltaY*0.0005);
          plane.translateY( event.deltaY*0.004);
          plane2.translateY( event.deltaY*0.004);
          plane3.translateY( event.deltaY*0.004);      
          modelPlaceholder.rotation.y += event.deltaY *0.0009;
      
          }
          if (modelPlaceholder.position.y > 6.5) {
            modelPlaceholder.position.y = 6.499999;
            
          }
          if (modelPlaceholder.position.y < -6.5) {
            modelPlaceholder.position.y = -6.499999;
            
          }
          if (modelPlaceholder.rotation.y > 10.86) {
            modelPlaceholder.rotation.y = 10.86;
            
          } 
          if (modelPlaceholder.rotation.y < -10.86) {
            modelPlaceholder.rotation.y = -10.86;
            
          }  
            console.log(modelPlaceholder.rotation.y);
          
        }
        
      //   function onDocumentMouseDown(event) {
      //     event.preventDefault();
      //     var vector = new THREE.Vector3((event.clientX / window.innerWidth) * 2 -
      //         1, -(event.clientY / window.innerHeight) * 2 + 1, 0.5);
          
      //     const raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position)
      //         .normalize());
      //     var intersects = raycaster.intersectObjects(objects);
      //     if (intersects.length > 0) {
      //         window.open(intersects[0].object.userData.URL);
      //     }
      //     scene.add(new THREE.ArrowHelper( raycaster.ray.direction, raycaster.ray.origin, 100, Math.random() * 0xffffff ));
      // }
      
      
         
        
        function animate() {

          requestAnimationFrame( animate );
          
          render();
          stats.update();
  
        }
        animate();
        function render() {
  
          renderer.render( scene, camera );
  
        }
        
        
        }
        




const initHomePage = () => {

  if (document.querySelector('#bg')) {
    createScene();
  }
}


export { initHomePage };