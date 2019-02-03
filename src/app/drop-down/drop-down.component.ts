import { Component, OnInit } from '@angular/core';
import{ AppServiceService } from '../app-service.service';
import { Angular5Csv } from 'angular5-csv/Angular5-csv';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropDownComponent implements OnInit {

  public dropdownOptions:Array<any> = [];
  
  public label:string;
  public value:string;

  public optionsForCSV = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalseparator: '.',
    showLabels: true, 
    showTitle: true,
    useBom: true,
    noDownload: true,
    headers: ["First Name", "Last Name", "ID"]
  };

  newAtribute : any = {}

  constructor(
    public appService: AppServiceService,
    private toastr: ToastrService
    ) {

   }

  ngOnInit() {
    
    this.getOptions();
  }


  public addFieldValue(){
    this.newAtribute = {
      label:'',
      value:''
    }

    if(this.dropdownOptions.length >=0 ){
      this.dropdownOptions.push(this.newAtribute);
    }
  }

  public deleteFieldValue(index){
    this.dropdownOptions.splice(index,1);

  }

  public exportCSV(){

    new Angular5Csv(JSON.stringify(this.dropdownOptions), "My Data");
  }//end exportCSV

  public getOptions(){

    this.appService.getOptions().subscribe(
      (options)=>{
        if(options.status == 200){
          this.dropdownOptions = JSON.parse(options.data.options);
          this.toastr.success('Success!', 'DropDown Options loaded');
        }
      },
      (error)=>{
        this.toastr.error('Error!', 'Some Error Occured');
      }
    );//end subscribe
  }

   public updateOptions(){
    
    this.appService.updateOptions(this.dropdownOptions).subscribe(
      (data)=>{
        if(data.status == 200)
        this.toastr.success('Success!', 'DropDown Options Saved');
      },
      (error)=>{
        this.toastr.error('Error!', 'Some Error Occured');
      }     
    );
  }//end updateOptions */

}
