import { usePathname } from 'next/navigation';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { links } from './Navbar';
import Link from 'next/link';
import { SquareMenu } from 'lucide-react';

export function MobileMenu() {
	const pathname = usePathname();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<SquareMenu size={30} />
			</DropdownMenuTrigger>
			<DropdownMenuContent className=''>
				{links.map((link, idx) => {
					return (
						<div key={idx}>
							{pathname === link.href ? (
								<DropdownMenuItem>
									<Link
										href={link.href}
										className=' text-lg  font-semibold text-primary hover:text-gray-600'>
										{link.name}
									</Link>
								</DropdownMenuItem>
							) : (
								<DropdownMenuItem>
									<Link
										href={link.href}
										className=' text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary'>
										{link.name}
									</Link>
								</DropdownMenuItem>
							)}
						</div>
					);
				})}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
