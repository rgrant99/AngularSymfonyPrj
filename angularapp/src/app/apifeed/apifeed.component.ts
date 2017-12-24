import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { DataTablesModule } from 'angular-datatables';

import { DbfeedComponent } from '../dbfeed/dbfeed.component';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

declare var $;

@Component({
  selector: 'app-apifeed',
  templateUrl: './apifeed.component.html',
  styleUrls: ['./apifeed.component.css']
})
export class ApifeedComponent implements OnInit {

	apisrc: string = "http://ccscripts.com/sample.json.php";
	myDb: string = "http://localhost:8000";
	DataArray: any = [];

	constructor(private http: Http) { 
		this.loadJsonData();
		$(function (){
      		$('#apidata').DataTable();
      	});
	}

	ngOnInit() {
	
	}

	loadJsonData(){
		this.http.get(this.apisrc).map(res => res.json()).subscribe(
			data => {
				this.DataArray = data;
    	});
	}

	saveData(_data){
		
		var url = this.myDb +'/saveitems/'+
			encodeURIComponent(_data.index) + '/'+
			encodeURIComponent(_data.favoriteFruit) + '/'+
			encodeURIComponent(_data.latitude) + '/'+
			encodeURIComponent(_data.company) + '/'+
			encodeURIComponent(_data.email) + '/'+
			encodeURIComponent(_data.eyeColor) + '/'+
			encodeURIComponent(_data.address);
		
		this.http.get(url).map(res => res.json()).subscribe(
			data => {
				DbfeedComponent.updateDbFeed.next(true);
    	});
		
	}

}
