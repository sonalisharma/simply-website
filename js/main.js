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

        var url = window.location;
        // Will only work if string in href matches with location
        $('ul.nav a[href="'+ url +'"]').parent().addClass('active');

        // Will also work for relative and absolute hrefs
        $('ul.nav a').filter(function() {
            return this.href == url;
        }).parent().addClass('active');

        $('navbar-header a[href="'+ url +'"]').parent().addClass('active');


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
    jQuery('#addAudio').on('click', function (e) {
        console.log("Reached add");
        e.preventDefault();
        var num = parseInt(jQuery("#num_cart").text());
        console.log(jQuery("#num_cart").html(num+1));

        //jQuery( "tab-pane" ).toggle();
        //$(this).tab('show');
    });

    jQuery('#addText').on('click', function (e) {
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
     	var html = 'Hi '+ jQuery("#greetingText").val()+'<p>This is for you, I hope you will find it useful!!';
     	html = html + jQuery("#messageText").val();
     	html = html + '<p>Love,</p>' + jQuery("#senderName").val();

		jQuery("#modalPreview .modal-body").html("");

		html = html + '<p>Click on the link below to view the tutorial:<p> <a href="https://www.youtube.com/watch?v=FLhOceZ5CRE">https://www.youtube.com/watch?v=FLhOceZ5CRE</a></p>'
		jQuery("#modalPreview .modal-body").append(html);

     });

     jQuery("#searchSignInform").submit(function(event)
     {
     	console.log("search sign in");
     	jQuery("#successMsg").show();
     	window.location.href='send.html';
     	event.preventDefault();
     });


     jQuery("#indexRegister").click(function(event)
     {
        console.log("search sign in");
        jQuery("#successMsg").hide();
        window.location.href='search1.html';
        event.preventDefault();
        

     });

	jQuery("#indexSignIn").click(function(event)
     {
     	console.log("search sign in");
     	window.location.href='search1.html';
     	event.preventDefault();
     });




});