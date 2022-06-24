// d=new Date();
// console.log(d);

setInterval(() => {
    let d = new Date();

    hour = document.getElementById("hour")
    min = document.getElementById("minute")
    sec = document.getElementById("second")

    // console.log(sec)

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    // console.log(s)

    rotationh = 30 * h + (.5 * m) + (1 / 120) * s;
    rotationm = 6 * m + (1 / 10) * s;
    rotations = 6 * s;
    // console.log(rotations)

    hour.style.transform = `rotate(${rotationh}deg)`
    min.style.transform = `rotate(${rotationm}deg)`
    sec.style.transform = `rotate(${rotations}deg)`


}, 1000);