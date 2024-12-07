const weatherState = {
  data: null,
  listeners: [],

  setData(newData) {
    this.data = newData;
    this.notify();
  },

  subscribe(subscriber) {
    this.listeners.push(subscriber);
  },

  notify() {
    this.listeners.forEach((listener) => listener(this.data));
  },
};

export default weatherState;
