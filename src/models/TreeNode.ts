import randomizeString from '@/lib/randomizeString';
import { TreeNodeState } from '@/models';

export default class TreeNode implements TreeNodeState {
  disabled = false;
  expanded = false;
  selected = false;

  constructor(
    public key: string,
    public value: string,
    public children: TreeNode[] = []
  ) {}

  static randomize(children: TreeNode[] = []) {
    const randomString = randomizeString(5);
    return new TreeNode(`key${randomString}`, `value${randomString}`, children);
  }
}
