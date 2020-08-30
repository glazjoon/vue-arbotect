import { shallowMount } from '@vue/test-utils';

import Node from '@/components/Node.vue';
import TreeNode from '@/models/TreeNode';
import SelectMode from '@/models/SelectMode';

const testChildRender = (baseKey: string, baseValue: string, count: number) => {
  const children = Array.from(Array(count).keys()).map(
    n => new TreeNode(baseKey + n, baseValue + n)
  );

  const node = new TreeNode(baseKey, baseValue, children);
  const options = { selectMode: SelectMode.Disabled };

  const wrapper = shallowMount(Node, {
    propsData: { node, options }
  });

  expect(wrapper.findAllComponents(Node).length).toBe(count + 1);
};

const baseKey = 'TestKey';
const baseValue = 'TestValue';

describe('Node.vue rendering', () => {
  it('renders props.node.value when passed', () => {
    const node = new TreeNode(baseKey, baseValue);

    const wrapper = shallowMount(Node, {
      propsData: { node }
    });

    expect(wrapper.text()).toMatch(baseValue);
  });

  it('renders single child when passed', () =>
    testChildRender(baseKey, baseValue, 1));

  it('renders multiple children when passed', () =>
    testChildRender(baseKey, baseValue, 3));
});
