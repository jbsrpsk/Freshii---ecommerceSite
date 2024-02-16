document.getElementById('scrollToShopping').addEventListener('click', function() {
    var productSection_el = document.getElementById('productSection');
    productSection_el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    console.log("clicked");
});