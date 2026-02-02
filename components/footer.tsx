"use client";

import Link from "next/link";
import { Leaf, Instagram, Facebook, Twitter } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { emilysCandy } from '@/components/ui/fonts'; // make sure you import your font

export default function Footer() {
  return (
    <footer className="max-w-7xl mx-auto px-6  bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Social */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className={`${emilysCandy.className} text-gray-900 text-2xl font-serif`}>
                The Little Sprout
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Bringing nature into homes since 2024. Quality plants, expert care, 
              and a passion for green living.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-6 lg:col-span-3 md:justify-end">
          {/* Shop Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/shop/all-plants" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  All Plants
                </Link>
              </li>
              <li>
                <Link href="/shop/bestsellers" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Bestsellers
                </Link>
              </li>
              <li>
                <Link href="/shop/new-arrivals" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop/bundles" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Plant Bundles
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/care-guides" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Care Guides
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/shipping-info" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-card-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about-us" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 The Little Sprout. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
