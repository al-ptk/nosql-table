/**
 * Takes a list of objects and return all properties that show up at least once
 * @param {Array} objList
 * @returns {Array}
 */
export function getAllKeys(objList) {
  let result = [];

  for (const obj of objList) {
    //for each object

    //get the keys list of obj
    const keys = Object.keys(obj);

    // filters out all keys already included in the result
    const nonIncluded = keys.filter((key) => !result.includes(key));

    // add non-included keys to array
    result.push(...nonIncluded);
  }

  return result;
}

/**
 * Returns an array of serialized values, according to a given order.
 * @param {Array} objList
 * @param {Array} propertyOrder
 * @return {Array}
 */
export function vectorizeInOrder(objList, propertyOrder) {
  const result = [];
  for (const object of objList) {
    result.push(propertyOrder.map((key) => object[key]));
  }
  return result;
}
