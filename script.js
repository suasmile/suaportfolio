//alert("hello")
$("document").ready(function(){

  $( "#textline1" ).hide()
  $( "#textline2" ).hide()
  $( "#h1" ).hide()
  $( ".Intro" ).hide()

  if ($(window).width() > 768) {

    // write you css here for screen size is more then 768

    var cursor = $('.cursor');

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });
  
    $(window)
    .mousedown(function() {
        cursor.css({
            transform: "scale(.1)"
        });
    })
    .mouseup(function() {
        cursor.css({
            transform: "scale(.5)"
        });
    });

    $(window)
    .mouseleave(function() {
      cursor.css({
        opacity: "0"
      });
    })
    .mouseenter(function() {
      cursor.css({
        opacity: "1"
      });
    });

    $(".Line")
        .mouseenter(function() {
            cursor.css({transform: "scale(5)"});
        })
        .mouseleave(function() {
            cursor.css({transform: "scale(1)"});
        });
      
    $(".Line2")
        .mouseenter(function() {
            cursor.css("background-color","purple");
            cursor.css({transform: "scale(3)"});
        })
        .mouseleave(function() {
          cursor.css("background-color","white");
          cursor.css({transform: "scale(1)"});
    });  

    $(".Line3")
        .mouseenter(function() {
            cursor.css("background-color","purple");
            cursor.css({transform: "scale(3)"});
        })
        .mouseleave(function() {
          cursor.css("background-color","white");
          cursor.css({transform: "scale(1)"});
     });  
    

    $(window)
    .mousedown(function() {
        cursor.css({transform: "scale(3)"});
        cursor.css( "background-color", "yellow",);
    })
    .mouseup(function() {
        cursor.css({transform: "scale(1)"});
        cursor.css("background-color","white");
    });


  //hover function
  var modwidth = $( window ).width();

  $(".Item").hover(function(){
    $("#clickline").animate(
     {width: modwidth - 900},
     {duration: 800},
     {easing: "ease"}
    )
  })

  //counter= 0 
    //If

  //counter= counter +1 

  //animation of line on click

  $(".Item").click(function(){

    $("#clickline").animate(
      {width: modwidth - 800}
      )

    $("#clickline").animate(
      {deg: -130.44},
      {duration: 1000,  
        step: function(now){
          $(this).css({transform: 'rotate(' + now + 'deg)'})},
      },
      {easing: "easein"},
    )

    $( "#textline1" ).show()
    $( "#h1" ).hide()
    $( ".Intro" ).hide()
    $( "#textline2" ).show()

    $( "#clickline" ).delay(800).hide(400, "easeOutBounce")

 })

  $( ".Line2" ).hover(function() {
    $( "#clickline" ).hide(400, "easeOutBounce")
  });

  $( ".Line2" ).click(function() {
    window.location.href = "https://suasmile.cargo.site/";    
    });

  $( ".Line3" ).click(function() {
    window.location.href = "https://suasmile.cargo.site/";    
  });

  $( "#landing1" ).click(function() {
    window.location.href = "https://suasmile.cargo.site/";    
  });

  $( "#landing2" ).click(function() {
    window.location.href = "https://suasmile.cargo.site/";    
  });


   }else{
   
   // write you css here for screen size is less then 768
   var cursor = $('.cursor');

   $(window).mousemove(function(e) {
       cursor.css({
           top: e.clientY - cursor.height() / 2,
           left: e.clientX - cursor.width() / 2
       });
   });
 
   $(window)
   .mousedown(function() {
       cursor.css({
           transform: "scale(.1)"
       });
   })
   .mouseup(function() {
       cursor.css({
           transform: "scale(.5)"
       });
   });

   $(window)
   .mouseleave(function() {
     cursor.css({
       opacity: "0"
     });
   })
   .mouseenter(function() {
     cursor.css({
       opacity: "1"
     });
   });

   $(".Line")
       .mouseenter(function() {
           cursor.css({transform: "scale(9)"});
       })
       .mouseleave(function() {
           cursor.css({transform: "scale(5)"});
       });
     
   $(".Line2")
       .mouseenter(function() {
           cursor.css("background-color","purple");
           cursor.css({transform: "scale(7)"});
       })
       .mouseleave(function() {
         cursor.css("background-color","white");
         cursor.css({transform: "scale(5)"});
   });  

   $(".Line3")
       .mouseenter(function() {
           cursor.css("background-color","purple");
           cursor.css({transform: "scale(7)"});
       })
       .mouseleave(function() {
         cursor.css("background-color","white");
         cursor.css({transform: "scale(5)"});
    });  
   
   $(".Intro")
       .mouseenter(function() {
         cursor.css( "background-color", "purple",);
         cursor.css({transform: "scale(9)"});
        // cursor.css({filter: "blur"});
       })
       .mouseleave(function() {
         cursor.css("background-color","white");
         cursor.css({transform: "scale(5)"});
        // cursor.css({filter: "blur(0)"});
   });  

   $(window)
   .mousedown(function() {
       cursor.css({transform: "scale(3)"});
       cursor.css( "background-color", "yellow",);
   })
   .mouseup(function() {
       cursor.css({transform: "scale(5)"});
       cursor.css("background-color","white");
   });

 //hover function
 $(".Item").hover(function(){
   $("#clickline").animate(
    {width: 500},
    {duration: 800},
    {easing: "ease"}
   )
 })

 $(".Item").click(function(){

  $("#clickline").animate(
    {width: 600}
    )

  $("#clickline").animate(
    {deg: -130.44},
    {duration: 800,  
      step: function(now){
        $(this).css({transform: 'rotate(' + now + 'deg)'})},
    },
    {easing: "easein"},
  )

    $( "#clickline" ).delay(800).hide(400, "easeOutBounce")

    $("#textline1").delay(2800).show(400,"easeOutBounce")

  // if ($("#clickline").is(':hidden')){
    //  $("#textline1").show(1000);
   // } else{
     // $("#textline1").hidden();
   // }

   $( ".Line2" ).click(function() {
      window.location.href = "https://suasmile.cargo.site/";    
  });
  
 })

}

});


