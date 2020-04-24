let Fvar = new Vue({
el: '#Fvar',
data: {
text: "Text1",
},
methods: {
changeText: function(){
this.text = "Text2 to text1";
},
},
});