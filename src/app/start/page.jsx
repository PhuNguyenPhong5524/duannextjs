import Link from "next/link";



export default function Start() {
    return (
        <div className="mx-5">
            <div className="w-20 h-20 mx-auto mt-8"><img  src="https://o2o.ipos.vn/static/images/icon_staff.svg"/></div>
            <div className=" mt-16 p-1" >
                <h2 className=" text-[20px] font-medium ">LẨU CÁ 69K - PHAN HUY ÍCH. Xin kính chào bạn</h2>
                <p className=" mt-5 text-[16px] font-light">Mời bạn nhập tên để nhà hàng phục vụ bạn nhanh chóng hơn, chính xác hơn.</p>
            </div>
            <div>
                <input type="text" placeholder="Tên của bạn" className="w-full bg-[#e9e9e9] text-[20px] text-center h-[45px] rounded-[10px] mt-5 outline-none placeholder:pl-3 placeholder:text-[#b4b4b4]" />
                <Link href="/store"><button className="bg-[#f7941e] text-[#fff] font-bold text-[18px] w-full h-[45px] rounded-[10px] mt-5 ">Bắt đầu</button></Link>
            </div>
        </div>
    );
}