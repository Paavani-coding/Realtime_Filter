eX=0;
eY=0;
nX=0;
nY=0;

function preload()
{
    unicorn=loadImage('https://i.postimg.cc/MGkq05Z6/Unicorn-img.png');
    mustache= loadImage('https://i.postimg.cc/SR0DKXmx/R-removebg-preview.png');
}
function setup(){
    canvas= createCanvas(450,450);
    canvas.center();
    video= createCapture(VIDEO);
    video.size(450,450);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function gotPoses(results){
    if(results.length >0){
        console.log(results);
        eX=results[0].pose.rightEye.x;
        eY=results[0].pose.rightEye.y;
        nX=results[0].pose.nose.x;
        nY=results[0].pose.nose.y;
        console.log("right eye=" + eX);
        console.log("right eye=" + eY);
        console.log("nose=" + nX);
        console.log("nose=" + nY);
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function draw(){
    image(video,0,0,450,450);
    image(unicorn,eX-90,eY-230,230,230);
    image(mustache,nX-50,nY-30,100,100);
}

function take_snapshot(){
    save('My Filtered Image.png');
}