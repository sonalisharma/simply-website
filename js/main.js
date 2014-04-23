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
        console.log(jQuery("#num_cart").text());

        //jQuery( "tab-pane" ).toggle();
        //$(this).tab('show');
    });


});