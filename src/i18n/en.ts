// Copy for the English page. App-facing labels (stage names, buttons, fee
// lines) are lifted verbatim from laundry_app/lib/l10n/app_en.arb so the
// page and the app say the same thing.
export const en = {
  lang: 'en',
  dir: 'ltr',
  meta: {
    title: 'Laundry: wash, iron & delivery to your door',
    description:
      'Book a laundry pickup from your phone, see the price before you book or after we count, and follow every stage until it is back at your door.',
  },
  brand: 'Laundry',
  tagline: 'Wash, iron & delivery to your door',
  nav: {
    how: 'How it works',
    ways: 'Ways to order',
    clean: 'What we clean',
    faq: 'Questions',
    getApp: 'Get the app',
    switchLabel: 'عربي',
    switchHref: '/ar/',
    switchLang: 'ar',
    skip: 'Skip to content',
  },
  hero: {
    title: 'Your laundry, collected and brought back clean.',
    lead: 'Book a pickup from your phone. A driver collects from your door, the laundry does the rest, and you can see exactly where your order is until it comes home.',
    whatsapp: 'Message us on WhatsApp',
    sample: 'App screens shown with sample data',
    photoAlt: 'White linen drying on a line in daylight',
  },
  store: {
    apple: { small: 'For iPhone', big: 'App Store' },
    google: { small: 'For Android', big: 'Google Play' },
  },
  demo: {
    title: 'The whole order, in the app you carry.',
    steps: [
      {
        title: 'Choose what to clean',
        body: 'Shop priced items and see your total before you book, or send a quick order and the laundry prices it after counting.',
      },
      {
        title: 'Pick when we come',
        body: 'Choose a pickup window and a return window. Standard, or VIP for priority processing.',
      },
      {
        title: 'Watch it move',
        body: 'Five stages, one strip. Every change reaches you as a notification, so you never have to ask where your order is.',
      },
      {
        title: 'Back at your door',
        body: 'Folded, returned, done. Pay by card, pay later with tabby, or pay the driver on delivery.',
      },
    ],
  },
  stages: ['Collection', 'Picked up', 'Inspection', 'Cleaning', 'Return'],
  ways: {
    title: 'Two honest ways to order.',
    lead: 'Neither one shows a number it can’t stand behind.',
    shop: {
      name: 'Shop our products',
      promise: 'Price before you book',
      body: 'Pick items from the laundry’s price list and add quantities. The total you confirm is the total you pay. Nothing changes it afterwards.',
      ticket: 'Sample order',
      lines: [
        ['T-shirt', '4', '8.00'],
        ['Shirt', '2', '20.00'],
        ['Trouser', '1', '15.00'],
      ],
      subtotal: 'Subtotal',
      vip: 'VIP surcharge',
      cod: 'Cash on delivery fee',
      total: 'Total',
      sampleNote: 'Sample prices. Each laundry sets its own.',
    },
    quick: {
      name: 'Quick order',
      promise: 'Priced after we count',
      body: 'Not sure what’s in the bag? Tell us what needs cleaning and how. The laundry counts and prices it after pickup, and the invoice comes to your phone.',
      amount: 'Amount',
      amountWaiting: 'Set after inspection',
      steps: ['What to clean', 'Service type', 'Service level', 'Pickup & delivery'],
      report:
        'Stains or damage found while sorting are always reported to you before cleaning starts. You review the condition report before you pay.',
    },
  },
  clean: {
    title: 'What we clean',
    lead: 'From a single shirt to the curtains in the living room.',
    items: [
      { glyph: 'clothes', name: 'Clothes', services: 'Wash only · Wash & iron · Iron only', img: '/images/cat-clothes.webp', alt: 'Garments on a clothes rail' },
      { glyph: 'textiles', name: 'Home textiles', services: 'Wash & iron', img: '/images/cat-textiles.webp', alt: 'White bed linen' },
      { glyph: 'curtains', name: 'Curtains', services: 'Take-down, wash & iron', img: '/images/cat-curtains.webp', alt: 'A beige curtain with light behind it' },
      { glyph: 'carpets', name: 'Carpets', services: 'Deep cleaning & wash', img: '/images/cat-carpets.webp', alt: 'A rug in raking light' },
    ],
  },
  levels: {
    title: 'Pick the pace. Pick how to pay.',
    standard: {
      name: 'Standard',
      points: ['Standard turnaround', 'Pickup and return slots set by your laundry'],
    },
    vip: {
      name: 'VIP',
      points: ['Priority processing', 'Shorter turnaround', 'Surcharge shown before you confirm'],
    },
    payTitle: 'Payment',
    pay: [
      ['Card', 'Paid on a secure page'],
      ['Pay later with tabby', 'Split into interest-free payments'],
      ['Pay on delivery', '+AED 5 handling fee'],
    ],
  },
  faq: {
    title: 'Questions, answered',
    items: [
      {
        q: 'When do I know the price?',
        a: 'Shop orders show the full total, including any VIP surcharge or cash-on-delivery fee, before you confirm. Quick orders are priced after the laundry counts your items, and the invoice arrives in the app before anything is cleaned.',
      },
      {
        q: 'What if something is stained or damaged?',
        a: 'Anything found while sorting a quick order is reported to you first, on the invoice. You confirm you’ve reviewed it before choosing how to pay, which is the step that starts cleaning.',
      },
      {
        q: 'How do I know where my order is?',
        a: 'The app shows five stages: Collection, Picked up, Inspection, Cleaning and Return. Each change is sent as a notification, and tapping it opens your order.',
      },
      {
        q: 'Can I choose the laundry?',
        a: 'Yes. When more than one laundry serves your area you choose one after signing in, and you can change it from Home. Each laundry has its own prices and time slots.',
      },
      {
        q: 'Who do I ask about an invoice?',
        a: 'Open “Question about this invoice?” in the app. Common answers come first, then our assistant, and a team member if you still need one.',
      },
    ],
  },
  close: {
    title: 'Hand it over.',
    lead: 'Get the app and book your first pickup.',
    listTitle: 'Not in the app yet? Join the launch list.',
    listLabel: 'Email or UAE mobile',
    listPlaceholder: 'you@example.com · 05X XXX XXXX',
    listSubmit: 'Join the list',
    listSending: 'Joining…',
    listDone: 'You’re on the list. We’ll be in touch when pickups open near you.',
    listInvalid: 'Enter an email address, or a UAE mobile number starting with 05.',
    listFailed: 'We couldn’t add you just now. Try again, or message us on WhatsApp.',
  },
  footer: {
    rights: 'Laundry. All rights reserved.',
    language: 'Language',
  },
  phone: {
    time: '9:41',
    home: 'Home',
    orderingFrom: 'Ordering from',
    laundry: 'Marina Laundry',
    change: 'Change',
    nothing: 'No items in custody',
    nothingNote: 'Book a collection and we’ll pick up from your door.',
    quickOrder: 'Quick order',
    shop: 'Shop our products',
    tabs: ['Home', 'My orders', 'Account'],
    shopTitle: 'Shop',
    chips: ['All', 'Clothes', 'Home textiles', 'Carpets'],
    products: [
      ['T-shirt', 'Wash & iron', 'AED 2'],
      ['Shirt', 'Wash & iron', 'AED 10'],
      ['Trouser', 'Wash & iron', 'AED 15'],
      ['Bedsheet', 'Wash & iron', 'AED 12'],
      ['Duvet cover', 'Wash & iron', 'AED 20'],
      ['Towel', 'Wash', 'AED 4'],
    ],
    cart: 'Your cart',
    cartItems: '7 items',
    cartTotal: 'AED 43.00',
    scheduleTitle: 'Pickup & delivery',
    pickupTime: 'Pickup time',
    deliveryTime: 'Delivery time',
    days: [['Thu', '9'], ['Fri', '10'], ['Sat', '11'], ['Sun', '12']],
    slots: ['08:00–10:00', '10:00–12:00', '16:00–18:00'],
    deliverySlot: 'Sat 11 · 18:00–20:00',
    vipTitle: 'VIP service',
    vipSub: 'Priority processing, delivered within 24 hours',
    continue: 'Continue',
    orderTitle: 'Order',
    serial: '1042',
    statuses: ['Driver assigned', 'Picked up', 'At the laundry', 'Processing', 'Out for delivery'],
    pickupLabel: 'Pickup',
    deliveryLabel: 'Delivery',
    pickupWhen: 'Thu 9 · 10:00–12:00',
    driverLabel: 'Driver',
    driverName: 'Yousef',
    totalLabel: 'Total',
    totalValue: 'AED 54.45',
    paidNote: 'Paid by card',
    invoiceHelp: 'Question about this invoice?',
    itemsLabel: 'Items',
    deliveredTitle: 'Delivered',
    deliveredBody: 'Order 1042 is back at your door.',
    rate: 'How did we do?',
    rateBody: 'Rate the cleaning and the delivery of this order.',
    reorder: 'Reorder',
    previous: 'Your previous orders',
    viewAll: 'View all',
    past: [['1038', 'Delivered', 'Tue 7'], ['1021', 'Delivered', 'Sat 27']],
  },
} as const;

// The shape every locale fills, with string literals widened.
export type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : { readonly [K in keyof T]: Widen<T[K]> };

export type Dict = Widen<typeof en>;
