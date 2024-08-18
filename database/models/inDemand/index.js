import mongoose from '../../connnect.js';

let Schema = mongoose.Schema;

const Issues = new Schema(
	{
		co_code: {
			type: String,
			trim: true,
			required: true
		},
		issuecode: {
			type: String,
			trim: true
		},
		issue_type: {
			type: String
		},
		logo: {
			type: String,
			default: null
		},
		tag: {
			type: String,
			default: null
		},
		tag_color: {
			type: String,
			default: null
		},
		bottom_tag: {
			type: String,
			default: null
		},
		badge: {
			type: String,
			default: null
		},
		badge_color: {
			type: String,
			default: null
		},
		highlighted_badge: {
			type: String,
			default: null
		},
		badge_color_left: {
			type: String,
			default: null
		},
		badge_color_right: {
			type: String,
			default: null
		},
		card_type: {
			type: Number,
			default: 0, // for small card
			enum: [ 1, 0 ]
		},
		card_color_left: {
			type: String,
			default: null
		},
		card_color_right: {
			type: String,
			default: null
		},
		report_file: {
			type: String,
			default: null
		},
		video_link: {
			type: String,
			default: null
		},
		consideration_image: {
			type: String,
			default: null
		},
		expiry_date: {
			type: Date
		},
		expected_listing_gains: {
			type: String,
			default: null
		},
		promoters_holdings_before: {
			type: String,
			default: null
		},
		promoters_holdings_after: {
			type: String,
			default: null
		},
		company_health_before_year: {
			type: String,
			default: null
		},
		company_health_after_year: {
			type: String,
			default: null
		},
		company_health_before_type: {
			type: String,
			default: null
		},
		company_health_after_type: {
			type: String,
			default: null
		},
		in_demand: {
			type: Boolean,
			default: false
		},
		subscriptions: {
			type: String,
			default: null
		},
		invest_within: {
			type: String,
			default: null
		},
		invest_minimum_amount: {
			type: String,
			default: null
		},
		invest_minimum_shares: {
			type: String,
			default: null
		},
		upper_tag_logo: {
			type: String,
			default: 'fire', // for small card
			enum: [ 'fire', 'percentage', 'rupees' ]
		},
		know_more: {
			type: String,
			default: null
		},
		apply_button_text: {
			type: String,
			default: null
		}
	},
	{
		timestamps: true
	}
);

export default mongoose.model('Issues', Issues);
