import { Assertion } from './assertion';

export class StringLibrary {

  public static encondeAsURLIndetifier(identifier: string): string {

    Assertion.assert(!identifier.includes('¯') &&
      !identifier.includes('―') &&
      !identifier.includes('¢') &&
      !identifier.includes('§') &&
      !identifier.includes('¿') &&
      !identifier.includes('¤') &&
      !identifier.includes('±') &&
      !identifier.includes('÷') &&
      !identifier.includes('¦'),
      'Identifier has one or more invalid characters for encoding.');

    identifier = identifier.replace(/_/gi, '¯');   // Protect underscores with macrons
    identifier = identifier.replace(/\//gi, '_');  //identifier.replace slashes with underscores

    identifier = identifier.replace(/-/gi, '―');   // Protect hypens with horizontal bars (U+2015)
    identifier = identifier.replace(/ /gi, '-');   //identifier.replace spaces with hypens

    identifier = identifier.replace(/%/gi, '¢');   // Protect percentage with cent sign
    identifier = identifier.replace(/&/gi, '§');   //identifier.replace ampersands with section signs
    identifier = identifier.replace(/\?/gi, '¿');  //identifier.replace question marks with initial question marks
    identifier = identifier.replace(/=/gi, '¤');   //identifier.replace equal with currency sign ¤
    identifier = identifier.replace(/\+/gi, '±');  //identifier.replace plus with currency plus-minus
    identifier = identifier.replace(/:/gi, '÷');   //identifier.replace colons with division sign
    identifier = identifier.replace(/\\/gi, '¦');  //identifier.replace back slashes with broken bars
    return identifier;
  }

}
