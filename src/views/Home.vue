<template>
  <div class="home">
    <div class="header">
      <div class="title-section">
        <h1>{{ title }}</h1>
        <h3 style="font-weight: lighter;">{{ description }}</h3>
      </div>
      <div class="links-section">
        <a v-for="[title, logo, link] in links"
          v-bind:key="title"
          v-bind:title="title"
          v-bind:href="link"
          target="_blank">
          <img v-bind:alt="title" v-bind:src="logo">
        </a>
      </div>
      <div class="photo-section">
        <span class="photo" v-bind:style="{ 'background-image': 'url(' + photo + ')' }">
          <img alt="Photo of Chris" v-bind:src="photo">
        </span>
      </div>
      <div class="story-section">
        <pre>{{ shortstory.trim() }}</pre>
      </div>
    </div>
    <br><br>
    <Portfolio/>
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '@/views/Portfolio.vue';
import Photo from '@/assets/MeSuitPictureFall2020.jpg';
import GithubLogo from '@/assets/github.svg';
import LinkedInLogo from '@/assets/linkedin.png';

let story = `
I got my start in early 2012 doing freelance game development on Roblox.com for various people and communities. Since then I have done a fair bit of everything. I've worked on almost two dozen projects on Roblox.com, I've managed projects, I've done community management, I've automated online communities with chat bots, websites, and databases with hundreds of thousands of records, and more. I did this for 8 years, until I departed from the platform in November of 2020. I have also participated in SkillsUSA's Web Design competition in April of 2018 and 2019 at the high school level. I am a two-time back-to-back state champion for Ohio and a two-time national qualifier in Web Design for SkillsUSA. In May of 2018 and 2019, after winning gold at the state level both times, I participated at the national high school level in Louisville, Kentucky. There I placed 5th among other state champions in 2018 and 4th in the nation in 2019. I am also a student leader/club officer and the head of the development team for HacKSU, Kent State University's student-run Computer Science club; in addition to sharing the same roles as an organizer for Kent Hack Enough, KSU's annual Computer Science hackathon, which is organized by HacKSU. Like I said, a fair bit of everything.

All of this stems from my time doing freelance game development which helped me build an extremely broad skillset, and a heavy emphasis on adapting to whatever challenges were thrown at me. Everything I learned was self-taught, and if there is something I haven't done yet, I can learn to do it and adapt to what is needed just as I have many times before.

I am unsure what drove me to this when I started out, but I was 11-12 at the time and I didn't exactly keep a good record of things. Today, what drives me to keep going is my ability to make positive change, and to push the limits of what is possible. On Roblox.com I was frequently seen by my peers and online communities that I worked for as constantly pushing what the game engine allowed us to do. I seek out the most difficult challenges and set out to not only accomplish them but advance them even further. I am passionate about turning things into reality, especially the more difficult the task.

As of the Spring 2021 Semester, I am currently looking for Internship positions in Northeast Ohio in the areas of Information Technology, DevOps, Software Development, and Full-Stack or Backend Web Development.
`;
let shortstory = `
short story
`;

export default {
  name: 'Home',
  data() {
    return {
      title: "Hey, I'm Chris Seitz.",
      description: `Full-Stack Web Developer & Aspiring DevOps Specialist`,
      photo: Photo,
      story,
      shortstory,
      links: [
        ['Github', GithubLogo, 'https://github.com/cseitz'],
        ['LinkedIn', LinkedInLogo, 'https://www.linkedin.com/in/seitzc'],
      ],
    }
  },
  components: {
    Portfolio,
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(20px, auto);
  grid-template-areas:
  'title title links'
  'photo story story';
  margin-left: auto;
  margin-right: auto;
  width: 80vw;
  max-width: 900px;
  padding-top: 10vh;
  .photo-section {
    grid-area: photo;
    .photo {
      display: inline-block;
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      img {
        width: 100%;
        max-width: 80vw;
        max-height: 60vh;
        opacity: 0;
      }
      border-radius: 0.75em;
    }
    margin: 10px;
  }
  .story-section {
    grid-area: story;
    background-color: #f0f0f0;
    margin: 10px;
    border-radius: 0.75em;
    padding: 0.5em;
    pre {
      display: inline-block;
    }
  }
  .title-section {
    grid-area: title;
    text-align: left;
    //margin-bottom: 0px;
    @include mobile {
      max-width: 95vw;
      margin-left: auto;
      margin-right: auto;
    }
    padding-left: 10px;
    h1 {
      margin-bottom: 0px;
      margin-top: 0px;
      @include mobile {
        font-size: 1.8em;
      }
    }
    h3 {
      margin-top: 0.3em;
      padding-left: 0.3em;
      @include mobile {
        margin-top: 0.7em;
        font-size: 1em;
      }
    }
  }
  .links-section {
    grid-area: links;
    padding-left: 10px;
    padding-right: 10px;
    a {
      height: 100%;
      display: inline-block;
      float: right;
      padding-left: 15px;
      @include mobile {
        float: inherit;
      }
      img {
        padding-top: 1.25em;
        max-height: 2.5em;
      }
      transform: scale(0.8);
      transition: transform 0.15s, filter 0.3s;
      @include display-not(mobile) {
        filter: brightness(0%);
        opacity: 0.5;
      }
      &:hover {
        transform: scale(0.9);
        filter: brightness(100%);
        opacity: 1;
      }
    }
  }
  @include mobile {
    max-width: 95vw;
    grid-template-areas:
    'title title title'
    'photo photo photo'
    'story story story'
    'links links links';
    padding-top: 2vh;
    .title-section {
      text-align: inherit;
    }
  }
}

</style>
