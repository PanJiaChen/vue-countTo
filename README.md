# vue-countTo
vue-countTo is a dependency-free, lightweight vue component that can be overwrited  easingFn by yourself.
You can set startVal and endVal ,it will automatic judge count up or count down.
It is learn from countUp.js;

## [Try the demo](http://panjiachen.github.io/countTo/demo/)

### How to use?
```bash
npm install vue-count-to
```

### Example

```vue
<template>
	<countTo :startVal='startVal' :endVal='endVal' :duration='3000'></countTo>
</template>

<script>
  import countTo from 'vue-count-to';
  export default {
    components: { countTo },
    data () {
      return {
        startVal: 0,
        endVal: 2017
      }
    }
  }
</script>
```
demo:

![demo](https://github.com/PanJiaChen/vue-countTo/blob/master/countDemo.gif)

Use CDN Script: [demo](https://github.com/PanJiaChen/vue-countTo/blob/master/demo/index.html)



### Options
|    Property    |    Description   |   type   |	default	|
| -----------------  | ---------------- | :--------: | :----------: |
| startVal       | the value you want to begin at |Number| 0 |
| endVal         | the value you want to arrive at |Number | 2017 |
| duration  | duration in millisecond | Number | 3000 |
| autoplay     | when mounted autoplay | Boolean | true |
| decimals     | the number of decimal places to show | Number | 0 |
| decimal     | the split decimal | String | . |
| separator     | the separator | String | , |
| prefix     | the prefix | String | '' |
| suffix     | the suffix | String | '' |
| useEasing     | is use easing function | Boolean | true |
| easingFn     | the easing function | Function | — |


### Functions
| Function Name | Description   |
| :--------:   | -----  |
|    mountedCallback    |  when mounted will emit  mountedCallback  |
|    start    |  start the countTo  |
|    pause   |  pause  the countTo |
|    reset    |  reset  the countTo |
