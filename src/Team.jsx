import { useState } from "react"

export default function Team(){
    const [team, setTeam] = useState(11);
    const handleAddTeam = ()=>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }

    const handleRemoveTeam = ()=>{
        setTeam(team - 1);
    }
    const teamStyle = {
        border: '2px solid green',
        margin: '20px',
        padding: '15px',
        borderRadius: '15px'
    }
    return(
        <div style={teamStyle}>
            <h2>Players: {team}</h2>
            <button onClick={handleAddTeam}>Add Player</button>
            <button onClick={handleRemoveTeam}>Remove Player</button>
        </div>
    )
}