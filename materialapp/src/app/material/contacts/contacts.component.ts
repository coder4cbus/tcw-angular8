import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] = [
    {
      id: 1,
      name: 'Duane McDuff',
      company: 'Muxo',
      state: 'MA',
      phone: '508-367-7864'
    }, {
      id: 2,
      name: 'Rachelle Ciementini',
      company: 'Jazzy',
      state: 'MO',
      phone: '314-982-6499'
    }, {
      id: 3,
      name: 'Clementina Lambrechts',
      company: 'Cogibox',
      state: 'NY',
      phone: '518-859-9548'
    }, {
      id: 4,
      name: 'Jedediah Dasent',
      company: 'Jabberstorm',
      state: 'TX',
      phone: '210-562-5974'
    }, {
      id: 5,
      name: 'Edithe Izakovitz',
      company: 'Tavu',
      state: 'MD',
      phone: '410-993-3937'
    }, {
      id: 6,
      name: 'Marcelline Gell',
      company: 'Vitz',
      state: 'CT',
      phone: '860-237-5161'
    }, {
      id: 7,
      name: 'Buckie Snaden',
      company: 'Realbuzz',
      state: 'IN',
      phone: '317-635-9563'
    }, {
      id: 8,
      name: 'Andrew Calladine',
      company: 'Gabtype',
      state: 'IL',
      phone: '773-625-6184'
    }, {
      id: 9,
      name: 'Camille Duckham',
      company: 'Skynoodle',
      state: 'VA',
      phone: '757-674-6544'
    }, {
      id: 10,
      name: 'Merrielle Stile',
      company: 'Roomm',
      state: 'MA',
      phone: '508-439-8706'
    }];

constructor() { }

ngOnInit() { }
/* contacts: Contact[] = [
  {
    id: 1,
    name: 'Duane McDuff',
    company: 'Muxo',
    state: 'MA',
    phone: '508-367-7864'
  }, {
    id: 2,
    name: 'Rachelle Ciementini',
    company: 'Jazzy',
    state: 'MO',
    phone: '314-982-6499'
  }, {
    id: 3,
    name: 'Clementina Lambrechts',
    company: 'Cogibox',
    state: 'NY',
    phone: '518-859-9548'
  }, {
    id: 4,
    name: 'Jedediah Dasent',
    company: 'Jabberstorm',
    state: 'TX',
    phone: '210-562-5974'
  }, {
    id: 5,
    name: 'Edithe Izakovitz',
    company: 'Tavu',
    state: 'MD',
    phone: '410-993-3937'
  }, {
    id: 6,
    name: 'Marcelline Gell',
    company: 'Vitz',
    state: 'CT',
    phone: '860-237-5161'
  }, {
    id: 7,
    name: 'Buckie Snaden',
    company: 'Realbuzz',
    state: 'IN',
    phone: '317-635-9563'
  }, {
    id: 8,
    name: 'Andrew Calladine',
    company: 'Gabtype',
    state: 'IL',
    phone: '773-625-6184'
  }, {
    id: 9,
    name: 'Camille Duckham',
    company: 'Skynoodle',
    state: 'VA',
    phone: '757-674-6544'
  }, {
    id: 10,
    name: 'Merrielle Stile',
    company: 'Roomm',
    state: 'MA',
    phone: '508-439-8706'
  }];
 */
onContactClick(idx) {
  let c = this.contacts[idx];

  let text = c.name + ', \n' + c.company + ', \n'
  + c.state + ', \n' + c.phone;
  // let text = ((`${c.values.name}`) + ', \n' + (`${c.values.company}`) + ', \n' + (`${c.values.state}`) + ', \n' +  (`${c.phone}`));

  alert(text);
}
/*   contacts: Contact[] = [
  {
    "id": 1,
    "name": "Duane McDuff",
    "company": "Muxo",
    "state": "MA",
    "phone": "508-367-7864"
  }, {
    "id": 2,
    "name": "Rachelle Ciementini",
    "company": "Jazzy",
    "state": "MO",
    "phone": "314-982-6499"
  }, {
    "id": 3,
    "name": "Clementina Lambrechts",
    "company": "Cogibox",
    "state": "NY",
    "phone": "518-859-9548"
  }, {
    "id": 4,
    "name": "Jedediah Dasent",
    "company": "Jabberstorm",
    "state": "TX",
    "phone": "210-562-5974"
  }, {
    "id": 5,
    "name": "Edithe Izakovitz",
    "company": "Tavu",
    "state": "MD",
    "phone": "410-993-3937"
  }, {
    "id": 6,
    "name": "Marcelline Gell",
    "company": "Vitz",
    "state": "CT",
    "phone": "860-237-5161"
  }, {
    "id": 7,
    "name": "Buckie Snaden",
    "company": "Realbuzz",
    "state": "IN",
    "phone": "317-635-9563"
  }, {
    "id": 8,
    "name": "Andrew Calladine",
    "company": "Gabtype",
    "state": "IL",
    "phone": "773-625-6184"
  }, {
    "id": 9,
    "name": "Camille Duckham",
    "company": "Skynoodle",
    "state": "VA",
    "phone": "757-674-6544"
  }, {
    "id": 10,
    "name": "Merrielle Stile",
    "company": "Roomm",
    "state": "MA",
    "phone": "508-439-8706"
  }
] */

// }
 /* contacts: Contact[] = [{
    "id": 1,
    "name": "Duane McDuff",
    "company": "Muxo",
    "state": "MA",
    "phone": "508-367-7864"
  }, {
    "id": 2,
    "name": "Rachelle Ciementini",
    "company": "Jazzy",
    "state": "MO",
    "phone": "314-982-6499"
  }, {
    "id": 3,
    "name": "Clementina Lambrechts",
    "company": "Cogibox",
    "state": "NY",
    "phone": "518-859-9548"
  }, {
    "id": 4,
    "name": "Jedediah Dasent",
    "company": "Jabberstorm",
    "state": "TX",
    "phone": "210-562-5974"
  }, {
    "id": 5,
    "name": "Edithe Izakovitz",
    "company": "Tavu",
    "state": "MD",
    "phone": "410-993-3937"
  }, {
    "id": 6,
    "name": "Marcelline Gell",
    "company": "Vitz",
    "state": "CT",
    "phone": "860-237-5161"
  }, {
    "id": 7,
    "name": "Buckie Snaden",
    "company": "Realbuzz",
    "state": "IN",
    "phone": "317-635-9563"
  }, {
    "id": 8,
    "name": "Andrew Calladine",
    "company": "Gabtype",
    "state": "IL",
    "phone": "773-625-6184"
  }, {
    "id": 9,
    "name": "Camille Duckham",
    "company": "Skynoodle",
    "state": "VA",
    "phone": "757-674-6544"
  }, {
    "id": 10,
    "name": "Merrielle Stile",
    "company": "Roomm",
    "state": "MA",
    "phone": "508-439-8706"
  }];  */
}
class Contact {
  id: number;
  name: string;
  company: string;
  state: string;
  phone: string;
}
