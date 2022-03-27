window.addEventListener('DOMContentLoaded', init);

const width = window.innerWidth;
const height = window.innerHeight;
let rot = 0;

function init(){
    // レンダラーを作成
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas"),
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);

    // シーンを作成
    const scene = new THREE.Scene();

    // カメラを作成
    const camera = new THREE.PerspectiveCamera(
        45, 
        width/height,
        1,
        10000,
    )
    camera.position.set(0, 0, +1000);
    

    // ライトを作成
    const directionalLight = new THREE.DirectionalLight(0xffffff);
    directionalLight.position.set(1, 1, 1);
    directionalLight.intensity = 2;
    scene.add(directionalLight);

    // ボックスを作成
    const material = new THREE.MeshNormalMaterial();
    // const mesh = new THREE.Mesh(box, material);
    // mesh.rotation.x = 0.5;
    // mesh.rotation.y = 0.5;
    // scene.add(mesh);

    for(let i=0; i<60; i++){
        const geometry = new THREE.BoxGeometry(50, 50, 50);
        const box = new THREE.Mesh(geometry, material);
        box.position.x = 1000*(Math.random() - 0.5);
        box.position.y = 500*(Math.random() - 0.5);
        box.position.z = 1000*(Math.random() - 0.5);
        box.rotation.x = Math.random();
        box.rotation.y = Math.random();
        box.rotation.z = Math.random();
        scene.add(box);
    }

    tick();

    function tick(){
        // mesh.rotation.x += 0.01;
        // mesh.rotation.y += 0.05;

        
        rot += 0.2;
        camera.position.x = 1000 * Math.sin(rot * Math.PI/180);
        camera.position.z = 1000 * Math.cos(rot * Math.PI/180);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        
        renderer.render(scene, camera);
        
        requestAnimationFrame(tick);
    }


    

}