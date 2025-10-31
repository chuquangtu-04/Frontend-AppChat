import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "~/components/ui/avatar"
import { Separator } from "@radix-ui/react-separator"
import { PencilLine } from "lucide-react"
import { Button } from "~/components/ui/button"

type TypefGotoEit = {
  goToNext: () => void,
  handleOncliModify: (target: string) => void
}
const MODIFY_PROFILE = {
  MODIFY_INFORMATION_PROFILE: 'modify_information_profile',
  MODIFY_AVATAR_PROFILE: 'modify_avatat_profile'
}

function InformationProfile({ goToNext, handleOncliModify }: TypefGotoEit) {
  return (
    <>
      <div className="relative pb-8">
        <div>
          <img className="h-[180px] w-full object-cover object-center" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQP1cbc50hhIRCGch2Gaq3yESqStj9l87M70XmOFMwBHt3uIX7Hgj6KWpo8Us_jC6yknUkEBIdbUtBnUVW2mx_uKzesedFMCXs4VGMsARQ" />
          <div className="flex items-center h-20 gap-4 mt-[-18px] px-4 top-50">
            <Avatar className="w-20 h-20 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>Img User</AvatarFallback>
            </Avatar>
            <label className="absolute w-8 h-8 overflow-hidden border rounded-full cursor-pointer right-75 bottom-55" onClick={() => { goToNext(), handleOncliModify(MODIFY_PROFILE.MODIFY_AVATAR_PROFILE) }}
            >
              <img src="https://png.pngtree.com/png-vector/20190801/ourmid/pngtree-camera-icon-png-image_1638978.jpg" />
            </label>
            <span className="font-medium">Chuquangtu</span>
            <div
              onClick={() => { goToNext(), handleOncliModify(MODIFY_PROFILE.MODIFY_INFORMATION_PROFILE) }}
              className="w-6 h-6 hover:bg-[#E5E7EB] rounded-full flex-item-justify-center cursor-pointer">
              <PencilLine size={14} />
            </div>
          </div>
        </div>
        <Separator className="w-full h-1.5 mt-3 mb-3 bg-[#EBECF0]" />
        <div className="h-40 px-4">
          <span className="py-4 font-medium">Thông tin cá nhân</span>
          <div className="w-[300px flex flex-col gap-2 text-sm my-3">
            <div className="flex">
              <span className="w-[100px] text-[#7A8699]">Giới tính</span>
              <span className="text-[#2a323f]">Nam</span>
            </div>
            <div className="flex">
              <span className="w-[100px] text-[#7A8699]">Ngày sinh</span>
              <span className="text-[#2a323f]">29 tháng 07, 2004</span>
            </div>
            <div className="flex">
              <span className="w-[100px] text-[#7A8699]">Điện thoại</span>
              <span className="text-[#2a323f]">+84 867 174 570</span>
            </div>
          </div>
          <span className="text-[#7A8699] text-[13px]">Chỉ bạn bè có lưu số của bạn trong danh bạ máy xem được số này</span>
        </div>
      </div>
      <Separator className="w-full h-px bg-[#dadada]" />
      <div className="flex justify-center w-full px-2 py-2">
        <Button
          onClick={() => { goToNext(), handleOncliModify(MODIFY_PROFILE.MODIFY_INFORMATION_PROFILE) }}
          variant="outline" className="w-full border-0 shadow-none hover:bg-[#EBECF0] cursor-pointer"><PencilLine size={14} />
          Cập nhật</Button>
      </div>
    </>
  )
}

export default InformationProfile