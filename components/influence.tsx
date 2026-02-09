
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Influence = () => {
  return (
    <div className=" max-w-7xl mx-auto rounded-sm flex flex-col items-center justify-center md:p-15 max-sm:p-8  pb-20 bg-yellow-200/20">
      
        <div className="container  mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            New to Plant Parenting?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-800">
            Don't worry, we've got you covered. Check out our care guides for 
            tips on keeping your plants happy and healthy.
          </p>
          <Link href="/care-guides">
            <Button variant="outline" className="border-black text-black hover:bg-primary-foreground hover:text-primary">
              Explore Care Guides
            </Button>
          </Link>
        </div>

    </div>
  );
};

export default Influence;
