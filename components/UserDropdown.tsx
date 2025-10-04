'use client'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import { LogOut } from "lucide-react"
import Navitems from "./Navitems"

const UserDropdown = () => {

    const router = useRouter()

    const handelSignout = async () => {
        router.push('/Signin')
    }
    const user = { name: 'Mohamed Hossam', email: 'Mohossam708@gmail.com' }
    return (
        <DropdownMenu >
            <DropdownMenuTrigger asChild>

                <Button variant={"ghost"} className="flex items-center gap-3 text-gray-400 hover:text-yellow-400">
                    <Avatar className="w-8 h-8 cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback className="bg-yellow-300 text-yellow-900  text-sm font-bold" >
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gray-400">{user.name}</span>
                    </div>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="text-gray-400">
                <DropdownMenuLabel>
                    <div className="flex relative items-center gap-3 py-2">
                        <Avatar className="w-10 h-10">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback className="bg-yellow-300 text-yellow-900  text-sm font-bold" >
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className=" flex flex-col ">
                            <span className="text-base font-medium text-gray-400">{user.name}</span>
                            <span className="text-base font-medium text-gray-400">{user.email}</span>

                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-600" />
                <DropdownMenuItem onClick={handelSignout} className="text-gray-100 text-md font-medium focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer ">
                    <LogOut className="h-4 w-4 mr-2 hidden sm:block" />
                    Logout
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-600 hidden sm:block" />
                <nav className="sm:hidden mt-1 ms-2">
                    <Navitems />

                </nav>



            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default UserDropdown
