
// Question 1
var averagePrice = function(array){
  var total = 0;

  _.each(array,function(item, idx, arr){

      total+= item["price"];
    });

  return total/array.length;

}

$('#answer1').html("$" + averagePrice(items).toFixed(2));



//Question 2 note be careful of GBP
//var priceRange = _.chain(items).filter(function(item){return (item["price"] >= 14.00 && item["price"] <=18.00 && item["currency_code"] === "USD")}).pluck('title');
var priceRange = items.filter(function(item){
  return (item["price"] >= 14.00 && item["price"] <=18.00 && item["currency_code"] === "USD")
});

var mappedRange = priceRange.map(function(item){
  return item.title;
});

$('#answer2').html("[ " + mappedRange + " ]");

//Question 3
var gbp = _.chain(items).filter(function(item){
  return (item["currency_code"] === "GBP")
});
var gbpTitle = _.chain(gbp).pluck('title').value();
var gbpPrice = _.chain(gbp).pluck('price').value();
$('#answer3').html( gbpTitle + " $" + gbpPrice );

//Question 4


var wooden = _.chain(items).filter(function(item){
  return _.contains(item.materials, 'wood');
}).pluck('title').value();

$('#answer4').html(wooden);
//Question 5

/*var eightOrMore = items.filter(function(item){
  return (item.materials.length >= 8);
});*/

var eightOrMore= _.chain(items).filter(function(item){return item.materials.length >= 8;}).map(function(item){ return {title: item.title, materials: item.materials}}).value();

var listeightOrMore= function(array){
  var str= "";
_.each(array,function(item, idx, arr){

    str+= "<b>Item: </b>" + item.title + "<b> Number of Materials:</b> "+ item.materials.length + " <b>Materials: </b>" + item.materials + "<br>";
  });
  return str;
}
$("#answer5").html(listeightOrMore(eightOrMore));
// Question 6

var madeBy = function(array){
  var madeByTotal = 0;

  _.each(array,function(item, idx, arr){
    if(item["who_made"] === "i_did"){
      madeByTotal+= 1;
    }
    });

  return madeByTotal;

}

$('#answer6').html(madeBy(items));
