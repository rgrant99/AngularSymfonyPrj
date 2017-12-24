import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

declare var $;

@Component({
  selector: 'app-dbfeed',
  templateUrl: './dbfeed.component.html',
  styleUrls: ['./dbfeed.component.css']
})
export class DbfeedComponent implements OnInit {

  DbArray: any = [];

  public static updateDbFeed: Subject<boolean> = new Subject();

  myDb: string = "http://localhost:8000";

  constructor(private http: Http) { 
  		DbfeedComponent.updateDbFeed.subscribe(res => {
			this.ngOnInit();
		});
	}

  ngOnInit() {
  	this.loadDbData();
	$(function (){
  		$('#dbdata').DataTable();
  	});
  }

  loadDbData(){
  		this.http.get(this.myDb+'/getitems').map(res => res.json()).subscribe(
			data => {
				this.DbArray = data;
    	});
  }

  removeDbData(_data){
  		this.http.get(this.myDb+'/removeitems/'+_data.id).map(res => res.json()).subscribe(
			data => {
				this.loadDbData();
    	});
  }

}
