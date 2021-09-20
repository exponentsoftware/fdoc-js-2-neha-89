

// 1. Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.
const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
  ]
  


//	Write a function which filter users who has  scoresGreaterThan85, 
const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];
  const scoresGreaterThan85 =(users) => {
  const result = users.filter((item) => item.scores > 85)
  return result;
} 
console.log(scoresGreaterThan85(users));

// const agesGreaterThan18 =(users) =>{
//   const ages = users.filter ((item) => item.age > 18)
//   return ages;
// }
// console.log(agesGreaterThan18(users));

// const havingOneSkillsOnly = (users) =>{ 
 
//   const skill = users.filter((item) =>item.skills.length == 1 )
//   return skill;
// }
// console.log( havingOneSkillsOnly (users));

// const nameBeganWithM = (users) =>{
//   const names = users.filter((item ) => item.name.charAt(0) === 'M') 
//   return names;
// }
// console.log(nameBeganWithM(users));

//Write a function which addUser  to the user array only if the user does not exist.

const addUser = (user) =>{
  const index = users.findIndex(x => x.name == user.name)
  if(index === -1){  // array.find()
    users.push(user);
  }
  else{
    console.log("user already exists");
  }
}
let user = {name:"neha",scores:90,skills:['HTM', 'CSS', 'JS'],age:20};
addUser(user);
console.log(users);

//Write a function which editUser if the user exist in the users array. 
//if the user exist
//edit user
