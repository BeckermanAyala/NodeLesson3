export default maching(){
    public machiingList: Array<machingApi>;
    constructor(){
        this.machiingList = machiingList;
    }
    public getAll(){
        return this.machiingList;
    }
    public getById(code: number){
       return this.machiingList.find(x=>x.code==code);
    }
    public getDonation(maching :number){
        return this.machiingList.find(x=>x.code==code)?.donate
    }
    public add(maching : machingApi){
        this.machiingList.push(maching);
        this.Groups.add(maching);
    }
    public upDate(maching: machingApi){
    const index=this.machiingList.findIndex(x=>x.id==maching.id);
    this.machiingList[index]=maching;
    }
    public Delete(code: number){
        const index=this.machiingList.findIndex(x=>x.id==maching.id);
        delete.this.machiingList[index];
    }

}