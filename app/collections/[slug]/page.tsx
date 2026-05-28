import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { COLLECTIONS_DATA, PRODUCTS_DATA } from "@/lib/mockData";
import { CREAM_BLUR_DATA_URL, CHARCOAL_BLUR_DATA_URL } from "@/lib/constants";
import CollectionProducts from "./CollectionProducts";
import CollectionHero from "./CollectionHero";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = COLLECTIONS_DATA.find((c) => c.slug === slug);
  if (!collection) return { title: "Không tìm thấy | Rì Rào Store" };
  return {
    title: `${collection.name} | Rì Rào Store`,
    description: `${collection.tagline}. ${collection.description.substring(0, 160)}`,
  };
}

const CATEGORY_VI: Record<string, string> = {
  necklaces: "Dây Chuyền",
  bracelets: "Vòng Tay",
  earrings: "Hoa Tai",
  rings: "Nhẫn",
  watches: "Đồng Hồ",
};

export default async function CollectionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const collection = COLLECTIONS_DATA.find((c) => c.slug === slug);
  if (!collection) notFound();

  const collectionProducts = PRODUCTS_DATA.filter((p) => p.collectionSlug === slug);
  const categoryLabel = CATEGORY_VI[collection.category] ?? collection.category;
  const heroSrc = collection.heroImage ?? collection.image;

  const heroBg = collection.theme.heroBg;
  const isDark = collection.theme.dark ?? false;
  const heroText = collection.theme.heroText;
  const heroMuted = collection.theme.heroMuted;

  return (
    <div className="w-full flex flex-col">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <CollectionHero
        heroSrc={heroSrc}
        name={collection.name}
        categoryLabel={categoryLabel}
        tagline={collection.tagline}
        heroBg={heroBg}
        isDark={isDark}
        heroText={heroText}
        heroMuted={heroMuted}
        blurDataURL={isDark ? CHARCOAL_BLUR_DATA_URL : CREAM_BLUR_DATA_URL}
      />

      {/* ── EDITORIAL ────────────────────────────────────────── */}
      <section className="w-full bg-brand-charcoal overflow-hidden">
        <div className="page-content pt-20 pb-24 md:pt-24 md:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

            {/* Text column */}
            <div className="flex flex-col order-2 lg:order-1 lg:pr-6">
              <span className="text-[9px] uppercase tracking-[0.4em] text-brand-gold font-semibold mb-6">
                Nghệ Thuật Chế Tác · {collection.name}
              </span>

              <h2 className="font-serif text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-light text-white leading-[1.12] tracking-[0.02em] mb-7">
                Di Sản Của Chất Thơ<br className="hidden lg:block" /> & Sự Tinh Hoa
              </h2>

              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-px bg-brand-gold/60" />
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/40" />
              </div>

              <p className="text-brand-cream/80 text-[0.9375rem] font-light leading-[1.95] mb-5">
                {collection.description}
              </p>

              <p className="text-brand-cream/40 text-[0.875rem] font-light leading-[1.85]">
                Từng chi tiết được các nghệ nhân bậc thầy của chúng tôi chăm chút tỉ mỉ — kết hợp vẻ đẹp vượt thời gian của vỏ sò tự nhiên với kỹ thuật khảm bạc tinh xảo. Mỗi tác phẩm là minh chứng rực rỡ cho chất thơ nghệ thuật của Rì Rào Store.
              </p>
            </div>

            {/* Image column */}
            <div
              className="relative aspect-[3/4] w-3/4 sm:w-1/2 lg:w-3/5 xl:w-1/2 overflow-hidden order-1 lg:order-2 lg:ml-auto mx-auto lg:mx-0"
            >
              <Image
                src={collection.image}
                alt={`${collection.name} — Kỹ Thuật Chế Tác`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center hover:scale-[1.04] transition-transform duration-[1200ms] ease-out"
                placeholder="blur"
                blurDataURL={CREAM_BLUR_DATA_URL}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ─────────────────────────────────────────── */}
      <section className="w-full bg-brand-cream">
        <div className="page-content py-20 md:py-28">

          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[9px] uppercase tracking-[0.45em] text-brand-gold font-semibold mb-4">
              Danh Mục Sản Phẩm
            </span>
            <h2 className="font-serif text-[1.875rem] md:text-[2.5rem] font-light text-brand-charcoal tracking-[0.03em] mb-5">
              Khám Phá Tác Phẩm
            </h2>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-px bg-brand-gold/50" />
              <div className="w-1 h-1 rounded-full bg-brand-gold/40" />
              <div className="w-8 h-px bg-brand-gold/50" />
            </div>
          </div>

          <CollectionProducts products={collectionProducts} />
        </div>
      </section>

    </div>
  );
}
