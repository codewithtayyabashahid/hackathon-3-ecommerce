import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Productslist from './components/Products list'
import OffersSection from './components/Offers'
import Trending from './components/Trending'
import BlogCards from './components/BlogCards'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
    <div>
      <Header />
      </div>
      <div>
      <Hero />
      <Productslist />
      <OffersSection />
      <Trending />
      <BlogCards />
      <Footer />
    </div>
    </main>
  )
}
