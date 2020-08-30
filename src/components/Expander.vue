<template>
  <div @click="$emit('toggle')">
    <div v-if="expanded">-</div>
    <div v-else>+</div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({ name: 'Expander' })
export default class Expander extends Vue {
  @Prop() expanded!: boolean;
}
</script>

<style scoped>
* {
  cursor: pointer;
  user-select: none;
}
</style>
