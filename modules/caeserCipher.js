export default function caesarCipher(string = "", shift = 0) {
  const cipher = [];

  const upper = /[A-Z]/;
  const lower = /[a-z]/;
  const charCode_a = 97;
  const charCode_z = 122;
  const charCode_A = 65;
  const charCode_Z = 90;

  Array.from(string).forEach((character) => {
    const currentCode = character.charCodeAt();
    if (character.match(lower)) {
      const newCode = ((currentCode + shift) % charCode_z) + charCode_a - 1;
      currentCode + shift > charCode_z
        ? cipher.push(String.fromCharCode(newCode))
        : cipher.push(String.fromCharCode(currentCode + shift));
    } else if (character.match(upper)) {
      const newCode = ((currentCode + shift) % charCode_Z) + charCode_A - 1;
      currentCode + shift > charCode_Z
        ? cipher.push(String.fromCharCode(newCode))
        : cipher.push(String.fromCharCode(currentCode + shift));
    } else {
      cipher.push(character);
    }
  });

  return cipher.join("");
}
