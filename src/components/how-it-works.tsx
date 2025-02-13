import { Users2Icon, ClipboardCheckIcon, WalletIcon } from "lucide-react";

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold">How Do I Refer?</h2>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-blue-100 p-3">
              <Users2Icon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Submit Referral</h3>
            <p className="text-gray-600">
              Submit referrals easily via our website's referral section.
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-blue-100 p-3">
              <ClipboardCheckIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Earn Rewards</h3>
            <p className="text-gray-600">
              Earn rewards once your referral joins an Accredian program.
            </p>
          </div>
          <div className="relative flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-blue-100 p-3">
              <WalletIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">Get Bonus</h3>
            <p className="text-gray-600">
              Referrer receives a bonus 30 days after program enrollment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
