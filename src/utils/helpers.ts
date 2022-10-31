import { onMount } from "solid-js";

export const stringContains = (string: string, wordArray: Array<string>) => {
  for (const word of wordArray) {
    if (string.includes(word)) {
      return true;
    }
  }
  return false;
};

export const aos = (el: HTMLElement, value: any) => {
  onMount(() => {
    const { name, duration, offset, once } = value();
    const pos = el.getBoundingClientRect().top + offset;

    addEventListener("scroll", () => {
      if (
        window.scrollY + window.innerHeight > pos &&
        !el.classList.contains(name)
      ) {
        if (once) {
          el.style.animationFillMode = "forwards";
        }
        if(duration) {
          el.style.animationDuration = duration;
        }
        el.classList.add(name);
        console.log(window.scrollY + window.innerHeight + " " + pos);
      }
    });
  });
};
