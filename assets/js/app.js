$(document).ready(function() {
    document.getElementById('navBarMenu').innerHTML = loadPage('nav.html');

    function loadPage(href) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", href, false);
        xmlhttp.send();
        return xmlhttp.responseText;
    }

    document.getElementById('socialDiv').innerHTML = loadPage('social.html');

    $('.text').on('click', function() {
        $('.menu-item').toggleClass('left');
    });

    $('#closeProject').on('click', function() {
        $('#viewProject').slideUp("slow");
    });

    $('.projects-ul .btn').on('click', function() {
        var src = $(this).attr('data-src');
        var val = $(this).text();

        $('#viewProject').slideDown("slow");

        $('#viewProject iframe').attr('src', src);
        $('#viewProject a').attr('href', src);
        $('#viewProject a').text( src);

        $('#viewProject iframe').removeClass('desktop mobile');

        if (val == "Desktop") {
            $('#viewProject iframe').addClass('desktop');
        } else if (val == "Mobile") {
            $('#viewProject iframe').addClass('mobile');
        }
    });

    $('.prev-project').on('click', function() {
        $(this).closest('li').hide();
        if ($(this).closest('li').index() != 0) {
            $(this).closest('li').last().show();
        } else {
            $(this).closest('li').prev().show();

        }
    });
    $('.next-project').on('click', function() {
        $(this).closest('li').hide();
        if ($(this).closest('li').index() == 4) {
            $('.pro-des>ul').first().show();
        } else {
            $(this).closest('li').next().show();

        }
    });
});
