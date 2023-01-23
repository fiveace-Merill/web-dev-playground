/*
 * A program to simulate a Lottery Draw
 *
 * Lottery Class:
 *  -Price
 *  -Participants; array of Persons
 *  -Winning numbers: [ 12, 9, 31, 37, 24, 3 ]
 * Person Class:
 *  -Name
 *  -Age
 *  -User id
 *  -Ticket number: [ six random values between 1 - 49 ]
 *
*/
class Person{
  constructor(userId, tick){
    //this.name = name
    //this.age = age
    this.userId = userId
    this.ticketNo = tick
  }
  getTicketNo(){
    let user = `Id : ${this.userId} Ticket : ${this.ticketNo} \n`
    return user
  }
}

class Lottery{
  constructor(prize){
    this.prize = prize
    this.win = [12, 9, 31, 37, 24, 3]
    this.players = []
  }
  //Generate Lottery Tickets
  setTicket(digits){
    const ticket = []
    for(let i = 0; i < digits; i++){
      ticket.push(Math.floor(Math.random() * 50))
    }
    return ticket
  }

  //Intialize Lottery Players
  setPlayers(total){
    let i = 1
    while(i < total){
      this.players.push(new Person(i, this.setTicket(6)))
      i = i + 1
    }
    console.log(this.players[0].this.getTicketNo())
  }

  //Set Lottery Price
  setPrize(value){
    this.prize = value
  }

  //Get all Lottery Players
  getPlayers(){
    console.log(this.players);
  }

  //Get the Lottery winner(s)
  getWinner(){
    let winner
    for(let i = 0; i < this.players.length; i++){
      if(this.players[i].ticketNo === this.win){
        console.log(`${this.players[i]} wins ${this.prize}`)
        break
      }else{
        continue
      }
      console.log("No Winners!!")
    }
  }
}

let sportPesa = new Lottery(549000)
console.log(sportPesa.setTicket(6))
sportPesa.setPlayers()
sportPesa.getPlayers()
sportPesa.getWinner()
