function setup() {
    
    canvas = createCanvas(550,400);
    canvas.position(560,225);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}