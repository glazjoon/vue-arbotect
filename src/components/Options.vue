<template>
  <div>
    <div>
      <h4>Expansion</h4>
      <label>
        <input
          type="radio"
          v-model="expand"
          :value="true"
          @change="$emit('toggle-expand', true)"
        />
        Expanded
      </label>
      <label>
        <input
          type="radio"
          v-model="expand"
          :value="false"
          @change="$emit('toggle-expand', false)"
        />
        Collapsed
      </label>
    </div>
    <div>
      <h4>
        Selection Mode
      </h4>
      <label v-for="[k, v] in selectModes" :key="v">
        <input type="radio" v-model="options.selectMode" :value="parseInt(k)" />
        {{ v }}
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import { Options as TreeOptions, SelectMode } from '@/models';

@Component({})
export default class Options extends Vue {
  @Prop() options!: TreeOptions;

  expand = true;

  private SelectMode = SelectMode;

  get selectModes() {
    const entries = Object.entries(SelectMode);
    return entries.splice(0, entries.length / 2);
  }
}
</script>
