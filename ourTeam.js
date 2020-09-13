var width = $(window).width(); 

if ((width >= 1000)){
    $("#header").css("background","#fff");
    $("#header").css("color","#000");
    $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
    $("#header").css("padding","4vh 4vw");
    $("#navigation a").hover(function(){
        $(this).css("border-bottom","2px solid rgb(4, 220, 100)");
    },function(){
        $(this).css("border-bottom","2px solid transparent");
    });
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  
