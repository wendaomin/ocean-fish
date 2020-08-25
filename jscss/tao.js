// JavaScript Document
//创建数组实例
var object = new Array();
//创建实例的个数
nbfm   = 60;
var xm = 0;
var ym = 9999;
var nx = 0;
var ny = 0;
//改变fish移动
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
//CObj构造器
function CObj(N,img,w,h){
//创建img DOM
this.obj = document.createElement("img");
//赋值obj src
this.obj.src = img.src;
//绝对定位
this.obj.style.position = "fixed";
//向左移动1000
this.obj.style.left = -1000;
document.body.appendChild(this.obj);
//N 60 循环变量
this.N  = N;
this.x0 = 0;
this.y0 = -1000;
//round 四舍五入 当为0.5时向正无穷大进位
this.v  = 1 + Math.round((80 / h) * Math.random());
this.p  = 1 + Math.round((w / 8) * Math.random());
this.xx = 0;
this.yy = 0;
this.ec = 0;
//获取img DOM元素高宽的一半
this.w  = w;
this.h  = h;
//移动函数
this.movbulb = movbulb;
}
//获取body的元素的布局宽度、高度
var html = document.querySelector('html')
function resize(){
  nx = html.offsetWidth;
  ny = html.offsetWidth;
  
}
onresize = resize;
//鼠标移动时，改变元素的位置
// document.onmousemove = function(e){
// if (window.event) e = window.event;
// xm = html.scrollLeft+(e.x || e.clientX);
// ym = html.scrollTop+(e.y || e.clientY);
// }
//遍历img dom数组，调用移动函数,并且每20毫秒递归调用run函数
function run(){
for(i in object)object[i].movbulb();
setTimeout(run, 30);
}

//入口函数
//加载页面后，调用函数
onload = function() {
//后期所有img Dom实例数组
PIC = document.getElementById("bubbles").getElementsByTagName("img");
//获取body的宽度和高度
resize();
//nbfm=60 循环60次
for(nbf=0;nbf<nbfm;nbf++){
//nbf = {0,1,...,59}
//PIC.length = 4
//{0~3} % 4 = 0, 4= 0，5 = 1，6 = 2，7 = 3， 8 = 0， 9 = 1， 10 = 2， 11 = 3。 =>{0}*4 + 16 * {0，1，2，3}
sf = PIC[nbf%PIC.length];
//创建Cobj对象  nbf循环变量, sf img Dom实例，sf宽高减半 创建60个对象
object[nbf] = new CObj(nbf,sf,sf.width/2,sf.height/2);
}
run();
}