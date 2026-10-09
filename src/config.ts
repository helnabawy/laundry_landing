// Every outward link lives here and is set per deploy through PUBLIC_* env
// vars (see .env.example). Until a value is set, the page keeps the control
// visible and points it at the get-the-app section rather than a dead link.

const env = import.meta.env;

const fallback = '#get-app';

const whatsappNumber = (env.PUBLIC_WHATSAPP_NUMBER ?? '').replace(/\D/g, '');

export const links = {
  appStore: env.PUBLIC_APP_STORE_URL || fallback,
  playStore: env.PUBLIC_PLAY_STORE_URL || fallback,
  whatsapp: whatsappNumber ? `https://wa.me/${whatsappNumber}` : fallback,
};

/** Where the launch-list form POSTs `{ contact, lang }` as JSON. */
export const waitlistEndpoint: string = env.PUBLIC_WAITLIST_ENDPOINT ?? '';

export const site = env.PUBLIC_SITE_URL || 'https://example.com';
