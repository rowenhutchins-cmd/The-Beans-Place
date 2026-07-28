export default function SubscriptionPage({ onBack, onContact }) {
  const perks = [
    "Freshly roasted beans delivered every 2 or 4 weeks",
    "Flexible skip, pause, or cancel anytime",
    "Choose your roast profile and grind size"
  ];

  const plans = [
    {
      name: "Starter",
      price: "$16/mo",
      description: "A simple way to bring specialty coffee into your daily routine."
    },
    {
      name: "Balanced",
      price: "$24/mo",
      description: "Our most-loved plan with rotating roasts and reliable delivery."
    },
    {
      name: "Roaster's Choice",
      price: "$32/mo",
      description: "A premium experience for coffee lovers who want seasonal favorites."
    }
  ];

  return (
    <main className="min-h-screen bg-[var(--cream)] px-6 py-20 text-[var(--ink)] sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-7xl">
        <section className="rounded-[2rem] border border-[color:var(--coffee)]/10 bg-[var(--cream-light)] p-8 shadow-[0_20px_60px_rgba(31,24,20,0.08)] backdrop-blur md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[var(--amber)]">
            Coffee Subscription
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-[var(--coffee)] sm:text-5xl">
            Rich, roasted coffee delivered to your door.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--ink)]/75">
            Choose a plan that fits your routine and enjoy fresh beans from our roastery, roasted to
            order and shipped with care.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={onBack}
              className="rounded-full border-2 border-[var(--coffee)] bg-[var(--cream-light)] px-6 py-3 font-semibold text-[var(--coffee)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--amber)] hover:text-[var(--coffee)] hover:shadow-md">
              Back to Home
            </button>
            <button
              type="button"
              onClick={onContact}
              className="rounded-full border-2 border-[var(--coffee)] bg-[var(--cream-light)] px-6 py-3 font-semibold text-[var(--coffee)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--amber)] hover:text-[var(--coffee)] hover:shadow-md">
              Meet the Roasters
            </button>
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-[1.5rem] border border-[color:var(--coffee)]/10 bg-[var(--cream)] p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--amber)]">
                {plan.name}
              </p>
              <p className="mt-4 text-4xl font-semibold text-[var(--coffee)]">{plan.price}</p>
              <p className="mt-4 leading-7 text-[var(--ink)]/70">{plan.description}</p>
              <button
                type="button"
                className="mt-6 rounded-full bg-[var(--amber)] px-5 py-3 font-semibold text-[var(--coffee)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#c7811f]">
                Subscribe
              </button>
            </article>
          ))}
        </section>

        <section className="mt-10 rounded-[2rem] border border-[color:var(--coffee)]/10 bg-[var(--cream-light)] p-8 text-[var(--coffee)] md:p-10">
          <h2 className="text-2xl font-semibold text-[var(--coffee)]">Why subscribers love it</h2>
          <ul className="mt-6 space-y-3 text-lg text-[var(--coffee)]/85">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-1 text-[var(--amber)]">•</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}
