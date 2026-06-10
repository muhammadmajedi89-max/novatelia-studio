import Link from 'next/link';
import { notFound } from 'next/navigation';
import { NewsletterCTA } from '@/components/blog/newsletter-cta';
import { Footer } from '@/components/layout/footer';
import { Header } from '@/components/layout/header';
import { getPostBySlug } from '@/lib/sanity/fetchers';

const fallbackParagraphs = [
  'Strong digital systems start with a clear business problem, not a trend. Before choosing a tool or interface, teams need to understand the workflow, users, data and measurable outcome they want to improve.',
  'For AI, automation and product work, the best results come from controlled implementation. That means reliable source material, human review paths, permission rules, escalation points and a product experience people can actually use.',
  'Novatelia Studio designs digital systems with this practical approach: define the outcome, build a focused first version, measure adoption and improve the system with real operational feedback.'
];

const related = [
  'How practical AI systems improve daily operations',
  'What enterprise teams should expect from a modern website',
  'Design systems as a foundation for faster product delivery'
];

type BlogArticlePageProps = {
  params: {
    slug: string;
  };
};

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const paragraphs = post.body?.length
    ? []
    : fallbackParagraphs;

  return (
    <main className="min-h-screen overflow-hidden bg-brand-bg text-brand-ink">
      <div className="absolute left-0 right-0 top-0 z-50 pt-4">
        <Header />
      </div>
      <article className="bg-brand-dark px-6 pb-20 pt-36 text-white">
        <div className="container mx-auto max-w-4xl">
          <Link href="/blog" className="text-sm font-semibold text-white/60 transition hover:text-white">Back to insights</Link>
          <p className="mt-10 text-sm font-semibold uppercase tracking-[0.24em] text-brand-teal">{post.category || 'Insight'}</p>
          <h1 className="mt-5 text-5xl font-bold tracking-[-0.05em] md:text-7xl">
            {post.title}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-white/70">
            {post.excerpt || post.seoDescription || 'Novatelia Studio insight powered by Sanity CMS.'}
          </p>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-white/55">
            <span>{post.author || 'Novatelia Studio'}</span>
            <span>•</span>
            <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US') : 'Latest insight'}</span>
            <span>•</span>
            <span>{post.category || 'Digital Strategy'}</span>
          </div>
        </div>
      </article>
      <section className="container mx-auto max-w-4xl px-6 py-20">
        {post.body?.length ? (
          <div className="rounded-3xl border border-brand-border bg-white p-8 text-brand-muted shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">CMS content</p>
            <p className="mt-4 text-lg leading-9">
              This article is connected to Sanity. Portable Text rendering will be added in the next production pass.
            </p>
          </div>
        ) : (
          <div className="space-y-7 text-lg leading-9 text-brand-muted">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}
        <div className="mt-16 rounded-3xl border border-brand-border bg-white p-8 shadow-card">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-blue">Related articles</p>
          <div className="mt-6 grid gap-4">
            {related.map((item) => (
              <Link key={item} href="/blog" className="rounded-2xl bg-brand-bg p-5 text-lg font-bold text-brand-navy transition hover:-translate-y-1 hover:shadow-soft">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <NewsletterCTA />
      <Footer />
    </main>
  );
}
