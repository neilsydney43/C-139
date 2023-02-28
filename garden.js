img="";
Status="";
objects=[];
function preload()
{
  img=loadImage("b1-image.png");
}

function setup()
{
  canvas=createCanvas(640,420);
  canvas.center();

  objectDetector=ml5.objectDetector('cocossd',modelLoaded);

}

function modelLoaded()
{
  console.log("Model Loaded!");
  Status=true;

}

function gotResult(error,result)
{
  if(error)
  {
    console.log(error);
  }
  console.log(result)
  objects=result;
}

function draw()
{

  image(img,0,0,640,420)
  if(Status !="")
  {
    r=random(255)
    g=random(255)
    b=random(255)



    objectDetector.detect(img,gotResult);
    for(var i=0;i<objects.length;i++)
    {


  fill(r,g,b);
  text(objects[i].label,objects[i].x+15,objects[i].y-15);
  noFill();
  stroke(r,g,b);
  rect(objects[i].x+15,objects[i].y-15,objects[i].width,objects[i].height);
    }
  }

 
}

function back()
{
    window.location="index.html";
}
