import Tweet from "./Tweet";
import { stringContains } from "../utils/helpers";
import { aos } from "../utils/helpers";
import { createEffect, createResource, createSignal, Index, onMount } from "solid-js";
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
    return data;
  } catch (err: any) {
    console.log(err);
  }
}

export default function Socials() {
  const [tweets, setTweets] = createSignal<Array<TweetObj>>([]);
  const [nextTwitterToken, setNextTwitterToken] = createSignal("");
  const [data] = createResource(nextTwitterToken, fetchTweets)
  let twitterList: HTMLElement;
  let twitterContainer: HTMLElement;

  const AOS = aos;

  createEffect(() => {
    if(data() === undefined) return;
    if(data().loading) return;
    if(data().error) return data().error;
    const filteredTweets: Array<TweetObj> = data().tweets.filter((t: TweetObj) => stringContains(t.text, twitterKeywordList))
    console.log(data());
    setTweets((prev) => [...prev, ...filteredTweets]);
    if(tweets().length < 10) {
      setNextTwitterToken(data().nextToken);
    }
  })

  onMount(() => {
    let containerHeight = twitterContainer.getBoundingClientRect().height;
    let scroll = twitterList.scrollTop;
    let listHeight = twitterList.scrollHeight;
    let scrollAmt: number;
    twitterList.addEventListener("scroll", () => {
      containerHeight = twitterContainer.getBoundingClientRect().height;
      scroll = twitterList.scrollTop;
      listHeight = twitterList.scrollHeight;
      scrollAmt = scroll + containerHeight;
      if(scrollAmt >= listHeight-200) {
        setNextTwitterToken(data().nextToken);
      }
    })
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
        <div class="socials__twitter" ref={twitterContainer}>
          <div class="tweets__list" ref={twitterList}>
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
