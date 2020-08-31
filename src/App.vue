<template>
  <div id="app">
    <h1>Vue Arbotect</h1>
    <h2>Options</h2>
    <Options :options="options" @toggle-expand="expand = $event" />
    <h2>Demo</h2>
    <VueArbotect :tree="tree" :options="options" :expanded="expand">
    </VueArbotect>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { Options, VueArbotect } from '@/components';
import { SelectMode, TreeNode } from '@/models';

@Component({
  components: {
    Options,
    VueArbotect
  }
})
export default class App extends Vue {
  private options = {
    selectMode: SelectMode.Cascade
  };

  expand = true;

  private tree = [
    new TreeNode('1', 'Root', [
      new TreeNode('2', 'Child 1', [
        new TreeNode('5', 'Childs Child 1'),
        new TreeNode('6', 'Childs Child 2')
      ]),
      new TreeNode('3', 'Child 2'),
      new TreeNode('4', 'Child 3')
    ])
  ];
}
</script>
