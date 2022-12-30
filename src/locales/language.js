import languages from './languages.json';

const langEnum = {
  'en-US': 0,
  'pt-BR': 1,
};

export let language =
  languages.instances[langEnum[navigator.language]] ??
  languages.instances['en-US'];
