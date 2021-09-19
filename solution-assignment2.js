

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
  
let resArray = [];
createArrayOfArrays(countries);
function createArrayOfArrays(countries) {
    countries.map((item) => {
        const start = item.split("").splice(0,3).join("");
        const countrieslength = item.length;
        return resArray.push([item + " " + start+" "+countrieslength]);
      }
    )}
    console.log(resArray);

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
  const scoresGreaterThan85 =(users) =>{
  const result = users.filter ((item) => item.scores > 85)
  console.log(result);
} 
scoresGreaterThan85(users);

// const agesGreaterThan18 =(users) =>{
//   const ages = users.filter ((item) => item.age > 18)
//   console.log(ages);
// }
// agesGreaterThan18(users);

// const skillsOnlyHtm = (users) =>{
 
//   const skill = users.filter((item) =>item.skills.length == 1 )
//   console.log(skill);
// }
// skillsOnlyHtm(users);

// const nameBeganWith = (users) =>{
//   const names = users.filter((item ) => item.name.charAt(0) == 'M')
//   console.log(names);
// }
// nameBeganWith(users);

//Write a function which addUser  to the user array only if the user does not exist.

const addUser = (user) =>{
  const index= users.findIndex(x => x.name == user.name)
  if(index === -1){
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

