const User = require('./User.js');

/**
 * The webhook info.
 * @class
 */
class WebhookInfo {
	/**
	 * @param {object} obj The contents of the POST.
	 */
	constructor(obj) {
		/**
		 * The bot/guild ID.
		 * @type {string}
		 */
		this.recipientID = obj.bot || obj.server;

		/**
		 * The timestamp in which the user upvoted.
		 * @type {number}
		 */
		this.timestamp = obj.timestamp;

		/**
		 * The user that upvoted.
		 * @type {User}
		 */
		this.user = new User(obj.user);

		Object.defineProperty(this, 'raw', { value: obj });
	}
}

module.exports = WebhookInfo;