export class RaiseTicketModel
{
   constructor(     
    public  ticketId :number=0,
    public  ticketTitle : string="",
    public  ticketDescription : string="",
    public  ticketRaisedDate : Date=new Date(0),
    public  ticketStatus : string="",
    public  internId : number=0 )
   {

   }
}
