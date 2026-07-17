export interface Package {
  id: number;

  title: string;

  slug: string;

  location: string;

  safari_type: string;

  duration: string;

  price: number;

  summary: string | null;

  itinerary: string | null;

  inclusions: string | null;

  exclusions: string | null;

  featured_image_url: string | null;

  published: boolean;

  created_at?: string;

  updated_at?: string;
}