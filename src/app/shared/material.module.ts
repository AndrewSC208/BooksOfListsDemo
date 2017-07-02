import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material Imports:
import { MdToolbarModule, 
		 MdIconModule, 
		 MdSidenavModule, 
		 MdButtonModule,
		 MdListModule,
		 MdCardModule,
		 MdInputModule,
		 MdSelectModule,
		 MdGridListModule } from '@angular/material';

// General Components
import { HeaderComponent } from './header/header.component';

export const REUSABLE_COMPONENTS_IMPORTS = [
	MdToolbarModule, 
	MdIconModule, 
	MdSidenavModule, 
	MdButtonModule,
	MdListModule,
	MdCardModule,
	MdInputModule,
	MdSelectModule,
	MdGridListModule
]

export const REUSABLE_COMPONENTS_EXPORTS = [
	MdToolbarModule, 
	MdIconModule, 
	MdSidenavModule, 
	MdButtonModule,
	MdListModule,
	MdCardModule,
	MdInputModule,
	MdSelectModule,
	MdGridListModule,
	HeaderComponent
]

@NgModule({
	imports: REUSABLE_COMPONENTS_IMPORTS, 
	exports: REUSABLE_COMPONENTS_EXPORTS,
	declarations: [HeaderComponent]
})
export class MaterialModule {}
