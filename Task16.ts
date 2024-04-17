let friend_new:string[] =["Rafeeq","Sami","Ali"];
//  first index add
//  exercise 15 array 
console.log(friend_new);

friend_new.splice(0,0,"Muhammad")
friend_new.splice(2,0,"Hamza")
friend_new.push("Sarim")
for(let i=0;i<friend_new.length;i++)
{
    console.log(`i invited to ${friend_new[i]} dinner `)
}

console.log("Biger Dinner Table total people \t"+friend_new.length)

