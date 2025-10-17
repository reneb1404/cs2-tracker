import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import weaponsData from "@/data/weapons.json";
import type { WeaponCategories } from "@/types/weapons";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const weapons = weaponsData as WeaponCategories;

export function Navbar() {
	return (
		<nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
			<div className="container mx-auto px-4 h-16 flex items-center justify-between">
				<Link href="/" className="flex items-center gap-2">
					<div className="w-8 h-8 bg-primary rounded flex items-center justify-center font-bold text-primary-foreground">
						CS
					</div>
					<span className="font-bold text-lg">SkinTracker</span>
				</Link>

				<div className="hidden md:flex items-center gap-6">
					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
							Pistols
							<ChevronDown className="h-4 w-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>Pistols</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{weapons.Pistols.map((weapon) => (
								<DropdownMenuItem key={weapon.id} asChild>
									<Link href={`/weapon/${weapon.id}`}>{weapon.name}</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
							Heavy
							<ChevronDown className="h-4 w-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>Heavy Weapons</DropdownMenuLabel>
							<DropdownMenuSeparator />

							<DropdownMenuSub>
								<DropdownMenuSubTrigger>SMG</DropdownMenuSubTrigger>
								<DropdownMenuSubContent>
									{weapons.Heavy.SMG.map((weapon) => (
										<DropdownMenuItem key={weapon.id} asChild>
											<Link href={`/weapon/${weapon.id}`}>{weapon.name}</Link>
										</DropdownMenuItem>
									))}
								</DropdownMenuSubContent>
							</DropdownMenuSub>

							<DropdownMenuSub>
								<DropdownMenuSubTrigger>LMG</DropdownMenuSubTrigger>
								<DropdownMenuSubContent>
									{weapons.Heavy.LMG.map((weapon) => (
										<DropdownMenuItem key={weapon.id} asChild>
											<Link href={`/weapon/${weapon.id}`}>{weapon.name}</Link>
										</DropdownMenuItem>
									))}
								</DropdownMenuSubContent>
							</DropdownMenuSub>

							<DropdownMenuSub>
								<DropdownMenuSubTrigger>Shotgun</DropdownMenuSubTrigger>
								<DropdownMenuSubContent>
									{weapons.Heavy.Shotgun.map((weapon) => (
										<DropdownMenuItem key={weapon.id} asChild>
											<Link href={`/weapon/${weapon.id}`}>{weapon.name}</Link>
										</DropdownMenuItem>
									))}
								</DropdownMenuSubContent>
							</DropdownMenuSub>
						</DropdownMenuContent>
					</DropdownMenu>

					<DropdownMenu>
						<DropdownMenuTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
							Rifles
							<ChevronDown className="h-4 w-4" />
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel>Rifles</DropdownMenuLabel>
							<DropdownMenuSeparator />
							{weapons.Rifles.map((weapon) => (
								<DropdownMenuItem key={weapon.id} asChild>
									<Link href={`/weapon/${weapon.id}`}>{weapon.name}</Link>
								</DropdownMenuItem>
							))}
						</DropdownMenuContent>
					</DropdownMenu>

					<Link
						href="/market"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						Market
					</Link>
					<Link
						href="/tracker"
						className="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						Price Tracker
					</Link>
				</div>

				<div className="flex items-center gap-3">
					<Button variant="ghost" size="sm">
						Log in
					</Button>
					<Button
						size="sm"
						className="bg-primary text-primary-foreground hover:bg-primary/90"
					>
						Sign up
					</Button>
				</div>
			</div>
		</nav>
	);
}
