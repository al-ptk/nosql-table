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
 *
 */
export function columnfy(objList) {
  const properties = getAllKeys(objList);
  const vectors = {};

  for (const property of properties) {
    vectors[property] = [];
    for (const obj of objList) {
      vectors[property].push(obj[property] || '');
    }
  }

  return vectors;
}

/**
 *
 */
export function swapPropertyName(obj, oldProperty, newProperty) {
  const newObj = { ...obj };
  newObj[newProperty] = newObj[oldProperty];
  delete newObj[oldProperty];
  return newObj;
}

/**
 *
 */
export function range(length, start = 0, step = 1) {
  return Object.keys(Array(length).fill(null));
}

/**
 *
 * @param {*} vectorObj
 * @param {*} objAmount
 * @param {*} propertyOrder
 * @returns
 */
export function objectify(vectorObj, objAmount, propertyOrder) {
  let result = [];
  for (let index = 0; index < objAmount; index++) {
    const obj = {};
    for (const property of propertyOrder) {
      let value = vectorObj[property][index];
      if (value) {
        let newValue = isStringifiedArray(value)
          ? destringifyArray(value)
          : value;
        obj[property] = newValue;
      }
    }
    result.push(obj);
  }
  return result;
}

function isStringifiedArray(string) {
  return string[0] === '[' && string[string.length - 1] === ']';
}

function destringifyArray(string) {
  let result = string
    .slice(1, string.length - 1)
    .split(',')
    .map((elem) => {
      let newElem = elem.trim();
      // if newElem is string
      if (newElem[0] === "'" && newElem[newElem.length - 1] === "'") {
        return newElem.slice(1, -1);
      }
      // if newElem is a number
      if (!isNaN(parseFloat(newElem))) {
        return parseFloat(newElem);
      }
      // else
      return newElem;
    });

  return result;
}
