'use strict';

function fibonacci_series(n) 
{
	var arr=[0];
	var arrs=[0,1];
	var arrss=[0,1,1];
	
	
		if(n==0)
		{
			return arr;
			}
		else if(n==1)
		{
			return arrs;
			}
		else if(n==2)
		{
		return arrss;
			}
		else
		{
		for(var i=3;i<n+1;i++)
		{
			
			arrss[i]=2*arrss[i-1]-arrss[i-3];
			arrss.push(arrss[i]);
		}
		return arrss;
			}
		
		
     
}

module.exports = fibonacci_series;
