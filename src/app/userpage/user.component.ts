import { Component } from '@angular/core';

export interface clientInfo {
    userName: string;
    email: string;
    phone: string;
    company:string;
    add:string;
    country:string;
    city:string;
    about:string;
}
export const CLIENT: clientInfo[] = [{
    userName:'Tania Andrew',
    email:'taniaandrew@gmail.com',
    phone:'375 29 555-55-55',
    company:'Microsoft',
    add:'Aleja Milanović bb',
    country:'Serbia',
    city:'Lužnice',
    about:"I love reading people's summaries page especially those who are in the same industry as me. Sometimes it's much easier to find your concentration during the night",
    },
];
@Component({
    moduleId: module.id,
    selector: 'user-cmp',
    templateUrl: 'user.component.html',
    styleUrls: ['./user.component.css']
})
export class UserComponent{
    public clientData: any[];
    ngOnInit(){
        this.clientData = CLIENT.filter(client => client);
        console.log(this.clientData[0]);
    }
 }
