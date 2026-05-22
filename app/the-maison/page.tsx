"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X, Landmark, Compass, Award, Calendar, Heart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { TIMELINE_DATA } from "@/lib/mockData";
import { CREAM_BLUR_DATA_URL, CHARCOAL_BLUR_DATA_URL } from "@/lib/constants";

export default function TheMaisonPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="w-full flex flex-col bg-brand-cream overflow-hidden">
      {/* 1. Cinematic Hero Section */}
      <section className="relative h-[80vh] w-full flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
          alt="Classical Architecture Paris"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL={CREAM_BLUR_DATA_URL}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-brand-gold font-semibold mb-4 block"
          >
            Haute Heritage Since 2026
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-7xl lg:text-8xl font-light text-brand-white font-serif tracking-widest leading-none mb-6"
          >
            The Atelier
          </motion.h1>
          <div className="gold-divider my-6 bg-brand-gold w-20 h-[2px]" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-brand-cream/80 text-sm md:text-base font-sans tracking-[0.25em] uppercase"
          >
            Luxury Design & Craftsmanship
          </motion.p>
        </div>
      </section>

      {/* 2. "Our Story" Section */}
      <section className="page-content py-24 bg-brand-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Story Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-burgundy font-semibold mb-3">
              Our Story
            </span>
            <h2 className="text-4xl md:text-5xl font-light font-serif text-brand-charcoal mb-6 leading-tight">
              A Romance Written in Gemstones
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-6" />
            <p className="text-brand-charcoal/80 text-sm md:text-base font-light leading-relaxed mb-6">
              The history of Yen Nhi Jewerly began with a profound love for precious stone craftsmanship. Born from a family legacy of expert stonecutters and gemstone curators, our brand brings together passion, poetry, and ancestral jewelry expertise.
            </p>
            <p className="text-brand-charcoal/80 text-sm md:text-base font-light leading-relaxed mb-8">
              Founded as an elite high-jewelry house, Yen Nhi Jewerly has established a prestigious reputation that quickly attracted fine jewelry connoisseurs. Guided by poetry and a passion for rare stones, our artisans create pieces that reflect luck, beauty, and technical wizardry.
            </p>
            <Link
              href="/collections"
              className="btn-luxury self-start border-brand-charcoal hover:border-brand-burgundy text-xs"
            >
              Explore Iconic Creations
            </Link>
          </motion.div>

          {/* Vintage Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden border border-brand-gold/15 p-2.5 bg-brand-white shadow-xl"
          >
            <div className="relative w-full h-full overflow-hidden bg-brand-cream">
              <Image
                src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=800"
                alt="Yen Nhi Jewerly Founders Legacy"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform hover:scale-103 transition-transform duration-[1200ms]"
                placeholder="blur"
                blurDataURL={CREAM_BLUR_DATA_URL}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Horizontal Drag-Scrollable Timeline */}
      <section className="w-full bg-brand-white py-24 border-t border-b border-brand-charcoal/10 overflow-hidden">
        <div className="page-content mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-semibold mb-2 block">
            A Legacy Timeline
          </span>
          <h2 className="text-3xl md:text-4xl font-light font-serif text-brand-charcoal">
            The Historical Epochs
          </h2>
          <div className="w-12 h-[1px] bg-brand-gold my-4" />
          <p className="text-xs text-brand-gray uppercase tracking-widest">
            Drag or scroll horizontally to explore the centuries of milestone creations
          </p>
        </div>

        {/* Timeline Row */}
        <div className="relative w-full overflow-x-auto pb-10 scrollbar-thin px-4 md:px-8 lg:px-12 flex gap-8 md:gap-12 cursor-grab active:cursor-grabbing">
          {TIMELINE_DATA.map((milestone, idx) => (
            <motion.div
              key={milestone.year}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex-shrink-0 w-[280px] md:w-[350px] flex flex-col bg-brand-cream border border-brand-charcoal/5 p-6 shadow-md"
            >
              {/* Year large text */}
              <div className="text-4xl md:text-5xl lg:text-6xl font-light font-serif text-brand-gold mb-3">
                {milestone.year}
              </div>
              
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-gold/10 mb-4 bg-brand-white">
                <Image
                  src={milestone.image}
                  alt={milestone.title}
                  fill
                  sizes="350px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={CREAM_BLUR_DATA_URL}
                />
              </div>

              {/* Milestone Details */}
              <h3 className="text-lg font-light font-serif text-brand-charcoal mb-2">
                {milestone.title}
              </h3>
              <p className="text-brand-gray text-[12px] md:text-xs font-light leading-relaxed">
                {milestone.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. "Savoir-Faire" Section (Cinematic Dark Section with Video Lightbox) */}
      <section className="w-full bg-brand-charcoal text-brand-white py-24 relative overflow-hidden">
        <div className="page-content flex flex-col items-center text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold mb-3">
            The Main d'Or
          </span>
          <h2 className="text-4xl md:text-5xl font-light font-serif text-brand-cream tracking-wide mb-6">
            The Spirit of Savoir-Faire
          </h2>
          <div className="gold-divider bg-brand-gold w-12 my-2" />
          
          <p className="text-brand-cream/80 max-w-2xl text-sm md:text-base font-light leading-relaxed mb-12">
            The expert hands of Yen Nhi Jewerly's master artisans, known for their golden touch, pass down ancestral secrets within our private workshops, molding precious metals and selecting spectacular natural minerals to bring complex mechanical tales to life.
          </p>

          {/* Video Placeholder Box */}
          <div className="relative w-full max-w-4xl aspect-video overflow-hidden border border-brand-gold/20 bg-brand-charcoal shadow-2xl group">
            <Image
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&q=80&w=1200"
              alt="Crafting High Jewelry Close Up"
              fill
              sizes="(max-width: 1024px) 100vw, 1000px"
              className="object-cover opacity-85 transition-transform duration-1000 group-hover:scale-102"
              placeholder="blur"
              blurDataURL={CHARCOAL_BLUR_DATA_URL}
            />
            
            {/* Play Button overlay */}
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 group-hover:bg-black/45">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="relative z-10 w-20 h-20 rounded-full border border-brand-gold bg-brand-charcoal/80 text-brand-gold flex items-center justify-center shadow-lg hover:scale-105 hover:bg-brand-burgundy hover:border-brand-burgundy hover:text-brand-white transition-all duration-300 focus:outline-none"
              >
                <Play size={28} className="ml-1" />
                <span className="absolute -inset-2 rounded-full border border-brand-gold/30 animate-ping opacity-75" />
              </button>
            </div>

            {/* Floating Title details */}
            <div className="absolute bottom-4 left-4 bg-brand-charcoal/80 backdrop-blur-sm text-[9px] uppercase tracking-[0.25em] text-brand-gold px-3 py-1 text-left font-medium">
              Cinema Feature: The Crafting of Alhambra
            </div>
          </div>

          <span className="text-brand-cream/60 text-xs font-light tracking-wide mt-6">
            The Hand of the Artisan — Masterful settings defining Haute Joaillerie excellence.
          </span>
        </div>
      </section>

      {/* Video Lightbox Player Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-charcoal/98 backdrop-blur-md"
            onClick={() => setIsVideoOpen(false)}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 text-brand-white hover:text-brand-gold transition-all duration-300"
            >
              <X size={28} />
            </button>
            
            {/* Embedded video mock structure */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-[90vw] max-w-4xl aspect-video bg-black shadow-2xl border border-brand-gold/20 flex flex-col justify-center items-center text-center p-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Display mock high resolution overlay */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Yen Nhi Jewerly Cinematic Craftsmanship"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. "Jewelry Arts Academy" Section */}
      <section className="page-content py-24 bg-brand-cream">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          {/* School Image Frame */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden border border-brand-gold/15 p-2 bg-brand-white shadow-xl"
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&q=80&w=800"
                alt="L'École Academy Classroom"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform hover:scale-103 transition-transform duration-1000"
                placeholder="blur"
                blurDataURL={CREAM_BLUR_DATA_URL}
              />
            </div>
          </motion.div>

          {/* School Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-brand-burgundy font-semibold mb-3">
              Jewelry Arts Academy
            </span>
            <h2 className="text-4xl md:text-5xl font-light font-serif text-brand-charcoal mb-6 leading-tight">
              The Yen Nhi Jewerly Academy
            </h2>
            <div className="w-12 h-[1px] bg-brand-gold mb-6" />
            <p className="text-brand-charcoal/80 text-sm md:text-base font-light leading-relaxed mb-6">
              Founded to share the beauty of gemology and artisan crafts with the public, our Academy of Jewelry Arts offers hands-on courses in gemstone history, design, and artisan techniques. Supported by Yen Nhi Jewerly, the academy invites diamond lovers and novices alike to discover the secrets of high jewelry.
            </p>
            <p className="text-brand-charcoal/80 text-sm md:text-base font-light leading-relaxed mb-8">
              With campuses extending to Tokyo, Paris, and Hong Kong, the Academy hosts international exhibitions, partners with research institutes, and supports young designers worldwide, fostering an open culture of appreciation for jewelry history.
            </p>
            <Link
              href="/boutiques"
              className="btn-luxury self-start border-brand-charcoal hover:border-brand-burgundy text-xs"
            >
              Locate Academy Boutique
            </Link>
          </motion.div>

        </div>
      </section>

      {/* 6. Quote Section */}
      <section className="w-full bg-brand-cream border-t border-brand-charcoal/10 py-24 flex flex-col items-center justify-center">
        <div className="max-w-4xl px-6 text-center">
          <div className="w-10 h-[1px] bg-brand-gold/60 mx-auto mb-8" />
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-light font-serif italic text-brand-charcoal leading-relaxed mb-6"
          >
            "In every jewel, there lies a poem waiting to be read, a tale of luck and love crafted in gold."
          </motion.blockquote>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold"
          >
            — Yen Nhi Jewerly Curation
          </motion.div>
          <div className="w-10 h-[1px] bg-brand-gold/60 mx-auto mt-8" />
        </div>
      </section>
    </div>
  );
}
