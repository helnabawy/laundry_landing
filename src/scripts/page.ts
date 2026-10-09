// The page's one authored moment: the pinned phone follows the story, and the
// custody strip advances stage by stage as the "Watch it move" step scrolls.
// Content is fully visible without this script; it only animates state.

const STAGES = 5;

function setStage(root: ParentNode, at: number) {
  root.querySelectorAll<HTMLElement>('[data-strip]').forEach((strip) => {
    if (strip.dataset.stage === String(at)) return;
    strip.dataset.stage = String(at);
    strip.style.setProperty('--at', String(at));
    strip.querySelectorAll<HTMLElement>('.stage').forEach((el, i) => {
      el.dataset.state = i < at ? 'done' : i === at ? 'active' : 'upcoming';
    });
    const screen = strip.closest('.scr');
    if (!screen) return;
    const notes = screen.querySelector<HTMLElement>('.notes');
    const statuses: string[] = JSON.parse(notes?.dataset.statuses ?? '[]');
    const stages: string[] = JSON.parse(notes?.dataset.stages ?? '[]');
    const word = screen.querySelector<HTMLElement>('[data-stage-word]');
    const status = screen.querySelector<HTMLElement>('[data-status]');
    if (word && stages[at]) word.textContent = stages[at];
    if (status && statuses[at]) status.textContent = statuses[at];
    notes?.querySelectorAll<HTMLElement>('li').forEach((li, i) => {
      li.dataset.shown = String(i <= at);
      li.toggleAttribute('data-latest', i === at);
    });
  });
  root.querySelectorAll<HTMLElement>('[data-stage-row]').forEach((row, i) => {
    row.dataset.state = i < at ? 'done' : i === at ? 'active' : 'upcoming';
  });
}

function initDemo() {
  const steps = [...document.querySelectorAll<HTMLElement>('.step[data-screen]')];
  const phone = document.getElementById('demo-phone');
  if (!steps.length) return;

  // Which step owns the middle of the viewport drives the pinned phone.
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const step = entry.target as HTMLElement;
        steps.forEach((s) => s.toggleAttribute('data-current', s === step));
        if (phone) phone.dataset.screen = step.dataset.screen ?? 'shop';
      }
    },
    { rootMargin: '-45% 0px -45% 0px' },
  );
  steps.forEach((s) => io.observe(s));
  steps[0].toggleAttribute('data-current', true);

  // Progress through the tracking step maps onto the five stages.
  const scope = document.querySelector<HTMLElement>('[data-track-scope]');
  if (!scope) return;
  let ticking = false;
  const update = () => {
    ticking = false;
    const rect = scope.getBoundingClientRect();
    const vh = window.innerHeight;
    const travel = Math.max(1, rect.height - vh * 0.5);
    const p = Math.min(1, Math.max(0, (vh * 0.5 - rect.top) / travel));
    const at = Math.min(STAGES - 1, Math.floor(p * STAGES));
    setStage(scope, at);
    if (phone) setStage(phone, at);
  };
  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// UAE mobile: 05X XXX XXXX, or +971 5X XXX XXXX.
const UAE_MOBILE = /^(?:\+?971|0)5\d{8}$/;

function initWaitlist() {
  const form = document.querySelector<HTMLFormElement>('form.waitlist');
  if (!form) return;
  const input = form.querySelector<HTMLInputElement>('input[name="contact"]')!;
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]')!;
  const msg = form.querySelector<HTMLElement>('.waitlist-msg')!;
  const d = form.dataset;
  const idle = button.textContent;

  const say = (text: string, kind: 'error' | 'done' | 'info') => {
    msg.textContent = text;
    msg.dataset.kind = kind;
  };

  input.addEventListener('input', () => {
    if (input.getAttribute('aria-invalid') === 'true') {
      input.removeAttribute('aria-invalid');
      say('', 'info');
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const raw = input.value.trim();
    const compact = raw.replace(/[\s-]/g, '');
    const valid = EMAIL.test(raw) || UAE_MOBILE.test(compact);
    if (!valid) {
      input.setAttribute('aria-invalid', 'true');
      say(d.msgInvalid ?? '', 'error');
      input.focus();
      return;
    }
    button.disabled = true;
    button.textContent = d.msgSending ?? idle;
    try {
      if (!d.endpoint) throw new Error('PUBLIC_WAITLIST_ENDPOINT is not set');
      const res = await fetch(d.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: EMAIL.test(raw) ? raw : compact, lang: d.lang }),
      });
      if (!res.ok) throw new Error(`Waitlist responded ${res.status}`);
      form.reset();
      say(d.msgDone ?? '', 'done');
    } catch (error) {
      console.error(error);
      say(d.msgFailed ?? '', 'error');
    } finally {
      button.disabled = false;
      button.textContent = idle;
    }
  });
}

function initThemeToggle() {
  const button = document.querySelector<HTMLButtonElement>('.theme-toggle');
  if (!button) return;
  const root = document.documentElement;
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const current = () => (root.dataset.theme as 'light' | 'dark' | undefined) ?? (media.matches ? 'dark' : 'light');
  const label = () => {
    button.setAttribute('aria-label', (current() === 'dark' ? button.dataset.toLight : button.dataset.toDark) ?? '');
  };
  button.addEventListener('click', () => {
    const next = current() === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {}
    label();
  });
  media.addEventListener('change', label);
  label();
}

initDemo();
initWaitlist();
initThemeToggle();
