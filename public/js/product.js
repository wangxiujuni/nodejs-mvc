var oBtn = document.getElementById('product-btn');
var oLi = oBtn.getElementsByTagName('li');
var oBox = document.getElementById('product-box');
for (var i = 0; i < oLi.length; i++) {
    oLi[i].index = i;
    oLi[i].onmousemove = function () {
        for (var i = 0; i < oLi.length; i++) {
            oLi[i].style.cssText = "";
        }
        this.style.cssText = "background:rgb(88,189,235); color:#fff;";
        if (this.index === 0) {
            oBox.style.cssText = "transition-duration: 600ms;" + "transform: translate3d(0px, 0px, 0px);" + "transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);";
        } else if (this.index === 1) {
            oBox.style.cssText = "transition-duration: 600ms;" + "transform: translate3d(-1200px, 0px, 0px);" + "transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);";
        } else {
            oBox.style.cssText = "transition-duration: 600ms;" + "transform: translate3d(-2400px, 0px, 0px);" + "transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);";
        }
    }
}