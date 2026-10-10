/*
  All site content, in both languages. This is the only file you need to edit for text.
  - Shared fields (photo, links, CV files, dates) are written once.
  - `icon` values are Material Symbols names: https://fonts.google.com/icons
  - Use **double asterisks** for bold text.
  - Items marked MOCK are placeholders to replace.
*/
window.SITE = {
  photo: 'https://picsum.photos/seed/olama-portrait/600/720', // MOCK: replace with 'assets/img/photo.jpg'
  email: 'olama.mohammadali2000@gmail.com',
  github: 'https://github.com/maolama',

  cvs: [
    { id: 'academic', file: 'assets/cv-academic.pdf', icon: 'school' },
    { id: 'developer', file: 'assets/cv-developer.pdf', icon: 'code' },
  ],

  socials: [
    { id: 'email', url: 'mailto:olama.mohammadali2000@gmail.com', en: 'Email', fa: 'ایمیل' },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/mohammadali-olama/', en: 'LinkedIn', fa: 'لینکدین' },
    { id: 'github', url: 'https://github.com/maolama', en: 'GitHub', fa: 'گیت‌هاب' },
    // { id: 'scholar', url: 'https://scholar.google.com/citations?user=…', en: 'Google Scholar', fa: 'گوگل اسکالر' },
  ],

  // Dates for the Journey road, keyed by journey `id`. Use 'YYYY' or 'YYYY-MM'; to: null means "ongoing".
  timeline: {
    bsc: { from: '2019', to: '2024', kind: 'study' },
    hovika: { from: '2022-11', to: '2025-03', kind: 'work' },
    msc: { from: '2024', to: null, kind: 'study' },
    moka: { from: '2025-10', to: null, kind: 'work' },
  },

  // Reading stats (update `pages` and `asOf` whenever you like).
  reading: { pages: 7007, since: '2026-03-21', asOf: '2026-10-10' },

  // Quotes I love. MOCK: replace with your own; `lang` lets English and Persian quotes sit side by side.
  quotes: [
    { text: 'A favourite line from a book goes here.', by: 'Author', source: 'Book title', lang: 'en' },
    { text: 'جمله‌ای زیبا از کتابی که خوانده‌اید اینجا می‌نشیند.', by: 'نویسنده', source: 'نام کتاب', lang: 'fa' },
    { text: 'Another quote that stayed with you.', by: 'Author', source: 'Book title', lang: 'en' },
  ],

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
    role: 'LLM researcher & backend developer',
    location: 'Tehran, Iran',
    born: 'Shiraz, Iran',
    hello: "Hi, I'm Mohammad Ali",
    headline: 'I study how AI models judge other AI models, and why they seem to love long answers.',
    intro: "I'm a data science master's student at TeIAS in Tehran, researching how large language models evaluate each other. By day I'm also a senior backend developer at Mahsan. Away from my desk, I'm usually reading, watching a film, or lost in a video game.",
    roles: ['an LLM researcher', 'a backend developer', 'a data scientist', 'a bookworm', 'a gamer'],
    keywords: ['LLM evaluation', 'Data science', 'Books', 'Backend', 'Films', 'Games', 'Travel'],
    tags: [
      { icon: 'balance', label: 'LLM researcher' },
      { icon: 'dns', label: 'Backend developer' },
      { icon: 'auto_stories', label: 'Bookworm' },
    ],

    now: [
      { icon: 'menu_book', label: 'Read this year', text: '7,007 pages since Nowruz' },
      { icon: 'science', label: 'Working on', text: 'My thesis on bias in LLM judges' },
      { icon: 'sports_esports', label: 'Favourite game', text: 'God of War' },
    ],

    focus: [
      { icon: 'balance', title: 'Evaluating LLMs', desc: 'When an AI grades other AIs, is it fair? I look for the hidden biases, like a taste for longer answers.' },
      { icon: 'dns', title: 'Building software', desc: 'Senior backend developer on a mobility-management platform: Java, Spring, and a soft spot for good tests.' },
    ],

    story: [
      'I was born in **Shiraz**, the city of poets and gardens, and now live in **Tehran**.',
      'I studied computer science at Sharif University of Technology and fell for algorithms. Halfway through, I joined Mahsan as a backend developer and became the team’s testing nerd.',
      "Today I'm doing my master's in data science at TeIAS, asking a simple question: when we use AI models to judge other AI models, can we trust the verdict? I also build backend systems at Mahsan.",
    ],
    funFact: 'Fun fact: my research is about AI models preferring long answers, so I try to keep mine short.',

    research: [
      { status: 'In progress', tag: 'Thesis', title: 'How training choices shape the biases of LLM judges', desc: 'Does a model trained to prefer concise answers become a less length-biased judge? Fine-tuning Qwen2.5 with DPO to find out.', url: null },
      { status: 'Under review · WSDM 2027', tag: 'Paper', title: 'Reflect or Shift?', desc: "115 LLM-simulated users meet four recommenders. Do recommenders quietly reshape people's tastes? (Equal-contribution co-author.)", url: null },
      { status: '2025', tag: 'Benchmark', title: 'Verbosity bias in LLM judges for Persian', desc: 'A 367-prompt bilingual benchmark: judges prefer longer answers even when the extra words add nothing.', url: 'https://github.com/maolama/verbosity-bias' },
    ],
    projects: [
      { kind: 'project', icon: 'tune', title: 'LLM fine-tuning & alignment', desc: 'LoRA fine-tuning, DPO alignment and an LLM-as-a-judge study, from the graduate LLM course.', tags: ['PEFT', 'TRL', 'Unsloth'], url: 'https://github.com/maolama/LLM-Course-Spring2025' },
      { kind: 'project', icon: 'database', title: 'Text-to-SQL agents', desc: 'A single prompt vs. a LangGraph router vs. a ReAct agent on the BIRD benchmark.', tags: ['LangGraph', 'Gemini'], url: 'https://github.com/maolama/LLM-Course-Spring2025' },
      { kind: 'project', icon: 'model_training', title: 'Instruction fine-tuning, compared', desc: 'Prompt tuning vs. LoRA vs. partial fine-tuning of Gemma-2-2B, without ready-made pipelines.', tags: ['PyTorch', 'PEFT'], url: 'https://github.com/maolama/DeepLearning-Course-Spring2025' },
      { kind: 'project', icon: 'keyboard', title: 'Persian NLP toolkit', desc: 'Typo-tolerant Persian city autocomplete (even with the wrong keyboard layout) and topic classification.', tags: ['scikit-learn', 'Hazm'], url: 'https://github.com/maolama/MachineLearning-Course-Fall2024' },
      { kind: 'project', icon: 'apartment', title: 'Lyon housing analysis', desc: 'Scraping, EDA and price prediction for student housing in Lyon.', tags: ['Python', 'R'], url: 'https://github.com/maolama/AppliedDataScience-Course-Fall2024' },
      { kind: 'fun', icon: 'translate', title: 'AI vocabulary builder', desc: 'A Google Sheet that fills itself with definitions and examples via Gemini, with quizzes and spaced repetition.', tags: ['Apps Script', 'Gemini'], url: 'https://github.com/maolama/google-sheets-ai-vocabulary-builder' },
      { kind: 'fun', icon: 'chess', title: 'Hex Chess', desc: 'Chess on a hexagonal board, because regular chess was too easy.', tags: ['Java'], url: 'https://github.com/maolama/Hex_Chess' },
      { kind: 'fun', icon: 'playing_cards', title: 'Hearthstone clone', desc: 'A card-battle game inspired by Hearthstone.', tags: ['Java'], url: 'https://github.com/maolama/Hearthstone' },
      { kind: 'fun', icon: 'grid_view', title: 'Connect Four AI', desc: 'Minimax with alpha-beta pruning. It beats me regularly.', tags: ['Python'], url: 'https://github.com/maolama/ConnectFour' },
      { kind: 'fun', icon: 'view_comfy_alt', title: 'Tetris & 2048', desc: 'Classic puzzle games, rebuilt from scratch in my first year.', tags: ['Java'], url: 'https://github.com/maolama/Tetris' },
    ],

    journey: [
      { id: 'bsc', when: '2019 – 2024', icon: 'school', title: 'B.Sc. Computer Science', org: 'Sharif University of Technology', desc: 'Algorithms, systems, and a growing love for machine learning.', url: 'https://www.sharif.edu/' },
      { id: 'hovika', when: 'Nov 2022 – Mar 2025', icon: 'code', title: 'Software Developer', org: 'Mahsan · Hovika (IAM)', desc: 'Backend for an identity and access management product. Raised test coverage from ~20% to 70%+.', url: null },
      { id: 'msc', when: '2024 – 2027', icon: 'psychology', title: 'M.Sc. Data Science', org: 'TeIAS', desc: 'Research on LLM evaluation with Prof. Yaghoobzadeh and Prof. Bahrak. Graduate scholarship.', url: 'https://teias.institute/' },
      { id: 'moka', when: 'Oct 2025 – now', icon: 'groups', title: 'Senior Backend Developer', org: 'Mahsan · Moka (EMM)', desc: 'Multi-tenancy, a big Spring Boot 4 / Java 25 upgrade, and an admin notification system.', url: null },
    ],
    teaching: 'Teaching assistant since 2020 at Sharif and TeIAS: head TA for Algorithms, Machine Learning, Mathematics for Data Science and Data Structures, and TA for Large Language Models.',
    awards: [
      { icon: 'emoji_events', text: 'Top 0.3% (458th of 164,278) in Iran’s national university entrance exam' },
      { icon: 'workspace_premium', text: 'TeIAS graduate scholarship and tuition waiver' },
    ],
    skills: ['LLM-as-a-judge', 'DPO', 'PyTorch', 'Transformers', 'LangGraph', 'Python', 'Java', 'Spring Boot', 'PostgreSQL', 'Elasticsearch', 'Docker'],
    languages: [{ k: 'Persian', v: 'Native' }, { k: 'English', v: 'Fluent' }],

    hobbies: {
      // Each item gets a small generated cover: `art` = Material Symbol + two colours.
      books: [
        { title: 'The Lord of the Rings', by: 'J.R.R. Tolkien', url: 'https://www.goodreads.com/search?q=The+Lord+of+the+Rings+Tolkien', cover: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif', art: { icon: 'radio_button_unchecked', c1: '#17120c', c2: '#3d2c12', fg: '#e8c25a' } },
        { title: 'Percy Jackson', by: 'Rick Riordan', url: 'https://www.goodreads.com/search?q=Percy+Jackson+Riordan', cover: 'https://upload.wikimedia.org/wikipedia/en/3/3b/The_Lightning_Thief_cover.jpg', art: { icon: 'tsunami', c1: '#06506b', c2: '#1aa5c0' } },
        { title: 'The Call of the Wild', by: 'Jack London', url: 'https://www.goodreads.com/search?q=The+Call+of+the+Wild+Jack+London', cover: 'https://upload.wikimedia.org/wikipedia/commons/2/26/JackLondoncallwild.jpg', art: { icon: 'nightlight', c1: '#141e3c', c2: '#3c5a8c', fg: '#f6e7b0' } },
        { title: 'White Fang', by: 'Jack London', url: 'https://www.goodreads.com/search?q=White+Fang+Jack+London', cover: 'https://upload.wikimedia.org/wikipedia/commons/1/14/JackLondonwhitefang1.jpg', art: { icon: 'ac_unit', c1: '#2c3e57', c2: '#7f9cbf' } },
      ],
      screen: [
        { title: 'The Lord of the Rings', meta: 'Film trilogy · 2001–2003', url: 'https://www.imdb.com/title/tt0120737/', cover: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg', art: { icon: 'landscape', c1: '#1e2a16', c2: '#7c6a2a', fg: '#f1d98a' } },
        { title: 'Ted Lasso', meta: 'Series · 2020–2023', url: 'https://www.imdb.com/title/tt10986410/', cover: 'https://upload.wikimedia.org/wikipedia/en/7/73/Tedlassotitlecard.jpg', art: { icon: 'sports_soccer', c1: '#0b2f78', c2: '#2a64c8', fg: '#ffd84d' } },
      ],
      games: [
        { title: 'God of War', meta: 'Series · absolute art', url: 'https://www.playstation.com/en-us/god-of-war/', cover: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg', art: { icon: 'swords', c1: '#3b0606', c2: '#a3201a', fg: '#f3d9b1' } },
        { title: 'Crash Team Racing', meta: 'Crash Bandicoot series', url: 'https://www.crashbandicoot.com/crashteamracing', cover: 'https://upload.wikimedia.org/wikipedia/en/3/36/Crash_Team_Racing_Nitro-Fueled_cover_art.jpg', art: { icon: 'sports_motorsports', c1: '#d9480f', c2: '#fab005' } },
        { title: 'Stronghold Crusader', meta: 'Castle-building strategy', url: 'https://store.steampowered.com/app/40970/', cover: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Crusadercover.jpg', art: { icon: 'fort', c1: '#6b4a1f', c2: '#d4a24c' } },
      ],
      sport: [
        { title: 'Ping pong', meta: 'Not a pro, just love it', url: 'https://en.wikipedia.org/wiki/Table_tennis', cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg/480px-Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg', art: { icon: 'sports_tennis', c1: '#0f5c3a', c2: '#2f9e6a' } },
      ],
      travel: [ // MOCK
        { place: 'Shiraz', note: 'Where I was born', url: 'https://en.wikipedia.org/wiki/Shiraz' },
        { place: 'Tehran', note: 'Home now', url: 'https://en.wikipedia.org/wiki/Tehran' },
        { place: 'Isfahan', note: 'Those bridges', url: 'https://en.wikipedia.org/wiki/Isfahan' },
        { place: 'Next?', note: 'Suggestions welcome', next: true },
      ],
    },

    posts: [],
    topics: ['Why AI judges love long answers', 'From Java backend to LLM research', 'Books that changed how I think'],

    chat: [
      { q: 'What do you research?', a: 'How LLMs judge other LLMs. Spoiler: they are suckers for long answers, even when the extra words add nothing.' },
      { q: 'What do you do at work?', a: 'I am a senior backend developer at Mahsan, mostly Java and Spring. I still have a soft spot for a good test suite.' },
      { q: 'What do you do for fun?', a: 'Books first, always. Then films, video games, and travelling whenever I get the chance.' },
      { q: 'Where are you from?', a: 'I was born in Shiraz and now live in Tehran.' },
      { q: 'How can I reach you?', a: 'Email is best. You can also find me on LinkedIn and GitHub.' },
    ],

    ui: {
      nav: { home: 'Home', about: 'About', work: 'Work', journey: 'Journey', blog: 'Blog', contact: 'Contact' },
      sub: {
        about: 'The person behind the papers and the pull requests.',
        work: 'Research I am doing, and things I have built (some just for fun).',
        journey: 'Where I have studied and worked. Scroll to travel the road.',
        blog: 'Notes and essays.',
        contact: 'Say hello. I usually reply within a few days.',
      },
      focus: 'What I do', now: 'Lately', loves: 'Things I love', languages: 'Languages',
      research: 'Research', projects: 'Projects', fun: 'Just for fun', all: 'All', moreOnGithub: 'More on GitHub',
      teaching: 'Teaching', toolbox: 'Toolbox', awards: 'Honours', cv: { academic: 'Academic CV', developer: 'Developer CV' },
      hobby: { books: 'Books', screen: 'Films & series', games: 'Games', sport: 'Sport', travel: 'Travel' },
      pagesRead: 'pages read since Nowruz', perDay: 'pages a day, on average', fav: 'Favourite genre: Fantasy', quotes: 'Lines I keep coming back to',
      soonTitle: 'The blog is warming up', soonText: 'I have a few posts brewing. Here is what is coming:',
      contactTitle: "Let's talk", contactText: 'Research collaboration, a job, a book recommendation, or just a hello. My inbox is open.',
      copy: 'Copy email', copied: 'Email copied', write: 'Send an email',
      moreAbout: 'More about me', seeWork: 'See my work', readJourney: 'My journey', getInTouch: 'Get in touch',
      iam: "I'm", iamEnd: '', born: 'Born in', lives: 'Lives in',
      palette: 'Colour theme', custom: 'Any colour', light: 'Light', dark: 'Dark', close: 'Close',
      switchTo: 'فارسی', switchShort: 'فا', mode: 'Light / dark', rights: 'Made with care',
      ask: 'Ask me something', typing: 'typing…', online: 'Usually replies fast',
      alongside: 'Alongside', studyWork: 'Studying & working', together: 'At the same time', today: 'Today',
      code: 'Code', open: 'Open', explore: 'Explore',
    },
  },

  /* ============================== PERSIAN ============================== */
  fa: {
    name: 'محمدعلی علما',
    short: 'محمدعلی',
    initials: 'مع',
    role: 'پژوهشگر مدل‌های زبانی و توسعه‌دهنده‌ی بک‌اند',
    location: 'تهران',
    born: 'شیراز',
    hello: 'سلام، من محمدعلی هستم',
    headline: 'پژوهشم درباره‌ی این است که مدل‌های هوش مصنوعی چطور پاسخ مدل‌های دیگر را داوری می‌کنند، و چرا انگار جواب‌های طولانی را بیشتر می‌پسندند.',
    intro: 'دانشجوی کارشناسی ارشد علوم داده در مؤسسه‌ی مطالعات پیشرفته‌ی تهران (TeIAS) هستم و درباره‌ی اینکه مدل‌های زبانی بزرگ چطور یکدیگر را ارزیابی می‌کنند پژوهش می‌کنم. هم‌زمان توسعه‌دهنده‌ی ارشد بک‌اند در شرکت ماهسان هستم. وقتی پشت میزم نیستم، احتمالاً مشغول کتاب خواندن، فیلم دیدن یا بازی‌ام.',
    roles: ['پژوهشگر مدل‌های زبانی', 'توسعه‌دهنده‌ی بک‌اند', 'دانشمند داده', 'عاشق کتاب', 'اهل بازی'],
    keywords: ['ارزیابی مدل‌های زبانی', 'علوم داده', 'کتاب', 'بک‌اند', 'سینما', 'بازی', 'سفر'],
    tags: [
      { icon: 'balance', label: 'ارزیابی مدل‌های زبانی' },
      { icon: 'dns', label: 'توسعه‌دهنده‌ی بک‌اند' },
      { icon: 'auto_stories', label: 'کتاب‌خوان' },
      { icon: 'sports_esports', label: 'اهل بازی' },
    ],

    now: [
      { icon: 'menu_book', label: 'امسال خوانده‌ام', text: '۷٬۰۰۷ صفحه از اول فروردین' },
      { icon: 'science', label: 'مشغول کار روی', text: 'پایان‌نامه‌ام درباره‌ی سوگیری داورهای مدل زبانی' },
      { icon: 'sports_esports', label: 'بازی محبوب', text: 'God of War' },
    ],

    focus: [
      { icon: 'balance', title: 'ارزیابی مدل‌های زبانی', desc: 'وقتی یک هوش مصنوعی به پاسخ‌های هوش مصنوعی دیگری نمره می‌دهد، آیا منصف است؟ دنبال سوگیری‌های پنهانش می‌گردم؛ مثل علاقه به جواب‌های طولانی‌تر.' },
      { icon: 'dns', title: 'ساختن نرم‌افزار', desc: 'توسعه‌دهنده‌ی ارشد بک‌اند روی یک پلتفرم مدیریت دستگاه‌های همراه: جاوا، Spring و علاقه‌ای قدیمی به تست‌های خوب.' },
    ],

    story: [
      'در **شیراز**، شهر شعر و باغ، به دنیا آمده‌ام و حالا در **تهران** زندگی می‌کنم.',
      'کارشناسی علوم کامپیوتر را در دانشگاه صنعتی شریف خواندم؛ همان‌جا عاشق الگوریتم‌ها شدم. وسط همین دوره به شرکت ماهسان پیوستم و توسعه‌دهنده‌ی بک‌اند شدم؛ همان‌جا بود که شیفته‌ی تست‌نویسی شدم.',
      'حالا دانشجوی کارشناسی ارشد علوم داده در TeIAS هستم و دنبال جواب یک سؤال ساده‌ام: وقتی از مدل‌های هوش مصنوعی برای داوری مدل‌های دیگر استفاده می‌کنیم، می‌شود به حکمشان اعتماد کرد؟ هم‌زمان در ماهسان سیستم‌های بک‌اند می‌سازم.',
    ],
    funFact: 'نکته‌ی جالب: پژوهشم درباره‌ی علاقه‌ی مدل‌ها به جواب‌های طولانی است؛ برای همین سعی می‌کنم جواب‌های خودم را کوتاه نگه دارم.',

    research: [
      { status: 'در حال انجام', tag: 'پایان‌نامه', title: 'انتخاب‌های آموزشی چطور سوگیری داورهای مدل زبانی را شکل می‌دهند', desc: 'آیا مدلی که برای ترجیح جواب‌های کوتاه آموزش دیده، داور کم‌سوگیری‌تری می‌شود؟ با تنظیم دقیق Qwen2.5 به روش DPO دنبال جوابم.', url: null },
      { status: 'در حال داوری · WSDM 2027', tag: 'مقاله', title: 'بازتاب یا جابه‌جایی؟', desc: '۱۱۵ کاربر شبیه‌سازی‌شده با مدل زبانی با چهار سامانه‌ی پیشنهاددهنده روبه‌رو می‌شوند. آیا این سامانه‌ها بی‌صدا سلیقه‌ی آدم‌ها را تغییر می‌دهند؟ (نویسنده با سهم برابر)', url: null },
      { status: '۲۰۲۵', tag: 'بنچمارک', title: 'سوگیری پرگویی در داورهای مدل زبانی برای فارسی', desc: 'یک بنچمارک دوزبانه با ۳۶۷ پرسش: داورها جواب‌های طولانی‌تر را ترجیح می‌دهند، حتی وقتی کلمه‌های اضافه چیزی اضافه نمی‌کنند.', url: 'https://github.com/maolama/verbosity-bias' },
    ],
    projects: [
      { kind: 'project', icon: 'tune', title: 'تنظیم دقیق و هم‌ترازی مدل زبانی', desc: 'تنظیم دقیق با LoRA، هم‌ترازی با DPO و یک مطالعه‌ی داوری با مدل زبانی، از درس مدل‌های زبانی بزرگ.', tags: ['PEFT', 'TRL', 'Unsloth'], url: 'https://github.com/maolama/LLM-Course-Spring2025' },
      { kind: 'project', icon: 'database', title: 'عامل‌های تبدیل متن به SQL', desc: 'مقایسه‌ی یک پرامپت ساده، یک مسیریاب LangGraph و یک عامل ReAct روی بنچمارک BIRD.', tags: ['LangGraph', 'Gemini'], url: 'https://github.com/maolama/LLM-Course-Spring2025' },
      { kind: 'project', icon: 'model_training', title: 'مقایسه‌ی روش‌های تنظیم دستوری', desc: 'Prompt tuning در برابر LoRA و تنظیم دقیق جزئی Gemma-2-2B، بدون استفاده از پایپ‌لاین‌های آماده.', tags: ['PyTorch', 'PEFT'], url: 'https://github.com/maolama/DeepLearning-Course-Spring2025' },
      { kind: 'project', icon: 'keyboard', title: 'ابزارهای پردازش زبان فارسی', desc: 'تکمیل خودکار نام شهرها با تحمل غلط تایپی (حتی با زبان اشتباه صفحه‌کلید) و دسته‌بندی موضوعی متن.', tags: ['scikit-learn', 'Hazm'], url: 'https://github.com/maolama/MachineLearning-Course-Fall2024' },
      { kind: 'project', icon: 'apartment', title: 'تحلیل مسکن دانشجویی در لیون', desc: 'جمع‌آوری داده، تحلیل اکتشافی و پیش‌بینی قیمت مسکن دانشجویی در لیون.', tags: ['Python', 'R'], url: 'https://github.com/maolama/AppliedDataScience-Course-Fall2024' },
      { kind: 'fun', icon: 'translate', title: 'واژه‌ساز هوشمند', desc: 'یک گوگل‌شیت که با Gemini خودش تعریف و مثال لغت‌ها را پر می‌کند؛ با آزمونک و مرور فاصله‌دار.', tags: ['Apps Script', 'Gemini'], url: 'https://github.com/maolama/google-sheets-ai-vocabulary-builder' },
      { kind: 'fun', icon: 'chess', title: 'شطرنج شش‌ضلعی', desc: 'شطرنج روی صفحه‌ی شش‌ضلعی؛ چون شطرنج معمولی زیادی ساده بود.', tags: ['Java'], url: 'https://github.com/maolama/Hex_Chess' },
      { kind: 'fun', icon: 'playing_cards', title: 'بازی کارتی شبیه Hearthstone', desc: 'یک بازی نبرد کارتی با الهام از Hearthstone.', tags: ['Java'], url: 'https://github.com/maolama/Hearthstone' },
      { kind: 'fun', icon: 'grid_view', title: 'هوش مصنوعی Connect Four', desc: 'مینیمکس با هرس آلفا-بتا. مرتب من را می‌برد.', tags: ['Python'], url: 'https://github.com/maolama/ConnectFour' },
      { kind: 'fun', icon: 'view_comfy_alt', title: 'تتریس و ۲۰۴۸', desc: 'بازی‌های پازلی کلاسیک که سال اول از صفر ساختم.', tags: ['Java'], url: 'https://github.com/maolama/Tetris' },
    ],

    journey: [
      { id: 'bsc', when: '۲۰۱۹ – ۲۰۲۴', icon: 'school', title: 'کارشناسی علوم کامپیوتر', org: 'دانشگاه صنعتی شریف', desc: 'الگوریتم، سیستم‌ها و علاقه‌ای که کم‌کم به یادگیری ماشین پیدا کردم.', url: 'https://www.sharif.edu/' },
      { id: 'hovika', when: 'آبان ۱۴۰۱ – اسفند ۱۴۰۳', icon: 'code', title: 'توسعه‌دهنده‌ی نرم‌افزار', org: 'ماهسان · هویکا (مدیریت هویت و دسترسی)', desc: 'بک‌اند یک محصول مدیریت هویت و دسترسی. پوشش تست را از حدود ۲۰٪ به بیش از ۷۰٪ رساندیم.', url: null },
      { id: 'msc', when: '۲۰۲۴ – ۲۰۲۷', icon: 'psychology', title: 'کارشناسی ارشد علوم داده', org: 'TeIAS', desc: 'پژوهش روی ارزیابی مدل‌های زبانی با دکتر یعقوب‌زاده و دکتر بحرک. با بورسیه‌ی تحصیلی.', url: 'https://teias.institute/' },
      { id: 'moka', when: 'مهر ۱۴۰۴ – اکنون', icon: 'groups', title: 'توسعه‌دهنده‌ی ارشد بک‌اند', org: 'ماهسان · موکا (مدیریت دستگاه‌های همراه)', desc: 'چندمستأجری، ارتقای بزرگ به Spring Boot 4 و Java 25، و سامانه‌ی اعلان مدیران.', url: null },
    ],
    teaching: 'از ۱۳۹۹ دستیار آموزشی در شریف و TeIAS: دستیار ارشد درس‌های الگوریتم، یادگیری ماشین، ریاضیات علوم داده و ساختمان داده، و دستیار درس مدل‌های زبانی بزرگ.',
    awards: [
      { icon: 'emoji_events', text: 'رتبه‌ی ۴۵۸ از ۱۶۴٬۲۷۸ نفر (۰٫۳٪ برتر) در کنکور سراسری ریاضی و فنی' },
      { icon: 'workspace_premium', text: 'بورسیه‌ی تحصیلی و معافیت شهریه‌ی TeIAS' },
    ],
    skills: ['LLM-as-a-judge', 'DPO', 'PyTorch', 'Transformers', 'LangGraph', 'Python', 'Java', 'Spring Boot', 'PostgreSQL', 'Elasticsearch', 'Docker'],
    languages: [{ k: 'فارسی', v: 'زبان مادری' }, { k: 'انگلیسی', v: 'مسلط' }],

    hobbies: {
      books: [
        { title: 'ارباب حلقه‌ها', by: 'جی. آر. آر. تالکین', url: 'https://www.goodreads.com/search?q=The+Lord+of+the+Rings+Tolkien', cover: 'https://upload.wikimedia.org/wikipedia/en/e/e9/First_Single_Volume_Edition_of_The_Lord_of_the_Rings.gif', art: { icon: 'radio_button_unchecked', c1: '#17120c', c2: '#3d2c12', fg: '#e8c25a' } },
        { title: 'پرسی جکسون', by: 'ریک ریوردان', url: 'https://www.goodreads.com/search?q=Percy+Jackson+Riordan', cover: 'https://upload.wikimedia.org/wikipedia/en/3/3b/The_Lightning_Thief_cover.jpg', art: { icon: 'tsunami', c1: '#06506b', c2: '#1aa5c0' } },
        { title: 'آوای وحش', by: 'جک لندن', url: 'https://www.goodreads.com/search?q=The+Call+of+the+Wild+Jack+London', cover: 'https://upload.wikimedia.org/wikipedia/commons/2/26/JackLondoncallwild.jpg', art: { icon: 'nightlight', c1: '#141e3c', c2: '#3c5a8c', fg: '#f6e7b0' } },
        { title: 'سپیددندان', by: 'جک لندن', url: 'https://www.goodreads.com/search?q=White+Fang+Jack+London', cover: 'https://upload.wikimedia.org/wikipedia/commons/1/14/JackLondonwhitefang1.jpg', art: { icon: 'ac_unit', c1: '#2c3e57', c2: '#7f9cbf' } },
      ],
      screen: [
        { title: 'ارباب حلقه‌ها', meta: 'سه‌گانه‌ی سینمایی · ۲۰۰۱–۲۰۰۳', url: 'https://www.imdb.com/title/tt0120737/', cover: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg', art: { icon: 'landscape', c1: '#1e2a16', c2: '#7c6a2a', fg: '#f1d98a' } },
        { title: 'Ted Lasso', meta: 'سریال · ۲۰۲۰–۲۰۲۳', url: 'https://www.imdb.com/title/tt10986410/', cover: 'https://upload.wikimedia.org/wikipedia/en/7/73/Tedlassotitlecard.jpg', art: { icon: 'sports_soccer', c1: '#0b2f78', c2: '#2a64c8', fg: '#ffd84d' } },
      ],
      games: [
        { title: 'God of War', meta: 'مجموعه · یک اثر هنری کامل', url: 'https://www.playstation.com/en-us/god-of-war/', cover: 'https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg', art: { icon: 'swords', c1: '#3b0606', c2: '#a3201a', fg: '#f3d9b1' } },
        { title: 'Crash Team Racing', meta: 'مجموعه‌ی کرش بندیکوت', url: 'https://www.crashbandicoot.com/crashteamracing', cover: 'https://upload.wikimedia.org/wikipedia/en/3/36/Crash_Team_Racing_Nitro-Fueled_cover_art.jpg', art: { icon: 'sports_motorsports', c1: '#d9480f', c2: '#fab005' } },
        { title: 'Stronghold Crusader', meta: 'استراتژی قلعه‌سازی', url: 'https://store.steampowered.com/app/40970/', cover: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Crusadercover.jpg', art: { icon: 'fort', c1: '#6b4a1f', c2: '#d4a24c' } },
      ],
      sport: [
        { title: 'پینگ‌پنگ', meta: 'حرفه‌ای نیستم، فقط عاشقشم', url: 'https://fa.wikipedia.org/wiki/تنیس_روی_میز', cover: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg/480px-Mondial_Ping_-_Men%27s_Singles_-_Round_4_-_Kenta_Matsudaira-Vladimir_Samsonov_-_57.jpg', art: { icon: 'sports_tennis', c1: '#0f5c3a', c2: '#2f9e6a' } },
      ],
      travel: [ // MOCK
        { place: 'شیراز', note: 'زادگاهم', url: 'https://fa.wikipedia.org/wiki/شیراز' },
        { place: 'تهران', note: 'خانه‌ی فعلی', url: 'https://fa.wikipedia.org/wiki/تهران' },
        { place: 'اصفهان', note: 'آن پل‌ها', url: 'https://fa.wikipedia.org/wiki/اصفهان' },
        { place: 'مقصد بعدی؟', note: 'پیشنهاد دارید؟', next: true },
      ],
    },

    posts: [],
    topics: ['چرا داورهای هوش مصنوعی عاشق جواب‌های طولانی‌اند', 'از بک‌اند جاوا تا پژوهش در مدل‌های زبانی', 'کتاب‌هایی که طرز فکرم را عوض کردند'],

    chat: [
      { q: 'روی چه چیزی پژوهش می‌کنی؟', a: 'اینکه مدل‌های زبانی چطور مدل‌های دیگر را داوری می‌کنند. لو بدهم؟ دلشان برای جواب‌های طولانی ضعف می‌رود، حتی وقتی کلمه‌های اضافه چیزی به جواب اضافه نمی‌کنند.' },
      { q: 'سر کار چه می‌کنی؟', a: 'توسعه‌دهنده‌ی ارشد بک‌اند در ماهسان هستم؛ بیشتر جاوا و Spring. هنوز هم یک مجموعه‌تست خوب حالم را خوب می‌کند.' },
      { q: 'برای تفریح چه می‌کنی؟', a: 'اول از همه کتاب. بعد فیلم، بازی‌های ویدیویی، و هر وقت فرصت شود سفر.' },
      { q: 'اهل کجایی؟', a: 'در شیراز به دنیا آمده‌ام و حالا در تهران زندگی می‌کنم.' },
      { q: 'چطور با تو در تماس باشم؟', a: 'ایمیل بهترین راه است. در لینکدین و گیت‌هاب هم هستم.' },
    ],

    ui: {
      nav: { home: 'خانه', about: 'درباره‌ی من', work: 'کارها', journey: 'مسیر', blog: 'وبلاگ', contact: 'تماس' },
      sub: {
        about: 'آدمی که پشت مقاله‌ها و کدهاست.',
        work: 'پژوهش‌هایی که انجام می‌دهم و چیزهایی که ساخته‌ام (بعضی فقط برای سرگرمی).',
        journey: 'جاهایی که درس خوانده‌ام و کار کرده‌ام. اسکرول کنید تا جاده را بپیمایید.',
        blog: 'یادداشت‌ها و نوشته‌ها. به‌زودی.',
        contact: 'سلامی بفرستید. معمولاً ظرف چند روز جواب می‌دهم.',
      },
      focus: 'چه کار می‌کنم', now: 'این روزها', loves: 'چیزهایی که دوست دارم', languages: 'زبان‌ها',
      research: 'پژوهش', projects: 'پروژه‌ها', fun: 'برای سرگرمی', all: 'همه', moreOnGithub: 'بیشتر در گیت‌هاب',
      teaching: 'تدریس', toolbox: 'جعبه‌ابزار', awards: 'افتخارات', cv: { academic: 'رزومه‌ی پژوهشی', developer: 'رزومه‌ی برنامه‌نویسی' },
      hobby: { books: 'کتاب', screen: 'فیلم و سریال', games: 'بازی', sport: 'ورزش', travel: 'سفر' },
      pagesRead: 'صفحه کتاب از اول فروردین', perDay: 'صفحه در روز، به‌طور میانگین', fav: 'ژانر محبوب: فانتزی', quotes: 'جمله‌هایی که بارها به آن‌ها برمی‌گردم',
      soonTitle: 'وبلاگ در حال آماده شدن است', soonText: 'چند نوشته در دست دارم. این‌ها به‌زودی می‌آیند:',
      contactTitle: 'گفت‌وگو کنیم', contactText: 'همکاری پژوهشی، فرصت شغلی، پیشنهاد یک کتاب خوب یا فقط یک سلام. همیشه خوشحال می‌شوم.',
      copy: 'کپی ایمیل', copied: 'ایمیل کپی شد', write: 'ارسال ایمیل',
      moreAbout: 'بیشتر درباره‌ی من', seeWork: 'کارهایم را ببینید', readJourney: 'مسیر من', getInTouch: 'در تماس باشید',
      iam: 'من', iamEnd: 'هستم', born: 'زادگاه', lives: 'محل زندگی',
      palette: 'رنگ‌بندی', custom: 'رنگ دلخواه', light: 'روشن', dark: 'تیره', close: 'بستن',
      switchTo: 'English', switchShort: 'EN', mode: 'روشن / تیره', rights: 'با حوصله ساخته شده',
      ask: 'از من بپرسید', typing: 'در حال نوشتن…', online: 'معمولاً زود جواب می‌دهد',
      alongside: 'هم‌زمان با', studyWork: 'درس و کار هم‌زمان', together: 'هم‌زمان', today: 'امروز',
      code: 'کد', open: 'باز کردن', explore: 'گشت‌وگذار',
    },
  },
};
