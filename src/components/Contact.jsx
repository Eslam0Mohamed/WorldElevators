import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
export default function Contact() {
    return <>
        <section id="contact" className="contact px-3 py-12 bg-gray-200">
            <div className="container" dir="rtl">
                <h2 className="text-3xl md:text-5xl font-bold text-violet-900 my-8 text-center" >تواصل معنا </h2>
                <p className="text-gray-600 text-center">يسعدنا استقبال جميع إستفساراتكم بخصوص توريد وتركيب وصيانة المصاعد الكهربائية</p>
                <div className="my-5 py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="open-hours bg-gray-50 p-6 rounded-xl flex  flex-col hover:bg-gray-100 transition-colors duration-300">
                        <h3 className="text-xl font-semibold text-violet-900 mb-4 text-center">أيام العمل </h3>
                        <ul className="text-gray-500 space-y-2" role="list">
                            <li className="font-medium hover:text-violet-700 transition-all duration-300" role="listitem">الأيام : من السبت الي الخميس</li>
                            <li className="font-medium hover:text-violet-700 transition-all duration-300" role="listitem">المواعيد : من الساعة التاسعة صباحًا إلى السابعة والنصف مساءً</li>
                        </ul>

                    </div>
                    <div className="location bg-gray-50 p-6 rounded-xl flex  flex-col hover:bg-gray-100 transition-colors duration-300">
                        <h3 className="text-xl font-semibold text-violet-900 mb-4 text-center">الموقع</h3>
                        <ul className="text-gray-500 space-y-2">
                            <li className="font-medium hover:text-violet-700 transition-all duration-300">سوهاج - شارع الجمهوريه - بجوار هايبر زادك</li>
                            <li className="font-medium hover:text-violet-700 transition-all duration-300">سوهاج الجديده - مول تريندي - خلف بنك مصر </li>
                        </ul>
                    </div>
                    <div className="call-us bg-gray-50 p-6 rounded-xl flex flex-col hover:bg-gray-100 transition-colors duration-300">
                    <h3 className="text-xl font-semibold text-violet-900 mb-4 text-center" >تواصل معنا</h3>
                   <ul className="text-gray-500 space-y-2" role="list">
                            <li className="font-medium flex gap-2 hover:text-violet-700 transition-all duration-300" role="listitem">
                                <FontAwesomeIcon icon={faPhone} className="text-xl"/>
                                <a href="tel:01091269235" target="_blank">01091269235</a> 
                                 - 
                                <a href="tel:01020262501" target="_blank">01020262501</a>
                            </li>
                           <li className="font-medium flex gap-2 hover:text-violet-700 transition-all duration-300"  role="listitem">
                            <FontAwesomeIcon icon={faFacebook} className="text-xl"/>
                                   <a href="https://www.facebook.com/share/1FDGTzdsLx/" target="_blank">صفحتنا علي فيسبوك</a>
                            </li>
                                                       <li className="font-medium flex gap-2 hover:text-violet-700 transition-all duration-300 " role="listitem">
                            <FontAwesomeIcon icon={faInstagram} className="text-xl"/>
                                   <a href="https://www.instagram.com/world_elevators_sohag?igsh=MTNnMDV6eTJ5ZHBrNg==" target="_blank">صفحتنا علي انستجرام</a>
                            </li>
                            <li className="font-medium flex gap-2 hover:text-violet-700 transition-all duration-300"  role="listitem">
                            <FontAwesomeIcon icon={faTiktok} className="text-xl"/>
                                   <a href="http://tiktok.com/@world_elevators_sohag" target="_blank">صفحتنا علي تيك توك</a>
                            </li>
                                     <li className="font-medium flex gap-2 hover:text-violet-700 transition-all duration-300" role="listitem"> 
                            <FontAwesomeIcon icon={faWhatsapp} className="text-xl"/>
                                   <a href="https://wa.me/201091269235" target="_blank">واتساب</a>
                            </li>
                        </ul>
                    </div>
                </div>
            <div className="fixed bottom-10 right-10">
                <a href="https://wa.me/201091269235" target="_blank" aria-label="تواصل عبر واتساب">
                <FontAwesomeIcon icon={faWhatsapp} className="text-5xl text-green-400"/>
                </a>
            </div>
            </div>
        </section>
    </>
}