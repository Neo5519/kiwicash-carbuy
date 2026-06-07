/* =========================================================
   KiwiCash 收车 — app.js
   i18n（中英双语） + 在线即时估价引擎 + 交互
   ========================================================= */

/* ---------- 1. 翻译字典 ---------- */
const I18N = {
  zh: {
    "topbar":"🚗 全新西兰上门收购 · 当场银行转账付款 · 平均 24 小时成交",
    "nav.how":"流程","nav.value":"即时估价","nav.why":"为什么选我们","nav.reviews":"客户评价","nav.faq":"常见问题","nav.criteria":"收购标准","nav.contact":"联系我们",
    "nav.cta":"免费估价",
    "hero.eyebrow":"新西兰领先的上门收车服务",
    "hero.h1a":"想卖车？","hero.h1b":"我们上门，","hero.h1c":"当场付款",
    "hero.lead":"输入车牌或车型，30 秒在线获得报价区间。我们上门看车、办理所有手续，并当场银行转账——无需讨价还价，无需陌生人来家里。",
    "hero.cta1":"立即在线估价","hero.cta2":"📞 0800 725 376",
    "hero.trust1":"Trustpilot 4.9 分","hero.trust2":"已收购 12,000+ 辆车","hero.trust3":"全国上门服务",
    "hero.bubble.s":"即时报价","hero.bubble.b":"$28,400",
    "stat1n":"12,000+","stat1l":"成功收购车辆","stat2n":"4.9★","stat2l":"Trustpilot 评分","stat3n":"24 小时","stat3l":"平均成交时间","stat4n":"100%","stat4l":"上门免费估价",
    "steps.title":"三步卖车，简单省心","steps.sub":"从在线估价到钱到账，整个流程通常一天内完成。",
    "step1.t":"在线即时估价","step1.p":"输入车型、年份、里程和车况，立刻获得真实报价区间——不是套路，不用等回电。",
    "step2.t":"我们上门看车","step2.p":"选择对你方便的时间地点，我们的评估师上门检查并确认最终报价。",
    "step3.t":"当场付款","step3.p":"成交后立即银行转账，所有过户文件由我们免费办理。",
    "val.eyebrow":"核心功能 · 比同行更强","val.title":"在线即时估价","val.sub":"同行只让你留资料等回电，我们直接给你算出报价区间。",
    "val.card.t":"告诉我们你的车","val.card.h":"填写以下信息，右侧实时显示估价。",
    "val.make":"品牌","val.make.ph":"请选择品牌","val.model":"车型","val.model.ph":"请先选择品牌","val.year":"出厂年份","val.km":"行驶里程 (km)","val.km.ph":"例如 78000",
    "val.cond":"车况","cond.excellent":"极佳","cond.good":"良好","cond.fair":"一般","cond.poor":"较差",
    "val.fuel":"燃料类型","fuel.petrol":"汽油","fuel.diesel":"柴油","fuel.hybrid":"混动","fuel.ev":"纯电",
    "val.ph.title":"你的即时报价","val.ph.sub":"在左侧填写车辆信息，这里会实时显示预估收购价。",
    "val.result.h":"预估收购价区间","val.result.range.l":"最低","val.result.range.h":"最高",
    "val.result.cta":"预约上门确认报价",
    "val.bd.base":"车型基准价","val.bd.year":"年份折旧","val.bd.km":"里程调整","val.bd.cond":"车况调整",
    "val.disclaim":"※ 此为基于市场数据的在线预估，最终报价以上门评估为准。",
    "why.title":"为什么选择我们","why.sub":"我们以专业、透明和高效赢得了上万车主的信任。",
    "why1.t":"上门便捷","why1.p":"我们在约定时间到你家或公司收车，全程无需你出门。",
    "why2.t":"全程透明","why2.p":"从在线报价到交钥匙，每一步你都清清楚楚，绝无隐藏条款。",
    "why3.t":"即时付款","why3.p":"成交立即银行转账，并免费办理所有过户手续。",
    "why4.t":"五星口碑","why4.p":"Trustpilot 4.9 分，上万真实好评，做你信赖的收车伙伴。",
    "cmp.title":"我们与传统方式相比","cmp.sub":"看看差别在哪里。",
    "cmp.us":"我们","cmp.them":"其他渠道",
    "cmp.f1":"上门收车","cmp.f2":"当场付款","cmp.f3":"免费办理过户","cmp.f4":"公道价格","cmp.f5":"无陌生人上门看车","cmp.f6":"在线即时报价",
    "rev.title":"客户怎么说","rev.sub":"别只听我们说，看看真实车主的评价。",
    "rev1.t":"“整个过程快得惊人。早上在线估价，下午就有人上门，钱当场到账。比经销商给的价还高！”","rev1.n":"Sarah M.","rev1.c":"奥克兰 · 丰田 RAV4",
    "rev2.t":"“在线报价和最终成交价几乎一样，没有任何套路。中文服务也很贴心，强烈推荐。”","rev2.n":"陈先生","rev2.c":"汉密尔顿 · 马自达 CX-5",
    "rev3.t":"“不用自己登广告、不用陌生人来家里看车。预约、上门、付款，太省心了。”","rev3.n":"James T.","rev3.c":"惠灵顿 · 福特 Ranger",
    "faq.title":"常见问题","faq.sub":"关于卖车你想知道的，都在这里。",
    "faq1.q":"在线估价准确吗？","faq1.a":"我们的即时估价基于新西兰市场的真实成交数据，结合车型、年份、里程和车况计算，能给出可靠的报价区间。最终成交价以上门评估实车为准，但通常与在线报价非常接近。",
    "faq2.q":"付款多快到账？","faq2.a":"成交后我们立即通过银行转账付款，通常几分钟内到账，绝不拖延。",
    "faq3.q":"过户手续谁来办？","faq3.a":"全部由我们免费办理。你只需提供车辆和身份证明，剩下的交给我们。",
    "faq4.q":"你们覆盖哪些地区？","faq4.a":"我们提供全新西兰主要城市及周边的上门收车服务，包括奥克兰、惠灵顿、基督城、汉密尔顿等。",
    "faq5.q":"还有贷款没还清的车能卖吗？","faq5.a":"可以。我们可协助处理尚未结清的贷款，从收购款中代为结清余额，差额付给你。",
    "crit.title":"我们的收购标准","crit.sub":"为保证给出公道高效的报价，我们对收购车辆有以下要求。",
    "crit.ok.t":"✓ 我们乐于收购","crit.ok1":"2000 年以后出厂的主流品牌车型","crit.ok2":"持有有效 WOF、车况良好的车辆","crit.ok3":"日本制造的低里程车辆","crit.ok4":"热门 SUV、皮卡及家用轿车",
    "crit.no.t":"✕ 我们暂不收购","crit.no1":"曾被报废、重新注册或事故进口的车辆","crit.no2":"存在机械/结构问题或无有效 WOF 的车辆","crit.no3":"2000 年以前出厂的车辆","crit.no4":"从新加坡或英国进口的车辆","crit.no5":"里程超过 20 万公里（日产车除外）",
    "crit.note":"欧系、美系及中国品牌车辆有额外车龄/里程限制，电动车里程超过 10 万公里暂不收购。具体可联系我们确认。",
    "ctab.title":"准备好卖车了吗？","ctab.p":"30 秒在线获得报价，今天就能把车变现。","ctab.btn":"立即免费估价",
    "ct.title":"联系我们","ct.sub":"有任何疑问？我们随时为你解答（提供中文服务）。",
    "ct.phone":"电话","ct.email":"邮箱","ct.addr":"地址","ct.addr.v":"Building B, 76 Kimptons Road, Brookby, Auckland 2576","ct.hours":"营业时间","ct.hours.v":"周一至周日 8:00 – 18:00",
    "ct.form.name":"姓名","ct.form.name.ph":"你的姓名","ct.form.phone":"电话","ct.form.phone.ph":"你的联系电话","ct.form.msg":"留言","ct.form.msg.ph":"想咨询的内容…","ct.form.btn":"发送信息",
    "foot.desc":"新西兰值得信赖的上门收车服务。在线即时估价，上门看车，当场付款。",
    "foot.nav":"快速导航","foot.legal":"法律条款","foot.contact":"联系方式",
    "foot.terms":"条款与条件","foot.privacy":"隐私政策","foot.cookie":"Cookie 政策","foot.payment":"付款条款",
    "foot.copy":"© 2026 KiwiCash 收车。保留所有权利。",
    "toast.val":"已生成你的即时报价 👉 右侧查看","toast.form":"信息已提交，我们会尽快联系你！","toast.book":"预约请求已收到，我们将致电确认时间。",
    "toast.needmake":"请先选择品牌和车型"
  },
  en: {
    "topbar":"🚗 Nationwide mobile car buying · Paid on the spot via bank transfer · Avg. 24h to sell",
    "nav.how":"How it works","nav.value":"Instant Valuation","nav.why":"Why Us","nav.reviews":"Reviews","nav.faq":"FAQs","nav.criteria":"Buying Criteria","nav.contact":"Contact",
    "nav.cta":"Free Valuation",
    "hero.eyebrow":"New Zealand's leading mobile car-buying service",
    "hero.h1a":"Need to sell?","hero.h1b":"We come to you","hero.h1c":"& pay on the spot",
    "hero.lead":"Enter your plate or model and get a price range online in 30 seconds. We come to you, do all the paperwork, and pay instantly by bank transfer — no haggling, no strangers at your door.",
    "hero.cta1":"Get an instant offer","hero.cta2":"📞 0800 725 376",
    "hero.trust1":"Trustpilot 4.9","hero.trust2":"12,000+ cars bought","hero.trust3":"Nationwide service",
    "hero.bubble.s":"Instant offer","hero.bubble.b":"$28,400",
    "stat1n":"12,000+","stat1l":"Cars purchased","stat2n":"4.9★","stat2l":"Trustpilot rating","stat3n":"24 hrs","stat3l":"Avg. time to sell","stat4n":"100%","stat4l":"Free mobile valuation",
    "steps.title":"Sell in 3 simple steps","steps.sub":"From online valuation to money in your account — usually done within a day.",
    "step1.t":"Get an instant offer","step1.p":"Enter your model, year, mileage and condition to get a real price range right away — no gimmicks, no waiting for a callback.",
    "step2.t":"We come to you","step2.p":"Pick a time and place that suits you. Our appraiser inspects the car and confirms the final offer.",
    "step3.t":"Paid on the spot","step3.p":"Once you accept, we transfer the money immediately and handle all the transfer paperwork for free.",
    "val.eyebrow":"Core feature · Better than the rest","val.title":"Online Instant Valuation","val.sub":"Others just take your details and call back. We calculate your price range right now.",
    "val.card.t":"Tell us about your car","val.card.h":"Fill in the details and your estimate updates live on the right.",
    "val.make":"Make","val.make.ph":"Select a make","val.model":"Model","val.model.ph":"Select a make first","val.year":"Year","val.km":"Mileage (km)","val.km.ph":"e.g. 78000",
    "val.cond":"Condition","cond.excellent":"Excellent","cond.good":"Good","cond.fair":"Fair","cond.poor":"Poor",
    "val.fuel":"Fuel type","fuel.petrol":"Petrol","fuel.diesel":"Diesel","fuel.hybrid":"Hybrid","fuel.ev":"Electric",
    "val.ph.title":"Your instant offer","val.ph.sub":"Fill in your car details on the left and your estimated offer appears here in real time.",
    "val.result.h":"Estimated offer range","val.result.range.l":"Low","val.result.range.h":"High",
    "val.result.cta":"Book a visit to confirm",
    "val.bd.base":"Model base value","val.bd.year":"Age depreciation","val.bd.km":"Mileage adjustment","val.bd.cond":"Condition adjustment",
    "val.disclaim":"※ This is an online estimate based on market data. The final offer is confirmed at the in-person inspection.",
    "why.title":"Why choose us","why.sub":"We've earned the trust of thousands of owners through professionalism, transparency and speed.",
    "why1.t":"Convenient","why1.p":"We come to your home or office at an agreed time — you never have to leave.",
    "why2.t":"Transparent","why2.p":"From online quote to handing over the keys, you always know exactly where you stand.",
    "why3.t":"Instant payment","why3.p":"Paid immediately by bank transfer, with all transfer paperwork handled free.",
    "why4.t":"5-star reputation","why4.p":"Trustpilot 4.9 with thousands of real reviews — your trusted car buyer for life.",
    "cmp.title":"How we compare","cmp.sub":"See the difference for yourself.",
    "cmp.us":"Us","cmp.them":"Others",
    "cmp.f1":"We come to you","cmp.f2":"Paid on the spot","cmp.f3":"Free paperwork","cmp.f4":"Fair price","cmp.f5":"No strangers at your door","cmp.f6":"Online instant offer",
    "rev.title":"What customers say","rev.sub":"Don't just take our word for it — hear from real owners.",
    "rev1.t":"“The whole process was incredibly fast. Valued it online in the morning, someone came that afternoon, money in the bank on the spot. Higher than the dealer offered!”","rev1.n":"Sarah M.","rev1.c":"Auckland · Toyota RAV4",
    "rev2.t":"“The online quote and the final price were almost identical — no games. The Chinese-language service was a lovely touch. Highly recommend.”","rev2.n":"Mr. Chen","rev2.c":"Hamilton · Mazda CX-5",
    "rev3.t":"“No listing the car myself, no strangers coming to view it. Booked, they came, they paid. So easy.”","rev3.n":"James T.","rev3.c":"Wellington · Ford Ranger",
    "faq.title":"Frequently asked questions","faq.sub":"Everything you want to know about selling your car.",
    "faq1.q":"How accurate is the online valuation?","faq1.a":"Our instant valuation is based on real New Zealand market data, combining make, model, year, mileage and condition to produce a reliable price range. The final offer is confirmed at the in-person inspection, but is usually very close to the online estimate.",
    "faq2.q":"How fast do I get paid?","faq2.a":"As soon as you accept, we pay by bank transfer — usually within minutes. No delays.",
    "faq3.q":"Who handles the paperwork?","faq3.a":"We do, completely free. Just provide the vehicle and your ID, and we take care of the rest.",
    "faq4.q":"Which areas do you cover?","faq4.a":"We offer mobile car buying across New Zealand's main cities and surrounds, including Auckland, Wellington, Christchurch and Hamilton.",
    "faq5.q":"Can I sell a car with finance owing?","faq5.a":"Yes. We can help settle any outstanding finance, paying off the balance from the purchase price and paying you the difference.",
    "crit.title":"Our buying criteria","crit.sub":"To give fair, fast offers we buy vehicles that meet the following.",
    "crit.ok.t":"✓ We're happy to buy","crit.ok1":"Mainstream makes & models built after 2000","crit.ok2":"Vehicles with a valid WOF and good condition","crit.ok3":"Low-mileage Japanese-built cars","crit.ok4":"Popular SUVs, utes and family cars",
    "crit.no.t":"✕ We currently can't buy","crit.no1":"Written-off, re-registered or accident-import vehicles","crit.no2":"Cars with mechanical/structural issues or no valid WOF","crit.no3":"Vehicles built before 2000","crit.no4":"Cars imported from Singapore or the UK","crit.no5":"Over 200,000 km (except Japanese-built cars)",
    "crit.note":"European, American and Chinese-brand vehicles have additional age/mileage limits, and EVs over 100,000 km can't be bought. Contact us to confirm.",
    "ctab.title":"Ready to sell?","ctab.p":"Get an offer online in 30 seconds and turn your car into cash today.","ctab.btn":"Get a free valuation",
    "ct.title":"Contact us","ct.sub":"Got a question? We're here to help (Chinese-language service available).",
    "ct.phone":"Phone","ct.email":"Email","ct.addr":"Address","ct.addr.v":"Building B, 76 Kimptons Road, Brookby, Auckland 2576","ct.hours":"Hours","ct.hours.v":"Mon–Sun 8:00am – 6:00pm",
    "ct.form.name":"Name","ct.form.name.ph":"Your name","ct.form.phone":"Phone","ct.form.phone.ph":"Your contact number","ct.form.msg":"Message","ct.form.msg.ph":"What would you like to ask…","ct.form.btn":"Send message",
    "foot.desc":"New Zealand's trusted mobile car-buying service. Instant online valuation, we come to you, paid on the spot.",
    "foot.nav":"Quick links","foot.legal":"Legal","foot.contact":"Contact",
    "foot.terms":"Terms & Conditions","foot.privacy":"Privacy Policy","foot.cookie":"Cookie Policy","foot.payment":"Payment Terms",
    "foot.copy":"© 2026 KiwiCash CarBuy. All rights reserved.",
    "toast.val":"Your instant offer is ready 👉 see the right panel","toast.form":"Thanks! We'll be in touch shortly.","toast.book":"Booking request received — we'll call to confirm a time.",
    "toast.needmake":"Please select a make and model first"
  }
};

/* ---------- 2. 车型基准价数据（NZD，近新二手参考价） ---------- */
const CAR_DATA = {
  "Toyota":{Corolla:28000,RAV4:38000,Hilux:45000,Camry:36000,Aqua:22000,Yaris:24000,Highlander:50000,"Land Cruiser Prado":75000,"C-HR":32000},
  "Mazda":{Mazda3:27000,"CX-5":38000,Mazda2:21000,"CX-3":28000,Mazda6:33000,"BT-50":44000,"CX-30":33000,"CX-8":46000},
  "Honda":{Civic:30000,"CR-V":38000,Jazz:22000,"HR-V":30000,Accord:34000,Fit:21000},
  "Nissan":{"X-Trail":35000,Qashqai:30000,Navara:42000,Leaf:24000,Note:19000,Juke:26000},
  "Subaru":{Outback:42000,Forester:38000,XV:32000,Impreza:28000,Legacy:30000},
  "Mitsubishi":{Outlander:36000,ASX:28000,Triton:40000,"Eclipse Cross":32000,Pajero:45000},
  "Suzuki":{Swift:22000,Vitara:28000,Jimny:30000,Ignis:21000,"S-Cross":27000},
  "Ford":{Ranger:50000,Everest:55000,Mustang:60000,Escape:33000,Focus:26000},
  "Holden":{Colorado:38000,Commodore:32000,Captiva:22000,Trailblazer:36000},
  "Hyundai":{Tucson:36000,"Santa Fe":45000,i30:27000,Kona:30000,Elantra:28000,Ioniq:33000},
  "Kia":{Sportage:36000,Sorento:48000,Cerato:27000,Seltos:30000,Stinger:45000,Niro:34000},
  "Volkswagen":{Golf:30000,Tiguan:40000,Polo:25000,Amarok:50000,Passat:36000},
  "BMW":{"3 Series":45000,"5 Series":60000,X3:55000,X5:80000,"1 Series":35000},
  "Mercedes-Benz":{"C-Class":50000,"E-Class":65000,GLC:60000,"A-Class":40000,GLE:85000},
  "Audi":{A3:38000,A4:48000,Q5:58000,Q3:45000,A6:62000},
  "Lexus":{NX:55000,RX:70000,IS:45000,UX:48000,ES:58000},
  "Tesla":{"Model 3":55000,"Model Y":65000,"Model S":95000},
  "Volvo":{XC60:60000,XC40:50000,XC90:80000},
  "Other / 其他":{"Other / 其他":25000}
};

/* ---------- 3. 状态 ---------- */
let LANG = "zh";
const state = { make:"", model:"", year:"", km:"", cond:"good", fuel:"petrol" };
const CURRENT_YEAR = 2026;

/* ---------- 4. i18n 应用 ---------- */
function t(key){ return (I18N[LANG] && I18N[LANG][key]) || (I18N.zh[key]||key); }
function applyLang(){
  document.documentElement.lang = LANG === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    el.textContent = t(el.getAttribute("data-i18n"));
  });
  document.querySelectorAll("[data-i18n-ph]").forEach(el=>{
    el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph")));
  });
  document.querySelectorAll(".lang-toggle button").forEach(b=>{
    b.classList.toggle("active", b.dataset.lang===LANG);
  });
  // refresh dynamic placeholder text on model select & live result
  refreshModelPlaceholder();
  if(state.make && state.model) computeValuation();
}
function setLang(l){ LANG=l; try{localStorage.setItem("kc_lang",l)}catch(e){} applyLang(); }

/* ---------- 5. 估价引擎 ---------- */
function fmt(n){ return "$"+Math.round(n).toLocaleString("en-NZ"); }

function calcRetained(age){
  // 以"3 年车龄的典型在售价"为基准价，按每年约 11% 折旧上下浮动
  const rel = Math.pow(0.89, age-3);
  return Math.min(1.35, Math.max(0.12, rel));
}
function calcMileageFactor(age, km){
  const expected = Math.max(8000, age*14000);
  const ratio = (km - expected)/Math.max(expected,20000);
  return Math.min(1.18, Math.max(0.70, 1 - ratio*0.18));
}
const COND_FACTOR = {excellent:1.06, good:1.0, fair:0.86, poor:0.70};
const FUEL_FACTOR = {petrol:1.0, diesel:1.02, hybrid:1.04, ev:0.96};

function computeValuation(){
  const ph = document.getElementById("val-placeholder");
  const live = document.getElementById("val-live");
  if(!state.make || !state.model || !CAR_DATA[state.make]){
    ph.style.display="flex"; live.style.display="none"; return;
  }
  const base = CAR_DATA[state.make][state.model] || 25000;
  const year = parseInt(state.year)|| (CURRENT_YEAR-5);
  const age = Math.max(0, CURRENT_YEAR - year);
  const km = parseInt(state.km) || age*14000;

  const retained = calcRetained(age);
  const mileageF = calcMileageFactor(age, km);
  const condF = COND_FACTOR[state.cond];
  const fuelF = FUEL_FACTOR[state.fuel]||1;

  let est = base * retained * mileageF * condF * fuelF;
  est = Math.max(800, est);
  const low = Math.round(est*0.93/100)*100;
  const high = Math.round(est*1.07/100)*100;
  const mid = Math.round(est/100)*100;

  ph.style.display="none"; live.style.display="block";
  document.getElementById("res-price").innerHTML = fmt(mid)+' <small>NZD</small>';
  document.getElementById("res-car").textContent =
    `${state.make} ${state.model} · ${year} · ${km.toLocaleString("en-NZ")} km`;
  document.getElementById("res-low").textContent = fmt(low);
  document.getElementById("res-high").textContent = fmt(high);

  // breakdown
  const bd = document.getElementById("res-breakdown");
  bd.innerHTML =
    `<div><span>${t("val.bd.base")}</span><b>${fmt(base)}</b></div>`+
    `<div><span>${t("val.bd.year")} (${age}y)</span><b>×${retained.toFixed(2)}</b></div>`+
    `<div><span>${t("val.bd.km")}</span><b>×${mileageF.toFixed(2)}</b></div>`+
    `<div><span>${t("val.bd.cond")}</span><b>×${condF.toFixed(2)}</b></div>`;
}

/* ---------- 6. 表单交互 ---------- */
function refreshModelPlaceholder(){
  const modelSel = document.getElementById("f-model");
  if(modelSel && modelSel.options.length){
    const first = modelSel.querySelector('option[value=""]');
    if(first) first.textContent = state.make ? t("val.model.ph") : t("val.model.ph");
  }
  const makeFirst = document.querySelector('#f-make option[value=""]');
  if(makeFirst) makeFirst.textContent = t("val.make.ph");
}

function populateMakes(){
  const sel = document.getElementById("f-make");
  sel.innerHTML = `<option value="">${t("val.make.ph")}</option>`;
  Object.keys(CAR_DATA).forEach(m=>{
    const o=document.createElement("option"); o.value=m; o.textContent=m; sel.appendChild(o);
  });
}
function populateModels(make){
  const sel = document.getElementById("f-model");
  sel.innerHTML = `<option value="">${t("val.model.ph")}</option>`;
  if(make && CAR_DATA[make]){
    Object.keys(CAR_DATA[make]).forEach(m=>{
      const o=document.createElement("option"); o.value=m; o.textContent=m; sel.appendChild(o);
    });
  }
}
function populateYears(){
  const sel = document.getElementById("f-year");
  sel.innerHTML = `<option value="">${LANG==="zh"?"请选择年份":"Select year"}</option>`;
  for(let y=CURRENT_YEAR; y>=2000; y--){
    const o=document.createElement("option"); o.value=y; o.textContent=y; sel.appendChild(o);
  }
}

/* ---------- 7. Toast ---------- */
let toastTimer;
function toast(key){
  const el=document.getElementById("toast");
  el.textContent=t(key); el.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>el.classList.remove("show"),3200);
}

/* ---------- 8. 初始化 ---------- */
document.addEventListener("DOMContentLoaded",()=>{
  try{ const s=localStorage.getItem("kc_lang"); if(s) LANG=s; }catch(e){}

  populateMakes(); populateYears(); populateModels("");
  applyLang();

  // 语言切换
  document.querySelectorAll(".lang-toggle button").forEach(b=>{
    b.addEventListener("click",()=>setLang(b.dataset.lang));
  });

  // 表单
  const fMake=document.getElementById("f-make");
  const fModel=document.getElementById("f-model");
  const fYear=document.getElementById("f-year");
  const fKm=document.getElementById("f-km");
  fMake.addEventListener("change",e=>{state.make=e.target.value; populateModels(state.make); state.model=""; computeValuation();});
  fModel.addEventListener("change",e=>{state.model=e.target.value; computeValuation();});
  fYear.addEventListener("change",e=>{state.year=e.target.value; computeValuation();});
  fKm.addEventListener("input",e=>{state.km=e.target.value; computeValuation();});

  // 车况 / 燃料 chips
  document.querySelectorAll("[data-cond]").forEach(c=>{
    c.addEventListener("click",()=>{
      document.querySelectorAll("[data-cond]").forEach(x=>x.classList.remove("active"));
      c.classList.add("active"); state.cond=c.dataset.cond; computeValuation();
    });
  });
  document.querySelectorAll("[data-fuel]").forEach(c=>{
    c.addEventListener("click",()=>{
      document.querySelectorAll("[data-fuel]").forEach(x=>x.classList.remove("active"));
      c.classList.add("active"); state.fuel=c.dataset.fuel; computeValuation();
    });
  });

  // 预约/确认按钮
  const bookBtn=document.getElementById("res-book");
  if(bookBtn) bookBtn.addEventListener("click",()=>{
    if(!state.make||!state.model){toast("toast.needmake");return;}
    toast("toast.book");
  });

  // 联系表单
  const cf=document.getElementById("contact-form");
  if(cf) cf.addEventListener("submit",e=>{e.preventDefault();cf.reset();toast("toast.form");});

  // FAQ 折叠
  document.querySelectorAll(".faq-q").forEach(q=>{
    q.addEventListener("click",()=>q.parentElement.classList.toggle("open"));
  });

  // 移动端菜单
  const burger=document.getElementById("burger");
  const links=document.getElementById("nav-links");
  burger.addEventListener("click",()=>links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

  // 滚动揭示动画
  const io=new IntersectionObserver(entries=>{
    entries.forEach(en=>{ if(en.isIntersecting){en.target.classList.add("in");io.unobserve(en.target);} });
  },{threshold:.12});
  document.querySelectorAll(".reveal").forEach(el=>io.observe(el));
});
