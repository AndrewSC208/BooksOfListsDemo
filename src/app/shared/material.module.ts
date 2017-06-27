import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdToolbarModule, 
		 MdIconModule, 
		 MdSidenavModule, 
		 MdButtonModule,
		 MdListModule,
		 MdCardModule,
		 MdInputModule,
		 MdSelectModule } from '@angular/material';
		 
import { HeaderComponent } from './header/header.component';

export const MATERIAL_COMPONENTS = [
	MdToolbarModule, 
	MdIconModule, 
	MdSidenavModule, 
	MdButtonModule,
	MdListModule,
	MdCardModule,
	MdInputModule,
	MdSelectModule
]

@NgModule({
	imports: MATERIAL_COMPONENTS,
	exports: MATERIAL_COMPONENTS,
	declarations: [HeaderComponent]
})
export class MaterialModule {}
