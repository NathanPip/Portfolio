import { onMount } from "solid-js";

export const stringContains = (string: string, wordArray: Array<string>) => {
  const newString = string.toUpperCase();
  for (let word of wordArray) {
    word = word.toUpperCase();
    if (newString.includes(word)) {
      return true;
    }
  }
  return false;
};

export const aos = (el: HTMLElement, value: any) => {
  onMount(() => {
    const { name, duration, offset, once } = value();
    const pos = el.getBoundingClientRect().top + offset;
    const scrollHandler = () => {
      if (
        window.scrollY + window.innerHeight > pos &&
        !el.classList.contains(name)
      ) {
        console.log("play");
        if (once) {
          el.style.animationFillMode = "forwards";
        }
        if(duration) {
          el.style.animationDuration = duration;
        }
        el.classList.add(name);
      }
    }

    scrollHandler();

    addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight > pos &&
        !el.classList.contains(name)
      ) {
        console.log("play");
        if (once) {
          el.style.animationFillMode = "forwards";
        }
        if(duration) {
          el.style.animationDuration = duration;
        }
        el.classList.add(name);
      }
    });
  });
};
