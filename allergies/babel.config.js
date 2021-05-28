const ALLERGIES_CONTENT = {
  'eggs': 1,
  'peanuts': 2,
  'shellfish': 4,
  'strawberries': 8,
  'tomatoes': 16,
  'chocolate': 32,
  'pollen': 64,
  'cats': 128
}

export class Allergies {
  constructor(allergies) {
    this.allergies = allergies;
  }

  list() {
    if(this.allergies >= 256){
      this.allergies = this.allergies - 256;
    }

    let alergias = new Array;
    Object.values(ALLERGIES_CONTENT).reverse().forEach( (allergiNum, item) => {
      if (this.allergies >= allergiNum) {
        this.allergies -= allergiNum;
        alergias.push(Object.keys(ALLERGIES_CONTENT).reverse()[item])
      }
    });
    return alergias.reverse()
  }

  allergicTo(sub) {
    return this.list().join('').includes(sub)
  }

}