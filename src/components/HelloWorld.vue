<script setup lang="ts">
defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>

  <div>
    Code:
    <a href="https://editorconfig.org/#overview" target="_blank">EditorConfig</a>
    /
    <a href="https://eslint.org/" target="_blank">ESLint</a>
    /
    <a href="https://www.prettier.cn/" target="_blank">Prettier</a>
    /
    <a href="https://stylelint.io/" target="_blank">Stylelint</a>
  </div>
  <div>
    Commit:
    <a href="https://typicode.github.io/husky/" target="_blank">Husky</a>
    /
    <a href="https://github.com/okonet/lint-staged" target="_blank">Lint-staged</a>
    /
    <a href="https://github.com/commitizen/cz-cli" target="_blank">Commitizen</a>
    /
    <a href="https://github.com/conventional-changelog/commitlint/" target="_blank">Commitlint</a>
  </div>
  <div>
    Test:
    <a href="https://cn.vitest.dev/" target="_blank">Vitest</a>
  </div>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code>
      to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>
    , the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue and TypeScript logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
