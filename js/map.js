let newRegion = [];
ymaps.ready(function () {
  //  Создаем карту:
  var map,
    regionName =
      'городской округ Тамбов, Тамбовская область, Центральный федеральный округ, Россия',
    center = [41.46, 52.73],
    zoom = 10;

  map = new ymaps.Map('map', {
    center: center,
    zoom: zoom,
    controls: [],
  });
  //   Запрашиваем через геокодер район (через OSM)
  var url = 'http://nominatim.openstreetmap.org/search';
  $.getJSON(url, { q: regionName, format: 'json', polygon_geojson: 1 }).then(
    function (data) {
      $.each(data, function (ix, place) {
        // Заполяем массив координатами
        place.geojson.coordinates.forEach((element) => {
          newRegion = [...newRegion, ...element];
        });
        // Создаем полигон и добавляем в яндекс карту
        var myPolygon = new ymaps.Polygon(
          newRegion,
          {},
          {
            // Цвет заливки.
            fillColor: 'rgba(255, 0, 0, 0.05)',
            // Ширина обводки.
            strokeWidth: 1,
            // Цвет обводки.
            strokeColor: 'rgba(255, 0, 0, 0.5)',
          },
        );
        map.geoObjects.add(myPolygon);
      });
    },
    function (err) {
      console.log(err);
    },
  );
  // Создаем балун на карте
  let myPlacemark = new ymaps.Placemark([41.46, 52.63]);
  map.geoObjects.add(myPlacemark);
});
