export function healthOfCharacters(arr) {
    return arr.sort((a, b) => b.health - a.health);
  }