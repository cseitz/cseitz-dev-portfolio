<template>
  <div class="portfolio">
    <h1>Portfolio</h1>
    <div class="portfolioRow"
      v-for="(row, rowIndex) in items"
      v-bind:key="rowIndex">
      <a class="portfolioItem"
        v-for="(item, index) in row"
        v-bind:key="index"
        v-bind:href="item.path">
        <div class="portfolioImage"
          v-bind:style="{ 'background-image': `url(${item.image})`}"
          ></div>
        <div class="portfolioContent">
          <h2>{{ item.name }}</h2>
          <div v-html="item.description"></div>
        </div>
      </a>
    </div>
    {{ items }}
  </div>
</template>

<script>
// @ is an alias to /src
import marked from 'marked';
import Logo from '@/assets/logo.png';

class PortfolioItem {
  constructor(config) {
    Object.assign(this, {
      description: '',
      image: Logo,
      path: '/',
    })
    Object.assign(this, config);
    this.description = marked(this.description);
  }
}

const Items = [
  [
    new PortfolioItem({
      name: 'Kent Hack Enough 2020',
      path: '/portfolios/khe/2020',
      description: 'blablabla. supports markdown though.',
      image: require('@/assets/portfolios/khe2020.png'),
    }),
    new PortfolioItem({
      name: 'HackSU 2021',
      path: '/portfolios/hacksu/2021',
      description: 'blablabla. supports markdown though.',
      image: require('@/assets/portfolios/hacksu2021.png'),
    }),
  ],
  [
    new PortfolioItem({
      name: 'Kent Hack Enough 2020',
      path: '/portfolios/khe/2020',
      description: 'blablabla. supports markdown though.',
      image: require('@/assets/portfolios/khe2020.png'),
    }),
    new PortfolioItem({
      name: 'Kent Hack Enough 2020',
      path: '/portfolios/khe/2020',
      description: 'blablabla. supports markdown though.',
      image: require('@/assets/portfolios/khe2020.png'),
    }),
  ],
]

export default {
  name: 'Portfolio',
  data() {
    return {
      items: Items,
    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">

.portfolio {
  .portfolioItem {
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    display: inline-block;
    //background-color: red;
    margin: 5vmin;
    border-radius: 0.75em;
    padding: 3vmin;

    .portfolioImage {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      min-height: 200px;
      //border-top-left-radius: inherit;
      //border-top-right-radius: inherit;
      border-radius: inherit;

    }
    .portfolioContent {
      padding: 3vmin;
      padding-top: 10px;
    }
  }
}

</style>
