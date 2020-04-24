let Fvar = new Vue({
el: '#Fvar',
data: {
date: "2017-08-14",
id: "",
},
filters: {
formatDate: function(date){
return date.replace(/([0-9]{4})\-([0-9]{2})\-([0-9]{2})/, "$3.$2.$1");
},
},
});