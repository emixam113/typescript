// challenge.ts
interface User{
    name: string; 
    age?: number; 
    birthday?: string; 
}

const prettyPrintWilder : (user: User[]) => void  = (users : User[]): void => {
    users.map((user: User) => {
        if(user.age !== undefined)
      console.log(`${user.name} is ${user.age} years old`);
    });
};
  
  const wilders: User[] = [];

  const user1 : User = { name: "Pierre", age: 23};
  const user2 : User = { name: "Paul", birthday: "10/02/1990" };
  const user3 : User = { name: "Jacques", age: 25 };
  wilders.push(user1);
  wilders.push(user2);
  wilders.push(user3);
  prettyPrintWilder(wilders);
console.log();

