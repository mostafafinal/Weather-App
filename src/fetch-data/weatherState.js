const weatherState = {
  data: null,
  location: null,
  listeners: [],

  setData(newData) {
    this.data = newData;
    this.location = newData.location.name;

    this.notify();
  },

  subscribe(subscriber) {
    this.listeners.push(subscriber);
  },

  notify() {
    this.listeners.forEach((listener) => {
      listener(this.data);
    });
  },
};

export default weatherState;
