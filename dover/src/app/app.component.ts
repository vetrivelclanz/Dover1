import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dover';
  myimage:string="assets/image/dover.png";
  myimage1:string="assets/image/border.png";
  
  DualTempering:boolean=false;
  ChemicalDispenser:boolean=false;
  UtensilBasket:boolean=false;
  SpecialCrating:boolean=false;

  use:any;
  private url="http://localhost:3000/Dover";
  
  constructor( private http:HttpClient ){
    this.use={
      powersoakorientation:'',
      Rims:'',
      BackSplash:'',
      EndSplashRight:'',
      EndSplashLeft:'',
      UnitWidth:'',
      UnitLength:'',
      DeckHeight:'',
  
      //    Rectangle
      PSXXX:'',
      Voltage:'',
      GenX:'',
      Heater:'',
      CrossRails:'',
      FootType:'',
      DrainBallValue:'',
      DryingRack:'',
  
      DualTempering:true,
      ChemicalDispenser:true,
      UtensilBasket:true,
      SpecialCrating:true,
    
      //              
      //  
      SoilDrainBoardLength:'',
      
      DisposerUnit:true,
      ScrapperUnit:true,
  
      WashSinkLength:'',
      WashSinkWidth:'',
      WashSinkDepth:'',
      SheetPanRack:'',
      AWI:'',
      
      RinseSinkLength:'',
      RinseSinkWidth:'',
      RinseSinkDepth:'',
      RinseSinkOverFlow:true,
  
      SanitizeSinkOverFlow:true,
      SanitizeSinkLength:'',
      SanitizeSinkWidth:'',
      SanitizeSinkDepth:'',
  
  
  
      CleanDrainBoardLength:'',
  
      ScrapperUnitLength:'',
      ScrapperUnitWidth:'',
      ScrapperUnitDepth:'',
      DrainBoard:'',
      DrainType:'',
  
      DisposerUnitLength:'',
      DisposerUnitWidth:'',
      DisposerUnitDepth:'',
      DisposerUnitDrainBoard:'',
      DisposerDrain:'',
      WaterInlet:'',
      
     
      //PreRinseFaucets
      Type:'',
      Quantity:'',
    }

  }

 form = new FormGroup({
    powersoakorientation: new FormControl(),
    Rims: new FormControl(),
    BackSplash: new FormControl(),
    EndSplashRight: new FormControl(),
    EndSplashLeft:new FormControl(),
    UnitWidth:new FormControl(),
    UnitLength:new FormControl(),
    DeckHeight:new FormControl(),

    //    Rectangle
    PSXXX:new FormControl(),
    Voltage:new FormControl(),
    GenX:new FormControl(),
    Heater:new FormControl(),
    CrossRails:new FormControl(),
    FootType:new FormControl(),
    DrainBallValue:new FormControl(),
    DryingRack:new FormControl(),

    DualTempering:new FormControl(),
    ChemicalDispenser:new FormControl(),
    UtensilBasket:new FormControl(),
    SpecialCrating:new FormControl(),
  
    //              
    //  
    SoilDrainBoardLength:new FormControl(),
    
    DisposerUnit:new FormControl(),
    ScrapperUnit:new FormControl(),

    WashSinkLength:new FormControl(),
    WashSinkWidth:new FormControl(),
    WashSinkDepth:new FormControl(),
    SheetPanRack:new FormControl(),
    AWI:new FormControl(),
    
    RinseSinkLength:new FormControl(),
    RinseSinkWidth:new FormControl(),
    RinseSinkDepth:new FormControl(),
    RinseSinkOverFlow:new FormControl(),

    SanitizeSinkOverFlow:new FormControl(),
    SanitizeSinkLength:new FormControl(),
    SanitizeSinkWidth:new FormControl(),
    SanitizeSinkDepth:new FormControl(),



    CleanDrainBoardLength:new FormControl(),

    ScrapperUnitLength:new FormControl(),
    ScrapperUnitWidth:new FormControl(),
    ScrapperUnitDepth:new FormControl(),
    DrainBoard:new FormControl(),
    DrainType:new FormControl(),

    DisposerUnitLength:new FormControl(),
    DisposerUnitWidth:new FormControl(),
    DisposerUnitDepth:new FormControl(),
    DisposerUnitDrainBoard:new FormControl(),
    DisposerDrain:new FormControl(),
    WaterInlet:new FormControl(),
    
   
    //PreRinseFaucets
    Type:new FormControl(),
    Quantity:new FormControl(),
  });

  

  /*submit(){
    console.log(this.form.value);
  }*/

  id:any='SoilDrainBoard';
  tabChange(ids:any){
    this.id=ids;
 console.log(this.id)
  }

  submit(){
    this.http.post(this.url,this.use).subscribe((result)=>{
      alert("value saved successfully");
      console.log(this.use);
    });
  }
}
