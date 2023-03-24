/* eslint-disable @typescript-eslint/no-namespace */
export namespace VueEvent {
  export interface Input<T extends EventTarget> extends InputEvent {
    tartget: T;
  }

  export interface Keyboard<T extends EventTarget> extends KeyboardEvent {
    tartget: T;
  }
}
