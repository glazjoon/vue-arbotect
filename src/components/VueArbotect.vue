<template>
  <ul>
    <li v-for="leaf in tree" :key="leaf.key">
      <Node :node="leaf" :options="normalizedOptions" :onToggle="onToggle">
        <template #expander="{ node }">
          <slot name="expander" :node="node"></slot>
        </template>
        <template #checkbox="{ node }">
          <slot name="checkbox" :node="node"></slot>
        </template>
        <template #label="{ node }">
          <slot name="label" :node="node"></slot>
        </template>
      </Node>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import Node from '@/components/Node.vue';

import { Options, TreeNode, SelectMode, TreeNodeState } from '@/models';

import { recurse } from '@/lib/recurse';

type StateInitiator = boolean | Array<string>;

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

    const isBoolean = typeof value === 'boolean';

    if (isBoolean && propName === 'expanded') {
      this.recurse(
        (n: TreeNode) =>
          (n[propName as keyof TreeNodeState] = n.children.length
            ? value
            : false)
      );
    } else if (isBoolean) {
      this.recurse(
        (n: TreeNode) => (n[propName as keyof TreeNodeState] = value)
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
