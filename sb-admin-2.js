(function ($) {
  "use strict"; // Start of use strict

  // Scroll to top button appear
  $(document).on('scroll', function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function (e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict





const ramzinoFaqEntries = [
  { question: "چطور در رمزینو کیف پول دیجیتال بسازم؟", answer: "پس از ثبت‌نام و تکمیل احراز هویت، از منوی «کیف پول» گزینه «ساخت کیف پول جدید» را انتخاب کنید. رمزینو به‌صورت خودکار یک آدرس اختصاصی برای هر رمزارز ایجاد می‌کند." },
  { question: "کارمزد معاملات در بازار رمزینو چقدر است؟", answer: "کارمزد هر معامله بین ۰.۱ تا ۰.۳۵ درصد بسته به حجم و نوع سفارش (بازار یا لیمیت) محاسبه می‌شود. جزئیات کامل در صفحه «تعرفه‌ها» موجود است." },
  { question: "احراز هویت در سامانه رمزینو چقدر طول می‌کشد؟", answer: "معمولاً بررسی مدارک هویتی توسط تیم پشتیبانی رمزینو بین ۱۵ دقیقه تا ۲۴ ساعت کاری زمان می‌برد و نتیجه از طریق پیامک اطلاع داده می‌شود." },
  { question: "آیا می‌توانم تومان را مستقیم به رمزارز تبدیل کنم؟", answer: "بله، از بخش «خرید و فروش سریع» می‌توانید موجودی تومانی خود را با نرخ لحظه‌ای مستقیماً به بیت‌کوین، اتریوم یا هر رمزارز دیگر تبدیل کنید." },
  { question: "برداشت رمزارز از کیف پول رمزینو چطور انجام می‌شود؟", answer: "از صفحه کیف پول، گزینه «برداشت» را بزنید، آدرس مقصد را وارد کنید و مبلغ را مشخص کنید. تراکنش پس از تایید شبکه بلاکچین نهایی می‌شود." },
  { question: "پشتیبانی رمزینو چه ساعاتی پاسخگوست؟", answer: "تیم پشتیبانی رمزینو به‌صورت ۲۴ ساعته و هفت روز هفته از طریق چت آنلاین و تیکت در دسترس کاربران است." }
];
function ramzinoRenderFaqStack() {
  const stackEl = document.getElementById('ramzinoFaqStack');
  stackEl.innerHTML = ramzinoFaqEntries.map((entry, entryIndex) => `
              <div class="ramzino-faq-entry" data-entry-index="${entryIndex}">
                <div class="ramzino-faq-trigger" onclick="ramzinoToggleFaqEntry(${entryIndex})">
                  <span class="ramzino-faq-question-label">${entry.question}</span>
                  <span class="ramzino-faq-chevron">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                  </span>
                </div>
                <div class="ramzino-faq-collapse" id="ramzinoFaqCollapse-${entryIndex}">
                  <div class="ramzino-faq-answer-text">${entry.answer}</div>
                </div>
              </div>
            `).join('');
}
function ramzinoToggleFaqEntry(entryIndex) {
  const entryEl = document.querySelector(`.ramzino-faq-entry[data-entry-index="${entryIndex}"]`);
  const collapseEl = document.getElementById(`ramzinoFaqCollapse-${entryIndex}`);
  const isExpanded = entryEl.classList.contains('ramzino-is-expanded');
  if (isExpanded) {
    entryEl.classList.remove('ramzino-is-expanded');
    collapseEl.style.maxHeight = null;
  } else {
    entryEl.classList.add('ramzino-is-expanded');
    collapseEl.style.maxHeight = collapseEl.scrollHeight + 'px';
  }
}
ramzinoRenderFaqStack();




const ramzinoCoins = [
  { name: "بیت‌کوین", symbol: "BTC", price: 10317998996, change: 1.16, color: "#f7931a", icon: "₿" },
  { name: "اتریوم", symbol: "ETH", price: 277000555, change: 1.89, color: "#3c3c3d", icon: "Ξ" },
  { name: "لایت‌کوین", symbol: "LTC", price: 7411740, change: 1.42, color: "#345d9d", icon: "Ł" },
  { name: "تتر", symbol: "USDT", price: 175446, change: 2.11, color: "#26a17b", icon: "₮" },
  { name: "ریپل", symbol: "XRP", price: 182800, change: 2.16, color: "#111111", icon: "✕" },
  { name: "بیت‌کوین‌کش", symbol: "BCH", price: 35795322, change: 4.21, color: "#0ac18e", icon: "฿" },
];

const ramzinoMoreCoins = [
  { name: "کاردانو", symbol: "ADA", price: 16200, change: -0.84, color: "#0033ad", icon: "₳" },
  { name: "دوج‌کوین", symbol: "DOGE", price: 12650, change: 3.05, color: "#c2a633", icon: "Ð" },
  { name: "پولکادات", symbol: "DOT", price: 126400, change: -1.32, color: "#e6007a", icon: "●" },
  { name: "سولانا", symbol: "SOL", price: 4382000, change: 2.74, color: "#14f195", icon: "S" },
  { name: "چین‌لینک", symbol: "LINK", price: 311500, change: 0.62, color: "#2a5ada", icon: "⬡" },
];

const ramzinoUsdtRate = ramzinoCoins.find(c => c.symbol === "USDT").price;
let ramzinoCurrentCurrency = "toman";
let ramzinoShowingMore = false;

function ramzinoToFarsiDigits(str) {
  const en = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const fa = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return String(str).replace(/[0-9]/g, d => fa[en.indexOf(d)]);
}
function ramzinoFormatToman(n) { return n.toLocaleString('en-US'); }
function ramzinoFormatUsdt(n) {
  const v = n / ramzinoUsdtRate;
  return v.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function ramzinoSeededPath(seed, up) {
  let s = seed;
  function rand() { s = (s * 9301 + 49297) % 233280; return s / 233280; }
  const points = 24, w = 120, h = 40, pad = 4;
  let y = h / 2;
  const vals = [];
  for (let i = 0; i < points; i++) {
    const bias = up ? -0.6 : 0.4;
    y += (rand() - 0.5 + bias * 0.15) * 8;
    y = Math.max(pad, Math.min(h - pad, y));
    vals.push(y);
  }
  const step = (w - pad * 2) / (points - 1);
  let d = `M ${pad} ${vals[0]}`;
  vals.forEach((v, i) => { if (i > 0) d += ` L ${pad + step * i} ${v}`; });
  return { d, w, h };
}
function ramzinoSparkSVG(seed, up) {
  const { d, w, h } = ramzinoSeededPath(seed, up);
  return `<svg viewBox="0 0 ${w} ${h}" width="120" height="40">
              <path d="${d}" fill="none" stroke="#6c5ce7" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>`;
}
function ramzinoCoinRowHTML(c, idx, animate) {
  const up = c.change >= 0;
  const changeStr = ramzinoToFarsiDigits(Math.abs(c.change).toFixed(2)) + '٪';
  const priceStr = ramzinoCurrentCurrency === "toman"
    ? `<span class="ramzino-coin-currency">IRT</span>${ramzinoToFarsiDigits(ramzinoFormatToman(c.price))}`
    : `<span class="ramzino-coin-currency">$</span>${ramzinoToFarsiDigits(ramzinoFormatUsdt(c.price))}`;
  return `
              <tr class="${animate ? 'ramzino-coin-row-enter' : ''}">
                <td><button class="ramzino-coin-trade-btn" type="button" onclick="ramzinoHandleTrade('${c.symbol}')">خرید و فروش</button></td>
                <td>${ramzinoSparkSVG(idx + 7, up)}</td>
                <td><span class="ramzino-coin-change ${up ? 'ramzino-up' : 'ramzino-down'}">${up ? '+' : '-'}${changeStr}</span></td>
                <td><span class="ramzino-coin-price">${priceStr}</span></td>
                <td class="ramzino-col-name">
                  <div class="ramzino-coin-name-cell">
                    <span class="ramzino-coin-name-text">${c.name} <span class="ramzino-coin-symbol">${c.symbol}</span></span>
                    <span class="ramzino-coin-icon" style="background:${c.color}">${c.icon}</span>
                  </div>
                </td>
              </tr>
            `;
}
function ramzinoRenderCoinRows() {
  const tbody = document.getElementById('ramzinoCoinRows');
  const list = ramzinoShowingMore ? ramzinoCoins.concat(ramzinoMoreCoins) : ramzinoCoins;
  tbody.innerHTML = list.map((c, idx) => ramzinoCoinRowHTML(c, idx, false)).join('');
}
function ramzinoUpdatePriceLabel() {
  document.getElementById('ramzinoPriceColLabel').textContent =
    ramzinoCurrentCurrency === "toman" ? "آخرین قیمت (تومان)" : "آخرین قیمت (تتر)";
}
function ramzinoHandleTrade(symbol) { alert('خرید و فروش ' + symbol); }

document.querySelectorAll('.ramzino-coin-toggle button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.ramzino-coin-toggle button').forEach(b => b.classList.remove('ramzino-active'));
    btn.classList.add('ramzino-active');
    ramzinoCurrentCurrency = btn.dataset.currency === 'tether' ? 'tether' : 'toman';
    ramzinoUpdatePriceLabel();
    ramzinoRenderCoinRows();
  });
});

const ramzinoViewAllBtn = document.getElementById('ramzinoViewAllBtn');
const ramzinoViewAllLabel = document.getElementById('ramzinoViewAllLabel');
ramzinoViewAllBtn.addEventListener('click', () => {
  ramzinoShowingMore = !ramzinoShowingMore;
  ramzinoViewAllBtn.classList.toggle('ramzino-open', ramzinoShowingMore);
  ramzinoViewAllLabel.textContent = ramzinoShowingMore ? 'بستن لیست' : 'مشاهده تمام رمزارزها';
  const tbody = document.getElementById('ramzinoCoinRows');
  if (ramzinoShowingMore) {
    const startIdx = ramzinoCoins.length;
    tbody.insertAdjacentHTML('beforeend', ramzinoMoreCoins.map((c, i) => ramzinoCoinRowHTML(c, startIdx + i, true)).join(''));
  } else {
    ramzinoRenderCoinRows();
  }
});

ramzinoUpdatePriceLabel();
ramzinoRenderCoinRows();




const ramzinoAreaCtx = document.getElementById('myAreaChart');
new Chart(ramzinoAreaCtx, {
  type: 'line',
  data: {
    labels: ['شنبه', 'یکشنبه', 'دوشنبه', 'سه‌شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه'],
    datasets: [{
      label: 'قیمت بیت‌کوین (میلیون تومان)',
      data: [9820, 9990, 9870, 10120, 10050, 10240, 10318],
      tension: 0.35,
      fill: true,
      backgroundColor: 'rgba(108,92,231,0.12)',
      borderColor: '#6c5ce7',
      pointBackgroundColor: '#6c5ce7',
      pointRadius: 3,
      borderWidth: 2.5,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false } },
      y: { grid: { color: '#eef0f3' }, ticks: { callback: v => v.toLocaleString('en-US') } }
    }
  }
});

const ramzinoPieCtx = document.getElementById('myPieChart');
new Chart(ramzinoPieCtx, {
  type: 'doughnut',
  data: {
    labels: ['BTC', 'ETH', 'USDT'],
    datasets: [{
      data: [55, 30, 15],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      borderWidth: 0,
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: { legend: { display: false } }
  }
});



        // Scroll to top button
        $(document).on('scroll', function () {
            if ($(this).scrollTop() > 100) { $('.scroll-to-top').fadeIn(); } else { $('.scroll-to-top').fadeOut(); }
        });
        $(document).on('click', 'a.scroll-to-top', function (e) {
            $('html, body').stop().animate({ scrollTop: 0 }, 600);
            e.preventDefault();
        });