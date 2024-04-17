// Name =Muhammad
// Today Date = 4/6/2024
let friend_guest:string[] =["Rafeeq","Sami","Ali"];
for(let i=0;i<friend_guest.length;i++)
{
    if(friend_guest[i]=='Ali')
    {
console.log("Ali not invited to dinner")
//  replacing new frined invite list 
//  splice first index show 
// splice second 1 delete if 0 then no delete 
friend_guest.splice(3,0,"Muhammad")
    }
    else
    {
        console.log(`i invited to ${friend_guest[i]} dinner `)
    }

   
    
}

console.log(friend_guest)
