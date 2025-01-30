import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene()

const renderer = new THREE.WebGLRenderer();




const light = new THREE.HemisphereLight( 0xffffbb, 0x080820, 5 );
scene.add( light );
let model

const loader = new GLTFLoader();
loader.load(
  'monk.glb',  // Path to your GLB file
  (gltf) => {
    model = gltf.scene;
    model.rotation.set(0, 0, 0); // Rotate 90 degrees around the X-axis
    scene.add(model);
  },
  (error) => {
    console.error('An error happened', error);
  }
);





scene.add(light)


renderer.setPixelRatio(devicePixelRatio)
renderer.setSize(innerWidth,innerHeight)

document.body.appendChild(renderer.domElement)
const camera = new THREE.PerspectiveCamera(75,innerWidth/innerHeight,0.1,1000)
camera.position.z = 5;
const controls = new OrbitControls(camera, renderer.domElement);
console.log(scene)

function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene,camera)
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
        model.rotation.x -= 0.01;
        // Your code for "Down Arrow" key press
    } else if (event.key === "ArrowUp") {
        model.rotation.x += 0.01;
    }
    else if (event.key === "ArrowLeft") {
        model.rotation.y -= 0.01;
        // Your code for "Down Arrow" key press
    } else if (event.key === "ArrowRight") {
        model.rotation.y += 0.01;
    }
});

renderer.render(scene, camera)

animate()

