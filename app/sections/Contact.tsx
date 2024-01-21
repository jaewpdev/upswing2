import Button from "@/src/components/Button";
import { Routes } from "@/src/models/routes";

export default function Contact() {
  return (
    <section className="container py-20" id="contact">
      <div className="bg-gray-100 rounded-lg w-full flex flex-col items-center p-16">
        <h2 className="mb-8">Let us help.</h2>
        <p>
          Get started by connecting with one of our experts. Let&apos;s start
          taking action now to grow your business.
        </p>

        <Button variant="primary" className="py-4 px-8 mt-12" href={Routes.SCHEDULE}>
          Schedule a call
        </Button>
      </div>
    </section>
  );
}
