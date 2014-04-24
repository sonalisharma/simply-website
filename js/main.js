jQuery(document).ready(function(){


console.log("Ready");

	/*jQuery('.navbar-nav li a').on("click", function(e) {
		  var obj = jQuery(this);
		  console.log("Click on nav");
		  if (!obj.hasClass('active')) {
		    obj.addClass('active');
		  }
		  e.preventDefault();
	});
*/	
jQuery(".all_tutorials").show();


    jQuery('.nav-pills li a').on('click', function (e) {
    	console.log("Reached click");
        e.preventDefault();
        console.log(jQuery(this).attr("href"));
        jQuery( "tab-pane" ).hide();
        var id = jQuery(this).attr("href");
        jQuery(".tab-pane").hide();

        jQuery(id).show();
        //jQuery( "tab-pane" ).toggle();
        //$(this).tab('show');
    });

    jQuery('#addVideo').on('click', function (e) {
    	console.log("Reached add");
        e.preventDefault();
        var num = parseInt(jQuery("#num_cart").text());
        console.log(jQuery("#num_cart").html(num+1));

        //jQuery( "tab-pane" ).toggle();
        //$(this).tab('show');
    });


     jQuery('#send_preview').on('click', function (e) {
    	console.log("Reached add");
        e.preventDefault();
        console.log(jQuery("#preview .modal-body").text());
        window.location.href='user.html';
        //jQuery( "tab-pane" ).toggle();
        //$(this).tab('show');
    });

     jQuery('#preview').on("click",function(e) {
     	console.log(jQuery("#greetingText").val());
     	var html = 'Hi '+ jQuery("#greetingText").val()+'<p>Hope you will find this helpful and I also want to say that,';
     	html = html + jQuery("#messageText").val();
     	html = html + '<p>Love,</p>' + jQuery("#senderName").val();
     	$('input:checkbox[name=chkGreeting]').each(function() 
		{    
		    if(jQuery(this).is(':checked'))
		    console.log(html);

		});

		jQuery("#modalPreview .modal-body").html("");
		html = html + '<img src="img/send_preview.png" style="zoom:0.75"/>'
		jQuery("#modalPreview .modal-body").append(html);

     });

     jQuery("#searchSignInform").submit(function(event)
     {
     	console.log("search sign in");
     	jQuery("#successMsg").show();
     	window.location.href='send.html';
     	event.preventDefault();
     });

     jQuery("#indexSignInform").submit(function(event)
     {
     	console.log("search sign in");
     	jQuery("#successMsg").hide();
     	window.location.href='user.html';
     	event.preventDefault();
     	

     });


	jQuery("#indexSignIn").submit(function(event)
     {
     	console.log("search sign in");
     	window.location.href='send.html';
     	event.preventDefault();
     });


});