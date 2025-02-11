const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

let bridge;
function createBridge(length, width, height) {
    if (bridge) scene.remove(bridge);
    const geometry = new THREE.BoxGeometry(length, height, width);
    const material = new THREE.MeshPhongMaterial({ color: 0x808080 });
    bridge = new THREE.Mesh(geometry, material);
    scene.add(bridge);
}

let length = 100;
let width = 20;
let height = 10;
createBridge(length, width, height);

camera.position.z = 300;

function animate() {
    requestAnimationFrame(animate);
    bridge.rotation.y += 0.01;
    renderer.render(scene, camera);
}
    animate();


document.getElementById('update-bridge').addEventListener('click', () => {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    height = parseFloat(document.getElementById('height').value);
    createBridge(length, width, height);
});


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});