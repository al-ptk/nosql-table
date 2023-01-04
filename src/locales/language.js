import languages from './languages.json';

const langEnum = {
  'en-US': 0,
  'pt-BR': 1,
};

// language is the object found at instances[index]
// the index is based on the navigator language and matched on langEnum
const language = languages.instances[langEnum[navigator.language] ?? 0];

export { language };
