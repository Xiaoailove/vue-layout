
var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})

// var as=document.getElementsByClassName('as');
// var as2=document.querySelectorAll('.as');
// console.log(as,as2);
// var div=document.createElement('div');
// div.className="as";
// document.body.appendChild(div);
// console.log(as,as2);
var footerItems=document.getElementsByClassName('footerItem');
var mains=document.getElementsByClassName('main');
//1.let
//2.闭包
//3.存索引
for(var i=0;i<footerItems.length;i++){
    footerItems[i].index=i;
    // (function(i){
        footerItems[i].onclick=function () {
            for(var j=0;j<footerItems.length;j++){
                mains[j].classList.remove('show');
            }
            mains[this.index].classList.add('show');
            // mains[this.index].className="main show";
        }
    // })(i)
}

var stars=document.getElementsByClassName('star');
var rating=document.getElementsByClassName('rating')[0].innerText*1;
console.log(rating)
var onNum=Math.floor(rating);
var halfNum=Math.round(rating)-onNum;
console.log(onNum,halfNum)
for(var n=0;n<stars.length;n++){
    if(n<onNum){
        stars[n].classList.add("on");
    }else if(n<halfNum+onNum){
        stars[n].classList.add("half");
    }
}