import {
	OnInit,
	AfterContentInit,
	Component,
	Input,
	ViewChild
} from '@angular/core';

import { OgmaService } from './services/ogma.service';

import initialGraph from '../assets/dummy-graph-data.js';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit, AfterContentInit {
	@ViewChild('ogmaContainer', { static: true })
	private container;

	constructor(private ogmaService: OgmaService) {}

	ngOnInit() {
		this.ogmaService.initConfig({
			graph: initialGraph,
			options: {
				backgroundColor: 'rgb(240, 240, 240)'
			}
		});

		// setup more Ogma stuff here, like event listeners and more
	}

	ngAfterContentInit() {
		this.ogmaService.ogma.setContainer(this.container.nativeElement);
		return this.runLayout();
	}

	public addNode(): Promise<void> {
		this.ogmaService.addNewNode();
		return this.runLayout();
	}

	public runLayout(): Promise<void> {
		return this.ogmaService.runLayout();
	}

	public countNodes(): number {
		return this.ogmaService.ogma.getNodes().size;
	}
}
