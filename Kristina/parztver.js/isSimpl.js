let max=100;
let sum=0;
let count = 0;
let isSimple;
  for (x = 2;  x <= max; x++){
      
     
    isSimple = true;
    for (y = 2;  y < x; y++){
        if (x % y == 0){
            isSimple = false;
            continue;
        }
    }
    if (isSimple){
        console.log(x + ', ');
        count++;
        sum+=x;
       
    }
   
}
console.log(count +"count");
console.log(sum +"sum");
