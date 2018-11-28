const array = [3, 2, 13, 24, -1, 11, 15];

/**
 * 冒泡排序是一种简单的排序算法。
 * 它重复地走访过要排序的数列，一次比较两个元素，如果它们的顺序错误就把它们交换过来。
 * 走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
 * 这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
 */
function bubbleSort(arr) {
  let arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      let temp;
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

/**
 * 选择排序(Selection-sort)是一种简单直观的排序算法。
 * 它的工作原理：
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，
 * 然后，再从剩余未排序元素中继续寻找最小（大）元素，
 * 然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。
 */
function selectSort(arr) {
  let arrLength = arr.length;
  let minIndex, tempMin;
  for (let i = 0; i < arrLength - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    tempMin = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = tempMin;
  }
  return arr;
}

/**
  插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

  一般来说，插入排序都采用in-place在数组上实现。具体算法描述如下：
  从第一个元素开始，该元素可以认为已经被排序；
  取出下一个元素，在已经排序的元素序列中从后向前扫描；
  如果该元素（已排序）大于新元素，将该元素移到下一位置；
  重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；
  将新元素插入到该位置后；
  重复步骤2~5。
 */

function insertSort(arr) {
  const length = arr.length;
  let current, preIndex;
  for (let i = 1; i < length; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
    }
    arr[preIndex + 1] = current;
  }
  return arr;
}

console.table(insertSort(array));
