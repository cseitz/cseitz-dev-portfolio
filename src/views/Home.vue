<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <h2>WORK IN PROGRESS</h2>
    <p>{{ description }}</p>
    <img alt="Vue logo" src="../assets/logo.png" hidden>
    <Portfolio/>
    test
  </div>
</template>

<script>
// @ is an alias to /src
import Portfolio from '@/views/Portfolio.vue';

export default {
  name: 'Home',
  data() {
    return {
      title: "Hey, I'm Chris Seitz.",
      description: `
      A Full-Stack Web Developer and jack of all trades.
      I got my start in freelance game development when I was 12,
      and since then I've done a little bit of everything.
      `,
    }
  },
  components: {
    Portfolio,
  }
}
</script>
