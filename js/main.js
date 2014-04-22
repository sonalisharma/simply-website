jQuery(document).ready(function(){


console.log("Ready");

    jQuery('.nav li a').on('click', function (e) {
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


});