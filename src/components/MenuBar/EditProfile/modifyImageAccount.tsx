import { Button } from "~/components/ui/button";
type TypefGotoEdit = {
  goToEditInfoMain: () => void,
  handleOncliModify: (target: string) => void
}
const MODIFY_PROFILE = {
  INFORMATION_PROFILE: 'information_profile',
  MODIFY_INFORMATION_PROFILE: 'modify_information_profile',
  MODIFY_AVATAR_PROFILE: 'modify_avatat_profile'
}
function ModifyImageAccount({ goToEditInfoMain, handleOncliModify }: TypefGotoEdit) {
  return (
    <div className="px-4 mt-3">
      <Button
        variant="ghost"
        className="p-0 mb-3 text-sm text-blue-500"
        onClick={() => { goToEditInfoMain(), handleOncliModify(MODIFY_PROFILE.INFORMATION_PROFILE) }}
      >
        ← Quay lại
      </Button>
      <h1>
        Modify Image Account
      </h1>
    </div>
  )
}

export default ModifyImageAccount;