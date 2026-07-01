import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight, Clock, Calendar, User, ArrowLeft } from 'lucide-react';

import { posts, getPost } from '@/lib/blog';
import { buildMetadata } from '@/lib/seo';
import { site } from '@/lib/site';
import { Reveal } from '@/components/Reveal';
import { Faq } from '@/components/sections/Faq';
import { ContactCTA } from '@/components/sections/ContactCTA';
import { JsonLd, breadcrumbSchema, faqSchema } from '@/components/JsonLd';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) return {};
  return buildMetadata({
    title: p.title,
    description: p.excerpt,
    path: `/blog/${p.slug}`,
  });
}

function fmtDate(iso: string): string {
  return new Date(iso).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default async function PostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getPost(slug);
  if (!p) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    dateModified: p.date,
    author: { '@type': 'Organization', name: p.author },
    publisher: { '@id': `${site.url}/#business` },
    mainEntityOfPage: `${site.url}/blog/${p.slug}`,
    keywords: p.keywords.join(', '),
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Inicio', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: p.title, path: `/blog/${p.slug}` },
        ])}
      />
      {p.faq.length > 0 && <JsonLd data={faqSchema(p.faq)} />}

      {/* Breadcrumb */}
      <nav className="container-page pt-6 text-sm text-muted" aria-label="Ruta de navegación">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:text-ink">Inicio</Link></li>
          <ChevronRight size={14} />
          <li><Link href="/blog" className="hover:text-ink">Blog</Link></li>
          <ChevronRight size={14} />
          <li className="line-clamp-1 text-ink">{p.title}</li>
        </ol>
      </nav>

      {/* Cabecera del artículo */}
      <header className="container-page relative py-10">
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-electric/15 blur-[120px]" />
        <Reveal className="relative mx-auto max-w-3xl">
          <span className="rounded-full border border-electric/30 bg-electric/10 px-3 py-1.5 text-xs font-medium text-electric2">
            {p.category}
          </span>
          <h1 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {p.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-muted">
            <span className="flex items-center gap-1.5"><User size={15} /> {p.author}</span>
            <span className="flex items-center gap-1.5"><Calendar size={15} /> {fmtDate(p.date)}</span>
            <span className="flex items-center gap-1.5"><Clock size={15} /> {p.readingMinutes} min de lectura</span>
          </div>
        </Reveal>
      </header>

      {/* Cuerpo + índice */}
      <div className="container-page grid gap-10 pb-4 lg:grid-cols-[0.28fr_0.72fr]">
        {/* Índice de contenidos (sticky en escritorio) */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-xs uppercase tracking-wider text-muted">En este artículo</p>
            <nav className="mt-4 space-y-2 border-l border-line">
              {p.toc.map((t) => (
                <a
                  key={t.id}
                  href={`#${t.id}`}
                  className="block border-l-2 border-transparent -ml-px pl-4 text-sm text-muted transition-colors hover:border-electric hover:text-ink"
                >
                  {t.label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Contenido */}
        <article className="mx-auto max-w-2xl">
          <Reveal>{p.content}</Reveal>
        </article>
      </div>

      {p.faq.length > 0 && <Faq items={p.faq} title="Preguntas frecuentes" />}

      {/* Volver al blog */}
      <div className="container-page pb-4">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-electric2 hover:text-ink">
          <ArrowLeft size={16} /> Volver al blog
        </Link>
      </div>

      <ContactCTA
        title="¿Prefieres que lo veamos juntos?"
        subtitle="Si después de leer esto tienes dudas con tu equipo, escríbenos y le echamos un vistazo a domicilio."
      />
    </>
  );
}
