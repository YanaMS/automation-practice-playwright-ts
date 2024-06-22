function RandomNegativeNumber(max: number, min:number):number{
    return -Math.random() * (max - min) - min;
}

console.log(RandomNegativeNumber(2, 11));

const RandomPositiveNumber = (max: number, min:number):number => Math.random() * (max - min) + min;

console.log(RandomPositiveNumber(2, 11));

function numbersMultiplication(max1: number, min1:number, max2: number, min2:number){
    const randomNegativeNumber = RandomNegativeNumber(max1, min1);
    const randomPositiveNumber = RandomPositiveNumber(max2, min2);
    return randomNegativeNumber*randomPositiveNumber;

}

console.log(numbersMultiplication(2, 11, 3, 8));