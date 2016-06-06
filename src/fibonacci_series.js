'use strict';

function fibonacci_series(n) {
	var arr=new Array();
	for(var i=0;i<n+1;i++)
	{
		if(i==0)
		{
			arr[i]=0;
			arr.push(arr[i]);
			}
		else if(i==1)
		{
			arr[i]=1;
			arr.push(arr[i]);
			}
		else if(i==2)
		{
			arr[i]=1;
			arr.push(arr[i]);
			}
		else
		{
			arr[i]=2*arr[i-1]-arr[i-3];
			arr.push(arr[i]);
			}
		
		}
     return arr;
}

module.exports = fibonacci_series;
