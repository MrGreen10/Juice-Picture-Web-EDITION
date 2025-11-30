const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let drawing = false;
let brushSize = 5;

const brushInput = document.getElementById("brushSize");
brushInput.addEventListener("input", (e) => {
    brushSize = e.target.value;
});

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, brushSize, 0, Math.PI * 2);
    ctx.fill();
});

function yesil() {
    ctx.fillStyle = "#2AFF00";
}
function kirmizi() {
    ctx.fillStyle = "#FF0000";
}
function sari() {
    ctx.fillStyle = "#F6FF00";
}
function mavi() {
    ctx.fillStyle = "#00A9FF";
}
function siyah() {
    ctx.fillStyle = "#000000";
}
function beyaz() {
    ctx.fillStyle = "#FFFFFF"; 
}
