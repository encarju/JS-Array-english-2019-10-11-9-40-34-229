// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
var arrTwice = new Array();
// TODO should output [2,4,6,8,10]
for(let x=0;x<a.length; x++){
	arrTwice.push(a[x]*2)
}	
console.log(arrTwice);


// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1,case2,case3;
for(let x=0;x<colors.length; x++){
	if(x==0){
		case1 = colors[x];
		case2 = colors[x];
		case3 = colors[x];
	}
	else{
		case1 += " "+colors[x];
		case2 += "+"+colors[x];
		case3 += ","+colors[x];
	}	
}	
console.log(case1);
console.log(case2);
console.log(case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((x,y)=>y-x);
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var arrName = new Array;
var arrCount = new Array;
var prev, frequent,temp;

a.sort();
for ( let x = 0; x < a.length; x++ ) {
    if ( a[x] !== prev ) {
        arrName.push(a[x]);
        arrCount.push(1);
    } else {
        arrCount[arrCount.length-1]++;
        }
    prev = a[x];
}

for(let y=0;y<arrCount.length;y++){
	if(y==0){
		temp=arrCount[y];
		frequent = arrName[y];
		
	}
	else if(temp<arrCount[y]){
		temp = arrCount[y];
		frequent = arrName[y];
		
	}
	
}	
console.log(frequent);






