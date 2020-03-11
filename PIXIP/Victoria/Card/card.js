// This is demo of pixi-layers.js, https://github.com/pixijs/pixi-layers
// Drag the rabbits to understand what's going on

const app = new PIXI.Application({ backgroundColor: 0x00000 });
document.body.appendChild(app.view);
// META STUFF, groups exist without stage just fine

// z-index = 0, sorting = true;
const greenGroup = new PIXI.display.Group(0, true);
greenGroup.on('sort', (sprite) => {
    // green bunnies go down
    sprite.zOrder = sprite.y;
});
const blackGroup = new PIXI.display.Group(1, ((sprite) => {
    // black monkey bunnies go up
    sprite.zOrder = -sprite.y;
}));

const redGroup = new PIXI.display.Group(1, ((sprite) => {
    // red panda go up
    sprite.zOrder = -sprite.y;
}));

const whiteGroup = new PIXI.display.Group(1, ((sprite) => {
    // white pig go up
    sprite.zOrder = -sprite.y;
}));

const purpleGroup = new PIXI.display.Group(1, ((sprite) => {
    // purple cow go up
    sprite.zOrder = -sprite.y;
}));

// z-index = 1, sorting = true, we can provide zOrder function directly in constructor
const blueGroup = new PIXI.display.Group(1, ((sprite) => {
    // blue elephant go up
    sprite.zOrder = -sprite.y;
}));

// Drag is the best layer, dragged element is above everything else
const dragGroup = new PIXI.display.Group(2, false);

// Shadows are the lowest
const shadowGroup = new PIXI.display.Group(-1, false);

// specify display list component
app.stage = new PIXI.display.Stage();
// PixiJS v5 sorting - works on zIndex - and layer gets its zIndex from a group!
app.stage.sortableChildren = true;
// sorry, group cant exist without layer yet :(;
app.stage.addChild(new PIXI.display.Layer(greenGroup));
app.stage.addChild(new PIXI.display.Layer(blueGroup));
app.stage.addChild(new PIXI.display.Layer(blackGroup));
app.stage.addChild(new PIXI.display.Layer(redGroup));
app.stage.addChild(new PIXI.display.Layer(whiteGroup));
app.stage.addChild(new PIXI.display.Layer(purpleGroup));
app.stage.addChild(new PIXI.display.Layer(dragGroup));
app.stage.addChild(new PIXI.display.Layer(shadowGroup));

const blurFilter = new PIXI.filters.BlurFilter();
blurFilter.blur = 0.5;

// create a texture from an image path
const textureGreen = PIXI.Texture.from('ani-bunny.png');
const textureBlue = PIXI.Texture.from('ani-elephant.png');
const textureBlack= PIXI.Texture.from('ani-monkey.png');
const textureRed= PIXI.Texture.from('ani-panda.png');
const textureWhite= PIXI.Texture.from('ani-pig.png');
const texturePurple= PIXI.Texture.from('ani-cow.png');


// make obsolete containers. Why do we need them?
// Just to show that we can do everything without caring of actual parent container
const bunniesOdd = new PIXI.Container();
const bunniesEven = new PIXI.Container();
const bunniesBlue = new PIXI.Container();
app.stage.addChild(bunniesOdd);
app.stage.addChild(bunniesBlue);
app.stage.addChild(bunniesEven);

//this is a loop for the new pixie spread 
for (let i = 1; i >= 0; i--) {
    const bunny = new PIXI.Sprite(textureGreen);
    bunny.width = 90;
    bunny.height = 90;
    bunny.position.set(350 + 20 * i, 350 - 20 * i);
    bunny.anchor.set(0.5);
    // that thing is required
    bunny.parentGroup = greenGroup;
    if (i % 2 === 0) {
        bunniesEven.addChild(bunny);
    } else {
        bunniesOdd.addChild(bunny);
    }
    subscribe(bunny);
    addShadow(bunny);
}

//this is a loop for the new pixie spread 
for (let i = 1; i >= 0; i--) {
    const bunny = new PIXI.Sprite(texturePurple);
    bunny.width = 90;
    bunny.height = 90;
    bunny.position.set(350 + 20 * i, 350 - 20 * i);
    bunny.anchor.set(0.5);
    bunny.parentGroup = greenGroup;
    if (i % 2 === 0) {
        bunniesEven.addChild(bunny);
    } else {
        bunniesOdd.addChild(bunny);
    }
    subscribe(bunny);
    addShadow(bunny);
}

//this is a loop for the new pixie spread 
for (let i = 1; i >= 0; i--) {
    const bunny = new PIXI.Sprite(textureBlack);
    bunny.width = 90;
    bunny.height = 90;
    bunny.position.set(350 + 20 * i, 350 - 20 * i);
    bunny.anchor.set(0.5);
    bunny.parentGroup = blueGroup;
    bunniesBlue.addChild(bunny);
    subscribe(bunny);
    addShadow(bunny);
}

//this is a loop for the new pixie spread 
for (let i = 1; i >= 0; i--) {
    const bunny = new PIXI.Sprite(textureRed);
    bunny.width = 90;
    bunny.height = 90;
    bunny.position.set(350 + 20 * i, 350 - 20 * i);
    bunny.anchor.set(0.5);
    bunny.parentGroup = blueGroup;
    bunniesBlue.addChild(bunny);
    subscribe(bunny);
    addShadow(bunny);
}

//this is a loop for the new pixie spread 
for (let i = 1; i >= 0; i--) {
    const bunny = new PIXI.Sprite(textureWhite);
    bunny.width = 90;
    bunny.height = 90;
    bunny.position.set(350 + 20 * i, 350 - 20 * i);
    bunny.anchor.set(0.5);
    bunny.parentGroup = blueGroup;
    bunniesBlue.addChild(bunny);
    subscribe(bunny);
    addShadow(bunny);
}

//this is a loop for the new pixie sprite
for (let i = 1; i >= 0; i--) {
    const bunny = new PIXI.Sprite(textureBlue);
    bunny.width = 90;
    bunny.height = 90;
    bunny.position.set(350 + 20 * i, 350 - 20 * i);
    bunny.anchor.set(0.5);
    bunny.parentGroup = blueGroup;
    bunniesBlue.addChild(bunny);
    subscribe(bunny);
    addShadow(bunny);
}

//event listener 
function subscribe(obj) {
    obj.interactive = true;
    obj.on('mousedown', onDragStart)
        .on('touchstart', onDragStart)
        .on('mouseup', onDragEnd)
        .on('mouseupoutside', onDragEnd)
        .on('touchend', onDragEnd)
        .on('touchendoutside', onDragEnd)
        .on('mousemove', onDragMove)
        .on('touchmove', onDragMove);
}

//adding function for shadows
function addShadow(obj) {
    const gr = new PIXI.Graphics();
    gr.beginFill(0x0, 1);
    // yes , I know bunny size, I'm sorry for this hack
    const scale = 1.1;
    gr.drawRect(-25 / 2 * scale, -36 / 2 * scale, 25 * scale, 36 * scale);
    gr.endFill();
    gr.filters = [blurFilter];

    gr.parentGroup = shadowGroup;
    obj.addChild(gr);
}

//creating a function for drag start 
function onDragStart(event) {
    if (!this.dragging) {
        this.data = event.data;
        this.oldGroup = this.parentGroup;
        this.parentGroup = dragGroup;
        this.dragging = true;

        this.scale.x *= 1.1;
        this.scale.y *= 1.1;
        this.dragPoint = event.data.getLocalPosition(this.parent);
        this.dragPoint.x -= this.x;
        this.dragPoint.y -= this.y;
    }
}

//creating function for drag end 
function onDragEnd() {
    if (this.dragging) {
        this.dragging = false;
        this.parentGroup = this.oldGroup;
        this.scale.x /= 1.1;
        this.scale.y /= 1.1;
        // set the interaction data to null
        this.data = null;
    }
}

//creating function for drag move 
function onDragMove() {
    if (this.dragging) {
        const newPosition = this.data.getLocalPosition(this.parent);
        this.x = newPosition.x - this.dragPoint.x;
        this.y = newPosition.y - this.dragPoint.y;
    }
}
