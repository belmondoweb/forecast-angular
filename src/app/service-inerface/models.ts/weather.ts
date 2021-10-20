


  export class Weather {
    constructor(public name:string,
                public temp_min:any,
                public temp_max:any,
                public description: string,
                public main: IMain[], // Geting more info
                public sys?: ISys[], // will not use ? or :will
                public icon?:string,
                // public forecast?:Forecast[
                  
                // ] | any,
                // public pressure?: any,
                // public humidity?:any,
              
                ){}
  }

  // ****** From main obj array *********///
  export interface IMain {
    temp: number;
    dt_txt:number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
  }
  interface ISys {
    dt_txt:number;
    type: number;
    country: string;
    id: number;
    sunrise: any;
    sunset: any;
    message: number;
  }



  // export interface Forecast {
  //     name:string,
  //     dt: number,
  //     main:{
  //     temp:number,
  //     humidity:any,
  //     feels_like:number,
  //     temp_min:number,
  //     temp_max:number,
  //     pressure:number,
  //    }
  //    dt_txt:any;
  // }

