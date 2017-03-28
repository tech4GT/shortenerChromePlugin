$(function () {
    document.getElementById('open').style.cursor = "pointer";

    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
        var url = tabs[0].url;
        console.log(url);

        $.post("https://cb.lk/api/v1/shorten", {
            url: url,
            code: "",
            secret: ""

        }, function (data) {
            console.log(data);

            $('#box').html("https://cb.lk/" + data.shortcode);
        });


    });

    $('#open').click(function () {
        var temp = $('<input>');
        temp.val($('#box').text());
        console.log(temp.val());
        $('body').append(temp);
        temp.select();
        console.log(document.execCommand('copy'));
        temp.remove();
        $('#box').html("The Link has been copied to clipboard");
    });


});

