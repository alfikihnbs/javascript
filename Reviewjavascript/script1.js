for (let a = 1; a <= 100; a++){
    let bilangan_prima = true;
    if (a === 1){
        bilangan_prima = false;
    } else{
        for (let b = 2; b < a; b++) {
            if (a % b === 0) {
                bilangan_prima = false;
                break;
            }
        }
    }
    if (bilangan_prima){
        console.log(a + " adalah bilangan prima ");
    } else {
        console.log(a);
    }
}