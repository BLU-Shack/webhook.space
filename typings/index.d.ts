declare module 'webhook.space' {
	import { EventEmitter } from 'events';
	import { Express } from 'express';

	/** Webhook */
	export class Webhook extends EventEmitter {
		constructor(options?: WebhookOptions);
		private readonly handler: () => Promise<void>

		public app: Express;
		public active: boolean;
		public options: WebhookOptions;
		public readonly events: WebhookEvent[];

		public edit(options?: WebhookOptions, preset?: boolean): WebhookOptions;
		public handle(): boolean;
		public close(): Webhook;
		public open(): Webhook;

		public on(event: 'upvote', listener: (contents: WebhookInfo, headers: Headers) => void): this;
		public on(event: 'error', listener: (error: Error) => void): this;
		public on(event: string, listener: Function): this;

		public once(event: 'upvote', listener: (contents: WebhookInfo, headers: Headers) => void): this;
		public once(event: 'error', listener: (error: Error | string) => void): this;
		public once(event: string, listener: Function): this;
	}

	/** The Webhook Info, used when emitting a webhook POST. */
	export class WebhookInfo {
		constructor(info: any);
		public recipientID: string;
		public timestamp: number
		public user: User
	}

	/** Represents a user through a webhook POST. */
	export class User {
		constructor(user: object);

		public avatar: string;
		public discriminator: string;
		public id: string;
		public shortDescription: string | boolean;
		public username: string;
		public readonly tag: string;

		public toString(): string;
	}

	type WebhookOptions = {
		port?: number,
		path?: string,
		token?: string,
		normal?: boolean
	}

	type WebhookEvent = 'upvote' | 'error';

	type Headers = {
		authorization: string,
		host: string,
		'content-type': string,
		'user-agent': string,
		'content-length': string,
		'accept-encoding': string,
		'x-forwarded-for': string
	}
}