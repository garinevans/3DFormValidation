(function(){

	$("document").ready(function(){
		
		var counter = 0;
		var itemCoutner =  0;
		var rotation = 90;

		$(".button").click(function(){

			validate();

		});

		$("form").submit(function(e){

			e.preventDefault();
			validate();
			
		});

		$("input[type='text']").blur(function(){
			validateIndividual(this);
		});

		$("input[type='text']").keydown(function(e){
			if(e.keyCode===13){
				validateIndividual(this);
			}
		});

		function validate() {
			$("input[type='text']").each(function(e){
			
				validateIndividual(this);

			});			
		}

		function validateIndividual(obj){
			var $cube = $(obj).siblings(".cube");

			console.log($cube);

			if(obj.checkValidity()){
				$cube.removeClass("cube-error");
				$cube.addClass("cube-valid");
			}else{
				$cube.removeClass("cube-valid");
				$cube.addClass("cube-error");
			}
		}
		
	});

}());