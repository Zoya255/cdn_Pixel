$(".form").submit(function(e){
	e.preventDefault();

	$.post('module_easy-ajax/php/ajax.php', $(this).serialize(), function(data){
		console.log( "Works" );
		$(".form-input-submit").val("Отправлено");
	});
})
