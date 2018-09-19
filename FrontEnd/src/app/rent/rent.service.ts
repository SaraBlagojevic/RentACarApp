import { Injectable } from "@angular/core"
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Rent} from "./rent.model";
import {AppUrl} from "../appservice/AppUrl.services"

@Injectable()
export class HttpRentService{
    
    constructor (private http: Http,private appUrl:AppUrl){
    }

    getRents(): Observable<any> {
        return this.http.get(this.appUrl.RootLocation+"rent/rents").map(this.extractData);        
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || [];
    }
    getImageUrlForRent(id:number):Observable<Response>{
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.get(this.appUrl.RootLocation+'rent/rent/image/'+id , opts);
    }


    getRent(Id:number){
        return this.http.get(this.appUrl.RootLocation+'rent/rent/'+Id).map(this.extractData);
    }

    postRent(rent: Rent): Observable<any>  {
        
        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.post(this.appUrl.RootLocation+'rent/rent', rent , opts);
    }

    deleteRent(Id:number){
        return this.http.delete(this.appUrl.RootLocation + 'rent/rent/'+ Id);
    }

    editRoom(rent:Rent){

        const headers: Headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-type', 'application/json');

        const opts: RequestOptions = new RequestOptions();
        opts.headers = headers;

        return this.http.put(this.appUrl.RootLocation+'room/room/'+rent.Id, rent , opts);
    }
}