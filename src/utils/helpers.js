import { createEffect } from "solid-js";

export const stringContains = (string, wordArray) => {
  for (let word of wordArray) {
    if (string.includes(word)) {
      return true;
    }
  }
  return false;
};

export const aos = (el, value) => {
  createEffect(() => {
    let { name, duration, offset, once } = value();
    let pos = el.getBoundingClientRect().top + offset;

    addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight > pos &&
        !el.classList.contains(name)
      ) {
        el.classList.add(name);
        if (once) {
          el.style.animationFillMode = "forwards";
        }
        console.log(window.scrollY + window.innerHeight + " " + pos);
      }
    });
  });
};
