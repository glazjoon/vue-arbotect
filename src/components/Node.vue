<template>
  <div :id="node.key">
    <div class="node">
      <div class="expander">
        <slot name="expander" v-if="hasChildren" :node="node">
          <Expander
            :expanded="node.expanded"
            @toggle="node.expanded = !node.expanded"
          />
        </slot>
      </div>
      <slot
        name="checkbox"
        :node="node"
        v-if="options.selectMode !== SelectMode.Disabled"
      >
        <input
          type="checkbox"
          v-model="node.selected"
          @change="onCheckboxToggle($event.target.checked)"
        />
      </slot>
      <slot name="label" :node="node">
        {{ node.value }}
      </slot>
    </div>

    <ul v-if="node.expanded && hasChildren">
      <li v-for="child in node.children" :key="child.key">
        <Node v-bind="{ ...$attrs, ...$props }" :node="child" v-on="$listeners">
          <!-- 
            Special thanks to Paul Bastowski for providing an elegant solution!
            https://stackoverflow.com/questions/50891858/vue-how-to-pass-down-slots-inside-wrapper-component/52823029#52823029
          -->

          <!-- Pass on all named slots -->
          <slot v-for="slot in Object.keys($slots)" :name="slot" :slot="slot" />

          <!-- Pass on all scoped slots -->
          <template
            v-for="slot in Object.keys($scopedSlots)"
            :slot="slot"
            slot-scope="scope"
            ><slot :name="slot" v-bind="scope"
          /></template>
        </Node>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import Expander from '@/components/Expander.vue';

import { Options, SelectMode, TreeNode } from '@/models';

import { recurse } from '@/lib/recurse';

@Component({
  name: 'Node',
  components: { Expander }
})
export default class Node extends Vue {
  @Prop() node!: TreeNode;
  @Prop({ default: () => ({}) }) options!: Options;
  @Prop() onToggle!: Function;

  private SelectMode = SelectMode;

  get hasChildren() {
    return this.node.children && this.node.children.length;
  }

  private onCheckboxToggle(state: boolean) {
    if (this.options.selectMode === SelectMode.Cascade) {
      recurse([this.node], (n: TreeNode) => (n.selected = state));
    }

    this.onToggle(this.node);
  }
}
</script>

<style scoped>
.node {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.node > input {
  margin-right: 0.5em;
}

.node > .expander {
  width: 10px;
}
</style>
