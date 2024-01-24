console.log("algoritmos de ordenamiento");

var array10 = [5, 2, 8, 1, 7, 9, 3, 10, 4, 6, 4, 3];

/* Bubble Sort */

const bubbleSort = (array) => {
  for (let j = 0; j < array.length; j++) {
    for (let i = 0; i < array.length; i++) {
      if (array[i + 1] < array[i]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
  }

  return array;
};

const quickSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let middle = Math.floor((array.length - 1) / 2);
  let pivot = array[middle];

  let rightArray = [];
  let leftArray = [];
  let equalsArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else if (array[i] === pivot) {
      equalsArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  let sortedLeft = quickSort(leftArray);
  let sortedRight = quickSort(rightArray);

  return sortedLeft.concat(equalsArray, sortedRight);
};

const merge = (leftArray, rightArray) => {
  let array = [];
  while (leftArray.length && rightArray.length) {
    if (leftArray[0] < rightArray[0]) {
      array.push(leftArray.shift());
    } else {
      array.push(rightArray.shift());
    }
  }

  return array.concat(leftArray, rightArray);
};

const mergeSort = (array) => {
  if (array.length <= 1) {
    return array;
  }

  let middle = Math.floor(array.length / 2);
  let leftArray = array.slice(0, middle);
  let rightArray = array.slice(middle);

  let sortedLeft = mergeSort(leftArray);
  let sortedRight = mergeSort(rightArray);

  return merge(sortedLeft, sortedRight);
};

const insertSort = (array) => {
  let arrayOrdenado = [array.shift()];
  console.log(arrayOrdenado);
  console.log(array);
  console.log("==========");

  for (let i = 0; i < array.length; i++) {
    for (let j = arrayOrdenado.length - 1; j >= 0; j--) {
      console.log(`${arrayOrdenado[j]} <> ${array[i]}`);
      if (array[i] < arrayOrdenado[j]) {
        arrayOrdenado.unshift(array[i]);
        array.splice(i, 1);
        console.log("ordenado => ", arrayOrdenado);
      } else if (j === 0) {
        arrayOrdenado.push(array[i]);
        array.splice(i, 1);
      }
    }
  }

  console.log("==========");
  return arrayOrdenado.concat(array);
};
var array4 = [5, 2, 8, 1];

console.log(insertSort(array10));
