import LazyLoad from "vanilla-lazyload";

if ("loading" in HTMLImageElement.prototype) {
  const images = document.querySelectorAll("img.lazyload");
  images.forEach((img) => {
    img.src = img.dataset.src;
  });
} else {
  // Работает с объектами с класом ._lazy
  const lazyMedia = new LazyLoad({
    elements_selector: "[data-src],[data-srcset]",
    class_loaded: "_lazy-loaded",
    use_native: true,
  });

  // Обновить модуль
  lazyMedia.update();
}
