class Sorter {
  constructor() {
    this.arr=[]// your implementation
    this.length = 0;
    this.compareFunction = function(a,b){return a-b;}
  }

  add(element) {
    this.arr.push(element); // your implementation
    this.length++;
  }

  at(index) {
    return this.arr[index]; // your implementation
  }

  /*length() {
    return this.arr.length(); // your implementation
  }*/

  toArray() {
    return this.arr;  // your implementation
  }

  sort(indices) {
    var tmp = [];
    console.log(this.arr);
    indices = indices.sort();
    for (var i = 0; i < indices.length; i++){
      var j = indices[i];
      console.log(j);
      if(j in this.arr){
        tmp.push(this.arr[j]);
      }
    }
    console.log(tmp);
    tmp = tmp.sort(this.compareFunction);    // your implementation
    for (var i = 0; i < indices.length; i++){
      this.arr[indices[i]] = tmp[i];
    }
    console.log(this.arr);
  }

  setComparator(compareFunction) {
   this.compareFunction = compareFunction;
   }
  }
  

module.exports = Sorter;
  