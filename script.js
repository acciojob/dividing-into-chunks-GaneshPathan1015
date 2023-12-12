const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	let sum=0,elem=[], subarr = [];

	for(i=0;i<arr.length;i++){
		sum=sum+arr[i];
		if(sum<=n){
			elem.push(arr[i]);
		}
		else{
			subarr.push(elem);
			elem = [arr[i]];
			sum = arr[i];
		}
	}
	subarr.push(elem);

	return subarr;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
