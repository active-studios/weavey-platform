setTimeout(() => {
  const $modal = document.querySelectorAll("#modal");
  $modal.addClass("active");

  console.log("preloading images...");
  setTimeout(() => {
    window.location.href = window.location.href + "?foo";
    console.log("window.location.href", window.location.href);
  }, 1000);
}, 1000);

setTimeout(() => {
  const $modal = document.querySelectorAll("#modal");
  $modal.removeClass("active");
}, 100);
