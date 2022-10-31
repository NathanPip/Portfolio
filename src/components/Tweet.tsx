import { Component, createEffect } from "solid-js";
import { TweetObj } from "./Socials";
import { aos } from "../utils/helpers";

const Tweet: Component<{tweetObject: TweetObj}> = (props) => {
  
    let textElement: HTMLElement;
    const AOS = aos;

  createEffect(() => {
    if (props.tweetObject.text && textElement !== undefined) {
      textElement.innerHTML = props.tweetObject.text.replace(/\n/g, "<br />");
    }
  });


  return (
    <div
      class="socials__tweet"
      use:AOS={{ name: "fade-in", duration: 0.5, offset: 200, once: true }}
    >
      <img
        class="tweet__profile__img"
        src="/imgs/profile.jpg"
        href="https://twitter.com/NathanPiperr"
        target="_blank"
      ></img>
      <h3 class="tweet__username">
        <a href="https://twitter.com/NathanPiperr" target="_blank">
          Nathan Piper
        </a>
        <span class="tweet__user__handle">
          <a href="https://twitter.com/NathanPiperr" target="_blank">
            @NathanPiperr
          </a>
        </span>
      </h3>
      <p className="tweet__text" ref={textElement}></p>
    </div>
  );
}

export default Tweet;