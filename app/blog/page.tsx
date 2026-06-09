import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { ArticleGrid } from '@/components/blog/article-grid';
import { BlogHero } from '@/components/blog/blog-hero';
import { Categories } from '@/components/blog/categories';
import { FeaturedArticle } from '@/components/blog/featured-article';
import { NewsletterCTA } from '@/components/blog/newsletter-cta';

export default function BlogPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <BlogHero />
      <Categories />
      <FeaturedArticle />
      <ArticleGrid />
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
