// d=new Date();
// console.log(d);


setInterval(() => {
    let d = new Date();

    hour = document.getElementById("hour")
    min = document.getElementById("minute")
    sec = document.getElementById("second")
    time = document.getElementById("time")
    dgtime = document.getElementById("dgtime")
    day = document.getElementById("day")

    // console.log(sec)

    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    t1 = d.getDate();
    t2 = d.getMonth();
    t3 = d.getFullYear();
    d1 = d.getDay();

    // console.log(s)

    rotationh = 30 * h + (.5 * m) + (1 / 120) * s;
    rotationm = 6 * m + (1 / 10) * s;
    rotations = 6 * s;
    // console.log(rotations)

    hour.style.transform = `rotate(${rotationh}deg)`
    min.style.transform = `rotate(${rotationm}deg)`
    sec.style.transform = `rotate(${rotations}deg)`

    time.innerText = `${t1}/${t2 + 1}/${t3}`
    dgtime.innerText = `${h}h ${m}m ${s}s`

    if (d1 == 0) {
        day.innerText = "Sunday";
    }
    else if (d1 == 1) {
        day.innerText = "Monday";

    }
    else if (d1 == 2) {
        day.innerText = "Tuesday";

    }
    else if (d1 == 3) {
        day.innerText = "Wednesday";

    }
    else if (d1 == 4) {
        day.innerText = "Thursday";

    }
    else if (d1 == 5) {
        day.innerText = "Friday";

    }
    else if (d1 == 6) {
        day.innerText = "Saturday";

    }


}, 1000);


