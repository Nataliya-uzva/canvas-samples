var canvas = document.querySelector('#canvas').getContext('2d');
console.log(canvas);

function getPeriod (points) {
    var arr = [];
    var temp = Math.PI, step = Math.round(temp/points * 100) /100, temp = 0;
    console.log(step)
    for (var i = 0; i < points; i++) {
        arr.push(Math.round(temp *100)/100);
        temp += step;
    }
    return arr;
}

function getRandomColor() {

}


function getPoints(a, points){
    var arrRadian = getPeriod (points);
    var arrPoints = [], x, y;

    for (var i = 0; i < points; i++) {
        x = a * (Math.pow(Math.tan(arrRadian[i]), 2) - 1) / (Math.pow(Math.tan(arrRadian[i]), 2) + 1);
        y = a * Math.tan(arrRadian[i]) * (Math.pow(Math.tan(arrRadian[i]), 2) - 1) / (Math.pow(Math.tan(arrRadian[i]), 2) + 1);
        arrPoints.push([x, y]);
    }
    return arrPoints;
}

function getCoordinateAxis(canvas) {

    canvas.moveTo(20,250);
    canvas.lineTo(480,250);
    canvas.stroke();

    canvas.moveTo(450,255);
    canvas.lineTo(480,250);
    canvas.stroke();
    canvas.moveTo(480,250);
    canvas.lineTo(450,245);
    canvas.stroke();

    canvas.moveTo(250,20);
    canvas.lineTo(250,480);
    canvas.stroke();

    canvas.moveTo(255, 50);
    canvas.lineTo(250, 30);
    canvas.stroke();
    canvas.moveTo(250, 30);
    canvas.lineTo(245, 50);
    canvas.stroke();

    canvas.font = "20px Arial";
    canvas.strokeText("y",230,40);
    canvas.strokeText("x",455,270);
    canvas.strokeText("0",230,270);
}

getCoordinateAxis(canvas);


function drawGraph (canvas, points, a) {
    var arr = getPoints(a, points);
    for (let i = 0; i < points-1; i++) {
        setTimeout(() => {
            canvas.strokeStyle = 'blue';
            canvas.beginPath();
        if (arr[i][0] + 250 >=0 && arr[i][0] + 250 <= 500 && arr[i][1] + 250 >=0 && arr[i][1] + 250 <= 500) {
            canvas.moveTo(arr[i][0] + 250,arr[i][1] + 250);
            canvas.lineTo( arr[i+1][0] + 250, arr[i+1][1] + 250);
            canvas.stroke();
        }

        }, i * 100);
    }
}

drawGraph (canvas, 200, 100);