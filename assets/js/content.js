/*
  All site content, in both languages. This is the only file you need to edit for text.
  - Shared fields (photo, links, CV files, blog posts) are written once.
  - `icon` values are Material Symbols names: https://fonts.google.com/icons
  - Use **double asterisks** for bold text.
  - Items marked MOCK are placeholders to replace.
*/
window.SITE = {
  photo: 'https://picsum.photos/seed/olama-portrait/600/720', // MOCK: replace with 'assets/img/photo.jpg'
  email: 'olama.mohammadali2000@gmail.com',
  github: 'https://github.com/mohammadolama',

  cvs: [
    { id: 'academic', file: 'assets/cv-academic.pdf', icon: 'school' },
    { id: 'developer', file: 'assets/cv-developer.pdf', icon: 'code' },
  ],

  socials: [
    { id: 'email', url: 'mailto:olama.mohammadali2000@gmail.com', en: 'Email', fa: 'ایمیل' },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/mohammad-ali-olama-2946b6253/', en: 'LinkedIn', fa: 'لینکدین' },
    { id: 'scholar', url: 'https://scholar.google.com/', en: 'Google Scholar', fa: 'گوگل اسکالر' }, // TODO: your Scholar profile URL
    { id: 'github', url: 'https://github.com/mohammadolama', en: 'GitHub', fa: 'گیت‌هاب' },
  ],

  // Dates for the Journey timeline, keyed by journey `id`. Use 'YYYY' or 'YYYY-MM'; to: null means "ongoing".
  timeline: {
    bsc: { from: '2019', to: '2024', kind: 'study' },
    mahsan: { from: '2022-11', to: '2025-03', kind: 'work' },
    msc: { from: '2024', to: null, kind: 'study' },
  },

  nav: [
    { id: 'home', icon: 'home' },
    { id: 'about', icon: 'person' },
    { id: 'work', icon: 'science' },
    { id: 'journey', icon: 'route' },
    { id: 'blog', icon: 'edit_note' },
    { id: 'contact', icon: 'alternate_email' },
  ],

  /* ============================== ENGLISH ============================== */
  en: {
    name: 'Mohammad Ali Olama',
    short: 'Mohammad Ali',
    initials: 'MA',
    role: 'LLM researcher & developer',
    location: 'Tehran, Iran',
    born: 'Shiraz, Iran',
    hello: "Hi, I'm Mohammad Ali",
    headline: 'I study how AI models judge other AI models, and why they seem to love long answers.',
    intro: "I'm a data science master's student at TeIAS in Tehran, working on the evaluation of large language models. Before research pulled me in, I spent a few years building backend systems. Away from my desk, I'm usually reading, watching a film, or lost in a video game.",
    roles: ['an LLM researcher', 'a data scientist', 'a backend developer', 'a bookworm', 'a gamer'],
    keywords: ['LLM evaluation', 'Data science', 'Books', 'Backend', 'Teaching', 'Films', 'Games', 'Travel'],

    now: [
      { icon: 'menu_book', label: 'Reading', text: 'One Hundred Years of Solitude' }, // MOCK
      { icon: 'science', label: 'Working on', text: 'My thesis: teaching LLMs to be concise' },
      { icon: 'sports_esports', label: 'Playing', text: 'Hollow Knight' }, // MOCK
    ],

    focus: [
      { icon: 'balance', title: 'Evaluating LLMs', desc: 'When an AI grades other AIs, is it fair? I look for the hidden biases, like a taste for longer answers.' },
      { icon: 'terminal', title: 'Building software', desc: 'Three years as a backend developer taught me to love clean APIs and good tests.' },
      { icon: 'co_present', title: 'Teaching', desc: '8+ semesters as a teaching assistant, from data structures to machine learning.' },
    ],

    story: [
      'I was born in **Shiraz**, the city of poets and gardens, and now live in **Tehran**.',
      'I studied computer science at Sharif University of Technology, where I fell for algorithms and started teaching as a TA. Alongside my studies I worked as a backend developer at Mahsan, building an identity and access management platform.',
      "Today I'm doing my master's in data science at TeIAS. My research asks a simple question: when we use AI models to judge other AI models, can we trust the verdict?",
    ],
    funFact: 'Fun fact: my research is about AI models preferring long answers, so I try to keep mine short.',

    research: [
      { status: 'In progress', tag: 'Thesis', title: 'Does training for conciseness reduce length bias in LLM judges?', desc: "My master's thesis. I train a model to prefer short answers and test whether it becomes a fairer judge.", url: 'https://github.com/mohammadolama' },
      { status: '2025', tag: 'Co-author', title: 'Reflect or Shift?', desc: "We simulated 115 users with LLMs to see whether recommender systems quietly change people's tastes.", url: 'https://github.com/mohammadolama' },
      { status: '2025', tag: 'Benchmark', title: 'Verbosity bias in Persian LLMs', desc: 'A Persian benchmark showing that models prefer longer answers, even when they add nothing new.', url: 'https://github.com/mohammadolama' },
    ],
    projects: [
      { icon: 'image_search', title: 'Image Processing Suite', desc: 'Classic computer-vision algorithms from papers: template matching, hybrid images, texture synthesis.', tags: ['Python', 'OpenCV'], url: 'https://github.com/mohammadolama' },
      { icon: 'health_and_safety', title: 'Breast Cancer Detection', desc: 'Comparing random forests and neural networks on medical images.', tags: ['TensorFlow', 'scikit-learn'], url: 'https://github.com/mohammadolama' },
      { icon: 'apartment', title: 'Lyon Student Housing', desc: 'A small statistical model that scores flats by price, distance and transit.', tags: ['R'], url: 'https://github.com/mohammadolama' },
      { icon: 'grid_view', title: 'Connect Four AI', desc: 'A Connect Four player using minimax with alpha-beta pruning.', tags: ['Python'], url: 'https://github.com/mohammadolama' },
    ],

    journey: [
      { id: 'bsc', when: '2019 – 2024', icon: 'school', title: 'B.Sc. Computer Science', org: 'Sharif University of Technology', desc: 'Algorithms, systems, and my first teaching jobs.' },
      { id: 'mahsan', when: '2022 – 2025', icon: 'code', title: 'Backend Developer', org: 'Mahsan', desc: 'Java and Spring on an identity and access management product. I also became the team’s testing nerd.' },
      { id: 'msc', when: '2024 – now', icon: 'psychology', title: 'M.Sc. Data Science', org: 'TeIAS', desc: 'Research on LLM evaluation with Prof. Yaghoobzadeh and Prof. Bahrak.' },
    ],
    teaching: 'Teaching assistant for 8+ semesters at Sharif and TeIAS, including head TA for Algorithms, Machine Learning and Data Structures.',
    skills: ['Python', 'PyTorch', 'LLM evaluation', 'DPO', 'Statistics', 'Java', 'Spring Boot', 'Docker', 'R'],
    languages: [{ k: 'Persian', v: 'Native' }, { k: 'English', v: 'Fluent' }],

    hobbies: {
      books: [ // MOCK
        { title: 'One Hundred Years of Solitude', by: 'Gabriel García Márquez' },
        { title: 'The Blind Owl', by: 'Sadegh Hedayat' },
        { title: 'Dune', by: 'Frank Herbert' },
        { title: 'Sapiens', by: 'Yuval Noah Harari' },
        { title: 'The Little Prince', by: 'Antoine de Saint-Exupéry' },
      ],
      movies: [ // MOCK
        { title: 'Interstellar', year: 2014 },
        { title: 'A Separation', year: 2011 },
        { title: 'Spirited Away', year: 2001 },
        { title: 'The Shawshank Redemption', year: 1994 },
        { title: 'Inception', year: 2010 },
      ],
      games: [ // MOCK
        { title: 'The Witcher 3', meta: 'RPG' },
        { title: 'Red Dead Redemption 2', meta: 'Adventure' },
        { title: 'Hollow Knight', meta: 'Metroidvania' },
        { title: 'Portal 2', meta: 'Puzzle' },
        { title: 'Civilization VI', meta: 'Strategy' },
      ],
      travel: [ // MOCK
        { place: 'Shiraz', note: 'Where I was born' },
        { place: 'Tehran', note: 'Home now' },
        { place: 'Isfahan', note: 'Those bridges' },
        { place: 'Yazd', note: 'Wind-catchers' },
        { place: 'Next?', note: 'Suggestions welcome', next: true },
      ],
    },

    posts: [], // Blog posts will go here
    topics: ['Why AI judges love long answers', 'From Java backend to LLM research', 'Books that changed how I think'],

    chat: [
      { q: 'What do you research?', a: 'How LLMs judge other LLMs. Spoiler: they are suckers for long answers, even when the extra words add nothing.' },
      { q: 'What did you do before?', a: 'I was a backend developer at Mahsan for a few years, mostly Java and Spring. I still have a soft spot for a good test suite.' },
      { q: 'What do you do for fun?', a: 'Books first, always. Then films, video games, and travelling whenever I get the chance.' },
      { q: 'Where are you from?', a: 'I was born in Shiraz and now live in Tehran.' },
      { q: 'How can I reach you?', a: 'Email is best. You can also find me on LinkedIn, Google Scholar and GitHub.' },
    ],

    ui: {
      nav: { home: 'Home', about: 'About', work: 'Work', journey: 'Journey', blog: 'Blog', contact: 'Contact' },
      sub: {
        about: 'The person behind the papers.',
        work: 'Research I am doing and things I have built.',
        journey: 'Where I have studied, worked and taught, in short.',
        blog: 'Notes and essays. Coming soon.',
        contact: 'Say hello. I usually reply within a few days.',
      },
      focus: 'What I do', now: 'Lately', loves: 'Things I love', languages: 'Languages',
      research: 'Research', projects: 'Projects', all: 'All', moreOnGithub: 'More on GitHub',
      teaching: 'Teaching', toolbox: 'Toolbox', cv: { academic: 'Academic CV', developer: 'Developer CV' },
      hobby: { books: 'Books', movies: 'Movies', games: 'Games', travel: 'Travel' },
      soonTitle: 'The blog is warming up', soonText: 'I have a few posts brewing. Here is what is coming:',
      contactTitle: "Let's talk", contactText: 'Research collaboration, a job, a book recommendation, or just a hello. My inbox is open.',
      copy: 'Copy email', copied: 'Email copied', write: 'Send an email',
      moreAbout: 'More about me', seeWork: 'See my work', readJourney: 'My journey', getInTouch: 'Get in touch',
      iam: "I'm", iamEnd: '', born: 'Born in', lives: 'Lives in',
      palette: 'Colour theme', custom: 'Any colour', light: 'Light', dark: 'Dark', close: 'Close',
      switchTo: 'فارسی', switchShort: 'فا', mode: 'Light / dark', rights: 'Made with care',
      ask: 'Ask me something', typing: 'typing…', online: 'Usually replies fast',
      alongside: 'Alongside', studyWork: 'Studying & working', together: 'At the same time', today: 'Today',
    },
  },

  /* ============================== PERSIAN ============================== */
  fa: {
    name: 'محمدعلی علما',
    short: 'محمدعلی',
    initials: 'مع',
    role: 'پژوهشگر مدل‌های زبانی و توسعه‌دهنده',
    location: 'تهران',
    born: 'شیراز',
    hello: 'سلام، من محمدعلی هستم',
    headline: 'پژوهشم درباره‌ی این است که مدل‌های هوش مصنوعی چطور پاسخ مدل‌های دیگر را داوری می‌کنند، و چرا انگار جواب‌های طولانی را بیشتر می‌پسندند.',
    intro: 'دانشجوی کارشناسی ارشد علوم داده در مؤسسه‌ی مطالعات پیشرفته‌ی تهران (TeIAS) هستم و روی ارزیابی مدل‌های زبانی بزرگ کار می‌کنم. قبل از اینکه پژوهش من را جذب کند، چند سالی توسعه‌دهنده‌ی بک‌اند بودم. وقتی پشت میزم نیستم، احتمالاً مشغول کتاب خواندن، فیلم دیدن یا بازی‌ام.',
    roles: ['پژوهشگر مدل‌های زبانی', 'دانشمند داده', 'توسعه‌دهنده‌ی بک‌اند', 'عاشق کتاب', 'اهل بازی'],
    keywords: ['ارزیابی مدل‌های زبانی', 'علوم داده', 'کتاب', 'بک‌اند', 'تدریس', 'سینما', 'بازی', 'سفر'],

    now: [
      { icon: 'menu_book', label: 'در حال خواندن', text: 'صد سال تنهایی' },
      { icon: 'science', label: 'مشغول کار روی', text: 'پایان‌نامه‌ام: آموزش کوتاه‌نویسی به مدل‌های زبانی' },
      { icon: 'sports_esports', label: 'در حال بازی', text: 'Hollow Knight' },
    ],

    focus: [
      { icon: 'balance', title: 'ارزیابی مدل‌های زبانی', desc: 'وقتی یک هوش مصنوعی به پاسخ‌های هوش مصنوعی دیگری نمره می‌دهد، آیا منصف است؟ دنبال سوگیری‌های پنهانش می‌گردم؛ مثل علاقه به جواب‌های طولانی‌تر.' },
      { icon: 'terminal', title: 'ساختن نرم‌افزار', desc: 'سه سال توسعه‌ی بک‌اند به من یاد داد APIهای تمیز و تست‌های خوب را دوست داشته باشم.' },
      { icon: 'co_present', title: 'تدریس', desc: 'بیش از ۸ ترم دستیار آموزشی بوده‌ام؛ از ساختمان داده تا یادگیری ماشین.' },
    ],

    story: [
      'در **شیراز**، شهر شعر و باغ، به دنیا آمده‌ام و حالا در **تهران** زندگی می‌کنم.',
      'کارشناسی علوم کامپیوتر را در دانشگاه صنعتی شریف خواندم؛ همان‌جا عاشق الگوریتم‌ها شدم و دستیار آموزشی شدم. هم‌زمان با درس، در شرکت ماهسان توسعه‌دهنده‌ی بک‌اند بودم و روی یک سامانه‌ی مدیریت هویت و دسترسی کار می‌کردم.',
      'حالا دانشجوی کارشناسی ارشد علوم داده در TeIAS هستم. سؤال اصلی پژوهشم ساده است: وقتی از مدل‌های هوش مصنوعی برای داوری مدل‌های دیگر استفاده می‌کنیم، می‌شود به حکمشان اعتماد کرد؟',
    ],
    funFact: 'نکته‌ی جالب: پژوهشم درباره‌ی علاقه‌ی مدل‌ها به جواب‌های طولانی است؛ برای همین سعی می‌کنم جواب‌های خودم را کوتاه نگه دارم.',

    research: [
      { status: 'در حال انجام', tag: 'پایان‌نامه', title: 'آیا آموزش برای کوتاه‌نویسی، سوگیری طول را در داورهای مدل زبانی کم می‌کند؟', desc: 'پایان‌نامه‌ی ارشدم. مدلی را آموزش می‌دهم که جواب‌های کوتاه را ترجیح دهد و بررسی می‌کنم آیا داور منصف‌تری می‌شود.', url: 'https://github.com/mohammadolama' },
      { status: '۲۰۲۵', tag: 'هم‌نویسنده', title: 'بازتاب یا جابه‌جایی؟', desc: 'با مدل‌های زبانی ۱۱۵ کاربر شبیه‌سازی کردیم تا ببینیم آیا سامانه‌های پیشنهاددهنده بی‌صدا سلیقه‌ی آدم‌ها را تغییر می‌دهند.', url: 'https://github.com/mohammadolama' },
      { status: '۲۰۲۵', tag: 'بنچمارک', title: 'سوگیری پرگویی در مدل‌های زبانی فارسی', desc: 'یک بنچمارک فارسی که نشان می‌دهد مدل‌ها جواب‌های طولانی‌تر را ترجیح می‌دهند، حتی وقتی چیز تازه‌ای اضافه نمی‌کنند.', url: 'https://github.com/mohammadolama' },
    ],
    projects: [
      { icon: 'image_search', title: 'مجموعه‌ی پردازش تصویر', desc: 'پیاده‌سازی الگوریتم‌های کلاسیک بینایی ماشین از روی مقاله‌ها: تطبیق الگو، تصاویر ترکیبی و سنتز بافت.', tags: ['Python', 'OpenCV'], url: 'https://github.com/mohammadolama' },
      { icon: 'health_and_safety', title: 'تشخیص سرطان سینه', desc: 'مقایسه‌ی جنگل تصادفی و شبکه‌ی عصبی روی تصاویر پزشکی.', tags: ['TensorFlow', 'scikit-learn'], url: 'https://github.com/mohammadolama' },
      { icon: 'apartment', title: 'خوابگاه دانشجویی در لیون', desc: 'یک مدل آماری کوچک که خانه‌ها را بر اساس قیمت، فاصله و دسترسی به حمل‌ونقل امتیاز می‌دهد.', tags: ['R'], url: 'https://github.com/mohammadolama' },
      { icon: 'grid_view', title: 'هوش مصنوعی Connect Four', desc: 'بازیکنی برای Connect Four با الگوریتم مینیمکس و هرس آلفا-بتا.', tags: ['Python'], url: 'https://github.com/mohammadolama' },
    ],

    journey: [
      { id: 'bsc', when: '۲۰۱۹ – ۲۰۲۴', icon: 'school', title: 'کارشناسی علوم کامپیوتر', org: 'دانشگاه صنعتی شریف', desc: 'الگوریتم، سیستم‌ها و اولین تجربه‌های دستیار آموزشی.' },
      { id: 'mahsan', when: '۲۰۲۲ – ۲۰۲۵', icon: 'code', title: 'توسعه‌دهنده‌ی بک‌اند', org: 'شرکت ماهسان', desc: 'جاوا و Spring روی یک محصول مدیریت هویت و دسترسی. اینجا بود که شیفته‌ی تست‌نویسی شدم.' },
      { id: 'msc', when: '۲۰۲۴ – اکنون', icon: 'psychology', title: 'کارشناسی ارشد علوم داده', org: 'TeIAS', desc: 'پژوهش روی ارزیابی مدل‌های زبانی با دکتر یعقوب‌زاده و دکتر بحرک.' },
    ],
    teaching: 'بیش از ۸ ترم دستیار آموزشی در شریف و TeIAS؛ از جمله دستیار ارشد درس‌های الگوریتم، یادگیری ماشین و ساختمان داده.',
    skills: ['Python', 'PyTorch', 'ارزیابی LLM', 'DPO', 'آمار', 'Java', 'Spring Boot', 'Docker', 'R'],
    languages: [{ k: 'فارسی', v: 'زبان مادری' }, { k: 'انگلیسی', v: 'مسلط' }],

    hobbies: {
      books: [
        { title: 'صد سال تنهایی', by: 'گابریل گارسیا مارکز' },
        { title: 'بوف کور', by: 'صادق هدایت' },
        { title: 'تلماسه', by: 'فرانک هربرت' },
        { title: 'انسان خردمند', by: 'یووال نوح هراری' },
        { title: 'شازده کوچولو', by: 'آنتوان دو سنت‌اگزوپری' },
      ],
      movies: [
        { title: 'میان‌ستاره‌ای', year: 2014 },
        { title: 'جدایی نادر از سیمین', year: 2011 },
        { title: 'شهر اشباح', year: 2001 },
        { title: 'رستگاری در شاوشنک', year: 1994 },
        { title: 'تلقین', year: 2010 },
      ],
      games: [
        { title: 'The Witcher 3', meta: 'نقش‌آفرینی' },
        { title: 'Red Dead Redemption 2', meta: 'ماجرایی' },
        { title: 'Hollow Knight', meta: 'مترویدوانیا' },
        { title: 'Portal 2', meta: 'معمایی' },
        { title: 'Civilization VI', meta: 'استراتژی' },
      ],
      travel: [
        { place: 'شیراز', note: 'زادگاهم' },
        { place: 'تهران', note: 'خانه‌ی فعلی' },
        { place: 'اصفهان', note: 'آن پل‌ها' },
        { place: 'یزد', note: 'بادگیرها' },
        { place: 'مقصد بعدی؟', note: 'پیشنهاد دارید؟', next: true },
      ],
    },

    posts: [],
    topics: ['چرا داورهای هوش مصنوعی عاشق جواب‌های طولانی‌اند', 'از بک‌اند جاوا تا پژوهش در مدل‌های زبانی', 'کتاب‌هایی که طرز فکرم را عوض کردند'],

    chat: [
      { q: 'روی چه چیزی پژوهش می‌کنی؟', a: 'اینکه مدل‌های زبانی چطور مدل‌های دیگر را داوری می‌کنند. لو بدهم؟ دلشان برای جواب‌های طولانی ضعف می‌رود، حتی وقتی کلمه‌های اضافه چیزی به جواب اضافه نمی‌کنند.' },
      { q: 'قبلاً چه کار می‌کردی؟', a: 'چند سال در شرکت ماهسان توسعه‌دهنده‌ی بک‌اند بودم؛ بیشتر جاوا و Spring. هنوز هم یک مجموعه‌تست خوب حالم را خوب می‌کند.' },
      { q: 'برای تفریح چه می‌کنی؟', a: 'اول از همه کتاب. بعد فیلم، بازی‌های ویدیویی، و هر وقت فرصت شود سفر.' },
      { q: 'اهل کجایی؟', a: 'در شیراز به دنیا آمده‌ام و حالا در تهران زندگی می‌کنم.' },
      { q: 'چطور با تو در تماس باشم؟', a: 'ایمیل بهترین راه است. در لینکدین، گوگل اسکالر و گیت‌هاب هم هستم.' },
    ],

    ui: {
      nav: { home: 'خانه', about: 'درباره‌ی من', work: 'کارها', journey: 'مسیر', blog: 'وبلاگ', contact: 'تماس' },
      sub: {
        about: 'آدمی که پشت مقاله‌هاست.',
        work: 'پژوهش‌هایی که انجام می‌دهم و چیزهایی که ساخته‌ام.',
        journey: 'خلاصه‌ای از جاهایی که درس خوانده‌ام، کار کرده‌ام و درس داده‌ام.',
        blog: 'یادداشت‌ها و نوشته‌ها. به‌زودی.',
        contact: 'سلامی بفرستید. معمولاً ظرف چند روز جواب می‌دهم.',
      },
      focus: 'چه کار می‌کنم', now: 'این روزها', loves: 'چیزهایی که دوست دارم', languages: 'زبان‌ها',
      research: 'پژوهش', projects: 'پروژه‌ها', all: 'همه', moreOnGithub: 'بیشتر در گیت‌هاب',
      teaching: 'تدریس', toolbox: 'جعبه‌ابزار', cv: { academic: 'رزومه‌ی پژوهشی', developer: 'رزومه‌ی برنامه‌نویسی' },
      hobby: { books: 'کتاب', movies: 'فیلم', games: 'بازی', travel: 'سفر' },
      soonTitle: 'وبلاگ در حال آماده شدن است', soonText: 'چند نوشته در دست دارم. این‌ها به‌زودی می‌آیند:',
      contactTitle: 'گفت‌وگو کنیم', contactText: 'همکاری پژوهشی، فرصت شغلی، پیشنهاد یک کتاب خوب یا فقط یک سلام. همیشه خوشحال می‌شوم.',
      copy: 'کپی ایمیل', copied: 'ایمیل کپی شد', write: 'ارسال ایمیل',
      moreAbout: 'بیشتر درباره‌ی من', seeWork: 'کارهایم را ببینید', readJourney: 'مسیر من', getInTouch: 'در تماس باشید',
      iam: 'من', iamEnd: 'هستم', born: 'زادگاه', lives: 'محل زندگی',
      palette: 'رنگ‌بندی', custom: 'رنگ دلخواه', light: 'روشن', dark: 'تیره', close: 'بستن',
      switchTo: 'English', switchShort: 'EN', mode: 'روشن / تیره', rights: 'با حوصله ساخته شده',
      ask: 'از من بپرسید', typing: 'در حال نوشتن…', online: 'معمولاً زود جواب می‌دهد',
      alongside: 'هم‌زمان با', studyWork: 'درس و کار هم‌زمان', together: 'هم‌زمان', today: 'امروز',
    },
  },
};
