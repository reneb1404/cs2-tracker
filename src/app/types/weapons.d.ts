export interface Weapon {
	id: string;
	name: string;
}

export interface WeaponCategories {
	Pistols: Weapon[];
	Heavy: {
		SMG: Weapon[];
		LMG: Weapon[];
		Shotgun: Weapon[];
	};
	Rifles: Weapon[];
}
