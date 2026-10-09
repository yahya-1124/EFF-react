import { useState } from "react";
export default function Even(){

 const [expertsData,SetexpertData] =useState( [
    {
        id: 1,
        nom_complet: "DUPONT Jean",
        événements: [
            {
                thème: "Développement Web",
                date_debut: "2024-03-02",
                date_fin: "2024-03-15",
                description: "Introduction au développement web moderne",
                cout_journalier: 500,
                durée: 13
            },
            {
                thème: "Applications Mobiles",
                date_debut: "2024-04-01",
                date_fin: "2024-04-15",
                description: "Conception et développement d'applications mobiles",
                cout_journalier: 700,
                durée: 14
            }
        ]
    }
]
)
const [theme, setTheme] = useState("");
  const [dateDebut, setDateDebut] = useState("");
  const [dateFin, setDateFin] = useState("");
  const [cout, setCout] = useState("");
  const [expert, setExpert] = useState("");
function remplir(data){
    SetexpertData([
      setTheme(data.theme),
      setDateDebut(data.dateDebut),
      setDateFin(data.dateFin),
      setCout(data.cout),
      setExpert(data.expert)
    ])
}
return (
<div>
  <ul>
    {expertsData.map(function (item) {
      return (
        <li key={item.id} className="mb-8">
          
          <h2 className="mb-3 text-xl font-bold">
            {item.nom_complet}
          </h2>

          <table className="w-full border-collapse overflow-hidden rounded-lg shadow-lg">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="px-6 py-3 text-left">Theme</th>
                <th className="px-6 py-3 text-left">Date Debut</th>
                <th className="px-6 py-3 text-left">Date Fin</th>
                <th className="px-6 py-3 text-left">Cout journalier</th>
                <th className="px-6 py-3 text-left">Duree</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 bg-white">
              {item.événements.map(function (event) {
                return (
                  <tr
                    key={event.id}
                    className="transition duration-200 hover:bg-blue-50"
                  >
                    <td className="px-6 py-4">{event.thème}</td>
                    <td className="px-6 py-4">{event.date_debut}</td>
                    <td className="px-6 py-4">{event.date_fin}</td>
                    <td className="px-6 py-4">
                      {event.cout_journalier}
                    </td>
                    <td className="px-6 py-4">{event.durée}</td>
                    
                  </tr> 
                  
                );
                
              })}
            </tbody>
          </table>

        </li>
      );
    })}
  </ul>
  <div>
    <div>
      <h3>Formulaire de l'événement</h3>
      <form >
        <div>
          <label >Thème :</label>
          <input
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
          />
        </div>

        <div >
          <label >Date de début :</label>
          <input
            type="date"
            value={dateDebut}
            onChange={(e) => setDateDebut(e.target.value)}
          />
        </div>

        <div >
          <label >Date de fin :</label>
          <input
            type="date"
            value={dateFin}
            onChange={(e) => setDateFin(e.target.value)}
          />
        </div>

        <div>
          <label >Coût :</label>
          <input
            type="number"
            value={cout}
            onChange={(e) => setCout(e.target.value)}
          />
        </div>

        <div >
          <label>Expert :</label>
          <input
            type="text"
            value={expert}
            onChange={(e) => setExpert(e.target.value)}
          />
        </div>

       <button onClick={()=>remplir(event)}>Confirmer</button>
      </form>
    </div>
  </div>
  </div>
)
}