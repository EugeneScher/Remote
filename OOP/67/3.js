class Rectangle { 
constructor(width, height) { 
this.width = width; 
this.height = height; 
this.elem = document.createElement('div'); 
this.elem.style.width = this.width + 'px'; 
this.elem.style.height = this.height + 'px'; 
this.elem.style.border = '1px solid red'; 
document.body.appendChild(this.elem) 
} 
setWidth(width) { 
this.elem.style.width = width + 'px'; 
} 
setHeight(height) { 
this.elem.style.height = height + 'px'; 
} 
gettWidth() { 
alert(this.elem.style.width); 
} 
gettHeight() { 
alert(this.elem.style.Height); 
} 
} 
let elem2 = new Rectangle(100, 200); 
elem2.gettWidth()