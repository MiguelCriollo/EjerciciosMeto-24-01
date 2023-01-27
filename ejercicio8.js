let world=['s','o','n','a','c','n','e','u','c'];
let aux="";
longitud=world.length;
for (let i=0;i<longitud/2;i++){
    aux=world[i];
    world[i]=world[longitud-1-i];
    world[longitud-1-i]=aux
}
console.log(world);