const productSlides = [
  { kicker: 'Product Front View', title: "RiseUp Herbal Men's Vitality Oil", text: 'Premium 25ml Ayurvedic wellness oil in an easy spray bottle.', tone: 'gold' },
  { kicker: 'Ingredient Science Banner', title: '14 Ayurvedic Ingredients', text: 'Ashwagandha, Shuddh Shilajit, Safed Musli, Kaunch Beej, Kesar and more.', tone: 'green' },
  { kicker: 'Benefits Infographic', title: 'Daily Wellness Support', text: 'A traditional herbal blend created to support vitality, confidence and wellbeing.', tone: 'saffron' },
  { kicker: 'Trust Badge Banner', title: 'Quality Tested Formula', text: 'FSSAI registered brand, GMP certified manufacturing and ISO certified facility.', tone: 'deep' },
];
const usps = ['14 Powerful Ayurvedic Ingredients','Herbal Men\'s Wellness Formula','Easy Spray Application','Traditional Ayurvedic Blend'];
const ingredients = [['Ashwagandha','Traditionally supports vitality and overall wellness'],['Shuddh Shilajit','Premium Ayurvedic ingredient associated with energy and vitality'],['Kaunch Beej','Traditionally used in men\'s wellness formulations'],['Safed Musli','Popular Ayurvedic herb known for vitality support'],['Vidarikand','Traditionally valued for nourishment and strength'],['Malkangni Oil','Known in Ayurveda for wellness support'],['Kesar','Premium Ayurvedic ingredient'],['Akarkara','Traditionally used in Ayurvedic formulations'],['Jaiphal & Javitri','Traditional wellness-supporting ingredients'],['Long & Dalchini Oil','Traditional herbal oils used in Ayurvedic preparations']];
const benefits = ['Supports Men\'s Vitality','Supports Daily Wellness','Supports Active Lifestyle','Supports Confidence & Wellbeing','Traditional Ayurvedic Formula','Premium Herbal Oil Blend','Easy Spray Application','Daily Use Friendly'];
const trustBadges = ['14 Ayurvedic Ingredients','Premium Herbal Formula','Quality Tested Ingredients','GMP Certified Manufacturing','ISO Certified Facility','Easy Spray Bottle','Made In India','Men\'s Wellness Formula'];
const comparison = ['14 Ayurvedic Ingredients','Ashwagandha','Shuddh Shilajit','Safed Musli','Kaunch Beej','Vidarikand','Malkangni Oil','Kesar','Easy Spray Application','Premium Herbal Blend','Ayurvedic Wellness Formula'];
const faqs = [["What is RiseUp Herbal Men's Vitality Oil?","RiseUp is an Ayurvedic external-use oil formulated with 14 herbal ingredients traditionally used to support men's wellness and vitality."],['How should I use RiseUp?','Apply 3–5 drops and massage gently until absorbed. Use regularly as directed.'],['Is it for internal consumption?','No. RiseUp is strictly for external use only.'],['What makes RiseUp different?','RiseUp contains 14 Ayurvedic ingredients including Ashwagandha, Shuddh Shilajit, Safed Musli, Kaunch Beej and Kesar in a convenient spray format.'],['Can it be used daily?','Yes. It is designed for regular use as per directions.']];
const reviews = [['Rahul S., Mumbai','Premium packaging and easy spray application.'],['Vivek P., Pune','Good quality herbal oil with pleasant texture.'],['Rohit M., Indore','Feels premium and easy to use daily.'],['Ankit J., Jaipur','Well packed and made with quality ingredients.'],['Amit K., Delhi','One of the best Ayurvedic wellness oils I have tried.']];
const icon = '✦';
let active = 0, openFaq = 0;
const $ = (id) => document.getElementById(id);
function slideMarkup(s){return `<div class="mockup ${s.tone}"><div class="bottle"><span>SVGH</span><strong>RiseUp</strong><small>Herbal Men's Vitality Oil</small><em>25ml Spray</em></div><div class="slide-copy"><p>${s.kicker}</p><h2>${s.title}</h2><span>${s.text}</span></div></div>`}
function renderSlider(){ $('gallery-stage').innerHTML=slideMarkup(productSlides[active]); $('thumbs').innerHTML=productSlides.map((_,i)=>`<button class="${i===active?'active':''}" data-slide="${i}">${i+1}</button>`).join(''); document.querySelectorAll('[data-slide]').forEach(b=>b.onclick=()=>{active=+b.dataset.slide;renderSlider();});}
function render(){
$('usp-grid').innerHTML=usps.map(x=>`<div><span class="glyph">${icon}</span><span>${x}</span></div>`).join('');
$('strip').innerHTML=['FSSAI Registered Brand','GMP Certified Manufacturing Facility','ISO Certified Facility','Quality Tested Ingredients'].map(x=>`<div><span class="glyph">✓</span><span>${x}</span></div>`).join('');
$('benefits-grid').innerHTML=benefits.map(b=>`<article><span class="glyph">✓</span><h3>${b}</h3><p>Designed for men who prefer a traditional Ayurvedic wellness routine with a convenient modern spray format.</p></article>`).join('');
$('chips').innerHTML=['Ashwagandha','Shuddh Shilajit','Safed Musli','Kaunch Beej','Vidarikand','Malkangni Oil','Kesar','Akarkara'].map(x=>`<span>🌿 ${x}</span>`).join('');
$('ingredient-table').innerHTML=ingredients.map(([n,p])=>`<div><b>${n}</b><span>${p}</span></div>`).join('');
$('compare').innerHTML='<div class="row head"><b>Feature</b><b>RiseUp™</b><b>Regular Oils</b></div>'+comparison.map((x,i)=>`<div class="row"><span>${x}</span><b>✓</b><em>${i>7?'Limited':'✗'}</em></div>`).join('');
$('badges').innerHTML=trustBadges.map(x=>`<span>✅ ${x}</span>`).join('');
$('faq-list').innerHTML=faqs.map(([q,a],i)=>`<article><button data-faq="${i}">${q}<span>${openFaq===i?'−':'+'}</span></button>${openFaq===i?`<p>${a}</p>`:''}</article>`).join('');
document.querySelectorAll('[data-faq]').forEach(b=>b.onclick=()=>{openFaq=openFaq===+b.dataset.faq?-1:+b.dataset.faq;render();});
$('reviews').innerHTML=reviews.map(([n,t])=>`<article><span>⭐⭐⭐⭐⭐</span><p>“${t}”</p><b>${n}</b></article>`).join('');
renderSlider();
}
document.addEventListener('DOMContentLoaded',()=>{render();$('prev').onclick=()=>{active=(active-1+productSlides.length)%productSlides.length;renderSlider();};$('next').onclick=()=>{active=(active+1)%productSlides.length;renderSlider();};});
