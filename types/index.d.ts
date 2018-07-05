// Type definitions for vue-count-to 1.0.13
// Project: https://github.com/PanJiaChen/vue-countTo
// Definitions by: mimimile <https://github.com/mimimile>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import Vue from 'vue'

export declare class VueCountTo extends Vue {
    // the value you want to begin at
    startVal: number

    // the value you want to arrive at
    endVal: number

    // duration in millisecond
    duration: number

    // when mounted autoplay
    autoplay: boolean

    // the number of decimal places to show
    decimals: number

    // the split decimal
    decimal: string

    // the separator
    separator: string

    // the prefix
    prefix: string

    // the suffix
    suffix: string

    // is use easing function
    useEasing: boolean

    // the easing function
    easingFn: Function

    // when mounted will emit mountedCallback
    mountedCallback (): void

    // start the countTo
    start (): void

    // pause the countTo
    pause (): void

    // reset the countTo
    reset (): void
}

