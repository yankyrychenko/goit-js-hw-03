const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = `happy`;
user.hobby = `skydiving`;
user.premium = false;

let message = '';
const keys = Object.keys(user);

for (const key of keys) {
  message += `${key}:${user[key]}\n`;
}

console.log(message);
