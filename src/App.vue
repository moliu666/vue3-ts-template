<template>
  <div>
    <a href="https://cn.vitejs.dev/v" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://www.tslang.cn/index.html" target="_blank">
      <img src="~~/assets/ts.webp" class="logo ts ts-s" alt="TypeScript logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + TypeScript" />
</template>

<style lang="postcss" scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }

  &.ts:hover {
    filter: drop-shadow(0 0 2em #3179c7aa);
  }
}

.ts-s {
  transform: scale(0.9);
}
</style>
