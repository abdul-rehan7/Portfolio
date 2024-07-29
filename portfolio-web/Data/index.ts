export const navItems = [
  { name: "Home", link: "" },
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I Prioritize client collaboration, fostering Open Communicaion",
    description: "",
    className:
      "lg:col-span-3 text-4xl md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName:
      "w-full rounded-2xl h-full object-cover object-center absolute right-0 ",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: " ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName:
      "lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been ",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with Passion for Website development.",
    description: " ",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Being a Next JS Developer",
    description: "",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Services I Offer",
    description: "",
    className:
      "lg:col-span-3 text-4xl md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName:
      "w-full rounded-2xl h-full object-cover object-center absolute right-0 ",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://github.com/abdul-rehan7",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/abdul-rehan7",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://github.com/abdul-rehan7",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://github.com/abdul-rehan7",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Rehan was a fantastic experience from start to finish. He took the time to understand our needs and goals, ensuring every detail was addressed. The website he delivered not only met but exceeded our expectations. It was evident that he put a lot of thought and effort into the design and functionality. Our team has received numerous compliments on the new site, and we've noticed a significant increase in user engagement.",
    name: "John D.",
    title: "Marketing Manager",
  },
  {
    quote:
      "Rehan transformed our outdated website into a modern, user-friendly platform that truly represents our brand. His attention to detail and dedication were evident throughout the project. He was always available to answer our questions and provide valuable insights. The final product was beyond what we had envisioned, making it easier for our customers to navigate and interact with our services. ",
    name: "Sarah P.",
    title: "Small Business Owner",
  },
  {
    quote:
      "Rehan's expertise in web development is impressive. He was able to integrate complex functionalities seamlessly, making our site both attractive and highly functional. Throughout the project, he demonstrated a deep understanding of our requirements and provided innovative solutions to challenges we faced. His ability to blend creativity with technical skills resulted in a website that stands out in our industry.",
    name: "Michael Johnson",
    title: "Tech Startup Founder",
  },
  {
    quote:
      "Rehan's work on our website has significantly improved our online presence and helped us reach a broader audience. He was professional, responsive, and a pleasure to work with. Rehan took the time to understand our mission and goals, ensuring the website effectively communicated our message. Since the launch, we've seen an increase in donations and volunteer sign-ups, which speaks to the quality of his work. ",
    name: "Emily R.",
    title: "Nonprofit Director",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Website Development Senior",
    desc: "Provideding support by solving student queries related to TypeScript, React.js, HTML, CSS, and JavaScript",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "HTML/CSS/JS Instructor",
    desc: "Teaching HTML, CSS, JavaScript and Assessing student progress and provided constructive feedback",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Customer Support Representative",
    desc: "Maintaining high customer satisfaction through effective communication and problem-solving",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/abdul-rehan7",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://twitter.com/abdul_rehan76",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abdul-rehan/",
  },
];
