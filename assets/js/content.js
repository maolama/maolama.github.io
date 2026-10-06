/*
  All site content lives here, in both languages.
  - Shared fields (photo, links, publications, stats) are written once.
  - `icon` values are Material Symbols names: https://fonts.google.com/icons
  - Use **double asterisks** for bold text.
*/
window.SITE = {
  photo: 'assets/img/photo.svg', // replace with e.g. 'assets/img/photo.jpg'
  cv: 'assets/cv.pdf',
  email: 'olama.mohammadali2000@gmail.com',

  nav: [
    { id: 'home', icon: 'home' },
    { id: 'about', icon: 'person' },
    { id: 'projects', icon: 'deployed_code' },
    { id: 'writing', icon: 'edit_note' },
    { id: 'resume', icon: 'description' },
    { id: 'contact', icon: 'alternate_email' },
  ],

  links: [
    { icon: 'school', url: 'https://scholar.google.com/', en: 'Google Scholar', fa: 'گوگل اسکالر' },
    { icon: 'code', url: 'https://github.com/', en: 'GitHub', fa: 'گیت‌هاب' },
    { icon: 'work', url: 'https://www.linkedin.com/', en: 'LinkedIn', fa: 'لینکدین' },
    { icon: 'badge', url: 'https://orcid.org/', en: 'ORCID', fa: 'ارکید' },
  ],

  stats: [
    { key: 'years', n: 5 },
    { key: 'papers', n: 3 },
    { key: 'projects', n: 10 },
  ],

  // Papers are usually in English, so they are shared by both languages.
  publications: [
    {
      year: 2025,
      title: 'Title of a Paper That Describes the Main Contribution',
      authors: '**M. A. Olama**, Co-Author A, Co-Author B',
      venue: 'Conference Name (ABBR 2025)',
      links: [{ label: 'PDF', url: '#' }, { label: 'Code', url: '#' }],
    },
    {
      year: 2024,
      title: 'Another Paper Title Goes Here',
      authors: 'Co-Author A, **M. A. Olama**, Co-Author C',
      venue: 'Journal Name, Vol. 12',
      links: [{ label: 'PDF', url: '#' }, { label: 'DOI', url: '#' }],
    },
    {
      year: 2023,
      title: 'An Earlier Workshop Paper or Preprint',
      authors: '**M. A. Olama**, Co-Author B',
      venue: 'Workshop at Conference 2023',
      links: [{ label: 'arXiv', url: '#' }],
    },
  ],

  /* ============================== ENGLISH ============================== */
  en: {
    name: 'Mohammad Ali Olama',
    short: 'Mohammad Ali',
    role: 'Researcher & Engineer',
    location: 'City, Country',
    hello: "Hi, I'm Mohammad Ali",
    headline: 'I study [your field], build [the things you build], and write about what I learn along the way.',
    intro: 'Welcome to my corner of the internet. Here you will find my projects, my writing, and my academic and professional background.',
    roles: ['a researcher', 'an engineer', 'a writer', 'a lifelong learner'],
    keywords: ['Research', 'Engineering', 'Writing', 'Open source', 'Teaching', 'Data', 'Systems', 'Design'],

    doing: [
      { icon: 'biotech', title: 'Research', desc: 'Placeholder: the questions I explore, and why they matter to me.' },
      { icon: 'terminal', title: 'Engineering', desc: 'Placeholder: the systems and tools I design and build.' },
      { icon: 'draw', title: 'Writing', desc: 'Placeholder: essays and notes on what I am learning.' },
    ],
    now: [
      { icon: 'menu_book', label: 'Reading', text: '[A book you are reading]' },
      { icon: 'construction', label: 'Building', text: '[Something you are working on]' },
      { icon: 'school', label: 'Learning', text: '[A skill you are picking up]' },
    ],

    story: [
      'This is where your story goes. Who are you, where did you grow up, and what got you interested in your field?',
      'Placeholder: describe the path that brought you here — your studies, the people and moments that shaped you, and what you are working towards.',
      'Outside of work, I enjoy [your hobbies]. I believe [something you care about].',
    ],
    quote: 'A line you live by, or a sentence that captures how you think.',
    interests: [
      { icon: 'hiking', label: 'Hiking' },
      { icon: 'photo_camera', label: 'Photography' },
      { icon: 'menu_book', label: 'Reading' },
      { icon: 'music_note', label: 'Music' },
      { icon: 'coffee', label: 'Coffee' },
      { icon: 'travel_explore', label: 'Travel' },
    ],
    facts: [
      { icon: 'work', k: 'Currently', v: 'Position @ Institution' },
      { icon: 'school', k: 'Education', v: 'Degree, University' },
      { icon: 'location_on', k: 'Based in', v: 'City, Country' },
      { icon: 'translate', k: 'Languages', v: 'Persian, English' },
    ],

    projects: [
      { kind: 'research', icon: 'biotech', title: 'Research Project', desc: 'What question it answers, the method, and the result.', tags: ['Research', 'ML'], url: '#' },
      { kind: 'code', icon: 'code', title: 'Open-Source Tool', desc: 'What it does, who uses it, and why you built it.', tags: ['Python', 'CLI'], url: '#' },
      { kind: 'side', icon: 'lightbulb', title: 'Side Project', desc: 'A fun experiment or something built for yourself.', tags: ['Web', 'Design'], url: '#' },
      { kind: 'research', icon: 'insights', title: 'Another Study', desc: 'A short description of a second research project.', tags: ['Data', 'Analysis'], url: '#' },
    ],

    posts: [
      {
        slug: 'first-post', date: 'Sep 2026', read: 5, tags: ['Research'],
        title: 'A Placeholder Title for Your First Post',
        excerpt: 'A one-line summary of the post that invites the reader to keep reading.',
        body: [
          'This is placeholder text for a blog post. Your real posts will live here: essays, research notes, tutorials, or reflections.',
          'Posts can be written in English, Persian, or both. Each language version of the site shows its own posts.',
          'Later, posts can be written as simple Markdown files, so adding a new one only takes a minute.',
        ],
      },
      {
        slug: 'notes-on-learning', date: 'Jul 2026', read: 4, tags: ['Notes'],
        title: 'Notes on Learning Something New',
        excerpt: 'Placeholder: what you learned recently and how you approached it.',
        body: ['Placeholder body text for the second post.', 'Write freely here.'],
      },
      {
        slug: 'tools-i-use', date: 'May 2026', read: 3, tags: ['Tools'],
        title: 'The Tools I Use Every Day',
        excerpt: 'Placeholder: a short tour of your favourite tools and workflow.',
        body: ['Placeholder body text for the third post.'],
      },
    ],

    experience: [
      { when: '2024 — Present', title: 'Job Title', org: 'Company / Lab', desc: 'One or two lines about responsibilities and impact.' },
      { when: '2022 — 2024', title: 'Job Title', org: 'Company / Lab', desc: 'One or two lines about responsibilities and impact.' },
      { when: '2020 — 2022', title: 'Research Assistant', org: 'University Lab', desc: 'One or two lines about the project and your contribution.' },
    ],
    education: [
      { when: '2018 — 2020', title: 'M.Sc. in Field', org: 'University', desc: 'Thesis: “Thesis title.” Advisor: Prof. Name.' },
      { when: '2014 — 2018', title: 'B.Sc. in Field', org: 'University', desc: 'Honors, GPA, or notable coursework.' },
    ],
    skills: [
      { group: 'Research', items: ['Method A', 'Method B', 'Statistics'] },
      { group: 'Programming', items: ['Python', 'C++', 'SQL'] },
      { group: 'Tools', items: ['Git', 'Docker', 'LaTeX'] },
      { group: 'Languages', items: ['Persian (native)', 'English (fluent)'] },
    ],

    ui: {
      nav: { home: 'Home', about: 'About', projects: 'Projects', writing: 'Writing', resume: 'Resume', contact: 'Contact' },
      sub: {
        about: 'A little about who I am, beyond the CV.',
        projects: 'Things I have built, studied, or helped make.',
        writing: 'Essays, notes, and ideas.',
        resume: 'My academic and professional background.',
        contact: 'The best ways to reach me.',
      },
      whatIDo: 'What I do', now: 'Now', latest: 'Latest writing', featured: 'Featured projects',
      allPosts: 'All posts', allProjects: 'All projects', moreAbout: 'More about me', inShort: 'In short',
      readResume: 'View resume', readWriting: 'Read my writing', seeProjects: 'See my projects', iam: "I'm", iamEnd: '',
      interests: 'Things I enjoy', glance: 'At a glance',
      experience: 'Experience', education: 'Education', publications: 'Publications', skills: 'Skills',
      cv: 'Download CV', allPubs: 'Full list on Google Scholar',
      contactTitle: "Let's talk",
      contactText: 'Whether it is a research collaboration, a job opportunity, or just a question, my inbox is open.',
      copy: 'Copy email', copied: 'Email copied to clipboard', write: 'Send an email',
      minRead: 'min read', back: 'Back to writing', all: 'All',
      kinds: { research: 'Research', code: 'Open source', side: 'Side projects' },
      stats: { years: 'Years of experience', papers: 'Publications', projects: 'Projects' },
      theme: 'Switch light / dark', switchTo: 'فارسی', switchShort: 'فا', rights: 'All rights reserved',
    },
  },

  /* ============================== PERSIAN ============================== */
  fa: {
    name: 'محمدعلی علما',
    short: 'محمدعلی',
    role: 'پژوهشگر و مهندس',
    location: 'شهر، کشور',
    hello: 'سلام، من محمدعلی هستم',
    headline: 'در زمینه‌ی [حوزه‌ی شما] پژوهش می‌کنم، [چیزهایی که می‌سازید] می‌سازم و درباره‌ی آموخته‌هایم می‌نویسم.',
    intro: 'به گوشه‌ی کوچک من در اینترنت خوش آمدید. اینجا پروژه‌ها، نوشته‌ها و سوابق علمی و حرفه‌ای من را می‌بینید.',
    roles: ['پژوهشگر', 'مهندس', 'نویسنده', 'یادگیرنده‌ی همیشگی'],
    keywords: ['پژوهش', 'مهندسی', 'نویسندگی', 'متن‌باز', 'آموزش', 'داده', 'سیستم‌ها', 'طراحی'],

    doing: [
      { icon: 'biotech', title: 'پژوهش', desc: 'متن نمونه: پرسش‌هایی که دنبال می‌کنم و چرا برایم مهم‌اند.' },
      { icon: 'terminal', title: 'مهندسی', desc: 'متن نمونه: سیستم‌ها و ابزارهایی که طراحی می‌کنم و می‌سازم.' },
      { icon: 'draw', title: 'نوشتن', desc: 'متن نمونه: جستارها و یادداشت‌هایی درباره‌ی آنچه یاد می‌گیرم.' },
    ],
    now: [
      { icon: 'menu_book', label: 'در حال خواندن', text: '[کتابی که می‌خوانید]' },
      { icon: 'construction', label: 'در حال ساختن', text: '[کاری که رویش کار می‌کنید]' },
      { icon: 'school', label: 'در حال یادگیری', text: '[مهارتی که یاد می‌گیرید]' },
    ],

    story: [
      'اینجا جای داستان شماست. چه کسی هستید، کجا بزرگ شدید و چه چیزی شما را به حوزه‌تان علاقه‌مند کرد؟',
      'متن نمونه: مسیری را که شما را به اینجا رساند شرح دهید؛ تحصیلات، آدم‌ها و لحظه‌هایی که شما را شکل دادند و هدفی که به سویش می‌روید.',
      'بیرون از کار، به [سرگرمی‌های شما] علاقه دارم. باور دارم که [چیزی که برایتان مهم است].',
    ],
    quote: 'جمله‌ای که با آن زندگی می‌کنید، یا جمله‌ای که طرز فکرتان را نشان می‌دهد.',
    interests: [
      { icon: 'hiking', label: 'کوه‌پیمایی' },
      { icon: 'photo_camera', label: 'عکاسی' },
      { icon: 'menu_book', label: 'کتاب' },
      { icon: 'music_note', label: 'موسیقی' },
      { icon: 'coffee', label: 'قهوه' },
      { icon: 'travel_explore', label: 'سفر' },
    ],
    facts: [
      { icon: 'work', k: 'در حال حاضر', v: 'سمت، مؤسسه' },
      { icon: 'school', k: 'تحصیلات', v: 'مدرک، دانشگاه' },
      { icon: 'location_on', k: 'محل زندگی', v: 'شهر، کشور' },
      { icon: 'translate', k: 'زبان‌ها', v: 'فارسی، انگلیسی' },
    ],

    projects: [
      { kind: 'research', icon: 'biotech', title: 'پروژه‌ی پژوهشی', desc: 'به چه پرسشی پاسخ می‌دهد، با چه روشی و با چه نتیجه‌ای.', tags: ['پژوهش', 'ML'], url: '#' },
      { kind: 'code', icon: 'code', title: 'ابزار متن‌باز', desc: 'چه کاری انجام می‌دهد، چه کسانی از آن استفاده می‌کنند و چرا ساخته شد.', tags: ['Python', 'CLI'], url: '#' },
      { kind: 'side', icon: 'lightbulb', title: 'پروژه‌ی شخصی', desc: 'یک آزمایش سرگرم‌کننده یا چیزی که برای خودتان ساخته‌اید.', tags: ['وب', 'طراحی'], url: '#' },
      { kind: 'research', icon: 'insights', title: 'پژوهشی دیگر', desc: 'توضیحی کوتاه درباره‌ی دومین پروژه‌ی پژوهشی.', tags: ['داده', 'تحلیل'], url: '#' },
    ],

    posts: [
      {
        slug: 'first-post', date: 'شهریور ۱۴۰۵', read: 5, tags: ['پژوهش'],
        title: 'عنوانی نمونه برای نخستین نوشته',
        excerpt: 'خلاصه‌ای یک‌خطی از نوشته که خواننده را به ادامه‌ی خواندن دعوت می‌کند.',
        body: [
          'این متن نمونه‌ی یک نوشته است. نوشته‌های واقعی شما اینجا قرار می‌گیرند: جستار، یادداشت پژوهشی، آموزش یا تأمل.',
          'نوشته‌ها می‌توانند فارسی، انگلیسی یا هر دو باشند. هر نسخه‌ی زبانی سایت نوشته‌های خودش را نشان می‌دهد.',
          'بعدها می‌توان نوشته‌ها را به‌صورت فایل‌های ساده‌ی مارک‌داون نوشت تا افزودن نوشته‌ی تازه فقط یک دقیقه طول بکشد.',
        ],
      },
      {
        slug: 'notes-on-learning', date: 'تیر ۱۴۰۵', read: 4, tags: ['یادداشت'],
        title: 'یادداشت‌هایی درباره‌ی یادگیری',
        excerpt: 'متن نمونه: آنچه اخیراً آموخته‌اید و چگونه به سراغش رفتید.',
        body: ['متن نمونه برای دومین نوشته.', 'اینجا آزادانه بنویسید.'],
      },
      {
        slug: 'tools-i-use', date: 'اردیبهشت ۱۴۰۵', read: 3, tags: ['ابزار'],
        title: 'ابزارهایی که هر روز استفاده می‌کنم',
        excerpt: 'متن نمونه: گشتی کوتاه در ابزارها و روش کار شما.',
        body: ['متن نمونه برای سومین نوشته.'],
      },
    ],

    experience: [
      { when: '۲۰۲۴ — اکنون', title: 'عنوان شغلی', org: 'شرکت / آزمایشگاه', desc: 'یک یا دو خط درباره‌ی مسئولیت‌ها و دستاوردها.' },
      { when: '۲۰۲۲ — ۲۰۲۴', title: 'عنوان شغلی', org: 'شرکت / آزمایشگاه', desc: 'یک یا دو خط درباره‌ی مسئولیت‌ها و دستاوردها.' },
      { when: '۲۰۲۰ — ۲۰۲۲', title: 'دستیار پژوهشی', org: 'آزمایشگاه دانشگاه', desc: 'یک یا دو خط درباره‌ی پروژه و نقش شما در آن.' },
    ],
    education: [
      { when: '۲۰۱۸ — ۲۰۲۰', title: 'کارشناسی ارشد رشته‌ی …', org: 'دانشگاه', desc: 'پایان‌نامه: «عنوان پایان‌نامه». استاد راهنما: دکتر …' },
      { when: '۲۰۱۴ — ۲۰۱۸', title: 'کارشناسی رشته‌ی …', org: 'دانشگاه', desc: 'افتخارات، معدل یا دروس شاخص.' },
    ],
    skills: [
      { group: 'پژوهش', items: ['روش الف', 'روش ب', 'آمار'] },
      { group: 'برنامه‌نویسی', items: ['Python', 'C++', 'SQL'] },
      { group: 'ابزارها', items: ['Git', 'Docker', 'LaTeX'] },
      { group: 'زبان‌ها', items: ['فارسی (زبان مادری)', 'انگلیسی (مسلط)'] },
    ],

    ui: {
      nav: { home: 'خانه', about: 'درباره‌ی من', projects: 'پروژه‌ها', writing: 'نوشته‌ها', resume: 'رزومه', contact: 'تماس' },
      sub: {
        about: 'کمی درباره‌ی خودم، فراتر از رزومه.',
        projects: 'چیزهایی که ساخته‌ام، پژوهیده‌ام یا در ساختشان سهم داشته‌ام.',
        writing: 'جستارها، یادداشت‌ها و ایده‌ها.',
        resume: 'سوابق علمی و حرفه‌ای من.',
        contact: 'بهترین راه‌های ارتباط با من.',
      },
      whatIDo: 'چه می‌کنم', now: 'این روزها', latest: 'تازه‌ترین نوشته‌ها', featured: 'پروژه‌های برگزیده',
      allPosts: 'همه‌ی نوشته‌ها', allProjects: 'همه‌ی پروژه‌ها', moreAbout: 'بیشتر درباره‌ی من', inShort: 'به‌طور خلاصه',
      readResume: 'دیدن رزومه', readWriting: 'خواندن نوشته‌ها', seeProjects: 'دیدن پروژه‌ها', iam: 'من', iamEnd: 'هستم',
      interests: 'چیزهایی که دوست دارم', glance: 'در یک نگاه',
      experience: 'سوابق کاری', education: 'تحصیلات', publications: 'مقالات', skills: 'مهارت‌ها',
      cv: 'دریافت رزومه', allPubs: 'فهرست کامل در گوگل اسکالر',
      contactTitle: 'گفت‌وگو کنیم',
      contactText: 'برای همکاری پژوهشی، فرصت شغلی یا حتی یک پرسش ساده، خوشحال می‌شوم پیامتان را بخوانم.',
      copy: 'کپی ایمیل', copied: 'ایمیل کپی شد', write: 'ارسال ایمیل',
      minRead: 'دقیقه مطالعه', back: 'بازگشت به نوشته‌ها', all: 'همه',
      kinds: { research: 'پژوهشی', code: 'متن‌باز', side: 'شخصی' },
      stats: { years: 'سال تجربه', papers: 'مقاله', projects: 'پروژه' },
      theme: 'تغییر حالت روشن / تیره', switchTo: 'English', switchShort: 'EN', rights: 'همه‌ی حقوق محفوظ است',
    },
  },
};
