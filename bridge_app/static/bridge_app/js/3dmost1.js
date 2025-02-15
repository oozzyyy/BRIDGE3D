let scene, camera, renderer, model, controls;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("canvas"), antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    const light = new THREE.AmbientLight(0xffffff, 1);
    scene.add(light);

    controls = new THREE.OrbitControls(camera, renderer.domElement);
    camera.position.set(0, 2, 5);
    controls.update();
    

    const loader = new THREE.TDSLoader();
    loader.load('/static/bridge_app/3dmodel/bridge-2.3ds', function (object) {
        model = object;
        model.scale.set(1, 1, 1); 
        scene.add(model);
        object.scale.set(0.5, 0.5, 0.5); 
        object.position.set(0, 0, -40); 
        object.rotation.x = Math.PI / 2;
        object.rotation.y = Math.PI;     
        scene.add(object);
        model.traverse(function (child) {
            if (child.isMesh) {
                child.material = new THREE.MeshStandardMaterial({
                    map: woodTexture,  
                    metalness: 0,   
                    roughness: 0.9 
                });
            }
        });
    });

    animate();
}

function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

function updateScale() {
    if (model) {
        let width = parseFloat(document.getElementById("width").value);
        let height = parseFloat(document.getElementById("height").value);
        let depth = parseFloat(document.getElementById("depth").value);
        model.scale.set(width, height, depth);
        
    }
}

document.getElementById("apply").addEventListener("click", function () {
    if (model) {
        let width = parseFloat(document.getElementById("width").value);
        let height = parseFloat(document.getElementById("height").value);
        let depth = parseFloat(document.getElementById("depth").value);

        // Проверяем, что введены корректные числа
        if (isNaN(width) || isNaN(height) || isNaN(depth)) {
            alert("Введите корректные значения!");
            return;
        }

        model.scale.set(width, height, depth);

        camera.lookAt(model.position);
        controls.update();
    }
});

// Запуск
init();
