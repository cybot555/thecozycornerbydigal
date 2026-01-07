export const metadata = {
  title: "About",
  description:
    "Learn about The Cozy Corner and our mission to recommend calming, meaningful books.",
};

export default function AboutPage() {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-4">About The Cozy Corner</h1>
      <p className="text-zinc-700 max-w-2xl">
        The Cozy Corner is an online bookstore built for readers who enjoy calm,
        comfort, and meaningful stories. Our goal is to recommend books that
        inspire and relax.
      </p>
    </section>
  );
}
