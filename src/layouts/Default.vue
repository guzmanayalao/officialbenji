<template>
  <div>
    <div @click="openModal = true, modalVideoSrc='https://www.youtube.com/embed/RhKZ2EpaeA0?controls=0&autoplay=1'" id="notice">"MONSTER" OUT NOW ON ALL PLATFORMS. CLICK TO WATCH NOW.</div>
    <div id="videoModal" :class="{modalIsOpen: openModal}" @click="openModal = false, modalVideoSrc = ''"> 
      <iframe width="560" height="315" :src="modalVideoSrc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
    <slot/> 

  </div>
</template>

<script>
export default {
  data() {
    return {
      openModal: false,
      modalVideoSrc: 'https://www.youtube.com/embed/RhKZ2EpaeA0?controls=0'

    }
  },
  methods: { 
  },
  created () {
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;

}
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  background: #141414;
  overflow-x: hidden;

}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

div#notice {
  background: #2900FF;
  color: white;
  text-align: center; 
  font-weight: 900;
  padding: 20px 0px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 3;
  font-family: 'Open Sans', sans-serif;
}
#videoModal {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.8);
  z-index: 4;
  transform: scale(0); 
  transition: all .3s;
}
.modalIsOpen {
    transform: scale(1) !important;
      transition: all .3s;
 

}
</style>
