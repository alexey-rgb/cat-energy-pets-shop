ymaps.ready(function () {
  var myMap = new ymaps.Map(
      "map",
      {
        center: [59.93642, 30.3211],
        zoom: 100,
      },
      {
        searchControlProvider: "yandex#search",
      }
    ),
    myPlacemark = new ymaps.Placemark(
      [59.93642, 30.3211],
      {
        hintContent: "Собственный значок метки",
        balloonContent: "Это красивая метка",
      },
      {
        iconLayout: "default#image",
        iconImageHref: "img/food-box-tablet@1x.png",
        iconImageSize: [55, 53],
        iconImageOffset: [-7, -22],
      }
    );
  myMap.geoObjects.add(myPlacemark);
});
