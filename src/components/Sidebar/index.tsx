import clsx from "clsx"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Ellipsis, UserPlus, Users } from "lucide-react"
import { useState } from "react"
import { Input } from "~/components/ui/input"
import {
  Dialog,
  DialogTrigger,
} from "~/components/ui/dialog"
import AddFriend from "./dialogAddFriend"

function SideBar() {
  const [isActive, setIsActive] = useState<string>('conversationAll')

  const handleConversationAll = () => {
    setIsActive('conversationAll')
  }
  const handleConversationNotSeen = () => {
    setIsActive('conversationNotSeen')
  }
  return (
    <div className="flex flex-col h-screen">
      <div className="h-26 border-[1.5px] flex flex-col justify-between">
        <div className="flex items-center px-4 mt-4">
          <Input className="w-[220px] bg-[#EBECF0]" type="text" placeholder="Tìm kiếm" />
          <div className="flex gap-4 ml-4">
            <Dialog>
              <DialogTrigger>
                <div className="w-8 h-8 hover:bg-[#E5E7EB] rounded-[3px] flex-item-justify-center">
                  <Users className="cursor-pointer" size={20} strokeWidth={1.5} />
                </div>
              </DialogTrigger>
              <AddFriend />
            </Dialog>
            <div className="w-8 h-8 hover:bg-[#E5E7EB] rounded-[3px] flex-item-justify-center">
              <UserPlus size={20} strokeWidth={1.5} />
            </div>
          </div>
        </div>
        <div className="flex justify-between px-4">
          <div className="">
            <button className={clsx("btn-custom-sidebar mr-4", isActive === 'conversationAll' && "border-[#0063F2] text-[#0063F2] border-b-2")} onClick={handleConversationAll}>Tất cả</button>
            <button className={clsx("btn-custom-sidebar", isActive === 'conversationNotSeen' && "border-[#0063F2] text-[#0063F2] border-b-2")} onClick={handleConversationNotSeen}>Chưa đọc</button>
          </div>
          <div className="flex items-center">
            <button className="mr-2 text-[14px]">Phân loại</button>
            <Ellipsis size={20} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/*Conversation Chat*/}
      {
        isActive === 'conversationAll' ?
          <div className="flex-1 mb-5 overflow-y-scroll scrollbar-medium">
            {
              [...Array(100)].map((_, index) => {
                return <div key={index} className="flex items-center gap-3 px-4 py-3 hover:bg-[#F1F2F4] cursor-pointer group">
                  <div>
                    <Avatar className="w-10 h-10 cursor-pointer">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>Img User</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="">
                    <div className="flex items-center justify-between">
                      <p>PM27.15</p>
                      <div className="opacity-0 w-6 h-6 flex flex-item-justify-center rounded-[3px] hover:bg-[#E5E7EB] group-hover:opacity-100">
                        <Ellipsis size={18} strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="truncate w-60 text-sm text-[#6c7b91]">
                      Khánh: Sẵn áo trong kho ai cần liên hệ với em nha
                    </p>
                  </div>
                </div>
              })
            }
          </div> :
          <div className="flex-1 mb-5 overflow-y-scroll scrollbar-medium">
            {
              [...Array(20)].map((_, index) => {
                return <div key={index} className="flex items-center gap-3 px-4 py-3 hover:bg-[#F1F2F4] cursor-pointer group">
                  <div>
                    <Avatar className="w-10 h-10 cursor-pointer">
                      <AvatarImage className="object-cover" src="https://cdn-media.sforum.vn/storage/app/media/thanhhuyen/%E1%BA%A3nh%20s%C6%A1n%20t%C3%B9ng%20mtp/1/anh-son-tung-mtp-11.jpg" />
                      <AvatarFallback>Img User</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="">
                    <div className="flex items-center justify-between">
                      <p>PM27.15</p>
                      <div className="opacity-0 w-6 h-6 flex flex-item-justify-center rounded-[3px] hover:bg-[#E5E7EB] group-hover:opacity-100">
                        <Ellipsis size={18} strokeWidth={1.5} />
                      </div>
                    </div>
                    <p className="truncate w-60 text-sm text-[#6c7b91]">
                      Khánh: Sẵn áo trong kho ai cần liên hệ với em nha
                    </p>
                  </div>
                </div>
              })
            }
          </div>
      }
    </div>
  )
}

export default SideBar