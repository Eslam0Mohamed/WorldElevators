    import img1 from"../assets/gallery/img-1.jpeg";
    import img2 from"../assets/gallery/img-2.jpeg";
    import img3 from"../assets/gallery/img-3.jpeg";
    import img4 from"../assets/gallery/img-4.jpeg";
    import img5 from"../assets/gallery/img-5.jpeg";
    import img6 from"../assets/gallery/img-6.jpeg";
    import img7 from"../assets/gallery/img-7.jpeg";
    import img8 from"../assets/gallery/img-8.jpeg";
    import img9 from"../assets/gallery/img-9.jpeg";
    import img10 from"../assets/gallery/img-10.jpeg";
    import img11 from"../assets/gallery/img-11.jpeg";
    import img12 from"../assets/gallery/img-12.jpeg";
    import img13 from"../assets/gallery/img-13.jpeg";
    import img14 from"../assets/gallery/img-14.jpeg";
    import img15 from"../assets/gallery/img-15.jpeg";
    import img16 from"../assets/gallery/img-16.jpeg";
    import img17 from"../assets/gallery/img-17.jpeg";
    import img18 from"../assets/gallery/img-18.jpeg";
    import { Swiper, SwiperSlide } from 'swiper/react';
    import 'swiper/css';
    import "swiper/css/pagination";
    import "swiper/css/navigation";
    import { Pagination, Autoplay ,Navigation } from "swiper/modules";


export default function Gallery(){
      const images = [
img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18
  ];

  const gridImages = images.slice(0,9)
  const sliderImages = images.slice(9)
    return <>
    <section id="gallery" className="gallery bg-white px-3 py-12">
        <div className="container">
            <div className="gallery-text flex flex-col justify-center items-center" dir="rtl">
                <h2 className="text-3xl md:text-5xl font-bold text-violet-900 my-8">أعمالنا السابقه </h2>
                <p className="text-gray-600 max-w-4xl text-center">          مجموعة من مشاريع توريد وتركيب المصاعد الكهربائية التي نفخر بتنفيذها</p>
            </div>
<div className="grid-images mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

    {
        gridImages.map((image,index)=>{
            return <div className="rounded-xl overflow-hidden shadow-xl" key={index}>
<img src={image} className="w-full h-64 hover:scale-110 transition-all duration-300" alt="مشروع تركيب مصعد كهربائي" />
            </div>
        })
    }
</div>



<div className="slider-images py-12 my-8 ">
                <h2 className="text-3xl md:text-5xl text-center font-bold text-violet-900 my-12"> المزيد من أعمالنا </h2>

    <Swiper
    className="my-swiper"
      modules={[Pagination,Autoplay,Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{clickable:true}}
    //   autoplay={{delay:2500}}
          breakpoints={{
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
    >
{
    sliderImages.map((img,index)=>{
        return <>
        <SwiperSlide key={index}>
            <div className="rounded-2xl overflow-hidden h-64 ">
                <img src={img} className="h-full object-cover w-full hover:scale-110 transition-all duration-300" alt="مشروع تركيب مصعد كهربائي" />
            </div>
        </SwiperSlide>
        </>
    })
}
</Swiper>
</div>
<div className="video"></div>
        </div>
    </section>
    </> 
}