import FullWidthBox from '../../components/FullWidthBox';
import seachIcon from '../../assets/images/search.svg';
import geocodeIcon from '../../assets/images/geocode.svg';

const boxesData = [
    {
        title:"آدرس یابی",
        logo:geocodeIcon,
        detail:"سرویسی هست که امکان تبدیل مختصات جغرافیایی رو به آدرس متنی فراهم می‌کنه. با این روش می‌تونین با مشخص کردن یک نقطه بر روی نقشه، از مختصات جغرافیایی آن مطلع شده و همچنین آدرس متنی آن رو به صورت یک فایل JSON با جزییات کامل دریافت کنین. پاسخ دریافتی شامل: اطلاعاتی همچون کشور، استان، شهر، منطقه، محله، خیابان و … هست که می‌شه اون رو بر اساس آدرس‌های استاندارد پیش فرض مپ یا ساختار دلخواه خودتون ذخیره‌سازی کنین و یا نمایش بدین.",
        route:'/map'
    },
    {
        title:"جستجو",
        logo:seachIcon,
        detail:"جستجو یا به عبارتی Forward Geocoding که به صورت کلی Geocoding نامیده می‌شه، امکان تبدیل آدرس متنی و یا نام اماکن رو به مختصات جغرافیایی در اختیارتون قرار می‌ده. کافیه متن آدرس یا نام مکان مورد نظر را به عنوان ورودی به سرویس جستجوی مپ بدین تا بهترین و نزدیک‌ترین نتایج رو به عبارت مورد جستجو در قالب یک فایل JSON شامل 10 نتیجه برتر دریافت کنین.",
        route:'/search'
    }
]

function Home(){
    return (
        <div className="home">
            {boxesData.map(item=>
                {
                    return (
                        <FullWidthBox
                        title={item.title}
                        logo={item.logo}
                        detail={item.detail}
                        route={item.route}/>
                    )
                })
            }
        </div>
    )
}
export default Home;