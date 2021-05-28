export class Allergies {
  constructor(num) {
    this.num = num;
    this.allergies = {
      eggs: 1,
      peanuts: 2,
      shellfish: 4,
      strawberries: 8,
      tomatoes: 16,
      chocolate: 32,
      pollen: 64,
      cats: 128,
    };
  }

  list() {
    const entries = Object.entries(this.allergies);
    const list = [];
    let num = this.num;
    if (this.num > 256) {
      num -= 256;
    }
    for (let i = entries.length - 1; i >= 0; i--) {
      const [key, value] = entries[i];
      if (num >= value) {
        num -= value;
        list.unshift(key);
      }
      if (num === 0) return list;
    }
  }

  allergicTo(compared) {
    const entries = Object.entries(this.allergies);
    let num = this.num;
    if (this.num > 256) {
      num -= 256;
    }
    for (let i = entries.length - 1; i >= 0; i--) {
      const [key, value] = entries[i];
      if (num >= value) {
        num -= value;
        if (key === compared) return true;
      }
    }
    return false;
  }
}