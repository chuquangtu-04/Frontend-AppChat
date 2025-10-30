import { Separator } from "@radix-ui/react-separator"
import { Users } from "lucide-react"
import { Checkbox } from "~/components/ui/checkbox"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Command, CommandInput } from "~/components/ui/command"
import { DialogClose } from "@radix-ui/react-dialog"
import { Button } from "../ui/button"
import { Label } from "@radix-ui/react-label"
function CreateGroud() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="w-8 h-8 hover:bg-[#E5E7EB] rounded-[3px] cursor-pointer flex-item-justify-center">
          <Users size={20} strokeWidth={1.5} />
        </div>
      </DialogTrigger>
      <DialogContent className="overflow-hidden max-w-[410px]! min-h-[200px] py-0 pt-6 max-h-[580px] px-0 rounded-[5px]">
        <div className="h-full">
          <div className="px-4 font-semibold">Tạo nhóm</div>
          <Separator className="w-full h-px bg-[#dadada]" />
          <div className="h-full grid grid-rows-[140px_minmax(300px,1fr)_120px]">
            <div className="flex flex-col justify-center px-4">
              <div className="flex gap-4 mb-4">
                <div className="relative w-10 h-10 overflow-hidden border rounded-full cursor-pointer">
                  <input id="picture" type="file" className="hidden"
                  />
                  <label htmlFor="picture" className="absolute cursor-pointer">
                    <img src="https://png.pngtree.com/png-vector/20190801/ourmid/pngtree-camera-icon-png-image_1638978.jpg" />
                  </label>
                </div>
                <input
                  className="flex-1 border-0 focus:outline-none border-b! border-[#dadada] focus:border-[#006aff] placeholder:text-sm placeholder:text-[#7B889F]" placeholder="Nhập tên nhóm" />
              </div>
              <div>
                <Command className="border rounded-3xl hover:bg-[#F1F2F4] focus-within:border-[#006aff]">
                  <CommandInput
                    placeholder="Nhập tên, số điện thoại" />
                </Command>
              </div>
            </div>
            <div className="px-4 overflow-y-auto max-h-[300px] scrollbar-medium">
              <Separator className="w-full h-px bg-[#dadada] mb-2" />
              {
                [...Array(10)].map((_, index) => {
                  return <div key={index} className="flex items-center w-full gap-3 py-2 hover:bg-[#F1F2F4] rounded-[3px]">
                    <Checkbox id={index + ''} className="h-[18px] w-[18px] rounded-full data-[state=checked]:bg-[#0068FF] data-[state=checked]:border-[#dadada] border-[#dadada] cursor-pointer" />
                    <Label htmlFor={index + ''} className="flex items-center w-full gap-2 cursor-pointer">
                      <Avatar className="w-9 h-9">
                        <AvatarImage className="object-cover object-center" src="https://github.com/shadcn.png" />
                        <AvatarFallback>Img User</AvatarFallback>
                      </Avatar>
                      <span>Chu Quang Tú</span>
                    </Label>
                  </div>
                })
              }
            </div>
            <div className="">
              <Separator className="w-full h-px bg-[#dadada] mb-2" />
              <div className="flex justify-end gap-4 px-4 mt-3">
                <DialogClose asChild>
                  <Button className="bg-[#e5e7eb] hover:bg-[#c6cad2] text-black" size={"xl"}>Hủy</Button>
                </DialogClose>
                <Button className="bg-[#0068ff] hover:bg-[#0045ad]" size={"xll"}>Tạo nhóm</Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CreateGroud