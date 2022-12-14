
song = "";

function preload() {
    song = loadSound("musix.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    canvas.position(450, 200);

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play() {
    song.play();
}
function stop() {
    song.stop();
}
function pause() {
    song.pause();
}