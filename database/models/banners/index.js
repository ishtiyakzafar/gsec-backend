import mongoose from '../../connnect.js';

let Schema = mongoose.Schema;

const Banners = new Schema(
	{
		name: {
			type: String,
			required: true
		},
		bannerfile: {
			type: String,           
			default: null
		},
	},
	{
		timestamps: true
	}
);

export default mongoose.model('Banners', Banners);
