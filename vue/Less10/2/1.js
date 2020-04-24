let Fvar = new Vue({ 
el: '#Fvar', 
data: { 
text: '', 
words: null, 
}, 
methods: { 
chunkText() { 
this.words = this.text.split(' ') 
}, 
}, 
}); 