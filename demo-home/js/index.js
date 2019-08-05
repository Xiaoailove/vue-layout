var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    }
})
let footerItems=document.getElementsByClassName('footerItem');
let mains=document.getElementsByClassName('main');
for (let i = 0; i <footerItems.length ; i++) {
    footerItems[i].onclick=function () {
        for ( let j = 0 ; j <footerItems.length  ; j++ ){
            footerItems[j].classList.remove('active')
           mains[j].classList.remove('show')
        }
        footerItems[i].classList.add('active')
        mains[i].classList.add('show')
    }
}
let stars=document.getElementsByClassName('star')
let ratings=document.getElementsByClassName('rating')[0].innerText*1
let onStar=Math.floor(ratings)
let halfStar=Math.round(ratings)-onStar
for (let i = 0; i <stars.length ; i++) {
    if (i<onStar) {
        stars[i].classList.add("on")
    }else if(i<onStar+halfStar){
        stars[i].classList.add("half")
    }
}