let $sidebar = document.querySelectorAll(".masonry-gallery-sidebar");
let $lightdark = document.querySelectorAll(".light-dark-switch");

const r = document.querySelector(":root");
const rs = window.getComputedStyle(r);
setTimeout(() => {
  let defaultMode = rs.getPropertyValue("--mode-default") || "light";
  if (window.mode) {
    console.log("[lightdarkmode] window.mode", window.mode);
    defaultMode = window.mode.default;
  }
  console.log("[lightdarkmode] defaultMode", defaultMode);

  const $body = document.querySelectorAll("body")[0];
  const $lightdark = document.querySelectorAll(".light-dark-switch")[0];
  const $dark = rs.getPropertyValue("--color-dark");
  const $light = rs.getPropertyValue("--color-light");

  const $defaultbackground = rs.getPropertyValue("--color-background-default");
  if ($defaultbackground) {
    r.style.setProperty("--color-background", $defaultbackground);
    const $defaultforeground = rs.getPropertyValue(
      "--color-foreground-default",
    );
    if ($defaultforeground) {
      r.style.setProperty("--color-foreground", $defaultforeground);
    }
  } else if (defaultMode === "dark") {
    r.style.setProperty("--color-background", $dark);
    r.style.setProperty("--color-foreground", $light);
  } else {
    r.style.setProperty("--color-background", $light);
    r.style.setProperty("--color-foreground", $dark);
  }
  if (defaultMode == "dark") {
    $body.classList.add("dark");
  } else {
    $body.classList.add("light");
  }
  if ($lightdark) {
    console.log(
      "[lightdarkmode] bar",
      $body,
      $lightdark,
      "defaultMode",
      defaultMode,
    );
    $lightdark.addEventListener("click", function () {
      triggerClick();
    });
  }
}, 1);

const triggerClick = () => {
  const $body = document.querySelectorAll("body")[0];
  const $lightdark = document.querySelectorAll(".light-dark-switch")[0];
  let defaultMode = rs.getPropertyValue("--mode-default") || "light";
  if (window.mode) {
    console.log("[lightdarkmode] window.mode", window.mode);
    defaultMode = window.mode.default;
  }
  console.log("[lightdarkmode] defaultMode", defaultMode);
  const $dark = rs.getPropertyValue("--color-dark");
  const $light = rs.getPropertyValue("--color-light");

  if ($lightdark) {
    if ($lightdark.classList.contains("mode-dark")) {
      $lightdark.classList.remove("mode-dark");
      $lightdark.classList.add("mode-light");
      $body.classList.remove("dark");
      $body.classList.add("light");
      r.style.setProperty("--color-background", $light);
      r.style.setProperty("--color-foreground", $dark);
    } else {
      $lightdark.classList.remove("mode-light");
      $lightdark.classList.add("mode-dark");
      $body.classList.add("dark");
      $body.classList.remove("light");
      r.style.setProperty("--color-background", $dark);
      r.style.setProperty("--color-foreground", $light);
    }
    console.log("[lightdarkmode] r", r, $body, $lightdark);
  } else {
    console.log("[lightdarkmode] No theme switch wrapper found", $lightdark);
  }
};

window.addEventListener("keypress", (event) => {
  if (event.key === "`" || event.key === "~") {
    triggerClick();
  }
});
