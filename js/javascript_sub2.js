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

/* 섹션1 */
let sub2Sec1Right = document.querySelector('.sub2_sec01 .sub2_section_cont1_right');
let sub2Section1s = document.querySelectorAll('.sub2_sec01 .sub2_section_botArea_cont');
let sub2Sec1Icons = document.querySelectorAll('.sub2_sec01 .sub2_num_icon');
let initialStates = Array.from(sub2Sec1Icons).map(icon => icon.style.backgroundImage);
sub2Section1s.forEach(function (sub2Section, index) {
    sub2Section.addEventListener('click', function () {
        // 모든 요소에서 'on' 클래스 제거
        sub2Section1s.forEach(function (item) {
            item.classList.remove('on');
        });
        // 현재 클릭한 요소에 'on' 클래스 추가
        this.classList.add('on');
        // 현재 클릭한 요소에 따라 배경 이미지 변경
        if (this.classList.contains('on')) {
            // sub2Sec1Icons는 NodeList이므로 forEach를 사용하여 각 요소에 접근
            sub2Sec1Icons.forEach(function (icon, iconIndex) {
                if (iconIndex === index) {
                    // 현재 클릭한 아이콘의 배경 이미지 변경
                    icon.style.backgroundImage = `url('img/sub2_img/icon_${index + 1}_on.png')`;
                    // .sub2_section_cont1_right의 이미지 변경
                    sub2Sec1Right.style.backgroundImage = `url('img/sub2_img/section01_0${index + 1}.png')`;
                } else {
                    // 다른 아이콘들은 초기 상태로 되돌림
                    icon.style.backgroundImage = initialStates[iconIndex];
                }
            });
        }
    });
    // 초기 상태에서 0번 아이콘에 대한 이미지 변경
    if (index === 0) {
        sub2Sec1Icons[0].style.backgroundImage = `url('img/sub2_img/icon_1_on.png')`;
        sub2Sec1Right.style.backgroundImage = `url('img/sub2_img/section01_01.png')`;
        sub2Section1s[0].classList.add('on');
    }
});
/* 섹션2 */
let sub2Sec2Left = document.querySelector('.sub2_sec02 .sub2_section_cont2_left');
let sub2Section2s = document.querySelectorAll('.sub2_sec02 .sub2_section_botArea_cont');
let sub2Sec2Icons = document.querySelectorAll('.sub2_sec02 .sub2_num_icon');
let initial2States = Array.from(sub2Sec2Icons).map(icon => icon.style.backgroundImage);
sub2Section2s.forEach(function (sub2Section, index) {
    sub2Section.addEventListener('click', function () {
        // 모든 요소에서 'on' 클래스 제거
        sub2Section2s.forEach(function (item) {
            item.classList.remove('on');
        });
        // 현재 클릭한 요소에 'on' 클래스 추가
        this.classList.add('on');
        // 현재 클릭한 요소에 따라 배경 이미지 변경
        if (this.classList.contains('on')) {
            // sub2Sec1Icons는 NodeList이므로 forEach를 사용하여 각 요소에 접근
            sub2Sec2Icons.forEach(function (icon, iconIndex) {
                if (iconIndex === index) {
                    // 현재 클릭한 아이콘의 배경 이미지 변경
                    icon.style.backgroundImage = `url('img/sub2_img/icon_${index + 1}_on.png')`;
                    // .sub2_section_cont1_right의 이미지 변경
                    sub2Sec2Left.style.backgroundImage = `url('img/sub2_img/section02_0${index + 1}.png')`;
                } else {
                    // 다른 아이콘들은 초기 상태로 되돌림
                    icon.style.backgroundImage = initialStates[iconIndex];
                }
            });
        }
    });
    // 초기 상태에서 0번 아이콘에 대한 이미지 변경
    if (index === 0) {
        sub2Sec2Icons[0].style.backgroundImage = `url('img/sub2_img/icon_1_on.png')`;
        sub2Sec2Left.style.backgroundImage = `url('img/sub2_img/section02_01.png')`;
        sub2Section2s[0].classList.add('on');
    }
});
/* 섹션1 */
let sub2Sec3Right = document.querySelector('.sub2_sec03 .sub2_section_cont1_right');
let sub2Section3s = document.querySelectorAll('.sub2_sec03 .sub2_section_botArea_cont');
let sub2Sec3Icons = document.querySelectorAll('.sub2_sec03 .sub2_num_icon');
let initial3States = Array.from(sub2Sec3Icons).map(icon => icon.style.backgroundImage);
sub2Section3s.forEach(function (sub2Section, index) {
    sub2Section.addEventListener('click', function () {
        // 모든 요소에서 'on' 클래스 제거
        sub2Section3s.forEach(function (item) {
            item.classList.remove('on');
        });
        // 현재 클릭한 요소에 'on' 클래스 추가
        this.classList.add('on');
        // 현재 클릭한 요소에 따라 배경 이미지 변경
        if (this.classList.contains('on')) {
            // sub2Sec1Icons는 NodeList이므로 forEach를 사용하여 각 요소에 접근
            sub2Sec3Icons.forEach(function (icon, iconIndex) {
                if (iconIndex === index) {
                    // 현재 클릭한 아이콘의 배경 이미지 변경
                    icon.style.backgroundImage = `url('img/sub2_img/icon_${index + 1}_on.png')`;
                    // .sub2_section_cont1_right의 이미지 변경
                    sub2Sec3Right.style.backgroundImage = `url('img/sub2_img/section03_0${index + 1}.png')`;
                } else {
                    // 다른 아이콘들은 초기 상태로 되돌림
                    icon.style.backgroundImage = initialStates[iconIndex];
                }
            });
        }
    });
    // 초기 상태에서 0번 아이콘에 대한 이미지 변경
    if (index === 0) {
        sub2Sec3Icons[0].style.backgroundImage = `url('img/sub2_img/icon_1_on.png')`;
        sub2Sec3Right.style.backgroundImage = `url('img/sub2_img/section03_01.png')`;
        sub2Section3s[0].classList.add('on');
    }
});



/* header 베너 */
$(document).ready(function () {
    var height = $(".notice").height(); //공지사항의 높이값을 구해주고~~
    var num = $(".rolling li").length; // 공지사항의 개수를 알아볼수 있어요! length라는 것으로!
    var max = height * num; //그렇다면 총 높이를 알 수 있겠죠 ?
    var move = 0; //초기값을 설정해줍니다.
    function noticeRolling() {
        move += height; //여기에서 += 이라는 것은 move = move + height 값이라는 뜻을 줄인 거에요.
        $(".rolling").animate({ "top": -move }, 1000, function () { // animate를 통해서 부드럽게 top값을 올려줄거에요.
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