/*$(function() {
  $.ajax({
    url: 'http://192.168.1.113/wg_tingche/index.php?g=Wap&m=Cart&a=test',
    success: function(data) {
      var jsData = JSON.parse(data);
      console.info(data);
    }
  })
})*/
$(function() {
    var gallery='';
    for (var i = 0; i < 4; i++) {
    	gallery +='<li data-id="id-'+i+'" class="entry one-half"><div class="entry-image"><a href="2016_Cat/LePera_2016_Catalog_Web_Master.pdf"><img src="2016_Cat/LePera_2016_Catalog_WEB_Master.jpg" alt="LePera Master Catalog"/></a></div><h4 class="entry-title"><a href="2016_Cat/LePera_2016_Catalog_Web_Master.pdf" target="_blank">Master Catalog</a></h4></li>'
    	    }
    $('#gallery').html(gallery);
     
})