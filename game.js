// Criando a cena
const scene = new THREE.Scene();

// Criando a câmera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Criando o renderizador
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Tamanho da tela
document.body.appendChild(renderer.domElement); // Adiciona o canvas à página

// Carregar as texturas
const texture1 = new THREE.TextureLoader().load('assets/texture1.jpg');
const texture2 = new THREE.TextureLoader().load('assets/texture2.jpg');
const texture3 = new THREE.TextureLoader().load('assets/texture3.jpg');
const texture4 = new THREE.TextureLoader().load('assets/texture4.jpg');
const texture5 = new THREE.TextureLoader().load('assets/texture5.jpg');
const texture6 = new THREE.TextureLoader().load('assets/texture6.jpg');

// Criar materiais para cada face
const material1 = new THREE.MeshBasicMaterial({ map: texture1 });
const material2 = new THREE.MeshBasicMaterial({ map: texture2 });
const material3 = new THREE.MeshBasicMaterial({ map: texture3 });
const material4 = new THREE.MeshBasicMaterial({ map: texture4 });
const material5 = new THREE.MeshBasicMaterial({ map: texture5 });
const material6 = new THREE.MeshBasicMaterial({ map: texture6 });

// Criando a geometria do cubo
const geometry = new THREE.BoxGeometry();

// Criando o cubo com materiais diferentes para cada face
const materials = [
    material1, // Face 1
    material2, // Face 2
    material3, // Face 3
    material4, // Face 4
    material5, // Face 5
    material6  // Face 6
];

const cube = new THREE.Mesh(geometry, materials);
scene.add(cube); // Adiciona o cubo à cena

// Posicionando o cubo para que ele fique visível
cube.position.set(0, 0, 0);

// Posicionando a câmera para ver o cubo
camera.position.z = 5;

// Variáveis para controlar a rotação do cubo
let rotateX = 0;
let rotateY = 0;
let rotateSpeed = 0.05; // Velocidade de rotação

// Funções para capturar os eventos de pressionar e soltar os botões
document.getElementById("up").addEventListener("mousedown", () => {
    rotateX = rotateSpeed; // Rotação para cima
});

document.getElementById("down").addEventListener("mousedown", () => {
    rotateX = -rotateSpeed; // Rotação para baixo
});

document.getElementById("left").addEventListener("mousedown", () => {
    rotateY = rotateSpeed; // Rotação para a esquerda
});

document.getElementById("right").addEventListener("mousedown", () => {
    rotateY = -rotateSpeed; // Rotação para a direita
});

// Função para parar a rotação ao soltar o botão
document.getElementById("up").addEventListener("mouseup", () => {
    rotateX = 0; // Parar a rotação
});

document.getElementById("down").addEventListener("mouseup", () => {
    rotateX = 0; // Parar a rotação
});

document.getElementById("left").addEventListener("mouseup", () => {
    rotateY = 0; // Parar a rotação
});

document.getElementById("right").addEventListener("mouseup", () => {
    rotateY = 0; // Parar a rotação
});

// Função para detectar quando o toque é liberado em dispositivos móveis
document.getElementById("up").addEventListener("touchstart", () => {
    rotateX = rotateSpeed; // Rotação para cima
});

document.getElementById("down").addEventListener("touchstart", () => {
    rotateX = -rotateSpeed; // Rotação para baixo
});

document.getElementById("left").addEventListener("touchstart", () => {
    rotateY = rotateSpeed; // Rotação para a esquerda
});

document.getElementById("right").addEventListener("touchstart", () => {
    rotateY = -rotateSpeed; // Rotação para a direita
});

document.getElementById("up").addEventListener("touchend", () => {
    rotateX = 0; // Parar a rotação
});

document.getElementById("down").addEventListener("touchend", () => {
    rotateX = 0; // Parar a rotação
});

document.getElementById("left").addEventListener("touchend", () => {
    rotateY = 0; // Parar a rotação
});

document.getElementById("right").addEventListener("touchend", () => {
    rotateY = 0; // Parar a rotação
});

// Função de animação
function animate() {
    requestAnimationFrame(animate); // Cria um loop de animação
    
    // Rotaciona o cubo
    cube.rotation.x += rotateX;
    cube.rotation.y += rotateY;

    // Renderiza a cena com a câmera
    renderer.render(scene, camera);
}

// Chama a função de animação
animate();
