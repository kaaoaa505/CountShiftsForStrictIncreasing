function solve(a: number[]): number{
    a.sort();
    let count = 0;
    let pre = a[0];

    for(let i = 1; i < a.length; i++){
        while(a[i] <= pre){
            a[i]++;
            count++;
        }
        pre = a[i];
    }

    return count;
}

let a = [1,1,1];
console.log(solve(a)); // 3

a = [1,2,1];
console.log(solve(a)); // 2

a = [1,2,3];
console.log(solve(a)); // 0