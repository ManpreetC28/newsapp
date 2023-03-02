import React, { Component } from "react";

export class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Anna Tims",
      title: "Disabled daughter lost £2,449 in Santander bank switch",
      description:
        "She was woken up by an Apple Pay alert to discover the money had disappearedMy daughter has started a degree course and arranged to transfer her Santander account to a new student account with HSBC. One night she was woken up by mobile phone alerts from Apple…",
      url: "https://www.theguardian.com/money/2023/feb/22/disabled-daughter-lost-2449-in-santander-bank-switch",
      urlToImage:
        "https://i.guim.co.uk/img/media/bfbca04df13208fc078f0455fd844b87e858f618/0_173_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0ce8e800cde66a41744d4d9ece9a473f",
      publishedAt: "2023-02-22T07:00:19Z",
      content:
        "My daughter has started a degree course and arranged to transfer her Santander account to a new student account with HSBC. One night she was woken up by mobile phone alerts from Apple Pay, informing … [+2356 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Fiona Sturges",
      title:
        "Don’t Think, Dear by Alice Robb review – the beauty and cruelty of ballet",
      description:
        "A former student at the School of American Ballet dissects an art form that too often plays host to obsession and bullyingWhen Alice Robb was little, she wanted more than anything to be a ballet dancer. After two rejections from the School of American Ballet,…",
      url: "https://www.theguardian.com/books/2023/feb/22/dont-think-dear-by-alice-robb-review-the-beauty-and-cruelty-of-ballet",
      urlToImage:
        "https://i.guim.co.uk/img/media/d971631a6ce08ced68ce4be620039348ff1b8ae6/0_89_4492_2695/master/4492.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=18ef36b769f118098d8941fd275b6b5f",
      publishedAt: "2023-02-22T09:00:20Z",
      content:
        "When Alice Robb was little, she wanted more than anything to be a ballet dancer. After two rejections from the School of American Ballet, the feeder school for the prestigious New York City Ballet, s… [+8494 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Juli Clover",
      title:
        "Apple's Noninvasive Blood Glucose Technology for Future Apple Watch Reaches 'Proof-of Concept' Stage",
      description:
        "Apple has made notable progress on noninvasive blood glucose monitoring technology, according to a new report from Bloomberg's Mark Gurman. Planned as a future Apple Watch feature, Apple wants to use the function to allow diabetics and others to test their bl…",
      url: "https://www.macrumors.com/2023/02/22/apple-blood-glucose-monitoring-technology/",
      urlToImage:
        "https://images.macrumors.com/t/6Fkwv6GptMAJqXnGbCK2nyjvrqI=/1600x/article-new/2021/01/apple-watch-blood-glucose-feature.jpg",
      publishedAt: "2023-02-22T17:58:35Z",
      content:
        "Apple has made notable progress on noninvasive blood glucose monitoring technology, according to a new report from Bloomberg's Mark Gurman. Planned as a future Apple Watch feature, Apple wants to use… [+2281 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Mitchel Broussard",
      title:
        "Deals: Amazon Discounts 2021 iPads to Record Low Prices (Up to $80 Off)",
      description:
        "Apple's previous-generation iPad is seeing a few solid discounts today on Amazon, including both Wi-Fi and cellular models. This is Apple's 10.2-inch iPad that came out in 2021 and includes the A13 Bionic chip and lacks the full-screen design of the 2022 mode…",
      url: "https://www.macrumors.com/2023/02/22/deals-amazon-2021-ipads/",
      urlToImage:
        "https://images.macrumors.com/t/SS3rARVZyFUQEH6YRBTVOnajBTA=/2500x/article-new/2022/08/ipad-blue-image.png",
      publishedAt: "2023-02-22T15:21:03Z",
      content:
        "Apple's previous-generation iPad is seeing a few solid discounts today on Amazon, including both Wi-Fi and cellular models. This is Apple's 10.2-inch iPad that came out in 2021 and includes the A13 B… [+1071 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Ty Pendlebury",
      title:
        "Spotify's DJ Feature Brings You Radio Mixes With AI Announcer CNET",
      description:
        'Take your Discover Weekly to what Spotify calls the "next level" with a realistic radio announcer voice.',
      url: "https://www.cnet.com/tech/services-and-software/spotifys-dj-brings-you-radio-mixes-with-ai-announcer/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/f14becb9895e69a93b8be851793659da7670ac55/hub/2023/02/21/d4e558cc-92a3-47c3-bd07-e3f799440bb7/spotify-dj.png?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-02-22T14:00:16Z",
      content:
        'Spotify has unveiled a new beta feature called DJ, which lets music fans listen to their own radio station, complete with announcements by an AI "host."\r\nSpotify\'s head of personalization, Ziad Sulta… [+1356 chars]',
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "Apple Orders Entire Supply of TSMC's 3nm Chips for iPhone 15 Pro and M3 Macs",
      description:
        "Apple has reportedly secured all available orders for N3, TSMC's first-generation 3-nanometer process that is likely to be used in the upcoming iPhone 15 Pro lineup as well as new MacBooks scheduled for launch in the second half of 2023.\n\n\n\n\n\nAccording to a p…",
      url: "https://www.macrumors.com/2023/02/22/apple-secures-tsmc-3nm-chips/",
      urlToImage:
        "https://images.macrumors.com/t/n8JMxdkOzk8f3BBf2vAizoWlfEI=/1600x/article-new/2020/08/tsmc_semiconductor_chip_inspection_678x452.jpg",
      publishedAt: "2023-02-22T12:08:53Z",
      content:
        "Apple has reportedly secured all available orders for N3, TSMC's first-generation 3-nanometer process that is likely to be used in the upcoming iPhone 15 Pro lineup as well as new MacBooks scheduled … [+2561 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "sjackson@insider.com (Sarah Jackson)",
      title:
        "Take a look at the gift that Apple gives employees after 10 years — a slab of aluminum along with a signed note from Tim Cook",
      description:
        "Apple's 10-year work anniversary gift is made from the same aluminum that goes into its devices, and it comes with a $19 polishing cloth. Take a look.",
      url: "https://www.businessinsider.com/see-apple-employees-gift-10-years-signed-by-tim-cook-2023-2",
      urlToImage:
        "https://i.insider.com/6254c1429c862b00181a72e8?width=1200&format=jpeg",
      publishedAt: "2023-02-22T17:34:58Z",
      content:
        "Though it's less common for workers today to stay at one employer for a decade or even their whole careers many companies still give employees gifts for big work anniversaries.\r\nAt Apple, employees w… [+1233 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "gkay@insider.com (Grace Kay)",
      title:
        "ChatGPT-maker OpenAI has hired of tons of former Google and Meta employees, new data shows",
      description:
        "OpenAI has snatched up dozens of former Google and Meta employees in its race to dominate the AI war.",
      url: "https://www.businessinsider.com/chatgpt-openai-microsoft-hired-former-google-meta-apple-tesla-staff-2023-2",
      urlToImage:
        "https://i.insider.com/63eb78ba7518920018f3374c?width=1200&format=jpeg",
      publishedAt: "2023-02-22T16:50:40Z",
      content:
        "OpenAI, the firm behind ChatGPT, has snatched up dozens of former Google and Meta employees in its efforts to create an AI chatbot.\r\nData from LeadGenius and Punks &amp; Pinstripes shows that a numbe… [+3388 chars]",
    },
    {
      source: {
        id: null,
        name: "Insiderintelligence.com",
      },
      author: "insider@insider.com (Adriana Nunez)",
      title: "How UK contactless payments value grew 50% last year",
      description:
        "The total value of contactless payments made with UK Barclays cards surged nearly 50% YoY thanks to regulatory changes and broader acceptance.",
      url: "https://www.insiderintelligence.com/content/how-uk-contactless-payments-value-grew-50-last-year",
      urlToImage:
        "https://www.insiderintelligence.com/content/storage/socialsharingdefault/default-image-share.png?im=FitAndFill,width=1200,height=630",
      publishedAt: "2023-02-22T17:59:06Z",
      content:
        "The data: UK Barclays cardholders made an average of 220 tap-to-pay transactions last year, totaling £3,327 ($4,099) per person, per a press release. The total value of contactless payments made with… [+2017 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "htan@insider.com (Huileng Tan)",
      title:
        "Microsoft cofounder Bill Gates says the rise of AI poses a threat to Google's search engine profit",
      description:
        'Gates admitted to being surprised by how the development of AI accelerated in the last year and said it will be the "biggest thing in this decade."',
      url: "https://www.businessinsider.com/ai-microsoft-bing-bill-gates-threat-google-search-engine-profit-2023-2",
      urlToImage:
        "https://i.insider.com/63f5921d88f76900192cc709?width=1200&format=jpeg",
      publishedAt: "2023-02-22T08:01:43Z",
      content:
        "Bill Gates the cofounder of tech giant Microsoft said Google's profits from its search engine are likely to fall in the future because the company he cofounded has been able to move rapidly on artifi… [+2249 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "sbhaimiya@insider.com (Sawdah Bhaimiya)",
      title:
        "Starbuck's interim CEO Howard Schultz said he doesn't believe unions have a place at the coffee giant as unionization efforts spread",
      description:
        "Starbucks has previously been accused of using illegal tactics to deter staff from unionizing in some of its locations.",
      url: "https://www.businessinsider.com/starbucks-ceo-unions-dont-have-place-at-coffee-giant-2023-2",
      urlToImage:
        "https://i.insider.com/639a0c56b7e0f2001809066d?width=1200&format=jpeg",
      publishedAt: "2023-02-22T13:51:17Z",
      content:
        "Starbucks' interim CEO Howard Schultz reiterated that he believes unions have no place at the company in an interview with CNN's Poppy Harlow, published on Tuesday. \r\nSchultz, who stepped in as inter… [+3490 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "Deanna Ritchie",
      title: "The Minds Behind the Machines: Meet the Top 5 Technology Experts",
      description:
        "In today’s world, technology is at the forefront of everything we do. Technology has unequivocally revolutionized every aspect of our lives, from our jobs to our everyday lives. But who are the minds behind the machines? Meet the top 5 technology experts who …",
      url: "https://readwrite.com/the-minds-behind-the-machines-meet-the-top-5-technology-experts/",
      urlToImage:
        "https://images.readwrite.com/wp-content/uploads/2023/02/Top-5-Technology-Experts.jpg",
      publishedAt: "2023-02-22T17:33:47Z",
      content:
        "In today’s world, technology is at the forefront of everything we do. Technology has unequivocally revolutionized every aspect of our lives, from our jobs to our everyday lives.\r\nBut who are the mind… [+9633 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Gabriel Erard",
      title:
        "EE. UU. está muy cerca de prohibir la venta del Apple Watch, pero la realidad es más complicada de lo que crees",
      description:
        "Por estas horas, una decisión de Joe Biden está haciendo mucho ruido en el Apple Park. El presidente de Estados Unidos ratificó un fallo de la Comisión de Comercio Internacional (ITC), que en diciembre concluyó que el Apple Watch violaba patentes de una empre…",
      url: "http://hipertextual.com/2023/02/puede-estados-unidos-bloquear-importacion-apple-watch",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2022/09/Apple-Watch-Series-8-8-scaled.jpg",
      publishedAt: "2023-02-22T13:09:25Z",
      content:
        "Por estas horas, una decisión de Joe Biden está haciendo mucho ruido en el Apple Park. El presidente de Estados Unidos ratificó un fallo de la Comisión de Comercio Internacional (ITC), que en diciemb… [+5275 chars]",
    },
    {
      source: {
        id: null,
        name: "Hipertextual",
      },
      author: "Rubén Chicharro",
      title:
        "GPT 4: qué es, novedades y cuándo saldrá la nueva IA que mejorará ChatGPT",
      description:
        "ChatGPT y otras herramientas que utilizan uno de los modelos de lenguaje más avanzados de OpenAI, podría dar un paso más allá durante los próximos meses. La compañía especializada en el desarrollo de modelos de IA se prepara para lanzar GPT 4 y ChatGPT 4, que…",
      url: "http://hipertextual.com/2023/02/gpt-4-que-es-cuando-sadra-novedades",
      urlToImage:
        "https://imgs.hipertextual.com/wp-content/uploads/2022/06/Inteligencia-artificial-y-ciencia-scaled.jpg",
      publishedAt: "2023-02-22T07:39:49Z",
      content:
        "ChatGPT y otras herramientas que utilizan uno de los modelos de lenguaje más avanzados de OpenAI, podría dar un paso más allá durante los próximos meses. La compañía especializada en el desarrollo de… [+6899 chars]",
    },
    {
      source: {
        id: null,
        name: "Boing Boing",
      },
      author: "Thom Dunn",
      title: '"Criminal" singer Fiona Apple now a full-time court watcher',
      description:
        'My earliest memory of Fiona Apple is watching her give that infamous "This world is bullshit" speech live at the VMAs. I was 11 or 12 at the time, and I know I\'d least seen the video for "Criminal," but my blossoming adolescent male mind presumably had no ide…',
      url: "https://boingboing.net/2023/02/22/criminal-singer-fiona-apple-now-a-full-time-court-watcher.html",
      urlToImage:
        "https://i0.wp.com/boingboing.net/wp-content/uploads/2023/02/maxresdefault-47.jpg?fit=1200%2C675&ssl=1",
      publishedAt: "2023-02-22T15:55:14Z",
      content:
        'My earliest memory of Fiona Apple is watching her give that infamous "This world is bullshit" speech live at the VMAs. I was 11 or 12 at the time, and I know I\'d least seen the video for "Criminal," … [+2569 chars]',
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Juan Carlos López",
      title:
        "La guerra del OLED entre China y Corea del Sur está cerca. Lo mejor que nos puede pasar es que empiece cuanto antes",
      description:
        "LG ha dominado el mercado de los paneles OLED de gran formato durante casi una década. Todos los televisores con matriz orgánica que los consumidores hemos comprado hasta bien entrado 2022 incorporaban necesariamente un panel producido por esta marca. Hubiese…",
      url: "https://www.xataka.com/televisores/guerra-oled-china-corea-sur-esta-cerca-mejor-que-nos-puede-pasar-que-empiece-cuanto-antes",
      urlToImage: "https://i.blogs.es/aa69da/oled-ap/840_560.jpeg",
      publishedAt: "2023-02-22T14:00:53Z",
      content:
        "LG ha dominado el mercado de los paneles OLED de gran formato durante casi una década. Todos los televisores con matriz orgánica que los consumidores hemos comprado hasta bien entrado 2022 incorporab… [+3608 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "John Tones",
      title:
        "'La naranja mecánica': un clásico de la ciencia ficción que habla en un idioma propio (Laberinto de Papel 4x01)",
      description:
        "Nada que nos guste en 'Laberinto de papel', el podcast de literatura fantástica que hacemos en Xataka en colaboración con Minotauro, más que un buen clásico de la ciencia ficción. Y pocos los hay tan contundentes y, sobre todo, atemporales, que 'La naranja me…",
      url: "https://www.xataka.com/literatura-comics-y-juegos/naranja-mecanica-clasico-ciencia-ficcion-que-habla-idioma-propio-laberinto-papel-4x01",
      urlToImage:
        "https://i.blogs.es/857b0e/post---laberinto-de-papel/840_560.jpeg",
      publishedAt: "2023-02-22T11:14:27Z",
      content:
        "Nada que nos guste en 'Laberinto de papel', el podcast de literatura fantástica que hacemos en Xataka en colaboración con Minotauro, más que un buen clásico de la ciencia ficción. Y pocos los hay tan… [+1921 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Kurt Knutsson, CyberGuy Report",
      title: "How hackers are using ChatGPT to create malware to target you",
      description:
        "The AI technology ChatGPT has begun running into technical issues, specifically due to malware, giving hacking freedom to cybercriminals. Here's why it's important.",
      url: "https://www.foxnews.com/tech/how-hackers-using-chatgpt-create-malware-target-you",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2023/02/1-CHAT-GPT-LOGO.jpg",
      publishedAt: "2023-02-22T14:30:58Z",
      content:
        "The research firm Checkpoint has confirmed that ChatGPT, the new AI chatbot created by OpenAI, is running into problems yet again. This time it has to do with malware.\r\nCLICK TO GET KURTS CYBERGUY NE… [+3032 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Jason Struss",
      title: "5 movies in March 2023 you need to watch",
      description:
        "From a sequel to a classic horror movie to a Apple TV+ original about the origins of Tetris, these 5 movies are worth your time and money in March 2023.",
      url: "https://www.digitaltrends.com/movies/5-movies-in-march-2023-you-need-to-watch/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2023/02/scream-6-nyc.jpg?resize=1200%2C630&p=1",
      publishedAt: "2023-02-22T13:01:25Z",
      content:
        "It’s only been two months, but so far, 2023 has been pretty awesome for movie lovers. M3GAN was an entertaining horror comedy, while Infinity Pool made everyone think about the nature of existence wh… [+6075 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Simon Cohen",
      title: "Spotify’s new AI-driven DJ spins tracks just for you",
      description:
        "Spotify is rolling out a new feature that gives you an AI-based DJ to introduce and comment on your music.",
      url: "https://www.digitaltrends.com/home-theater/spotify-ai-dj/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2021/09/spotify-app-icon-0921-1.jpg?resize=1200%2C630&p=1",
      publishedAt: "2023-02-22T17:59:39Z",
      content:
        "If you've got a hi-fi system you love, but it doesn't speak Wi-Fi, Bluetooth, AirPlay, or any other wireless streaming languages, NAD's new CS1 Endpoint Network Streamer ($349) provides a super-simpl… [+654 chars]",
    },
    {
      source: {
        id: "the-washington-post",
        name: "The Washington Post",
      },
      author: "Niha Masih",
      title: "Seattle becomes first U.S. city to ban caste discrimination",
      description:
        "Activists say people of lower castes have faced discrimination while at work and school. The measure was opposed by some Hindu groups.",
      url: "https://www.washingtonpost.com/nation/2023/02/21/seattle-caste-discrimination-ban/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7R2WKFKKVMJN74CY3JF4OYTTWA.jpg&w=1440",
      publishedAt: "2023-02-22T12:10:40Z",
      content:
        "Comment on this story\r\nThe Seattle City Council voted Tuesday to ban caste-based discrimination, in the first such move by a U.S. city. The move adds caste as a protected category to the citys anti-d… [+4012 chars]",
    },
    {
      source: {
        id: null,
        name: "Lwn.net",
      },
      author: null,
      title: "Passwordless authentication with FIDO2–beyond just the web",
      description:
        "FIDO2 is a standard for\nauthenticating users without the need for passwords. While the technology has\nbeen introduced mainly to protect accounts on web sites, it's also useful\nfor other purposes, such as logging into Linux systems. The same technology\ncan eve…",
      url: "https://lwn.net/SubscriberLink/923656/b15e2aa9b44ac718/",
      urlToImage: null,
      publishedAt: "2023-02-22T01:38:44Z",
      content:
        "<table><tr><td>Welcome to LWN.net\r\nThe following subscription-only content has been made available to you \r\nby an LWN subscriber. Thousands of subscribers depend on LWN for the \r\nbest news from the L… [+10191 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Ben Schwan",
      title: "Wettbewerbsverfahren: USA verschärfen Vorgehen gegen Apple",
      description:
        "Mehr Ankläger und die Einbeziehung des wichtigsten Wettbewerbshüters: Das US-Justizministerium überlegt, das Monopolverfahren gegen Apple auszudehnen.",
      url: "https://www.heise.de/news/Wettbewerbsverfahren-USA-verschaerfen-Vorgehen-gegen-Apple-7522290.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/0/5/3/8/8/shutterstock_1891132747-640951c9b9e4e81e.jpg",
      publishedAt: "2023-02-22T09:28:00Z",
      content:
        "Die seit 2019 laufende Untersuchung, ob Apple in den USA unter die Monopolgesetzgebung fallen könnte, wird vom zuständigen US-Justizministerium (U.S. Department of Justice, DoJ) verschärft. Wie das W… [+2556 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Malte Kirchner",
      title: "Apple sichert sich angeblich alle 3-Nanometer-Chips von TSMC",
      description:
        "Apple sichert sich laut Medienberichten Chips mit 3 Nanometer Strukturbreite. Doch zusammen mit der Großbestellung gebe es auch Stornierungen.",
      url: "https://www.heise.de/news/Apple-sichert-sich-angeblich-alle-3-Nanometer-Chips-von-TSMC-7524152.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/0/6/3/7/3/TSMC-99885acb979eb055.jpg",
      publishedAt: "2023-02-22T15:40:00Z",
      content:
        "Apple sorgt laut einem Medienbericht bereits vor, um im Herbst genügend 3-Nanometer-Chips für das iPhone 15 Pro zu haben. Der Chipfertiger TSMC aus Taiwan könne sich aber nur teilweise darüber freuen… [+1719 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Leo Becker",
      title:
        "iOS 16.4 Beta: Apple erlaubt weitreichende iPhone-Anpassungen per Shortcut",
      description:
        "iPhones lassen sich bald umfassender automatisieren. Die neuen Kurzbefehle reichen von VPN über Always-On-Display bis zum Stummschalten unbekannter Anrufer.",
      url: "https://www.heise.de/news/iOS-16-4-Beta-Apple-erlaubt-weitreichende-iPhone-Anpassungen-per-Shortcut-7524170.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/0/6/3/8/2/tre210928_231_iPhone-13-pro-front-bc291e40fff57ab0.jpg",
      publishedAt: "2023-02-22T15:36:00Z",
      content:
        "Apple baut die vorinstallierte Kurzbefehle-App deutlich aus: iOS und iPadOS 16.4 bringen eine Reihe an neuen Aktionen mit, die Nutzer teils schon lange gefordert haben und die eine umfassendere Autom… [+2049 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Leo Becker",
      title:
        "heise+ | Scannen statt abtippen: Zeit sparen mit Apples Livetext auf iPhone, iPad und Mac",
      description:
        "IBANs, Veranstaltungstermine, Rufnummern: Livetext nimmt Papierunterlagen ihren Schrecken. Wir verraten auch, wie Sie jeden Text und QR-Codes kopierbar machen.",
      url: "https://www.heise.de/ratgeber/Scannen-statt-abtippen-Zeit-sparen-mit-Apples-Livetext-auf-iPhone-iPad-und-Mac-7522979.html?wt_mc=rss.red.ho.ho.atom.beitrag_plus.beitrag_plus",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/3/7/0/5/7/7/3/livetext_aufmacher-7f259477bc857822.png",
      publishedAt: "2023-02-22T06:30:00Z",
      content:
        "Inhaltsverzeichnis\r\nLange IBANs auf Papierrechnungen können Sie mühsam abtippen oder einfach die iPhone-Kamera darauf richten. Die Texterkennung ist bei Apple-Geräten mit an Bord: Mit unseren Tipps z… [+1563 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Chance Miller",
      title:
        "Apple hits ‘major milestones’ in moonshot to bring noninvasive blood glucose monitoring to Apple Watch",
      description:
        "Apple’s efforts to bring glucose monitoring features to the Apple Watch have been reported on a few times over the years, but the company has reportedly had several major breakthroughs recently. According to a new report from Bloomberg, Apple has hit “major m…",
      url: "https://9to5mac.com/2023/02/22/apple-hits-major-milestones-in-moonshot-to-bring-noninvasive-blood-glucose-monitoring-to-apple-watch/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/apple-watch-series-x-rumors.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T17:51:46Z",
      content:
        "Apples efforts to bring glucose monitoring features to the Apple Watch have been reported on a few times over the years, but the company has reportedly had several major breakthroughs recently. Accor… [+3669 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "Apple granted patent for color-changing Apple Watch band, controlled by an app",
      description:
        "It sounds like science fiction, but Apple has been granted a patent for a color-changing Apple Watch band – with different color combinations selectable from a Watch app.\nThe patent even describes the band being able to display “icons, shapes, and text,” and …",
      url: "https://9to5mac.com/2023/02/22/color-changing-apple-watch-bands/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/Apple-Watch-bands-that-change-color.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T12:32:31Z",
      content:
        "It sounds like science fiction, but Apple has been granted a patent for a color-changing Apple Watch band with different color combinations selectable from a Watch app.\r\nThe patent even describes the… [+3399 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "Does wearing an Apple Watch affect iPhone buying habits? Here’s what the data says",
      description:
        "Image via Nomad\nCIRP is out with an interesting new study this morning looking at the correlation between Apple Watch owners and which iPhone they have as well as what iPhone people pick who don’t own Apple’s wearable.\n more…\nThe post Does wearing an Apple Wa…",
      url: "https://9to5mac.com/2023/02/22/apple-watch-owners-have-these-iphones/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/nomad-english-tan-apple-watch-band-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T14:26:35Z",
      content:
        "Image via Nomad\r\nCIRP is out with an interesting new study this morning looking at the correlation between Apple Watch owners and which iPhone they have as well as what iPhone people pick who don’t o… [+1373 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Zac Hall",
      title:
        "15-inch MacBook Air may have one advantage over the current M2 model",
      description:
        "Apple’s Mac pipeline for the rest of this year includes the first-ever 15-inch MacBook Air and long-awaited Mac Pro with Apple Silicon. With these machines on the horizon, a new filing from Apple could tell us more about what to expect from the hardware.\n mor…",
      url: "https://9to5mac.com/2023/02/22/15-inch-macbook-air-may-have-one-advantage-over-the-current-m2-model/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/macbook-air-15-in.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T16:57:43Z",
      content:
        "Apple’s Mac pipeline for the rest of this year includes the first-ever 15-inch MacBook Air and long-awaited Mac Pro with Apple Silicon. With these machines on the horizon, a new filing from Apple cou… [+1848 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Seth Kurkowski",
      title:
        "9to5Mac Daily: February 22, 2023 – Apple Watch dangerously close to US import ban",
      description:
        "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apple’s Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overcast and other podcast players.\nEnjoy the podcast? Shop to su…",
      url: "https://9to5mac.com/2023/02/22/daily-feb-22-2023/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2021/12/9to5Mac-Daily-art-lead.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T15:45:36Z",
      content:
        "Listen to a recap of the top stories of the day from 9to5Mac. 9to5Mac Daily is available on iTunes and Apples Podcasts app, Stitcher, TuneIn, Google Play, or through our dedicated RSS feed for Overca… [+864 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "TSMC Arizona plant under fresh scrutiny, with employee doubts, and analyst concerns",
      description:
        "The TSMC Arizona plant set to make chips for Apple has been one of the most high-profile results of political attempts to boost America’s chipmaking capabilities – but it is now coming under fresh scrutiny, according to a new report.\nSome employees are said t…",
      url: "https://9to5mac.com/2023/02/22/tsmc-arizona-plant-4/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/TSMC-Arizona-plant-under-fresh-scrutiny.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T13:51:20Z",
      content:
        "The TSMC Arizona plant set to make chips for Apple has been one of the most high-profile results of political attempts to boost America’s chipmaking capabilities but it is now coming under fresh scru… [+3322 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Call of Duty: Warzone coming to iOS after being teased at Apple’s gaming event",
      description:
        "Call of Duty: Warzone is a free to play battle royale game from the popular Call of Duty franchise, and it’s currently available for Windows PCs, PlayStation, and Xbox. However, iPhone and iPad users will soon be able to play Call of Duty: Warzone on their mo…",
      url: "https://9to5mac.com/2023/02/21/call-of-duty-warzone-coming-to-ios/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/Call-of-Duty-Warzone-iOS.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T02:25:45Z",
      content:
        "Call of Duty: Warzone is a free to play battle royale game from the popular Call of Duty franchise, and it’s currently available for Windows PCs, PlayStation, and Xbox. However, iPhone and iPad users… [+2129 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "Meta reportedly plans next wave of job cuts after suggesting no more layoffs, Meta disputes details",
      description:
        "After cutting 11,000 jobs last fall, Meta is reportedly set to execute what could be another major round of layoffs as it tries to trim expenses. The news comes after CEO Mark Zuckerberg hinted in January another round could happen this year after previously …",
      url: "https://9to5mac.com/2023/02/22/meta-planning-another-wave-of-layoffs/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2018/04/mark-zuckerberg-facebook.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T16:18:33Z",
      content:
        "After cutting 11,000 jobs last fall, Meta is reportedly set to execute what could be another major round of layoffs as it tries to trim expenses. The news comes after CEO Mark Zuckerberg hinted in Ja… [+2228 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Rikka Altland",
      title:
        "Save $80 on Apple’s 10.2-inch iPad in Wednesday’s best deals, Anker Bio Lightning cables $13, more",
      description:
        "All of today’s best deals are now live as we’re halfway through the week, with Wednesday dropping an $80 discount on Apple’s 256GB 10.2-inch iPad. You can also save on Anker’s all-new Bio-Based Lightning and USB-C cables, with all-time lows from $13.50. Not t…",
      url: "https://9to5mac.com/2023/02/22/10-2-inch-ipad-discount-anker-gear/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/10.2-inch-ipad-anker-lightning-.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T16:45:12Z",
      content:
        "All of today’s best deals are now live as we’re halfway through the week, with Wednesday dropping an $80 discount on Apple’s 256GB 10.2-inch iPad. You can also save on Ankers all-new Bio-Based Lightn… [+5283 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Chance Miller",
      title: "Introducing 9to5Mac’s all-new design",
      description:
        "Hello, and welcome to the newly revamped 9to5Mac website. It’s the same 9to5Mac you love, but with an all-new design. With our partners at 10up, we’ve given the site a new design that we believe is cleaner, easier to navigate, and faster.\nWe’re excited to hea…",
      url: "https://9to5mac.com/2023/02/22/new-9to5mac-design/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/9to5mac-fi.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T17:35:41Z",
      content:
        "Hello, and welcome to the newly revamped 9to5Mac website. Its the same 9to5Mac you love, but with an all-new design. With our partners at 10up, weve given the site a new design that we believe is cle… [+2418 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "Report details the most common malware on Mac, biggest recent cybersecurity events",
      description:
        "Malwarebytes has released its latest report digging into the state of malware in 2023. The findings include recent key security developments, 5 cyber threat archetypes to watch out for this year, what type of malware was found most on Macs, and more.\n more…\nT…",
      url: "https://9to5mac.com/2023/02/22/report-details-most-common-malware-on-macs/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/08/macOS-Security-updates.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T14:01:17Z",
      content:
        "Malwarebytes has released its latest report digging into the state of malware in 2023. The findings include recent key security developments, 5 cyber threat archetypes to watch out for this year, wha… [+3626 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Filipe Espósito",
      title:
        "Uber gets major update with simplified home screen and Live Activities for all iPhone users",
      description:
        "Back in December, the popular ride app Uber began testing support for Live Activities in iOS 16 for iPhone users. Today Uber is officially releasing the feature to everyone, but that’s not all. The app is also getting a refreshed home screen with a simplified…",
      url: "https://9to5mac.com/2023/02/22/uber-simplified-home-screen-live-activities/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/Uber-redesigned-app.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T12:00:00Z",
      content:
        "Back in December, the popular ride app Uber began testing support for Live Activities in iOS 16 for iPhone users. Today Uber is officially releasing the feature to everyone, but that’s not all. The a… [+2187 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Chance Miller",
      title:
        "Uber Eats won’t support Live Activities or the Dynamic Island until later this year",
      description:
        "Uber launched a significant redesign of its iPhone app today, including bringing Live Activity and Dynamic Island integration to everyone. Unfortunately, it looks like Uber Eats customers will have to wait until later this year for these features to roll out …",
      url: "https://9to5mac.com/2023/02/22/uber-eats-live-activities-sad/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2022/12/uber.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T14:08:41Z",
      content:
        "Uber launched a significant redesign of its iPhone app today, including bringing Live Activity and Dynamic Island integration to everyone. Unfortunately, it looks like Uber Eats customers will have t… [+1870 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Ben Lovejoy",
      title:
        "WhatsApp newsletters feature in development, with privacy protections",
      description:
        "A beta version of the Android app includes a hidden WhatsApp newsletters feature, which the company appears to be readying for testing. Such tests are normally conducted on the Android app ahead of the iOS one … WAbetainfo discovered references to the feature…",
      url: "https://9to5mac.com/2023/02/22/whatsapp-newsletters/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/WhatsApp-newsletters.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T13:13:05Z",
      content:
        "A beta version of the Android app includes a hidden WhatsApp newsletters feature, which the company appears to be readying for testing. Such tests are normally conducted on the Android app ahead of t… [+2199 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Chance Miller",
      title:
        "Spotify launches AI-powered personal DJ feature with ‘stunningly realistic voice’",
      description:
        "Spotify has announced a new “AI DJ” feature, which it says is a “brand-new way to listen on Spotify and connect even more deeply with the artists you love.” The feature will deliver a “curated lineup of music alongside commentary around the tracks and artists…",
      url: "https://9to5mac.com/2023/02/22/spotify-ai-dj-feature/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/spotify-dj.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T14:34:12Z",
      content:
        "Spotify has announced a new AI DJ feature, which it says is a brand-new way to listen on Spotify and connect even more deeply with the artists you love. The feature will deliver a curated lineup of m… [+2541 chars]",
    },
    {
      source: {
        id: null,
        name: "9to5Mac",
      },
      author: "Michael Potuck",
      title:
        "Microsoft launches updated Bing, Edge, and Skype iOS apps with ChatGPT and voice input",
      description:
        "After kicking off the launch of its new Bing experience on desktop last week to early adopters, Microsoft has released the new Bing and Edge iOS apps with its AI ChatGPT integration in preview. Along with that, the AI-powered Bing is available in the latest i…",
      url: "https://9to5mac.com/2023/02/22/microsoft-launches-bing-ios-app-with-chatgpt/",
      urlToImage:
        "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2023/02/bing-ios-app-chatgpt-launch.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
      publishedAt: "2023-02-22T15:00:55Z",
      content:
        "After kicking off the launch of its new Bing experience on desktop last week to early adopters, Microsoft has released the new Bing and Edge iOS apps with its AI ChatGPT integration in preview. Along… [+3123 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Police",
      },
      author: "Lucas Coll",
      title:
        "This Samsung Galaxy Watch 5 deal knocks it below its Black Friday price",
      description:
        "Samsung's latest Galaxy watch is the best Android smartwatch to buy, especially at this price",
      url: "https://www.androidpolice.com/220-samsung-galaxy-watch-5-deal/",
      urlToImage:
        "https://static1.anpoimages.com/wordpress/wp-content/uploads/2022/08/galaxy-watch-5-info-brick-matted-1.jpg",
      publishedAt: "2023-02-22T11:30:15Z",
      content:
        "If you're looking for the Android answer to the Apple Watch, then Samsung's Galaxy Watch 5 is it. It sports relatively minor upgrades over the Galaxy Watch 4, but it's nonetheless the best Android sm… [+2552 chars]",
    },
    {
      source: {
        id: null,
        name: "Autoblog",
      },
      author: "John Beltz Snyder",
      title:
        "2023 Alfa Romeo Stelvio Review: Exceptionally sporty, but compromised",
      description:
        "Filed under:\n Alfa Romeo,Buying Guide,New Car Reviews,Crossover,SUV,Luxury,Performance\n Continue reading 2023 Alfa Romeo Stelvio Review: Exceptionally sporty, but compromised\n2023 Alfa Romeo Stelvio Review: Exceptionally sporty, but compromised originally app…",
      url: "https://www.autoblog.com/article/2023-alfa-romeo-stelvio-review/",
      urlToImage:
        "https://o.aolcdn.com/images/dims3/GLOB/crop/2032x1143+254+107/resize/800x450!/format/jpg/quality/85/https://s.aolcdn.com/os/ab/_cms/2023/01/31171558/2023-Alfa-Romeo-Stelvio-32.jpg",
      publishedAt: "2023-02-22T11:00:00Z",
      content:
        "Pros: Excellent steering and handling; two sporty engines available; stands out from crowd\r\nCons: Mediocre interior; lackluster tech; small for its segment\r\nThe 2023 Alfa Romeo Stelvio feels exotic f… [+10005 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title:
        "An Apple Watch on a wrist is a good indicator of which iPhone they have",
      description:
        "New data shows that Apple Watch owners have entirely different iPhone purchasing habits than those that don't. Here's how they're different.Apple Watch UltraAlthough the Apple Watch can perform some tasks independently, it still more or less requires an iPhon…",
      url: "https://appleinsider.com/articles/23/02/22/an-apple-watch-on-a-wrist-is-a-good-indicator-of-which-iphone-they-have",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53145-106456-Apple-Watch-Ultra-xl.jpg",
      publishedAt: "2023-02-22T15:40:52Z",
      content:
        "Apple Watch Ultra\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nNew data shows that Apple Watch owners have entirely different iPhone purchasing habits … [+1733 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Apple is the top hardware stock buy for 2023, says Morgan Stanley",
      description:
        "Despite what remains an incredibly challenging environment for computer hardware manufacturers, Morgan Stanley thinks Apple stock is the best buy for 2023 because of an exciting year ahead for the company.An Apple Store logoIn a new analysis of what proportio…",
      url: "https://appleinsider.com/articles/23/02/22/apple-is-the-top-hardware-stock-buy-for-2023-says-morgan-stanley",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/52643-105199-52237-103951-51339-101470-apple-logo-building-xl-xl-xl.jpg",
      publishedAt: "2023-02-22T15:16:58Z",
      content:
        "An Apple Store logo\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nDespite what remains an incredibly challenging environment for computer hardware manuf… [+2381 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Apple Watch dominated smartwatch market sales and profits in 2022",
      description:
        "Apple is not only the biggest smartwatch vendor, but it pulls in more than half the market's revenue as well, driven by the Apple Watch Ultra.New research by Counterpoint continues to show Apple in the lead for the smartwatch market in every regard. According…",
      url: "https://appleinsider.com/articles/23/02/22/apple-watch-dominated-smartwatch-market-sales-and-profits-in-2022",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/50950-100619-000-lead-Apple-Watch-Ultra-xl.jpg",
      publishedAt: "2023-02-22T12:53:41Z",
      content:
        "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nApple is not only the biggest smartwatch vendor, but it pulls in more than half the market's revenue as wel… [+2204 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title:
        "Apple reduces TSMC orders, still takes all next-gen chip capacity",
      description:
        "Two new reports from the supply chain say that both Apple and Intel have cut their overall processor orders with TSMC, but reaffirm that the iPhone manufacturer will take every 3nm chip the foundry can make.As long ago as December 2020, it was reported that A…",
      url: "https://appleinsider.com/articles/23/02/22/apple-reduces-tsmc-orders-still-takes-all-next-gen-chip-capacity",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53142-106450-000-lead-TSMC-xl.jpg",
      publishedAt: "2023-02-22T13:35:03Z",
      content:
        "AppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nTwo new reports from the supply chain say that both Apple and Intel have cut their overall processor orders… [+1220 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (William Gallagher)",
      title: "Bluetooth filing hints at new MacBook Air coming soon",
      description:
        "A new Apple entry in a Bluetooth organizational database looks certain to be a Mac, and may be the as-yet unannounced 15-inch MacBook Air.A rumored 15-inch MacBook AirRecent reports claim that a 15-inch — or 15.5-inch — MacBook Air has now entered mass produc…",
      url: "https://appleinsider.com/articles/23/02/22/bluetooth-filing-hints-at-new-macbook-air-coming-soon",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/49243-96187-15MBA-compare-2-xl.jpg",
      publishedAt: "2023-02-22T17:28:41Z",
      content:
        "A rumored 15-inch MacBook Air\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA new Apple entry in a Bluetooth organizational database looks certain to be… [+1328 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Jess Pingrey)",
      title:
        "Daily Deals Feb. 22: 13-inch MacBook Pro for $475, $190 off iPhone 13 Pro Max, Apple TV for $79 & more",
      description:
        "Valuable deals for today include 42% off a 14TB external hard drive, 67% off Panasonic wireless headphones, 46% off a Google Pixel phone, up to 44% off Amazon Fire TV Omni Series, and more.Save $190 on an iPhone 13 Pro MaxThe AppleInsider team scours the inte…",
      url: "https://appleinsider.com/articles/23/02/22/daily-deals-feb-22-13-inch-macbook-pro-for-475-190-off-iphone-13-pro-max-apple-tv-for-79-more",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53135-106455-daily-deals-Feb-22-xl.jpg",
      publishedAt: "2023-02-22T15:59:00Z",
      content:
        "Save $190 on an iPhone 13 Pro Max\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nValuable deals for today include 42% off a 14TB external hard drive, 67%… [+3373 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Wesley Hilliard)",
      title: "Bomb threats made via AirDrop ground flight",
      description:
        "A high school student is now facing the long arm of the law, after he used Apple's AirDrop to send a bomb threat to other passengers on an American Airlines flight.AirDrop can be used as a weapon in some circumstancesAirDrop is a technology used by Apple prod…",
      url: "https://appleinsider.com/articles/23/02/22/bomb-threats-made-via-airdrop-ground-flight",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53136-106439-AirDrop-bomb-xl.jpg",
      publishedAt: "2023-02-22T00:31:06Z",
      content:
        "AirDrop can be used as a weapon in some circumstances\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nA high school student is now facing the long arm of … [+2392 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Andrew Orr)",
      title: "TSMC managers think Americans don't work hard enough",
      description:
        "As plans advance for the Taiwan Semiconductor Manufacturing Company expansion in Arizona, there are concerns about costs and expectations of the American work force.TSMCTSMC confirmed plans to open an advanced fabrication plant in Arizona in 2020 and tripled …",
      url: "https://appleinsider.com/articles/23/02/22/tsmc-managers-think-americans-dont-work-hard-enough",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53143-106451-TSMC-xl.jpg",
      publishedAt: "2023-02-22T14:49:21Z",
      content:
        "TSMC\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nAs plans advance for the Taiwan Semiconductor Manufacturing Company expansion in Arizona, there are c… [+1941 chars]",
    },
    {
      source: {
        id: null,
        name: "AppleInsider",
      },
      author: "news@appleinsider.com (Tyler Hayes)",
      title: "Tenways CGO800S review: An e-bike made for city life",
      description:
        "The Tenways CGO800S e-bike, with its single-gear belt drive and incredibly quiet rear motor, is a nearly perfect bike for urban riders.Tenways CGO800SThere are a lot more versatile e-bike options on the market that can handle a wider range of terrain, but if …",
      url: "https://appleinsider.com/articles/23/02/22/tenways-cgo800s-review-an-e-bike-made-for-city-life",
      urlToImage:
        "https://photos5.appleinsider.com/gallery/53105-106373-5F3FBC8C-BF70-4AA3-B91E-04B563AEBB72-xl.jpg",
      publishedAt: "2023-02-22T12:23:16Z",
      content:
        "Tenways CGO800S\r\nAppleInsider may earn an affiliate commission on purchases made through links on our site.\r\nThe Tenways CGO800S e-bike, with its single-gear belt drive and incredibly quiet rear moto… [+5258 chars]",
    },
    {
      source: {
        id: null,
        name: "Abduzeedo.com",
      },
      author: "abduzeedo",
      title:
        "The timeless appeal of Olivetti's industrial and minimalist design style",
      description:
        "The timeless appeal of Olivetti's industrial and minimalist design style\n \n\n abduzeedo0221—23\n Olivetti, the Italian manufacturer of office equipment, has made a significant impact on the world of industrial design. With their focus on functional, minimalist …",
      url: "https://abduzeedo.com/node/87730",
      urlToImage: null,
      publishedAt: "2023-02-22T04:40:55Z",
      content:
        "Olivetti, the Italian manufacturer of office equipment, has made a significant impact on the world of industrial design. With their focus on functional, minimalist design, Olivetti products have beco… [+2327 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Manuel Ramírez",
      title:
        "Cada vez se venden más smartwatches, los más baratos y los más caros son los reclamados",
      description:
        "Mientras las ventas de smartphones ha sufrido una caída estrepitosa, la de relojes inteligentes ha salido al paso de la inflación, aunque el último mes de 2022 se vio afectada.",
      url: "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230222/vez-venden-smartwatches-baratos-caros-reclamados/743425829_0.html",
      urlToImage:
        "https://s1.eestatic.com/2021/12/23/omicrono/software/636946621_231131953_1200x630.jpg",
      publishedAt: "2023-02-22T13:23:00Z",
      content:
        "La caída histórica de ventas de móviles sufrida en 2022 no tiene nada que ver con la de smartwatches, ya que éstos han mejorado sus cifras para crecer un 12 % año tras año (YoY) en 2022, sobre todo p… [+2831 chars]",
    },
    {
      source: {
        id: null,
        name: "Elespanol.com",
      },
      author: "Manuel Ramírez",
      title: "La isla dinámica llega a Android con lo último de realme",
      description:
        "El mismo vicepresidente de realme ha tomado su Twitter para mostrar una imagen de su versión de la isla dinámica o Dynamic Island del iPhone 14, aunque la ha borrado al poco, tenemos una captura de la misma.",
      url: "https://www.elespanol.com/elandroidelibre/noticias-y-novedades/20230222/isla-dinamica-llega-android-ultimo-realme/743425760_0.html",
      urlToImage:
        "https://s1.eestatic.com/2023/02/15/elandroidelibre/741686448_231126498_1200x630.jpg",
      publishedAt: "2023-02-22T12:01:00Z",
      content:
        "Realme fue de los primeros que anunció que iba a replicar la Dynamic Island del iPhone 14 Pro. Y es justamente hoy cuando su vicepresidente ha compartido una imagen de lo que ha denominado como Mini … [+1890 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "武者良太",
      title: "タフなApple Watch Ultraをエレガントに魅せるクリアケース",
      description:
        "Image:GoldenConceptゴツさのなかにもエレガント。高級iPhone/AppleWatchケースメーカーのGoldenConceptが、シリーズ初となるAppleWatchUltra用ケースをリリースしました。厚みのあるポリカーボネートで作られたクリアケースにシリコンゴム製の半透明ベルト、ローズゴールドのメタルパーツが散りばめられて、タフなイメージが強かったAppleWatchUlt",
      url: "https://www.gizmodo.jp/2023/02/apple-watch-ultra-golden-concept.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2023/02/21/RSTR-49-TR-CR_0002_690x.progressive.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2023-02-22T09:00:00Z",
      content:
        "iPhone/Apple WatchGolden ConceptApple Watch Ultra\r\nApple Watch Ultra\r\nImage: Golden Concept \r\nApple Watch UltraPower Mac G4 Cube\r\nImage: Golden Concept \r\nImage: Golden Concept \r\n132000Apple Watch Ult… [+25 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Eli Blumenthal",
      title:
        "Apple's MLS Season Pass: How to Watch, Stream Major League Soccer This Year CNET",
      description:
        "American soccer kicks off on Feb. 25, and Apple's new service is the only way to catch all the action.",
      url: "https://www.cnet.com/tech/services-and-software/apples-mls-season-pass-how-to-watch-stream-major-league-soccer-this-year/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/a3fbededbd8917522ded151e217b194de43bafdc/hub/2022/06/14/4a7cc388-05fd-4b9b-9d10-7366284da980/apple-mls-partnership-june-2022-big-jpg-large-2x.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-02-22T15:59:00Z",
      content:
        "Apple's sports ambitions have expanded beyond baseball. After broadcasting a host of live MLB games on Friday nights last year, on Feb. 25 the iPhone maker kicks off a 10-year deal with Major League … [+3533 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Erin Carson",
      title: "Apple TV Plus: Every New TV Show Arriving in February CNET",
      description: "Here's a complete list of shows coming in February.",
      url: "https://www.cnet.com/culture/entertainment/apple-tv-plus-every-new-tv-show-arriving-in-february-to-catch-this-week/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/87923c0381450085c617be26aa0be090fed2d134/hub/2023/02/01/f1b01013-0152-4f65-9f1b-cd7b8d0e367d/the-reluctant-traveler-photo-010601-cropped.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-02-22T16:21:16Z",
      content:
        "Apple TV Plus is stocked with big names and some hit shows, from the first season of Severance to the heartwarmingly adorable Ted Lasso to Reese Witherspoon's Emmy-winning drama The Morning Show.\r\nLi… [+7905 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Meara Isenberg",
      title: "How to Watch the Unrated Version of 'M3GAN' This Week CNET",
      description:
        "A version with new footage is hitting streaming service Peacock.",
      url: "https://www.cnet.com/culture/entertainment/how-to-watch-the-unrated-version-of-m3gan-this-week/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/3b54d99fff054ea66efcb83836007eda7dc31e39/hub/2022/10/11/1b6b421e-0697-4ee9-8ba8-e0f8173aad6c/m3gan-blumhouse-trailer.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-02-22T17:19:00Z",
      content:
        "M3GAN, the doll whose unnatural dance moves remain unmatched, made her PG-13-rated debut in January. Now, an unrated version of the Blumhouse satirical horror hit is coming to DVD, digital and stream… [+1738 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Abrar Al-Heeti",
      title:
        "Amazon Fire TV Can Now Stream Audio Directly to Hearing Implants CNET",
      description:
        "The update lets people who are deaf or hard of hearing more seamlessly watch TV.",
      url: "https://www.cnet.com/tech/home-entertainment/amazon-fire-tv-can-now-stream-audio-directly-to-hearing-implants/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/7dd1890f986e11c6603d99c936999c4681f7f2f2/hub/2023/02/21/d0d851c0-ea89-428d-9478-ef4563e9735b/fire-tv-asha-cochlear-2.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-02-22T13:30:00Z",
      content:
        "Amazon Fire TV customers with hearing loss can now stream audio directly to their hearing implants, Amazon and hearing tech company Cochlear said Wednesday. This update lets cochlear implant users mo… [+2225 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Kourtnee Jackson",
      title:
        "Easily Track Your Favorite Shows on Streaming Services With These Apps CNET",
      description:
        "Need to know release dates on Netflix, HBO Max, Disney Plus and more? One of these five apps can help.",
      url: "https://www.cnet.com/tech/services-and-software/easily-track-favorite-shows-streaming-services-with-these-apps/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/bceba6952a69797bb5bfd4117df225610beffff1/hub/2022/07/07/94113567-398a-4236-8035-566a4f985979/gettyimages-532394337-woman-with-remote.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2023-02-22T12:30:03Z",
      content:
        "Trying to keep track of when shows like Attack on Titan, The Mandalorian season 3 and Outer Banks return to TV? Google is likely your go-to when you want to know a title's exact release date on Netfl… [+8730 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Queenie Wong",
      title:
        "The Supreme Court Hears Case That Could Radically Shake Up the Internet CNET",
      description:
        "The highest court in the US heard oral arguments on Tuesday and Wednesday targeting Big Tech that could affect a decades-old law protecting free speech online.",
      url: "https://www.cnet.com/news/politics/the-supreme-court-hears-case-that-could-radically-shake-up-the-internet/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/999d18eaace30b35c493e78ddc89db42abe955eb/hub/2023/02/17/12800417-e20d-47bd-9ffb-cd23534b49c5/gettyimages-1027065310.jpg?auto=webp&fit=crop&height=675&width=1200",
      publishedAt: "2023-02-22T16:30:00Z",
      content:
        "The future of online speech and the internet is in the hands of the US Supreme Court.  \r\nOn Tuesday, the Supreme Court heard oral arguments in one of two high-profile cases involving Google-owned You… [+10417 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Tristan",
      title:
        "Apple a déjà gagné face à Android, c’est la faute à la génération Z",
      description:
        "Le Financial Times vient de publier un nouveau rapport démontrant la popularité d'Apple auprès de la nouvelle génération. \nApple a déjà gagné face à Android, c’est la faute à la génération Z",
      url: "https://www.journaldugeek.com/?p=50396069",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/09/ios-16-bouton-recherche.jpg",
      publishedAt: "2023-02-22T17:00:10Z",
      content:
        "Le Financial Times vient de publier un nouveau rapport démontrant la popularité d'Apple auprès de la nouvelle génération.Depuis lexplosion dans le courant des années 2000 des smartphones, deux modèle… [+2779 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "JDG Media",
      title:
        "Affolant : la Xbox est quasi gratuite chez Bouygues Télécom avec la fibre !",
      description:
        "Proposer une console de jeux ET une box dans une seule et même offre ? C'est audacieux, et Bouygues Télécom l'a fait.\nAffolant : la Xbox est quasi gratuite chez Bouygues Télécom avec la fibre !",
      url: "https://www.journaldugeek.com/2023/02/22/affolant-xbox-gratuite-bouygues-telecom-fibre/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2023/02/bbox-xbox.jpg",
      publishedAt: "2023-02-22T15:15:24Z",
      content:
        "Proposer une console de jeux ET une box dans une seule et même offre ? C'est audacieux, et Bouygues Télécom l'a fait.Accrochez-vous : la console de jeux Xbox Series S est à un euro seulement chez Bou… [+5104 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Sebastian Danila",
      title:
        "Pour quelques heures encore, l’iPhone 14 devient moins cher que l’iPhone 13 ",
      description:
        "Seulement ce mercredi, l'iPhone 14 d'Apple s'affiche à un prix imbattable. C'est du côté de l'enseigne en ligne Rakuten qu'il faut se rendre pour se procurer le dernier smartphone d'Apple à moindre coût.\nPour quelques heures encore, l’iPhone 14 devient moins …",
      url: "https://www.journaldugeek.com/bon-plan/pour-quelques-heures-encore-liphone-14-devient-moins-cher-que-liphone-13/",
      urlToImage:
        "https://www.journaldugeek.com/content/uploads/2022/12/iphone-14-1.jpg",
      publishedAt: "2023-02-22T13:15:15Z",
      content:
        "Seulement ce mercredi, l'iPhone 14 d'Apple s'affiche à un prix imbattable. C'est du côté de l'enseigne en ligne Rakuten qu'il faut se rendre pour se procurer le dernier smartphone d'Apple à moindre c… [+4011 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Apple Pencil, guía a fondo: todo lo que puedes hacer con el lápiz de Apple para sacar el máximo partido a tu iPad",
      description:
        "El Apple Pencil es un lápiz digital diseñado específicamente para su uso en el iPad. Una herramienta realmente útil para dibujar, tomar notas, escribir y hacer anotaciones en documentos PDF, por ejemplo. Su precisión y sensibilidad a la presión lo hacen senti…",
      url: "https://www.applesfera.com/nuevo/apple-pencil-guia-a-fondo-todo-que-puedes-hacer-lapiz-apple-para-sacar-maximo-partido-a-tu-ipad",
      urlToImage: "https://i.blogs.es/e57273/hero/840_560.jpeg",
      publishedAt: "2023-02-22T17:00:54Z",
      content:
        "El Apple Pencil es un lápiz digital diseñado específicamente para su uso en el iPad. Una herramienta realmente útil para dibujar, tomar notas, escribir y hacer anotaciones en documentos PDF, por ejem… [+8238 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Cómo dibujar formas perfectas con Apple Pencil y otros trucos poco conocidos para aprovecharlo al máximo",
      description:
        "El Apple Pencil es una herramienta imprescindible para interactuar con nuestro iPad de una forma que los dedos de la mano no nos permiten. Dibujar, anota, resaltar, marcar y muchos otros usos pasan a un siguiente nivel al poder hacerlos con la misma facilidad…",
      url: "https://www.applesfera.com/tutoriales/como-dibujar-formas-perfectas-apple-pencil-otros-trucos-poco-conocidos-para-aprovecharlo-al-maximo",
      urlToImage: "https://i.blogs.es/d4c6cc/hero/840_560.jpeg",
      publishedAt: "2023-02-22T07:45:03Z",
      content:
        "El Apple Pencil es una herramienta imprescindible para interactuar con nuestro iPad de una forma que los dedos de la mano no nos permiten. Dibujar, anota, resaltar, marcar y muchos otros usos pasan a… [+3032 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Steve Jobs se marchó de Apple dando un portazo. Volvió con una idea de 500 millones",
      description:
        "Steve Jobs es uno de las personas más famosas e influyentes del siglo XXI. La mayoría de nosotros conocemos su nombre y su legado en la tecnología, pero su carrera no siempre fue un camino fácil. Jobs fue despedido de Apple en 1985 en una decisión que cambiar…",
      url: "https://www.applesfera.com/curiosidades/steve-jobs-se-marcho-apple-dando-portazo-volvio-idea-500-millones",
      urlToImage: "https://i.blogs.es/07e2d7/hero/840_560.jpeg",
      publishedAt: "2023-02-22T09:53:59Z",
      content:
        "Steve Jobs es uno de las personas más famosas e influyentes del siglo XXI. La mayoría de nosotros conocemos su nombre y su legado en la tecnología, pero su carrera no siempre fue un camino fácil. Job… [+3990 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Isra Fdez",
      title:
        "Nuevos AirPods Max 2: diseño, precio, fecha de lanzamiento y todo lo que sabemos sobre ellos",
      description:
        "Si hablamos de calidad de construcción y sonido, no hay debate: los primeros AirPods Max son los mejores cascos jamás fabricados por Apple. Sin embargo, estos auriculares orientados a los usuarios más exigentes y los melómanos llevan demasiado tiempo sin un s…",
      url: "https://www.applesfera.com/nuevo/airpods-max-2-informacion",
      urlToImage: "https://i.blogs.es/ec9da3/hero2/840_560.jpeg",
      publishedAt: "2023-02-22T12:00:51Z",
      content:
        "Si hablamos de calidad de construcción y sonido, no hay debate: los primeros AirPods Max son los mejores cascos jamás fabricados por Apple. Sin embargo, estos auriculares orientados a los usuarios má… [+4598 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "Así gestiono mi lista de la compra en Recordatorios sin tocar el iPhone para nada",
      description:
        "La típica lista de la compra para ir al supermercado es algo que todos tenemos. Y si eres de los que ya ha dejado atrás los papelitos para apuntarla, seguro que la tienes apuntada en tu iPhone. Más allá del 'Oye Siri', hay infinidad de formas de hacerlo y más…",
      url: "https://www.applesfera.com/tutoriales/asi-gestiono-mi-lista-compra-recordatorios-tocar-iphone-para-nada",
      urlToImage: "https://i.blogs.es/dbed54/lista-compra-iphone/840_560.jpeg",
      publishedAt: "2023-02-22T15:02:59Z",
      content:
        "La típica lista de la compra para ir al supermercado es algo que todos tenemos. Y si eres de los que ya ha dejado atrás los papelitos para apuntarla, seguro que la tienes apuntada en tu iPhone. Más a… [+2308 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "Miguel López",
      title:
        "La jefa de 'Ted Lasso' co-presentará Eurovisión 2023: los usuarios de Apple TV+ la veremos en el concurso europeo por excelencia",
      description:
        "Si has visto 'Ted Lasso' (y si estás leyendo esto probablemente es que sí), he aquí una curiosidad que puede darte un motivo para sonreír: una de sus principales actrices, Hannah Waddingham, co-presentará el festival de Eurovisión 2023 que tendrá lugar esta p…",
      url: "https://www.applesfera.com/curiosidades/jefa-ted-lasso-co-presentara-eurovision-2023-usuarios-apple-tv-veremos-concurso-europeo-excelencia",
      urlToImage:
        "https://i.blogs.es/fd1262/hannah-waddingham-eurovision/840_560.jpeg",
      publishedAt: "2023-02-22T13:00:56Z",
      content:
        "Si has visto 'Ted Lasso' (y si estás leyendo esto probablemente es que sí), he aquí una curiosidad que puede darte un motivo para sonreír: una de sus principales actrices, Hannah Waddingham, co-prese… [+1460 chars]",
    },
    {
      source: {
        id: null,
        name: "Applesfera.com",
      },
      author: "David Bernal Raspall",
      title:
        "Cómo grabar la pantalla de nuestro iPhone o iPad, fácilmente y sin trucos",
      description:
        "Nuestros dispositivos móviles se han convertido en herramientas indispensables en nuestra vida diaria. Además de comunicarnos con nuestros seres queridos, también nos permiten trabajar, estudiar y entretenernos. Ya hablemos de los nuevos iPhone 14 Pro o de lo…",
      url: "https://www.applesfera.com/tutoriales/como-grabar-pantalla-nuestro-iphone-ipad-facilmente-trucos",
      urlToImage: "https://i.blogs.es/3ca394/hero/840_560.jpeg",
      publishedAt: "2023-02-22T16:00:52Z",
      content:
        "Nuestros dispositivos móviles se han convertido en herramientas indispensables en nuestra vida diaria. Además de comunicarnos con nuestros seres queridos, también nos permiten trabajar, estudiar y en… [+3071 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Kelvin Ekun",
      title: "Which MacBook Pro Should You Buy?",
      description:
        "Apple offers the MacBook Pro at multiple price points in varying screen sizes, but which one's ideal for you? We'll help you decide.",
      url: "https://www.makeuseof.com/which-macbook-pro-should-you-buy/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/01/14-inch-macbook-pro-on-a-table-in-the-dark.jpg",
      publishedAt: "2023-02-22T11:16:16Z",
      content:
        "There are several models to choose from if you're in the market for a MacBook Pro. Apple has continued to update and improve its MacBook Pro lineup, offering a range of options with advanced specific… [+4570 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Shujaa Imran",
      title: "What Is Disk Utility in macOS? (And How to Use It)",
      description:
        "You can count on Disk Utility when you want to manage your Mac's internal or external storage drives. Here, you can learn all about it.",
      url: "https://www.makeuseof.com/what-is-mac-disk-utility-and-how-to-use/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/disk-utility-mac-featured.jpg",
      publishedAt: "2023-02-22T13:30:16Z",
      content:
        "Disk Utility is the go-to tool if you need to resolve any drive errors or organize your drive storage on your Mac. Disk Utility is built into macOS and can prove to be very useful if you know how to … [+5917 chars]",
    },
    {
      source: {
        id: null,
        name: "MakeUseOf",
      },
      author: "Angela Yates",
      title: "How to Make Power Napping Easier Using Your Smartphone",
      description:
        "Grabbing a bit of afternoon shuteye can do wonders for your energy and well-being, but it's not always easy. Use these apps and tips to help you nap.",
      url: "https://www.makeuseof.com/power-nap-easier-smartphone/",
      urlToImage:
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/02/a-man-in-a-white-tshirt-taking-a-nap.jpg",
      publishedAt: "2023-02-22T16:46:17Z",
      content:
        "Believe it or not, taking a mid-afternoon nap is not only a beneficial habit for young children and the elderly. Although most adults, particularly people of working age, struggle to find the opportu… [+4428 chars]",
    },
    {
      source: {
        id: null,
        name: "Phandroid News for Android",
      },
      author: "Tyler Lee",
      title:
        "The Honor Magic5 Lite is the reason why we shouldn’t be so quick to dismiss mid-range phones",
      description:
        "Honor’s latest mid-range phone, the Magic5 Lite, has shown itself to have an impressive battery life and could be worth checking out.\nThe post The Honor Magic5 Lite is the reason why we shouldn’t be so quick to dismiss mid-range phones first appeared on Phand…",
      url: "https://phandroid.com/2023/02/22/the-honor-magic5-lite-is-the-reason-why-we-shouldnt-be-so-quick-to-dismiss-mid-range-phones/",
      urlToImage:
        "https://phandroid.com/wp-content/uploads/2023/02/HONOR-Magic5-Lite_Scenario-photo_All-colour-640x360.jpg",
      publishedAt: "2023-02-22T16:41:14Z",
      content:
        "When we think of smartphones, usually the handsets that get all the attention are flagships from companies like Apple, Samsung, and so on. To be fair, these phones do feature the best of the best har… [+1480 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Setra",
      title: "L’application de clé de voiture arrive chez Apple",
      description:
        "Car Key Tests est la nouvelle application Apple pour les constructeurs automobiles.",
      url: "https://www.presse-citron.net/lapplication-de-cle-de-voiture-arrive-chez-apple/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2022/10/test-iphone-14-plus-autonomie.jpg",
      publishedAt: "2023-02-22T08:30:21Z",
      content:
        "<ul><li>Apple lance une application clé de voiture sur lApp Store</li><li>Celle-ci nest pas destinée au grand public, mais aux constructeurs automobiles</li><li>En effet, Car Key Tests permet aux con… [+2929 chars]",
    },
    {
      source: {
        id: null,
        name: "The A.V. Club",
      },
      author: "Matt Schimkowitz",
      title:
        'Ernie Hudson says being "pushed aside" in Ghostbusters marketing "felt deliberate"',
      description:
        "It’s not a new criticism that Ernie Hudson’s Ghostbusters character, Winston Zeddemore, is among modern moviemaking’s most unfairly treated characters. Zeddemore’s accomplishments include saving New York City from a giant marshmallow man, driving the Statue o…",
      url: "https://www.avclub.com/ernie-hudson-says-it-took-10-years-to-get-over-ghostbus-1850143108",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/da542afcf55c81a9d743cb19580f9631.png",
      publishedAt: "2023-02-22T01:49:00Z",
      content:
        "Its not a new criticism that Ernie Hudsons Ghostbusters character, Winston Zeddemore, is among modern moviemakings most unfairly treated characters. Zeddemores accomplishments include saving New York… [+3540 chars]",
    },
    {
      source: {
        id: null,
        name: "Jalopnik",
      },
      author: "José Rodríguez Jr.",
      title: "What New Car Feature Would You Pay to Have Removed?",
      description:
        "BMW has taken on a lot of criticism as of late for doubling down on the decision to put certain features of its new cars under a subscription model. Some of the newest cars to wear the blue-and-white roundel will come with equipment that owners will have to p…",
      url: "https://jalopnik.com/what-new-car-feature-would-you-pay-to-have-removed-1850141817",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/196bb9b64f4d1b73387b4703745e976e.jpg",
      publishedAt: "2023-02-22T17:00:00Z",
      content:
        "BMW has taken on a lot of criticism as of late for doubling down on the decision to put certain features of its new cars under a subscription model. Some of the newest cars to wear the blue-and-white… [+1890 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka Android",
      },
      author: "Iván Ramírez",
      title:
        "El último vuelo del Angry Birds original: desaparecerá mañana de Google Play",
      description:
        "Juegos de Angry Birds hay muchos y hasta demasiados, pero Angry Birds original, el primero, solo hay uno. Se lanzó en 2009 y tras la llegada de una tonelada de secuelas se renombró a Rovio Classics: Angry Birds. Este jueves emprende el vuelo hacia su jubilaci…",
      url: "https://www.xatakandroid.com/juegos-android/ultimo-vuelo-angry-birds-original-desaparecera-manana-google-play",
      urlToImage: "https://i.blogs.es/1df55d/angry/840_560.jpeg",
      publishedAt: "2023-02-22T07:00:50Z",
      content:
        "Juegos de Angry Birds hay muchos y hasta demasiados, pero Angry Birds original, el primero, solo hay uno. Se lanzó en 2009 y tras la llegada de una tonelada de secuelas se renombró a Rovio Classics: … [+1979 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (Hypebeast)",
      title:
        "Unopened First Generation Apple iPhone Sells for $63,356 USD at Auction",
      description:
        "Following a staggering $39,339.60 USD sale, LCG Auctions is back with yet another monumental sale of an unopened First Generation Apple iPhone. Despite a starting bid of $2,500 USD, the auction was predicted to pull in $50,000 or more and finished with a tota…",
      url: "https://hypebeast.com/2023/2/unopened-first-generation-2007-apple-iphone-63356-usd-auction-sale-info",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Ffirst-generation-2007-apple-iphone-63356-usd-auction-sale-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2023-02-22T08:34:25Z",
      content:
        "Following a staggering $39,339.60 USD sale, LCG Auctions is back with yet another monumental sale of an unopened First Generation Apple iPhone. Despite a starting bid of $2,500 USD, the auction was p… [+993 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "Ryan McNeal",
      title: "Leaked images reveal new Dynamic Island-like feature for Android",
      description: "Realme's Dynamic Island clone is called MiniCapsule.",
      url: "https://www.androidauthority.com/realme-dynamic-island-clone-3288152/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2023/02/realme-mini-capsule-leak-2-1.jpg",
      publishedAt: "2023-02-22T17:06:49Z",
      content:
        "<ul><li>Realmes Madhav Sheth tweeted out an image of the companys MiniCapsule feature, only to delete the tweet later.</li><li>MiniCapsule appears to be an Android clone of the iPhone 14 Pros Dynamic… [+1565 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "Ankit Banerjee",
      title: "What is DoorDash, and how does it work?",
      description:
        "DoorDash is a very popular food and grocery delivery services. Here's what you need to know about how DoorDash works and how to use it.",
      url: "https://www.androidauthority.com/how-doordash-works-use-3287445/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2023/02/doordash-featured-image.jpg",
      publishedAt: "2023-02-22T03:32:01Z",
      content:
        "Food delivery services make it a breeze to enjoy restaurant food in the comfort of your own home. Despite various fees and restaurant surcharges that add a lot more to your bill, the convenience is u… [+8484 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Authority",
      },
      author: "Dhruv Bhutani",
      title:
        "Android’s new Fast Pair setup process is awesome on the Galaxy S23",
      description:
        "Google's new Fast Pair for Android makes setting up a new phone much easier than before. We tested it on the Samsung Galaxy S23 series.",
      url: "https://www.androidauthority.com/android-fast-pair-setup-samsung-galaxy-s23-3286497/",
      urlToImage:
        "https://www.androidauthority.com/wp-content/uploads/2023/02/fast-pair-qr-code-galaxy-s23-ultra.jpg",
      publishedAt: "2023-02-22T14:00:59Z",
      content:
        "Setting up even the best Android phones is not convenient. The thought of transferring all my data and apps, an activity I partake in at least a couple of times a month, fills me with dread. It takes… [+5190 chars]",
    },
    {
      source: {
        id: null,
        name: "Presse-citron",
      },
      author: "Romain Vitt",
      title: "Test HomePod 2 : retour réussi pour l’enceinte premium Apple ?",
      description:
        "Deux ans après l’abandon du premier HomePod, Apple rétropédalait début 2023 en lançant le HomePod 2, une nouvelle version de son enceinte connectée premium. Un retour réussi ? Réponse après quelques semaines de test.",
      url: "https://www.presse-citron.net/test-homepod-2-apple/",
      urlToImage:
        "https://www.presse-citron.net/app/uploads/2023/02/test-homepod2-apple-design.jpg",
      publishedAt: "2023-02-22T07:00:02Z",
      content:
        "Six ans après la sortie du premier HomePod, et deux ans après son abandon, Apple surprenait tout le monde début 2023 en dévoilant le HomePod 2.\r\nAvec cette nouvelle génération au design identique à l… [+7862 chars]",
    },
    {
      source: {
        id: null,
        name: "The A.V. Club",
      },
      author: "Christina Izzo",
      title:
        "Joe and Luis go head-to-head on The Real Househusbands Of New Jersey",
      description:
        "The ever-increasing involvement of the “Househusbands”—the spouses of Teresa Giudice, Melissa Gorga, Dolores Catania, and the rest of The Real Housewives Of New Jersey cast—has been a point of contention among longtime fans of the franchise. Some feel like fo…",
      url: "https://www.avclub.com/the-real-housewives-of-new-jersey-review-season-13-ep-1850144532",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/5d5af4a079007b9672f81a09816254dc.jpg",
      publishedAt: "2023-02-22T14:52:00Z",
      content:
        "The ever-increasing involvement of the Househusbandsthe spouses of Teresa Giudice, Melissa Gorga, Dolores Catania, and the rest of The Real Housewives Of New Jerseycasthas been a point of contention … [+4855 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (Hypebeast)",
      title: "Leaked Image Shows Apple iPhone 15 Pro USB-C Port",
      description:
        "Following a note that Apple will comply with the European Parliament law that requires all mobile phones, tablets, and cameras sold in the EU to have a USB-C charging port by the end of 2024, a leaked image of the Apple iPhone 15 Pro with USB-C port has surfa…",
      url: "https://hypebeast.com/2023/2/apple-iphone-15-pro-usb-c-port-leaked-image-info",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Fapple-iphone-15-pro-leaked-image-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2023-02-22T03:25:46Z",
      content:
        "Following a note that Applewill comply with the European Parliament law that requires all mobile phones, tablets, and cameras sold in the EU to have a USB-C charging port by the end of 2024, a leaked… [+1067 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (Hypebeast)",
      title:
        "Sony Debuts New Mid-Range Headphone Model Offering Active Noise Cancellation",
      description:
        "Sony is continuing to build out its lineup of over-ear headphones with its latest model, the WH-CH720N. Billed as packing Sony’s lightest headband ever, the new pair lands as a comparably cheaper alternative to the company’s $400 USD flagship WH-1000XM4.With …",
      url: "https://hypebeast.com/2023/2/sony-over-ear-headphones-whch720n",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2FSony-Debuts-Mid-Range-Over-Ear-Noise-Cancelling-Headphone-Model-TW.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2023-02-22T15:39:06Z",
      content:
        "Sony is continuing to build out its lineup of over-ear headphones with its latest model, the WH-CH720N. Billed as packing Sonys lightest headband ever, the new pair lands as a comparably cheaper alte… [+1145 chars]",
    },
    {
      source: {
        id: null,
        name: "HYPEBEAST",
      },
      author: "info@hypebeast.com (Hypebeast)",
      title: "CAMO Proves 'Pressure Makes Diamonds' On Her Debut Album",
      description:
        'Following weeks of teasing and the release of "MAPSI," South Korean artist CAMO has now dropped her debut album, Pressure Makes Diamonds. The star behind independent label 502 expressed her distinct East-meets-West rap and R&B sound on the 13-track project th…',
      url: "https://hypebeast.com/2023/2/camo-pressure-makes-diamonds-album-release-listen-info",
      urlToImage:
        "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F02%2Fcamo-pressure-makes-diamonds-album-release-listen-info-tw.jpg?w=960&cbr=1&q=90&fit=max",
      publishedAt: "2023-02-22T09:45:03Z",
      content:
        "Following weeks of teasing and the release of “MAPSI,” South Korean artist CAMO has now dropped her debut album, Pressure Makes Diamonds. The star behind independent label 502 expressed her distinct … [+1430 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "José Adorno",
      title:
        "Apple orders all of TSMC’s 3nm chip supply for iPhone 15 Pro, M3 Macs",
      description:
        "To ensure the upcoming iPhone 15 Pro won’t be in short supply, Apple has secured the entire first batch of 3nm chips that TSMC has …\nThe post Apple orders all of TSMC’s 3nm chip supply for iPhone 15 Pro, M3 Macs appeared first on BGR.",
      url: "https://bgr.com/tech/apple-orders-all-of-tsmcs-3nm-chip-supply-for-iphone-15-pro-m3-macs/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2022/09/apple-iphone-14-pro-4.jpg?quality=82&strip=all",
      publishedAt: "2023-02-22T14:16:29Z",
      content:
        "To ensure the upcoming iPhone 15 Pro won’t be in short supply, Apple has secured the entire first batch of 3nm chips that TSMC has been mass producing since December. According to a paywalled story b… [+1606 chars]",
    },
    {
      source: {
        id: null,
        name: "BGR",
      },
      author: "José Adorno",
      title:
        "Apple’s made major progress with future blood glucose monitor for Watch",
      description:
        "A project dated back to the Steve Jobs era could soon become a reality as Apple has been working on a noninvasive and continuous blood …\nThe post Apple’s made major progress with future blood glucose monitor for Watch appeared first on BGR.",
      url: "https://bgr.com/tech/apples-made-major-progress-with-future-blood-glucose-monitor-for-watch/",
      urlToImage:
        "https://bgr.com/wp-content/uploads/2022/09/apple-watch-series-8-3.jpg?quality=82&strip=all",
      publishedAt: "2023-02-22T17:52:16Z",
      content:
        "A project dated back to the Steve Jobs era could become a reality as Apple has been working on a noninvasive and continuous blood glucose monitoring. The story, broke by Bloomberg’s Mark Gurman, deta… [+1815 chars]",
    },
    {
      source: {
        id: null,
        name: "Espinof.com",
      },
      author: "Albertini",
      title:
        "Estrenos (22 de febrero): 55 series, películas y documentales en Netflix, Amazon, HBO Max, Disney+, Movistar Plus+, Filmin y Apple TV+",
      description:
        "Miércoles (de Ceniza) y en lo que el mundo cristiano inaugura la cuaresma los estrenos no dejan de llegar a nuestras plataformas favoritas. Esta semana tenemos 55 series, películas y documentales que llegan desde hoy a Netflix, HBO Max, Prime Video, Filmin, M…",
      url: "https://www.espinof.com/estrenos/estrenos-22-febrero-series-peliculas-documentales-netflix-amazon-hbo-max-disney-plus-movistar-plus-filmin-apple-tv",
      urlToImage:
        "https://i.blogs.es/d75a81/advs_s1_digitalonesheet_mainka_27x40_pre_final_en-us_cps/840_560.jpeg",
      publishedAt: "2023-02-22T08:00:42Z",
      content:
        "Miércoles (de Ceniza) y en lo que el mundo cristiano inaugura la cuaresma los estrenos no dejan de llegar a nuestras plataformas favoritas. Esta semana tenemos 55 series, películas y documentales que… [+2708 chars]",
    },
    {
      source: {
        id: null,
        name: "Espinof.com",
      },
      author: "Jorge Loser",
      title:
        "Steven Spielberg hará realidad la mayor película nunca hecha: el director cumplirá el gran sueño de Stanley Kubrick convirtiendo 'Napoleón' en una miniserie para HBO",
      description:
        "Steven Spielberg ha soltado la bomba al revelar que ha estado involucrado durante al menos diez años, montando una gran producción sobre uno de los proyectos perdidos de Stanley Kubrick, una película biográfica a gran escala de Napoleón Bonaparte,que se conve…",
      url: "https://www.espinof.com/proyectos/steven-spielberg-hara-realidad-mayor-pelicula-nunca-hecha-director-cumplira-gran-sueno-stanley-kubrick-convirtiendo-napoleon-miniserie-para-hbo",
      urlToImage:
        "https://i.blogs.es/379a99/kubrick-and-spielberg/840_560.jpeg",
      publishedAt: "2023-02-22T08:30:44Z",
      content:
        "Steven Spielberg ha soltado la bomba al revelar que ha estado involucrado durante al menos diez años, montando una gran producción sobre uno de los proyectos perdidos de Stanley Kubrick, una película… [+2457 chars]",
    },
    {
      source: {
        id: null,
        name: "Torrentfreak.com",
      },
      author: "Andy Maxwell",
      title:
        "MPA: Pluto TV .m3u Playlists Facilitate Piracy on a Massive Scale",
      description:
        "A condition of watching streaming service Pluto TV is that users must use approved methods such as official apps. This is the reason that Pluto TV is free, since revenue is generated through advertising. Unofficial Pluto TV .m3u playlists are easy to access a…",
      url: "https://torrentfreak.com/mpa-pluto-tv-m3u-playlists-facilitate-piracy-on-a-massive-scale-230223/",
      urlToImage: "https://torrentfreak.com/images/pluto-tv-long.png",
      publishedAt: "2023-02-22T13:01:03Z",
      content:
        "For people who enjoy movies and TV shows but prefer not to hand over a monthly subscription, Pluto TV is one of the most popular legal services around. \r\nDepending on the region, Pluto TV offers up t… [+5834 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "Tammy Rogers",
      title:
        "Apple's iPhone 15 Pro has made off with all the 3nm chips – sorry Android",
      description:
        "Apple has ordered the entire supply of 3nm chips from TMSC, leaving none for Android-using manufacturers.",
      url: "https://www.imore.com/iphone/apples-iphone-15-pro-has-made-off-with-all-the-3nm-chips-sorry-android",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/VAw5EHVnRt76ed236NGToY-1200-80.jpg",
      publishedAt: "2023-02-22T14:44:34Z",
      content:
        "The next generation of mobile computing chips are almost here – and Apple just ordered all of them. According to a MacRumors report, TSMC has received an order for 100% of an initial lot of N3 chips.… [+1409 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "oliver@monkeymanmedia.com (Oliver Haslam)",
      title:
        "MLB returning to Apple TV Plus in 2023, but with some big changes",
      description:
        "A new report details a lineup change and the upcoming MLB schedule for AppleTV.",
      url: "https://www.imore.com/music-movies-tv/apple-tv/mlb-returning-to-apple-tv-plus-in-2023-but-with-some-big-changes",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/ubC92FYtYjebsFKMvSStTW-1200-80.jpg",
      publishedAt: "2023-02-22T09:38:43Z",
      content:
        "A new report claims that Major League Baseball is returning to Apple TV Plus on Friday nights, but with an overhaul to its broadcasting lineup that may help alleviate some of the problems fans had wi… [+1590 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "john-anthony.disotto@futurenet.com (John-Anthony Disotto)",
      title: "iPhone 15 screen sizes: How big will the iPhone 15 be?",
      description:
        "How big will the iPhone 15 screen sizes be? And what features will they have? Find out here!",
      url: "https://www.imore.com/iphone/iphone-15-screen-sizes-how-big-will-the-iphone-15-be",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/J3WXaLekc9dXNiHhRiEYX9-1200-80.jpg",
      publishedAt: "2023-02-22T15:32:59Z",
      content:
        "The iPhone 15 is looking like an exciting new upgrade to the iPhone. Rumored to have a new redesign, new features, and the introduction of USB-C to make charging easier, the iPhone 15 could be the de… [+2605 chars]",
    },
    {
      source: {
        id: null,
        name: "iMore",
      },
      author: "Tammy Rogers",
      title:
        "These $3000 headphones made me rethink what premium audio means in an AirPods Max world",
      description:
        "The AirPods Max like to think they're the cream of the crop – but really, they're barely even in the budget category of high-end audio.",
      url: "https://www.imore.com/airpods/these-dollar3000-headphones-made-me-rethink-what-premium-audio-means-in-an-airpods-max-world",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/Bpm37qdWZsHKHfqskNwim-1200-80.jpg",
      publishedAt: "2023-02-22T13:06:18Z",
      content:
        "The AirPods Max are a stunning pair of headphones. They feel great, look phenomenal, and sound to my ears… just fine. They’re also very expensive, at $549. \r\nThe thing is, in the grand scheme of expe… [+12705 chars]",
    },
    {
      source: {
        id: null,
        name: "Techmeme.com",
      },
      author: null,
      title:
        "Sources: Apple is working on a Jobs-era moonshot project to develop noninvasive blood glucose monitoring, using chip technology known as silicon photonics (Mark Gurman/Bloomberg)",
      description:
        "Mark Gurman / Bloomberg:\nSources: Apple is working on a Jobs-era moonshot project to develop noninvasive blood glucose monitoring, using chip technology known as silicon photonics  —  Apple Inc. has a moonshot-style project underway that dates back to the Ste…",
      url: "https://www.techmeme.com/230222/p24",
      urlToImage:
        "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iedsNKDljezw/v0/1200x800.jpg",
      publishedAt: "2023-02-22T17:47:52Z",
      content:
        "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 1:05 PM ET, February 22, 2023.\r\nThe most current version of the site as always is available at our home page.\r\nTo … [+71 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2>NewsMonkey - Top Headlines </h2>
          {this.state.articles.map((element)=>{console.log(element)}}
          <div className="row">
            <div className="col-md-4">
              <NewsItem
                title="myTitle"
                description="mydesc"
                imageUrl="https://i.guim.co.uk/img/media/bfbca04df13208fc078f0455fd844b87e858f618/0_173_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0ce8e800cde66a41744d4d9ece9a473f"
                newsUrl="TOOO"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;
