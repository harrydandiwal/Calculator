var app = angular.module("calculator", []);
app.controller("calculatorCtrl", calculatorCtrl);

function calculatorCtrl()
{
	
	
	this.result = 0;
		this.clickoperation = function(button)
		{
			
			this.operation = button;
			
		}
	this.calculateResult = function()
	
	{
		if (this.operation == '+')
			{
				this.result = this.a + this.b;
			}
		if (this.operation == '-')
			{
				this.result = this.a - this.b;
			}
		if (this.operation == 'x')
			{
				this.result = this.a * this.b;
			}
		if (this.operation == '/')
			{
				this.result = this.a / this.b;
			}
		if (this.operation == '^')
			{
				this.result = this.a * this.a;
			}
		if (this.operation == 'Sqrt')
			{
				this.result = Math.sqrt(this.a);
				
			}
		
	}
	
	
}