export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  image: string;
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "best-time-to-visit-maasai-mara",
    title: "Best Time to Visit Maasai Mara",
    category: "Safari Tips",
    author: "JOLUKAY Africa Safaris",
    date: "July 2026",
    readingTime: "5 min read",
    image: "/images/blog/maasai-mara.jpg",
    excerpt:
      "Discover the best months to experience the Great Migration and incredible wildlife in Maasai Mara.",
    content:
      "The Maasai Mara is one of Africa's most famous safari destinations. The best time to visit is between July and October when the Great Migration takes place..."
  },

  {
    id: 2,
    slug: "how-much-does-a-kenya-safari-cost",
    title: "How Much Does a Kenya Safari Cost?",
    category: "Travel Tips",
    author: "JOLUKAY Africa Safaris",
    date: "July 2026",
    readingTime: "6 min read",
    image: "/images/blog/safari-cost.jpg",
    excerpt:
      "Understand what affects safari pricing and how to plan your dream trip within your budget.",
    content:
      "Safari prices depend on the season, accommodation, transportation and number of days..."
  },

  {
    id: 3,
    slug: "the-big-five-of-africa",
    title: "Meet Africa's Big Five",
    category: "Wildlife",
    author: "JOLUKAY Africa Safaris",
    date: "July 2026",
    readingTime: "4 min read",
    image: "/images/blog/big-five.jpg",
    excerpt:
      "Learn about Africa's legendary Big Five and where to see them during your safari.",
    content:
      "The Big Five include the Lion, Leopard, Elephant, Buffalo and Rhinoceros..."
  }
];