import { Separator } from "~/components/ui/separator"
function OptionContent() {
  return (
    <div className="py-3">
      <h2 className="px-4 font-medium">Chuquangtu</h2>
      <Separator className="my-2" />
      <ul className="cursor-pointer">
        <li className="li-custom">Nâng cấp tài khoản</li>
        <li className="li-custom">Hồ sơ của bạn</li>
        <li className="li-custom">Cài đặt</li>
      </ul>
      <Separator className="my-2" />
      <span className="cursor-pointer li-custom">Đăng xuất</span>
    </div>
  );
}

export default OptionContent