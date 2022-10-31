import Tweet from "./Tweet";
import { stringContains } from "../utils/helpers";
import { aos } from "../utils/helpers";
import { createEffect, createMemo, createResource, createSignal, Index } from "solid-js";
import { twitterKeywordList } from "../DATA";

export interface TweetObj {
  edit_history_ids: Array<string>;
  id: string;
  text: string;
}

const fetchTweets = async (token: string) => {
  try {
    const newPageUrl = new URLSearchParams({
      pagination_token: token,
    });
    const res = await fetch(`/.netlify/functions/getTweets?${token ? newPageUrl : ''}`);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err: any) {
    throw new Error(err.message);
  }
}

export default function Socials() {
  const [tweets, setTweets] = createSignal<Array<any>>([]);
  const [nextTwitterToken, setNextTwitterToken] = createSignal("");
  const [data, {mutate, refetch}] = createResource(nextTwitterToken, fetchTweets)
  let twitterContainer: HTMLElement;

  const AOS = aos;

  createEffect(() => {
    if(data() === undefined) return;
    if(data().loading) return;
    if(data().error) return data().error;
    const filteredTweets: Array<TweetObj> = data().tweets.filter((t: TweetObj) => stringContains(t.text, twitterKeywordList))
    console.log(data());
    setTweets((prev) => [...prev, ...data().tweets]);
  })

  return (
    <div
      class="socials"
      use:AOS={{
        name: "fade-in",
        duration: .5,
        offset: 200,
        once: true,
      }}
      animateIn="fade-in"
      duration={0.5}
      offset={200}
      animateOnce={true}
    >
      <h2 id="socials" class="socials__title">
        Socials
      </h2>
      <div class="socials__body">
        <div class="socials__twitter">
          <div class="tweets__list" ref={twitterContainer}>
            <Index each={tweets()}>
              {(tweet) => 
                <Tweet tweetObject={tweet()}></Tweet>
              }
            </Index>
          </div>
        </div>
      </div>
    </div>
  );
}
