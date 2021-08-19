import { getScreenWidth } from "./helper";
import { BubbleSort } from "../sortFunctions/BubbleSort";
import { SelectionSort } from "../sortFunctions/SelectionSort";
import { InsertionSort } from "../sortFunctions/InsertionSort";
import { QuickSort } from "../sortFunctions/QuickSort";
import { MergeSort } from "../sortFunctions/MergeSort";

// colors setting
export const comparisionColor = "red";
export const swapColor = "skyblue";
export const sortedColor = "green";
export const pivotColor = "sandybrown";

// time setting
export let swapTime = 1000;
export let compareTime = 500;

// init array
export let sortingArray = initArrayForScreenSize();

export const sortingAlgorithms = [
  { component: BubbleSort, title: "BubbleSort", name: "BubbleSort" },
  { component: SelectionSort, title: "SelectionSort", name: "SelectionSort" },
  { component: InsertionSort, title: "InsertionSort", name: "InsertionSort" },
  { component: QuickSort, title: "QuickSort", name: "QuickSort" },
  { component: MergeSort, title: "MergeSort", name: "MergeSort" }
];

function initArrayForScreenSize() {
  const screenSize = getScreenWidth();
  return [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
}
