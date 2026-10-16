export type WhoIsItForItem = {
  title: string;
  description: string;
};

export type FaqItem = {
  q: string;
  a: string;
};

export type Testimonial = {
  name: string;
  city: string;
  rating: number;
  text: string;
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  period: string;
  badge?: string;
  highlight: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  heroSubtitle: string;
  whatsappMessage: string;
  whoIsItFor: WhoIsItForItem[];
  faq: FaqItem[];
  testimonials: Testimonial[];
};

export const products: Product[] = [
  {
    slug: "1-month-iptv-uk",
    name: "1 Month IPTV UK",
    price: 15,
    period: "one-off payment",
    highlight: false,
    metaTitle: "1 Month IPTV UK Subscription – £15 | IPTV UK",
    metaDescription:
      "One month of IPTV UK for £15: 50,000+ live channels, up to 4K and 7-day catch-up. No contract, no auto-renewal, set up in minutes with a free trial first.",
    h1: "1 Month IPTV UK — £15 One-Off Payment",
    heroSubtitle:
      "The easiest way to see what IPTV UK is actually like. One month of full access — 50,000+ live channels, up to 4K and 7-day catch-up — for a single £15 payment that never renews itself.",
    whatsappMessage: "goldengateiptv.uk - I'd like to subscribe to the 1 Month IPTV UK plan (£15)",
    whoIsItFor: [
      {
        title: "People trying IPTV for the first time",
        description:
          "Still deciding whether to leave satellite or cable behind? A single month gives you a proper run at the full line-up — browse the 50,000+ channels, push the 4K streams on your own broadband, and judge it against what you pay now, with nothing locked in beyond 30 days.",
      },
      {
        title: "Visitors staying in the UK short-term",
        description:
          "Over for a few weeks of work or family? This covers the main UK entertainment, news and live sport channels for the length of your trip, so there's no reason to sign up to an expensive cable package you'll only half use.",
      },
      {
        title: "One-event and seasonal viewers",
        description:
          "Just want TV for a specific tournament, a box-set finale or the Christmas schedule? A single month lines up neatly with the thing you actually want to watch, then stops on its own.",
      },
    ],
    faq: [
      {
        q: "Does the 1-month plan really renew on its own?",
        a: "No. You pay £15 once for 30 days of access — there is no recurring charge and nothing to cancel. When the 30 days are up the service simply stops, and it's entirely up to you whether to buy another month.",
      },
      {
        q: "Can I move up to a longer plan afterwards?",
        a: "Yes. When your month finishes you're free to pick any longer plan — 3, 6, 12 or 24 months. Send us a WhatsApp message and we'll switch you over to the new plan straight away.",
      },
      {
        q: "Do I get fewer channels than on the longer plans?",
        a: "No — every plan carries the exact same line-up: 50,000+ live channels, 200,000+ on-demand titles, up to 4K, 7-day catch-up and the full EPG. The only thing that changes between plans is how long it lasts and the price per month.",
      },
      {
        q: "How soon can I start watching after paying?",
        a: "Usually within about 10 minutes. As soon as your payment clears we send your M3U login and a setup guide over WhatsApp, any time of day.",
      },
      {
        q: "What if it isn't working for me?",
        a: "Message us on WhatsApp and we'll try to fix it first. If the service isn't as described you can ask for a refund within 48 hours of buying, and if a technical fault can't be resolved within 72 hours of you reporting it, we refund the unused time pro-rata. Full details are on our refund policy page.",
      },
    ],
    testimonials: [
      {
        name: "James T.",
        city: "Manchester",
        rating: 5,
        text: "I only wanted to test it before paying for anything longer, and one month was ideal. The sport actually looked sharper than my old satellite box. I've since moved onto the 6-month plan.",
      },
      {
        name: "Priya S.",
        city: "Birmingham",
        rating: 5,
        text: "Took a month while staying with family in the UK. Set up in roughly five minutes and had hundreds of channels going. For £15 it's a bargain — I'll grab it again next time I'm over.",
      },
      {
        name: "Daniel H.",
        city: "Leeds",
        rating: 5,
        text: "Used a single month to follow the European football knockouts. Not a single drop-out, even on the late kick-offs, and support answered quickly when I had a question on the first day.",
      },
    ],
  },
  {
    slug: "3-month-iptv-uk",
    name: "3 Months IPTV UK",
    price: 35,
    period: "one-off payment",
    highlight: false,
    metaTitle: "3 Month IPTV UK Subscription – £35 | IPTV UK",
    metaDescription:
      "Three months of IPTV UK for £35 (under £12/month): 50,000+ channels, up to 4K and 7-day catch-up. No contract, no auto-renewal, quick WhatsApp setup.",
    h1: "3 Months IPTV UK — £35 One-Off Payment",
    heroSubtitle:
      "Three months of IPTV UK for £35 — £10 less than paying month to month. A sensible choice if you want dependable TV for a season without tying yourself in for half a year.",
    whatsappMessage: "goldengateiptv.uk - I'd like to subscribe to the 3 Month IPTV UK plan (£35)",
    whoIsItFor: [
      {
        title: "Occasional but picky viewers",
        description:
          "You don't have the TV on every night, but when you do you want it to look right and never stall. Three months gives you the whole 50,000+ channel line-up and 200,000+ on-demand titles at a lower monthly rate than paying as you go — without a long commitment.",
      },
      {
        title: "Students covering a term",
        description:
          "A university term is roughly three months, and so is this. Keep live sport, entertainment and on-demand box sets running for the whole term — handy in a shared house where everyone wants proper TV without taking out a cable contract.",
      },
      {
        title: "Professionals away for a quarter",
        description:
          "Posted overseas for a few months? This keeps you tuned into UK entertainment, news and sport wherever you are, and it works abroad without needing a VPN.",
      },
    ],
    faq: [
      {
        q: "How much cheaper is 3 months than paying monthly?",
        a: "£35 for three months works out at about £11.67 a month, against £15 a month on the single-month plan — so you save £10 over the same period. It's the first real step down in price.",
      },
      {
        q: "Can more than one person use it at once?",
        a: "Yes. Plans run from 1 to 4 simultaneous connections, so you could be watching on the TV while someone else is on a tablet and the kids are on a phone — all on the one subscription.",
      },
      {
        q: "Will it auto-charge when the 3 months end?",
        a: "Never. There's no automatic renewal — access just expires at the end. We might send a friendly reminder, but you're only ever charged again if you ask us to set up a new plan.",
      },
      {
        q: "What if something goes wrong during the 3 months?",
        a: "WhatsApp support is available throughout your subscription and most issues are sorted in minutes. If the service isn't as described you can request a refund within 48 hours of purchase under our refund policy.",
      },
    ],
    testimonials: [
      {
        name: "Sophie R.",
        city: "Bristol",
        rating: 5,
        text: "Three months suited me perfectly as a student wanting TV for the term. Plenty of channels, the sport coverage is great, and the setup guide was easy to follow. Well worth it.",
      },
      {
        name: "Ahmed K.",
        city: "London",
        rating: 5,
        text: "The trial sold me, so I took three months and haven't had a single problem — entertainment, news, all the sport, all steady. I'll probably step up to six months next.",
      },
      {
        name: "Claire W.",
        city: "Edinburgh",
        rating: 4,
        text: "Good value over three months. I work shifts so the 7-day catch-up is the bit I use most — being able to go back a week is a genuine game changer. Reliable throughout.",
      },
    ],
  },
  {
    slug: "6-month-iptv-uk",
    name: "6 Months IPTV UK",
    price: 45,
    period: "one-off payment",
    badge: "Most Popular",
    highlight: true,
    metaTitle: "6 Month IPTV UK Subscription – £45 | IPTV UK",
    metaDescription:
      "Six months of IPTV UK for £45 (£7.50/month) — our most popular plan: 50,000+ channels, up to 4K, 7-day catch-up and quick setup. No contract.",
    h1: "6 Months IPTV UK — £45 One-Off Payment",
    heroSubtitle:
      "The plan most people land on. Six months of IPTV UK for £45 — around £7.50 a month — which strikes the right balance between a real saving and still being able to reassess before committing to a full year.",
    whatsappMessage: "goldengateiptv.uk - I'd like to subscribe to the 6 Month IPTV UK plan (£45)",
    whoIsItFor: [
      {
        title: "Regular evening-and-weekend viewers",
        description:
          "If the TV is on most evenings and all weekend, this is the comfortable middle ground. You get live sport, drama, documentaries and news without satellite prices, at £7.50 a month, and you can still take stock in six months rather than a year.",
      },
      {
        title: "Followers of a sporting half-season",
        description:
          "A football season runs roughly August to May. Six months covers the busy middle stretch — the January window, the European knockout rounds and the run-in — and you can add a second six months to catch the rest.",
      },
      {
        title: "Families testing life after cable",
        description:
          "Thinking of dropping satellite or cable? Six months is long enough to be sure the whole household is covered — kids' channels, sport, soaps and news — before you move to a longer plan.",
      },
    ],
    faq: [
      {
        q: "Why do most people pick the 6-month plan?",
        a: "It's the best trade-off between price and flexibility. At £7.50 a month you're paying half the monthly rate, but you're not committing to a whole year up front. Plenty of customers then either renew for another six months or step up to the 12-month plan.",
      },
      {
        q: "Do I still get 4K on this plan?",
        a: "Yes — every plan includes the full quality range. Where a channel is broadcast in 4K you'll get 4K; where it's Full HD or HD you'll get that. Nothing is held back to a higher-priced plan.",
      },
      {
        q: "Can I use it abroad for part of the six months?",
        a: "Yes. The service travels with you — UK expats in places like Dubai, Spain, Australia or Canada keep their usual channels wherever they are, and no VPN is needed.",
      },
      {
        q: "How does the 7-day catch-up work?",
        a: "On supported channels you can replay anything from the previous seven days. Open the EPG, find the programme you missed and play it back on demand, on your TV, phone, tablet or laptop.",
      },
      {
        q: "Can I add another device connection?",
        a: "Yes. Every plan supports 1 to 4 simultaneous connections — just tell us how many screens you need when you subscribe and we'll set your subscription up for that.",
      },
    ],
    testimonials: [
      {
        name: "Mark B.",
        city: "Liverpool",
        rating: 5,
        text: "I keep renewing the 6-month plan each time it runs out. Live sport in 4K, no buffering, and my mates can't get over how little I pay. Should've switched a long time ago.",
      },
      {
        name: "Emma F.",
        city: "Cardiff",
        rating: 5,
        text: "Left satellite after years and genuinely don't miss it. Everything I watched before is here plus a lot more, and the whole family uses it across different rooms and devices with no bother.",
      },
      {
        name: "Tariq M.",
        city: "London",
        rating: 5,
        text: "Running on my Firestick inside ten minutes. The Arabic channels alone are a huge step up on what I had, and the six-month price is hard to argue with. WhatsApp replies came back within minutes.",
      },
    ],
  },
  {
    slug: "12-month-iptv-uk",
    name: "12 Months IPTV UK",
    price: 60,
    period: "one-off payment",
    highlight: false,
    metaTitle: "12 Month IPTV UK Subscription – £5/Month | IPTV UK",
    metaDescription:
      "A year of IPTV UK for £60 — about £5 a month for 50,000+ channels, up to 4K and 7-day catch-up. No contract, no auto-renewal, quick setup.",
    h1: "12 Months IPTV UK — £60 One-Off Payment",
    heroSubtitle:
      "A full year of IPTV UK for £60 — roughly £5 a month. The plan for people who already know IPTV suits them and want guaranteed access across every sporting season and TV schedule for the year ahead.",
    whatsappMessage: "goldengateiptv.uk - I'd like to subscribe to the 12 Month IPTV UK plan (£60)",
    whoIsItFor: [
      {
        title: "Households that watch every day",
        description:
          "The TV is on daily and you've already proven IPTV works for you. A year of uninterrupted access for £60 — less than a couple of months of satellite — means no admin and nothing to think about for twelve months.",
      },
      {
        title: "Serious sports fans",
        description:
          "A full year takes in the whole football season, the major international tournaments, tennis, cycling, motorsport, rugby and every big fight night. Subscribe once and you're never scrambling to renew mid-season.",
      },
      {
        title: "Families chasing the best value",
        description:
          "For a household with kids, a year at about £5 a month comes in well under any cable or satellite deal. Children's channels, family films and live sport are all covered for everyone, all year.",
      },
    ],
    faq: [
      {
        q: "Is £5 a month genuinely the whole cost?",
        a: "Yes. £60 is everything — one payment for 365 days. There's no setup fee, no hardware to buy, no installation charge and no hidden extras. The price you see is the price you pay.",
      },
      {
        q: "What happens when the 12 months are up?",
        a: "Access simply ends — there's no auto-renewal and no surprise charge. We'll send a reminder as your year draws to a close so you can renew on whichever plan suits you then, if you want to.",
      },
      {
        q: "Does a year cover all the sport?",
        a: "Yes. Your 12 months run from the day you activate, taking in every event broadcast on the channels in our line-up during that time — football, motorsport, cricket, tennis, golf, boxing and rugby.",
      },
      {
        q: "Can the whole family share it?",
        a: "Yes — plans support up to 4 simultaneous connections, so everyone can watch on their own device at the same time. One subscription, several screens.",
      },
      {
        q: "What broadband speed do I need across the year?",
        a: "We suggest at least 10 Mbps for HD and 25 Mbps for 4K, which most UK home connections clear easily. If you're somewhere rural with slower speeds, SD streams run on about 5 Mbps.",
      },
    ],
    testimonials: [
      {
        name: "Gareth P.",
        city: "Swansea",
        rating: 5,
        text: "I renew the 12-month plan each year now. At around a fiver a month I can't see the case for going back to satellite — the whole football season, the boxing, the motorsport, all there. Easily my best TV decision.",
      },
      {
        name: "Naomi A.",
        city: "Nottingham",
        rating: 5,
        text: "Signed the family up and we've not looked back. The kids have their cartoon channels, my husband has the football and I catch up on dramas — all on different devices at once. Remarkable for the price.",
      },
      {
        name: "Robert C.",
        city: "Glasgow",
        rating: 5,
        text: "I was handing over £85 a month for satellite. Now it's £60 once a year for the same channels, a better 4K picture and more to watch. The setup guide had it going on my Samsung TV in minutes.",
      },
    ],
  },
  {
    slug: "24-month-iptv-uk",
    name: "24 Months IPTV UK",
    price: 110,
    period: "one-off payment",
    badge: "Best Value",
    highlight: false,
    metaTitle: "24 Month IPTV UK Subscription – £110 | IPTV UK",
    metaDescription:
      "Two years of IPTV UK for £110 — about £4.58 a month. 50,000+ channels, up to 4K and 7-day catch-up in a single payment. No contract, no auto-renewal.",
    h1: "24 Months IPTV UK — £110 One-Off Payment",
    heroSubtitle:
      "The lowest monthly rate we offer. Two full years of IPTV UK for £110 — about £4.58 a month — in one payment, with the same 50,000+ channels and up to 4K, and nothing to renew for two years.",
    whatsappMessage: "goldengateiptv.uk - I'd like to subscribe to the 24 Month IPTV UK plan (£110)",
    whoIsItFor: [
      {
        title: "People who already know IPTV is for them",
        description:
          "If you're already on a 6 or 12-month plan and treat IPTV as your main way of watching TV, two years is the natural next step: pay once, ignore renewals until 2028, and get the cheapest month we offer.",
      },
      {
        title: "Big and multi-generational households",
        description:
          "Homes where grandparents, parents and kids all watch different things get the most from two years. Spread across up to four connections over 24 months, the per-viewer cost becomes very small indeed.",
      },
      {
        title: "Anyone watching the budget closely",
        description:
          "If rock-bottom cost without dropping quality is the goal, this is the one. At £4.58 a month you still get the same 4K channels, the same 7-day catch-up and the same WhatsApp support — for less than a single weekly coffee.",
      },
    ],
    faq: [
      {
        q: "What makes two years the best value?",
        a: "At about £4.58 a month it's the lowest per-month price we offer. Against the £15 single-month plan you save roughly £250 over the same two years — and you don't touch a renewal for two full years.",
      },
      {
        q: "What if there's a technical problem during the two years?",
        a: "Your subscription is fully supported for the entire 24 months. If anything stops working, WhatsApp support will work through it with you — keeping long-term customers happy is the whole point of the plan.",
      },
      {
        q: "Do I get new channels added during my 24 months?",
        a: "Yes. The line-up is updated with new channels and content at no extra cost, and existing subscribers pick those up automatically — there's never an upgrade to pay for.",
      },
      {
        q: "Will it keep working on new devices and apps?",
        a: "Yes. The service uses the standard M3U / Xtream Codes format that every major IPTV player reads, so as new devices and apps appear over your two years your same login keeps working with them.",
      },
      {
        q: "Can I buy it as a gift for someone?",
        a: "Yes. Two years makes a good gift — particularly for older relatives who just want reliable UK TV. We'll set the subscription up and send a simple guide written for their specific device.",
      },
    ],
    testimonials: [
      {
        name: "Kevin O.",
        city: "Dublin",
        rating: 5,
        text: "I'm an Irish fella who loves British telly — football, the baking shows, all of it. Two years means I don't even think about renewing, and at £4.58 a month it's a no-brainer. Best thing I've bought.",
      },
      {
        name: "Linda M.",
        city: "Newcastle",
        rating: 5,
        text: "Got this for my mum, who was paying £70 a month for satellite. Set it up on her Smart TV and she can't tell the quality apart — except now she has far more channels. She's saving a small fortune over the two years.",
      },
      {
        name: "Hassan B.",
        city: "Leicester",
        rating: 5,
        text: "I keep coming back to the 24-month plan — as soon as it ends I renew. The Arabic and Asian channel range is the best I've found and the whole family watches together. No outages so far.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(slug: string, count = 3): Product[] {
  return products.filter((p) => p.slug !== slug).slice(0, count);
}
