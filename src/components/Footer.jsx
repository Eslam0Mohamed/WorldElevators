export default function Footer(){
    return <>
    <footer className="bg-violet-900 text-gray-200 " dir="rtl" role="contentinfo">
  <div className="container py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

    {/* About */}
    <div>
      <h3 className="text-2xl font-bold mb-4 text-white">عالم المصاعد</h3>
      <p className="text-sm leading-relaxed">
        شركة متخصصة في توريد وتركيب وصيانة المصاعد الكهربائية
        بخبرة وجودة عالية لخدمة عملائنا في سوهاج.
      </p>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">روابط سريعة</h4>
      <ul className="space-y-2 text-sm" role="list">
        <li role="listitem"><a href="#home" className="hover:text-violet-300">الرئيسية</a></li>
        <li role="listitem"><a href="#services" className="hover:text-violet-300">خدماتنا</a></li>
        <li role="listitem"><a href="#gallery" className="hover:text-violet-300">أعمالنا</a></li>
        <li role="listitem"><a href="#contact" className="hover:text-violet-300">تواصل معنا</a></li>
      </ul>
    </div>
    <div>
      <h4 className="text-lg font-semibold mb-4 text-white">تواصل معنا</h4>
      <ul className="space-y-3 text-sm" role="list">
        <li role="listitem"> 01091269235</li>
        <li role="listitem"> سوهاج – شارع الجمهورية - بجوار هايبر زادك </li>
        <li role="listitem">سوهاج الجديده - مول تريندي - خلف بنك مصر</li>
        <li role="listitem">من السبت الي الخميس</li>
        <li role="listitem"> من 9 صباحًا إلى 7:30 مساء</li>
        <li role="listitem">
          <a
            href="https://wa.me/201091269235"
            className=" "
          >
            واتساب
          </a>
        </li>
      </ul>
    </div>

  </div>

  <div className="bg-violet-950 text-center py-4 text-sm text-gray-400">
    © 2025 عالم المصاعد – جميع الحقوق محفوظة
  </div>
</footer>

    </>
}