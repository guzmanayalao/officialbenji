<template>
  <Layout @scroll="handleScroll">

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div id="landingContainer">
    <div id="blackGradient"></div>

      <div id="darkGrayOverlay"></div>
      <video autoplay muted loop id="myVideo">
        <source src="../monster-bg.mp4" type="video/mp4">
      </video>
        <g-image id="benjiLogo" src="../benjiLogo.svg"></g-image>
          <nav>
            <a href="#">SHOWDATES</a>
            <a href="#">MUSIC</a>
            <a href="#">VIDEOS</a>
            <a href="#">SOCIALS</a>
            <a href="#">MERCH</a>
          </nav>  
      
    </div>
    <section id="showDates">
        <div class="imageContentWrapper">
          <div class="relativeContainer">
            <g-image id="benjiAbout" src="../benjiwarzonecover.jpg" width="450" :style="{transform: 'translateY(' + (translateVal/25) + 'px)'}"></g-image>
            <g-image id="crossHatchShowDateTopLeft" src="../crossHatch.svg" :style="{transform: 'translateY(' + (-translateVal/6) + 'px)'}"></g-image>
            <g-image id="crossHatchShowDateBottomLeft" src="../crossHatch.svg" :style="{transform: 'translateY(' + (-translateVal/3) + 'px)'}"></g-image>

          </div>
          <div class="content">
            <div class="maxWidthWrapper">
              <h2>BENJI</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat ut arcu sit amet sodales. Nullam quis lobortis ex. Nullam dignissim magna nibh, a sollicitudin nisi bibendum a. Phasellus mollis blandit diam et pretium. Aenean aliquam dui eu sodales maximus. Vestibulum tristique leo sed est venenatis venenatis a ac mi. Suspendisse efficitur tristique venenatis.
              </p>
              <h2>SHOW DATES</h2>
              <p><span class="showLocation">THE FORGE, JOLIET IL</span>
                <span class="showDescription">DATE WILL BE ANNOUNCED SOON...</span>
              </p>
            </div>

          </div>

        </div>
    </section>
    <section id="showDates">
      <div class="maxWidthWrapper">
        <div class="imageContentWrapper">
          <div class="content">

            <div >
              <div class="musicAndVideoWrapper">
                <div>
                <h2>MUSIC</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas placerat ut arcu sit amet sodales. Nullam quis lobortis ex. Nullam dignissim magna nibh, a sollicitudin nisi bibendum a. Phasellus mollis blandit diam et pretium. Aenean aliquam dui eu sodales maximus. Vestibulum tristique leo sed est venenatis venenatis a ac mi. Suspendisse efficitur tristique venenatis.
                  </p>
                </div>
                <div style="position: relative; width: 100%">
                  <g-image id="crossHatchMusicPlayer" src="../crossHatch.svg" :style="{transform: 'translateY(' + (-translateVal/6) + 'px)'}"></g-image>
                  <iframe width="315" height="315" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/294175084&color=%23690000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </div>
              </div>
                

              </div>
         
            </div>
            
          </div>

        </div>
      </div>
    </section>
    

  

  </Layout>
</template>

<script>
export default {
  data() {
    return {
      translateVal: 0,

    }
  },
  metaInfo: {
    title: 'Hello, world!'
  },
  methods: { 
    handleScroll (event) {
      this.translateVal = window.scrollY; 
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
.maxWidthWrapper {
  max-width: 1200px; 
  padding: .5rem;
  margin: auto; 
  
}
@media screen and (max-width: 1200px) {
 .maxWidthWrapper {
  max-width: 600px; 
  padding: 1rem;
  
}
}
.musicAndVideoWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
}
.musicAndVideoWrapper h2 {
  margin-top: 0;
}
iframe {
  margin: auto; 
  display: block;
}
.home-links a {
  margin-right: 1rem;
  font-family: 'Open Sans', sans-serif;
}
#landingContainer {
  height: 100vh;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Open Sans', sans-serif;
}
#landingContainer > img {
  margin: 0 0 70px 0;
  width: 276px; 
  position: relative;
  z-index: 2;
}
nav > a {
  margin-right: 70px;
  color: white;
  font-weight: 900; 
  text-decoration: none;
  font-size: 20px;
  position: relative;
  z-index: 1;
  text-align: center;
  font-family: 'Open Sans', sans-serif;
}
nav > a:hover:after {
  content: "";
    background: url("../brush.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;

}
#myVideo {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  transform: translateX(calc((100% - 100vw) / 2)) scale(1.5);
  opacity: .2;

}
#darkGrayOverlay {
  background-color: #000000;
  background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute; 
}


section#showDates{
background-color: #000000;
background-image: url("https://www.transparenttextures.com/patterns/asfalt-light.png");
}
section#showDates .imageContentWrapper h2{
  color: white; 
  font-size: 80px;
  position: relative; 
  z-index: 2;
  font-family: 'Open Sans', sans-serif;
  display: inline-block;
  margin-bottom: 0;

}
.imageContentWrapper {
  display: flex; 
  justify-content: center;
  align-items: center;
  color: white; 
  max-width: 1100px;
  margin: auto; 
}

section#showDates .imageContentWrapper h2::after {
    content: "";
    background: url("../brush.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    z-index: -1;
    margin-left: -10px;
    margin-right: -10px;
}
section#showDates .content {
  margin-left: 3rem; 
  font-size: 18px; 
  font-family: 'Open Sans', sans-serif;
  position: relative; 
}

.showLocation {
  display: block;
  font-weight: 900;
}
.showDescription {
  font-size: .8rem; 
  font-style: italic;
}
.relativeContainer {  
  position: relative; 
}
#benjiAbout {
  z-index: 2;
  position: relative;
}
#crossHatchShowDateTopLeft {
  position: absolute;
  top: -100px;
  left: -150px;
  z-index: 3;

}
#crossHatchShowDateBottomLeft {
  position: absolute;
  bottom: -150px;
  left: -100px;
  z-index: 1;
  width: 200px;
}
#crossHatchMusicPlayer {
  position: absolute;
  bottom: -100px;
  right:-100px;
  z-index: 1;
  width: 200px;
}
@media screen and (max-width: 1200px) {
  .showDescription, .showLocation {
    text-align: center;
    margin: auto;
    display: block;
  }
  .imageContentWrapper {
    flex-direction: column;
  }
  section#showDates .content {
    margin-left: 0rem;
    margin-top: 4rem;

}
.musicAndVideoWrapper {
  margin-top: 0;
  flex-direction: column;
}
.musicAndVideoWrapper h2 {
  margin-top: 0;
}
  nav > a {
  display: block;
  margin-right: 0;
  margin-top: 1rem;
  }
  section#showDates .imageContentWrapper h2{
  display: block; 
  margin: auto; 
  text-align: center; 
  line-height: 1;

}
section#showDates .imageContentWrapper h2::after {
    content: "";
    background: url("../brush.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 50%;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    margin: auto; 
    

}

}
@media screen and (max-width: 400px){
  #benjiAbout {
    max-width: 300px;
  }
  
}
@media screen and (max-height: 700px) {
  #landingContainer {
    height: auto;
    padding: 170px 0; 
  }
}
</style>
