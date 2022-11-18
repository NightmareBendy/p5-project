function preload()
{}
function setup()
{
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    tint_color = "";
}
function draw()
{
    image(video, 100, 100, 400, 400);
    tint(tint_color);
    circle(0, 0, 400);
    circle(0, 600, 400);
    circle(600, 0, 400);
    circle(600, 600, 400);
}
function takeSnapshot()
{
    save('An_Inking_Mistake.png');
}
function applyFilter()
{
    tint_color = document.getElementById("color_name").value;
}