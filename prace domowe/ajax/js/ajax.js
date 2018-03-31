$(function () {
    $('#przycisk').click(function () {
        div = document.createElement('div');
        $(div).attr('id', 'dane-programisty');
        $('#przycisk').after(div);
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
            $('#dane-programisty').html(
                '<br> Imię: ' + data.imie +
                '<br> Nazwisko: ' + data.nazwisko +
                '<br> Zawód: ' + data.zawod +
                '<br> Miejsce pracy: ' + data.firma);

        });
    });
});
