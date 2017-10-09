$(function() {
    $.ajax({
        url: 'http://192.168.1.113/wg_tingche/index.php?g=Wap&m=Cart&a=test',
        success: function(data) {
            var jsData = JSON.parse(data);
            console.info(data);
        }
    })
})