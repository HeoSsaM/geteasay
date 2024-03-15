/* 모바일 */
// mgnb
$(document).ready(function () {
    //모바일 버튼을 클릭 하면
    $('.mobile_gnb > img').on('click', function () {
        $('.mGnb').slideToggle()
    })
})
//mtnb
$(document).ready(function () {
    //모바일 버튼을 클릭 하면
    $('.mobile_tnb > img').on('click', function () {
        $('.mTnb').slideToggle()
    })
})


/* notice */
$(document).ready(function () {
    var height = $(".notice").height(); //공지사항의 높이값을 구해주고~~
    var num = $(".rolling li").length; // 공지사항의 개수를 알아볼수 있어요! length라는 것으로!
    var max = height * num; //그렇다면 총 높이를 알 수 있겠죠 ?
    var move = 0; //초기값을 설정해줍니다.
    function noticeRolling() {
        move += height; //여기에서 += 이라는 것은 move = move + height 값이라는 뜻을 줄인 거에요.
        $(".rolling").animate({ "top": -move }, 1100, function () { // animate를 통해서 부드럽게 top값을 올려줄거에요.
            if (move >= max) { //if문을 통해 최대값보다 top값을 많이 올렸다면 다시 !
                $(this).css("top", 0); //0으로 돌려주고~
                move = 0; //초기값도 다시 0으로!
            };
        });
    };
    noticeRollingOff = setInterval(noticeRolling, 2000); //자동롤링답게 setInterval를 사용해서 1000 = 1초마다 함수 실행!!
    $(".rolling").append($(".rolling li").first().clone()); //올리다보면 마지막이 안보여서 clone을 통해 첫번째li 복사!

    $(".rolling_stop").click(function () {
        clearInterval(noticeRollingOff); //stop을 누르면 clearInterval을 통해 자동롤링을 해제합니다.
    });
    $(".rolling_start").click(function () {
        noticeRollingOff = setInterval(noticeRolling, 1000); //다시 start를 누르면 자동롤링이 실행하도록 !!
    });
});
let sub_swiper = new Swiper('.sub1_main_swiper', {
    slidesPerView: 1, //동시에 표시할 슬라이드 수
    spaceBetween: 0, //슬라이드 간 간격
    loop: true, //루프기능
    pagination: { //페이지 표시를 구현하기위한 설정
        el: ".swiper-pagination", //페이지 표시를 나타낼 HTML 요소의 클래스 지정
        clickable: true, //페이지 표시를 클릭하여 해당 슬라이드로 이동가능여부
    },
    navigation: { //다음 슬라이드로 이동하기 위한 버튼 표시
        nextEl: ".swiper-button-next", //다음 슬라이드 버튼
        prevEl: ".swiper-button-prev", //이전 슬라이드 버튼
    },
    /* autoplay: {
    delay: 3000, // 넘김 간격을 설정 (3초)
    disableOnInteraction: false, // 사용자의 상호 작용 후에도 자동 재생 여부 (false일때 재생)
    }, */
    slidesPerGroup: 1, // 한 번에 이동할 슬라이드의 수를 설정
});

$(document).ready(function () {
    $(".benefit_title li").click(function () {
        // 현재 클릭한 li에 'on' 클래스 추가
        $(this).addClass("on");
        // 나머지 li에서 'on' 클래스 제거
        $(this).siblings().removeClass("on");

        // 클릭한 li에 해당하는 브랜드 컨텐츠에 'on' 클래스 추가
        var index = $(this).index() + 1;
        $(".benefit_list").removeClass("on");
        $(".benefit_list.benefit_list0" + index).addClass("on");
    });
});




$(document).ready(function () {
    $(".brand_container nav ul li").click(function () {
        // 현재 클릭한 li에 'on' 클래스 추가
        $(this).addClass("on");
        // 나머지 li에서 'on' 클래스 제거
        $(this).siblings().removeClass("on");

        // 클릭한 li에 해당하는 브랜드 컨텐츠에 'on' 클래스 추가
        var index = $(this).index() + 1;
        $(".brand_cont").removeClass("on");
        $(".brand_cont.brand_cont_0" + index).addClass("on");
    });
});



$(document).ready(function () {
    // 상황1-1
    $("#product .left_nav .title").click(function () {
        // 현재 클릭한 것에 'on' 클래스 추가
        $(this).addClass("on");
        // 다른 .right_nav .title 요소에서 'on' 클래스 제거
        $("#product .right_nav .title").removeClass("on");
        // 상황2-1
        $("#product .line_active").removeClass("on");
    });

    // 상황1-2
    $("#product .right_nav .title").click(function () {
        // 현재 클릭한 것에 'on' 클래스 추가
        $(this).addClass("on");
        // 다른 .left_nav .title 요소에서 'on' 클래스 제거
        $("#product .left_nav .title").removeClass("on");
        // 상황2-2
        $("#product .line_active").addClass("on");
    });

    /*         // 상황3-1
            $("#product .left_nav ul li").click(function() {
                // 현재 클릭한 것에 'on' 클래스 추가
                $(this).addClass("on");
                // 다른 .left_nav ul li 요소에서 'on' 클래스 제거
                $("#product .left_nav ul li").not(this).removeClass("on");
                // 상황1-1 적용
                $("#product .left_nav .title").addClass("on");
                $("#product .right_nav .title").removeClass("on");
                // 상황2-1 적용
                $("#product .line_active").removeClass("on");
            });
        
            // 상황3-2
            $("#product .right_nav ul li").click(function() {
                // 현재 클릭한 것에 'on' 클래스 추가
                $(this).addClass("on");
                // 다른 .right_nav ul li 요소에서 'on' 클래스 제거
                $("#product .right_nav ul li").not(this).removeClass("on");
                // 상황1-2 적용
                $("#product .right_nav .title").addClass("on");
                $("#product .left_nav .title").removeClass("on");
                // 상황2-2 적용
                $("#product .line_active").addClass("on");
            }); */
    // 상황3-1
    $("#product .left_nav ul li").click(function () {
        // 현재 클릭한 것에 'on' 클래스 추가
        $(this).addClass("on");
        // 다른 .left_nav ul li 요소에서 'on' 클래스 제거
        $("#product .left_nav ul li").not(this).removeClass("on");

        // 상황1-1 적용
        $("#product .left_nav .title").addClass("on");
        $("#product .right_nav .title").removeClass("on");
        // 상황2-1 적용
        $("#product .line_active").removeClass("on");

        // right_nav > ul > li 들에서 'on' 클래스 제거
        $("#product .right_nav ul li").removeClass("on");
    });

    // 상황3-2
    $("#product .right_nav ul li").click(function () {
        // 현재 클릭한 것에 'on' 클래스 추가
        $(this).addClass("on");
        // 다른 .right_nav ul li 요소에서 'on' 클래스 제거
        $("#product .right_nav ul li").not(this).removeClass("on");

        // 상황1-2 적용
        $("#product .right_nav .title").addClass("on");
        $("#product .left_nav .title").removeClass("on");
        // 상황2-2 적용
        $("#product .line_active").addClass("on");

        // left_nav > ul > li 들에서 'on' 클래스 제거
        $("#product .left_nav ul li").removeClass("on");
    });

    // 상황4-1부터 상황4-8까지
    /*      for (let i = 1; i <= 8; i++) {
             $("#product .left_nav ul li:nth-child(" + i + ")").click(function() {
                 // 현재 클릭한 것에 'on' 클래스 추가
                 $(this).addClass("on");
                 // 다른 .left_nav ul li 요소에서 'on' 클래스 제거
                 $("#product .left_nav ul li").not(this).removeClass("on");
     
                 // 본인에게 해당하는 box_container에 'on' 클래스 추가
                 $("#product .box_container.box_container" + ("0" + i).slice(-2)).addClass("on");
                 // 다른 box_container 요소에서 'on' 클래스 제거
                 $("#product .box_container").not(".box_container" + ("0" + i).slice(-2)).removeClass("on");
             });
         } */
    // 상황4-1부터 상황4-8까지 left_nav
    for (let i = 1; i <= 4; i++) {
        $("#product .left_nav ul li:nth-child(" + i + ")").click(function () {
            // 현재 클릭한 것에 'on' 클래스 추가
            $(this).addClass("on");
            // 다른 .left_nav ul li 요소에서 'on' 클래스 제거
            $("#product .left_nav ul li").not(this).removeClass("on");

            // 본인에게 해당하는 box_container에 'on' 클래스 추가
            $("#product .box_container.box_container" + ("0" + i).slice(-2)).addClass("on");
            // 다른 box_container 요소에서 'on' 클래스 제거
            $("#product .box_container").not(".box_container" + ("0" + i).slice(-2)).removeClass("on");
        });
    }

    // 상황4-5부터 상황4-8까지 right_nav
    for (let i = 5; i <= 8; i++) {
        $("#product .right_nav ul li:nth-child(" + (i - 4) + ")").click(function () {
            // 현재 클릭한 것에 'on' 클래스 추가
            $(this).addClass("on");
            // 다른 .right_nav ul li 요소에서 'on' 클래스 제거
            $("#product .right_nav ul li").not(this).removeClass("on");

            // 본인에게 해당하는 box_container에 'on' 클래스 추가
            $("#product .box_container.box_container" + ("0" + i).slice(-2)).addClass("on");
            // 다른 box_container 요소에서 'on' 클래스 제거
            $("#product .box_container").not(".box_container" + ("0" + i).slice(-2)).removeClass("on");
        });
    }
});


$(function() {
    $('.gnb > li').on('mouseover', function() {
        $('.gnb_sub').animate({
            opacity: 1,
        },300, function() {
            $(this).css('display', 'block')
        })
    })
    $('nav').on('mouseleave', function() {
        $('.gnb_sub').animate({
            opacity: 0,
        },300, function() {
            $(this).css('display', 'none')
        })
    })
})