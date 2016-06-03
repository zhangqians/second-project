'use strict';

function fibonacci_series(n) {
	var arr=[];
	for(var i=0;i<n+1;i++)
	{
		if(i==0)
		{
			arr[i]=0;			
			}
		else if(i==1)
		{
			arr[i]=1;
			}	
		else
		{
			arr[i]=fibonacci_series(i-1)+fibonacci_series(i-2);
			}
			arr.push(arr[i]);
		}
     return arr;
}

module.exports = fibonacci_series;
