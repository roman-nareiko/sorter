class Sorter {
  constructor() {
    this._array = [];
    this._comparator = (a, b) => a - b;
  }

  add(element) {
    this._array.push(element);
  }

  at(index) {
    return this._array[index];
  }

  get length() {
    return this._array.length;
  }

  toArray() {
    return this._array;
  }

  sort(indices) {
    let elements_to_sort = [];
    
    indices.sort();

    indices.forEach(element => {
      elements_to_sort.push(this._array[element])
    });

    elements_to_sort.sort(this._comparator);

    indices.forEach((v, i) => {
      this._array[v] = elements_to_sort[i];
    });
  }

  setComparator(compareFunction) {
    this._comparator = compareFunction;
  }
}

module.exports = Sorter;