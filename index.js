const uri = "mongodb+srv://pepealkalina:pepepilas@firstdb.obvg7ok.mongodb.net/?retryWrites=true&w=majority";

const mongoose = require('mongoose');
const { User } = mongoose;

main().catch(err => console.log(err));

async function main() {
	await mongoose.connect(uri);
	
	User
}