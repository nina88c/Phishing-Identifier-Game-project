/* =====================================================
   PHISHING DETECTIVE
   To add an email, copy one object in the list below.
   - Links: <a href="#" data-url="REAL ADDRESS">text</a>
     (the data-url is what shows on hover; links never open)
   - Add  attachment: "file.pdf"  if the email has one
   ===================================================== */

const emails = [
  {
    displayName: "IT Support Services Desk",
    address: "admin-update@it-corporate-portal.com",
    initial: "I",
    avatarBg: "#1a73e8",
    time: "Mon 08:02",
    subject: "Action required: MFA sync within 24 hours",
    body: `
        <p>Dear Employee,</p>
        <p>Due to recent security updates, all staff must synchronise their corporate credentials with our new authentication portal.</p>
        <p>Failure to authorise your device within 24 hours will lead to an automatic account lockdown.</p>
        <p><a class="cta" href="#" data-url="https://it-corporate-portal.com/mfa/sync?id=8841">Synchronise MFA device now</a></p>
        <p class="sig">Global Operations IT Command</p>`,
    isPhishing: true,
    explanation:
      'Red flags: a generic greeting ("Dear Employee"), a 24-hour threat to pressure you, and a sender domain (<code>it-corporate-portal.com</code>) that isn\'t your company\'s own. Real IT teams don\'t ask you to "sync" credentials through an emailed link.',
  },
  {
    displayName: "Royal Mail",
    address: "parcels@royalmail-redelivery.info",
    initial: "R",
    avatarBg: "#e31d1d",
    time: "Tue 11:30",
    subject: "Your parcel could not be delivered: £1.99 fee",
    body: `
        <p>Hello,</p>
        <p>We tried to deliver your parcel today but nobody was home. It will be returned to the sender within 24 hours unless you pay a small redelivery fee of <strong>£1.99</strong>.</p>
        <p><a class="cta" href="#" data-url="https://royalmail-redelivery.info/pay">Rearrange delivery</a></p>
        <p class="sig">Royal Mail Customer Service</p>`,
    isPhishing: true,
    explanation:
      "Royal Mail's real domain is <code>royalmail.com</code>, not <code>royalmail-redelivery.info</code>. There's no tracking number or your name, there's a deadline, and it wants card details for a tiny fee. Parcel-fee scams like this are very common.",
  },
  {
    displayName: "HMRC Tax Refunds",
    address: "refunds@hmrc-gov-uk.com",
    initial: "H",
    avatarBg: "#00703c",
    time: "Wed 14:15",
    subject: "You are eligible for a tax refund of £487.50",
    body: `
        <p>Dear Customer,</p>
        <p>After the latest review of your tax records, you are due a refund of <strong>£487.50</strong>.</p>
        <p>To receive the payment, confirm your bank details using the secure form below.</p>
        <p><a class="cta" href="#" data-url="https://hmrc-gov-uk.com/refund/claim">Claim my refund</a></p>
        <p class="sig">HM Revenue &amp; Customs</p>`,
    isPhishing: true,
    explanation:
      "Real UK government sites end in <code>.gov.uk</code>. <code>hmrc-gov-uk.com</code> is just a lookalike. HMRC doesn't email you to claim refunds or ask for bank details through a link. The offer of free money is the bait.",
  },
  {
    displayName: "Sarah Whitmore",
    address: "sarah.whitmore.ceo@gmail.com",
    initial: "S",
    avatarBg: "#8e24aa",
    time: "Thu 16:47",
    subject: "Quick favour: are you at your desk?",
    body: `
        <p>Hi,</p>
        <p>I'm in back-to-back meetings and can't take calls. I need you to buy 5 x £100 gift cards for a client gift.</p>
        <p>Please keep this between us and reply with the codes as soon as you can. I'll reimburse you today.</p>
        <p>Thanks,<br>Sarah</p>
        <p class="sig">Sent from my iPhone</p>`,
    isPhishing: true,
    explanation:
      "This is CEO fraud. Red flags: a senior person using a free Gmail address, secrecy, urgency, gift cards, and an excuse to avoid a phone call. Notice there's no link at all: not every phishing email has one. Verify through a different channel, such as calling them.",
  },
  {
    displayName: "Accounts, Brightline Supplies",
    address: "accounts@brightline-suppIies.com",
    initial: "A",
    avatarBg: "#f57c00",
    time: "Fri 09:41",
    subject: "Overdue invoice #4471: please review",
    body: `
        <p>Hi,</p>
        <p>Please find attached the invoice for last month, which is now overdue.</p>
        <p>Open the attachment and click <strong>Enable content</strong> to view the full statement.</p>
        <p>Regards,<br>Accounts Team</p>`,
    attachment: "Invoice_4471.pdf.html",
    isPhishing: true,
    explanation:
      'Three problems. The file is really <code>.html</code> pretending to be a PDF (check the end of the name). It asks you to "enable content". And the sender domain has a capital <strong>I</strong> instead of a lowercase <strong>l</strong>: <code>suppIies</code>.',
  },
  {
    displayName: "LinkedIn",
    address: "notifications@linkedln.com",
    initial: "in",
    avatarBg: "#0a66c2",
    time: "Sat 10:05",
    subject: "Your profile was viewed 14 times this week",
    body: `
        <p>Hi there,</p>
        <p>14 people viewed your profile this week, including recruiters at companies you might like.</p>
        <p><a class="cta" href="#" data-url="https://linkedln.com/login?ref=viewers">See who viewed your profile</a></p>
        <p class="sig">You are receiving LinkedIn notification emails.</p>`,
    isPhishing: true,
    explanation:
      "Look closely at the domain: <code>linkedln.com</code> uses a lowercase <strong>L</strong> then <strong>n</strong>, not <strong>i</strong> then <strong>n</strong>. Hovering the button shows it leads to a fake login page. Curiosity is the hook here.",
  },
  {
    displayName: "GitHub",
    address: "noreply@github.com",
    initial: "G",
    avatarBg: "#24292e",
    time: "Mon 13:22",
    subject:
      "[GitHub] A personal access token (classic) was added to your account",
    body: `
        <p>Hey there,</p>
        <p>A personal access token (classic) with the scopes <strong>repo</strong> and <strong>workflow</strong> was recently added to your account.</p>
        <p>If you did this, no further action is needed. If you didn't, please review your tokens and revoke any you don't recognise.</p>
        <p><a class="cta" href="#" data-url="https://github.com/settings/tokens">Review your tokens</a></p>
        <p class="sig">GitHub, Inc.</p>`,
    isPhishing: false,
    explanation:
      "The sender is the real <code>github.com</code> domain, the link goes to <code>github.com/settings</code>, the tone is calm, and it doesn't ask for your password. Good habit anyway: go to the site yourself rather than clicking security emails.",
  },
  {
    displayName: "Amazon.co.uk",
    address: "shipment-tracking@amazon.co.uk",
    initial: "a",
    avatarBg: "#232f3e",
    time: "Tue 17:08",
    subject: 'Dispatched: your order of "USB-C cable (2 pack)"',
    body: `
        <p>Hi Sam,</p>
        <p>Your package has been dispatched and is expected on <strong>Thursday</strong>.</p>
        <p>Order #202-1847293-5530142</p>
        <p><a class="cta" href="#" data-url="https://www.amazon.co.uk/progress-tracker">Track your package</a></p>
        <p class="sig">Amazon.co.uk</p>`,
    isPhishing: false,
    explanation:
      "Legitimate. It comes from the real <code>amazon.co.uk</code> domain, uses your name and a specific order, links to <code>amazon.co.uk</code>, and asks you to do nothing urgent. If you ever don't remember an order, check your account directly instead.",
  },
  {
    displayName: "Google",
    address: "no-reply@accounts.google.com",
    initial: "G",
    avatarBg: "#ea4335",
    time: "Wed 22:37",
    subject: "Security alert: new sign-in on Windows",
    body: `
        <p>Your Google Account was just signed in to from a new Windows device.</p>
        <p><strong>Windows</strong><br>Manchester, UK<br>22:36</p>
        <p>If this was you, you don't need to do anything. If not, we'll help you secure your account.</p>
        <p><a class="cta" href="#" data-url="https://myaccount.google.com/notifications">Check activity</a></p>
        <p class="sig">You received this email to let you know about important changes to your Google Account.</p>`,
    isPhishing: false,
    explanation:
      "A tricky one: security alerts can be real. Here the sender is <code>accounts.google.com</code>, the link goes to <code>myaccount.google.com</code>, and it doesn't ask for your password or threaten you. Even so, the safest move is to open Google yourself and check.",
  },
  {
    displayName: "TryHackMe",
    address: "noreply@tryhackme.com",
    initial: "T",
    avatarBg: "#212c42",
    time: "Thu 07:30",
    subject: "You're on a 5-day learning streak",
    body: `
        <p>Nice work!</p>
        <p>You've learned something new 5 days in a row. Pick up where you left off and keep your streak alive.</p>
        <p><a class="cta" href="#" data-url="https://tryhackme.com/dashboard">Continue learning</a></p>
        <p class="sig">Happy hacking, the TryHackMe team</p>`,
    isPhishing: false,
    explanation:
      "Legitimate. It's the kind of friendly marketing email you'd expect from a service you use, the domain matches, and the link goes to the same domain. There's no threat, no deadline and no request for personal details.",
  },
];

/* ---------- GAME STATE ---------- */
let queue = []; // the emails in shuffled order
let index = 0; // which email we're on
let score = 0;
let answered = false; // stops the same email being scored twice

const $ = (id) => document.getElementById(id); // short helper

// Shuffle so the order changes each game (Math.random is fine here: it's a game, not security)
function shuffle(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}

/* ---------- START / LOAD ---------- */
function startGame() {
  queue = shuffle(emails.slice()); // slice() copies the list
  index = 0;
  score = 0;
  $("score").textContent = 0;
  $("end").hidden = true;
  $("game").hidden = false;
  loadEmail();
}

function loadEmail() {
  const e = queue[index];
  answered = false;

  $("progress").textContent = `Email ${index + 1} of ${queue.length}`;

  // textContent for sender details: it never runs HTML, so it's the safe choice
  $("subject").textContent = e.subject;
  $("sender-name").textContent = e.displayName;
  $("sender-address").textContent = `<${e.address}>`;
  $("time").textContent = e.time;
  $("avatar").textContent = e.initial;
  $("avatar").style.backgroundColor = e.avatarBg;

  // The body uses innerHTML because it contains our own trusted HTML (links, bold).
  // Never do this with text a visitor typed.
  $("body").innerHTML = e.body;

  const attachments = $("attachments");
  attachments.textContent = "";
  if (e.attachment) {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = "Attachment: " + e.attachment;
    attachments.appendChild(chip);
  }

  $("linkbar").hidden = true;
  $("feedback").hidden = true;
  $("btn-next").hidden = true;
  $("btn-phish").disabled = false;
  $("btn-safe").disabled = false;
}

/* ---------- ANSWERING ---------- */
function answer(saidPhishing) {
  if (answered) return;
  answered = true;

  const e = queue[index];
  const correct = saidPhishing === e.isPhishing;
  if (correct) score++;
  $("score").textContent = score;

  const feedback = $("feedback");
  feedback.className = "feedback " + (correct ? "is-correct" : "is-wrong");
  feedback.innerHTML =
    `<strong>${correct ? "Correct!" : "Not quite."}</strong> This email is ` +
    `${e.isPhishing ? "phishing" : "legitimate"}. ${e.explanation}`;
  feedback.hidden = false;

  $("btn-phish").disabled = true;
  $("btn-safe").disabled = true;

  const next = $("btn-next");
  next.textContent =
    index === queue.length - 1 ? "See my results" : "Next email";
  next.hidden = false;
  next.focus();
}

function nextEmail() {
  index++;
  if (index >= queue.length) {
    showEnd();
  } else {
    loadEmail();
  }
}

function showEnd() {
  $("game").hidden = true;
  $("end").hidden = false;
  $("final-score").textContent = `${score} / ${queue.length}`;

  const ratio = score / queue.length;
  let message = "Good start. Re-read the red flags and try again.";
  if (ratio === 1) message = "Perfect. Nothing gets past you.";
  else if (ratio >= 0.8)
    message = "Sharp eyes. Just a few tricky ones got through.";
  else if (ratio >= 0.5)
    message = "Not bad. Check domains and links more carefully next time.";
  $("end-message").textContent = message;
}

/* ---------- LINK PREVIEW (hover, keyboard focus or tap) ---------- */
const bodyEl = $("body");
const linkbar = $("linkbar");

function showLink(event) {
  const link = event.target.closest("a[data-url]");
  if (link) {
    linkbar.textContent = link.dataset.url;
    linkbar.hidden = false;
  }
}
function hideLink() {
  linkbar.hidden = true;
}

bodyEl.addEventListener("mouseover", showLink);
bodyEl.addEventListener("focusin", showLink);
bodyEl.addEventListener("mouseout", hideLink);
bodyEl.addEventListener("focusout", hideLink);
bodyEl.addEventListener("click", function (event) {
  if (event.target.closest("a")) {
    event.preventDefault(); // links never open
    showLink(event); // on phones, tapping shows the address instead
  }
});

/* ---------- BUTTONS ---------- */
$("btn-phish").addEventListener("click", function () {
  answer(true);
});
$("btn-safe").addEventListener("click", function () {
  answer(false);
});
$("btn-next").addEventListener("click", nextEmail);
$("btn-restart").addEventListener("click", startGame);

startGame();
