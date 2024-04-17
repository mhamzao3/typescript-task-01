// change program Task16.ts 
//  expand this 
let friend_ne =["Rafeeq","Sami","Sarim","Hamza"];
//  add start index first 
// friend_ne.splice(0,0,"Muhammad")
// friend_ne.splice(2,0,"Hamza")
// friend_ne.push("Sarim")
let show_new:boolean=true;

// var index = friend_ne.indexOf('Sami');
// console.log(index)
let index= friend_ne.length;
console.log(index)
console.log("you can invite only two people for dinner")
for(let i=0;i<friend_ne.length;i++)
{
    if(index>2) 
  {
    console.log(` you’re sorry you can’t invite them to dinner. ${friend_ne[0]}`)
    friend_ne.splice(0,1)
   }
  
   

}

console.log(` you are invite them to dinner. ${friend_ne}`)
friend_ne.pop()
friend_ne.pop()
console.log(friend_ne)
//console.log("Biger Dinner Table total people "+friend_ne.length)

