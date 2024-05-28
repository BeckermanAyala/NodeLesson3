import donateApi from "../Api/donateApi";

 export default DonateService(){
    public donatList: Array<donateApi>;
    constructor(){
            this.donateList = new Array<donateApi>;
    }
    public getAll(){
        return this.donateList;
    }
    public getById(Id:number){
        return this.donateList.find(x=>x.Id==Id);
    }
    public add(donate :donateApi){
        this.donateList.push(donate);
    }
    public update(donate :donateApi){
        const index = this.donateList.findIndex(x=>Id==donate.Id);
        this.donateList[index]=donate;

    }
    public Delete(Id:number){
        const index = this.donateList.findIndex(x=>x.Id==Id);
       delete  this.donateList[index];

    }
 }