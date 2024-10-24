const bitcoin = document.getElementById("bitcoin")
const dogecoin = document.getElementById("dogecoin")
const ethereum = document.getElementById("ethereum")
const priceToggle = document.getElementById("toggle")

var settings = {
    "async" : true,
    "scrossDomain" : true,
    "url" : "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cdogecoin%2Cethereum&vs_currencies=usd%2Cinr&appid=CG-fUdjPEGV26tojQvdFMXv8X3w",
    "method" : "GET",
    "headers" : {}
};

$.ajax(settings).done(function(response){
    console.log(response);
    bitcoin.innerHTML = "$" + response.bitcoin.usd
    dogecoin.innerHTML = "$" + response.dogecoin.usd
    ethereum.innerHTML = "$" + response.ethereum.usd
    priceToggle.addEventListener("change" , () => {
        console.log(priceToggle.checked);
        if (priceToggle.checked){
            bitcoin.innerHTML = "₹" + response.bitcoin.inr
            dogecoin.innerHTML = "₹" + response.dogecoin.inr
            ethereum.innerHTML = "₹" + response.ethereum.inr
        }
        else{
            bitcoin.innerHTML = "$" + response.bitcoin.usd
            dogecoin.innerHTML = "$" + response.dogecoin.usd
            ethereum.innerHTML = "$" + response.ethereum.usd
        }
    })
    
})

