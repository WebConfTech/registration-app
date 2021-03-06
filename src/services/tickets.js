import { inject } from 'react-injext';
import { AppAPI } from './appAPI';

@inject(AppAPI)
class Tickets {
  constructor(appAPI) {
    this._name = 'tickets';
    this._appAPI = appAPI;
  }

  getTicketById(ticketId) {
    return this._appAPI.filterTickets({ id: ticketId }, true);
  }

  searchTicketByCustomerId(customerId) {
    return this._appAPI.filterTickets({ customerId }, true);
  }

  checkInTicketById(ticketId) {
    return this._appAPI.checkInTicketById(ticketId);
  }
}

export { Tickets };
