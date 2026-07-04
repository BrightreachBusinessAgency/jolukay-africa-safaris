import maasaiMara from "../assets/destinations/maasai-mara.jpg";
import lakeNakuru from "../assets/destinations/lake-nakuru.jpg";
import amboseli from "../assets/destinations/amboseli.jpg";

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
    image: maasaiMara,
    excerpt:
      "Discover the best months to experience the Great Migration and incredible wildlife in Maasai Mara.",
    content:
      "The Maasai Mara National Reserve is one of Africa's most iconic safari destinations. Between July and October, millions of wildebeest and zebras cross from the Serengeti into Kenya, creating one of the greatest wildlife spectacles on earth. During this period visitors also enjoy excellent opportunities to see lions, cheetahs, elephants, leopards and many other species."
  },

  {
    id: 2,
    slug: "how-much-does-a-kenya-safari-cost",
    title: "How Much Does a Kenya Safari Cost?",
    category: "Travel Tips",
    author: "JOLUKAY Africa Safaris",
    date: "July 2026",
    readingTime: "6 min read",
    image: lakeNakuru,
    excerpt:
      "Understand what affects safari pricing and how to plan your dream African adventure within your budget.",
    content:
      "Safari prices vary depending on travel season, accommodation level, transportation, park fees and the number of travel days. Choosing the right itinerary allows you to enjoy an unforgettable safari while staying within your preferred budget."
  },

  {
    id: 3,
    slug: "the-big-five-of-africa",
    title: "Meet Africa's Big Five",
    category: "Wildlife",
    author: "JOLUKAY Africa Safaris",
    date: "July 2026",
    readingTime: "4 min read",
    image: amboseli,
    excerpt:
      "Learn about Africa's legendary Big Five and where to find them during your East African safari.",
    content:
      "The Big Five consist of the Lion, Leopard, Elephant, Buffalo and Rhinoceros. Kenya and Tanzania offer some of the best locations to encounter these magnificent animals in their natural habitats, accompanied by experienced professional safari guides."
  }
];