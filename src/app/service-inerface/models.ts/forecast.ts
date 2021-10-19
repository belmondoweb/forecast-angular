export interface Forecast {
   
    city?:{ name?:string,}
    dt?: number,
    main?:{
    temp?:number,
    humidity?:any,
    feels_like?:number,
    temp_min?:number,
    temp_max?:number,
    pressure?:number,
   }
   dt_txt?:any;
    
}
export class ForecastCl {
    constructor(public name?:string,
                public description?:string,
                public temp?:number,
                public dt_txt?:any,
                public feels_like?:number,
                public  humidity?:any,
                public pressure?:number,
                public temp_min?:number,
                public temp_max?:number,
                public img?:string){}
  }