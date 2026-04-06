export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: "IEP Tips" | "Parent Rights" | "Life Skills" | "Behind the Scenes";
  readTime: number;
  publishedAt: string;
  image: string;
  content: string[];
  featured?: boolean;
};

export const posts: Post[] = [
  {
    slug: "what-to-say-when-the-school-pushes-back",
    title: "What to Say When the School Pushes Back at an IEP Meeting",
    excerpt:
      "Five word-for-word phrases you can use the next time the team tells you something cannot be done. These have changed entire meetings.",
    category: "IEP Tips",
    readTime: 6,
    publishedAt: "2026-03-28",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1200&q=80",
    featured: true,
    content: [
      "Walking into an IEP meeting is hard enough. But the moment you ask for something and the team starts shaking their heads? That is when most parents freeze. I have been on both sides of that table, and I want to give you the exact words I have seen work.",
      "First, remember this. The school is not your enemy. Most teachers and case managers genuinely want what is best for your child. But they are also working within a system that has limited resources, tight schedules, and a lot of policies. When they push back, it is often because they are trying to manage all of those constraints. Your job is not to fight them. Your job is to make sure your child does not get lost in the shuffle.",
      "Phrase 1: \"Can you help me understand the data behind that decision?\" This is my favorite phrase in the world. It is calm, collaborative, and it forces the team to show their work. If they cannot point to specific data, that is your opening to ask for more.",
      "Phrase 2: \"I want to make sure this is documented. Can we add that to the meeting notes?\" If the school says no to something, get it in writing. This is not aggressive. It is just smart. Future you will be grateful.",
      "Phrase 3: \"What would it take to make this happen?\" This flips the conversation from no to how. Suddenly you are problem-solving together instead of arguing.",
      "Phrase 4: \"I would like to think about this and respond in writing within the next few days.\" You do not have to make decisions on the spot. You have the right to take time. Use it.",
      "Phrase 5: \"I am asking for this in writing as a formal request.\" If something really matters, put it in a written request. The school is required to respond in a specific timeframe. This is one of the most underused tools parents have.",
      "Try one of these at your next meeting. Just one. Notice what happens. The energy in the room shifts when you stop apologizing and start asking smart questions. You belong at that table. Act like it.",
    ],
  },
  {
    slug: "5-rights-every-parent-should-know",
    title: "5 Rights Every Parent of a Special Education Student Should Know",
    excerpt:
      "Most parents do not know these exist. The school is not required to tell you. But they could change everything.",
    category: "Parent Rights",
    readTime: 5,
    publishedAt: "2026-03-21",
    image:
      "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?w=1200&q=80",
    content: [
      "When I worked in school administration, I saw something that broke my heart over and over. Parents would sit in meetings, sign documents, and walk out without ever knowing the rights they had under federal law. Not because anyone was hiding it from them. But because no one ever told them.",
      "These five rights are the ones I wish every parent knew on day one.",
      "Right 1: You have the right to request an evaluation in writing. If you suspect your child needs special education services, you do not have to wait for the school to suggest it. You can request an evaluation in writing, and the school must respond within a set timeframe (usually 30 to 60 days, depending on your state).",
      "Right 2: You have the right to bring anyone you want to your IEP meeting. An advocate, a friend, a family member, a therapist. Anyone. The school cannot tell you who can or cannot attend.",
      "Right 3: You have the right to disagree. You do not have to sign the IEP at the meeting. You can take it home, review it, and respond in writing. If you disagree with parts of it, you can request a follow-up meeting or file a formal complaint.",
      "Right 4: You have the right to an Independent Educational Evaluation (IEE) at the school's expense if you disagree with the school's evaluation. Most parents have never heard of this. It is in the law.",
      "Right 5: You have the right to receive copies of all evaluations, reports, and documents related to your child's education. You can ask for these at any time, and the school must provide them.",
      "These are not loopholes or tricks. These are rights guaranteed by the Individuals with Disabilities Education Act (IDEA). Knowing them is the first step to using them.",
    ],
  },
  {
    slug: "how-to-request-an-evaluation",
    title: "How to Request an Evaluation for Your Child (Step by Step)",
    excerpt:
      "If you suspect your child needs special education services, here is exactly how to start. Includes the email template I send to parents.",
    category: "IEP Tips",
    readTime: 4,
    publishedAt: "2026-03-14",
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1200&q=80",
    content: [
      "If you suspect your child needs special education services, the first step is requesting an evaluation. This is one of the most important things you can do, and it is also one of the most misunderstood. Let me walk you through it.",
      "Step 1: Put it in writing. Always. A verbal request to the teacher or principal is a great start, but it does not start the legal clock. A written request does. Send an email or a letter. Date it. Save it.",
      "Step 2: Be specific about what you are seeing. The school does not need a diagnosis from you. They just need to know what concerns you have. Examples: My child is reading two grade levels behind. My child cannot sit through a 15-minute lesson without becoming distressed. My child has not made progress in writing despite extra help at home.",
      "Step 3: Send it to the right person. The principal is a safe bet. The special education coordinator is even better if you know who that is. Copy the teacher so they are in the loop.",
      "Step 4: Wait for the response. The school has a set number of days to respond (usually 15 to 30 calendar days, depending on your state). If they do not respond, follow up in writing.",
      "Step 5: Be prepared to consent. If the school agrees to evaluate, they will send you a consent form. Read it carefully. Sign it. Return it. The clock starts ticking on the evaluation timeline as soon as you do.",
      "Here is a sample email you can adapt: \"Dear [Principal Name], I am writing to formally request a special education evaluation for my child, [Name], who is in [grade] at [school]. I am concerned because [specific examples]. I would like to request a comprehensive evaluation to determine whether my child qualifies for special education services. Please let me know the next steps. Thank you for your time and attention. Sincerely, [Your Name].\"",
      "That is it. You do not need fancy language. You do not need to know the law inside and out. You just need to put it in writing and send it.",
    ],
  },
  {
    slug: "iep-vs-504-plan",
    title: "IEP vs 504 Plan: What's the Difference and Which Does Your Child Need?",
    excerpt:
      "The two most common special education plans serve very different purposes. Here is how to tell which one is right for your child.",
    category: "IEP Tips",
    readTime: 7,
    publishedAt: "2026-03-07",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
    content: [
      "If you have spent any time in the special education world, you have probably heard the terms IEP and 504 plan thrown around. They sound similar. Sometimes people use them interchangeably. But they are very different documents that serve very different purposes.",
      "Let me break it down for you.",
      "An IEP (Individualized Education Program) is a legal document that comes out of IDEA, the federal special education law. To qualify for an IEP, your child must have one of 13 specific disability categories AND that disability must impact their ability to access education in a meaningful way. An IEP includes specific goals, services, and supports designed to help your child make progress.",
      "A 504 plan comes from Section 504 of the Rehabilitation Act, which is a civil rights law. It is for students who have a disability that substantially limits a major life activity but who do not necessarily need specialized instruction. A 504 plan typically provides accommodations (extended time on tests, preferential seating, audio textbooks) rather than direct services.",
      "The simplest way to think about it: an IEP is for students who need specialized instruction. A 504 plan is for students who need accommodations to access the same instruction everyone else gets.",
      "Which one does your child need? It depends on the severity and nature of their needs. A child with dyslexia who needs explicit reading instruction probably needs an IEP. A child with ADHD who just needs extra time on tests might be fine with a 504 plan. A child with significant medical needs who requires accommodations but can access the curriculum without modification likely needs a 504 plan.",
      "The good news is you do not have to figure this out alone. When you request an evaluation, the school team will help determine which plan (if any) is the right fit. And if you are not sure their recommendation is right, that is exactly when you should get a second opinion.",
    ],
  },
  {
    slug: "teaching-self-advocacy",
    title: "Teaching Your Child to Self-Advocate (Even if They Are Young)",
    excerpt:
      "Self-advocacy is a skill that takes years to build. Here is how to start with your kid today, no matter how old they are.",
    category: "Life Skills",
    readTime: 5,
    publishedAt: "2026-02-28",
    image:
      "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=1200&q=80",
    content: [
      "One of the questions I get most often from parents is: \"How do I teach my kid to advocate for themselves?\" The truth is, self-advocacy is not a single skill. It is dozens of small skills that build on each other over years. The good news is you can start at any age.",
      "For young kids (ages 4 to 7), focus on naming feelings and needs. Give them words. Help them practice asking for help. \"I need a break.\" \"This is too loud.\" \"Can I try that again?\" These tiny phrases are the foundation of every adult self-advocacy skill.",
      "For elementary kids (ages 8 to 11), start involving them in their own learning. Show them their reading goals. Explain what their accommodations mean. Let them sit in on parts of their IEP meeting if they are ready. Even five minutes of a meeting can make a huge difference in how they see themselves.",
      "For middle schoolers (ages 12 to 14), step back and let them lead more often. Have them practice asking the teacher for clarification. Have them write their own emails (with your help). Encourage them to identify what helps them learn best, even if they cannot articulate why yet.",
      "For high schoolers (ages 15 to 18), the goal is independence. They should be attending their full IEP meeting. They should be able to explain their disability and what they need. They should be practicing the skills they will use in college, the workplace, and adult life.",
      "Remember: self-advocacy is not about kids becoming little adults. It is about kids learning that their needs matter and that their voices count. Start small. Celebrate every win. And know that the goal is progress, not perfection.",
    ],
  },
  {
    slug: "behind-the-scenes-iep-meeting",
    title: "What Actually Happens Before Your IEP Meeting (From the School Side)",
    excerpt:
      "The pre-meeting prep, the strategy conversations, the things the team discusses before you walk in. Here is what I saw for 15 years.",
    category: "Behind the Scenes",
    readTime: 6,
    publishedAt: "2026-02-21",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=1200&q=80",
    content: [
      "I am going to tell you something that might surprise you. Before every IEP meeting, the school team meets without you. Sometimes for an hour. Sometimes for fifteen minutes. But almost always, there is a pre-meeting where the team aligns on what they are going to recommend, what concerns they have, and how they are going to handle the conversation.",
      "This is not nefarious. It is just how schools work. The teachers, case manager, school psychologist, and administrator need to make sure they are on the same page before they meet with you. Otherwise the meeting becomes a mess.",
      "But here is what most parents do not realize: the recommendations you hear at the meeting are usually pre-decided. The team has already agreed on the goals, the services, and the placement. They are not coming in with an open mind. They are coming in with a plan.",
      "This is exactly why I tell parents to do their own pre-meeting work. Read the IEP draft (yes, you can request a draft before the meeting). Write down your questions. Bring your own data. Arrive with your own plan.",
      "The other thing that happens behind the scenes? The team often has a budget conversation. How much can we afford to offer? What services are stretched too thin? Which kids are already getting the maximum? These conversations affect what gets offered to your child, and they almost never come up in the actual IEP meeting.",
      "I am not telling you this to scare you. I am telling you because knowledge is power. If you know the team has been strategizing without you, you can strategize too. You can come in prepared. You can ask questions that get past the script. And you can advocate for what your child actually needs, not just what is convenient for the system.",
      "The IEP meeting is not a presentation you have to sit through. It is a conversation you have every right to lead.",
    ],
  },
];

export const categories = [
  "All",
  "IEP Tips",
  "Parent Rights",
  "Life Skills",
  "Behind the Scenes",
] as const;

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): Post[] {
  const current = getPost(slug);
  if (!current) return posts.slice(0, count);
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === current.category ? 1 : 0;
      const bMatch = b.category === current.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, count);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
