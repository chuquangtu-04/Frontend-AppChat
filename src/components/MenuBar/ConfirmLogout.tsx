import { Separator } from "@radix-ui/react-separator"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
function ConfirmLogout() {
  return (
    <Dialog>
      <DialogTrigger className="w-full">
        <span className="w-full cursor-pointer li-custom">Đăng xuất</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] overflow-hidden max-w-[380px]! min-h-[200px] py-0 pt-6 max-h-[580px] px-0 rounded-[5px]">
        <DialogHeader>
          <DialogTitle className="px-6">
            Xác nhận
          </DialogTitle>
          <Separator className="w-full h-px bg-[#dadada]" />
          <DialogDescription className="px-6">
            Bạn có muốn đăng xuất khỏi ứng dụng?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="px-6">
          <DialogClose asChild>
            <Button className="bg-[#e5e7eb] hover:bg-[#c6cad2] text-black" size={"xl"}>Hủy</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button className="bg-[#0068ff] hover:bg-[#0045ad]" size={"xll"}>Đăng xuất</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ConfirmLogout