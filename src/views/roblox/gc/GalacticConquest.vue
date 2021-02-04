<template>
  <div>
    <h1>Galactic Conquest</h1>
    <p>
      Star Wars Themed Video Game on Roblox.com
    </p>
    <div class="header-video">
      <video id="header-video"
      v-if="videos[selectedImage]"
      muted
      autoplay
      loop
      v-on:canplay="videoLoaded = true; recompute()"
      v-bind:style="{ ...verticalAlignHeaderVideo, }"
      v-bind:src="videos[selectedImage]">
      </video>
      <div v-if="!videos[selectedImage]" id="header-video" class="header-image" :style="{ 'background-image': `url(${imagePrefix + image})`, ...verticalAlignHeaderVideo, }">
        <img :src="imagePrefix + selectedImage">
      </div>
    </div>
    <div v-if="videoLoaded" class="image-gallery">
      <div v-for="image in images"
      v-bind:key="image"
      class="gallery-image-item"
      v-on:click="selectedImage = image; recompute(); recomputeNextFrame();"
      v-bind:class="{ 'selected-image': image == selectedImage, }"
      v-bind:style="{ 'background-image': `url(${imagePrefix + image})`}">
        <img v-bind:src="imagePrefix + image">
      </div>
      <!--<img v-for="image in images" v-bind:key="image" v-bind:src="imagePrefix + image">-->>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Galactic Conquest',
  data() {
    return {
      recomputed: 0,
      videoLoaded: false,
      imagePrefix: `https://cseitz-sync.nyc3.digitaloceanspaces.com/galactic-conquest/`,
      selectedImage: 'GC_BattlegroundsVideoThumbnail1.png',
      videos: {
        'GC_BattlegroundsVideoThumbnail1.png': 'https://cseitz-sync.nyc3.digitaloceanspaces.com/galactic-conquest/battlegrounds-cinematic-battle1.mp4',

      },
      images: [
        'GC_BattlegroundsVideoThumbnail1.png',
        'GC_DromundKaas1.png',
        'GC_Alderran1.jfif',
        'GC_Alderran2.jfif',
        'GC_Alderran3.jfif',
        'GC_Ilium1.png',
        'GC_Ilium2.png',
        'GC_Ilium3.jfif',
        'GC_Ilium4.jfif',
        'GC_Ilium5.jfif',
        'GC_Korriban1.jfif',
        'GC_Korriban_Temple1.jfif',
        'GC_Korriban_Temple2.jfif',
        'GC_Korriban_Assets1.jfif',

      ],
    }
  },
  computed: {
    verticalAlignHeaderVideo() {
      this.recomputed;
      if (!this.$el) {
        return {};
      }
      return this.verticalAlign(this.$el.querySelector('#header-video'))
    }
  },
  methods: {
    recompute() {
      this.recomputed++;
    },
    recomputeNextFrame() {
      //let this_ = this;
      requestAnimationFrame(this.recompute);
    },
    verticalAlign(element) {
      //console.log('element =', element);
      if (element && element.parentElement) {
        return {
          'margin-top': ((element.clientHeight - element.parentElement.clientHeight) / -2) + 'px',
          'margin-left': ((element.clientWidth - element.parentElement.clientWidth) / -2) + 'px'
        }
      }
      return {};
    }
  },
  mounted() {
    this.recompute();
    window.addEventListener('resize', this.recompute);
  },
}
</script>

<style lang="scss" scoped>

.header-video, .header-image {
  width: 90vw;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @include mobile {
    width: 90vw;
    max-height: 55vw;
    @include rounded;
    video {
      height: 100%;
    }
  }
  max-width: 2000px;
  height: 80vh;
  max-height: 800px;
  @include display-not(mobile) {
    @include rounded;
  }
  overflow: hidden;
  video {
    margin-left: auto;
    margin-right: auto;
  }
  &.header-image {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    img {
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }
  }
}

.image-gallery {
  margin-top: 10px;
  .gallery-image-item {
    @include rounded;
    max-height: 300px;
    &, img {
      width: 200px;
      height: 100px;
      @include mobile {
        height: 150px;
      }
    }
    img {
      opacity: 0;
    }
    display: inline-block;
    margin: 30px;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    @include mobile {
      margin-left: auto;
      margin-right: auto;
      margin: 5px;
      max-width: 90vw;
      //max-height: 60vh;
      width: 90vw;
      max-height: 80vh!important;
    }
    transition: transform 0.25s;
    @include display-not(mobile) {
      &.selected-image {
        transform: scale(1.25);
      }
    }
  }
}

</style>
