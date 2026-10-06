/*
  All site content lives here, in both languages.
  Shared fields (photo, links, publications) are written once.
  Use **double asterisks** to bold your name in author lists.
*/
window.SITE = {
  photo: 'assets/img/photo.svg', // replace with e.g. 'assets/img/photo.jpg'
  cv: 'assets/cv.pdf',
  email: 'olama.mohammadali2000@gmail.com',

  links: [
    { url: 'https://scholar.google.com/', en: 'Google Scholar', fa: 'گوگل اسکالر' },
    { url: 'https://github.com/', en: 'GitHub', fa: 'گیت‌هاب' },
    { url: 'https://www.linkedin.com/', en: 'LinkedIn', fa: 'لینکدین' },
    { url: 'https://orcid.org/', en: 'ORCID', fa: 'ارکید' },
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

  en: {
    name: 'Mohammad Ali Olama',
    role: 'Researcher & Engineer',
    tagline: 'I work at the intersection of [your field] and [your focus]. This is a placeholder: one or two sentences on what you do and why it matters.',
    location: 'City, Country',
    about: [
      'I am a [current position] at [institution / company], where I focus on [main research or work area].',
      'Placeholder bio. Describe your background, what drives your work, and the problems you care about. Two or three short paragraphs is ideal.',
    ],
    facts: [
      { k: 'Currently', v: 'Position @ Institution' },
      { k: 'Education', v: 'Degree, University' },
      { k: 'Based in', v: 'City, Country' },
      { k: 'Languages', v: 'Persian, English' },
    ],
    experience: [
      { when: '2024 — Present', title: 'Job Title', org: 'Company / Lab', desc: 'One or two lines about responsibilities and impact. Quantify where possible.', tags: ['Skill', 'Tool', 'Domain'] },
      { when: '2022 — 2024', title: 'Job Title', org: 'Company / Lab', desc: 'One or two lines about responsibilities and impact.', tags: ['Skill', 'Tool'] },
      { when: '2020 — 2022', title: 'Research Assistant', org: 'University Lab', desc: 'One or two lines about the project and your contribution.', tags: ['Research'] },
    ],
    education: [
      { when: '2018 — 2020', title: 'M.Sc. in Field', org: 'University', desc: 'Thesis: “Thesis title goes here.” Advisor: Prof. Name.' },
      { when: '2014 — 2018', title: 'B.Sc. in Field', org: 'University', desc: 'Honors, GPA, or notable coursework.' },
    ],
    research: [
      { title: 'Research Area One', desc: 'The question you are asking and the approach you take to answer it.' },
      { title: 'Research Area Two', desc: 'The question you are asking and the approach you take to answer it.' },
      { title: 'Research Area Three', desc: 'The question you are asking and the approach you take to answer it.' },
    ],
    projects: [
      { title: 'Project Name', desc: 'What it is, what problem it solves, and the outcome.', tags: ['Python', 'ML'], url: '#' },
      { title: 'Project Name', desc: 'What it is, what problem it solves, and the outcome.', tags: ['Cloud', 'Systems'], url: '#' },
      { title: 'Project Name', desc: 'What it is, what problem it solves, and the outcome.', tags: ['Web', 'Data'], url: '#' },
    ],
    ui: {
      about: 'About', experience: 'Experience', education: 'Education',
      research: 'Research Interests', publications: 'Selected Publications',
      projects: 'Projects', contact: 'Contact', links: 'Elsewhere',
      currently: 'At a glance', role: 'Role', location: 'Location',
      cv: 'Download CV', cta: 'Get in touch',
      contactText: 'Whether it is a research collaboration, a job opportunity, or a question, my inbox is open.',
      allPubs: 'Full list on Google Scholar',
      masthead: 'Academic & Professional Profile', edition: 'Updated October 2026',
      photoCaption: 'Portrait', switchTo: 'فارسی',
    },
  },

  fa: {
    name: 'محمدعلی علما',
    role: 'پژوهشگر و مهندس',
    tagline: 'در تقاطع [حوزه‌ی شما] و [تمرکز شما] فعالیت می‌کنم. این یک متن نمونه است: یک یا دو جمله درباره‌ی کاری که انجام می‌دهید و اهمیت آن.',
    location: 'شهر، کشور',
    about: [
      'من [سمت فعلی] در [دانشگاه / شرکت] هستم و تمرکزم بر [حوزه‌ی اصلی پژوهش یا کار] است.',
      'متن نمونه‌ی زندگی‌نامه. از پیشینه‌ی خود، انگیزه‌هایتان و مسائلی که برایتان مهم است بنویسید. دو یا سه بند کوتاه کافی است.',
    ],
    facts: [
      { k: 'در حال حاضر', v: 'سمت، مؤسسه' },
      { k: 'تحصیلات', v: 'مدرک، دانشگاه' },
      { k: 'محل زندگی', v: 'شهر، کشور' },
      { k: 'زبان‌ها', v: 'فارسی، انگلیسی' },
    ],
    experience: [
      { when: '۲۰۲۴ — اکنون', title: 'عنوان شغلی', org: 'شرکت / آزمایشگاه', desc: 'یک یا دو خط درباره‌ی مسئولیت‌ها و دستاوردها؛ در صورت امکان با عدد و رقم.', tags: ['مهارت', 'ابزار', 'حوزه'] },
      { when: '۲۰۲۲ — ۲۰۲۴', title: 'عنوان شغلی', org: 'شرکت / آزمایشگاه', desc: 'یک یا دو خط درباره‌ی مسئولیت‌ها و دستاوردها.', tags: ['مهارت', 'ابزار'] },
      { when: '۲۰۲۰ — ۲۰۲۲', title: 'دستیار پژوهشی', org: 'آزمایشگاه دانشگاه', desc: 'یک یا دو خط درباره‌ی پروژه و نقش شما در آن.', tags: ['پژوهش'] },
    ],
    education: [
      { when: '۲۰۱۸ — ۲۰۲۰', title: 'کارشناسی ارشد رشته‌ی …', org: 'دانشگاه', desc: 'پایان‌نامه: «عنوان پایان‌نامه». استاد راهنما: دکتر …' },
      { when: '۲۰۱۴ — ۲۰۱۸', title: 'کارشناسی رشته‌ی …', org: 'دانشگاه', desc: 'افتخارات، معدل یا دروس شاخص.' },
    ],
    research: [
      { title: 'حوزه‌ی پژوهشی اول', desc: 'پرسشی که دنبال می‌کنید و رویکردی که برای پاسخ به آن دارید.' },
      { title: 'حوزه‌ی پژوهشی دوم', desc: 'پرسشی که دنبال می‌کنید و رویکردی که برای پاسخ به آن دارید.' },
      { title: 'حوزه‌ی پژوهشی سوم', desc: 'پرسشی که دنبال می‌کنید و رویکردی که برای پاسخ به آن دارید.' },
    ],
    projects: [
      { title: 'نام پروژه', desc: 'پروژه چیست، چه مسئله‌ای را حل می‌کند و نتیجه‌اش چه بوده است.', tags: ['Python', 'ML'], url: '#' },
      { title: 'نام پروژه', desc: 'پروژه چیست، چه مسئله‌ای را حل می‌کند و نتیجه‌اش چه بوده است.', tags: ['Cloud', 'Systems'], url: '#' },
      { title: 'نام پروژه', desc: 'پروژه چیست، چه مسئله‌ای را حل می‌کند و نتیجه‌اش چه بوده است.', tags: ['Web', 'Data'], url: '#' },
    ],
    ui: {
      about: 'درباره‌ی من', experience: 'سوابق کاری', education: 'تحصیلات',
      research: 'علایق پژوهشی', publications: 'مقالات منتخب',
      projects: 'پروژه‌ها', contact: 'تماس', links: 'شبکه‌ها',
      currently: 'در یک نگاه', role: 'نقش', location: 'موقعیت',
      cv: 'دریافت رزومه', cta: 'در تماس باشید',
      contactText: 'برای همکاری پژوهشی، فرصت شغلی یا هر پرسشی، خوشحال می‌شوم پیامتان را بخوانم.',
      allPubs: 'فهرست کامل در گوگل اسکالر',
      masthead: 'رزومه‌ی علمی و حرفه‌ای', edition: 'به‌روزرسانی: مهر ۱۴۰۵',
      photoCaption: 'تصویر', switchTo: 'English',
    },
  },
};
