let bodyPose;
let video;
let poses = [];
let connections;
let painting;


function preload() {
  // Load the bodyPose model
  bodyPose = ml5.bodyPose();
}

function mousePressed(){
  console.log(poses)
}

function setup() {
  createCanvas(640, 480);
  // Create the video and hide it
  painting = createGraphics(640,480);
  painting.clear();
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  bodyPose.detectStart(video, gotPoses);
  // Get the skeleton connection information
  connections = bodyPose.getSkeleton();
  video.hide();

  // Start detecting poses in the webcam video
  bodyPose.detectStart(video, gotPoses);
  connections = bodyPose.gerSkeleton();
}

// Callback function for when the model returns pose data
function gotPoses(results) {
  // Store the model's results in a global variable
  poses = results;
}

function draw() {
  painting.noStroke();
  painting.fill(255,0,0,0.5)
  painting.rect(width/2, 0, widht/2, height)
  painting.
  painting.
  // Display the video
  //image(video, 0, 0, width, height);
  // Draw the skeleton connections
 // for (let i = 0; i < poses.length; i++) {
   // let pose = poses[i];
    //for (let j = 0; j < connections.length; j++) {
      //let pointAIndex = connections[j][0];
      //let pointBIndex = connections[j][1];
      //let pointA = pose.keypoints[pointAIndex];
      //let pointB = pose.keypoints[pointBIndex];
      // Only draw a line if we have confidence in both points
      //if (pointA.confidence > 0.1 && pointB.confidence > 0.1) {
        //stroke(255, 0, 0);
        //strokeWeight(2);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
    }
  }
   image(painting, 0, 0);
}
  
// image(painting, 0, 0);
  

    
