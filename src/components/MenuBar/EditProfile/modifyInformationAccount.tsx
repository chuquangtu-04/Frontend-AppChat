import { Button } from "~/components/ui/button"

type TypefGotoEdit = {
  goToEditInfoMain: () => void,
  handleOncliModify: (target: string) => void
}
const MODIFY_PROFILE = {
  INFORMATION_PROFILE: 'information_profile',
  MODIFY_INFORMATION_PROFILE: 'modify_information_profile',
  MODIFY_AVATAR_PROFILE: 'modify_avatat_profile'
}

function ModifyInformationAccount({ goToEditInfoMain, handleOncliModify }: TypefGotoEdit) {
  return (
    <div className="px-4 mt-3">
      <Button
        variant="ghost"
        className="p-0 mb-3 text-sm text-blue-500"
        onClick={() => { goToEditInfoMain(), handleOncliModify(MODIFY_PROFILE.INFORMATION_PROFILE) }}
      >
        ← Quay lại
      </Button>

      <form className="flex flex-col gap-3">
        <label className="text-sm font-medium">Tên hiển thị</label>
        <input
          className="p-2 text-sm border rounded-md"
          defaultValue="Chuquangtu"
        />

        <label className="mt-2 text-sm font-medium">Giới tính</label>
        <div className="flex gap-4 text-sm">
          <label className="flex items-center gap-1">
            <input type="radio" name="gender" defaultChecked /> Nam
          </label>
          <label className="flex items-center gap-1">
            <input type="radio" name="gender" /> Nữ
          </label>
        </div>

        <label className="mt-2 text-sm font-medium">Ngày sinh</label>
        <div className="flex gap-2">
          <select className="w-1/3 p-2 text-sm border rounded-md">
            <option>29</option>
          </select>
          <select className="w-1/3 p-2 text-sm border rounded-md">
            <option>07</option>
          </select>
          <select className="w-1/3 p-2 text-sm border rounded-md">
            <option>2004</option>
          </select>
        </div>

        <div className="flex justify-end gap-2 mt-4">
          <Button
            variant="outline"
          // onClick={() => setIsEditing(false)}
          >
            Hủy
          </Button>
          <Button type="submit">Cập nhật</Button>
        </div>
      </form>
    </div>
  )
}

export default ModifyInformationAccount