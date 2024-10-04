// Map
export function initMap() {
  ymaps.ready(init);
  function init() {
    // Создание карты.
    var map = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [57.182164, 65.656112],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 16,
    });

    var myPlacemark = new ymaps.Placemark(
      [57.182164, 65.656112],
      {
        balloonContent: `
  			<div class="balloon">
  				<div class="balloon__address">Тюмень, Чаркова 72 — 1.1</div>
  				<div class="balloon__contacts">
  					<a href="tel:+78121234567">+8 (812) 123-45-67</a>
  				</div>
  			</div>
  		`,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "./img/map/location-pin.svg",
        iconImageSize: [40, 40],
        iconImageOffset: [-20, -40],
      }
    );

    map.controls.remove("geolocationControl");
    map.controls.remove("searchControl");
    map.controls.remove("trafficControl");
    map.controls.remove("rulerControl");

    map.geoObjects.add(myPlacemark);
    myPlacemark.balloon.open();
  }
}
