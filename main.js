import { User } from './user.js';
import { generateID } from './utils.js';
const user1 = new User("Hibab", "hibabk134@gmail.com");
user1.displayInfo();

console.log(`Generated ID: ${generateID()}`);