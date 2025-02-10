// Initialize scene, camera, and renderer
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(10, 10, 10);
scene.add(light);

// Function to create the bridge
let bridge;
function createBridge(length, width, height) {
    if (bridge) scene.remove(bridge);
    const geometry = new THREE.BoxGeometry(length, height, width);
    const material = new THREE.MeshPhongMaterial({ color: 0x808080 });
    bridge = new THREE.Mesh(geometry, material);
    scene.add(bridge);
}

// Initial bridge parameters
let length = 100;
let width = 20;
let height = 10;
createBridge(length, width, height);

// Set camera position
camera.position.z = 300;
// Animation loop
function animate() {
    requestAnimationFrame(animate);
    bridge.rotation.y += 0.01;
    renderer.render(scene, camera);
}
    animate();

// Update bridge on button click
document.getElementById('update-bridge').addEventListener('click', () => {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);
    height = parseFloat(document.getElementById('height').value);
    createBridge(length, width, height);
});

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});