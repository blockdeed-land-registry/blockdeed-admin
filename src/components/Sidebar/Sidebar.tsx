import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem
} from '../ui/sidebar';
import { User2 } from 'lucide-react';
import { ChevronUp, ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { useNavigate } from '@tanstack/react-router';
const sidebarNavist = [
    {
        title:"Dashboard",
        url:"/dashboard",
    },
    {
        title:"User Management",
        url:"/user-management",
    },
    {
        title:"Documents",
        url:"/documents",
    },
    {
        title:"Land Records",
        url:"/land-records",
    },
    {
        title:"Requests Management",
        url:"/requests-management",
    },
    {
        title:"Tax & Fees",
        url:"/taxfee-management",
    }
];

const SidebarNavigation = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Sidebar>
                <SidebarHeader>
                    <h1 className="text-2xl font-bold">BlockDeed</h1>
                </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Admin Navigation</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {sidebarNavist.map((item, index) => (
                                    <SidebarMenuItem key={index}>
                                        
                                            <SidebarMenuButton onClick={() => navigate({ to: `/admin/${item.url}` })}>
                                            <p className='pl-2'>{item.title}</p>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
                <SidebarFooter>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <SidebarMenuButton>
                                        <User2 /> Username
                                        <ChevronUp className="ml-auto" />
                                    </SidebarMenuButton>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    side="top"
                                    className="w-full max-w-xs"
                                    align="end"
                                >
                                    <DropdownMenuItem>
                                        <span>Account</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Billing</span>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <span>Sign out</span>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarFooter>
            </Sidebar>
        </div>
    )
}

export default SidebarNavigation