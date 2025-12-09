import serviceOne from "../assets/services/Elevator-Maintainance.png";
import serviceTwo from "../assets/services/Elevator-Equipment-Delivery.png";
import serviceThree from "../assets/services/Elevator-Consultant.png";

export default function Services() {
    return <>
        <section id="services" className="services bg-gray-100 px-3 py-12">
            <div className="container">
                <div className="services-text flex flex-col justify-center items-center" dir="rtl">
                    <h2 className="text-3xl text-center md:text-5xl font-bold text-violet-900 my-8" >خدمات المصاعد التي نقدمها </h2>
                    <p className="text-gray-600 max-w-4xl text-center">
                        من التخطيط إلى التنفيذ، نعمل جنباً إلى جنب معكم لإنشاء حلول مصاعد كهربائية تتناسب مع احتياجاتكم. استمتعوا بخدمات مصاعد مخصصة تعكس أسلوبكم وتضمن راحة الاستخدام.
                        استشارة تخطيط المصاعد
                    </p>
                </div>
                <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10" dir="rtl">
                    <div className="card rounded-2xl overflow-hidden" >
                        <img src={serviceTwo} alt="توريد المصاعد الكهربائيه" />
                        <div className="card-text px-3 py-4 bg-white">
                            <h3 className="text-2xl text-black font-semibold my-4">توريد المصاعد الكهربائيه </h3>
                            <p className="text-gray-600 ">نوفّر حلول توريد متكاملة للمصاعد الكهربائية بأنواعها، مع التزام كامل بأعلى معايير الجودة والسلامة. نضمن لكم اختيار الأنظمة المناسبة لطبيعة المبنى واحتياجات الاستخدام لضمان أداء مستقر وطويل الأمد.</p>
                        </div>
                    </div>
                                        <div className="card rounded-2xl overflow-hidden ">
                        <img src={serviceOne} alt="تركيب المصاعد الكهربائيه" className=""/>
                        <div className="card-text px-3 py-4 bg-white">
                            <h3 className="text-2xl text-black font-semibold my-4">تركيب المصاعد الكهربائيه </h3>
                            <p className="text-gray-600 ">يقوم فريقنا المتخصص بتنفيذ أعمال تركيب المصاعد بدقة وكفاءة عالية، بداية من تجهيز الموقع وحتى التسليم النهائي. نلتزم بتطبيق أفضل الممارسات الهندسية لضمان تشغيل آمن وسلس للمصعد في جميع الظروف.</p>
                        </div>
                    </div>
                                        <div className="card rounded-2xl overflow-hidden ">
                        <img src={serviceThree} alt="تقديم الاستشارات الفنيه" />
                        <div className="card-text px-3 py-4 bg-white">
                            <h3 className="text-2xl text-black font-semibold my-4"> تقديم الاستشارات الفنيه  </h3>
                            <p className="text-gray-600 ">نقدّم خدمات استشارية فنية تساعدكم على اتخاذ القرارات الصحيحة فيما يتعلق بتصميم، اختيار، وتطوير أنظمة المصاعد. نعتمد على خبراتنا الفنية لتقديم حلول عملية تناسب ميزانيتكم واحتياجات مشروعكم.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}