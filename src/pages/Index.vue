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
            <a href="#dates">SHOWDATES</a>
            <a href="#music">MUSIC</a>
            <a href="#music">BOOKING/CONTACT</a>
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
              <p style="line-height: 1.8">
                Benji excercises his imaginative and curious mind to expand the bounds of Chicago hiphop. After falling in love with poetry and rap, the 17 year old from Little Village Chicago decided to drop out of school
                to focus on his passion. Since then, Benji has made a name for himself with his songs "Menace" and "Monster". Chicago has been asking for more. Now free from a confining contract, Benji is ready to give his fans what they want.
              <div id="datesWrapper">
                <h2 id="dates">SHOW DATES</h2>
                <p><span class="showLocation">THE FORGE, JOLIET IL</span>
                  <span class="showDescription">DATE WILL BE ANNOUNCED SOON...</span>
                </p>
              </div>

            </div>

          </div>

        </div>
    </section>
    <section id="showDates" style="padding-bottom: 5rem;">
      <div class="maxWidthWrapper">
        <div class="imageContentWrapper">
          <div class="content">

            <div id="music">
              <div class="musicAndVideoWrapper">
                <div style="position: relative; width: 100%">
                  <h2 style="text-align: center; display: block; margin-bottom: 2rem;">MUSIC</h2>
                  <div class="musicWrapper">
                    <iframe  src="https://www.youtube.com/embed/RhKZ2EpaeA0?controls=0&autoplay=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                    <iframe  scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/294175084&color=%23690000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                  </div>
                </div>
              </div>
            </div>
                

              </div>
         
            </div>
            
          </div>

    </section>
    <!-- <section id="showDates">
      <div class="maxWidthWrapper">
        <div class="imageContentWrapper">
        <h2>Sign Up</h2>
        <form action="">
          <input type="text" placeholder="">
          <button></button>
        </form>
        </div>

      </div>

    </section> -->
        <section id="showDates">
        <div class="imageContentWrapper">
          <div class="content">
            <div class="maxWidthWrapper">
              <h2 style="font-size: 50px; display: block; text-align: center; ">CONTACT</h2>
              <p style="line-height: 1.8">
                For booking, features, and inquiries please fill out this form. This is the best way to directly contact BENJI.<br><span>{{ successMessage }}</span>
              </p>
                <form 
                  name="contact"
                  method="post"
                  v-on:submit.prevent="handleSubmit"
                  action="/success/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p hidden>
                    <label>
                      Don’t fill this out: <input name="bot-field" />
                    </label>  
                  </p>
                  <div class="sender-info">
                    <div>
                      <label for="name" class="label" >Your name</label>
                      <input type="text" name="name" v-model="formData.name" />
                    </div>
                    <div>
                      <label for="email">Your email</label>
                      <input type="email" name="email" v-model="formData.email" />
                    </div>
                  </div>

                  <div class="message-wrapper">
                    <label for="message">Message</label>
                    <textarea name="message" v-model="formData.message"></textarea>
                  </div>

                  <button type="submit" >Submit form</button>
                </form>

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
      successMessage: null,
      formData: {},


    }
  },
  metaInfo: {
    title: "BENJI'S OFFICIAL WEBSITE"
  },
  methods: { 
    handleScroll (event) {
      this.translateVal = window.scrollY; 
    },
    encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({
          'form-name': e.target.getAttribute('name'),
          ...this.formData,
        }),
      })
      .then(() => this.successMessage = 'Thank you for contacting benji!')
      .catch(error => this.successMessage = error)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
}
</script>

<style>
form {
  text-align: center;
  
}
label {
  display: flex;
  flex-direction: column;
}
input, textarea {
  padding: .5rem;
  margin-top: .5rem;
  background: transparent;
  border-left: none;
  border-top: none;
  border-right: none; 
  border-bottom: 1px solid white;
  color: white; 
  resize: none;
    transition: all .3s;

}
input:focus, textarea:focus {
  outline: none;

  border-bottom: 1px solid #2900FF;
    transition: all .3s;

}
button {
  width: 200px;
  font-size: 18px;
  padding: .5rem 0;
  text-transform: uppercase;
  font-weight: 900;
  background: none;
  color: #2900FF;
  border: 1px solid #2900FF;
  cursor: pointer;
    transition: all .3s;

}
button:hover {
  color: white;
  background: #2900FF;
  transition: all .3s;
}
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
.musicWrapper {
  display: flex;
}
.musicWrapper iframe:nth-of-type(2) {
  margin-left: 2rem;
}
.musicAndVideoWrapper h2 {
  margin-top: 0;
  text-align: center;
  margin: auto;
  display: block;
  width: auto;
}
iframe {
  margin: auto; 
  display: block;
  width: 550px;
  height: 350px;
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
nav > a:last-of-type {
  margin-right: 0;
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
  overflow-x: hidden;
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
section#showDates:nth-of-type(2) .imageContentWrapper > h2{ 

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
  iframe {
    width: 320px;
  }
  .musicWrapper {
    flex-direction: column;
  }
  .musicWrapper iframe:nth-of-type(2) {
    margin: 2rem auto;
    
  }
  #datesWrapper {
    margin-top: 4rem;
    
  }
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
@media screen and (max-width: 600px){
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
