import {Get, Route} from "tsoa";  
  @Route("furits")
  export class furitsController {
    @Get()
    public async getMessage(){
      return {
        message: "furits"+" PP"
      };
    }
  }