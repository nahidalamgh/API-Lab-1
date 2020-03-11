const app = new PIXI.Application();
document.body.appendChild(app.view);

app.stage.interactive = true;

const container = new PIXI.Container();
app.stage.addChild(container);

// Margin between the border and the element's content.

const padding = 100;
const bounds = new PIXI.Rectangle(
    -padding,
    -padding,
    app.screen.width + padding * 2,
    app.screen.height + padding * 2,
);
const maggots = [];

// Here you can change the background picture, in the ('.png'). 

for (let i = 0; i < 20; i++) {
    const maggot = PIXI.Sprite.from('map.png');
    maggot.anchor.set(0.5);
    container.addChild(maggot);
}

const displacementSprite = PIXI.Sprite.from('https://pixijs.io/examples/examples/assets/pixi-filters/displace.png');
const displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);

app.stage.addChild(displacementSprite);

container.filters = [displacementFilter];

//  Size of the magnifying square and "anchor.set" changes the distance from the mouse to the square. 

displacementFilter.scale.x = 110;
displacementFilter.scale.y = 110;
displacementSprite.anchor.set(0.5);

// Adding the square or whatever motive you want to add here. 

const ring = PIXI.Sprite.from('square.png');

ring.anchor.set(0.5);

ring.visible = false;

app.stage.addChild(ring);

const bg = PIXI.Sprite.from('map.png');
bg.width = app.screen.width;
bg.height = app.screen.height;

bg.alpha = 0.4;

container.addChild(bg);

// Adding event 

app.stage
    .on('mousemove', onPointerMove)
    .on('touchmove', onPointerMove);

function onPointerMove(eventData) {
    ring.visible = true;

    displacementSprite.position.set(eventData.data.global.x - 25, eventData.data.global.y);
    ring.position.copyFrom(displacementSprite.position);
}

let count = 0;

app.ticker.add(() => {
    count += 0.05;

});
