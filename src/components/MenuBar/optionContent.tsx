import { Separator } from "~/components/ui/separator"
import ConfirmLogout from "./ConfirmLogout"
import AccountInformation from "./EditProfile/accountInformation";
function OptionContent() {
  return (
    <div className="py-3">
      <h2 className="px-4 font-medium">Chuquangtu</h2>
      <Separator className="my-2" />
      <ul className="cursor-pointer">
        <li className="li-custom">Nâng cấp tài khoản</li>
        <AccountInformation />
        <li className="li-custom">Cài đặt</li>
      </ul>
      <Separator className="my-2" />
      <ConfirmLogout />
    </div>
  );
}

export default OptionContent