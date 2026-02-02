"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import { emilysCandy } from "@/components/ui/fonts";


export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center max-w-md"
      >
        {/* Logo / Brand */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span
            className={`${emilysCandy.className} text-2xl font-serif text-green-950`}
          >
            The Little Sprout
          </span>
        </motion.div>

        {/* 404 */}
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>

        <p className="text-muted-foreground text-lg mb-8">
          Oops! This page wandered off the garden path 🌿
        </p>

        {/* CTA */}
        <Link
          href="/"
          className="inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground font-medium hover:bg-primary/90 transition"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
