import {useState} from "react";
import './style/content.css'


export default function Root() {
  const [tickets] = useState([
    {
      trainNumber: "9765",
      departure: "15H01",
      arrival: "17H03",
      price: "199€"
    },
    {
      trainNumber: "5749",
      departure: "12H01",
      arrival: "19H03",
      price: "389€"
    },
    {
      trainNumber: "4458",
      departure: "08H39",
      arrival: "14H45",
      price: "429€"
    },
    {
      trainNumber: "9742",
      departure: "18H01",
      arrival: "22H46",
      price: "99€"
    },
    {
      trainNumber: "3645",
      departure: "14H01",
      arrival: "15H83",
      price: "74€"
    }
  ]);

  return (
      <div>
        <h1 className="center-text"> Billets: </h1>
        <table>
          <thead>
          <tr>
            <th>Train Number</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Price</th>
          </tr>
          </thead>
          <tbody>
          {tickets.map((ticket) => (
              <tr key={ticket.trainNumber}>
                <td>{ticket.trainNumber}</td>
                <td>{ticket.departure}</td>
                <td>{ticket.arrival}</td>
                <td>{ticket.price}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
  );
}

