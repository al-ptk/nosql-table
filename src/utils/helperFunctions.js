/**
 * Takes a list of objects and return all properties that show up at least once
 * @param {Array} objList
 * @returns {Array}
 */
export function getAllKeys(objList) {
  let result = [];
  for (const obj of objList) {
    const keys = Object.keys(obj);
    const notInResult = keys.filter((key) => !result.includes(key));
    result.push(...notInResult);
  }
  return result;
}
