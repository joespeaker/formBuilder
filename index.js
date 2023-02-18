function allowDrop(ev) {
    ev.preventDefault();
}

function dragStart(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragDrop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    nodeCopy.id = "id-" + getRandomInt(1, 10000); /* We cannot use the same ID */
    ev.target.appendChild(nodeCopy);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function drop(ev)
{
ev.preventDefault();
var data=ev.dataTransfer.getData("Text");
var el = document.getElementById(data);
el.parentNode.removeChild(el);
}