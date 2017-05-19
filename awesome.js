class Post {
	constructor(title,link,author,img,body){
		this.title = title;
		this.link = link;
		this.author = author;
		this.img = img;
		this.body = body;
	}
}

const app = new Vue({

	el: '#root',

	data: {

		keyword: '',

		postlist: [
		
		new Post(
				'First Post: Neuer Gloves',
				'https://vuejs.org',
				'Aaron',
				'https://s7d2.scene7.com/is/image/dkscdn/16ADIACTRNSPRMNBBSCG_Blue_Black_is/',
				 'I like the neuer gloves because the offer the best control and have a good contact latex.'
				),

			new Post(
				'Second Post:Premier SGT',
				'https://vuejs.org',
				'Jamie',
				'http://www.prodirectsoccer.com/productimages/V3_1_Main/150352.jpg',
				'The Premier SGTs feature laser cut grooves for better grip but the latex is not very durable for the premium price you are paying'
				),

			new Post(
				'Third Post: Spiderman Gloves',
				'https://google.com',
				'Jack',
				'https://s-media-cache-ak0.pinimg.com/236x/09/0f/b0/090fb0853ce6a74ebbfea8fba7d723ed.jpg',
				'I like spiderman.'
				),

			new Post(
				'Fourth Post: Oven Mitts',
				'https://vuejs.org',
				'Mom',
				'https://s-media-cache-ak0.pinimg.com/originals/f7/e2/45/f7e2450231194472320127a3dbf6ba41.jpg',
				'These gloves feature great grip on hot trays for my casserole'
				),

			new Post(
				'Fifth Post: Walmart Gloves',
				'https://google.com',
				'Maxx',
				'https://images-na.ssl-images-amazon.com/images/I/815Kv48Y7vL._SY355_.jpg',
				'This is the official Walmart goalie glove, the best in the world.'
				)
		]
	},
	computed: {
		filterlist(){
			return this.postlist.filter((post)=>{
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});
