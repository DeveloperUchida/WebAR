// グローバル変数を宣言
let w, h, canvas, scene, camera, renderer, object, controls;
let deviceOrienModal = null;
let deviceOrienModalButton = null;
let video = null;
let videoInput = null;
let videoStream = null;

// ビデオ要素を取得
const video = document.getElementById("camera");

// エラーハンドリングのためのヘルパー関数
function handleVideoError(error) {
    console.error("ビデオエラー:", error);
    alert("ビデオの取得中にエラーが発生しました。");
}

// ...

// エラーハンドリングの改善
function handleDeviceOrientationError(error) {
    console.error("デバイスオリエンテーションエラー:", error);
    alert("デバイスの向きの取得中にエラーが発生しました。");
}

// ...

// 初期化関数
function initialize() {
    initVideo();
    initThree();
}

// ウィンドウのリサイズ時にビデオと3Dシーンを調整
window.addEventListener("resize", () => {
    w = window.innerWidth;
    h = window.innerHeight;
    adjustVideo();
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
});

// 初期化
window.onload = () => {
    checkDeviceOrien()
        .then(initialize)
        .catch((error) => {
            console.log(error);
        });
};
