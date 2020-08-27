# 该项目效果 
![](D:\Documents\Desktop\桌面图片\fishg.gif)

![](D:\Documents\Desktop\桌面图片\思否图片\QQ截图20200827185055.png)

# 核心算法

```
function movbulb(){
//扩展this的作用域链
with (this) {
  //ec控制  xx = (xm - x0) / 8与yy = (ym - y0) / 8 执行20次
if(ec < 20){
  //math.abc 绝对值
  //x0为0, y0为-1000
  //xm为0， ym为9999
if(Math.abs(x0 - xm) < 100 && Math.abs(y0 - ym) < 100){
xx = (xm - x0) / 8;
yy = (ym - y0) / 8;
ec++;
}
}
//xx为初始0，yy初始为0
xx *= 0.99;
yy *= 0.99;
//
x0 = Math.round(x0 + Math.cos(y0 / 15) * p) + xx;
y0+= yy - v;
if(y0 < -h * 2 || x0 < -w * 2 || x0 > nx + w * 2){
y0 = ny + N + h * 2;
x0 = nx/2-100 + Math.random() * 500;
ec = 0;
}
obj.style.top  = y0 - h -350;
obj.style.left = x0 - w - 100;
}
}
```
# 前端代码
```
<body>
  <div class="father_box">
    <audio class="music" src="./mp3/大鱼.mp3" autoplay="autoplay" controls loop></audio>
    <!--下面是浮动的桃心-->
    <div class="bigBox">
      <div id="bubbles" style="visibility:hidden">
        <img src="./images/bluefish.png">
        <img src="./images/banfish.png">
        <img src="./images/jingfish.png">
      </div>
    </div>
  </div>
</body>
```
该算法代码是实现 fixed元素由下向上冒泡，img元素会左右并且不断向上浮动。在前端代码中，把fixed元素的父盒子body,添加style属性，transform:rotate(90deg),img由左向右~~~~，上下浮动。便形成了鱼的游动。

# 运行环境
谷歌浏览器，IE浏览器可能存在背景不兼容问题。

# 仓库
[demo](https://github.com/wendaomin/ocean-fish)