import Button from "@/src/components/Button";
import Image from "next/image";

export default function RiskFree() {
  return (
    <section className="bg-green-100 pt-20 pb-20" id="risk-free">
      <div className="container">
        <h2 className="text-center mb-8 md:mb-12">
          Confident you&apos;ll <span className="text-green-500">love</span> our
          results
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-10 lg:gap-16 justify-center">
          <div className="w-[300px] md:w-[400px] aspect-[720/902] relative">
            <Image
              src="/trial-calendar.png"
              fill
              alt="Free trial calendar view."
            />
          </div>
          <div className="flex flex-col items-center md:items-start lg:pt-6 text-center md:text-start">
            <h3 className="max-w-[23ch] mb-8">
              Experience Our Full Services Risk-Free for Two Weeks
            </h3>
            <p className="max-w-[50ch] mb-4 text-gray-600">
              We&apos;re so confident in our ability to exceed your
              expectations, we invite you to try our complete range of services
              for two weeks, absolutely risk-free.
            </p>
            <p className="max-w-[50ch] text-gray-600">
              If you find that we&apos;re not the right fit during or after the
              trial, there&apos;s no obligation. Enjoy the profits and value we
              bring, with zero cost to you.
            </p>

            <Button variant="primary" className="py-4 px-4 mt-12">
              Connect with us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
