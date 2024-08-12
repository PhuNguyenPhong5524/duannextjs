import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';


export default function Store() {
    return (
        <div className="">
            <div className='mx-5'>
                <p className='w-full'>Trang chủ aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa   aaaaaaaaaaaaaaaaaaaa</p>
            </div>
            <div className=" fixed bg-white h-[65px] w-full bottom-0 flex items-center justify-center"   style={{ boxShadow: '0 -8px 29px rgba(139, 146, 153, 0.2)' }}>
                <Link href="/" className='absolute left-[20px] text-2xl flex items-center flex-col mt-[7px] '>
                    <i className="bi bi-list text-[25px] font-semibold"></i>
                    <div className="text-[12px] mt-[-12px] font-semibold">Menu</div>
                </Link>

                <Link href="/cart" className='absolute left-[75px] text-2xl flex items-center flex-col mt-[5px]'>
                     <i className="bi bi-bag-fill text-[23px]"></i>
                    <div className="text-[12px] mt-[-10px] font-semibold">Giỏ hàng</div>
                </Link>

                <div className='absolute flex items-center justify-center bg-[#47dae2] p-[32px] rounded-full overflow-hidden mt-[-50px]'>
                    <div className="mx-auto   absolute flex items-center justify-center rounded-[50%] bg-white h-[50px] w-[50px] cursor-pointer" style={{ boxShadow: '0 8px 24px rgba(139, 146, 153, 0.4)' }}>
                        <Link href="/"><i className="bi bi-house-door-fill text-[28px] mx-auto"></i></Link>
                    </div>
                </div>

                <Link href="/thongbao" className='absolute right-[70px] text-2xl flex items-center flex-col mt-[7px]'>
                    <i class="bi bi-bell-fill text-[25px]"></i>
                    <div className="text-[12px] mt-[-12px] font-semibold">Thông báo</div>
                </Link>

                <Link href="/user" className='absolute right-[20px] text-2xl flex items-center flex-col mt-[5px]'>
                    <i class="bi bi-person-fill text-[28px]"></i>
                    <div className="text-[12px] mt-[-10px] font-semibold">User</div>
                </Link>
            </div>
        </div>
        
    );
}