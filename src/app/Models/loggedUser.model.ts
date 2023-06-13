export class LoggedInUserModel{
    constructor(public userId:number=0,
                public password:string="",
                public token:string="",
                public role:string="")
                {

    }
}