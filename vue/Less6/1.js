let fp = new Vue({ 
el: '#fp', 
data: { 
items: [9, 5, 4, 1, 2], 
}, 
methods: { 
squared(idx) { 
let sp = this.items.slice();
sp[idx] = sp[idx] ** 2;
this.items = sp;
} 
} 
}); 