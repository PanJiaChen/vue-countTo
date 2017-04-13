# vue-countTo
It's a vue component that will count to a target number at a specified duration.
vue-countTo is a dependency-free, lightweight vue component that can be overwrited  easingFn by yourself.
You can set startVal and endVal ,it will automatic judge count up or count down.
It is learn from countUp.js;

## [Try the demo](https://github.com/wscn-FED/wscn-market-components/raw/master/images/demo.png)

### How to use?
```bash
npm install vue-countTo
```

### Example

```js
	<link href="**/marketComponents-default.css" rel="stylesheet">

	<div id="root"></div>

	<script src="**/wscn-react-vendor.min.js"></script>
	<script src="/**/react-market.min.js"></script>

	<script>
		var mountDom = document.getElementById('root');
        var options = {
            symbols: [
                "XAUUSD",
                "UKOil",
                "000001",
                "EURUSD",
                "USDJPY"
            ],
            priceMinInterval: 2000,
            baseApi: "https://forexdata.wallstreetcn.com/",
            priceApi: "real",
            priceApiField: "prod_name,last_px,px_change,px_change_rate,price_precision,securities_type",
            klineApi: "kline",
            candle_period:5,
            data_count:80,
            end_time:0,
            klineApiField: "close_px"
        };
        new WSCNTilesetQuote(options).init(mountDom);
	<script>
```
demo:

![demo](https://github.com/wscn-FED/wscn-market-components/raw/master/images/demo.png)



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
