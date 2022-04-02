interface ActionBase<T = string> {
  type: T;
  [extraProps: string]: any;
}

export default ActionBase;
