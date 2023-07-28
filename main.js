function setup(){
    Canvas = createCanvas(350,350);
    Canvas.center();
  video = createCapture(VIDEO);
  video.size(350, 350);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 350, 350 );

function modelLoaded(){
    console.log('PoseNet is Initialized');
}