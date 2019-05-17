
//  // Look for .hamburger
//  var hamburger = document.querySelector(".hamburger");
//  // On click
//  hamburger.addEventListener("click", function() {
//    // Toggle class "is-active"
//    hamburger.classList.toggle("is-active");
//    // Do something else, like open/close menu
//  });
  
  
  $(document).ready(function(){
      //animate menu button
      $('.hamburger').click(function(){
          $(this).toggleClass('is-active');
      });
      
      
      
      //Header animation

    function animateHeader() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('header-active  py-lg-2').removeClass(' py-lg-3');
        } else {
            $('header').removeClass('header-active  py-lg-2').addClass(' py-lg-3');
        }
    }
  
  
  //animation 
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
                
            }
        });
    }

    animateHeader();
    animation();

    $(window).scroll(function () {
        animateHeader();
        animation();
    });
    
    
    
    
    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });
      
      
      
          //form validation
    
    
    $(function () {
        $(".subscribe-form").validate({
            highlight: function (element) {
                $(element).closest('form').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('form').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {
                
                email:{
                    required:true,
                    email:true
                }


            },
            messages: {
                
                email:{
                    required: 'The *Email field is required',
                    email:'Please enter a valid Email address!'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('form').find('.error-msg'));
            }

        });
    });
            
  
  $(function () {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {
                
                name:{
                    required:true
                },
                
                email:{
                    required:true,
                    email:true
                }, 
                message:{
                    required:true
                },
                phone:{
                    required:true,
                    digits:true,
                    minlength:9
                }


            },
            messages: {
                name:{
                    required:'The *Name field is required'
                },
                
                email:{
                    required: 'The *Email field is required',
                    email:'Please enter a valid Email address!'
                },
                message:{
                    required:'The *Message field is required'
                },
                phone:{
                    required:'The *phone field is required',
                    digits:'Please enter digits only',
                    minlength:'Phone can not be less than 9 characters'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });
      
      
  });