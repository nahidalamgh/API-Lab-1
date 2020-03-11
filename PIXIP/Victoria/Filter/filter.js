const app = new PIXI.Application();
document.body.appendChild(app.view);

// Inner radius of the circle
const radius = 70;

// The blur amount
const blurSize = 15;

// the picture behind the filter 
app.loader.add('grass', 'safepage.jpg');
app.loader.load(setup);

// the size of the background 
function setup(loader, resources) {
    const background = new PIXI.Sprite(resources.grass.texture);
    app.stage.addChild(background);
    background.width = app.screen.width;
    background.height = app.screen.height;

// the color of the filter and the shape of it
    const circle = new PIXI.Graphics()
        .beginFill(0xFF0000)
        .drawCircle(radius + blurSize, radius + blurSize, radius)
        .endFill();
    circle.filters = [new PIXI.filters.BlurFilter(blurSize)];

//draw new pixie rectangle 
    const bounds = new PIXI.Rectangle(0, 0, (radius + blurSize) * 2, (radius + blurSize) * 2);
    const texture = app.renderer.generateTexture(circle, PIXI.SCALE_MODES.NEAREST, 1, bounds);
    const focus = new PIXI.Sprite(texture);

// DOM 
    app.stage.addChild(focus);
    background.mask = focus;

// function of mouse event    
    app.stage.interactive = true;
    app.stage.on('mousemove', pointerMove);

// function for locating pointerMove
    function pointerMove(event) {
        focus.position.x = event.data.global.x - focus.width / 2;
        focus.position.y = event.data.global.y - focus.height / 2;
    }
}