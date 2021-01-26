<template>
  <div class="portfolio">
    <h1 style="margin-bottom: 0.3em">Some of my Websites</h1>
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
      name: 'SkillsUSA Nationals 2019',
      path: '/portfolios/nationals/2019/index.html',
      description: 'blablabla. supports markdown though.',
      image: require('@/assets/portfolios/nationals2019.jpg'),
    }),
    new PortfolioItem({
      name: 'SkillsUSA States 2019',
      path: '/portfolios/states/2019/',
      description: 'blablabla. supports markdown though.',
      image: require('@/assets/portfolios/states2019.jpg'),
    }),
  ],
  [
    new PortfolioItem({
      name: 'SkillsUSA Nationals 2018',
      path: '/portfolios/nationals/2018/',
      description: 'blablabla. supports markdown though.',
      image: require('@/assets/portfolios/nationals2018.png'),
    }),
    new PortfolioItem({
      name: 'SkillsUSA States 2018',
      path: '/portfolios/states/2018/',
      description: 'blablabla. supports markdown though.',
      image: require('@/assets/portfolios/states2018.jpg'),
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
    //margin: 5vmin;
    margin: 0px 5vmin 1vmin 5vmin;
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

    transition: transform 0.1s;
    &:hover {
      transform: scale(1.05);
    }
  }
}

</style>
