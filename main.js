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

// var work_url = "https://pclin2018.github.io/MyPortfolio/data.json";
var work_url = "data.json";

var vm = new Vue({
  el: "#app",
  data: {
    works: "",
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