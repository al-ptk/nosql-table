/**
 * Takes a list of objects and return all properties that show up at least once
 * @param {Array} objList
 * @returns {Array}
 */
export function getAllKeys(objList) {
  let result = [];

  for (const obj of objList) {
    // get the keys list of current obj
    const keys = Object.keys(obj);

    // Make array of unregistered keys
    const notInResult = keys.filter((key) => !result.includes(key));

    // add not-repeated keys to result array
    result.push(...notInResult);
  }

  return result;
}

/**
 * @param {Int} length
 * @param {Int} start
 * @param {Int} step
 * @returns An array of integers
 */
export function range(length, start = 0, step = 1) {
  return Object.keys(Array(length).fill(null));
}

export function* counterGenerator(start = 0) {
  while (true) {
    yield start;
    start++;
  }
}
