export default function onlyenLetters(text) {
  return text.replace(/[^a-zA-Z0-9@!#$%&*().,/]/g, "");
}
