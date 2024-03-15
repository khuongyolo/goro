const app = new PIXI.Application({ width: 150, height: 150, backgroundColor: 0x131C30});

document.body.appendChild(app.view);

const emojiContainer = new PIXI.Container();
emojiContainer.x = app.screen.width / 2;
emojiContainer.y = app.screen.height / 2;
app.stage.addChild(emojiContainer);

drawEmoji();

function drawEmoji() {
    const face = new PIXI.Graphics();
    face.beginFill(0xffb701);
    face.drawCircle(0, 0, 150);
    face.endFill();
    emojiContainer.addChild(face);

    const leftEye = new PIXI.Graphics();
    leftEye.beginFill(0x000000);
    leftEye.drawCircle(-35, -25, 10);
    leftEye.endFill();
    emojiContainer.addChild(leftEye);

    const rightEye = new PIXI.Graphics();
    rightEye.beginFill(0x000000);
    rightEye.drawCircle(35, -25, 10);
    rightEye.endFill();
    emojiContainer.addChild(rightEye);

    const mouth = new PIXI.Graphics();
    mouth.lineStyle(4, 0x000000);
    mouth.moveTo(-30, 30);
    mouth.quadraticCurveTo(0, 40, 30, 30);
    mouth.endFill();
    emojiContainer.addChild(mouth);

// Handle range input change event
const range = document.getElementById('range');
range.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;
    const range_width = getComputedStyle(e.target).getPropertyValue('width');
    const label_width = getComputedStyle(label).getPropertyValue('width');
    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);
    const max = +e.target.max;
    const min = +e.target.min;
    const left = value * (num_width / max) - num_label_width / 2 + scale(value, min, max, 10, -10);
    label.style.left = `${left}px`;
    label.innerHTML = value;

    const mouthHeight = 30 + value * 0.24;
    mouth.clear();
    mouth.lineStyle(4, 0x000000);
    mouth.moveTo(-30, 30);
    mouth.quadraticCurveTo(0, -5 + value * 0.85, 30, 30);
    mouth.endFill();
});
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};