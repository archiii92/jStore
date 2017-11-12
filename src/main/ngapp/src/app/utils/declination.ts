  /**
   * Declination of russian words.
   * @param words Tuple for three declination variants of one word (1, 2-4, 5+).
   * @param n The number relative to which the declination is made.
   */
export function declination(words: [string, string, string], n: number): string {
    return words[(n % 10 === 1 && n % 100 !== 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && ( n % 100 < 10 || n % 100 >= 20) ? 1 : 2)];
}
