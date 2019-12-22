<template>
  <div style="max-width: 600px; margin: auto;">
    <h1>Down Your Avenue (feat. 8matiklogan)</h1>
    <iframe
      src="https://open.spotify.com/embed/track/6BiQdxzLJz5P7eetChY6Hx"
      width="100%"
      height="680"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
    <div class="link-wrapper">
      <a
        class="link"
        href="https://open.spotify.com/track/6BiQdxzLJz5P7eetChY6Hx"
      >
        <div>
          <g-image src="../../static/uploads/spotify.png"></g-image>
        </div>
        <button class="">Listen</button>
      </a>
      <a href="https://www.youtube.com/watch?v=AZn6yhp1zks" class="link">
        <div>
          <g-image src="../../static/uploads/youtube-brands.svg"></g-image>
        </div>
        <button class="">Listen</button></a
      >
      <a class="link" type="button" disabled>
        <div>
          <g-image src="../../static/uploads/apple-music-logo.png"></g-image>
        </div>
        <button class="">Coming Soon</button>
      </a>
      <a
        class="link"
        href="https://www.amazon.com/Down-Avenue-feat-8matiklogan-Explicit/dp/B082Z9MPKX/ref=sr_1_1?keywords=6enji&qid=1577035814&s=dmusic&sr=1-1"
      >
        <div>
          <g-image src="../../static/uploads/amazon-music.png"></g-image>
        </div>
        <button class="">Listen</button>
      </a>
    </div>
  </div>
</template>
<style>
html {
  padding: 0;
  margin: 0;
}
h1 {
  color: white;
  text-align: center;
}
iframe {
  margin: auto;
  display: block;
}
.link-wrapper {
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 600px;
}
.coverart {
  max-width: 600px;
}
.link {
  background: white;
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 1.15rem;
  border-bottom: 1px solid gray;
}
button {
  background: none;
  border: 1px solid gray;
  padding: 0.5rem;
}
.link img {
  height: 50px;
  margin-right: 2rem;
  width: auto;
}
</style>
<script>
export default {
  metaInfo: {
    title: "About us"
  }
};
</script>
