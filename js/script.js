'use strict';

// 초기 상태 세팅
$(function(){
    var $submenu = $('.navbar__submenu');
    var $navbarItem = $('.navbar__item');
    $submenu.hide();
    
    // 마우스가 왔을때 submenu가 보여라
    $navbarItem.mouseenter(function(){
        /* 
        var subMenu = $(this).children('.navbar__submenu');
            subMenu.slideDown();
        */
       console.log(this);
        $(this).children('.navbar__submenu').stop().slideDown();
    })
    $navbarItem.mouseleave(function(){
        $(this).children('.navbar__submenu').stop().slideUp();
    })
})