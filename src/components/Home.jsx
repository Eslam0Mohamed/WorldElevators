export default function Home(){
    return<>
    <section id="home" className="h-screen bg-no-repeat bg-cover bg-center px-3 py-4" style={{backgroundImage:`url(/home-background.png)`}}>

    <div className="flex flex-col items-center justify-center h-full gap-12 container">
        <h1 dir="rtl" className="text-6xl md:text-9xl text-white font-extrabold">عالم المصاعد </h1>
        <div className="btns flex gap-12"> 
            <button className="btn">Services</button>
            <button className="btn text-black bg-white hover:bg-gray-300 transition-colors duration-200">Get In Touch</button>
        </div>
    </div>
    
    </section>
    </>
}