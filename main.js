var setArea = $('.scrEvent'),
    showHeight = 300; 

$(window).on('load scroll resize', function(){
  if($(window).scrollTop() > 1){
    $(".fake_nav").css({'opacity':'1'}, 300);
  }else{
    $(".fake_nav").css({'opacity':'0'}, 300);
  }
  
  setArea.each(function(){
    var areaTop = $(this).offset().top;
    if($(window).scrollTop() > (areaTop + showHeight) - $(window).height()){
      $(this).animate({'opacity':'1', 'top':'0px'}, 500);
    }
  });
});

var work = [
  {
    "name": "Landing Page - 浪人音樂",
    "tag": "HTML 網頁設計",
    "image": "works_image/rove_title.jpg",
    "description": "DailyUI 第三天的作品。使用 Bootstrap + skrollr.js 寫成的偽 APP 官網",
    "link": "https://pclin2018.github.io/DailyUI/LandingPage/LandingPage.html",
    "de_image": "works_image/rove_all.jpg"
  },
  {
    "name": "Kaohsiung Trip - 高雄景點查詢",
    "tag": "HTML 網頁設計",
    "image": "works_image/havefun_title.jpg",
    "description": "使用 jQuery Ajax 串接高雄 Open Data，以 Vue 呈現 SPA 網頁，使用 Filter 功能實現多條件篩選",
    "link": "https://pclin2018.github.io/KaohsiungTrip/",
    "de_image": "works_image/havefun_all.jpg"
  },
  {
    "name": "Buy List - 購物清單",
    "tag": "HTML 網頁設計",
    "image": "works_image/buylist.jpg",
    "description": "使用 jQuery Ajax 串接外部資料寫成的購物清單",
    "link": "https://pclin2018.github.io/BuyList/",
    "de_image": "works_image/buylist.jpg"
  },
  {
    "name": "Forest - 對森林的想像",
    "tag": "HTML 網頁設計",
    "image": "works_image/forest_title.jpg",
    "description": "Bootstrap 的練習作品",
    "link": "https://pclin2018.github.io/Forest/",
    "de_image": "works_image/forest_all.jpg"
  },
  {
    "name": "Weather Box - 天氣盒子",
    "tag": "HTML 網頁設計",
    "image": "works_image/wb.jpg",
    "description": "課堂作品，練習 Svg 繪製及 Css 動畫",
    "link": "https://pclin2018.github.io/WeatherBox/",
    "de_image": "works_image/wb.jpg"
  },
  {
    "name": "Credit Card - 信用卡結帳頁面",
    "tag": "HTML 網頁設計",
    "image": "works_image/credit.jpg",
    "description": "DailyUI 第二天的作品。模擬信用卡外型設計出的 Web UI",
    "link": "https://pclin2018.github.io/DailyUI/CreditCard/CreditCard.html",
    "de_image": "works_image/credit.jpg"
  },
  {
    "name": "SignUp - 註冊頁面",
    "tag": "HTML 網頁設計",
    "image": "works_image/signup.jpg",
    "description": "DailyUI 第一天的作品。模擬浪人音樂 App 註冊頁面的 UI",
    "link": "https://pclin2018.github.io/DailyUI/SignUp/SignUp.html",
    "de_image": "works_image/signup.jpg"
  },
  {
    "name": "Calculator - 計算機 UI",
    "tag": "UI 設計",
    "image": "works_image/calculator.jpg",
    "description": "DailyUI 第四天的作品。計算機 UI 設計，加入歷史記錄區塊，方便使用者回顧",
    "link": "works_image/calculator.jpg",
    "de_image": "works_image/calculator.jpg"
  },
  {
    "name": "綠葉純淨山泉水設計",
    "tag": "瓶裝水設計",
    "image": "works_image/water.jpg",
    "description": "輕便、小巧、方便攜帶，專為女性設計的瓶裝水",
    "link": "works_image/water.jpg",
    "de_image": "works_image/water.jpg"
  },
]

var work_url = "https://pclin2018.github.io/MyPortfolio/works.json";

var vm = new Vue({
  el: "#app",
  data: {
    works: work,
    detailmode: false,
    detaildata: {}
  },
  mounted: function(){
    $.get(work_url).then(function(res){
      vm.works = res;
    })
  },
  methods: {
    detail_mode: function(item){
      this.detailmode = true;
      this.detaildata = item;
    },
    close_detail: function(){
      this.detailmode = false;
    }
  }
});