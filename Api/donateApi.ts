import { Router, Request, Response } from "express";
import _ from "lodash";
import DonateService from '../Services/donate';
export default class donateApi{
    public router:Router;
    constructor(private service: DonateService){
        this.router = Router();
    }
    public setRouter(){
        this.router.get('/', (req: Request, res: Response) => {
            console.log("get all donations");
            res.send(this.service.getAll());
        });
    }
      this.router.get('/:id',)
}