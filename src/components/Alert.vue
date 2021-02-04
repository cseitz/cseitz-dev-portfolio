<template>
  <div class="alert" :style="{ 'background-color': color, 'color': textColor, }">
    <slot></slot>
    <span v-html="content"></span>
  </div>
</template>

<script>

let isDark = function(color) {
  let numbers = ([...color.match(/\d+/g)]).map(Number);
  let total = numbers.reduce((acc, val) => acc + val);
  //console.log(color, avg);
  if (total >= 255) {
    return false;
  }
  return true;
}

export default {
  name: 'Alert',
  props: {
    content: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'orange',
    },
  },
  data() {
    return {
      counter: 0,
    }
  },
  computed: {
    textColor() {
      this.counter;
      if (this.$el) {
        let styles = getComputedStyle(this.$el);
        let { backgroundColor, color } = styles;
        //let col = getComputedStyle(this.$el).backgroundColor;
        //console.log(col);
        let darkbg = isDark(backgroundColor);
        let darktext = isDark(color);
        console.log({
          darkbg,
          darktext,
        })
        if (darkbg == darktext) {
          if (darkbg) {
            return 'white';
          } else {
            return 'black';
          }
        }
        return false;
      } else {
        return 'inherit';
      }

    }
  },
  mounted() {
    this.counter++;
    let this_ = this;
    requestAnimationFrame(function() {
      this_.counter++;
    })
  }
}
</script>

<style lang="scss" scoped>

.alert {
  display: block;
  padding: 20px;
  border-radius: 0.5em;
}
</style>
