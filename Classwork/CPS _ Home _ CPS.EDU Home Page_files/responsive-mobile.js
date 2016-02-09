/***********************************************
* responive.js
* cps.edu
***********************************************/

  $( window ).load(function() {

  // google search focus for search featurette on main page at page load
  // $('input#gsc-i-id3').focus();



//   //check if in edit mode
//   var InEditMode =(document.getElementById('siteactiontd') == null) ? false : true;
//   if(InEditMode){
//     $( "#page-container" ).css('padding-top', '120px !important');
//     $( "#page-container" ).attr('style', 'padding-top:70px !important; background-color:#F9FAFC !important;');
//   }else{
//   alert('design mode');
//   }
//   alert("loaded");
 
  });//end window load



  $( document ).ready(function() {
 
   // google search focus in main menu dropdown 
  $('#googlesearch-collapse-wrapper').on('shown.bs.collapse', function () {
    $('input#gsc-i-id2').focus();
  })
  
  // google search focus in xs menu dropdown
  $('#collapsible-nav').on('shown.bs.collapse', function () {
    $('input#gsc-i-id1').focus();
  })


  // ie7 alert div close function
  $("#btnIE7alertclose").click(function(){
    $("#ie7alertdiv").hide();
  });
  
  

   
   /* Scroll to top functionality */
    var link = $('#to-top');
    $(window).scroll(function() {
        // If the user scrolled a bit (150 pixels) show the link
        if ($(this).scrollTop() > 150) {
            link.fadeIn(400);
        } else {
            link.fadeOut(400);
        }
    });

    // On click get to top
    link.click(function() {
        $('html, body').animate({scrollTop: 0}, 400);
        return false;
    });
   
    
   //LoadCurrentYearinCopyRight()
    var d = new Date();
    var currentYear = document.getElementById("currentYear");
    currentYear.innerHTML = d.getFullYear();


    

  }); //end document ready