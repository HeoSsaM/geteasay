/* 모바일 */
// mgnb
$(document).ready(function() {
    //모바일 버튼을 클릭 하면
    $('.mobile_gnb > img').on('click', function() {
        $('.mGnb').slideToggle()
    })
})
//mtnb
$(document).ready(function() {
    //모바일 버튼을 클릭 하면
    $('.mobile_tnb > img').on('click', function() {
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
/* main slide */

let main_swiper = new Swiper(".main_swiper", {
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
    autoplay: {
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
    },
    slidesPerGroup: 1, // 한 번에 이동할 슬라이드의 수를 설정
});

/* brand slide */ 

let brand_swiper = new Swiper('.brand_swiper_inner', {
    slidesPerView: 5, //동시에 표시할 슬라이드 수
    spaceBetween: 10, //슬라이드 간 간격
    loop: true, //루프기능
    pagination: { //페이지 표시를 구현하기위한 설정
        el: ".swiper-pagination", //페이지 표시를 나타낼 HTML 요소의 클래스 지정
        clickable: true, //페이지 표시를 클릭하여 해당 슬라이드로 이동가능여부
    },
    slidesPerGroup: 1,
    centeredSlides: true, // 중앙 정렬 활성화
    autoplay: {
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
    },
    breakpoints: {
        399: {
            slidesPerView: 1.3 // 400px 이하에서는 슬라이드 한 개만 표시
        },
        1100: {
            slidesPerView: 5 // 400px 초과일 때 슬라이드 3 개 표시
        }
    }
});


document.querySelector(".category_swiper_inner").style.display = "block";
let boxbSwiper = new Swiper(".category_swiper_inner", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    loopedSlides: 3,
    slidesPerGroup: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, // 3 seconds
        disableOnInteraction: false,
    },
    breakpoints: {
        399: {
            slidesPerView: 1 // 400px 이하에서는 슬라이드 한 개만 표시
        },
        1920: {
            slidesPerView: 3 // 400px 초과일 때 슬라이드 3 개 표시
        }
    }
    
});

document.addEventListener("DOMContentLoaded", function () {
    // small_box의 자식 요소들을 가져옵니다.
    let smallBoxChildren = document.querySelector('.small_box').children;

    // 각 카테고리에 클릭 이벤트 리스너를 추가합니다.
    for (let i = 0; i < smallBoxChildren.length; i++) {
        smallBoxChildren[i].addEventListener("click", function () {
            // 모든 category_swiper와 small_box 자식에서 "on" 클래스를 제거합니다.
            removeOnClassFromAll();

            // 해당하는 category_swiper를 가져와 "on" 클래스를 추가합니다.
            let categorySwiper = document.querySelector('.category_swiper' + this.className.slice(-2));
            if (categorySwiper) {
                categorySwiper.classList.add('on');
            }

            // 클릭된 카테고리에 "on" 클래스를 추가합니다.
            this.classList.add('on');
        });
    }
    function removeOnClassFromAll() {
        // 모든 category_swiper와 small_box 자식에서 "on" 클래스를 제거합니다.
        let allElements = document.querySelectorAll('.category_swiper, .small_box > div');
        allElements.forEach(function (element) {
            element.classList.remove('on');
        });
    }
    // 추가: on 클래스가 추가된 후에 실행될 초기화 로직
    function initializeAfterOnClassAdded(element) {
        // 여기에 초기화 로직을 추가하세요.
        // 예를 들어, Swiper 초기화 또는 다른 작업을 수행할 수 있습니다.
    }
});
// CSS 미디어 쿼리를 사용하여 maxwidth가 400px일 때 Swiper의 width 값을 400px로 조정
let mediaQuery = window.matchMedia("(max-width: 400px)");
if (mediaQuery.matches) {
    document.querySelector('.category_swiper_area').style.width = "400px";
}


document.addEventListener("DOMContentLoaded", function () {
    // 타임 세일 종료 날짜와 시간 (YYYY, MM, DD, HH, MM, SS)
    const saleEndDate = new Date(2024, 1, 31, 23, 59, 59);

    function updateCountdown() {
        const now = new Date();

        
        const totalMillisecondsInADay = 24 * 60 * 60 * 1000;
        const timeLeft = saleEndDate - now;
        const remainingTimeInADay = timeLeft % totalMillisecondsInADay;
        const elapsedMilliseconds = totalMillisecondsInADay - remainingTimeInADay;

        const remainingMilliseconds = timeLeft % totalMillisecondsInADay;

        const remainingPercentage = (remainingMilliseconds / totalMillisecondsInADay) * 100;

     
        const actualWidth = Math.min(100, Math.max(0, remainingPercentage));
        const widthPercentage = 100 - actualWidth;
        
        // #line의 width를 조절합니다.
        const line = document.getElementById("line");
        line.style.width = widthPercentage + "%";









        
        // 시간, 분, 초를 계산합니다.
        const hoursLeft = Math.floor(remainingTimeInADay / (1000 * 60 * 60));
        const minutesLeft = Math.floor((remainingTimeInADay % (1000 * 60 * 60)) / (1000 * 60));
        const secondsLeft = Math.floor((remainingTimeInADay % (1000 * 60)) / 1000);

        // 결과를 출력합니다.
        //console.log("현재 시간:", now);
        //console.log("세일 종료일:", saleEndDate);
        //console.log("남은 시간:", hoursLeft, "시간", minutesLeft, "분", secondsLeft, "초");

   




        
        if (timeLeft > 0) {
            const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            document.getElementById("countdown").innerHTML = `<span class= "timetext">남은시간</span> <span>${hours}: ${minutes}: ${seconds}</span>`;

        } else {
            document.getElementById("countdown").innerHTML = "타임 세일 종료!";
        }
    }

    // 초기 업데이트
    updateCountdown();

    // 1초마다 업데이트
    setInterval(updateCountdown, 1000);
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