import { shallowMount, mount } from '@vue/test-utils';

import Node from '@/components/Node.vue';

import { TreeNode, SelectMode } from '@/models';

import { recurse } from '@/lib/recurse';

const baseKey = 'TestKey';
const baseValue = 'TestValue';

describe('Node.vue Selection', () => {
  it('hides checkboxes on SelectMode.Disabled', () => {
    const node = new TreeNode(baseKey, baseValue);
    const options = { selectMode: SelectMode.Disabled };

    const wrapper = shallowMount(Node, {
      propsData: { node, options }
    });

    expect(wrapper.findAll('input[type="checkbox"]').length).toBe(0);
  });

  // TODO: Only checks single node
  it('selects only clicked nodes on SelectMode.Individual', () => {
    const node = TreeNode.randomize([
      TreeNode.randomize([TreeNode.randomize()])
    ]);

    const options = { selectMode: SelectMode.Individual };

    const wrapper = mount(Node, {
      propsData: { node, options, onToggle: () => {} }
    });

    wrapper.find('input[type="checkbox"]').trigger('click');

    let otherNodesSelected = false;

    recurse([node], (n: TreeNode) => {
      otherNodesSelected = n.key !== node.key && n.selected;
    });

    expect(node.selected && !otherNodesSelected).toBeTruthy();
  });

  it('selects only clicked node on SelectMode.Single', () => {
    const node = TreeNode.randomize([
      TreeNode.randomize([TreeNode.randomize()])
    ]);

    const options = { selectMode: SelectMode.Single };

    const wrapper = mount(Node, {
      propsData: { node, options, onToggle: () => {} }
    });

    wrapper.find('input[type="checkbox"]').trigger('click');

    let otherNodesSelected = false;

    recurse([node], (n: TreeNode) => {
      otherNodesSelected = n.key !== node.key && n.selected;
    });

    expect(node.selected && !otherNodesSelected).toBeTruthy();
  });

  it('selects clicked node and all children recursively on SelectMode.Cascade', () => {
    const node = TreeNode.randomize([
      TreeNode.randomize([
        TreeNode.randomize([
          TreeNode.randomize(),
          TreeNode.randomize(),
          TreeNode.randomize()
        ])
      ]),
      TreeNode.randomize()
    ]);

    const options = { selectMode: SelectMode.Cascade };
  });

  it('does not select any other than clicked node and children on SelectMode.Cascade', () => {});
});
