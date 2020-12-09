<!--
 * @Descripttion: 
 * @Author: NoYo
 * @Date: 2020-11-23 11:32:47
 * @LastEditTime: 2020-12-08 14:18:07
-->
<template>
  <router-view v-slot="{ Component }">
    <transition>
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>
<style lang="less">
/* 过渡暂没找到写法 */

// .transitionBody {
//   transition: 1s ease; /*定义动画的时间和过渡效果*/
// }
// .slide-fade-enter,
// .slide-fade-leave-to {
//   opacity: 0;
// }
</style>