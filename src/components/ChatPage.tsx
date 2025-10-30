import MenuBar from "./MenuBar/menuBar"
import SideBar from "./Sidebar"

function ChatPage() {
  return (
    <div className="grid min-h-screen grid-cols-app-layout max-lg:grid-cols-app-layout-collapse max-md:grid-cols-app-layout-collapses">
      {/* MenuBar */}
      <div className="sidebar bg-[#005AE0] h-screen">
        <MenuBar />
      </div>
      {/* SideBar */}
      <div className="sidebar max-md:hidden">
        <SideBar />
      </div>
      {/* ChatWindow */}
      <div className="bg-pink-300 chatwindow">
        Chat Window
      </div>
      {/* ContactInfo */}
      <div className="bg-green-300 contactinfo max-lg:hidden">
        Contact Info
      </div>
    </div>
  )
}

export default ChatPage