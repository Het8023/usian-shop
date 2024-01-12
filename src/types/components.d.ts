import Uswiper from '@/components/u-swiper.vue'
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    Uswiper: typeof Uswiper
  }
}
