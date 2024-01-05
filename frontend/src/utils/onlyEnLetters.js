export default function onlyEnLettersWithSpace(text) {
  return text.replace(/[^a-zA-Z0-9@!#$%&*().,/\s]/g, "");
}
