//DOM
let body = document.body;
let rocketTime = 5000;
let againTime = 5000;
let initial = 6000;
let x = 500;
let rocketDistance_1 = document.querySelector('.rocketDistance-1');
let rocketDistance_2 = document.querySelector('.rocketDistance-2');
let rocketDistance_3 = document.querySelector('.rocketDistance-3');

//確保頁面載入在執行function
window.onload = function () {
    rocketDistance_1.textContent = "一號火箭等候發射中...";
    rocketDistance_2.textContent = "二號火箭等候發射中...";
    rocketDistance_3.textContent = "三號火箭等候發射中...";
    rocketSetTimeOut();
}
//發射倒數
function rocketSetTimeOut() {
    rocketTime -= 1000;
    console.log('發射倒數:' + rocketTime / 1000 + '秒');
    if (rocketTime == 0) {
        rocketUp();
        reRocketTimeOut()
        return;
    }
    setTimeout("rocketSetTimeOut()", 1000);
}
//倒數回歸
function reRocketTimeOut() {
    againTime -= 1000;
    console.log('回歸倒數:' + againTime / 1000 + '秒');
    if (againTime == 0) {
        reRocket()
        rocketTime += initial;
        againTime += initial;
        rocketSetTimeOut()
        return;
    }
    setTimeout("reRocketTimeOut()", 1000);
}
//產生亂數
function getRandom(n) {
    return Math.floor(Math.random() * n);
}
//火箭發射
function rocketUp() {
    var a = document.querySelector('.rocket-1').style.bottom = getRandom(1000) + 'px';
    var b = document.querySelector('.rocket-2').style.bottom = getRandom(1000) + 'px';
    var c = document.querySelector('.rocket-3').style.bottom = getRandom(1000) + 'px';
    ranging(a, b, c)
    rocketDistance_1.textContent = "火箭一號發射距離:" + a;
    rocketDistance_2.textContent = "火箭二號發射距離:" + b;
    rocketDistance_3.textContent = "火箭三號發射距離:" + c;
}
//回歸原始處
function reRocket() {
    document.querySelector('.rocket-1').style.bottom = '101px';
    document.querySelector('.rocket-2').style.bottom = '101px';
    document.querySelector('.rocket-3').style.bottom = '101px';
    rocketDistance_1.textContent = "一號火箭等候發射中...";
    rocketDistance_2.textContent = "二號火箭等候發射中...";
    rocketDistance_3.textContent = "三號火箭等候發射中...";
}
//排序
function ranging(rocketNameA, rocketNameB, rocketNameC) {
    let ranking = document.querySelector('.ranking');
    //轉換成物件
    let rocket = [{
        rocketName: 1,
        distance: rocketNameA
    }, {
        rocketName: 2,
        distance: rocketNameB
    }, {
        rocketName: 3,
        distance: rocketNameC
    }]
    //物件排序
    let rangData = rocket.sort((a, b) => {
        return a.distance < b.distance ? 1 : -1;
    })
    let str = "";
    for (let i = 0; i < rangData.length; i++) {
        if (i == 0) {
            str += `
            <div class="rankingdata">
                <h1 style="color:green;font-size:20px;">冠軍</h1>
                <div class="ranking">火箭順序:${rocket[i].rocketName}</div>
                <div class="ranking">發射距離:${rocket[i].distance}</div>
            </div>
            `;
        } else if (i == 1) {
            str += `
            <div class="rankingdata">
                <h1 style="color:blue;font-size:20px;">亞軍</h1>
                <div class="ranking">火箭順序:${rocket[i].rocketName}</div>
                <div class="ranking">發射距離:${rocket[i].distance}</div>
            </div>
            `;
        } else if (i == 2) {
            str += `
            <div class="rankingdata">
                <h1 style="color:red;font-size:20px;">季軍</h1>
                <div class="ranking">火箭順序:${rocket[i].rocketName}</div>
                <div class="ranking">發射距離:${rocket[i].distance}</div>
            </div>
            `;

        }
    }
    ranking.innerHTML = str;
}
//keyup發射
function keyupRocket(e) {
    console.log(e.keyCode);
    switch (e.keyCode) {
        case 90:
            document.querySelector('.rocket-1').style.bottom = '2000px';
            break;
        case 88:
            document.querySelector('.rocket-2').style.bottom = '2000px';
            break;
        case 67:
            document.querySelector('.rocket-3').style.bottom = '2000px';
            break;
    }
}
//監聽
body.addEventListener('keydown', keyupRocket, false);