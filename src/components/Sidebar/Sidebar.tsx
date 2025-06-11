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
        title: "Explore Lands",
        url: "/explore-lands",
    },
    {
        title: "My Lands",
        url: "/mylands",
    },
    {
        title: "Ownership Certificates",
        url: "/ownership-certificates",
    },
    {
        title: "Transactions",
        url: "/transactions",
        children: [
            { title: "Buy Land", url: "/buy" },
            { title: "Sell Land", url: "/sell" },
        ]
    },
    {
        title: "Register Land",
        url: "/register-land",
    },
    {
        title: "Activity History",
        url: "/activity-history",
    },
    {
        title: "Verify Ownership",
        url: "/verify-ownership",
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
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {sidebarNavist.map((item, index) => (
                                    <SidebarMenuItem key={index}>
                                        
                                        {item.children && item.children.length > 0 ? (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger>
                                                    <SidebarMenuButton>
                                                        {item.title}
                                                        <ChevronDown className="ml-auto" />
                                                    </SidebarMenuButton>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent>
                                                    {item.children.map((child, childIndex) => (
                                                        <DropdownMenuItem key={childIndex} >
                                                            <SidebarMenuButton onClick={() => navigate({ to: `/user${item.url}${child.url}` })}>

                                                            {child.title}
                                                            </SidebarMenuButton>
                                                        </DropdownMenuItem>
                                                    ))}
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        ):(
                                            <SidebarMenuButton onClick={() => navigate({ to: `/user/${item.url}` })}>
                                            {item.title}
                                        </SidebarMenuButton>
                                        )}
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
                                    className="w-[--radix-popper-anchor-width]"
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