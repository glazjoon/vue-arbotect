<template>
  <ul>
    <li v-for="node in tree" :key="node.key">
      <Node :node="node" :options="normalizedOptions" :onToggle="onToggle" />
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import Node from '@/components/Node.vue';

import { Options, TreeNodeState, TreeNode, SelectMode } from '@/models';

import { recurse } from '@/lib/recurse';

type StateInitiator = boolean | string[];

@Component({
  components: {
    Node
  }
})
export default class VueArbotect extends Vue {
  @Prop() options!: Options;
  @Prop() tree!: TreeNode[];

  @Prop({ default: false }) disabled!: StateInitiator;
  @Prop({ default: false }) expanded!: StateInitiator;
  @Prop({ default: false }) selected!: StateInitiator;

  get normalizedOptions(): Options {
    return Object.assign(
      {
        selectMode: SelectMode.Disabled
      },
      this.options
    );
  }

  @Watch('disabled') initDisabled() {
    this.initState('disabled');
  }
  @Watch('expanded') initExpanded() {
    this.initState('expanded');
  }
  @Watch('selected') initSelected() {
    this.initState('selected');
  }

  mounted() {
    this.initDisabled();
    this.initExpanded();
    this.initSelected();
  }

  initState(propName: string) {
    const value = this[propName as keyof VueArbotect];

    if (typeof value === 'boolean') {
      this.recurse(
        (n: TreeNodeState) => (n[propName as keyof TreeNodeState] = value)
      );
    } else if (Array.isArray(value)) {
      this.recurse((n: TreeNode) => {
        if (value.some((key: string) => n.key === key)) {
          n[propName as keyof TreeNodeState] = true;
        }
      });
    } else {
      this.recurse((n: TreeNode) => value(n));
    }
  }

  onToggle(node: TreeNode) {
    if (this.options.selectMode === SelectMode.Single) {
      this.recurse((n: TreeNode) => (n.selected = n.key === node.key));
    }

    this.$emit('node-toggle', node);
  }

  recurse(fn: Function) {
    recurse(this.tree, fn);
  }
}
</script>

<style>
* {
  font-family: 'Courier New', Courier, monospace;
}

ul {
  list-style: none;
}
</style>
