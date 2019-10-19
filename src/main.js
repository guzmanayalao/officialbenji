// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  head.link.push({
    rel: "stylesheet",
    href:
      "https://fonts.googleapis.com/css?family=Open+Sans:400,400i,800&display=swap"
  });
  head.meta.push({
    name: "title",
    content: "BENJI'S OFFICIAL WEBSITE"
  });
  head.meta.push({
    name: "description",
    content:
      "Benji is an imaginative 17 year old Hip Hop artist from Little Village, Chicago. He's inspired by Gherbo's realness, Kid Cudi's cosmic themes, and Lil Peep's defiance. "
  });
  head.meta.push({
    name: "og:type",
    content: "website"
  });
  head.meta.push({
    name: "og:url",
    content: "https://officialbenji.com"
  });
  head.meta.push({
    name: "og:url",
    content: "https://officialbenji.com"
  });
  head.meta.push({
    name: "og:title",
    content: "BENJI'S OFFICIAL WEBSITE"
  });
  head.meta.push({
    name: "og:description",
    content:
      "Benji is an imaginative 17 year old Hip Hop artist from Little Village, Chicago. He's inspired by Gherbo's realness, Kid Cudi's cosmic themes, and Lil Peep's defiance. "
  });
  head.meta.push({
    name: "og:image",
    content: "./benjiwarzonecover.jpg"
  });
  head.meta.push({
    name: "twitter:card",
    content: "summary_large_image"
  });
  head.meta.push({
    name: "twitter:url",
    content: "https://officialbenji.com"
  });
  head.meta.push({
    name: "twitter:title",
    content: "BENJI'S OFFICIAL WEBSITE"
  });
  head.meta.push({
    name: "twitter:description",
    content:
      "Benji is an imaginative 17 year old Hip Hop artist from Little Village, Chicago. He's inspired by Gherbo's realness, Kid Cudi's cosmic themes, and Lil Peep's defiance. "
  });
  head.meta.push({
    name: "twitter:image",
    content: "./benjiwarzonecover.jpg"
  });
  head.bodyAttrs = { class: "body-class" };
  head.script.push({ src: "//www.instagram.com/embed.js" });
}
