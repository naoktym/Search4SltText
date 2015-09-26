$('#save').on('click', function() {

	// TODO Check selected value

	localStorage['defDisp'] = $("input[name='defDisp']:checked").val();
	localStorage['engDic'] = $("input[name='engDic']:checked").val();
	localStorage['othDic'] = $("input[name='othDic']:checked").val();
	localStorage['highSp'] = $("input[name='highSp']:checked").val();
	location.reload();
});

// Initial execute
$(function() {
	var dd = localStorage['defDisp'];
	var ed = localStorage['engDic'];
	var od = localStorage['othDic'];
	var hs = localStorage['highSp'];

	// TODO Check defDisp to exist value
	// TODO Check othDic to exist value
	// TODO If nothing value, set default value

	$("input[name='defDisp'][value='" + dd + "']").prop('checked', true);
	$("input[name='engDic'][value='" + ed + "']").prop('checked', true);
	$("input[name='othDic'][value='" + od + "']").prop('checked', true);
	$("input[name='highSp'][value='" + hs + "']").prop('checked', true);
});