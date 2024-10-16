import { Team } from './Team';
import { Character } from './Character';

const team = new Team();

team.add(new Character('Лучник', 'Bowman', 50, 1, 40, 10));
team.add(new Character('Воин', 'Swordsman', 60, 1, 50, 20));
team.add(new Character('Маг', 'Mage', 40, 1, 30, 5));

for (const member of team) {
  console.log(`Персонаж: ${member.name}, Тип: ${member.type}, Здоровье: ${member.health}`);
}