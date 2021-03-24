<script>
$(function(){
    $('.mydropdownjQuery').hover(function() {
        $(this).addClass('open');
    },
    function() {
        $(this).removeClass('open');
    });
});
</script>
<div class="dropdown mydropdownjQuery">
	<a href="#" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">Dropdown Menu <span class="caret"></span></a> 
    <ul class="dropdown-menu">
    	<li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Gallery</a></li>
    </ul>
</div>