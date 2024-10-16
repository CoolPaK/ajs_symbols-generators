import { Character } from './Character';

export class Team {
  constructor() {
    this.members = [];
  }

  add(character) {
    if (character instanceof Character) {
      this.members.push(character);
    } else {
      throw new Error('Must be a character');
    }
  }

  *[Symbol.iterator]() {
    for (const member of this.members) {
      yield member;
    }
  }
}