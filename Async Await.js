console.log('person 1:shows ticket')
console.log('person 2:shows ticket')


const preMovie=async ()=>{
    const promiseWifeBringingTickets=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve('tickets'),3000);  //wife bought tickes as per promise after 3s
    });
    const getPopcorn= new Promise((resolve,reject)=> resolve(`popcorn`))
    const addButter= new Promise((resolve,reject)=> resolve(`Butter`))
    const getColdDrinks= new Promise((resolve,reject)=> resolve(`ColdDrinks`))

    let ticket= await promiseWifeBringingTickets;    
    console.log(`Husband : You got me ${ticket}, Now we should go inside`);
    console.log('wife: no i am hungary get me popcorn first')

    let popcorn=await getPopcorn;
    console.log(`Husband : I got ${popcorn} for you. Now let's go inside`);
    console.log(`wife: No i want Butter as well for ${popcorn}`)

    let butter= await addButter;
    console.log(`Husband : I got you ${butter}. Now let's go inside.`)
    console.log(`Wife : Hey we need coldDrinks too .`)
    console.log(`Husband : I'll get that .`)

    let colddrinks=await getColdDrinks;
    console.log(`Husband : Here are ${colddrinks}. Now Please let's go inside we are getting late.`)

    return ticket;
}

//first promise of movies after which rest were made
preMovie().then((m)=>console.log(`Husband shows ${m} to ticket checker`));


console.log('person 4:shows ticket')
console.log('person 5:shows ticket')