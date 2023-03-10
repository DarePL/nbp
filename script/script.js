function query(currency){
    $("#currencyTable").html('');
    let url = "http://api.nbp.pl/api/exchangerates/rates/c/"+currency+"?format=json";
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url:url,
        success: function(data){
            displayCurrency(data)
        }
    });
}

function displayCurrency(api) {
		$("#currencyTable").append(
		"<tr><th>waluta: </th><th>"+api.currency+"</th></tr>"+
		'<tr><th>Kupno:</th><td class="buy">'+api.rates[0].bid+' zł</td></tr>'+
		'<tr><th>Sprzedaż:</th><td class="sell">'+api.rates[0].ask+" zł</td></tr>"+
		"<tr><td>Data publikacji:</td><td>"+api.rates[0].effectiveDate+"</td>/tr>"
		);
}