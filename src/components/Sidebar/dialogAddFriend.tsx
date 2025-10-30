import { Separator } from "@radix-ui/react-separator"
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"
import { useEffect, useRef } from "react"
import { PhoneCountrySelect } from "../MenuBar/PhoneCountrySelect"
import { CircleUser } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Button } from "../ui/button"
function AddFriend() {
  const buttonRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    buttonRef.current?.focus()
  }, [])
  return (
    <DialogContent onOpenAutoFocus={(e) => {
      e.preventDefault() // chặn Radix tự focus vào phần tử đầu tiên
      buttonRef.current?.focus()
    }} className="max-w-[400px]! min-h-[200px] py-0 pt-6 max-h-[550px] h-full px-0 rounded-[5px]">
      <DialogHeader>
        <DialogTitle className="px-4">Thêm Bạn</DialogTitle>
        <Separator className="w-full h-px my-2 bg-[#dadada]" />
        <div className="relative flex-1">
          <div className="flex gap-3 px-4">
            <PhoneCountrySelect />
            <input ref={buttonRef}
              className="flex-1 border-0 focus:outline-none border-b! border-[#dadada] focus:border-[#006aff] placeholder:text-sm placeholder:text-[#7B889F]" placeholder="Số điện thoại" />
          </div>
          <div className="h-2 mt-2">
            <div className="flex-1 mt-4 overflow-y-scroll max-h-[334px] scrollbar-medium">
              <span className="flex items-center gap-1 text-[13px] px-4 text-[#6d6d6d]"><CircleUser size={18} strokeWidth={1.2} /> Có thể bạn quen</span>
              {
                [...Array(10)].map((_, index) => {
                  return <div key={index} className="flex items-center py-3 justify-center hover:bg-[#F1F2F4] cursor-pointer">
                    <div className="mr-2">
                      <Avatar className="w-10 h-10 cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>Img User</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="">
                      <p>Nguyễn Thanh Tùng</p>
                      <p className="w-60 text-[12px] text-[#6c7b91]">
                        Từ gợi ý kết bạn
                      </p>
                    </div>
                    <div>
                      <Button variant="outline">Kết bạn</Button>

                    </div>
                  </div>
                })
              }
            </div>
          </div>
          <div className="absolute bottom-0 w-full h-18">
            <Separator className="w-full h-px bg-[#dadada]" />
            <div className="flex items-center justify-end h-full gap-2 px-4">
              <Button className="bg-[#e5e7eb] hover:bg-[#c6cad2] text-black" size={"xl"}>Hủy</Button>
              <Button className="bg-[#0068ff] hover:bg-[#0045ad]" size={"xll"}>Tìm Kiếm</Button>
            </div>
          </div>
        </div>
      </DialogHeader>
    </DialogContent >
  )
}

export default AddFriend