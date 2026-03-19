/* 页面计时器 start */
let now = new Date();
function createtime() {
    // 当前时间
    now.setTime(now.getTime() + 1000);
    // let start = new Date("05/14/2023 00:00:00"); // 旅行者1号开始计算的时间
    // let dis = Math.trunc(23400000000 + (now - start) / 1000 * 17); // 距离=秒数*速度 记住转换毫秒
    // let unit = (dis / 149600000).toFixed(6); // 天文单位

    // 网站诞生时间
    let grt = new Date("07/01/2025 00:00:00");
    let days = (now - grt) / 1e3 / 60 / 60 / 24;
    let dnum = Math.floor(days);
    let hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum;
    let hnum = Math.floor(hours);
    let minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum;
    let mnum = Math.floor(minutes);
    let seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum;
    let snum = Math.round(seconds);

    let currentTimeHtml = "";
       currentTimeHtml = `<div style="font-size:13px;font-weight:bold">
        本站居然运行了 ${dnum} 天 ${hnum} 小时 ${mnum} 分 ${snum} 秒 
        <i id="heartbeat" class="fas fa-heartbeat"></i><br></div><font size=2px>星际闪耀光影🎆，落入你的眼睛</font>`;
    
    document.getElementById("workboard") &&
        (document.getElementById("workboard").innerHTML = currentTimeHtml);
}

// 设置重复执行函数，周期1000ms
setInterval(() => {
    createtime();
}, 1000);