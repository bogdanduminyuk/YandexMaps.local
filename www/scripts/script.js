
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            iconLayout: 'default#image',
            iconImageHref: '../logo.png',
            iconImageSize: [30, 42],
            iconImageOffset: [-3, -42]
        });

    myMap.geoObjects.add(myPlacemark);
});