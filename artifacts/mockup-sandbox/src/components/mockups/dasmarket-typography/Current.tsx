import './_group.css';
import { useState, type FormEvent } from 'react';
import { ArrowDown, ArrowRight, ArrowUp, Check, CheckCircle2, CircleHelp, Globe2, Menu, Plus, ShoppingBag, Sparkles, Store, WandSparkles, X } from 'lucide-react';

const faqs = [
  {
    q: 'What happens when I open a shop?',
    a: 'You choose a shop name, add your products, and Dasmarket creates your storefront with a shareable address like yourshop.dasmarket.com. Your shop is yours to shape, and you can publish when it is ready.',
  },
  {
    q: 'Do I need a website or technical experience?',
    a: 'No. Dasmarket gives you the building blocks for a complete online shop, including product pages, a storefront, and a dashboard. You can start with a few products and make it your own as you go.',
  },
  {
    q: 'Can I use my own domain later?',
    a: 'Yes. Start with your included Dasmarket subdomain, then connect a domain you already own from your dashboard settings whenever you are ready to make the shop even more distinctly yours.',
  },
  {
    q: 'Can I change my shop name and look?',
    a: 'Absolutely. You can update your shop details and presentation as your brand takes shape. The storefront is a starting point, not a box you have to stay inside.',
  },
  {
    q: 'What can I sell?',
    a: 'Dasmarket is made for independent sellers and small brands. From handmade goods and homewares to vintage finds and considered collections, your shop is a place to bring your own catalog to life.',
  },
  {
    q: 'How much does it cost to get started?',
    a: 'Create your shop and explore the experience before committing. The details of any paid plans or transaction fees should be reviewed on the current plan page before you publish.',
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <a className="brand" href="#top" aria-label="Dasmarket home" data-testid="link-brand-home">
      <span className="brand-mark">d.</span>
      <span>dasmarket</span>
      {footer && <span className="eyebrow" style={{ fontSize: 8, marginLeft: 2 }}>for makers</span>}
    </a>
  );
}

export function Current() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  function submitStart(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFeedback('Enter a valid email address to get started.');
      return;
    }
    setFeedback('Thanks. This frontend demo does not send or store your email.');
    setEmail('');
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="page-shell" id="top">
      <header className="nav-wrap">
        <nav className="nav container" aria-label="Main navigation">
          <Brand />
          <button className="mobile-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} data-testid="button-mobile-menu">
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
          <div className={`nav-links${menuOpen ? ' open' : ''}`}>
            <a href="#how-it-works" onClick={closeMenu} data-testid="link-how-it-works">How it works</a>
            <a href="#your-brand" onClick={closeMenu} data-testid="link-your-brand">Your brand</a>
            <a href="#domains" onClick={closeMenu} data-testid="link-domains">Domains</a>
            <a href="#faq" onClick={closeMenu} data-testid="link-faq">FAQ</a>
          </div>
          <div className="nav-actions">
            <a className="nav-login" href="#start" data-testid="link-sign-in">Sign in</a>
            <a className="button button-dark" href="#start" data-testid="button-nav-start">Open your shop <ArrowRight size={14} /></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker eyebrow reveal"><span className="kicker-dot" /> A home for the things you make</div>
              <h1 className="display reveal reveal-delay" id="hero-title">Your shop.<br />Your <em>whole</em><br />next chapter.</h1>
              <p className="reveal reveal-delay-2">Make a beautiful place for your products online. Start with your own Dasmarket shop address, then grow into a brand that feels unmistakably yours.</p>
              <div className="hero-ctas reveal reveal-delay-2">
                <a className="button button-coral" href="#start" data-testid="button-start-shop">Create your shop <ArrowRight size={15} /></a>
                <a className="button button-outline" href="#how-it-works" data-testid="button-see-how">See how it works <ArrowDown size={14} /></a>
              </div>
              <div className="hero-note"><CheckCircle2 size={14} /> Start with a shop link. Bring your own domain later.</div>
            </div>
            <div className="hero-stage" aria-label="Preview of an independent seller storefront">
              <div className="shop-window">
                <div className="shop-inner">
                  <div className="shop-browser"><i className="browser-dot" /><i className="browser-dot" /><i className="browser-dot" /><span className="browser-url">little-field.dasmarket.com</span></div>
                  <div className="shop-top"><div className="shop-name">little field studio</div><div className="shop-menu">SHOP&nbsp;&nbsp;&nbsp; ABOUT&nbsp;&nbsp;&nbsp; BAG (0)</div></div>
                  <div className="shop-visual">
                    <img src="/__mockup/images/hero-market.jpg" alt="Sculptural handmade ceramics in a sunlit studio" />
                    <div className="shop-overlay" />
                    <div className="shop-caption"><span>Objects for slow living</span><h3>Make room<br />for the good.</h3></div>
                  </div>
                  <div className="products-row">
                    <div className="product-tile"><img src="/__mockup/images/hero-market.jpg" alt="" /><span className="product-label">The Sunday Vase · $48</span></div>
                    <div className="product-tile"><img src="/__mockup/images/maker-story.jpg" alt="" /><span className="product-label">Soft Form Bowl · $36</span></div>
                    <div className="product-tile"><img src="/__mockup/images/hero-market.jpg" alt="" /><span className="product-label">Little Glow · $24</span></div>
                  </div>
                </div>
              </div>
              <div className="float-card domain-card"><small><span className="domain-icon"><Globe2 size={12} /></span> YOUR SHOP ADDRESS</small><strong>little-field.dasmarket.com</strong></div>
              <div className="float-card sales-card"><span className="sales-badge"><ShoppingBag size={15} /></span><span><small>Your first order</small><strong>It starts here.</strong></span></div>
              <div className="hero-stamp">MADE FOR<br />INDEPENDENT<br />THINKING</div>
            </div>
          </div>
        </section>

        <div className="ticker" aria-label="Built for independent sellers">
          <div className="ticker-track">
            <span>Good things start small</span><span className="ticker-star">✳</span><span>Made for independent sellers</span><span className="ticker-star">✳</span><span>Your name on the door</span><span className="ticker-star">✳</span><span>Good things start small</span><span className="ticker-star">✳</span><span>Made for independent sellers</span>
          </div>
        </div>

        <section className="section" id="how-it-works">
          <div className="container">
            <div className="section-intro">
              <div><div className="eyebrow section-label">01 / Getting started</div><h2>From “I’ve got an idea” to “it’s open.”</h2></div>
              <p>No web developer, launch checklist, or perfect plan required. Just bring what you make. We’ll help you put it on the map.</p>
            </div>
            <div className="steps-grid">
              <article className="step"><div className="step-num">01</div><div><div className="step-icon"><Store size={19} /></div><h3>Give your shop a name</h3><p>Claim your own little corner of the internet. Your shareable Dasmarket address is ready with your shop.</p></div></article>
              <article className="step"><div className="step-num">02</div><div><div className="step-icon"><ShoppingBag size={19} /></div><h3>Bring your best things</h3><p>Add products, tell people what makes them special, and arrange your storefront to feel like you.</p></div></article>
              <article className="step"><div className="step-num">03</div><div><div className="step-icon"><Sparkles size={19} /></div><h3>Open the doors</h3><p>Share your shop with the world. Keep building your brand as your customers and ideas grow.</p></div></article>
            </div>
            <div className="steps-foot"><span>A small start is still a start.</span><a href="#start" data-testid="link-start-from-steps">Start setting up <ArrowRight size={14} /></a></div>
          </div>
        </section>

        <section className="section brand-section" id="your-brand">
          <div className="container">
            <div className="section-intro">
              <div><div className="eyebrow section-label">02 / Room to be you</div><h2>Not just a shop. A point of view.</h2></div>
              <p>Your storefront should feel like an extension of the work you put into everything you make. Make it yours, then let it evolve.</p>
            </div>
            <div className="brand-showcase">
              <div className="brand-story">
                <div className="eyebrow">A little proof of possibility</div>
                <blockquote>“The shop feels like walking into my studio. That was the whole point.”</blockquote>
                <div className="seller"><div className="seller-avatar">JM</div><div><div className="seller-name">June Mercer</div><div className="seller-meta">Textile artist · Mercer & Loom</div></div></div>
              </div>
              <div className="brand-art"><img src="/__mockup/images/maker-story.jpg" alt="Colorful textiles and tools in a maker's studio" /><div className="brand-art-label">MERCER & LOOM&nbsp; / &nbsp;FIBER WITH FEELING</div></div>
            </div>
            <div className="perks">
              <div className="perk"><WandSparkles size={17} /><div><strong>A storefront with your signature</strong><span>Bring your colors, products, and point of view into the picture.</span></div></div>
              <div className="perk"><Store size={17} /><div><strong>One home for your products</strong><span>Give your collection a considered place to live and grow.</span></div></div>
              <div className="perk"><ArrowUp size={17} /><div><strong>More room as you grow</strong><span>Your first shop link is only the beginning of your brand.</span></div></div>
            </div>
          </div>
        </section>

        <section className="section domain-section" id="domains">
          <div className="container domain-layout">
            <div className="domain-copy">
              <div className="eyebrow section-label">03 / Your address, your pace</div>
              <h2>Start with a link. Grow into your own domain.</h2>
              <p>Every new shop gets a Dasmarket subdomain, so there’s one less thing between you and opening. When you’re ready for your own web address, connect a custom domain from your dashboard settings.</p>
              <div className="domain-flow">
                <div className="domain-chip">TODAY&nbsp; <span>little-field.dasmarket.com</span></div><ArrowRight className="flow-arrow" size={16} /><div className="domain-chip">WHENEVER&nbsp; <span>littlefield.studio</span></div>
              </div>
              <a className="button button-dark" href="#start" data-testid="button-domain-start">Start with your shop link <ArrowRight size={14} /></a>
            </div>
            <div className="domain-art" aria-label="Custom domain settings preview">
              <div className="orbit" />
              <div className="domain-panel">
                <div className="panel-head"><span>SHOP SETTINGS&nbsp; / &nbsp;DOMAINS</span><span className="panel-status">Connected</span></div>
                <div className="panel-body">
                  <div className="panel-title">Your domain</div>
                  <div className="panel-sub">Manage how customers find your shop.</div>
                  <div className="domain-row"><span>little-field.dasmarket.com</span><span>DEFAULT</span></div>
                  <div className="domain-row" style={{ marginTop: 7 }}><span>littlefield.studio</span><span>PRIMARY</span></div>
                  <div className="panel-button">+ &nbsp; Connect a custom domain</div>
                </div>
              </div>
              <div className="domain-note">Your dashboard, when you’re ready. No rush.</div>
            </div>
          </div>
        </section>

        <section className="section features-section">
          <div className="container feature-layout">
            <div className="feature-heading">
              <div className="eyebrow section-label">04 / The essentials, handled</div>
              <h2>All the useful stuff. None of the fuss.</h2>
              <p>Spend less energy piecing together a website and more time doing the thing you came here to do.</p>
              <a className="button button-outline" href="#start" data-testid="button-feature-cta">Find your starting point <ArrowRight size={14} /></a>
            </div>
            <div className="feature-list">
              <article className="feature-row"><span className="feature-index">01</span><div><h3>A place to show off your work</h3><p>Give every product a clear, inviting home, and make it easy for people to see what you make.</p></div><Check size={17} /></article>
              <article className="feature-row"><span className="feature-index">02</span><div><h3>Your own shop, under your name</h3><p>Start with a Dasmarket web address that’s simple to share and yours from day one.</p></div><Check size={17} /></article>
              <article className="feature-row"><span className="feature-index">03</span><div><h3>Control from one dashboard</h3><p>Keep the everyday details of your shop together, from products to your storefront settings.</p></div><Check size={17} /></article>
              <article className="feature-row"><span className="feature-index">04</span><div><h3>Space to make your brand bigger</h3><p>Connect a custom domain later and give your growing business its own address on the web.</p></div><Check size={17} /></article>
              <article className="feature-row"><span className="feature-index">05</span><div><h3>Easy to keep moving</h3><p>Start with what you have now. Add more to your shop when you’re ready for what’s next.</p></div><Check size={17} /></article>
            </div>
          </div>
        </section>

        <section className="quote-band" aria-label="A note for independent sellers">
          <div className="container quote-inner"><div className="quote-mark">“</div><div className="quote-copy">The best time to open your shop isn’t when everything is perfect. It’s when you’re ready to begin.</div><div className="quote-byline">A NOTE FROM DASMARKET</div></div>
        </section>

        <section className="section faq-section" id="faq">
          <div className="container faq-layout">
            <div className="faq-heading">
              <div className="eyebrow section-label">05 / Good questions</div>
              <h2>Before you open the door.</h2>
              <p>Starting something new comes with questions. Here are a few of the things sellers ask us.</p>
              <a href="#start" data-testid="link-faq-help"><CircleHelp size={15} /> Still wondering? Start here.</a>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div className="faq-item" key={faq.q}>
                  <button className="faq-question" type="button" aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setOpenFaq(openFaq === index ? null : index)} data-testid={`button-faq-${index}`}>
                    {faq.q}<Plus size={17} />
                  </button>
                  {openFaq === index && <div className="faq-answer" id={`faq-answer-${index}`} data-testid={`text-faq-answer-${index}`}>{faq.a}</div>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" id="start">
          <div className="container cta-inner">
            <div>
              <div className="eyebrow">Your next chapter is yours to make</div>
              <h2>Make a little room for what’s next.</h2>
              <p>Your shop can be up and taking shape today. Start with your name and your idea.</p>
            </div>
            <form className="cta-form" onSubmit={submitStart} noValidate>
              <label className="eyebrow" htmlFor="seller-email">A good place to start: your email</label>
              <input id="seller-email" type="email" value={email} onChange={(event) => { setEmail(event.target.value); setFeedback(''); }} placeholder="you@yourbrand.com" autoComplete="email" aria-describedby="form-feedback" data-testid="input-seller-email" />
              <button className="button button-coral" type="submit" data-testid="button-submit-start">Get started <ArrowRight size={15} /></button>
              <div className="form-feedback" id="form-feedback" aria-live="polite" data-testid="text-form-feedback">{feedback}</div>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Brand footer />
          <div className="footer-copy">An independent shop starts with an idea. © 2025 Dasmarket</div>
          <div className="footer-links"><a href="#how-it-works" data-testid="link-footer-how">How it works</a><a href="#domains" data-testid="link-footer-domains">Domains</a><a href="#faq" data-testid="link-footer-faq">FAQ</a></div>
          <a className="back-top" href="#top" data-testid="link-back-to-top">Back to top <ArrowUp size={12} /></a>
        </div>
      </footer>
    </div>
  );
}

