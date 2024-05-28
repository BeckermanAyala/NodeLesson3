import {groupsApi} from "../Api"
export default Groups(){
    public  groupList : Array<groupsApi>;
    constructor(){
        this.groupList = groupList;
    }
    public getAll(){
        return this.groupList;
    }
    public getById(code: number){
        return this.groupList.find(x=>x.code==code)
    }
    public add(group : groupsApi){
        this.groupList.push(group);
    }
    public upDate(group : groupsApi){
        const index = this.groupList.findIndex(x=>code==group.code);
        this.groupList[index]=group;
    }
    public Delete(code:number){
        const index = this.groupList.findIndex(x=>x.code==code);
       delete  this.groupList[index];

    }

} 