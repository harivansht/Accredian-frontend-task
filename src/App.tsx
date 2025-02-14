import { useState } from "react";
import { Dialog } from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import { ReferralForm } from "./components/referral-form";
import { Benefits } from "./components/benefits";
import { HowItWorks } from "./components/how-it-works";
import { Faq } from "@/components/faq";
import { BanknoteIcon } from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen min-w-screen
     bg-gradient-to-b from-blue-50 to-white"
    >
      <header className="border-b bg-white">
        <nav className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="text-2xl font-bold text-blue-600">Accredian</div>
          <div className="flex items-center gap-4">
            <Button variant="ghost">Resources</Button>
            <Button variant="ghost">About Us</Button>
            <Button variant="outline">Login</Button>
            <Button>Try for free</Button>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
              <div className="max-w-xl lg:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                  Let's Learn
                  <br />& Earn
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Get a chance to win up-to{" "}
                  <span className="text-2xl font-bold text-blue-600">
                    Rs. 15,000
                  </span>
                </p>
                <div className="mt-10">
                  <Button
                    className="bg-blue-600 text-white hover:bg-blue-700 rounded-full"
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Refer Now
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative mx-auto w-full max-w-lg">
                  <div className="absolute -top-4 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-400/20 blur-3xl" />
                  <img
                    src="/placeholder.svg?height=600&width=400"
                    alt="App preview"
                    className="relative mx-auto w-full max-w-lg rounded-2xl shadow-xl"
                  />
                </div>
                {/* Floating Money Elements */}
                <div className="absolute -right-4 top-1/4">
                  <BanknoteIcon className="h-12 w-12 text-green-500 rotate-12" />
                </div>
                <div className="absolute -left-4 top-1/2">
                  <BanknoteIcon className="h-12 w-12 text-green-500 -rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <HowItWorks />
        <Benefits />
        <Faq />

        {/* CTA Section */}
        <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white">
              Ready to start earning?
            </h2>
            <p className="mt-4 text-lg text-blue-100">
              Join our referral program and earn rewards for every successful
              referral
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="mt-8 bg-white text-blue-600 hover:bg-blue-100 hover:text-blue-600 rounded-full"
              onClick={() => setIsModalOpen(true)}
            >
              Start Referring Now
            </Button>
          </div>
        </section>
      </main>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <ReferralForm onClose={() => setIsModalOpen(false)} />
      </Dialog>
    </div>
  );
}
