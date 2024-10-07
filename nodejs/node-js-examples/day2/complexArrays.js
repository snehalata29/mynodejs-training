let users = [
    {id: 1001, name:"Alex", phone: 9938484, 
        address: {state:"KA",city:"BLR", pin:560001, geo:{long:"88.99", lat:"01.04"}}},
    {id: 2001, name:"Brad", phone:889823},
    {id: 2002, name:"Charles", phone:9900808, 
        address: {state:"KA",city:"MYS", pin:560021, geo:{long:"80.19", lat:"01.34"}}},
];
// above variable is having a complex array
// try to iterate the complex array and print each property & values in the console
users.forEach((user, index)=>{
    let address = user.address;
    console.log(`Id=${user.id},Name=${user.name},State=${address?.state},Long=${address?.geo.long}`)
    console.log('__________________________________________________________________________')
});