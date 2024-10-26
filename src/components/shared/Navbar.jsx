import { Root, List, Item, Link } from '@radix-ui/react-navigation-menu';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@radix-ui/react-hover-card'; // Correct HoverCard imports
import { FaMoon, FaShoppingCart } from 'react-icons/fa';
import { Button, Dialog } from '@radix-ui/themes';
import logo from '../../assets/images/Logo.svg'
import Regestraion from '../../pages/Regestraion';
import { Cross2Icon } from '@radix-ui/react-icons';
import SearchBox from './SearchBox';

export default function Navbar() {
    return (
        <>

            <Root className="flex justify-between items-center py-4 px-8 bg-white border-b border-gray-200">
                {/* Left side (Logo) */}
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-24" />
                </div>

                {/* Center Menu */}
                <List className="flex space-x-8">
                    <Item className="list-none">
                        <HoverCard>
                            <HoverCardTrigger asChild>
                                <Link href="/" className="text-subMain font-medium hover:text-red-500">All Categories</Link>
                            </HoverCardTrigger>
                            <HoverCardContent className="bg-white shadow-md p-4">
                                <div>Dropdown Content Here</div>
                            </HoverCardContent>
                        </HoverCard>
                    </Item>
                    <Item className="list-none">
                        <Link href="/electronics" className="text-gray-700 hover:text-red-500">Electronics</Link>
                    </Item>
                    <Item className="list-none">
                        <Link href="/vehicles" className="text-gray-700 hover:text-red-500">Vehicles</Link>
                    </Item>
                    <Item className="list-none">
                        <Link href="/fashion" className="text-gray-700 hover:text-red-500">Fashion & Beauty</Link>
                    </Item>
                    <Item className="list-none">
                        <Link href="/jobs" className="text-gray-700 hover:text-red-500">Jobs</Link>
                    </Item>
                </List>

                {/* Right side (Icons) */}
                <div className="flex items-center space-x-4">
                    <Button><FaMoon className="text-gray-500 hover:text-red-500 cursor-pointer" /></Button>

                    <FaShoppingCart className="text-gray-500 hover:text-red-500 cursor-pointer" />
                    <Dialog.Root>
                        <Dialog.Title> </Dialog.Title>
                        <Dialog.Trigger className='bg-white text-main'>
                            <Button> Login</Button>
                        </Dialog.Trigger>

                        <Dialog.Content maxWidth="450px">
                            <Regestraion />
                            <Dialog.Close asChild>
                                <button
                                    className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                                    aria-label="Close"
                                >
                                    <Cross2Icon />
                                </button>
                            </Dialog.Close>
                        </Dialog.Content>
                        <Dialog.Description  >

                        </Dialog.Description>
                    </Dialog.Root>

                </div>

            </Root>
            <SearchBox  />
        </>
    )
}
