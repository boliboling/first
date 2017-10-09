$(function() {
/*	 $.ajax({
        url: 'http://192.168.1.113/wg_tingche/index.php?g=Wap&m=Cart&a=test',
        success: function(data) {
            var jsData = JSON.parse(data);
            console.info(data);
        }
    })*/
	var one = '';
	for (var i = 0; i < 4; i++) {
		one += ' <li class="entry"><div class="entry-slider"><ul>';
		for (var j = 0; j < 1; j++) {
			one += '<li><a class="fancybox" href="images/soft_700/LK007.jpg" class="preloader"><span class="overlay zoom"></span><img src="images/Home_IMGS/NEW_LKB020DM_1.jpg" alt=""></a></li>'
		}
		one += ' </ul></div><h5 class="entry-title"><a href="v4_Breakout_result.html">Breakout Models</a></h5><div class="entry-content"><p>6 Designs for 2016</p></div> '
			}
	$('#one').html(one);
	console.info(one);
	var two = '';
	for (var i = 0; i < 4; i++) {
		two += '<li class="entry"><div class="entry-image"><a class="fancybox" href="images/soft_700/LK007.jpg" class="preloader"><span class="overlay zoom"></span><img src="images/styles_IMGS_350/LK000.jpg" alt="LePera Lil Nugget Seat"></a></div><h5 class="entry-title"><a href="v4_Style_LilNugget.html">Lil Nugget</a></h5><div class="entry-content"><p>Designed to expose everything on your bike.</p></div></li>'
	}
	$('#two').html(two);
		var three = '';
	for (var i = 0; i < 4; i++) {
		three += ' <li class="entry"><div class="entry-image"><a class="fancybox" href="images/soft_700/LK007.jpg" class="preloader"><span class="overlay zoom"></span><img src="images/Home_IMGS/CUSTOM_Biker_Gel.jpg" alt=""></a></div><h5 class="entry-title"><a href="v4_BikerGel.html">Biker Gel</a></h5><div class="entry-content"><p>Great for long rides!</p></div></li>'
			}
	$('#three').html(three);
	var four = '';
	for (var i = 0; i < 4; i++) {
		four += ' <li class="entry"><div class="entry-image"><a class="fancybox" href="images/soft_700/LK007.jpg" class="preloader"><span class="overlay zoom"></span><img src="images/Home_IMGS/CUSTOM_Biker_Gel.jpg" alt=""></a></div><h5 class="entry-title"><a href="v4_BikerGel.html">Biker Gel</a></h5><div class="entry-content"><p>Great for long rides!</p></div></li>'
			}
	$('#four').html(three);
})