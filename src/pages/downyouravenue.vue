<template>
  <div>
    <g-image class="bg" src="../../static/uploads/downyoaveue2.png"></g-image>
    <div style="max-width: 450px; margin: auto;">
      <h1>Down Your Avenue (feat. 8matiklogan)</h1>
      <iframe
        src="https://open.spotify.com/embed/track/6BiQdxzLJz5P7eetChY6Hx"
        width="100%"
        height="80"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
      <g-image
        src="../../static/uploads/downyoaveue2.png"
        style="width: 100%; margin: auto;"
      ></g-image>
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
        <a
          class="link"
          href="https://music.apple.com/us/album/down-your-avenue-feat-8matiklogan/1492592248?i=1492592249"
          type="button"
        >
          <div>
            <g-image src="../../static/uploads/apple-music-logo.png"></g-image>
          </div>
          <button class="">Listen</button>
        </a>

        <a href="https://www.youtube.com/watch?v=AZn6yhp1zks" class="link">
          <div>
            <g-image src="../../static/uploads/youtube-brands.svg"></g-image>
          </div>
          <button class="">Listen</button></a
        >

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
  </div>

  <!-- <page-query>
query allListenpages {
  allListenpages{
    edges {
      node {
        bio
      }
    }
  }
}
</page-query> -->
</template>

<style>
html {
  padding: 0;
  margin: 0;
}
h1 {
  color: white;
  text-align: center;
  font-size: 18px;
  text-transform: uppercase;
  padding: 1rem;
}
.bg {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -5;
  filter: blur(10px);
  width: 100%;
}

*/ iframe {
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
  background: rgba(255, 255, 255, 0.85);
  display: flex;
  color: black;
  justify-content: space-between;
  align-items: center;
  padding: 1.15rem;
  border-bottom: 1px solid rgb(255, 255, 255);
  border-left: 1px solid rgb(255, 255, 255);
  border-right: 1px solid rgb(255, 255, 255);
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
    title: "Down Your Avenue (feat. 8matiklogan)"
  }
};
</script>
