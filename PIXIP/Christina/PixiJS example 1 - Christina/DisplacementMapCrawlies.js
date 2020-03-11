const app = new PIXI.Application();
document.body.appendChild(app.view);

app.stage.interactive = true;

const container = new PIXI.Container();
app.stage.addChild(container);

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

    maggot.direction = Math.random() * Math.PI * 2;
    maggot.speed = 1;
    maggot.turnSpeed = Math.random() - 0.8;

    maggot.x = Math.random() * bounds.width;
    maggot.y = Math.random() * bounds.height;

    maggot.scale.set(1 + Math.random() * 0.3);
    maggot.original = new PIXI.Point();
    maggot.original.copy(maggot.scale);
    maggots.push(maggot);
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
