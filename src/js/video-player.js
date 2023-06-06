// Інінціалізація програвача
const player = new Plyr("#features-player");




const posters = [
  { src: "../img/how_it’s_made/cover-mobile@1x.jpg", mediaQuery: "(max-width: 374px)", retinaSrc: "../img/how_it’s_made/cover-mobile@2x.jpg" }, // маленький размер вьюпорта
  { src: "../img/how_it’s_made/cover-tablet@1x.jpg", mediaQuery: "(min-width: 375px) and (max-width: 767px)", retinaSrc: "../img/how_it’s_made/cover-tablet@2x.jpg" }, // средний размер вьюпорта
  { src: "../img/how_it’s_made/cover@1x.jpg", mediaQuery: "(min-width: 768px)", retinaSrc: "../img/how_it’s_made/cover@2x.jpg" }, // большой размер вьюпорта
];

// Функция для изменения постера в зависимости от размера вьюпорта
function changePoster() {
  const currentPoster = player.poster;

  // Проверяем каждый постер и устанавливаем нужный постер
  for (const poster of posters) {
    if (window.matchMedia(poster.mediaQuery).matches) {
      const src = window.devicePixelRatio > 1 ? poster.retinaSrc : poster.src; // Проверяем, поддерживает ли устройство Retina, и выбираем соответствующую версию изображения
      if (currentPoster !== src) {
        player.poster = src;
      }
      break;
    }
  }
}

// Вызываем функцию после загрузки страницы и при изменении размера вьюпорта
window.addEventListener("DOMContentLoaded", changePoster);
window.addEventListener("resize", changePoster);


