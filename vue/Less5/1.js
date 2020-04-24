let Fp = new Vue({ 
el: '#Fp', 
data: { 
items: [-7, 2, 1, 45, 10, 6, 4, 3, 12, 36] 
}, 
methods: { 
filterItems: function() { 
this.items = this.items.filter(item => item > 0 && item < 10); 
} 
} 
}); 