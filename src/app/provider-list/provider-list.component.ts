import { Component, OnInit } from '@angular/core';
import { Provider} from '../models';
import { ProviderService } from '../provider.service';
@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent implements OnInit {

 providers : Provider[] =[
   /*{
     "name":"Nokia",
     "email":"nokia@hotmail.com",
     "adress":"usa"
   },
   {
    "name":"Samsung",
    "email":"samsung@hotmail.com",
    "adress":"korea"
   },
   {
    "name":"Toshiba",
    "email":"toshiba@hotmail.com",
    "adress":"Japon"
   }*/
 ];

 // injection de dépendence : Service Provider
 constructor(private service : ProviderService) { }

  ngOnInit(): void {

    this.service.listProviders().subscribe(
      data =>
      {
        console.log(data);
        this.providers =data["hydra:member"];
        //console.log(data["hydra:member"][0]["name"]);
      }
    );

  }

}
