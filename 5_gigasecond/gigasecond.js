export default class Gigasecond {
  constructor(d) {
    this.d = d;
  }

  date() {
    const dateValue = this.d.valueOf();
    const gigasecond = 1000000000000;
    return new Date(dateValue + gigasecond);
  }
}
