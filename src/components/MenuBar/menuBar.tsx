import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"
import { Contact, MessageCircleMore, Settings } from 'lucide-react'
import { Badge } from "~/components/ui/badge"
import { useState } from "react"
import clsx from "clsx"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "~/components/ui/popover"
import OptionContent from "./optionContent"

function MenuBar() {
  const [isActive, setIsActive] = useState<string>('message')
  const handleOnclickMessage = () => {
    setIsActive('message')
  }
  const handleOnclickContact = () => {
    setIsActive('contact')
  }
  return (
    <div className="flex flex-col items-center justify-between h-full">
      <div className="flex flex-col items-center justify-center py-10 gap-7">
        <Popover>
          <PopoverTrigger>
            <Avatar className="w-12 h-12 cursor-pointer">
              <AvatarImage className="object-cover object-center" src="https://github.com/shadcn.png" />
              <AvatarFallback>Img User</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent side="right" className="p-0 mx-3 my-2">
            <OptionContent />
          </PopoverContent>
        </Popover>
        <div className={clsx("button-custom", isActive === "message" && "bg-[#0043A8]", "relative")} onClick={handleOnclickMessage}>
          <Badge className="absolute top-1.5 left-5" variant="destructive">5+</Badge>
          <MessageCircleMore color="white" size={26} />
        </div>
        <div className={clsx("button-custom", isActive === "contact" && "bg-[#0043A8]")} onClick={handleOnclickContact}>
          <Contact color="white" size={26} />
        </div>
      </div>
      <div className={clsx("button-custom")}>
        < Settings color="white" size={26} />
      </div>
    </div>
  )
}

export default MenuBar