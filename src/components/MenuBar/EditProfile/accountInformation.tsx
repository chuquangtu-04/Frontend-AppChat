import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { useState } from "react"
import ModifyImageAccount from "./modifyImageAccount"
import ModifyInformationAccount from "./modifyInformationAccount"
import InformationProfile from "./informationProfile"
const MODIFY_PROFILE = {
  INFORMATION_PROFILE: 'information_profile',
  MODIFY_INFORMATION_PROFILE: 'modify_information_profile',
  MODIFY_AVATAR_PROFILE: 'modify_avatat_profile'
}

function AccountInformation() {
  const [api, setApi] = useState<any>(null)
  const [isModify, setIsModify] = useState<string>(MODIFY_PROFILE.INFORMATION_PROFILE)
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToEditInfoMain = () => {
    if (api) api.scrollTo(0)
    setCurrentIndex(0)
  }
  const goToNext = () => {
    if (api) api.scrollTo(1)
    setCurrentIndex(1)
  }
  const handleOncliModify = (target: string) => {
    setIsModify(target)
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <li className="w-full li-custom">Hồ sơ của bạn</li>
      </DialogTrigger>
      <Carousel setApi={setApi}>
        <DialogContent className="sm:max-w-[400px] rounded-[5px] overflow-hidden p-0">
          <DialogHeader className="px-4 pt-3">
            <DialogTitle>Thông tin tài khoản</DialogTitle>
          </DialogHeader>
          <CarouselContent>
            <CarouselItem>
              <InformationProfile goToNext={goToNext} handleOncliModify={handleOncliModify} />
            </CarouselItem>
            {
              isModify && (
                <CarouselItem>
                  {
                    isModify === MODIFY_PROFILE.MODIFY_INFORMATION_PROFILE
                      ?
                      (<><ModifyInformationAccount goToEditInfoMain={goToEditInfoMain} handleOncliModify={handleOncliModify} /></>)
                      :
                      isModify === MODIFY_PROFILE.MODIFY_AVATAR_PROFILE ?
                        (<><ModifyImageAccount goToEditInfoMain={goToEditInfoMain} handleOncliModify={handleOncliModify} /></>)
                        : null
                  }
                </CarouselItem>
              )
            }
          </CarouselContent>
        </DialogContent>
      </Carousel>
    </Dialog >
  )
}

export default AccountInformation
