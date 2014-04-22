<script>
function display(id){
	document.getElementById(id).style.display = "block";
};

</script>

<div class="select_filter">
	<h3> <span class="label label-primary">Tutorial Results</span></h3>
	<div class="select_tutorial">
	    <label style="margin-right:10px;"><input type="checkbox" name="option[]" value="1" /><a href=""> The best skype tutorial out there</a></label><input type="button" style="float:right" value="+" id="btn_1" onclick="display('lesson_1')"></input><br>
	    <label><input type="checkbox" name="option[]" value="2" /><a href=""> Google video chat 101</label><input type="button" style="float:right" value="+"id="btn_2" onclick="display('lesson_2')"></input><br>
	    <label><input type="checkbox" name="option[]" value="3" /><a href=""> Google video connecting with a group</a></label><input type="button"  style="float:right" value="+" id="btn_3" onclick="display('lesson_3')"></input><br>
	    <label><input type="checkbox" name="option[]" value="4" /><a href=""> Skype instructions</label></a><input type="button"  style="float:right" value="+" id="btn_4" onclick="display('lesson_4')"></input><br>
	    <label><input type="checkbox" name="option[]" value="4" /><a href=""> Facetime in no time</label></a><<input type="button"  style="float:right" value="+" id="btn_5" onclick="display('lesson_5')"></input><br>
	</div>
</div>









<div class="select_filter">	
<h3> <span class="label label-primary">Device Type</span></h3>
	<div class="select_device_type">
	    <label><input type="checkbox" name="option[]" value="1" />  Apple Ipad</label><br>
	    <label><input type="checkbox" name="option[]" value="2" />  Microsoft Surface</label><br>
	    <label><input type="checkbox" name="option[]" value="3" />  Amazon Kindle</label><br>
	    <label><input type="checkbox" name="option[]" value="4" />  Google Nexus 7</label><br>
	</div>

	
<h3> <span class="label label-primary">Application</span></h3>
	<div class="select_application">
	    <label><input type="checkbox" name="option[]" value="1" />  Skype</label><br>
	    <label><input type="checkbox" name="option[]" value="2" />  Facetime</label><br>
	    <label><input type="checkbox" name="option[]" value="3" />  Google Chat</label><br>
	</div>

	<h3> <span class="label label-primary">Format</span></h3>
	<div class="select_tut_format">
	    <label><input type="checkbox" name="option[]" value="1" />  Video</label><br>
	    <label><input type="checkbox" name="option[]" value="2" />  Text</label><br>
	</div>
</div>

<div class="recipient_details">
<label>Recipient's Full Name  <input type="text" style="float:right" placeholder="Recipient's name" value="" /></label><br>
<label>Recipient's Email  <input type="text" style="float:right"  placeholder="Recipient's Email" value="" /></label><br>
<label>Name your lesson plan <input type="text" style="float:right"  placeholder="lesson plan name" value="" /></label><br><br>

<label><input type="checkbox" name="option[]" value="1" />  Send a copy to yourself</label><br>
</div>


	<h3> <span class="label label-primary">Your Lesson Plan</span></h3>
	<div class="lesson_plan">
	    <label id="1" style="display:block"> The best skype tutorial out there</a></label><br>
	    <label id="2" style="display:none"> Google video chat 101</label><br>
	    <label id="3" style="display:none"> Google video connecting with a group</a></label><br>
	    <label id="4" style="display:block"> Skype instructions</label></a><br>
	    <label id="5" style="display:none"> Facetime in no time</label></a><br>
	</div>

	
<script>
function display(id){
	document.getElementById(id).style.display = "block";
};

</script>

<div class="select_filter">
	<h3> <span class="label label-primary">Tutorial Results</span></h3>
	<div class="select_tutorial">
	    <label style="margin-right:10px;"><a href=""> The best skype tutorial out there</a></label><input type="button" style="float:right" value="-" id="btn_1" onclick="display('lesson_1')"></input><br>
	    <label><a href=""> Skype instructions</label></a><input type="button" style="float:right"  value="-" id="btn_4" onclick="display('lesson_4')"></input><br>
	</div>
</div>



	<h3> <span class="label label-primary">Your Lesson Plan</span></h3>
	<div class="preview_email">
	    <p>Preview of email</p>
	</div>