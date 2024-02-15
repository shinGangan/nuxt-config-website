<script setup lang="ts">
const { t, locale } = useI18n({});
</script>

<template>
  <main
    style="
      display: grid;
      grid-template-columns: repeat(auto-fix, minmax(300px, 1fr));
      background-color: lightgray;
      margin: -0.5rem -0.5rem 0rem -0.5rem;
      padding: 2rem;
    "
  >
    <h1>This is playground.</h1>
    <section>
      <select v-model="locale">
        <option value="en">English</option>
        <option value="ja">Japanese</option>
      </select>
      <h1>{{ t("welcome") }}</h1>
      <h3>{{ t("greet", { name: "ゲスト" }) }}</h3>
    </section>
    <section
      style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 2rem"
    >
      <NuxtImg
        v-for="i in 6"
        :key="i"
        :src="`https://picsum.photos/600/800?random=${i}`"
        alt="Random image"
        width="300"
        height="400"
        style="display: grid; grid-template-columns: subgrid"
      />
    </section>
  </main>
</template>
