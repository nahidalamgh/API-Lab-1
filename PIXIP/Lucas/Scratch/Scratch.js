const app = new PIXI.Application();
document.body.appendChild(app.view);
const { stage } = app;

// prepare circle texture, that will be our brush
const brush = new PIXI.Graphics();
brush.beginFill(0xffffff);
brush.drawCircle(0, 0, 40);
brush.endFill();

//Background image that will become the "top layer".
app.loader.add('t1', 'examples/assets/bg_grass.jpg');
// The second layer of the image which will be displayed once the top layer of the image.
app.loader.add('t2', 'Scratch.png');
app.loader.load(setup);

//A function created for making a setup of the actual function of the code.
function setup(loader, resources) {
    const background = new PIXI.Sprite(resources.t1.texture);
    stage.addChild(background);
    background.width = app.screen.width;
    background.height = app.screen.height;

//Deciding what image to reveal.
    const imageToReveal = new PIXI.Sprite(resources.t2.texture);
    stage.addChild(imageToReveal);
// the size of the image = screen width of the canvas. 
    imageToReveal.width = app.screen.width;
//Width of the image to reveal underneath the "toplayer".
    imageToReveal.height = app.screen.height;
//Height of the image to reveal underneath the "toplayer".

    const renderTexture = PIXI.RenderTexture.create(app.screen.width, app.screen.height);

    const renderTextureSprite = new PIXI.Sprite(renderTexture);
    stage.addChild(renderTextureSprite);
    imageToReveal.mask = renderTextureSprite;
// Make the canvas interactive.
    app.stage.interactive = true;
    app.stage.on('pointerdown', pointerDown);
    app.stage.on('pointerup', pointerUp);
    app.stage.on('pointermove', pointerMove);
// Make the dragging function false so it doesnt work to drag it around. 
    let dragging = false;
// Create an event where the pointer is the key component.
    function pointerMove(event) {
        if (dragging) {
            brush.position.copyFrom(event.data.global);
            app.renderer.render(brush, renderTexture, false, null, false);
        }
    }
//Create an event which is listening to the mouse events, such as click etc.
    function pointerDown(event) {
        dragging = true;
        pointerMove(event);
    }
//create an event which is listening to the mouse events, such as pointerup. 
    function pointerUp(event) {
        dragging = false;
    }
}
