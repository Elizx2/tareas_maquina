let bodyPose;
let video;
let poses = [];
let connections;
let painting;


function preload() {
  // Load the bodyPose model
  bodyPose = ml5.bodyPose();
}

function mousePressed() {
  console.log(poses);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  painting = createGraphics(windowWidth, windowHeight);
  painting.clear();

  video = createCapture(VIDEO, {flipped: true});
  video.size(windowWidth, windowHeight);
  video.hide();
  bodyPose.detectStart(video, gotPoses);
  connections = bodyPose.getSkeleton();
}

function gotPoses(results) {
  // Store the model's results in a global variable
  poses = results;
}

function draw() {
//estos son los cuadros que queremos interactivos
  painting.noStroke();
  painting.fill(255,0,0,0.5)
  painting.rect(width/2, 0, width/2, height/2);

  painting.fill(0, 0, 255, 0.5);
  painting.rect(0, 0, width/2, height/2);

  painting.fill(0, 255, 0, 0.5);
  painting.rect(0, height/2, width/2, height/2);

  painting.fill(255, 255, 0, 0.5);
  painting.rect(0, 0, width/2, height/2);


  // Display the video
  image(video, 0, 0, width, height);


  // interate throught all the poses
  for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
    for (let j = 0; j < pose.keypoints.length; j++) {
      let index1 = pose.keypoints[9];
      let index2 = pose.keypoints [10];

      // Only draw a line if we have confidence in both points
      if (index1.confidence > 0.1) {
        fill(0, 255, 0);
        noStroke();
        circle(index1.x, index1.y, 10);
      }

      if(index1.x > width/2 && index1.y < height/2){
        fill(255, 255, 0);
        rect(width/2, (height/2)-130, 130, 130);
        textSize(100);
        text ('interaccion', width/2, (height/2) -130);
      }

      if(index2.confidence > 0.1){
        fill(0, 255, 0);
        noStroke();
        circle(index1.x, index1.y, 10);
      }
      if(index2.x > width/2 && index2.y < height/2) {
        fill(255, 255, 0);
        rect(width/2, (height/2)-130, 130, 130);
      }
    }
  }
  image(painting, 0, 0);


  // Iterate through all the poses
 /* for (let i = 0; i < poses.length; i++) {
    let pose = poses[i];
       // Iterate through all the keypoints for each pose
       for (let j = 0; j < pose.keypoints.length; j++) {
        let keypoint = pose.keypoints[j];
  
      // Only draw a circle if the keypoint's confidence is greater than 0.1
      if (keypoint.confidence > 0.1) {
        fill(0, 255, 0);
        noStroke();
        circle(keypoint.x, keypoint.y, 10);
      }
    }
  }*/

}