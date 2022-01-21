var essai1= new Vue({
	el:'#essai1',
	data:{
		message:'Hello Vue!'
	}
});


var essai2 = new Vue({
	el: '#essai2',
	data:{
		message: 'Texte affiché dans un title'+ new Date().toLocaleString
	}

});

// 50% de chances que se soit true ou false 
var trueFalse = Math.random() < 0.5

var essai3 = new Vue({
	el: '#essai3',
	data:{
		isTrue : trueFalse
	}
});


var arrayAssociatif = [
	{key: 'un'},
	{key : 'deux'},
	{key :'trois'},
	{key :'quatre'}
];
var arrayNormal = ['un','deux','trois','quatre'];
var essai4 = new Vue({
	el : '#essai4',
	data:{
		items : arrayAssociatif,
		items2 : arrayNormal,
	}
});





var essai5 = new Vue({
	el: '#essai5',
	data: {
		text: 'blablabla'
	},
	methods : {
		reverse : function () {
			this.text = this.text.split('').reverse().join('')
		  },
		  promptt : function(){
			this.text = prompt('content ?');
		  }
	}
	
});



var essai6 = new Vue({
	el: '#essai6',
	data: {
		parentNormal: "parentNormal",
		parentAsso: "parentAsso",
		items: arrayNormal,
		items2: arrayAssociatif
	},
	methods : {
		addInArray : function(){
			var newItem = prompt('new item ?');
			this.items.push(newItem);
			this.items2.push({key: newItem});
		}
	}
});