import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Stripe } from "stripe";
import { Car } from "lucide-react";
import { Carousel } from "@/components/carousel";



export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5
  })

  return (
    <div>





      <section className="relative h-[370px] md:h-[775px] w-full">
        {/* Background Image */}
        <Image
          src="/product-images/sns.jpg"
          alt="Banner Image"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Text */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 md:px-8 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Welcome to Velo Surf Store 🏄
            </h2>

            <h4 className="mt-4 md:mt-6 text-white text-lg md:text-xl">
              Discover the best surf gear and accessories for your next wave.
            </h4>



            <Button asChild variant="secondary" className="mt-6">
              <Link href="/products">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 md:px-8 py-12">
        <h3 className="text-2xl font-semibold mb-8">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div>
              <Carousel />
            </div>

        </div>
      </section>




    </div>
  );
}
