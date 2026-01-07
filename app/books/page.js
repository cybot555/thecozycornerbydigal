import Image from "next/image";

export default function BooksPage() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Book Recommendations</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book1.png" alt="Book cover of “Modern CSS with Tailwind, Second Edition” by Noel Rappin, featuring a yellow paper airplane on a dark blue background, published by The Pragmatic Programmers and covering Tailwind CSS 3.0." width={300} height={400} />
          <h3 className="mt-3 font-medium">Modern CSS with Tailwind</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book2.png" alt="Book cover of “The Next.js Handbook” by Flavio Copes, featuring minimalist black-and-white typography with the Next.js logo." width={300} height={400} />
          <h3 className="mt-3 font-medium">The Next.js Handbook</h3>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <Image src="/images/book3.jpg" alt="Book cover of “Mindset: The New Psychology of Success” by Carol S. Dweck, Ph.D., featuring a white background with blue title text and a multicolor band." width={300} height={400} />
          <h3 className="mt-3 font-medium">Mindset</h3>
        </div>
      </div>
    </section>
  );
}