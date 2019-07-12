// 头部滚动变色
window.onscroll = function () {
    var disColor = document.documentElement.scrollTop || document.body.scrollTop;
    if (disColor >= 900) {
        document.getElementById('header').className = 'scroll-color';
    } else {
        document.getElementById('header').className = '';
    }
};


// banner轮播
var images = document.getElementById('banner').getElementsByTagName('img');
var spans = document.querySelectorAll('.indicator span');

// 定义有参函数
function showImage(index) {
    for (var i = 0; i < images.length; i++) {
        spans[i].index = i;//自定义属性，得到对应的下标
        images[i].index = i;//自定义属性，得到对应的下标
        images[i].style.opacity = '0';//将图片透明度全部赋值为0
        spans[i].style.height = '10px';//定义指示器样式
    }
    //将传入参数下标值的图片透明度赋值为 1
    images[index].style.opacity = '1';
    spans[index].style.height = '20px';
}

showImage(0);//初始设置下标为0的图片和指示器的样式

var count = 1;//获取计数器
// 定义自动轮播函数
function imageMove() {
    // 判断count的值如果能被4整除（4张图片），则将count重新赋值为0；
    if (count % 4 === 0) {
        count = 0;
    }
    // 将count值当做参数传给函数showImage();
    showImage(count);
    count++;//执行一次 ＋1
}

// 设置4秒调用一次函数imageMove()，并且赋值给imageInitailMove
var imageInitailMove = setInterval('imageMove()', 4000);

// 指示器触摸事件
for (var i = 0; i < spans.length; i++) {
    spans[i].onmousemove = function () {
        clearInterval(imageInitailMove);
        // 将当前触摸指示器的下标值赋值给count
        count = event.target.index;
        // 调用函数
        showImage(count);
        imageInitailMove = setInterval('imageMove()', 4000);
    }
}
