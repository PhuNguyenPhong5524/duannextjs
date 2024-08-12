import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';


export default function Store() {
    return (
        <div className="">
            <div className='mx-5'>
                <p className='w-full'>Trang chủ aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa   aaaaaaaaaaaaaaaaaaaa</p>
            </div>
            <div className=" fixed bg-white h-[55px] w-full bottom-0 flex items-center justify-center"   style={{ boxShadow: '0 -8px 29px rgba(139, 146, 153, 0.2)' }}>
                <div className='absolute left-[20px] text-2xl flex items-center flex-col mt-[7px] '>
                    <Link href="/"><i className="bi bi-list text-[20px] font-semibold"></i></Link>
                    <div className="text-[12px] mt-[-12px] font-semibold">Menu</div>
                </div>

                <div className='absolute left-[75px] text-2xl flex items-center flex-col mt-[5px]'>
                    <Link href="/cart"> <i className="bi bi-bag-fill text-[20px]"></i></Link>
                    <div className="text-[12px] mt-[-10px] font-semibold">Giỏ hàng</div>
                </div>

                <div className='absolute flex items-center justify-center bg-[#f7941e] p-[40px] h-[70px] w-[70px] rounded-full overflow-hidden mt-[-50px]'>
                    <div className="mx-auto   absolute flex items-center justify-center rounded-[50%] bg-white h-[60px] w-[60px] cursor-pointer" style={{ boxShadow: '0 8px 24px rgba(139, 146, 153, 0.4)' }}>
                        <Link href="/"><i className="bi bi-house-door-fill text-[28px] mx-auto"></i></Link>
                    </div>
                </div>

                <div className='absolute right-[70px] text-2xl flex items-center flex-col mt-[7px]'>
                    <Link href="/thongbao"><i class="bi bi-bell-fill text-[20px]"></i></Link>
                    <div className="text-[12px] mt-[-12px] font-semibold">Thông báo</div>
                </div>

                <div className='absolute right-[20px] text-2xl flex items-center flex-col mt-[5px]'>
                    <Link href="/user"><i class="bi bi-person-fill"></i></Link>
                    <div className="text-[12px] mt-[-10px] font-semibold">User</div>
                </div>
            </div>
        </div>
        
    );
}