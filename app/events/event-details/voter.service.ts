import { Injectable } from '@angular/core'
import { ISession } from '../shared/event.model'



@Injectable()
export class VoterService {

 

  deleteVoter(session: ISession, voterName: string) {
    session.voters = session.voters.filter(voter => voter !== voterName);

    //this.http.delete(`/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`).catch(this.handleError).subscribe();
  }

  addVoter(session: ISession, voterName: string) {
    session.voters.push(voterName);

    // let headers = new Headers({ 'Content-Type': 'application/json'});
    // let options = new RequestOptions({headers: headers});

    //let url = `/api/events/${eventId}/sessions/${session.id}/voters/${voterName}`;
    //this.http.post(url, JSON.stringify({}), options).catch(this.handleError).subscribe();
  }

  userHasVoted(session: ISession, voterName: string) {
    return session.voters.some(voter => voter === voterName);
  }


}