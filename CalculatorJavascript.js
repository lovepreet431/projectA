
var $ = function (id) {
    return document.getElementById(id);
};

function calculateDV(price, discount) {
    var totalprice = price;
	{
        totalprice = price - (price * discount / 100);
    }
    totalprice = totalprice.toFixed(2);
    return totalprice;
}

function calculateDollar(price,discount) {
	var discountDollar;
	{
	discountDollar = price- (price - (price * discount/100));
	}
	discountDollar = discountDollar.toFixed(2);
	return discountDollar;
}

function finalentries () {
    var price = parseFloat ( $("productprice").value );
    var discount = parseFloat ( $("discper").value );
   
    
    if (isNaN(price) || isNaN(discount) ) {
        alert("Please enter the value first");
    }
    else if (0 < price && price > 999) {  
		alert("Item price must be greater than 0 and less than 1000");
    }
	else if (0 < discount && discount > 69) {
		alert("Discount % must be greater than 0 and less than 70");
	}
	
}
window.onload = function () {
    $("calculate").onclick = finalentries;
	   
};

